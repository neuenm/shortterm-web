import { buildDocument, callout, ol, p, ul, unnumbered } from "../build";
import { LEGAL, postalAddress } from "../config";

const address = postalAddress("en");

export const privacyEn = buildDocument({
  preamble: [
    p(
      `This policy explains what personal data ${LEGAL.holder} (**ShortTerm**, **we**, **us**) processes when you use the ShortTerm app or the website ${LEGAL.website}: what for, on what legal basis, who we share it with, how long we keep it and what rights you have.`,
    ),
    p(
      "ShortTerm exists to put people who have a room in touch with people who need one. Almost everything in your profile is there so that another person can decide whether you would get on living together, so much of it is meant to be seen. This policy is specific about what is visible, to whom, and what never is.",
    ),
    callout(
      "**We don't sell your data. We don't use it for advertising, and there are no advertising networks in the app.** Usage statistics are only switched on if you allow them, and you can withdraw that permission at any time.",
    ),
  ],

  sections: [
    {
      id: "controller",
      heading: "Who is responsible for your data",
      clauses: [
        [
          p(
            `The data controller is **${LEGAL.holder}**, Spanish tax id (NIE) ${LEGAL.taxId}, of ${address}. Phone: ${LEGAL.phone}. For any question about your data, write to **${LEGAL.privacyEmail}**.`,
          ),
        ],
        [
          p(
            "We are established in Spain, so we process your data under the EU General Data Protection Regulation (**GDPR**) and the Spanish Organic Law 3/2018 (**LOPDGDD**), wherever you live. We haven't appointed a data protection officer because we aren't required to; the controller answers every query directly at the address above.",
          ),
        ],
      ],
    },

    {
      id: "data-we-collect",
      heading: "What data we process",
      clauses: [
        [
          p(
            "**Your account.** Your email and password (stored encrypted by our authentication provider; we never see it), or, if you sign in with Google, the name, email and photo Google gives us to identify you. We also keep when you created the account and when you confirmed your email, and the **record of your acceptance** of the Terms: which version you accepted, when, and that you declared you are 18 or older.",
          ),
        ],
        [
          p(
            "**Your profile.** Your name, main language and gender are required. Everything else is optional: your photo, bio, date of birth, nationality, other languages, occupation, whether you work FIFO, your habits (whether you smoke, have pets, your sleep schedule, cleanliness, visitors, drinking and social energy), your tastes (food, hobbies and music), your visa type, your traveller type, since when you have been in Australia, and whether you want to show your age.",
          ),
        ],
        [
          p(
            "**Your listings, if you are a host.** The stay type, dates, minimum stay, weekly price and couples price, bond, whether bills are included, whether there is a private bathroom, whether there is off-street parking, bedrooms and bathrooms, the house's languages, who the room is for, whether couples are accepted, the suburb and, if you choose, the exact address (stored as text and never geocoded by us), the description (with the house rules), the photos, and the aggregate information about the house described in section §{housemates}.",
          ),
        ],
        [
          p(
            "**What you do on the Service.** Your requests (dates and whether they are couple requests), the text messages you send and receive in chat, your matches, the reviews you write and receive, the reports you make (reason and detail), who you block, your search alerts, your notifications and notification settings, and the messages you send to support from the app, together with your email so we can reply.",
          ),
        ],
        [
          p(
            "**Technical data.** A notification token for each device you sign in on, with its platform and app language; the time you were last active; the IP address and technical details of each connection, which our providers log for security; and, in the production version of the app, error reports (device model, operating system, app version, the error and your account id). **Usage statistics** are only collected if you allow them (section §{app-sdks}).",
          ),
        ],
        [
          p(
            "**What only your device keeps.** Some preferences — language, theme, host or guest mode, couple search or your answer about statistics — are stored only on your phone and never reach us.",
          ),
        ],
        [
          p(
            "**What we don't ask for.** We don't ask for, and ask you not to put in your profile, listings or messages: health information, sexual orientation, religious or political beliefs, criminal records, biometric data, or identity documents such as a passport or tax number. **We will never ask you for an identity document or payment details**; if someone on ShortTerm asks you for them, report them.",
          ),
        ],
      ],
    },

    {
      id: "housemates",
      heading: "Information about housemates",
      clauses: [
        [
          p(
            "A listing can include aggregate information about the people who already live in the house: how many there are and how many smoke, work FIFO, their sleep schedules, occupation and drinking, a breakdown by nationality and by age bracket, and their tastes; plus what the house is like as a whole: how tidy it is, how often there are visitors, whether there are pets and its vibe. The host gives it to us.",
          ),
        ],
        [
          p(
            "What it says about the people is counts, never names or photos, and we show it so someone looking for a room knows who they would be living with. The Terms require the host to tell their housemates and not to publish anything that identifies them. Even so, in a very small house someone might work out who is who.",
          ),
        ],
        [
          p(
            `If you live in a house listed on ShortTerm and don't want information about you to appear, write to us at ${LEGAL.privacyEmail}: you can object, and we will remove or correct that information.`,
          ),
        ],
      ],
    },

    {
      id: "nationality",
      heading: "Your nationality",
      clauses: [
        [
          p(
            "Nationality can reveal a person's racial or ethnic origin, which the law specially protects. That's why your nationality is **optional** on ShortTerm: we only process it if you choose to add it to your profile, on the basis of your consent. You can delete it from your profile at any time, and from then on we stop using it.",
          ),
        ],
        [
          p(
            "If you add it, signed-in members can see it, it counts towards \"things in common\" when it matches someone in the house, and guests can filter listings by their housemates' nationality (see the Terms).",
          ),
        ],
      ],
    },

    {
      id: "purposes",
      heading: "What we use your data for, and on what legal basis",
      clauses: [
        [
          ul(
            "**Providing the Service**: creating and running your account, showing your profile and listings, search and alerts, requests, chat, matches, reviews, notifications and support. Basis: **performance of the contract** you accept with the Terms (Art. 6(1)(b) GDPR).",
            "**The optional data in your profile**, including nationality and date of birth. Basis: your **consent** (Art. 6(1)(a)), which you give by adding it and withdraw by deleting it.",
            "**Recording your acceptance of the Terms and your age declaration.** Basis: the **legal obligations** of electronic contracting (Art. 6(1)(c)) and our **legitimate interest** in being able to prove it (Art. 6(1)(f)).",
            "**Keeping the community safe**: reviewing reports, moderating content, enforcing the Terms, preventing fraud, spam and abuse (including automatic sending limits) and responding to authorities. Basis: our and our members' **legitimate interest** in a safe Service (Art. 6(1)(f)), and the **legal obligations** that apply to us (Art. 6(1)(c)).",
            "**Finding and fixing bugs** using the app's crash reports. Basis: our **legitimate interest** in the Service working (Art. 6(1)(f)).",
            "**Usage statistics** to understand how the app is used and improve it. Basis: your **consent** (Art. 6(1)(a) GDPR and Art. 22(2) of the Spanish LSSI). Without it, nothing is sent.",
            "**Complying with the law, responding to authorities and defending legal claims.** Basis: **legal obligation** (Art. 6(1)(c)) and **legitimate interest** (Art. 6(1)(f)).",
          ),
        ],
        [
          p(
            "Where the basis is our legitimate interest, we have checked that your rights don't override it, and you can object at any time (section §{your-rights}). **We don't use your data to train artificial intelligence models, we don't sell or rent it, and we don't share it with data brokers or advertisers.**",
          ),
        ],
      ],
    },

    {
      id: "automated",
      heading: "Automated processes",
      clauses: [
        [
          p("Some things happen automatically:"),
          ul(
            "search filters and orders listings by the criteria you choose and by how much of your dates they cover;",
            "search **hides listings whose preference doesn't admit the gender in your profile**, and the app won't let you request them;",
            "the app compares your profile with the house information and shows you and the host how many \"things in common\" you have; it doesn't rank or exclude anyone because of it;",
            "alerts look for new listings that match your criteria;",
            "listings, requests and alerts expire when their dates pass, and reminders are sent on fixed dates;",
            "there are automatic limits on how many requests and messages can be sent in a short time.",
          ),
        ],
        [
          p(
            "These are mechanical filters, not judgements about you. **We don't make decisions based solely on automated processing that produce legal effects concerning you or similarly significantly affect you**: warnings, suspensions and account closures are decided by a person. Nor do we build profiles for advertising.",
          ),
        ],
      ],
    },

    {
      id: "who-sees",
      heading: "Who can see your data",
      clauses: [
        [
          p(
            "**Signed-in members** can see your profile: your name, photo, age (unless you hide it in Settings), languages, bio, gender, nationality, habits and interests, occupation, travel details, the date you joined, a rough indication of when you were last active, your badges, your listings and the reviews about you. Someone who has a request with you also sees what you write to them in chat.",
          ),
        ],
        [
          p(
            "**Nobody else ever sees your exact date of birth**: our servers remove it before another member can read your profile, and only show your age, if you have it visible. Your last activity is only shown roughly (today or this week).",
          ),
        ],
        [
          p(
            "**The public website.** A listing can be shared as a link that opens a page on our website, visible without signing in. That page shows only: the title, suburb, dates, room details, price, whether bills are included, main language, whether couples are accepted, whether there is a private bathroom, whether there is off-street parking, who the room is for, how many people live in the house (just the number), the cover photo, the number of photos and whether the listing is recent. **It doesn't show** the exact address, the description, the bond, any other house information or anything about the host.",
          ),
        ],
        [
          p(
            "**Photos** on profiles and listings are stored at web addresses that can't be guessed but are public: anyone who has the exact link to a photo can see it without signing in.",
          ),
        ],
        [
          p(
            "**Google Maps.** If you open a listing's map in the app, your device opens Google Maps searching for the listing's address or suburb. Google receives that search under its own privacy policy; we don't send it anything about you.",
          ),
        ],
        [
          p(
            "**Reports are private.** Only we see them; the person reported doesn't see your report or learn who made it.",
          ),
        ],
      ],
    },

    {
      id: "providers",
      heading: "The providers we use",
      clauses: [
        [
          p(
            "We use a small number of providers who process data on our behalf (processors), under contracts that require them to use it only to provide their service to us and to protect it:",
          ),
          ul(
            "**Supabase, Inc.** — database, authentication, photo storage and realtime chat, including sending confirmation and password-reset emails. Practically all the data in this policy is stored here. Servers in **Ireland (EU)**.",
            "**Functional Software, Inc. (Sentry)** — app error reports. Servers in **Germany (EU)**.",
            "**PostHog, Inc.** — usage statistics, **only if you allow them**. Servers in the **EU**.",
            "**Sendinblue SAS (Brevo)** — sending email: internal alerts about new reports and support messages, and your account emails where applicable. **France (EU)**.",
            "**650 Industries, Inc. (Expo)** — sending push notifications, delivered through Apple's and Google's services using your device token. The notification text (for example, the start of a message) passes through these services. **United States**.",
            "**Google** — only if you sign in with Google. **United States and other countries**.",
            "**Vercel, Inc.** — website hosting. **United States** and a global network.",
            `**Namecheap, Inc.** — forwarding @shortterm-app.com email to the mailbox where we read it, hosted by ${LEGAL.mailboxProvider}. **United States**.`,
          ),
        ],
        [
          p(
            "**There is no payment processor, advertising network or other analytics, CRM or marketing tool in the Service.** If we change providers we will update this list, and if the change materially affects your data we will tell you.",
          ),
        ],
        [
          p(
            "We may also disclose data where the law requires or allows it — to courts, authorities or the police — or where necessary to protect someone's life or physical safety. If we sell or transfer the business, the data would pass to the buyer, who would be bound by this policy.",
          ),
        ],
      ],
    },

    {
      id: "transfers",
      heading: "Transfers outside the European Economic Area",
      clauses: [
        [
          p(
            "We store your data in the European Union. Some providers are United States companies or process data there (Expo, Google, Vercel, Namecheap, and support access by Supabase, Sentry and PostHog). In those cases the transfer relies on the **EU-US Data Privacy Framework** where the provider is certified and, otherwise, on the **standard contractual clauses** approved by the European Commission (Art. 46 GDPR). You can ask us for a copy of the applicable safeguards.",
          ),
        ],
        [
          p(
            "Also, by the very nature of the Service, your profile and listings will be seen by members who are in **Australia**, a country without an EU adequacy decision. That disclosure is necessary to provide the Service you ask us for (Art. 49(1)(b) GDPR).",
          ),
        ],
      ],
    },

    {
      id: "retention",
      heading: "How long we keep your data",
      clauses: [
        [
          ul(
            "**Your account and profile**: while you have the account. You can edit or delete almost everything at any time. When you delete the account, your profile is anonymised immediately.",
            "**Alerts, notifications, notification settings, blocks you made and support messages**: deleted when you delete your account.",
            "**Notifications**: 12 months at most.",
            "**Support messages**: 12 months in the database and 12 months in our mailbox.",
            "**Reports**: 24 months, so we can spot repeat offenders.",
            "**Conversations, matches and reviews with another member**: while the other person keeps their account, because they are part of their history; once both accounts are deleted, they are erased within 30 days.",
            "**Record of acceptance of the Terms**: kept as proof of acceptance; once the account is deleted it is linked only to the anonymous record, without your email or name.",
            "**Usage statistics (PostHog)**: 12 months.",
            "**Error reports (Sentry)**: up to 90 days.",
            "**Backups**: overwritten automatically within 7 days, so something deleted may remain in a backup for that time.",
          ),
        ],
        [
          p(
            "Where the law requires it, we will keep data **blocked** — not used, and available only to courts and authorities — for the limitation period of any possible liability (Art. 32 LOPDGDD), and then delete it.",
          ),
        ],
      ],
    },

    {
      id: "security",
      heading: "How we protect your data",
      clauses: [
        [
          p(
            "We apply appropriate technical and organisational measures: access to data is controlled in the database itself with row-level rules, so each member can only read what they are entitled to; the date of birth is removed on the server, not just hidden in the app; connections are encrypted; passwords are stored encrypted by the authentication provider; and only the controller has access to production systems.",
          ),
        ],
        [
          p(
            "No system is perfectly secure. Use a strong, unique password, and think before putting your phone number, workplace or an exact address in a message or your bio.",
          ),
        ],
      ],
    },

    {
      id: "breaches",
      heading: "If something goes wrong: data breaches",
      clauses: [
        [
          p(
            "If we suffer a security breach affecting personal data, we will notify the Spanish Data Protection Agency (AEPD) within 72 hours of becoming aware of it, unless it is unlikely to result in a risk to people. **If it is likely to result in a high risk to you, we will tell you** without delay: what happened, what data is affected and what we recommend you do.",
          ),
        ],
      ],
    },

    {
      id: "your-rights",
      heading: "Your rights",
      clauses: [
        [
          p("You have the right to:"),
          ul(
            "**access** your data and get a copy;",
            "**rectify** it if it is inaccurate or incomplete;",
            "**erase** it (you can delete your account yourself; see section §{deleting});",
            "**restrict** its processing in certain cases;",
            "**portability**: receive the data you gave us in a structured, commonly used format;",
            "**object** to processing based on our legitimate interest;",
            "**withdraw your consent** at any time, without affecting what was processed before (for example, by switching off statistics in Settings or deleting an optional detail); and",
            "not be subject to decisions based solely on automated processing with legal or similarly significant effects.",
          ),
        ],
        [
          p(
            `You can see and change most of your data in the app. For anything else, write to **${LEGAL.privacyEmail}** from your account's email, or tell us how we can check it's you. We will reply within **one month** at most (extendable by two more months for complex requests, in which case we will tell you), free of charge. We may refuse a request only where the law allows — for example, if it would affect someone else's rights, such as the content of a report about you — and we will explain why.`,
          ),
        ],
        [
          p(
            "If you believe we haven't handled your data properly, you can complain to the **Spanish Data Protection Agency** (www.aepd.es; C/ Jorge Juan 6, 28001 Madrid, Spain). We would appreciate it if you wrote to us first so we can try to resolve it. If you live in Australia, you can also contact the Office of the Australian Information Commissioner (oaic.gov.au).",
          ),
        ],
      ],
    },

    {
      id: "deleting",
      heading: "Deleting your account, and what happens to your data",
      clauses: [
        [
          p(
            `You can delete your account from the app (Settings → Delete account) or, if you no longer have access, by asking as explained at ${LEGAL.deletionUrl}. When you do, all of this happens at once:`,
          ),
          ol(
            "your listings are closed and their exact address erased;",
            "your pending requests are withdrawn;",
            "any match choice of yours the other person hadn't confirmed is undone;",
            "your notifications, search alerts, notification settings, the blocks you made, your support messages and your devices' notification tokens are deleted;",
            "your profile is anonymised: your name, photo, bio, date of birth, nationality and every habit and travel detail are erased, leaving only a record with no identifying data, marked as deleted;",
            "your profile photo is deleted from storage; and",
            "your sign-in, including your email address and password, is permanently deleted.",
          ),
          p("You can't sign in again afterwards, and we can't restore the account."),
        ],
        [
          p(
            "**What we don't delete, and why.** We don't delete conversations, confirmed matches or reviews that involve another member, because deleting them would destroy that person's history. Wherever your name or photo appeared, the other person sees a generic deleted-account notice. Nor do we immediately delete reports you were involved in, or your listings' photos, which remain part of that history. All of it is kept for the periods in section §{retention}.",
          ),
        ],
        [
          p(
            "Usage statistics already sent with your permission are linked to an internal id, not your email or name, and are deleted when their period ends.",
          ),
        ],
      ],
    },

    {
      id: "children",
      heading: "Minors",
      clauses: [
        [
          p(
            "**ShortTerm is only for people aged 18 or over.** To use the Service you have to declare that you are 18 or older, and we don't knowingly process data about minors.",
          ),
        ],
        [
          p(
            `We rely on that declaration: we don't check documents or use age-assurance technology. If you believe a minor has an account, tell us at ${LEGAL.privacyEmail} and we will close it and delete their data.`,
          ),
        ],
      ],
    },

    {
      id: "website",
      heading: "The website and cookies",
      clauses: [
        [
          p(
            "The website exists to describe the app, answer common questions and open shared listing links. It needs no account, carries no advertising or third-party tracking, and has no forms: if you write to us from it, you do so by email.",
          ),
        ],
        [
          p(
            "**We use only one cookie**, \"NEXT_LOCALE\", which remembers the language you choose on the website. It is a technical, user-requested preference cookie, so it doesn't require consent. We don't use analytics or advertising cookies; if we ever add them, we will ask your permission first and update this policy.",
          ),
        ],
        [
          p(
            "Our web host (Vercel), like any server, logs the IP address and technical details of each visit to serve the website and protect it from attacks, on the basis of our legitimate interest.",
          ),
        ],
      ],
    },

    {
      id: "app-sdks",
      heading: "Statistics and error reports in the app",
      clauses: [
        [
          p(
            "**Usage statistics (PostHog), only with your permission.** The first time you open the app on a device, once your profile is set up, we ask whether you want to share them: nothing is sent until you accept, and refusing is as easy as accepting. If you accept, we send which screens you open and what you do (for example, publishing, searching or sending a request), together with device details and your account id, **never your email, your name or the content of your messages**. If you don't accept, nothing is sent. You can change this at any time in **Settings → Privacy → Usage statistics**.",
          ),
        ],
        [
          p(
            "**Error reports (Sentry).** If the app crashes, we send a technical report of the error (device, system, app version, what failed and your account id) so we can fix it. We don't record your screen and don't send your IP address with the report.",
          ),
        ],
        [
          p(
            "The app keeps on your device only what it needs to work (your session and your preferences). That doesn't require consent, because it is necessary to provide the Service you ask for.",
          ),
        ],
      ],
    },

    {
      id: "advertising",
      heading: "Advertising",
      clauses: [
        [
          p(
            "Today the Service shows no advertising and shares no data with advertisers. If we add advertising in future, we will update this policy before doing so, tell you, and ask for your consent to any use of your data or your device for advertising that requires it.",
          ),
        ],
      ],
    },

    {
      id: "changes",
      heading: "Changes to this policy",
      clauses: [
        [
          p(
            "We will update this policy when the Service or the law changes. The date at the top always shows when it last changed.",
          ),
        ],
        [
          p(
            "If a change materially affects how we process your data, we will tell you in the app or by email at least 15 days before it applies, and if the change requires your consent, we will ask for it.",
          ),
        ],
        [
          p(
            "This policy is available in Spanish and English. If the two versions differ, **the Spanish version prevails**.",
          ),
        ],
      ],
    },

    {
      id: "contact",
      heading: "How to contact us about privacy",
      clauses: [
        unnumbered(
          ul(
            `**Email:** ${LEGAL.privacyEmail}`,
            `**General enquiries:** ${LEGAL.contactEmail}`,
            `**Phone:** ${LEGAL.phone}`,
            `**Post:** ${LEGAL.holder}, ${address}`,
          ),
        ),
      ],
    },
  ],
});
