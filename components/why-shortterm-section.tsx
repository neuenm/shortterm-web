import { useTranslations } from "next-intl";

type Reason = { title: string; description: string };

export default function WhyShortTermSection() {
  const t = useTranslations("whyShortTerm");
  const reasons = t.raw("reasons") as Reason[];

  return (
    <section className="w-full bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-2xl border border-ink/5 bg-warm-gray p-6"
            >
              <h3 className="text-lg font-bold text-ink">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
