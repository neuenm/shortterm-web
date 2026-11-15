import type { Platform } from "@/lib/platform";

// TODO: replace with the real App Store / Play Store listing URLs once the app is published.
export const STORE_URLS = {
  ios: null as string | null,
  android: null as string | null,
};

// TODO: the numeric App Store id (apps.apple.com/app/id<ID>) once published — turns on Safari's
// Smart App Banner on listing pages.
export const APP_STORE_ID: string | null = null;

// The key the app reads the listing id from in the install referrer — the app's
// INSTALL_REFERRER_LISTING_PARAM (src/lib/deep-links.ts). Change it in both projects at once.
const INSTALL_REFERRER_LISTING_PARAM = "listing_id";

// Where a Play Store link was tapped: the `utm_medium` of its referrer, which the Play Console's
// acquisition reports break installs down by.
export type StoreLinkMedium = "listing_page" | "area_page" | "guide";

// The Play Store link for this page's visitor. With a listing, Google Play hands the `referrer`
// parameter back to the app after the install (Install Referrer API), so the app opens that
// listing once sign-up is done instead of an empty Home. Without one (an area page, a guide) the
// referrer only carries the utm_* keys, which the app ignores. The App Store can't pass anything
// to the app, so iOS links stay as they are. The home page passes neither and gets the bare link.
export function androidStoreUrl(listingId?: string, medium?: StoreLinkMedium): string | null {
  const base = STORE_URLS.android;
  if (!base || (!listingId && !medium)) return base;
  const url = new URL(base);
  const referrer = [`utm_source=shortterm_web`, `utm_medium=${medium ?? "listing_page"}`];
  if (listingId) referrer.push(`${INSTALL_REFERRER_LISTING_PARAM}=${listingId}`);
  url.searchParams.set("referrer", referrer.join("&"));
  return url.toString();
}

export function storeUrlFor(platform: Platform, listingId?: string): string | null {
  if (platform === "other") return null;
  return platform === "android" ? androidStoreUrl(listingId) : STORE_URLS.ios;
}
