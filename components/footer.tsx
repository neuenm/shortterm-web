import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function Footer() {
  const year = new Date().getFullYear();
  const t = await getTranslations();

  return (
    <footer className="w-full border-t border-ink/5 bg-warm-gray">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/isotipo-mark.png"
            alt="ShortTerm"
            width={36}
            height={36}
            className="h-9 w-9 rounded-lg"
          />
          <div>
            <p className="text-sm font-semibold text-ink">{t("brand.name")}</p>
            <p className="text-xs text-muted">{t("footer.tagline")}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <div className="flex items-center gap-4">
            <Link href="/help" className="text-ink hover:text-primary">
              {t("nav.help")}
            </Link>
            <Link href="/terms" className="text-ink hover:text-primary">
              {t("nav.terms")}
            </Link>
            <Link href="/privacy" className="text-ink hover:text-primary">
              {t("nav.privacy")}
            </Link>
            <a
              href={`mailto:${t("footer.contactEmail")}`}
              className="text-ink hover:text-primary"
            >
              {t("footer.contactEmail")}
            </a>
          </div>
          <p>{t("footer.copyright", { year })}</p>
        </div>
      </div>
    </footer>
  );
}
