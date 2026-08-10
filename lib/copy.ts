export const copy = {
  brand: {
    name: "ShortTerm",
    tagline: "Estancias cortas. Historias largas.",
  },
  nav: {
    privacy: "Privacidad",
  },
  hero: {
    eyebrow: "Una nueva forma de encontrar dónde quedarte",
    title: "Encuentra tu próxima habitación, sin vueltas.",
    subtitle:
      "ShortTerm conecta a personas que tienen una habitación disponible por un período fijo con personas que la están buscando. Publica o busca, chatea directo y coordina tu estadía.",
    ctaHint: "Descarga la app cuando esté disponible:",
    comingSoon: "Próximamente",
  },
  howItWorks: {
    title: "Cómo funciona",
    subtitle:
      "ShortTerm conecta personas — no gestiona reservas ni pagos. Tú coordinas todo directo con la otra persona.",
    steps: [
      {
        title: "Publica o busca una habitación",
        description:
          "Los anfitriones publican su habitación disponible para fechas fijas. Quienes buscan filtran por ciudad y fechas.",
      },
      {
        title: "Contacta por chat",
        description:
          "Escribe directo dentro de la app para resolver dudas y conocer a la otra persona antes de decidir.",
      },
      {
        title: "Coordinen los detalles",
        description:
          "Precio, reglas de la casa, fecha de entrada y salida: todo se conversa y se acuerda entre ambos.",
      },
      {
        title: "Confirmen el match",
        description:
          "Cuando las dos partes están de acuerdo, confirman el match dentro de la app y listo.",
      },
    ],
  },
  whyShortTerm: {
    title: "Por qué ShortTerm",
    reasons: [
      {
        title: "Personas reales",
        description:
          "Perfiles con nombre, hábitos y preferencias, para que sepas con quién vas a convivir antes de decidir.",
      },
      {
        title: "Sin comisiones de reserva",
        description:
          "ShortTerm no cobra por reservar ni procesa pagos. Solo conecta a las personas; el resto lo acuerdan ustedes.",
      },
      {
        title: "Chat directo",
        description:
          "Nada de intermediarios ni formularios eternos: hablas directo con la otra persona desde el primer mensaje.",
      },
      {
        title: "Pensado para estadías cortas",
        description:
          "Fechas fijas, sin contratos largos: ideal para viajes de trabajo, intercambios o mudanzas temporales.",
      },
    ],
  },
  storeBadges: {
    appStoreAlt: "Descargar en el App Store",
    playStoreAlt: "Disponible en Google Play",
  },
  footer: {
    tagline: "Estancias cortas. Historias largas.",
    contactLabel: "Contacto",
    contactEmail: "hola@shortterm-app.com", // TODO: replace with the real support/contact email
    copyright: (year: number) => `© ${year} ShortTerm. Todos los derechos reservados.`,
  },
  privacy: {
    title: "Política de privacidad",
    draftNotice:
      "Este documento es un borrador y aún no fue revisado por un abogado — no lo publiques como versión final.",
    lastUpdated: "Última actualización: borrador interno",
    sections: [
      {
        heading: "1. Qué datos recopilamos",
        body: [
          "Cuando creas una cuenta en ShortTerm, recopilamos tu dirección de email y, si eliges iniciar sesión con Google, la información básica de tu perfil de Google necesaria para la autenticación.",
          "También recopilamos la información de tu perfil: nombre, nacionalidad, idiomas que hablas, foto de perfil y preferencias de estilo de vida (hábitos, horarios, si fumas, si tienes mascotas). Esta información se usa únicamente para mostrar compatibilidad entre anfitriones y buscadores.",
          "Si publicas una habitación como anfitrión, recopilamos los datos de esa publicación: dirección, ubicación, fotos, precio y reglas de la casa.",
          "Recopilamos los mensajes que envías por el chat con otros usuarios dentro de la app, una vez que hicieron match.",
          "Recopilamos un token de notificaciones push de tu dispositivo, para poder enviarte notificaciones sobre tu actividad en la app.",
        ],
      },
      {
        heading: "2. Con quién compartimos datos",
        body: [
          "No vendemos tus datos. Compartimos información con los siguientes proveedores, que procesan datos en nuestro nombre para que la app funcione:",
        ],
        list: [
          "Supabase — base de datos, autenticación y almacenamiento de archivos (infraestructura de hosting).",
          "Google — únicamente si eliges iniciar sesión con Google (OAuth).",
          "Sentry — monitoreo de errores y fallos, incluyendo repeticiones de sesión (session replay), que pueden incluir datos personales.",
          "Brevo — envío de emails transaccionales, por ejemplo notificaciones sobre reportes.",
          "Expo/EAS — entrega de notificaciones push.",
        ],
      },
      {
        heading: "3. Para qué usamos tus datos",
        body: [
          "Usamos tus datos para conectar a anfitriones con buscadores, habilitar el chat dentro de la app, enviarte notificaciones transaccionales, procesar reportes de seguridad y corregir errores de la aplicación.",
        ],
      },
      {
        heading: "4. Para qué NO usamos tus datos",
        body: [
          "ShortTerm no procesa pagos: la app no tiene una función de pago ni de reserva, así que no recopilamos ni procesamos datos de tarjetas o medios de pago.",
          "No usamos tus datos para segmentación publicitaria (ad targeting).",
          "No vendemos tus datos a terceros.",
        ],
      },
      {
        heading: "5. Tus derechos",
        body: [
          "Puedes solicitar acceso, corrección o eliminación de tus datos personales en cualquier momento escribiéndonos a la dirección de contacto que figura al final de este documento.",
        ],
      },
      {
        heading: "6. Retención y eliminación de datos",
        body: [
          "Cuando eliminas tu cuenta desde la app, tu perfil se elimina siguiendo el flujo de borrado de la aplicación. Los plazos exactos de retención de cada tipo de dato están sujetos a revisión legal y de producto, y se detallarán en la versión final de este documento.",
        ],
      },
      {
        heading: "7. Contacto",
        body: [
          "Para consultas sobre esta política o sobre tus datos personales, escríbenos a privacidad@shortterm-app.com.", // TODO: replace with the real privacy-contact email
        ],
      },
    ],
  },
  listing: {
    unavailable: {
      title: "Esta publicación ya no está disponible",
      description:
        "Puede que haya sido eliminada o que ya no esté activa. Descarga la app de ShortTerm para ver otras habitaciones disponibles.",
    },
    fromLabel: "desde",
    weekLabel: "por semana",
    couplesLabel: "Precio para parejas",
    bedroomsLabel: "habitaciones",
    bathroomLabel: "baño",
    bathroomsLabel: "baños",
    guestsLabel: "huéspedes",
    gateTitle: "Instala la app para ver más",
    gateDescription:
      "Instala la app para ver más fotos, contactar al anfitrión y coordinar tu estadía.",
    openInApp: "Abrir en la app",
  },
} as const;
