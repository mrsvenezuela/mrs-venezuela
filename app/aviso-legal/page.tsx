import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/content/legal-page';

export const metadata: Metadata = {
  title: { absolute: 'Aviso legal | Mrs Venezuela' },
  description: 'Aviso legal de Mrs Venezuela: titular del sitio, dirección postal y correo de contacto para consultas y correcciones.',
  alternates: { canonical: '/aviso-legal' },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function LegalNoticePage() {
  return <LegalPage title="Aviso legal" subtitle="Impressum · Información conforme al § 5 DDG y al § 18 MStV">
    <section>
      <h2>Titular del sitio (§ 5 DDG)</h2>
      <p>Mrs Venezuela es el nombre editorial del sitio web mrsvenezuela.com, cuya titular es una persona particular:</p>
      <address className="not-italic leading-7">Michell Naranjo<br />Alfred-Althus-Straße 12<br />01067 Dresden<br />Alemania</address>
    </section>

    <section>
      <h2>Contacto</h2>
      <p>Correo electrónico: <a className="break-all" href="mailto:infomrsvenezuela@gmail.com">infomrsvenezuela@gmail.com</a></p>
      <p>Para consultas sobre el sitio, avisos legales o para comunicar una corrección, escribe a esa dirección.</p>
    </section>

    <section>
      <h2>Responsable del contenido (§ 18, apdo. 2 MStV)</h2>
      <address className="not-italic leading-7">Michell Naranjo<br />Alfred-Althus-Straße 12<br />01067 Dresden<br />Alemania</address>
    </section>

    <section>
      <h2>Acerca de Mrs Venezuela</h2>
      <p>Publicamos guías e información sobre destinos, cultura, gastronomía y naturaleza de Venezuela. El sitio no permite reservar alojamientos ni comprar productos o paquetes turísticos directamente. El proyecto se financia mediante enlaces de afiliado (por ejemplo, de Amazon y de plataformas de alojamiento); no hay publicidad ni patrocinios.</p>
      <p>En calidad de Afiliada de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.</p>
    </section>

    <section>
      <h2>Responsabilidad por los contenidos</h2>
      <p>Los contenidos de este sitio se elaboran con el máximo cuidado. Como proveedora de servicios, soy responsable de los contenidos propios conforme a las leyes generales (§ 7, apdo. 1 DDG). No estoy obligada a supervisar la información de terceros transmitida o almacenada ni a investigar circunstancias que indiquen una actividad ilícita (§§ 8 a 10 DDG). Las obligaciones de eliminar o bloquear el uso de información conforme a las leyes generales no se ven afectadas. Si tengo conocimiento de una infracción concreta, eliminaré el contenido afectado sin demora.</p>
    </section>

    <section>
      <h2>Responsabilidad por los enlaces</h2>
      <p>El sitio contiene enlaces a webs externas de terceros sobre cuyo contenido no tengo ninguna influencia. Del contenido de las páginas enlazadas es responsable siempre su proveedor u operador. Al establecer los enlaces no se apreciaron contenidos ilícitos. Si tengo conocimiento de una infracción, eliminaré el enlace afectado sin demora.</p>
    </section>

    <section>
      <h2>Derechos de autor</h2>
      <p>Los textos y las fotografías propias están protegidos por los derechos de autor. Las fotografías de terceros conservan sus derechos y licencias; la autoría y las condiciones de reutilización se indican en las páginas correspondientes. Más información en los <Link href="/terminos">términos de uso</Link>.</p>
    </section>

    <section>
      <h2>Protección de datos</h2>
      <p>La información sobre el tratamiento de datos personales se encuentra en la <Link href="/privacidad">política de privacidad</Link>.</p>
    </section>
  </LegalPage>;
}
