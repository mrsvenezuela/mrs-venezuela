## Los 10 pasos más importantes, en orden

El orden refleja dependencias reales, no magnitudes de impacto. El paso 2 puede tumbar todo lo que va a partir del paso 3; los pasos 5 y 6 no son un extra opcional, sino cuestiones de responsabilidad legal; el paso 9 tiene como requisito previo los pasos 3, 4, 7 y 8, porque una sitemap enviada demasiado pronto manda a Google a una ruta autocanonizada.

1. **Verificar Google Search Console como propiedad de dominio mediante DNS-TXT — y todavía no enviar nada.** Sin una propiedad verificada no hay estadística de rastreo ni requisito previo para el paso 2, y el informe de IA generativa no recoge datos de forma retroactiva (`Vercel DNS`, TXT en el apex; `search.google.com`; → 2.7).
2. **Inmediatamente después, revisar el historial del dominio y las medidas manuales.** Una penalización heredada o un perfil de spam por drop-catch explica la invisibilidad actual mejor que cualquier hallazgo técnico de este plan y cambiaría el orden a partir del paso 3 (`GSC → Seguridad y acciones manuales`, `web.archive.org/web/*/mrsvenezuela.com`, primer registro WHOIS, perfil de backlinks de Ahrefs Webmaster Tools; → 9).
3. **Resolver el bloqueante de canonical de `/playas`**, descomponiendo la página cliente en un envoltorio de servidor con su propio export `metadata` y un cuerpo de cliente extraído aparte (`app/playas/page.tsx:1` → nuevo `components/sections/playas-page-content.tsx`; → 2.1).
4. **Eliminar la herencia del canonical del layout raíz** y atender de forma explícita la portada y la 404; de lo contrario, cada futura ruta cliente volverá a producir el mismo error (`app/layout.tsx:32-34, :38`; `app/page.tsx`; `app/not-found.tsx`; → 2.2).
5. **Crear el aviso legal (Impressum) y la política de privacidad como rutas de servidor indexables y enlazarlos en el pie de página.** Con una responsable del sitio domiciliada en Alemania y colaboraciones promocionadas de forma activa, esto no es una señal de confianza, sino el § 5 DDG (ley alemana de servicios digitales) y el art. 13 del RGPD (`app/aviso-legal/page.tsx`, `app/privacidad/page.tsx`, `components/sections/home-footer.tsx:19-27`; → 9).
6. **Documentar la procedencia de las imágenes y desactivar los hotlinks a Commons.** Un archivo de registro como única fuente, un control de compilación contra los archivos no registrados, fuera `unoptimized` (que es a la vez la corrección de la transferencia a terceros países), sustituir los archivos sin licencia demostrable en lugar de seguir sirviéndolos (nuevo `lib/image-credits.ts`; `components/content/detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`; → 9).
7. **Reparar los datos estructurados antes de desplegarlos:** eliminar sin sustituto el fallback genérico de FAQPage, reemplazar `TravelGuide` por un `@graph` formado por `WebSite`, `Organization` y `WebPage`, emitir las URL de las imágenes en forma absoluta (`lib/page-factory.tsx:86-103`, `:70`; `app/page.tsx`; nuevo `lib/schema.ts`; → 3). Requisito previo: `Organization.logo` necesita un recurso de logotipo que todavía no existe en el proyecto.
8. **Activar los interruptores de rastreo y de presentación:** sustituir `lastModified: new Date()` por fechas reales o fijas, añadir `max-image-preview:large` y `max-snippet:-1`, derivar el conjunto de iconos y el manifiesto del mismo logotipo (`app/sitemap.ts:9,13-16,22`; bloque `robots` de `app/layout.tsx`; `app/icon.png`, `app/apple-icon.png`, `app/manifest.ts`; → 2.3–2.6).
9. **Solo ahora enviar:** la sitemap en GSC y en Bing Webmaster Tools, colocar la clave de IndexNow y configurar el hook de push (`search.google.com`, `bing.com/webmasters`, `public/<key>.txt`, `.github/workflows/indexnow.yml`; → 2.8).
10. **Asegurar el resultado contra sí mismo antes de que se mueva la primera URL:** CI con typecheck, lint, build e invariantes de HTML sobre `.next/server/app/**/*.html`, además de un registro de redirecciones como única fuente para cada URL servida alguna vez (`.github/workflows/ci.yml`, `scripts/seo-check.mjs`, `lib/redirects.ts` en `next.config.ts`; → 10).

---

## 1. Diagnóstico

### Lo que ya está en pie

La base técnica es mejor que la de la mayoría de proyectos de este tamaño:

- **Todas las rutas están realmente prerenderizadas de forma estática.** `generateStaticParams` existe en las diez rutas `[slug]` a través de `lib/page-factory.tsx:11-13`. En el manifiesto de prerenderizado consta `initialRevalidateSeconds: false` — sin coste de ISR en tiempo de ejecución, sin riesgo de renderizado para los crawlers.
- **API de Metadata correctamente montada**: `app/layout.tsx:24-58` con `metadataBase` (línea 25), plantilla de title, bloque OG y Twitter. `app/estados/page.tsx:29-45`, `app/contacto/page.tsx` y `app/sobre-nosotros/page.tsx` fijan sus propios canonicals.
- **robots.txt y sitemap.xml** se sirven como archivos estáticos (`app/robots.ts`, `app/sitemap.ts`), ~55 URLs.
- **Higiene de imágenes en el marcado**: 41 usos de `next/image`, ni un solo `<img>` en crudo, todos con `alt`, todas las imágenes `fill` con `sizes`. `app/globals.css` ocupa 1,3 KB.
- **Núcleo editorial**: 23 guías de estado en `lib/states/data/` con 1755–2797 palabras, 11 h2, ~27 h3, 5–6 FAQs reales por guía (134 en total), `seo.title`/`seo.description` escritos a mano (58–69 caracteres). Ese es el valor real del sitio.
- **El JSON-LD se renderiza en el servidor** (`app/page.tsx`, `app/estados/page.tsx`, `lib/page-factory.tsx:110`) — requisito previo para que los crawlers de IA sin JS lleguen siquiera a verlo. `components/i18n/content-translator.tsx:82` excluye `script` de la traducción en tiempo de ejecución; el marcado se mantiene en español limpio.

### Lo que falta o está roto

Cinco hallazgos son relevantes para el negocio de inmediato:

1. **`/playas` canoniza hacia la portada.** `app/playas/page.tsx:1` es `"use client"` — en Next.js los Client Components no pueden exportar `metadata`. Por eso la ruta hereda `alternates.canonical: "/"` de `app/layout.tsx:32-34`. En el HTML compilado aparece literalmente el título de la portada y `<link rel="canonical" href="https://mrsvenezuela.com"/>`. La única página de entrada rastreable hacia 14 de las 15 páginas de playa se pliega así sobre sí misma y desaparece. Que los objetos de metadata se fusionen solo "shallowly" (de forma superficial) y que un campo anidado definido antes sea sobrescrito por el último segmento que lo define está documentado literalmente: la herencia no es un bug, sino el comportamiento especificado.
2. **`lib/page-factory.tsx:86-103` se inventa FAQs.** Para las ~26 páginas que no son de estado se generan dos preguntas genéricas con el nombre insertado ("¿Cuál es la mejor época para visitar Arepa?") y se sirve dos veces el mismo texto de respuesta. Esos textos no aparecen en ninguna parte del DOM. Eso infringe la política de datos estructurados de Google ("Don't mark up content that is not visible to readers" — no marques contenido que no sea visible para los lectores) y desde el 7 de mayo de 2026 ya no produce ningún Rich Result.
3. **`app/page.tsx` usa `"@type": "TravelGuide"`** — un tipo que schema.org no conoce (comprobado contra schema.org por estado HTTP: 404). La portada no tiene, de hecho, ningún marcado estructurado válido: ni `WebSite`, ni `Organization`, ni `@id`.
4. **`app/sitemap.ts:9,13-16,22`** pone `lastModified: new Date()` en cada entrada. Cada despliegue en Vercel declara las ~55 URLs como modificadas hoy. Gary Illyes: quien entrega valores lastmod falsos está "probably better off without the lastmods" (probablemente le vaya mejor sin los lastmod) (cita verificada textualmente; la datación 16/07/2026 solo a través de fuente secundaria).
5. **Cero señales E-E-A-T.** Ni `author`, ni `datePublished`, ni `dateModified`, ni `Organization`, ni `sameAs` — en todo el repositorio. Los únicos campos `author` son créditos fotográficos de Wikimedia, y están vacíos en 16 de las 23 guías (`lib/states/data/bolivar.ts` tiene `credits: []`).

A eso se suma: ningún favicon y ningún activo de marca en absoluto (en todo el proyecto no existe ningún `icon.*`, `favicon.*`, `manifest.*`, y `public/images` no contiene ningún archivo de logotipo entre sus 83 archivos), ningún `max-image-preview:large`, ningún `BreadcrumbList`, cinco páginas de detalle completamente huérfanas sin un solo enlace interno, ocho páginas de detalle con un 73–79 % de coincidencia textual procedente de `components/content/detail-page.tsx:276-306`, y un catálogo de traducción de 2,4 MB en el bundle de cliente de cada página.

Faltan por completo otras cinco categorías — no están al nivel de optimizaciones, sino de requisitos previos:

- **Sin textos legales.** `app/` solo conoce `contacto` y `sobre-nosotros`; los siete enlaces del pie en `components/sections/home-footer.tsx:19-27` no incluyen ninguno legal. Al mismo tiempo, `lib/institutional-i18n.ts:10` presenta a la responsable del sitio como "una venezolana viviendo en Alemania" y `:11` busca cooperaciones con alojamientos, operadores y marcas — un telemedio con fines comerciales sin aviso legal (Impressum) y sin política de privacidad.
- **Sin documentación de la procedencia de las imágenes.** Solo 6 de las 23 guías llevan siquiera entradas `license:` (13 acreditaciones en total); los seis hotlinks a Commons en `lib/content.ts:44-61` no tienen ningún campo para ello, porque `DiscoverItem` (`:26-37`) solo conoce `image: string`; para los 83 archivos locales de `public/images` no existe una sola acreditación. A eso se suman asignaciones erróneas verificadas (`morrocoy: "/images/playa-el-agua.jpg"`, `orchid: "/images/delta-orinoco.jpg"`), que son a la vez errores factuales en el texto `alt` y atribución falsa.
- **Sin CI ni control de compilación.** `package.json` solo conoce `dev`, `build`, `start`, `lint` — sin `typecheck`, sin tests; `.github/` no existe. Cada push a `main` llega a producción sin verificación. Justo así surgió el bug del canonical de `/playas`.
- **Sin estrategia de redirecciones.** `next.config.ts` no tiene `redirects()`, y no existe ningún campo de historial de slugs — mientras este plan propone al menos seis mudanzas de URL y `components/sections/search-panel.tsx:16-18` ya enlaza a tres variantes del parámetro `?region=`.
- **Sin base de accesibilidad.** Ningún enlace de salto en todo el repositorio, `<main>` sin `id` como destino de salto, `app/globals.css:55` solo revierte `scroll-behavior` con `prefers-reduced-motion` (las animaciones de framer-motion en ~10 componentes ignoran el ajuste, solo `components/sections/hero.tsx:63` lo evalúa), y el lightbox `components/content/place-gallery.tsx:116` tiene `role="dialog"`/`aria-modal`, pero ni trampa de foco ni devolución del foco. No es un factor de ranking — pero esos mismos errores de landmarks, foco y contraste hacen tropezar a crawlers y lectores de pantalla en el mismo punto.

### Valoración realista

Ahrefs devuelve para mrsvenezuela.com un resultado vacío en las métricas por país: **el dominio no tiene actualmente prácticamente ninguna huella orgánica.** Eso es a la vez el mayor riesgo y la mayor ventaja.

- Ventaja: hoy una reestructuración de URLs o de estructura no cuesta nada en riesgo de migración. Con cada mes que pasa se encarece.
- Riesgo: para el contenido propio no hay peligro de penalización — con ~55 páginas el sitio queda muy por debajo de cualquier umbral de scaled content. El problema real es la **invisibilidad**, no el castigo. Esta afirmación es, sin embargo, una suposición mientras no se compruebe el historial del dominio: una medida manual heredada de un uso anterior produciría exactamente el mismo hallazgo nulo. Por eso la comprobación está en la posición 2 del orden y no en la hoja de ruta.
- Oportunidad: según Similarweb, "Travel & Hospitality" (viajes y hostelería) tiene con ~23 % la tasa de citas más alta de todos los sectores en respuestas de IA (mayo de 2026; cifra del proveedor, no verificable en fuente primaria). Y Google Discover no conoce ningún tamaño mínimo de sitio ni Publisher Center — es el único canal grande de Google al que puede llegar un proyecto pequeño sin presupuesto para backlinks.
- Ventaja que hay que proteger activamente: hoy el sitio está **sin banner de consentimiento**. Las fuentes están self-hosted vía `next/font`, no hay cookie de tracking ni script de terceros; el único acceso a almacenamiento es la elección de idioma iniciada por el usuario (`components/i18n/language-provider.tsx:20,27`). Sin banner significa: sin desplome del CLS, sin carga de INP, sin obstáculo para Discover, sin pérdida de consentimiento en la medición. Este estado se rompe con el primer embed de YouTube, widget de afiliación, servicio de mapas o slot publicitario — por eso cada medida de ese tipo en este plan lleva expresamente consigo la reserva de consentimiento.

**Horizonte temporal, con honestidad:** primeras páginas en el índice en cuestión de días o hasta dos semanas. Cobertura completa de las ~55 URLs a lo largo de semanas o meses. Tráfico orgánico medible como muy pronto a las 12–26 semanas, y entonces primero en longtail como "cómo llegar a Los Roques desde Maiquetía", no en "playas de Venezuela".

---

## Contenido

1. **Diagnóstico** — inventario, bloqueantes, expectativa realista
2. **Fundamentos inmediatos** — Canonical, robots, Sitemap, GSC/Bing, IndexNow
3. **Datos estructurados** — `@graph`, anclas `@id`, mapeo de tipos, validación
4. **Técnica, rendimiento y accesibilidad** — P0/P1/P2 con archivo y línea
5. **Contenido y arquitectura de la información** — enlazado interno, thin content, páginas nuevas, E-E-A-T
6. **Multilingüismo** — estado actual del traductor en tiempo de ejecución, plan por fases, requisitos previos de hreflang
7. **Visibilidad en respuestas de IA (GEO)** — lo documentado, apuestas, medidas, medición
8. **Off-Site, Discover y marca** — palancas de Discover, imágenes, Wikimedia, canales, unificación del nombre
9. **Derecho, licencias y riesgo** — aviso legal, protección de datos, derechos de imagen, marca, YMYL, monetización
10. **Proceso y aseguramiento** — control CI, registro de redirecciones, tabla entidad→URL, accesos
11. **Medir y dirigir** — KPIs, herramientas, ritmo de reporting, valores esperables
12. **Roadmap** — lista priorizada de medidas con esfuerzo e impacto
13. **Lo que NO se hace deliberadamente** — exclusiones justificadas
14. **Fuentes** — fuentes primarias, fuentes secundarias, datos expresamente no confirmados

---

## 2. Fundamentos inmediatos (semana 1)

El orden es vinculante: **primero el arreglo del canonical, después el envío.** Enviar el sitemap antes del paso 2.1 hace que Google acabe en el vacío en `/playas`.

El paquete de la semana 1 comprende seis intervenciones técnicas (2.1–2.6) más la verificación de la propiedad (2.7). Todo lo que contiene es pura mecánica de entrega: no se reescribe ningún texto ni se muda ninguna URL. La única excepción son los tres enlaces con parámetro `?region=` de `components/sections/search-panel.tsx:16-18`, que van en el mismo commit que el arreglo del canonical (2.2) — ya hoy son proveedores de duplicados, y lo serán por partida doble tras la reestructuración de regiones.

### 2.1 Bloqueante: pasar `/playas` al lado del servidor

Paso 1 — renombrar el archivo existente:

```
components/sections/playas-page-content.tsx   (contenido de app/playas/page.tsx, "use client" se queda,
                                               renombrar el export a `PlayasPageContent`)
```

Paso 2 — nueva página de servidor `app/playas/page.tsx`:

```tsx
import type { Metadata } from "next";
import { PlayasPageContent } from "@/components/sections/playas-page-content";
import { searchIndex } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Playas, islas y cayos de Venezuela: las 15 más conocidas" },
  description:
    "Guía de las playas e islas más conocidas de Venezuela: Los Roques, Morrocoy, Mochima, Margarita, Choroní, Playa Medina y más, con ubicación y qué esperar.",
  alternates: { canonical: "/playas" },
  openGraph: {
    title: "Playas, islas y cayos de Venezuela",
    description: "Los Roques, Morrocoy, Mochima, Margarita, Choroní y más.",
    url: "/playas",
    type: "website",
    locale: "es_VE",
    siteName: "Mrs Venezuela",
    images: [{ url: absoluteUrl("/images/cayo-de-agua.jpg"), width: 1600, height: 899, alt: "Cayo de Agua, Los Roques" }],
  },
};

export default function PlayasPage() {
  const beaches = searchIndex.filter((item) => item.kind === "playa");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/playas#webpage"),
        url: absoluteUrl("/playas"),
        name: "Playas, islas y cayos de Venezuela",
        inLanguage: "es",
        isPartOf: { "@id": absoluteUrl("/#website") },
        breadcrumb: { "@id": absoluteUrl("/playas#breadcrumb") },
        mainEntity: { "@id": absoluteUrl("/playas#list") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/playas#list"),
        numberOfItems: beaches.length,
        itemListElement: beaches.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/playa/${b.slug}`),
          name: b.name,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/playas#breadcrumb"),
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Playas" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PlayasPageContent />
    </>
  );
}
```

El patrón ya está correctamente aplicado en `app/estados/page.tsx:29-72` (página de servidor con su propio `metadata` + JSON-LD, hijo cliente `StatesHub`).

**Sobre `width`/`height` en el bloque OG:** `1600, 899` están leídos del archivo, no redondeados. `public/images/cayo-de-agua.jpg` mide **1600×899** — la suposición evidente de "1600×900" es falsa. Comprueba antes de cada entrada:

```bash
file public/images/cayo-de-agua.jpg     # → "… baseline, precision 8, 1600x899, components 3"
```

Quien no lea las medidas, que omita `width`/`height`. Ambos campos son opcionales; un valor equivocado es peor que ningún valor, porque los scrapers recortan a partir de él. La misma regla vale para cada `ImageObject` del JSON-LD (véase 3.x) y para las imágenes de hero y de Discover.

**Verificación tras la compilación (obligatoria):**

```bash
node -e "const h=require('fs').readFileSync('.next/server/app/playas.html','utf8');console.log(h.match(/<link rel=.canonical.[^>]*>/), h.match(/<title>[^<]*<\/title>/))"
```

El estado actual antes del arreglo, leído directamente de `.next/server/app/playas.html`: `<link rel="canonical" href="https://mrsvenezuela.com"/>` y `<title>Descubre Venezuela | Guia premium de destinos, cultura y naturaleza</title>`. Tras el arreglo ahí deben figurar `/playas` y el título propio.

### 2.2 Eliminar el canonical global de reserva

En `app/layout.tsx`, suprimir:

```diff
-  alternates: {
-    canonical: "/",
-  },
   openGraph: {
     type: "website",
     locale: "es_VE",
-    url: "/",
```

Después, fijarlo de nuevo en `app/page.tsx` (el archivo hoy no tiene `metadata` en absoluto):

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};
```

Añade además `openGraph.url` en `app/contacto/page.tsx` y `app/sobre-nosotros/page.tsx` — hoy ambas envían `og:url = https://mrsvenezuela.com`.

**Este paso arregla de paso la 404 — sin código propio.** Hoy `.next/server/app/_not-found.html` contiene `<link rel="canonical" href="https://mrsvenezuela.com"/>`, heredado del layout raíz. Si cae el fallback, el canonical desaparece automáticamente de la 404. Dos cosas que ahí **no** se hacen:

- Nada de `robots: { index: false }` para la 404. Next inyecta `<meta name="robots" content="noindex"/>` por su cuenta — verificado en el `_not-found.html` compilado.
- Nada de exportar `metadata` en `app/not-found.tsx`. Metadata solo se puede exportar desde `layout.tsx` y `page.tsx`; un export ahí no surte efecto. El título de la 404 sigue siendo, por tanto, el predeterminado del layout. El único camino admitido para un título propio de la 404 sería `app/global-not-found.tsx` (existe en 15.5.20 detrás de `experimental: { globalNotFound: true }`, verificado en local) — pero ese archivo renderiza un documento `<html>` completo y duplica el armazón del layout, tipografías incluidas. En una página `noindex` no compensa.

**En el mismo commit: los tres enlaces con parámetro.** `components/sections/search-panel.tsx:16-18` enlaza internamente a `/estados?region=Los+Andes`, `/estados?region=Guayana+y+Amazonas` y `/estados?region=Regi%C3%B3n+Central`. El parámetro se lee exclusivamente en el cliente; lo que se entrega es tres veces exactamente el mismo HTML que en `/estados`. El self-canonical de `app/estados/page.tsx:33` intercepta los duplicados, pero solo después del rastreo — tres peticiones sin contrapartida, y los únicos enlaces internos que apuntan siquiera a URLs con parámetros. Ahora se cambian a la forma de destino futura; en cuanto exista `/estados/<region>` (sección 5), la variante con parámetro se mapeará además mediante `redirects()` en `next.config.ts`, para que los enlaces puestos desde fuera no acaben en el vacío. La regla de fondo está en la estrategia de redirecciones: una URL ya entregada no se borra nunca, se mapea, y los enlaces internos se mueven con ella **siempre en el mismo commit**.

**Regla para CLAUDE.md:** toda ruta nueva DEBE fijar ella misma `alternates.canonical`. En Next.js, `alternates` y `openGraph` se sustituyen de forma plana, no se fusionan en profundidad — la documentación dice "shallowly merged" (fusionados superficialmente); los campos anidados de un segmento anterior quedan sobrescritos por el último segmento que los define.

### 2.3 Favicon y juego de iconos

En todo el proyecto no existe ningún archivo de icono. Google muestra por eso, en las SERP móviles, el globo predeterminado en lugar de la marca — pérdida directa de CTR.

**Requisito previo, no paso secundario: no hay logotipo.** `public/images` contiene 83 archivos y entre ellos ni un solo recurso de marca; en todo el repositorio no existe ningún archivo de logotipo. Los cuatro archivos de icono de abajo son derivaciones de un mismo recurso de origen, y ese mismo recurso será después la fuente de `Organization.logo` (sección 3) — un 404 ahí devalúa el nodo Organization. El paso empieza, pues, con una tarea de diseño: un logotipo tipográfico o un símbolo, cuadrado, legible sobre fondo transparente y sobre fondo claro, con un máster de 512 px. Sin ese recurso, 2.3 está bloqueado y no debe entregarse con un marcador de posición "provisional" — el favicon y el logotipo quedan visibles durante meses y en las cachés.

Una vez disponible el máster:

```
app/favicon.ico        32x32
app/icon.png           512x512
app/apple-icon.png     180x180
app/manifest.ts        (MetadataRoute.Manifest, presente en el tipo de 15.5.20)
```

Next inyecta las etiquetas link automáticamente. Además, en `app/layout.tsx` hace falta un export `viewport` aparte. `themeColor` y `colorScheme` siguen figurando en el tipo `Metadata`, pero ahí están **obsoletos desde Next 14** — no eliminados; el export `viewport` es el camino admitido:

```tsx
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0f3d2e" },
  ],
  colorScheme: "light",
};
```

### 2.4 `max-image-preview:large` — el único interruptor de Discover que falta

En todo el repositorio no aparece `max-image-preview`. Sin ese valor, Google Discover entrega por principio solo miniaturas pequeñas en lugar de la tarjeta de imagen grande. En `app/layout.tsx`, dentro del objeto `metadata`:

```tsx
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
```

Ese es el requisito previo, no la garantía: los requisitos de imagen para Discover (lo único documentado es "al menos 1200 px de ancho") están en la sección 8.1.

### 2.5 Estructurar robots.ts por clases de bots

`app/robots.ts` tiene hoy un único objeto rules con `userAgent: "*"`. Importante: **el campo `other` de la documentación en línea no existe hasta Next 16.3.0** — aquí corre 15.5.20, y el tipo `RobotsFile` solo conoce `userAgent`, `allow`, `disallow`, `crawlDelay`. En la forma de array, `userAgent` es obligatorio (verificado en `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts:539-553`).

```tsx
import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // 1) Crawlers de recuperación/búsqueda de los motores de respuesta. Estos traen citas. Nunca bloquear.
      {
        userAgent: [
          "Googlebot", "Bingbot", "Applebot",
          "OAI-SearchBot", "ChatGPT-User",
          "PerplexityBot", "Perplexity-User",
          "Claude-SearchBot", "Claude-User",
          "DuckAssistBot", "MistralAI-User", "Amazonbot",
        ],
        allow: "/",
      },
      // 2) Crawlers exclusivamente de entrenamiento. Permitidos a propósito: no hay negocio de licencias, el
      //    conocimiento del modelo sobre Venezuela aporta más a la marca de lo que cuesta.
      {
        userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "meta-externalagent", "CCBot"],
        allow: "/",
      },
      // 3) Sin utilidad para nosotros.
      {
        userAgent: ["Bytespider", "Timpibot", "cohere-training-data-crawler", "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        disallow: "/",
      },
    ],
    sitemap: [absoluteUrl("/sitemap.xml")],
    host: "mrsvenezuela.com",
  };
}
```

Cuatro cosas que hay que saber al respecto:

- **Nunca pongas `/_next/` en disallow.** Googlebot necesita el CSS y el JS de `/_next/static/` para renderizar.
- **`Google-Extended` y `Applebot-Extended` son meros tokens de control de robots.txt, sin crawler propio.** Google documenta literalmente que Google-Extended no tiene una cadena de user agent propia para las peticiones HTTP y que el token se usa "in a control capacity" (con función de control); Applebot-Extended tampoco rastrea por sí mismo. Buscar cualquiera de los dos en los logs del servidor no tiene sentido. Y: bloquear Google-Extended **no** impide los AI Overviews ni el AI Mode — funcionan a través de Googlebot y se controlan mediante las directivas de Googlebot; según la documentación no hay requisitos adicionales para participar. Google-Extended controla las apps de Gemini y el entrenamiento/grounding de Vertex AI, no el buscador.
- **Las peticiones iniciadas por el usuario ignoran robots.txt solo en dos proveedores.** OpenAI escribe sobre `ChatGPT-User`: "Because these actions are initiated by a user, robots.txt rules may not apply." (Como estas acciones las inicia un usuario, puede que las reglas de robots.txt no se apliquen). Perplexity escribe sobre `Perplexity-User`: "Since a user requested the fetch, this fetcher generally ignores robots.txt rules." (Como la petición la solicitó un usuario, este fetcher por lo general ignora las reglas de robots.txt). **No afectado está Anthropic:** `ClaudeBot`, `Claude-User` y `Claude-SearchBot` respetan los tres robots.txt — también el `Claude-User`, que lo inicia el usuario. Un disallow contra ChatGPT-User o Perplexity-User sería seguridad aparente; en cambio, un disallow contra Claude-User sí sería eficaz y justo por eso dañino: cuesta citas.
- **A `OAI-SearchBot` solo se lo encuentra en el log con el patrón completo.** El user agent que se entrega es, completo, `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot`. Un patrón corto anclado al inicio de línea como `^OAI-SearchBot` **nunca** hace match, porque el nombre del token está en mitad de la cadena. Por eso, para cualquier análisis de logs o de analítica (sección 7.4) vale esto: filtra sin anclaje y sin distinguir mayúsculas por el nombre del token, no por el inicio de línea. El mismo error aparece con todos los bots que se presentan como un UA de navegador con sufijo `compatible;`.

**Comprobación rápida a nivel de edge (5 minutos, una sola vez):** robots.txt no es el único bloqueo. Vercel mantiene un "AI Bot Managed Ruleset" (conjunto de reglas gestionado para bots de IA) en el firewall. Según la documentación está inactivo por defecto — etiquetado como **Allow** en el panel. Aun así, merece la pena comprobarlo una vez, pero solo es relevante si alguien ha puesto el ruleset activamente en Deny; los detalles están en 7.3.

### 2.6 Corregir la sitemap

`app/sitemap.ts` aplica hoy a cada una de las ~55 entradas `lastModified: new Date()` más `changeFrequency` y `priority`. Dos de ellos no tienen efecto; uno es dañino:

- **Google ignora por completo `priority` y `changefreq`** — documentado literalmente: "Google ignores `<priority>` and `<changefreq>` values." (Google ignora los valores de `<priority>` y `<changefreq>`). Solo cuestan bytes.
- **`lastModified: new Date()` es activamente dañino.** Con eso, cada deploy de Vercel declara todas las URLs como modificadas hoy, aunque solo cambie una línea de CSS. Gary Illyes al respecto: quien entrega valores lastmod erróneos está "probably better off without the lastmods" (probablemente mejor sin los lastmod) (cita verificada; la datación 16/07/2026 procede de fuentes secundarias, no de una fuente primaria).

**Inmediato (5 minutos, si aún no se quiere tocar el modelo de datos):**

```tsx
import type { MetadataRoute } from "next";
import { pageKinds, searchIndex } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

const FALLBACK = "2026-08-24"; // Fecha del commit de las guías, e76e4d1

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/estados", "/playas", "/sobre-nosotros", "/contacto"].map((p) => ({
    url: absoluteUrl(p),
    lastModified: FALLBACK,
  }));

  const detail = pageKinds.flatMap((kind) =>
    searchIndex
      .filter((item) => item.kind === kind)
      .map((item) => ({ url: absoluteUrl(`/${kind}/${item.slug}`), lastModified: FALLBACK })),
  );

  return [...staticPages, ...detail];
}
```

Una fecha constante y correcta es mejor que una falsa que se mueve a diario. En cuanto haya fechas reales, se sustituye sola.

**Semana 3–4, con un campo de fecha real** (requisito previo también para `dateModified` en el schema y para IndexNow):

```ts
// lib/content.ts, completar DiscoverItem (líneas 26-37):
  publishedAt?: string;   // "2026-03-14"
  updatedAt?: string;     // "2026-08-25"

// lib/states/types.ts, completar StateGuideData:
  updatedAt: string;
```

Después, `lastModified: guide?.updatedAt ?? item.updatedAt ?? FALLBACK` y, además, el campo `images` en cada entrada — `MetadataRoute.Sitemap` ya lo admite en 15.5.20 (`SitemapFile`, `images?: string[]`, verificado en `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts:554-564`):

```ts
images: [image.startsWith("/") ? absoluteUrl(image) : image].filter((u) => u.startsWith("https://mrsvenezuela.com")),
```

Las URLs remotas de Wikimedia **no** van en la sitemap de imágenes propia — esas imágenes no están en el dominio propio.

No incorpores `generateSitemaps`: los límites documentados son **50000 URLs o 50 MB sin comprimir por archivo de sitemap**, y aquí hay ~55 URLs. Dividir solo genera gestión.

**Enviar, no hacer ping.** El endpoint de ping de sitemaps (`google.com/ping?sitemap=…`) se anunció para su retirada en junio de 2023 y se apagó a finales de 2023; hoy devuelve 404. Quien lo deje puesto en el script de deploy registra un fallo o — peor — se lo traga y da la sitemap por notificada. La única vía que queda para Google es el envío en el informe de sitemaps de Search Console (2.7) más la entrada `Sitemap:` en robots.txt, que 2.5 ya define. Para los participantes de IndexNow rige un mecanismo propio (sección 11) — Google no está entre ellos.

---

### 2.7 Google Search Console — propiedad de dominio por DNS

Los informes de IA generativa en GSC arrancaron el **03/06/2026**, con datos desde el **18/05/2026** y **sin backfill** — cada día sin una propiedad verificada se pierde de forma irrecuperable. Hay dos reservas que van con ello, sin que resten urgencia: el informe entrega exclusivamente **impresiones** (ni clics, ni CTR, ni queries) para AI Overviews, AI Mode y las superficies de IA en Discover. Y, según fuentes secundarias, se desplegó al principio solo para un **subconjunto de los propietarios de propiedades** (inicio en el Reino Unido); la extensión global está anunciada, pero sin fecha. Por eso el plan **no** da por supuesto que el informe sea visible tras la verificación. Aun así se verifica de inmediato: la recogida de datos depende de la propiedad, no de la visibilidad del informe.

1. `search.google.com/search-console` → "+ Añadir propiedad" → tarjeta izquierda **Dominio** → `mrsvenezuela.com` (sin https://, sin www).
2. Copia el valor TXT `google-site-verification=…`.
3. Comprueba antes dónde está la zona DNS: `dig NS mrsvenezuela.com +short`. Si ahí aparece `ns1.vercel-dns.com` o similar, entonces: panel de Vercel → barra lateral **Domains** → clic en el dominio → Advanced Settings → **Name** vacío (apex), **Type** `TXT`, **Value** = la cadena, **TTL** 60, Comment "GSC verification". Si no, dalo de alta en el registrador.
4. Comprueba con `dig TXT mrsvenezuela.com +short` y verifica después en GSC.
5. Informe de sitemaps → envía `sitemap.xml`.

Nunca limpies el registro TXT más adelante — si no, la propiedad queda silenciosamente sin verificar. El registro debe constar en la documentación de la zona con un comentario, para que ninguna limpieza posterior de DNS se lo lleve por delante.

**Accesos e identidad de remitente — resuélvelo en la misma pasada de DNS.** Poner la propiedad en una cuenta individual privada ata todo el historial de búsqueda posterior a esa única cuenta. Antes de que quede hecha la primera verificación:

- **Dirección de la organización en el dominio propio.** El contacto oficial es hoy `infomrsvenezuela@gmail.com` (`components/institutional/contact-page-content.tsx:6`, `components/sections/home-footer.tsx:70`). Una dirección de Gmail, como remitente de un servicio digital con ánimo comercial, es una señal de confianza débil e inadecuada en el aviso legal (Impressum). Crea `info@mrsvenezuela.com` y úsalo en todos los sitios donde el plan rellene más adelante `Organization.email`, el aviso legal y la página de contacto.
- **Configura ya SPF, DKIM y DMARC.** Sin DMARC el dominio es suplantable, y un dominio remitente suplantable socava justo la entidad que construye el capítulo 8. Orden: MX y SPF (`v=spf1 include:<provider> -all`) del proveedor de correo, su selector DKIM como CNAME/TXT, luego `_dmarc.mrsvenezuela.com` como TXT con `v=DMARC1; p=none; rua=mailto:…` para ir leyendo; tras dos a cuatro semanas de informes, a `p=quarantine`, más adelante a `p=reject`.
- **Un segundo owner y 2FA en cada acceso**: GSC, Bing Webmaster Tools, Vercel, GitHub, registrador. Cada uno de esos cinco puntos es por sí solo un single point of failure para el sitio.
- Activa el **bloqueo del registrador** (`clientTransferProhibited`) y la **renovación automática**, registra el dominio a nombre de la responsable del sitio y mantén al día los datos de contacto de WHOIS.

### 2.8 Bing Webmaster Tools + IndexNow

Bing es la capa de recuperación de Microsoft Copilot, alimenta a DuckDuckGo y Ecosia y sigue contribuyendo a ChatGPT Search. Sin índice en Bing, el sitio es invisible para esas superficies. A eso se suma el informe **"AI Performance"**, disponible como public preview desde el **10/02/2026**: Total Citations, Average Cited Pages, Grounding Queries y citas por URL para Copilot, los resúmenes de IA en Bing y "select partner integrations" (integraciones seleccionadas de socios). Es, ahora mismo, la única interfaz para webmasters que muestra cifras absolutas de citas — más de lo que entrega GSC en el informe de IA generativa. Una ampliación adicional con Intents, Topics, Citation Share y un modo Compare en junio de 2026 circula en fuentes secundarias, **no está acreditada** y aquí no se planifica.

1. `bing.com/webmasters` → tarjeta **Import from Google Search Console** → cuenta de Google → `mrsvenezuela.com` → Import. Con eso queda verificado de inmediato.
2. Envía la sitemap.
3. **Settings → API Access → API Key → Generate** — esa key es a la vez la key de IndexNow.
4. Crea `public/<KEY>.txt`, con contenido = exactamente la key, UTF-8, sin BOM. Vercel sirve los `.txt` de `public/` como `text/plain`. Comprueba antes que `.vercelignore` no contenga ningún patrón que atrape ese archivo.
5. Guarda la key como secreto de GitHub `INDEXNOW_KEY`.

`scripts/indexnow.mjs`:

```js
const KEY = process.env.INDEXNOW_KEY;
const HOST = "mrsvenezuela.com";
if (!KEY) { console.log("kein INDEXNOW_KEY – übersprungen"); process.exit(0); }

const arg = process.argv[2];
let urlList;
if (arg) {
  const fs = await import("node:fs");
  urlList = fs.readFileSync(arg, "utf8").split("\n").filter(Boolean);
} else {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

for (let i = 0; i < urlList.length; i += 10000) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST, key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urlList.slice(i, i + 10000),
    }),
  });
  console.log(res.status, res.status === 429 ? res.headers.get("retry-after") : "");
}
```

`.github/workflows/indexnow.yml` — según la documentación, los webhooks de cuenta de Vercel están reservados a los equipos Pro y Enterprise, así que el disparador tiene que venir de GitHub:

```yaml
name: IndexNow
on:
  push:
    branches: [main]
  workflow_dispatch:
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: sleep 180        # esperar al deploy de Vercel
      - uses: actions/setup-node@v4
        with: { node-version: 22 }
      - run: node scripts/indexnow.mjs
        env:
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}
```

**Haz ping a un solo endpoint** (`api.indexnow.org`) — el FAQ de IndexNow asegura que el aviso se comparte con todos los buscadores participantes. Los participantes son **Amazon, Bing, Naver, Seznam.cz, Yandex y Yep**; **Google no participa en IndexNow**, y para Google la única vía sigue siendo la sitemap. Por POST se permiten **hasta 10000 URLs** — de ahí el bucle `slice(i, i + 10000)`, que con ~55 URLs nunca llega a actuar, pero soporta sin cambios el crecimiento a varios cientos de páginas. Envía **solo las URLs modificadas** en cuanto exista `updatedAt`; notificar el conjunto completo de la sitemap en cada push es el camino más rápido a una limitación (HTTP 429; el script ya registra `Retry-After`).

### 2.9 Comprobar el historial del dominio y los pasivos heredados

Todo el plan da por hecho que el sitio es invisible porque le faltan fundamentos técnicos y profundidad de contenido. Esa suposición está sin comprobar. Una medida manual heredada o un perfil de spam por drop-catch explica la falta de visibilidad mejor que cualquier problema de canonical — y deja sin valor toda inversión en contenido mientras persista. Cuatro comprobaciones, menos de una hora en total, justo después de la verificación y **antes** de cualquier medida de contenido:

1. **Primer registro en WHOIS.** `whois mrsvenezuela.com`, campo `Creation Date`. Si está claramente antes del inicio del proyecto, el dominio ya fue otra cosa alguna vez, y todo lo demás deja de ser una formalidad.
2. **Uso anterior en el archivo.** `web.archive.org/web/*/mrsvenezuela.com` para idioma, tema y periodo; además, el inventario de URLs con `web.archive.org/cdx/search/cdx?url=mrsvenezuela.com*&output=text&fl=original&collapse=urlkey`. Las URLs antiguas que todavía reciben enlaces van en `lib/redirects.ts` (C2) y no a un 404.
3. **GSC → "Seguridad y medidas manuales"**, cada uno de los dos subapartados por separado. Una medida heredada no prescribe sola: exige una solicitud de revisión, y esta requiere que el pasivo heredado esté demostrablemente eliminado. Eso puede tirar por tierra el orden de todo el plan.
4. **Ahrefs Webmaster Tools** (gratis para dominios verificados) → perfil de backlinks y distribución de anchors. Señales de alarma: clústeres de anchors en otros idiomas, anchors de farmacia/casino/adulto, un pico de dominios de referencia anterior al inicio del proyecto. Crea un archivo de disavow solo si hay spam realmente heredado y en relación con una medida documentada — desautorizar de forma preventiva elimina sobre todo enlaces que funcionan.

El resultado se anota también cuando sale negativo. "Comprobado el DD/MM/AAAA: Creation Date X, sin copias de archivo anteriores a Y, sin medidas manuales, sin perfil de enlaces antiguos aprovechable" es una afirmación que nadie tiene que investigar por segunda vez — y el requisito previo para atribuir con limpieza los rankings que después no lleguen a la ejecución, y no a una prehistoria desconocida.

### 2.10 Deployments de preview

Vercel pone automáticamente `X-Robots-Tag: noindex` en cada deployment de preview. Es decir, **no hay nada que hacer** — con exactamente una excepción que la documentación nombra literalmente: la cabecera desaparece en cuanto se asigna un dominio propio (custom) a una rama que no es la de producción.

Comprobar: `curl -sI <preview-url> | grep -i x-robots-tag`

Endurecimiento sin coste (disponible en Hobby): proyecto → Settings → **Deployment Protection** → Vercel Authentication, scope Standard Protection.

No incorpores ninguna consulta de `VERCEL_ENV` en `app/robots.ts` — con una condición mal puesta se desindexa la producción. Y `lib/utils.ts:9` tiene `https://mrsvenezuela.com` hardcodeado: con eso las previews apuntan sus canonical a la producción, que es justo lo correcto aquí.

### 2.11 Apex/www y Speed Insights

- Apex/www **no va en el código**: ajustes del proyecto en Vercel → Domains → añade los dos, `www.mrsvenezuela.com` como redirección 308 a `mrsvenezuela.com` (la dirección tiene que encajar con `absoluteUrl()` en `lib/utils.ts:9`). Vercel lo resuelve a nivel de edge.
- `npm i @vercel/speed-insights` y luego, en `app/layout.tsx:75`, un `<SpeedInsights />` junto a `<Analytics />`. Solo así hay **datos de campo** de Core Web Vitals — los valores de laboratorio de Lighthouse no cuentan para los rankings.

### 2.12 Solicitar indexación de forma selectiva — para 7 URLs como máximo

GSC → campo de búsqueda superior → Inspeccionar URL → **Solicitar indexación**. Lo seguro es esto: **hay** una cuota, depende de la propiedad y no de la cuenta, y solicitarlo repetidamente para la misma URL no aporta nada. **Google no da una cifra** — los valores que circulan, en torno a 10–12 URLs al día, son estimaciones de la práctica y no sirven como base de planificación. En lo operativo eso significa: las URLs más importantes primero, en un solo día, sin repetir, y sin esperar que con ello se arrastre el resto del sitio.

Solo para: `/`, `/estados`, `/playas`, `/parque-nacional/canaima`, `/estado/merida`, `/playa/los-roques`, `/sobre-nosotros`. Para las ~48 URLs restantes, la única vía es la sitemap.

**La Google Indexing API no es una salida.** Según la documentación, solo está admitida para páginas con `JobPosting` o con `BroadcastEvent` dentro de un `VideoObject`, con una cuota por defecto de 200 peticiones de publicación al día y por proyecto. Ninguna ruta de este sitio cumple el requisito previo de tipo; los envíos de páginas editoriales no tienen efecto.

**El control del impacto** pasa por la inspección de URL ("URL incluida" frente a la prueba en vivo — la prueba en vivo solo dice que la página es accesible, no que se haya indexado), el informe de indexación de páginas y el informe de sitemaps en GSC, además de **Bing WMT → Crawl Information**. **No** mediante Vercel Log Drains: esa función es Pro/Enterprise y, como todas las rutas están prerenderizadas, las peticiones de los crawlers se sirven directamente desde el CDN y de todos modos no aparecen en los logs de funciones. Quien quiera ver de verdad los accesos de bots por user agent necesita otra vía distinta de los logs de Vercel (véase el capítulo 7).

---

## 3. Datos estructurados

### 3.1 Reglas básicas

1. **Un único `<script type="application/ld+json">` por página, con un solo `@graph`.** El Schema Markup Validator evalúa por separado los bloques separados, y las referencias `@id` que cruzan los límites de un bloque no tienen garantía de resolverse.
2. **Cada nodo recibe una `@id`** según el patrón `<URL canónica>#<rol>`. Los nodos de alcance global del sitio cuelgan de la URL raíz.
3. **Las referencias son siempre `{ "@id": "..." }`**, nunca un objeto repetido. El duplicado actual de `isPartOf` en `lib/page-factory.tsx:72-76` genera dos entidades `WebSite` que compiten entre sí.
4. **Exactamente una entidad principal por página**, enlazada mediante `WebPage.about` y `Entity.mainEntityOfPage`.
5. **Todas las URLs, absolutas.** `lib/page-factory.tsx:70` emite `image: item.image` en crudo, es decir, `/images/salto-angel.jpg` para las imágenes locales. Dos líneas más arriba (`:23`), ese mismo archivo lo hace bien en la ruta de metadatos.
6. **No marcar nada que no sea visible.** Es el único punto con riesgo de acción manual (Manual Action).
7. **No adivinar nada.** Ni coordenadas geográficas inventadas, ni medidas de imagen estimadas, ni IDs de Wikidata generadas por coincidencia de nombre.
8. **Ningún nodo apunta a una URL que no existe.** Esto afecta en concreto a `Organization.logo` (no hay ningún recurso de logotipo en el proyecto, véase 3.4) y a `publishingPrinciples`/`correctionsPolicy` (la ruta de la sección 9 aún no está publicada). Un 404 en ese punto devalúa el nodo; una clave ausente no cuesta nada.

Sobre la regla 7 en detalle: `lib/states/regions.ts:22-27` define `StateLocation` con `x`/`y` — según el comentario del propio archivo, «Posición de la capital sobre el mapa político, en % de ancho y alto». `lib/content.ts:117-142` maneja además otros porcentajes del mismo tipo. Son coordenadas de imagen, **no** coordenadas geográficas. Por eso no se emite `GeoCoordinates` en ningún sitio hasta que haya valores reales procedentes de una fuente identificada. Lo mismo con Wikidata: Estado Bolívar (Q191164), Ciudad Bolívar (Q26906) y Simón Bolívar son tres entidades distintas — verifica cada QID por separado, nunca la deduzcas del nombre.

### 3.2 Mapeo de tipos por tipo de ruta

`lib/page-factory.tsx:65` tipa hoy todo salvo `articulo` como `TouristDestination`: una arepa es, así, un lugar. Sustituirlo por una tabla. Todos los tipos se comprobaron el 25/08/2026 por estado HTTP contra schema.org; la versión actual es la **V30.0, del 19/03/2026**. Resultado: `TravelGuide`, `NationalPark` y `Food` devuelven **404** y no existen. Confirmados como existentes (200): `Beach`, `Mountain`, `Park`, `State`, `City`, `TouristDestination`, `TouristAttraction`, `AdministrativeArea`, `Guide`.

| Ruta | `@type` | Observación |
|---|---|---|
| `/estado/[slug]` | `["State","TouristDestination"]` | La tipificación múltiple es válida, ambos son subtipos de Place |
| `/estado/distrito-capital` | `["AdministrativeArea","TouristDestination"]` | Distrito Capital no es un «State» |
| `/ciudad/[slug]` | `["City","TouristDestination"]` | |
| `/parque-nacional/[slug]` | `["Park","TouristAttraction"]` | **`NationalPark` no existe** (404) |
| `/playa/[slug]` | `["Beach","TouristAttraction"]` | |
| `/montana/[slug]` | `["Mountain","TouristAttraction"]` | |
| `/animal`, `/planta`, `/comida`, `/historia`, `/articulo` | `Article` + `about: Thing` | **`Food` no existe.** Nada de `Recipe` sin una preparación real |
| `/` | `WebSite` + `Organization` + `WebPage` + `Country` | en lugar de `TravelGuide` (404) |
| `/estados`, `/playas` | `CollectionPage` + `ItemList` + `BreadcrumbList` | |
| `/sobre-nosotros` | `AboutPage` + `mainEntity → #organization` | |
| `/contacto` | `ContactPage` + `mainEntity → #organization` | |

Eliminar del nodo Place las propiedades no válidas: `headline` (solo duplica `name`); `inLanguage` e `isPartOf` corresponden al nodo `WebPage`, no a `TouristDestination` (`isPartOf` e `inLanguage` son propiedades de CreativeWork, y `Place` no lo es).

### 3.3 Vocabulario sin función de Google: emitirlo igualmente o justamente no emitirlo

Cuatro tipos sobre los que en 2026 se decide mal de forma habitual. El criterio no es «genera un rich result», sino «describe la página correctamente y está respaldado por contenido visible».

| Vocabulario | Situación en 2026 | Decisión aquí |
|---|---|---|
| `FAQPage` | Rich result desactivado desde el **07/05/2026**, documentación retirada el **15/06/2026**. El fin del soporte de la API en agosto de 2026, solo **según la prensa del sector**, no confirmado por Google | **Emitir** — solo con preguntas reales y visibles en la página. Vocabulario válido que los sistemas de IA leen; los pares pregunta-respuesta son el mejor material de pasajes que tienen las guías |
| `HowTo` | Anuncio el 08/08/2023, retirada completa en escritorio en septiembre de 2023 | **No emitir** |
| `SearchAction` / caja de búsqueda de sitelinks | retirada desde el **21/11/2024**; el marcado no tiene efecto, pero tampoco genera errores en GSC | **No emitir.** Aun así, el nodo `WebSite` se mantiene: es el ancla `@id` de la que cuelgan `isPartOf` y `publisher`. Además, aquí falta el requisito previo: `search-overlay.tsx` trabaja puramente en el cliente, no existe una URL de búsqueda indexable |
| `Guide` | existe (HTTP 200), nunca fue una función de Google | Sustituto correcto en términos de vocabulario para el inexistente `TravelGuide`. Como segundo tipo en el nodo `WebPage` (`["WebPage","Guide"]`) es formalmente admisible; el beneficio está solo del lado de las entidades y de la IA, sin efecto en las SERP |

### 3.4 Archivo nuevo `lib/schema.ts`

```ts
import type { ContentKind, DiscoverItem } from "@/lib/content";
import type { StateGuideData } from "@/lib/states/types";
import { absoluteUrl } from "@/lib/utils";

export const ID = {
  website: absoluteUrl("/#website"),
  org: absoluteUrl("/#organization"),
  logo: absoluteUrl("/#logo"),
  page: (p: string) => absoluteUrl(`${p}#webpage`),
  entity: (p: string) => absoluteUrl(`${p}#entity`),
  image: (p: string) => absoluteUrl(`${p}#primaryimage`),
  crumb: (p: string) => absoluteUrl(`${p}#breadcrumb`),
  faq: (p: string) => absoluteUrl(`${p}#faq`),
};

export const SITE_NAME = "Mrs Venezuela";
export const SITE_ALT_NAME = "Descubre Venezuela";

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/mrsvenezuela_1/",
  "https://www.tiktok.com/@mrsvenezuela1",
]; // Fuente: components/sections/home-footer.tsx:8-9 — importar desde ahí, no duplicar

// Requisitos previos, no cuestiones de gusto. Ambos siguen en false hasta que el recurso o la ruta existan de verdad.
const LOGO_ASSET_LIVE = false;        // public/images no contiene ningún logotipo — véase abajo
const EDITORIAL_POLICY_LIVE = false;  // /politica-editorial de la sección 9

export const toAbsolute = (src: string) => (src.startsWith("/") ? absoluteUrl(src) : src);

export const placeTypeFor: Partial<Record<ContentKind, string[]>> = {
  estado: ["State", "TouristDestination"],
  ciudad: ["City", "TouristDestination"],
  "parque-nacional": ["Park", "TouristAttraction"],
  playa: ["Beach", "TouristAttraction"],
  montana: ["Mountain", "TouristAttraction"],
};

export const articleKinds: ContentKind[] = ["animal", "planta", "comida", "historia", "articulo"];

export const CC_LICENSE_URL: Record<string, string> = {
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
  "CC BY-SA 2.5": "https://creativecommons.org/licenses/by-sa/2.5/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

export const organizationNode = () => ({
  "@type": "Organization",
  "@id": ID.org,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAME,
  url: absoluteUrl("/"),
  email: "infomrsvenezuela@gmail.com",
  description: "Guía editorial independiente sobre destinos, naturaleza y cultura de Venezuela.",
  sameAs: SOCIAL_PROFILES,
  knowsLanguage: ["es", "en", "de", "fr", "zh"],
  ...(LOGO_ASSET_LIVE
    ? {
        logo: { "@type": "ImageObject", "@id": ID.logo, url: absoluteUrl("/images/logo-512.png"), width: 512, height: 512 },
        image: { "@id": ID.logo },
      }
    : {}),
  ...(EDITORIAL_POLICY_LIVE
    ? {
        publishingPrinciples: absoluteUrl("/politica-editorial"),
        correctionsPolicy: absoluteUrl("/politica-editorial#correcciones"),
      }
    : {}),
});

export const websiteNode = () => ({
  "@type": "WebSite",
  "@id": ID.website,
  url: absoluteUrl("/"),
  name: SITE_NAME,
  alternateName: SITE_ALT_NAME,
  inLanguage: "es",
  publisher: { "@id": ID.org },
  // deliberadamente sin potentialAction/SearchAction — véase 3.3
});

export function breadcrumbNode(kind: ContentKind, item: DiscoverItem, path: string) {
  const hub: Partial<Record<ContentKind, { label: string; href: string }>> = {
    estado: { label: "Estados", href: "/estados" },
    playa: { label: "Playas", href: "/playas" },
    // Añadir más kinds solo cuando el hub exista como URL real.
  };
  const middle = hub[kind];
  const list = [{ "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") }];
  if (middle) list.push({ "@type": "ListItem", position: 2, name: middle.label, item: absoluteUrl(middle.href) });
  list.push({ "@type": "ListItem", position: list.length + 1, name: item.name });
  return { "@type": "BreadcrumbList", "@id": ID.crumb(path), itemListElement: list };
}
```

Tres observaciones sobre las diferencias respecto a la versión más obvia:

**`logo` falta a propósito.** `public/images` **no** contiene ningún recurso de logotipo: en todo el proyecto no existe ningún archivo con el logotipo de la marca. Además, una referencia `@id` `image: { "@id": ID.logo }` sin su nodo correspondiente sería una referencia imposible de resolver y vulneraría la regla básica 2. **Diseñar un logotipo es, por tanto, un requisito previo, no un paso secundario** — ese mismo recurso alimenta `app/icon.png`, `apple-icon.png` y el manifiesto. Hasta entonces: omitir la clave, no apuntar a `/images/logo-512.png`.

**`publishingPrinciples`/`correctionsPolicy`** apuntan a la política editorial, de correcciones y de identificación de IA de la sección 9. Ambas propiedades son la parte legible por máquina de lo que allí nace como página propia; `EDITORIAL_POLICY_LIVE` se cambia en el mismo commit en el que se publica la ruta.

**Barra final (trailing slash).** `absoluteUrl()` devuelve `https://mrsvenezuela.com` **sin** barra (`lib/utils.ts:8-12`); `absoluteUrl("/")`, **con** barra. En el grafo, el mismo recurso debe ser en todas partes la misma cadena de texto; si no, surgen dos entidades para la portada — por eso se usa `absoluteUrl("/")` de forma sistemática.

El `email` sigue siendo por ahora la dirección de Gmail existente. Es una señal de confianza débil y se sustituirá en cuanto esté lista la cuenta de correo del dominio; eso va junto con el aviso legal (Impressum) y los derechos de acceso en la sección 9.

### 3.5 Ejemplo completo: `/estado/bolivar`

IDs de Wikidata verificadas con la API de es.wikipedia (25/08/2026): Venezuela Q717, Estado Bolívar Q191164, Estado Mérida Q165582, PN Canaima Q1244337, Pico Bolívar Q213704, Salto Ángel Q80299, Ciudad Bolívar Q26906. **Verifica por separado cada QID adicional, nunca lo adivines por coincidencia de nombre.**

El nodo `Organization` de abajo muestra el estado **posterior** a la sección 9: con `publishingPrinciples`/`correctionsPolicy` y todavía sin `logo`. Antes de eso, las dos claves de política se omiten sin sustituto.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://mrsvenezuela.com/#organization",
      "name": "Mrs Venezuela", "alternateName": "Descubre Venezuela",
      "url": "https://mrsvenezuela.com/", "email": "infomrsvenezuela@gmail.com",
      "publishingPrinciples": "https://mrsvenezuela.com/politica-editorial",
      "correctionsPolicy": "https://mrsvenezuela.com/politica-editorial#correcciones",
      "sameAs": ["https://www.instagram.com/mrsvenezuela_1/", "https://www.tiktok.com/@mrsvenezuela1"],
      "knowsLanguage": ["es","en","de","fr","zh"] },

    { "@type": "WebSite", "@id": "https://mrsvenezuela.com/#website",
      "url": "https://mrsvenezuela.com/", "name": "Mrs Venezuela",
      "alternateName": "Descubre Venezuela", "inLanguage": "es",
      "publisher": { "@id": "https://mrsvenezuela.com/#organization" } },

    { "@type": "WebPage", "@id": "https://mrsvenezuela.com/estado/bolivar#webpage",
      "url": "https://mrsvenezuela.com/estado/bolivar",
      "name": "Bolívar: guía de viaje del Orinoco, Canaima y la Gran Sabana",
      "description": "…guide.seo.description…",
      "isPartOf": { "@id": "https://mrsvenezuela.com/#website" },
      "about": { "@id": "https://mrsvenezuela.com/estado/bolivar#entity" },
      "primaryImageOfPage": { "@id": "https://mrsvenezuela.com/estado/bolivar#primaryimage" },
      "breadcrumb": { "@id": "https://mrsvenezuela.com/estado/bolivar#breadcrumb" },
      "inLanguage": "es",
      "datePublished": "2026-08-18",
      "dateModified": "2026-08-25",
      "author": { "@id": "https://mrsvenezuela.com/#autora" },
      "publisher": { "@id": "https://mrsvenezuela.com/#organization" } },

    { "@type": "BreadcrumbList", "@id": "https://mrsvenezuela.com/estado/bolivar#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://mrsvenezuela.com/" },
        { "@type": "ListItem", "position": 2, "name": "Estados", "item": "https://mrsvenezuela.com/estados" },
        { "@type": "ListItem", "position": 3, "name": "Bolívar" } ] },

    { "@type": ["State", "TouristDestination"], "@id": "https://mrsvenezuela.com/estado/bolivar#entity",
      "name": "Estado Bolívar", "alternateName": "Bolívar",
      "description": "El estado más extenso de Venezuela: Orinoco, Guayana, tepuyes y Gran Sabana.",
      "url": "https://mrsvenezuela.com/estado/bolivar",
      "mainEntityOfPage": { "@id": "https://mrsvenezuela.com/estado/bolivar#webpage" },
      "image": { "@id": "https://mrsvenezuela.com/estado/bolivar#primaryimage" },
      "sameAs": ["https://www.wikidata.org/wiki/Q191164",
                 "https://es.wikipedia.org/wiki/Estado_Bol%C3%ADvar"],
      "containedInPlace": { "@type": "Country", "@id": "https://www.wikidata.org/wiki/Q717",
        "name": "Venezuela", "sameAs": "https://es.wikipedia.org/wiki/Venezuela" },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Capital", "value": "Ciudad Bolívar" },
        { "@type": "PropertyValue", "name": "Región", "value": "Guayana venezolana" },
        { "@type": "PropertyValue", "name": "Superficie", "value": "240.528 km²" },
        { "@type": "PropertyValue", "name": "Gentilicio", "value": "Bolivarense" } ],
      "includesAttraction": [
        { "@type": ["Park","TouristAttraction"], "@id": "https://mrsvenezuela.com/parque-nacional/canaima#entity",
          "name": "Parque Nacional Canaima",
          "url": "https://mrsvenezuela.com/parque-nacional/canaima",
          "sameAs": "https://www.wikidata.org/wiki/Q1244337" } ] },

    { "@type": "ImageObject", "@id": "https://mrsvenezuela.com/estado/bolivar#primaryimage",
      "url": "https://mrsvenezuela.com/images/states/bolivar.jpg",
      "contentUrl": "https://mrsvenezuela.com/images/states/bolivar.jpg",
      "caption": "Salto Ángel cayendo del Auyantepuy entre la selva de Canaima",
      "representativeOfPage": true },

    { "@type": "FAQPage", "@id": "https://mrsvenezuela.com/estado/bolivar#faq",
      "isPartOf": { "@id": "https://mrsvenezuela.com/estado/bolivar#webpage" },
      "mainEntity": [ /* SOLO de guide.faqs.items — visible en la página */ ] }
  ]
}
```

Todos los valores salen del repo, ninguno está puesto a mano: `additionalProperty` se alimenta directamente de `guide.know.facts` (`lib/states/data/bolivar.ts:34-41`, tipo `StateFact = { label; value }` en `lib/states/types.ts:16` — `label` pasa a ser `PropertyValue.name`); `includesAttraction`, de `guide.places.items`, pero **solo** de las entradas con `href` definido (17 rutas internas verificadas en el repo; para Bolívar exactamente una, `lib/states/data/bolivar.ts:98`). La imagen y el `caption` vienen de `photos.saltoAngelSelva` (`:4`); `/images/states/bolivar.jpg` existe. Ambas cosas son una operación de mapeo pura, sin trabajo de redacción.

El nodo `ImageObject` no lleva aquí, deliberadamente, **ningún** campo de licencia: para los archivos locales de `public/images` no existe hasta hoy documentación de procedencia. Con ello cumple el dato obligatorio `contentUrl`, pero no se cualifica para el marcado de licencia de imagen (véase 3.7 y 3.8). También faltan `width`/`height`: `cayo-de-agua.jpg` mide 1600×899 y no 1600×900 — las medidas se leen del archivo durante la compilación o no se emiten en absoluto.

### 3.6 Reestructuración de `lib/page-factory.tsx`

Cuatro intervenciones concretas:

```diff
  // Línea 24: entregar el título de la guía como absoluto; si no, la plantilla
  //           de app/layout.tsx:28 vuelve a añadir 21 caracteres (79–90 caracteres)
- const title = guide?.seo.title ?? item.name;
+ const title = guide?.seo.title
+   ? { absolute: guide.seo.title }
+   : `${item.name}: qué ver, cuándo ir y cómo llegar`;

  // Línea 32-39: añadir siteName, fuera las medidas de imagen erróneas
  openGraph: {
+   siteName: "Mrs Venezuela",
-   images: [{ url: image, width: 1200, height: 800, alt: item.name }],
+   images: [{ url: image, alt: item.name }],   // o medidas reales, nunca a ojo
  },

  // Línea 70: URL de imagen absoluta
- image: item.image,
+ image: { "@id": ID.image(path) },

  // Línea 86-103: eliminar sin sustituto el FAQ genérico de reserva
- : [ { "@type": "Question", name: `¿Cuál es la mejor época…` }, … ]
```

`siteName` ya figura en `app/layout.tsx:39`, y aun así hay que volver a fijarlo aquí. Next.js fusiona los objetos de metadatos de forma **plana**: los campos anidados como `openGraph` y `robots` procedentes de un segmento anterior quedan **completamente sobrescritos** por el último segmento que los define. Toda página que exporte su propio bloque `openGraph` pierde así `siteName` e `images` del layout raíz. Esa misma mecánica es la razón por la que cada página de detalle debe entregar su `og:image` de forma explícita en lugar de confiar en `/images/opengraph-venezuela.jpg` de `app/layout.tsx:43-50`.

El nodo FAQPage solo se renderiza si existen preguntas reales y visibles:

```tsx
const faqs = guide?.faqs.items ?? beachGuides[item.slug]?.faqs;
...(faqs?.length
  ? [{ "@type": "FAQPage", "@id": ID.faq(path), isPartOf: { "@id": ID.page(path) },
       mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question,
         acceptedAnswer: { "@type": "Answer", text: f.answer } })) }]
  : []),
```

**Efecto secundario con ganancia real:** en `components/content/detail-page.tsx:309` hay 13 bloques de FAQ de playas reales y renderizados de forma visible (`beachGuides`, verificado: 13 arrays `faqs` entre `:333` y `:595`). Deben pasar a un archivo apto para servidor (`lib/beach-guides.ts`) para que page-factory pueda leerlos. Con eso, 13 páginas de playa tendrían por primera vez marcado FAQ real y específico de cada página en lugar de texto genérico, y bajo la condición de 3.3: ya no es una función de Google, pero sí sustancia visible y citable para los sistemas de IA.

### 3.7 La procedencia de las imágenes como fuente de datos: `lib/image-credits.ts`

Hoy la procedencia de las imágenes está incompleta en el repo por triplicado, y eso bloquea de golpe tres salidas: el JSON-LD de licencia, la atribución visible y la página recopilatoria. Inventario, contado sobre el repo:

- **`StateCredit` solo está rellenado en 6 de 23 guías** — merida 4, zulia 3, falcon 3, sucre/la-guaira/carabobo 1 cada una, en total 13 comprobantes. Las 17 guías restantes no aportan ninguno.
- **Seis hotlinks de Commons no tienen campo alguno:** cinco llamadas a `commonsFile()` en `lib/content.ts:46,55,58,60,61` (Los Roques, Puerto Cabello, Playa Medina, Chichiriviche, Macuto) más la URL `Special:FilePath` hardcodeada para `picoBolivar` en `:63-64`. `DiscoverItem` (`lib/content.ts:26-37`) solo conoce `image: string`: no hay sitio para el autor ni para la licencia.
- **Para los 83 archivos locales de `public/images` no existe comprobante alguno de procedencia.**

Consecuencia: una única fuente para los tres casos, indexada de modo que se resuelvan ambas formas de direccionamiento.

```ts
// lib/image-credits.ts
export type ImageCredit = {
  title: string;        // título de la obra; en Commons, el título del archivo sin extensión
  source: "commons" | "own" | "licensed";
  author: string;
  license: string;      // nombre visible: "CC BY-SA 4.0"
  licenseUrl: string;   // URL del deed — ver CC_LICENSE_URL en lib/schema.ts
  filePage: string;     // página del archivo en Commons o comprobante de procedencia
  changes?: string;     // obligatorio en CC BY-SA en cuanto se edita: "recorte a 16:9"
};

const COMMONS_PREFIX = "https://commons.wikimedia.org/wiki/Special:FilePath/";

export const imageCredits: Record<string, ImageCredit> = {
  // Hotlinks de Commons: la clave es el nombre de archivo tal como lo recibe commonsFile()
  "Village Gran Roque.jpg": {
    title: "Village Gran Roque",
    source: "commons",
    author: "…",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    filePage: "https://commons.wikimedia.org/wiki/File:Village_Gran_Roque.jpg",
  },
  // Archivos locales: la clave es la ruta public
  "/images/states/merida.jpg": { /* … */ },
};

export function creditFor(src: string): ImageCredit | undefined {
  if (src.startsWith(COMMONS_PREFIX)) {
    const file = decodeURIComponent(src.slice(COMMONS_PREFIX.length).split("?")[0]);
    return imageCredits[file];
  }
  return imageCredits[src];
}
```

La rama `startsWith` cubre ambas variantes: las URL generadas por `commonsFile()` y la URL hardcodeada de Pico Bolívar, porque las dos llevan el mismo prefijo y la misma query `?width=`. Los datos de partida son las 13 entradas `StateCredit` existentes; se migran una vez y después ya no se mantienen a mano.

**Tres consumidores, una fuente:**

1. **JSON-LD de `ImageObject`** mediante `imageObjectNode()` (3.8). Sin entrada no se generan campos de licencia: falta entonces la característica Licensable, pero tampoco queda nada incorrecto en el grafo.
2. **Atribución visible** como `<figure>/<figcaption>`. El JSON-LD es invisible y **no** cumple la obligación de atribución.
3. **Página recopilatoria `/creditos`**, generada a partir del mismo mapa y enlazada en el pie.

```tsx
// components/content/credited-image.tsx — Server Component
import Image from "next/image";
import { creditFor } from "@/lib/image-credits";

type Props = { src: string; alt: string } & Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

export function CreditedImage({ src, alt, ...rest }: Props) {
  const credit = creditFor(src);
  return (
    <figure>
      <Image src={src} alt={alt} {...rest} />
      {credit && (
        <figcaption className="mt-2 text-xs leading-5 text-[#89918d]">
          {alt} · Foto: {credit.author},{" "}
          <a href={credit.licenseUrl} rel="license noopener" target="_blank">{credit.license}</a>,{" "}
          <a href={credit.filePage} rel="noopener" target="_blank">{credit.title}</a>
          {credit.changes ? ` · Bearbeitung: ${credit.changes}` : null}
        </figcaption>
      )}
    </figure>
  );
}
```

```tsx
// app/creditos/page.tsx
import type { Metadata } from "next";
import { imageCredits } from "@/lib/image-credits";

export const metadata: Metadata = {
  title: "Créditos de imágenes",
  description: "Autoría, licencia y fuente de cada fotografía publicada en Mrs Venezuela.",
  alternates: { canonical: "/creditos" },
};

export default function CreditosPage() {
  const entries = Object.entries(imageCredits).sort(([, a], [, b]) => a.title.localeCompare(b.title));
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">Créditos de imágenes</h1>
      <ul className="mt-8 space-y-3 text-sm leading-6">
        {entries.map(([key, c]) => (
          <li key={key}>
            <a href={c.filePage} rel="noopener" target="_blank">{c.title}</a> — {c.author},{" "}
            <a href={c.licenseUrl} rel="license noopener" target="_blank">{c.license}</a>
            {c.changes ? ` · ${c.changes}` : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
```

`StateCredit` (`lib/states/types.ts:73`) se mantiene como tipo, pero pasa a ser una **proyección** en lugar de la fuente: `credits` se genera a partir de los valores `src` de las fotos usadas en la guía, y `filePage` se convierte en `href`. Con eso, los arrays `credits` vacíos dejan de ser estructuralmente posibles, y el bloque de créditos ya existente —hoy casi siempre vacío— de `components/content/state-editorial-guide.tsx:503-521` se rellena sin más trabajo editorial. Un control de compilación sobre ese mismo mapa —cualquier imagen referenciada en `searchIndex`, `heroSlides` o en una guía que no tenga entrada rompe la compilación— debe entrar en la cadena de CI.

Dos dependencias hacia fuera: el lado **legal** (obligaciones de CC BY-SA, imágenes sin procedencia demostrable, transferencia a terceros países por los hotlinks de Commons) está en la sección 9 — es el verdadero motivo de este archivo; el esquema es solo el beneficio secundario. Y en cuanto los hotlinks dejen de cargarse directamente desde `commons.wikimedia.org` y se copien en local o se pasen por el optimizador de imágenes, `contentUrl` se moverá con ellos a la nueva URL: `filePage` y `licenseUrl` quedan sin cambios.

### 3.8 `ImageObject` con licencia para las imágenes de Commons

```ts
// lib/schema.ts (añadido)
import { creditFor } from "@/lib/image-credits";

const SOURCE_LABEL = { commons: "Wikimedia Commons", own: "Mrs Venezuela", licensed: "Lizenzgeber" } as const;

export function imageObjectNode(src: string, id: string, caption: string) {
  const url = toAbsolute(src);
  const credit = creditFor(src);
  return {
    "@type": "ImageObject",
    "@id": id,
    url,
    contentUrl: url,                    // campo obligatorio
    caption,
    ...(credit
      ? {
          creator: { "@type": "Person", name: credit.author },
          creditText: `${credit.author} / ${SOURCE_LABEL[credit.source]} / ${credit.license}`,
          copyrightNotice: `${credit.author}, ${credit.license}`,
          license: credit.licenseUrl,   // URL, no la cadena "CC BY-SA 3.0"
          acquireLicensePage: credit.filePage,
        }
      : {}),                            // sin procedencia documentada, no hay campos de licencia
  };
}
```

Salida para una imagen documentada (datos de `lib/states/data/merida.ts:198`):

```json
{ "@type": "ImageObject",
  "@id": "https://mrsvenezuela.com/estado/merida#image-pico-espejo",
  "contentUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Telef%C3%A9rico%20del%20Pico%20Espejo.JPG?width=1800",
  "url": "…dieselbe URL…",
  "caption": "Teleférico del Pico Espejo",
  "creator": { "@type": "Person", "name": "Ivan Carvajal" },
  "creditText": "Ivan Carvajal / Wikimedia Commons / CC BY-SA 3.0",
  "copyrightNotice": "Ivan Carvajal, CC BY-SA 3.0",
  "license": "https://creativecommons.org/licenses/by-sa/3.0/",
  "acquireLicensePage": "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_del_Pico_Espejo.JPG" }
```

Google exige `contentUrl` como campo obligatorio, más **al menos uno** de `creator`, `creditText`, `copyrightNotice` o `license`. `license` tiene que ser una **URL**, no la cadena «CC BY-SA 3.0» — de ahí la tabla de correspondencias `CC_LICENSE_URL` en `lib/schema.ts`. Para la característica Licensable en Google Imágenes, `license` es **obligatorio**; los otros tres campos por sí solos no bastan para eso, aunque hagan válido el marcado.

**Importante y con independencia de lo anterior:** el JSON-LD es invisible y **no** cumple la obligación de atribución de CC. Commons exige una atribución perceptible para las personas (autor, título de la obra, nombre de la licencia con enlace, URL de origen), exactamente lo que renderiza `CreditedImage` de 3.7. En CC BY-SA hay que señalar además las modificaciones (recorte, corrección de color); para eso está el campo `changes`. Los arrays `credits` vacíos son, por tanto, una infracción de licencia y no solo un déficit de SEO; la valoración y la consecuencia para las imágenes sin procedencia demostrable están en la sección 9.

### 3.9 `VideoObject` — solo con vídeos propios incrustados

`VideoObject` es uno de los pocos rich results que quedan en 2026 y la única razón para incorporar todavía vocabulario nuevo. La condición, eso sí, es estricta: **solo se marca lo que está realmente incrustado en la página** (regla básica 6). Los vídeos que están únicamente en YouTube no pertenecen al `@graph` de este sitio.

En cuanto se incrusten vídeos propios, rige lo siguiente:

- Incrustar **exclusivamente a través de `youtube-nocookie.com`** y solo con fachada de clic para cargar (imagen de vista previa estática, iframe solo tras una acción del usuario). Un iframe de YouTube cargado directamente tumba el estado actual del sitio sin banner de consentimiento — la justificación y las consecuencias están en la sección 9.
- El nodo cuelga como `video` del nodo `WebPage` y lleva `name`, `description`, `thumbnailUrl` y `uploadDate` como datos obligatorios; `duration` (ISO-8601) y `embedUrl` como añadido razonable.
- Una **transcripción visible** debajo del vídeo es el verdadero rendimiento: aporta el material de pasajes que los sistemas RAG pueden citar y hace que el contenido del vídeo sea indexable siquiera.

```json
{ "@type": "VideoObject",
  "@id": "https://mrsvenezuela.com/estado/bolivar#video",
  "name": "…",
  "description": "…",
  "thumbnailUrl": ["https://mrsvenezuela.com/images/…"],
  "uploadDate": "2026-…",
  "duration": "PT…M…S",
  "embedUrl": "https://www.youtube-nocookie.com/embed/…",
  "isPartOf": { "@id": "https://mrsvenezuela.com/estado/bolivar#webpage" } }
```

`SitemapFile` en Next 15.5.20 admite, además de `alternates.languages` e `images`, también `videos`: para ello no hace falta un sitemap de vídeo aparte; el campo se lleva en `app/sitemap.ts` en cuanto el primer nodo de vídeo esté en producción.

### 3.10 Rutina de validación

Tres herramientas, tres responsabilidades:

| Herramienta | comprueba | resultado esperado aquí |
|---|---|---|
| `validator.schema.org` | vocabulario, con independencia de Google | Es la única que detecta errores como `TravelGuide` o `@id` no resolubles. Ejecútala primero. |
| `search.google.com/test/rich-results` | solo funciones de Google | En `/estado/bolivar` se reconocen **solo los breadcrumbs**. `TouristDestination` no genera ningún rich result: eso no es un error. FAQ ya no se representa desde el 07/05/2026 (documentación retirada el 15/06/2026) y aquí ya ni siquiera aparece. |
| Inspección de URL en GSC + Enhancements | rastreabilidad, incluidas las URL de imagen, informe de breadcrumbs | El informe de breadcrumbs está forzosamente vacío hasta que se entregue `BreadcrumbList`. |

Comprobación previa local sin deploy (puerto de desarrollo 3003):

```bash
curl -s http://localhost:3003/estado/bolivar \
  | grep -o '<script type="application/ld+json">[^<]*' \
  | sed 's|<script[^>]*>||' | python -m json.tool
```

Dos invariantes que hay que comprobar de paso y que se pueden automatizar: toda referencia `@id` del grafo debe encontrar un nodo con exactamente esa `@id`, y toda URL de imagen del grafo debe ser absoluta. Ambas reglas cubren justo las clases de error que esta sección elimina: el `WebSite` duplicado de `lib/page-factory.tsx:72-76` y el `image: item.image` relativo de `:70`.

---

---

## 4. SEO técnico, rendimiento y accesibilidad

Priorizado por impacto respecto al esfuerzo. P0 son los fallos que dañan directamente la indexación o la situación legal; P1 cuesta visibilidad y tiempo de carga; P2 es higiene. Las subsecciones 4.4 a 4.6 añaden tres campos que no aparecen en la lógica pura de posicionamiento, pero que dependen de las mismas estructuras.

### 4.1 P0

| Corrección | Archivo:línea | Motivo |
|---|---|---|
| Wrapper de servidor para `/playas` | `app/playas/page.tsx:1` | Canonical apuntando a la portada; 14 páginas de playa pierden su única entrada |
| Eliminar `alternates.canonical: "/"` | `app/layout.tsx:32-34` | Se hereda en cada ruta que no tenga su propio `alternates` |
| Eliminar `openGraph.url: "/"` | `app/layout.tsx:38` | `/contacto` y `/sobre-nosotros` envían un `og:url` incorrecto |
| Metadata para el 404 | `app/not-found.tsx` (no existe export) | Título y canonical de la portada en cada página de error |
| Entregar el título como absoluto | `lib/page-factory.tsx:24` + `app/layout.tsx:28` | 79–90 caracteres, truncado con seguridad |
| Sustituir `TravelGuide` | `app/page.tsx:46-54` | El tipo no existe (404); la portada no tiene marcado válido |
| Borrar el fallback de FAQ | `lib/page-factory.tsx:86-103` | Riesgo de políticas sin contrapartida |
| URL de imagen relativa en el JSON-LD | `lib/page-factory.tsx:70` | inválida; `:23` lo hace bien dos líneas más arriba |
| `lastModified: new Date()` | `app/sitemap.ts:9,13-16,22` | devalúa la señal lastmod en todo el sitio |
| Favicon/iconos | `app/` (no existen) | Globo por defecto en las SERP móviles |
| `max-image-preview:large` | `app/layout.tsx` | Requisito previo para la tarjeta grande de Discover |
| Acentos en título/description | `app/layout.tsx:27,31`, `app/page.tsx` | «Guia» en lugar de «Guía», «montanas» en lugar de «montañas» — visible de inmediato en la SERP para los usuarios hispanohablantes |
| **Eliminar `unoptimized` en las imágenes remotas** | `detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`, `los-roques-guide.tsx:97,113`, `medanos-guide.tsx:288,307`, `pico-bolivar-guide.tsx:183,212`, `island-carousel.tsx:53`, `localized-detail-page.tsx:156` | El navegador de cada visitante de la UE contacta directamente con `commons.wikimedia.org`: transferencia a terceros países sin base jurídica. A la vez, corrección del LCP |

**Por qué `unoptimized` pertenece a P0 y no a P1, como se clasificó al principio.** El prop aparece en todas partes con la misma forma: `unoptimized={<src>.startsWith("http")}`, es decir, exactamente para las imágenes ajenas. Con el flag activado, `next/image` escribe la URL ajena sin cambios en `src`/`srcset`; el navegador del visitante establece por sí mismo la conexión con `commons.wikimedia.org` y transmite con ello dirección IP, User-Agent y referrer a un tercero. Es estructuralmente la misma constelación que una fuente de Google incrustada — solo que con imágenes. Sin el flag, el optimizador de Vercel obtiene el archivo del lado del servidor y lo sirve desde el origen propio; el navegador del visitante nunca ve el host ajeno.

Con ello cambia el orden de los motivos: el aspecto de protección de datos es la razón para P0, y la ganancia de rendimiento llega como subproducto — 646 KB de JPEG en bruto en lugar de 92 KB de WebP, a través del redirect no cacheable de `Special:FilePath` (`lib/content.ts:39-40`), sin `srcset`, y en varias páginas directamente como elemento LCP (`state-editorial-guide.tsx:218`, `detail-page.tsx:818`, `los-roques-guide.tsx:113`, `medanos-guide.tsx:307`, `pico-bolivar-guide.tsx:212` llevan todos `priority`). La clasificación jurídica y el texto correspondiente de la política de privacidad están en la sección 9; esta sección aporta solo la parte del lado del código.

Dos efectos derivados que justifican el esfuerzo: primero, las dimensiones de las imágenes pasan a determinarlas el optimizador en lugar de estimarse — las dimensiones OG erróneas de `lib/page-factory.tsx:36` no pierden con ello su efecto de forma automática, pero los datos quedan coherentes. Segundo, solo así se hace posible una directiva `img-src 'self' data:` real en la CSP (4.5). Mientras `unoptimized` siga ahí, la CSP tendría que permitir `upload.wikimedia.org` y `commons.wikimedia.org` y quedaría abierta justo en el punto que debe cerrar.

La eliminación es mecánica: quitar el prop, comprobar `sizes` (ya está en todas partes), `remotePatterns` en `next.config.ts` cubre ambos nombres de host. En las cinco entradas `commonsFile(...)` (`lib/content.ts:46,55,58,60,61`) y en la URL de Commons anotada directamente (`:64`), la dirección remota permanece en los datos, pero pasa entonces por `/_next/image`.

### 4.2 P1

| Corrección | Archivo:línea | Motivo |
|---|---|---|
| `siteName` en el OG hijo | `app/estados/page.tsx:37-44`, `lib/page-factory.tsx:32` | `openGraph` se reemplaza de forma plana → `/estados` y las 50 páginas de detalle pierden `og:image` u `og:site_name` |
| Dimensiones OG erróneas | `lib/page-factory.tsx:36` | `1200x800` de forma genérica para originales de Wikimedia con otra relación de aspecto |
| Aplicar code splitting al catálogo de traducciones | `components/i18n/content-translator.tsx:5` | 2,4 MB de JSON, ~885 KB en brotli, ~80 % del JS total de la portada — para **todos** los visitantes, también los hispanohablantes |
| Retorno anticipado con `language === "es"` | `components/i18n/content-translator.tsx:79` | Hoy el TreeWalker recorre el body entero, aunque se sepa que `lookup` devolverá `undefined` |
| Opciones de imagen en `next.config.ts` | `next.config.ts:3-16` | `minimumCacheTTL: 60` (valor por defecto) → cada entrada de caché pasa a STALE a los 60 s y se factura como una nueva transformación de Vercel |
| Imagen hero vertical en una banda apaisada | `components/sections/hero.tsx:70,81` → `/images/salto-angel.jpg` (1733×2599, 2774 KB) | se recorta ~77 % de los píxeles cargados |
| Generar un derivado 16:9 de `salto-angel.jpg` | `lib/content.ts:43-44,78-79,83,123,151,344` | el mismo archivo es hero, tarjeta de estado e imagen OG/Discover de `/parque-nacional/canaima` |
| Segundo slide del hero precargado | `components/sections/hero.tsx:76-78,86` | dos imágenes a pantalla completa compiten por el ancho de banda; `priority` depende del índice en lugar del estado |
| `dynamicParams = false` | los diez `app/*/[slug]/page.tsx` | hoy los slugs desconocidos arrancan una Function que después lanza `notFound()` |
| `BreadcrumbList` | `lib/page-factory.tsx` | uno de los pocos Rich Results que quedan en 2026; la miga de pan visible ya existe en `guide-toc.tsx:121-138` |

**El derivado del Salto Ángel no es un detalle del hero, sino un déficit de assets en cuatro puntos.** `lib/content.ts:43` y `:44` mapean `angelFalls` y `canaima` al mismo archivo vertical (1733×2599, 2774 KB). Se consume como `heroImage` (`:78-79`), como primer slide del hero (`:83`, renderizado en `hero.tsx:81` con `priority`), como imagen de tarjeta del estado Bolívar (`:123`), como `image` de la entrada `parque-nacional/canaima` del `searchIndex` (`:151`) — y por tanto, vía `lib/page-factory.tsx`, como imagen OG y de Discover de esa ruta — además de en la galería (`:344`). Cualquier plataforma recorta por el centro un archivo vertical usado como imagen OG; que en `page-factory.tsx:36` se declare `1200x800` de forma genérica hace además que el dato sea incorrecto.

Consecuencia: un recorte 16:9 definido editorialmente como archivo propio (nombre de trabajo `salto-angel-16x9.jpg`), de al menos 1200 px de ancho y por debajo de 300 KB. El ancho mínimo de 1200 px está documentado para Discover; **16:9 es una recomendación de la práctica, no un criterio documentado de Google** — Google menciona exclusivamente el ancho. El original se conserva para la vista de detalle. Constantes separadas en lugar de un alias común: `angelFallsPortrait` para la serie de imágenes, `angelFallsWide` para el hero, la tarjeta y el OG. Lo mismo vale para las dimensiones en general: leer las medidas de la imagen desde el archivo mediante código u omitir el campo — `public/images/cayo-de-agua.jpg` mide 1600×899, no 1600×900.

`next.config.ts` nuevo (parte de imágenes y de compilación; la función `headers()` aparece completa en 4.5, porque allí se amplía con las directivas de seguridad):

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 828, 1080, 1920],
    qualities: [75],
  },
  poweredByHeader: false,
  experimental: { optimizePackageImports: ["framer-motion"] },
  // async headers() → ver 4.5
};
```

Un año de `minimumCacheTTL` es correcto aquí y no es arriesgado: si cambia la ruta de la imagen, la clave de caché cambia de todos modos. Quitar `3840` de `deviceSizes` — no hay ningún archivo fuente capaz de cubrirlo.

Code splitting del catálogo en `content-translator.tsx`:

```tsx
const [catalog, setCatalog] = useState<Catalog | null>(null);
useEffect(() => {
  if (language === "es") { setCatalog(null); return; }
  let alive = true;
  import(`@/lib/translations/${language}.json`).then((m) => { if (alive) setCatalog(m.default); });
  return () => { alive = false; };
}, [language]);
```

Requisito previo: `scripts/generate-site-translations.mjs` escribe cuatro archivos de idioma en lugar de un archivo de 2,4 MB. Los visitantes hispanohablantes cargan entonces 0 KB de catálogo en lugar de 655 KB en brotli.

### 4.3 P2

- 92 MB en `public/images` repartidos en 112 archivos; de ellos, `caracas-avila.jpg`, `states/distrito-capital.jpg` y `states/miranda.jpg` son idénticos byte a byte (2922925 bytes cada uno). Unificarlos en un solo archivo, llevar las imágenes fuente a un máximo de 2000 px de lado largo y ~300 KB, y volver a guardar `patanemo-hero.png` (2548190 bytes) y `merida-pico-espejo.png` (1248652 bytes) como JPEG/WebP (PNG para fotos, 3,7 MB entre ambos).
- `public/data/venezuela-adm1.json` (1,26 MB) no está referenciado por ningún archivo. Igualmente sin usar: `components/sections/interactive-map.tsx`, `components/sections/site-footer.tsx`, `components/sections/gallery.tsx`, `components/sections/category-grid.tsx` (ninguno se importa en ningún punto del repositorio).
- Añadir `lib/site-translations.json.bak` (2,6 MB) y `.tmp-sapo/` (2 MB) a `.gitignore` **y** a `.vercelignore`.
- framer-motion en `components/sections/site-header.tsx:4` carga el paquete `motion` completo (39,5 KB gzip) en cada ruta. Cambiar a `LazyMotion` + `m` → 6,5 KB síncronos.
- Listener de scroll sin limitar y con lectura de layout en `components/content/guide-toc.tsx:54-62` — afecta a las 23 páginas de guía. Limitarlo con `requestAnimationFrame`, medir `scrollHeight` una sola vez y llevar el progreso a una variable CSS en lugar de a un estado de React.

### 4.4 Accesibilidad

La accesibilidad no es un factor de posicionamiento, y esta sección no afirma lo contrario. El motivo para tratarla aquí es otro: la falta de landmarks, la falta de destinos de salto y el foco que no se restaura son los mismos defectos estructurales con los que también tropiezan los parsers — y, con el boletín previsto más la oferta de cooperación/afiliación, ya no se puede descartar con seguridad quedar sujeta al BFSG (Barrierefreiheitsstärkungsgesetz, ley alemana de refuerzo de la accesibilidad, en vigor desde el 28/06/2025). Todos los puntos siguientes están verificados contra el repositorio.

**Ni skip link ni destino de salto.** En todo el repositorio no hay ningún skip link (búsqueda de «skip»/«saltar al contenido»: cero resultados). `<main>` existe en doce puntos — `app/not-found.tsx:13`, `app/page.tsx:59`, `app/playas/page.tsx:159`, `components/content/detail-page.tsx:808`, `localized-detail-page.tsx:154`, `los-roques-guide.tsx:111`, `medanos-guide.tsx:296`, `pico-bolivar-guide.tsx:201`, `state-editorial-guide.tsx:206`, `states-hub.tsx:51`, `components/institutional/about-page-content.tsx:9`, `contact-page-content.tsx:10` — pero ninguno lleva un `id`. El header con el desplegable de regiones está en cada ruta antes del contenido.

Como primer hijo de `<body>` en `app/layout.tsx`:

```tsx
<a
  href="#contenido"
  className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#0f3d2e] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
>
  Saltar al contenido
</a>
```

Además, `id="contenido"` en los doce elementos `<main>`. El texto pasa por `ContentTranslator` y se traduce también a los demás idiomas.

**`prefers-reduced-motion` se evalúa, pero solo en un punto.** `app/globals.css:55` establece con movimiento reducido únicamente `scroll-behavior: auto`. Por lo demás, la preferencia solo se evalúa en `components/sections/hero.tsx:63` (se detiene la rotación automática). Diez componentes animan con framer-motion y la ignoran: `canaima-experience-carousel.tsx`, `canaima-landmarks.tsx`, `manual-image-carousel.tsx`, `medanos-guide.tsx`, `pico-bolivar-guide.tsx`, `state-editorial-guide.tsx`, `interactive-map.tsx`, `language-switcher.tsx`, `search-panel.tsx`, `site-header.tsx`.

Dos niveles, porque uno no basta. Para las transiciones CSS (p. ej. `transition-all duration-[1400ms]` en `hero.tsx:88`), la regla global en `app/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Esta regla **no** surte efecto con framer-motion, porque allí `transform` y `opacity` se escriben en cada frame como estilo en línea, no mediante transiciones CSS. Para eso, `MotionConfig` es la vía prevista:

```tsx
// components/a11y/reduced-motion.tsx
"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

En `app/layout.tsx`, envolver con él el `LanguageProvider`. `reducedMotion="user"` desactiva las animaciones de transform y de layout de los componentes `motion` que quedan por debajo y deja correr `opacity` — se conservan, pues, las apariciones y desapariciones, pero no los desplazamientos. En la reestructuración P2 hacia `LazyMotion`/`m`, `MotionConfig` sigue siendo válido sin cambios.

**Lightbox sin trampa de foco y sin devolución del foco.** `components/content/place-gallery.tsx:116-118` establece correctamente `role="dialog"`, `aria-modal="true"` y `aria-label`, pero el foco se queda en el elemento que la dispara, al fondo; el tabulador se desplaza por detrás del overlay y, tras cerrar, el foco se pierde. El botón de cierre del overlay (`:121-127`) lleva `tabIndex={-1}` y debe filtrarse de la selección de la trampa:

```tsx
const dialogRef = useRef<HTMLDivElement | null>(null);
const openerRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  const node = dialogRef.current;
  if (!abierta?.photo || !node) return;

  openerRef.current = document.activeElement as HTMLElement | null;

  const focusables = () =>
    Array.from(node.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]'))
      .filter((el) => el.tabIndex >= 0);

  focusables()[0]?.focus();

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") { close(); return; }
    if (event.key !== "Tab") return;
    const items = focusables();
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  document.addEventListener("keydown", onKeyDown);
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.removeEventListener("keydown", onKeyDown);
    document.body.style.overflow = previousOverflow;
    openerRef.current?.focus();
  };
}, [abierta, close]);
```

Además, `ref={dialogRef}` en el `<div role="dialog">`. El manejo de Escape y el bloqueo del scroll también faltan hoy y quedan resueltos aquí de paso.

**Contraste: justo, no incorrecto.** `--muted: #68726d` (`app/globals.css:11`) sobre el fondo de página `#f7f4ec` da, según la fórmula WCAG, **4,53:1** — el umbral de 4,5:1 para texto corrido queda así cumplido, pero con tres centésimas de reserva. Cualquier variante de opacidad (`text-[#68726d]/80`) y cualquier fondo algo más oscuro tumban el valor. Lo afectado es justamente la clase de texto pequeño en la que se emplea el color, por ejemplo `text-xs` en `components/sections/language-switcher.tsx:91`. El tono sustitutivo `#5c6b60` propuesto en otro punto alcanza en cambio **5,13:1** y tiene reserva real — es la mejor opción, pero no por una infracción existente, sino por el colchón. Ambos valores están calculados contra `#f7f4ec`; las secciones de guía con fondo oscuro (`#0f3d2e`) hay que comprobarlas por separado.

**Selección de idioma: mejor de lo supuesto, pero mal etiquetada.** La suposición de que `public/flags` significa banderas como selector de idioma solo se cumple a medias: `components/sections/language-switcher.tsx` sirve las banderas con `alt=""` (`:35`, `:83`) y dentro de un contenedor `aria-hidden` (`:80`), es decir, correctamente decorativas, y muestra siempre junto a ellas una etiqueta de texto (`:40-41`, `:90`). El defecto real está en `lib/i18n.ts:2-6`: las etiquetas son exónimos españoles — «Alemán», «Inglés», «Francés», «Chino». El autónimo aparece solo en pequeño en el campo `note` (`:91-93`). Un visitante germanohablante busca «Deutsch», no «Alemán». Cambiar la etiqueta principal al autónimo (`Deutsch`, `English`, `Français`, `中文`, `Español`) y llevar la denominación española a la segunda línea. Además, al popup le falta un modelo de teclado: `role="listbox"` (`:62`) sin navegación con flechas, sin Escape, sin devolución del foco al disparador (`:25-46`) y sin `aria-controls`. Reestructuración pequeña, la misma mecánica que en la lightbox.

**Sobre el `<h1>` duplicado — falsa alarma, con prueba.** Ambas apariciones existen realmente: `components/content/state-editorial-guide.tsx:224` y `:236`, las dos con `{guide.name}`. Quedaba abierto si ambas llegan al DOM. No lo hacen: los dos bloques son las ramas del ternario `{guide.hero ? (…) : (…)}` en `:208` (hero con foto frente a variante tipográfica sin foto), así que siempre se renderiza exactamente uno. Contraprueba en la compilación: cada archivo bajo `.next/server/app/estado/*.html` contiene exactamente un `<h1>`. No es un hallazgo técnico. Lo que queda es el **texto** del h1 — «Bolívar» a secas colisiona con Simón Bolívar, Pico Bolívar y Ciudad Bolívar; es una cuestión de entidades, no de estructura, y pertenece al capítulo de contenido.

### 4.5 Encabezados de seguridad

Los tres encabezados previstos (`Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`) son correctos, pero faltan justamente los que impiden algo. El sitio está prerrenderizado de forma estática, no tiene scripts ajenos ni endpoints de formulario: esa es la rara situación de partida en la que una Content-Security-Policy de verdad resulta alcanzable y asegura de forma duradera los tres puntos en los que se escribe JSON-LD en la página mediante `dangerouslySetInnerHTML` (`app/page.tsx:58`, `app/estados/page.tsx:68`, `lib/page-factory.tsx:110`).

**Advertencia sobre `preload` en HSTS.** La directiva es un compromiso de hecho irreversible para el dominio y todos sus subdominios; salir de la lista de preload lleva meses y solo surte efecto con la segunda versión siguiente del navegador. No debe activarse hasta que el apex **y** `www` sirvan HTTPS de forma permanente y sin excepciones (véase 2.10), y entonces hay que solicitarla efectivamente en `hstspreload.org`, o quedará en el encabezado sin efecto alguno. Hasta entonces: `max-age` sin `preload`, como abajo.

Función `headers()` completa, insertada en el bloque de 4.2:

```ts
// next.config.ts — reemplaza la línea de comentario de 4.2
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  // images, poweredByHeader y experimental sin cambios respecto de 4.2
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
          },
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};
```

Notas sobre la CSP para que no se rompa al activarla en firme:

- `'unsafe-inline'` en `script-src` es aquí inevitable. Next.js escribe en las páginas prerrenderizadas scripts en línea para el payload de Flight (`self.__next_f.push(…)`), y una solución con nonce presupone un middleware que fuerce el renderizado dinámico en cada ruta: eso anularía el estado estático del sitio, es decir, destruiría justo la ventaja que este plan asegura en otro apartado. El valor de protección sigue estando en `default-src 'self'`, `object-src 'none'`, `base-uri 'self'` y `frame-ancestors`.
- `style-src 'unsafe-inline'` es necesario porque framer-motion establece atributos `style` en línea.
- `img-src 'self' data: blob:` funciona **solo después** de la corrección de `unoptimized` de 4.1. Antes tendrían que figurar `upload.wikimedia.org` y `commons.wikimedia.org` en la directiva.
- `connect-src 'self'` basta para `@vercel/analytics`, porque en Vercel el script y las balizas se sirven desde el propio origen bajo `/_vercel/insights/*`. Si eso se cumple en la configuración concreta lo mostrará la ejecución en Report-Only; por eso, Report-Only primero.
- `frame-ancestors 'self'` es la directiva eficaz; `X-Frame-Options: SAMEORIGIN` se mantiene como duplicado para clientes antiguos.

Procedimiento: dejar Report-Only en marcha al menos dos semanas, revisar las infracciones desde la consola del navegador (con este volumen de tráfico no compensa un endpoint de informes) y luego cambiar la clave a `Content-Security-Policy`. La reestructuración no cuesta nada en tiempo de carga: son encabezados, no bytes en el cuerpo.

**Cadena de suministro y vía de aviso.** `.github/` no existe en el repositorio. Créalo en el mismo commit que el flujo de CI:

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
    groups:
      minor-and-patch:
        update-types: ["minor", "patch"]
```

Como complemento, `npm audit --omit=dev` como paso no bloqueante en la misma pipeline: en un sitio sin datos de usuarios, abortar en duro ante cada aviso transitivo es fricción sin contrapartida; basta con un log visible.

`public/.well-known/security.txt` conforme a RFC 9116 (Next sirve `public/` en la raíz, de modo que el archivo queda accesible después en `/.well-known/security.txt`):

```
Contact: mailto:security@mrsvenezuela.com
Expires: 2027-08-24T22:00:00.000Z
Preferred-Languages: es, de, en
Canonical: https://mrsvenezuela.com/.well-known/security.txt
```

`Expires` es obligatorio según RFC 9116 y no puede situarse a más de un año vista: la entrada debe renovarse anualmente o el archivo queda formalmente inválido. La dirección presupone el buzón del dominio; hasta que ese exista, ahí debe ir una dirección que se lea de verdad, no una inventada.

### 4.6 Feed y telemetría de búsqueda

Dos pequeñas piezas técnicas con una palanca desproporcionada, ambas por debajo de una hora.

**Feed RSS.** No hay ninguno. El feed es el raíl de distribución sin algoritmo de por medio: alimenta el boletín previsto (RSS-to-Email ahorra todo el trabajo manual), Feedly y Flipboard, los pines automáticos de Pinterest y los agregadores de viajes. Esfuerzo: unos 30 minutos.

```ts
// app/feed.xml/route.ts
import { pageKinds, searchIndex } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c] as string,
  );

export function GET() {
  const items = pageKinds.flatMap((kind) =>
    searchIndex
      .filter((item) => item.kind === kind)
      .map((item) => {
        const url = absoluteUrl(`/${kind}/${item.slug}`);
        return `    <item>
      <title>${escapeXml(item.name)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(item.description)}</description>
    </item>`;
      }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Descubre Venezuela</title>
    <link>${absoluteUrl()}</link>
    <description>Guías editoriales de destinos, cultura y naturaleza de Venezuela.</description>
    <language>es</language>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
```

`dynamic = "force-static"` genera el archivo en tiempo de compilación; no se ejecuta ninguna Function. Deliberadamente **sin** `pubDate`: un `new Date()` en ese punto sería el mismo error que el `lastModified: new Date()` de `app/sitemap.ts`, una fecha inventada que además marca todas las entradas como nuevas en cada despliegue e induce a los agregadores a repetir los envíos. `pubDate` se añadirá en cuanto exista el campo `updatedAt` previsto en el capítulo de contenidos; entonces caerá también, de propina, la ordenación por fecha.

Enlace en el `<head>` a través de `app/layout.tsx`: `alternates.types` está presente en el tipo `AlternateURLs` de Next 15.5.20:

```ts
alternates: {
  types: {
    "application/rss+xml": [{ url: "/feed.xml", title: "Descubre Venezuela" }],
  },
},
```

La entrada `canonical` del mismo objeto `alternates` desaparece sin sustituto (P0). Importante por la fusión superficial: toda ruta que exporte su propio `alternates` sobrescribe también esta entrada `types`; o bien eso es asumible (el feed queda entonces solo en el `<head>` raíz) o la entrada se traslada a la misma función auxiliar que construye los canonical.

**Telemetría de búsqueda.** En todo el repositorio no existe ni una sola llamada a `track()`, pese a que `@vercel/analytics` (2.0.1) está instalado e incorporado en `app/layout.tsx:75`. La búsqueda interna (`components/sections/search-overlay.tsx`) filtra puramente en el cliente sobre `searchIndex` y no genera ninguna URL —correcto así, no es un asunto de indexación—, pero con ello se pierde la investigación de contenidos más barata y honesta que este sitio puede tener: los términos con los que los propios visitantes se quedan sin resultados.

En `SearchOverlay()`, después de `matches` (`:53-63`):

```tsx
import { track } from "@vercel/analytics";

useEffect(() => {
  const needle = query.trim();
  if (needle.length < 3) return;
  const timer = window.setTimeout(() => {
    track("search", { q: normalize(needle).slice(0, 60), results: matches.length });
  }, 800);
  return () => window.clearTimeout(timer);
}, [query, matches.length]);
```

El retardo de 800 ms hace que solo se cuente la entrada que ha quedado quieta y no cada pulsación de tecla. `normalize` (`:31-36`) ya existe y elimina los diacríticos y las diferencias de mayúsculas y minúsculas; el recorte a 60 caracteres acota el valor. `track` acepta `string | number | boolean | null` como valores de propiedad, no objetos anidados.

Tres condiciones antes de que esto entre en producción:

1. **Política de privacidad.** El proceso debe quedar nombrado allí: qué eventos se recogen, que el término de búsqueda entra en ellos y que no se guarda ningún identificador del visitante (sección 9).
2. **Nada de texto libre sin filtro.** La experiencia dice que a los campos de búsqueda llega también lo que no debería estar ahí. La longitud está recortada; además conviene descartar todo lo que parezca una dirección de correo o un número de teléfono.
3. **Comprobar el plan.** Los eventos personalizados de Vercel Web Analytics tienen cupo según el plan. Míralo en el panel antes de implementarlo: es la misma comprobación pendiente para los Log Drains del monitoreo de bots; un KPI cuya fuente de datos no existe en el plan contratado es peor que ningún KPI.

Evaluación mensual; el resultado pasa directamente al plan editorial: las búsquedas sin resultados son propuestas de temas con demanda demostrada del propio público.

### 4.7 Lo que no hay que tocar

`htmlLimitedBots` (todas las rutas están prerrenderizadas y los metadatos ya figuran de todos modos en el `<head>` estático), `revalidate`/`dynamic` en las rutas de slug (convierte páginas estáticas en ISR), las fuentes (`next/font`, autoalojadas, con `adjustFontFallback` activo) — y el segundo `<h1>` de `state-editorial-guide.tsx`, véase el descargo en 4.4.

---

## 5. Contenido y arquitectura de la información

### 5.1 El hallazgo duro

De 50 páginas de detalle, 23 son excelentes (las guías de los estados) y el resto carece de sustancia:

- 19 páginas quedan por debajo de las 310 palabras **incluyendo** cabecera y pie de página.
- Ocho de ellas son idénticas palabra por palabra en un 73–79 % (similitud de Jaccard medida sobre shingles de 6 palabras), porque se generan a partir de `components/content/detail-page.tsx:276-306` (`getEditorialCopy`). `/comida/arepa` lleva el h3 **“Cómo llegar”**. `/articulo/ruta-perfecta-14-dias` contiene la frase “entender la ruta perfecta para descubrir venezuela en 14 dias”, porque `detail-page.tsx:282` aplica `item.name.toLowerCase()`.
- Cinco páginas tienen **cero** enlaces internos entrantes: `/ciudad/caracas`, `/animal/turpial`, `/planta/orquidea`, `/comida/arepa`, `/historia/camino-de-los-libertadores`. Causa: `lib/content.ts:330-341` (`categories`) solo lo renderiza `components/sections/category-grid.tsx`, y ese componente no aparece en ninguna parte de `app/`.
- Las 15 páginas de playa son callejones sin salida: los únicos enlaces internos salientes son el logotipo de la cabecera y el pie de página.
- 17 referencias cruzadas mantenidas en `StatePlace.href` (p. ej. `falcon.ts:87` → `/parque-nacional/medanos-de-coro`) nunca se renderizan como enlace: en `components/content/place-gallery.tsx` no aparece ni `href` ni `Link`.
- Los 24 enlaces de estado del megamenú no están en el HTML servido: `components/sections/site-header.tsx:148-155` los renderiza dentro de `<AnimatePresence>`, así que solo existen después del clic.

### 5.2 Medidas inmediatas de enlazado interno

1. **`place-gallery.tsx`**: renderizar el título del lugar como `next/link` cuando `place.href` esté definido (conservar el lightbox para la foto). 17 enlaces contextuales temáticamente perfectos desde páginas de 2500 palabras hacia páginas de 300 palabras, disponibles de inmediato.
2. **Renderizar el megamenú siempre en el DOM** y mostrarlo u ocultarlo solo con CSS/`hidden`. framer-motion puede animar sobre un contenedor montado de forma permanente. Resultado: 24 enlaces de estado rastreables en las 55 páginas.
3. Ampliar **`guide-related.tsx`** con una segunda línea “Naturaleza y cultura de Venezuela” con enlaces a las cinco páginas huérfanas: aparece entonces bajo las 23 guías.
4. **Bloque de contexto de playa** en `detail-page.tsx`: resolver el estado a partir de `item.region` y enlazar a `/estado/<slug>`, más 3–4 playas del mismo estado. Para eso `DiscoverItem` necesita un campo `stateSlug`: hoy `region` es texto libre (“Sucre y Anzoátegui”, “Dependencias Federales”) y no se puede resolver de forma determinista.
5. **“Lugares cercanos”** en `detail-page.tsx:1131` muestra `searchIndex.slice(0, 4)`: los mismos cuatro destinos en todas las páginas. El campo `nearby?: string[]` declarado para eso (`lib/content.ts:35`) no está relleno en ninguna de las 50 entradas.

### 5.3 Thin content: borrar o reemplazar

Eliminar la plantilla genérica sin sustituirla. Para las ocho páginas afectadas rige: **o contenido real (800–1200 palabras más 5–6 FAQ específicas) o desindexación.** Hasta entonces, fijar en `lib/page-factory.tsx` `robots: { index: false }` para todos los items para los que no existe ni un StateGuide ni un beachGuide ni una guía especial: exactamente esa condición ya la evalúa `detail-page.tsx:611-628`.

`/estado/distrito-capital` es un caso especial: `lib/content.ts:117-141` lista 24 entradas y `lib/states/index.ts:30-54` registra 23 guías. La página tiene 594 palabras frente a las 1755–2797 de las demás y lleva el título genérico “Distrito Capital | Descubre Venezuela”. Caracas es el destino con más búsquedas del país: crear `lib/states/data/distrito-capital.ts` siguiendo el patrón de `la-guaira.ts`. En paralelo, `/ciudad/caracas` (250 palabras, 0 enlaces entrantes) o se redirige allí con un 301 o se delimita con claridad como guía de ciudad.

### 5.4 Registro de entidades: exactamente una URL canónica por entidad real

Antes de cada página nueva hay un problema sin resolver en lo existente: los diez valores de `ContentKind` describen **formas de presentación**, no entidades, y en varios puntos la asignación no coincide con la realidad.

- `los-roques` es `kind: "playa"` (`lib/content.ts:156-157`), aunque el archipiélago es un parque nacional.
- `medanos-de-coro` es `parque-nacional` (`:166-167`) y a la vez debe seguir siendo la guía de las dunas: aquí el tipo coincide con la realidad, el doble papel solo hay que aclararlo en lo editorial.
- `cayo-sombrero` (`:189-190`) y `chichiriviche` (`:309-310`) describen **ambas** el Parque Nacional Morrocoy, que no tiene página propia. Dos URL compiten por una tercera entidad que no existe.
- Los hubs previstos `/parques-nacionales` (con Morrocoy) y `/ciudades` (con Ciudad Bolívar) se solapan con `/estado/<slug>`, que ya describe esos mismos lugares.

Mientras esto siga sin aclararse, cada página nueva produce canibalización en lugar de cobertura. La regla es: **`kind` es solo presentación y prefijo de ruta; lo canónico es la entidad.** Cada entidad real recibe exactamente una URL, cada nueva página hub o página de detalle recibe su línea **antes** de la primera línea de texto, y las duplicaciones se fusionan mediante 301 (archivo de mapeo y mecánica de redirecciones: sección de proceso).

| Entidad real | Tipo | URL canónica | Situación hoy | Decisión |
|---|---|---|---|---|
| Parque Nacional Canaima | parque nacional | `/parque-nacional/canaima` | `content.ts:146-147` | se mantiene |
| Salto Ángel | cascada en el PN Canaima | ancla de sección en `/parque-nacional/canaima` | sin línea propia, pero con imagen hero propia | sin URL propia mientras no exista un texto propio de 800 palabras |
| Parque Nacional Archipiélago Los Roques | parque nacional | `/playa/los-roques` | `kind: "playa"`, `:156-157` | la URL se mantiene (protección de lo existente), el tipo de schema pasa a ser `Park`, no `Beach` |
| Parque Nacional Médanos de Coro | parque nacional | `/parque-nacional/medanos-de-coro` | `:166-167` | se mantiene; la guía de las dunas es el mismo texto, no hay segunda página |
| Parque Nacional Morrocoy | parque nacional | `/parque-nacional/morrocoy` (nueva) | sin página | nueva; las dos páginas existentes dejan de describir el parque |
| Cayo Sombrero | cayo en el PN Morrocoy | `/playa/cayo-sombrero` | `:189-190` | se mantiene, limitar el texto al cayo, enlace al elemento padre Morrocoy |
| Chichiriviche | pueblo costero en Falcón | `/playa/chichiriviche` | `:309-310`, `kind: "playa"` | la URL se mantiene, tipo de schema `City`, texto = punto de partida en vez de retrato del parque |
| Parque Nacional Mochima | parque nacional | `/playa/mochima` | `:219-220`, `kind: "playa"` | la URL se mantiene, tipo de schema `Park` |
| Distrito Capital | equivalente a estado | `/estado/distrito-capital` | `content.ts:127`, sin guía registrada | crear la guía (5.3) |
| Caracas | ciudad | `/ciudad/caracas` **o** `/estado/distrito-capital` | `:399-400`, 250 palabras | forzar la decisión: guía de ciudad propia con volumen propio o 301 |
| Ciudad Bolívar | ciudad | ancla en `/estado/bolivar`, URL propia solo cuando tenga sustancia propia | descrita en la guía del estado | el hub `/ciudades` enlaza el ancla, no crea una segunda página |
| Pico Bolívar | montaña | `/montana/pico-bolivar` | `:176-177` | se mantiene; un futuro texto sobre la Sierra Nevada no debe repetir la cumbre |
| Región (6 ×) | región | `/estados/<region>` | `lib/states/regions.ts:10-17`; enlaces con parámetro en `components/sections/search-panel.tsx:16-18` | el hub es canónico, `?region=` se mapea mediante 301 |
| Arepa | plato | `/comida/arepa` | `:423-424` | sigue siendo entidad; `/gastronomia-venezolana` enlaza, no escribe un segundo texto sobre la arepa |

Forma legible por máquina, para que el registro no se degrade como documento:

```ts
// lib/entities.ts
export type EntityType =
  | "estado" | "region" | "ciudad" | "pueblo"
  | "parque-nacional" | "playa" | "montana"
  | "plato" | "especie" | "tema";

export type Entity = {
  /** ID estable, independiente de la URL. */
  id: string;
  name: string;
  type: EntityType;
  /** Exactamente una URL canónica, ruta sin dominio. Ancla = entidad subordinada sin página propia. */
  canonical: string;
  /** Entidad superior: cayo → parque, ciudad → estado. */
  partOf?: string;
  /** Otros nombres de la misma cosa (redacción, búsqueda interna, comprobación de alias). */
  aliases?: string[];
  /** Anotar solo si la QID se ha verificado una por una: la coincidencia de nombre no basta. */
  wikidata?: string;
};

export const entities: Entity[] = [
  { id: "pn-canaima", name: "Parque Nacional Canaima", type: "parque-nacional", canonical: "/parque-nacional/canaima", partOf: "estado-bolivar" },
  { id: "salto-angel", name: "Salto Ángel", type: "tema", canonical: "/parque-nacional/canaima#salto-angel", partOf: "pn-canaima", aliases: ["Kerepakupai Merú"] },
  { id: "pn-los-roques", name: "Parque Nacional Archipiélago Los Roques", type: "parque-nacional", canonical: "/playa/los-roques", aliases: ["Los Roques", "Gran Roque"] },
  { id: "pn-morrocoy", name: "Parque Nacional Morrocoy", type: "parque-nacional", canonical: "/parque-nacional/morrocoy", partOf: "estado-falcon" },
  { id: "cayo-sombrero", name: "Cayo Sombrero", type: "playa", canonical: "/playa/cayo-sombrero", partOf: "pn-morrocoy" },
  { id: "chichiriviche", name: "Chichiriviche", type: "pueblo", canonical: "/playa/chichiriviche", partOf: "estado-falcon" },
  // … una línea por entidad, antes de escribir la página
];

/** Dos entidades nunca deben reclamar la misma página. Las anclas sí están permitidas. */
export function duplicateCanonicals(): string[] {
  const owner = new Map<string, string>();
  const clashes: string[] = [];
  for (const entity of entities) {
    if (entity.canonical.includes("#")) continue;
    const previous = owner.get(entity.canonical);
    if (previous) clashes.push(`${entity.canonical}: ${previous} + ${entity.id}`);
    else owner.set(entity.canonical, entity.id);
  }
  return clashes;
}
```

Tres invariantes pertenecen al mismo control de compilación que ya verifica las reglas de canonical: ninguna URL canónica duplicada; cada ruta de detalle y de hub servida tiene exactamente una línea de registro; cada línea de registro apunta a una ruta que realmente se construye (comprobar las anclas contra los IDs de sección de la página destino). Una ruta sin línea de registro no entra en el sitemap.

### 5.5 Mapeo de keywords e intención antes de escribir

La lista de páginas de 5.6 está fundamentada en greps literales con cero resultados **en el propio repositorio**: eso demuestra la laguna, no la demanda. Hasta ahora solo hay volúmenes fiables para el mercado angloparlante. Antes de escribir cualquiera de esas páginas, cada una recibe una línea:

| Página destino | Query principal (es) | Volumen VE / CO / US-es / ES | Tipo de SERP | Subpreguntas cubiertas | Delimitación frente a la página existente más parecida |
|---|---|---|---|---|---|
| `/venezuela/requisitos-de-entrada` | *(por rellenar)* | *(por medir)* | ¿AI Overview? ¿Foros? ¿YouTube? | 5–8 preguntas, literales | qué página posicionaría en su lugar y por qué no debe hacerlo |

Reglas al respecto:

- **“Volumen desconocido” es una entrada admisible; “no medido”, no.** Indicar la fuente en cada línea (Keywords Explorer por país; más adelante, datos de consultas de GSC de la propia propiedad).
- El **tipo de SERP dirige el formato**, no el número de palabras: si dominan los foros, solo gana la experiencia propia con fotos propias; si domina YouTube, el texto por sí solo no basta; si encima hay un AI Overview, la respuesta directa debe estar en las primeras frases de la página y no en el resumen del final.
- **Regla de parada contra 5.4:** si una página existente ya sirve al query principal, se amplía. Ni URL nueva ni segunda línea en el registro de entidades.
- Hasta que esta tabla esté rellena, el orden de las diez páginas de abajo es una hipótesis fundamentada, no una priorización por demanda.

### 5.6 Las diez páginas nuevas más valiosas

Falta por completo el clúster práctico de planificación. Grep literal sobre `lib/states/data/`, `lib/content.ts` y `components/content/`: `visa` 0 resultados, `visado` 0, `pasaporte` 0, `vacun` 0, `fiebre amarilla` 0, `moneda` 0, `dólar` 0, `cajero` 0, `Zelle` 0, `Pago Móvil` 0, `seguro de viaje` 0, `presupuesto` 1.

| # | Página | Por qué |
|---|---|---|
| 1 | `/venezuela/es-seguro-viajar` | con diferencia, la pregunta más frecuente; hoy 0 palabras. **Atención:** roza YMYL, así que solo con fuentes primarias fechadas y diferenciación regional, o se deja fuera |
| 2 | `/venezuela/requisitos-de-entrada` | visado, pasaporte, fiebre amarilla, seguro de viaje |
| 3 | `/venezuela/dinero-y-pagos` | dólares en efectivo, bolívar, Zelle, Pago Móvil, cajeros automáticos |
| 4 | `/venezuela/presupuesto` | presupuesto diario, rangos de precios |
| 5 | hub `/parques-nacionales` + Morrocoy, Mochima, Henri Pittier, Sierra Nevada, Cueva del Guácharo | Venezuela tiene 43 parques nacionales, el sitio tiene 2 páginas |
| 6 | `/estados/<region>` × 6 | los datos ya están listos en `lib/states/regions.ts:10-17`; `search-panel.tsx:16-18` ya enlaza a `/estados?region=…`, pero `components/content/states-hub.tsx:31-36` lee el parámetro solo en el cliente: invisible para los rastreadores |
| 7 | `/mejor-epoca-para-viajar-a-venezuela` | la materia prima está en 14 de las 23 guías (`grep -ril "temporada" lib/states/data/`) y debe agregarse en una página de ámbito nacional |
| 8 | hub `/gastronomia-venezolana` + pabellón criollo, hallaca, cachapa, tequeños, arepa nueva | “comida típica de Venezuela” es pregunta central en búsqueda y en IA |
| 9 | `/itinerarios` + rutas reales de 7/10/14 días | `/articulo/ruta-perfecta-14-dias` ya lo promete y no entrega nada |
| 10 | hub `/ciudades` + Maracaibo, Mérida, Valencia, Barquisimeto, Ciudad Bolívar | cada ciudad ya está descrita en la guía del estado: el hub enlaza anclas hasta que una ciudad tenga sustancia propia (5.4) |

Cada hub necesita JSON-LD `CollectionPage`+`ItemList` siguiendo el modelo de `app/estados/page.tsx:48-64` y 300–600 palabras de texto introductorio propio; si no, solo nace otra lista de enlaces.

**Advertencia sobre el ritmo:** no todo a la vez. Con unas 55 páginas, el sitio está muy por debajo de cualquier umbral de scaled content; lo peligroso no es el volumen, sino el volumen con una uniformidad que no cambia. 2–4 publicaciones sustanciales al mes, no 40 páginas en una semana.

### 5.7 Una imagen = una entidad

Las imágenes duplicadas no son un asunto de estética ni de tamaño de archivo, sino afirmaciones falsas en lo existente. `lib/content.ts:41-74` incrusta varios motivos más de una vez y, además, de forma incorrecta:

- `morrocoy: "/images/playa-el-agua.jpg"`: una playa de Margarita representa a Morrocoy y, a través de la misma clave, sirve de imagen de tarjeta para **Anzoátegui** (`:119`), **Carabobo** (`:124`) y **Yaracuy** (`:140`). Junto con `margarita` (`:134`, `:136`) y `playaElAgua` (`:204`), el mismo archivo sirve seis lugares distintos.
- `orchid: "/images/delta-orinoco.jpg"`: un paisaje fluvial ilustra `/planta/orquidea` (`:420`).
- `culture` = `history` = `avila` = `caracas-avila.jpg`: ocho usos: slide del hero (`:107`), imagen de tarjeta para Distrito Capital, Miranda y La Guaira (`:127`, `:132`, `:139`), galería (`:349`), `/articulo/cultura-viva` (`:377`), `/ciudad/caracas` (`:404`), `/historia/camino-de-los-libertadores` (`:436`).

Un texto `alt` incorrecto es un error factual y, con ello, un problema de E-E-A-T; en una imagen CC es además una atribución falsa; en Discover es una promesa de tarjeta incumplida, porque la imagen es el verdadero detonante del clic; en Google Images es material de deduplicación. Además contradice la regla vigente del proyecto de no usar nunca la misma fotografía dos veces.

**Regla:** una imagen = una entidad. Sustituir las asignaciones afectadas por motivos reales; donde no haya disponible un motivo correcto con licencia acreditada, la sección se sirve **sin imagen**. Una imagen que falta es un problema de maquetación; una imagen equivocada, un problema de credibilidad.

**Los textos alt son un canal propio y hoy no llegan a ninguna parte.** `alt` figura en la lista de atributos que se reemplazan en el cliente (`components/i18n/content-translator.tsx:74`, junto con `aria-label`, `placeholder`, `title`). La traducción ocurre, pues, solo en el navegador: para el índice de Google Images el sitio existe únicamente en español, y eso con independencia de cuántos idiomas ofrezca el conmutador.

En la reestructuración, reescribir los textos editorialmente en vez de derivarlos mecánicamente del nombre del archivo: **motivo + lugar + estado**, una frase, sin “Foto de”, sin acumular keywords. En cuanto `/en` exista como ruta propia, `alt` debe llegar desde el servidor por idioma:

```ts
// lib/states/types.ts
export type Locale = "es" | "en" | "de" | "fr" | "zh";

export type StatePhoto = {
  /** Ruta local (`/images/...`) o URL ya usada en el proyecto (Wikimedia Commons). */
  src: string;
  /** Español, siempre presente: motivo + lugar + estado. */
  alt: string;
  /** Traducciones revisadas; sin entrada se sirve el texto en español. */
  altByLocale?: Partial<Record<Exclude<Locale, "es">, string>>;
  /** `object-position` para el recorte; por defecto "center". */
  position?: string;
};

export const photoAlt = (photo: StatePhoto, locale: Locale): string =>
  (locale !== "es" && photo.altByLocale?.[locale]) || photo.alt;
```

En el mismo commit, eliminar `"alt"` de `translatedAttributes` (`content-translator.tsx:74`): de lo contrario, el cliente vuelve a sobrescribir el texto correcto del servidor. Esa misma fuente de datos alimentará más adelante la `figcaption` visible con autoría y licencia, por lo que los créditos de imagen y la nueva redacción de los textos alt son un solo trabajo.

### 5.8 YMYL afecta al contenido ya existente, no solo a una página planificada

No solo `/venezuela/es-seguro-viajar` es delicada. `access.routes` es un campo obligatorio del modelo de guía (`lib/states/types.ts:146-151`): con ello **las 23 guías** contienen «Cómo llegar» con datos de transporte, de acceso y en parte de fronteras sobre un país con una situación volátil. Lo que falta no es prudencia en el tono, sino una fecha por bloque de datos: `updatedAt` a nivel de página (5.9) no dice nada sobre cuándo se verificó por última vez una conexión aérea concreta.

```ts
// lib/states/types.ts
export type Volatility = "high" | "low";

export type VerifiedBlock = {
  /** Fecha ISO de la última verificación de este bloque, no de la página. */
  verifiedAt: string;
  /** "high" = acceso, fronteras, precios, horarios. "low" = geografía, historia, cultura. */
  volatility: Volatility;
  /** Fuentes oficiales en las que se apoya el bloque. */
  sources?: Array<{ label: string; href: string }>;
};

/** 07 — CÓMO LLEGAR */
access: {
  description: string;
  intro?: string;
  routes: StateRoute[];
} & VerifiedBlock;

/** 08 — CONSEJOS PARA VIAJEROS */
tips: {
  description: string;
  items: StateTip[];
} & VerifiedBlock;
```

Bloque de cabecera visible en cada sección práctica, como componente de servidor:

```tsx
// components/content/verified-note.tsx
import type { VerifiedBlock } from "@/lib/states/types";

const dateFormat = new Intl.DateTimeFormat("es-VE", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function VerifiedNote({ verifiedAt, volatility, sources }: VerifiedBlock) {
  return (
    <p className="mt-6 text-sm leading-6 text-[#5c6b60]">
      Datos verificados el{" "}
      <time dateTime={verifiedAt}>{dateFormat.format(new Date(`${verifiedAt}T12:00:00Z`))}</time>
      {volatility === "high" && " · La situación puede cambiar sin aviso"}
      {" · Consulta siempre las recomendaciones oficiales de tu país"}
      {sources?.length ? (
        <>
          {" · "}
          {sources.map((source, index) => (
            <span key={source.href}>
              {index > 0 && ", "}
              <a href={source.href} rel="nofollow noopener" target="_blank" className="underline underline-offset-2">
                {source.label}
              </a>
            </span>
          ))}
        </>
      ) : null}
    </p>
  );
}
```

`timeZone: "UTC"` no es un detalle: sin fijarla, el entorno formatea según la zona horaria local, y una fecha de verificación desviada en un día es exactamente el tipo de error que este bloque debe evitar.

Reglas que se derivan:

- **Obligación de actualizar solo para `volatility: "high"`.** La geografía y la historia no se «verifican» cada trimestre solo porque haya una fecha al lado.
- **Ningún precio sin fecha y moneda.** Comprobado: hoy ninguna de las 23 guías contiene un precio (`grep -rnoE 'US\$ ?[0-9]+|\$[0-9]+|[0-9]+ ?(dólares|bolívares|USD)' lib/states/data/` → 0 resultados). La regla es preventiva y rige desde la primera cifra: importe, moneda, fecha del dato, fuente. Con la inflación venezolana, cualquier dato sin fecha es falso en cuestión de semanas, y `/venezuela/dinero-y-pagos` y `/venezuela/presupuesto` se componen casi por completo de datos de ese tipo.
- **Sin `verifiedAt`, `volatility` y el aviso visible, estas dos páginas no salen a producción.** No es un criterio SEO, sino la condición para publicarlas de forma responsable.
- Los textos fijos «Datos verificados el», «Consulta siempre las recomendaciones oficiales de tu país» y los nombres de los meses en español tienen que entrar **antes** de la próxima ejecución de traducción en el bloque `manual` de `content-translator.tsx`: la misma trampa que con la byline en 5.9.

Quién responde por los datos, con qué método se verifican y cómo se señalan las correcciones no cabe en un párrafo de `/sobre-nosotros`, sino en una política propia y enlazada de redacción, correcciones e identificación de contenidos de IA; esa política alimenta a la vez `Organization.publishingPrinciples` y `correctionsPolicy` → sección 9.

### 5.9 Componentes de E-E-A-T

En el repositorio no existe ningún `author`, ningún `datePublished`, ningún `dateModified`. Para contenido de viajes en 2026 esta es la carencia individual más cara: la guía de Google del 15/05/2026 contrapone explícitamente la experiencia de primera mano a los resúmenes de conocimiento disponible de forma general.

**Página de autora** `app/autora/page.tsx` (o ampliar `/sobre-nosotros`):

```json
{ "@type": "Person", "@id": "https://mrsvenezuela.com/#autora",
  "name": "Michell Naranjo",
  "url": "https://mrsvenezuela.com/autora",
  "knowsAbout": ["Venezuela", "turismo en Venezuela", "Canaima", "Los Roques"],
  "sameAs": ["https://www.instagram.com/mrsvenezuela_1/"] }
```

El nombre ya figura en el diccionario `manual` de `components/i18n/content-translator.tsx:12-18`: una identidad real que en el plano SEO queda completamente sin aprovechar.

**Byline visible** en `components/content/state-editorial-guide.tsx` (bloque de introducción, ~línea 248):

```tsx
<p className="mt-3 text-sm text-[#5c6b60]">
  Por <a href="/autora">Michell Naranjo</a> · Actualizado el{" "}
  <time dateTime={guide.updatedAt}>
    {new Date(guide.updatedAt).toLocaleDateString("es-VE", { day: "numeric", month: "long", year: "numeric" })}
  </time>
</p>
```

`guide.updatedAt` todavía no existe: en todo el repositorio no se encuentra ni una sola aparición. El campo hay que crearlo junto con la byline (`updatedAt: string` en `StateGuideData`, fecha ISO), y es la misma fuente que alimenta `dateModified` en el JSON-LD y `lastmod` en el sitemap. Tres puntos de salida, un solo campo: fechas que se separan entre sí son peores que ninguna fecha.

**Trampa:** la cadena de la fecha pasa por `content-translator.tsx`. «Actualizado el», «Por» y los nombres de los meses deben entrar antes como entradas en el bloque `manual`; si no, ocurre lo mismo que con «Menú» → «Menü» → «Speisekarte» (documentado en el propio código, líneas 19-25). Antes de cada ejecución del script, crear un snapshot de `lib/site-translations.json`.

**`components/institutional/about-page-content.tsx`** hoy es puramente atmosférica. Hay que añadir: quién escribe, vínculo con Venezuela, metodología de investigación, fuentes, ritmo de actualización, y una indicación honesta sobre el apoyo de la IA. En su documentación sobre IA generativa, Google recomienda expresamente "sharing information about how a piece of content was created" (compartir información sobre cómo se creó una pieza de contenido). Como los textos pasan por `lib/institutional-i18n.ts`, los bloques deben mantenerse en los cinco idiomas.

**Las fotos originales** son la mayor carencia de E-E-A-T: `next.config.ts:4-15` permite exclusivamente hosts de Wikimedia. Punto de partida pragmático sin presupuesto de viaje: fotos propias hechas con el móvil, archivos familiares o de la diáspora con permiso documentado, envíos de lectores con mención del nombre. Una sola foto original por guía cambia el carácter de la página. Llevar un campo `ownPhoto: true` para poder medir el avance.

### 5.10 Plan editorial: ritmo trimestral más antelación estacional

Ritmo trimestral, pero **solo con ganancia real de información**. Los refrescos de fecha sin cambio de contenido se detectan y actúan en contra del sitio.

- Cada 90 días: mirar las páginas que más caen en GSC y reelaborar tres a cinco de forma sustancial.
- Cuenta como actualización real: precios nuevos, cambios en las condiciones de acceso, fotos nuevas, datos corregidos, nuevas subpreguntas.
- No cuenta: reformulaciones, el año en el título, actualizar el copyright.
- Subir `updatedAt` solo con cambios reales → lastmod sigue siendo fiable, IndexNow envía solo cambios reales.
- Ventana de frescura de Discover (*probable*, a partir de análisis del sector): días 1–7 impulso máximo, 8–14 moderado, 15–30 limitado. Las 23 guías salieron todas a la vez con el commit `e76e4d1`: sin material nuevo se caen de la ventana en bloque. De 2 a 4 publicaciones al mes.

**La parte reactiva no basta.** «Reelaborar cada 90 días las páginas que caen» no tiene antelación, pero la demanda de viajes sí la tiene. Para un sitio sin motivo noticioso, el calendario estacional es el único disparador **planificable** de Discover. Dos reglas:

1. Publicar **8–12 semanas antes** de la ventana, no dentro de ella.
2. Subir el `updatedAt` de las páginas estacionales **antes** de la temporada, no a mitad de ella: en plena temporada el tráfico ya está repartido.

La particularidad venezolana que ningún calendario de viajes genérico recoge: la temporada seca de dic–abr es la recomendación para la Gran Sabana y Los Roques, **pero el Salto Ángel lleva más agua en la temporada de lluvias, de jun–nov**. Es una de las preguntas más frecuentes que existen y una palanca de timing propia, porque contradice la respuesta estándar.

| Ventana | Periodo | Publicación / `updatedAt` | Páginas | Materia prima en el contenido existente |
|---|---|---|---|---|
| Temporada seca Gran Sabana, Los Roques | Dic–Abr | Sep–Oct | `/mejor-epoca-para-viajar-a-venezuela`, `/estado/bolivar`, `/playa/los-roques` | «temporada» en 14 de las 23 guías |
| Salto Ángel con el caudal máximo | Jun–Nov | Mar–Abr | `/parque-nacional/canaima`, `/estado/bolivar` | guías existentes, falta la afirmación |
| Carnaval (móvil, feb/mar) | verificar cada año | Nov–Dic | guías de estado, `/itinerarios` | `Carnaval` en 8 guías, entre otras `bolivar.ts` (El Callao) |
| Semana Santa (móvil, mar/abr) | verificar cada año | Dic–Ene | guías de estado, `/itinerarios` | `Semana Santa` en 6 guías |
| Diablos Danzantes (Corpus Christi, móvil) | verificar cada año | ~3 meses antes | `/estado/miranda`, `/estado/aragua`, `/estado/carabobo`, `/estado/cojedes`, `/estado/la-guaira` | documentado exactamente en esas 5 guías |
| Feria de la Chinita | Noviembre, Zulia | Ago–Sep | `/estado/zulia` | solo en `zulia.ts` |
| Hallacas y cocina de diciembre | Diciembre | Sep–Oct | `/gastronomia-venezolana`, `/comida/hallaca` | `hallaca` solo en `tachira.ts` |

El Carnaval, la Semana Santa y el Corpus Christi son fiestas móviles: la fecha concreta se verifica año por año y no se arrastra desde el año anterior. El patrón de la tabla muestra al mismo tiempo la laguna de contenido: la materia prima cultural está dispersa en guías de estados sueltas, no hay ninguna página de ámbito nacional que la reúna.

**Limitación respecto a lo que cabe esperar de Discover:** la primera actualización core exclusiva de Discover (05–27/02/2026) se desplegó al principio solo para usuarios de habla inglesa en Estados Unidos; la ampliación está anunciada, pero sin fecha. Para un sitio en español, el impacto queda por tanto abierto. Aun así, la antelación estacional merece la pena: al margen de eso, rinde en la búsqueda y en Pinterest.

**Tercera fuente junto a GSC y el calendario: el propio buscador interno.** Las búsquedas sin resultados de los visitantes son la investigación de contenidos más barata y más honesta que existe, porque miden una demanda que el sitio ahora mismo no atiende. La recogida de datos (`track("search", { q, results })` mediante `@vercel/analytics`, ya instalado, normalización de los términos, mención en la política de privacidad) está en la sección 4; en lo editorial rige: **evaluación mensual, y los términos sin resultados más frecuentes pasan como filas al mapeo de palabras clave de 5.5**, ya sea como página nueva con su fila de registro o como ampliación de una página existente. Así el plan editorial tiene tres entradas —rankings que caen (reactiva), calendario estacional (planificable), búsquedas sin resultados (demanda)— en lugar de una sola.

---

## 6. Multilingüismo

### Estado actual

`components/i18n/language-provider.tsx:15` arranca siempre con `"es"` y no lee el idioma de localStorage hasta un `useEffect` (`:18`). Al cambiar de idioma, este se escribe por duplicado: localStorage `descubre-venezuela-language` (`:26`) **y** cookie `mrs-venezuela-language` (`:27`). El nombre de la cookie aparece exactamente una vez en todo el repositorio — no se lee en ningún sitio. Después, `components/i18n/content-translator.tsx` sustituye nodos de texto del DOM y exactamente cuatro atributos (`translatedAttributes` = `alt`, `aria-label`, `placeholder`, `title`, `:74`). `<title>`, `<meta name="description">` y el JSON-LD quedan intactos, porque `translateTree` arranca en `document.body` (`:123`). `<html lang="es">` está fijo en `app/layout.tsx:66` y solo se sobrescribe en el cliente.

Hay exactamente una URL por contenido, ningún segmento `[lang]`, ningún `middleware.ts`. `alternates` aparece en cinco sitios (`app/layout.tsx:32`, `app/estados/page.tsx:34`, `app/contacto/page.tsx:16`, `app/sobre-nosotros/page.tsx:16`, `lib/page-factory.tsx:29`) — sin excepción como `canonical`, ni un solo `languages`.

Consecuencia: **Googlebot rastrea sin localStorage. GPTBot, ClaudeBot, PerplexityBot y OAI-SearchBot no ejecutan JavaScript en absoluto** (Vercel/MERJ sobre más de 500 millones de fetches: ClaudeBot carga JS en el 23,84 % de las peticiones y no lo ejecuta nunca). Para todos los rastreadores, mrsvenezuela.com existe únicamente en español. EN, DE, FR y ZH generan cero visibilidad orgánica y los sistemas de IA nunca los citan en el idioma de destino. Esa no-visibilidad se paga igualmente — con el catálogo de idiomas en el chunk de layout de cada ruta, que carga también cada visitante hispanohablante (cifrado en la sección 4).

El doble acceso a almacenamiento es a la vez un asunto pendiente de la unificación de la marca (Roadmap 16): la clave de localStorage y la cookie llevan nombres **distintos**. Quien renombre solo uno de los dos deja la preferencia de idioma de todos los visitantes existentes reseteada a español. Hay que tocar ambos en un solo paso, con ruta de migración (Fase 1). Como ajuste iniciado por la persona usuaria, el acceso es defendible como exento de consentimiento según el § 25 TDDDG (ley alemana de protección de datos en telecomunicaciones y medios digitales), pero debe documentarse — con el nombre realmente utilizado, en la sección 9.

### Recomendación

**Fase 1 de inmediato, Fase 2 tras evaluación, Fase 3 por ahora no.**

#### Fase 1 — división del catálogo y limpieza del script (P1, independiente de cualquier decisión de routing)

Esto actúa sobre el 100 % de los visitantes y es requisito previo de todo lo demás:

- Catálogo por idioma en un archivo propio, con carga dinámica (código en la sección 4).
- `scripts/generate-site-translations.mjs:30` escanea `lib/` por completo — también, por tanto, `lib/i18n.ts`, cuyos bloques en otros idiomas están en `:190`, `:364`, `:538`, `:712`. Consecuencia: traducciones en cadena. Prueba en el catálogo: `"Icônes et coins tranquilles"` → de `"Ikonen und stille Münzen"` (el fr. «coins» = rincones, traducido como el ing. «coins» = monedas). Excluir `lib/i18n.ts` de la lista de archivos.
- `looksLikeCopy` (`:9-16`) solo comprueba el comienzo de las cadenas — 141 cadenas de clases de Tailwind están en el catálogo como claves de traducción (`"container-page py-16"`, `"absolute inset-0"`, `"object-cover transition duration-500 ease-out group-hover:scale-[1.02]"`). Cambiar a comprobación en positivo y limpiar el catálogo una vez.
- Generar una lista de bloqueo de nombres propios a partir de todos los campos `name` de `lib/content.ts` y de todos los valores `capital` de `lib/states/regions.ts`. Daños documentados: `"Isla de Coche"` → en `"Coche Island"`, `"Laguna de Canaima"` → de `"Canaima-Lagune"`, `"Ciudad Bolivar"` → `"Ciudad Bolívar"`. Hoy solo hay cinco nombres protegidos (`content-translator.tsx:12-18`).
- Añadir un retorno anticipado cuando `language === "es"`.

**Unificar los nombres de almacenamiento sin perder a los visitantes existentes.** Un nombre, un lugar, un paso de migración en la primera lectura:

```tsx
// components/i18n/language-provider.tsx
const STORAGE_KEY = "mrs-venezuela-language";
const LEGACY_KEY = "descubre-venezuela-language";

useEffect(() => {
  const legacy = window.localStorage.getItem(LEGACY_KEY);
  if (legacy && !window.localStorage.getItem(STORAGE_KEY)) {
    window.localStorage.setItem(STORAGE_KEY, legacy);
    window.localStorage.removeItem(LEGACY_KEY);
  }
  const saved = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
  if (saved && saved in translations) setLanguageState(saved);
}, []);
```

La cookie de `:27` recibe ese mismo nombre — o desaparece sin sustituto. Conservarla solo compensa si más adelante la lee un middleware (Fase 2); en ese caso, esa línea lleva un comentario que diga exactamente eso. Una cookie que nadie lee hay que declararla igualmente en la política de privacidad, y por tanto es pura carga.

**Selección de idioma por el nombre del idioma, no por banderas.** `components/sections/language-switcher.tsx:11-15` incrusta `public/flags/{es,de,en,fr,zh}.png`. Al menos las banderas ya están marcadas como decorativas (`aria-hidden="true"`, `alt=""`) y el nombre del idioma va al lado (`option.label`, `:90`) — el caso del lector de pantalla queda limpio. Queda el problema visual: `es.png` es la bandera **de España** en un sitio sobre Venezuela, `en.png` es la Union Jack, mientras todo el argumento de mercado de más abajo apunta al mercado estadounidense. Las banderas son Estados, no idiomas. Quitar las imágenes, poner el endónimo como etiqueta primaria (`Español`, `Deutsch`, `English`, `Français`, `中文`) y el exónimo español de `lib/i18n.ts:2-6` (`"Alemán"`, `"Inglés"`) como mucho en una línea secundaria. De paso, ahorra cinco peticiones de imagen en la cabecera.

#### Fase 2 — solo inglés, solo las páginas más importantes (P2, tras evaluar la Fase 1)

Datos de mercado (Ahrefs, consultados el 25/08/2026): `mount roraima` 10000/mes en EE. UU. (KD 11), `los roques` 6000/mes en EE. UU. (KD 0), `angel falls venezuela` 3600/mes en EE. UU. (KD 36), `venezuela beaches` 3100/mes en EE. UU. (KD 0), `canaima national park` 1800/mes en EE. UU. (KD 0). Frente a eso, DE: `venezuela urlaub` 800/mes, `venezuela sehenswürdigkeiten` 250/mes. FR: `los roques` 800/mes, `voyage venezuela` 150/mes.

El inglés es 10–20× mayor que DE y FR juntos, con una keyword difficulty de 0 a 36. Por eso: introducir `app/[lang]/`, pero **solo `/en` y solo de 8 a 12 URLs** — portada, `/en/estados`, `/en/playas` más las guías de Canaima/Salto Ángel, Los Roques, Roraima/Gran Sabana, Mérida/Pico Bolívar y Médanos de Coro.

La parte cara no es el código, sino el texto: ~54500 palabras × 4 idiomas = ~218000 palabras que habría que traducir automáticamente y luego revisar editorialmente. Desplegar cuatro idiomas completos generaría 212 páginas pobres y en parte erróneas — en temas de viajes, un riesgo de calidad, no una ganancia.

**Regla de publicación estricta — no negociable.** La traducción automática sin revisar es un ejemplo explícito de «scaled content abuse» (abuso de contenido a escala) en las políticas de spam de Google; la sanción no alcanza a la página concreta, sino al dominio. De ahí se sigue, para cada URL `/en`:

- Ninguna URL `/en` sale a producción sin revisión de una persona nativa. Ninguna excepción, ningún «provisional», ningún aparcamiento en `noindex`.
- Cada traducción aprobada lleva su propia entrada `reviewedBy` en el modelo de datos (nombre de la persona revisora, fecha) — la misma estructura que la sección 3 prevé para `author`/`reviewedBy` en el nodo `Article`. Sin esa entrada, la ruta no se renderiza.
- El despliegue lo limita la capacidad de revisión, no la capacidad de traducción. **Mejor 6 URLs revisadas que 12 en bruto.** La cifra objetivo de 8–12 es un tope, no una meta.

**Metadatos y textos alt en el servidor, por idioma.** Ampliar `generateMetadataFor` (`lib/page-factory.tsx:15-47`) con el parámetro `lang`, y derivar de ahí `openGraph.locale` (`en_US` en lugar de `es_VE`, `:38`) e `inLanguage`. Lo mismo con los textos de las imágenes: hoy `alt` pasa por `content-translator.tsx:74`, es decir, puramente en el cliente — para Google Imágenes el sitio existe únicamente en español. Con `/en`, `alt` y el pie de foto tienen que venir de la misma fuente renderizada en el servidor que el texto corrido, no del traductor en tiempo de ejecución. Por eso la reescritura editorial de los textos alt (motivo + lugar + estado) va en el mismo bloque de trabajo que la reestructuración de `figcaption` de la sección 3 — si no, se hace dos veces.

**hreflang solo entonces.** Mientras no haya URLs localizadas, hreflang no está «ya preparado», sino formalmente inválido: cinco entradas de `alternates.languages` que apuntan todas a la misma URL declaran cinco versiones idiomáticas de un documento que solo existe en un idioma. Google descarta esas anotaciones por no recíprocas. Primero rutas, después hreflang:

```ts
alternates: {
  canonical: `/en${path}`,
  languages: {
    "es": path,
    "en": `/en${path}`,
    "x-default": path,
  },
},
```

Además, `alternates.languages` por entrada en `app/sitemap.ts` — el tipo `SitemapFile` lo admite, las localizations están disponibles desde Next 14.2.0 y por tanto están garantizadas en 15.5.20:

```ts
// app/sitemap.ts — solo para rutas que existan realmente en ambos idiomas
{
  url: absoluteUrl(path),
  lastModified: item.updatedAt,
  alternates: {
    languages: {
      es: absoluteUrl(path),
      en: absoluteUrl(`/en${path}`),
    },
  },
}
```

El conmutador de idioma (`components/sections/language-switcher.tsx:67-96`) hay que reconstruirlo de `<button onClick>` a `<Link href={…} hrefLang={…}>` — hoy no genera ni un solo enlace rastreable, y la anotación hreflang en el `<head>` sin enlace en el body es una señal sin camino.

Detalle sobre los códigos de idioma: `lib/i18n.ts:6` define `"zh"`, el script traduce contra `"zh-CN"` (`generate-site-translations.mjs:6`) y lo mapea de vuelta. Para hreflang y `<html lang>` hay que usar `zh-Hans`, no `zh` — si no, el chino simplificado y el tradicional compiten por la misma anotación. `x-default`, siempre a la variante española.

#### Fase 3 — DE, FR, ZH: por ahora no

Con 150–800 búsquedas al mes, el esfuerzo no se justifica por el rendimiento. ZH hay que aplazarlo además por otro motivo: Google apenas cuenta en China, y el chino automático con nombres propios es lo más difícil de controlar (el catálogo ya entrega `Arepa` → `Arepa 玉米饼` como forma híbrida). Mientras no esté asegurada la capacidad de revisión para `/en`, cada idioma adicional es solo una posibilidad más de romper la regla de publicación.

#### Redirección por Accept-Language basada en middleware

No sirve como solución única: no genera URLs indexables, de todos modos no alcanza a Googlebot (rastrea desde EE. UU. sin cabecera Accept-Language) y trae el riesgo de encerrar a la persona usuaria en una variante. Si acaso, *después* de la Fase 2, como pura capa de comodidad con 302 y sin redirección para los user agents de bots. Solo ese caso le da un lector a la cookie de `language-provider.tsx:27` — antes no.

#### Arreglo inmediato sin reestructuración del routing

`components/sections/search-overlay.tsx:58` construye el haystack a partir de `item.name`, `item.kicker`, `item.description`, `item.region` — todos en español — más el nombre de tipo localizado de `localizedKinds` (`:19-25`). El nombre de tipo llega más lejos de lo que uno espera: «Strand» (playa, en alemán) sí encuentra las 15 páginas de playa, porque `de.playa = "Strand"` está en el haystack. Por debajo del nivel de tipo se rompe. Los nombres propios y las descripciones siguen en español, así que «Wasserfall» (cascada), «Hochland» (altiplano), «waterfall» o «white sand» dan cero resultados, aunque la persona usuaria tenga delante una interfaz completamente traducida — la búsqueda es el único punto en el que la capa de traducción deja de funcionar de forma visible. Incorporar al haystack los valores del catálogo para `item.name` e `item.description` en el idioma activo; `language` ya está disponible en `:46`. No cuesta nada en routing y corrige la rotura más llamativa de la solución actual.

### Qué aporta esto de forma realista

La Fase 1 no aporta **ninguna keyword**. Aporta velocidad de carga para el 100 % de los visitantes y elimina errores que hoy se entregan en cuatro idiomas. Es la parte segura y la única con un resultado del todo calculable.

La Fase 2 es una apuesta por entre seis y doce páginas, no una apertura de mercado. Una keyword difficulty de 0 no significa ranking en la semana uno — significa solo que los primeros puestos soportan pocos enlaces; la antigüedad, la autoridad temática y el enlazado interno siguen decidiendo, y ambas cosas se construyen a lo largo de trimestres, no de semanas. La expectativa realista para los dos primeros trimestres tras el despliegue de `/en` está en entradas de long tail (`how to get to los roques`, `angel falls best time to visit`), en un rango de clics mensuales de dos cifras a tres cifras bajas, no en los volúmenes de cabecera de la tabla. Los head terms son el objetivo para el mes 12 en adelante, si las páginas se sostienen.

La segunda palanca, peor medible, es el GEO: las respuestas de IA se componen mayoritariamente de material en inglés, y una fuente en español se cita con menos frecuencia para una pregunta en inglés — ser citable es el verdadero motivo de `/en`, no el volumen de búsqueda. De las fuentes disponibles no se puede derivar una cifra para eso.

Frente a eso hay un riesgo asimétrico: el rendimiento de `/en` está limitado a las páginas `/en`; el daño de una traducción detectada como escalada, no. Por eso el orden no es negociable — la Fase 1 completa, después seis páginas en inglés revisadas, después medir. Hasta entonces, la palanca de tráfico mayor y más segura sigue siendo la ampliación en español de la sección 5: el mismo esfuerzo editorial, ningún riesgo de traducción y un mercado en el que el sitio ya está en casa por contenido.

---

## 7. Visibilidad en respuestas de IA (GEO)

### 7.1 Lo que está documentado

**Google no exige archivos propios ni marcado propio para la búsqueda con IA.** La guía de optimización del 15/05/2026 dice textualmente: «You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities)» (no hace falta crear nuevos archivos legibles por máquina, archivos de texto para IA, marcado ni Markdown para aparecer en Google Search, incluidas sus capacidades de IA generativa) y «Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add.» (los datos estructurados no son necesarios para la búsqueda con IA generativa y no hay ningún marcado especial de schema.org que debas añadir). También textualmente: «There's no requirement to break your content into tiny pieces.» (no existe la obligación de trocear tu contenido en piezas mínimas). Y como frase marco por encima de todo: «optimizing for generative AI search is optimizing for the search experience, and thus still SEO.» (optimizar para la búsqueda con IA generativa es optimizar la experiencia de búsqueda y, por tanto, sigue siendo SEO). Estas cuatro frases son la columna vertebral de este capítulo: eliminan toda medida que se venda como «trato especial para la IA» y dejan exactamente lo que las secciones 2 a 5 ya exigen de por sí. La cuarta frase documentada se refiere al off-site: «Seeking inauthentic 'mentions' across the web isn't as helpful as it might seem» (buscar «menciones» poco auténticas por la web no ayuda tanto como podría parecer), la posición contraria a cualquier paquete de menciones que pudiera aparecer en la sección 8.

**El HTML servido desde el servidor es el límite infranqueable.** Ningún rastreador de IA relevante ejecuta JavaScript (Vercel/MERJ sobre >500 millones de fetches; las tasas de carga como «ClaudeBot carga JS en el 23,84 %» son cifras secundarias; la afirmación central —cero ejecución— está documentada de forma consistente). Para este repositorio, en las guías eso no es crítico: `app/estado/[slug]/page.tsx` está prerrenderizado mediante `generateStaticParams`, y `components/content/state-editorial-guide.tsx` lleva `"use client"`, pero se renderiza por completo en el HTML. Crítico es todo lo que solo nace *después* de la hidratación: la traducción del DOM en `components/i18n/content-translator.tsx`, la lista de resultados en `components/sections/search-overlay.tsx` y los estados del megamenú. Para cualquier motor de respuestas de IA, mrsvenezuela.com existe únicamente en español (sección 6).

**El entrenamiento y el retrieval están desacoplados.** GPTBot = entrenamiento, OAI-SearchBot = citas en ChatGPT Search. ClaudeBot = entrenamiento, Claude-SearchBot = búsqueda. Quien bloquea todo en bloque no impide el entrenamiento (que también circula por CCBot y por conjuntos de datos de terceros), sino solo la cita.

**Quién respeta robots.txt — con precisión, porque en el borrador estaba demasiado burdo:** GPTBot y OAI-SearchBot cumplen robots.txt. **Los fetches iniciados por el usuario solo ignoran robots.txt en OpenAI y Perplexity**: OpenAI documenta para ChatGPT-User «Because these actions are initiated by a user, robots.txt rules may not apply» (como estas acciones las inicia un usuario, es posible que las reglas de robots.txt no apliquen), y Perplexity para Perplexity-User «Since a user requested the fetch, this fetcher generally ignores robots.txt rules.» (dado que un usuario ha solicitado la descarga, este fetcher por lo general ignora las reglas de robots.txt). **Los tres rastreadores de Anthropic —ClaudeBot, Claude-User, Claude-SearchBot— respetan robots.txt**, también Claude-User, que lo activa el usuario. La frase genérica «los fetches iniciados por el usuario ignoran robots.txt» es falsa y no puede figurar así en ninguna parte del plan. **Google-Extended y Applebot-Extended son meros tokens de control**: «Google-Extended doesn't have a separate HTTP request user agent string … the robots.txt user-agent token is used in a control capacity.» (Google-Extended no tiene una cadena de user agent propia en la petición HTTP…; el token de user-agent de robots.txt se usa a modo de control). Ellos mismos no rastrean nada, solo controlan las apps de Gemini y Vertex AI, y tanto AI Overviews como AI Mode funcionan a través de Googlebot: «There are no additional requirements to appear in AI Overviews or AI Mode.» (no hay requisitos adicionales para aparecer en AI Overviews o en AI Mode).

El `app/robots.ts` actual contiene exactamente una regla (`userAgent: "*"`, `allow: "/"`). Para GEO no hay nada que reparar ahí; la diferenciación por grupos es una cuestión de la sección 2, no un requisito previo para la citabilidad.

**Bing es la capa de retrieval de Copilot** y sigue alimentando ChatGPT Search. Sin índice en Bing eres invisible para ambos, con independencia del posicionamiento en Google.

**El único estudio de GEO con revisión por pares** (Princeton/IIT Delhi, KDD 2024, GEO-Bench, ~10000 consultas) mide una ganancia de visibilidad del 22–41 %. Los métodos individuales más potentes: **citas de fuentes autorizadas** (+41 % de Position-Adjusted Word Count) y **añadir estadísticas relevantes**. El «+40 %» que tanto se cita es un valor máximo, no una media. Las cifras no son verificables en fuente primaria y quedan marcadas como orden de magnitud.

**Viajes y hostelería tiene la mayor tasa de citas de todos los sectores** (~23 %, Similarweb, mayo de 2026; media intersectorial del 6,8 %) — fuente secundaria, útil como indicio de dirección, no como valor objetivo.

**Los rich results de FAQ están desactivados desde el 07/05/2026**, la documentación se retiró el 15/06/2026; el fin del soporte de la API en agosto de 2026 procede de la prensa sectorial. FAQPage sigue siendo vocabulario válido y no perjudica, siempre que las preguntas estén visibles en la página.

**llms.txt está prácticamente muerto.** John Mueller, el 02/06/2026: «purely speculative for now» (pura especulación por ahora); el archivo existe desde hace años, «yet none of the AI systems use it» (y ningún sistema de IA lo usa). Gary Illyes ya había confirmado antes que Google no lo admite ni tiene previsto hacerlo. **Novedad y expresamente solo como punto de observación:** Mueller menciona como alternativa con «clear goals & processes» (objetivos y procesos claros) **WebMCP**, un protocolo respaldado por Google para accesos agénticos. Hoy no es una medida, ni un archivo, ni esfuerzo alguno dentro del plan; es el candidato al que hay que vigilar por si la pregunta de la «interfaz legible por máquinas» acaba planteándose en 2027 (sección 11).

### 7.2 Lo que es apuesta (claramente señalado)

- **Datos de log contra llms.txt** (*probable*): en un análisis de >500 millones de eventos de bots a lo largo de 90 días solo hubo «unos cientos» de peticiones a `/llms.txt`; de los 50 dominios más citados, exactamente uno tenía el archivo. Fuente secundaria, sin documentación primaria, pero coincide con lo que dice Mueller.
- **Estudio de correlación de Ahrefs** (75000 marcas, diciembre de 2025): menciones en YouTube ~0,737 > Branded Web Mentions 0,656–0,709 > Branded Anchors 0,511–0,628 > Domain Rating 0,266–0,326 > backlinks ~0,218. Los propios autores escriben «correlation isn't causation» (la correlación no es causalidad), y la muestra está filtrada a DR>40: **no es trasladable directamente a un sitio joven.** La dirección (las señales de entidad off-site superan a las métricas de enlaces) es lo bastante consistente como para orientar el esfuerzo.
- **La concentración por plataforma es volátil** (Semrush, 14/07–12/10/2025, >230000 prompts): ChatGPT citó Reddit en el ~60 % y Wikipedia en el ~55 % de las respuestas, hasta mediados de septiembre de 2025; después, desplome al ~10 % y a <20 % respectivamente. Google AI Mode se quedó en el mismo periodo en ~2 % para Wikipedia. Estudio metodológicamente sólido, pero una instantánea: **no existe una estrategia «para la IA», solo una por motor, y ninguna a la que atarse.**
- **Cifras sobre estructura procedentes de blogs de proveedores** («las tablas se citan 4,2× más», «esquema FAQ +45 %», «Semantic Completeness r=0,87») — *inciertas*, metodología no publicada. **No difundirlas como hecho.** El mecanismo (el retrieval trabaja sobre pasajes de entre 150 y 300 palabras típicamente) no se discute; el porcentaje sí.
- **Bloquear rastreadores de entrenamiento**: evidencia contradictoria. BuzzStream (19/03/2026, 4 millones de citas) apenas encuentra relación; Cloro (julio de 2026) encuentra que los dominios que bloquean GPTBot casi no reciben citas de ChatGPT a igualdad de posición en Google (mediana 0,003 frente a 0,417); Rutgers/Wharton (31/12/2025) mide −23,1 % de visitas mensuales en los editores que bloquean. **Tratarlo como indicio de dirección.** Para un sitio de contenidos joven y sin negocio de licencias no hay ninguna razón económica para bloquear.
- **El solapamiento entre citas de IA ↔ top 10 de Google** se encoge: según la metodología, 52 % (Surfer), 38 % (Ahrefs, marzo de 2026, frente al ~76 % de mediados de 2025), 6,8 % (ChatGPT frente al top 10 de Google). **Quédate con la dirección, no con la cifra.**

En este capítulo son sólidas exactamente cuatro fuentes: Princeton GEO (KDD 2024), Ahrefs (75000 marcas, con descargo sobre la causalidad), Semrush (230000 prompts) y Vercel/MERJ (>500 millones de fetches). Todo lo demás es indicio de dirección.

### 7.3 Medidas concretas

**Comprobación rápida del firewall de Vercel (5 minutos, sin urgencia P0).** Vercel ofrece un «AI Bot Managed Ruleset» que bloquea GPTBot, ClaudeBot, PerplexityBot y Bytespider con un clic, y actúa **antes** que `app/robots.ts`. Lo decisivo es la tranquilidad que da la documentación: **«The ruleset is inactive by default. In the dashboard this is labeled Allow.»** (el conjunto de reglas está inactivo por defecto; en el panel aparece etiquetado como Allow). Así que la comprobación solo es relevante si alguien ha puesto el ruleset expresamente en Deny; no como riesgo por defecto. (La afirmación del borrador de que el ruleset «está disponible en todos los planes» no está documentada y decae; la documentación no indica ningún plan.) Verificar una vez y darlo por cerrado:

```bash
curl -A "Mozilla/5.0 (compatible; ClaudeBot/1.0)" -sI https://mrsvenezuela.com/estado/bolivar | head -1
curl -A "Mozilla/5.0 (compatible; GPTBot/1.4)" -sI https://mrsvenezuela.com/estado/bolivar | head -1
```

Ambos deben devolver HTTP 200, no 403 ni una página de challenge.

**Patrones de contenido citable: la única medida de contenido real de este capítulo.** La guía de Google dice expresamente que el contenido *no* tiene que trocearse en fragmentos mínimos; pero lo contrario de eso no es prosa sin respuesta. El retrieval de RAG trabaja sobre pasajes, y una respuesta repartida en tres párrafos no sobrevive al chunking. En `lib/states/types.ts`, introducir por sección (`know`, `history`, `nature`, `access`) un campo `answer: string`: un único bloque de frases de 40 a 60 palabras, completo y sin referencias hacia atrás:

```ts
answer: "Bolívar es el estado más extenso de Venezuela con 240.528 km², una cuarta parte del país. Ocupa el sureste, entre el río Orinoco al norte, Brasil al sur y Guyana al este. Su capital es Ciudad Bolívar, la antigua Angostura, y su mayor ciudad es Ciudad Guayana."
```

Renderizarlo en `state-editorial-guide.tsx` justo después de `EditorialSectionHeading`, antes de los `paragraphs` (sección 01 a partir de la línea 271). Así, en cada chunk queda: encabezado (= pregunta) + respuesta completa + cifra. Eso coincide exactamente con lo que Princeton midió como eficaz y con lo que Microsoft recomienda en el anuncio de AI Performance. Cada cifra de estas frases debe estar documentada: un valor en km² inventado sale más caro en el contexto de la IA que en el buscador clásico, porque se propaga citado. **Empieza por los cinco estados con más búsquedas** (Bolívar, Mérida, Nueva Esparta, Falcón, Zulia), no por los 23. Las cadenas nuevas van en el mismo commit que sus entradas en `lib/site-translations.json`.

**Semántica de los datos: ya hecho, verificado en el repositorio.** El borrador pide pasar `guide.know.facts` de divs de etiqueta/valor a `<dl>`. Ambos puntos de renderizado ya usan `<dl>/<dt>/<dd>`: `PracticalFacts` (`state-editorial-guide.tsx:155`) y la sección 01 (`:282`). La medida decae. Solo queda pendiente `guide.access.routes` (`:446–457`): una pila de `<div>` con icono, `<h3>` y `<p>`. En el fondo es la tabla «tipo de llegada → descripción» y como `<dl>` sería más inequívoca. Beneficio bajo, esfuerzo bajo — P2, no adelantarla.

**Desambiguación de entidades.** El `<h1>` de las guías contiene solo `{guide.name}`, es decir «Bolívar», que choca con Simón Bolívar, el Pico Bolívar, Ciudad Bolívar y Bolívar en Colombia/Ecuador. O bien «Estado Bolívar, Venezuela» como texto del h1, o al menos `sameAs` apuntando a Wikidata (sección 3). **Corrección respecto al borrador:** el doble h1 que allí se suponía no existe. `state-editorial-guide.tsx:224` y `:236` están en las dos ramas del mismo ternario (`guide.hero ? … : …`, a partir de la línea 208); siempre se renderiza exactamente uno. El punto está comprobado y cerrado: la invariante de h1 en la CI (sección «Proceso») lo mantiene cerrado.

**IDs de sección con significado.** `#guia-01` … `#guia-09` (`state-editorial-guide.tsx:194–202`, secciones a partir de `:271`) no significan nada ni para personas ni para máquinas. `#historia`, `#naturaleza`, `#como-llegar`, `#consejos` hacen citables los enlaces profundos; Perplexity y ChatGPT enlazan fragmentos cuando los encuentran. `guide-toc.tsx` lee los IDs de esa misma lista `sections` (`:176`) y se adapta automáticamente: la reestructuración es un cambio en un array, y además la regla 301 para los fragmentos antiguos no hace falta (los fragmentos no se resuelven en el servidor).

**Tasa de 404.** Los rastreadores de IA adivinan URLs mucho más a menudo que Googlebot (el rastreador de ChatGPT, 34,82 % de 404 frente al 8,22 % de Googlebot; Vercel/MERJ, cifra secundaria). `app/not-found.tsx` ya devuelve un 404 real —`lib/page-factory.tsx:52` llama a `notFound()`— e incluye un enlace a la portada más cuatro sugerencias (`/playas`, `/estado/merida`, `/parque-nacional/canaima`, `/playa/los-roques`). Así está bien. Ahora bien, en este montaje no se puede leer directamente qué URLs se adivinan (véase 7.4): como sustituto, analiza los avisos de 404 de la cobertura de GSC («No encontrada (404)») y de Bing WMT. Cada URL plausible pero inexistente (`/playa/morrocoy`, `/estado/distrito-capital`) es la señal de una entidad esperada que falta: o se crea, o se mapea con un 301.

**Lo que aquí no aparece a propósito:** llms.txt, un `ai.txt`, versiones espejo en Markdown de las guías, marcado schema específico para IA o menciones compradas. Google ha calificado textualmente las cinco cosas de superfluas o dañinas.

### 7.4 Medición

| Nivel | Qué | Fiabilidad |
|---|---|---|
| Bing WMT → AI Performance (Public Preview desde el 10/02/2026) | Total Citations, Average Cited Pages, Grounding Queries, citas por URL. Cubre Copilot, los resúmenes de IA de Bing y «select partner integrations» (integraciones de socios seleccionados) | **Recuento first-party real**, el único disponible. Una ampliación con Intents/Topics/Citation Share/Compare en junio de 2026 circula en fuentes secundarias, **no está documentada** y no se planifica |
| GSC → Search Generative AI (desde el 03/06/2026) | Impresiones en AI Overviews, AI Mode y la IA de Discover por página/país/dispositivo/fecha. Datos desde el 18/05/2026, sin backfill | documentado, pero **solo impresiones**: sin clics, sin CTR, sin consultas. Además: según fuentes secundarias, de momento se ha desplegado solo para un **subconjunto de las propiedades** (inicio en el Reino Unido), con ampliación global sin fecha. El plan no da por supuesto que el informe esté visible tras la verificación |
| Vercel Analytics | Referrer `chatgpt.com`, `perplexity.ai`, `claude.ai`, `copilot.microsoft.com`, `gemini.google.com` | incompleto: entre el 35 y el 70 % de las sesiones de IA llegan sin referrer; los clics de Google AI Mode llevan `noreferrer` y por principio no se pueden separar |
| GSC → Estadísticas de rastreo | Peticiones de rastreo, códigos de respuesta, tipos de archivo, tipo de Googlebot | la única visión de rastreo sólida — **solo Google**, ningún bot de IA salvo Googlebot |
| Bing WMT → Crawl Information | Rastreos de Bingbot, páginas de error, URLs bloqueadas | segunda fuente, **solo Bing**; relevante porque Bing es la capa de retrieval de Copilot |

**El KPI «hits de rastreador por bot» no se puede obtener en el montaje actual, y por eso no se lleva como KPI.** El borrador prevé Vercel Log Drains para contar `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `ClaudeBot`, `GPTBot` y `Bingbot`. Eso falla por partida doble: los Log Drains son una función de Pro/Enterprise y **aun con Pro la medición se quedaría vacía**, porque todas las rutas están prerrenderizadas (`generateStaticParams` en `app/estado/[slug]/page.tsx` y en el resto de rutas de contenido): las peticiones de los rastreadores se sirven desde el CDN y nunca aparecen en el log de funciones. La pregunta previa, «¿se nos llega a recoger siquiera?», queda así sin respuesta para los rastreadores de IA. Tres opciones, en este orden:

1. **No contratar nada** (recomendación para empezar): las estadísticas de rastreo de GSC y Crawl Information de Bing WMT cubren los dos rastreadores de los que dependen todas las superficies de IA que este plan llega a trabajar. Google y Bing rastrean = la base de retrieval está en pie.
2. **Mover el DNS a Cloudflare** (plan gratuito; ofrece una vista general de bots, rastreadores de IA incluidos). No es un cambio de hosting, solo de servidores de nombres, pero choca con el registro TXT de GSC y con los registros de correo de la sección 2, y hay que hacerlo como un paso propio y planificado.
3. **Contratar Vercel Observability** o pasar a un plan con Log Drains: solo tiene sentido si los datos de bots sostienen de verdad una decisión.

Dos trampas de los logs valen para los tres caminos: el **UA de OAI-SearchBot empieza desde 2026 con una cadena completa de Chrome de escritorio** (`Mozilla/5.0 (Macintosh; …) Chrome/131.0.0.0 Safari/537.36; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot`); un filtro sobre `^OAI-SearchBot` ya no coincide, hace falta `contains`. Y **Google-Extended y Applebot-Extended no aparecen nunca en los logs**, porque son meros tokens de control sin petición propia. Quien los busque y no los encuentre sacará la conclusión equivocada.

Marketing, no realidad: los «AI Visibility Scores» y el «Share of Voice in LLMs» de terceros son muestreos de prompts con n = unos miles, no una medición. Sirven para tendencias, no para reporting.

**Gestión de expectativas:** el tráfico de referencia procedente de la IA se sitúa en torno al 1 % en el conjunto de los sectores (rango del 0,1 al 2,8 %). En 2026 el valor está en la cita y en la presencia de marca, no en las sesiones. Quien justifique el GEO por el ROI de clics mide lo que no es, y a la vez subestima el efecto, porque una gran parte se contabiliza como Direct.

---

## 8. Off-site, Discover y marca

Off-site no significa aquí construcción de enlaces. Significa: los cuatro canales por los que un sitio sin historia de dominio llega siquiera a superficies ajenas — Discover, Google Images, vías de distribución sin algoritmo, menciones independientes — y las dos decisiones que determinan si ese trabajo se suma más adelante o se vuelve contra el sitio: el nombre de marca y el primer enlace pagado.

### 8.1 Google Discover — la mayor palanca individual

Discover no conoce tamaño mínimo de sitio, ni umbral de autoridad de dominio, ni registro en Publisher Center. Google, literalmente: "No special tags or structured data are required." (no se requieren etiquetas especiales ni datos estructurados). La evaluación ocurre a nivel temático — exactamente el perfil de este sitio.

Requisitos previos que hoy faltan:

1. **`max-image-preview:large`** (sección 2.4). En todo el repositorio, ni una aparición. Sin ese valor solo hay miniaturas pequeñas en lugar de la tarjeta de imagen grande — y la tarjeta de imagen es todo el mecanismo de Discover.
2. **Imágenes de gran formato.** Lo documentado es exclusivamente **"At least 1200 px wide"** (al menos 1200 px de ancho). Google no menciona ninguna relación de aspecto; **16:9 es recomendación práctica, no requisito** — justificado en que el mismo archivo sirve también a la tarjeta OG y a la de Twitter, y en que el formato apaisado pasa sin recorte en las tres superficies. El estado actual contradice ambas cosas: `lib/page-factory.tsx:36` declara para **todas** las rutas, de forma indiscriminada, `width: 1200, height: 800`, aunque la imagen es distinta por slug y en los hotlinks de Commons ni siquiera es correcta. `public/images/salto-angel.jpg` mide 1733×2599, es decir, vertical, y sirve en `lib/content.ts:43-44` a la vez como `angelFalls` y como `canaima` — con lo cual un formato vertical es la imagen OG y de Discover de `/parque-nacional/canaima`.
3. **Byline visible y fecha visible** (sección 5, bloques de E-E-A-T).
4. **Ritmo de publicación** (sección 5, plan editorial).

Medida para el punto 2: por cada guía, depositar un derivado apaisado dedicado de al menos 1600 px de ancho en `public/images/og/<slug>.jpg` y llevarlo como campo propio, en lugar de desvirtuar la función de la imagen del hero. Ampliar `StatePhoto` en `lib/states/types.ts` con un campo opcional:

```ts
export type StatePhoto = {
  src: string;
  alt: string;
  position?: string;
  /** Derivado apaisado ≥1600 px para OG/Discover. Solo archivos propios bajo /images/og/. */
  ogSrc?: string;
};
```

Y en `lib/page-factory.tsx`, resolver la imagen de modo que las medidas solo aparezcan donde se han leído del archivo:

```tsx
  const heroImage = guide?.hero?.ogSrc ?? guide?.hero?.src ?? item.image;
  const image = heroImage.startsWith("/") ? absoluteUrl(heroImage) : heroImage;
  // Los derivados propios tienen medidas conocidas; en todo lo demás, mejor ningún campo que uno adivinado.
  const ogImage = heroImage.startsWith("/images/og/")
    ? { url: image, width: 1600, height: 900, alt: item.name }
    : { url: image, alt: item.name };
```

El motivo de la distinción de casos está en la sección 13: `public/images/cayo-de-agua.jpg` mide 1600×**899**, no 900. Las medidas se leen o se omiten, nunca se estiman.

**Sobre el Discover Core Update de febrero de 2026 — y sobre lo que de él no se deduce.** La actualización se desplegó del **05/02/2026** al **27/02/2026** y fue la primera actualización exclusiva de Discover. Dos reservas son decisivas para este sitio: el despliegue afectó de entrada **solo a usuarios de habla inglesa en Estados Unidos**; se ha anunciado una ampliación a más países e idiomas, pero sin fecha — para un sitio en español el efecto queda, por tanto, abierto. Y la deducción extendida de que las señales de calidad y de E-E-A-T son desde febrero de 2026 el umbral de elegibilidad y el engagement solo secundario es **doblemente incierta**: Google confirmó la actualización, no la descripción de su objetivo, y el ámbito geográfico de validez no cubre hasta ahora este mercado. Byline, fecha y perfil de autoría siguen siendo correctos de todas formas — están anclados con independencia de eso en los criterios de los quality raters. Ninguna medida de este plan puede justificarse con un "obligatorio desde febrero de 2026".

Serían bloqueantes, además, las metaetiquetas `nopagereadaloud` y `notranslate` — ninguna de las dos aparece en el repositorio, y eso está bien.

**Advertencia:** el tráfico de Discover es volátil y nunca debe ser el único pilar. Los descartes de los usuarios actúan de forma permanente por URL. Y como este sitio no produce motivo noticioso, el único disparador planificable de Discover es la antelación estacional del calendario editorial (sección 5) — publicar antes de la ventana de viaje, no en mitad de ella.

### 8.2 SEO de imágenes

83 imágenes propias en `public/images`, 41 etiquetas `next/image`, todas con `alt` — la base está bien. Faltan: sitemap de imágenes (sección 2.6), `ImageObject` con licencia (sección 3) y el reemplazo de los 55 hotlinks a Commons, que son débiles porque Google normalmente deduplica a favor de la fuente original: la búsqueda de imágenes muestra entonces Commons, no este dominio.

Sustituye de forma priorizada las imágenes de Commons por imágenes propias o espejadas localmente: primero Canaima, Los Roques, Médanos, Pico Bolívar, Morrocoy. En cuanto desaparezca el último hotlink, las dos entradas de `remotePatterns` en `next.config.ts` pueden eliminarse — y `unoptimized` con ellas.

El mismo cambio rinde en tres cuentas a la vez: LCP (sección 4), indexación de imágenes (aquí) y transferencia a terceros países (sección 9) — porque `unoptimized` hace que el navegador de cada visitante de la UE contacte directamente con Wikimedia. Ese es el motivo por el que este punto no se trata como un rezagado de rendimiento.

Un efecto secundario del registro de imágenes de la sección 9 que cuenta aquí: la atribución visible como `<figcaption>` es al mismo tiempo el único texto corrido inmediatamente junto a la imagen — contexto para Google Images y material de chunk citable para sistemas RAG, todo en uno.

### 8.3 Wikimedia — con advertencia clara sobre las reglas

**No hacer:**

- **No crear ni encargar un artículo de Wikipedia sobre Mrs Venezuela.** El sitio no cumple los criterios de relevancia (no hay cobertura independiente). Wikipedia lo desaconseja expresamente cuando existe una relación personal o profesional; quien lo haga aun así debe revelar esa relación y presentarlo a través de Articles for Creation. La edición pagada exige, según las condiciones de uso de Wikimedia, revelar quién encarga y quién paga. Un artículo pagado sobre un tema no relevante se borra igual — el dinero se pierde y la marca queda con un historial de COI documentado públicamente.
- **Ningún enlace a mrsvenezuela.com en artículos existentes sobre Venezuela.** Política de Wikipedia: "you should avoid linking to a site that you own." (deberías evitar enlazar a un sitio de tu propiedad). Se revierte y, en caso de reincidencia, el dominio acaba en la lista negra.
- **Ningún ítem de Wikidata para el sitio web.** No cumple ninguno de los tres criterios de notabilidad (enlace de sitio a un proyecto de Wikimedia / entidad claramente identificable con fuentes públicas serias / utilidad estructural para otros ítems) y termina en una solicitud de borrado. Solo tiene sentido cuando existan fuentes independientes y citables sobre el proyecto.

Las reglas de COI y de divulgación no son una indicación de estilo, sino el motivo por el que este canal solo es utilizable en una dirección; la clasificación está en la sección 9.

**Legítimo y aplicable de inmediato:**

- **`sameAs` a los ítems de Wikidata ya existentes de los lugares** (sección 3). Los Q-ID existen desde hace tiempo; es la palanca de entidad más barata del proyecto. Verifica cada QID por separado — el estado, la ciudad homónima y la persona homónima son tres entidades (sección 13).
- **Subir fotos propias bajo CC BY-SA 4.0 a Wikimedia Commons**, bien categorizadas (Category:Canaima National Park, Category:Los Roques …). Si se incorporan a artículos, el nombre de la autora aparece de forma permanente en la página de descripción del archivo. Sin COI, sin riesgo de borrado.

  **Requisito previo sin el cual este punto se cae de inmediato:** se sube exclusivamente lo que se haya fotografiado uno mismo de forma demostrable. Rige el mismo deber de prueba que en el registro de imágenes de la sección 9 — para los 83 archivos locales no existe hoy documentación de procedencia, y subir material ajeno bajo licencia propia es en Commons un motivo de borrado con mención del nombre y, en Alemania, además un caso de responsabilidad legal. **Aclarar también de antemano:** CC BY-SA es irrevocable y permite a cualquier tercero también el uso comercial posterior.

### 8.4 Canales de distribución — prioridad por valor de cita y de referral, no por alcance

1. **Pinterest** — segundo mayor volumen de referral tras Facebook, la tasa de conversión más alta (2,31 %), vida media evergreen de meses a años (*probable*, estudio de proveedor 2025/2026). Cuenta de empresa, verificar `mrsvenezuela.com` como Claimed Website, un tablero por región más Playas/Parques/Gastronomía, 3–5 pines verticales de 1000×1500 por guía con **enlace profundo a `/estado/<slug>`**, no a la portada. Título y descripción en español y en inglés.
2. **YouTube** — ~23,3 % de participación en las citas de los AI Overviews de Google, pero **el 94 % de las citas de IA recae en long-form, no en Shorts** (*probable*). Es decir, vídeos de 5–12 minutos por estado con transcripción completa y editada en la descripción, marcas de capítulo y respuesta central en los primeros 30 segundos. Shorts solo como alimentador desde el material ya existente de TikTok.
3. **Reddit** — el dominio más citado en respuestas de IA, sobre todo en Perplexity. Pero: la Rule 8 clasifica como spam publicar exclusivamente contenidos propios, y las cuentas con nombre de marca tienen tasas de supervivencia estructuralmente peores. **Cuenta personal con el rol declarado**, en r/venezuela, r/travelphotography, r/solotravel. La respuesta debe estar completa en el comentario — es exactamente ese texto el que se cita. Enlace solo si aporta algo adicional. Lee las reglas de cada subreddit por separado; varían mucho.
4. **Instagram y TikTok** — ya están en marcha (`components/sections/home-footer.tsx:8-9`), pertenecen al `sameAs`, sirven para construir marca, pero no aparecen en ninguna lista de citas destacadas y envían apenas tráfico.
5. **Newsletter** — la única fuente de tráfico que nadie puede apagar. Con ~60 % de búsquedas sin clic y un descenso reportado del tráfico orgánico de Google del 33 % en la comparación interanual (Reuters Institute Digital News Report 2026, *probable*, estudio secundario), no es un asunto menor. El sitio tiene hoy solo un `mailto:` en el pie (`components/sections/home-footer.tsx:70,74`). Proveedor con alojamiento en la UE (la responsable del sitio reside en Alemania), doble opt-in, promesa concreta: "Un estado de Venezuela al mes, con fotos y guía." Renderiza el formulario en el servidor.
6. **Feed RSS** — la vía que sostiene los puntos 1 y 5, y el único trayecto de distribución sin un algoritmo de por medio. Un feed en `/feed.xml` (técnica: sección 4) alimenta tres cosas sin más trabajo manual: **RSS-to-Email** — el envío del newsletter deja de ser un paso de trabajo propio y se convierte en configuración; **Feedly, Flipboard y agregadores de viajes** — suscripciones puramente temáticas que nadie puede reponderar entre el sitio y el lector; **auto-pines de Pinterest** — las guías nuevas llegan al tablero sin creación manual. Esfuerzo único de ~30 minutos, después cero. Justamente por eso el feed está aquí y no en el apartado de "nice to have": es el seguro más barato contra la volatilidad de 8.1.

**No solo enviar el vídeo hacia fuera, sino traerlo de vuelta.** El punto 2 produce material que el sitio hoy no usa en ninguna parte — ni embed, ni `VideoObject`, ni transcripción on-site (`grep -r youtube`: cero resultados). Es la omisión más cara del canal, porque `VideoObject` es uno de los pocos rich results que quedan en 2026 y una transcripción visible entrega exactamente el material de pasajes que citan los sistemas RAG. Tres reglas:

- **Incrustar exclusivamente vía `youtube-nocookie.com` con fachada de clic para cargar.** Un embed cargado directamente tumba el estado actual del sitio sin banner de consentimiento y obliga a una CMP (sección 9) — más los costes de LCP y de INP por un elemento que la mayoría de los visitantes nunca inicia.
- **Transcripción visible dentro de la página**, no solo en la descripción de YouTube. Editada, con subtítulos intermedios; es al mismo tiempo el bloque de accesibilidad (sección 4).
- **`VideoObject` en el `@graph`** de la página de guía correspondiente (sección 3), con `transcript` y `embedUrl` apuntando a la misma URL nocookie.

```tsx
// components/content/video-embed.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type VideoEmbedProps = { videoId: string; title: string; poster: string; posterAlt: string };

export function VideoEmbed({ videoId, title, poster, posterAlt }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        aria-label={`Reproducir el video: ${title}`}
        className="relative block aspect-video w-full overflow-hidden rounded-2xl"
      >
        <Image src={poster} alt={posterAlt} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
      </button>
    );
  }

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video w-full rounded-2xl border-0"
    />
  );
}
```

El póster es un archivo local y necesita por tanto una entrada en el registro de imágenes de la sección 9, igual que cualquier otra imagen.

### 8.5 Backlinks y menciones independientes

Los enlaces han perdido mucho valor, pero no están muertos. Gary Illyes, on record: desde hace tiempo no son un factor del top 3, "We need very few links to rank pages." (necesitamos muy pocos enlaces para posicionar páginas). No hay ningún umbral que haya que alcanzar primero — los recursos van al contenido y al material original.

Excluidos: enlaces comprados, PBN, autoentradas en Wikipedia, paquetes de menciones comprados (Google advierte expresamente en su guía sobre IA contra "seeking inauthentic 'mentions' across the web" (buscar "menciones" no auténticas por toda la web)) — y **Google Business Profile**. Lo documentado es: "If your business either has a physical location that customers can visit, or travels to customers where they are, you can create a Business Profile." (si tu negocio tiene una ubicación física que los clientes puedan visitar, o se desplaza hasta donde ellos están, puedes crear un Business Profile). Una oferta puramente informativa en línea, sin local comercial y sin visitas de clientes, no cumple ninguna de las dos condiciones y por tanto no es elegible; un perfil creado a pesar de ello arriesga la suspensión.

Realista: subidas a Commons, participación real en comunidades de la diáspora, contacto con medios regionales y de la diáspora venezolana para entrevistas sobre la persona real que hay detrás del proyecto. **El objetivo no son los enlaces, sino que el nombre de marca aparezca con independencia del dominio propio.**

### 8.6 Antes de la unificación: revisión del nombre en materia de marcas

La sección siguiente lleva toda la entidad — nombre del sitio, `og:site_name`, `name` de JSON-LD, handles sociales, dirección de contacto — a "Mrs Venezuela". Esa consolidación es correcta desde el punto de vista del SEO y **jurídicamente no está revisada**. Eso debe decidirse en este orden, no después.

Los hechos: "Miss Venezuela" está protegido como signo distintivo de la Organización Miss Venezuela (Cisneros), y "Mrs." es en el entorno de los certámenes un signo distintivo consolidado de la misma categoría. El sitio actúa de forma comercial — `lib/institutional-i18n.ts:11` ofrece activamente cooperaciones con alojamientos, operadores turísticos y marcas —, así que no es un proyecto puramente privado. Con eso, una consulta de legitimación, un procedimiento UDRP contra el dominio o un requerimiento legal (Abmahnung) son escenarios reales. Lo decisivo es la asimetría: **cuanto más completamente se consolide la entidad en ese nombre, mayor será el daño en el caso grave** — tras la unificación, el nombre del sitio en las SERP, el clúster `sameAs`, la Claimed Website de Pinterest, el canal de YouTube, el remitente del newsletter y el dominio de correo cuelgan de un nombre que ya no se puede cambiar sin perder todo lo construido.

Medida, con fecha **anterior** al commit de unificación (hoja de ruta, sección 12):

1. **Búsqueda en TMview, DPMAregister y USPTO**, clases de Niza **39** (viajes, intermediación de viajes), **41** (entretenimiento, concursos) y **16** (productos de imprenta). No se busca solo la cadena idéntica, sino la susceptible de confusión — "Miss Venezuela", "Mrs Venezuela", "Sra. Venezuela".
2. **Decisión documentada** con fecha y resultado de la búsqueda, archivada en el repositorio. Una asunción de riesgo consciente y documentada es otra cosa que un riesgo pasado por alto — también en la percepción externa, si más adelante se llega a un litigio.
3. **Asegurar el fallback:** registrar "Descubre Venezuela" como segundo dominio antes de que se consolide el nombre. Cuesta dos cifras al año y es el único seguro que existe aquí. El claim sigue en uso de todos modos (véase 8.7), así que el dominio no es una partida desechable.
4. Con independencia del resultado: activar **bloqueo en el registrador, renovación automática y 2FA**, con el registro a nombre de la responsable del sitio (detalles en la sección 10).

La clasificación jurídica en detalle — derecho de signos distintivos, UDRP, respuesta a una consulta de legitimación — está en la sección 9. Aquí solo cuenta el orden: revisar, decidir, luego consolidar.

### 8.7 Unificar el nombre de marca — bloquea todo lo demás del off-site

17 apariciones dicen "Descubre Venezuela" (`app/layout.tsx:27-28,39-40,48,54`, `app/page.tsx:49`, `app/estados/page.tsx:38`, `lib/page-factory.tsx:33,42,60,74`, además de `components/content/detail-page.tsx:824`, `guide-toc.tsx:101`, `los-roques-guide.tsx:117`, `medanos-guide.tsx:313`, `pico-bolivar-guide.tsx:218`), 16 dicen "Mrs Venezuela" (dominio, `components/sections/site-header.tsx:76,78,238`, `lib/institutional-i18n.ts:10-27`, copyright del pie, Instagram, TikTok, correo electrónico).

**Decisión: "Mrs Venezuela" es el nombre, "Descubre Venezuela" pasa a ser `alternateName` y claim** — con la reserva de 8.6. El dominio, los handles sociales y la dirección de contacto lo indican con claridad. Google deduce el nombre del sitio que muestra en las SERP exactamente de esas señales; los datos contradictorios llevan a que en su lugar se muestre el nombre de dominio desnudo.

**Desventaja conocida que no se puede optimizar hasta hacerla desaparecer:** la colisión de nombres con el certamen de belleza real. Los remedios son la desambiguación en el schema (`description`, `knowsAbout`, `alternateName`) y las consultas de marca ligadas al tema ("Mrs Venezuela guía", "Mrs Venezuela viajes"). La expectativa de apoderarse del espacio de nombres del certamen es irreal.

`components/content/detail-page.tsx:824` muestra en el hero el badge "Descubre Venezuela" — como claim está bien, pero `og:site_name` y el `name` de JSON-LD deben decir "Mrs Venezuela".

Dos cosas que deben ir en el mismo commit: las **claves de almacenamiento** en `components/i18n/language-provider.tsx` (localStorage `descubre-venezuela-language` frente a cookie `mrs-venezuela-language` — hay que tocar ambas, o los visitantes ya existentes pierden su configuración de idioma), y la **dirección de correo**: `infomrsvenezuela@gmail.com` (`components/institutional/contact-page-content.tsx:6`, `home-footer.tsx:70,74`) es, como dirección de la organización, una señal de confianza débil e inadecuada en el aviso legal — `info@mrsvenezuela.com` con SPF, DKIM y DMARC forma parte de la decisión sobre el nombre (sección 10).

### 8.8 Monetización — las reglas van antes del primer enlace pagado

El sitio ya busca activamente cooperaciones: `lib/institutional-i18n.ts:11` ofrece colaboración con "alojamientos, operadores turísticos, proyectos locales, fotógrafos, creadores y marcas". Pero no hay ninguna regla sobre qué pasa cuando alguien acepta. Fijar esa regla ahora por escrito cuesta una hora; introducirla a posteriori significa desmontar recomendaciones ya publicadas.

**Cuatro reglas, vinculantes desde el primer enlace pagado o remunerado:**

- **`rel="sponsored"`** en todo enlace pagado, remunerado o surgido de una contraprestación. En caso de duda, `rel="sponsored nofollow"` — el daño de un atributo puesto de más es cero; el de uno que falta es una medida manual.
- **Identificación publicitaria visible en el texto**, al principio de la sección o del artículo correspondiente — **no** en el pie, no en las condiciones generales, no detrás de un desplegable. La identificación debe estar donde está la recomendación.
- **Separación de las recomendaciones editoriales y las comerciales.** Una entrada pagada no puede presentarse como selección editorial. En la práctica: las menciones comerciales van en un bloque propio y nombrado como tal, nunca en la recomendación en texto corrido de una sección de guía.
- **No alquilar subpáginas ni alojar contenidos ajenos en el dominio** — ni artículos de invitados a cambio de dinero ni "áreas de socios". Eso es site reputation abuse y afecta a todo el dominio, no solo a la URL implicada.

**La consecuencia SEO que se pasa por alto con regularidad:** los widgets de afiliación y de reservas son la causa individual más frecuente de desplomes en los valores de INP y de CLS — un widget de precios o de disponibilidad cargado a posteriori desplaza el layout y bloquea el main thread justo en el momento en que el usuario hace scroll. Un solo widget integrado puede consumir todo el trabajo de rendimiento de la sección 4. A eso se suma: casi todos esos widgets ponen cookies o cargan scripts de terceros y **obligan con ello a una CMP** — el estado actual del sitio sin banner de consentimiento es una ventaja real de Discover y de CWV que se gasta una vez y no se recupera (sección 9).

Si se monetiza, la forma más llevadera es por eso el enlace estático, colocado editorialmente, con `rel="sponsored"` — sin widget, sin script, sin iframe. La directriz de cooperación completa, incluido el deber de identificación conforme al § 5a UWG (ley alemana contra la competencia desleal), va en la misma página pública que la directriz editorial y de IA (sección 9).

---

---

## 9. Aspectos legales, licencias y riesgo

Esta sección forma parte de un plan SEO porque los tres errores más caros que puede cometer este proyecto no son errores de posicionamiento: un requerimiento legal (Abmahnung) por falta de aviso legal (Impressum), una reclamación de licencia por una foto sin procedencia acreditable, la pérdida del dominio tras la consolidación de la entidad. Cada uno de estos casos cuesta más de lo que aporta todo el resto del plan, y los dos primeros están hoy abiertos de forma verificable en el repositorio. A eso se suma la cara SEO de la misma moneda: los datos del responsable del sitio y de contacto, una política editorial visible y los créditos de imagen son exactamente las señales de confianza sobre las que la sección 5 apoya la argumentación E-E-A-T — pero faltan en el nivel básico, mientras el plan ya planifica los refinamientos.

**Esto no sustituye al asesoramiento jurídico.** Es una lista de hallazgos con indicación de archivo y línea, lo bastante concreta como para abordarla por tu cuenta o para presentársela a una abogada con una lista de preguntas precisa, en lugar de con un «échale un vistazo». Donde la valoración es discutible, se indica expresamente.

### 9.1 Aviso legal y política de privacidad (§ 5 DDG, art. 13 RGPD)

**Hallazgo.** Ni ruta ni enlace en el pie. `app/` solo contiene, como páginas institucionales, `contacto` y `sobre-nosotros`. La lista `siteLinks` en `components/sections/home-footer.tsx:19-27` incluye siete entradas (`/`, `/estados`, `/playas`, `/#destinos`, `/#articulos`, `/sobre-nosotros`, `/contacto`) — ninguna de carácter legal. `app/sitemap.ts:15-16` conoce, en consecuencia, solo las dos URLs institucionales existentes.

**Por qué la excepción de «web privada» no se aplica aquí.** `lib/institutional-i18n.ts:10` designa literalmente a la responsable del sitio como «Michell Naranjo, una venezolana viviendo en Alemania» — domicilio en Alemania, por tanto derecho alemán. `:11` ofrece activamente en `/contacto` colaboraciones con «alojamientos, operadores turísticos, proyectos locales, fotógrafos, creadores y marcas». Se trata de una actividad concebida con vocación de permanencia y orientada a obtener ingresos; la obligación de publicar aviso legal del § 5 DDG (Digitale-Dienste-Gesetz, la ley alemana de servicios digitales) se vincula a los telemedios «ofrecidos con carácter comercial, por regla general a cambio de contraprestación» y no presupone ingresos efectivamente obtenidos. Basta con ofrecerlo.

**Medida — dos rutas de servidor, indexables.** Nada de `noindex`. Estas páginas son una señal de confianza, deben poder encontrarse, de todos modos solo posicionan en consultas de marca y son, para los Quality Raters, el lugar donde se responde a «¿Quién gestiona esto?». En un sitio que emite recomendaciones, la ausencia u ocultación de los datos del responsable del sitio y de contacto es el criterio negativo estándar.

```tsx
// app/aviso-legal/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Aviso legal | Mrs Venezuela" },
  description:
    "Datos del responsable del sitio, contacto y responsable de contenidos conforme a la legislación alemana (§ 5 DDG).",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <main className="container-page py-16">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">Aviso legal</h1>
      {/* Datos conforme al § 5 DDG — el texto está en la lista de comprobación de abajo */}
    </main>
  );
}
```

`app/privacidad/page.tsx` de forma análoga, con `canonical: "/privacidad"`.

**El export de `canonical` no es opcional aquí.** En Next 15 los metadata se fusionan de forma plana; un segmento sin su propio `alternates` hereda `alternates.canonical: "/"` de `app/layout.tsx:32-34`. Exactamente así se originó el fallo de `/playas` (sección 2). Dos rutas nuevas sin canonical propio serían dos nuevos duplicados de la portada — y serían precisamente las páginas legales las que no se podrían encontrar de forma indexable.

**Enlazado en un solo commit:** dos entradas en `siteLinks` (`home-footer.tsx:19-27`), dos entradas en `app/sitemap.ts` con `changeFrequency: "yearly"`, `priority: 0.3`, y el encadenamiento de `publishingPrinciples` de 9.6. Las etiquetas pasan por `dictionary.nav.menu.*` como todos los demás enlaces del pie, así que necesitan una entrada cada una en `lib/site-translations.json` — cuidado ahí, el script de traducciones es notoriamente invasivo (regla del proyecto: snapshot antes de ejecutarlo).

**Lista de comprobación de contenidos del aviso legal.** Nombre completo, dirección apta para notificaciones, correo electrónico más un segundo canal para el contacto rápido y, en ofertas periodístico-editoriales, además el responsable de contenidos con dirección (§ 18, apdo. 2, MStV, el tratado estatal alemán de medios — evidente en guías de viaje elaboradas editorialmente; en caso de duda, incluirlo: no cuesta nada). Comprueba brevemente antes de publicar si sigue habiendo que incluir el aviso, antes habitual, sobre la plataforma europea de resolución de litigios en línea; la plataforma se ha descontinuado.

**El problema de la dirección es el verdadero bloqueante.** «Apta para notificaciones» significa: una dirección en la que se pueda practicar la entrega. Un apartado de correos no basta, y una mera indicación c/o sin disponibilidad real tampoco. Quien no quiera publicar su domicilio particular necesita un servicio de aviso legal con dirección apta para notificaciones o una dirección c/o con posibilidad de entrega acreditable. Es un trámite de unos pocos días y el único punto de 9.1 que no queda resuelto esa misma tarde — por eso hay que iniciarlo primero y construir las rutas después.

**Lista de comprobación de contenidos de la política de privacidad (art. 13 RGPD).** Responsable del tratamiento con datos de contacto; por cada tratamiento, finalidad y base jurídica; destinatarios y encargados del tratamiento (Vercel Inc. para el alojamiento y la analítica; en su caso la Wikimedia Foundation como destinataria tercera mientras existan hotlinks, ver 9.2); transferencia a terceros países incluida la garantía; plazo de conservación; derechos de las personas interesadas incluida la oposición; derecho a reclamar ante la autoridad de control. No olvidar: los registros de servidor del proveedor de alojamiento son un tratamiento propio (dirección IP, art. 6, apdo. 1, letra f) y hay que mencionarlos, aunque nadie los analice.

### 9.2 Los tres supuestos de protección de datos sin resolver

Hoy hay tres supuestos funcionando en producción sin base en una política de privacidad que no existe. Ninguno de ellos es un escándalo, los tres se resuelven en unas pocas horas — pero hay que nombrarlos por separado, porque tienen bases jurídicas distintas y arreglos técnicos distintos.

**(a) Vercel Analytics ya está en marcha; Speed Insights se sumará.** `app/layout.tsx:2` importa `{ Analytics } from "@vercel/analytics/next"`, `:75` renderiza `<Analytics />` incondicionalmente en cada petición — fuera del `LanguageProvider`, sin condición alguna, en todas las rutas. La sección 4 añade `@vercel/speed-insights` encima. Por hacer: aceptar activamente el contrato de encargo del tratamiento en el panel de Vercel (no se aplica automáticamente al dar de alta la cuenta), revisar la vía de transmisión a EE. UU. y la garantía de transferencia, y mencionar ambas cosas en la política de privacidad, junto con la finalidad («medición agregada de alcance y rendimiento») y el plazo de conservación. Sobre la base jurídica: Vercel describe ambos productos, según indica el proveedor, como productos sin cookies y sin reconocimiento personal — eso sostiene una argumentación basada en el art. 6, apdo. 1, letra f, pero no es lo mismo que «no hace falta consentimiento», porque el § 25 TDDDG (Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz, la ley alemana de protección de datos en telecomunicaciones y servicios digitales) abarca todo acceso a equipos terminales y la calificación del script del lado del cliente puede ser discutible. Ese es el único punto de 9.2 para el que tiene sentido una valoración de abogada. Si resulta negativa, hay que vincular `<Analytics />` a un consentimiento — lo que cuesta toda la ventaja del último párrafo de este capítulo.

**(b) Los hotlinks a Wikimedia son una transferencia a terceros países, no un problema de rendimiento.** `unoptimized={…src.startsWith("http")}` aparece en `detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`, `los-roques-guide.tsx:97,113`, `medanos-guide.tsx:288,307`, `pico-bolivar-guide.tsx:183,212`, `island-carousel.tsx:53`, `localized-detail-page.tsx:156`. Eso desactiva el optimizador de imágenes de Vercel, y el navegador de cada visitante de la UE contacta entonces **directamente** con `commons.wikimedia.org` — transmite por tanto dirección IP, user agent y referrer a un servidor estadounidense, sin base jurídica y sin aviso. Estructuralmente es la misma constelación que las Google Fonts incrustadas, cuya valoración por el LG München I (Tribunal Regional de Múnich I; 20/01/2022, expediente 3 O 17493/20, 100 € de indemnización) desencadenó las conocidas oleadas de requerimientos legales. La analogía no es exacta — la Wikimedia Foundation no es un grupo publicitario, y se trata de una resolución de primera instancia sobre un caso concreto, sin aclaración del tribunal supremo — pero el mecanismo es idéntico, y la práctica de los requerimientos legales no pregunta por el destinatario.

El arreglo ya está en el plan, solo que con la justificación equivocada: la sección 4 elimina `unoptimized` por motivos de LCP. En cuanto desaparezca, el optimizador recupera la imagen del lado del servidor y la sirve desde `mrsvenezuela.com`; el navegador del visitante nunca habla con Wikimedia. Una sola intervención técnica, dos problemas resueltos — **por eso tiene prioridad sobre todo lo demás de la sección 4.** Los `remotePatterns` de `next.config.ts:5-15` se quedan como están y no son problemáticos, porque solo permiten la descarga del lado del servidor. La transferencia desaparece definitivamente cuando los seis hotlinks de `lib/content.ts` estén sustituidos por archivos locales (9.3 y sección 4) — después de eso, `remotePatterns` puede suprimirse.

**(c) Acceso al almacenamiento: una vez localStorage, una vez una cookie que nadie lee.** `components/i18n/language-provider.tsx:18` lee `localStorage["descubre-venezuela-language"]` en el montaje, `:26` escribe esa misma clave, `:27` establece además la cookie `mrs-venezuela-language` con `max-age=31536000` (doce meses). Los nombres no coinciden entre sí, y una búsqueda en todo el repositorio **no encuentra ni un solo punto de lectura** de esa cookie — se establece y nunca se evalúa.

Calificación: almacenar el idioma elegido por el propio usuario es un ajuste iniciado por él y resulta defendible conforme al § 25, apdo. 2, n.º 2 TDDDG como «estrictamente necesario» para el servicio expresamente solicitado. El acceso de lectura de `:18`, sin embargo, ocurre antes de cualquier acción del usuario y en cada carga de página; también cae bajo el § 25, pero queda cubierto por esa misma finalidad. Defendible no significa sin documentar: en la política de privacidad debe ir una tabla con nombre, tipo, finalidad y duración por cada entrada.

Concreto y resoluble hoy: **borrar la línea 27.** Una cookie que nunca se lee es una infracción de la minimización de datos (art. 5, apdo. 1, letra c) sin contrapartida alguna, y reduce a la mitad la tabla de la política de privacidad. Si más adelante la sección 6 trae bifurcaciones de idioma del lado del servidor, el idioma vendrá de la URL (`/en/...`), no de una cookie — así que tampoco entonces hará falta la cookie.

**La ventaja que nadie ha advertido en el plan, y la regla que la protege.** Las tipografías están integradas mediante `next/font/google` (`app/layout.tsx:13-22`) y por tanto se autoalojan en tiempo de compilación — ninguna petición a Google desde el visitante. No hay cookie de seguimiento, ni scripts publicitarios, ni contenidos ajenos incrustados. **Este sitio hoy no necesita banner de consentimiento.** Es una ventaja tangible en LCP, INP y CLS, y es una ventaja para Discover, porque un muro de superposición sobre el viewport es justo lo contrario de la experiencia de usuario que se exige.

De ahí sale una regla dura, que va en `CLAUDE.md`:

> Ningún contenido de terceros que cargue en el visitante sin una decisión previa: embeds de YouTube (plan 8.4), widgets de afiliación y reserva, servicios de mapas, redes publicitarias, scripts de comentarios o de boletines. Cada uno de estos elementos obliga a una solución de consentimiento y, con ella, a un script adicional cargado temprano más una superposición — y cuesta por tanto exactamente los valores que mejora la sección 4.

El plan propone varias de estas cosas sin mencionar la consecuencia. Si llega una integración de YouTube, que sea exclusivamente como fachada de clic para cargar (imagen de vista previa estática, iframe solo tras el clic) — es la única variante que no invierte la situación.

### 9.3 Licencias de imagen — el riesgo abierto más caro

El borrador trata los derechos de imagen en la sección 3.6 como un asunto de schema (`ImageObject` con `license`) y en la hoja de ruta como una línea P1: «rellenar `credits` en las 16 guías que faltan». Ambas cosas son correctas y ambas se quedan cortas, porque solo abarcan la parte del inventario para la que existe siquiera un campo de datos.

**La situación verificada, en tres niveles:**

1. **Guías con créditos: 6 de 23.** `grep -c "license:" lib/states/data/*.ts` devuelve entradas solo para `merida` (4), `falcon` (3), `zulia` (3), `carabobo` (1), `la-guaira` (1), `sucre` (1) — 13 créditos en total. Las otras 17 guías no tienen array `credits`, pero muestran fotos.
2. **Seis hotlinks a Commons sin ningún campo.** `lib/content.ts:46,55,58,60,61` llaman a `commonsFile(...)` (Los Roques, Puerto Cabello, Playa Medina, Chichiriviche, Macuto), y `:63-64` contiene una URL de Commons escrita a mano (Pico Bolívar). Para ninguno de esos seis existe un lugar donde pudieran figurar autor y licencia: `DiscoverItem` (`lib/content.ts:26-37`) conoce exactamente `image: string`. Estas imágenes aparecen en `heroSlides` (`:81`) y en `searchIndex` (`:382`) — es decir, en la portada y en los listados, no en una posición marginal.
3. **83 archivos locales en `public/images` sin ninguna documentación de procedencia.** De ellos, 57 quedan excluidos del despliegue mediante `.vercelignore`; unos 26 se sirven realmente. Los patrones de nombres de los archivos excluidos — `cayo-de-agua-candidate-1..3`, `isla-la-tortuga-candidate-1..9`, `mochima-option-1..6`, `patanemo-viajero-1..2` — son el patrón de una búsqueda en la web con selección posterior. No servirse no significa estar libre de riesgo: los archivos siguen en el repositorio de Git.

**A eso se suma un tercer modelo de datos, incompatible.** `medanos-guide.tsx:57-68` y `pico-bolivar-guide.tsx:40-44` llevan cada uno su propio array local `credits` con el campo `file` (nombre de archivo en Commons), mientras que `StateCredit` (`lib/states/types.ts:73`) usa `href`. Tres formas para la misma información, ninguna de ellas completa.

**Qué le falta en concreto al crédito existente.** `state-editorial-guide.tsx:503-521` renderiza los créditos existentes dentro de un `<details>` plegado y muestra la licencia como texto plano («CC BY-SA 3.0»), sin enlace. CC BY y CC BY-SA exigen cuatro elementos: título de la obra, autor, enlace a la licencia, enlace a la fuente — y, en caso de ediciones, una indicación de los cambios. El **enlace a la licencia** que falta es el defecto inequívoco; el `<details>` plegado es defendible, un pie de foto junto a la imagen es la vía segura y aporta de paso contexto para la búsqueda de imágenes y para el chunking de los sistemas de IA (sección 7).

**Medida 1 — una única fuente.**

```ts
// lib/image-credits.ts
export type ImageCredit = {
  /** Exactamente el valor `src` tal como aparece en el código (ruta local o URL remota). */
  src: string;
  /** "Wikimedia Commons", "Unsplash", "Foto propia", "Licencia adquirida: <proveedor>" */
  source: string;
  author: string;
  /** Nombre visible, p. ej. "CC BY-SA 4.0" o "Todos los derechos reservados". */
  license: string;
  /** URL del deed; vacía solo en fotos propias. */
  licenseUrl: string;
  /** Página de descripción del archivo o URL justificativa. */
  filePage: string;
  /** Obligatorio en CC BY-SA si se ha editado: "Recorte y ajuste de color". */
  changes?: string;
  /** Título de la obra según la fuente, si difiere del `alt`. */
  title?: string;
};

export const imageCredits: Record<string, ImageCredit> = {
  "https://commons.wikimedia.org/wiki/Special:FilePath/Village%20Gran%20Roque.jpg?width=1800": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Village%20Gran%20Roque.jpg?width=1800",
    source: "Wikimedia Commons",
    author: "…",
    license: "…",
    licenseUrl: "…",
    filePage: "https://commons.wikimedia.org/wiki/File:Village_Gran_Roque.jpg",
  },
};

export function creditFor(src: string): ImageCredit | undefined {
  return imageCredits[src];
}
```

`StateCredit` no se amplía, se reemplaza: las 13 entradas existentes se trasladan a `lib/image-credits.ts`, `guide.credits` desaparece de `StateGuideData` y las guías solo referencian ya `photo.src`. Así, la misma tabla alimenta la atribución visible **y** el `ImageObject` de la sección 3.6 — la correspondencia que allí se exige entre la cadena `license` y la URL del deed deja de ser un mapeo y pasa a ser un campo.

**Medida 2 — un control de compilación no negociable.** Sin control, el directorio volverá a tener huecos en tres meses; es el mismo mecanismo que generó el canonical de `/playas`.

```ts
// scripts/check-image-credits.ts
import { heroSlides, searchIndex } from "@/lib/content";
import { getStateGuide, stateGuideSlugs } from "@/lib/states";
import { imageCredits } from "@/lib/image-credits";

const used = new Set<string>();
const push = (src?: string | null) => { if (src) used.add(src); };

for (const slide of heroSlides) push((slide as { image?: string }).image);
for (const item of searchIndex) push(item.image);

for (const slug of stateGuideSlugs) {
  const guide = getStateGuide(slug);
  if (!guide) continue;
  // Recoger recursivamente cada `photo.src` del objeto de la guía.
  const walk = (node: unknown): void => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    const rec = node as Record<string, unknown>;
    if (typeof rec.src === "string" && typeof rec.alt === "string") push(rec.src);
    Object.values(rec).forEach(walk);
  };
  walk(guide);
}

const missing = [...used].filter((src) => !imageCredits[src]).sort();

if (missing.length > 0) {
  console.error(`Fehlender Bildnachweis für ${missing.length} Datei(en):`);
  for (const src of missing) console.error(`  - ${src}`);
  console.error("Eintrag in lib/image-credits.ts ergänzen oder Bild entfernen.");
  process.exit(1);
}

console.log(`Bildnachweise vollständig: ${used.size} referenzierte Bilder.`);
```

```jsonc
// package.json — tsx resuelve las rutas "@/*" a partir de tsconfig.json
"scripts": {
  "check:credits": "tsx scripts/check-image-credits.ts",
  "prebuild": "npm run check:credits"
}
```

`npm i -D tsx`. El script `prebuild` se ejecuta también en Vercel antes de `next build`; una imagen sin entrada impide el despliegue. La comprobación debe ir además en la CI de la sección de proceso, para que falle ya en el pull request y no solo en el despliegue. De forma complementaria, una regla de lint en esa misma CI: ningún `<Image>` con `src` literal que no pase por `imageCredits`.

**Medida 3 — atribución visible como componente.** Un único lugar donde se define la forma de salida, en vez de seis guías con marcado propio:

```tsx
// components/content/image-credit.tsx
import { creditFor } from "@/lib/image-credits";

export function ImageCredit({ src, className }: { src: string; className?: string }) {
  const credit = creditFor(src);
  if (!credit) return null;

  return (
    <figcaption className={className}>
      <a href={credit.filePage} target="_blank" rel="noreferrer">{credit.title ?? credit.source}</a>
      {" — "}{credit.author}{", "}
      {credit.licenseUrl
        ? <a href={credit.licenseUrl} target="_blank" rel="license noreferrer">{credit.license}</a>
        : credit.license}
      {credit.changes ? ` · ${credit.changes}` : null}
    </figcaption>
  );
}
```

El `<Image>` pasa entonces a ir dentro de un `<figure>`; `place-gallery.tsx:163-168` y `state-locator.tsx:20-22` ya usan `<figure>/<figcaption>` y demuestran que la forma funciona en el layout. `rel="license"` es la relación de enlace correcta y hace que el dato sea legible por máquinas.

**Medida 4 — página recopilatoria `/creditos`.** Una ruta de servidor que renderice `imageCredits` como lista, agrupada por fuente, con `canonical` propio, enlazada en el pie junto a `/aviso-legal`. No sustituye a la atribución junto a la imagen, la complementa — y es la página a la que se remite cuando alguien pregunta.

**Medida 5 — la incómoda.** Para cada uno de los aproximadamente 26 archivos locales que se sirven debe poder acreditarse una procedencia. Donde no sea así, la imagen se sustituye, no se documenta a ojo. Commons ofrece material bajo CC BY / CC BY-SA para cada motivo de este plan; la regla del proyecto «nunca la misma foto dos veces» sigue vigente. Orden: primero las imágenes de portada y de hero (máxima visibilidad, máximo riesgo de que las detecten mediante búsqueda inversa), después las páginas de detalle. Seguir sirviendo imágenes sin procedencia acreditable es la única posición de todo este plan que se encarece con cada día que pasa.

### 9.4 Marca y dominio

La sección 8.6 decide llevar toda la entidad a «Mrs Venezuela» y menciona como único riesgo la colisión en las SERP con el concurso de belleza. Esa es la mitad menor. La mayor: «Miss Venezuela» está establecida en el mercado como distintivo de una organización conocida, y «Mrs.» es un elemento distintivo habitual en el entorno de los certámenes. Si de ahí resultan marcas registradas en las clases relevantes aquí es algo **no comprobado** — precisamente ese es el punto. Un sitio con presencia comercial bajo `mrsvenezuela.com` puede provocar una solicitud de justificación de derechos, una reclamación UDRP o un requerimiento legal (Abmahnung), y el daño crece de forma proporcional a lo completa que sea la consolidación: llevar backlinks, consultas de marca, referencias `sameAs` y perfiles sociales a un nombre que después haya que abandonar es el desenlace más caro imaginable.

**Antes del punto 16 de la hoja de ruta, no después:** búsqueda en TMview, DPMAregister, el registro de la EUIPO y USPTO TESS sobre «Mrs Venezuela», «Miss Venezuela» y «Venezuela» como elemento denominativo, en las clases de Niza 39 (viajes), 41 (entretenimiento, también concursos de belleza) y 16 (productos de imprenta). Documentar el resultado — también un resultado negativo es un resultado y justifica la inversión en la marca. Si hay coincidencias: decisión consciente con una posición de repliegue documentada, en lugar de seguir adelante en silencio.

**Asegurar ahora el dominio de reserva, no cuando llegue la emergencia.** Digno de mención y hasta ahora no nombrado en el plan: el sitio ya opera hoy con dos nombres. `app/layout.tsx:27-31` define como título por defecto y como `og:siteName` «Descubre Venezuela», mientras que `lib/institutional-i18n.ts` usa «Mrs Venezuela» de forma sistemática. La entidad ya está escindida — la sección 8.6 lo resuelve, y esa misma decisión debería arrastrar el segundo dominio. Un dominio cuesta al año menos que una hora de asesoría jurídica.

**Con independencia del resultado en materia de marcas, a resolver una sola vez:** activar el bloqueo del registrador (`clientTransferProhibited`), activar la renovación automática y comprobar la validez del método de pago, 2FA en la cuenta del registrador, titular = la responsable del sitio en persona (no una agencia, no una cuenta de un proveedor de servicios), fecha de vencimiento como entrada recurrente en el calendario, y la dirección de contacto del WHOIS tiene que ser realmente accesible — un correo de verificación de la ICANN sin confirmar lleva a la suspensión del dominio, con independencia de todo lo demás. Un dominio perdido deja sin valor cada línea de este plan; es la única posición en la que no hay vuelta atrás.

### 9.5 Accesos y continuidad

**La dirección oficial es hoy un Gmail.** `components/institutional/contact-page-content.tsx:6` define `const email = "infomrsvenezuela@gmail.com"`, `components/sections/home-footer.tsx:70,74` la enlaza y la muestra. El borrador la escribe además en `Organization.email` (sección 3). Eso está mal en tres sitios: como señal de confianza (una organización sin dirección en su propio dominio), en el aviso legal (Impressum) (ahí figura la dirección por la que la responsable del sitio es localizable a efectos comerciales) y en el grafo de entidades (`Organization.email` debería pertenecer al dominio; si no, el propio nodo es débil).

**Crear `info@mrsvenezuela.com` y sustituirla en un solo commit** — las dos apariciones más el nodo de schema previsto. Después, configurar la autenticación de correo; de lo contrario, el dominio es suplantable por terceros:

```dns
; SPF — solo el servicio de envío realmente utilizado, nada de cajones de sastre con ~all
mrsvenezuela.com.            TXT  "v=spf1 include:<versanddienst> -all"

; DKIM — el selector y la clave los facilita el proveedor de correo
<selector>._domainkey        TXT  "v=DKIM1; k=rsa; p=<public-key>"

; DMARC — empezar con p=none, leer los informes, luego endurecer
_dmarc                       TXT  "v=DMARC1; p=none; rua=mailto:dmarc@mrsvenezuela.com; fo=1; adkim=s; aspf=s"
```

El orden es obligatorio: verificar primero SPF y DKIM, dejar DMARC unas semanas en `p=none` y analizar los informes agregados, luego `p=quarantine`, luego `p=reject`. Quien pase directamente a `p=reject` bloquea, en caso de duda, su propio correo — por ejemplo los mensajes de formulario de la infraestructura de Vercel, si `/contacto` recibe más adelante un backend.

**El punto único de fallo en los accesos es la segunda parte.** Search Console, Bing Webmaster Tools, Vercel, GitHub, registrador, Ahrefs, clave de IndexNow: en ningún sitio está documentado ni asegurado a quién pertenecen. El plan advierte con razón de no borrar nunca el registro TXT de GSC, pero pasa por alto que una cuenta privada individual ata a sí misma todo el historial de búsqueda — y ese historial no se puede recuperar. Un acceso perdido a la propiedad significa: nueva verificación, pero ninguna devolución de los datos históricos.

En concreto: dar de alta en cada propiedad un **segundo propietario** (en la GSC, un segundo propietario verificado mediante un método de verificación distinto del registro TXT, para que un único fallo de DNS no invalide ambos), 2FA en todas partes con códigos de respaldo guardados sin conexión, todos los accesos en un gestor de contraseñas, y un documento de una sola página: «qué servicio, qué cuenta, qué método de recuperación». Es una hora de trabajo y la diferencia entre una caída y una pérdida total.

### 9.6 Política editorial, de correcciones y de identificación de IA

En el borrador, la divulgación del uso de IA es un párrafo en `/sobre-nosotros`. Para una responsable del sitio con sede en Alemania que publica textos editoriales y que, según la sección 6, quiere escalar con traducción automática, eso es poco — no porque un párrafo sea jurídicamente insuficiente por fuerza, sino porque una página propia y enlazada hace el mismo trabajo y rinde tres veces: como señal de confianza para los lectores, como prueba para los Quality Rater y como fuente de datos para dos propiedades de schema que en el borrador sencillamente faltan.

**Una ruta, `/politica-editorial`,** con seis bloques:

1. **Quién escribe.** Autoría nominal con vínculo con el tema — la responsable del sitio es venezolana; ese es el componente de experiencia demostrable y hay que nombrarlo, no insinuarlo.
2. **Qué fuentes.** Qué categorías de fuentes se utilizan (organismos oficiales, instituciones sobre el terreno, viajes propios, archivos de imágenes) y cuáles no (aportaciones de foros y redes sociales sin respaldo como única base).
3. **Cómo se verifica.** Regla de dos fuentes para las cifras; ninguna cifra sin fuente y fecha; precios solo con moneda y fecha de recogida (véase 9.7).
4. **Cómo se corrige.** Nota de corrección con fecha al pie del artículo afectado, sin correcciones silenciosas en errores de contenido; una dirección de contacto para avisos de errores; un compromiso de plazo de tramitación que sea realista.
5. **Grado de apoyo de la IA.** Para qué se emplea la IA (investigación, estructuración, borrador de traducción) y para qué no (afirmaciones factuales sin revisión humana, relatos de experiencia inventados). A esto se suma la regla dura de D3, formulada aquí de manera públicamente verificable: **ninguna URL `/en` sale en producción sin revisión de un hablante nativo.** La traducción automática sin revisar es un ejemplo expreso de "scaled content abuse" (abuso de contenido a escala) — publicar la regla en la propia página de política es la autolimitación más barata que existe.
6. **Quién responde.** Con nombre, y con remisión a `/aviso-legal`.

Hasta qué punto las obligaciones de transparencia del AI Act alcanzan a los textos editoriales es una cuestión para la revisión jurídica; la divulgación voluntaria es aquí el camino más barato y cubre el caso con independencia de la respuesta.

**El efecto secundario en schema.** Ambas propiedades faltan en el borrador de la sección 3 y con esta página se consiguen sin esfuerzo adicional:

```ts
{
  "@type": "Organization",
  "@id": "https://mrsvenezuela.com/#organization",
  "name": "Mrs Venezuela",
  "email": "info@mrsvenezuela.com",
  "publishingPrinciples": "https://mrsvenezuela.com/politica-editorial",
  "correctionsPolicy": "https://mrsvenezuela.com/politica-editorial#correcciones"
}
```

Ninguna de las dos propiedades genera un rich result, ni debe hacerlo — son señales de entidad y apuntan a una página que existe de verdad. Requisito previo: que el ancla `#correcciones` exista en el marcado.

La página se enlaza en el footer y en la zona de autoría de cada guía. Un enlace solo en el pie de página basta como señal de confianza; un enlace justo al lado del nombre de la autora es más eficaz.

### 9.7 La información de viaje como tema YMYL

El borrador roza YMYL solo en la página prevista `/venezuela/es-seguro-viajar`. En realidad afecta a todo lo publicado: las 23 guías contienen «cómo llegar», datos de transporte y de fronteras sobre un país con una situación volátil. La ejecución editorial —`verifiedAt` y `volatility` por bloque de datos, obligación de actualizar solo para los volátiles— está en la sección 5. Aquí se trata de los tres puntos que de ahí quedan en lo jurídico.

**Primero: un aviso de responsabilidad que limite el compromiso sin sanear datos incorrectos.** El texto va en `/aviso-legal` y, de forma abreviada, en el bloque práctico de cada guía: la información de viaje se investiga según el mejor saber, sin garantía de exactitud, integridad ni actualidad; el sitio no es una agencia de viajes y no asume función de asesoramiento; lo determinante son las indicaciones oficiales del país de origen. Importante y a menudo malinterpretado: un aviso así limita la promesa de prestación, no sustituye a la diligencia. Un dato falso formulado como hecho sigue siendo un dato falso — la consecuencia se ataja en lo editorial, no en lo jurídico.

**Segundo: remisión a los organismos competentes en lugar de una valoración propia de la situación.** La situación de seguridad, los requisitos de entrada y las recomendaciones sanitarias no se valoran con palabras propias, sino que se enlazan — Auswärtiges Amt (el ministerio alemán de Exteriores, avisos de viaje y de seguridad), U.S. Department of State (Travel Advisories) y la Cancillería venezolana para la página de entrada al país. Esas remisiones son a la vez el ancla de autoridad citable más fuerte que pueden tener estas páginas, y coinciden con lo que el único estudio GEO con revisión por pares mide como eficaz (sección 7). Los enlaces externos hacia ahí siguen siendo `follow`.

**Tercero: ningún dato de precio o de seguridad sin fecha.** Con la inflación venezolana, cualquier precio sin fecha es falso en cuestión de semanas, y un precio falso en una página de viajes es exactamente el tipo de error que un Quality Rater toma como prueba de falta de diligencia. Regla: cada cifra con moneda (VES o USD, escrito) y fecha de recogida; si no, nada. Un bloque visible al comienzo de cada sección práctica — «Datos verificados el … · Consulta siempre las recomendaciones oficiales de tu país» — resuelve la datación y la remisión a la fuente en una sola línea. Sin esa regla, las páginas previstas `/venezuela/dinero-y-pagos` y `/presupuesto` no se pueden publicar de forma responsable; hay que escribirlas después de introducir `verifiedAt`, no antes.

### 9.8 Identificación publicitaria y colaboraciones

El sitio busca hoy activamente colaboraciones (`lib/institutional-i18n.ts:11`, renderizado en `/contacto`), pero no tiene ninguna regla para el primer enlace pagado. La regla tiene que existir antes, porque en el momento de la primera oferta ya no se toma de forma neutral.

**Identificación.** El fin comercial de una publicación debe ser reconocible cuando no se desprenda directamente de las circunstancias (§ 5a apdo. 4 UWG, la ley alemana contra la competencia desleal); a eso se añaden, según cómo se clasifique, los requisitos sobre comunicación comercial del § 6 DDG (la ley alemana de servicios digitales) y sobre publicidad en telemedios del § 22 MStV (el tratado interestatal alemán de medios). En la práctica eso significa: identificación **en el texto**, al principio de la sección o del artículo afectado, en el idioma de la página («Publicidad», «Contenido patrocinado», «Enlace de afiliado»), bien legible — no en el footer, no como letra pequeña en gris, no como hashtag al final. Una estancia gratuita, un viaje pagado o un producto cedido son ventajas económicas y están sujetos a la misma regla que el dinero.

**Marcado de los enlaces.** Los enlaces pagados o motivados por ventajas económicas llevan `rel="sponsored"`; los enlaces sin verificar o procedentes de aportaciones de usuarios, `rel="nofollow"` o `rel="ugc"`. Para que no se pueda olvidar, eso va en un componente y no en la disciplina:

```tsx
// components/content/paid-link.tsx
export function PaidLink({
  href, children, kind = "sponsored",
}: { href: string; children: React.ReactNode; kind?: "sponsored" | "nofollow" }) {
  return (
    <a href={href} rel={`${kind} noopener noreferrer`} target="_blank" data-commercial="true">
      {children}
    </a>
  );
}
```

El atributo `data-commercial` no es una señal SEO, sino un punto de comprobación: la CI puede verificar con él que toda página con al menos un enlace de este tipo lleva también un bloque de identificación visible.

**Lo que no es negociable.** Nada de alquilar subpáginas o directorios a terceros — eso es "site reputation abuse" (abuso de la reputación del sitio) y Google lo trata como una infracción propia, con independencia de la calidad del contenido. Las recomendaciones editoriales y las colocaciones pagadas se mantienen separadas: un alojamiento que esté dentro de una colaboración no aparece en un ranking presentado como editorial.

**El flanco de rendimiento que el plan ha ignorado hasta ahora.** Los widgets de afiliación y de reservas son la causa individual más frecuente de caídas de INP y CLS: cargan scripts de terceros, desplazan el layout después del primer paint y ocupan el hilo principal justo en la fase en la que el usuario escribe o hace scroll por primera vez. A eso se suma la obligación de consentimiento de 9.2, es decir, otro script cargado pronto más un overlay. Un solo widget integrado puede consumir todo el trabajo de la sección 4. Regla: **ningún widget de terceros sin una medición de antes y después** en la página realmente afectada (medición de campo o, como mínimo, de laboratorio de LCP, INP, CLS), y sin plan de salida por si la medición sale mal. Enlaces de texto en lugar de widgets siempre que se pueda — no cuestan nada y son jurídicamente más fáciles de identificar.

La política de colaboraciones va en la misma página que 9.6 (`/politica-editorial`), como sección propia con ancla. Así queda pública antes de que llegue la primera oferta, y la negociación empieza en las condiciones propias.

### Orden

Los puntos de esta sección no compiten con la hoja de ruta, se le cuelan por debajo en tres lugares:

1. **9.3, control de compilación y procedencia de las imágenes** — la única posición que se encarece con cada deploy. El control primero, porque congela lo existente; el saneamiento, después.
2. **9.2 (b), eliminar `unoptimized`** — figura en la sección 4 como P1 por motivos de LCP y es al mismo tiempo el arreglo de protección de datos. Subirlo a P0; una intervención, dos problemas.
3. **9.1, aviso legal y política de privacidad** — una tarde de trabajo, en cuanto esté aclarada la dirección postal válida para notificaciones. Por eso hay que poner en marcha de inmediato la cuestión de la dirección, aunque el resto espere.

Después 9.5 (una hora, evita la pérdida total), 9.4 (búsqueda antes del punto 16 de la hoja de ruta), 9.6 y 9.8 juntas como una sola página, 9.7 junto con `verifiedAt` de la sección 5.

---

---

## 10. Proceso y aseguramiento

Todo lo anterior describe estados que un solo push puede deshacer. El canonical de `/playas` de 2.1 no fue un error de razonamiento, sino un efecto secundario: alguien pasó una página a `"use client"`, todo se veía correcto en el navegador y después nadie miró el HTML compilado. Precisamente esa clase de errores —invisibles en funcionamiento, visibles solo en la salida— es la razón de esta sección. Es la única medida del plan que mantiene las demás en el tiempo.

### 10.1 CI y control de compilación

**Hallazgo.** `package.json` tiene exactamente cuatro scripts: `dev`, `build`, `start`, `lint`. Ni `typecheck`, ni tests, ni comprobación de la salida. `.github/` no existe: no hay un solo paso automatizado entre `git push` y producción. Cada push a `main` dispara el deploy de Vercel, y lo que aterriza allí no lo ha comprobado nadie contra nada. Así surgió el bug de `/playas` y así volvería: `.next/server/app/playas.html` lleva hoy literalmente `<link rel="canonical" href="https://mrsvenezuela.com"/>` y el título de la portada. Se habría visto en menos de un segundo, solo que nadie lo ejecutó nunca.

Dos cosas están mejor de lo esperado y cambian el orden de introducción: `npx tsc --noEmit` y `npm run lint` pasan **sin errores** en el estado actual (ambos ejecutados en local, exit 0). La CI se puede introducir de inmediato, sin tener que desmontar antes una montaña de deuda heredada. Desde el primer día es puro blindaje contra regresiones. El control de 10.2, en cambio, rompe de inmediato en el estado actual: por eso va en el mismo commit que las correcciones P0 de 2 y 3, no antes.

El script `lint` existente llama directamente a `eslint` y ya es la forma a prueba de futuro: `next lint` está deprecado en 15.5 y desaparece en Next 16 (`node_modules/next/dist/cli/next-lint.js:50` emite exactamente esa advertencia). No hay nada que cambiar ahí, solo que añadir:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "postbuild": "node scripts/seo-check.mjs",
    "start": "next start",
    "lint": "eslint",
    "typecheck": "tsc --noEmit",
    "seo:check": "node scripts/seo-check.mjs"
  }
}
```

`postbuild` es el enganche decisivo: npm lo ejecuta después de **cada** `npm run build` —en la CI, en local y en Vercel, siempre que allí corra el script `build` del proyecto (caso estándar; en caso de duda, mirar en *Settings → General → Build Command* y ponerlo en `npm run build`)—. Una infracción rompe así también el build de Vercel, y un build roto no se entrega; la última versión de producción que funcionaba sigue online. Eso cierra el hueco que una GitHub Action por sí sola deja abierto: el proyecto está enlazado localmente con Vercel (`.vercel/` existe), y un `vercel --prod` desde el equipo de trabajo se salta GitHub. Quien quiera compilar en local a sabiendas con infracciones conocidas, llama a `npx next build` directamente: eso esquiva los hooks del ciclo de vida de npm, pero solo en local y de forma visible.

`.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

permissions:
  contents: read

jobs:
  verify:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    env:
      NEXT_TELEMETRY_DISABLED: "1"
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm

      - name: Abhängigkeiten exakt aus dem Lockfile
        run: npm ci

      - name: Typen
        run: npx tsc --noEmit

      - name: Lint
        run: npm run lint

      - name: Build und SEO-Invarianten
        run: npm run build
```

Sobre el orden, porque no es arbitrario:

- **`npm ci` en lugar de `npm install`.** Instala exactamente el estado de `package-lock.json` (existe) y aborta si el lockfile y `package.json` divergen. Un build que se elige sus propias versiones no demuestra nada.
- **`tsc` y `eslint` antes de `next build`.** `next build` comprueba tipos y lint por su cuenta, pero, primero, solo después de la parte más costosa y, segundo, ambas comprobaciones se desactivan con una línea cada una en `next.config.ts` (`typescript.ignoreBuildErrors`, `eslint.ignoreDuringBuilds`). Los pasos separados no dependen de esa configuración y avisan en segundos, no después del build completo.
- **Aun así, `next build` sigue en la cadena.** `tsconfig.json` incluye `.next/types/**/*.ts`: esos tipos de rutas generados no existen todavía en un checkout limpio de CI. Lo que `tsc` comprueba ahí es el código escrito a mano; las firmas de las rutas las comprueba únicamente el propio build.
- **`concurrency` con `cancel-in-progress`.** Con varios pushes seguidos solo corre el estado más reciente: ahorra minutos e impide que una ejecución antigua en verde adelante a una nueva en rojo.

Dos workflows comparten así la misma carpeta: `ci.yml` y el `indexnow.yml` de 2.8. Siguen separados: IndexNow avisa solo después del deploy y nunca debe ejecutarse si el build no ha pasado.

### 10.2 `scripts/seo-check.mjs` — invariantes estrictas

El control comprueba **la salida compilada**, no el código fuente. La diferencia no es académica: en este repo está documentada en ambas direcciones:

- En el código fuente hay dos `<h1>` en `components/content/state-editorial-guide.tsx:224` y `:236`. Un grep señala un error que no existe: son las dos ramas de la misma condición ternaria, y en la salida cada una de las 23 páginas de guía tiene exactamente un `<h1>` (contado sobre los 56 archivos HTML compilados: cero infracciones).
- A la inversa, `app/playas/page.tsx` no llama la atención en el código fuente: el archivo no contiene ningún export de metadata, y justo por eso el error solo existe en el resultado.

Sobre ambas cosas decide únicamente `.next/server/app/**/*.html`. La ejecución de comprobación sobre el build de hoy (25/08/2026, 56 archivos HTML, 0,8 s de ejecución) arroja **76 infracciones**:

| Invariante | Por qué es estricta | Hallazgo hoy |
|---|---|---|
| Exactamente un `<link rel="canonical">` por página indexable | Dos canonicals se anulan entre sí; ninguno deja la decisión en manos de Google | 0 |
| Canonical = ruta propia, nunca `/` salvo en `/` | El bug que pliega `/playas` y con ella 14 páginas de playa | 2 (`/playas`, más `/_not-found`, que hereda el canonical de la raíz) |
| `og:url` = canonical | Dos indicaciones de dirección contradictorias en el mismo documento | 2 (`/contacto` y `/sobre-nosotros` envían `og:url` = portada) |
| Exactamente un `<h1>` | Estructura del documento; a la vez la prueba de que aquí los hallazgos por grep no deciden nada | 0 |
| `<title>` ≤ 60 caracteres | Todo lo que pase de ahí se corta en la SERP | 28 de 55 (81–90 caracteres en las guías de estado) |
| El JSON-LD parsea | Un error de sintaxis invalida todo el bloque en silencio | 0 |
| Ningún `@type` fuera de la lista comprobada | `TravelGuide`, `NationalPark` y `Food` no existen (schema.org 404) | 1 (`TravelGuide` en `/`) |
| Toda URL de imagen en el JSON-LD, absoluta | Las URL relativas no son válidas en JSON-LD | 42 |
| Cada imagen tiene una entrada en `lib/image-credits.ts` | Obligación de atribución y prueba de la procedencia de las imágenes (3.7, sección 9) | El registro todavía no existe |
| La sitemap y las rutas compiladas coinciden | Evita que el control pierda rutas sin que se note o anuncie URL muertas | 0 (55 `<loc>`, 55 rutas indexables) |

La última línea es la autoprotección del control: si una ruta se vuelve dinámica, su archivo HTML desaparece de `.next/server/app/`, y todas las invariantes dejarían de aplicársele en silencio. El cotejo contra `sitemap.xml.body` obliga a que ese caso salte a la vista.

```js
// scripts/seo-check.mjs — control de compilación sobre la salida prerenderizada.
// Sin dependencias aparte de node:fs / node:path. Exit 1 rompe el build.
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://mrsvenezuela.com";
const APP_DIR = path.join(".next", "server", "app");
const SITEMAP_BODY = path.join(APP_DIR, "sitemap.xml.body");
const CREDITS_FILE = path.join("lib", "image-credits.ts");
const REDIRECTS_FILE = path.join("lib", "redirects.ts");
const COMMONS_PREFIX = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const TITLE_MAX = 60;

/** Rutas sin entrada en la sitemap: deben entregar noindex, no necesitan comprobación de título. */
const NOINDEX_ROUTES = new Set(["/_not-found"]);
/** Canonicals ajenos deliberados, ruta → ruta destino. Vacío: el plan resuelve las duplicaciones con un 301. */
const CROSS_CANONICAL = new Map();
/** Assets propios de la interfaz: no necesitan entrada en el registro de imágenes. */
const UI_ASSETS = [/^\/flags\//, /^\/icon\b/, /^\/apple-icon\b/, /^\/images\/logo-/];
/** Solo tipos comprobados uno a uno contra schema.org (HTTP 200). Ampliar solo tras comprobarlos. */
const ALLOWED_TYPES = new Set([
  "WebSite", "WebPage", "CollectionPage", "Organization", "Person", "ContactPoint",
  "PostalAddress", "BreadcrumbList", "ListItem", "ItemList", "Article", "ImageObject",
  "VideoObject", "FAQPage", "Question", "Answer", "TouristDestination",
  "TouristAttraction", "AdministrativeArea", "State", "City", "Park", "Beach",
  "Mountain", "Guide",
]);
/** Conocidos como inexistentes: mensaje propio en lugar de "tipo desconocido". */
const DENIED_TYPES = new Map([
  ["TravelGuide", "existiert nicht (schema.org 404)"],
  ["NationalPark", "existiert nicht (schema.org 404) — Park verwenden"],
  ["Food", "existiert nicht (schema.org 404)"],
]);

const errors = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);

function htmlFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const routeOf = (file) =>
  "/" + path.relative(APP_DIR, file).split(path.sep).join("/").replace(/\.html$/, "").replace(/^index$/, "");

const decode = (s) =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
   .replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&");

const attr = (tag, name) => (tag.match(new RegExp(`${name}="([^"]*)"`)) || [])[1];

const stripOrigin = (url) => url.replace(ORIGIN, "").replace(/\/$/, "") || "/";

/** Normaliza la URL de la imagen a la clave que espera creditFor() en lib/image-credits.ts. */
function creditKey(raw) {
  let url = decode(raw);
  if (url.startsWith("/_next/image")) {
    const inner = url.match(/[?&]url=([^&]+)/);
    if (inner) url = decodeURIComponent(inner[1]);
  }
  url = url.replace(ORIGIN, "");
  if (url.startsWith(COMMONS_PREFIX)) return decodeURIComponent(url.slice(COMMONS_PREFIX.length).split("?")[0]);
  return url.split("?")[0];
}

/** Lee las claves del registro de imágenes sin parsear TypeScript. */
function creditKeys() {
  if (!fs.existsSync(CREDITS_FILE)) {
    fail(CREDITS_FILE, "Bildregister fehlt — ohne Register keine Attributionsprüfung");
    return null;
  }
  const src = fs.readFileSync(CREDITS_FILE, "utf8");
  return new Set([...src.matchAll(/"([^"\n]+)":\s*\{/g)].map((m) => m[1]));
}

/** Entradas de lib/redirects.ts; vacío mientras el archivo no exista. */
function redirectEntries() {
  if (!fs.existsSync(REDIRECTS_FILE)) return [];
  const src = fs.readFileSync(REDIRECTS_FILE, "utf8");
  return src
    .split(/\bsource:\s*/)
    .slice(1)
    .map((chunk) => ({
      source: (chunk.match(/^"([^"]+)"/) || [])[1],
      destination: (chunk.match(/destination:\s*"([^"]+)"/) || [])[1],
      conditional: /\bhas:\s*\[/.test(chunk),
    }))
    .filter((entry) => entry.source && entry.destination);
}

function collectJsonLd(html, route) {
  const blocks = [];
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      blocks.push(JSON.parse(match[1]));
    } catch (error) {
      fail(route, `JSON-LD parst nicht: ${error.message}`);
    }
  }
  return blocks;
}

function walkGraph(node, route, images) {
  if (Array.isArray(node)) return node.forEach((child) => walkGraph(child, route, images));
  if (!node || typeof node !== "object") return;
  const type = node["@type"];
  for (const single of Array.isArray(type) ? type : type ? [type] : []) {
    if (DENIED_TYPES.has(single)) fail(route, `@type "${single}" ${DENIED_TYPES.get(single)}`);
    else if (!ALLOWED_TYPES.has(single)) fail(route, `@type "${single}" nicht in der geprüften Typliste`);
  }
  for (const [key, value] of Object.entries(node)) {
    if (["image", "logo", "contentUrl", "thumbnailUrl"].includes(key)) {
      for (const entry of Array.isArray(value) ? value : [value]) {
        if (typeof entry === "string") {
          images.add(entry);
          if (!/^https?:\/\//.test(entry)) fail(route, `Bild-URL im JSON-LD ist relativ: ${entry}`);
        }
      }
    }
    walkGraph(value, route, images);
  }
}

function checkFile(file, credits) {
  const route = routeOf(file);
  const html = fs.readFileSync(file, "utf8");
  const images = new Set();

  const noindex = NOINDEX_ROUTES.has(route);
  const canonicals = [...html.matchAll(/<link[^>]*rel="canonical"[^>]*>/g)].map((t) => attr(t[0], "href"));
  const expected = CROSS_CANONICAL.get(route) ?? route;
  if (canonicals.length > 1) fail(route, `${canonicals.length} Canonical-Tags statt höchstens einem`);

  if (noindex) {
    const robots = [...html.matchAll(/<meta[^>]*name="robots"[^>]*>/g)].map((t) => attr(t[0], "content")).join(" ");
    if (!/noindex/.test(robots)) fail(route, "als noindex geführt, liefert aber kein noindex");
    if (canonicals[0]) fail(route, `noindex-Route erbt einen Canonical: ${canonicals[0]}`);
  } else {
    if (canonicals.length !== 1) fail(route, `${canonicals.length} Canonical-Tags statt genau einem`);
    const canonical = canonicals[0];
    if (canonical) {
      if (stripOrigin(canonical) === "/" && route !== "/") fail(route, `Canonical zeigt auf die Startseite: ${canonical}`);
      else if (stripOrigin(canonical) !== expected) fail(route, `Canonical ${canonical} passt nicht zu ${expected}`);
      const ogUrl = [...html.matchAll(/<meta[^>]*property="og:url"[^>]*>/g)].map((t) => attr(t[0], "content"))[0];
      if (!ogUrl) fail(route, "og:url fehlt");
      else if (stripOrigin(ogUrl) !== stripOrigin(canonical)) fail(route, `og:url ${ogUrl} weicht vom Canonical ${canonical} ab`);
    }
    const title = html.match(/<title>([^<]*)<\/title>/);
    if (!title) fail(route, "<title> fehlt");
    else if (decode(title[1]).length > TITLE_MAX) fail(route, `<title> ${decode(title[1]).length} Zeichen (max. ${TITLE_MAX})`);
  }

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(route, `${h1} <h1> statt genau einem`);

  for (const block of collectJsonLd(html, route)) walkGraph(block, route, images);
  for (const match of html.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)) images.add(match[1]);

  if (credits) {
    for (const image of images) {
      const key = creditKey(image);
      if (UI_ASSETS.some((pattern) => pattern.test(key))) continue;
      if (!credits.has(key)) fail(route, `Bild ohne Eintrag in ${CREDITS_FILE}: ${key}`);
    }
  }
  return route;
}

function checkRedirects(entries, routes) {
  const sources = new Set(entries.map((e) => e.source));
  const seen = new Set();
  for (const { source, destination, conditional } of entries) {
    if (seen.has(source) && !conditional) fail(REDIRECTS_FILE, `${source} ist doppelt eingetragen`);
    seen.add(source);
    if (!conditional && routes.has(source)) fail(REDIRECTS_FILE, `${source} wird gebaut und zugleich umgeleitet`);
    const target = destination.split("#")[0].split("?")[0];
    if (sources.has(target)) fail(REDIRECTS_FILE, `Kettenredirect: ${source} → ${target} → …`);
    if (target.startsWith("/") && !routes.has(target)) fail(REDIRECTS_FILE, `Redirect-Ziel ${target} wird nicht gebaut`);
  }
}

function checkSitemap(routes, entries) {
  if (!fs.existsSync(SITEMAP_BODY)) return fail(SITEMAP_BODY, "Sitemap wurde nicht prerendert");
  const redirected = new Set(entries.filter((e) => !e.conditional).map((e) => e.source));
  const xml = fs.readFileSync(SITEMAP_BODY, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => stripOrigin(decode(m[1])));
  for (const loc of locs) {
    if (!routes.has(loc)) fail("sitemap.xml", `${loc} steht in der Sitemap, wird aber nicht gebaut`);
    if (redirected.has(loc)) fail("sitemap.xml", `${loc} wird umgeleitet und darf nicht in der Sitemap stehen`);
  }
  for (const route of routes) {
    if (NOINDEX_ROUTES.has(route)) continue;
    if (!locs.includes(route)) fail("sitemap.xml", `${route} wird gebaut, fehlt aber in der Sitemap`);
  }
}

if (!fs.existsSync(APP_DIR)) {
  console.error(`${APP_DIR} fehlt — zuerst "npm run build" ausführen.`);
  process.exit(1);
}

const credits = creditKeys();
const entries = redirectEntries();
const files = htmlFiles(APP_DIR);
const routes = new Set(files.map((file) => checkFile(file, credits)));
checkRedirects(entries, routes);
checkSitemap(routes, entries);

console.log(`seo-check: ${files.length} HTML-Dateien geprüft, ${errors.length} Verstöße.`);
if (errors.length) {
  for (const error of errors) console.error(`  ${error}`);
  process.exit(1);
}
```

Cuatro decisiones de diseño que cuentan al seguir construyendo:

- **Sin parser de TypeScript.** `lib/image-credits.ts` y `lib/redirects.ts` se leen como texto. Por eso el registro de imágenes debe llevar sus claves entre comillas y los nombres de campo que hay dentro no (exactamente la forma de 3.7); en el registro de redirecciones, `source` va antes que `destination`. El precio es esa convención; la ganancia, un control sin dependencias que corre en 0,8 s y nunca falla por culpa de un setup de compilación.
- **`creditKey()` normaliza tres formas de dirección a la misma clave:** el envoltorio `/_next/image?url=…` del optimizador, la URL absoluta del sitio y el prefijo de Commons `Special:FilePath/`. Así, el mismo control comprueba las mismas imágenes antes y después de quitar `unoptimized` (P1): el cambio al optimizador altera la `src` que se entrega, no la entrada del registro.
- **`CROSS_CANONICAL` está vacío a propósito.** Un canonical que apunta a una URL ajena no es una herramienta en el sentido de este plan: las duplicaciones se unifican con un 301 (5.4), no se neutralizan con un canonical. Quien aun así necesite uno, tiene que darlo de alta aquí, y con ello justificarlo.
- **`ALLOWED_TYPES` es una lista blanca.** Un tipo nuevo rompe el build hasta que alguien lo dé de alta. Es intencionado: un único tipo sin comprobar (`TravelGuide`) deja la portada hasta hoy sin marcado estructurado válido. Antes del alta va el estado HTTP contra `schema.org/<tipo>`, no la sensación de que ese tipo debería existir.

**Branch Protection en `main`.** Sin ella, el control es evitable con solo evitarlo. En GitHub, en *Settings → Rules → Rulesets* para `main`:

- *Require a pull request before merging* (en una operación de una sola persona, las aprobaciones pueden quedarse en 0: el objetivo es que la CI corra antes del merge, no el principio de cuatro ojos).
- *Require status checks to pass* → `verify`, junto con *Require branches to be up to date before merging*.
- *Block force pushes* y *Restrict deletions*.
- *Do not allow bypassing the above settings*: de lo contrario, la regla vale para todos menos para la única persona que realmente hace push.

**Vía de rollback, documentada una vez.** Vercel → proyecto → *Deployments* → último deployment de producción que funcionaba → *Instant Rollback*. No se vuelve a compilar: se reactiva el artefacto ya existente, y por eso es la vía de vuelta más rápida disponible. Tres cosas van con ella:

1. **Primero revertir, después diagnosticar.** La causa se puede buscar con calma en el deployment de preview.
2. **Un rollback no cambia Git.** Sin un `git revert` a continuación, el siguiente push restablece el estado roto.
3. **Un rollback no retira ningún aviso.** Un ping de IndexNow ya enviado (2.8) y una sitemap ya descargada están fuera. Esa es la verdadera razón por la que el control tiene que estar antes del deploy y no después.

### 10.3 Redirects y estabilidad de URL

**Hallazgo.** `next.config.ts` ocupa 18 líneas y contiene exclusivamente `images.remotePatterns` — ni `redirects()`, ni `headers()`. Un campo para slugs anteriores no existe en ninguna parte. Al mismo tiempo, este plan mueve varias URLs: las tres variantes `?region=` de `components/sections/search-panel.tsx:16-18` a `/estados/<region>`, `/ciudad/caracas` — según lo que se decida en 5.4 — a `/estado/distrito-capital`, `/articulo/ruta-perfecta-14-dias` a una página de itinerario, y además cada fusión que imponga el registro de entidades. Sin registro, cada una de esas URLs pierde al mudarse sus enlaces externos y su historial de indexación.

Qué URL es canónica **no** lo decide esta sección, sino el registro de entidades de 5.4: exactamente una URL canónica por entidad real, `kind` es solo presentación. Las duplicidades (Morrocoy a través de `cayo-sombrero` y `chichiriviche`, Caracas frente a Distrito Capital, Ciudad Bolívar dentro de la guía del estado) se deciden allí una por una. Aquí solo está la herramienta: en cuanto allí una línea cambie su URL, aquí nace una entrada.

```ts
// lib/redirects.ts — fuente única para cada URL que se haya servido alguna vez.
export type RedirectEntry = {
  /** URL antigua, ruta sin dominio. Next compara exclusivamente contra la ruta. */
  source: string;
  destination: string;
  /** Fecha del cambio — permite datar después las preguntas de limpieza. */
  since: string;
  /** Por qué. Sin justificación, dentro de un año nadie sabrá si la entrada sigue vigente. */
  reason: string;
  /** Condición de query para URLs con parámetros; sin ella se redirigiría la propia ruta. */
  has?: { type: "query"; key: string; value?: string }[];
};

export const redirects: RedirectEntry[] = [
  {
    source: "/estados",
    destination: "/estados/los-andes",
    since: "2026-09-01",
    reason: "Region wird eigene Route; Parametervariante war intern verlinkt",
    has: [{ type: "query", key: "region", value: "Los Andes" }],
  },
  {
    source: "/estados",
    destination: "/estados/guayana-y-amazonas",
    since: "2026-09-01",
    reason: "wie oben",
    has: [{ type: "query", key: "region", value: "Guayana y Amazonas" }],
  },
  {
    source: "/estados",
    destination: "/estados/region-central",
    since: "2026-09-01",
    reason: "wie oben",
    has: [{ type: "query", key: "region", value: "Región Central" }],
  },
];
```

```ts
// next.config.ts
import type { NextConfig } from "next";
import { redirects as redirectEntries } from "@/lib/redirects";

const nextConfig: NextConfig = {
  images: { /* … sección 4 */ },
  async headers() { /* … sección 4 */ return []; },
  async redirects() {
    return redirectEntries.map((entry) => ({
      source: entry.source,
      destination: entry.destination,
      permanent: true,
      ...(entry.has ? { has: entry.has } : {}),
    }));
  },
};

export default nextConfig;
```

La importación desde `@/lib/redirects` funciona en 15.5.20 sin paso adicional: Next transpila `next.config.ts` con SWC y registra al hacerlo un require-hook para `.ts`, `.cts`, `.mts`, `.cjs` y `.mjs`; los alias `paths` de `tsconfig.json` se le pasan a SWC (`node_modules/next/dist/build/next-config-ts/transpile-config.js:17-31` y `next-config-ts/require-hook.js`). Así el registro sigue siendo un archivo TypeScript normal y tipado, en lugar de una segunda fuente de verdad en YAML o JSON.

`permanent: true` genera un 308 en vez de un 301. Ambos son igual de permanentes para los buscadores; la diferencia solo afecta a la conservación del método en POST, que aquí no se da.

**La regla para `CLAUDE.md`** — vale igual para personas y para agentes, y es la parte que sin herramienta no se sostiene:

```md
## Regla de URLs
- Una URL que ya se ha servido nunca se borra, sino que se mapea en `lib/redirects.ts` (`permanent: true`).
- Una entrada de `lib/redirects.ts` nunca se vuelve a eliminar. No cuesta nada y es la única protección
  para los enlaces externos que nadie conoce.
- Las cadenas de redirects están prohibidas: si A apunta a B y B apunta después a C, A se reescribe a C en el mismo commit.
- La URL antigua desaparece de `app/sitemap.ts` en el mismo commit.
- Los enlaces internos a la URL antigua se cambian en el mismo commit — punto de partida hoy:
  `components/sections/search-panel.tsx:16-18`.
- Ruta nueva, línea nueva en el registro de entidades (`lib/entities.ts`, sección 5.4) — antes de la primera línea de texto.
```

Cuatro de estas reglas las comprueba mecánicamente `seo-check.mjs` de 10.2: fuentes duplicadas, cadenas de redirects, destinos que ni siquiera se construyen y fuentes que siguen figurando en el sitemap. El resto es disciplina, pero los tres errores más caros quedan interceptados.

Dos detalles sobre la variante con parámetro: la condición `has` es obligatoria porque `source` solo compara contra la ruta — sin ella se redirigiría `/estados` misma. Y que Next pase o no el parámetro al destino es indiferente para el impacto: `/estados/los-andes` se canoniza a sí misma. Lo decisivo es el redirect permanente y que los enlaces internos ya no apunten a la forma con parámetro — 2.2 ya los cambia antes incluso de que existan las rutas de destino. Los slugs de destino de arriba son forma de ejemplo: `lib/states/regions.ts:10-17` lleva hoy solo los seis nombres visibles, sin campo de slug; la grafía canónica nace con las rutas de la sección 5 y se toma de allí, no se inventa aquí.

### 10.4 Un cambio, un commit, una medición

**Nada de deploys durante un despliegue de update en curso.** En 2026 ya ha habido seis updates de Google confirmados (dos Core, tres Spam, uno de Discover). Si un cambio grande cae dentro de un rollout en curso, causa y efecto dejan de ser separables — y la tentación de apoyar la siguiente reestructuración en un diagnóstico equivocado es grande. Antes de cada deploy importante, un vistazo al Google Search Status Dashboard; si hay un rollout en marcha, solo salen a producción correcciones de errores, ningún cambio estructural.

**Una reestructuración por deploy, si la reestructuración debe ser medible.** Las correcciones P0 de 2 y 3 van juntas y se entregan a la vez — son correcciones de errores cuyo impacto es de todos modos binario (indexado o no). Todo lo posterior — reestructuración de títulos, ampliación de contenido, eliminación de `unoptimized`, redirects, ampliación de i18n — se despliega por separado, con al menos dos semanas de distancia y una comparación fija de antes y después en la GSC. En un sitio sin tráfico eso no es un lujo, sino la única forma de llegar a saber alguna vez qué ha funcionado.

**Antes de que una métrica entre en el dashboard, tiene que ser medible.** Para «hits de crawler por bot» eso hoy no se cumple. Los Log Drains son una función de plan de pago (comprueba el estado del plan en el dashboard de Vercel antes de planificar la métrica), e incluso con acceso la medición quedaría en nada: **todas las rutas están prerenderizadas**, las peticiones de los crawlers se sirven desde el CDN y ni siquiera aparecen en los Function Logs. Lo que sí está realmente disponible:

| Pregunta | Fuente fiable | Límite |
|---|---|---|
| ¿Rastrea Google, con qué frecuencia, con qué códigos de respuesta? | GSC → Configuración → Estadísticas de rastreo | solo Googlebot, agregado |
| ¿Rastrea Bing, qué ha visto? | Bing WMT → Crawl Information | solo Bingbot |
| ¿Llegan siquiera los crawlers de IA? | no sin infraestructura adicional | ver abajo |

Quien necesite de verdad los datos de bots tiene dos caminos: mover el DNS a Cloudflare (el nivel gratuito ofrece un panorama de bots en el edge, delante del CDN) o contratar Vercel Observability. Ambas cosas son una decisión consciente con su propio esfuerzo — no un subproducto del montaje existente. Hasta entonces, la línea «hits de crawler por bot» se queda fuera del informe semanal, en lugar de figurar allí como un campo permanentemente vacío.

### 10.5 Dependencias y operación

**Dependabot.** Once dependencias de producción y seis de desarrollo, ninguna automatización. Que en `package.json` ya haya un bloque `overrides` para `postcss` demuestra que aquí ya se han arrastrado a mano avisos de seguridad transitivos — exactamente ese trabajo lo asume Dependabot, y los pull requests pasan por la misma CI de 10.1, de modo que una actualización que rompa el build nunca llega a `main`.

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule:
      interval: weekly
      day: monday
    open-pull-requests-limit: 3
    groups:
      types:
        patterns: ["@types/*"]
      next:
        patterns: ["next", "eslint-config-next", "@next/*"]
    ignore:
      - dependency-name: "react"
        update-types: ["version-update:semver-major"]
      - dependency-name: "react-dom"
        update-types: ["version-update:semver-major"]

  - package-ecosystem: github-actions
    directory: "/"
    schedule:
      interval: monthly
```

La agrupación es el punto clave: `next` y `eslint-config-next` tienen que moverse con la misma versión, y `@types/*` generarían si no tres pull requests sueltos por semana. Las actualizaciones mayores de React quedan excluidas — pertenecen a un major de Next y se planifican, no se mergean. Quien no quiera un bot, cuelga en su lugar `npm audit --audit-level=high` como paso propio en `ci.yml`; pero eso solo avisa, no arregla nada.

**Fijar la versión de Node.** Hoy la versión no está escrita en ninguna parte: ni `.nvmrc`, ni campo `engines`. En local corre Node 24, el workflow de IndexNow de 2.8 fija `node-version: 22`, y Vercel toma lo que haya en la configuración del proyecto. Tres sitios, tres respuestas posibles — y diferencias de build que nadie puede reproducir. Lo que manda es el ajuste del proyecto en Vercel (*Settings → General → Node.js Version*); se lee, no se adivina, y luego se replica en `.nvmrc` (una línea, p. ej. `22`), en `package.json` (`"engines": { "node": "22.x" }`) y en ambos workflows. `ci.yml` lo lee mediante `node-version-file: .nvmrc`; `indexnow.yml` recibe el mismo valor.

**Limpiar `.gitignore` y `.vercelignore`.** Ambos archivos terminan en largas listas de candidatas a imagen descartadas y cubren los casos estándar. Faltan dos entradas en **ambos** (comprobado con Grep, sin coincidencias): `lib/site-translations.json.bak` (2634977 bytes) y `.tmp-sapo/` (2,0 MB). Ambos están untracked — un `git add -A` descuidado escribe 4,6 MB de datos muertos de forma permanente en el historial y, como `.vercelignore` tampoco los conoce, acaban en cada subida.

```gitignore
# .gitignore y .vercelignore, añadir en cada uno
lib/*.bak
.tmp-sapo/
```

Los archivos de log del directorio raíz ya están cubiertos por `*.log` en ambos archivos, y `.env*` también (`git check-ignore` confirma `.env.local`). Se queda en esas dos líneas.

**El repo es el backup — y por tanto un asunto de seguridad, no de almacenamiento.** No hay CMS ni base de datos: las 23 guías están como TypeScript en `lib/states/data/`, el resto en `lib/content.ts`. Del fondo de imágenes en `public/images` (112 archivos, 92 MB en disco) hay 60 archivos versionados; los otros 52 son candidatas de selección excluidas vía `.gitignore` que existen exclusivamente en el equipo de trabajo. Todo lo que constituye el sitio depende, así, de exactamente dos copias: el equipo de trabajo y GitHub. De ahí se sigue:

- **Asegurar el acceso a GitHub** — 2FA, códigos de recuperación offline, y un segundo owner o bien propiedad de organización en lugar de una única cuenta privada. La misma exigencia que con los accesos a las propiedades en 9.5, por el mismo motivo: aquí una cuenta única no es una vía de acceso, sino el punto único de fallo de todo el fondo.
- **«Block force pushes» de 10.2 es al mismo tiempo una medida de backup.** Un push forzado sobre `main` es la forma más realista de perder historial — y la única contra la que sirve un ajuste.
- **Poner un tag antes de reestructuraciones grandes** (`git tag -a pre-<vorhaben> -m "…" && git push --tags`). No cuesta nada y hace localizable el estado previo a la reestructuración sin rebuscar en el historial — el equivalente en Git al Instant Rollback de Vercel.

---

---

## 11. Medición y control

El conjunto de indicadores de este plan es deliberadamente pequeño. Se compone de métricas cuya fuente existe realmente en la configuración contratada hoy, y cada una de ellas lleva anotado un punto ciego. Ambas cosas son una lección del borrador: allí figuraba "impactos de crawler por bot vía Vercel Log Drains" como KPI primario semanal — una cifra que en este sitio nunca habría aparecido en el panel, por dos razones independientes.

### 11.1 Dos reglas que mantienen corta esta sección

**Regla 1 — ninguna métrica sin una fuente recopilable dentro del plan contratado.** Log Drains es una función de Pro/Enterprise, e incluso con Pro el recuento de bots quedaría en nada, porque todas las rutas de contenido están prerenderizadas y las peticiones de los crawlers se sirven desde el CDN sin tocar jamás una Function (en detalle en 7.4). El KPI queda eliminado, no aplazado. La misma comprobación toca hacer con la telemetría de la búsqueda: los eventos personalizados de Vercel Web Analytics están contingentados según el plan (4.6). Un KPI cuya fuente de datos no existe en el plan contratado es peor que ningún KPI: genera cada mes la pregunta de por qué la fila está vacía y, en algún momento, la respuesta equivocada "ahí no pasa nada".

**Regla 2 — ninguna métrica sin un punto ciego anotado.** La cuarta columna de la tabla de 11.2 no es un adorno. Casi toda decisión equivocada en este campo no nace de una cifra falsa, sino de una cifra correcta que mide algo distinto de lo que se supone: "indexada" no es una afirmación sobre rankings, "elegibilidad para rich results" no es una promesa de presentación, y las impresiones del informe de Gen-AI no son citas.

**Al margen de eso: los estados de finalización no son métricas de impacto.** Los textos legales y la procedencia íntegra de las imágenes de la sección 9, así como el control de CI de la sección 10, figuran en 11.3 como valores de partida porque tienen un objetivo binario. No generan ni una sola impresión. Evitan costes y aseguran las demás medidas — quien las presente en el informe mensual como progreso, junto a los clics, mide finalización y la llama crecimiento.

### 11.2 El conjunto de indicadores

| Métrica | Fuente | Ritmo | Lo que NO dice |
|---|---|---|---|
| Páginas indexadas | GSC → Indexación de páginas | semanal | nada sobre rankings; el informe va días por detrás de la realidad, y "Rastreada: actualmente sin indexar" no es un estado de error, sino una valoración |
| Páginas con "Página alternativa con etiqueta canónica adecuada" | GSC → Indexación de páginas | semanal | no dice si la canonicalización es la deseada — el aviso solo confirma que Google sigue la etiqueta que se le entrega. Justamente por eso `/playas` aparece hoy correctamente reportada y aun así es incorrecta |
| Elementos `BreadcrumbList` válidos | GSC → Mejoras | semanal, a partir de la entrega del marcado | ninguna promesa de presentación: elegibilidad ≠ visualización. Un informe vacío antes del deploy del marcado es lo esperable, no un hallazgo |
| Solicitudes de rastreo, códigos de respuesta, tipo de Googlebot | GSC → Estadísticas de rastreo | semanal | exclusivamente Googlebot. Aquí no aparece ningún crawler de IA — tampoco los que circulan a través de Googlebot, porque dentro de esa cifra no se desglosan por separado |
| Rastreos de Bingbot, páginas de error, URL bloqueadas | Bing WMT → Crawl Information | semanal | exclusivamente Bing. Es relevante porque Bing es la capa de recuperación de Copilot — pero no es una afirmación sobre citas |
| Páginas indexadas en Bing | Bing WMT → Site Explorer | semanal | ninguna comparabilidad con la cifra de GSC; ambos índices cuentan de forma distinta y se actualizan a distinta velocidad |
| Avisos de 404 ("No encontrada") | GSC → Indexación de páginas, Bing WMT | mensual | no es una lista de errores, sino una señal de expectativa: las URL adivinadas muestran qué entidad supone un usuario o un bot en este sitio (7.4). Quién la adivinó no se deduce de ahí |
| Impresiones, clics, posición | GSC → Rendimiento | mensual | ninguna causa. La posición es un promedio ponderado por impresiones — con cifras de casos de dos dígitos, su movimiento es ruido y no una tendencia |
| Impresiones en AI Overviews, AI Mode e IA de Discover | GSC → Search Generative AI | mensual, en cuanto el informe sea visible para la propiedad | ni clics, ni CTR, ni consultas; sin backfill anterior al 18/05/2026. Según fuentes secundarias, el informe se desplegó al principio solo para un subconjunto de las propiedades (inicio en Reino Unido) — su ausencia no es un hallazgo sobre el sitio |
| Total Citations, Average Cited Pages, Grounding Queries, citas por URL | Bing WMT → AI Performance (Public Preview desde el 10/02/2026) | mensual | nada sobre ChatGPT, Perplexity o Claude; datos de preview sin promesa de estabilidad. La ampliación de junio de 2026 que circula, con Intents, Topics, Citation Share y Compare, está **sin acreditar** y no se planifica |
| Referrals de IA (`chatgpt.com`, `perplexity.ai`, `claude.ai`, `copilot.microsoft.com`, `gemini.google.com`) | Vercel Analytics, filtro de referrer | mensual | ningún recuento completo: entre el 35 y el 70 % de las sesiones de IA llegan sin referrer, los clics de AI Mode llevan `noreferrer` y por principio no son separables. Un valor cero no demuestra visibilidad cero |
| LCP, INP, CLS (datos de campo) | Vercel Speed Insights (a partir de 2.11) | mensual | los valores de laboratorio de Lighthouse no los sustituyen. Con poco tráfico pasan semanas hasta llegar a una distribución fiable, y puede que CrUX no muestre absolutamente nada para el dominio |
| Impresiones de Discover | GSC → Rendimiento → Discover | mensual | la pestaña solo aparece cuando existe tráfico de Discover. Su ausencia es el estado normal y no un error |
| Búsquedas sin resultados de la búsqueda interna | `track("search", …)` vía Vercel Analytics (4.6) | mensual | ningún volumen de búsqueda. Se mide la demanda de los visitantes que ya están ahí — no el mercado (11.4) |
| Ejecuciones de CI fallidas e invariantes HTML violadas | GitHub Actions (sección 10) | semanal | ningún impacto SEO. Pura protección frente a regresiones — el valor de esta fila está en que siga siendo aburrida |

**Lo que ocupa el lugar del KPI de bots eliminado:** las dos filas de rastreo (estadísticas de rastreo de GSC, Crawl Information de Bing WMT). Cubren exactamente los dos crawlers de los que dependen todas las superficies de IA que este plan llega siquiera a atender. La pregunta "¿qué bot de IA estuvo aquí?" queda así sin respuesta — es el precio consciente de la recomendación de no contratar nada adicional. Las otras dos opciones (traslado del DNS a Cloudflare, Vercel Observability), junto con las dos trampas de los logs al hacer coincidencias por user-agent, están en 7.4 y no se repiten aquí.

### 11.3 Valores de partida que se registran antes del primer deploy

Esta tabla no es una estadística, sino un acta: se anota a mano el día de la verificación en GSC. Ni GSC ni Bing entregan histórico anterior a la verificación, y el informe de Gen-AI recopila expresamente sin backfill. Lo que no se anote ahora no podrá reconstruirse dentro de doce semanas — y sin esta fila, después no será posible afirmar si una medida surtió efecto o si el sitio simplemente se hizo más viejo.

| Métrica | Estado a 25/08/2026 | Estado objetivo |
|---|---|---|
| Páginas indexadas (Google) | no medido — la propiedad todavía no existe | las ~55 URL del sitemap menos las páginas de contenido escaso deliberadamente reelaboradas o eliminadas (sección 5) |
| Errores de canonicalización | ≥ 1, acreditado en el HTML compilado: `/playas` entrega `<link rel="canonical" href="https://mrsvenezuela.com"/>` | 0, y sostenido mediante invariante de CI (sección 10) |
| Elementos `BreadcrumbList` válidos | 0 — en el repo no hay marcado de breadcrumbs | una cadena válida por página de detalle (sección 3) |
| Páginas indexadas en Bing | 0 — sin propiedad | orden de magnitud similar al de Google, sin esperar igualdad de cifras |
| Imágenes con procedencia documentada | 13 entradas `license` en 6 de 23 guías (`merida` 4, `zulia` 3, `falcon` 3, `sucre`/`la-guaira`/`carabobo` 1 cada una); para los 83 archivos de `public/images` no hay acreditación | 100 %, forzado por el control de compilación sobre `lib/image-credits.ts` (sección 9) |
| Textos legales accesibles | sin ruta, sin enlace en el pie | `/aviso-legal` y `/privacidad` indexables, enlazados en el pie y en el nodo `Organization` (sección 9) |
| Comprobación automatizada de regresiones | sin directorio `.github/`, scripts solo `dev`/`build`/`start`/`lint` | check obligatorio en verde sobre `main` (sección 10) |
| Búsquedas sin resultados | no medido — ni una sola llamada a `track()` en el repo | lista mensual de los 20 primeros términos (11.4) |

Las tres últimas filas son binarias y quedan resueltas en pocos días. Aun así pertenecen a esta misma tabla, porque son el requisito previo para que las cinco filas superiores lleguen siquiera a pertenecer a alguien y sigan siendo comparables a lo largo de meses.

### 11.4 Las búsquedas sin resultados como métrica mensual propia

La búsqueda interna es la única fuente de datos de este plan que mide demanda sin que el sitio tenga que posicionar para ello. Un visitante que teclea "Strand", "hallacas" o "visa" y obtiene cero resultados ha acreditado una laguna — ninguna herramienta de keywords entrega esta señal tan pronto. La recopilación en sí está en 4.6 (debounce, normalización, límite de longitud, filtro contra datos de contacto introducidos por descuido, mención en la política de privacidad).

Se informa mensualmente de exactamente una lista: **los 20 términos de búsqueda más frecuentes con `results: 0`**, en orden descendente y con su frecuencia absoluta. Cada término recibe exactamente una de tres consecuencias, y esa asignación es el trabajo de verdad:

1. **Entidad ausente** → fila en el registro de keywords/intenciones (5.5) y, con ello, candidata a una página nueva o a una sección dentro de una página existente. Ejemplo del inventario actual: `/playa/morrocoy` no existe, aunque dos páginas describen Morrocoy.
2. **Entidad existente, vocabulario equivocado** → no hace falta contenido nuevo, sino que hay un problema de sinónimos o de idioma en el índice de búsqueda. "Strand" no encuentra nada sobre una base de datos exclusivamente en español, aunque existan 15 páginas de playas; ese es un caso para la sección 6, no para la redacción.
3. **No es tema de este sitio** → registrar e ignorar. Esta categoría tiene que existir explícitamente; si no, la lista arrastra el plan editorial hacia direcciones que no pertenecen a la entidad.

**Lo que la métrica no dice:** durante los primeros meses estará casi vacía, porque apenas hay nadie. Hasta llegar a una cifra de dos dígitos por término hay que leerla en clave cualitativa — como lista de ideas, no como priorización. Y está sesgada de forma sistemática: solo mide a los visitantes que llegan a abrir la búsqueda, es decir, de forma desproporcionada a quienes vuelven y a quienes ya han abandonado el primer intento de navegación.

### 11.5 Herramientas

- **Gratuitas y suficientes para este sitio:** GSC, Bing Webmaster Tools, Screaming Frog Free (500 URL, aquí ~55 — **rastrear con renderizado de JavaScript**, o de lo contrario falta el contenido de cliente), Rich Results Test, `validator.schema.org`, PageSpeed Insights para los datos de campo de CrUX, Ahrefs Webmaster Tools (gratuito para dominios verificados: perfil de backlinks y Site Audit, punto de entrada para la revisión del pasivo heredado de 2.9).
- **Antes de cada deploy:** nada a mano. La unicidad del canonical, la igualdad de `og:url`, el número de h1, la longitud del título y la parseabilidad del JSON-LD sobre los archivos HTML compilados en `.next/server/app/` los comprueba el control de CI de la sección 10. La variante manual (`grep` sobre `.next/server/app/`, JSON-LD a través de `python -m json.tool`, ejemplo en 3.10) queda solo para hotfixes que esquiven el control.
- **Después de cada deploy, 20 segundos**, porque el control comprueba contra el build y no contra la entrega:

```bash
for u in / /playas /estados /estado/merida /parque-nacional/canaima; do
  printf '%-32s' "$u"
  curl -s "https://mrsvenezuela.com$u" | grep -o '<link rel="canonical" href="[^"]*"' || echo "KEIN CANONICAL"
done
```

- **No adquirir:** los "AI Visibility Scores" y "Share of Voice in LLMs" de terceros proveedores. Son muestreos de prompts, no una medición (7.4). Utilizables para observar tendencias, fuera de lugar en el informe mensual.

### 11.6 Ritmo de reporting

- **Semanal, 10 minutos:** las seis filas semanales de 11.2 — estado de indexación, nuevas clases de error, estadísticas de rastreo, cobertura en Bing, estado de CI. Sin texto corrido, solo las cifras y una línea de comentario cuando haya desviación.
- **Mensual, 60 minutos:** informe de rendimiento frente al mes anterior, ambos informes de IA (en la medida en que sean visibles), distribución de Speed Insights, la lista de búsquedas sin resultados de 11.4 y su asignación a las tres consecuencias. El resultado es la lista de entrada para el plan editorial (5.5), no un diagrama.
- **Trimestral, media jornada:** revisión de contenido — reelaborar de tres a cinco páginas en el fondo, subir `updatedAt` solo cuando haya un cambio real, IndexNow se ejecuta entonces automáticamente (2.8). En la misma cita: muestreo sobre la procedencia de las imágenes (cada archivo incorporado desde el último trimestre tiene una entrada en `lib/image-credits.ts`) y un vistazo a las páginas de marca y legales de la sección 9 para comprobar la vigencia de los datos.
- **Antes de cada deploy mayor:** revisar el Google Search Status Dashboard. **Ningún deploy durante un despliegue de actualización en curso** — en 2026 ha habido ya seis actualizaciones confirmadas (dos core, tres de spam, una para Discover). Si un cambio grande cae dentro de un despliegue, después ya no se pueden separar causa y efecto, y el informe del mes siguiente no vale nada.

### 11.7 Lo que ocurre de forma realista en 4 / 12 / 26 semanas

La línea divisoria no pasa entre "pequeño" y "grande", sino entre dos mecanismos de efecto. **De efecto inmediato, porque Google y Bing solo tienen que volver a leer:** indexabilidad, canonicalización, confianza en el sitemap, `max-image-preview:large`, **elegibilidad** para rich results, feed y enlazado interno. Estas cosas, después del rastreo, o están bien o están mal — días hasta pocas semanas. **Meses necesita todo lo que es una valoración:** autoridad temática, percepción de E-E-A-T, elegibilidad para Discover, cita en respuestas de IA. Para eso no hay interruptor ni deploy, sino solo historial de publicación y menciones externas.

**A las 4 semanas — puras métricas de fundamento, sin tráfico:**

- GSC y Bing WMT verificados, historial del dominio y acciones manuales revisados, sitemap enviado, de 30 a 55 URL registradas como "rastreadas" o "indexadas".
- `/playas` ya no aparece como duplicado de la portada.
- Primeros elementos `BreadcrumbList` en el informe de mejoras.
- Las estadísticas de rastreo de GSC muestran solicitudes por encima de cero; Crawl Information de Bing WMT, igual. **Sobre los bots de IA, este momento no dice nada** — en esta configuración no son visibles, y su ausencia en el informe no es un hallazgo.
- Los textos legales y las licencias de imagen (sección 9) están listos. Figuran aquí porque están entre los primeros puntos resueltos, no porque muevan una cifra: **requisito previo, no motor de crecimiento.** Lo mismo vale para el control de CI de la sección 10 — su rendimiento consiste en que el error de canonicalización no se produzca una segunda vez.
- Tráfico orgánico: **cercano a cero.** Quien espere cifras aquí no ha entendido el punto de partida.

**A las 12 semanas:**

- Una cobertura de índice completa es realista, siempre que las páginas de contenido escaso se hayan reelaborado o desindexado. "Rastreada: actualmente sin indexar" en 5–15 páginas es normal y **no** se resuelve volviendo a enviarlas: Google no publica ningún cupo para "Solicitar indexación", solicitar repetidamente la misma URL no aporta nada, y las cifras diarias que circulan son estimaciones de la práctica sin valor de planificación (2.12).
- Primeras impresiones de long tail en las posiciones 15–40, en español y con volúmenes bajos.
- Las primeras citas en Bing WMT AI Performance son **concebibles** — Copilot suele incorporar en cuestión de horas las páginas notificadas vía IndexNow. Concebible no es un pronóstico; una tabla vacía es igual de plausible.
- Clics en el rango bajo de dos a tres dígitos al mes serían un buen resultado.
- Discover: posible, pero no planificable, y si ocurre, a rachas. La primera actualización core exclusiva de Discover se ejecutó del 05/02 al 27/02/2026 y afectó de entrada solo a usuarios de habla inglesa en Estados Unidos — para un sitio en español quedan por tanto abiertos tanto la dirección del efecto como el ámbito de validez.

**A las 26 semanas:**

- Con el plan de contenidos ejecutado, primeras posiciones en el top 10 para long tail como "cómo llegar a Los Roques" o "mejor época Canaima".
- Las consultas de marca deberían devolver el propio sitio — siempre que el nombre de marca se haya unificado (8.7) y la revisión de derechos de marca de 8.6 haya confirmado el nombre.
- Corredor realista: **rango bajo de cuatro dígitos en impresiones al mes, tres dígitos en clics.** Todo lo que supere eso es sobrerrendimiento y no un valor de plan.
- Las citas en IA seguirán siendo, previsiblemente, casos aislados. La tasa de referral de ~1 % transversal al sector vale también aquí; el rendimiento está en la cita y en la presencia de marca, no en las sesiones (7.4).

**Lo que desplaza el calendario:** un core update en mitad de la reestructuración, un pasivo heredado del historial del dominio, la ausencia de menciones externas, renunciar a la ampliación de contenido — y toda traducción publicada sin revisar, porque aumenta el volumen sin calidad.

**Lo que esta sección no contiene, y a propósito: una promesa de ranking.** Ninguna posición, ninguna fecha, ninguna garantía de tráfico. Lo controlable es la indexabilidad, la estructura, el ritmo de publicación y la ausencia de errores. Todo lo demás es una valoración de terceros, y el único pronóstico honesto al respecto es un corredor con el borde superior abierto y una posibilidad muy real de que dentro de 26 semanas haya cifras de clics de tres dígitos.

---

## 12. Hoja de ruta

La tabla está ordenada por impacto por esfuerzo y, dentro de una misma prioridad, por dependencia: lo que está más arriba es o bien más eficaz con el mismo esfuerzo, o bien requisito previo de lo que viene debajo. **P0** son las posiciones que afectan a la indexabilidad, a la situación legal o a la validez de todas las mediciones posteriores: no se sopesan frente a P1, se hacen primero; **P1** cuesta visibilidad, tiempo de carga o sustancia; **P2** es ampliación e higiene. Esfuerzo: **S** menos de dos horas, **M** de medio día a un día completo, **L** varios días; “Impacto búsqueda” e “Impacto IA” son estimaciones (alto / medio / bajo) y no pronósticos: una línea con “bajo / bajo” puede ser P0 igualmente si cierra un riesgo legal o es lo que hace posible una medida posterior.

| # | Medida | Prio | Esfuerzo | Impacto búsqueda | Impacto IA | Sección | Archivo / lugar |
|---|---|---|---|---|---|---|---|
| 1 | Verificar la propiedad de dominio en GSC mediante DNS-TXT, y no enviar nada todavía | P0 | S | alto | medio | 2.7 | Vercel DNS (TXT en el apex), `search.google.com` |
| 2 | Comprobar el historial del dominio: `Creation Date` de WHOIS, inventario CDX de Wayback, GSC → Seguridad y medidas manuales, perfil de backlinks de Ahrefs; dejar el resultado por escrito incluso si el hallazgo es negativo | P0 | S | alto | bajo | 2.9 | externo; las URL heredadas van a `lib/redirects.ts` |
| 3 | Dividir `/playas` en wrapper de servidor + cuerpo de cliente, con metadata propia, canonical y JSON-LD de `CollectionPage` | P0 | M | alto | alto | 2.1 | `app/playas/page.tsx:1` → nuevo `components/sections/playas-page-content.tsx` |
| 4 | Eliminar `alternates.canonical: "/"` y `openGraph.url: "/"` del layout raíz | P0 | S | alto | medio | 2.2 | `app/layout.tsx:32-34, :38` |
| 5 | Volver a definir el canonical y `openGraph.url` en la portada, añadir `og:url` en `/contacto` y `/sobre-nosotros` | P0 | S | alto | medio | 2.2 | `app/page.tsx` (nuevo export `metadata`), `app/contacto/page.tsx`, `app/sobre-nosotros/page.tsx` |
| 6 | Verificar la 404 en vez de tocarla: el canonical desaparece junto con el fallback y el `noindex` lo inyecta el propio Next — sin export `metadata`, sin `robots:{index:false}` | P0 | S | bajo | bajo | 2.2 / 13 | Contraprueba en `.next/server/app/_not-found.html` |
| 7 | Migrar los tres enlaces `?region=` a su forma de destino definitiva en el mismo commit | P0 | S | bajo | bajo | 2.2 | `components/sections/search-panel.tsx:16-18` |
| 8 | Servir los títulos de las guías en forma absoluta, título de reserva con keywords en lugar de 79–90 caracteres | P0 | S | alto | medio | 4.1 | `lib/page-factory.tsx:24`, `app/layout.tsx:28` |
| 9 | Borrar sin sustituto el fallback genérico de FAQPage (preguntas y respuestas inventadas, invisibles en cualquier parte, en ~26 páginas) | P0 | S | medio | alto | 3.1 / 4.1 | `lib/page-factory.tsx:86-103` |
| 10 | Sustituir `TravelGuide` (el tipo no existe) por un `@graph` con `WebSite`, `Organization`, `WebPage` y `Country` | P0 | M | alto | alto | 3.4 / 3.5 | `app/page.tsx:46-54`, nuevo `lib/schema.ts` |
| 11 | Hacer absoluta la URL de imagen relativa del JSON-LD | P0 | S | medio | alto | 4.1 | `lib/page-factory.tsx:70` (`:23` como plantilla) |
| 12 | Sustituir `lastModified: new Date()` por fechas reales o fijas, eliminar `changeFrequency` y `priority` | P0 | S | medio | bajo | 2.6 | `app/sitemap.ts:9,13-16,22-24` |
| 13 | `max-image-preview:large` + `max-snippet:-1` en el layout raíz | P0 | S | alto | medio | 2.4 | `app/layout.tsx` (bloque `robots`) |
| 14 | Corregir las tildes españolas que faltan en títulos y descriptions | P0 | S | medio | medio | 4.1 | `app/layout.tsx:27,31`, `app/page.tsx`, `lib/content.ts` |
| 15 | Quitar `unoptimized` en todas las imágenes remotas — transferencia a terceros países **y** LCP, una sola intervención para ambas cosas | P0 | M | alto | bajo | 4.1 / 9.2 | `detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`, `los-roques-guide.tsx:97,113`, `medanos-guide.tsx:288,307`, `pico-bolivar-guide.tsx:183,212`, `island-carousel.tsx:53`, `localized-detail-page.tsx:156` |
| 16 | Resolver una dirección postal apta para notificaciones judiciales (servicio de aviso legal —Impressum— o c/o; un apartado de correos no basta) — requisito previo de la 17 | P0 | S | bajo | bajo | 9.1 | externo |
| 17 | Crear `/aviso-legal` como ruta de servidor indexable (§ 5 DDG, la ley alemana de servicios digitales) | P0 | S | medio | medio | 9.1 | `app/aviso-legal/page.tsx` |
| 18 | `/privacidad` con los cuatro supuestos reales: Vercel Analytics, entrega de imágenes, almacenamiento del idioma, telemetría de búsqueda (art. 13 RGPD) | P0 | M | medio | medio | 9.1 / 9.2 | `app/privacidad/page.tsx` |
| 19 | Aceptar activamente el DPA de Vercel en el dashboard, nombrar la transferencia a EE. UU. y su finalidad en la política | P0 | S | bajo | bajo | 9.2 | Vercel → Settings |
| 20 | Incluir los enlaces legales en el footer (hoy hay siete enlaces y ninguno legal) | P0 | S | bajo | bajo | 9.1 | `components/sections/home-footer.tsx:19-27` |
| 21 | Crear `lib/image-credits.ts` como única fuente de procedencia de las imágenes, con semilla a partir de las 13 entradas `StateCredit` existentes | P0 | M | medio | bajo | 3.7 | nuevo `lib/image-credits.ts` |
| 22 | Control de compilación: toda imagen referenciada en `searchIndex`, `heroSlides` o una guía que no tenga entrada de crédito rompe el build — congela el inventario antes de depurarlo | P0 | S | bajo | bajo | 3.7 / 10.2 | `scripts/seo-check.mjs` |
| 23 | Sustituir las imágenes sin procedencia demostrable en lugar de seguir sirviéndolas (83 archivos locales sin ningún justificante) | P0 | L | bajo | bajo | 9.3 | `public/images/` |
| 24 | Atribución visible como `<figure>`/`<figcaption>` más página recopilatoria `/creditos` — el JSON-LD por sí solo no cumple la obligación de atribución | P0 | M | medio | medio | 3.7 | nuevos `components/content/credited-image.tsx`, `app/creditos/page.tsx` |
| 25 | Diseñar el logo: master cuadrado de 512 px, legible sobre fondo transparente y sobre fondo claro — requisito previo de la 26 y la 27, nada de marcadores de posición | P0 | M | medio | medio | 2.3 | tarea de diseño, después `public/images/` |
| 26 | Derivar el favicon, `icon.png`, `apple-icon.png`, `manifest.ts` y el export `viewport` del mismo asset | P0 | S | medio | bajo | 2.3 | `app/` |
| 27 | Añadir `Organization.logo` como nodo `ImageObject` — hasta entonces, omitir la clave sin sustituto en vez de apuntar a una URL 404 | P0 | S | bajo | medio | 3.4 | `lib/schema.ts` |
| 28 | Búsqueda de marca en TMview / DPMAregister / USPTO (clases 39/41/16) con posición de reserva documentada; además, bloqueo en el registrador, renovación automática, 2FA y registro a nombre de la responsable del sitio — requisito previo de la 29 | P0 | M | bajo | bajo | 8.6 / 9.4 | externo, registrador |
| 29 | Unificar el nombre de marca, “Descubre Venezuela” como `alternateName`; arrastrar en el mismo commit los nombres de cookie **y** de localStorage | P0 | M | medio | alto | 8.7 | 17 apariciones (`app/layout.tsx`, `app/page.tsx`, `lib/page-factory.tsx`, …) + `components/i18n/language-provider.tsx:20,27` |
| 30 | Workflow de CI: `npm ci`, `tsc --noEmit`, `lint`, `build`; añadir el script `typecheck` y protección de rama en `main` | P0 | S | medio | medio | 10.1 | `.github/workflows/ci.yml`, `package.json` |
| 31 | `scripts/seo-check.mjs` con invariantes duras sobre `.next/server/app/**/*.html`, enganchado como `postbuild` — así actúa también en el build de Vercel | P0 | M | alto | medio | 10.2 | `scripts/seo-check.mjs`, `package.json` |
| 32 | Solo ahora: enviar el sitemap en la GSC | P0 | S | alto | medio | 2.8 | `search.google.com` |
| 33 | Verificar Bing Webmaster Tools mediante importación desde la GSC y enviar el sitemap | P0 | S | medio | alto | 2.8 | `bing.com/webmasters` |
| 34 | Solicitar indexación de forma selectiva para siete URL como máximo (el tamaño del cupo no está confirmado y repetir no sirve de nada) | P0 | S | medio | bajo | 2.12 | inspección de URL en la GSC |
| 35 | Clave de IndexNow como `public/<key>.txt` + GitHub Action tras cada push a `main` (Bing, Yandex, Naver, Seznam, Yep — no Google) | P1 | M | medio | alto | 2.8 | `public/`, `scripts/indexnow.mjs`, `.github/workflows/indexnow.yml` |
| 36 | Estructurar `robots.ts` por clases de bot (Retrieval / Training / Block) | P1 | S | bajo | alto | 2.5 | `app/robots.ts:5-11` |
| 37 | Revisar una vez el “AI Bot Managed Ruleset” de Vercel — según la documentación el valor por defecto es **Allow**, y solo es relevante si se ha puesto Deny de forma activa | P1 | S | bajo | medio | 7.3 | Vercel Firewall |
| 38 | Ampliar `lib/schema.ts`: anclas `@id`, mapeo `kind`→tipo, nodos `Organization` y `WebSite` en cada ruta | P1 | M | medio | alto | 3.4 / 3.6 | `lib/schema.ts`, `lib/page-factory.tsx` |
| 39 | `BreadcrumbList` en el `@graph` de todas las páginas de detalle y de los hubs — la miga de pan visible ya existe | P1 | S | medio | medio | 3.2 | `lib/page-factory.tsx`, `app/estados`, `app/playas` |
| 40 | Añadir `siteName` en el OG hijo y quitar las medidas genéricas `1200x800` | P1 | S | medio | medio | 4.2 | `app/estados/page.tsx:37-44`, `lib/page-factory.tsx:32,36` |
| 41 | `lib/redirects.ts` como única fuente, integrado mediante `async redirects()`; regla de URL en CLAUDE.md — antes del primer traslado de URL | P1 | S | medio | bajo | 10.3 | `lib/redirects.ts`, `next.config.ts` |
| 42 | Registro entidad→URL: exactamente una URL canónica por entidad real, `kind` es solo presentación; cada ruta nueva recibe su línea de antemano | P1 | S | alto | alto | 5.4 | tabla de registro; `lib/content.ts:146-157,166-167,189-190,219-220,309-310` |
| 43 | Mapeo de keyword e intención por página de destino **antes** de escribir: query principal, volumen VE/CO/US-es/ES, tipo de SERP, subpreguntas, delimitación | P1 | M | alto | medio | 5.5 | una línea por cada URL planificada |
| 44 | Renderizar `place.href` como `next/link` — 17 enlaces internos de contexto que hoy no son enlaces | P1 | S | alto | medio | 5.2 | `components/content/place-gallery.tsx` |
| 45 | Conectar las páginas huérfanas: segunda línea en `guide-related.tsx` | P1 | S | medio | medio | 5.2 | `components/content/guide-related.tsx` |
| 46 | Renderizar siempre el megamenú en el DOM (24 enlaces de estado en las ~55 páginas) | P1 | S | medio | bajo | 5.2 | `components/sections/site-header.tsx:148-155, :227` |
| 47 | Bloque de contexto de playa: enlace al estado y a las playas vecinas, añadir el campo `stateSlug` | P1 | M | alto | alto | 5.2 | `components/content/detail-page.tsx`, `lib/content.ts` |
| 48 | Eliminar la plantilla genérica `getEditorialCopy`, desindexar o ampliar las ocho páginas con un 73–79 % de texto idéntico | P1 | L | alto | alto | 5.3 | `components/content/detail-page.tsx:276-306`, `lib/page-factory.tsx` |
| 49 | Mover `beachGuides` a `lib/beach-guides.ts`, FAQ reales en el marcado visible | P1 | M | medio | alto | 5.3 | `components/content/detail-page.tsx:309` |
| 50 | `author`, `publishedAt` y `updatedAt` como campos de datos, byline visible, salida en el `@graph` | P1 | M | alto | alto | 5.9 | `lib/content.ts:26-37`, `lib/states/types.ts`, `components/content/state-editorial-guide.tsx` |
| 51 | Página de autora con schema `Person`, ampliar la página About con la metodología y la declaración de uso de IA | P1 | M | medio | alto | 5.9 | `app/autora/page.tsx`, `components/institutional/about-page-content.tsx`, `lib/institutional-i18n.ts` |
| 52 | `/politica-editorial`: política editorial, de correcciones y de identificación de IA, incluida la regla dura sobre traducción automática (MT); alimenta `publishingPrinciples` y `correctionsPolicy` | P1 | M | medio | alto | 9.6 | `app/politica-editorial/page.tsx`, `lib/schema.ts` |
| 53 | Fijar por escrito la identificación publicitaria y las reglas de colaboración antes de que llegue la primera oferta: `rel="sponsored"`, identificación en el texto, nada de alquilar subpáginas | P1 | S | bajo | bajo | 9.8 | la misma ruta que la 52 |
| 54 | `verifiedAt` + `volatility` por cada bloque de datos, aviso de verificación visible en la cabecera de cada sección práctica, ningún precio sin fecha ni moneda | P1 | M | medio | alto | 5.8 / 9.7 | `lib/states/types.ts`, `lib/content.ts`, componentes de guía |
| 55 | Seis páginas hub de región `/estados/<region>` como rutas de servidor estáticas; mapear `?region=` con un 301 en el mismo movimiento | P1 | M | alto | medio | 5.6 | nuevas bajo `app/estados/`, datos de `lib/states/regions.ts:10-17`, `lib/redirects.ts` |
| 56 | Cuatro páginas de planificación: `es-seguro-viajar`, `requisitos-de-entrada`, `dinero-y-pagos`, `presupuesto` — solo publicables junto con la 54 | P1 | L | alto | alto | 5.6 | nuevo `app/venezuela/` |
| 57 | Crear y registrar `lib/states/data/distrito-capital.ts` | P1 | M | medio | medio | 5.3 | `lib/states/data/`, `lib/states/index.ts:30-54` |
| 58 | Campo `answer` por sección (40–60 palabras, completo como chunk) para las cinco guías principales | P1 | L | medio | alto | 7.3 | `lib/states/types.ts`, `lib/states/data/{bolivar,merida,nueva-esparta,falcon,zulia}.ts` |
| 59 | Calendario estacional en el plan editorial: publicación y `updatedAt` 8–12 semanas **antes** de la ventana, no en mitad de ella | P1 | S | medio | bajo | 5.10 | plan editorial; páginas de temporada en `lib/states/data/`, `app/venezuela/` |
| 60 | Dividir el catálogo de traducciones por idioma y cargarlo dinámicamente (hoy son 2,4 MB de JSON para todos los visitantes) | P1 | M | alto | medio | 4.2 | `components/i18n/content-translator.tsx:5`, `scripts/generate-site-translations.mjs` |
| 61 | Retorno anticipado cuando `language === "es"`, evitar las escrituras no-op del TreeWalker | P1 | S | medio | bajo | 4.2 | `components/i18n/content-translator.tsx:79,89,106` |
| 62 | `next.config.ts`: AVIF, `minimumCacheTTL`, `deviceSizes` sin 3840, `qualities`, `poweredByHeader:false` | P1 | S | medio | bajo | 4.2 | `next.config.ts:3-16` |
| 63 | Cabeceras de seguridad completas: `X-Frame-Options`/`frame-ancestors`, `Permissions-Policy`, CSP al principio como `Content-Security-Policy-Report-Only`; HSTS sin `preload` | P1 | S | bajo | bajo | 4.5 | `next.config.ts` (`headers()`) |
| 64 | Generar un derivado 16:9 de `salto-angel.jpg` (1733×2599 en vertical, consumido en cuatro sitios como imagen de hero, de tarjeta y OG), constantes separadas para vertical y horizontal | P1 | S | medio | bajo | 4.2 | `public/images/`, `lib/content.ts:43-44,78-79,83,123,151,344` |
| 65 | Hero: vincular `priority` al estado en lugar de al índice, no precargar el segundo slide | P1 | S | bajo | bajo | 4.2 | `components/sections/hero.tsx:76-78,86` |
| 66 | `dynamicParams = false` en las diez rutas `[slug]` | P1 | S | bajo | bajo | 4.2 | `app/{animal,articulo,ciudad,comida,estado,historia,montana,parque-nacional,planta,playa}/[slug]/page.tsx` |
| 67 | Enlace de salto “Saltar al contenido” más `id="contenido"` en los doce elementos `<main>` | P1 | S | bajo | bajo | 4.4 | `app/layout.tsx`, doce componentes de página |
| 68 | Reduced-motion en dos niveles: regla CSS global para las transiciones y `MotionConfig reducedMotion="user"` para framer-motion | P1 | S | bajo | bajo | 4.4 | `app/globals.css:55`, nuevo `components/a11y/reduced-motion.tsx` |
| 69 | Trampa de foco, Escape, bloqueo del scroll y devolución del foco en el lightbox | P1 | M | bajo | bajo | 4.4 | `components/content/place-gallery.tsx:116-127` |
| 70 | Feed RSS como ruta estática, enlazado en el `<head>` como `alternate` — alimentador para newsletter, Feedly y Pinterest | P1 | S | bajo | medio | 4.6 | nuevo `app/feed.xml/route.ts`, `app/layout.tsx` |
| 71 | Trackear la búsqueda interna (`track("search", { q, results })`), normalizar los términos, mencionar el proceso en la política de privacidad; comprobar antes el cupo del plan | P1 | S | medio | bajo | 4.6 / 11.4 | `components/sections/search-overlay.tsx` |
| 72 | Dependabot con agrupación, `npm audit` como paso no bloqueante, fijar la versión de Node en `.nvmrc`, `engines` y ambos workflows | P1 | S | bajo | bajo | 10.5 | `.github/dependabot.yml`, `.nvmrc`, `package.json` |
| 73 | Crear el buzón de dominio `info@mrsvenezuela.com`, configurar SPF, DKIM y DMARC — sin DMARC el dominio es suplantable | P1 | S | bajo | medio | 9.5 | DNS + proveedor de correo; después, en `Organization.email`, el aviso legal y `security.txt` |
| 74 | Segundo propietario en cada propiedad (en la GSC mediante un método distinto del registro TXT), 2FA con códigos guardados offline, documento de accesos de una sola página | P1 | S | bajo | bajo | 9.5 | GSC, Bing, Vercel, GitHub, registrador |
| 75 | Corregir las asignaciones erróneas de imágenes (~10 asignaciones, entre otras `morrocoy → playa-el-agua.jpg` y `orchid → delta-orinoco.jpg`); en caso de duda, sección sin imagen | P1 | M | medio | medio | 5.7 | `lib/content.ts:41-74` |
| 76 | Reescribir editorialmente los textos alt (motivo + lugar + estado) — hoy pasan por el traductor en tiempo de ejecución y para Google Images solo existen en español | P1 | M | medio | bajo | 5.7 / 8.2 | `lib/content.ts`, `lib/states/data/*.ts`, `components/i18n/content-translator.tsx:74` |
| 77 | Mantener los QID de Wikidata como campo y publicarlos como `sameAs` — cada QID verificado uno a uno, ninguno adivinado | P1 | M | medio | alto | 3.2 / 7.3 | `lib/states/regions.ts`, `lib/content.ts` |
| 78 | Generar `ImageObject` con campos de licencia para las imágenes de Commons a partir de `lib/image-credits.ts` | P1 | M | medio | bajo | 3.8 | `lib/schema.ts`, `lib/states/data/*.ts` |
| 79 | Emitir los bloques de datos como `<dl>` o `<table>` en lugar de una rejilla de div | P1 | S | bajo | medio | 7.3 | `components/content/state-editorial-guide.tsx` |
| 80 | Desambiguar por entidad el texto del h1 (“Bolívar” choca con Simón Bolívar, Pico Bolívar y Ciudad Bolívar) — el `h1` duplicado en sí es una rama de un ternario y no un defecto | P1 | S | medio | alto | 4.4 / 5.4 | `components/content/state-editorial-guide.tsx:224, :236` |
| 81 | Sitemap de imágenes: campo `images` por entrada, exclusivamente dominio propio | P2 | M | medio | bajo | 2.6 | `app/sitemap.ts` |
| 82 | Fechas `updatedAt` reales en lugar de una fecha fija, IndexNow solo para las URL realmente modificadas | P2 | M | medio | medio | 2.6 / 2.8 | `lib/content.ts`, `lib/states/types.ts`, `app/sitemap.ts`, `scripts/indexnow.mjs` |
| 83 | IDs de sección descriptivas (`#historia` en vez de `#guia-01`) | P2 | M | bajo | medio | 7.3 | `components/content/state-editorial-guide.tsx`, `guide-toc.tsx` |
| 84 | Auditoría de contraste de la paleta: `--muted` está en 4,53:1 y `#5c6b60` en 5,13:1; calcular aparte las secciones oscuras de las guías | P2 | S | bajo | bajo | 4.4 | `app/globals.css:11` |
| 85 | Selección de idioma: autónimos como etiqueta principal (“Deutsch” en vez de “Alemán”), modelo de teclado en el popup — las banderas ya son correctamente decorativas | P2 | S | bajo | bajo | 4.4 | `lib/i18n.ts:2-6`, `components/sections/language-switcher.tsx` |
| 86 | `security.txt` conforme a la RFC 9116 con el campo obligatorio `Expires`, renovar cada año | P2 | S | bajo | bajo | 4.5 | `public/.well-known/security.txt` |
| 87 | Alta al newsletter (hosting en la UE, doble opt-in, renderizado en servidor) — activa la revisión de consentimiento | P2 | M | bajo | bajo | 8.4 | `components/sections/home-footer.tsx`, final de las guías |
| 88 | Pinterest Business, Claimed Website, tableros por región, pines siguiendo la antelación estacional de la 59 | P2 | M | medio | bajo | 8.4 | externo; después, la URL en `sameAs` |
| 89 | YouTube: vídeo largo por cada destino principal, transcripción, capítulos, deeplink | P2 | L | medio | alto | 8.4 | externo; después, la URL en `sameAs` |
| 90 | `VideoObject` en el `@graph` más una fachada de clic para cargar vía `youtube-nocookie.com` — de lo contrario tumba el estado sin banner de consentimiento | P2 | M | medio | alto | 3.9 | componentes de guía, `lib/schema.ts` |
| 91 | Subir fotos propias bajo CC BY-SA a Wikimedia Commons (respetar las reglas de Commons, nada de autopromoción) | P2 | L | bajo | medio | 8.3 | externo |
| 92 | Migrar framer-motion a `LazyMotion` + `m` (de 39,5 a 6,5 KB síncronos) | P2 | M | bajo | bajo | 4.3 | 10 archivos, sobre todo `components/sections/site-header.tsx:4` |
| 93 | Limitar el listener de scroll con `requestAnimationFrame`, medir `scrollHeight` una sola vez, progreso como variable CSS | P2 | S | bajo | bajo | 4.3 | `components/content/guide-toc.tsx:54-62` |
| 94 | Comprimir los archivos de imagen, fusionar tres duplicados idénticos byte a byte, volver a guardar las fotos PNG como JPEG/WebP | P2 | M | medio | bajo | 4.3 | `public/images/` (112 archivos, 92 MB) |
| 95 | Borrar los archivos muertos, incluir `.bak` y `.tmp-sapo/` en `.gitignore` **y** `.vercelignore` | P2 | S | bajo | bajo | 4.3 / 10.5 | `public/data/venezuela-adm1.json`, `interactive-map.tsx`, `site-footer.tsx`, `gallery.tsx`, `category-grid.tsx` |
| 96 | Hacer multilingüe la búsqueda interna (valores del catálogo dentro del haystack) | P2 | S | bajo | bajo | 6 | `components/sections/search-overlay.tsx:54-61` |
| 97 | Páginas restantes de 5.6: `/parques-nacionales`, `/gastronomia-venezolana`, `/itinerarios`, `/ciudades`, `/mejor-epoca-para-viajar-a-venezuela` — de 2 a 4 publicaciones al mes, no 40 páginas en una semana | P2 | L | alto | alto | 5.6 | rutas nuevas, cada una con su línea de registro de la 42 y su mapeo de la 43 |
| 98 | `/en` para 8–12 URL con hreflang, alternates en el sitemap, conmutador de idioma con enlaces y textos alt renderizados en el servidor — ninguna URL sin revisión de un hablante nativo | P2 | L | alto | alto | 6 | `app/[lang]/`, `lib/page-factory.tsx:15-47`, `app/sitemap.ts`, `components/sections/language-switcher.tsx:67-75` |

**Orden de las dos primeras semanas**

- **Día 1** — 1 (propiedad en la GSC) e inmediatamente después 2 (historial del dominio). Si 2 sale negativa, a partir de ahí se reevalúa el orden en lugar de seguir trabajando. En paralelo y sin dependencia, poner en marcha 16 (dirección postal) y 25 (logo): ambas tienen plazos externos y más adelante bloquean.
- **Día 2–3** — El bloque de canonicals de un tirón: 3, 4, 5, 6, 7. Después la indexabilidad queda establecida; todo lo demás se apoya en eso.
- **Día 3–4** — Metadatos y marcado: 8, 9, 10, 11, 12, 13, 14. Cada línea, un commit propio, para que el impacto siga siendo atribuible.
- **Día 4–5** — 15 (`unoptimized`). Una sola intervención que cierra a la vez el LCP y la transferencia a terceros países y que es lo que hace posible la CSP posterior de 63.
- **Día 5–7** — Primero 21 y 22 (el registro más el control congelan el inventario), luego 23 como depuración continua en segundo plano.
- **Día 6–8** — Textos legales, en cuanto esté la dirección: 17, 18, 19, 20.
- **Día 8–9** — 30 y 31. La CI pasa sin errores con el estado actual; el control de compilación de 31 va en el mismo commit que las correcciones P0, porque antes de eso rompe.
- **Día 9–10** — 28 y después 29. La investigación va antes de la unificación, no después.
- **Día 10–11** — Logo terminado: 26 y 27.
- **Día 12** — 24 (`figcaption` y `/creditos`), sobre la base de datos de 21.
- **Día 13–14** — Solo ahora se envía: 32, 33, 34. Antes de eso, el sitemap manda a Google a rutas autocanonizadas.

Dos reglas que rigen durante todo el periodo: **un cambio, un commit, una medición** (10.4) y **ningún deploy mientras esté en curso el despliegue de un core update**, porque de lo contrario ya no se pueden separar causa y efecto.

---

---

## 13. Lo que deliberadamente NO se hace

**Crear `llms.txt`.** Google no la usa (Mueller, 02/06/2026: "none of the AI systems use it" — ninguno de los sistemas de IA la usa; Illyes confirmó que Google no lo admite ni tiene previsto hacerlo). La guía oficial de optimización de Google menciona expresamente su creación entre las cosas que se pueden ignorar. Las afirmaciones de que Anthropic o Perplexity la consumirían proceden del content marketing, sin fuente primaria — ambos *publican* un llms.txt para su propia documentación, que es otra cosa. Quien aun así la quiera: 20 minutos, riesgo cero, como lista de enlaces curada mediante un `app/llms.txt/route.ts` con `dynamic = "force-static"`. Un `llms-full.txt` con el texto completo de las guías, **en ningún caso** — eso duplica todo el contenido en un archivo de texto desprotegido y sin destinatario documentado. Mueller menciona en el mismo contexto **WebMCP** como la alternativa respaldada por Google — ese es el punto de observación para los próximos trimestres, no llms.txt. Ahí no hay nada que construir hoy para un sitio puramente editorial y sin transacciones; la tarea es seguir el estado del asunto, no anticiparse.

**Bloquear Google-Extended para salir de AI Overviews.** Google-Extended controla exclusivamente el entrenamiento de Gemini y el grounding en las apps de Gemini y en Vertex AI. AI Overviews y AI Mode se alimentan a través de Googlebot. Quien de verdad quiera salir necesita `nosnippet`/`max-snippet` — y con ello pierde también los snippets clásicos.

**Bloquear todos los bots de IA.** Entrenamiento y recuperación están desacoplados. Bloquear GPTBot y ClaudeBot no impide el entrenamiento (que también pasa por CCBot y por conjuntos de datos de terceros), sino solo la cita — en caso de que se bloqueen con ellos OAI-SearchBot y Claude-SearchBot. Rutgers/Wharton (31/12/2025) mide en los editores que bloquean un −23,1 % de visitas mensuales.

**Querer bloquear `ChatGPT-User` o `Perplexity-User` por robots.txt.** Ambos proveedores documentan expresamente que robots.txt no rige para los fetches iniciados por el usuario. Un disallow solo genera falsa seguridad. La conclusión inversa no vale para Anthropic: ClaudeBot, Claude-User y Claude-SearchBot respetan robots.txt los tres, según su documentación — un genérico «los fetches iniciados por el usuario ignoran robots.txt» sería falso.

**Ping de sitemap a Google.** La supresión del endpoint `google.com/ping?sitemap=` se anunció en junio de 2023 y se apagó a finales de 2023; hoy devuelve 404. Para Google ya no existe ningún mecanismo de ping.

**Configurar la Google Indexing API.** Oficialmente limitada a `JobPosting` y `BroadcastEvent`, y esa limitación se aplica; los aumentos de cuota exigen los datos estructurados correspondientes. Todas las ofertas de «Instant Indexing para Google» son abuso o servicio ficticio.

**Esperar que IndexNow sirva para la indexación en Google.** Google no participa (estado de la FAQ de indexnow.org, agosto de 2026), pese a que desde octubre de 2021 se lleva «probando».

**«Solicitar indexación» como herramienta masiva.** Solo está confirmado que existe una cuota, que va ligada a la propiedad y que solicitarlo repetidamente para la misma URL no aporta nada; el orden de magnitud que circula, de ~10–12 URLs/día, es una estimación de la práctica (*probablemente* — Google no publica ninguna cifra). Con >50 páginas eso lleva semanas de todas formas y no garantiza nada.

**Implementar `generateSitemaps`.** El umbral está en 50000 URLs o 50 MB por archivo. Con ~55 URLs es puro overhead.

**Poner `htmlLimitedBots: /.*/ `.** Las 58 rutas están completamente prerrenderizadas y los metadatos ya están de todos modos en el `<head>` estático. El override solo cuesta TTFB.

**`revalidate` o `export const dynamic` en las rutas de slug.** Convierte páginas estáticas (`initialRevalidateSeconds: false`) en ISR: más invocaciones de función, más coste, ninguna ganancia SEO.

**Poner `/_next/` en disallow en robots.txt.** Googlebot necesita el CSS y el JS de `/_next/static/` para renderizar. Un disallow ahí destruye la evaluación de la página.

**Una consulta propia de `VERCEL_ENV` en `app/robots.ts`** para desindexar las previews. Vercel pone `X-Robots-Tag: noindex` automáticamente; una condición mal escrita desindexa la producción. El único caso especial es un dominio propio en una rama que no sea la de producción.

**Fijar «hits de crawler por bot» como métrica semanal sin disponer de la fuente de datos.** Los Log Drains de Vercel son una función de los planes Pro/Enterprise; en Hobby solo existen logs de runtime efímeros. Y como todas las rutas están prerrenderizadas, las peticiones de bots se sirven desde el CDN y ni siquiera llegan a aparecer en los logs de función — es decir, el KPI estaría sistemáticamente vacío incluso con Log Drain. Sin reestructuración solo se pueden obtener la estadística de rastreo de GSC (Googlebot) y Bing WMT Crawl Information (Bingbot); todo lo que vaya más allá exige mudar el DNS a Cloudflare u observabilidad de Vercel contratada aparte. Primero aclarar el estado del plan y la fuente, después definir la métrica. Un campo de dashboard que nunca se rellena es peor que no tener campo.

**Redirecciones para apex/www en `next.config.ts`.** Corresponden a la configuración de dominios de Vercel — ahí el 308 actúa a nivel de edge, antes de que llegue a ejecutarse ninguna función.

**Implementar `app/global-not-found.tsx` solo para darle a la 404 un título propio.** El archivo existe en 15.5.20 detrás de `experimental: { globalNotFound: true }` (verificado en local), pero renderiza un documento `<html>` completo y duplica así el shell del layout, tipografías incluidas. En una página `noindex` la relación coste-beneficio es mala. Igual de superfluo: `robots: { index: false }` para la 404 — Next inyecta `<meta name="robots" content="noindex"/>` automáticamente (verificado en el `.next/server/app/_not-found.html` compilado). Y un export `metadata` en `app/not-found.tsx` no surte efecto de todos modos; Metadata solo se puede exportar desde `layout.tsx` y `page.tsx`.

**Esperar rich results de FAQ.** Desactivados desde el 07/05/2026, documentación retirada el 15/06/2026 (ambas cosas documentadas); el fin del soporte de la API en agosto de 2026 procede de la prensa del sector. FAQPage no perjudica si las preguntas son visibles, pero en Google ya no produce ninguna representación.

**Marcado HowTo para las secciones de cómo llegar.** Anuncio el 08/08/2023, retirada completa en septiembre de 2023; en 2026 ya no aparece en ninguna galería de Google.

**`SearchAction`/Sitelinks Searchbox.** Función retirada desde el 21/11/2024. El nodo `WebSite` sigue teniendo sentido como ancla `@id`, pero la `potentialAction` ya no genera ninguna función — y aquí no debería fijarse de todos modos, porque `search-overlay.tsx` es puramente de cliente y no existe ninguna URL de búsqueda indexable.

**Marcado `Recipe` para las páginas `/comida`.** Google exige solo `name` e `image`, pero dice "content about preparing a particular dish" (contenido sobre la preparación de un plato concreto). Las páginas son retratos editoriales sin `recipeIngredient` ni `recipeInstructions` — exactamente la infracción de relevancia que las guidelines ponen como ejemplo.

**`GeoCoordinates` inventadas «por completitud».** `lib/states/regions.ts:22-27` guarda valores porcentuales sobre un archivo de imagen, y `lib/content.ts:117-142` otros valores porcentuales distintos. Ni unos ni otros son **coordenadas**. Mejor omitirlas que adivinarlas.

**Medidas de imagen adivinadas en la etiqueta OG o en el JSON-LD.** `public/images/cayo-de-agua.jpg` mide 1600×899, no 1600×900 — indicar las medidas solo si se han leído del archivo; si no, omitir el campo.

**Hacer que `Organization.logo` apunte a una URL que no existe.** `public/images` no contiene ningún asset de logo (83 archivos comprobados). Primero diseñarlo, después referenciarlo.

**Consolidar toda la entidad en «Mrs Venezuela» antes de tener la investigación de marca.** Además de la colisión en la SERP con el concurso de belleza, está la cuestión sin verificar de si «Miss Venezuela» y «Mrs.» están protegidos como distintivos de certamen en las clases relevantes (39 viajes, 41 entretenimiento/publicación, 16 productos de imprenta). Cada paso adicional de consolidación — `Organization.name`, perfiles `sameAs`, correo del dominio, perfiles de autor, nombres de cookies y de storage, handles sociales — aumenta el daño si llega una solicitud de autorización, un UDRP o un requerimiento legal (Abmahnung). Orden: primero investigar en TMview/DPMAregister/USPTO, documentar una posición de repliegue (p. ej. asegurar «Descubre Venezuela» como segundo dominio) y después consolidar. El bloqueo en el registrador, la renovación automática y la 2FA son independientes de eso y hay que activarlos de inmediato.

**Generar QIDs de Wikidata por coincidencia de nombre.** Estado Bolívar (Q191164), Ciudad Bolívar (Q26906) y Simón Bolívar son tres entidades. Verificar cada una por separado.

**Crear un artículo de Wikipedia sobre el sitio o poner enlaces allí.** Es edición con conflicto de interés (COI), se revierte y, si se repite, lleva a la lista negra. Véase 10.3.

**Crear un ítem de Wikidata para el sitio web.** No cumple ninguno de los tres criterios de notabilidad y acaba en una solicitud de borrado.

**Google Business Profile.** Según la documentación exige una ubicación física o visitas de clientes. Los sitios puramente informativos no son elegibles; un perfil creado igualmente arriesga la suspensión.

**Aspirar a Google News / Publisher Center.** Exige contenidos noticiosos originales y de actualidad, más infraestructura periodística. Para guías de viaje editoriales es inviable — y la reestructuración hacia un formato de noticias destruiría el enfoque temático. Discover funciona perfectamente sin Publisher Center.

**Poner hreflang mientras no existan URLs localizadas.** Cinco entradas `alternates.languages` apuntando a la misma URL son formalmente inválidas. Primero las rutas, después el hreflang. Eso vale también para el paso intermedio: un `x-default` o una entrada `en` que apunte a la página en español no es un avance parcial, sino el mismo error en pequeño.

**Publicar traducción automática sin revisar.** Ejemplo expreso de "scaled content abuse" (abuso de contenido a escala). Desplegar cuatro idiomas completos generaría 212 páginas pobres y en parte erróneas.

**Enlaces comprados, PBNs o paquetes de menciones.** Google advierte literalmente en su guía de IA contra "seeking inauthentic 'mentions' across the web" (buscar «menciones» no auténticas por toda la web).

**Añadir páginas en masa siguiendo la plantilla existente.** Lo peligroso no es el volumen, sino el volumen con uniformidad constante — la actualización antispam de agosto de 2026 apuntaba, según los análisis del sector (*probablemente*, descripción del objetivo no confirmada por Google), exactamente a eso.

**Refrescos de fecha sin cambio de contenido.** Es detectable y actúa en contra del sitio. El criterio es la ganancia de información.

**Poner HSTS con `preload` antes de que apex y www sirvan HTTPS de forma permanente.** Es un compromiso de hecho irreversible, incluidos todos los subdominios — y sin solicitud en `hstspreload.org` no surte efecto de todas formas.

**Incorporar embeds de YouTube, widgets de afiliación o servicios de mapas sin planificar un CMP.** El sitio hoy está sin banner de consentimiento (tipografías self-hosted, ninguna cookie de tracking, ningún script ajeno). Cada uno de esos elementos lo tumba y cuesta LCP, INP y elegibilidad para Discover.

**Publicar sin revisar textos legales de plantilla salidos de generadores.** El aviso legal (Impressum) y la política de privacidad son obligatorios (§ 5 DDG, ley alemana de servicios digitales; art. 13 RGPD) — pero un output de generador sin **dirección postal apta para notificaciones** no cumple el § 5 DDG, y un apartado de correos no basta para eso. Mientras la cuestión de la dirección (domicilio particular, servicio de aviso legal o c/o) siga sin resolverse, el marcador de posición sustituye un riesgo por dos. Lo mismo vale en cuanto al contenido: una política de privacidad que describa tratamientos que no existen, o que omita los que sí se ejecutan realmente — Vercel Analytics con su transferencia a EE. UU., los hotlinks directos a Wikimedia desde el navegador del visitante, la cookie de idioma y la entrada en localStorage — es peor que ninguna, porque documenta la inexactitud. Primero levantar los hechos, luego redactar, luego someterlo a revisión de un abogado.

**Seguir sirviendo imágenes sin procedencia documentada.** En Alemania sale más caro que cualquier problema de ranking de este documento. No afecta solo a los hotlinks de Commons, sino sobre todo a los 83 archivos locales en `public/images`, de los que hasta ahora no hay ningún justificante. Sin entrada en el mapa de procedencia de las imágenes, un archivo no se referencia: se sustituye — la alternativa de «dejarlo de momento y aclararlo más tarde» no existe.

**Difundir como hechos los porcentajes de los blogs de proveedores GEO.** Son sólidos: Princeton GEO (KDD 2024), Ahrefs (75000 marcas, con descargo sobre la causalidad), Semrush (230000 prompts), Vercel/MERJ (>500 millones de fetches). **No son sólidos y en el plan están marcados como no confirmados:** «tablas citadas 4,2× más a menudo», «esquema FAQ +45 %», «Semantic Completeness r=0,87», la ampliación de Bing WMT de junio de 2026 y la disponibilidad del ruleset de IA de Vercel «en todos los planes».

**Despliegues durante un rollout de actualización en curso.** En 2026 ya ha habido seis actualizaciones confirmadas. Si un cambio mayor cae dentro, ya no se pueden separar causa y efecto.

---

## 14. Fuentes

**Google — Búsqueda, funciones de IA, directrices**
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- https://developers.google.com/search/updates
- https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history

**Google — Datos estructurados, sitemaps, indexación, rastreo**
- https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/appearance/structured-data/faqpage *(aviso de retirada: 07/05/2026 / 15/06/2026)*
- https://developers.google.com/search/docs/appearance/structured-data/recipe
- https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/apis/indexing-api/v3/quota-pricing
- https://developers.google.com/search/blog/2024/10/sitelinks-search-box
- https://support.google.com/webmasters/answer/34592
- https://support.google.com/webmasters/answer/9012289
- https://support.google.com/webmasters/answer/7552505
- https://support.google.com/webmasters/answer/9679690 *(estadísticas de rastreo — única fuente de datos de bots sólida para Googlebot)*

**Google Discover, Business Profile, News**
- https://developers.google.com/search/docs/appearance/google-discover *(lo documentado es un ancho ≥1200 px; ninguna relación de aspecto)*
- https://developers.google.com/search/docs/appearance/preferred-sources
- https://support.google.com/business/answer/3038177
- https://support.google.com/news/publisher-center/answer/6204050
- https://searchengineland.com/google-february-2026-discover-core-update-is-now-complete-469450 *(despliegue inicialmente en EE. UU./inglés)*
- https://searchengineland.com/google-discover-qualifies-ranks-filters-content-research-470190
- https://www.digitalapplied.com/blog/google-discover-core-update-february-2026-seo-guide *("probable")*

**schema.org (vocabulario V30.0, 19/03/2026)**
- https://schema.org/docs/releases.html
- https://schema.org/TouristDestination · https://schema.org/Park · https://schema.org/Beach · https://schema.org/State
- https://schema.org/Guide *(sustituto del inexistente `TravelGuide`)*
- *No existen (HTTP 404, comprobado el 25/08/2026): `TravelGuide`, `NationalPark`, `Food`*
- https://www.wikidata.org/wiki/Wikidata:Notability

**Crawlers de IA y políticas de bots**
- https://developers.openai.com/api/docs/bots *(ChatGPT-User: "robots.txt rules may not apply" (las reglas de robots.txt pueden no aplicarse); UA completo de OAI-SearchBot)*
- https://support.claude.com/en/articles/8896518 *(ClaudeBot, Claude-User, Claude-SearchBot — los tres respetan robots.txt)*
- https://docs.perplexity.ai/guides/bots *(Perplexity-User: "generally ignores robots.txt rules" (por lo general ignora las reglas de robots.txt))*
- https://support.apple.com/en-us/119829 *(Applebot-Extended)*
- https://github.com/ai-robots-txt/ai.robots.txt/blob/main/table-of-bot-metrics.md
- https://vercel.com/blog/the-rise-of-the-ai-crawler *(ejecución de JS, tasas de 404 — medición del propio proveedor, "no confirmado" en las cifras)*
- https://www.seroundtable.com/google-extended-seo-36865.html

**llms.txt / WebMCP**
- https://www.searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/ *(cita de Mueller verificada; WebMCP como alternativa mencionada)*
- https://www.seroundtable.com/google-ai-llms-txt-39607.html
- https://geojacker.com/llms-txt *(secundario, "probable")*
- https://presenc.ai/research/state-of-llms-txt-2026 *(marketing de contenidos, "no confirmado")*

**Estudios de GEO y datos de citas**
- https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/ *(único estudio revisado por pares; las cifras no son verificables en la fuente primaria)*
- https://ahrefs.com/blog/ai-brand-visibility-correlations *(correlación, no causalidad; filtro DR>40)*
- https://www.semrush.com/blog/most-cited-domains-ai/
- https://aisearch.similarweb.com/blog/gen-ai-stats/ *("~23 % de tasa de cita en viajes" — no confirmado)*
- https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138
- https://otterly.ai/blog/youtube-ai-citation-study-2026/ *("no confirmado")*
- https://cloro.dev/research/ai-crawler-blocks/ *(evidencia contradictoria)*
- https://machinerelations.ai/research/content-structure-ai-citation-rates-2026 *(metodología no divulgada — "no confirmado")*
- https://patrickryall.com/articles/structured-data-ai-crawlers *("no confirmado")*

**Bing, IndexNow, otros buscadores**
- https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview *(inicio el 10/02/2026)*
- https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools
- https://blogs.bing.com/webmaster/september-2021/Access-to-Instant-Indexing-%C2%A0Bing%C2%A0URL-submission-API
- https://www.indexnow.org/documentation
- https://www.indexnow.org/faq *(participantes: Amazon, Bing, Naver, Seznam.cz, Yandex, Yep — Google no)*

**Next.js 15.5.20 y Vercel**
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata *("shallowly merged" (fusión superficial), los campos anidados se sobrescriben)*
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
- https://nextjs.org/docs/app/api-reference/functions/generate-static-params
- https://vercel.com/docs/domains/managing-dns-records
- https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines
- https://vercel.com/docs/deployment-protection
- https://vercel.com/docs/headers/response-headers
- https://vercel.com/docs/image-optimization/limits-and-pricing
- https://vercel.com/docs/bot-management *("The ruleset is inactive by default … labeled Allow" (el conjunto de reglas está inactivo por defecto … etiquetado como Allow))*
- https://vercel.com/docs/webhooks *(webhooks de cuenta en Pro/Enterprise)*
- https://vercel.com/docs/log-drains *(requisito de plan para cualquier análisis propio de logs de bots)*
- https://vercel.com/docs/project-configuration

*Nota sobre la versión de la documentación: nextjs.org sirve ya la documentación de la versión 16.x. Verificado localmente contra `node_modules/next@15.5.20` y **no** disponible en 15.5.20: el campo `other` en `robots.ts` (solo desde v16.3.0), `params` como Promise en `opengraph-image.tsx` (solo desde v16.0.0), `id` como Promise en `generateSitemaps` (solo desde v16.0.0). Disponible y comprobado: `RobotsFile.rules` como array (userAgent obligatorio), `SitemapFile.images`/`alternates.languages`, `images.qualities`, `images.minimumCacheTTL` (valor por defecto 60), `experimental.globalNotFound` (valor por defecto false), `alternates.canonical: null`. `themeColor` existe en el tipo `Metadata`, pero está **deprecado desde Next 14** — no eliminado. En caso de duda, comprobar contra `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts`.*

**Realidad del posicionamiento, enlaces, actualizaciones**
- https://searchengineland.com/links-google-search-ranking-factor-gary-illyes-432422
- https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html *(cita de Illyes verificada, fecha secundaria)*
- https://www.seroundtable.com/google-august-2026-spam-update-done-41906.html *(la descripción del objetivo es un análisis del sector, "probable")*
- https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/
- https://searchengineland.com/google-search-to-drop-sitelinks-search-box-447682
- https://www.gsqi.com/marketing-blog/deindexed-and-delayed-manual-action-case-study/ *(caso de estudio de terceros — contexto para la comprobación de medidas manuales heredadas)*

**Derecho, licencias, accesibilidad** *(no es asesoramiento jurídico — para la implementación del aviso legal (Impressum), la política de privacidad y la identificación publicitaria hay que prever una revisión por abogado)*
- § 5 DDG (Digitale-Dienste-Gesetz, ley alemana de servicios digitales), art. 13 RGPD, § 25 TDDDG (ley alemana de protección de datos en telecomunicaciones y medios digitales), § 5a UWG (ley alemana contra la competencia desleal)
- BFSG (Barrierefreiheitsstärkungsgesetz, ley alemana de refuerzo de la accesibilidad), en vigor desde el 28/06/2025
- https://commons.wikimedia.org/wiki/Commons:Credit_line
- https://commons.wikimedia.org/wiki/Commons:Licensing
- https://creativecommons.org/licenses/ *(URLs de deed para la tabla `CC_LICENSE_URL`)*
- https://en.wikipedia.org/wiki/Wikipedia:External_links
- https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest
- https://www.tmdn.org/tmview/ · https://register.dpma.de/ · https://tmsearch.uspto.gov/
- https://www.rfc-editor.org/rfc/rfc9116.html *(security.txt)*
- https://hstspreload.org/

**Social, tráfico, zero-click**
- https://redship.io/blog/reddit-self-promotion-rules *("probable")*
- https://socialpulsestats.com/social-media-traffic-statistics-2025-platform-referral-data-conversion-trends/ *("no confirmado")*
- https://pushly.com/resources/the-zero-click-era-what-it-means-for-publisher-traffic-in-2026/ *("probable")*
- https://www.icrossing.com/insights/reddits-rise-in-search-results *("probable")*
- https://www.mdpi.com/2227-7390/14/12/2227 *(Wikidata/turismo, "probable")*

---
