import { createClient } from "@supabase/supabase-js";

// Server-only client using the anon key. Safe to expose: this key only has
// access to what RLS + the single whitelisted get_listing_preview RPC grant it.
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
