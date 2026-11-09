import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/language-switcher";

export default async function Header() {
  const t = await getTranslations("nav");

  return (
    <header className="w-full border-b border-ink/5 bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="ShortTerm"
            width={273}
            height={100}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href={{ pathname: "/", hash: "download" }}
            className="hidden items-center rounded-full bg-primary px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-primary-light sm:inline-flex"
          >
            {t("download")}
          </Link>
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
