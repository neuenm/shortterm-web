import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Breadcrumbs, { type Crumb } from "@/components/breadcrumbs";
import GetAppBand, { GET_APP_ID } from "@/components/get-app-band";
import Icon from "@/components/listing-icons";
import { SectionHeader } from "@/components/listing-ui";
import { RoomGrid } from "@/components/room-card";
import { Link } from "@/i18n/navigation";
import {
  AREA_INDEX_MIN_ROOMS,
  areaHref,
  getAreaListingPreviews,
  getRoomArea,
  getRoomAreas,
  type AreaListingPreview,
  type RoomArea,
} from "@/lib/areas";
import { getCityContent, type CityContent } from "@/lib/cities";
import { getGuide, guideContent, guideHref } from "@/lib/guides";
import { absoluteUrl, NO_IMAGE_INDEX, pageAlternates } from "@/lib/site";

// The body shared by /rooms/<city> and /rooms/<city>/<suburb>: the rooms available now, the
// numbers behind them, the suburbs around, the city's written content and the questions people
// search for. What makes each page worth indexing is that its rooms and numbers are its own; a page
// without enough of them stays out of search results (AREA_INDEX_MIN_ROOMS).

// Guides every area page links to, in this order.
const AREA_GUIDE_SLUGS = ["find-a-room-in-australia", "share-house-checklist", "rental-bond-australia"];
const MAX_SUBURB_LINKS = 40;

export type AreaPageData = {
  citySlug: string;
  suburbSlug: string | null;
  cityName: string;
  suburbName: string | null;
  // "West End, Brisbane" or "Brisbane".
  areaLabel: string;
  // Null when the database can't say yet (the area-pages migration isn't applied).
  stats: Pick<RoomArea, "active_count" | "min_price" | "median_price" | "max_price"> | null;
  listings: AreaListingPreview[];
  // Other suburbs of the city with rooms, most rooms first.
  suburbs: RoomArea[];
  content: CityContent | null;
  indexable: boolean;
};

// Null when there's no such area: the page 404s.
export async function getAreaPageData(
  locale: string,
  citySlug: string,
  suburbSlug: string | null,
): Promise<AreaPageData | null> {
  const t = await getTranslations({ locale, namespace: "rooms" });
  const content = getCityContent(citySlug, locale);
  const area = await getRoomArea(citySlug, suburbSlug ?? undefined);
  if (area === undefined) return null;

  if (area === null) {
    // Before the migration only the cities with written content have a page.
    if (!content || suburbSlug) return null;
    return {
      citySlug,
      suburbSlug: null,
      cityName: content.name,
      suburbName: null,
      areaLabel: content.name,
      stats: null,
      listings: [],
      suburbs: [],
      content,
      indexable: true,
    };
  }

  const [listings, areas] = await Promise.all([
    area.active_count > 0 ? getAreaListingPreviews(citySlug, suburbSlug ?? undefined) : [],
    getRoomAreas(),
  ]);
  const cityName = content?.name ?? area.city_name;
  const suburbs = (areas ?? [])
    .filter((row) => row.city_slug === citySlug && row.suburb_slug && row.suburb_slug !== suburbSlug)
    .sort(
      (a, b) =>
        b.active_count - a.active_count || (a.suburb_name ?? "").localeCompare(b.suburb_name ?? ""),
    )
    .slice(0, MAX_SUBURB_LINKS);
  const hasEnoughRooms = area.active_count >= AREA_INDEX_MIN_ROOMS;

  return {
    citySlug,
    suburbSlug,
    cityName,
    suburbName: area.suburb_name,
    areaLabel: area.suburb_name
      ? t("suburbArea", { suburb: area.suburb_name, city: cityName })
      : cityName,
    stats: area,
    listings,
    suburbs,
    content,
    indexable: suburbSlug ? hasEnoughRooms : hasEnoughRooms || content !== null,
  };
}

