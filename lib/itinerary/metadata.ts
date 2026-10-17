import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/utils";
import { getItinerary, ITINERARY_PATH, ITINERARY_PUBLISHED, ITINERARY_UPDATED } from "./index";

/*
 * Metadatos y JSON-LD del itinerario, en español y generados en el servidor, como
 * en /historia: el buscador indexa la versión castellana y el idioma cambia después
 * en el cliente. El <title> lleva la marca; titulares de OG y JSON-LD, no.
 *
 * La vista previa social usa una composición de las cuatro etapas (Caracas, Canaima,
 * Los Roques y Mérida), no una sola: el artículo es un viaje por varias regiones.
 * Hecha con fotos de Commons que admiten obras derivadas; créditos en la página.
 *
 * Es un Article con una TouristTrip descriptiva. Mrs Venezuela no vende el viaje:
 * nada se marca como Product, Offer, TourProduct ni Review.
 */

/** Composición de 4 franjas para redes (1200×630). Si se rehace, actualizar medidas. */
const OG_IMAGE = { src: "/images/commons/ruta-14-dias-og.jpg", width: 1200, height: 630 };

export function itineraryMetadata(): Metadata {
  const page = getItinerary("es");
  const image = absoluteUrl(OG_IMAGE.src);
  return {
    title: { absolute: page.meta.title },
    description: page.meta.description,
    alternates: { canonical: ITINERARY_PATH },
    openGraph: {
      title: page.hero.title,
      description: page.meta.description,
      url: ITINERARY_PATH,
      siteName: "Mrs Venezuela",
      type: "article",
      locale: "es_VE",
      publishedTime: ITINERARY_PUBLISHED,
      modifiedTime: ITINERARY_UPDATED,
      images: [{ url: image, width: OG_IMAGE.width, height: OG_IMAGE.height, alt: page.meta.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.hero.title,
      description: page.meta.description,
      images: [{ url: image, alt: page.meta.ogAlt }],
    },
  };
}

export function itinerarySchema() {
  const page = getItinerary("es");
  const url = absoluteUrl(ITINERARY_PATH);
  const stops = page.route.stops.filter((stop) => stop.id !== "regreso");
  return {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebSite", name: "Mrs Venezuela", url: absoluteUrl(), inLanguage: "es" },
      {
        "@type": "Article",
        headline: page.hero.title,
        name: page.hero.title,
        description: page.meta.description,
        url,
        image: [absoluteUrl(OG_IMAGE.src), absoluteUrl(page.hero.photo.src)],
        inLanguage: "es",
        datePublished: ITINERARY_PUBLISHED,
        dateModified: ITINERARY_UPDATED,
        author: { "@type": "Organization", name: "Mrs Venezuela", url: absoluteUrl() },
        publisher: { "@type": "Organization", name: "Mrs Venezuela", url: absoluteUrl() },
        mainEntityOfPage: url,
        isPartOf: { "@type": "WebSite", name: "Mrs Venezuela", url: absoluteUrl() },
        about: { "@id": `${url}#ruta` },
      },
      {
        "@type": "TouristTrip",
        "@id": `${url}#ruta`,
        name: page.hero.title,
        url,
        description: page.intro,
        touristType: "Primera visita a Venezuela",
        itinerary: {
          "@type": "ItemList",
          numberOfItems: stops.length,
          itemListElement: stops.map((stop, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: { "@type": "TouristDestination", name: stop.name, description: stop.role },
          })),
        },
      },
    ],
  };
}
