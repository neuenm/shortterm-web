import Image from "next/image";
import Link from "next/link";
import { copy } from "@/lib/copy";

export default function Footer() {
  const year = new Date().getFullYear();

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
            <p className="text-sm font-semibold text-ink">{copy.brand.name}</p>
            <p className="text-xs text-muted">{copy.footer.tagline}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 text-sm text-muted sm:items-end">
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-ink hover:text-primary">
              {copy.nav.privacy}
            </Link>
            <a
              href={`mailto:${copy.footer.contactEmail}`}
              className="text-ink hover:text-primary"
            >
              {copy.footer.contactEmail}
            </a>
          </div>
          <p>{copy.footer.copyright(year)}</p>
        </div>
      </div>
    </footer>
  );
}
