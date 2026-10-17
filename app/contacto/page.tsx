import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { ContactPageContent } from "@/components/institutional/contact-page-content";
import { institutionalTranslations } from "@/lib/institutional-i18n";

/*
 * Los metadatos se resuelven en español: es el idioma canónico del sitio (<html lang="es">)
 * y el único con URL propia. Leer la cookie de idioma aquí volvía la página dinámica y
 * servía descripciones distintas bajo la misma URL según el visitante.
 */
export function generateMetadata(): Metadata {
  const copy = institutionalTranslations.es.contact;

  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDescription,
    alternates: {
      canonical: "/contacto",
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: "/contacto",
      images: [{ url: absoluteUrl("/images/opengraph-venezuela.jpg"), width: 1200, height: 630, alt: "Paisaje de Venezuela" }],
    },
  };
}

export default function ContactPage() {
  return <ContactPageContent />;
}
