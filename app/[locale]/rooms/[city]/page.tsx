import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AreaPage, { areaPageMetadata, getAreaPageData } from "@/components/area-page";

// "Rooms for rent in Brisbane". Rendered on the first visit and then served from the cache,
// refreshed at most every 10 minutes: rooms open and close over days, and a card that's gone by
// the time someone taps it lands on the listing's own "no longer available" page with the rooms
// around it.
export const revalidate = 600;

// No city is rendered at build time (ISR needs this to be an empty array).
export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/rooms/[city]">): Promise<Metadata> {
  const { locale, city } = await params;
  const data = await getAreaPageData(locale, city, null);
  if (!data) return {};
  return areaPageMetadata(locale, data);
}

export default async function CityRoomsPage({ params }: PageProps<"/[locale]/rooms/[city]">) {
  const { locale, city } = await params;
  setRequestLocale(locale);
  const data = await getAreaPageData(locale, city, null);
  if (!data) notFound();
  return <AreaPage locale={locale} data={data} />;
}
