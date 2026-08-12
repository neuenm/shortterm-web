import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";

type Section = { heading: string; body: string[]; list?: string[] };

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/privacy">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: `${t("title")} · ShortTerm`,
    description: t("title"),
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
  const sections = t.raw("sections") as Section[];

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-2 text-sm text-muted">{t("lastUpdated")}</p>

        <div
          role="alert"
          className="mt-6 rounded-xl border border-secondary/40 bg-secondary/10 px-5 py-4 text-sm font-medium text-ink"
        >
          {t("draftNotice")}
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
              <div className="mt-3 flex flex-col gap-3 text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {"list" in section && section.list ? (
                <ul className="mt-3 flex flex-col gap-2 text-muted">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
