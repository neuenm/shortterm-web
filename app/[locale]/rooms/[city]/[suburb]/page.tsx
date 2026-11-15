import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import AreaPage, { areaPageMetadata, getAreaPageData } from "@/components/area-page";

// "Rooms for rent in West End, Brisbane". Same caching as the city page.
export const revalidate = 600;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/rooms/[city]/[suburb]">): Promise<Metadata> {
  const { locale, city, suburb } = await params;
  const data = await getAreaPageData(locale, city, suburb);
  if (!data) return {};
  return areaPageMetadata(locale, data);
}

export default async function SuburbRoomsPage({
  params,
}: PageProps<"/[locale]/rooms/[city]/[suburb]">) {
  const { locale, city, suburb } = await params;
  setRequestLocale(locale);
  const data = await getAreaPageData(locale, city, suburb);
  if (!data) notFound();
  return <AreaPage locale={locale} data={data} />;
}
