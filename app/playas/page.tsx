import type { Metadata } from "next";
import { PlayasPageContent } from "@/components/sections/playas-page-content";
import { searchIndex } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

/*
 * Página de servidor: el cuerpo de la página es cliente (vive en
 * components/sections/playas-page-content.tsx), pero una Client Component no puede
 * exportar `metadata`. Sin esta envoltura, la ruta hereda el canonical del layout
 * raíz y se canoniza contra la portada.
 */

export const metadata: Metadata = {
  title: { absolute: "Playas, islas y cayos de Venezuela | Mrs Venezuela" },
  description:
    "Guía de las playas e islas más conocidas de Venezuela: Los Roques, Morrocoy, Mochima, Margarita, Choroní, Playa Medina y más, con ubicación y qué esperar.",
  alternates: { canonical: "/playas" },
  openGraph: {
    title: "Playas, islas y cayos de Venezuela",
    description: "Los Roques, Morrocoy, Mochima, Margarita, Choroní y más.",
    url: "/playas",
    type: "website",
    locale: "es_VE",
    siteName: "Mrs Venezuela",
    // 1600x899 leído del archivo, no redondeado a 900.
    images: [
      {
        url: absoluteUrl("/images/cayo-de-agua.jpg"),
        width: 1600,
        height: 899,
        alt: "Cayo de Agua, Los Roques",
      },
    ],
  },
};

export default function PlayasPage() {
  const beaches = searchIndex.filter((item) => item.kind === "playa");

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/playas#webpage"),
        url: absoluteUrl("/playas"),
        name: "Playas, islas y cayos de Venezuela",
        inLanguage: "es",
        isPartOf: { "@id": absoluteUrl("/#website") },
        breadcrumb: { "@id": absoluteUrl("/playas#breadcrumb") },
        mainEntity: { "@id": absoluteUrl("/playas#list") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/playas#list"),
        numberOfItems: beaches.length,
        itemListElement: beaches.map((beach, index) => ({
          "@type": "ListItem",
          position: index + 1,
          url: absoluteUrl(`/playa/${beach.slug}`),
          name: beach.name,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/playas#breadcrumb"),
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Playas" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PlayasPageContent />
    </>
  );
}
