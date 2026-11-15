import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Nunito } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { routing } from "@/i18n/routing";
import "../globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });
  // The 1200×630 link-preview banner, one per language (made by the app repo's marketing/
  // pipeline, marketing/README.md).
  const shareImage = { url: `/og-${locale}.png`, width: 1200, height: 630, alt: t("title") };

  return {
    metadataBase: new URL("https://www.shortterm-app.com"),
    title: {
      default: t("title"),
      template: "%s",
    },
    description: t("description"),
    // No `alternates` here: a page that didn't set its own would inherit the home page's canonical
    // and hreflang. Every page sets them (pageAlternates in lib/site.ts).
    // Search Console and Bing Webmaster Tools ownership, when verified with a meta tag rather than
    // DNS (SEO.md). Set in the hosting environment; nothing renders while unset.
    verification: {
      google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
      other: process.env.BING_SITE_VERIFICATION
        ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
        : undefined,
    },
    openGraph: {
      siteName: "ShortTerm",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image",
      images: [shareImage],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${nunito.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1 flex flex-col">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
