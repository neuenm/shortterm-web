import { LEGAL } from "./config";
import type { LegalDocument } from "./types";

export const privacyDocument: LegalDocument = {
  title: "Privacy Policy",
  effectiveDate: LEGAL.effectiveDate,
  lastUpdated: LEGAL.lastUpdated,

  preamble: [
    {
      kind: "p",
      text: `This policy explains what personal information ${LEGAL.entity} (**ShortTerm**, **we**, **us**, **our**) collects when you use the ShortTerm app or the website at ${LEGAL.website}, why we collect it, who we share it with, and what you can do about it.`,
    },
    {
      kind: "p",
      text: "ShortTerm exists to introduce people who have a room to people who need one. Almost everything in your profile is there so that another person can decide whether you would be a good person to live with — which means most of it is meant to be seen. This policy is specific about what is visible, to whom, and what never is.",
    },
    {
      kind: "callout",
      text: "**We do not sell your personal information. We do not use it for advertising, and there are no advertising networks in the app.** We have never done either, and this policy would have to change before we could.",
    },
  ],

  sections: [
    {
      id: "about-this-policy",
      number: "1",
      heading: "About this policy, and how the Privacy Act applies to us",
      clauses: [
        {
          number: "1.1",
          blocks: [
            {
              kind: "p",
              text: "This policy is written to meet the Australian Privacy Principles (**APPs**) in the Privacy Act 1988 (Cth). It applies to everything we do through the app and the website.",
            },
          ],
        },
        {
          number: "1.2",
          blocks: [
            {
              kind: "callout",
              text: `**An honest note about our size.** ${LEGAL.entity} may currently be a "small business operator" under section 6D of the Privacy Act, because our annual turnover is $3 million or less. If so, the Act does not yet bind us by force of law. **We have chosen to handle personal information in accordance with the Australian Privacy Principles anyway**, and we treat every commitment in this policy as binding on us. If our turnover passes the threshold, or we opt in to the Act, or an exception in section 6D applies to us, the Act will bind us directly and this note will be removed.`,
            },
          ],
        },
        {
          number: "1.3",
          blocks: [
            {
              kind: "p",
              text: "**Personal information** means information or an opinion about an identified individual, or an individual who is reasonably identifiable. **Sensitive information** is a subset of it — including information about racial or ethnic origin — which the law protects more strictly. Section 3 explains where sensitive information comes up on ShortTerm.",
            },
          ],
        },
      ],
    },

    {
      id: "what-we-collect",
      number: "2",
      heading: "What personal information we collect",
      clauses: [
        {
          number: "2.1",
          blocks: [
            {
              kind: "p",
              text: "**Your account.** Your email address and password, or — if you sign in with Google — the basic Google profile information Google gives us for that purpose, being your name, email address and profile photo. We also record when you confirmed your email address.",
            },
          ],
        },
        {
          number: "2.2",
          blocks: [
            {
              kind: "p",
              text: "**Your profile.** Your full name; your profile photo; your date of birth; your gender; your nationality; the languages you speak; your bio; whether you are part of a couple; and your lifestyle and compatibility answers — food preferences, hobbies, music genres, smoking, pets, sleep schedule, occupation status, cleanliness, how often you have guests, drinking and social energy. Because ShortTerm is built for people moving to Australia, we also collect your visa type, your traveller type and the date you arrived in Australia.",
            },
          ],
        },
        {
          number: "2.3",
          blocks: [
            {
              kind: "p",
              text: "**Your Listings, if you are a Host.** The title, dates, minimum stay, description, house rules, photographs, weekly price, any couples price, the bond amount, whether bills are included, whether there is a private bathroom, your gender preference for applicants, whether couples are accepted, the suburb, and — optionally — an exact address, which we store as free text and never geocode ourselves.",
            },
          ],
        },
        {
          number: "2.4",
          blocks: [
            {
              kind: "p",
              text: "**Information about the household you live in.** A Listing includes counts describing your current housemates — how many smoke, have pets, work FIFO, their sleep schedules, occupation status, cleanliness, guest frequency, drinking and social energy, and a breakdown by nationality and by age bracket. These are counts by category, never named individuals. Section 4.4 explains how we treat this, because the people it describes are usually not ShortTerm members.",
            },
          ],
        },
        {
          number: "2.5",
          blocks: [
            {
              kind: "p",
              text: "**Your activity on the Service.** Your saved searches and search alerts; the Requests you send or receive; the messages you exchange in chat, including any photographs or personal details you choose to put in them; your Matches; the Reviews you write and receive; the reports you make about other Members or Listings, including the free-text detail; and who you have blocked.",
            },
          ],
        },
        {
          number: "2.6",
          blocks: [
            {
              kind: "p",
              text: "**Technical information.** A push notification token for each device you sign in on; the time you were last active; and, in production builds of the app, crash and error reports and product analytics events (see section 5).",
            },
          ],
        },
        {
          number: "2.7",
          blocks: [
            {
              kind: "p",
              text: "**If you write to us.** Anything you send us through the website contact form or by email, including your name, your email address and whatever you tell us.",
            },
          ],
        },
      ],
    },

    {
      id: "sensitive-information",
      number: "3",
      heading: "Sensitive information, and your consent",
      clauses: [
        {
          number: "3.1",
          blocks: [
            {
              kind: "p",
              text: "Some of what a compatibility profile contains is **sensitive information** under the Privacy Act. In particular, your nationality can reveal your racial or ethnic origin. The nationality breakdown of a Host's household can do the same for the people living there.",
            },
          ],
        },
        {
          number: "3.2",
          blocks: [
            {
              kind: "p",
              text: "We collect this information for one reason: matching people who are going to share a home depends on it, and our members ask for it. **We collect it only with your consent.** By choosing to complete those fields and publish your profile or Listing, you consent to us collecting that information and displaying it to other signed-in Members as this policy describes.",
            },
          ],
        },
        {
          number: "3.3",
          blocks: [
            {
              kind: "p",
              text: "You can withdraw that consent at any time by removing the information from your profile or Listing, or by deleting your account. Fields that are optional can be left blank, and you can still use the Service.",
            },
          ],
        },
        {
          number: "3.4",
          blocks: [
            {
              kind: "p",
              text: "We do not ask for, and you should not put into your profile, Listing or chat messages: health or medical information, information about your sexual orientation, religious or political beliefs, criminal record, biometric information, or government identifiers such as a passport, driver licence, Medicare or tax file number. **We will never ask you for a government identifier or a payment detail**, and if someone on ShortTerm asks you for one, report them.",
            },
          ],
        },
      ],
    },

    {
      id: "how-we-collect",
      number: "4",
      heading: "How we collect it",
      clauses: [
        {
          number: "4.1",
          blocks: [
            {
              kind: "p",
              text: "**From you, mostly.** Nearly everything above is information you type in or upload yourself.",
            },
          ],
        },
        {
          number: "4.2",
          blocks: [
            {
              kind: "p",
              text: "**From Google**, if you choose to sign in with Google, and only what is needed to authenticate you.",
            },
          ],
        },
        {
          number: "4.3",
          blocks: [
            {
              kind: "p",
              text: "**From other Members.** A Review or a report about you is written by someone else. So is anything another Member says about you in a chat.",
            },
          ],
        },
        {
          number: "4.4",
          blocks: [
            {
              kind: "p",
              text: "**From Hosts, about people who are not Members.** The household information in section 2.4 describes people who have usually not signed up to ShortTerm and have not dealt with us at all. We only accept it as aggregate counts, never as named individuals, so it should not identify anyone. Our Terms of Service require every Host to confirm that they are entitled to share it and that they have told their housemates it is published. If you live in a share house that is listed on ShortTerm and you are unhappy about that, write to us at " +
                LEGAL.privacyEmail +
                " and we will look into it.",
            },
          ],
        },
        {
          number: "4.5",
          blocks: [
            {
              kind: "p",
              text: "**Automatically**, from your device: your push token, your last-active timestamp, and, in production builds only, crash reports and analytics events.",
            },
          ],
        },
      ],
    },

    {
      id: "why-we-use-it",
      number: "5",
      heading: "Why we use it",
      clauses: [
        {
          number: "5.1",
          blocks: [
            {
              kind: "p",
              text: "We use personal information to:",
            },
            {
              kind: "ul",
              items: [
                "create and run your account, and sign you in",
                "show your profile and your Listings to other Members, which is the point of the Service",
                "let Members search and filter Listings, and run your saved search alerts",
                "carry your Requests, chats and Matches between you and other Members",
                "publish Reviews on the profile of the person reviewed",
                "send you the notifications and service emails described in our Terms of Service",
                "investigate reports, moderate content, enforce our Terms, and keep people safe",
                "fix bugs and crashes, and understand how the app is used so we can improve it",
                "meet our legal obligations and respond to lawful requests",
              ],
            },
          ],
        },
        {
          number: "5.2",
          blocks: [
            {
              kind: "p",
              text: "**Automated processing.** Some things on ShortTerm happen automatically: search results are filtered and ordered by the criteria you set, saved-search alerts are matched to new Listings, and reminders are sent on a schedule. These are mechanical filters, not judgements about you. **We do not make decisions solely by automated means that significantly affect your rights or interests** — decisions about warnings, suspensions and account closures are made by a person. If that ever changes, we will update this policy to describe it, as the Privacy Act will require from 10 December 2026.",
            },
          ],
        },
        {
          number: "5.3",
          blocks: [
            {
              kind: "p",
              text: "**We do not use your personal information to train machine learning models, and we do not sell it, rent it, or share it with data brokers or advertisers.**",
            },
          ],
        },
      ],
    },

    {
      id: "who-sees-it",
      number: "6",
      heading: "Who can see your information",
      clauses: [
        {
          number: "6.1",
          blocks: [
            {
              kind: "p",
              text: "**Other signed-in Members** can see your profile as described in our Terms of Service — your name, photo, age, languages, bio, gender, nationality, couple status, lifestyle and travel answers, a rough last-active indicator, your Listings, and any Reviews about you.",
            },
          ],
        },
        {
          number: "6.2",
          blocks: [
            {
              kind: "p",
              text: "**Your exact date of birth is never shown to another Member.** A function on our servers removes it before any other Member can read your profile; they see only your age. Your last-active time is shown only as a coarse bucket — today, or this week — never as a precise timestamp. Both are deliberate design choices and we intend to keep them.",
            },
          ],
        },
        {
          number: "6.3",
          blocks: [
            {
              kind: "p",
              text: "**The public web.** A Listing can be shared as a link that opens a page on our website, which anyone can view without signing in. That page deliberately shows only: the title, suburb, dates, room details, price, whether bills are included, primary language, whether couples are accepted, whether there is a private bathroom, the gender preference, how many people live in the house (a single number, nothing about who they are), the cover photo, how many photos the Listing has, and whether it was published in the last few days. It does **not** show the exact address, the coordinates, the description, the house rules, the bond amount, any other household information, or anything at all about the Host.",
            },
          ],
        },
        {
          number: "6.4",
          blocks: [
            {
              kind: "p",
              text: "**Google Maps.** If you open the map on a Listing inside the app, your device opens Google Maps with the Listing's address or suburb as the search term. That request goes to Google under Google's own privacy policy. We do not send Google anything about you.",
            },
          ],
        },
        {
          number: "6.5",
          blocks: [
            {
              kind: "p",
              text: "**Reports are private.** Only you can see a report you have made. We see it, and we act on it, but we do not show it to the person you reported.",
            },
          ],
        },
      ],
    },

    {
      id: "service-providers",
      number: "7",
      heading: "The providers we use",
      clauses: [
        {
          number: "7.1",
          blocks: [
            {
              kind: "p",
              text: "We use a small number of providers to run the Service. They process personal information on our behalf, under their own terms, and only for the purposes we engage them for:",
            },
            {
              kind: "ul",
              items: [
                "**Supabase** — our database, authentication, file storage and realtime chat infrastructure. Effectively all of the personal information described in this policy is stored and processed there.",
                "**Google** — only if you choose to sign in with Google. Google gives us your name, email address and profile photo for authentication.",
                "**Sentry** — crash and error monitoring in production builds of the app. **Sentry's session replay feature is enabled, which means a recording of what was on your screen when an error occurred may include personal information**, including your own or another Member's profile details or message content. Sentry's user feedback feature is also enabled, so anything you submit through it goes to Sentry.",
                "**PostHog** — product analytics in production builds only, on a defined list of events: signing up, completing a profile, publishing a Listing, sending or receiving a Request, Matches, Reviews, reports and blocks. Session replay and error tracking are deliberately switched off in PostHog.",
                "**Brevo (Sendinblue)** — transactional email only, such as alerting our team to a new report or a message from the website contact form.",
                "**Supabase Auth's email service** — confirmation and password-recovery emails.",
                "**Expo's push notification service** — delivering push notifications, which it does through Apple's and Google's push services using your device token.",
              ],
            },
          ],
        },
        {
          number: "7.2",
          blocks: [
            {
              kind: "p",
              text: "**There is no payment processor, no advertising network, and no other analytics, CRM or marketing tool anywhere in the Service.**",
            },
          ],
        },
        {
          number: "7.3",
          blocks: [
            {
              kind: "p",
              text: "We may change providers as the Service grows. If we do, we will update this list, and if a change materially affects how your information is handled we will tell you.",
            },
          ],
        },
        {
          number: "7.4",
          blocks: [
            {
              kind: "p",
              text: "We may also disclose personal information where the law requires or authorises it — to a court, a regulator, the police or another enforcement body — or where we reasonably believe it is necessary to prevent a serious threat to someone's life, health or safety, or to investigate unlawful activity. If we ever sell or transfer the business, information may pass to the buyer, who would be bound by this policy.",
            },
          ],
        },
      ],
    },

    {
      id: "overseas",
      number: "8",
      heading: "Where your information goes (overseas disclosure)",
      clauses: [
        {
          number: "8.1",
          blocks: [
            {
              kind: "p",
              text: "Some of our providers are outside Australia, which means your personal information is likely to be disclosed overseas. As best we can state it:",
            },
            {
              kind: "ul",
              items: [
                `**Supabase** — ${LEGAL.supabaseRegion}. Supabase is a United States company and also operates infrastructure in other countries.`,
                "**PostHog** — the European Union (our analytics are sent to PostHog's EU region, hosted in Germany). PostHog is a United States company.",
                "**Sentry** — the United States.",
                "**Brevo (Sendinblue)** — France and the European Union.",
                "**Expo** — the United States. Push notifications are then delivered through Apple's and Google's services, which are also United States companies.",
                "**Google** — the United States and other countries in which Google operates.",
              ],
            },
          ],
        },
        {
          number: "8.2",
          blocks: [
            {
              kind: "p",
              text: "Before we disclose personal information to an overseas recipient we take reasonable steps to satisfy ourselves that it will be handled consistently with the Australian Privacy Principles, including by relying on the provider's own contractual data-protection commitments.",
            },
          ],
        },
        {
          number: "8.3",
          blocks: [
            {
              kind: "p",
              text: "You should know that an overseas recipient may not be subject to Australian privacy law, and that if one of them mishandles your information you may not be able to seek redress under the Privacy Act or from the Australian Information Commissioner.",
            },
          ],
        },
      ],
    },

    {
      id: "security",
      number: "9",
      heading: "How we protect it",
      clauses: [
        {
          number: "9.1",
          blocks: [
            {
              kind: "p",
              text: "We take reasonable steps to protect personal information from misuse, interference and loss, and from unauthorised access, modification or disclosure. In practice that means: access to data is controlled at the database level by row-level security rules, so a Member can only read what they are entitled to read; your exact date of birth is stripped server-side rather than merely hidden in the app; traffic is encrypted in transit; passwords are held by our authentication provider and never by us in readable form; and access to production systems is limited to the people who need it.",
            },
          ],
        },
        {
          number: "9.2",
          blocks: [
            {
              kind: "p",
              text: "No system is perfectly secure. Please use a strong, unique password, and think before you put your phone number, workplace, or exact address into a chat message or a bio.",
            },
          ],
        },
      ],
    },

    {
      id: "data-breaches",
      number: "10",
      heading: "If something goes wrong — data breaches",
      clauses: [
        {
          number: "10.1",
          blocks: [
            {
              kind: "p",
              text: "If we suspect a data breach, we assess it promptly and take steps to contain it. Where there are reasonable grounds to suspect an eligible data breach, we will complete our assessment within 30 days.",
            },
          ],
        },
        {
          number: "10.2",
          blocks: [
            {
              kind: "p",
              text: "**If a breach is likely to result in serious harm to you, we will tell you** — what happened, what information was involved, and what we recommend you do — and we will notify the Office of the Australian Information Commissioner. We commit to this whether or not the Notifiable Data Breaches scheme in Part IIIC of the Privacy Act binds us at the time.",
            },
          ],
        },
      ],
    },

    {
      id: "retention",
      number: "11",
      heading: "How long we keep it",
      clauses: [
        {
          number: "11.1",
          blocks: [
            {
              kind: "p",
              text: "While your account is open, we keep your information for as long as you keep it there. You can edit or remove most of it yourself at any time.",
            },
          ],
        },
        {
          number: "11.2",
          blocks: [
            {
              kind: "p",
              text: `After you delete your account, your anonymised profile row and the shared records described in section 12.2 are kept for ${LEGAL.retentionPeriod}, after which we delete or further de-identify what is no longer needed. We keep information for longer only where a law requires it, or where we need it to deal with an actual or anticipated legal claim, a regulatory request, or an investigation into fraud or a safety incident.`,
            },
          ],
        },
        {
          number: "11.3",
          blocks: [
            {
              kind: "callout",
              text: "**Draft note — to be resolved before this policy is published.** The retention period above is a proposal, not a description of something the product already does. There is currently no automated purge of anonymised account rows or of the chat, Match and Review records that survive a deletion. Either this commitment must be implemented in the product, or the wording must change to describe what actually happens.",
            },
          ],
        },
        {
          number: "11.4",
          blocks: [
            {
              kind: "p",
              text: "Backups are kept on a rolling basis and are overwritten in the ordinary course. Information deleted from the live system may persist in a backup for a short period before it is overwritten.",
            },
          ],
        },
      ],
    },

    {
      id: "deleting",
      number: "12",
      heading: "Deleting your account, and what happens to your data",
      clauses: [
        {
          number: "12.1",
          blocks: [
            {
              kind: "p",
              text: `You can delete your account yourself from inside the app, or at ${LEGAL.deletionUrl}. When you do, all of this happens at once:`,
            },
            {
              kind: "ol",
              items: [
                "any Listings you host are closed;",
                "your own Requests that are still open are cancelled;",
                "any Match choice of yours that the other person had not yet confirmed is cleared;",
                "your push notification tokens are deleted;",
                "your profile is anonymised — your name, photo, bio and every lifestyle and travel field are cleared, and the row is flagged as deleted;",
                "your profile photo is deleted from storage; and",
                "your sign-in identity, including your email address and password, is permanently deleted from our authentication provider.",
              ],
            },
            {
              kind: "p",
              text: "You cannot sign in again afterwards, and we cannot restore the account.",
            },
          ],
        },
        {
          number: "12.2",
          blocks: [
            {
              kind: "p",
              text: "**What we deliberately do not delete.** We do not delete Listings, chat messages, completed Matches or Reviews that involve another Member. Deleting those would destroy the other person's own chat history and their own review record, which belongs to them as much as to you. Everywhere your details used to appear, the other Member now sees a generic deleted-account placeholder instead of your name or photo.",
            },
          ],
        },
        {
          number: "12.3",
          blocks: [
            {
              kind: "p",
              text: "**So we do not promise to erase everything, because that would not be true.** What we promise is that after deletion nothing left in the system identifies you: your identity is gone from our authentication provider, and your profile is stripped.",
            },
          ],
        },
        {
          number: "12.4",
          blocks: [
            {
              kind: "p",
              text: `If you want to understand exactly what remains after your deletion, ask us at ${LEGAL.privacyEmail} before you delete the account — once it is done we can no longer connect a request to it.`,
            },
          ],
        },
      ],
    },

    {
      id: "your-rights",
      number: "13",
      heading: "Getting at your information, and correcting it",
      clauses: [
        {
          number: "13.1",
          blocks: [
            {
              kind: "p",
              text: "Most of your information is in the app, and you can view and change it there at any time.",
            },
          ],
        },
        {
          number: "13.2",
          blocks: [
            {
              kind: "p",
              text: `You can also ask us for a copy of the personal information we hold about you, or ask us to correct it if it is wrong, out of date or incomplete. Email ${LEGAL.privacyEmail}. **We will respond within 30 days**, and we do not charge for this.`,
            },
          ],
        },
        {
          number: "13.3",
          blocks: [
            {
              kind: "p",
              text: "We may need to confirm it is really you before we hand anything over. There are limited situations in which we may refuse — for example where giving you the information would unreasonably affect another person's privacy, such as the private content of someone else's report about you, or where a law requires us to refuse. If we refuse, we will tell you why in writing and how to complain about it.",
            },
          ],
        },
      ],
    },

    {
      id: "complaints",
      number: "14",
      heading: "Complaints",
      clauses: [
        {
          number: "14.1",
          blocks: [
            {
              kind: "p",
              text: `**Come to us first.** Email ${LEGAL.privacyEmail} and tell us what happened. We will acknowledge your complaint within **5 business days** and give you a decision within **30 days**, or explain why we need longer.`,
            },
          ],
        },
        {
          number: "14.2",
          blocks: [
            {
              kind: "p",
              text: "**If you are not satisfied with our answer**, you can complain to the Office of the Australian Information Commissioner: oaic.gov.au, 1300 363 992, or GPO Box 5218, Sydney NSW 2001. The OAIC will usually expect you to have raised it with us first.",
            },
          ],
        },
        {
          number: "14.3",
          blocks: [
            {
              kind: "p",
              text: "For a complaint about content or another Member's behaviour rather than about privacy, see the complaints process in our Terms of Service.",
            },
          ],
        },
      ],
    },

    {
      id: "children",
      number: "15",
      heading: "Children",
      clauses: [
        {
          number: "15.1",
          blocks: [
            {
              kind: "p",
              text: "**ShortTerm is for adults.** You must be at least 18 to complete a profile, and the app will not let you finish signing up with a date of birth that makes you younger. We do not knowingly collect personal information from anyone under 18, and the Service is not designed for or directed at children.",
            },
          ],
        },
        {
          number: "15.2",
          blocks: [
            {
              kind: "p",
              text: `We rely on the date of birth you give us. We do not verify identity documents or use age-assurance technology. If you believe someone under 18 has an account, tell us at ${LEGAL.privacyEmail} and we will close it and delete their information.`,
            },
          ],
        },
      ],
    },

    {
      id: "website",
      number: "16",
      heading: "The website",
      clauses: [
        {
          number: "16.1",
          blocks: [
            {
              kind: "p",
              text: "Our website exists to describe the app, answer common questions, and open shared Listing links. It does not require an account, and it does not carry advertising or third-party tracking.",
            },
          ],
        },
        {
          number: "16.2",
          blocks: [
            {
              kind: "p",
              text: "If you use the contact form, what you write reaches us by email. We do not use cookies to track you across sites. If we ever add analytics or cookies to the website, we will publish a cookie notice and update this policy first.",
            },
          ],
        },
      ],
    },

    {
      id: "changes-to-policy",
      number: "17",
      heading: "Changes to this policy",
      clauses: [
        {
          number: "17.1",
          blocks: [
            {
              kind: "p",
              text: "We will update this policy when the Service or the law changes. The date at the top always tells you when it last changed.",
            },
          ],
        },
        {
          number: "17.2",
          blocks: [
            {
              kind: "p",
              text: "If a change materially affects how we handle your personal information, we will tell you in the app or by email at least 14 days before it takes effect.",
            },
          ],
        },
      ],
    },

    {
      id: "privacy-contact",
      number: "18",
      heading: "How to contact us about privacy",
      clauses: [
        {
          blocks: [
            {
              kind: "ul",
              items: [
                `**Email:** ${LEGAL.privacyEmail}`,
                `**General enquiries:** ${LEGAL.contactEmail}`,
                `**Post:** ${LEGAL.entity}, ${LEGAL.address}, Australia`,
              ],
            },
          ],
        },
      ],
    },
  ],
};
