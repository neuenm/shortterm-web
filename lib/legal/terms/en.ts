import { buildDocument, callout, ol, p, ul, unnumbered } from "../build";
import { LEGAL, postalAddress } from "../config";

const address = postalAddress("en");

export const termsEn = buildDocument({
  preamble: [
    p(
      `These Terms of Service (the **Terms**) are the agreement between you and ${LEGAL.holder}, who offers the service under the trade name ${LEGAL.tradeName} (**ShortTerm**, **we**, **us**). They govern your use of the ShortTerm app and the website ${LEGAL.website} (together, the **Service**).`,
    ),
    p(
      "To use the Service you have to confirm that you are 18 or older and accept these Terms. You do this in the app when you create your account or sign in, with the button shown next to the notice \"By continuing, you confirm you're 18 or older and accept the Terms of Service\". If you don't agree with them, don't use the Service. How we handle your personal data is explained in the Privacy Policy.",
    ),
    callout(
      "**Three things to know before you read on.** First, ShortTerm only puts people in touch: we don't rent out rooms, take payments, hold bonds or act as anyone's agent. Second, we don't verify anyone's identity or check that a profile, a listing or a review is true. Third, meeting and living with someone you met online carries real risk; section §{safety} sets out the precautions we ask you to take.",
    ),
  ],

  sections: [
    {
      id: "who-we-are",
      heading: "Who we are, and the words we use",
      clauses: [
        [
          p(
            `The Service is provided by **${LEGAL.holder}**, a natural person, Spanish tax id (NIE) ${LEGAL.taxId}, whose address is ${address}. You can write to us at ${LEGAL.contactEmail} or call ${LEGAL.phone}. For anything about your personal data, write to ${LEGAL.privacyEmail}. The operator's full details are in the Legal Notice on the website.`,
          ),
        ],
        [
          p("In these Terms:"),
          ul(
            "**Member** means anyone with a ShortTerm account.",
            "**Host** means a member who publishes a room.",
            "**Guest** means a member who looks for a room and requests it.",
            "**Listing** means a room a host publishes on the Service, with its dates and conditions.",
            "**Housemates** means the people who already live in a listing's house, the host included.",
            "**Request** means what a guest sends a host about a particular listing, and the chat it opens.",
            "**Match** means the point at which the host has chosen a guest and that guest has confirmed.",
            "**Review** means the one-to-five-star rating, with a comment, that a member may leave about another after a stay.",
            "**Content** means anything you publish, upload or send through the Service: your profile, listings, photos, messages, reviews and reports.",
          ),
        ],
        [
          p(
            "These Terms apply to both the app and the website, including the public page that opens when a listing's link is shared.",
          ),
        ],
      ],
    },

    {
      id: "what-shortterm-is",
      heading: "What ShortTerm is, and what it is not",
      clauses: [
        [
          p(
            "ShortTerm is a platform that puts people offering a room in Australia in touch with people looking for one. Hosts publish rooms, guests search and send requests, they talk through the in-app chat and, if both want to go ahead, they confirm a match. That is all the Service does.",
          ),
        ],
        [
          p(
            "**We are never a party to what you agree with another member.** If you and another member agree that one of you will move into the other's home, that arrangement — whether a tenancy, a sublease, a licence to occupy the room or something informal — is between the two of you alone. We don't sign it and have no obligations under it.",
          ),
        ],
        [
          p("We are not, and don't act as:"),
          ul(
            "a real estate agent, property manager or letting agent",
            "a landlord, head tenant, sublessor or accommodation provider",
            "a boarding house, rooming house or short-stay accommodation operator",
            "an agent of any member, for any purpose",
            "an insurer, guarantor, escrow service or payment provider",
            "a provider of legal, tax, financial, migration or property advice",
          ),
        ],
        [
          p(
            "**ShortTerm has no payment feature.** We don't process payments, we don't receive or hold rent, bonds, deposits or holding fees, and we take no commission on any arrangement. Any money that changes hands between members does so entirely outside the Service, and we can't recover or refund it.",
          ),
        ],
        [
          p(
            "A match on ShortTerm only signals that two people want to go ahead. It is not a tenancy agreement, a reservation or a binding commitment, and it doesn't oblige either of you to proceed.",
          ),
        ],
        [
          p(
            "The Service is currently free and shows no advertising. If we add paid features or advertising in future, we will tell you first, update these Terms and the Privacy Policy and, where the law requires it, ask for your consent. We will never charge you for anything without your agreement.",
          ),
        ],
      ],
    },

    {
      id: "account",
      heading: "Eligibility and your account",
      clauses: [
        [
          p(
            "**ShortTerm is only for people aged 18 or over.** To use the Service you have to confirm that you are 18 or older, which you do when you create your account or sign in to the app.",
          ),
        ],
        [
          p("Every time you use the Service you declare that:"),
          ol(
            "you are 18 or older;",
            "the information in your profile and your listings is true, accurate and current;",
            "you use the Service to look for or offer a room for yourself, not on behalf of an undisclosed third party;",
            "no law prevents you from using the Service; and",
            "we have not previously closed an account of yours for breaching these Terms.",
          ),
        ],
        [
          p(
            "**We rely on what you tell us, and we don't verify it.** We don't verify anyone's age or identity, check documents, or run criminal history, reference, employment, immigration or credit checks. The **\"Verified email\"** badge only means the person confirmed they have access to their email, and the **\"Complete profile\"** badge only that they filled in every profile field. Nothing on the Service is a check, an approval or a recommendation of a member by us.",
          ),
        ],
        [
          p(
            `You can create your account with an email and password or with your Google account. Keep one account only, don't share your password and don't let anyone else use your account: you are responsible for what happens through it. If you think someone has got into your account, tell us straight away at ${LEGAL.contactEmail}.`,
          ),
        ],
        [
          p(
            "If we learn that an account belongs to someone under 18, or that a declaration in the clause above is false, we will act under section §{suspension}.",
          ),
        ],
      ],
    },

    {
      id: "profile",
      heading: "Your profile",
      clauses: [
        [
          p(
            "Your profile is how other members decide whether you would get on living together, so almost everything in it is visible to signed-in members: your name, your photo, **your age** (unless you hide it in Settings), your languages, your bio, your gender, your nationality, your habits and interests, your occupation, whether you work FIFO, your visa type, your traveller type and since when you have been in Australia, the date you joined (\"Member since\"), a rough indication of when you were last active, your badges, your listings and the reviews other members have left about you.",
          ),
        ],
        [
          p(
            "Only your name, your main language and your gender are required; everything else is optional. **We never show your exact date of birth**: we only use it to work out your age. Your last activity is shown roughly (today or this week), never as an exact time.",
          ),
        ],
        [
          p("You must not:"),
          ul(
            "impersonate anyone, or use a photo that isn't of you",
            "create a profile for someone else, or let anyone else use yours",
            "publish another person's name, photo, phone number, email or other identifying details without their consent",
            "use your profile to advertise anything other than your genuine search for, or offer of, a room in a shared house",
          ),
        ],
        [
          p(
            "Keep your profile up to date. If something stops being true — your dates, your visa, whether you are still looking — correct it.",
          ),
        ],
      ],
    },

    {
      id: "listings",
      heading: "Listings, and information about the house",
      clauses: [
        [
          p(
            "As a host, you are responsible for everything in your listing: the stay type, the dates, the minimum stay, the weekly price and the couples price, the bond, whether bills are included, the description (house rules included) and the photos. It must be accurate, current, and about a room that genuinely exists and is genuinely available. Short-term listings expire on their own once their end date passes.",
          ),
        ],
        [
          p("By publishing a room you declare that:"),
          ol(
            "you own the home, or you otherwise have the right to offer the room to someone else;",
            "you have every consent you need — for example from your landlord or agent if you rent, from your housemates, from your owners corporation or body corporate, and from your mortgagee or insurer if their conditions require it;",
            "offering the room complies with every law that applies to you, including any registration, planning, rooming house or short-stay rules in your State or Territory;",
            "the room and the home are safe and fit to live in, including smoke alarms and any other safety requirements that apply; and",
            "the photos are of the actual home and you have the right to publish them.",
          ),
        ],
        [
          p(
            "**Information about the people who already live with you.** A listing can include aggregate information about the house: how many people live there and how many smoke, work FIFO, their sleep schedules, occupation and drinking, plus a breakdown by nationality and by age bracket, and their food, hobbies and music; and what the house is like as a whole (how tidy it is, how often there are visitors, whether there are pets, its vibe). What it says about the people is counts, never names. We never publish a housemate's name, photo or contact details.",
          ),
        ],
        [
          p(
            "By publishing that information you declare that you are entitled to share it, that it doesn't identify anyone, and that you have told your housemates that ShortTerm publishes aggregate, non-identifying information about the house. You must not publish anything that identifies a housemate — their name, photo, contact details or anything else — without their consent.",
          ),
        ],
        [
          p(
            "**How much of your address is published.** The suburb you choose is always shown. The exact address is optional: if you fill it in, signed-in members who open your listing in the app can see it, and tapping the map opens Google Maps with that address. It does not appear on the public web page that opens when a listing's link is shared, which shows only the title, suburb, dates, room details, price, whether bills are included, language, whether couples are accepted, whether there is a private bathroom, whether there is off-street parking, who the room is for, how many people live in the house, the cover photo, the number of photos and whether the listing is new. Only fill in the exact address if you are comfortable with members seeing it.",
          ),
        ],
        [
          p(
            "Listing and profile photos are stored at web addresses that can't be guessed but are public: anyone who has the exact link to a photo can see it without signing in. Don't upload photos you wouldn't want to circulate.",
          ),
        ],
      ],
    },

    {
      id: "anti-discrimination",
      heading: "Anti-discrimination: your responsibilities",
      clauses: [
        [
          p(
            "ShortTerm is a neutral platform. **We don't choose between members**: we don't select, rank or recommend anyone based on personal characteristics, and we take no part in any host's decision about who to live with. The only automatic exclusion is the one applied by the gender preference a host sets, explained below.",
          ),
        ],
        [
          p("Some features of the Service let members express preferences or narrow their search:"),
          ul(
            "A host can say **who the room is for** (women only, men only or anyone) and whether couples are accepted.",
            "**Search automatically hides** listings whose preference doesn't admit the gender in your profile, and the app won't let you send them a request. This can't be switched off.",
            "A listing includes the aggregate house information described in section §{listings}, including counts by **nationality** and by **age bracket**.",
            "A guest can **filter** searches and alerts by that house information, including the nationality and age of the housemates.",
          ),
        ],
        [
          p(
            "**Those features are tools, and how you use them is your responsibility.** You alone are responsible for making sure your criteria, your searches and your decisions about who to live with comply with every anti-discrimination law that applies to you. In Australia, where the rooms are, that includes the Racial Discrimination Act 1975, the Sex Discrimination Act 1984, the Age Discrimination Act 2004 and the Disability Discrimination Act 1992 (all Commonwealth), together with the equal opportunity or anti-discrimination legislation of your State or Territory.",
          ),
        ],
        [
          callout(
            "**Please read this before you set a preference.** Australian law has exemptions for accommodation that is genuinely shared with the person providing it, but they are narrow, they differ between States and Territories, and several apply only where no more than three people besides the provider and their relatives live there. A larger share house may fall outside them, and at least one State treats race differently from the Commonwealth. Never turn someone away because of their race, ethnic origin, nationality, religion, disability or sexual orientation where the law doesn't allow it. If you are unsure, get advice or contact the Australian Human Rights Commission or your State's anti-discrimination body before you set the preference.",
          ),
        ],
        [
          p(
            "If we reasonably believe a preference, a listing or an account is being used unlawfully or in a discriminatory way, we may remove or change it, or act under section §{suspension}.",
          ),
        ],
      ],
    },

    {
      id: "requests-and-matches",
      heading: "Requests, chat and matches",
      clauses: [
        [
          p(
            "A guest contacts a host by sending a request about a particular listing, with the dates they want and, if the listing accepts couples, whether it is a couple request. The request opens a text chat tied to that listing. There is no open messaging: you can only write to a member a request has connected you with. To prevent spam, the app automatically limits how many requests and messages can be sent in a short time.",
          ),
        ],
        [
          p(
            "**We don't read your chats as a matter of course, and we don't review them before they are sent.** We may access them where reasonably necessary to investigate a report, comply with the law, respond to a lawful request or protect someone's safety. The Privacy Policy explains this in more detail.",
          ),
        ],
        [
          p(
            "A match takes two steps: the host chooses a guest, and that guest confirms. Only when both have confirmed is there a match, and only then does the listing close. Either of you can back out before both confirmations are in. Pending requests expire on their own once their dates pass.",
          ),
        ],
        [
          p(
            "Confirming a match tells the other person you want to go ahead. It doesn't create any tenancy agreement or commit anyone to anything (see section §{what-shortterm-is}).",
          ),
        ],
      ],
    },

    {
      id: "reviews",
      heading: "Reviews",
      clauses: [
        [
          p(
            "After a match, each of you can leave one review about the other: for a short-term stay, once its end date has passed; for a long-term stay, from 30 days after the move-in date.",
          ),
        ],
        [
          p(
            "**Reviews are blind.** Neither of you sees the other's review until both have written theirs, or until 14 days have passed since the first one. Whoever hasn't written yet has 14 days from the first review to do so; after that, the window closes. Once visible, reviews appear on the reviewed person's profile to any signed-in member.",
          ),
        ],
        [
          p(
            "**You alone are responsible for the review you write.** It must be your honest opinion of your own experience with that person, and must not contain anything you know or ought to know is false or misleading, anything abusive or threatening, or anything that identifies a third party without their consent.",
          ),
        ],
        [
          p(
            "**We don't check or verify reviews before they are published.** A review is the opinion of the person who wrote it, not ours, and we don't promise it is accurate. Writing something false or damaging about a real person can have legal consequences for you; if we receive a court order or a lawful request, we may have to disclose who wrote a review.",
          ),
        ],
        [
          p(
            "If you believe a review about you is false, defamatory or breaches these Terms, report it under section §{moderation}. We may remove a review that breaches these Terms or the law, but we don't have to remove one simply because the person it is about disagrees with it.",
          ),
        ],
        [
          p(
            "If the person who wrote a review later deletes their account, the review stays visible, shown as coming from a deleted account, because it records something that really happened between two people.",
          ),
        ],
      ],
    },

    {
      id: "content-rules",
      heading: "Content rules and prohibited conduct",
      clauses: [
        [
          p("You are responsible for your Content and for what you do on the Service. You must not use ShortTerm to publish, send or do:"),
          ul(
            "anything unlawful, or anything that encourages someone else to break the law",
            "anything that discriminates against a person unlawfully (see section §{anti-discrimination})",
            "abuse, harassment, bullying, threats, stalking or hate speech",
            "sexual content, sexual solicitation, or any offer of or request for a room in exchange for sex or an intimate relationship",
            "anything that sexualises children, or any child sexual abuse material",
            "content that promotes terrorism, violent extremism, extreme violence, self-harm or suicide",
            "listings for rooms that don't exist, aren't available or aren't as described, or any other fraudulent or misleading content",
            "another person's personal information without their consent, including their address, contact details or workplace, to expose or harass them",
            "spam, chain messages, or advertising of goods, services or opportunities unrelated to a room in a shared house",
            "scraping, bulk downloading or automated collection of listings, profiles or any other data from the Service",
            "any attempt to get around our security, sending limits, blocking or moderation, or to access an account that isn't yours",
            "malware, or anything designed to damage or disrupt the Service",
          ),
        ],
        [
          p(
            "Don't use a ShortTerm conversation to run a scam. In particular, don't ask another member to pay a deposit, bond, holding fee or rent before they have met you in person and seen the home.",
          ),
        ],
      ],
    },

    {
      id: "moderation",
      heading: "Reports, moderation, blocking and complaints",
      clauses: [
        [
          p(
            `**How to report.** In the app you can report a member or a listing, choosing a reason — spam, harassment, a fake listing, inappropriate content, a safety concern or something else — and adding detail. Anyone, member or not, can also tell us about content they believe is illegal by writing to ${LEGAL.contactEmail}. Tell us: what the content is and where it is (for example, the listing's link or the profile's name), why you believe it is illegal or breaches these Terms, your name and email, and that you are reporting it in good faith. If we can't identify the content, we can't act on it.`,
          ),
        ],
        [
          p(
            "**What we do.** Every report is reviewed by a person; we don't use automated systems to decide about content or accounts. We will confirm we have received it and tell you what we decided within **14 days**, or explain why we need longer. The member you report doesn't see your report or learn who made it.",
          ),
        ],
        [
          p(
            "Depending on what we find, we may do nothing, remove or edit content, issue a warning, restrict features, or suspend or close an account (section §{suspension}). We don't have to remove content that doesn't breach these Terms or the law. If we come across signs of a crime that puts someone's life or safety at risk, we will report it to the competent authorities.",
          ),
        ],
        [
          p(
            "**Blocking.** You can block another member at any time. Blocking cancels any pending request or unconfirmed match between you, closes your chat, and hides each of you from the other's searches and profile views. A match you had both already confirmed isn't removed, and neither is a review either of you was already entitled to leave, because they record a real stay.",
          ),
        ],
        [
          p(
            `**If you disagree with a decision** we made about your content or your account, or about a report you made, write to ${LEGAL.contactEmail} and a person will review it again. You can also go to the courts or the competent authority. If you live in Australia, you can also complain to the eSafety Commissioner (esafety.gov.au) about cyberbullying, abuse or illegal online content. For a complaint about your personal data, see the Privacy Policy.`,
          ),
        ],
        [
          p(
            `**Point of contact.** For authorities and for users, our single point of contact is ${LEGAL.contactEmail}. You can write to us in Spanish or English.`,
          ),
        ],
      ],
    },

    {
      id: "safety",
      heading: "Your safety, and the risks you accept",
      clauses: [
        [
          callout(
            "**ShortTerm only connects people — we don't handle payments or verify identities.** Everyone you meet through the Service is a stranger, and everything you know about them, they told you.",
          ),
        ],
        [
          p(
            "**Never send money to someone you haven't met in person and whose home you haven't seen.** No genuine arrangement requires you to transfer a deposit, bond, holding fee or rent to hold a room sight-unseen. It is the most common sign of a scam, and if the money goes we can't get it back.",
          ),
        ],
        [
          p("We ask you to take these precautions:"),
          ul(
            "keep the conversation in the app until you are comfortable with the other person",
            "inspect the home in person, and meet the people you would be living with, before committing",
            "meet somewhere public the first time, or bring someone with you",
            "tell someone you trust where you are going and who you are meeting",
            "check independently that the person is who they say they are",
            "put what you agree in writing, and understand your rights before you sign anything",
            "if something doesn't feel right, stop",
          ),
        ],
        [
          p(
            "To the extent the law allows, and subject to section §{liability}, you accept the risks of using the Service: that a member isn't who they claim to be, that a listing is inaccurate or fraudulent, that an arrangement falls through, that you lose money paid to another member, and the risks of meeting and living with people you met online.",
          ),
        ],
        [
          p(
            "**In an emergency, call the police**: 000 in Australia, or 112 in the European Union. When you are safe, report the member in the app so we can act.",
          ),
        ],
      ],
    },

    {
      id: "liability",
      heading: "Our liability",
      clauses: [
        [
          callout(
            "**Nothing in these Terms excludes or limits the rights consumer protection law gives you that can't be excluded by contract**, such as those under Spanish law or, if you live in Australia, the guarantees under the Australian Consumer Law. If any part of this section would contradict those rights, that part doesn't apply to you.",
          ),
        ],
        [
          p(
            "We provide the Service with reasonable care and are liable, as the law provides, for loss we cause you by breaching these Terms. **Nothing limits our liability** for death or personal injury caused by our fault, for wilful misconduct or gross negligence, or in any other case where the law doesn't allow it to be limited.",
          ),
        ],
        [
          p(
            "As a provider of a content hosting service, we are not liable for content members publish unless we have actual knowledge that it is unlawful; once we do, we will act diligently to remove it or disable access to it.",
          ),
        ],
        [
          p("Outside those cases, and to the extent the law allows, we are not liable for loss arising from:"),
          ol(
            "anything another member does or fails to do, on or off the Service;",
            "any arrangement between members, including any tenancy or sublease;",
            "any money paid between members;",
            "the condition, safety, legality or suitability of any home;",
            "anything that happens when members meet or live together; or",
            "interruptions to the Service caused by things we don't control, such as failures of our providers, the internet or the app stores.",
          ),
        ],
        [
          p(
            "We don't promise that you will find a room or a guest, that a listing or a review is true, or that the Service will always be available and error-free, though we work to make it so.",
          ),
        ],
      ],
    },

    {
      id: "your-responsibility",
      heading: "Your responsibility",
      clauses: [
        [
          p(
            "You are liable, as the law provides, for loss you cause ShortTerm or third parties by breaching these Terms or the law, through your Content (for example, if a listing or review is defamatory, infringes someone else's rights or discloses their personal information without consent), or through your decisions about who to live with.",
          ),
        ],
        [
          p(
            "If a third party makes a claim against us for something you are responsible for, we will tell you as soon as possible, give you the chance to take part in the defence, and not settle that claim without consulting you.",
          ),
        ],
      ],
    },

    {
      id: "suspension",
      heading: "Suspension, removal and closing accounts",
      clauses: [
        [
          p("We may remove content, pause or remove a listing, restrict features, suspend your account or close it where we reasonably believe that:"),
          ol(
            "you have breached these Terms;",
            "you or your Content have broken the law, or created a real risk to someone's safety;",
            "you are under 18, or one of your declarations in section §{account} is false;",
            "your account is being used fraudulently, or by someone other than you; or",
            "a law, a court, an authority or an app store requires us to act.",
          ),
        ],
        [
          p(
            "**We will tell you what we did and why**: which content or feature is affected, the facts and the rule or clause we relied on, and how you can challenge it. We won't only where the law prevents it, or where telling you would put someone at risk or prejudice an investigation. Where the problem can be fixed and nobody is at risk, we will normally warn you first and give you a reasonable time to fix it.",
          ),
        ],
        [
          p(
            `If you think we got it wrong, write to ${LEGAL.contactEmail} and a person will review the decision.`,
          ),
        ],
        [
          p(
            "You can stop using the Service or delete your account at any time (section §{deleting-your-account}). Sections §{liability}, §{your-responsibility}, §{intellectual-property} and §{governing-law} keep applying after your account ends, as does any other clause that by its nature is meant to.",
          ),
        ],
      ],
    },

    {
      id: "deleting-your-account",
      heading: "Deleting your account",
      clauses: [
        [
          p(
            `You can delete your account yourself, at any time, from the app (Settings → Delete account), at no cost and without giving a reason. If you no longer have access to the app, ${LEGAL.deletionUrl} explains how to ask us by email.`,
          ),
        ],
        [
          p(
            "When you do, in a single step: we close your listings and erase their exact address; we withdraw your pending requests; we undo any match choice of yours the other person hadn't confirmed; we delete your notifications, your search alerts, your notification settings, the blocks you made, your messages to support and your devices' notification tokens; we clear your profile — name, photo, bio and every habit and travel detail — leaving only an anonymous record marked as deleted; we delete your profile photo; and we permanently delete your sign-in, including your email address and password. You can't sign in again afterwards, and we can't restore the account.",
          ),
        ],
        [
          p(
            "**What we don't delete, and why.** We don't delete conversations, confirmed matches or reviews that involve another member, because they are part of that person's own history. Wherever your name or photo used to appear, the other person sees a generic deleted-account notice. The Privacy Policy explains how long what remains is kept.",
          ),
        ],
      ],
    },

    {
      id: "intellectual-property",
      heading: "Intellectual property, and the licence you give us",
      clauses: [
        [
          p(
            "The Service — the ShortTerm name and logo, the software, the design and the text — is ours. You may use it only as these Terms allow, and nothing in them transfers our intellectual property to you.",
          ),
        ],
        [
          p(
            "**Your Content stays yours.** You give us a non-exclusive, royalty-free, worldwide licence to host, store, copy, reformat, resize and display it, solely to provide, protect and improve the Service. We won't use your Content in advertising or marketing without asking you first.",
          ),
        ],
        [
          p(
            "The licence ends when you delete the Content or your account, except for copies that remain for a limited time in backups, and for Content that stays visible to another member (conversations, matches and reviews), as section §{deleting-your-account} explains.",
          ),
        ],
        [
          p(
            "You declare that you own your Content or have the right to publish it, and that publishing it doesn't infringe anyone's rights.",
          ),
        ],
        [
          p(
            "If you send us ideas or suggestions about the Service, we may use them without owing you anything. Don't send us anything you want to keep confidential.",
          ),
        ],
      ],
    },

    {
      id: "communications",
      heading: "Emails and notifications we send you",
      clauses: [
        [
          p(
            "We send you two kinds of message. **Service messages** are the ones the account needs to work: confirming your email, resetting your password, and telling you about security or legal matters, including changes to these Terms. You can't switch them off while you have an account.",
          ),
        ],
        [
          p(
            "**Activity notifications** tell you what is happening in the app: messages, requests, matches and reminders about your stay, reviews, search alerts and tips (for example, to complete your profile). You can switch off each category in Settings, and all push notifications in your device settings.",
          ),
        ],
        [
          p(
            "**We don't send commercial communications today.** If that changes, we will ask for your consent first, and every such message will say who it is from and include a simple, free way to unsubscribe.",
          ),
        ],
      ],
    },

    {
      id: "app-stores",
      heading: "Apple App Store and Google Play",
      clauses: [
        [
          p(
            "This section applies to the app according to where you downloaded it. Where it conflicts with anything else in these Terms, this section prevails as far as that store is concerned.",
          ),
        ],
        [
          p("**If you downloaded the app from the Apple App Store:**"),
          ol(
            "**Acknowledgement.** These Terms are concluded between you and us only, and not with Apple. We alone are responsible for the app and its content.",
            "**Scope of licence.** We grant you a non-transferable licence to use the app on any Apple-branded product that you own or control, as permitted by the Usage Rules in the Apple Media Services Terms and Conditions, except that the app may also be used by other accounts associated with you through Family Sharing or volume purchasing.",
            "**Maintenance and support.** We alone are responsible for maintenance and support of the app. Apple has no obligation whatsoever to provide them.",
            "**Warranty.** We alone are responsible for any product warranties, express or implied by law, to the extent not effectively disclaimed. If the app fails to conform to an applicable warranty, you may notify Apple, and Apple may refund the purchase price of the app to you (the app is free). To the maximum extent permitted by law, Apple has no other warranty obligation whatsoever with respect to the app.",
            "**Product claims.** We, and not Apple, are responsible for addressing any claim by you or a third party relating to the app or your use of it, including product liability claims, claims that the app fails to conform to a legal or regulatory requirement, and claims under consumer protection, privacy or similar legislation.",
            "**Intellectual property rights.** If a third party claims that the app or your use of it infringes their intellectual property rights, we, and not Apple, are solely responsible for investigating, defending, settling and discharging that claim.",
            "**Legal compliance.** You represent that you are not located in a country subject to a U.S. Government embargo or designated by the U.S. Government as a \"terrorist supporting\" country, and that you are not listed on any U.S. Government list of prohibited or restricted parties.",
            `**Developer name and address.** Questions, complaints or claims about the app should be sent to ${LEGAL.holder}, ${address}, ${LEGAL.contactEmail}, ${LEGAL.phone}.`,
            "**Third-party terms.** You must comply with any applicable third-party terms when using the app, such as your mobile data agreement.",
            "**Third-party beneficiary.** You acknowledge and agree that Apple and its subsidiaries are third-party beneficiaries of these Terms, and that once you accept them Apple will have the right (and will be deemed to have accepted the right) to enforce them against you as a third-party beneficiary.",
          ),
        ],
        [
          p(
            "**If you downloaded the app from Google Play**, you must also comply with the Google Play Terms of Service. Google is not a party to these Terms and is not responsible for the app; we, and not Google, are responsible for the app and for any claim about it.",
          ),
        ],
      ],
    },

    {
      id: "changes",
      heading: "Changes to these Terms",
      clauses: [
        [p("We may change these Terms when the Service, our providers or the law change.")],
        [
          p(
            "**If a change is material and to your disadvantage, we will give you at least 15 days' notice** in the app or by email, and the app will ask you to accept the new version. Minor changes — correcting an error, clarifying wording, or a change the law requires us to make immediately — may take effect straight away, and we will always update the date at the top.",
          ),
        ],
        [p("If you don't accept a change, you can delete your account before it takes effect, at no cost.")],
      ],
    },

    {
      id: "transfer",
      heading: "If we transfer the Service",
      clauses: [
        [
          p(
            "We may transfer our rights and obligations under these Terms to another person or entity — for example to a company formed to run ShortTerm, or in a sale of the business — provided they take on these Terms and your rights are not materially reduced. We will tell you before we do, and you can delete your account if you disagree.",
          ),
        ],
        [p("Your account is personal: you can't transfer it, or your rights under these Terms, to anyone else.")],
      ],
    },

    {
      id: "governing-law",
      heading: "Governing law and disputes",
      clauses: [
        [
          p(
            `**Talk to us first.** If you have a problem, write to ${LEGAL.contactEmail} with what happened and what you would like us to do. We will reply within 5 business days; most things are quicker to fix that way.`,
          ),
        ],
        [
          p(
            "These Terms are governed by **Spanish law**. If you are a consumer, this doesn't deprive you of the protection of the mandatory rules of the country where you habitually live, such as the Australian Consumer Law if you live in Australia.",
          ),
        ],
        [
          p(
            "If you are a consumer, you can bring a claim in the courts where you live or in the courts of Granada (Spain), and we can only bring a claim against you in the courts where you live. Nothing in these Terms stops you from going to any consumer body or authority available to you.",
          ),
        ],
        [p("We don't take part in any consumer arbitration scheme or other alternative dispute resolution body.")],
      ],
    },

    {
      id: "electronic-contracting",
      heading: "How this agreement is made",
      clauses: [
        [
          p(
            "The agreement is made in the app. Next to the buttons to create your account (with an email and password, or with Google) and to sign in, the app shows the notice \"By continuing, you confirm you're 18 or older and accept the Terms of Service\", with links to these Terms and to the Privacy Policy: tapping one of those buttons confirms you are 18 or older and accepts these Terms. If they change while you are already signed in, the app shows them to you again with the same notice and an \"Accept and continue\" button. Before accepting you can read these Terms and the Privacy Policy, and review and correct the details you entered; afterwards you can change them in the app.",
          ),
        ],
        [
          p(
            "We keep a record of your acceptance (which version you accepted and when), which the app confirms by moving you on to the next screen. The current version of these Terms is always available on this page; if you need a copy of the version you accepted or of your acceptance record, ask us by email.",
          ),
        ],
        [
          p(
            "These Terms are available in Spanish and English. If the two versions differ, **the Spanish version prevails**.",
          ),
        ],
        [
          p(
            "If a court finds any part of these Terms invalid, the rest continues to apply. If we don't enforce a right straight away, we don't give it up. Nothing in these Terms creates a partnership, employment or agency relationship between you and us. These Terms and the Privacy Policy are the whole agreement between you and us about the Service.",
          ),
        ],
      ],
    },

    {
      id: "contact",
      heading: "How to contact us",
      clauses: [
        unnumbered(
          ul(
            `**General, reports and complaints:** ${LEGAL.contactEmail}`,
            `**Privacy:** ${LEGAL.privacyEmail}`,
            `**Phone:** ${LEGAL.phone}`,
            `**Post:** ${LEGAL.holder}, ${address}`,
          ),
        ),
      ],
    },
  ],
});
