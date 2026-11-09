import { useTranslations } from "next-intl";
import PhoneMockup from "@/components/phone-mockup";

export default function AppPreviewSection() {
  const t = useTranslations("appPreview");

  return (
    <section className="w-full bg-ink">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 px-6 py-20 text-center">
        <div className="max-w-xl">
          <h2 className="text-3xl font-extrabold text-cream sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-cream/70">{t("subtitle")}</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <PhoneMockup variant="listing" />
          <PhoneMockup variant="chat" />
        </div>
      </div>
    </section>
  );
}
