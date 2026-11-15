import findARoom from "@/lib/guides/find-a-room-in-australia";
import rentalBond from "@/lib/guides/rental-bond-australia";
import rentalScams from "@/lib/guides/rental-scams-australia";
import rentOutARoom from "@/lib/guides/rent-out-a-room";
import shareHouseChecklist from "@/lib/guides/share-house-checklist";
import type { Guide, GuideContent } from "@/lib/guides/types";

export type { Guide, GuideBlock, GuideContent, GuideSection } from "@/lib/guides/types";

// Every guide, in the order /guides lists them. A new guide: its own file here (both languages
// side by side), added to this list. The sitemap, /guides and generateStaticParams read it.
export const GUIDES: Guide[] = [
  findARoom,
  shareHouseChecklist,
  rentalBond,
  rentalScams,
  rentOutARoom,
];

export function getGuide(slug: string): Guide | null {
  return GUIDES.find((guide) => guide.slug === slug) ?? null;
}

export function guideContent(guide: Guide, locale: string): GuideContent {
  return guide[locale === "es" ? "es" : "en"];
}

export function guideHref(slug: string): string {
  return `/guides/${slug}`;
}
