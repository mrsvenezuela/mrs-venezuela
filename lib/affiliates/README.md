# Monetización editorial: alojamientos, socios directos y operadores

Estado a **septiembre de 2026**: **no hay ningún enlace comercial activo**. Todo lo de esta
carpeta está preparado y apagado. Las guías siguen siendo guías: el contenido debe servir
aunque el lector no reserve nada.

## Qué hay

| Archivo | Para qué |
| --- | --- |
| `types.ts` | Socio, contacto según modelo de referido, huecos de alojamiento, alojamiento destacado y operador, evento de clic. |
| `config.ts` | **Único lugar donde se activa algo.** Registro `partners` y huecos `staySlots`, `featuredStays`, `tourPartner`. |
| `index.ts` | `getStayLink()`, `getFeaturedStay()`, `getTourPartner()`, `needsDisclosure()`, `resolveContact()`. Solo devuelven algo con socio activo, acuerdo fechado y contacto válido. |
| `tracking.ts` | `trackAffiliateClick()` → evento `affiliate_click` en Vercel Web Analytics (sin cookies ni datos personales). |

Componentes (`components/content/`), ninguno pinta nada ni deja hueco sin socio activo:

- `partner-cta.tsx` — botón discreto: «Dónde hospedarse →», «Ver alojamientos →», «Ver alojamiento →», «Solicitar itinerario →».
- `featured-stay.tsx` — «Alojamiento destacado»: foto, nombre, breve descripción y «Ver alojamiento →».
- `tour-partner-offer.tsx` — operador receptivo: línea discreta en «Cómo moverse» y, en «Antes de reservar», las dos formas de usar la guía (A: por tu cuenta; B: que lo organice un operador).
- `affiliate-disclosure.tsx` — aviso de afiliados, antes del primer bloque comercial y en el idioma del lector.

Primer uso: `/articulo/ruta-perfecta-14-dias`.

## Correspondencia con los nombres del encargo

| Campo pedido | Dónde está |
| --- | --- |
| `affiliateEnabled`, `affiliateProvider`, `affiliateUrl`, `affiliateLabel` | `staySlots[destino]` |
| `partnerEnabled`, foto, nombre, descripción | `featuredStays[destino]` (el nombre sale del socio del registro) |
| `partnerUrl`, `trackingCode`, `disclosure` | el socio en `partners`: `contact.url`, `contact.code` + `contact.codeParam`, `disclosure` |
| `tourPartnerEnabled`, `tourPartnerName`, `tourPartnerUrl`, `tourPartnerTracking` | `tourPartner.tourPartnerEnabled` + el socio `tourPartnerId` en `partners` (`name`, `contact`) |

Así un mismo socio (por ejemplo, un campamento que también organiza traslados) se configura una sola vez.

## Modelos de referido

Cada socio trabaja a su manera; `contact.model` decide qué datos hacen falta:

| Modelo | Necesita | Resultado |
| --- | --- | --- |
| `affiliate-link` | URL del panel del programa (en `staySlots`, por destino) | enlace con identificador |
| `referral-link` | `contact.url` | enlace de referido |
| `tracking-code` | `contact.url`, `contact.code`, `contact.codeParam` | `url?codeParam=code` |
| `promo-code` | `contact.url`, `contact.code` | enlace + «Código: …» visible |
| `contact-form` | `contact.url` | formulario del socio |
| `whatsapp` | `contact.phone` | `https://wa.me/…` con el título de la guía como mensaje |
| `email` | `contact.email` | `mailto:` con el título de la guía como asunto |

No todos usan cookies ni enlaces de afiliado. Nunca se envían datos del lector.

## Estado de cada vía

- **Booking.com** — tiene programa oficial de afiliados. Sin cuenta aprobada. Huecos preparados en Caracas,
  Los Roques y Mérida (`staySlots`), apagados. Antes de activar: aprobación, enlace rastreable del panel,
  condiciones comerciales reales y comprobación de inventario en cada destino. No mostrar «Reservar con Booking»
  ni usar enlaces normales de Booking como si fueran de afiliado.
- **Airbnb** — Mrs Venezuela no ha sido aceptada en ningún programa. No mostrarlo como socio ni usar enlaces
  normales como si generaran comisión. Si algún día hay acceso a otro programa de alojamiento, se añade como
  socio `stay-program` en `partners` y se apunta desde `staySlots`.
- **Campamentos y lodges de Canaima** — se están contactando varios. **Ninguno tiene acuerdo**: no se añaden al
  registro ni se muestran como socio, recomendado ni afiliado. El hueco «Alojamiento destacado» de Canaima está
  preparado y apagado (`featuredStays.canaima`).
- **Posadas de Los Roques, hoteles y posadas de Mérida** — sin acuerdos.
- **Operadores receptivos (viaje completo)** — se están contactando agencias. Ninguna elegida: no se publican
  nombres, logos ni enlaces. En `services` solo se anotan los servicios confirmados con ese operador; nunca
  suponer que uno solo cubre recepción, vuelos internos, traslados, alojamientos, excursiones y asistencia.

## Cómo activar un socio

1. Tener el acuerdo por escrito o la cuenta aprobada, con las condiciones comerciales.
2. Añadir o completar el socio en `partners`: `enabled: true`, `agreement.confirmedOn` (sin fecha no se activa),
   `contact` según su modelo, `commissionType` y `disclosure` (true si hay comisión u otra contraprestación).
   Nunca un identificador inventado ni un enlace normal presentado como de afiliado.
3. Activar el hueco: `staySlots[destino]` (con la URL del panel para programas), `featuredStays[destino]`
   (descripción y `alt` en **los cinco idiomas**: si falta uno, en ese idioma no se muestra; foto con licencia
   o cedida por escrito y su crédito) o `tourPartner`.
4. Revisar la página en los cinco idiomas: el aviso de afiliados aparece solo, antes del primer bloque comercial.
5. Comprobar en Vercel Analytics que llegan los eventos `affiliate_click` (`partner`, `placement`, `article`,
   `model`, `destination`).

## Reglas de diseño

CTAs discretos con la tipografía, las líneas finas y la paleta del sitio. Nada de banners, popups, logos grandes,
comparadores, urgencia falsa («últimas plazas», «oferta», «reserva ya»), contadores ni precios gigantes. Mrs Venezuela
no vende vuelos ni paquetes: el texto no debe sugerirlo.

Si algún día se muestran precios de un socio, se distinguen siempre de las estimaciones editoriales
(«Precio del partner» frente a «Estimación orientativa») y llevan fecha y fuente. Nada comercial se marca en los
datos estructurados como `Product`, `Offer`, `TourProduct` o `Review`; si un operador vende el viaje, eso se
trata aparte, en su propia arquitectura comercial.
