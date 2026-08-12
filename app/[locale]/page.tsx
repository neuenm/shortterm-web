import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import HeroSection from "@/components/hero-section";
import HowItWorksSection from "@/components/how-it-works-section";
import WhyShortTermSection from "@/components/why-shortterm-section";

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: {
      languages: {
        es: await getPathname({ locale: "es", href: "/" }),
        en: await getPathname({ locale: "en", href: "/" }),
      },
    },
  };
}

export default async function Home({ params }: PageProps<"/[locale]">) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <WhyShortTermSection />
    </>
  );
}
