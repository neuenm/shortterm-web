import { buildDocument, p, ul } from "../build";
import { LEGAL, postalAddress } from "../config";

export const legalNoticeEn = buildDocument({
  preamble: [
    p(
      "As required by article 10 of the Spanish Law 34/2002 on information society services and electronic commerce (LSSI), these are the details of the operator of ShortTerm and the conditions of use of this website.",
    ),
  ],

  sections: [
    {
      id: "holder",
      heading: "Operator",
      clauses: [
        [
          ul(
            `**Operator:** ${LEGAL.holder}, a natural person providing the service under the trade name ${LEGAL.tradeName}`,
            `**Spanish tax id (NIE):** ${LEGAL.taxId}`,
            `**Address:** ${postalAddress("en")}`,
            `**Email:** ${LEGAL.contactEmail}`,
            `**Phone:** ${LEGAL.phone}`,
            `**Website:** ${LEGAL.website}`,
          ),
        ],
        [
          p(
            "**Activity:** an online platform, made up of the ShortTerm app and this website, that puts people offering a room in Australia in touch with people looking for one. ShortTerm is not a real estate agency and takes no part in the arrangements between its members.",
          ),
        ],
      ],
    },

    {
      id: "use",
      heading: "Using this website",
      clauses: [
        [
          p(
            "This website presents the app, answers common questions and shows the public pages of listings that members share. You can browse it without signing up. Use of the ShortTerm app is governed by the Terms of Service.",
          ),
        ],
        [
          p(
            "By using the website you agree to do so lawfully and not to damage it, overload it, or extract its content in bulk or by automated means.",
          ),
        ],
      ],
    },

    {
      id: "intellectual-property",
      heading: "Intellectual and industrial property",
      clauses: [
        [
          p(
            "The ShortTerm name and logo, and the design, software and text of the website, belong to the operator or are used under licence. You may not reproduce, distribute or modify them without permission, except for your personal use.",
          ),
        ],
        [
          p(
            "Listing photos and text belong to the members who publish them, who are responsible for them. Credits for third-party geographic data (GeoNames, under the CC BY 4.0 licence, and the Australian Bureau of Statistics) are shown in the app's licences section.",
          ),
        ],
      ],
    },

    {
      id: "liability",
      heading: "Liability",
      clauses: [
        [
          p(
            "We work to keep the information on this website accurate and up to date, but it may contain errors or become outdated. Listing content is provided by members: as a provider of a content hosting service, we are only liable for it if, having actual knowledge that it is unlawful, we fail to act diligently to remove it.",
          ),
        ],
        [
          p(
            `If you see content on the website you believe is unlawful, write to us at ${LEGAL.contactEmail} saying where it is and why.`,
          ),
        ],
      ],
    },

    {
      id: "data-protection",
      heading: "Data protection and cookies",
      clauses: [
        [
          p(
            "How we handle personal data, and the only cookie this website uses (the one that remembers your language), is explained in the Privacy Policy.",
          ),
        ],
      ],
    },

    {
      id: "law",
      heading: "Governing law",
      clauses: [
        [
          p(
            "This legal notice is governed by Spanish law. If you are a consumer, you keep the protection of the mandatory rules of the country where you live and can go to the courts where you live. The Spanish version of this notice prevails if the two differ.",
          ),
        ],
      ],
    },
  ],
});
