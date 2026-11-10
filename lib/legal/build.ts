import type { LegalBlock, LegalClause, LegalDocument, LegalSection } from "./types";

export const p = (text: string): LegalBlock => ({ kind: "p", text });
export const ul = (...items: string[]): LegalBlock => ({ kind: "ul", items });
export const ol = (...items: string[]): LegalBlock => ({ kind: "ol", items });
export const callout = (text: string): LegalBlock => ({ kind: "callout", text });

/** A clause rendered without a number in the margin (e.g. a contact list). */
export const unnumbered = (...blocks: LegalBlock[]) => ({ unnumbered: blocks });

type ClauseInput = LegalBlock[] | { unnumbered: LegalBlock[] };

export type SectionInput = {
  id: string;
  heading: string;
  clauses: ClauseInput[];
};

/**
 * Numbers sections (1, 2, …) and their clauses (3.1, 3.2, …) from their order, so a section
 * can be added or moved without renumbering by hand, and the Spanish and English versions of a
 * document can't drift apart as long as they list the same ids.
 *
 * Cross-references are written as `§{section-id}` and resolved to that section's number here;
 * an unknown id throws at build time instead of rendering a broken reference.
 */
export function buildDocument(input: { preamble: LegalBlock[]; sections: SectionInput[] }): LegalDocument {
  const numberById = new Map(input.sections.map((section, index) => [section.id, String(index + 1)]));

  const resolve = (text: string) =>
    text.replace(/§\{([a-z0-9-]+)\}/g, (_, id: string) => {
      const number = numberById.get(id);
      if (!number) throw new Error(`Unknown legal section reference: §{${id}}`);
      return number;
    });

  const resolveBlock = (block: LegalBlock): LegalBlock =>
    block.kind === "ul" || block.kind === "ol"
      ? { ...block, items: block.items.map(resolve) }
      : { ...block, text: resolve(block.text) };

  const sections: LegalSection[] = input.sections.map((section, sectionIndex) => {
    const sectionNumber = String(sectionIndex + 1);
    let clauseIndex = 0;
    const clauses: LegalClause[] = section.clauses.map((clause) => {
      if (Array.isArray(clause)) {
        clauseIndex += 1;
        return { number: `${sectionNumber}.${clauseIndex}`, blocks: clause.map(resolveBlock) };
      }
      return { blocks: clause.unnumbered.map(resolveBlock) };
    });
    return { id: section.id, number: sectionNumber, heading: section.heading, clauses };
  });

  return { preamble: input.preamble.map(resolveBlock), sections };
}
