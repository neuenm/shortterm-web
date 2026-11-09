import { useTranslations } from "next-intl";
import type { Platform } from "@/lib/platform";
import { STORE_URLS } from "@/lib/store-urls";

function BadgeContent({
  icon,
  eyebrow,
  label,
  disabled,
  comingSoonLabel,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  label: string;
  disabled: boolean;
  comingSoonLabel: string;
}) {
  return (
    <span
      className={`flex items-center gap-3 rounded-xl border px-4 py-2.5 transition-colors ${
        disabled
          ? "border-muted/30 bg-warm-gray text-muted"
          : "border-ink/10 bg-ink text-cream hover:bg-ink/90"
      }`}
    >
      {icon}
      <span className="flex flex-col items-start leading-none">
        <span className="text-[11px]">{disabled ? comingSoonLabel : eyebrow}</span>
        <span className="text-sm font-semibold">{label}</span>
      </span>
    </span>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M16.365 1.43c0 1.14-.415 2.06-1.246 2.76-.83.7-1.83 1.09-2.99 1-.03-1.1.43-2.06 1.28-2.79.85-.73 1.87-1.12 3.02-.97zM20.2 17.13c-.42 1-.93 1.95-1.53 2.85-.83 1.25-1.5 2.12-2.02 2.6-.8.75-1.65 1.14-2.57 1.16-.66 0-1.45-.19-2.36-.57-.91-.38-1.75-.57-2.51-.57-.79 0-1.65.19-2.58.57-.93.38-1.69.58-2.28.6-.88.04-1.75-.36-2.6-1.19-.55-.5-1.24-1.4-2.08-2.7-.9-1.38-1.63-2.98-2.2-4.81-.61-1.97-.92-3.88-.92-5.72 0-2.11.46-3.93 1.37-5.46.72-1.23 1.67-2.2 2.86-2.92 1.19-.72 2.48-1.09 3.86-1.11.7 0 1.62.22 2.75.65 1.13.43 1.85.65 2.17.65.24 0 1.04-.25 2.4-.75 1.29-.46 2.38-.65 3.27-.58 2.41.2 4.22 1.15 5.42 2.85-2.16 1.31-3.23 3.14-3.21 5.5.02 1.83.66 3.36 1.94 4.56.58.55 1.22.98 1.94 1.28-.16.45-.32.88-.5 1.3z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
      <path d="M4.4 2.2c-.3.3-.4.7-.4 1.2v17.2c0 .5.2.9.5 1.2l.2.1L14.3 12v-.1L4.7 2.1zM17.8 9.5l-2.9-1.7-3.2 3.2 3.2 3.2 3-1.7c.9-.5.9-1.5-.1-2zM5.1 21.8l9.2-9.2 2.6 1.5-9 8.7c-.5.3-1.7.5-2.8-1zM14.3 12L5.1 2.2c.5-.3 1.2-.4 1.9 0l8.4 4.8-1.1 1.1z" />
    </svg>
  );
}

export default function StoreBadges({
  className = "",
  platform = "other",
}: {
  className?: string;
  // On a phone only that phone's store is relevant; anywhere else both badges show.
  platform?: Platform;
}) {
  const t = useTranslations();
  const iosHref = STORE_URLS.ios;
  const androidHref = STORE_URLS.android;
  const showIos = platform !== "android";
  const showAndroid = platform !== "ios";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {!showIos ? null : iosHref ? (
        <a href={iosHref} target="_blank" rel="noopener noreferrer">
          <BadgeContent
            icon={<AppleIcon />}
            eyebrow={t("storeBadges.downloadOn")}
            label="App Store"
            disabled={false}
            comingSoonLabel={t("hero.comingSoon")}
          />
        </a>
      ) : (
        <span aria-disabled="true" title={t("hero.comingSoon")}>
          <BadgeContent
            icon={<AppleIcon />}
            eyebrow={t("storeBadges.downloadOn")}
            label="App Store"
            disabled
            comingSoonLabel={t("hero.comingSoon")}
          />
        </span>
      )}
      {!showAndroid ? null : androidHref ? (
        <a href={androidHref} target="_blank" rel="noopener noreferrer">
          <BadgeContent
            icon={<PlayIcon />}
            eyebrow={t("storeBadges.availableOn")}
            label="Google Play"
            disabled={false}
            comingSoonLabel={t("hero.comingSoon")}
          />
        </a>
      ) : (
        <span aria-disabled="true" title={t("hero.comingSoon")}>
          <BadgeContent
            icon={<PlayIcon />}
            eyebrow={t("storeBadges.availableOn")}
            label="Google Play"
            disabled
            comingSoonLabel={t("hero.comingSoon")}
          />
        </span>
      )}
    </div>
  );
}
