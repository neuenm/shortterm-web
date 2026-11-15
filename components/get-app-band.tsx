import Image from "next/image";
import { getTranslations } from "next-intl/server";
import Icon from "@/components/listing-icons";
import StoreBadges from "@/components/store-badges";

export const GET_APP_ID = "get-app";

// The download band that closes the area pages and the guides: these pages are cached for every
// visitor (ISR), so they can't pick one phone's store and show both badges. The Play link carries
// the page kind (androidStoreUrl's `medium`), so the Play Console tells which pages bring installs.
export default async function GetAppBand({
  locale,
  medium,
}: {
  locale: string;
  medium: "area_page" | "guide";
}) {
  const t = await getTranslations({ locale, namespace: "rooms" });
  const tListing = await getTranslations({ locale, namespace: "listing" });
  const perks = tListing.raw("gate.perks") as string[];

  return (
    <section id={GET_APP_ID} className="w-full scroll-mt-4 rounded-3xl bg-mint">
      <div className="flex flex-col items-center gap-5 px-6 pb-10 pt-8 text-center">
        <Image
          src="/isotipo.png"
          alt=""
          width={64}
          height={64}
          className="h-16 w-16 rounded-2xl shadow-md"
        />
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-extrabold text-ink">{t("getAppTitle")}</h2>
          <p className="text-ink/80">{t("getAppBody")}</p>
        </div>
        <ul className="flex w-full max-w-sm flex-col gap-2.5 text-left">
          {perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2 text-sm font-semibold leading-5 text-ink">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-cream">
                <Icon name="check" className="h-3.5 w-3.5" />
              </span>
              {perk}
            </li>
          ))}
        </ul>
        <StoreBadges medium={medium} className="justify-center" />
      </div>
    </section>
  );
}
