import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { getThematicPageEs } from "./index";

/*
 * Metadatos y JSON-LD de las cinco páginas temáticas.
 *
 * Se generan en el servidor y en español, igual que en /historia: el buscador
 * indexa la versión castellana y el cambio de idioma ocurre después, en el
 * cliente. El título y la descripción se escriben a mano en el contenido, no se
 * derivan del texto visible, porque lo que funciona en una portada no es lo que
 * funciona en un resultado de búsqueda.
 */
export function thematicMetadata(slug: string): Metadata {
  const page = getThematicPageEs(slug);
  return {
    title: { absolute: page.meta.title },
    description: page.meta.description,
    alternates: { canonical: `/${slug}` },
    openGraph: {
      title: page.meta.title,
      description: page.meta.description,
      url: `/${slug}`,
      type: "website",
      locale: "es_VE",
      images: [{ url: page.hero.src, alt: page.hero.alt }],
    },
  };
}

export function thematicSchema(slug: string) {
  const page = getThematicPageEs(slug);
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.title,
    url: absoluteUrl(`/${slug}`),
    inLanguage: "es",
    description: page.intro,
    about: page.sections.filter((section) => section.number).map((section) => section.title),
  };
}
