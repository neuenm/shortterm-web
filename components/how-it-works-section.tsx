import { useTranslations } from "next-intl";
import HowItWorksSteps, { type Mode, type Step } from "@/components/how-it-works-steps";

export default function HowItWorksSection() {
  const t = useTranslations("howItWorks");

  return (
    <section className="w-full bg-warm-gray">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-muted">{t("subtitle")}</p>
        </div>

        {/* Steps copied verbatim from the app's chat.match.info.* strings, so the landing
            and the in-app walkthrough never describe two different flows. */}
        <HowItWorksSteps
          modeLabels={t.raw("modes") as Record<Mode, string>}
          steps={t.raw("steps") as Record<Mode, Step[]>}
        />
      </div>
    </section>
  );
}
