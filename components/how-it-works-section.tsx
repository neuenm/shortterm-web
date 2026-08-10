import { copy } from "@/lib/copy";

export default function HowItWorksSection() {
  return (
    <section className="w-full bg-warm-gray">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl font-extrabold text-ink sm:text-4xl">
            {copy.howItWorks.title}
          </h2>
          <p className="mt-3 text-muted">{copy.howItWorks.subtitle}</p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {copy.howItWorks.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-lg font-bold text-cream">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold text-ink">{step.title}</h3>
              <p className="text-sm text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
