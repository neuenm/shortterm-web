# ShortTerm: textos legales, pendientes y revisión

**Documentos:**
- Términos de servicio: `lib/legal/terms/{es,en}.ts`, en `/terms`.
- Política de privacidad: `lib/legal/privacy/{es,en}.ts`, en `/privacy`.
- Aviso legal: `lib/legal/legal-notice/{es,en}.ts`, en `/legal-notice`.
- Página de borrado de cuenta: namespace `deleteAccount` de `messages/*.json`, en `/delete-account`.

**Actualizado:** 10 de noviembre de 2026.
**Marco legal:** titular persona física establecida en España (RGPD, LOPDGDD, LSSI, TRLGDCU); las habitaciones y los usuarios están en Australia.
**Estado:** redactados y alineados con la app; no revisados por un abogado.

Prevalece la versión en español. Las dos versiones se construyen con `buildDocument` (`lib/legal/build.ts`) a partir de los mismos ids de sección, así que la numeración siempre coincide.

---

## A. Datos del titular

Están todos en `lib/legal/config.ts`, que es lo único que hay que editar para cambiarlos.

| Clave | Valor | Estado |
|---|---|---|
| `holder` | Luis Neuen Mobilia | ✅ |
| `taxId` | NIE | ✅ Obligatorio publicarlo (art. 10 LSSI) |
| `address` | Domicilio particular en Granada | ✅ Provisional. Se puede cambiar a una oficina virtual |
| `phone` | Móvil personal | ✅ Provisional. Se puede cambiar a un segundo número |
| `contactEmail` / `privacyEmail` | `support@` (los dos) | ✅ Es el único alias que existe en Namecheap |
| `mailboxProvider` | Google (Gmail) | ✅ Namecheap reenvía a una cuenta de Gmail |
| `effectiveDate` | 2026-11-10 | ⚠️ Cambiar al día de publicación (ver D) |
| `PUBLISHED` | `false` | Mientras sea `false`, las páginas muestran «Todavía no está vigente» y no se indexan |

---

## B. Cambios en la app que los textos describen

Implementados en `short-term`. Si se toca alguno, hay que cambiar también el texto correspondiente.

1. **Aceptación de los Términos y declaración de 18+.** Pantalla `accept-terms` antes de completar el perfil, para registros por email y por Google. Queda guardada en `terms_acceptances`. `TERMS_VERSION` en `src/constants/legal.ts`: subirlo hace que todo el mundo vuelva a aceptar.
2. **Estadísticas solo con consentimiento.**
   - PostHog arranca desactivado (`defaultOptIn: false`).
   - Se pregunta en `accept-terms`, en un modal único y en Configuración → Privacidad.
   - PostHog ya no recibe el email.
3. **Sentry solo para errores.** Sin grabación de sesiones y con `sendDefaultPii: false`.
4. **Borrado de cuenta completo.** También borra alertas, notificaciones, ajustes de notificaciones, los bloqueos hechos, los mensajes al soporte y la dirección exacta de las publicaciones.
5. **Plazos de conservación** (`purge_expired_data`, cron diario):
   - notificaciones y mensajes al soporte: 12 meses;
   - denuncias: 24 meses;
   - conversaciones en las que las dos cuentas están eliminadas: 30 días.

---

## C. Cuestiones para un abogado

### C1. Filtro por nacionalidad ⚠️ (decisión del titular: se mantiene)
Los huéspedes pueden filtrar búsquedas y alertas por la nacionalidad y la edad de los compañeros de casa. Los Términos (sección «No discriminación») lo explican y atribuyen la responsabilidad a quien lo usa.

Riesgo: que se vea como que la plataforma facilita discriminación racial. Podría acabar en una queja ante la Australian Human Rights Commission, en problemas con las tiendas o en mala imagen, y también es dudoso bajo la Ley 15/2022 española de igualdad de trato.

Alternativa de bajo coste: quitar ese filtro y dejar el de idiomas.

### C2. Preferencia de género y exclusión automática
Las exenciones australianas para alojamiento compartido son limitadas (muchas solo hasta 3 personas además del anfitrión) y cambian según el estado. Hay que confirmar si basta con el aviso de los Términos o si conviene avisar al anfitrión en la propia app.

### C3. Responsabilidad e indemnidad
Los Términos ya no incluyen una indemnización amplia, para evitar el riesgo de cláusula abusiva (TRLGDCU). Hay que confirmar que la sección de responsabilidad es válida frente a consumidores españoles y australianos.

### C4. Estatus fiscal y publicidad futura
Para monetizar con anuncios hará falta estar dado de alta como autónomo (Hacienda y Seguridad Social). Antes de meter publicidad habrá que:
- actualizar la Política de privacidad;
- añadir el consentimiento de seguimiento de iOS (ATT) y el de anuncios personalizados;
- revisar las etiquetas de privacidad de las tiendas.

### C5. DSA
Si la app solo está en tiendas de Australia, el DSA probablemente no aplica, pero los Términos ya incluyen:
- notificación de contenido ilegal;
- motivación de las decisiones;
- recurso;
- punto de contacto.

Si se publica en tiendas de la UE, conviene revisarlo.

### C6. Registro de actividades de tratamiento (art. 30 RGPD)
Es un documento interno obligatorio aunque se tenga menos de 250 empleados, porque el tratamiento no es ocasional. Todavía no existe.

---

## D. Pasos para publicar, en orden

1. **Namecheap:** enviar un email de prueba a `support@shortterm-app.com` y comprobar que llega a Gmail.
2. ✅ **PostHog** (hecho el 10/11/2026): IP descartada y emails borrados. El plan gratuito guarda los eventos 1 año y no se puede cambiar, lo que coincide con la Política. **Si pasas a un plan de pago** (por defecto 2 años), baja la conservación a 12 meses o actualiza la Política.
3. ✅ **Sentry** (hecho el 10/11/2026): IP no almacenada, limpiador de datos activado y conservación de 90 días o menos.
4. **Supabase:** `supabase db push` con las migraciones `20261110100000`, `20261110110000` y `20261110120000`.
5. Nuevo build con EAS y envío a las tiendas.
6. **Google Play** (Data safety): URL de borrado `www.shortterm-app.com/delete-account`, analítica opcional y sin grabación de pantalla.
7. **App Store:** actualizar las etiquetas de privacidad.
8. Cuando la nueva versión esté publicada: `effectiveDate` = ese día y `PUBLISHED = true`, y desplegar la web.
9. **Buzón de soporte:** borrar los emails de soporte de más de 12 meses (lo promete la Política).
