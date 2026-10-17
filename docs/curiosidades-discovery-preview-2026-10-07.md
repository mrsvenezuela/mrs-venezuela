# Curiosidades — exploración visual (sin publicar)

La usuaria rechazó el diseño limpio publicado y los tres mockups posteriores; pidió rehacerlo para ofrecer una experiencia más interesante.

Vista local: http://localhost:3024/curiosidades

- Nueva cabecera verde con collage de fotos reales, tipografía sans y dos accesos: empezar y sorpresa.
- Diez anclas numeradas, estado de sección visible con IntersectionObserver, enlaces a la siguiente historia y botón aleatorio dentro de la misma página.
- Diez fichas con números, fechas o hechos destacados; textos y fuentes conservados. Todas las historias siguen visibles, sin acordeones ni nuevas páginas.
- ES, EN, DE y FR; foco programático y reducción de movimiento para la navegación aleatoria.
- Nuevo CSS: components/content/curiosities-discovery.module.css. El CSS del diseño anterior se conserva para comparación/recuperación.
- Nuevo contenido de controles y destacados: lib/curiosities/experience.ts.
- TypeScript, ESLint y check-curiosities correctos. HTTP local 200, diez data-story, botón y estructura nuevos presentes en HTML.
- QA visual e interacción de navegador pendientes: cua_repl falla al iniciar por setup refresh/sandbox. No se afirma haber verificado encuadres o clics en navegador.
- La página pública sigue en dpl_GZBZ8wCbqHJBCPo286Ag34fTMzNm, sin modificación.

Si se publica posteriormente, usar como base el snapshot mrsvenezuela-curiosidades-clean-20261006, no el checkout completo, que contiene otros borradores.
