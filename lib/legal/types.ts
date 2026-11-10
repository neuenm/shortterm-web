/**
 * Shared shapes for the published legal documents (Terms of Service, Privacy Policy, Legal
 * Notice). The text lives in `lib/legal/<document>/{es,en}.ts` as data rather than in
 * `messages/*.json`, because the documents are far too long for the i18n message catalogue.
 *
 * Each document exists in Spanish and English. The Spanish version is the one that prevails
 * (the operator is established in Spain), so the English pages say so and link to it. The two
 * versions are built with `buildDocument` from the same section ids, so their numbering always
 * matches.
 *
 * The surrounding page chrome (title, notices, table-of-contents label) is translated in the
 * `terms`, `privacy` and `legalNotice` namespaces in messages/*.json.
 */

export type LegalLocale = "es" | "en";

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
  /** Anchor id, also the React key. Kebab-case, stable across edits and across languages. */
  id: string;
  /** e.g. "6" */
  number: string;
  heading: string;
  clauses: LegalClause[];
};

export type LegalDocument = {
  /** Unnumbered prose shown above the table of contents. */
  preamble: LegalBlock[];
  sections: LegalSection[];
};
