import { getTranslations } from "next-intl/server";
import Icon from "@/components/listing-icons";
import { Link } from "@/i18n/navigation";
import { areaHref } from "@/lib/areas";
import { FEATURED_CITY_SLUGS, getCityContent, getCityState } from "@/lib/cities";
import { GUIDES, guideContent, guideHref } from "@/lib/guides";

// The home page's links into the area pages and the guides. Besides helping visitors, it's how
// search engines find those pages from the site's strongest one. Static on purpose (no room
// counts), so the home page needs no database call.
export default async function ExploreSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "explore" });

  return (
    <section className="w-full bg-warm-gray">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-12 px-6 py-20 md:grid-cols-2">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-3xl font-extrabold text-ink">{t("title")}</h2>
            <p className="mt-2 text-muted">{t("subtitle")}</p>
          </div>
          <ul className="grid grid-cols-2 gap-3">
            {FEATURED_CITY_SLUGS.map((slug) => (
              <li key={slug}>
                <Link
                  href={areaHref(slug)}
                  className="flex flex-col rounded-2xl bg-cream p-4 transition-transform hover:-translate-y-0.5"
                >
                  <span className="font-bold text-ink">{getCityContent(slug, locale)?.name ?? slug}</span>
                  <span className="text-sm text-muted">{getCityState(slug)}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/rooms"
            className="flex items-center gap-1 self-start text-sm font-semibold text-primary"
          >
            {t("allCities")}
            <Icon name="chevronRight" className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-extrabold text-ink">{t("guidesTitle")}</h2>
          <ul className="flex flex-col gap-3">
            {GUIDES.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={guideHref(guide.slug)}
                  className="flex items-center justify-between gap-3 rounded-2xl bg-cream p-4 font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  {guideContent(guide, locale).title}
                  <Icon name="chevronRight" className="h-5 w-5 text-primary" />
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/guides"
            className="flex items-center gap-1 self-start text-sm font-semibold text-primary"
          >
            {t("allGuides")}
            <Icon name="chevronRight" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
