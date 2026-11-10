import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import LegalDocumentView from "@/components/legal-document";
import { getPathname, Link } from "@/i18n/navigation";
import { getLegalDocument, toLegalLocale, type LegalDocumentKind } from "@/lib/legal";
import { formatLegalDate, LEGAL, PUBLISHED } from "@/lib/legal/config";

const PATHS = {
  terms: "/terms",
  privacy: "/privacy",
  legalNotice: "/legal-notice",
} as const satisfies Record<LegalDocumentKind, string>;

export async function legalPageMetadata(
  kind: LegalDocumentKind,
  locale: string,
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "legal" });
  const title = t(`titles.${kind}`);

  return {
    title: `${title} · ShortTerm`,
    description: title,
    // Keep the documents out of search results until they take effect.
    robots: PUBLISHED ? undefined : { index: false, follow: false },
    alternates: {
      languages: {
        es: await getPathname({ locale: "es", href: PATHS[kind] }),
        en: await getPathname({ locale: "en", href: PATHS[kind] }),
      },
    },
  };
}

/**
 * Shared body of the Terms, Privacy Policy and Legal Notice pages: the document in the page's
 * language (Spanish for `es`, English otherwise), its effective date, the "not yet in force"
 * banner until PUBLISHED, and — on the English version — a note that the Spanish one prevails.
 */
export default async function LegalPage({
  kind,
  locale,
}: {
  kind: LegalDocumentKind;
  locale: string;
}) {
  const t = await getTranslations("legal");
  const legalLocale = toLegalLocale(locale);

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          {t(`titles.${kind}`)}
        </h1>
        <p className="mt-2 text-sm text-muted">
          {t("effectiveDate", {
            date: formatLegalDate(LEGAL.effectiveDate, legalLocale),
          })}
        </p>

        {PUBLISHED ? null : (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-accent/40 bg-accent/10 px-5 py-4 text-sm font-medium text-ink"
          >
            {t("draftNotice")}
          </div>
        )}

        {legalLocale === "es" ? null : (
          <p className="mt-4 rounded-xl border border-ink/10 bg-warm-gray/60 px-5 py-4 text-sm text-muted">
            {t.rich("spanishPrevailsNotice", {
              link: (chunks) => (
                <Link
                  href={PATHS[kind]}
                  locale="es"
                  className="font-semibold text-primary underline"
                >
                  {chunks}
                </Link>
              ),
            })}
          </p>
        )}

        <LegalDocumentView
          document={getLegalDocument(kind, locale)}
          tableOfContentsLabel={t("tableOfContents")}
        />
      </div>
    </div>
  );
}
