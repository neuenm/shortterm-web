import type { Guide } from "@/lib/guides/types";

// For hosts: the search side of supply ("rent out a room Brisbane"). The tax paragraph follows the
// ATO pages in `sources`, checked on 2026-11-15; it states the rule and points to the ATO rather
// than giving advice.
const guide: Guide = {
  slug: "rent-out-a-room",
  audience: "host",
  published: "2026-11-15",
  updated: "2026-11-15",
  en: {
    title: "How to rent out a room in your home, for a few weeks or for longer",
    description:
      "What to check before renting out a room in Australia, how to set dates and a price, the bond, tax, and how to choose who moves in.",
    intro: [
      "Renting out a spare room, for a few weeks or for longer, is one of the simplest ways to cover part of your rent or mortgage, and plenty of people arriving in Australia are looking for exactly that. Before you publish it, a few things are worth checking.",
    ],
    sections: [
      {
        id: "check-first",
        heading: "Check that you can rent it out",
        body: [
          {
            items: [
              "**If you rent your home**, read your lease: in most states you need the landlord's written permission to sublet or take in a lodger.",
              "**If you own it**, check your strata rules and your home and contents insurance: some insurers need to know when someone pays to live with you.",
              "**Know which rules apply.** A lodger in the owner's home, a subtenant and a rooming house fall under different rules in each state. Your state's tenancy authority explains which one is yours.",
            ],
          },
        ],
      },
      {
        id: "dates-price",
        heading: "Set the dates and the price",
        body: [
          "Decide whether the room is **Short term** (between two dates) or **Long term** (from a date, with no end), and whether you'll ask for a minimum stay. Price it per week, the way rent is quoted in Australia, and be clear about what's included: bills, internet, linen, parking.",
          "To set a fair price, look at the rooms around you: our [area pages](/rooms) show how many rooms are available in each city and suburb, and what they cost each week.",
        ],
      },
      {
        id: "bond",
        heading: "Ask for a bond, the right way",
        body: [
          "A bond protects you if rent goes unpaid or something gets damaged. Agree on the amount in writing, give a receipt, and lodge it with your state's authority where the rules require it. In Queensland, for example, an owner who lives in the home and rents out up to three rooms has to lodge bonds with the RTA. [Our guide to the bond](/guides/rental-bond-australia) lists the authority in each state.",
        ],
      },
      {
        id: "tax",
        heading: "Tax",
        body: [
          "The ATO treats the rent you receive for a room as assessable income: you declare it in your tax return, and you can claim the share of expenses that relates to the room, for the days it was rented. Renting out part of your home can also mean losing part of the main residence exemption from capital gains tax when you sell. Read the ATO's guidance on renting out part of your home, or ask a tax adviser.",
        ],
      },
      {
        id: "choose",
        heading: "Choose who moves in",
        body: [
          "Talk before you decide: a video call or a visit tells you a lot. Ask about their routines, how long they want to stay and what brings them to the city.",
          "On ShortTerm, interested guests send you a request with their dates. You see their profile, what you have in common and their reviews from previous stays, you chat in the app, and you choose who to confirm the match with.",
        ],
      },
      {
        id: "in-writing",
        heading: "Put it in writing",
        body: [
          "Agree in writing on the dates, the rent and what it includes, the bond, the notice period and the house rules, even for a stay of a few weeks. Some states have standard forms for it.",
        ],
      },
      {
        id: "publish",
        heading: "Publish your room",
        body: [
          "In the ShortTerm app, publishing a room takes a few minutes: photos, dates, price and who lives in the house. Then share its link in your groups: anyone sees a preview of the room, and people with the app installed open it there.",
        ],
      },
    ],
    sources: [
      {
        label: "ATO — Renting out part of your home: using your home for rental or business",
        url: "https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax/property-and-capital-gains-tax/your-main-residence-home/using-your-home-for-rental-or-business",
      },
      {
        label: "ATO — Renting a room or part of your main residence",
        url: "https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/tax-time/tax-time-toolkits/tax-time-toolkit-for-investors/rental-property-expenses/renting-a-room-or-part-of-your-main-residence",
      },
      {
        label: "RTA Queensland — Rental bonds for rooming accommodation",
        url: "https://rta.qld.gov.au/forms-resources/fact-sheets/rooming-accommodation-fact-sheets/rental-bonds-for-rooming",
      },
    ],
  },
  es: {
    title: "Cómo alquilar una habitación de tu casa, por unas semanas o por más tiempo",
    description:
      "Qué revisar antes de alquilar una habitación en Australia, cómo poner fechas y precio, el bond, los impuestos y cómo elegir quién se muda.",
    intro: [
      "Alquilar la habitación que te sobra, por unas semanas o por más tiempo, es una de las formas más simples de cubrir parte de tu alquiler o tu hipoteca, y mucha gente que llega a Australia busca justamente eso. Antes de publicarla, conviene revisar algunas cosas.",
    ],
    sections: [
      {
        id: "check-first",
        heading: "Comprueba que puedes alquilarla",
        body: [
          {
            items: [
              "**Si alquilas tu casa**, lee tu contrato: en la mayoría de los estados necesitas el permiso por escrito del dueño para subalquilar o tomar un lodger.",
              "**Si eres dueño**, revisa las reglas del edificio (strata) y el seguro de tu casa: algunas aseguradoras necesitan saber si alguien te paga por vivir contigo.",
              "**Ten claro qué reglas se aplican.** Un lodger en la casa del dueño, un subinquilino y un rooming house tienen reglas distintas en cada estado. El organismo de alquileres de tu estado explica cuál es tu caso.",
            ],
          },
        ],
      },
      {
        id: "dates-price",
        heading: "Pon las fechas y el precio",
        body: [
          "Decide si la habitación es **Short term** (entre dos fechas) o **Long term** (desde una fecha, sin fin), y si vas a pedir una estadía mínima. Ponle precio por semana, como se expresa el alquiler en Australia, y deja claro qué incluye: cuentas, internet, ropa de cama, parking.",
          "Para poner un precio justo, mira las habitaciones de tu zona: nuestras [páginas por zona](/rooms) muestran cuántas habitaciones hay disponibles en cada ciudad y barrio, y cuánto cuestan por semana.",
        ],
      },
      {
        id: "bond",
        heading: "Pide un bond, como corresponde",
        body: [
          "El bond te protege si queda alquiler sin pagar o algo se rompe. Acuerden el monto por escrito, da un recibo y deposítalo en el organismo de tu estado cuando las reglas lo exigen. En Queensland, por ejemplo, el dueño que vive en la casa y alquila hasta tres habitaciones tiene que depositar el bond en la RTA. [Nuestra guía del bond](/guides/rental-bond-australia) dice cuál es el organismo de cada estado.",
        ],
      },
      {
        id: "tax",
        heading: "Impuestos",
        body: [
          "Para la ATO, el alquiler que cobras por una habitación es un ingreso gravable: lo declaras en tu declaración de impuestos, y puedes deducir la parte de los gastos que corresponde a la habitación, por los días en que estuvo alquilada. Alquilar parte de tu casa también puede hacerte perder parte de la exención por vivienda principal (main residence exemption) del impuesto a las ganancias de capital cuando vendas. Lee la información de la ATO sobre alquilar parte de tu casa, o consulta con un asesor impositivo.",
        ],
      },
      {
        id: "choose",
        heading: "Elige quién se muda",
        body: [
          "Hablen antes de decidir: una videollamada o una visita dicen mucho. Pregunta por sus rutinas, cuánto tiempo quiere quedarse y qué lo trae a la ciudad.",
          "En ShortTerm, los interesados te mandan una solicitud con sus fechas. Ves su perfil, qué tienen en común y sus reseñas de estadías anteriores, chatean en la app, y eliges con quién confirmar el match.",
        ],
      },
      {
        id: "in-writing",
        heading: "Ponlo por escrito",
        body: [
          "Acuerden por escrito las fechas, el alquiler y qué incluye, el bond, con cuánto tiempo hay que avisar para irse y las reglas de la casa, aunque sea una estadía de unas semanas. Algunos estados tienen formularios estándar para eso.",
        ],
      },
      {
        id: "publish",
        heading: "Publica tu habitación",
        body: [
          "En la app de ShortTerm, publicar una habitación lleva unos minutos: fotos, fechas, precio y quiénes viven en la casa. Después comparte el link en tus grupos: cualquiera ve una vista previa de la habitación, y quien tiene la app la abre ahí.",
        ],
      },
    ],
    sources: [
      {
        label: "ATO — Renting out part of your home: using your home for rental or business",
        url: "https://www.ato.gov.au/individuals-and-families/investments-and-assets/capital-gains-tax/property-and-capital-gains-tax/your-main-residence-home/using-your-home-for-rental-or-business",
      },
      {
        label: "ATO — Renting a room or part of your main residence",
        url: "https://www.ato.gov.au/tax-and-super-professionals/for-tax-professionals/prepare-and-lodge/tax-time/tax-time-toolkits/tax-time-toolkit-for-investors/rental-property-expenses/renting-a-room-or-part-of-your-main-residence",
      },
      {
        label: "RTA Queensland — Rental bonds for rooming accommodation",
        url: "https://rta.qld.gov.au/forms-resources/fact-sheets/rooming-accommodation-fact-sheets/rental-bonds-for-rooming",
      },
    ],
  },
};

export default guide;
