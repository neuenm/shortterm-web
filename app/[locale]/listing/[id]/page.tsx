import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { getListingPreview, isNewListing, type ListingPreview } from "@/lib/listing";
import { formatDate, FULL_DATE_FORMAT, START_DATE_FORMAT } from "@/lib/format";
import { getPlatform, type Platform } from "@/lib/platform";
import { APP_STORE_ID, storeUrlFor } from "@/lib/store-urls";
import { getPathname } from "@/i18n/navigation";
import StoreBadges from "@/components/store-badges";
import AppCtaBar from "@/components/app-cta-bar";
import Icon from "@/components/listing-icons";
import LockedSection, { HostSilhouette, HouseholdSilhouette } from "@/components/locked-section";
import {
  FactCell,
  FactGrid,
  SectionBand,
  SectionHeader,
  TagChip,
} from "@/components/listing-ui";

// Same host the app shares links on (its src/constants/links.ts WEB_BASE_URL) — the apex
// domain 308-redirects here, so og:url must not point at it.
const WEB_BASE_URL = "https://www.shortterm-app.com";
const GET_APP_ID = "get-app";

type Translate = (key: string, values?: Record<string, string | number>) => string;

// The app's formatListingAvailability, for the only statuses this page renders as a listing
// (active — paused gets its own unavailable state).
function formatAvailability(listing: ListingPreview, t: Translate, locale: string): string {
  if (listing.end_date === null) {
    return t("availableFrom", {
      date: formatDate(listing.start_date, locale, FULL_DATE_FORMAT),
    });
  }
  return t("availableRange", {
    startDate: formatDate(listing.start_date, locale, START_DATE_FORMAT),
    endDate: formatDate(listing.end_date, locale, FULL_DATE_FORMAT),
  });
}

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

  const url = `${WEB_BASE_URL}${await getPathname({ locale, href: `/listing/${id}` })}`;
  const title = t("metadataTitle", { title: listing.title });
  // What a WhatsApp/Facebook link preview shows under the title: price first, it's what
  // makes someone tap.
  const description = [
    listing.price_per_week ? t("priceWeekly", { amount: listing.price_per_week }) : null,
    listing.location_text,
    formatAvailability(listing, t, locale),
  ]
    .filter(Boolean)
    .join(" · ");
  const image = listing.cover_photo_url ?? "/isotipo.png";

  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      images: [image],
      url,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    ...(APP_STORE_ID ? { itunes: { appId: APP_STORE_ID, appArgument: url } } : {}),
  };
}

function UnavailableState({
  title,
  description,
  platform,
}: {
  title: string;
  description: string;
  platform: Platform;
}) {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center gap-6 px-6 py-24 text-center">
      <Image src="/isotipo.png" alt="" width={64} height={64} className="h-16 w-16" />
      <h1 className="text-2xl font-extrabold text-ink">{title}</h1>
      <p className="text-muted">{description}</p>
      <StoreBadges platform={platform} className="justify-center" />
    </div>
  );
}

