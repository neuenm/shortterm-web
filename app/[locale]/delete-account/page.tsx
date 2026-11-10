import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname, Link } from "@/i18n/navigation";
import { LEGAL } from "@/lib/legal/config";

/**
 * The web account-deletion page Google Play requires on top of the in-app flow (its Data
 * safety form links here): who the app and developer are, how to delete from the app or by
 * email, and what is deleted and kept. What it says must match the delete_account() RPC and
 * the Privacy Policy's deletion section.
 */
export async function generateMetadata({
  params,
}: PageProps<"/[locale]/delete-account">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "deleteAccount" });

  return {
    title: `${t("title")} · ShortTerm`,
    description: t("intro", { developer: LEGAL.holder }),
    alternates: {
      languages: {
        es: await getPathname({ locale: "es", href: "/delete-account" }),
        en: await getPathname({ locale: "en", href: "/delete-account" }),
      },
    },
  };
}

export default async function DeleteAccountPage({
  params,
}: PageProps<"/[locale]/delete-account">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("deleteAccount");
  const inAppSteps = t.raw("inAppSteps") as string[];
  const deletedItems = t.raw("deletedItems") as string[];
  const keptItems = t.raw("keptItems") as string[];
  const subject = t("emailSubject");

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-muted">
          {t("intro", { developer: LEGAL.holder })}
        </p>

        <div className="mt-10 flex flex-col gap-8">
          <section>
            <h2 className="text-xl font-bold text-ink">{t("inAppHeading")}</h2>
            <ol className="mt-3 flex list-decimal flex-col gap-2 pl-6 text-muted">
              {inAppSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">{t("byEmailHeading")}</h2>
            <p className="mt-2 text-muted">{t("byEmailBody", { subject })}</p>
            <a
              href={`mailto:${LEGAL.privacyEmail}?subject=${encodeURIComponent(subject)}`}
              className="mt-3 inline-block font-semibold text-primary hover:underline"
            >
              {LEGAL.privacyEmail}
            </a>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">{t("deletedHeading")}</h2>
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 text-muted">
              {deletedItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-ink">{t("keptHeading")}</h2>
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-6 text-muted">
              {keptItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-secondary/10 px-5 py-4 text-sm text-ink">
          {t.rich("privacyNote", {
            link: (chunks) => (
              <Link href="/privacy" className="font-semibold text-primary hover:underline">
                {chunks}
              </Link>
            ),
          })}
        </div>
      </div>
    </div>
  );
}
