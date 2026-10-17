import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Aviso legal | Mrs Venezuela' },
  description: 'Titular y datos de contacto de Mrs Venezuela.',
  alternates: { canonical: '/aviso-legal' },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function LegalNoticePage() {
  return <main lang="es" data-translated="true" className="bg-[#f7f4ec] pb-20 pt-32 text-[#263b31] sm:pt-40">
    <article className="container-page max-w-3xl">
      <Link href="/" className="inline-flex min-h-11 items-center text-sm underline underline-offset-4">Volver al inicio</Link>
      <p className="mt-7 text-xs font-semibold uppercase tracking-[0.16em]">Mrs Venezuela</p>
      <h1 className="mb-8 mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold sm:text-6xl">Aviso legal</h1>
      <div className="space-y-9 [&_h2]:mb-3 [&_h2]:font-[family-name:var(--font-display)] [&_h2]:text-3xl [&_h2]:font-semibold [&_p]:mb-3 [&_p]:leading-7 [&_a]:underline [&_a]:underline-offset-4">
        <section>
          <h2>Titular del sitio</h2>
          <p>Mrs Venezuela es el nombre editorial del sitio mrsvenezuela.com, cuya titular es Michell Naranjo.</p>
          <address className="not-italic leading-7">Michell Naranjo<br />Alfred-Althus-Straße 12<br />01067 Dresden<br />Alemania</address>
        </section>
        <section>
          <h2>Contacto</h2>
          <p>Para consultas sobre el sitio o para comunicar una corrección, escribe a <a className="break-all" href="mailto:infomrsvenezuela@gmail.com">infomrsvenezuela@gmail.com</a>.</p>
        </section>
        <section>
          <h2>Acerca de Mrs Venezuela</h2>
          <p>Publicamos guías e información sobre destinos, cultura, gastronomía y naturaleza de Venezuela. El sitio no permite formalizar reservas de alojamiento ni comprar paquetes turísticos directamente.</p>
          <p>La información editorial sirve para preparar una visita. Antes de viajar, comprueba los requisitos, los servicios y las condiciones actuales con las autoridades y los proveedores correspondientes.</p>
        </section>
        <section>
          <h2>Fotografías y contenido</h2>
          <p>Las fotografías de terceros conservan sus derechos y licencias. Los créditos y las condiciones de reutilización se indican en las páginas correspondientes.</p>
        </section>
      </div>
      <p className="mt-10 text-sm text-[#59675f]">Actualizado el 16 de octubre de 2026.</p>
    </article>
  </main>;
}
