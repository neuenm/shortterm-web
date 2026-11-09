/**
 * Every value a lawyer or the operator still has to fill in lives here, in one
 * place. Search the repo for `LEGAL` and you will find nothing else to change.
 *
 * The bracketed style is deliberate: it renders visibly as a placeholder, so an
 * unfilled value can never quietly ship as if it were real.
 */
export const LEGAL = {
  /**
   * Works whether this ends up being a personal name (sole trader) or a
   * company. If a company: "ShortTerm Pty Ltd (ACN 123 456 789)". If a sole
   * trader with an ABN: "Jane Citizen trading as ShortTerm (ABN 12 345 678 901)".
   * If a sole trader with no ABN yet: just the personal name.
   */
  entity: '[LEGAL ENTITY NAME]',

  /** Apple's Minimum Terms require a real address and a contact method. */
  address: 'Ramon y Cajal 54, 9, 1b',
  phone: '+34665459298',

  /** Governing law. Normally where the operator is based. */
  jurisdiction: 'Spain',

  /** Where the Supabase project actually runs. Check the Supabase dashboard. */
  supabaseRegion: '[SUPABASE HOSTING COUNTRY — TO BE CONFIRMED]',

  /**
   * Google Play requires a web-accessible account-deletion page IN ADDITION to
   * the in-app flow. This page does not exist yet — see the review checklist.
   */
  deletionUrl: '[ACCOUNT DELETION WEB PAGE URL — NOT YET BUILT]',

  effectiveDate: '[EFFECTIVE DATE]',
  lastUpdated: '[EFFECTIVE DATE]',

  /** Proposed retention period for anonymised account rows. Not yet implemented. */
  retentionPeriod: '[12 MONTHS — PROPOSED, NOT YET IMPLEMENTED]',

  contactEmail: 'hola@shortterm-app.com',
  privacyEmail: 'privacy@shortterm-app.com',
  website: 'www.shortterm-app.com',
} as const;

/**
 * Flip to `true` only once a lawyer has signed the documents off. While it is
 * `false`, both pages render a prominent "not yet reviewed" banner and are
 * excluded from search engine indexing.
 */
export const LAWYER_REVIEWED = false;
