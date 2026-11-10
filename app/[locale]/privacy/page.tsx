import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import LegalPage, { legalPageMetadata } from "@/components/legal-page";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  return legalPageMetadata("privacy", locale);
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LegalPage kind="privacy" locale={locale} />;
}
