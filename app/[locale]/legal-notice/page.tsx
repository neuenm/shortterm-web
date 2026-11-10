import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalPage, { legalPageMetadata } from "@/components/legal-page";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/legal-notice">): Promise<Metadata> {
  const { locale } = await params;
  return legalPageMetadata("legalNotice", locale);
}

export default async function LegalNoticePage({
  params,
}: PageProps<"/[locale]/legal-notice">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPage kind="legalNotice" locale={locale} />;
}
