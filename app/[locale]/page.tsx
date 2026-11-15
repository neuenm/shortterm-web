import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import AppPreviewSection from "@/components/app-preview-section";
import WhyShortTermSection from "@/components/why-shortterm-section";
import ExploreSection from "@/components/explore-section";
import CtaSection from "@/components/cta-section";
import { jsonLd, pageAlternates, WEB_BASE_URL } from "@/lib/site";

export async function generateMetadata({ params }: PageProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: await pageAlternates(locale, "/"),
  };
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("footer");

  // Who runs the site (the name, logo and contact Google can show for the brand) and the site
  // itself. Only on the home page, as Google recommends.
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "ShortTerm",
      url: WEB_BASE_URL,
      logo: `${WEB_BASE_URL}/isotipo.png`,
      email: t("contactEmail"),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "ShortTerm",
      url: WEB_BASE_URL,
      inLanguage: ["en", "es"],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(structuredData) }} />
      <HeroSection />
      <HowItWorksSection />
      <AppPreviewSection />
      <WhyShortTermSection />
      <ExploreSection locale={locale} />
      <CtaSection />
    </>
  );
}
