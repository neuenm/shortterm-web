import { buildDocument, callout, ol, p, ul, unnumbered } from "../build";
import { LEGAL, postalAddress } from "../config";

const address = postalAddress("es");

export const termsEs = buildDocument({
  preamble: [
    p(
      `Estos Términos de servicio (los **Términos**) son el contrato entre tú y ${LEGAL.holder}, que ofrece el servicio con el nombre comercial ${LEGAL.tradeName} (**ShortTerm**, **nosotros**). Regulan el uso de la app ShortTerm y de la web ${LEGAL.website} (juntas, el **Servicio**).`,
    ),
    p(
      "Para usar el Servicio tienes que confirmar que tienes 18 años o más y aceptar estos Términos. Lo haces en la app al crear tu cuenta o entrar en ella, con el botón junto al que aparece el aviso «Al continuar, confirmas que tienes 18 años o más y aceptas los Términos de servicio». Si no estás de acuerdo con ellos, no uses el Servicio. Cómo tratamos tus datos personales lo explica la Política de privacidad.",
    ),
    callout(
      "**Tres cosas importantes antes de seguir.** Primero: ShortTerm solo pone en contacto a personas; no alquilamos habitaciones, no cobramos pagos, no guardamos bonds ni actuamos como agente de nadie. Segundo: no verificamos la identidad de nadie ni comprobamos que un perfil, una publicación o una review sean ciertos. Tercero: conocer y vivir con alguien que conociste por internet tiene riesgos reales; la sección §{safety} explica las precauciones que te pedimos.",
    ),
  ],

  sections: [
    {
      id: "who-we-are",
      heading: "Quiénes somos y palabras que usamos",
      clauses: [
        [
          p(
            `El Servicio lo presta **${LEGAL.holder}**, persona física, con NIE ${LEGAL.taxId} y domicilio en ${address}. Puedes escribirnos a ${LEGAL.contactEmail} o llamarnos al ${LEGAL.phone}. Para cualquier asunto sobre tus datos personales, escribe a ${LEGAL.privacyEmail}. Los datos completos del titular están en el Aviso legal de la web.`,
          ),
        ],
        [
          p("En estos Términos:"),
          ul(
            "**Miembro** es cualquier persona con una cuenta de ShortTerm.",
            "**Anfitrión** es el miembro que publica una habitación.",
            "**Huésped** es el miembro que busca una habitación y la solicita.",
            "**Publicación** es la habitación que un anfitrión publica en el Servicio, con sus fechas y condiciones.",
            "**Compañeros de casa** son las personas que ya viven en la casa de una publicación, anfitrión incluido.",
            "**Solicitud** es el pedido que un huésped envía a un anfitrión sobre una publicación concreta, y el chat que se abre con él.",
            "**Match** es la situación en la que el anfitrión ha elegido a un huésped y ese huésped lo ha confirmado.",
            "**Review** es la valoración de una a cinco estrellas, con comentario, que un miembro puede dejar sobre otro después de una estadía.",
            "**Contenido** es todo lo que publicas, subes o envías a través del Servicio: tu perfil, publicaciones, fotos, mensajes, reviews y denuncias.",
          ),
        ],
        [
          p(
            "Estos Términos se aplican a la app y a la web, incluida la página pública que se abre al compartir el enlace de una publicación.",
          ),
        ],
      ],
    },

    {
      id: "what-shortterm-is",
      heading: "Qué es ShortTerm y qué no es",
      clauses: [
        [
          p(
            "ShortTerm es una plataforma para poner en contacto a personas que ofrecen una habitación en Australia con personas que la buscan. Los anfitriones publican habitaciones, los huéspedes las buscan y envían solicitudes, se escriben por el chat de la app y, si ambos quieren seguir adelante, confirman un match. Eso es todo lo que hace el Servicio.",
          ),
        ],
        [
          p(
            "**Nunca somos parte de lo que acuerdes con otro miembro.** Si acuerdas con otro miembro que uno de los dos se mude a la casa del otro, ese acuerdo —sea un contrato de alquiler, un subarriendo, una cesión de uso de la habitación o algo informal— es solo entre vosotros. No lo firmamos ni tenemos obligaciones derivadas de él.",
          ),
        ],
        [
          p("No somos ni actuamos como:"),
          ul(
            "agente inmobiliario, administrador de fincas ni gestor de alquileres",
            "arrendador, arrendatario principal, subarrendador ni proveedor de alojamiento",
            "operador de una casa de huéspedes, pensión ni alojamiento turístico",
            "agente de ningún miembro, para ningún fin",
            "aseguradora, garante, servicio de depósito ni proveedor de pagos",
            "asesor legal, fiscal, financiero, migratorio ni inmobiliario",
          ),
        ],
        [
          p(
            "**ShortTerm no tiene ninguna función de pago.** No procesamos pagos, no recibimos ni guardamos rentas, bonds, depósitos ni señas, y no cobramos comisión por ningún acuerdo. El dinero que se muevan los miembros se mueve completamente fuera del Servicio, y no podemos recuperarlo ni devolverlo.",
          ),
        ],
        [
          p(
            "Un match en ShortTerm solo indica que dos personas quieren seguir adelante. No es un contrato de alquiler, una reserva ni un compromiso vinculante, y no obliga a ninguna de las dos a continuar.",
          ),
        ],
        [
          p(
            "Hoy el Servicio es gratuito y no muestra publicidad. Si en el futuro añadimos funciones de pago o publicidad, te avisaremos antes, actualizaremos estos Términos y la Política de privacidad y, cuando la ley lo exija, te pediremos tu consentimiento. Nunca te cobraremos nada sin que lo aceptes antes.",
          ),
        ],
      ],
    },

    {
      id: "account",
      heading: "Requisitos y tu cuenta",
      clauses: [
        [
          p(
            "**ShortTerm es solo para mayores de 18 años.** Para usar el Servicio tienes que confirmar que tienes 18 años o más, lo que haces al crear tu cuenta o entrar en la app.",
          ),
        ],
        [
          p("Cada vez que usas el Servicio declaras que:"),
          ol(
            "tienes 18 años o más;",
            "la información de tu perfil y de tus publicaciones es verdadera, exacta y actual;",
            "usas el Servicio para buscar u ofrecer una habitación para ti, no en nombre de un tercero oculto;",
            "ninguna ley te impide usar el Servicio; y",
            "no te hemos cerrado antes una cuenta por incumplir estos Términos.",
          ),
        ],
        [
          p(
            "**Confiamos en lo que nos dices y no lo verificamos.** No verificamos la edad ni la identidad de nadie, no revisamos documentos y no hacemos comprobaciones de antecedentes penales, referencias, empleo, situación migratoria ni solvencia. La insignia **«Correo verificado»** solo significa que la persona confirmó que tiene acceso a su email, y la insignia **«Perfil completo»** solo que rellenó todos los campos del perfil. Nada en el Servicio es una verificación, una aprobación ni una recomendación de un miembro por nuestra parte.",
          ),
        ],
        [
          p(
            `Puedes crear tu cuenta con email y contraseña o con tu cuenta de Google. Ten una sola cuenta, no compartas tu contraseña y no dejes que otra persona use tu cuenta: eres responsable de lo que se haga desde ella. Si crees que alguien ha entrado en tu cuenta, avísanos enseguida en ${LEGAL.contactEmail}.`,
          ),
        ],
        [
          p(
            "Si sabemos que una cuenta pertenece a un menor de 18 años, o que una declaración del apartado anterior es falsa, actuaremos según la sección §{suspension}.",
          ),
        ],
      ],
    },

    {
      id: "profile",
      heading: "Tu perfil",
      clauses: [
        [
          p(
            "Tu perfil sirve para que otros miembros decidan si os entenderíais viviendo juntos, así que casi todo lo que contiene es visible para los miembros que han iniciado sesión: tu nombre, tu foto, **tu edad** (salvo que la ocultes en Configuración), tus idiomas, tu bio, tu género, tu nacionalidad, tus hábitos e intereses, tu ocupación, si trabajas en régimen FIFO, tu tipo de visado, tu tipo de viajero y desde cuándo estás en Australia, la fecha en que te uniste («Miembro desde»), una indicación aproximada de tu última actividad, tus insignias, tus publicaciones y las reviews que otros miembros han dejado sobre ti.",
          ),
        ],
        [
          p(
            "Solo son obligatorios tu nombre, tu idioma principal y tu género; todo lo demás es opcional. **Nunca mostramos tu fecha de nacimiento exacta**: solo la usamos para calcular tu edad. Tu última actividad se muestra de forma aproximada (hoy o esta semana), nunca con la hora exacta.",
          ),
        ],
        [
          p("No puedes:"),
          ul(
            "hacerte pasar por otra persona ni usar una foto que no sea tuya",
            "crear un perfil para otra persona ni dejar que otra persona use el tuyo",
            "publicar el nombre, la foto, el teléfono, el email u otros datos identificativos de otra persona sin su consentimiento",
            "usar tu perfil para anunciar algo que no sea tu búsqueda u oferta real de una habitación compartida",
          ),
        ],
        [
          p(
            "Mantén tu perfil al día. Si algo deja de ser cierto —tus fechas, tu visado, si sigues buscando—, corrígelo.",
          ),
        ],
      ],
    },

    {
      id: "listings",
      heading: "Publicaciones e información de la casa",
      clauses: [
        [
          p(
            "Como anfitrión, eres responsable de todo lo que incluye tu publicación: el tipo de estadía, las fechas, la estadía mínima, el precio semanal y el precio para parejas, el bond, si los gastos están incluidos, la descripción (incluidas las normas de la casa) y las fotos. Tiene que ser exacta, estar al día y referirse a una habitación que existe y está disponible de verdad. Las publicaciones de corta estadía vencen solas cuando pasa su fecha de fin.",
          ),
        ],
        [
          p("Al publicar una habitación declaras que:"),
          ol(
            "eres propietario de la vivienda o tienes derecho a ofrecer la habitación a otra persona;",
            "tienes todos los permisos necesarios —por ejemplo, de tu arrendador o agencia si alquilas, de tus compañeros de casa, de la comunidad de propietarios y de tu banco o aseguradora si sus condiciones lo exigen—;",
            "ofrecer la habitación cumple todas las leyes que te aplican, incluidas las normas de registro, urbanismo, casas de huéspedes o alojamiento de corta estadía de tu estado o territorio;",
            "la habitación y la vivienda son seguras y habitables, incluidas las alarmas de humo y demás requisitos de seguridad aplicables; y",
            "las fotos son de la vivienda real y tienes derecho a publicarlas.",
          ),
        ],
        [
          p(
            "**Información sobre las personas que ya viven contigo.** Una publicación puede incluir datos agregados de la casa: cuántas personas viven en ella y cuántas fuman, trabajan en régimen FIFO, sus horarios, ocupación y consumo de alcohol, además de un desglose por nacionalidad y por franja de edad, y sus gustos de comida, aficiones y música; y cómo es la casa en general (lo ordenada que está, la frecuencia de las visitas, si hay mascotas, su ambiente). Lo que se refiere a las personas son recuentos, nunca nombres. No publicamos nunca el nombre, la foto ni los datos de contacto de un compañero de casa.",
          ),
        ],
        [
          p(
            "Al publicar esa información declaras que tienes derecho a compartirla, que no identifica a nadie y que has informado a tus compañeros de casa de que ShortTerm publica información agregada y no identificativa sobre la casa. No puedes publicar nada que identifique a un compañero de casa —su nombre, su foto, sus datos de contacto ni ninguna otra cosa— sin su consentimiento.",
          ),
        ],
        [
          p(
            "**Cuánto se publica de tu dirección.** El barrio que elijas se muestra siempre. La dirección exacta es opcional: si la rellenas, la ven los miembros con sesión iniciada que abren tu publicación en la app, y al tocar el mapa se abre Google Maps con esa dirección. No aparece en la página web pública que se abre al compartir el enlace de una publicación, que muestra solo el título, el barrio, las fechas, los datos de la habitación, el precio, si los gastos están incluidos, el idioma, si se aceptan parejas, si hay baño privado, si hay parking, para quién es la habitación, cuántas personas viven en la casa, la foto de portada, el número de fotos y si la publicación es nueva. Rellena la dirección exacta solo si te parece bien que la vean los miembros.",
          ),
        ],
        [
          p(
            "Las fotos de las publicaciones y de los perfiles se guardan en direcciones web no adivinables pero públicas: cualquiera que tenga el enlace exacto de una foto puede verla sin iniciar sesión. No subas fotos que no quieras que puedan circular.",
          ),
        ],
      ],
    },

    {
      id: "anti-discrimination",
      heading: "No discriminación: tus responsabilidades",
      clauses: [
        [
          p(
            "ShortTerm es una plataforma neutral. **No elegimos entre miembros**: no seleccionamos, ordenamos ni recomendamos a nadie por sus características personales, y no participamos en la decisión de ningún anfitrión sobre con quién vivir. La única exclusión automática es la que aplica la preferencia de género que fija el anfitrión, explicada a continuación.",
          ),
        ],
        [
          p("Algunas funciones del Servicio permiten expresar preferencias o acotar la búsqueda:"),
          ul(
            "Un anfitrión puede indicar **para quién es la habitación** (solo chicas, solo chicos o cualquiera) y si acepta parejas.",
            "**La búsqueda oculta automáticamente** las publicaciones cuya preferencia no admite el género que figura en tu perfil, y la app no te deja enviarles una solicitud. Esto no se puede desactivar.",
            "Una publicación incluye los datos agregados de la casa descritos en la sección §{listings}, incluidos los recuentos por **nacionalidad** y por **franja de edad**.",
            "Un huésped puede **filtrar** las búsquedas y las alertas por esos datos de la casa, incluidas la nacionalidad y la edad de los compañeros de casa.",
          ),
        ],
        [
          p(
            "**Estas funciones son herramientas, y cómo las uses es responsabilidad tuya.** Tú eres el único responsable de que tus criterios, tus búsquedas y tus decisiones sobre con quién vivir cumplan todas las leyes contra la discriminación que te apliquen. En Australia, donde están las habitaciones, eso incluye la Racial Discrimination Act 1975, la Sex Discrimination Act 1984, la Age Discrimination Act 2004 y la Disability Discrimination Act 1992 (todas de la Commonwealth), además de la legislación de igualdad de tu estado o territorio.",
          ),
        ],
        [
          callout(
            "**Lee esto antes de fijar una preferencia.** La ley australiana tiene excepciones para el alojamiento que se comparte de verdad con quien lo ofrece, pero son limitadas, cambian según el estado o territorio y varias solo se aplican si en el alojamiento viven, como mucho, tres personas además de quien lo ofrece y sus familiares. Una casa compartida más grande puede quedar fuera de ellas, y al menos un estado trata la raza de forma distinta a la Commonwealth. Nunca rechaces a alguien por su raza, origen étnico, nacionalidad, religión, discapacidad u orientación sexual cuando la ley no lo permite. Si tienes dudas, busca asesoramiento o consulta a la Australian Human Rights Commission o al organismo de igualdad de tu estado antes de fijar la preferencia.",
          ),
        ],
        [
          p(
            "Si creemos razonablemente que una preferencia, una publicación o una cuenta se está usando de forma ilegal o discriminatoria, podemos retirarla o modificarla, o actuar según la sección §{suspension}.",
          ),
        ],
      ],
    },

    {
      id: "requests-and-matches",
      heading: "Solicitudes, chat y matches",
      clauses: [
        [
          p(
            "Un huésped contacta con un anfitrión enviando una solicitud sobre una publicación concreta, con las fechas que le interesan y, si la publicación acepta parejas, indicando si la solicitud es en pareja. La solicitud abre un chat de texto ligado a esa publicación. No hay mensajería abierta: solo puedes escribir a un miembro con el que te haya conectado una solicitud. Para evitar spam, la app limita automáticamente cuántas solicitudes y mensajes se pueden enviar en poco tiempo.",
          ),
        ],
        [
          p(
            "**No leemos tus conversaciones de forma rutinaria ni las revisamos antes de que se envíen.** Podemos acceder a ellas cuando sea razonablemente necesario para investigar una denuncia, cumplir la ley, atender un requerimiento legal o proteger la seguridad de alguien. La Política de privacidad lo explica con más detalle.",
          ),
        ],
        [
          p(
            "Un match tiene dos pasos: el anfitrión elige a un huésped y ese huésped lo confirma. Solo cuando ambos han confirmado hay match, y solo entonces se cierra la publicación. Cualquiera de los dos puede echarse atrás antes de que estén las dos confirmaciones. Las solicitudes pendientes vencen solas cuando pasan sus fechas.",
          ),
        ],
        [
          p(
            "Confirmar un match le dice a la otra persona que quieres seguir adelante. No crea ningún contrato de alquiler ni compromete a nadie a nada (ver la sección §{what-shortterm-is}).",
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
            "Después de un match, cada uno puede dejar una review sobre el otro: en las estadías cortas, una vez pasada la fecha de fin; en las estadías largas, a partir de los 30 días desde la fecha de llegada.",
          ),
        ],
        [
          p(
            "**Las reviews son ciegas.** Ninguno de los dos ve la review del otro hasta que ambos han escrito la suya o hasta que pasan 14 días desde la primera. Quien no haya escrito todavía tiene 14 días desde la primera review para hacerlo; después, se cierra el plazo. Una vez visibles, las reviews aparecen en el perfil de la persona valorada para cualquier miembro con sesión iniciada.",
          ),
        ],
        [
          p(
            "**Eres el único responsable de la review que escribes.** Tiene que ser tu opinión sincera sobre tu propia experiencia con esa persona, y no puede contener nada que sepas o debas saber que es falso o engañoso, nada insultante o amenazante, ni nada que identifique a un tercero sin su consentimiento.",
          ),
        ],
        [
          p(
            "**No revisamos ni verificamos las reviews antes de publicarlas.** Una review es la opinión de quien la escribe, no la nuestra, y no garantizamos que sea exacta. Escribir algo falso o dañino sobre una persona real puede tener consecuencias legales para ti; si recibimos una orden judicial o un requerimiento legal, puede que tengamos que revelar quién escribió una review.",
          ),
        ],
        [
          p(
            "Si crees que una review sobre ti es falsa, difamatoria o incumple estos Términos, denúnciala según la sección §{moderation}. Podemos retirar una review que incumpla estos Términos o la ley, pero no estamos obligados a retirarla solo porque la persona valorada no esté de acuerdo.",
          ),
        ],
        [
          p(
            "Si quien escribió una review elimina después su cuenta, la review sigue visible, mostrada como de una cuenta eliminada, porque recoge algo que ocurrió de verdad entre dos personas.",
          ),
        ],
      ],
    },

    {
      id: "content-rules",
      heading: "Normas de contenido y conductas prohibidas",
      clauses: [
        [
          p("Eres responsable de tu Contenido y de lo que haces en el Servicio. No puedes usar ShortTerm para publicar, enviar o hacer:"),
          ul(
            "nada ilegal, ni nada que anime a otra persona a incumplir la ley",
            "nada que discrimine a una persona de forma ilegal (ver la sección §{anti-discrimination})",
            "insultos, acoso, intimidación, amenazas, acecho o discurso de odio",
            "contenido sexual, propuestas sexuales, ni ofrecer o pedir una habitación a cambio de sexo o de una relación íntima",
            "nada que sexualice a menores, ni ningún material de abuso sexual infantil",
            "contenido que promueva el terrorismo, el extremismo violento, la violencia extrema, las autolesiones o el suicidio",
            "publicaciones de habitaciones que no existen, no están disponibles o no son como se describen, ni ningún otro contenido fraudulento o engañoso",
            "datos personales de otra persona sin su consentimiento, incluida su dirección, contacto o lugar de trabajo para exponerla o acosarla",
            "spam, cadenas o publicidad de productos, servicios u oportunidades que no tengan que ver con una habitación compartida",
            "extraer, descargar en masa o recopilar de forma automatizada publicaciones, perfiles u otros datos del Servicio",
            "intentar saltarte nuestra seguridad, los límites de envío, los bloqueos o la moderación, o entrar en una cuenta que no es tuya",
            "malware o cualquier cosa pensada para dañar o interrumpir el Servicio",
          ),
        ],
        [
          p(
            "No uses una conversación de ShortTerm para montar una estafa. En particular, no pidas a otro miembro que pague un depósito, un bond, una seña o una renta antes de que te haya conocido en persona y haya visto la vivienda.",
          ),
        ],
      ],
    },

    {
      id: "moderation",
      heading: "Denuncias, moderación, bloqueos y reclamaciones",
      clauses: [
        [
          p(
            `**Cómo denunciar.** Desde la app puedes denunciar a un miembro o una publicación indicando un motivo —spam, acoso, publicación falsa, contenido inapropiado, un problema de seguridad u otro— y añadiendo detalles. Cualquier persona, sea miembro o no, puede además avisarnos de contenido que considere ilegal escribiendo a ${LEGAL.contactEmail}. Indícanos: qué contenido es y dónde está (por ejemplo, el enlace de la publicación o el nombre del perfil), por qué crees que es ilegal o incumple estos Términos, tu nombre y tu email, y que lo comunicas de buena fe. Si no podemos identificar el contenido, no podremos actuar.`,
          ),
        ],
        [
          p(
            "**Qué hacemos.** Cada denuncia la revisa una persona; no usamos sistemas automáticos para decidir sobre contenidos ni cuentas. Te confirmaremos que la hemos recibido y te diremos qué hemos decidido en un plazo de **14 días**, o te explicaremos por qué necesitamos más tiempo. La persona denunciada no ve tu denuncia ni sabe quién la hizo.",
          ),
        ],
        [
          p(
            "Según lo que encontremos, podemos no hacer nada, retirar o editar contenido, advertir, limitar funciones, o suspender o cerrar una cuenta (sección §{suspension}). No estamos obligados a retirar contenido que no incumpla estos Términos ni la ley. Si detectamos indicios de un delito que ponga en peligro la vida o la seguridad de alguien, lo comunicaremos a las autoridades competentes.",
          ),
        ],
        [
          p(
            "**Bloquear.** Puedes bloquear a otro miembro en cualquier momento. Al bloquearlo se cancelan las solicitudes pendientes entre vosotros y los matches sin confirmar, se cierra vuestro chat y cada uno deja de ver al otro en búsquedas y perfiles. Un match que ambos ya habíais confirmado no se elimina, y tampoco el derecho a dejar una review que ya teníais, porque reflejan una estadía real.",
          ),
        ],
        [
          p(
            `**Si no estás de acuerdo con una decisión** nuestra sobre tu contenido o tu cuenta, o sobre una denuncia que hiciste, escribe a ${LEGAL.contactEmail} y otra revisión la hará una persona. También puedes acudir a los tribunales o a la autoridad competente. Si vives en Australia, puedes además reclamar ante el eSafety Commissioner (esafety.gov.au) por ciberacoso, abuso o contenido ilegal en línea. Para una queja sobre tus datos personales, consulta la Política de privacidad.`,
          ),
        ],
        [
          p(
            `**Punto de contacto.** Para autoridades y para usuarios, nuestro punto de contacto único es ${LEGAL.contactEmail}. Puedes escribirnos en español o en inglés.`,
          ),
        ],
      ],
    },

    {
      id: "safety",
      heading: "Tu seguridad y los riesgos que asumes",
      clauses: [
        [
          callout(
            "**ShortTerm solo conecta personas: no gestionamos pagos ni verificamos identidades.** Todas las personas que conozcas a través del Servicio son desconocidas, y todo lo que sabes de ellas te lo han contado ellas mismas.",
          ),
        ],
        [
          p(
            "**Nunca envíes dinero a alguien que no conoces en persona y cuya vivienda no has visto.** Ningún acuerdo legítimo exige transferir un depósito, un bond, una seña o una renta para reservar una habitación sin verla. Es la señal de estafa más habitual, y si el dinero se pierde no podremos recuperarlo.",
          ),
        ],
        [
          p("Te pedimos que tomes estas precauciones:"),
          ul(
            "mantén la conversación en la app hasta que tengas confianza con la otra persona",
            "visita la vivienda en persona y conoce a las personas con las que vivirías antes de comprometerte",
            "la primera vez, queda en un lugar público o ve acompañado",
            "cuéntale a alguien de confianza adónde vas y con quién has quedado",
            "comprueba por tu cuenta que la persona es quien dice ser",
            "pon por escrito lo que acordéis e infórmate de tus derechos antes de firmar nada",
            "si algo no te da confianza, para",
          ),
        ],
        [
          p(
            "En la medida que permite la ley, y sin perjuicio de la sección §{liability}, asumes los riesgos propios de usar el Servicio: que un miembro no sea quien dice, que una publicación sea inexacta o fraudulenta, que un acuerdo no salga adelante, que pierdas dinero pagado a otro miembro, y los riesgos de conocer y convivir con personas que conociste por internet.",
          ),
        ],
        [
          p(
            "**En una emergencia, llama a la policía**: al 000 en Australia o al 112 en la Unión Europea. Cuando estés a salvo, denuncia al miembro en la app para que podamos actuar.",
          ),
        ],
      ],
    },

    {
      id: "liability",
      heading: "Nuestra responsabilidad",
      clauses: [
        [
          callout(
            "**Nada de estos Términos excluye ni limita los derechos que te reconoce la normativa de protección de los consumidores y usuarios que no se pueden excluir por contrato**, como los de la ley española o, si resides en Australia, las garantías de la Australian Consumer Law. Si alguna parte de esta sección contradijera esos derechos, esa parte no se te aplica.",
          ),
        ],
        [
          p(
            "Prestamos el Servicio con la diligencia razonable y respondemos conforme a la ley de los daños que te causemos por incumplir estos Términos. **Nada limita nuestra responsabilidad** por muerte o lesiones causadas por nuestra culpa, por dolo o negligencia grave, ni en ningún otro caso en que la ley no permita limitarla.",
          ),
        ],
        [
          p(
            "Como prestador de un servicio de alojamiento de contenidos, no respondemos del Contenido que publican los miembros mientras no tengamos conocimiento efectivo de que es ilícito; cuando lo tengamos, actuaremos con diligencia para retirarlo o bloquear el acceso a él.",
          ),
        ],
        [
          p("Fuera de esos casos, y en la medida que permite la ley, no respondemos de los daños derivados de:"),
          ol(
            "lo que otro miembro haga o deje de hacer, dentro o fuera del Servicio;",
            "cualquier acuerdo entre miembros, incluido cualquier alquiler o subarriendo;",
            "cualquier dinero pagado entre miembros;",
            "el estado, la seguridad, la legalidad o la idoneidad de una vivienda;",
            "lo que ocurra cuando los miembros se conocen o conviven; ni",
            "las interrupciones del Servicio por causas que no controlamos, como fallos de nuestros proveedores, de internet o de las tiendas de aplicaciones.",
          ),
        ],
        [
          p(
            "No garantizamos que encuentres una habitación o un huésped, que una publicación o una review sean ciertas, ni que el Servicio esté siempre disponible y sin errores, aunque trabajamos para que así sea.",
          ),
        ],
      ],
    },

    {
      id: "your-responsibility",
      heading: "Tu responsabilidad",
      clauses: [
        [
          p(
            "Respondes, conforme a la ley, de los daños que causes a ShortTerm o a terceros por incumplir estos Términos o la ley, por tu Contenido (por ejemplo, si una publicación o una review es difamatoria, infringe derechos de otra persona o revela sus datos sin consentimiento) o por tus decisiones sobre con quién vivir.",
          ),
        ],
        [
          p(
            "Si un tercero nos reclama por algo de lo que eres responsable, te lo comunicaremos lo antes posible, te daremos la oportunidad de participar en la defensa y no llegaremos a un acuerdo sobre esa reclamación sin consultarte.",
          ),
        ],
      ],
    },

    {
      id: "suspension",
      heading: "Suspensión, retirada de contenido y cierre de cuentas",
      clauses: [
        [
          p("Podemos retirar contenido, pausar o retirar una publicación, limitar funciones, suspender tu cuenta o cerrarla si creemos razonablemente que:"),
          ol(
            "has incumplido estos Términos;",
            "tú o tu Contenido habéis incumplido la ley o creado un riesgo real para la seguridad de alguien;",
            "no tienes 18 años o una de tus declaraciones de la sección §{account} es falsa;",
            "tu cuenta se usa de forma fraudulenta o la usa otra persona; o",
            "nos lo exige la ley, un tribunal, una autoridad o una tienda de aplicaciones.",
          ),
        ],
        [
          p(
            "**Te diremos qué hemos hecho y por qué**: qué contenido o función afecta, en qué hechos y en qué norma o cláusula nos basamos, y cómo puedes recurrir. Solo no lo haremos si la ley lo impide o si avisarte pondría en riesgo a alguien o perjudicaría una investigación. Si el problema tiene arreglo y no hay riesgo para nadie, normalmente te avisaremos antes y te daremos un plazo razonable para corregirlo.",
          ),
        ],
        [
          p(
            `Si crees que nos hemos equivocado, escribe a ${LEGAL.contactEmail} y una persona revisará la decisión.`,
          ),
        ],
        [
          p(
            "Puedes dejar de usar el Servicio o eliminar tu cuenta cuando quieras (sección §{deleting-your-account}). Las secciones §{liability}, §{your-responsibility}, §{intellectual-property} y §{governing-law} siguen aplicándose después de que tu cuenta termine, igual que cualquier otra cláusula que por su naturaleza deba seguir vigente.",
          ),
        ],
      ],
    },

    {
      id: "deleting-your-account",
      heading: "Eliminar tu cuenta",
      clauses: [
        [
          p(
            `Puedes eliminar tu cuenta tú mismo, cuando quieras, desde la app (Configuración → Eliminar cuenta), sin coste y sin dar explicaciones. Si ya no tienes acceso a la app, ${LEGAL.deletionUrl} explica cómo pedírnoslo por email.`,
          ),
        ],
        [
          p(
            "Al eliminarla, en un solo paso: cerramos tus publicaciones y borramos su dirección exacta; retiramos tus solicitudes pendientes; deshacemos cualquier elección de match tuya que la otra persona no hubiera confirmado; borramos tus notificaciones, tus alertas de búsqueda, tus ajustes de notificaciones, los bloqueos que hiciste, tus mensajes al soporte y los tokens de notificaciones de tus dispositivos; vaciamos tu perfil —nombre, foto, bio y todos los datos de hábitos y viaje—, dejando solo un registro anónimo marcado como eliminado; borramos tu foto de perfil; y borramos definitivamente tu acceso, incluidos tu email y tu contraseña. Después no podrás volver a entrar y no podremos recuperar la cuenta.",
          ),
        ],
        [
          p(
            "**Lo que no borramos, y por qué.** No borramos las conversaciones, los matches confirmados ni las reviews en los que participa otro miembro, porque forman parte de su propio historial. Donde antes aparecían tu nombre o tu foto, la otra persona verá un aviso genérico de cuenta eliminada. La Política de privacidad explica cuánto tiempo se conserva lo que queda.",
          ),
        ],
      ],
    },

    {
      id: "intellectual-property",
      heading: "Propiedad intelectual y la licencia que nos das",
      clauses: [
        [
          p(
            "El Servicio —el nombre y el logo de ShortTerm, el software, el diseño y los textos— es nuestro. Solo puedes usarlo como permiten estos Términos, y nada en ellos te transmite nuestra propiedad intelectual o industrial.",
          ),
        ],
        [
          p(
            "**Tu Contenido sigue siendo tuyo.** Nos das una licencia no exclusiva, gratuita y mundial para alojarlo, almacenarlo, reproducirlo, adaptarlo de formato y tamaño, y mostrarlo, con el único fin de prestar, proteger y mejorar el Servicio. No usaremos tu Contenido en publicidad ni en marketing sin pedírtelo antes.",
          ),
        ],
        [
          p(
            "La licencia termina cuando borras el Contenido o tu cuenta, salvo por las copias que permanezcan un tiempo limitado en las copias de seguridad y por el Contenido que sigue siendo visible para otro miembro (conversaciones, matches y reviews), como explica la sección §{deleting-your-account}.",
          ),
        ],
        [
          p(
            "Declaras que eres titular de tu Contenido o tienes derecho a publicarlo, y que publicarlo no infringe los derechos de nadie.",
          ),
        ],
        [
          p(
            "Si nos envías ideas o sugerencias sobre el Servicio, podemos usarlas sin deberte nada. No nos envíes nada que quieras mantener en secreto.",
          ),
        ],
      ],
    },

    {
      id: "communications",
      heading: "Emails y notificaciones que te enviamos",
      clauses: [
        [
          p(
            "Te enviamos dos tipos de mensajes. Los **mensajes del servicio** son los que la cuenta necesita para funcionar: confirmar tu email, recuperar tu contraseña y avisarte de asuntos de seguridad o legales, incluidos los cambios de estos Términos. No se pueden desactivar mientras tengas cuenta.",
          ),
        ],
        [
          p(
            "Las **notificaciones de actividad** te avisan de lo que pasa en la app: mensajes, solicitudes, matches y recordatorios de tu estadía, reviews, alertas de búsqueda y consejos (por ejemplo, para completar tu perfil). Puedes desactivar cada categoría en Configuración y desactivar todas las notificaciones push en los ajustes de tu dispositivo.",
          ),
        ],
        [
          p(
            "**Hoy no enviamos comunicaciones comerciales.** Si eso cambia, te pediremos antes tu consentimiento, y cada comunicación dirá quién la envía y llevará una forma sencilla y gratuita de darte de baja.",
          ),
        ],
      ],
    },

    {
      id: "app-stores",
      heading: "App Store de Apple y Google Play",
      clauses: [
        [
          p(
            "Esta sección se aplica a la app según cómo la hayas descargado. Si contradice otra parte de estos Términos, prevalece esta sección en lo que se refiere a esa tienda.",
          ),
        ],
        [
          p("**Si descargaste la app desde la App Store de Apple:**"),
          ol(
            "**Reconocimiento.** Estos Términos se celebran solo entre tú y nosotros, no con Apple. Somos los únicos responsables de la app y de su contenido.",
            "**Alcance de la licencia.** Te concedemos una licencia intransferible para usar la app en cualquier producto de Apple que poseas o controles, según las Reglas de uso de los Términos y condiciones de los servicios multimedia de Apple, salvo que la app también puede usarla otra cuenta asociada a ti mediante En familia o compras por volumen.",
            "**Mantenimiento y soporte.** Somos los únicos responsables del mantenimiento y el soporte de la app. Apple no tiene ninguna obligación de prestarlos.",
            "**Garantía.** Somos los únicos responsables de cualquier garantía, expresa o legal, en la medida en que no se haya excluido válidamente. Si la app no cumple una garantía aplicable, puedes avisar a Apple, que podrá reembolsarte su precio (la app es gratuita). En la máxima medida que permita la ley, Apple no tiene ninguna otra obligación de garantía respecto a la app.",
            "**Reclamaciones sobre el producto.** Nosotros, y no Apple, somos responsables de atender cualquier reclamación tuya o de un tercero sobre la app o su uso, incluidas las de responsabilidad por productos, las de incumplimiento de requisitos legales o normativos, y las basadas en la normativa de consumo, privacidad o similar.",
            "**Propiedad intelectual.** Si un tercero alega que la app o su uso infringen sus derechos de propiedad intelectual, nosotros, y no Apple, seremos los únicos responsables de investigar, defender, resolver y atender esa reclamación.",
            "**Cumplimiento legal.** Declaras que no te encuentras en un país sujeto a embargo del Gobierno de EE. UU. ni designado por él como país que apoya el terrorismo, y que no figuras en ninguna lista de personas prohibidas o restringidas del Gobierno de EE. UU.",
            `**Nombre y dirección del desarrollador.** Las preguntas, quejas o reclamaciones sobre la app deben dirigirse a ${LEGAL.holder}, ${address}, ${LEGAL.contactEmail}, ${LEGAL.phone}.`,
            "**Condiciones de terceros.** Debes cumplir las condiciones de terceros que se apliquen al usar la app, como las de tu contrato de datos móviles.",
            "**Tercero beneficiario.** Reconoces y aceptas que Apple y sus filiales son terceros beneficiarios de estos Términos y que, cuando los aceptas, Apple tiene el derecho (y se considera que lo ha aceptado) de exigirte su cumplimiento como tercero beneficiario.",
          ),
        ],
        [
          p(
            "**Si descargaste la app desde Google Play**, también debes cumplir las Condiciones de servicio de Google Play. Google no es parte de estos Términos ni responsable de la app; somos nosotros, y no Google, los responsables de la app y de cualquier reclamación sobre ella.",
          ),
        ],
      ],
    },

    {
      id: "changes",
      heading: "Cambios en estos Términos",
      clauses: [
        [
          p(
            "Podemos cambiar estos Términos cuando cambie el Servicio, nuestros proveedores o la ley.",
          ),
        ],
        [
          p(
            "**Si un cambio es importante y te perjudica, te avisaremos con al menos 15 días de antelación** en la app o por email, y la app te pedirá que aceptes la nueva versión. Los cambios menores —corregir un error, aclarar la redacción o un cambio que la ley nos obligue a aplicar de inmediato— pueden aplicarse enseguida, y siempre actualizaremos la fecha que aparece al principio.",
          ),
        ],
        [
          p(
            "Si no aceptas un cambio, puedes eliminar tu cuenta antes de que entre en vigor, sin ningún coste.",
          ),
        ],
      ],
    },

    {
      id: "transfer",
      heading: "Si traspasamos el Servicio",
      clauses: [
        [
          p(
            "Podemos ceder nuestros derechos y obligaciones bajo estos Términos a otra persona o entidad —por ejemplo, a una sociedad creada para gestionar ShortTerm o en una venta del negocio— siempre que asuma estos Términos y tus derechos no se reduzcan de forma importante. Te avisaremos antes de hacerlo, y podrás eliminar tu cuenta si no estás de acuerdo.",
          ),
        ],
        [p("Tu cuenta es personal: no puedes ceder a nadie ni la cuenta ni tus derechos bajo estos Términos.")],
      ],
    },

    {
      id: "governing-law",
      heading: "Ley aplicable y resolución de conflictos",
      clauses: [
        [
          p(
            `**Habla primero con nosotros.** Si tienes un problema, escríbenos a ${LEGAL.contactEmail} contándonos qué ha pasado y qué te gustaría que hiciéramos. Te responderemos en un plazo de 5 días hábiles; casi todo se resuelve antes así.`,
          ),
        ],
        [
          p(
            "Estos Términos se rigen por la **ley española**. Si eres consumidor, esto no te priva de la protección de las normas imperativas del país donde resides habitualmente, como la Australian Consumer Law si resides en Australia.",
          ),
        ],
        [
          p(
            "Si eres consumidor, puedes presentar tu reclamación ante los tribunales del lugar donde vives o ante los de Granada (España), y nosotros solo podremos demandarte ante los tribunales del lugar donde vives. Nada de estos Términos te impide acudir a cualquier organismo de consumo o autoridad que te corresponda.",
          ),
        ],
        [
          p(
            "No estamos adheridos a ningún sistema arbitral de consumo ni a ninguna otra entidad de resolución alternativa de litigios.",
          ),
        ],
      ],
    },

    {
      id: "electronic-contracting",
      heading: "Cómo se celebra este contrato",
      clauses: [
        [
          p(
            "El contrato se celebra en la app. Junto a los botones para crear tu cuenta (con email y contraseña, o con Google) y para entrar en ella, la app muestra el aviso «Al continuar, confirmas que tienes 18 años o más y aceptas los Términos de servicio», con enlaces a estos Términos y a la Política de privacidad: al tocar uno de esos botones confirmas que tienes 18 años o más y aceptas estos Términos. Si cambian y ya tenías la sesión iniciada, la app te los vuelve a mostrar con el mismo aviso y un botón «Aceptar y continuar». Antes de aceptar puedes leer estos Términos y la Política de privacidad, y revisar y corregir los datos que hayas introducido; después puedes cambiarlos desde la app.",
          ),
        ],
        [
          p(
            "Guardamos un registro de tu aceptación (qué versión aceptaste y cuándo), que te confirma la propia app al pasar a la siguiente pantalla. La versión vigente de estos Términos está siempre disponible en esta página; si necesitas una copia de la versión que aceptaste o de tu registro de aceptación, pídenosla por email.",
          ),
        ],
        [
          p(
            "Estos Términos están disponibles en español y en inglés. Si las dos versiones no coinciden, **prevalece la versión en español**.",
          ),
        ],
        [
          p(
            "Si un tribunal declara inválida alguna parte de estos Términos, el resto sigue aplicándose. Que no exijamos un derecho en un momento dado no significa que renunciemos a él. Nada de estos Términos crea una sociedad, una relación laboral ni una relación de agencia entre tú y nosotros. Estos Términos y la Política de privacidad son el acuerdo completo entre tú y nosotros sobre el Servicio.",
          ),
        ],
      ],
    },

    {
      id: "contact",
      heading: "Cómo contactarnos",
      clauses: [
        unnumbered(
          ul(
            `**General, denuncias y reclamaciones:** ${LEGAL.contactEmail}`,
            `**Privacidad:** ${LEGAL.privacyEmail}`,
            `**Teléfono:** ${LEGAL.phone}`,
            `**Correo postal:** ${LEGAL.holder}, ${address}`,
          ),
        ),
      ],
    },
  ],
});
