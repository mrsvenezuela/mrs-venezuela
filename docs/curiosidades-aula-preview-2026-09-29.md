# Aula Magna — vista previa, no publicada

La propuesta fotográfica nunca se publicó. La retirada de Aula Magna y Mapoyo sí fue publicada posteriormente, por aprobación de la usuaria, en `dpl_J1GD1ZEAQGhog7XnDW5dyQmd5fkS`. Ver `production-curiosidades-2026-09-29.md`. Las notas de estado de vista previa siguientes son históricas.

## Rechazada y retirada por petición de la usuaria

Actualización posterior: también retirada la historia mapoyo, sus traducciones, fuente y bloque visual. Quedan 20 historias; tests de grupos, retirada y traducciones correctos. Se mantiene la misma copia de vista previa, sin publicar. Casabe y Diablos Danzantes permanecen intactos.

El bloque completo (foto, título, textos en cuatro idiomas, fuente y créditos visibles) fue retirado de Curiosidades. Se conservó el archivo de foto local sin usar y su procedencia en este documento por recuperación. La vista previa en el puerto 3020 se reconstruye sin el bloque, con 21 historias. No se ha publicado esta retirada en producción. Los apuntes siguientes describen la propuesta anterior, ya descartada.

- Añadida panorámica real de las Nubes de Calder a su bloque. No recortada, con tamaño intrínseco y pie/alt en ES/EN/DE/FR.
- Título y dos párrafos explican los paneles acústicos; fuente Calder Foundation. Sin cambios en Coromoto ni otras historias.
- Foto: GermanX, 2015, CC BY-SA 4.0, https://commons.wikimedia.org/wiki/File:UCV_2015-080a_Aula_Magna.jpg. Importada con el script existente, reducida a 1400 × 497, créditos incorporados al listado.
- Tests de curiosidades, ESLint de archivos modificados y build aislado correctos. Imagen cargada; comprobación de escritorio y móvil 390 px sin overflow.
- Snapshot de vista previa: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-curiosidades-aula-6b9bb5aeb14c4abba73177f28d5d8729`, basado en el último snapshot publicado de relatos. Solo añade/modifica cuatro archivos de aplicación: componente, album.ts, photos.json y aula.jpg.
- Servidor de vista previa: http://localhost:3020/curiosidades?preview=aula#nubes-de-calder (sesión 93893).
- NO publicado en producción. No desplegar el workspace entero: contiene cambios ajenos y Amazon pendiente.