export async function areaPageMetadata(locale: string, data: AreaPageData): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "rooms" });
  const href = areaHref(data.citySlug, data.suburbSlug);
  const title = t("metadataTitle", { area: data.areaLabel });
  const count = data.stats?.active_count ?? 0;
  const description =
    count > 0
      ? t("metadataDescriptionCount", {
          count,
          area: data.areaLabel,
          fromPrice: data.stats?.min_price
            ? t("metadataFromPrice", { amount: data.stats.min_price })
            : "",
        })
      : t("metadataDescriptionEmpty", { area: data.areaLabel });

  return {
    title,
    description,
    alternates: await pageAlternates(locale, href),
    robots: { index: data.indexable, follow: true, ...NO_IMAGE_INDEX },
    openGraph: { title, description, url: await absoluteUrl(locale, href) },
    twitter: { title, description },
  };
}

function SuburbChips({
  suburbs,
  citySlug,
  countLabel,
}: {
  suburbs: RoomArea[];
  citySlug: string;
  countLabel: (count: number) => string;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {suburbs.map((suburb) => (
        <li key={suburb.suburb_slug}>
          <Link
            href={areaHref(citySlug, suburb.suburb_slug)}
            className="inline-flex items-center gap-1.5 rounded-full bg-warm-gray px-4 py-2 text-sm font-medium text-ink transition-colors hover:text-primary"
          >
            {suburb.suburb_name}
            <span className="text-muted">· {countLabel(suburb.active_count)}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default async function AreaPage({ locale, data }: { locale: string; data: AreaPageData }) {
  const t = await getTranslations({ locale, namespace: "rooms" });
  const tNav = await getTranslations({ locale, namespace: "nav" });
  const tGuides = await getTranslations({ locale, namespace: "guides" });
  const { stats, listings, content, suburbs } = data;
  const count = stats?.active_count ?? 0;

  const crumbs: Crumb[] = [
    { label: tNav("rooms"), href: "/rooms" },
    { label: data.cityName, href: areaHref(data.citySlug) },
  ];
  if (data.suburbSlug && data.suburbName) {
    crumbs.push({ label: data.suburbName, href: areaHref(data.citySlug, data.suburbSlug) });
  }

  const statParts = stats
    ? [
        count > 0 ? t("statsCount", { count }) : null,
        stats.min_price ? t("statsFrom", { amount: stats.min_price }) : null,
        stats.median_price && count >= AREA_INDEX_MIN_ROOMS
          ? t("statsMedian", { amount: stats.median_price })
          : null,
      ].filter((part): part is string => part !== null)
    : [];

  // A suburb the city's written content describes keeps that description on its own page.
  const suburbDescription = data.suburbSlug
    ? content?.areas.find((area) => area.suburbSlug === data.suburbSlug)?.description
    : undefined;
  const intro = data.suburbSlug
    ? [suburbDescription, t("defaultIntro", { area: data.areaLabel })].filter(
        (paragraph): paragraph is string => Boolean(paragraph),
      )
    : (content?.intro ?? [t("defaultIntro", { area: data.areaLabel })]);

  const hasPriceData =
    count >= AREA_INDEX_MIN_ROOMS && stats?.min_price && stats.max_price && stats.median_price;
  const linkClassName = "font-semibold text-primary hover:underline";
  const faq = [
    {
      question: t("faq.priceQuestion", { area: data.areaLabel }),
      answer: hasPriceData
        ? t("faq.priceAnswerData", {
            count,
            area: data.areaLabel,
            min: stats.min_price!,
            max: stats.max_price!,
            median: stats.median_price!,
          })
        : t("faq.priceAnswerGeneric"),
    },
    { question: t("faq.shortQuestion"), answer: t("faq.shortAnswer") },
    {
      question: t("faq.bondQuestion"),
      answer: t.rich("faq.bondAnswer", {
        guide: (chunks) => (
          <Link href={guideHref("rental-bond-australia")} className={linkClassName}>
            {chunks}
          </Link>
        ),
      }),
    },
    { question: t("faq.requestQuestion"), answer: t("faq.requestAnswer") },
  ];

  const guides = AREA_GUIDE_SLUGS.map(getGuide).filter((guide) => guide !== null);

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-10">
        <header className="flex flex-col gap-4">
          <Breadcrumbs items={crumbs} locale={locale} />
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">
            {t("title", { area: data.areaLabel })}
          </h1>
          {statParts.length > 0 ? (
            <p className="font-semibold text-primary">{statParts.join(" · ")}</p>
          ) : null}
          <div className="flex flex-col gap-3 text-muted">
            {intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </header>

        <section className="flex flex-col gap-4">
          <SectionHeader icon="bed" title={t("roomsTitle")} />
          {listings.length > 0 ? (
            <>
              <RoomGrid listings={listings} locale={locale} />
              {listings[0].total_count > listings.length ? (
                <a
                  href={`#${GET_APP_ID}`}
                  className="flex items-center gap-1 self-start text-sm font-semibold text-primary"
                >
                  {t("seeAllInApp", { count: listings[0].total_count })}
                  <Icon name="chevronRight" className="h-4 w-4" />
                </a>
              ) : null}
            </>
          ) : (
            <div className="flex items-start gap-3 rounded-2xl bg-warm-gray p-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-mint text-primary">
                <Icon name="notifications" className="h-5 w-5" />
              </span>
              <div className="flex flex-col gap-1">
                <p className="font-bold text-ink">{t("emptyTitle", { area: data.areaLabel })}</p>
                <p className="text-sm text-muted">{t("emptyBody", { area: data.areaLabel })}</p>
              </div>
            </div>
          )}
        </section>

        {suburbs.length > 0 || data.suburbSlug ? (
          <section className="flex flex-col gap-4">
            <SectionHeader
              icon="place"
              title={
                data.suburbSlug
                  ? t("otherSuburbsTitle", { city: data.cityName })
                  : t("suburbsTitle", { city: data.cityName })
              }
            />
            {suburbs.length > 0 ? (
              <SuburbChips
                suburbs={suburbs}
                citySlug={data.citySlug}
                countLabel={(value) => t("suburbCount", { count: value })}
              />
            ) : null}
            {data.suburbSlug ? (
              <Link
                href={areaHref(data.citySlug)}
                className="flex items-center gap-1 self-start text-sm font-semibold text-primary"
              >
                {t("allCityRooms", { city: data.cityName })}
                <Icon name="chevronRight" className="h-4 w-4" />
              </Link>
            ) : null}
          </section>
        ) : null}

        {content && !data.suburbSlug ? (
          <>
            <section className="flex flex-col gap-4">
              <SectionHeader icon="group" title={t("popularAreasTitle", { city: data.cityName })} />
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {content.areas.map((area) => (
                  <li key={area.suburbSlug} className="rounded-2xl bg-warm-gray p-4">
                    <Link
                      href={areaHref(data.citySlug, area.suburbSlug)}
                      className="font-bold text-ink hover:text-primary"
                    >
                      {area.name}
                    </Link>
                    <p className="mt-1 text-sm text-muted">{area.description}</p>
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex flex-col gap-3">
              <SectionHeader
                icon="directionsBus"
                title={t("gettingAroundTitle", { city: data.cityName })}
              />
              <p className="text-muted">{content.gettingAround}</p>
            </section>
          </>
        ) : null}

        <section className="flex flex-col gap-4">
          <SectionHeader icon="help" title={t("faqTitle", { area: data.areaLabel })} />
          <div className="flex flex-col gap-5">
            {faq.map((item) => (
              <div key={item.question}>
                <h3 className="font-bold text-ink">{item.question}</h3>
                <p className="mt-1 text-muted">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <SectionHeader icon="article" title={t("guidesTitle")} />
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {guides.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={guideHref(guide.slug)}
                  className="flex h-full flex-col gap-1 rounded-2xl bg-warm-gray p-4 transition-transform hover:-translate-y-0.5"
                >
                  <span className="font-bold leading-5 text-ink">
                    {guideContent(guide, locale).title}
                  </span>
                  <span className="mt-auto flex items-center gap-1 pt-2 text-sm font-semibold text-primary">
                    {tGuides("readGuide")}
                    <Icon name="chevronRight" className="h-4 w-4" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted">
            {t.rich("hostCta", {
              area: data.areaLabel,
              link: (chunks) => (
                <Link href={guideHref("rent-out-a-room")} className={linkClassName}>
                  {chunks}
                </Link>
              ),
            })}
          </p>
        </section>

        <GetAppBand locale={locale} medium="area_page" />
      </div>
    </div>
  );
}
