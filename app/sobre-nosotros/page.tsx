import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { AboutPageContent } from "@/components/institutional/about-page-content";
import { institutionalTranslations } from "@/lib/institutional-i18n";

/*
 * Los metadatos se resuelven en español: es el idioma canónico del sitio (<html lang="es">)
 * y el único con URL propia. Leer la cookie de idioma aquí volvía la página dinámica y
 * servía descripciones distintas bajo la misma URL según el visitante.
 */
export function generateMetadata(): Metadata {
  const copy = institutionalTranslations.es.about;

  return {
    title: { absolute: copy.metaTitle },
    description: copy.metaDescription,
    alternates: {
      canonical: "/sobre-nosotros",
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: "/sobre-nosotros",
      images: [{ url: absoluteUrl("/images/opengraph-venezuela.jpg"), width: 1200, height: 630, alt: "Paisaje de Venezuela" }],
    },
  };
}

export default function AboutPage() {
  return <AboutPageContent />;
}
