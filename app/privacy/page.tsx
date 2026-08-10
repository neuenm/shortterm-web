import type { Metadata } from "next";
import { copy } from "@/lib/copy";

export const metadata: Metadata = {
  title: `${copy.privacy.title} · ShortTerm`,
  description: copy.privacy.title,
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-cream">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
          {copy.privacy.title}
        </h1>
        <p className="mt-2 text-sm text-muted">{copy.privacy.lastUpdated}</p>

        <div
          role="alert"
          className="mt-6 rounded-xl border border-secondary/40 bg-secondary/10 px-5 py-4 text-sm font-medium text-ink"
        >
          {copy.privacy.draftNotice}
        </div>

        <div className="mt-10 flex flex-col gap-10">
          {copy.privacy.sections.map((section) => (
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
