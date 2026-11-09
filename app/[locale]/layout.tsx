import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Nunito } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
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

  return {
    metadataBase: new URL("https://www.shortterm-app.com"),
    title: {
      default: t("title"),
      template: "%s",
    },
    description: t("description"),
    alternates: {
      languages: {
        es: await getPathname({ locale: "es", href: "/" }),
        en: await getPathname({ locale: "en", href: "/" }),
      },
    },
    openGraph: {
      siteName: "ShortTerm",
      locale: locale === "es" ? "es_ES" : "en_US",
      images: ["/isotipo.png"],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/isotipo.png"],
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
