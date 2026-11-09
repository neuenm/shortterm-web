import type { ReactNode } from "react";
import Icon, { type IconName } from "@/components/listing-icons";

// Web twins of the app's listing detail building blocks (src/components/section-band.tsx,
// section-header.tsx, profile-fact-cell.tsx, tag-chip.tsx), so a shared link looks like the
// screen it opens in the app.

export type BandTone = "element" | "background";

// Each band sets `--band-contrast`, the app's FieldSurfaceProvider: chips and icon circles
// inside fill with the opposite tone so they never blend into the band.
const BAND_TONES: Record<BandTone, string> = {
  element: "bg-warm-gray [--band-contrast:var(--color-cream)]",
  background: "bg-cream [--band-contrast:var(--color-warm-gray)]",
};

// Full-bleed band with rounded top corners that overlaps the one above by its own radius,
// so the previous band's color (or the cover photo) peeks through the curves.
export function SectionBand({
  tone,
  id,
  className = "",
  children,
}: {
  tone: BandTone;
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`relative -mt-4 rounded-t-2xl ${BAND_TONES[tone]} ${className}`}
    >
      <div className="flex flex-col gap-4 px-6 pb-8 pt-6">{children}</div>
    </section>
  );
}

export function SectionHeader({ icon, title }: { icon: IconName; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint text-primary">
        <Icon name={icon} className="h-[18px] w-[18px]" />
      </span>
      <h2 className="text-lg font-extrabold leading-6 text-ink">{title}</h2>
    </div>
  );
}

export function FactGrid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

export function FactCell({
  icon,
  label,
  children,
}: {
  icon: IconName;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex items-start gap-2">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--band-contrast)] text-muted">
        <Icon name={icon} />
      </span>
      <div className="flex min-w-0 flex-col gap-0.5 text-sm leading-5">
        <span className="font-medium text-muted">{label}</span>
        <span className="font-bold text-ink">{children}</span>
      </div>
    </div>
  );
}

export function TagChip({ label, highlighted }: { label: string; highlighted?: boolean }) {
  return (
    <span
      className={`inline-flex items-center self-start rounded-full px-4 py-2 text-sm font-medium leading-5 ${
        highlighted ? "bg-primary text-cream" : "bg-[var(--band-contrast)] text-ink"
      }`}
    >
      {label}
    </span>
  );
}
