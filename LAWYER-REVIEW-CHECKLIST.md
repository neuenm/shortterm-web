# ShortTerm — Lawyer Review Checklist

**Documents:** Terms of Service (`lib/legal/terms.ts`) and Privacy Policy (`lib/legal/privacy.ts`), rendered at `shortterm-app.com/terms` and `/privacy`.
**Prepared:** 2 September 2026. **Jurisdiction:** Australia. **Status:** draft, not reviewed by a lawyer.

This list exists so the reviewing lawyer does not have to read both documents hunting for what needs a decision. Everything requiring judgment, and every unfilled placeholder, is here.

---

## A. Placeholders — all in one file

All of these live in **`lib/legal/config.ts`**. Nothing else in the repo needs editing to fill them in. Each renders visibly in square brackets, so an unfilled value cannot ship silently.

| Key | Placeholder | Decision needed |
|---|---|---|
| `entity` | `[LEGAL ENTITY NAME]` | Who is the contracting party? Drafted to work either way: a personal name (sole trader, with or without an ABN) or a company name + ACN/ABN. See item **B1**. |
| `address` | `[BUSINESS POSTAL ADDRESS]` | Apple's Minimum Terms require a real address for end-user claims. A residential address will be published — consider a PO box or a registered-office service. |
| `phone` | `[CONTACT PHONE NUMBER]` | Apple requires a contact number **or** email. If no phone is wanted, delete the field and the two references in ToS 1.1 and 18.2(h). |
| `jurisdiction` | `[GOVERNING STATE OR TERRITORY]` | Governing law and forum. Normally the operator's home State. See item **B7**. |
| `supabaseRegion` | `[SUPABASE HOSTING COUNTRY — TO BE CONFIRMED]` | **Engineering must confirm this from the Supabase dashboard.** Drives the APP 8 disclosure. See item **C1**. |
| `deletionUrl` | `[ACCOUNT DELETION WEB PAGE URL — NOT YET BUILT]` | **This page does not exist.** Google Play requires it. See item **C2**. |
| `effectiveDate` | `[EFFECTIVE DATE]` | Date of publication. |
| `retentionPeriod` | `[12 MONTHS — PROPOSED, NOT YET IMPLEMENTED]` | See item **C3**. |
| `LAWYER_REVIEWED` | `false` | While `false`, both pages show a "not yet reviewed" banner and are `noindex`. Flip to `true` on sign-off — that is the whole publication step. |

---

## B. Discretionary judgment calls

### B1. Contracting party while there is no company
The operator has no ABN or registered company yet. The documents name a single `[LEGAL ENTITY NAME]` and are drafted so a personal name works. Two consequences to advise on:

- A sole trader contracts personally and carries unlimited personal liability for everything in these Terms, in a product whose core risk is strangers meeting and moving in together. Advise on whether to incorporate before launch rather than after.
- **ToS 20.1** (transfer) is drafted specifically so the agreement can be novated to a company later without re-papering every user. Confirm it does what is intended in the relevant jurisdiction, and that the notice mechanism is adequate.

### B2. Anti-discrimination — the single highest-risk area ⚠️
**This is the issue a template cannot resolve, and it needs a specific opinion.**

The product lets a Host set a **gender preference** for who may apply, and publishes **nationality** and **age-bracket** counts of the current household, which Guests can **filter on**.

Research findings that shape the question:

- The Commonwealth Acts contain shared-accommodation exemptions: **SDA s 23(3)(a)**, **ADA s 30(3)** and **DDA s 25(3)** all require the provider or a near relative to reside on the premises **and the accommodation to be for no more than three persons** besides them.
- **RDA s 12(3) does contain a shared-residence exemption** — for accommodation "shared or to be shared, in whole or in part" with the provider or a relative, with **no numeric cap**. (The original drafting brief assumed the opposite; it was wrong.)
- State positions diverge. **NSW** uses a **six-person** threshold (ADA 1977 ss 20(3), 34(3), 49N(3)). **Qld s 87** uses three and is not attribute-limited. **SA** exempts race in a shared household with no cap (s 62(2a)). **WA appears not to exempt race at all** — the s 21(3) exemption sits in Part II (sex/marital status/pregnancy) and race is dealt with separately in Part III with no equivalent carve-out. **Victoria's EO Act 2010 s 59** exists but its exact terms could not be verified from an authorised source.

