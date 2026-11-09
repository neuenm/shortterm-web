import { LEGAL } from "./config";
import type { LegalDocument } from "./types";

export const termsDocument: LegalDocument = {
  title: "Terms of Service",
  effectiveDate: LEGAL.effectiveDate,
  lastUpdated: LEGAL.lastUpdated,

  preamble: [
    {
      kind: "p",
      text: `These Terms of Service (**Terms**) are an agreement between you and ${LEGAL.entity} (**ShortTerm**, **we**, **us**, **our**). They govern your use of the ShortTerm mobile app and the ShortTerm website at ${LEGAL.website} (together, the **Service**).`,
    },
    {
      kind: "p",
      text: "By creating a ShortTerm account, or by using the Service, you agree to these Terms. If you do not agree to them, please do not use the Service. Our Privacy Policy forms part of these Terms.",
    },
    {
      kind: "callout",
      text: "**Three things to understand before you read any further.** First, ShortTerm only introduces people to each other — we do not rent out rooms, take payments, hold bonds, or act as anyone's agent. Second, we do not verify anyone's identity, and we do not check that a profile, a listing or a review is truthful. Third, meeting and living with someone you met online carries real risk. Section 11 sets out the precautions we ask you to take and the risks you accept.",
    },
  ],

  sections: [
    {
      id: "who-we-are",
      number: "1",
      heading: "Who we are, and the words we use",
      clauses: [
        {
          number: "1.1",
          blocks: [
            {
              kind: "p",
              text: `The Service is operated by ${LEGAL.entity} of ${LEGAL.address}, Australia. You can reach us at ${LEGAL.contactEmail} or on ${LEGAL.phone}. For anything to do with your personal information, write to ${LEGAL.privacyEmail}.`,
            },
          ],
        },
        {
          number: "1.2",
          blocks: [
            {
              kind: "p",
              text: "In these Terms:",
            },
            {
              kind: "ul",
              items: [
                "**Member** means anyone with a ShortTerm account.",
                "**Host** means a Member who publishes a Listing offering a room.",
                "**Guest** means a Member looking for a room.",
                "**Listing** means a room a Host has published on the Service.",
                "**Request** means a Guest's message to a Host about a particular Listing, and the chat it opens.",
                "**Match** means the state reached when a Host has chosen a Guest for a Listing and that Guest has separately confirmed.",
                "**Review** means the star rating and comment a Member may leave about another Member after a Match.",
                "**Content** means anything you post, upload, send or publish through the Service, including your profile, Listings, photographs, messages, Reviews and reports.",
              ],
            },
          ],
        },
        {
          number: "1.3",
          blocks: [
            {
              kind: "p",
              text: "These Terms apply to both the app and the website, including the public web page that a shared Listing link opens.",
            },
          ],
        },
      ],
    },

    {
      id: "what-shortterm-is",
      number: "2",
      heading: "What ShortTerm is — and what it is not",
      clauses: [
        {
          number: "2.1",
          blocks: [
            {
              kind: "p",
              text: "ShortTerm is an introductions platform. Hosts publish Listings, Guests search and contact Hosts through in-app chat, and if both sides want to go ahead they each confirm. That is the whole of what the Service does.",
            },
          ],
        },
        {
          number: "2.2",
          blocks: [
            {
              kind: "p",
              text: "**We are never a party to whatever you agree with another Member.** If you and another Member agree that one of you will move into the other's property, that arrangement — whatever form it takes, whether it is a residential tenancy agreement, a sub-lease, a licence to occupy, a lodging arrangement or an informal understanding — is between the two of you alone. We are not a party to it, we do not sign it, and we have no obligations under it.",
            },
          ],
        },
        {
          number: "2.3",
          blocks: [
            {
              kind: "p",
              text: "We are not, and we do not act as, any of the following:",
            },
            {
              kind: "ul",
              items: [
                "a real estate agent, letting agent, managing agent or property manager",
                "a landlord, head-tenant, sub-lessor or accommodation provider",
                "a rooming house, boarding house or short-stay accommodation operator",
                "an agent of any Member, for any purpose",
                "an insurer, a guarantor, an escrow service or a payment provider",
                "a provider of legal, tax, financial, migration or property advice",
              ],
            },
          ],
        },
        {
          number: "2.4",
          blocks: [
            {
              kind: "p",
              text: "**There is no payment feature on ShortTerm.** We do not process payments, we do not hold or handle rent, bonds, deposits or holding fees, we do not provide escrow, and we take no commission or success fee on any arrangement you reach. Any money that changes hands between Members changes hands entirely outside the Service. We cannot recover it, refund it, or help you get it back.",
            },
          ],
        },
        {
          number: "2.5",
          blocks: [
            {
              kind: "p",
              text: "A Match on ShortTerm is a signal that two people both want to go ahead. It is not a lease, a licence to occupy, a booking, a reservation, or a binding commitment of any kind, and it does not oblige either of you to proceed.",
            },
          ],
        },
        {
          number: "2.6",
          blocks: [
            {
              kind: "p",
              text: "The Service is currently provided to you free of charge. We may introduce paid features in future; if we do, we will tell you before any charge applies and you will not be charged for anything without agreeing to it first.",
            },
          ],
        },
      ],
    },

    {
      id: "eligibility",
      number: "3",
      heading: "Eligibility and your account",
      clauses: [
        {
          number: "3.1",
          blocks: [
            {
              kind: "p",
              text: "**ShortTerm is only for people aged 18 or over.** You must be at least 18 to complete a profile or use any feature of the Service.",
            },
          ],
        },
        {
          number: "3.2",
          blocks: [
            {
              kind: "p",
              text: "Every time you use the Service you represent and warrant to us that:",
            },
            {
              kind: "ol",
              items: [
                "you are at least 18 years old, and the date of birth you have given us is your real one;",
                "the information in your profile and any Listing is true, accurate and current;",
                "you are using the Service for your own genuine accommodation purposes and not on behalf of an undisclosed third party;",
                "you are not prohibited by any law from using the Service; and",
                "we have not previously closed an account of yours for breaching these Terms.",
              ],
            },
          ],
        },
        {
          number: "3.3",
          blocks: [
            {
              kind: "p",
              text: "**We rely on what you tell us. We do not verify it.** We do not carry out age verification, identity verification or document checks, and we do not run police, criminal history, background, reference, employment, immigration or credit checks on any Member. Nothing on the Service is a check, a vetting, an endorsement or a recommendation of any Member by us.",
            },
          ],
        },
        {
          number: "3.4",
          blocks: [
            {
              kind: "p",
              text: "You may create sign-in credentials before completing a profile, but you cannot search, publish a Listing, contact anyone or use any other feature until your profile is complete. Completing your profile is the point at which you confirm your date of birth and your age.",
            },
          ],
        },
        {
          number: "3.5",
          blocks: [
            {
              kind: "p",
              text: "Keep one account only, keep your password to yourself, and do not let anyone else use your account. You are responsible for what happens through your account. Tell us straight away at " +
                LEGAL.contactEmail +
                " if you think someone else has got into it.",
            },
          ],
        },
        {
          number: "3.6",
          blocks: [
            {
              kind: "p",
              text: "If we become aware that an account holder is under 18, or that a representation in clause 3.2 was false, we will act under section 14.",
            },
          ],
        },
      ],
    },

    {
      id: "your-profile",
      number: "4",
      heading: "Your profile",
      clauses: [
        {
          number: "4.1",
          blocks: [
            {
              kind: "p",
              text: "Your profile is how other Members decide whether you would be a good person to live with, so most of it is visible to them. Other signed-in Members can see: your name, your profile photo, **your age** (see clause 4.2), the languages you speak, your bio, your gender, your nationality, whether you are part of a couple, your lifestyle and compatibility answers (food, hobbies, music, smoking, pets, sleep schedule, occupation status, cleanliness, how often you have guests, drinking, social energy), your visa type, traveller type and arrival date in Australia, a rough indication of when you were last active, and any Reviews other Members have left about you.",
            },
          ],
        },
        {
          number: "4.2",
          blocks: [
            {
              kind: "p",
              text: "**We never show another Member your exact date of birth.** We use it only to calculate your age, and it is stripped out on our servers before any other Member can read your profile. Your activity indicator is deliberately coarse — other Members see only that you were active today or this week, never a precise time.",
            },
          ],
        },
        {
          number: "4.3",
          blocks: [
            {
              kind: "p",
              text: "You must not:",
            },
            {
              kind: "ul",
              items: [
                "impersonate anyone, or use a photograph that is not of you",
                "create a profile for someone else, or let anyone else use yours",
                "publish another person's name, photograph, phone number, email address or other identifying details without their consent",
                "use your profile to advertise anything other than your genuine search for, or offer of, shared accommodation",
              ],
            },
          ],
        },
        {
          number: "4.4",
          blocks: [
            {
              kind: "p",
              text: "Keep your profile up to date. If something in it stops being true — your dates, your visa status, whether you are still looking — please correct it.",
            },
          ],
        },
      ],
    },

    {
      id: "listings",
      number: "5",
      heading: "Listings, and information about your household",
      clauses: [
        {
          number: "5.1",
          blocks: [
            {
              kind: "p",
              text: "As a Host, you are responsible for everything in your Listing: the dates, the minimum stay, the weekly price, any couples price, the bond amount, whether bills are included, the description, the house rules and the photographs. It must be accurate, current, and about a room that genuinely exists and is genuinely available.",
            },
          ],
        },
        {
          number: "5.2",
          blocks: [
            {
              kind: "p",
              text: "By publishing a Listing you represent and warrant that:",
            },
            {
              kind: "ol",
              items: [
                "you own the property, or you otherwise have the legal right to offer the room to someone else;",
                "you have every consent you need to do so — for example from your landlord or agent if you rent, from your co-tenants, from your owners corporation or body corporate under its by-laws, and from your mortgagee or insurer if their conditions require it;",
                "offering the room complies with all laws that apply to you, including any registration, planning, rooming house, boarding house or short-stay accommodation requirements in your State or Territory;",
                "the accommodation is safe and fit for someone to live in, including meeting smoke alarm and other safety requirements that apply where you live; and",
                "the photographs are of the actual property and you have the right to publish them.",
              ],
            },
          ],
        },
        {
          number: "5.3",
          blocks: [
            {
              kind: "p",
              text: "**Information about the people you already live with.** A Listing includes counts describing the current household — how many people smoke, have pets, work FIFO, and so on, along with a breakdown of the household by nationality and by age bracket. These are aggregate counts only. We never publish the name, photograph or contact details of a housemate as part of a Listing.",
            },
          ],
        },
        {
          number: "5.4",
          blocks: [
            {
              kind: "p",
              text: "By publishing that information you represent and warrant that you are entitled to share it, that it does not identify any individual, and that you have told the people you live with that aggregate, non-identifying information about your household is published on ShortTerm. You must not publish anything that identifies a housemate — their name, their photograph, their contact details or anything else — without their consent.",
            },
          ],
        },
        {
          number: "5.5",
          blocks: [
            {
              kind: "p",
              text: "**How much of your address is published.** The suburb you choose is always shown. The exact address field is optional. If you fill it in, it is shown to signed-in Members who open your Listing in the app, and tapping the map on that screen opens Google Maps with that address as the search term. It is **not** included on the public web page that a shared Listing link opens — that page shows only the title, suburb, dates, room details, price, whether bills are included, language, couples and bathroom flags, gender preference, how many people live in the house, the cover photo, the number of photos and whether the Listing is new. Fill in the exact address only if you are comfortable with signed-in Members seeing it.",
            },
          ],
        },
      ],
    },

    {
      id: "anti-discrimination",
      number: "6",
      heading: "Anti-discrimination — your responsibilities as a Host",
      clauses: [
        {
          number: "6.1",
          blocks: [
            {
              kind: "p",
              text: "ShortTerm is a neutral platform. **We do not choose between Members.** We do not select, rank, exclude, endorse or reject anyone on the basis of any personal characteristic, and we take no part in any Host's decision about who to live with.",
            },
          ],
        },
        {
          number: "6.2",
          blocks: [
            {
              kind: "p",
              text: "Some features of the Service let Members express preferences or narrow their search. A Host can set a gender preference for who may apply, and can say whether couples are accepted. A Host publishes the aggregate household information described in clause 5.3, including nationality and age-bracket counts. A Guest can filter search results using those fields.",
            },
          ],
        },
        {
          number: "6.3",
          blocks: [
            {
              kind: "p",
              text: "**Those features are tools. How you use them is your responsibility alone.** You are solely responsible for making sure that your listing criteria, your search preferences and your decisions about who to live with comply with every anti-discrimination law that applies to you. Those laws include the Racial Discrimination Act 1975 (Cth), the Sex Discrimination Act 1984 (Cth), the Age Discrimination Act 2004 (Cth) and the Disability Discrimination Act 1992 (Cth), together with the anti-discrimination or equal opportunity legislation of your State or Territory.",
            },
          ],
        },
        {
          number: "6.4",
          blocks: [
            {
              kind: "callout",
              text: "**Please read this before you set a preference.** Australian anti-discrimination law does contain exemptions for accommodation that is genuinely shared with the person providing it. But those exemptions are narrow, they are not the same in every State and Territory, and several of them apply only where the accommodation is for no more than three people besides the provider and their relatives. A larger share house may fall outside them entirely, and at least one State treats race differently from the Commonwealth. If you are unsure whether a preference you want to set is lawful where you live, get your own legal advice, or contact the Australian Human Rights Commission or your State or Territory anti-discrimination body, before you set it.",
            },
          ],
        },
        {
          number: "6.5",
          blocks: [
            {
              kind: "p",
              text: "You warrant that your use of these features complies with the laws that apply to you, and you indemnify us under section 13 for any claim arising out of your own listing criteria or your own decisions about who to live with.",
            },
          ],
        },
        {
          number: "6.6",
          blocks: [
            {
              kind: "p",
              text: "If we reasonably believe a preference, a Listing or an account is being used in a way that is unlawful, we may remove or change it, or act under section 14.",
            },
          ],
        },
      ],
    },

    {
      id: "requests-and-matches",
      number: "7",
      heading: "Contacting other Members, chat and Matches",
      clauses: [
        {
          number: "7.1",
          blocks: [
            {
              kind: "p",
              text: "A Guest starts a conversation by contacting a Host about a particular Listing. That opens a chat tied to that Listing. There is no open messaging on ShortTerm: you cannot message a Member you have not been connected to through a Listing.",
            },
          ],
        },
        {
          number: "7.2",
          blocks: [
            {
              kind: "p",
              text: "**We do not read your chats as a matter of course, and we do not pre-moderate them.** We may access message content where we reasonably need to in order to investigate a report, comply with the law, respond to a lawful request, or protect someone's safety. Our Privacy Policy explains this in more detail.",
            },
          ],
        },
        {
          number: "7.3",
          blocks: [
            {
              kind: "p",
              text: "A Match takes two steps. The Host chooses an applicant, and then that Guest separately confirms. Only when both have confirmed is there a Match, and only then does the Listing close. Either of you can back out at any time before both confirmations are in.",
            },
          ],
        },
        {
          number: "7.4",
          blocks: [
            {
              kind: "p",
              text: "Confirming a Match tells the other person you want to go ahead. It does not create any contract for accommodation, and it does not commit either of you to anything. See clause 2.5.",
            },
          ],
        },
      ],
    },

    {
      id: "reviews",
      number: "8",
      heading: "Reviews",
      clauses: [
        {
          number: "8.1",
          blocks: [
            {
              kind: "p",
              text: "After a Match has been confirmed by both people and the end date of the stay has passed, each of you may leave the other one Review: a rating from one to five stars, and a comment. Reviews are visible to any signed-in Member on the reviewed person's profile.",
            },
          ],
        },
        {
          number: "8.2",
          blocks: [
            {
              kind: "p",
              text: "**You are solely responsible for the Review you write.** It must be your own honest opinion, based on your own actual experience of the person, and it must not contain anything you know or ought to know is false or misleading, anything abusive or threatening, or anything that identifies a third party without their consent.",
            },
          ],
        },
        {
          number: "8.3",
          blocks: [
            {
              kind: "p",
              text: "**We do not check Reviews before they are published, and we do not verify them.** A Review is the opinion of the Member who wrote it. It is not our opinion, we do not adopt it, and we make no representation that it is accurate.",
            },
          ],
        },
        {
          number: "8.4",
          blocks: [
            {
              kind: "p",
              text: "Writing something false or damaging about a real person can expose you to legal liability, including under Australian defamation law. If we receive a lawful request or a court order, we may have to disclose information identifying the author of a Review.",
            },
          ],
        },
        {
          number: "8.5",
          blocks: [
            {
              kind: "p",
              text: "If you believe a Review about you is false, defamatory or otherwise breaches these Terms, tell us using the complaints process in clause 10.3 and we will look into it. We may remove a Review that breaches these Terms or the law. We are not obliged to remove one simply because the person it is about disagrees with it.",
            },
          ],
        },
        {
          number: "8.6",
          blocks: [
            {
              kind: "p",
              text: "If the Member who wrote a Review later deletes their account, the Review stays visible, shown as coming from a deleted account, because it records something that actually happened between two people.",
            },
          ],
        },
      ],
    },

    {
      id: "content-rules",
      number: "9",
      heading: "Content rules and prohibited conduct",
      clauses: [
        {
          number: "9.1",
          blocks: [
            {
              kind: "p",
              text: "You are responsible for your Content and for what you do on the Service. You must not use ShortTerm to post, send or do any of the following:",
            },
            {
              kind: "ul",
              items: [
                "anything unlawful, or anything that encourages someone else to break the law",
                "anything that discriminates against a person in a way that is unlawful (see section 6)",
                "abuse, harassment, bullying, threats, stalking, hate speech or intimidation",
                "sexual content, sexual solicitation, or any offer or request for accommodation in exchange for sexual services or an intimate relationship",
                "anything that sexualises a child, and any child sexual abuse material",
                "content that promotes terrorism, violent extremism, extreme violence, self-harm or suicide",
                "a Listing for a room that does not exist, is not available, or is not as described, and any other fraudulent or misleading Content",
                "another person's personal information published without their consent, including publishing someone's address, contact details or workplace to expose or harass them",
                "spam, chain messages, or advertising of goods, services or opportunities unrelated to shared accommodation",
                "scraping, bulk downloading or automated collection of Listings, profiles or any other data from the Service",
                "any attempt to get around our security, rate limits, blocking or moderation, or to access an account that is not yours",
                "malware, or anything designed to damage or disrupt the Service",
              ],
            },
          ],
        },
        {
          number: "9.2",
          blocks: [
            {
              kind: "p",
              text: "Do not use the Service to move a genuine ShortTerm conversation into a scam. In particular, do not ask another Member to pay a deposit, bond, holding fee or rent before they have met you in person and seen the property.",
            },
          ],
        },
        {
          number: "9.3",
          blocks: [
            {
              kind: "p",
              text: "If Content breaches these Terms, we may remove it, and we may act under section 14. We may also report unlawful Content to the police, the eSafety Commissioner or another authority.",
            },
          ],
        },
      ],
    },

    {
      id: "reporting",
      number: "10",
      heading: "Reporting, blocking and complaints",
      clauses: [
        {
          number: "10.1",
          blocks: [
            {
              kind: "p",
              text: "**Reporting.** You can report a Member or a Listing from within the app, choosing a reason — spam, harassment, a fake listing, inappropriate content, a safety concern, or something else — and adding detail. Reports come to our team by email and are reviewed by a person. The Member you report is not shown your report.",
            },
          ],
        },
        {
          number: "10.2",
          blocks: [
            {
              kind: "p",
              text: "**Blocking.** You can block another Member at any time. Blocking immediately cancels any Request or Match between you that has not yet been completed, closes your chat, and hides each of you from the other's search results and profile views. A Match that both of you had already confirmed is not removed, and neither is a Review either of you was already entitled to leave, because those record a stay that actually happened.",
            },
          ],
        },
        {
          number: "10.3",
          blocks: [
            {
              kind: "p",
              text: `**Complaints about Content.** If you want us to look at Content — including a Review you say is false or defamatory — email ${LEGAL.contactEmail} and tell us where the Content is, what is wrong with it, and why. We will acknowledge your complaint within **2 business days** and tell you what we have decided within **14 days**, or explain why we need longer. Give us as much detail as you can: a complaint we cannot identify the Content from is one we cannot act on.`,
            },
          ],
        },
        {
          number: "10.4",
          blocks: [
            {
              kind: "p",
              text: "Depending on what we find, we may do nothing, remove or edit Content, issue a warning, restrict features, or suspend or close an account under section 14. We are not obliged to remove Content that does not breach these Terms or the law.",
            },
          ],
        },
        {
          number: "10.5",
          blocks: [
            {
              kind: "p",
              text: "**If you are not satisfied with how we handle it**, you can complain to the eSafety Commissioner at esafety.gov.au, which handles complaints about cyberbullying, adult cyber abuse, image-based abuse and illegal or restricted online content. For a privacy complaint, see the Privacy Policy. Nothing in these Terms stops you from making any complaint you are entitled to make to a regulator, an ombudsman or a court.",
            },
          ],
        },
      ],
    },

    {
      id: "safety",
      number: "11",
      heading: "Your safety, and the risks you accept",
      clauses: [
        {
          number: "11.1",
          blocks: [
            {
              kind: "callout",
              text: "**ShortTerm only connects people — we don't handle payments or verify identities.** Everyone you meet through the Service is a stranger, and everything you are told about them comes from them.",
            },
          ],
        },
        {
          number: "11.2",
          blocks: [
            {
              kind: "p",
              text: "**Never send money to someone you have not met in person and whose property you have not seen.** No genuine arrangement requires you to transfer a deposit, bond, holding fee or rent to hold a room sight-unseen. A request to do so is the single most common sign of a scam, and if the money goes we cannot get it back for you.",
            },
          ],
        },
        {
          number: "11.3",
          blocks: [
            {
              kind: "p",
              text: "We ask you to take these precautions, and we designed the Service on the assumption that you will:",
            },
            {
              kind: "ul",
              items: [
                "keep the conversation in the app until you are comfortable with the other person",
                "inspect the property in person, and meet the people you would be living with, before agreeing to anything",
                "meet somewhere public the first time, or bring someone with you",
                "tell a friend or family member where you are going and who you are meeting",
                "check independently that the person is who they say they are",
                "put whatever you agree in writing, and understand your rights before you sign anything",
                "trust your instincts, and stop if something feels wrong",
              ],
            },
          ],
        },
        {
          number: "11.4",
          blocks: [
            {
              kind: "p",
              text: "To the extent the law allows, and subject to section 12, you accept the risks of using the Service. Those risks include that a Member is not who they claim to be, that a Listing is inaccurate or fraudulent, that an arrangement falls through, that you lose money paid to another Member, and the risks that come with meeting and living with people you met online.",
            },
          ],
        },
        {
          number: "11.5",
          blocks: [
            {
              kind: "p",
              text: "**In an emergency, call 000.** If you are in danger, contact the police first — then, when you are safe, report the Member to us so we can act on our side.",
            },
          ],
        },
      ],
    },

    {
      id: "acl-and-liability",
      number: "12",
      heading: "Australian Consumer Law, and our liability to you",
      clauses: [
        {
          number: "12.1",
          blocks: [
            {
              kind: "callout",
              text: "**Nothing in these Terms excludes, restricts or modifies any guarantee, condition, warranty, right or remedy you have under the Australian Consumer Law or any other law that cannot be excluded, restricted or modified by agreement.** If any part of these Terms would do that, that part simply does not apply to you. Everything else in this section operates only to the extent the law allows.",
            },
          ],
        },
        {
          number: "12.2",
          blocks: [
            {
              kind: "p",
              text: "Among other things, the Australian Consumer Law guarantees that services will be provided with due care and skill and within a reasonable time. Those guarantees apply to the Service and we do not try to take them away.",
            },
          ],
        },
        {
          number: "12.3",
          blocks: [
            {
              kind: "p",
              text: "Beyond those guarantees, and to the extent the law allows, the Service is provided on an \"as is\" basis. We do not promise that:",
            },
            {
              kind: "ul",
              items: [
                "any Member is who they say they are, or is suitable, trustworthy or safe",
                "any Listing is accurate, genuine, available, lawful or safe",
                "you will find a room, a housemate, or anything else you are looking for",
                "any Review is truthful",
                "the Service will always be available, uninterrupted, secure or free of errors",
              ],
            },
          ],
        },
        {
          number: "12.4",
          blocks: [
            {
              kind: "p",
              text: "To the extent the law allows, and subject to clause 12.1, we are not liable to you for loss or damage arising out of:",
            },
            {
              kind: "ol",
              items: [
                "anything another Member does or fails to do, on or off the Service;",
                "any arrangement or agreement between Members, including any tenancy, sub-lease, licence or lodging arrangement;",
                "any money paid between Members;",
                "the condition, safety, legality or suitability of any property;",
                "anything that happens when Members meet or live together;",
                "Content posted by Members, including Listings and Reviews; or",
                "loss that is indirect or consequential, or loss of profits, opportunity or data.",
              ],
            },
          ],
        },
        {
          number: "12.5",
          blocks: [
            {
              kind: "p",
              text: "To the extent the law allows, and subject to clause 12.1, our total liability to you for all claims connected with the Service is limited to resupplying the Service to you or, at our option, paying the cost of having it resupplied. The Service is provided to you free of charge.",
            },
          ],
        },
        {
          number: "12.6",
          blocks: [
            {
              kind: "p",
              text: "Our liability is reduced to the extent that your own act, omission or breach of these Terms caused or contributed to the loss.",
            },
          ],
        },
      ],
    },

    {
      id: "indemnity",
      number: "13",
      heading: "Your indemnity to us",
      clauses: [
        {
          number: "13.1",
          blocks: [
            {
              kind: "p",
              text: "You indemnify us against loss, damage, cost (including reasonable legal costs) and liability that we suffer arising out of:",
            },
            {
              kind: "ol",
              items: [
                "your breach of these Terms or of any law;",
                "your Content, including any Listing or Review, and including any claim that it is defamatory, infringes someone's rights or discloses someone's personal information without consent;",
                "your listing criteria or your decisions about who to live with (see section 6); or",
                "your dealings with any other Member.",
              ],
            },
          ],
        },
        {
          number: "13.2",
          blocks: [
            {
              kind: "p",
              text: "**This indemnity is limited.** It does not apply to the extent the loss was caused by our own breach of these Terms, our negligence or our unlawful act, and it does not apply to anything that cannot lawfully be indemnified. It does not extend to indirect or consequential loss.",
            },
          ],
        },
        {
          number: "13.3",
          blocks: [
            {
              kind: "p",
              text: "If we want to rely on this indemnity we will tell you about the claim promptly, take reasonable steps to keep the loss down, give you a reasonable opportunity to take part in the defence of the claim, and not settle it without your consent, which you must not unreasonably withhold.",
            },
          ],
        },
      ],
    },

    {
      id: "suspension",
      number: "14",
      heading: "Suspension, removal and closing accounts",
      clauses: [
        {
          number: "14.1",
          blocks: [
            {
              kind: "p",
              text: "We may remove Content, pause or remove a Listing, restrict features, suspend your account or close it where we reasonably believe that:",
            },
            {
              kind: "ol",
              items: [
                "you have breached these Terms;",
                "you or your Content have broken the law, or created a real risk to someone's safety;",
                "you do not meet the age requirement in clause 3.1, or a representation in clause 3.2 was false;",
                "your account is being used fraudulently, or by someone other than you; or",
                "we are required to act by a law, a court, a regulator or an app store.",
              ],
            },
          ],
        },
        {
          number: "14.2",
          blocks: [
            {
              kind: "p",
              text: "**We will tell you what we have done and why**, and give you a way to respond, unless a law prevents us or telling you would create a risk to someone's safety or prejudice an investigation. Where the problem is one you can fix and there is no safety risk, we will normally give you notice and a reasonable chance to fix it before we suspend or close your account.",
            },
          ],
        },
        {
          number: "14.3",
          blocks: [
            {
              kind: "p",
              text: `If you think we have got it wrong, email ${LEGAL.contactEmail} and a person will review the decision.`,
            },
          ],
        },
        {
          number: "14.4",
          blocks: [
            {
              kind: "p",
              text: "You can stop using the Service, or delete your account, at any time — see section 15. Sections 12, 13, 16 and 21 survive the end of your account, along with any other clause that by its nature is meant to.",
            },
          ],
        },
      ],
    },

    {
      id: "deleting-your-account",
      number: "15",
      heading: "Deleting your account",
      clauses: [
        {
          number: "15.1",
          blocks: [
            {
              kind: "p",
              text: `You can delete your account yourself, from inside the app, at any time. You can also do it from ${LEGAL.deletionUrl}. You do not have to ask us, and you do not have to give a reason.`,
            },
          ],
        },
        {
          number: "15.2",
          blocks: [
            {
              kind: "p",
              text: "When you delete your account we do all of the following, in one step: we close any Listings you host; we cancel your own Requests that are still open; we clear any Match choice of yours that the other person has not yet confirmed; we delete your push notification tokens; we clear your profile — your name, photo, bio and all your lifestyle and travel information — leaving an anonymous row flagged as deleted; we delete your profile photo from storage; and we permanently delete your sign-in identity, including your email address and password, from our authentication provider. You cannot sign in again afterwards, and we cannot restore the account.",
            },
          ],
        },
        {
          number: "15.3",
          blocks: [
            {
              kind: "p",
              text: "**What we do not delete, and why.** We do not delete Listings, chat messages, completed Matches or Reviews that involve another Member. Erasing those would destroy the other person's own chat history and their own review record, which is not ours to take away. Wherever your information used to appear, the other Member now sees a generic deleted-account placeholder instead of your name or photo. Our Privacy Policy explains what happens to the remaining data and how long we keep it.",
            },
          ],
        },
      ],
    },

    {
      id: "intellectual-property",
      number: "16",
      heading: "Intellectual property, and the licence you give us",
      clauses: [
        {
          number: "16.1",
          blocks: [
            {
              kind: "p",
              text: "We own the Service, including the ShortTerm name, logo, software, design and text. You may use it only as these Terms allow. Nothing here transfers any of our intellectual property to you.",
            },
          ],
        },
        {
          number: "16.2",
          blocks: [
            {
              kind: "p",
              text: "**You keep ownership of your Content.** You give us a non-exclusive, royalty-free, worldwide licence to host, store, copy, reformat, resize and display your Content, only for the purpose of operating, securing and improving the Service. We do not use your Content in advertising or marketing without asking you first.",
            },
          ],
        },
        {
          number: "16.3",
          blocks: [
            {
              kind: "p",
              text: "The licence ends when you delete the Content or your account, except that we may keep copies in routine backups for a limited period, and except for Content that necessarily remains visible to another Member — chat messages, completed Matches and Reviews — as described in clause 15.3.",
            },
          ],
        },
        {
          number: "16.4",
          blocks: [
            {
              kind: "p",
              text: "You warrant that you own your Content or have the right to publish it, and that publishing it does not infringe anyone else's rights.",
            },
          ],
        },
        {
          number: "16.5",
          blocks: [
            {
              kind: "p",
              text: "If you send us feedback or an idea about the Service, we may use it without owing you anything. Please do not send us anything you want to keep confidential.",
            },
          ],
        },
      ],
    },

    {
      id: "notifications",
      number: "17",
      heading: "Emails and notifications we send you",
      clauses: [
        {
          number: "17.1",
          blocks: [
            {
              kind: "p",
              text: "We send you two kinds of message. **Service messages** are the ones the account needs in order to work: confirming your email address, resetting your password, and telling you about security or legal matters. You cannot switch these off while you have an account.",
            },
          ],
        },
        {
          number: "17.2",
          blocks: [
            {
              kind: "p",
              text: "**Activity notifications** tell you about things happening in the app — a new Request, a Match, a Review, a saved-search alert, a reminder about a Listing that is about to expire. You control these by category in the app's notification settings, and you can turn any category off at any time, or turn off push notifications entirely in your device settings.",
            },
          ],
        },
        {
          number: "17.3",
          blocks: [
            {
              kind: "p",
              text: "**We do not send marketing or promotional email today.** If that ever changes we will ask for your consent first, and every marketing message will say who it is from and give you a working unsubscribe link that we act on promptly, as the Spam Act 2003 (Cth) requires.",
            },
          ],
        },
      ],
    },

    {
      id: "app-stores",
      number: "18",
      heading: "Apple App Store and Google Play terms",
      clauses: [
        {
          number: "18.1",
          blocks: [
            {
              kind: "p",
              text: "This section applies to the ShortTerm app however you obtained it. Where it conflicts with anything else in these Terms, this section applies to that extent.",
            },
          ],
        },
        {
          number: "18.2",
          blocks: [
            {
              kind: "p",
              text: "**If you downloaded the app from the Apple App Store**, the following apply:",
            },
            {
              kind: "ol",
              items: [
                "**Acknowledgement.** These Terms are concluded between you and us only, and not with Apple. We alone are responsible for the app and its content.",
                "**Scope of licence.** We grant you a non-transferable licence to use the app on any Apple-branded product that you own or control, as permitted by the Usage Rules in the Apple Media Services Terms and Conditions, except that the app may be accessed by other accounts associated with you through Family Sharing or volume purchasing.",
                "**Maintenance and support.** We are solely responsible for providing any maintenance and support for the app. Apple has no obligation whatsoever to furnish any maintenance and support services.",
                "**Warranty.** We are solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. If the app fails to conform to any applicable warranty, you may notify Apple, and Apple may refund the purchase price of the app to you (the app is free). To the maximum extent permitted by applicable law, Apple has no other warranty obligation whatsoever with respect to the app.",
                "**Product claims.** We, and not Apple, are responsible for addressing any claim by you or any third party relating to the app or your possession or use of it, including product liability claims, any claim that the app fails to conform to a legal or regulatory requirement, and claims arising under consumer protection, privacy or similar legislation.",
                "**Intellectual property rights.** If a third party claims that the app or your possession and use of it infringes their intellectual property rights, we, and not Apple, are solely responsible for the investigation, defence, settlement and discharge of that claim.",
                "**Legal compliance.** You represent and warrant that you are not located in a country that is subject to a U.S. Government embargo or that has been designated by the U.S. Government as a \"terrorist supporting\" country, and that you are not listed on any U.S. Government list of prohibited or restricted parties.",
                `**Developer name and address.** Questions, complaints or claims about the app should be sent to ${LEGAL.entity}, ${LEGAL.address}, ${LEGAL.contactEmail}, ${LEGAL.phone}.`,
                "**Third party terms.** You must comply with any applicable third party terms when using the app, including your wireless data service agreement.",
                "**Third party beneficiary.** You acknowledge and agree that Apple and Apple's subsidiaries are third party beneficiaries of these Terms, and that on your acceptance of these Terms Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms against you as a third party beneficiary of them.",
              ],
            },
          ],
        },
        {
          number: "18.3",
          blocks: [
            {
              kind: "p",
              text: "**If you downloaded the app from Google Play**, you must also comply with the Google Play Terms of Service. Google is not a party to these Terms and is not responsible for the app. We, and not Google, are responsible for the app and for any claim relating to it.",
            },
          ],
        },
      ],
    },

    {
      id: "changes",
      number: "19",
      heading: "Changes to these Terms",
      clauses: [
        {
          number: "19.1",
          blocks: [
            {
              kind: "p",
              text: "We may change these Terms from time to time — for example because the Service changes, because a provider we use changes, or because the law changes.",
            },
          ],
        },
        {
          number: "19.2",
          blocks: [
            {
              kind: "p",
              text: "**If a change is material and disadvantageous to you, we will give you at least 14 days' notice before it takes effect**, by in-app notice or by email to the address on your account. Minor changes — correcting an error, clarifying wording, or a change we are required by law to make immediately — may take effect straight away, and we will update the date at the top of this page.",
            },
          ],
        },
        {
          number: "19.3",
          blocks: [
            {
              kind: "p",
              text: "If you do not accept a change, you can delete your account before it takes effect. If you keep using the Service after it takes effect, you accept the changed Terms.",
            },
          ],
        },
      ],
    },

    {
      id: "transfer",
      number: "20",
      heading: "If we transfer the Service",
      clauses: [
        {
          number: "20.1",
          blocks: [
            {
              kind: "p",
              text: "We may transfer our rights and obligations under these Terms to another entity — for example to a company formed to operate ShortTerm, or as part of a sale of the business — provided that the new entity agrees to be bound by these Terms and your rights under them are not materially reduced. We will tell you before that happens.",
            },
          ],
        },
        {
          number: "20.2",
          blocks: [
            {
              kind: "p",
              text: "Your account is personal to you. You cannot transfer it or your rights under these Terms to anyone else.",
            },
          ],
        },
      ],
    },

    {
      id: "governing-law",
      number: "21",
      heading: "Governing law, and how we handle disputes",
      clauses: [
        {
          number: "21.1",
          blocks: [
            {
              kind: "p",
              text: `**Please talk to us first.** If you have a problem, email ${LEGAL.contactEmail} with what happened and what you would like us to do. Most things are quicker to fix that way. We will respond within 5 business days.`,
            },
          ],
        },
        {
          number: "21.2",
          blocks: [
            {
              kind: "p",
              text: `These Terms are governed by the laws of ${LEGAL.jurisdiction}, Australia.`,
            },
          ],
        },
        {
          number: "21.3",
          blocks: [
            {
              kind: "p",
              text: `You and we submit to the **non-exclusive** jurisdiction of the courts of ${LEGAL.jurisdiction} and the courts that hear appeals from them. Nothing in these Terms prevents you from bringing a claim in the courts of the State or Territory where you live, or from using any tribunal, ombudsman or consumer dispute resolution service available to you.`,
            },
          ],
        },
      ],
    },

    {
      id: "general",
      number: "22",
      heading: "General",
      clauses: [
        {
          number: "22.1",
          blocks: [
            {
              kind: "p",
              text: "These Terms and the Privacy Policy are the whole agreement between you and us about the Service.",
            },
          ],
        },
        {
          number: "22.2",
          blocks: [
            {
              kind: "p",
              text: "If any part of these Terms is found to be unenforceable, that part is severed and the rest continues to apply.",
            },
          ],
        },
        {
          number: "22.3",
          blocks: [
            {
              kind: "p",
              text: "If we do not enforce a right straight away, we do not give it up.",
            },
          ],
        },
        {
          number: "22.4",
          blocks: [
            {
              kind: "p",
              text: "Nothing in these Terms creates a partnership, joint venture, employment or agency relationship between you and us.",
            },
          ],
        },
        {
          number: "22.5",
          blocks: [
            {
              kind: "p",
              text: "We may give you notice in the app or by email to the address on your account. You give us notice by emailing " +
                LEGAL.contactEmail +
                ".",
            },
          ],
        },
      ],
    },

    {
      id: "contact",
      number: "23",
      heading: "How to contact us",
      clauses: [
        {
          blocks: [
            {
              kind: "ul",
              items: [
                `**General and complaints:** ${LEGAL.contactEmail}`,
                `**Privacy:** ${LEGAL.privacyEmail}`,
                `**Post:** ${LEGAL.entity}, ${LEGAL.address}, Australia`,
                `**Phone:** ${LEGAL.phone}`,
              ],
            },
          ],
        },
      ],
    },
  ],
};
