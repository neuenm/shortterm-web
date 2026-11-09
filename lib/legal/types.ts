/**
 * Shared shapes for the published legal documents (Terms of Service, Privacy
 * Policy). The text lives in `lib/legal/terms.ts` and `lib/legal/privacy.ts`
 * as data rather than in `messages/*.json`, deliberately:
 *
 *  - The documents are English-only. Translating a binding legal document
 *    without a lawyer reviewing the translation creates two versions that can
 *    disagree, and only one of them can be the operative one.
 *  - They are far too long to live comfortably in the i18n message catalogue.
 *
 * The surrounding page chrome (title, notices, table-of-contents label) IS
 * translated — see the `terms` and `privacy` namespaces in messages/*.json.
 */

/** Inline `**bold**` is supported inside every `text` / list item below. */
export type LegalBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "callout"; text: string };

export type LegalClause = {
  /** e.g. "3.2" — rendered in the margin. Omit for unnumbered prose. */
  number?: string;
  blocks: LegalBlock[];
};

export type LegalSection = {
  /** Anchor id, also the React key. Kebab-case, stable across edits. */
  id: string;
  /** e.g. "6" */
  number: string;
  heading: string;
  clauses: LegalClause[];
};

export type LegalDocument = {
  title: string;
  effectiveDate: string;
  lastUpdated: string;
  /** Unnumbered prose shown above the table of contents. */
  preamble: LegalBlock[];
  sections: LegalSection[];
};
