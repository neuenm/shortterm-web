# SEO de shortterm-web

Cómo está armado el posicionamiento de la web, qué reglas no hay que romper y qué falta hacer. Decidido el 15 de noviembre de 2026.

## La idea

- Las páginas de cada publicación (`/listing/<id>`) duran semanas y muestran la casa de alguien, así que **no se indexan** (`noindex, follow`, más `noimageindex`). Siguen funcionando igual para quien tiene el link, y las vistas previas de WhatsApp y Facebook no cambian.
- El posicionamiento lo llevan páginas que no vencen:
  - **Páginas por zona:** `/rooms` (todas las ciudades), `/rooms/<ciudad>` y `/rooms/<ciudad>/<barrio>`. Muestran las habitaciones activas, cuántas hay, el rango de precios, los barrios con habitaciones y preguntas frecuentes con datos en vivo.
  - **Guías:** `/guides/<slug>`. Textos largos para quien busca habitación o quiere alquilar la suya.
- La ventaja frente a Flatmates o Gumtree es el idioma: todo está en inglés y en español, con `hreflang`. Quien llega con una Working Holiday busca en su idioma, y ahí casi no hay competencia.

## Reglas

1. **Ninguna página fina en el índice.** Una zona se indexa (y entra en el sitemap) desde `AREA_INDEX_MIN_ROOMS` (3) habitaciones, o si es una ciudad con contenido propio (`lib/cities.ts`). Debajo de eso la página funciona con `noindex`. Google castiga a todo el sitio por las páginas de relleno ("scaled content abuse", "doorway pages").
2. **Nada de texto generado en masa.** El contenido de cada ciudad está escrito a mano y no tiene precios, tarifas ni datos que caducan: los números salen de la base. Una ciudad nueva en `lib/cities.ts` necesita su texto propio en los dos idiomas.
3. **Cada página declara su `canonical` y sus idiomas** con `pageAlternates(locale, href)` (`lib/site.ts`). El layout no los declara, para que ninguna página herede los de la home.
4. **Las fotos de las habitaciones no se indexan** (`NO_IMAGE_INDEX`) en ninguna página que las muestre. Privacidad y Términos lo dicen.
5. **El sitemap lista exactamente lo que se indexa.** Si una página cambia su `robots`, revisa `app/sitemap.ts`.
6. **Las URLs no se cambian.** Son las mismas en los dos idiomas (`/es/rooms/brisbane`), y la dirección de una zona sale del nombre en la base (`private.area_slug`). Cambiarlas obliga a poner redirecciones 301 y se pierde posicionamiento.

## Cómo agregar

- **Una ciudad con contenido propio:** una entrada en `lib/cities.ts` (los dos idiomas, 4 a 7 barrios con su dirección). Comprueba que cada barrio exista en esa ciudad en la base, o su link da 404.
- **Una guía:** un archivo en `lib/guides/` con los dos idiomas juntos, agregado a `GUIDES` en `lib/guides/index.ts`. Fuentes oficiales al final. Cuando cambie el contenido, sube `updated`.
- **Un idioma nuevo** (it, fr, de): `i18n/routing.ts`, un `messages/<locale>.json`, el contenido de `lib/cities.ts` y `lib/guides/`, y los textos legales (o decidir que esos se muestren en inglés). `hreflang` y el sitemap lo toman solos.

## Pasos que te tocan

1. **Orden de despliegue:** primero `supabase db push` (migración `20261115210000_area_pages.sql`), después desplegar la web. Antes del push, las páginas de ciudades con contenido propio funcionan sin habitaciones, y las de barrios dan 404.
2. **Google Search Console:** agrega la propiedad de dominio `shortterm-app.com`, verificada con un registro DNS en Namecheap. Si prefieres verificarla con una etiqueta, pon el código en la variable de entorno `GOOGLE_SITE_VERIFICATION` del hosting. Después envía `https://www.shortterm-app.com/sitemap.xml`.
3. **Bing Webmaster Tools:** importa el sitio desde Search Console, o usa `BING_SITE_VERIFICATION`. Bing también alimenta a otros buscadores y asistentes.
4. **Revisa los datos estructurados** de una guía y de una ciudad en el Rich Results Test de Google.
5. **Los textos legales** cambiaron, así que pasan por la revisión del abogado (`LAWYER-REVIEW-CHECKLIST.md`, B.6 y B.7).

## Medir

- **Search Console:** impresiones, clics y posición por página y por búsqueda. Mira primero las ciudades y las guías en español.
- **Play Console:** las instalaciones que vienen de la web llegan con `utm_source=shortterm_web` y `utm_medium` = `listing_page`, `area_page` o `guide`.
- **Cuándo esperar algo:** las guías empiezan a salir en semanas, y las páginas por zona en 3 a 6 meses, a medida que tengan habitaciones.

## Plan

**Hecho (15/11/2026)**
- `robots.txt`, `sitemap.xml` con `hreflang`, `canonical` y `x-default` en todas las páginas.
- Páginas por zona con datos en vivo y contenido propio para Brisbane, Sydney, Melbourne, Perth, Adelaide y Gold Coast.
- Cinco guías en inglés y español.
- Datos estructurados: Organization y WebSite en la home, BreadcrumbList en las páginas por zona y en las guías, Article en las guías.
- `noindex` en las publicaciones y `noimageindex` en todas las fotos.
- Links internos: desde la home, el footer y las habitaciones cercanas de cada publicación a su ciudad.

**Mediano plazo (1 a 3 meses)**
- Contenido propio para más ciudades a medida que tengan habitaciones: Canberra, Hobart, Cairns, Darwin, Sunshine Coast.
- Más guías según lo que muestre Search Console. Candidatas: cómo abrir una cuenta bancaria y conseguir un número de teléfono al llegar, el TFN, el trabajo de temporada y la vivienda en zonas rurales, short term frente a hostel.
- Enlaces de otros sitios: agencias de Working Holiday y escuelas de idiomas de España y Latinoamérica, blogs y canales de YouTube sobre Working Holiday, y Reddit (r/WorkingHolidayAustralia, r/brisbane).
- ASO: palabras como "habitación", "share house", "room for rent" y "working holiday" en el título, el subtítulo y las palabras clave de cada idioma en App Store Connect y Play Console.

**Largo plazo (3 meses o más)**
- La web en italiano, francés y alemán. Son países con muchas Working Holiday en Australia y tampoco tienen competencia en su idioma.
- Un informe de precios por ciudad, publicado cada trimestre con datos propios. Es el tipo de contenido que enlazan periodistas y blogs.
- Si una zona tiene más de 24 habitaciones, paginar su página o subdividirla.
