# Guías de Destinos esenciales — 29 de septiembre de 2026

## Resultado y alcance

Ocho guías con contenido propio en ES, EN, DE y FR:

- `/playa/playa-el-agua`
- `/playa/cayo-sombrero`
- `/playa/mochima`
- `/playa/isla-de-plata` (ruta nueva; bloque existente enlazado en los cuatro idiomas activos)
- `/playa/choroni`
- `/playa/cuyagua`
- `/playa/playa-medina`
- `/playa/isla-la-tortuga`

Los Roques conserva su implementación. No se han editado el header, footer, homepage, otras guías ni el diseño del índice Caribe y playa. En los archivos temáticos solo se agregó el enlace del bloque Isla de Plata. Se agregó esa URL al sitemap.

Las guías comparten un renderizador editorial acotado y reutilizan `EditorialSectionHeading`, `PhotoCredits` y `useLanguage`. No se sustituye el sistema de traducciones. El contenido principal permanece abierto y legible, incluidas las FAQ; únicamente fuentes y créditos se pliegan.

Cada guía incluye contexto e identidad, tres propuestas propias, acceso, planificación, consejos y tres FAQ. Las duraciones son sugerencias editoriales, no promesas de transporte o servicios. No se publican precios, horarios, vuelos ni avistamientos garantizados.

## Fuentes y fotos

Las fuentes consultadas se conservan por guía en `lib/beach-guides/`, visibles en la sección de fuentes. Se consultaron Inparques, USB Arqueología, BID, CEPITUR Sucre y fuentes locales para acceso y contexto; no se copiaron sus textos literalmente.

Se reutilizaron exclusivamente archivos existentes. Commons confirmó los créditos de Playa El Agua (Wilfredor / CC0), Cayo Sombrero (AndreaC11 / CC BY-SA 3.0) y Playa Medina (Tucanrecords / CC BY-SA 3.0). La atribución de Medina en estas guías se basa en la ficha de Commons, no en la atribución discrepante del índice temático, que no se modificó.

La portada de La Tortuga sigue siendo el archivo existente `/images/isla-la-tortuga-turquesa.jpg`. No se ha inventado una atribución para ella; su licencia de origen no está documentada en los datos locales revisados. No se incorporaron fotografías externas: se pidió autorización para cuatro opciones de Commons y la descarga quedó bloqueada hasta recibir respuesta. El script `scripts/import-beach-guide-photos.mjs` está preparado pero **no ejecutado con éxito** ni conectado a las guías.

## Verificación

- `npm run build`: correcto, 69 páginas prerenderizadas.
- `npx tsc --noEmit`: correcto.
- ESLint sobre los archivos nuevos y la ruta: correcto; el build también completó el lint del proyecto.
- `node scripts/check-beach-guides.cjs http://127.0.0.1:3021`: ocho guías, cuatro idiomas, archivos de imagen, HTTP 200, H1 único, canonical, seis secciones y JSON-LD FAQ coincidente con las respuestas visibles.
- Navegador: las ocho rutas a 390 px y 1440 px, sin overflow horizontal. Lectura revisada también a 320 px (alemán) y 768 px (francés).
- Cambio ES → EN → DE → FR → ES y persistencia entre rutas comprobados con el selector global. Navegación desde el bloque Isla de Plata comprobada.
- Metadatos iniciales ES y actualización de título/description al seleccionar idioma. Canonical único, coherente con la arquitectura sin rutas de idioma; no se inventaron hreflang.

## Entrega

Vista previa local: `http://127.0.0.1:3021/caribe-y-playa#destinos-esenciales`.

**No publicado en producción en esta tarea.** El árbol de trabajo contiene numerosos cambios previos, incluido Amazon local no publicado. No desplegar la raíz sin aislar el cambio. Para publicar, partir del snapshot de producción documentado en `production-curiosidades-2026-09-29.md`, incorporar el nuevo renderizador y `lib/beach-guides`, la ruta de playa, y únicamente las adiciones de enlace/sitemap de esta tarea. No copiar enteros los archivos temáticos o sitemap sin comparar con producción.
