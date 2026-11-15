import type { Metadata } from "next";
import { getPathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

// Same host the app shares links on (its src/constants/links.ts WEB_BASE_URL) — the apex
// domain 308-redirects here, so canonical URLs, og:url and the sitemap must not point at it.
export const WEB_BASE_URL = "https://www.shortterm-app.com";

export type Locale = (typeof routing.locales)[number];

// The path of a page in one language: "/rooms/brisbane" (English, no prefix) or
// "/es/rooms/brisbane". Pages only render for a valid locale (the layout 404s anything else), so
// the params' plain string is one of routing.locales here.
export async function localizedPath(locale: string, href: string): Promise<string> {
  return getPathname({ locale: locale as Locale, href });
}

export async function absoluteUrl(locale: string, href: string): Promise<string> {
  return `${WEB_BASE_URL}${await localizedPath(locale, href)}`;
}

// The page's URL in every language, plus x-default (English, unprefixed: the one Google shows to
// anyone whose language isn't listed). Every page sets this, so search engines treat the Spanish
// and English versions as translations of each other rather than duplicates.
export async function languageAlternates(href: string): Promise<Record<string, string>> {
  const entries = await Promise.all(
    routing.locales.map(async (locale) => [locale, await absoluteUrl(locale, href)] as const),
  );
  const languages: Record<string, string> = Object.fromEntries(entries);
  languages["x-default"] = languages[routing.defaultLocale];
  return languages;
}

// `alternates` for a page's metadata: its own canonical URL and the language versions.
export async function pageAlternates(
  locale: string,
  href: string,
): Promise<NonNullable<Metadata["alternates"]>> {
  return {
    canonical: await absoluteUrl(locale, href),
    languages: await languageAlternates(href),
  };
}

// What every page that shows listing photos asks of search engines: a room's photos are the
// inside of someone's home, so they stay out of image search, also after the listing closes.
export const NO_IMAGE_INDEX = { noimageindex: true } as const;

// <script type="application/ld+json"> content. `<` is escaped so a title can't close the tag.
export function jsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
