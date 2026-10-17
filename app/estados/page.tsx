import type { Metadata } from "next";
import { StatesHub, type StateCard } from "@/components/content/states-hub";
import { states } from "@/lib/content";
import { getStateGuide } from "@/lib/states";
import { getStateLocation } from "@/lib/states/regions";
import { absoluteUrl } from "@/lib/utils";

/*
 * Las guías se leen aquí, en el servidor: la portada de /estados solo necesita
 * los datos básicos y una foto de cada una, no los ~400 KB de texto editorial completo.
 */
const cards: StateCard[] = states
  .map((state) => {
    const location = getStateLocation(state.slug);
    if (!location) return null;
    const guide = getStateGuide(state.slug);

    return {
      slug: state.slug,
      name: state.name,
      capital: location.capital,
      region: location.region,
      image: guide?.hero?.src ?? state.image,
    };
  })
  .filter((card): card is StateCard => card !== null)
  .sort((a, b) => a.name.localeCompare(b.name, "es"));

export const metadata: Metadata = {
  title: "Los 23 estados de Venezuela y el Distrito Capital",
  description:
    "Guías de viaje de los 23 estados de Venezuela y el Distrito Capital: historia, lugares, naturaleza, cultura, cómo llegar y consejos, ordenados por región.",
  alternates: {
    canonical: "/estados",
  },
  openGraph: {
    title: "Los 23 estados de Venezuela y el Distrito Capital | Mrs Venezuela",
    description:
      "Guías de viaje de los 23 estados y el Distrito Capital, ordenadas por región: Andes, Occidente, Centro, Llanos, Oriente y Guayana.",
    url: "/estados",
    type: "website",
    locale: "es_VE",
    // `openGraph` se sustituye entero, no se fusiona: sin esto la página pierde
    // el siteName y la imagen que define el layout raíz.
    siteName: "Mrs Venezuela",
    images: [
      {
        url: absoluteUrl("/images/opengraph-venezuela.jpg"),
        width: 1200,
        height: 630,
        alt: "Paisaje de Venezuela para Mrs Venezuela",
      },
    ],
  },
};

export default function StatesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Los 23 estados de Venezuela y el Distrito Capital",
    url: absoluteUrl("/estados"),
    inLanguage: "es",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: states.length,
      itemListElement: states.map((state, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: state.name,
        url: absoluteUrl(`/estado/${state.slug}`),
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <StatesHub cards={cards} />
    </>
  );
}
