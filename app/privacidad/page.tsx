import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/content/legal-page';

export const metadata: Metadata = {
  title: { absolute: 'Política de privacidad | Mrs Venezuela' },
  description: 'Qué datos trata mrsvenezuela.com, con qué finalidad y base legal, qué proveedores intervienen y cómo ejercer tus derechos según el RGPD.',
  alternates: { canonical: '/privacidad' },
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function PrivacyPage() {
  return <LegalPage title="Política de privacidad" subtitle="Información sobre protección de datos (art. 13 RGPD)">
    <section>
      <h2>1. Responsable del tratamiento</h2>
      <p>La responsable del tratamiento de los datos personales en este sitio web (mrsvenezuela.com) en el sentido del Reglamento General de Protección de Datos (RGPD / DSGVO) es:</p>
      <address className="not-italic leading-7">Michell Naranjo<br />Alfred-Althus-Straße 12<br />01067 Dresden<br />Alemania<br />Correo electrónico: <a className="break-all" href="mailto:infomrsvenezuela@gmail.com">infomrsvenezuela@gmail.com</a></address>
      <p>Mrs Venezuela es un proyecto editorial de una persona particular. No existe obligación de designar un delegado de protección de datos. Para cualquier consulta sobre privacidad puedes escribir a la dirección de correo indicada.</p>
    </section>

    <section>
      <h2>2. Resumen</h2>
      <ul>
        <li>Puedes leer todo el sitio sin registrarte y sin facilitar datos personales.</li>
        <li>No hay formulario de contacto, boletín, cuentas de usuario, publicidad ni patrocinios.</li>
        <li>No utilizamos cookies de publicidad ni de seguimiento. La estadística de visitas funciona sin cookies.</li>
        <li>Solo se guarda en tu navegador el idioma que eliges.</li>
        <li>Los reproductores de Spotify se cargan únicamente si pulsas para escuchar una canción.</li>
        <li>Algunas páginas contienen o pueden contener enlaces de afiliado (por ejemplo, de Amazon o de plataformas de alojamiento).</li>
      </ul>
    </section>

    <section>
      <h2>3. Alojamiento y entrega del sitio (Vercel)</h2>
      <p>El sitio está alojado en Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, Estados Unidos. Cuando visitas una página, tu navegador envía automáticamente datos técnicos al servidor: dirección IP, fecha y hora de la solicitud, página solicitada, página de procedencia (referrer), navegador, sistema operativo y datos similares. Vercel trata estos datos para entregar las páginas y las imágenes optimizadas, garantizar la seguridad y estabilidad del servicio (por ejemplo, frente a ataques) y registrar errores. Los registros técnicos se conservan durante un plazo breve según la configuración del proveedor; no los usamos para identificar a las personas que nos visitan.</p>
      <p>Base legal: art. 6, apdo. 1, letra f RGPD. Nuestro interés legítimo es ofrecer un sitio web disponible, rápido y seguro.</p>
      <p>Vercel trata los datos en nuestro nombre como encargado del tratamiento. Pueden transferirse datos a Estados Unidos. Vercel Inc. está certificada conforme al Marco de Privacidad de Datos UE-EE. UU. (EU-U.S. Data Privacy Framework), para el que la Comisión Europea adoptó una decisión de adecuación (art. 45 RGPD). Más información: <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer">política de privacidad de Vercel</a>.</p>
    </section>

    <section>
      <h2>4. Estadística de visitas (Vercel Web Analytics)</h2>
      <p>Para saber qué guías se leen y mejorar el contenido utilizamos Vercel Web Analytics, un servicio de Vercel Inc. (véase el apartado 3). Funciona sin cookies y sin identificadores que permitan seguirte en otros sitios web. Por cada visita se registran datos como la página visitada, la página de procedencia, el país o la región aproximada, el tipo de dispositivo, el sistema operativo y el navegador. Para distinguir visitas se calcula un valor resumido (hash) a partir de la solicitud, que se descarta automáticamente al cabo de 24 horas; la dirección IP no se guarda. Solo vemos estadísticas agregadas.</p>
      <p>También contamos de forma agregada los clics en enlaces de reserva o de compra (por ejemplo, qué plataforma y desde qué página) para saber qué recomendaciones resultan útiles. Este recuento no incluye datos que te identifiquen.</p>
      <p>Base legal: art. 6, apdo. 1, letra f RGPD. Nuestro interés legítimo es conocer, de forma anónima y agregada, el uso del sitio para mejorarlo. Como no se almacena ni se lee información en tu dispositivo con este fin, no se requiere consentimiento según el § 25 de la TDDDG. Puedes oponerte en cualquier momento (véase el apartado 13); además, los bloqueadores de contenido habituales impiden este recuento.</p>
    </section>

    <section>
      <h2>5. Preferencia de idioma (almacenamiento en tu navegador)</h2>
      <p>Si eliges un idioma, lo guardamos en el almacenamiento local de tu navegador (clave «descubre-venezuela-language») y en una cookie propia («mrs-venezuela-language», con una duración de un año) para mostrarte el sitio en ese idioma en tus próximas visitas. Estos datos no se envían a terceros ni se usan para otros fines. Puedes borrarlos en cualquier momento desde la configuración de tu navegador.</p>
      <p>Base legal: § 25, apdo. 2, n.º 2 TDDDG, porque el almacenamiento es estrictamente necesario para prestar la función que solicitas, y art. 6, apdo. 1, letra f RGPD (interés legítimo en recordar la configuración elegida).</p>
      <p>Las listas de preparación del viaje que puedes marcar en algunas guías solo se guardan temporalmente en la página abierta y se pierden al cerrarla o recargarla; no se envían a ningún servidor.</p>
    </section>

    <section>
      <h2>6. Fotografías y fuentes tipográficas</h2>
      <p>Todas las fotografías, incluidas las procedentes de Wikimedia Commons, y las fuentes tipográficas se sirven desde nuestro propio alojamiento. Al cargar las páginas no se establece conexión con Wikimedia, Google Fonts ni otros servidores externos para estos elementos.</p>
    </section>

    <section>
      <h2>7. Reproductores de música (Spotify)</h2>
      <p>En algunas páginas puedes escuchar fragmentos de canciones venezolanas mediante un reproductor de Spotify AB, Regeringsgatan 19, 111 53 Estocolmo, Suecia. El reproductor no se carga al abrir la página, sino solo cuando pulsas el botón para escucharlo. A partir de ese momento tu navegador se conecta con los servidores de Spotify, que recibe al menos tu dirección IP y la página desde la que se carga el reproductor, y puede almacenar o leer información en tu dispositivo (por ejemplo, cookies). Si has iniciado sesión en Spotify, este puede asociar la reproducción a tu cuenta. Spotify puede transferir datos a terceros países, como Estados Unidos.</p>
      <p>Base legal: tu consentimiento, que das al pulsar para cargar el reproductor (art. 6, apdo. 1, letra a RGPD y § 25, apdo. 1 TDDDG). Puedes retirarlo en cualquier momento con efecto para el futuro: basta con no volver a activar el reproductor y borrar las cookies de Spotify en tu navegador. Más información: <a href="https://www.spotify.com/es/legal/privacy-policy/" target="_blank" rel="noopener noreferrer">política de privacidad de Spotify</a>.</p>
      <p>Los demás enlaces a Spotify son enlaces normales: solo te llevan a la web de Spotify si haces clic en ellos.</p>
    </section>

    <section>
      <h2>8. Enlaces de afiliado (Amazon y alojamientos)</h2>
      <p>Mrs Venezuela se financia mediante enlaces de afiliado. Algunas páginas contienen o pueden contener enlaces a Amazon y a plataformas de reserva de hoteles y alojamientos. Si haces clic en uno de estos enlaces y después compras o reservas, podemos recibir una comisión. El precio para ti no cambia. Los enlaces de afiliado se señalan en la página donde aparecen.</p>
      <p><strong>En calidad de Afiliada de Amazon, obtengo ingresos por las compras adscritas que cumplen los requisitos aplicables.</strong></p>
      <p>Nuestras páginas no cargan contenidos de Amazon ni de las plataformas de alojamiento: tu navegador solo se conecta con ellas cuando haces clic en un enlace. A partir de ese momento, la plataforma correspondiente (por ejemplo, Amazon) trata tus datos bajo su propia responsabilidad y puede usar cookies o tecnologías similares para atribuir la compra o la reserva al enlace de procedencia. No recibimos datos personales sobre tus compras o reservas; como mucho, informes agregados de comisiones. Consulta la política de privacidad de la plataforma correspondiente.</p>
      <p>Base legal para el recuento agregado de clics descrito en el apartado 4: art. 6, apdo. 1, letra f RGPD (interés legítimo en la financiación del proyecto y en saber qué recomendaciones son útiles).</p>
    </section>

    <section>
      <h2>9. Contacto por correo electrónico (Gmail)</h2>
      <p>Si nos escribes a <a className="break-all" href="mailto:infomrsvenezuela@gmail.com">infomrsvenezuela@gmail.com</a>, tratamos tu dirección de correo, tu nombre si lo indicas y el contenido de tu mensaje para responderte y, en su caso, para corregir o mejorar el contenido. El correo se gestiona con Gmail, un servicio de Google Ireland Limited, Gordon House, Barrow Street, Dublín 4, Irlanda; Google puede tratar datos también en Estados Unidos. Google LLC está certificada conforme al EU-U.S. Data Privacy Framework.</p>
      <p>Base legal: art. 6, apdo. 1, letra f RGPD (interés legítimo en responder a tu consulta) y, si tu mensaje se refiere a la celebración o ejecución de un contrato, art. 6, apdo. 1, letra b RGPD.</p>
      <p>Conservamos los mensajes mientras sean necesarios para tramitar tu consulta y los eliminamos cuando ya no lo son, salvo que una obligación legal de conservación exija guardarlos durante más tiempo. No hay formulario de contacto ni boletín de noticias.</p>
    </section>

    <section>
      <h2>10. Enlaces externos y redes sociales</h2>
      <p>El sitio enlaza a fuentes y webs de terceros, y a nuestros perfiles de Instagram y TikTok. Son enlaces normales: no se carga ningún contenido ni botón de esas redes al abrir nuestras páginas. Solo si haces clic en uno de ellos pasas a la web del tercero, que trata tus datos bajo su propia responsabilidad. La función «Compartir» utiliza el menú para compartir de tu propio dispositivo o copia el enlace al portapapeles; no nos envía ningún dato.</p>
      <p>El archivo de verificación de Google Search Console que existe en el servidor solo sirve para demostrar a Google la titularidad del dominio y no transmite datos de los visitantes.</p>
    </section>

    <section>
      <h2>11. Destinatarios y transferencias a terceros países</h2>
      <p>Solo compartimos datos con los proveedores mencionados en esta política y en la medida descrita. No vendemos datos personales. Cuando los datos se tratan en Estados Unidos, la transferencia se basa en la decisión de adecuación de la Comisión Europea para el EU-U.S. Data Privacy Framework (art. 45 RGPD) en el caso de las empresas certificadas o, en su caso, en las cláusulas contractuales tipo de la Comisión Europea (art. 46 RGPD).</p>
    </section>

    <section>
      <h2>12. Plazo de conservación</h2>
      <p>Conservamos los datos personales solo durante el tiempo necesario para la finalidad correspondiente o mientras lo exijan obligaciones legales de conservación. Los plazos concretos se indican en cada apartado. La preferencia de idioma permanece en tu navegador hasta que la borres (la cookie caduca al cabo de un año).</p>
    </section>

    <section>
      <h2>13. Tus derechos</h2>
      <p>En relación con tus datos personales tienes derecho a:</p>
      <ul>
        <li>obtener información sobre los datos que tratamos (art. 15 RGPD);</li>
        <li>solicitar la rectificación de datos inexactos (art. 16 RGPD);</li>
        <li>solicitar su supresión (art. 17 RGPD);</li>
        <li>solicitar la limitación del tratamiento (art. 18 RGPD);</li>
        <li>recibir los datos que nos hayas facilitado en un formato estructurado y transmitirlos a otro responsable (portabilidad, art. 20 RGPD);</li>
        <li>retirar en cualquier momento el consentimiento que hayas dado, sin que ello afecte a la licitud del tratamiento anterior a la retirada (art. 7, apdo. 3 RGPD).</li>
      </ul>
      <h3>Derecho de oposición (art. 21 RGPD)</h3>
      <p><strong>Cuando tratamos tus datos sobre la base de un interés legítimo (art. 6, apdo. 1, letra f RGPD), tienes derecho a oponerte en cualquier momento al tratamiento por motivos relacionados con tu situación particular. En ese caso dejaremos de tratarlos, salvo que acreditemos motivos legítimos imperiosos que prevalezcan sobre tus intereses, derechos y libertades, o que el tratamiento sirva para formular, ejercer o defender reclamaciones.</strong></p>
      <p>Para ejercer cualquiera de estos derechos basta con un correo electrónico a <a className="break-all" href="mailto:infomrsvenezuela@gmail.com">infomrsvenezuela@gmail.com</a>.</p>
    </section>

    <section>
      <h2>14. Derecho a presentar una reclamación</h2>
      <p>Si consideras que el tratamiento de tus datos infringe el RGPD, puedes presentar una reclamación ante una autoridad de control (art. 77 RGPD), en particular en tu país de residencia o ante la autoridad competente para nosotros:</p>
      <address className="not-italic leading-7">Sächsische Datenschutz- und Transparenzbeauftragte<br />Dresde (Sajonia), Alemania<br /><a href="https://www.datenschutz.sachsen.de/beschwerde-einreichen.html" target="_blank" rel="noopener noreferrer">Presentar una reclamación en datenschutz.sachsen.de</a></address>
    </section>

    <section>
      <h2>15. Decisiones automatizadas</h2>
      <p>No tomamos decisiones basadas únicamente en el tratamiento automatizado, incluida la elaboración de perfiles, en el sentido del art. 22 RGPD.</p>
    </section>

    <section>
      <h2>16. Obligación de facilitar datos</h2>
      <p>No estás obligada ni obligado legal ni contractualmente a facilitarnos datos personales. Sin los datos técnicos descritos en el apartado 3 no es posible mostrar el sitio, y sin tu dirección de correo no podemos responderte.</p>
    </section>

    <section>
      <h2>17. Cambios en esta política</h2>
      <p>Actualizaremos esta política cuando cambien el sitio o los servicios utilizados. La versión vigente es siempre la publicada en esta página. Consulta también el <Link href="/aviso-legal">aviso legal</Link> y los <Link href="/terminos">términos de uso</Link>.</p>
    </section>
  </LegalPage>;
}
