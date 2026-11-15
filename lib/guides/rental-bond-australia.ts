import type { Guide } from "@/lib/guides/types";

// The state-by-state rules here were checked on 2026-11-15 against the official pages in
// `sources`. Bond rules change (Queensland's owner-occupier rule dates from June 2024), so review
// this guide at least once a year and bump `updated`.
const guide: Guide = {
  slug: "rental-bond-australia",
  audience: "guest",
  published: "2026-11-15",
  updated: "2026-11-15",
  en: {
    title: "The rental bond in Australia: how it works when you rent a room",
    description:
      "What a bond is, how much it usually is, where it's lodged in each state and how to get it back when you move out of a room.",
    intro: [
      "A bond is a security deposit you pay at the start of a rental. At the end, the person you rent from can keep part or all of it only to cover rent you owe or damage beyond normal wear and tear. When you rent a room, the rules depend on the state and on the kind of arrangement, so it's worth understanding them before you pay.",
    ],
    sections: [
      {
        id: "how-much",
        heading: "How much is it?",
        body: [
          "For most rentals the bond is capped at four weeks of rent, and many hosts ask for two to four weeks. Some states allow a higher bond when the rent is very high, and where tenancy laws don't apply to your arrangement (see below) the cap may not either. If you're asked for more than four weeks, check with your state's authority before paying.",
        ],
      },
      {
        id: "which-rules",
        heading: "Which rules apply to a room",
        body: [
          "Renting a room can fall under different rules:",
          {
            items: [
              "**You rent from a tenant who holds the lease** (a sublet): in most states you're a subtenant, generally covered by the state's tenancy laws, and the bond goes to the state authority.",
              "**You live with the owner** (a lodger or boarder): in some states this isn't covered by tenancy laws and the deposit doesn't have to be lodged. In New South Wales, for example, boarders and lodgers aren't covered by the Residential Tenancies Act. In Queensland, by contrast, an owner who lives in the home and rents out up to three rooms has had to lodge bonds with the RTA since June 2024.",
              "**A rooming house or boarding house** run as a business: covered by specific rules in each state, and the bond goes to the state authority (in Victoria, for example, the RTBA).",
            ],
          },
          "If you're not sure which one applies, ask the host how the bond will be held, and check with your state's authority before paying.",
        ],
      },
      {
        id: "where",
        heading: "Where it's lodged in each state",
        body: [
          {
            items: [
              "**Queensland**: the Residential Tenancies Authority (RTA).",
              "**New South Wales**: NSW Fair Trading, through Rental Bonds Online.",
              "**Victoria**: the Residential Tenancies Bond Authority (RTBA).",
              "**Western Australia**: the Bond Administrator, at Consumer Protection.",
              "**South Australia**: Consumer and Business Services (CBS).",
              "**Tasmania**: the Rental Deposit Authority, through MyBond.",
              "**Australian Capital Territory**: the ACT Government's rental bonds office.",
              "**Northern Territory**: there's no central authority; the landlord or agent holds the bond in trust in an NT bank account, and NT Consumer Affairs can tell you whether yours is held.",
            ],
          },
          "When a bond is lodged, the authority confirms it to you with a bond number. Keep it: you'll need it to claim the money back.",
        ],
      },
      {
        id: "move-in",
        heading: "Protect it when you move in",
        body: [
          {
            items: [
              "Pay by bank transfer and get a written receipt. Never pay cash without one.",
              "Agree in writing on the rent, the bond, what's included and the notice period.",
              "On your first day, take dated photos of the room and anything already damaged, and send them to the host. If there's an entry condition report, fill it in and keep a copy.",
            ],
          },
        ],
      },
      {
        id: "get-it-back",
        heading: "Getting it back when you leave",
        body: [
          "Give the notice you agreed on, leave the room clean and as you found it, and return the keys. If the bond was lodged with an authority, you can usually claim it together with the host, or on your own if you can't agree, and the authority then gives the other side a chance to respond. If it wasn't lodged, ask for it back in writing and keep the messages.",
          "If you still can't agree, every state has a free tenancy advice service and a tribunal that resolves bond disputes.",
        ],
      },
    ],
    sources: [
      {
        label: "RTA Queensland — Rental bonds for rooming accommodation",
        url: "https://rta.qld.gov.au/forms-resources/fact-sheets/rooming-accommodation-fact-sheets/rental-bonds-for-rooming",
      },
      {
        label: "Tenants' Union of NSW — Boarders and lodgers",
        url: "https://files.tenants.org.au/factsheets/boarders-lodgers.pdf",
      },
      {
        label: "Tenants Victoria — Bonds in rooming houses",
        url: "https://tenantsvic.org.au/explore-topics/starting-your-tenancy/bonds/rooming-house/",
      },
      {
        label: "Consumer Protection WA",
        url: "https://consumerprotection.wa.gov.au",
      },
      {
        label: "CBOS Tasmania — MyBond for tenants",
        url: "https://www.cbos.tas.gov.au/topics/housing/mybond/what-is-mybond/mybond-for-new-tenants",
      },
      {
        label: "NT Government — When you are owed bond money",
        url: "https://nt.gov.au/property/renters/when-you-are-owed-bond-money",
      },
    ],
  },
  es: {
    title: "El bond en Australia: cómo funciona cuando alquilas una habitación",
    description:
      "Qué es el bond, cuánto suele ser, dónde se deposita en cada estado y cómo recuperarlo cuando te vas de una habitación.",
    intro: [
      "El bond es un depósito de garantía que pagas al empezar un alquiler. Al final, quien te alquila solo puede quedarse con una parte o con todo para cubrir alquiler que debas o daños más allá del desgaste normal. Cuando alquilas una habitación, las reglas dependen del estado y del tipo de acuerdo, así que conviene entenderlas antes de pagar.",
    ],
    sections: [
      {
        id: "how-much",
        heading: "¿Cuánto es?",
        body: [
          "En la mayoría de los alquileres el bond tiene un tope de cuatro semanas de alquiler, y muchos anfitriones piden entre dos y cuatro. Algunos estados permiten uno más alto cuando el alquiler es muy alto, y si las leyes de alquiler no se aplican a tu acuerdo (ver abajo), puede que el tope tampoco. Si te piden más de cuatro semanas, consulta con el organismo de tu estado antes de pagar.",
        ],
      },
      {
        id: "which-rules",
        heading: "Qué reglas se aplican a una habitación",
        body: [
          "Alquilar una habitación puede caer bajo reglas distintas:",
          {
            items: [
              "**Alquilas a alguien que tiene el contrato de la casa** (un subalquiler): en la mayoría de los estados eres subinquilino, en general cubierto por las leyes de alquiler del estado, y el bond va al organismo del estado.",
              "**Vives con el dueño** (lodger o boarder): en algunos estados esto no está cubierto por las leyes de alquiler y el depósito no tiene por qué depositarse. En New South Wales, por ejemplo, los boarders y lodgers no están cubiertos por la Residential Tenancies Act. En Queensland, en cambio, el dueño que vive en la casa y alquila hasta tres habitaciones tiene que depositar el bond en la RTA desde junio de 2024.",
              "**Un rooming house o boarding house** que funciona como negocio: tiene reglas propias en cada estado, y el bond va al organismo del estado (en Victoria, por ejemplo, la RTBA).",
            ],
          },
          "Si no sabes cuál es tu caso, pregúntale al anfitrión cómo se va a guardar el bond y consulta con el organismo de tu estado antes de pagar.",
        ],
      },
      {
        id: "where",
        heading: "Dónde se deposita en cada estado",
        body: [
          {
            items: [
              "**Queensland**: la Residential Tenancies Authority (RTA).",
              "**New South Wales**: NSW Fair Trading, a través de Rental Bonds Online.",
              "**Victoria**: la Residential Tenancies Bond Authority (RTBA).",
              "**Western Australia**: el Bond Administrator, en Consumer Protection.",
              "**South Australia**: Consumer and Business Services (CBS).",
              "**Tasmania**: la Rental Deposit Authority, a través de MyBond.",
              "**Australian Capital Territory**: la oficina de bonds de alquiler del gobierno del ACT.",
              "**Northern Territory**: no hay un organismo central; el dueño o la inmobiliaria guarda el bond en una cuenta bancaria del NT, y NT Consumer Affairs puede decirte si el tuyo está guardado.",
            ],
          },
          "Cuando el bond se deposita, el organismo te lo confirma con un número de bond. Guárdalo: lo vas a necesitar para pedir que te lo devuelvan.",
        ],
      },
      {
        id: "move-in",
        heading: "Protégelo al mudarte",
        body: [
          {
            items: [
              "Paga por transferencia bancaria y pide un recibo por escrito. Nunca pagues en efectivo sin recibo.",
              "Acuerden por escrito el alquiler, el bond, qué incluye y con cuánto tiempo hay que avisar para irse.",
              "El primer día, saca fotos con fecha de la habitación y de lo que ya esté dañado, y mándaselas al anfitrión. Si hay un informe de estado de entrada (condition report), complétalo y guarda una copia.",
            ],
          },
        ],
      },
      {
        id: "get-it-back",
        heading: "Recuperarlo al irte",
        body: [
          "Avisa con el tiempo que acordaron, deja la habitación limpia y como la encontraste, y devuelve las llaves. Si el bond se depositó en un organismo, en general pueden pedirlo juntos, o tú solo si no se ponen de acuerdo, y el organismo le da a la otra parte la oportunidad de responder. Si no se depositó, pídelo por escrito y guarda los mensajes.",
          "Si aun así no se ponen de acuerdo, cada estado tiene un servicio gratuito de asesoramiento sobre alquileres y un tribunal que resuelve los conflictos por el bond.",
        ],
      },
    ],
    sources: [
      {
        label: "RTA Queensland — Rental bonds for rooming accommodation",
        url: "https://rta.qld.gov.au/forms-resources/fact-sheets/rooming-accommodation-fact-sheets/rental-bonds-for-rooming",
      },
      {
        label: "Tenants' Union of NSW — Boarders and lodgers",
        url: "https://files.tenants.org.au/factsheets/boarders-lodgers.pdf",
      },
      {
        label: "Tenants Victoria — Bonds in rooming houses",
        url: "https://tenantsvic.org.au/explore-topics/starting-your-tenancy/bonds/rooming-house/",
      },
      {
        label: "Consumer Protection WA",
        url: "https://consumerprotection.wa.gov.au",
      },
      {
        label: "CBOS Tasmania — MyBond for tenants",
        url: "https://www.cbos.tas.gov.au/topics/housing/mybond/what-is-mybond/mybond-for-new-tenants",
      },
      {
        label: "NT Government — When you are owed bond money",
        url: "https://nt.gov.au/property/renters/when-you-are-owed-bond-money",
      },
    ],
  },
};

export default guide;
