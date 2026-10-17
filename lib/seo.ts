import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";

export const homeMetadata: Metadata = {
  title: { absolute: "Venezuela: destinos y guía para tu viaje | Mrs Venezuela" },
  description: "Descubre qué visitar en Venezuela: compara playas, explora sus estados y prepara tu viaje con guías de llegada, alojamiento, naturaleza y cultura.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Venezuela: destinos y guía para tu viaje | Mrs Venezuela",
    description: "Playas, estados, naturaleza y cultura. Guías prácticas para descubrir Venezuela y organizar tu viaje.",
    siteName: "Mrs Venezuela", type: "website", locale: "es_VE", url: "/",
    images: [{ url: absoluteUrl("/images/opengraph-venezuela.jpg"), width: 1200, height: 630, alt: "Paisaje de Venezuela" }],
  },
  twitter: { card: "summary_large_image", title: "Venezuela: destinos y guía para tu viaje | Mrs Venezuela", description: "Playas, estados, naturaleza y cultura. Guías para organizar tu viaje.", images: [absoluteUrl("/images/opengraph-venezuela.jpg")] },
};

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": absoluteUrl("/#website"), name: "Mrs Venezuela", url: absoluteUrl("/"), inLanguage: "es" },
    { "@type": "WebPage", "@id": absoluteUrl("/#webpage"), name: "Venezuela: destinos y guía para tu viaje", url: absoluteUrl("/"), inLanguage: "es", isPartOf: { "@id": absoluteUrl("/#website") }, description: homeMetadata.description },
  ],
};
