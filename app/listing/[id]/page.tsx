import type { Metadata } from "next";
import Image from "next/image";
import { getListingPreview } from "@/lib/listing";
import { formatAudPerWeek, formatDateRange } from "@/lib/format";
import { copy } from "@/lib/copy";
import StoreBadges from "@/components/store-badges";

export async function generateMetadata({
  params,
}: PageProps<"/listing/[id]">): Promise<Metadata> {
  const { id } = await params;
  const listing = await getListingPreview(id);

  if (!listing) {
    return { title: "Publicación no disponible · ShortTerm" };
  }

  const title = `${listing.title} · ShortTerm`;
  const description = `${listing.location_text} · ${listing.bedrooms} habitaciones · desde ${listing.start_date}`;
  const image = listing.cover_photo_url ?? "/isotipo.png";

  return {
    title,
    description,
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

function UnavailableState() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 px-6 py-24 text-center">
      <Image src="/isotipo.png" alt="" width={64} height={64} className="h-16 w-16" />
      <h1 className="text-2xl font-extrabold text-ink">{copy.listing.unavailable.title}</h1>
      <p className="text-muted">{copy.listing.unavailable.description}</p>
      <StoreBadges />
    </div>
  );
}

export default async function ListingPreviewPage({
  params,
}: PageProps<"/listing/[id]">) {
  const { id } = await params;
  const listing = await getListingPreview(id);

  if (!listing) {
    return <UnavailableState />;
  }

  const bathroomsLabel =
    listing.bathrooms === 1 ? copy.listing.bathroomLabel : copy.listing.bathroomsLabel;

  const details = [
    `${listing.bedrooms} ${copy.listing.bedroomsLabel}`,
    listing.bathrooms != null ? `${listing.bathrooms} ${bathroomsLabel}` : null,
    `${listing.max_guests} ${copy.listing.guestsLabel}`,
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
                    / {copy.listing.weekLabel}
                  </span>
                </p>
              )}
              {listing.accepts_couples && listing.price_per_week_couples != null && (
                <p className="text-sm text-muted">
                  {copy.listing.couplesLabel}:{" "}
                  <span className="font-semibold text-ink">
                    {formatAudPerWeek(listing.price_per_week_couples)} / {copy.listing.weekLabel}
                  </span>
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
          <h2 className="text-lg font-bold text-ink">{copy.listing.gateTitle}</h2>
          <p className="text-sm text-muted">{copy.listing.gateDescription}</p>
          <StoreBadges />
          <a
            href={`shortterm://listing/${listing.id}`}
            className="text-sm font-medium text-primary underline underline-offset-2"
          >
            {copy.listing.openInApp}
          </a>
        </div>
      </div>
    </div>
  );
}
