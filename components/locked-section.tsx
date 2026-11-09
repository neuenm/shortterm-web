import type { ReactNode } from "react";
import Icon from "@/components/listing-icons";

// Blurred teaser for a part of the listing only the app shows. `children` must be a placeholder
// silhouette, never real data: a CSS blur is one devtools click from undone, and
// get_listing_preview deliberately doesn't return these fields to anonymous visitors anyway.
export default function LockedSection({
  message,
  actionLabel,
  href,
  children,
}: {
  message: string;
  actionLabel: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-sm font-semibold leading-5 text-ink/80">{message}</p>
      <div className="relative">
        <div aria-hidden="true" className="pointer-events-none select-none blur-[5px]">
          {children}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href={href}
            className="flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-cream shadow-[0_6px_14px_rgba(0,0,0,0.25)] transition-colors hover:bg-primary-light"
          >
            <Icon name="lock" />
            {actionLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

const HOUSEMATE_COLORS = ["bg-secondary", "bg-accent", "bg-primary", "bg-success"];
const MAX_HOUSEMATE_DOTS = 6;

// Shape of the app's household section: housemates, the "Aquí viven N personas" line, trait
// chips (the highlighted ones are what they have in common with the viewer). `size` is the
// household headcount, the one household number the preview gets; one dot per person.
export function HouseholdSilhouette({ size }: { size?: number | null }) {
  const dots = Math.min(size || 3, MAX_HOUSEMATE_DOTS);

  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="flex -space-x-2">
        {Array.from({ length: dots }, (_, index) => (
          <span
            key={index}
            className={`h-10 w-10 rounded-full border-2 border-[var(--band-contrast)] ${
              HOUSEMATE_COLORS[index % HOUSEMATE_COLORS.length]
            }`}
          />
        ))}
      </div>
      <span className="h-4 w-40 rounded-full bg-ink/20" />
      <div className="flex flex-wrap gap-2">
        <span className="h-9 w-24 rounded-full bg-primary" />
        <span className="h-9 w-20 rounded-full bg-[var(--band-contrast)]" />
        <span className="h-9 w-28 rounded-full bg-primary" />
        <span className="h-9 w-16 rounded-full bg-[var(--band-contrast)]" />
        <span className="h-9 w-24 rounded-full bg-[var(--band-contrast)]" />
      </div>
      <span className="h-3 w-3/4 rounded-full bg-ink/10" />
    </div>
  );
}

// Shape of the app's host row: avatar, name, activity signal, chevron to the profile.
export function HostSilhouette() {
  return (
    <div className="flex flex-col gap-4 py-2">
      <div className="flex items-center gap-2">
        <span className="h-11 w-11 shrink-0 rounded-full bg-secondary" />
        <div className="flex flex-1 flex-col gap-2">
          <span className="h-3 w-16 rounded-full bg-ink/15" />
          <span className="h-4 w-32 rounded-full bg-ink/25" />
          <span className="h-3 w-24 rounded-full bg-success/40" />
        </div>
        <Icon name="chevronRight" className="h-5 w-5 text-muted" />
      </div>
      <span className="h-3 w-full rounded-full bg-ink/10" />
      <span className="h-3 w-2/3 rounded-full bg-ink/10" />
    </div>
  );
}
