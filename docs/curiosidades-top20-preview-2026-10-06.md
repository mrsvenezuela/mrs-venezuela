# Curiosidades: Top 20 — vista local

SUPERADO: propuesta rechazada por la usuaria. Se sustituyó por diez fichas breves; ver `curiosidades-top10-preview-2026-10-06.md`. No publicar el diseño descrito aquí.

La usuaria pidió un enfoque más atractivo, un diseño distinto y títulos que ayuden a encontrar la página en Google. No se ha publicado esta revisión.

## Cambios

- Título: «20 curiosidades de Venezuela que vale la pena conocer».
- Portada editorial en dos columnas, con foto de Yulimar en acción y aclaración del lugar y año de la fotografía.
- Se mantienen las 20 historias existentes, completas y en la misma página, con personas importantes al principio. La numeración indica orden de lectura, no jerarquía de personas.
- Titulares españoles concretos en vez de preguntas genéricas; sin inventar logros nuevos.
- Índice por temas y listado desplegable de las 20 historias con anclas únicas; las historias no se ocultan.
- Retratos en filas con texto lateral en escritorio, lectura apilada en móvil; se mantienen fotografías, atribuciones y aclaraciones históricas.
- Fuentes visibles junto a los textos, además de la lista completa original.
- Metadata, Open Graph, Twitter y CollectionPage/ItemList alineados con el contenido visible. Canonical /curiosidades conservado; sin nuevas URL ni hreflang artificiales.
- Título de la tarjeta de Inicio actualizado en los cuatro idiomas.

## Archivos

- components/content/curiosities-page.tsx
- app/curiosidades/page.tsx
- lib/curiosities/top.ts
- lib/i18n.ts (solo cuatro títulos de la tarjeta de Inicio en esta tarea; otros cambios ya existían)
- scripts/check-curiosities.cjs

## Verificación

- TypeScript, ESLint de los módulos editados y check-curiosities correctos.
- 20 historias, 20 anclas distintas, una sola H1 y ItemList de 20 elementos comprobados en navegador.
- Índice desplegable y salto a Coromoto funcionan. Sin errores de consola.
- Revisión visual a 1440 y 390 px; sin desbordamiento a 320 px; sin imágenes cargadas rotas. Viewport restaurado.
- Vista: http://localhost:3024/curiosidades
- Captura: C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/top20-curiosidades-preview.jpg

## SEO

Se consultaron las guías de Google Search Central sobre contenido útil y títulos descriptivos:

- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/title-link

No se atribuyen volúmenes de búsqueda no investigados ni se promete posicionamiento o resultados enriquecidos por añadir ItemList. Se conservan fechas y contexto de récords históricos.
