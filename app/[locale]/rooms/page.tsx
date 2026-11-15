import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Breadcrumbs from "@/components/breadcrumbs";
import GetAppBand from "@/components/get-app-band";
import Icon from "@/components/listing-icons";
import { SectionHeader } from "@/components/listing-ui";
import { Link } from "@/i18n/navigation";
import { areaHref, getRoomAreas, type RoomArea } from "@/lib/areas";
import { FEATURED_CITY_SLUGS, getCityContent, getCityState } from "@/lib/cities";
import { absoluteUrl, pageAlternates } from "@/lib/site";

// /rooms: every city with rooms, the featured ones first. The entry point to the area pages from
// the home page, the footer and the guides.
export const revalidate = 600;

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/rooms">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "rooms" });
  const title = t("hubMetadataTitle");
  const description = t("hubMetadataDescription");
  return {
    title,
    description,
    alternates: await pageAlternates(locale, "/rooms"),
    openGraph: { title, description, url: await absoluteUrl(locale, "/rooms") },
  };
}

function CityCard({
  href,
  name,
  state,
  countLabel,
}: {
  href: string;
  name: string;
  state: string | null;
  countLabel: string | null;
}) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between gap-3 rounded-2xl bg-warm-gray p-4 transition-transform hover:-translate-y-0.5"
    >
      <span className="flex flex-col">
        <span className="font-bold text-ink">
          {name}
          {state ? <span className="font-medium text-muted"> · {state}</span> : null}
        </span>
        {countLabel ? <span className="text-sm text-muted">{countLabel}</span> : null}
      </span>
      <Icon name="chevronRight" className="h-5 w-5 text-primary" />
    </Link>
  );
}

export default async function RoomsHubPage({ params }: PageProps<"/[locale]/rooms">) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("rooms");
  const tNav = await getTranslations("nav");

  // Null before the area-pages migration: the featured cities still show, without counts.
  const areas = await getRoomAreas();
  const cities = new Map<string, RoomArea>(
    (areas ?? []).filter((row) => row.suburb_slug === null).map((row) => [row.city_slug, row]),
  );
  const countLabel = (slug: string) => {
    const city = cities.get(slug);
    return city ? t("cityCount", { count: city.active_count }) : null;
  };
  const moreCities = [...cities.values()]
    .filter((city) => city.active_count > 0 && !FEATURED_CITY_SLUGS.includes(city.city_slug))
    .sort((a, b) => b.active_count - a.active_count || a.city_name.localeCompare(b.city_name));

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6 py-10">
        <header className="flex flex-col gap-4">
          <Breadcrumbs items={[{ label: tNav("rooms"), href: "/rooms" }]} locale={locale} />
          <h1 className="text-3xl font-extrabold text-ink sm:text-4xl">{t("hubTitle")}</h1>
          <p className="text-muted">{t("hubIntro")}</p>
        </header>

        <section className="flex flex-col gap-4">
          <SectionHeader icon="place" title={t("hubFeaturedTitle")} />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {FEATURED_CITY_SLUGS.map((slug) => (
              <CityCard
                key={slug}
                href={areaHref(slug)}
                name={getCityContent(slug, locale)?.name ?? slug}
                state={getCityState(slug)}
                countLabel={countLabel(slug)}
              />
            ))}
          </div>
        </section>

        {moreCities.length > 0 ? (
          <section className="flex flex-col gap-4">
            <SectionHeader icon="gridView" title={t("hubMoreTitle")} />
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {moreCities.map((city) => (
                <CityCard
                  key={city.city_slug}
                  href={areaHref(city.city_slug)}
                  name={city.city_name}
                  state={city.state}
                  countLabel={countLabel(city.city_slug)}
                />
              ))}
            </div>
          </section>
        ) : null}

        <GetAppBand locale={locale} medium="area_page" />
      </div>
    </div>
  );
}
