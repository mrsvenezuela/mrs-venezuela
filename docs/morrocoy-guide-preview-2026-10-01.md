# Morrocoy: guía modelo en vista previa

Estado: **solo local, no publicada**. El usuario aprobó rehacer Morrocoy como modelo antes de cambiar las otras guías.

## Vista previa

- URL: http://localhost:3023/playa/morrocoy
- Directorio: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-morrocoy-guia-20261001`
- Base: copia del snapshot publicado `mrsvenezuela-accesos-20261001`, sin cambios ajenos de la HOME/Amazon del checkout.
- Sesión de desarrollo inicial: 88588.

## Alcance

- `lib/beach-guides/morrocoy.ts`: comparación de playas, llegada revisada, consejos y fuentes.
- `lib/beach-guides/morrocoy-planner.ts`: bases, transporte, tipos de lancha, itinerario sugerido y presupuesto; ES/EN/DE/FR.
- `lib/beach-guides/types.ts`: planificación opcional para reutilizar el componente existente.
- `components/content/beach-editorial-guide.tsx`: navegación interna, ficha rápida sin repetir la fotografía del hero y bloques de planificación. Solo Morrocoy activa estos cambios.
- `scripts/check-beach-guides.cjs`: pruebas de la propuesta localizada y contenido renderizado.

Los Roques, las otras ocho guías, la HOME, el header y el footer conservan su contenido. No hay enlaces comerciales nuevos ni reservas; alojamiento sigue como Próximamente.

## Criterio editorial y fuentes

- Separar llegar al país, transporte por carretera, elección de base y lancha. Evitar presentar el autobús desde Caracas como salida desde el aeropuerto.
- Tucacas/Chichiriviche son alternativas; no etapas obligatorias consecutivas.
- Diferenciar traslado de ida/vuelta a la playa de paseo multiescala y de salida compartida en catamarán.
- El plan de dos días es una propuesta editorial, no un paquete disponible ni un horario confirmado.
- No se publican precios, tiempos exactos ni horarios sin comprobar. El transporte público se identifica como ruta publicada, pendiente de confirmar salidas actuales.

Fuentes consultadas el 1 de octubre de 2026:

- Inparques: https://inparques.gob.ve/Parques%20Nacionales/morrocoy.html
- Accesos y temporada: https://venezuelatuya.com/morrocoy/faq.htm
- Lanchas y bases: https://www.venezuelatuya.com/morrocoy/index.htm
- Sectores: https://venezuelatuya.com/morrocoy/mapainteractivo.htm
- Playuela/Playuelita: https://venezuelatuya.com/morrocoy/playuela.htm
- Sombrero: https://venezuelatuya.com/morrocoy/cayosombrero.htm
- Muerto: https://es.wikipedia.org/wiki/Cayo_Muerto_(Falc%C3%B3n)
- Ejemplo de salida compartida por pasajero: https://www.catamaranesjollycountry.com/salidas-compartidas
- Ejemplo de inclusiones y condiciones variables: https://tulanchamorrocoy.com/terminos-y-condiciones/

Los operadores se citan como evidencia del funcionamiento de los servicios, no como recomendación comercial. Se conservan las dos imágenes existentes de Morrocoy/Sombrero y sus créditos; no se atribuye la foto de Sombrero a las otras playas.

## Verificaciones

- TypeScript sin errores.
- Pruebas de datos para nueve guías, cuatro idiomas y fuentes/activos.
- Pruebas HTTP locales de las nueve rutas, contenido SSR, canonical, FAQ, enlaces y alojamiento sin reservas.
- Cambio de idioma ES → DE → EN → FR → ES en navegador.
- Sin desbordamiento horizontal en pruebas de escritorio, tablet y móvil. Se restauró el viewport normal después de las pruebas.

Antes de publicar: pedir aprobación del modelo, verificar de nuevo el snapshot de producción vigente y desplegar solo el alcance autorizado. No desplegar el checkout completo.
