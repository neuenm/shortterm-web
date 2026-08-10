import Image from "next/image";
import StoreBadges from "@/components/store-badges";
import { copy } from "@/lib/copy";

export default function HeroSection() {
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
          {copy.hero.eyebrow}
        </span>
        <h1 className="max-w-2xl text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
          {copy.hero.title}
        </h1>
        <p className="text-lg font-semibold text-primary">{copy.brand.tagline}</p>
        <p className="max-w-xl text-lg text-muted">{copy.hero.subtitle}</p>

        <div className="flex flex-col items-center gap-3">
          <p className="text-sm text-muted">{copy.hero.ctaHint}</p>
          <StoreBadges />
        </div>
      </div>
    </section>
  );
}
