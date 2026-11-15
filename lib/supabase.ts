import { createClient } from "@supabase/supabase-js";

// Server-only client using the anon key. Safe to expose: this key only has
// access to what RLS + the whitelisted RPCs grant it (get_listing_preview,
// get_nearby_listing_previews and the area pages' get_room_areas, get_room_area and
// get_area_listing_previews).
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