Questions for the lawyer:

1. **Many Australian share houses have more than three other occupants.** For those Hosts, the Commonwealth exemptions do not apply at all. Should the gender-preference feature be limited, or should the app warn a Host whose household headcount exceeds the threshold?
2. **Is the platform's own conduct exposed?** The exemptions are framed around the person providing the accommodation and their relatives. ShortTerm is neither. Offering **nationality as a search facet** is ShortTerm's own act, not the Host's. Does offering that filter risk the platform itself being found to discriminate, or to authorise/assist unlawful discrimination, notwithstanding ToS 6.1?
3. **Does the nationality filter need to be removed or restricted in WA**, given the apparent absence of a race exemption there?
4. Is the in-product warning adequate, or should the app show a jurisdiction-specific warning at the point a Host sets a preference (rather than only in the Terms at **ToS 6.4**)?
5. Should the age-bracket filter be treated differently from the nationality filter?

**Drafted position:** ToS section 6 states ShortTerm is a neutral platform that makes no selection decisions, places sole responsibility on the Host, warns expressly that the exemptions are narrow and vary by State, and takes a warranty plus indemnity. That is the best a document can do. **It does not answer whether the features themselves are lawful in every State.**

### B3. Limitation of liability (ToS 12.5)
Drafted as: nothing excludes non-excludable consumer guarantees (12.1), then liability limited to resupply of the service, noting the Service is free.

- **ACL s 64A is very likely unavailable** here: it permits limitation only for services **not** of a kind ordinarily acquired for personal, domestic or household use, and a consumer accommodation-introduction service almost certainly is of that kind. Confirm the clause is drafted so that it fails safely rather than being void as an unfair term.
- Consider whether a monetary cap should be added, and whether any cap is defensible for a free service under the unfair contract terms regime.

### B4. Unfair contract terms
Penalties **doubled on 28 March 2026** (Treasury Laws Amendment (Doubling Penalties for ACCC Enforcement) Act 2026): up to **$100m** for a body corporate. Please pressure-test the four clauses drafted with the UCT regime in mind:

- **ToS 19 (changes)** — 14 days' notice for material adverse changes, immediate effect for minor ones, right to leave. Is 14 days enough?
- **ToS 14 (suspension/termination)** — cause-based, with notice and a right of reply unless safety or law prevents it. Is the safety carve-out drawn too widely?
- **ToS 13 (indemnity)** — deliberately reciprocal: carve-out for our own breach/negligence, mitigation duty, no settlement without consent. Is that enough to survive s 24?
- **ToS 12 (liability)** — see B3.

### B5. Reviews and defamation (ToS 8, 10.3)
Reviews are public, free-text, and about identified real people, with no pre-moderation.

- The complaints process at **ToS 10.3** commits to acknowledging within **2 business days** and deciding within **14 days**. These numbers were chosen to be operable by a one-person team and to support an innocent-dissemination-style defence for digital intermediaries. **Confirm they are appropriate in the jurisdictions where the Stage 2 model defamation amendments (digital intermediary defences) have commenced** — commencement varies by State and could not be fully verified.
- **There is no right of reply feature.** A reviewed Member cannot publish a response. Consider whether to require one as a product change; it is a common mitigation.
- Consider whether the Terms should include an express pre-action notice requirement for defamation complaints.

### B6. Age assurance (ToS 3, Privacy 15)
Self-reported DOB, enforced client-side and by a database constraint at profile completion. No ID check, no age-assurance technology, no parental-consent flow. Drafted honestly as a representation and warranty, with a right to close the account.

