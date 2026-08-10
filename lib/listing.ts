import { supabase } from "@/lib/supabase";

// The exact (and only) shape this RPC returns — matches the mobile app's
// supabase/migrations/20260805130000_listing_public_preview.sql exactly.
// Do not select/assume any other listing field: exact_address, latitude/
// longitude, host info, description, house_rules, and bond_amount are all
// intentionally NOT exposed to anonymous visitors.
export type ListingPreview = {
  id: string;
  title: string;
  location_text: string;
  start_date: string; // ISO date, e.g. "2026-09-01"
  end_date: string;
  bedrooms: number;
  bathrooms: number | null;
  max_guests: number;
  price_per_week: number | null;
  price_per_week_couples: number | null;
  primary_language: string | null;
  accepts_couples: boolean | null;
  has_private_bathroom: boolean | null;
  gender_preference: string | null;
  cover_photo_url: string | null;
};

export async function getListingPreview(id: string): Promise<ListingPreview | null> {
  const { data, error } = await supabase
    .rpc("get_listing_preview", { p_listing_id: id })
    .maybeSingle();
  if (error || !data) return null;
  return data as ListingPreview;
}
