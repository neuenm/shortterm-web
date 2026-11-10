import { legalNoticeEn } from "./legal-notice/en";
import { legalNoticeEs } from "./legal-notice/es";
import { privacyEn } from "./privacy/en";
import { privacyEs } from "./privacy/es";
import { termsEn } from "./terms/en";
import { termsEs } from "./terms/es";
import type { LegalDocument, LegalLocale } from "./types";

export type LegalDocumentKind = "terms" | "privacy" | "legalNotice";

const DOCUMENTS: Record<LegalDocumentKind, Record<LegalLocale, LegalDocument>> = {
  terms: { es: termsEs, en: termsEn },
  privacy: { es: privacyEs, en: privacyEn },
  legalNotice: { es: legalNoticeEs, en: legalNoticeEn },
};

export function toLegalLocale(locale: string): LegalLocale {
  return locale === "es" ? "es" : "en";
}

export function getLegalDocument(kind: LegalDocumentKind, locale: string): LegalDocument {
  return DOCUMENTS[kind][toLegalLocale(locale)];
}
