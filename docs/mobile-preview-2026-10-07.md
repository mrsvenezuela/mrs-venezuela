# Segunda entrega: experiencia móvil — vista previa

Solicitud: mejorar móvil conservando el diseño y revisar antes de publicar. No se ha desplegado.

## Cambios

- Barra más compacta en móvil; marca adaptable, lema conservado en escritorio, botones de 44 px y nombre accesible del menú. La bandera queda debajo de la barra.
- Portada con menos espacio superior y texto ajustado; categorías en filas compactas solo en móvil. Buscador con texto corto en los cuatro idiomas, sin truncarlo.
- El buscador se muestra desde el HTML inicial, sin depender de una animación de entrada o de desplazarse para hacerlo visible.
- Menú y búsqueda mantienen el foco dentro de sus diálogos, cierran con Escape y devuelven el foco al botón de apertura. Restauran el scroll previo.
- Búsqueda adaptada a altura dinámica, resultados con scroll independiente, filtros táctiles y cierre siempre separado de los resultados. Selector de idiomas cierra con Escape o al tocar fuera y permite flechas.
- Destinos destacados con altura móvil flexible, sin cortar textos; tamaños de imagen corregidos para las dos tarjetas anchas.
- Foto inicial a calidad 70. La siguiente imagen se solicita después de cargar la visible; el carrusel solo avanza cuando la próxima ha cargado. Se conserva la preferencia de movimiento reducido. No se afirma una mejora numérica de Core Web Vitals sin medición de campo.

## Verificación

- TypeScript y ESLint de archivos modificados correctos.
- Build de producción: 70 páginas, correcto.
- El build final informa 144 kB de First Load JS en la portada frente a 183 kB en la base compilada; no es una medición de velocidad de usuarios reales.
- `check-mobile-ui.cjs` y `check-active-languages.cjs`: correctos.
- Las 17 guías pasan HTTP, canonical, SSR, secciones y FAQ schema en el servidor compilado.
- Vista móvil 390×844 y pequeña 320×480: sin desbordamiento; búsqueda, filtros, Escape, retorno de foco y ciclo de Tab probados.
- Portada comprobada en ES/DE/EN/FR; la marca no invade el selector en 320 px después del ajuste final.
- Caribe, El Yaque, Curiosidades, Naturaleza y Estados: H1 por debajo de la barra y sin desbordamiento horizontal a 390 px.
- Emulación en navegador de escritorio: no sustituye una prueba de teclado virtual en un teléfono físico.

## Vista previa y futura publicación

- http://127.0.0.1:3026/
- Captura final: `C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/mobile-preview-20261007.jpg`. Vista móvil restablecida al tamaño normal después de probar.
- Snapshot: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-mobile-preview-20261007`.
- Base: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-playas-completas-20261007`, deployment `dpl_9mR8ugWo7iErkLtiL9G4gkwwrRAU`.
- Comparación SHA-256 limita cambios a seis componentes de secciones, `components/ui/use-modal-focus.ts`, `lib/i18n.ts` y dos scripts de comprobación.
- No incluye páginas legales en borrador ni otras propuestas locales. Publicar únicamente tras aprobación; verificar primero que la base pública siga siendo la indicada.

El servidor de desarrollo antiguo en 3025 tuvo errores transitorios de caché y rutas tras recompilaciones. La entrega se revisa en el servidor compilado aislado 3026, con HTTP 200. No se borraron cachés ni archivos del usuario.
