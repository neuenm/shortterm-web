"use client";

import { useState } from "react";

export type Step = { title: string; description: string };
export type Mode = "guest" | "host";

const MODES: Mode[] = ["guest", "host"];
const STEP_COLORS = ["bg-primary", "bg-secondary", "bg-accent", "bg-success"];

// The app's match walkthrough (MatchInfoContent) shows the guest or the host version of each
// step depending on the active mode; the landing speaks to both, so the visitor picks.
export default function HowItWorksSteps({
  modeLabels,
  steps,
}: {
  modeLabels: Record<Mode, string>;
  steps: Record<Mode, Step[]>;
}) {
  const [mode, setMode] = useState<Mode>("guest");

  return (
    <div className="mt-10 flex flex-col items-center gap-12">
      <div role="tablist" className="inline-flex rounded-full bg-cream p-1">
        {MODES.map((option) => (
          <button
            key={option}
            type="button"
            role="tab"
            id={`how-it-works-tab-${option}`}
            aria-selected={mode === option}
            aria-controls="how-it-works-steps"
            onClick={() => setMode(option)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
              mode === option ? "bg-primary text-cream" : "text-ink hover:text-primary"
            }`}
          >
            {modeLabels[option]}
          </button>
        ))}
      </div>

      <ol
        id="how-it-works-steps"
        role="tabpanel"
        aria-labelledby={`how-it-works-tab-${mode}`}
        className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        {steps[mode].map((step, index) => (
          <li key={`${mode}-${index}`} className="flex flex-col items-start gap-3">
            <span
              className={`flex h-10 w-10 items-center justify-center rounded-full text-lg font-bold text-cream ${STEP_COLORS[index % STEP_COLORS.length]}`}
            >
              {index + 1}
            </span>
            <h3 className="text-lg font-bold text-ink">{step.title}</h3>
            <p className="text-sm text-muted">{step.description}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