- Confirm this is adequate given the product allows adults to invite strangers into a home.
- **Social Media Minimum Age (Part 4A, Online Safety Act; obligations from 10 December 2025):** research suggests ShortTerm falls **outside** the definition of an "age-restricted social media platform" on three grounds — its significant purpose is finding accommodation not social interaction; the Rules exclude services for sharing information about products or services; and the Rules' s 4A gate requires a **recommender feature** or a **logged-in endless-feed/feedback/time-limited feature**, neither of which the app has. **Please confirm, and consider documenting a written self-assessment**, since eSafety assesses service by service.

### B7. Governing law and forum (ToS 21)
Drafted as **non-exclusive** jurisdiction, with an express saving of the user's right to sue where they live and to use any tribunal or ombudsman — deliberately, because an exclusive forum clause against consumers across Australia is itself UCT-exposed. Confirm, and choose the State.

### B8. Real estate agent licensing
Not addressed in the original brief. The Terms disclaim any agency, letting or property-management role (**ToS 2.3**). The gateway concept in each State is acting as an agent **for reward** — e.g. NSW *Property and Stock Agents Act 2002* s 3, Qld *Property Occupations Act 2014* s 26. A pure introductions platform taking no money out of the accommodation transaction sits outside it.

**Forward-looking risk to advise on now:** the operator has mentioned a possible pay-per-contact or similar monetisation. A **flat subscription or listing fee paid for access to the platform** is materially safer than **a success fee on a completed match**, which starts to look like commission for effecting a letting. Please advise before any monetisation is built.

### B9. Contact email
The current privacy address is `privacidad@shortterm-app.com`. The documents use **`privacy@shortterm-app.com`** throughout — an English-language document for an Australian market should not route privacy complaints to a Spanish-language address. **Engineering must create this alias** or the address must be changed back in `config.ts`.

---

## C. Engineering follow-ups (product does not yet match, or the answer is unknown)

### C1. Confirm the Supabase hosting region ⚠️
The APP 8 overseas-disclosure section cannot be finalised without it. **Recommendation:** if the project is not already in `ap-southeast-2` (Sydney), consider moving it before launch — hosting in Australia materially reduces cross-border disclosure exposure and simplifies this section. Migrating later, with live user data, is far harder.

### C2. Build the web account-deletion page ⚠️
**Google Play requires two paths for any app that allows account creation:** an in-app deletion flow (which exists) **and** a **web-accessible deletion URL declared in the Data safety form**. That URL does not exist. Both documents reference `LEGAL.deletionUrl`; until the page is built, the reference must be removed or the app risks a Play rejection. Apple's Guideline 5.1.1(v) is satisfied by the in-app flow.

### C3. Implement a retention period, or change the wording ⚠️
There is no automated purge of anonymised profile rows or of the chat/Match/Review records that survive a deletion. The Policy proposes **12 months** and **flags this in a visible draft note at Privacy 11.3**. Either build the purge or rewrite 11.2–11.3 to describe what actually happens. **Do not publish a retention promise the system does not keep.**

### C4. Sensitive information consent
Privacy section 3 treats **nationality** as capable of revealing racial or ethnic origin, i.e. sensitive information requiring consent under APP 3.3. Confirm the sign-up flow presents this as a genuine, informed choice — an optional field with an explanation, not a required field buried in a form. If nationality is currently mandatory at profile completion, that should be reconsidered.

### C5. Automated decision-making (from 10 December 2026)
New APP 1.7–1.8 will require privacy policies to disclose personal information used in automated decision-making and the kinds of decisions made. **Privacy 5.2** already states that no decision significantly affecting rights is made solely automatically. **If ranking, matching, or automated suspension is ever introduced, this section must be updated.** (Obligation binds APP entities only — see D1.)

