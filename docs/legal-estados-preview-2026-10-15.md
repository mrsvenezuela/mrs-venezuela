# Revisión local: páginas legales y contenido de estados

## Alcance confirmado

La usuaria corrigió su selección a los puntos **1 y 3**: páginas legales y contenido para buscadores. Amazon USA y CJ/Booking quedan fuera; no se han modificado cuentas ni activado afiliaciones.

## Contenido

- Carabobo, Aragua y Miranda: nueva entrada que identifica ubicación, capital y diferencia entre zonas del estado.
- Llegadas: conexión Caracas–Maracay–Valencia, separación de las carreteras a Choroní/Ocumare, y distinción entre Maiquetía/La Guaira y los destinos de Miranda.
- Preguntas frecuentes: ciudad frente a estado, relación de Miranda con Caracas, distribución de días sin acumular traslados.
- Eliminada la generalización que presentaba todas las playas de Barlovento como de oleaje suave y aptas para familias.
- Títulos y descripciones orientados a preguntas reales. El JSON-LD utiliza la descripción editorial del estado y las FAQ visibles.
- Se conservaron fotografías, estructura y estilos. Hay 19 nuevas entradas traducidas al inglés, alemán y francés.
- Sitemap: modificación editorial de estas tres rutas, 15 de octubre de 2026. No implica nueva auditoría factual de todo su contenido ni asegura posicionamiento.

Fuentes consultadas para esta revisión:

- https://www.venezuelatuya.com/estados/carabobo.htm
- https://www.venezuelatuya.com/estados/aragua.htm
- https://www.venezuelatuya.com/estados/miranda.htm
- https://venezuelatuya.com/centro/costas_de_aragua.htm
- https://www.venezuelatuya.com/centro/puertocabello.htm
- https://bibliofep.fundacionempresaspolar.org/media/1040/gv_t5_c40_p422_487_lres_single_preview.pdf

No se copiaron precios, horarios o tiempos de viaje antiguos de esas fuentes. Los recorridos son orientativos y no certifican el estado actual de las vías.

## Páginas legales: borradores, no publicables todavía

- Añadido `/aviso-legal`, con navegación entre los tres documentos.
- Actualizada privacidad con la persistencia real del idioma y la checklist en memoria.
- Revisado contacto por correo, carga opcional de Spotify y fotografías externas; siguen pendientes las bases jurídicas, conservación y garantías de los proveedores según la configuración real.
- Los tres documentos tienen `noindex` también para Googlebot, aviso visible de borrador y exclusión del sitemap. `noindex` no es un mecanismo de privacidad: por eso no contienen datos personales pendientes de autorización ni deben desplegarse todavía.
- Se pidió confirmar nombre, dirección postal y correo autorizados para publicación. La usuaria ya indicó que ella es la titular, pero no ha confirmado esos datos públicos en este turno.
- No se solicita ni se publica la Steuer-ID personal. La existencia de identificadores empresariales sujetos a deberes de información debe revisarse separadamente.

Referencias:

- https://www.gesetze-im-internet.de/ddg/__5.html
- https://eur-lex.europa.eu/eli/reg/2016/679/oj
- https://vercel.com/docs/analytics/privacy-policy
- https://www.datenschutz.sachsen.de/beschwerde-einreichen.html

## Aislamiento

Vista previa basada en la última publicación documentada, no en el checkout completo:
`C:/Users/User/AppData/Local/Temp/mrsvenezuela-legal-estados-20261015`.

Archivos incorporados: las tres guías de estado, `lib/site-translations.json`, `lib/page-factory.tsx`, `app/sitemap.ts`, los tres documentos legales, `components/content/legal-draft.tsx` y los dos scripts de comprobación. Los enlaces del pie de producción no se sustituyeron por borradores. No se ha ejecutado despliegue público en este turno.

Comprobaciones disponibles: `scripts/check-state-search-intent.cjs [baseURL]` y `scripts/check-legal-drafts.cjs [baseURL]`.

## Verificación realizada

- TypeScript y ESLint de los archivos modificados: sin errores.
- Build aislado de producción: correcto, 73 páginas generadas.
- Pruebas HTTP en `http://127.0.0.1:3028`: las tres guías y los tres borradores responden correctamente; metadata, FAQ y noindex coinciden con lo esperado.
- Navegador: comprobada la introducción de Carabobo, apertura de la nueva FAQ y traducción al inglés. Restablecido español.
- Vista móvil de Carabobo y aviso legal: sin desbordamiento horizontal; restablecido el tamaño habitual al terminar.
- Captura de la introducción: `C:/Users/User/.codex/visualizations/2026/08/20/01a01f26-f5be-7621-9d31-d51b4c1a5c28/estados-legal-preview-20261015.png`.
- Vista previa entregada; no publicada en mrsvenezuela.com.
