"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = [
  { code: "es" as const, label: "Español" },
  { code: "en" as const, label: "English" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("nav");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function handleClickOutside(event: MouseEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("languageSwitcher")}
        className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
      >
        <span aria-hidden="true" className="text-base leading-none">
          🌐
        </span>
        <span>{locale.toUpperCase()}</span>
      </button>

      {open ? (
        <ul
          role="listbox"
          className="absolute right-0 top-full z-10 mt-2 min-w-32 overflow-hidden rounded-xl border border-ink/10 bg-cream py-1 shadow-lg"
        >
          {LOCALES.map(({ code, label }) => (
            <li key={code} role="option" aria-selected={locale === code}>
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  router.replace(pathname, { locale: code });
                }}
                className={`block w-full px-4 py-2 text-left text-sm font-medium transition-colors ${
                  locale === code
                    ? "bg-ink text-cream"
                    : "text-ink hover:bg-warm-gray"
                }`}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
