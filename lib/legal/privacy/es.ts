import { buildDocument, callout, ol, p, ul, unnumbered } from "../build";
import { LEGAL, postalAddress } from "../config";

const address = postalAddress("es");

export const privacyEs = buildDocument({
  preamble: [
    p(
      `Esta política explica qué datos personales trata ${LEGAL.holder} (**ShortTerm**, **nosotros**) cuando usas la app ShortTerm o la web ${LEGAL.website}, para qué, con qué base legal, con quién los compartimos, cuánto tiempo los guardamos y qué derechos tienes.`,
    ),
    p(
      "ShortTerm existe para poner en contacto a quien tiene una habitación con quien la busca. Casi todo lo que hay en tu perfil está ahí para que otra persona decida si os entenderíais viviendo juntos, así que gran parte está pensado para que otros lo vean. Esta política detalla qué es visible, para quién, y qué no lo es nunca.",
    ),
    callout(
      "**No vendemos tus datos. No los usamos para publicidad y en la app no hay redes publicitarias.** Las estadísticas de uso solo se activan si das tu permiso, y puedes retirarlo cuando quieras.",
    ),
  ],

  sections: [
    {
      id: "controller",
      heading: "Quién es el responsable de tus datos",
      clauses: [
        [
          p(
            `El responsable del tratamiento es **${LEGAL.holder}**, con NIE ${LEGAL.taxId} y domicilio en ${address}. Teléfono: ${LEGAL.phone}. Para cualquier cuestión sobre tus datos, escribe a **${LEGAL.privacyEmail}**.`,
          ),
        ],
        [
          p(
            "Estamos establecidos en España, así que tratamos tus datos conforme al Reglamento General de Protección de Datos de la UE (**RGPD**) y a la Ley Orgánica 3/2018 (**LOPDGDD**), vivas donde vivas. No hemos designado un delegado de protección de datos porque no estamos obligados a ello; todas las consultas las atiende directamente el responsable en la dirección anterior.",
          ),
        ],
      ],
    },

    {
      id: "data-we-collect",
      heading: "Qué datos tratamos",
      clauses: [
        [
          p(
            "**Tu cuenta.** Tu email y tu contraseña (que guarda cifrada nuestro proveedor de autenticación; nosotros nunca la vemos), o, si entras con Google, el nombre, el email y la foto que Google nos facilita para identificarte. También guardamos cuándo creaste la cuenta y cuándo confirmaste tu email, y el **registro de tu aceptación** de los Términos: qué versión aceptaste, cuándo y que declaraste tener 18 años o más.",
          ),
        ],
        [
          p(
            "**Tu perfil.** Son obligatorios tu nombre, tu idioma principal y tu género. Todo lo demás es opcional: tu foto, tu bio, tu fecha de nacimiento, tu nacionalidad, otros idiomas, tu ocupación, si trabajas en régimen FIFO, tus hábitos (si fumas, si tienes mascotas, tu horario de sueño, limpieza, visitas, alcohol y energía social), tus gustos (comida, aficiones y música), tu tipo de visado, tu tipo de viajero, desde cuándo estás en Australia y si quieres mostrar tu edad.",
          ),
        ],
        [
          p(
            "**Tus publicaciones, si eres anfitrión.** El tipo de estadía, las fechas, la estadía mínima, el precio semanal y el precio para parejas, el bond, si los gastos están incluidos, si hay baño privado, si hay parking, los dormitorios y baños, los idiomas de la casa, para quién es la habitación, si se aceptan parejas, el barrio y, si quieres, la dirección exacta (que guardamos como texto y no geolocalizamos), la descripción (con las normas de la casa), las fotos y la información agregada sobre la casa que explica la sección §{housemates}.",
          ),
        ],
        [
          p(
            "**Lo que haces en el Servicio.** Tus solicitudes (fechas y si son en pareja), los mensajes de texto que envías y recibes en el chat, tus matches, las reviews que escribes y recibes, las denuncias que haces (motivo y detalle), las personas que bloqueas, tus alertas de búsqueda, tus notificaciones y tus ajustes de notificaciones, y los mensajes que envías al soporte desde la app, junto con tu email para poder responderte.",
          ),
        ],
        [
          p(
            "**Datos técnicos.** Un token de notificaciones por cada dispositivo en el que inicias sesión, con su plataforma y el idioma de la app; la fecha de tu última actividad; la dirección IP y los datos técnicos de cada conexión, que nuestros proveedores registran por seguridad; y, en la versión de producción de la app, los informes de errores (modelo de dispositivo, sistema operativo, versión de la app, el error y tu identificador de cuenta). Las **estadísticas de uso** solo se recogen si das tu permiso (sección §{app-sdks}).",
          ),
        ],
        [
          p(
            "**Lo que guarda solo tu dispositivo.** Algunas preferencias —el idioma, el tema, el modo anfitrión o huésped, la búsqueda en pareja o tu respuesta sobre las estadísticas— se guardan solo en tu teléfono y no nos llegan.",
          ),
        ],
        [
          p(
            "**Lo que no pedimos.** No pedimos, y te pedimos que no pongas en tu perfil, tus publicaciones ni tus mensajes: datos de salud, orientación sexual, creencias religiosas o políticas, antecedentes penales, datos biométricos ni documentos de identidad como el pasaporte o el número fiscal. **Nunca te pediremos un documento de identidad ni datos de pago**; si alguien en ShortTerm te los pide, denúncialo.",
          ),
        ],
      ],
    },

    {
      id: "housemates",
      heading: "Información sobre los compañeros de casa",
      clauses: [
        [
          p(
            "Una publicación puede incluir información agregada sobre las personas que ya viven en la casa: cuántas son y cuántas fuman, trabajan en régimen FIFO, sus horarios, ocupación y consumo de alcohol, un desglose por nacionalidad y por franja de edad, y sus gustos; además de cómo es la casa en general: lo ordenada que está, la frecuencia de las visitas, si hay mascotas y su ambiente. Nos la facilita el anfitrión.",
          ),
        ],
        [
          p(
            "Lo que se refiere a las personas son recuentos, nunca nombres ni fotos, y lo mostramos para que quien busca habitación sepa con quién viviría. Los Términos obligan al anfitrión a informar a sus compañeros de casa y a no publicar nada que los identifique. En una casa muy pequeña, aun así, alguien podría deducir de quién se trata.",
          ),
        ],
        [
          p(
            `Si vives en una casa publicada en ShortTerm y no quieres que aparezca información sobre ti, escríbenos a ${LEGAL.privacyEmail}: puedes oponerte y retiraremos o corregiremos esa información.`,
          ),
        ],
      ],
    },

    {
      id: "nationality",
      heading: "Tu nacionalidad",
      clauses: [
        [
          p(
            "La nacionalidad puede revelar el origen étnico o racial de una persona, que la ley protege de forma especial. Por eso, en ShortTerm tu nacionalidad es **opcional**: solo la tratamos si decides añadirla a tu perfil, y la base es tu consentimiento. Puedes borrarla cuando quieras desde tu perfil, y desde ese momento dejamos de usarla.",
          ),
        ],
        [
          p(
            "Si la añades, la ven los miembros con sesión iniciada, cuenta en «cosas en común» cuando coincide con la de alguien de la casa, y los huéspedes pueden filtrar las publicaciones por la nacionalidad de los compañeros de casa (ver los Términos).",
          ),
        ],
      ],
    },

    {
      id: "purposes",
      heading: "Para qué usamos tus datos y con qué base legal",
      clauses: [
        [
          ul(
            "**Prestarte el Servicio**: crear y gestionar tu cuenta, mostrar tu perfil y tus publicaciones, la búsqueda y las alertas, las solicitudes, el chat, los matches, las reviews, las notificaciones y el soporte. Base: la **ejecución del contrato** que aceptas con los Términos (art. 6.1.b RGPD).",
            "**Los datos opcionales de tu perfil**, incluida la nacionalidad y la fecha de nacimiento. Base: tu **consentimiento** (art. 6.1.a), que das al añadirlos y retiras al borrarlos.",
            "**Registrar tu aceptación de los Términos y tu declaración de edad.** Base: el cumplimiento de **obligaciones legales** de la contratación electrónica (art. 6.1.c) y nuestro **interés legítimo** en poder demostrarla (art. 6.1.f).",
            "**Mantener una comunidad segura**: revisar denuncias, moderar contenido, aplicar los Términos, prevenir el fraude, el spam y los abusos (incluidos los límites automáticos de envío) y atender a las autoridades. Base: nuestro **interés legítimo** y el de los miembros en la seguridad del Servicio (art. 6.1.f), y las **obligaciones legales** que nos aplican (art. 6.1.c).",
            "**Detectar y corregir errores** con los informes de fallos de la app. Base: nuestro **interés legítimo** en que el Servicio funcione (art. 6.1.f).",
            "**Estadísticas de uso** para entender cómo se usa la app y mejorarla. Base: tu **consentimiento** (art. 6.1.a y art. 22.2 de la LSSI). Sin él no se envía nada.",
            "**Cumplir la ley, atender requerimientos de autoridades y defendernos ante reclamaciones.** Base: **obligación legal** (art. 6.1.c) e **interés legítimo** (art. 6.1.f).",
          ),
        ],
        [
          p(
            "Cuando la base es nuestro interés legítimo, hemos comprobado que no prevalecen tus derechos, y puedes oponerte en cualquier momento (sección §{your-rights}). **No usamos tus datos para entrenar modelos de inteligencia artificial, no los vendemos ni los alquilamos, y no los compartimos con brókers de datos ni anunciantes.**",
          ),
        ],
      ],
    },

    {
      id: "automated",
      heading: "Procesos automáticos",
      clauses: [
        [
          p("Algunas cosas pasan de forma automática:"),
          ul(
            "la búsqueda filtra y ordena las publicaciones según los criterios que eliges y según cuánto cubren tus fechas;",
            "la búsqueda **oculta las publicaciones cuya preferencia no admite el género de tu perfil**, y la app no te deja solicitarlas;",
            "la app compara tu perfil con la información de la casa y muestra, a ti y al anfitrión, cuántas «cosas en común» tenéis; no ordena ni excluye a nadie por ello;",
            "las alertas buscan publicaciones nuevas que encajan con tus criterios;",
            "las publicaciones, solicitudes y alertas vencen cuando pasan sus fechas, y se envían recordatorios en fechas fijas;",
            "hay límites automáticos de cuántas solicitudes y mensajes se pueden enviar en poco tiempo.",
          ),
        ],
        [
          p(
            "Son filtros mecánicos, no valoraciones sobre ti. **No tomamos decisiones basadas únicamente en tratamientos automatizados que produzcan efectos jurídicos sobre ti o te afecten de forma significativa**: las advertencias, suspensiones y cierres de cuenta las decide una persona. Tampoco elaboramos perfiles con fines publicitarios.",
          ),
        ],
      ],
    },

    {
      id: "who-sees",
      heading: "Quién puede ver tus datos",
      clauses: [
        [
          p(
            "**Los miembros con sesión iniciada** ven tu perfil: tu nombre, foto, edad (salvo que la ocultes en Configuración), idiomas, bio, género, nacionalidad, hábitos e intereses, ocupación, datos de viaje, la fecha en que te uniste, una indicación aproximada de tu última actividad, tus insignias, tus publicaciones y las reviews sobre ti. Quien tiene una solicitud contigo ve además lo que le escribes en el chat.",
          ),
        ],
        [
          p(
            "**Tu fecha de nacimiento exacta no la ve nunca nadie más**: nuestros servidores la eliminan antes de que otro miembro pueda leer tu perfil, y solo muestran tu edad, si la tienes visible. Tu última actividad se muestra solo de forma aproximada (hoy o esta semana).",
          ),
        ],
        [
          p(
            "**La web pública.** Una publicación se puede compartir con un enlace que abre una página de nuestra web, visible sin iniciar sesión. Esa página muestra solo: el título, el barrio, las fechas, los datos de la habitación, el precio, si los gastos están incluidos, el idioma principal, si se aceptan parejas, si hay baño privado, si hay parking, para quién es la habitación, cuántas personas viven en la casa (solo el número), la foto de portada, el número de fotos y si la publicación es reciente. **No muestra** la dirección exacta, la descripción, el bond, el resto de la información de la casa ni nada sobre el anfitrión.",
          ),
        ],
        [
          p(
            "**Las fotos** de los perfiles y de las publicaciones se guardan en direcciones web no adivinables pero públicas: cualquiera que tenga el enlace exacto de una foto puede verla sin iniciar sesión.",
          ),
        ],
        [
          p(
            "**Google Maps.** Si abres el mapa de una publicación en la app, tu dispositivo abre Google Maps buscando la dirección o el barrio de la publicación. Esa búsqueda la recibe Google según su propia política de privacidad; nosotros no le enviamos nada sobre ti.",
          ),
        ],
        [
          p(
            "**Las denuncias son privadas.** Solo las vemos nosotros; la persona denunciada no ve tu denuncia ni sabe quién la hizo.",
          ),
        ],
      ],
    },

    {
      id: "providers",
      heading: "Los proveedores que usamos",
      clauses: [
        [
          p(
            "Usamos un número reducido de proveedores que tratan datos por cuenta nuestra (encargados del tratamiento), con contratos que les obligan a usarlos solo para prestarnos el servicio y a protegerlos:",
          ),
          ul(
            "**Supabase, Inc.** — base de datos, autenticación, almacenamiento de fotos y chat en tiempo real, incluido el envío de los emails de confirmación y de recuperación de contraseña. Prácticamente todos los datos de esta política se guardan aquí. Servidores en **Irlanda (UE)**.",
            "**Functional Software, Inc. (Sentry)** — informes de errores de la app. Servidores en **Alemania (UE)**.",
            "**PostHog, Inc.** — estadísticas de uso, **solo si das tu permiso**. Servidores en la **UE**.",
            "**Sendinblue SAS (Brevo)** — envío de emails: los avisos internos de nuevas denuncias y los mensajes al soporte, y en su caso los emails de tu cuenta. **Francia (UE)**.",
            "**650 Industries, Inc. (Expo)** — envío de notificaciones push, que entrega a través de los servicios de Apple y de Google usando el token de tu dispositivo. El texto de la notificación (por ejemplo, el inicio de un mensaje) pasa por estos servicios. **Estados Unidos**.",
            "**Google** — solo si inicias sesión con Google. **Estados Unidos y otros países**.",
            "**Vercel, Inc.** — alojamiento de la web. **Estados Unidos** y red global.",
            `**Namecheap, Inc.** — reenvío del correo de @shortterm-app.com al buzón donde lo leemos, que aloja ${LEGAL.mailboxProvider}. **Estados Unidos**.`,
          ),
        ],
        [
          p(
            "**No hay ningún procesador de pagos, red publicitaria ni otra herramienta de analítica, CRM o marketing en el Servicio.** Si cambiamos de proveedores actualizaremos esta lista, y si el cambio afecta de forma importante a tus datos te avisaremos.",
          ),
        ],
        [
          p(
            "También podemos comunicar datos cuando la ley lo exija o lo permita —a jueces, tribunales, autoridades o Fuerzas y Cuerpos de Seguridad— o cuando sea necesario para proteger la vida o la integridad de alguien. Si vendemos o traspasamos el negocio, los datos pasarían al comprador, que quedaría obligado por esta política.",
          ),
        ],
      ],
    },

    {
      id: "transfers",
      heading: "Transferencias fuera del Espacio Económico Europeo",
      clauses: [
        [
          p(
            "Guardamos tus datos en la Unión Europea. Algunos proveedores son empresas de Estados Unidos o tratan datos allí (Expo, Google, Vercel, Namecheap, y el acceso de soporte de Supabase, Sentry y PostHog). En esos casos la transferencia se ampara en el **Marco de Privacidad de Datos UE-EE. UU.** cuando el proveedor está certificado y, si no, en las **cláusulas contractuales tipo** aprobadas por la Comisión Europea (art. 46 RGPD). Puedes pedirnos una copia de las garantías aplicables.",
          ),
        ],
        [
          p(
            "Además, por la propia naturaleza del Servicio, tu perfil y tus publicaciones los verán miembros que están en **Australia**, un país sin decisión de adecuación de la UE. Esa comunicación es necesaria para prestarte el Servicio que nos pides (art. 49.1.b RGPD).",
          ),
        ],
      ],
    },

    {
      id: "retention",
      heading: "Cuánto tiempo guardamos tus datos",
      clauses: [
        [
          ul(
            "**Tu cuenta y tu perfil**: mientras tengas la cuenta. Puedes editar o borrar casi todo cuando quieras. Al eliminar la cuenta, tu perfil se anonimiza al momento.",
            "**Alertas, notificaciones, ajustes de notificaciones, bloqueos que hiciste y mensajes al soporte**: se borran al eliminar tu cuenta.",
            "**Notificaciones**: como máximo 12 meses.",
            "**Mensajes al soporte**: 12 meses en la base de datos y 12 meses en nuestro buzón de correo.",
            "**Denuncias**: 24 meses, para poder detectar a quien reincide.",
            "**Conversaciones, matches y reviews con otro miembro**: mientras la otra persona mantenga su cuenta, porque forman parte de su historial; cuando las dos cuentas están eliminadas, se borran en un plazo de 30 días.",
            "**Registro de aceptación de los Términos**: se conserva como prueba de la aceptación; al eliminar la cuenta queda ligado solo al registro anónimo, sin tu email ni tu nombre.",
            "**Estadísticas de uso (PostHog)**: 12 meses.",
            "**Informes de errores (Sentry)**: hasta 90 días.",
            "**Copias de seguridad**: se sobrescriben solas en 7 días, así que algo borrado puede seguir en una copia durante ese tiempo.",
          ),
        ],
        [
          p(
            "Cuando la ley nos obligue, conservaremos los datos **bloqueados** —sin usarlos y solo a disposición de jueces, tribunales y autoridades— durante el plazo de prescripción de las posibles responsabilidades (art. 32 LOPDGDD), y después los borraremos.",
          ),
        ],
      ],
    },

    {
      id: "security",
      heading: "Cómo protegemos tus datos",
      clauses: [
        [
          p(
            "Aplicamos medidas técnicas y organizativas adecuadas: el acceso a los datos se controla en la propia base de datos con reglas por fila, de modo que cada miembro solo puede leer lo que le corresponde; la fecha de nacimiento se elimina en el servidor, no solo en la app; las conexiones van cifradas; las contraseñas las guarda cifradas el proveedor de autenticación; y el acceso a los sistemas de producción lo tiene solo el responsable.",
          ),
        ],
        [
          p(
            "Ningún sistema es perfectamente seguro. Usa una contraseña fuerte y única, y piénsalo antes de poner tu teléfono, tu lugar de trabajo o una dirección exacta en un mensaje o en tu bio.",
          ),
        ],
      ],
    },

    {
      id: "breaches",
      heading: "Si algo sale mal: brechas de seguridad",
      clauses: [
        [
          p(
            "Si sufrimos una brecha de seguridad que afecte a datos personales, la notificaremos a la Agencia Española de Protección de Datos en un plazo de 72 horas desde que la conozcamos, salvo que sea improbable que suponga un riesgo para las personas. **Si es probable que suponga un riesgo alto para ti, te lo diremos** sin demora: qué ha pasado, qué datos están afectados y qué te recomendamos hacer.",
          ),
        ],
      ],
    },

    {
      id: "your-rights",
      heading: "Tus derechos",
      clauses: [
        [
          p("Tienes derecho a:"),
          ul(
            "**acceder** a tus datos y obtener una copia;",
            "**rectificarlos** si son inexactos o están incompletos;",
            "**suprimirlos** (puedes eliminar tu cuenta tú mismo; ver la sección §{deleting});",
            "**limitar** su tratamiento en ciertos casos;",
            "**la portabilidad**: recibir los datos que nos diste en un formato estructurado y de uso común;",
            "**oponerte** a los tratamientos basados en nuestro interés legítimo;",
            "**retirar tu consentimiento** cuando quieras, sin que afecte a lo tratado antes (por ejemplo, desactivando las estadísticas en Configuración o borrando un dato opcional); y",
            "no ser objeto de decisiones basadas únicamente en tratamientos automatizados con efectos jurídicos o significativos.",
          ),
        ],
        [
          p(
            `La mayoría de tus datos los puedes ver y cambiar en la app. Para todo lo demás, escribe a **${LEGAL.privacyEmail}** desde el email de tu cuenta, o indícanos cómo comprobar que eres tú. Te responderemos en **un mes** como máximo (ampliable dos meses más en casos complejos, avisándote), y no te cobraremos nada. Podremos denegar una petición solo en los casos que permite la ley —por ejemplo, si afectaría a los derechos de otra persona, como el contenido de una denuncia sobre ti—, y te explicaremos por qué.`,
          ),
        ],
        [
          p(
            "Si crees que no hemos tratado bien tus datos, puedes reclamar ante la **Agencia Española de Protección de Datos** (www.aepd.es; C/ Jorge Juan 6, 28001 Madrid). Te agradeceremos que antes nos escribas para intentar resolverlo. Si vives en Australia, también puedes dirigirte a la Office of the Australian Information Commissioner (oaic.gov.au).",
          ),
        ],
      ],
    },

    {
      id: "deleting",
      heading: "Eliminar tu cuenta y qué pasa con tus datos",
      clauses: [
        [
          p(
            `Puedes eliminar tu cuenta desde la app (Configuración → Eliminar cuenta) o, si ya no tienes acceso, pidiéndolo como explica ${LEGAL.deletionUrl}. Al eliminarla ocurre todo esto a la vez:`,
          ),
          ol(
            "se cierran tus publicaciones y se borra su dirección exacta;",
            "se retiran tus solicitudes pendientes;",
            "se deshace cualquier elección de match tuya que la otra persona no hubiera confirmado;",
            "se borran tus notificaciones, tus alertas de búsqueda, tus ajustes de notificaciones, los bloqueos que hiciste, tus mensajes al soporte y los tokens de notificaciones de tus dispositivos;",
            "se anonimiza tu perfil: se borran tu nombre, foto, bio, fecha de nacimiento, nacionalidad y todos los datos de hábitos y viaje, y queda solo un registro sin datos identificativos, marcado como eliminado;",
            "se borra tu foto de perfil del almacenamiento; y",
            "se borra definitivamente tu acceso, incluidos tu email y tu contraseña.",
          ),
          p("Después no podrás volver a entrar y no podremos recuperar la cuenta."),
        ],
        [
          p(
            "**Lo que no borramos, y por qué.** No borramos las conversaciones, los matches confirmados ni las reviews en los que participa otro miembro, porque borrarlos destruiría el historial de esa persona. Donde aparecían tu nombre o tu foto, la otra persona ve un aviso genérico de cuenta eliminada. Tampoco borramos al momento las denuncias en las que interviniste, ni las fotos de tus publicaciones, que siguen formando parte de ese historial. Todo ello se conserva con los plazos de la sección §{retention}.",
          ),
        ],
        [
          p(
            "Las estadísticas de uso que ya se hubieran enviado con tu permiso están ligadas a un identificador interno, no a tu email ni a tu nombre, y se borran al cumplir su plazo.",
          ),
        ],
      ],
    },

    {
      id: "children",
      heading: "Menores",
      clauses: [
        [
          p(
            "**ShortTerm es solo para mayores de 18 años.** Para usar el Servicio hay que declarar que se tiene 18 años o más, y no tratamos a sabiendas datos de menores.",
          ),
        ],
        [
          p(
            `Confiamos en esa declaración: no verificamos documentos ni usamos tecnología de verificación de edad. Si crees que un menor tiene una cuenta, avísanos en ${LEGAL.privacyEmail} y la cerraremos y borraremos sus datos.`,
          ),
        ],
      ],
    },

    {
      id: "website",
      heading: "La web y las cookies",
      clauses: [
        [
          p(
            "La web sirve para explicar la app, responder preguntas frecuentes y abrir los enlaces de las publicaciones compartidas. No necesita cuenta, no tiene publicidad ni seguimiento de terceros y no tiene formularios: si nos escribes desde ella, lo haces por email.",
          ),
        ],
        [
          p(
            "**Solo usamos una cookie**, «NEXT_LOCALE», que recuerda el idioma que eliges en la web. Es una cookie técnica de personalización solicitada por ti, por lo que no requiere consentimiento. No usamos cookies de análisis ni de publicidad; si algún día las añadimos, te pediremos permiso antes y actualizaremos esta política.",
          ),
        ],
        [
          p(
            "Nuestro proveedor de alojamiento web (Vercel) registra, como cualquier servidor, la dirección IP y los datos técnicos de cada visita para servir la web y protegerla de ataques, con base en nuestro interés legítimo.",
          ),
        ],
      ],
    },

    {
      id: "app-sdks",
      heading: "Estadísticas e informes de errores en la app",
      clauses: [
        [
          p(
            "**Estadísticas de uso (PostHog), solo con tu permiso.** La primera vez que entras en la app en un dispositivo, ya con tu perfil creado, te preguntamos si quieres compartirlas: no se envía nada hasta que aceptas, y rechazar es tan fácil como aceptar. Si aceptas, enviamos qué pantallas abres y qué acciones haces (por ejemplo, publicar, buscar o enviar una solicitud), junto con datos del dispositivo y tu identificador de cuenta, **nunca tu email, tu nombre ni el contenido de tus mensajes**. Si no aceptas, no se envía nada. Puedes cambiarlo cuando quieras en **Configuración → Privacidad → Estadísticas de uso**.",
          ),
        ],
        [
          p(
            "**Informes de errores (Sentry).** Si la app falla, enviamos un informe técnico del error (dispositivo, sistema, versión de la app, qué falló y tu identificador de cuenta) para poder arreglarlo. No grabamos tu pantalla y no enviamos tu dirección IP con el informe.",
          ),
        ],
        [
          p(
            "La app guarda en tu dispositivo lo imprescindible para funcionar (tu sesión y tus preferencias). Eso no requiere consentimiento porque es necesario para prestarte el Servicio que pides.",
          ),
        ],
      ],
    },

    {
      id: "advertising",
      heading: "Publicidad",
      clauses: [
        [
          p(
            "Hoy el Servicio no muestra publicidad ni comparte datos con anunciantes. Si en el futuro añadimos publicidad, actualizaremos esta política antes de hacerlo, te avisaremos y te pediremos tu consentimiento para cualquier uso de tus datos o de tu dispositivo con fines publicitarios que lo requiera.",
          ),
        ],
      ],
    },

    {
      id: "changes",
      heading: "Cambios en esta política",
      clauses: [
        [
          p(
            "Actualizaremos esta política cuando cambie el Servicio o la ley. La fecha del principio indica siempre cuándo cambió por última vez.",
          ),
        ],
        [
          p(
            "Si un cambio afecta de forma importante a cómo tratamos tus datos, te avisaremos en la app o por email al menos 15 días antes de que se aplique, y si el cambio requiere tu consentimiento, te lo pediremos.",
          ),
        ],
        [
          p(
            "Esta política está disponible en español y en inglés. Si las dos versiones no coinciden, **prevalece la versión en español**.",
          ),
        ],
      ],
    },

    {
      id: "contact",
      heading: "Cómo contactarnos sobre privacidad",
      clauses: [
        unnumbered(
          ul(
            `**Email:** ${LEGAL.privacyEmail}`,
            `**Consultas generales:** ${LEGAL.contactEmail}`,
            `**Teléfono:** ${LEGAL.phone}`,
            `**Correo postal:** ${LEGAL.holder}, ${address}`,
          ),
        ),
      ],
    },
  ],
});
