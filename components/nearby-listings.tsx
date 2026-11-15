import { useTranslations } from "next-intl";
import Icon from "@/components/listing-icons";
import { SectionHeader } from "@/components/listing-ui";
import { RoomGrid } from "@/components/room-card";
import { Link } from "@/i18n/navigation";
import { areaHref } from "@/lib/areas";
import type { NearbyListingPreview } from "@/lib/listing";

// Up to six active rooms of the same area: "More rooms in Brisbane" under a listing, "Other rooms
// in Brisbane" in place of one that's no longer available. Renders nothing without rooms, so a
// page whose area has none stays as it was.
export default function NearbyListings({
  listings,
  locale,
  variant,
  appHref,
}: {
  listings: NearbyListingPreview[];
  locale: string;
  variant: "more" | "instead";
  // Where "See all N in the app" goes when the area has no page of its own (a regional town):
  // this phone's store, or the page's download band.
  appHref: string;
}) {
  const t = useTranslations("listing");
  if (listings.length === 0) return null;

  const { area_name: area, area_slug: areaSlug, total_count: total } = listings[0];
  const title = area
    ? t(`nearby.${variant}Title`, { area })
    : t(`nearby.${variant}TitleNoArea`);
  const linkClassName = "flex items-center gap-1 self-start text-sm font-semibold text-primary";

  return (
    <div className="flex w-full flex-col gap-4 text-left">
      <div className="flex flex-col gap-1">
        <SectionHeader icon="place" title={title} />
        <p className="text-sm text-muted">{t("nearby.count", { count: total })}</p>
      </div>
      <RoomGrid listings={listings} locale={locale} />
      {/* A city's rooms all live on its area page, which is also how search engines reach it
          from here (listing pages are noindex but followed). Without one, the app. Before the
          area-pages migration area_slug is undefined, so the app link stays. */}
      {area && areaSlug ? (
        <Link href={areaHref(areaSlug)} className={linkClassName}>
          {t("nearby.seeAllInArea", { count: total, area })}
          <Icon name="chevronRight" className="h-4 w-4" />
        </Link>
      ) : total > listings.length ? (
        <a href={appHref} className={linkClassName}>
          {t("nearby.seeAllInApp", { count: total })}
          <Icon name="chevronRight" className="h-4 w-4" />
        </a>
      ) : null}
    </div>
  );
}