export default async function ListingPreviewPage({
  params,
}: PageProps<"/[locale]/listing/[id]">) {
  const { locale, id } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("listing");
  const [listing, platform] = await Promise.all([getListingPreview(id), getPlatform()]);

  if (!listing) {
    return (
      <UnavailableState
        title={t("unavailable.title")}
        description={t("unavailable.description")}
        platform={platform}
      />
    );
  }

  if (listing.status === "paused") {
    return (
      <UnavailableState
        title={t("unavailablePaused.title")}
        description={t("unavailablePaused.description")}
        platform={platform}
      />
    );
  }

  // Every "see more" on the page leads to the same place: straight to this phone's store when
  // there is one, otherwise down to the download band.
  const appHref = storeUrlFor(platform) ?? `#${GET_APP_ID}`;
  const primaryLanguage = listing.primary_language;

  const heroBand: ReactNode = (
    <>
      {listing.end_date === null ? <TagChip highlighted label={t("stayType.long_term")} /> : null}
      <h1 className="text-[26px] font-bold leading-8 text-ink">{listing.title}</h1>

      {listing.price_per_week || listing.price_per_week_couples ? (
        <div className="flex flex-col gap-0.5">
          {listing.price_per_week ? (
            <p className="text-[28px] font-extrabold leading-[34px] text-primary">
              {t("priceWeekly", { amount: listing.price_per_week })}
            </p>
          ) : null}
          {listing.price_per_week_couples ? (
            <p className="text-muted">
              {t("priceWeeklyCouples", { amount: listing.price_per_week_couples })}
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-col gap-1">
        <p className="flex items-center gap-1 text-muted">
          <Icon name="place" className="h-4 w-4 text-primary" />
          {listing.location_text}
        </p>
        <a
          href={appHref}
          className="flex items-center gap-1 text-sm font-semibold leading-7 text-primary"
        >
          <Icon name="lock" className="h-3.5 w-3.5" />
          {t("mapLocked")}
        </a>
      </div>

      <p className="text-sm text-muted">{formatAvailability(listing, t, locale)}</p>
    </>
  );

  const detailsBand: ReactNode = (
    <>
      <SectionHeader icon="gridView" title={t("detailsSectionTitle")} />
      <FactGrid>
        <FactCell icon="bed" label={t("bedroomsLabel")}>
          {listing.bedrooms}
        </FactCell>
        {listing.bathrooms ? (
          <FactCell icon="bathtub" label={t("bathroomsLabel")}>
            {listing.bathrooms}
          </FactCell>
        ) : null}
        {listing.has_private_bathroom !== null ? (
          <FactCell icon="lock" label={t("privateBathroomLabel")}>
            {t(`privateBathroom.${listing.has_private_bathroom ? "yes" : "no"}`)}
          </FactCell>
        ) : null}
        {listing.bills_included != null ? (
          <FactCell icon="bolt" label={t("billsIncludedLabel")}>
            {t(`billsIncluded.${listing.bills_included ? "yes" : "no"}`)}
          </FactCell>
        ) : null}
        {listing.gender_preference && listing.gender_preference !== "any" ? (
          <FactCell icon="person" label={t("genderPreferenceLabel")}>
            {t(`genderPreference.${listing.gender_preference}`)}
          </FactCell>
        ) : null}
        {listing.accepts_couples !== null ? (
          <FactCell icon="favorite" label={t("acceptsCouplesLabel")}>
            {t(`acceptsCouples.${listing.accepts_couples ? "yes" : "no"}`)}
          </FactCell>
        ) : null}
      </FactGrid>
    </>
  );

  const languagesBand: ReactNode = primaryLanguage ? (
    <>
      <SectionHeader icon="language" title={t("languagesSectionTitle")} />
      <TagChip
        highlighted
        label={
          t.has(`languages.${primaryLanguage}`)
            ? t(`languages.${primaryLanguage}`)
            : primaryLanguage
        }
      />
    </>
  ) : null;

  const hostBand: ReactNode = (
    <>
      <SectionHeader icon="person" title={t("hostSectionTitle")} />
      <LockedSection message={t("hostLocked")} actionLabel={t("lockedAction")} href={appHref}>
        <HostSilhouette />
      </LockedSection>
    </>
  );

  const householdBand: ReactNode = (
    <>
      {/* The app's household title: the headcount when known, the generic title otherwise. */}
      <SectionHeader
        icon="group"
        title={
          listing.household_size
            ? t("householdSize", { count: listing.household_size })
            : t("householdSectionTitle")
        }
      />
      <LockedSection
        message={t("householdLocked")}
        actionLabel={t("lockedAction")}
        href={appHref}
      >
        <HouseholdSilhouette size={listing.household_size} />
      </LockedSection>
    </>
  );

  // Same order as a guest reads the listing in the app; what the preview can't show is
  // blurred in place rather than left out, so the visitor sees there's more.
  const bands = [heroBand, detailsBand, languagesBand, hostBand, householdBand].filter(
    (band) => band !== null,
  );
  const perks = t.raw("gate.perks") as string[];

  return (
    <div className="w-full bg-cream sm:px-6 sm:py-10">
      <article className="mx-auto w-full max-w-2xl overflow-clip bg-cream sm:rounded-3xl sm:border sm:border-ink/5 sm:shadow-xl">
        <div className="relative aspect-[4/3] w-full bg-warm-gray sm:aspect-[16/10]">
          {listing.cover_photo_url ? (
            <>
              <Image
                src={listing.cover_photo_url}
                alt={listing.title}
                fill
                priority
                className="object-cover"
                sizes="(min-width: 672px) 672px, 100vw"
              />
              {/* Only promise more photos when there are more: a listing with just its cover
                  gets no pill. Before the photo_count migration, the generic copy. */}
              {listing.photo_count === undefined || listing.photo_count > 1 ? (
                <a
                  href={appHref}
                  className="absolute bottom-6 right-4 flex items-center gap-1.5 rounded-full bg-ink/50 px-3 py-1 text-sm font-medium text-cream backdrop-blur-sm"
                >
                  <Icon name="image" />
                  {listing.photo_count === undefined
                    ? t("morePhotos")
                    : t("allPhotos", { count: listing.photo_count })}
                </a>
              ) : null}
            </>
          ) : (
            <div className="flex h-full w-full items-center justify-center text-muted">
              <Icon name="image" className="h-8 w-8" />
            </div>
          )}
          {/* Same badge and window as the app; this page only renders active listings, so the
              app's "still requestable" condition always holds here. */}
          {listing.created_at && isNewListing(listing.created_at) ? (
            <span className="absolute left-4 top-6 rounded-full bg-accent px-2 py-0.5 text-sm font-medium text-cream">
              {t("newBadge")}
            </span>
          ) : null}
        </div>

        {bands.map((band, index) => (
          <SectionBand key={index} tone={index % 2 === 0 ? "element" : "background"}>
            {band}
          </SectionBand>
        ))}

        <section id={GET_APP_ID} className="relative -mt-4 scroll-mt-4 rounded-t-2xl bg-mint">
          <div className="flex flex-col items-center gap-5 px-6 pb-10 pt-8 text-center">
            <Image
              src="/isotipo.png"
              alt=""
              width={64}
              height={64}
              className="h-16 w-16 rounded-2xl shadow-md"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-extrabold text-ink">{t("gate.title")}</h2>
              <p className="text-ink/80">{t("gate.description")}</p>
            </div>
            <ul className="flex w-full max-w-sm flex-col gap-2.5 text-left">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-start gap-2 text-sm font-semibold leading-5 text-ink"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-cream">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>
            <StoreBadges platform={platform} className="justify-center" />
            {/* A custom-scheme link does nothing on desktop, so only phones get it. */}
            {platform !== "other" ? (
              <a
                href={`shortterm://listing/${listing.id}`}
                className="text-sm font-semibold text-ink underline underline-offset-2"
              >
                {t("openInApp")}
              </a>
            ) : null}
          </div>
        </section>
      </article>

      <AppCtaBar
        href={appHref}
        label={t("requestCta")}
        hint={t("requestCtaHint")}
        targetId={GET_APP_ID}
      />
    </div>
  );
}
