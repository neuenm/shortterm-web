import { Fragment } from "react";
import type { LegalBlock, LegalDocument } from "@/lib/legal/types";

/**
 * Renders `**bold**` runs without dangerouslySetInnerHTML. Odd-indexed pieces
 * of a split on `**` are the emphasised ones.
 */
function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split("**").map((piece, index) =>
        index % 2 === 1 ? (
          <strong key={index} className="font-semibold text-ink">
            {piece}
          </strong>
        ) : (
          <Fragment key={index}>{piece}</Fragment>
        ),
      )}
    </>
  );
}

function Block({ block }: { block: LegalBlock }) {
  switch (block.kind) {
    case "p":
      return (
        <p className="text-[15px] leading-7 text-muted">
          <Rich text={block.text} />
        </p>
      );

    case "ul":
      return (
        <ul className="flex flex-col gap-2">
          {block.items.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-7 text-muted">
              <span aria-hidden className="mt-[2px] text-primary">
                •
              </span>
              <span>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="flex flex-col gap-2">
          {block.items.map((item, index) => (
            <li key={item} className="flex gap-3 text-[15px] leading-7 text-muted">
              <span
                aria-hidden
                className="mt-[2px] min-w-5 font-semibold text-primary"
              >
                ({String.fromCharCode(97 + index)})
              </span>
              <span>
                <Rich text={item} />
              </span>
            </li>
          ))}
        </ol>
      );

    case "callout":
      return (
        <div className="rounded-xl border border-secondary/40 bg-secondary/10 px-5 py-4 text-[15px] leading-7 text-ink">
          <Rich text={block.text} />
        </div>
      );
  }
}

export default function LegalDocumentView({
  document,
  tableOfContentsLabel,
}: {
  document: LegalDocument;
  tableOfContentsLabel: string;
}) {
  return (
    <>
      <div className="mt-8 flex flex-col gap-4">
        {document.preamble.map((block, index) => (
          <Block key={index} block={block} />
        ))}
      </div>

      <nav
        aria-label={tableOfContentsLabel}
        className="mt-10 rounded-xl border border-ink/10 bg-warm-gray/60 px-5 py-5"
      >
        <h2 className="text-sm font-bold uppercase tracking-wide text-ink">
          {tableOfContentsLabel}
        </h2>
        <ol className="mt-3 flex flex-col gap-1.5">
          {document.sections.map((section) => (
            <li key={section.id} className="text-[15px] leading-6">
              <a
                href={`#${section.id}`}
                className="text-muted transition-colors hover:text-primary"
              >
                <span className="mr-2 font-semibold text-ink">
                  {section.number}.
                </span>
                {section.heading}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 flex flex-col gap-12">
        {document.sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-xl font-bold text-ink">
              <span className="mr-2 text-primary">{section.number}.</span>
              {section.heading}
            </h2>

            <div className="mt-4 flex flex-col gap-5">
              {section.clauses.map((clause, clauseIndex) => (
                <div
                  key={clause.number ?? clauseIndex}
                  className="flex flex-col gap-3 sm:flex-row sm:gap-4"
                >
                  {clause.number ? (
                    <span className="shrink-0 pt-[3px] text-sm font-semibold tabular-nums text-ink/50 sm:w-12">
                      {clause.number}
                    </span>
                  ) : null}
                  <div className="flex min-w-0 flex-1 flex-col gap-3">
                    {clause.blocks.map((block, blockIndex) => (
                      <Block key={blockIndex} block={block} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
