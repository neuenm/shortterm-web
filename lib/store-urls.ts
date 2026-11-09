import type { Platform } from "@/lib/platform";

// TODO: replace with the real App Store / Play Store listing URLs once the app is published.
export const STORE_URLS = {
  ios: null as string | null,
  android: null as string | null,
};

// TODO: the numeric App Store id (apps.apple.com/app/id<ID>) once published — turns on Safari's
// Smart App Banner on listing pages.
export const APP_STORE_ID: string | null = null;

export function storeUrlFor(platform: Platform): string | null {
  return platform === "other" ? null : STORE_URLS[platform];
}
