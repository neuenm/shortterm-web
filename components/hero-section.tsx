import Image from "next/image";
import { useTranslations } from "next-intl";
import StoreBadges from "@/components/store-badges";
import PhoneMockup from "@/components/phone-mockup";

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative w-full overflow-hidden bg-cream">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_var(--color-secondary)_0%,_transparent_70%)] opacity-40 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/3 h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,_var(--color-primary)_0%,_transparent_70%)] opacity-30 blur-2xl"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:py-28">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <div className="relative">
            <span
              aria-hidden="true"
              className="absolute inset-0 -z-10 rounded-full bg-[radial-gradient(circle,_var(--color-primary)_0%,_transparent_65%)] opacity-30 blur-xl"
            />
            <Image
              src="/isotipo.png"
              alt=""
              width={96}
              height={96}
              priority
              className="h-24 w-24"
            />
          </div>
          <span className="rounded-full bg-warm-gray px-4 py-1.5 text-sm font-medium text-ink">
            {t("hero.eyebrow")}
          </span>
          <h1 className="max-w-xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="text-lg font-semibold text-primary">{t("brand.tagline")}</p>
          <p className="max-w-xl text-lg text-muted">{t("hero.subtitle")}</p>

          <div
            id="download"
            className="flex flex-col items-center gap-3 rounded-2xl bg-warm-gray/70 p-4 shadow-sm lg:items-start"
          >
            <p className="text-sm text-muted">{t("hero.ctaHint")}</p>
            <StoreBadges />
          </div>
        </div>

        <div className="shrink-0">
          <PhoneMockup variant="listing" />
        </div>
      </div>
    </section>
  );
}
