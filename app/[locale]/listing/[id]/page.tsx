import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getListingPreview } from "@/lib/listing";
import { formatAudPerWeek, formatDateRange } from "@/lib/format";
import { getPathname } from "@/i18n/navigation";
import StoreBadges from "@/components/store-badges";

export async function generateMetadata({
  params,
}: PageProps<"/[locale]/listing/[id]">): Promise<Metadata> {
  const { locale, id } = await params;
  const listing = await getListingPreview(id);
  const t = await getTranslations({ locale, namespace: "listing" });

  const alternates = {
    languages: {
      es: await getPathname({ locale: "es", href: `/listing/${id}` }),
      en: await getPathname({ locale: "en", href: `/listing/${id}` }),
    },
  };

  if (!listing) {
    return { title: t("metadataUnavailableTitle"), alternates };
  }

  const title = t("metadataTitle", { title: listing.title });
  const description = t("metadataDescription", {
    location: listing.location_text,
    bedrooms: listing.bedrooms,
    date: listing.start_date,
  });
  const image = listing.cover_photo_url ?? "/isotipo.png";

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      images: [image],
      url: `https://shortterm-app.com/listing/${listing.id}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function UnavailableState({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 px-6 py-24 text-center">
      <Image src="/isotipo.png" alt="" width={64} height={64} className="h-16 w-16" />
      <h1 className="text-2xl font-extrabold text-ink">{title}</h1>
      <p className="text-muted">{description}</p>
      <StoreBadges />
    </div>
  );
}

export default async function ListingPreviewPage({
  params,
}: PageProps<"/[locale]/listing/[id]">) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("listing");
  const listing = await getListingPreview(id);

  if (!listing) {
    return (
      <UnavailableState
        title={t("unavailable.title")}
        description={t("unavailable.description")}
      />
    );
  }

  const bathroomsLabel =
    listing.bathrooms === 1 ? t("bathroomLabel") : t("bathroomsLabel");

  const details = [
    `${listing.bedrooms} ${t("bedroomsLabel")}`,
    listing.bathrooms != null ? `${listing.bathrooms} ${bathroomsLabel}` : null,
    `${listing.max_guests} ${t("guestsLabel")}`,
  ].filter(Boolean);

  return (
    <div className="w-full bg-cream">
      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="overflow-hidden rounded-2xl border border-ink/5 bg-warm-gray">
          <div className="relative aspect-[4/3] w-full bg-warm-gray">
            {listing.cover_photo_url ? (
              <Image
                src={listing.cover_photo_url}
                alt={listing.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 672px) 672px, 100vw"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <Image src="/isotipo.png" alt="" width={64} height={64} className="h-16 w-16" />
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4 p-6">
            <div>
              <h1 className="text-2xl font-extrabold text-ink">{listing.title}</h1>
              <p className="mt-1 text-muted">{listing.location_text}</p>
            </div>

            <p className="font-medium text-ink">
              {formatDateRange(listing.start_date, listing.end_date)}
            </p>

            <div className="flex flex-wrap gap-2 text-sm text-ink">
              {details.map((detail) => (
                <span
                  key={detail}
                  className="rounded-full bg-cream px-3 py-1 font-medium"
                >
                  {detail}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-1 border-t border-ink/5 pt-4">
              {listing.price_per_week != null && (
                <p className="text-xl font-bold text-ink">
                  {formatAudPerWeek(listing.price_per_week)}
                  <span className="text-sm font-medium text-muted">
                    {" "}
                    / {t("weekLabel")}
                  </span>
                </p>
              )}
              {listing.accepts_couples && listing.price_per_week_couples != null && (
                <p className="text-sm text-muted">
                  {t("couplesLabel")}:{" "}
                  <span className="font-semibold text-ink">
                    {formatAudPerWeek(listing.price_per_week_couples)} / {t("weekLabel")}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
          <h2 className="text-lg font-bold text-ink">{t("gateTitle")}</h2>
          <p className="text-sm text-muted">{t("gateDescription")}</p>
          <StoreBadges />
          <a
            href={`shortterm://listing/${listing.id}`}
            className="text-sm font-medium text-primary underline underline-offset-2"
          >
            {t("openInApp")}
          </a>
        </div>
      </div>
    </div>
  );
}
