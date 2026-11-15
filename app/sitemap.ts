import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { AREA_INDEX_MIN_ROOMS, areaHref, getRoomAreas } from "@/lib/areas";
import { FEATURED_CITY_SLUGS } from "@/lib/cities";
import { GUIDES, guideHref } from "@/lib/guides";
import { PUBLISHED } from "@/lib/legal/config";
import { absoluteUrl, languageAlternates } from "@/lib/site";

// Every indexable page, in every language, each with its language alternates. Exactly the pages
// whose metadata says index: listing pages are left out (noindex), and so are area pages below
// AREA_INDEX_MIN_ROOMS and the legal documents until they take effect. Rebuilt at most hourly.
export const revalidate = 3600;

type Page = { href: string; lastModified?: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: Page[] = [
    { href: "/" },
    { href: "/rooms" },
    { href: "/guides" },
    { href: "/help" },
    ...GUIDES.map((guide) => ({ href: guideHref(guide.slug), lastModified: guide.updated })),
  ];
  if (PUBLISHED) {
    pages.push({ href: "/terms" }, { href: "/privacy" }, { href: "/legal-notice" });
  }

  // Null before the area-pages migration: then only the cities with written content.
  const areas = await getRoomAreas().catch(() => null);
  if (areas) {
    for (const area of areas) {
      const indexable =
        area.active_count >= AREA_INDEX_MIN_ROOMS ||
        (area.suburb_slug === null && FEATURED_CITY_SLUGS.includes(area.city_slug));
      if (!indexable) continue;
      pages.push({
        href: areaHref(area.city_slug, area.suburb_slug),
        lastModified: area.last_listed_at ?? undefined,
      });
    }
  } else {
    pages.push(...FEATURED_CITY_SLUGS.map((slug) => ({ href: areaHref(slug) })));
  }

  const entries = await Promise.all(
    pages.flatMap((page) =>
      routing.locales.map(async (locale) => ({
        url: await absoluteUrl(locale, page.href),
        lastModified: page.lastModified,
        alternates: { languages: await languageAlternates(page.href) },
      })),
    ),
  );
  return entries;
}
