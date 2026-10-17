# Los Roques publicado — 6 de octubre de 2026

- Estado Vercel: READY; alias https://mrsvenezuela.com confirmado.
- Deployment: `dpl_7mM2qiLiLE4PCT5edGHodtUXZdK4`.
- URL inmutable: https://descubre-venezuela-3g083v69a-mrs-venezuela.vercel.app
- Fuente exacta de producción: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-los-roques-20261006`.
- Base comprobada antes de publicar: `dpl_ETpo5HPUEEnuhjsj1cgsZKG6jgvp`, snapshot `mrsvenezuela-accesos-20261001`.

## Alcance

La usuaria aprobó publicar la vista previa de Los Roques. Se publicó únicamente esa guía y sus dependencias: llegada paso a paso, glosario posada/cayo, planes de alojamiento, lanchas, itinerario, presupuesto y aviso de alojamiento Próximamente. Cuatro idiomas: ES/EN/DE/FR.

Comparación por hash: seis archivos añadidos o cambiados respecto a producción anterior: `lib/beach-guides/los-roques.ts`, `planning-shared.ts`, `types.ts`, `index.ts`, `components/content/beach-editorial-guide.tsx` y `scripts/check-beach-guides.cjs`. No se publicaron cambios ajenos del checkout.

Las otras nueve guías conservan los datos publicados del 1 de octubre. El renderer conserva también sus títulos originales cuando no hay planner. La ampliación local de planificación del resto de destinos sigue pendiente de publicación; no debe confundirse el snapshot de vista previa de todas las guías con producción.

## Verificación

- TypeScript sin errores y prueba de datos de las diez guías correcta.
- Build remoto correcto, 70 páginas generadas.
- Pruebas HTTP contra el dominio público: diez guías, canonical, contenido SSR, FAQ, llegada y alojamiento sin reservas correctos.
- Navegador: recarga de la URL pública existente mostró el nuevo contenido; navegación a Cómo llegar y revisión visual correctas.
- Captura: `C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/los-roques-publicado-20261006.png`.

Usar este snapshot como base para próximas publicaciones acotadas, comprobando primero que el dominio no haya recibido otro despliegue.
