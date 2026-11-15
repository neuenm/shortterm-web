import Image from "next/image";
import { useTranslations } from "next-intl";
import Icon from "@/components/listing-icons";
import { Link } from "@/i18n/navigation";
import { formatDate } from "@/lib/format";
import { isNewListing } from "@/lib/listing";

// What every room card shows, the same fields from get_nearby_listing_previews and
// get_area_listing_previews. Privacy 6.3 and Terms 5.5 (lib/legal/) list them.
export type RoomCardData = {
  id: string;
  title: string;
  suburb_name: string;
  start_date: string;
  end_date: string | null; // null for a long_term room
  price_per_week: number | null;
  cover_photo_url: string | null;
  created_at: string;
};

// A card only has room for "1 Dec": the room's own page spells the dates out.
const CARD_DATE_FORMAT: Intl.DateTimeFormatOptions = { day: "numeric", month: "short" };

export default function RoomCard({ listing, locale }: { listing: RoomCardData; locale: string }) {
  const t = useTranslations("listing");
  const startDate = formatDate(listing.start_date, locale, CARD_DATE_FORMAT);
  const dates =
    listing.end_date === null
      ? t("nearby.datesFrom", { date: startDate })
      : t("nearby.dates", {
          startDate,
          endDate: formatDate(listing.end_date, locale, CARD_DATE_FORMAT),
        });

  return (
    // Each card opens that room's own page, which on a phone with the app installed opens the
    // app instead (Universal Links / App Links).
    <Link
      href={`/listing/${listing.id}`}
      // Inside a band, the band's contrasting tone; elsewhere warm gray.
      className="flex flex-col overflow-hidden rounded-2xl bg-[var(--band-contrast,var(--color-warm-gray))] transition-transform hover:-translate-y-0.5"
    >
      <div className="relative aspect-[4/3] w-full bg-warm-gray">
        {listing.cover_photo_url ? (
          <Image
            src={listing.cover_photo_url}
            alt=""
            fill
            className="object-cover"
            sizes="(min-width: 640px) 208px, 50vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-muted">
            <Icon name="image" className="h-6 w-6" />
          </div>
        )}
        {isNewListing(listing.created_at) ? (
          <span className="absolute left-2 top-2 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-cream">
            {t("newBadge")}
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-0.5 p-3">
        {listing.price_per_week ? (
          <p className="text-sm font-extrabold text-primary">
            {t("priceWeekly", { amount: listing.price_per_week })}
          </p>
        ) : null}
        <p className="line-clamp-2 text-sm font-semibold leading-5 text-ink">{listing.title}</p>
        <p className="flex items-center gap-1 text-xs text-muted">
          <Icon name="place" className="h-3.5 w-3.5 shrink-0 text-primary" />
          <span className="truncate">{listing.suburb_name}</span>
        </p>
        <p className="text-xs text-muted">{dates}</p>
      </div>
    </Link>
  );
}

export function RoomGrid({ listings, locale }: { listings: RoomCardData[]; locale: string }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
      {listings.map((listing) => (
        <RoomCard key={listing.id} listing={listing} locale={locale} />
      ))}
    </div>
  );
}
