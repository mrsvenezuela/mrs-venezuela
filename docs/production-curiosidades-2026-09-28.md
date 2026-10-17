# Curiosidades — publicación 2026-09-28

## Última actualización: Carolina Herrera y casabe

- Deployment READY: `dpl_8QVatHPRcJzzZZ5mJTxSEUeByFeX`.
- URL inmutable: https://descubre-venezuela-fxq6vfwna-mrs-venezuela.vercel.app
- Fuente exacta: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-herrera-casabe-3b899dee044946cabe451d7c0e482fa1`.
- Base: snapshot de acción documentado debajo. Diferencias verificadas por hash: únicamente `components/content/curiosities-page.tsx`, `lib/curiosities/content.ts`, `lib/curiosities/photos.json` y `public/images/curiosidades/herrera.jpg`.
- Dos historias visibles en la misma página y traducidas a ES/EN/DE/FR: Carolina Herrera en talento; casabe en historias inesperadas. Coromoto y las fotografías deportivas no cambian.
- Herrera: Christopher Peterson, CC BY 3.0; se conserva además su frase exacta de atribución y enlace debajo de la imagen. Casabe: reutiliza `images/commons/esto-es-casabe.jpg`, Wilmeris Hernández, CC BY-SA 3.0, Camaguán (Guárico).
- Fuentes: CFDA y Carolina Herrera para la trayectoria; UNESCO para la inscripción multinacional del casabe en 2024.
- Test local: 16 historias en cuatro idiomas, 16 fotografías acreditadas. Build local y remoto, lint y tipos correctos. Revisión visual en escritorio, 768 px y 390 px, sin overflow; alemán persistente al recargar.
- Dominio público y ambas fotos HTTP 200; textos e imágenes comprobados en el navegador. Portada sin selección Amazon. No publicar el workspace completo.

## Actualización anterior: Yulimar saltando y Miguel bateando

- Deployment READY actual: `dpl_55AtJVSa1sPvXhnwEM9TCNfu7n27`.
- URL inmutable: https://descubre-venezuela-9x70d1sd9-mrs-venezuela.vercel.app
- Fuente exacta actual: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-accion-e21f0bd5ef3a4f39840134be7c20faaf`.
- Base: snapshot de fotografías grandes documentado debajo; alias comprobado antes del despliegue.
- Únicas diferencias por hash: `components/content/curiosities-page.tsx`, `lib/curiosities/content.ts`, `lib/curiosities/editorial.ts`, `lib/curiosities/photos.json` y dos imágenes nuevas: `yulimar-salto-budapest-2023.jpg`, `cabrera-bateando-2012.jpg`.
- Yulimar aparece en el aire en Budapest 2023 (Filip Bossuyt, CC BY 2.0); Miguel bateando frente a los Angels en 2012 (Cbl62, CC BY-SA 3.0). Fuentes y licencias conservadas en los créditos. Pies de foto corregidos en los cuatro idiomas.
- Tests locales, build local y remoto, lint y tipos correctos. Encuadres inspeccionados en escritorio y móvil. HTML e imágenes públicas HTTP 200; portada sin sección Amazon.

## Actualización: fotografías grandes en hazañas y reinados

- Deployment READY actual: `dpl_5cHNgD4r22zLcq6jey3N1mm1xru9`.
- URL inmutable: https://descubre-venezuela-apst0ulyx-mrs-venezuela.vercel.app
- Fuente exacta actual: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-fotos-421a35c3a5374567af75bf52d2a3ce74`.
- Base: fuente publicada anterior documentada abajo; comprobada contra el alias de producción antes de publicar.
- Diferencias verificadas por hash: únicamente `components/content/curiosities-page.tsx`, `lib/curiosities/editorial.ts`, `lib/curiosities/photos.json`, `public/images/curiosidades/cabrera-2012.jpg` y `public/images/curiosidades/orchestra.jpg`.
- Tres fotografías grandes para las hazañas; originales de Dayana y Stefanía en un bloque editorial ampliado. Historias completas y cuatro idiomas conservados. Las fotos de archivo llevan contexto para no atribuirlas al evento del récord.
- Build, lint y tipos remotos correctos. Dominio público devuelve HTTP 200 con ambos nuevos layouts; cuatro imágenes verificadas HTTP 200. Portada sin sección Amazon.

## Publicación anterior

- Dominio: https://mrsvenezuela.com/curiosidades
- Deployment READY: `dpl_AtwRWcnctQbVnT9ogjQgNbt9Lnhp`
- URL inmutable: https://descubre-venezuela-keqv00j9a-mrs-venezuela.vercel.app
- Fuente exacta publicada: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-23f75bc5e35f4128a4592a9186998aa5`
- Base conservada: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-naturaleza-d7c5ac56e56342858dc39edb09f223aa`, correspondiente al despliegue anterior `dpl_2yigH668wqUhafwiv4jDyAygDd8d`.

Se añadieron únicamente `app/curiosidades`, `components/content/curiosities-page.tsx`, `lib/curiosities`, `public/images/curiosidades`. Se actualizaron `lib/home/discover.ts` (acceso disponible) y `app/sitemap.ts` (ruta nueva).

No se publicó el workspace completo: contiene otros cambios y pruebas locales. Amazon permanece fuera de la portada de producción. No usar el HEAD de Git como representación de la web publicada sin verificar: hay cambios publicados todavía sin commit.

Verificación: build remoto, lint y tipos correctos; 14 historias visibles; relatos ampliados de Yulimar y Miss Venezuela; dos fotografías de archivo separadas de Dayana y Stefanía (no foto de la coronación); acceso de portada y sitemap responden 200; ambas fotos cargan en el navegador público. El test local cubre cuatro idiomas y siete títulos de Miss Universo.
