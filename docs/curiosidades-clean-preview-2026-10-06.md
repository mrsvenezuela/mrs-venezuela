# Curiosidades — diseño limpio aprobado

Aplicado en la vista local http://localhost:3024/curiosidades. No publicado.

- Conserva las 10 curiosidades breves, los cuatro idiomas, fuentes, anclas y créditos.
- Fondo claro uniforme, sin tarjetas de colores ni círculos sobre las fotografías.
- Historias 01, 04, 07 y 10 a ancho completo con imagen/texto alternados. Las demás van en parejas; en móvil todas se apilan en orden.
- Fotos reales, retratos separados de Dayana y Stefanía, y encuadre de Yulimar con el salto completo.
- Componente: components/content/curiosities-page.tsx.
- Nuevo archivo requerido para publicar: components/content/curiosities-page.module.css.
- TypeScript, ESLint y scripts/check-curiosities.cjs correctos. Comprobación visual de escritorio y móvil; diez historias, sin desbordamiento horizontal.

Para publicar, partir del último snapshot de producción y copiar únicamente el conjunto de cambios solicitado (incluido el Top 10 local previo). No desplegar todo el checkout: contiene otros borradores no publicados.
