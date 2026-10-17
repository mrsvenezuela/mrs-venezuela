# Primera entrega del plan — vista previa, no publicada

## Alcance

Siete rutas antiguas pasan al componente `BeachEditorialGuide`, conservando las diez guías existentes y los ocho destinos principales del índice. No se añaden tarjetas duplicadas al índice.

- Bahía de Cata
- Chichiriviche (Falcón, no Chichiriviche de la Costa)
- Playa El Yaque
- Isla de Coche
- Patanemo
- Puerto Cabello (ciudad/base, no playa única)
- Macuto

Cada guía contiene cuatro idiomas (ES/EN/DE/FR), tres pasos de llegada, actividades, base, movilidad, itinerario sugerido, partidas de presupuesto, orientación de alojamiento, preguntas y fuentes. No hay tarifas, horarios, reservas ni programas de afiliación inventados. Los tiempos de visita son propuestas editoriales, no horarios de transporte.

## Fuentes

Fuentes enlazadas al final de cada guía; consultadas el 7 de octubre de 2026. Se distinguen geografía/entorno de consejos editoriales. La operación de transportes y accesos debe reconfirmarse antes de viajar.

- Venezuela Tuya: El Yaque, Coche, Chichiriviche y Puerto Cabello.
- Inparques: Morrocoy y Henri Pittier.
- Bahía Cata: acceso desde Ocumare.
- Bahía Patanemo: pueblo y entorno.
- MINTUR: Paseo de Macuto y litoral de La Guaira.
- VENETUR: información de Ferry Jet, sin atribuir horarios vigentes.

La fotografía de Coche fue sustituida en la nueva guía por un original verificable del sector El Coco (Wilfredor / retoque Aleks G, CC0), no presentado como Playa La Punta. Original: https://commons.wikimedia.org/wiki/File:El_Coco,_Coche_Island.JPG. Se conserva sin modificar la imagen anterior del catálogo y ninguna alternativa fue eliminada. Para Patanemo se usa la fotografía de playa con crédito documentado que ya aparece en la guía de Carabobo.

## Borradores legales: bloqueo de publicación

`/privacidad` y `/terminos` tienen aviso visible de borrador y `noindex`; no están en el sitemap. Se enlazan desde el pie local. No se afirma que estos textos sean suficientes para cumplir requisitos legales.

Pendiente de respuesta: titular público de la web y datos de contacto legal. Faltan también bases jurídicas, plazos y revisión de proveedores/transferencias. No se copió la dirección privada de la conversación ni se asumió que el novio fuese el responsable. No publicar estos borradores como política definitiva ni desplegar el pie con estos enlaces sin resolverlo.

## Comprobaciones

- `tsc --noEmit`: correcto.
- ESLint de los componentes y datos modificados: correcto.
- `check-beach-guides.cjs`: 17 guías, traducciones completas y fotos existentes.
- `check-beach-guides.cjs http://127.0.0.1:3025`: HTTP 200, canonical, SSR, un H1, secciones de planificación y FAQ schema en las 17 rutas.
- `check-legal-drafts.cjs http://127.0.0.1:3025`: HTTP 200, aviso, noindex, enlaces y exclusión del sitemap.
- `check-active-languages.cjs`: ES/DE/EN/FR.
- Vista móvil de El Yaque: sin desbordamiento horizontal, imágenes cargadas.

No se ha ejecutado un despliegue. No se ha hecho un build de producción en el mismo `.next` que el servidor de desarrollo.

## Archivos de esta entrega

Nuevos: `lib/beach-guides/coastal-completion.ts`, `coastal-islands.ts`, `coastal-mainland.ts`; `components/content/legal-draft.tsx`; `app/privacidad/page.tsx`; `app/terminos/page.tsx`; `scripts/check-legal-drafts.cjs`; `public/images/commons/el-coco-coche-island.jpg`.

Modificados sobre el estado de trabajo existente: `lib/beach-guides/index.ts`, `types.ts`; `components/content/beach-editorial-guide.tsx`; `components/sections/home-footer.tsx`; `scripts/check-beach-guides.cjs`.

El checkout contiene otros cambios previos: NO desplegarlo completo. La base pública documentada sigue en `docs/production-curiosidades-editorial-2026-10-07.md`.

## Siguientes entregas

Tras revisión: mejoras móviles/medición de velocidad, entrada de planificación reutilizando la ruta existente, monetización solo con programas confirmados y SEO basado en Search Console. Esta entrega no completa esas fases.
