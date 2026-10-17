import Link from 'next/link';

export function LegalDraft({ title, children }: { title: string; children: React.ReactNode }) {
  return <main lang="es" data-translated="true" className="bg-[#f7f4ec] pb-20 pt-32 text-[#263b31] sm:pt-40">
    <article className="container-page max-w-3xl">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Volver al inicio</Link>
      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em]">Mrs Venezuela</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold sm:text-6xl">{title}</h1>
      <aside role="note" className="my-8 border-l-2 border-[#976c45] bg-[#eee7db] p-5 text-sm leading-6">
        <strong>Borrador de revisión · no es la versión legal definitiva.</strong> La titular ha autorizado los datos públicos del aviso legal. Sigue pendiente la revisión de los tratamientos y condiciones aplicables a este documento; todavía no está listo para publicación.
      </aside>
      <p className="mb-4 text-sm text-[#59675f]">Borrador actualizado el 16 de octubre de 2026.</p>
      <nav aria-label="Documentos legales" className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm underline underline-offset-4">
        <Link href="/aviso-legal" className="inline-flex min-h-11 items-center">Aviso legal</Link>
        <Link href="/privacidad" className="inline-flex min-h-11 items-center">Privacidad</Link>
        <Link href="/terminos" className="inline-flex min-h-11 items-center">Términos de uso</Link>
      </nav>
      <div className="space-y-9 [&_h2]:mb-3 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-3xl [&_h2]:font-semibold [&_p]:mb-3 [&_p]:leading-7 [&_a]:underline [&_a]:underline-offset-4">{children}</div>
    </article>
  </main>;
}
