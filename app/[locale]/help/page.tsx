import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getPathname, Link } from "@/i18n/navigation";

/**
 * The help center the app's Settings → Help center opens. Every answer describes the app as it
 * behaves today (labels, where each action lives, what happens after it), so a change to any
 * of those in the app means updating the matching answer here, in both locales.
 */
type Question = { heading: string; body: string[] };
type Topic = { id: string; title: string; questions: Question[] };

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
  const topics = t.raw("topics") as Topic[];
  const linkClassName = "font-semibold text-primary hover:underline";

  // Answers carry inline markup (app labels in <b>, links to other pages and to the safety
  // topic), so each paragraph goes through t.rich by its path instead of rendering t.raw.
  const answer = (path: string) =>
    t.rich(path, {
      b: (chunks) => <strong className="font-semibold text-ink">{chunks}</strong>,
      privacy: (chunks) => (
        <Link href="/privacy" className={linkClassName}>
          {chunks}
        </Link>
      ),
      deleteAccount: (chunks) => (
        <Link href="/delete-account" className={linkClassName}>
          {chunks}
        </Link>
      ),
      safety: (chunks) => (
        <a href="#safety" className={linkClassName}>
          {chunks}
        </a>
      ),
      email: (chunks) => (
        <a href={`mailto:${t("contactEmail")}`} className={linkClassName}>
          {chunks}
        </a>
      ),
    });

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          {t("title")}
        </h1>
        <p className="mt-4 text-muted">{t("intro")}</p>

        <nav aria-label={t("topicsLabel")} className="mt-8 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <a
              key={topic.id}
              href={`#${topic.id}`}
              className="rounded-full bg-warm-gray px-4 py-1.5 text-sm font-medium text-ink transition-colors hover:text-primary"
            >
              {topic.title}
            </a>
          ))}
        </nav>

        <div className="mt-12 flex flex-col gap-14">
          {topics.map((topic, topicIndex) => (
            <section key={topic.id} id={topic.id} className="scroll-mt-8">
              <h2 className="text-2xl font-extrabold text-ink">{topic.title}</h2>
              <div className="mt-6 flex flex-col gap-8">
                {topic.questions.map((question, questionIndex) => (
                  <div key={question.heading}>
                    <h3 className="text-lg font-bold text-ink">
                      {question.heading}
                    </h3>
                    <div className="mt-2 flex flex-col gap-3 text-muted">
                      {question.body.map((paragraph, paragraphIndex) => (
                        <p key={paragraph}>
                          {answer(
                            `topics.${topicIndex}.questions.${questionIndex}.body.${paragraphIndex}`,
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
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
