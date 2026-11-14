import { cache } from "react";
import { supabase } from "@/lib/supabase";

// The exact (and only) shape this RPC returns — matches the mobile app's
// supabase/migrations/20261110130000_listing_has_parking.sql exactly.
// Do not select/assume any other listing field: exact_address, latitude/
// longitude, host info, description (house rules included), bond_amount and the
// household breakdown are all intentionally NOT exposed to anonymous visitors.
// Anything added here also goes into Privacy 6.3 and Terms 5.5 (lib/legal/),
// which list exactly what this page shows.
export type ListingPreview = {
  id: string;
  title: string;
  location_text: string;
  start_date: string; // ISO date, e.g. "2026-09-01"
  // Null for a long_term listing (open-ended) — the RPC doesn't return stay_type,
  // but the app's listings_date_range_check ties the two together.
  end_date: string | null;
  bedrooms: number;
  bathrooms: number | null;
  price_per_week: number | null;
  price_per_week_couples: number | null;
  primary_language: string | null;
  accepts_couples: boolean | null;
  has_private_bathroom: boolean | null;
  gender_preference: string | null;
  cover_photo_url: string | null;
  status: "active" | "paused";
  // Teaser fields from 20261109100000. Optional (undefined) until that migration is applied,
  // so the page falls back to its generic copy against the previous RPC instead of breaking.
  photo_count?: number;
  household_size?: number | null; // host included, like the app's "Aquí viven N personas"
  bills_included?: boolean | null;
  created_at?: string;
  // Off-street parking for the guest (20261110130000). Optional like the teaser fields: until
  // that migration is applied the RPC doesn't return it and the page just skips the cell.
  has_parking?: boolean | null;
};

// The app's NEW_LISTING_WINDOW_DAYS / isNewListing (src/lib/listings.ts).
const NEW_LISTING_WINDOW_DAYS = 3;

export function isNewListing(createdAt: string): boolean {
  return Date.now() - new Date(createdAt).getTime() < NEW_LISTING_WINDOW_DAYS * 24 * 60 * 60 * 1000;
}

// Listing ids are UUIDs. Anything else (a bot walking random URLs, a mangled shared link) can't
// match a listing, so it gets the not-found page without spending a Supabase call.
const LISTING_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

// cache(): generateMetadata and the page both ask for the same listing in one request.
export const getListingPreview = cache(
  async (id: string): Promise<ListingPreview | null> => {
    if (!LISTING_ID_PATTERN.test(id)) return null;
    const { data, error } = await supabase
      .rpc("get_listing_preview", { p_listing_id: id })
      .maybeSingle();
    if (error || !data) return null;
    return data as ListingPreview;
  },
);
