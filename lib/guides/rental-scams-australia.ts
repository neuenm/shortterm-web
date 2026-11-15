import type { Guide } from "@/lib/guides/types";

const guide: Guide = {
  slug: "rental-scams-australia",
  audience: "guest",
  published: "2026-11-15",
  updated: "2026-11-15",
  en: {
    title: "Rental scams in Australia: how to spot them when you're looking for a room",
    description:
      "The warning signs of a fake room, how scammers ask for money and what to do if you've already paid.",
    intro: [
      "Fake rooms are one of the most common scams people run into when they arrive in Australia. They usually look like a great room at a good price, with a host who can't show it to you but wants a payment to hold it. Scamwatch, Australia's national scam service, lists the same warning signs again and again.",
    ],
    sections: [
      {
        id: "warning-signs",
        heading: "Warning signs",
        body: [
          {
            items: [
              "The host has an excuse for why you can't see the room (they're overseas, travelling, or the current tenant can't be disturbed) but wants money now.",
              "You're asked to pay rent or a bond before you've seen the room or agreed on anything in writing.",
              "The price is much lower than similar rooms in the same suburb.",
              "There's pressure to decide fast: other people are interested, the offer ends today.",
              "You're asked to pay in an unusual way: gift cards, cryptocurrency, a money transfer service or an overseas account.",
              "You're asked for copies of your passport or bank details before anything is agreed.",
              "The photos look like they come from a hotel or another listing. A reverse image search shows where else they appear.",
            ],
          },
        ],
      },
      {
        id: "protect",
        heading: "How to protect yourself",
        body: [
          {
            items: [
              "See the room before you pay anything, in person or on a live video call where you decide what to look at.",
              "Meet the host and, if you can, some of the housemates.",
              "Pay by bank transfer to an account in the host's name, and get a receipt. Where the bond has to be lodged with a state authority, check that it was ([how the bond works](/guides/rental-bond-australia)).",
              "Keep the conversation in writing. On ShortTerm the chat stays in the app, and you can report a listing or a person from the room's page or the conversation.",
              "Trust your instinct: if something feels off, walk away.",
            ],
          },
        ],
      },
      {
        id: "already-paid",
        heading: "If you've already paid",
        body: [
          {
            items: [
              "Contact your bank straight away: they may be able to stop or recover the payment.",
              "Report it to [Scamwatch](https://www.scamwatch.gov.au/report-a-scam), and to the police if you've lost money.",
              "Report the listing on the site or app where you found it, so it's taken down for others.",
              "If you shared identity documents, contact [IDCARE](https://www.idcare.org), Australia's free identity and cyber support service.",
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "Scamwatch", url: "https://www.scamwatch.gov.au" },
      { label: "Scamwatch — Report a scam", url: "https://www.scamwatch.gov.au/report-a-scam" },
      { label: "IDCARE", url: "https://www.idcare.org" },
    ],
  },
  es: {
    title: "Estafas al alquilar en Australia: cómo reconocerlas cuando buscas habitación",
    description:
      "Las señales de una habitación falsa, cómo piden la plata los estafadores y qué hacer si ya pagaste.",
    intro: [
      "Las habitaciones falsas son una de las estafas más comunes para quien llega a Australia. Suelen parecer una gran habitación a buen precio, con un anfitrión que no puede mostrártela pero quiere un pago para reservarla. Scamwatch, el servicio nacional contra estafas de Australia, repite las mismas señales una y otra vez.",
    ],
    sections: [
      {
        id: "warning-signs",
        heading: "Señales de alerta",
        body: [
          {
            items: [
              "El anfitrión tiene una excusa para que no puedas ver la habitación (está en el exterior, de viaje, o no se puede molestar a quien vive ahí) pero quiere la plata ya.",
              "Te piden pagar alquiler o bond antes de ver la habitación o de acordar nada por escrito.",
              "El precio es mucho más bajo que el de habitaciones parecidas en el mismo barrio.",
              "Te apuran para decidir: hay otros interesados, la oferta vence hoy.",
              "Te piden pagar de una forma rara: tarjetas de regalo, criptomonedas, un servicio de envío de dinero o una cuenta en el exterior.",
              "Te piden copias del pasaporte o datos bancarios antes de acordar nada.",
              "Las fotos parecen de un hotel o de otra publicación. Una búsqueda inversa de imágenes muestra dónde más aparecen.",
            ],
          },
        ],
      },
      {
        id: "protect",
        heading: "Cómo protegerte",
        body: [
          {
            items: [
              "Mira la habitación antes de pagar nada, en persona o en una videollamada en vivo donde tú decides qué mirar.",
              "Conoce al anfitrión y, si puedes, a algunos de los compañeros de casa.",
              "Paga por transferencia a una cuenta a nombre del anfitrión, y pide un recibo. Si el bond tiene que depositarse en un organismo del estado, comprueba que se haya depositado ([cómo funciona el bond](/guides/rental-bond-australia)).",
              "Mantén la conversación por escrito. En ShortTerm el chat queda en la app, y puedes denunciar una publicación o a una persona desde la página de la habitación o desde la conversación.",
              "Confía en tu instinto: si algo no te cierra, sigue de largo.",
            ],
          },
        ],
      },
      {
        id: "already-paid",
        heading: "Si ya pagaste",
        body: [
          {
            items: [
              "Habla con tu banco enseguida: puede que logre frenar o recuperar el pago.",
              "Denúncialo en [Scamwatch](https://www.scamwatch.gov.au/report-a-scam), y en la policía si perdiste dinero.",
              "Denuncia la publicación en el sitio o la app donde la encontraste, para que la bajen.",
              "Si compartiste documentos de identidad, contacta a [IDCARE](https://www.idcare.org), el servicio gratuito de Australia de ayuda ante robos de identidad.",
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "Scamwatch", url: "https://www.scamwatch.gov.au" },
      { label: "Scamwatch — Report a scam", url: "https://www.scamwatch.gov.au/report-a-scam" },
      { label: "IDCARE", url: "https://www.idcare.org" },
    ],
  },
};

export default guide;
