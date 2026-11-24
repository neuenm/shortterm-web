import sharp from "sharp";
import { getListingPreview, SHARE_IMAGE_SIZE } from "@/lib/listing";

// A room's cover as its link-preview image (listingShareImagePath in lib/listing.ts): always a
// 1200×630 JPEG, whatever the format and shape of the stored photo. It lives outside [locale] and
// ends in .jpg, so the locale proxy leaves it alone (proxy.ts skips paths with a dot).

const EXTENSION = ".jpg";
const LISTING_PHOTOS_PATH = "/storage/v1/object/public/listing-photos/";
const PHOTO_FETCH_TIMEOUT_MS = 5000;
// A day on phones and the CDN. The URL changes with the cover, so this only bounds how long a
// closed room's photo can still be served from cache.
const CACHE_CONTROL = "public, max-age=86400, s-maxage=86400";

// The server only ever downloads from the project's own listing-photos bucket.
function isListingPhotoUrl(value: string): boolean {
  try {
    const url = new URL(value);
    const supabase = new URL(process.env.NEXT_PUBLIC_SUPABASE_URL!);
    return url.origin === supabase.origin && url.pathname.startsWith(LISTING_PHOTOS_PATH);
  } catch {
    return false;
  }
}

export async function GET(_request: Request, ctx: RouteContext<"/og/listing/[file]">) {
  const { file } = await ctx.params;
  const id = file.endsWith(EXTENSION) ? file.slice(0, -EXTENSION.length) : null;
  // Same lookup as the page (it validates the id): a room that's gone has no image either.
  const listing = id ? await getListingPreview(id) : null;
  const cover = listing?.cover_photo_url;
  if (!cover || !isListingPhotoUrl(cover)) {
    return new Response(null, { status: 404 });
  }

  try {
    const photo = await fetch(cover, { signal: AbortSignal.timeout(PHOTO_FETCH_TIMEOUT_MS) });
    if (!photo.ok) {
      return new Response(null, { status: 502 });
    }
    const jpeg = await sharp(await photo.arrayBuffer())
      .rotate()
      .resize(SHARE_IMAGE_SIZE.width, SHARE_IMAGE_SIZE.height, { fit: "cover" })
      .jpeg({ quality: 80, mozjpeg: true })
      .toBuffer();
    return new Response(new Uint8Array(jpeg), {
      headers: { "Content-Type": "image/jpeg", "Cache-Control": CACHE_CONTROL },
    });
  } catch {
    // A slow or unreadable photo: the preview goes out with its text alone.
    return new Response(null, { status: 502 });
  }
}
