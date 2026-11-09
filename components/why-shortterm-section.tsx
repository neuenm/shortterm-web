import { useTranslations } from "next-intl";

type Reason = { title: string; description: string };

const REASON_STYLES = [
  { Icon: UsersIcon, badge: "bg-primary/15 text-primary" },
  { Icon: NoFeeIcon, badge: "bg-secondary/20 text-secondary" },
  { Icon: ChatIcon, badge: "bg-accent/15 text-accent" },
  { Icon: CalendarIcon, badge: "bg-success/15 text-success" },
];

export default function WhyShortTermSection() {
  const t = useTranslations("whyShortTerm");
  const reasons = t.raw("reasons") as Reason[];

  return (
    <section className="w-full bg-cream">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-center text-3xl font-extrabold text-ink sm:text-4xl">
          {t("title")}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {reasons.map((reason, index) => {
            const { Icon, badge } = REASON_STYLES[index % REASON_STYLES.length];
            return (
              <div
                key={reason.title}
                className="rounded-2xl border border-ink/5 bg-warm-gray p-6 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${badge}`}
                >
                  <Icon />
                </span>
                <h3 className="mt-4 text-lg font-bold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm text-muted">{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function iconProps() {
  return {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-6 w-6",
    "aria-hidden": true as const,
  };
}

function UsersIcon() {
  return (
    <svg {...iconProps()}>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15 19c0-2.2 1.6-4 4-4.3" />
    </svg>
  );
}

function NoFeeIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M11.5 3.5 20 12l-8 8-8.5-8.5V4h7.5z" />
      <circle cx="8.2" cy="7.8" r="1" fill="currentColor" stroke="none" />
      <path d="M4 4l16 16" />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg {...iconProps()}>
      <path d="M4 5h16v10H9l-4 4v-4H4z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg {...iconProps()}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 9.5h16M8 3.5v3M16 3.5v3" />
      <path d="M9 13.5l1.6 1.6L15 11.5" />
    </svg>
  );
}
