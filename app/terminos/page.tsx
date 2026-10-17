import type { Metadata } from 'next';
import { LegalDraft } from '@/components/content/legal-draft';

export const metadata: Metadata = {
  title: { absolute: 'Términos · borrador | Mrs Venezuela' },
  description: 'Borrador de las condiciones de uso de Mrs Venezuela, pendiente de revisión y confirmación del titular.',
  alternates: { canonical: '/terminos' }, robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
};

export default function TermsPage() {
  return <LegalDraft title="Términos de uso">
    <section><h2>El proyecto</h2><p>Mrs Venezuela publica contenido editorial sobre destinos, cultura y naturaleza de Venezuela. La identidad legal y los datos obligatorios del titular están pendientes de confirmación; este borrador no sustituye un aviso legal completo.</p></section>
    <section><h2>Cómo utilizar las guías</h2><p>Los itinerarios son propuestas para organizar una visita, no reservas ni paquetes contratados. Antes de viajar, confirma con los responsables correspondientes accesos, conexiones, precios, condiciones del mar y disponibilidad. Las fechas de revisión editorial no garantizan que un servicio siga operativo el día del viaje.</p><p>El contenido no sustituye instrucciones de las autoridades ni asesoramiento especializado cuando sea necesario. Estas indicaciones no pretenden excluir derechos o responsabilidades que la ley haga irrenunciables.</p></section>
    <section><h2>Reservas y enlaces comerciales</h2><p>Los apartados «Próximamente» no permiten contratar alojamientos. Si se incorporan enlaces de afiliación, se identificarán como tales. Antes de activar una colaboración deben definirse el proveedor, el destino del enlace y las condiciones correspondientes; no se añaden aquí comisiones ni servicios que aún no estén confirmados.</p></section>
    <section><h2>Fotografías y contenidos</h2><p>Las fotografías de terceros conservan sus licencias y créditos. Que una imagen aparezca en esta web no significa que se pueda reutilizar sin condiciones: consulta el enlace al original y respeta su licencia. Los nombres y marcas citados pertenecen a sus respectivos titulares.</p></section>
    <section><h2>Correcciones y contacto</h2><p>Si detectas información desactualizada o un problema con un crédito, escribe a <a href="mailto:infomrsvenezuela@gmail.com">infomrsvenezuela@gmail.com</a> e indica la página y la corrección propuesta.</p></section>
    <section><h2>Pendiente antes de publicar</h2><p>Confirmar titular y datos públicos de contacto, revisar obligaciones según su establecimiento y actividad, y ajustar estas condiciones al funcionamiento efectivo del sitio. No se ha elegido de forma automática una jurisdicción ni incorporado una renuncia general de responsabilidad.</p></section>
  </LegalDraft>;
}
