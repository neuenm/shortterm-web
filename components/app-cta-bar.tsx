"use client";

import { useEffect, useState } from "react";

// The app's FloatingActionBar: the request button floats over the page until the visitor
// reaches the download band (`targetId`), which takes over as the call to action from there on.
export default function AppCtaBar({
  href,
  label,
  hint,
  targetId,
}: {
  href: string;
  label: string;
  hint: string;
  targetId: string;
}) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => {
      setHidden(entry.isIntersecting || entry.boundingClientRect.top < 0);
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-20 px-6 pb-4 transition duration-300 ${
        hidden ? "translate-y-full opacity-0" : ""
      }`}
    >
      <a
        href={href}
        aria-hidden={hidden}
        tabIndex={hidden ? -1 : undefined}
        className="pointer-events-auto mx-auto flex max-w-md flex-col items-center rounded-full bg-primary px-6 py-3 text-cream shadow-[0_6px_14px_rgba(0,0,0,0.35)] transition-colors hover:bg-primary-light"
      >
        <span className="text-base font-bold leading-5">{label}</span>
        <span className="text-xs font-semibold leading-4 text-cream/90">{hint}</span>
      </a>
    </div>
  );
}
