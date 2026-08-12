import Image from "next/image";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "@/components/language-switcher";

export default function Header() {
  return (
    <header className="w-full border-b border-ink/5 bg-cream">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-full.png"
            alt="ShortTerm"
            width={160}
            height={40}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
