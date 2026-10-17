import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/content/legal-page';

export const metadata: Metadata = {
  title: { absolute: 'Términos de uso | Mrs Venezuela' },
  description: 'Condiciones de uso de mrsvenezuela.com: carácter informativo de las guías, enlaces de afiliado, derechos sobre fotos y textos, responsabilidad y ley aplicable.',
  alternates: { canonical: '/terminos' },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function TermsPage() {
  return <LegalPage title="Términos de uso">
    <section>
      <h2>1. Ámbito</h2>
      <p>Estos términos regulan el uso del sitio web mrsvenezuela.com («Mrs Venezuela»), cuya titular es Michell Naranjo, Alfred-Althus-Straße 12, 01067 Dresden, Alemania (véase el <Link href="/aviso-legal">aviso legal</Link>). Al usar el sitio aceptas estos términos. El uso es gratuito y no requiere registro.</p>
    </section>

    <section>
      <h2>2. Carácter informativo de los contenidos</h2>
      <p>Mrs Venezuela publica guías e información sobre destinos, cultura, gastronomía, historia y naturaleza de Venezuela. Los contenidos se elaboran con cuidado y se revisan periódicamente, pero tienen carácter meramente informativo y no sustituyen el asesoramiento profesional (por ejemplo, jurídico, médico o de seguridad).</p>
      <p>Las condiciones de viaje cambian con frecuencia. Antes de viajar, comprueba los requisitos de entrada, las advertencias de viaje oficiales, los horarios, los precios, los permisos y las condiciones de seguridad con las autoridades y los proveedores correspondientes. No garantizamos que la información esté completa, sea exacta o esté actualizada en todo momento.</p>
    </section>

    <section>
      <h2>3. Sin venta ni reservas en este sitio</h2>
      <p>En Mrs Venezuela no se venden productos ni se pueden reservar alojamientos, vuelos o paquetes turísticos. No somos agencia de viajes, organizadora de viajes combinados ni intermediaria de reservas. Cualquier compra o reserva se realiza directamente en la plataforma de un tercero y se rige exclusivamente por las condiciones de ese tercero, que es tu única contraparte contractual.</p>
    </section>

    <section>
      <h2>4. Enlaces de afiliado</h2>
      <p>El sitio se financia mediante enlaces de afiliado. No contiene publicidad ni contenidos patrocinados. Algunas páginas contienen o pueden contener enlaces a Amazon y a plataformas de reserva de hoteles y alojamientos. Si compras o reservas a través de uno de estos enlaces, podemos recibir una comisión, sin coste adicional para ti. Estos enlaces se señalan en la página donde aparecen. Las comisiones no influyen en nuestra valoración editorial.</p>
      <p><strong>En calidad de Afiliada de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.</strong></p>
      <p>Los precios, la disponibilidad y las condiciones que muestran las plataformas pueden cambiar en cualquier momento; solo son vinculantes los que figuran en la plataforma en el momento de la compra o la reserva. Encontrarás más información sobre el tratamiento de datos en la <Link href="/privacidad">política de privacidad</Link>.</p>
    </section>

    <section>
      <h2>5. Enlaces externos</h2>
      <p>El sitio contiene enlaces a webs de terceros sobre cuyo contenido no tenemos ninguna influencia. Del contenido de las páginas enlazadas es responsable siempre su proveedor u operador. Al establecer los enlaces no se apreciaron contenidos ilícitos. Si tenemos conocimiento de una infracción, eliminaremos el enlace afectado sin demora.</p>
    </section>

    <section>
      <h2>6. Derechos sobre textos y fotografías</h2>
      <p>Los textos, el diseño y las fotografías propias de Mrs Venezuela están protegidos por los derechos de autor. Puedes leerlos, compartir enlaces a nuestras páginas y citarlos en los límites permitidos por la ley, indicando la fuente. Cualquier otra reproducción, distribución o modificación requiere nuestro permiso previo por escrito.</p>
      <p>Las fotografías de terceros, por ejemplo las procedentes de Wikimedia Commons, conservan los derechos de sus autoras y autores y se utilizan conforme a sus licencias (por ejemplo, Creative Commons). La autoría y la licencia de cada imagen se indican en la página correspondiente. Si deseas reutilizar una de esas fotografías, rigen las condiciones de su licencia original.</p>
      <p>Si consideras que algún contenido infringe tus derechos, escríbenos y lo revisaremos sin demora.</p>
    </section>

    <section>
      <h2>7. Responsabilidad</h2>
      <p>Respondemos sin limitación en caso de dolo y negligencia grave, por daños derivados de lesiones a la vida, la integridad física o la salud, y en los demás casos en que la ley establezca una responsabilidad imperativa. En los demás supuestos, y dado que el sitio se ofrece de forma gratuita, no respondemos por la negligencia leve. No garantizamos que el sitio esté disponible de forma ininterrumpida ni libre de errores.</p>
    </section>

    <section>
      <h2>8. Uso adecuado</h2>
      <p>No está permitido usar el sitio de forma que perjudique su funcionamiento, por ejemplo mediante accesos automatizados masivos, intentos de acceso no autorizado o la introducción de código malicioso.</p>
    </section>

    <section>
      <h2>9. Correcciones y contacto</h2>
      <p>Si encuentras un error o un dato desactualizado, escríbenos a <a className="break-all" href="mailto:infomrsvenezuela@gmail.com">infomrsvenezuela@gmail.com</a>. Revisamos cada aviso y corregimos el contenido cuando procede.</p>
    </section>

    <section>
      <h2>10. Cambios en estos términos</h2>
      <p>Podemos modificar estos términos cuando cambien el sitio, sus contenidos o la legislación aplicable. Rige la versión publicada en esta página en el momento de tu visita.</p>
    </section>

    <section>
      <h2>11. Ley aplicable e idioma</h2>
      <p>Estos términos se rigen por el derecho de la República Federal de Alemania. Si usas el sitio como consumidora o consumidor, esta elección de ley no te priva de la protección que te otorguen las normas imperativas del país en el que tengas tu residencia habitual. Estos términos se redactan en español; si existiera una traducción, prevalecerá la versión en español.</p>
      <p>Si alguna disposición de estos términos fuera inválida, las demás seguirán siendo válidas.</p>
    </section>
  </LegalPage>;
}
