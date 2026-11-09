import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";

type Section = { heading: string; body: string[] };

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/help">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "help" });

  return {
    title: `${t("title")} · ShortTerm`,
    description: t("intro"),
    alternates: {
      languages: {
        es: await getPathname({ locale: "es", href: "/help" }),
        en: await getPathname({ locale: "en", href: "/help" }),
      },
    },
  };
}

export default async function HelpPage({
  params,
}: PageProps<"/[locale]/help">) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("help");
  const sections = t.raw("sections") as Section[];

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-muted">{t("intro")}</p>

        <div className="mt-10 flex flex-col gap-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-bold text-ink">{section.heading}</h2>
              <div className="mt-2 flex flex-col gap-3 text-muted">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-primary/20 bg-secondary/10 px-5 py-4 text-sm text-ink">
          {t("stillNeedHelp")}{" "}
          <a
            href={`mailto:${t("contactEmail")}`}
            className="font-semibold text-primary hover:underline"
          >
            {t("contactEmail")}
          </a>
        </div>
      </div>
    </div>
  );
}
