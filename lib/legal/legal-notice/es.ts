import { buildDocument, p, ul } from "../build";
import { LEGAL, postalAddress } from "../config";

export const legalNoticeEs = buildDocument({
  preamble: [
    p(
      "En cumplimiento del artículo 10 de la Ley 34/2002, de servicios de la sociedad de la información y de comercio electrónico (LSSI), estos son los datos del titular de ShortTerm y las condiciones de uso de esta web.",
    ),
  ],

  sections: [
    {
      id: "holder",
      heading: "Titular",
      clauses: [
        [
          ul(
            `**Titular:** ${LEGAL.holder}, persona física que presta el servicio con el nombre comercial ${LEGAL.tradeName}`,
            `**NIE:** ${LEGAL.taxId}`,
            `**Domicilio:** ${postalAddress("es")}`,
            `**Email:** ${LEGAL.contactEmail}`,
            `**Teléfono:** ${LEGAL.phone}`,
            `**Web:** ${LEGAL.website}`,
          ),
        ],
        [
          p(
            "**Actividad:** plataforma en línea, formada por la app ShortTerm y esta web, que pone en contacto a personas que ofrecen una habitación en Australia con personas que la buscan. ShortTerm no es una agencia inmobiliaria ni interviene en los acuerdos entre sus miembros.",
          ),
        ],
      ],
    },

    {
      id: "use",
      heading: "Uso de esta web",
      clauses: [
        [
          p(
            "Esta web presenta la app, responde preguntas frecuentes y muestra las páginas públicas de las publicaciones que los miembros comparten. Puedes navegar por ella sin registrarte. El uso de la app ShortTerm se rige por los Términos de servicio.",
          ),
        ],
        [
          p(
            "Al usar la web te comprometes a hacerlo conforme a la ley y a no dañarla, sobrecargarla ni extraer de forma masiva o automatizada su contenido.",
          ),
        ],
      ],
    },

    {
      id: "intellectual-property",
      heading: "Propiedad intelectual e industrial",
      clauses: [
        [
          p(
            "El nombre y el logo de ShortTerm, el diseño, el software y los textos de la web son del titular o se usan con licencia. No puedes reproducirlos, distribuirlos ni transformarlos sin autorización, salvo para tu uso personal.",
          ),
        ],
        [
          p(
            "Las fotos y los textos de las publicaciones son de los miembros que los publican, que responden de ellos. Los créditos de los datos geográficos de terceros (GeoNames, bajo licencia CC BY 4.0, y la Australian Bureau of Statistics) figuran en la sección de licencias de la app.",
          ),
        ],
      ],
    },

    {
      id: "liability",
      heading: "Responsabilidad",
      clauses: [
        [
          p(
            "Trabajamos para que la información de esta web sea correcta y esté al día, pero puede contener errores o quedar desactualizada. El contenido de las publicaciones lo aportan los miembros: como prestador de un servicio de alojamiento de contenidos, solo respondemos de él si, teniendo conocimiento efectivo de que es ilícito, no actuamos con diligencia para retirarlo.",
          ),
        ],
        [
          p(
            `Si ves en la web algún contenido que creas ilícito, escríbenos a ${LEGAL.contactEmail} indicando dónde está y por qué.`,
          ),
        ],
      ],
    },

    {
      id: "data-protection",
      heading: "Protección de datos y cookies",
      clauses: [
        [
          p(
            "Cómo tratamos los datos personales, y la única cookie que usa esta web (la que recuerda el idioma), lo explica la Política de privacidad.",
          ),
        ],
      ],
    },

    {
      id: "law",
      heading: "Ley aplicable",
      clauses: [
        [
          p(
            "Este aviso legal se rige por la ley española. Si eres consumidor, conservas la protección que te den las normas imperativas del país donde resides y puedes acudir a los tribunales de tu domicilio.",
          ),
        ],
      ],
    },
  ],
});
