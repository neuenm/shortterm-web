import { cache } from "react";
import { supabase } from "@/lib/supabase";

// The area pages (/rooms/<city> and /rooms/<city>/<suburb>) read three RPCs from the app's
// supabase/migrations/20261115210000_area_pages.sql. Each room returns a subset of what the public
// listing preview already shows; Privacy 6.3 and Terms 5.5 (lib/legal/) list it.

// One area: a city (suburb_slug null) or one suburb of a city. Prices are per week, over the
// area's active rooms; null without rooms.
export type RoomArea = {
  city_slug: string;
  city_name: string;
  state: string;
  suburb_slug: string | null;
  suburb_name: string | null;
  active_count: number;
  min_price: number | null;
  median_price: number | null;
  max_price: number | null;
  last_listed_at: string | null;
};

export type AreaListingPreview = {
  id: string;
  title: string;
  suburb_name: string;
  start_date: string;
  end_date: string | null; // null for a long_term room
  price_per_week: number | null;
  cover_photo_url: string | null;
  created_at: string;
  // Every active room of the area, of which at most 24 come back. Same value on every row.
  total_count: number;
};

// An area page goes into search results (and the sitemap) from this many rooms on: an area with one
// or two rooms is a thin page, and a site full of them gets ranked down as a whole. Below it the page
// still works for anyone following a link, with noindex. A city with its own written content
// (lib/cities) is indexed regardless.
export const AREA_INDEX_MIN_ROOMS = 3;

// Area addresses are lowercase words joined by dashes (the RPC's private.area_slug). Anything else
// can't be an area, so it gets the not-found page without spending a Supabase call.
const AREA_SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isAreaSlug(value: string): boolean {
  return value.length <= 80 && AREA_SLUG_PATTERN.test(value);
}

// PostgREST's "function not found": the migration isn't applied yet. The pages then render what
// they can without the database (a city with written content, the guides) instead of failing.
const FUNCTION_NOT_FOUND = "PGRST202";

class AreaRpcError extends Error {}

async function callRpc<T>(name: string, args: Record<string, unknown>): Promise<T[] | null> {
  const { data, error } = await supabase.rpc(name, args);
  if (error) {
    if (error.code === FUNCTION_NOT_FOUND) return null;
    // Anything else is a real failure: thrown, so the page errors (and a cached version keeps being
    // served) instead of answering "no rooms" or 404 to a search engine.
    throw new AreaRpcError(`${name}: ${error.message}`);
  }
  return (data ?? []) as T[];
}

// Every city (also without rooms) and every suburb with at least one room. Null before the
// migration is applied.
export const getRoomAreas = cache(async (): Promise<RoomArea[] | null> => {
  return callRpc<RoomArea>("get_room_areas", {});
});

// undefined: no such area (404). null: the migration isn't applied yet.
export const getRoomArea = cache(
  async (citySlug: string, suburbSlug?: string): Promise<RoomArea | null | undefined> => {
    if (!isAreaSlug(citySlug) || (suburbSlug !== undefined && !isAreaSlug(suburbSlug))) {
      return undefined;
    }
    const rows = await callRpc<RoomArea>("get_room_area", {
      p_city_slug: citySlug,
      p_suburb_slug: suburbSlug ?? null,
    });
    if (rows === null) return null;
    return rows[0];
  },
);

// Up to 24 rooms of the area, newest first. Empty before the migration is applied.
export const getAreaListingPreviews = cache(
  async (citySlug: string, suburbSlug?: string): Promise<AreaListingPreview[]> => {
    const rows = await callRpc<AreaListingPreview>("get_area_listing_previews", {
      p_city_slug: citySlug,
      p_suburb_slug: suburbSlug ?? null,
    });
    return rows ?? [];
  },
);

export function areaHref(citySlug: string, suburbSlug?: string | null): string {
  return suburbSlug ? `/rooms/${citySlug}/${suburbSlug}` : `/rooms/${citySlug}`;
}
