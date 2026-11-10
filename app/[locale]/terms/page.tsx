import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalPage, { legalPageMetadata } from "@/components/legal-page";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/terms">): Promise<Metadata> {
  const { locale } = await params;
  return legalPageMetadata("terms", locale);
}

export default async function TermsPage({
  params,
}: PageProps<"/[locale]/terms">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPage kind="terms" locale={locale} />;
}
