import type { LegalLocale } from "./types";

/**
 * Every operator detail the legal documents print lives here, in one place. Change a value
 * here and the Terms, the Privacy Policy, the Legal Notice and the account-deletion page all
 * follow.
 *
 * A value still to be confirmed is written in square brackets, so it renders visibly as a
 * placeholder and can never quietly ship as if it were real.
 */
export const LEGAL = {
  /** Trade name the service is offered under. */
  tradeName: "ShortTerm",

  /** The operator: a natural person (sole trader), not a company. */
  holder: "Luis Neuen Mobilia",

  /** Spanish tax id (NIE). The LSSI (art. 10) requires publishing it. */
  taxId: "Z1835047C",

  address: {
    street: "Ramón y Cajal 54, 9, 1B",
    postalCode: "18003",
    city: "Granada",
    province: "Granada",
    country: { es: "España", en: "Spain" },
  },

  phone: "+34 665 459 298",

  /** The only @shortterm-app.com alias Namecheap forwards (to the Gmail inbox below). */
  contactEmail: "support@shortterm-app.com",
  /** Same mailbox for now. If a separate privacy@ alias is ever created, change it here. */
  privacyEmail: "support@shortterm-app.com",
  website: "www.shortterm-app.com",
  deletionUrl: "www.shortterm-app.com/delete-account",

  /** Where Namecheap forwards the @shortterm-app.com mailboxes. */
  mailboxProvider: "Google (Gmail)",

  /**
   * ISO date the current version takes effect. Set it to the day the app version with the
   * accept-terms screen is live in the stores, together with PUBLISHED below.
   */
  effectiveDate: "2026-11-10",
} as const;

/**
 * Flip to `true` on the day the documents take effect (see `effectiveDate`). While it is
 * `false`, every legal page renders a prominent "not yet in force" banner and is excluded from
 * search engine indexing.
 */
export const PUBLISHED = false;

/** One-line postal address, e.g. "Ramón y Cajal 54, 9, 1B, 18003 Granada (Granada), España". */
export function postalAddress(locale: LegalLocale): string {
  const { street, postalCode, city, province, country } = LEGAL.address;
  return `${street}, ${postalCode} ${city} (${province}), ${country[locale]}`;
}

/** "10 de noviembre de 2026" / "10 November 2026". */
export function formatLegalDate(isoDate: string, locale: LegalLocale): string {
  return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-GB", {
    dateStyle: "long",
    timeZone: "UTC",
  }).format(new Date(`${isoDate}T00:00:00Z`));
}
