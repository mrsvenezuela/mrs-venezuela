# Curiosidades — álbum publicado 2026-09-29

## Última publicación: fotografía del casabe

- READY: `dpl_EAaVHkftcd5tjJjRDVKW4AqSriJt`; https://descubre-venezuela-84i3mdjz7-mrs-venezuela.vercel.app, promovida al dominio `mrsvenezuela.com`.
- Fuente exacta: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-casabe-6d8897827cf84b4f93d4d14dbf208f75`.
- Base: snapshot de retirada de Aula Magna/Mapoyo inferior. Únicos cambios: nueva foto `public/images/curiosidades/casabe-puerto-ayacucho.jpg`, ficha `photos.json`, pie/alt de casabe en los cuatro idiomas de `content.ts` y encuadre centrado en `curiosities-page.tsx`. No se publicaron cambios pendientes del workspace.
- Fuente: https://commons.wikimedia.org/wiki/File:Casabe-1.jpg. Autor Luisovalles, CC BY-SA 3.0; mercado de Puerto Ayacucho, Amazonas. Imagen redimensionada y comprimida; fuente, autor, licencia y aviso de adaptación en los créditos existentes. Foto antigua conservada para otras referencias.
- Test de 20 historias/4 idiomas y ESLint correctos. Build local bloqueado por descarga/procesamiento de Google Fonts; build remoto completo correcto, incluidos lint y tipos. Revisión visual pública en escritorio y móvil 390 px: imagen correcta, sin desbordamiento horizontal. Pie nuevo verificado en el DOM público.
- Captura: `C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/casabe-publicado.png`.

## Última publicación: retirada de Aula Magna y Mapoyo

- READY: `dpl_J1GD1ZEAQGhog7XnDW5dyQmd5fkS`; https://descubre-venezuela-j0hc8vg04-mrs-venezuela.vercel.app, alias `mrsvenezuela.com`.
- Fuente exacta: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-recorte-cd0b1beeab634ce5a80f572f56204d98`.
- Basada en el snapshot de relatos inferior; alias previo comprobado. Hashes: solo cambian `components/content/curiosities-page.tsx` y `lib/curiosities/album.ts`.
- Eliminados los dos bloques descartados, sus textos en ES/EN/DE/FR y sus fuentes. Quedan 20 historias. Coromoto y su foto conservados. La propuesta de foto de Aula Magna nunca se publicó.
- Tests y lint correctos; build local y remoto correctos. Público HTTP 200, 20 historias y sin los dos bloques; homepage HTTP 200 y Amazon no publicado.

## Última actualización: relatos de Cabrera y Coromoto

- READY: `dpl_2gT1vy19dCKRnPDqVQL2WKDA8zrm`; https://descubre-venezuela-hgbqhx831-mrs-venezuela.vercel.app, alias `mrsvenezuela.com`.
- Fuente exacta: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-relatos-fd16088e2e6746229b12036e3f97c586`.
- Base: snapshot del álbum documentado abajo. Diferencia de publicación verificada por hash: solamente `lib/curiosities/content.ts`. Comparación de datos: únicamente las historias `cabrera` y `coromoto` cambiaron en ES/EN/DE/FR, además de tres fuentes nuevas.
- Cabrera: debut, Serie Mundial 2003, Triple Corona AL 2012 (.330/44/139), MVP 2012/2013, 500 HR en 2021 y 3.000 hits el 23/04/2022. Fuentes: Baseball Hall of Fame y guía oficial Tigers 2023.
- Coromoto: fundador; entrada histórica en Guinness 1991 según AFP (crónica 2017); 860 creaciones y sabores documentados en reportaje 2010 de Excelencias Gourmet. No se afirma récord vigente ni carta actual. No se fija fecha de fundación: las fuentes consultadas difieren entre 1980 y 1981.
- Tres párrafos cortos por bloque; mismas fotos y layout. Tests de historias y ESLint correctos; build local y remoto correctos. Revisión escritorio/móvil sin overflow; los dos relatos ampliados comprobados en el DOM público.
- Captura: `C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/coromoto-historia-publicada.png`.
- Publicación CLI sin `--archive=tgz`: los archivos se cargan individualmente; conservar este snapshot como base de siguientes cambios limitados.

## Publicación anterior: álbum

- Deployment READY: `dpl_Gyb1t4r1i1TYwNRtRXhsbdDEjzoQ`.
- URL inmutable: https://descubre-venezuela-5hj246c12-mrs-venezuela.vercel.app
- Alias verificado: https://mrsvenezuela.com/curiosidades
- Fuente exacta: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-album-2cd3e57a05d54453aa52dbeb5e11b728`.
- Base: snapshot Herrera/casabe documentado en `production-curiosidades-2026-09-28.md`, deployment `dpl_8QVatHPRcJzzZZ5mJTxSEUeByFeX`, comprobado contra el alias antes de publicar.
- Únicas diferencias de publicación: `components/content/curiosities-page.tsx` y `lib/curiosities/album.ts`. No publicar el workspace entero: contiene trabajo ajeno a esta actualización y Amazon local pendiente.

## Resultado

Álbum aprobado: crema, tarjetas de fotografía grande con paneles suaves verde/azul/melocotón, personas primero, cinco secciones y cierre Catatumbo. Se conservan las 16 historias originales, las fotografías reales, sus créditos y los textos ampliados de Yulimar y los reinados. Se añaden seis historias: Gustavo Dudamel, Teresa de la Parra, Armando Reverón, Luis Aparicio, Aula Magna y tradición oral mapoyo. Todo visible en la misma página, en ES/EN/DE/FR. Las nuevas historias sin fotografía adecuada usan composición tipográfica; no se inventaron imágenes.

Fuentes de los relatos nuevos registradas en `album.ts`: LA Phil, Instituto Cervantes, MoMA, Baseball Hall of Fame y UNESCO. Header, footer, otras rutas y sistema global de idiomas no cambian.

## Verificación

- `node scripts/check-curiosities.cjs`: 22 historias, grupos completos y cuatro traducciones; fuentes y licencias.
- ESLint de los dos archivos de aplicación: correcto.
- Build local final y build remoto: compilación, lint y tipos correctos.
- Navegador: escritorio 1280 px, tablet 768 px y móvil 390 px; sin overflow horizontal. Filas finales se expanden sin casillas vacías. Coromoto ajustado a bloque horizontal para evitar un panel vacío junto a la foto.
- Español, alemán, inglés y francés revisados; alemán persistente al recargar. Historias sin enlaces de salida ni desplegables. Fotos deportivas en acción y fotos reales de las misses comprobadas.
- Público HTTP 200; `data-curiosities-album` presente y 22 historias; portada HTTP 200, sin `seleccion-amazon`.
- Captura pública: `C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/curiosidades-album-publicado.png`.
