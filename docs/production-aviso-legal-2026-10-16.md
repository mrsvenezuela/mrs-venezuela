# Aviso legal: publicación autorizada

La titular autorizó expresamente publicar el nombre abreviado que eligió, su dirección postal y el correo editorial en el aviso legal. No se incluye su número fiscal personal ni su teléfono.

## Alcance

- Ruta independiente `/aviso-legal`, datos de titular y contacto, descripción editorial y créditos.
- Enlace permanente `Aviso legal` en el pie de todas las páginas.
- Se mantiene `noindex, follow`; esto no oculta la dirección al público ni garantiza que no aparezca en buscadores.
- No se presenta la publicación como una certificación de cumplimiento legal. Sigue pendiente revisar el nombre legal exigible, posibles obligaciones editoriales/empresariales y la política de privacidad según la configuración real.
- Privacidad y términos permanecen como borradores locales; no se publican sus rutas ni enlaces. No se publican las mejoras de los tres estados ni se activan afiliaciones en esta entrega.

## Base y aislamiento

- Base pública verificada: `dpl_GuXRjPJ67zeybDvo6mQj2Ha7vgN4` (8 de octubre), dominio `mrsvenezuela.com`.
- La antigua carpeta temporal había perdido archivos. Se recuperó el árbol de fuentes desde Vercel en una nueva carpeta, verificando los 486 archivos por SHA-1: 480 coincidieron con copias locales y 6 se descargaron de la publicación.
- Copia aislada: `C:/Users/User/AppData/Local/Temp/mrsvenezuela-aviso-20261016`.
- Únicos cambios de sitio sobre esa base: `app/aviso-legal/page.tsx` y una línea de enlace en `components/sections/home-footer.tsx`.
- Fuente normativa consultada: https://www.gesetze-im-internet.de/ddg/__5.html . No se afirma que los datos autorizados resuelvan por sí solos todas las obligaciones aplicables.

## Resultado

- Compilación local y Vercel correctas: 71 páginas. ESLint de cambios correcto.
- `check-site-seo.cjs` valida las 65 páginas del sitemap en la copia aislada.
- `check-published-legal.cjs` valida datos autorizados, enlace del pie, noindex y ausencia de los dos borradores en local y producción.
- Revisión móvil a 390 px: sin desbordamiento horizontal. Tamaño del navegador restablecido.
- Deployment `dpl_6PVCGJCKxVBM2nZDsUk4hSUTpahn`, estado `READY`, alias `https://mrsvenezuela.com`.
- URL de despliegue: https://descubre-venezuela-ewd6mkgc5-mrs-venezuela.vercel.app
