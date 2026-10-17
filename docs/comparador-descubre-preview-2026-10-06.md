# Comparador de playas + Descubre más — vista previa

Estado: publicado el 2026-10-06 en https://mrsvenezuela.com. Registro: `docs/production-comparador-2026-10-06.md`. Servidor local en http://localhost:3024.

## Revisión aprobada: una única lista de destinos

La usuaria rechazó la duplicación de los destinos entre comparador y galería. La implementación vigente sustituye la primera propuesta descrita más abajo:

- Solo se muestra «Destinos esenciales», con ocho tarjetas. Cada tarjeta tiene Ver guía y Comparar; no se anidan botones en enlaces.
- `BeachDestinations` reemplaza la galería únicamente para esa sección. Se retiró el comparador independiente y su entrada extra en el índice.
- Selección vacía al entrar, máximo dos, selección visible, quitar y borrar. Al pulsar Ver comparación aparece una tabla compacta dentro de la sección, sin repetir fotografías. Cierre con botón y Escape, con devolución de foco.
- Barra inferior contextual permite abrir la comparación desde el final de la lista, también en móvil.
- El acceso de Inicio apunta ahora a `#destinos-esenciales`; `#compara-playas` permanece como ancla compatible dentro de la misma lista.
- Nuevo módulo `lib/home/beach-selection.ts` con transición pura y textos en los cuatro idiomas.
- Test actualizado: 56 pares posibles, límite, deselección, inmutabilidad, idiomas, imágenes y ausencia de bloque duplicado. TypeScript y ESLint correctos.
- Navegador: 8 tarjetas y 0 paneles al iniciar; selección, bloqueo de tercero, apertura, Escape, quitar y borrar verificados. Sin errores de consola. Probado a 1440, 390 y 320 px, sin desbordamiento horizontal.
- Captura vigente: `C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/destinos-unificados-20261006.jpg`.

La sección Inicio conserva el diseño de la propuesta anterior. La revisión aprobada y el nuevo bloque de Inicio se publicaron el 2026-10-06.

## Primera propuesta (sustituida en Caribe y playa)

- `components/sections/beach-comparison.tsx`: tres columnas en escritorio, dos en móvil; selección entre ocho destinos; intercambio al elegir un destino ya visible; filas alineadas mediante CSS subgrid; fotos y enlaces del catálogo existente.
- `lib/home/beach-comparison.ts`: resumen práctico de las guías y textos de interfaz en ES/EN/DE/FR. No contiene tarifas, disponibilidad ni nuevos enlaces comerciales.
- `components/content/thematic-page.tsx`: inserción solo en Caribe y playa, justo antes de Destinos esenciales. Acceso adicional en el índice.
- `components/sections/articles.tsx`: ruta de 14 días destacada, Naturaleza y Curiosidades en dos tarjetas laterales, colores suaves, descripciones más breves y acceso al comparador. Se conservan destinos, fotos, licencias y el ancla articulos.
- `scripts/check-beach-comparison.cjs`: valida los ocho destinos, cuatro idiomas, fotos locales, datos y ubicación.

## Verificación

- TypeScript sin errores; ESLint de los tres módulos principales sin errores.
- Tests de comparación y de idiomas activos correctos.
- Navegador: selección de Mochima, intercambio con Morrocoy y elección del tercer destino desde móvil correctos; botón de guía abre Los Roques.
- ES/EN/DE/FR comprobados en el navegador.
- Revisión a 1440, 390 y 320 px; sin desbordamiento horizontal; filas de comparación alineadas incluso con textos alemanes.
- Captura de Inicio: `C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/descubre-mas-preview-20261006.jpg`.

## Publicación posterior

El checkout contiene muchos cambios previos, incluido Amazon y ampliaciones de otras guías. No desplegarlo completo por este trabajo. Usar el snapshot de producción documentado en `production-los-roques-2026-10-06.md` y trasladar únicamente los cambios anteriores, conservando las demás diferencias de producción. Comprobar antes que no haya una publicación más reciente.
