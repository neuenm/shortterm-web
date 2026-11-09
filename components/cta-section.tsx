import { useTranslations } from "next-intl";
import StoreBadges from "@/components/store-badges";

export default function CtaSection() {
  const t = useTranslations("cta");

  return (
    <section className="w-full bg-gradient-to-br from-primary to-secondary">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-20 text-center">
        <span className="rounded-full bg-cream/15 px-4 py-1.5 text-sm font-semibold text-cream">
          {t("eyebrow")}
        </span>
        <h2 className="text-3xl font-extrabold text-cream sm:text-4xl">
          {t("title")}
        </h2>
        <p className="max-w-md text-cream/90">{t("subtitle")}</p>
        <StoreBadges />
      </div>
    </section>
  );
}
