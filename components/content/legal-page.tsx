import Link from 'next/link';
import { LegalLanguageNote } from '@/components/content/legal-language-note';

export const LEGAL_LAST_UPDATED = 'Última actualización: 17 de octubre de 2026';

export function LegalPage({ title, subtitle, children }: { title: string; subtitle?: string; children: React.ReactNode }) {
  return <main lang="es" data-translated="true" className="bg-[#f7f4ec] pb-20 pt-32 text-[#263b31] sm:pt-40">
    <article className="container-page max-w-3xl">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Volver al inicio</Link>
      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em]">Mrs Venezuela</p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold sm:text-6xl">{title}</h1>
      {subtitle ? <p className="mt-3 text-lg text-[#59675f]">{subtitle}</p> : null}
      <p className="mb-4 mt-6 text-sm text-[#59675f]">{LEGAL_LAST_UPDATED}</p>
      <LegalLanguageNote />
      <nav aria-label="Documentos legales" className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-sm underline underline-offset-4">
        <Link href="/aviso-legal" className="inline-flex min-h-11 items-center">Aviso legal</Link>
        <Link href="/privacidad" className="inline-flex min-h-11 items-center">Privacidad</Link>
        <Link href="/terminos" className="inline-flex min-h-11 items-center">Términos de uso</Link>
      </nav>
      <div className="space-y-9 [&_h2]:mb-3 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-3xl [&_h2]:font-semibold [&_h3]:mb-2 [&_h3]:mt-5 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mb-3 [&_p]:leading-7 [&_ul]:mb-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-6 [&_li]:leading-7 [&_a]:underline [&_a]:underline-offset-4">{children}</div>
    </article>
  </main>;
}
