import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import LegalDocumentView from "@/components/legal-document";
import { getPathname } from "@/i18n/navigation";
import { LAWYER_REVIEWED } from "@/lib/legal/config";
import { privacyDocument } from "@/lib/legal/privacy";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: `${t("title")} · ShortTerm`,
    description: t("title"),
    // Keep the draft out of search results until a lawyer has signed it off.
    robots: LAWYER_REVIEWED ? undefined : { index: false, follow: false },
    alternates: {
      languages: {
        es: await getPathname({ locale: "es", href: "/privacy" }),
        en: await getPathname({ locale: "en", href: "/privacy" }),
      },
    },
  };
}

export default async function PrivacyPage({
  params,
}: PageProps<"/[locale]/privacy">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("privacy");

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {t("effectiveDate", { date: privacyDocument.effectiveDate })}
        </p>

        {LAWYER_REVIEWED ? null : (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-accent/40 bg-accent/10 px-5 py-4 text-sm font-medium text-ink"
          >
            {t("draftNotice")}
          </div>
        )}

        {locale === "en" ? null : (
          <p className="mt-4 rounded-xl border border-ink/10 bg-warm-gray/60 px-5 py-4 text-sm text-muted">
            {t("englishOnlyNotice")}
          </p>
        )}

        <LegalDocumentView
          document={privacyDocument}
          tableOfContentsLabel={t("tableOfContents")}
        />
      </div>
    </div>
  );
}
