import Image from "next/image";
import { useTranslations } from "next-intl";
import StoreBadges from "@/components/store-badges";

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="w-full bg-cream">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 px-6 py-20 text-center">
        <Image
          src="/isotipo.png"
          alt=""
          width={88}
          height={88}
          priority
          className="h-[88px] w-[88px]"
        />
        <span className="rounded-full bg-warm-gray px-4 py-1.5 text-sm font-medium text-ink">
          {t("hero.eyebrow")}
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {t("hero.title")}
        </h1>
        <p className="text-lg font-semibold text-primary">{t("brand.tagline")}</p>
        <p className="max-w-xl text-lg text-muted">{t("hero.subtitle")}</p>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-muted">{t("hero.ctaHint")}</p>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