### C6. Online Safety Act industry codes
Phase 2 codes bind designated internet services and relevant electronic services from **9 March 2026**, tiered by risk and **with no small-operator exemption**. ShortTerm is both (user profiles, and 1:1 chat). The Terms now carry prohibited-content rules (**ToS 9**) and a complaints mechanism with response times (**ToS 10.3**, **10.5** escalation to eSafety), which is what the codes expect. **Still needed outside the documents:** a written risk assessment and a record of moderation actions.

### C7. Sentry session replay
`Sentry.mobileReplayIntegration()` and `feedbackIntegration()` are enabled in production. **Privacy 7.1 discloses this explicitly.** Consider enabling Sentry's text/image masking so replays do not capture message content and profile details — that would let this disclosure be softened, and reduces breach exposure.

---

## D. Corrections made to the original drafting brief

Recording these so the lawyer knows which facts were verified rather than assumed.

1. **Privacy Act may not bind the operator at all.** The **small business exemption (s 6D, turnover ≤ $3m) is still in force** as at September 2026 — it has not been repealed. The Policy therefore does not claim the Act applies; **Privacy 1.2** states honestly that the Act may not yet bind us and that we comply with the APPs voluntarily. **Advise on whether to opt in under s 6EA** (public register, all-or-nothing) — and note s 6D(4)(c)/(d) would drag the business in if personal information is ever disclosed **for a benefit, service or advantage**, which is directly relevant to any future monetisation.
2. **RDA s 12(3) does have a shared-residence exemption** — the brief's assumption that exemptions "generally do not extend to race" is wrong federally, and in NSW, Qld and SA. WA is the outlier. See B2.
3. **The statutory tort of serious invasion of privacy commenced 10 June 2025** and **applies regardless of the small business exemption**. It requires intentional or reckless conduct, is actionable without proof of damage, and has no platform safe harbour. Relevant to how quickly takedown requests are actioned.
4. **PostHog is on the EU region** (`https://eu.i.posthog.com`, per `eas.json`), not the US default. Disclosed accurately at Privacy 8.1.
5. **The app opens Google Maps** with a Listing's address as the search term (`buildMapsUrl`). This was not in the brief; disclosed at Privacy 6.4 and ToS 5.5.
6. **The public web listing page is genuinely minimal.** The `get_listing_preview` RPC deliberately withholds exact address, coordinates, description, house rules, bond and all host information. Documented at Privacy 6.3 — it is a good privacy story and worth stating. **Changed after this checklist was written:** the page now also shows whether bills are included, the photo count, a "new" badge and **how many people live in the house** (migration `20261109100000_listing_preview_teaser_fields.sql`; Privacy 6.3 and ToS 5.5 updated to match). The headcount is the one piece of household information now visible without signing in. It describes housemates who are usually not Members (Privacy 4.4), so confirm that publishing a bare count to anonymous visitors is acceptable.
7. **The exact address is shown in-app** to signed-in Members who open a Listing. ToS 5.5 tells Hosts this before they fill the field in.
8. **The ACL "consumer guarantees" prescribed wording is only mandatory for a warranty against defects**, not for every set of terms. The Terms therefore state the non-excludability principle (12.1) rather than reciting text that would imply a warranty against defects that is not being given.
9. **Real estate licensing** and the **Online Safety Act codes** were absent from the brief entirely; both are now addressed (B8, C6).
10. **No cookie policy.** The website sets no tracking cookies and carries no analytics; Privacy 16 says so and commits to publishing one before that changes. Confirm no analytics have since been added to the Next.js site.

---

## E. Questions only the operator can answer

1. Is the exact-address field intended to be visible to any signed-in Member who opens the Listing, or only to a Guest the Host has already accepted? The Terms describe the current behaviour; if that is not the intent, it is a product change, not a drafting change.
2. Is nationality mandatory or optional at profile completion? (Drives C4.)
3. Should the Terms and Policy be translated into Spanish? **Drafted English-only, deliberately** — two language versions of a binding document can disagree, and only one can govern. The pages show a short localised note to Spanish-locale visitors explaining that the English version is the operative one. If a Spanish version is wanted, it needs its own review and a clause saying which version prevails.
