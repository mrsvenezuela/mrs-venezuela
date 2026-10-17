import type { Metadata } from "next";
import { Articles } from "@/components/sections/articles";
import { AmazonSelection } from "@/components/sections/amazon-selection";
import { FeaturedDestinations } from "@/components/sections/featured-destinations";
import { Hero } from "@/components/sections/hero";
import { SearchPanel } from "@/components/sections/search-panel";
import { StatesStrip, type StripCard } from "@/components/sections/states-strip";
import { states } from "@/lib/content";
import { getStateGuide } from "@/lib/states";
import { getStateLocation } from "@/lib/states/regions";
import { homeMetadata, homeSchema } from "@/lib/seo";

/*
 * Los ocho estados que se muestran en la portada, elegidos a mano para que haya
 * una de cada región. Cambia el orden o los slugs de esta lista y cambia la tira;
 * no se ordena por ningún número, porque no hay ninguno que signifique algo.
 */
const destacados = [
  "bolivar",
  "merida",
  "sucre",
  "falcon",
  "amazonas",
  "aragua",
  "nueva-esparta",
  "zulia",
];

const stripCards: StripCard[] = destacados
  .map((slug): StripCard | null => {
    const state = states.find((entry) => entry.slug === slug);
    const location = getStateLocation(slug);
    const guide = getStateGuide(slug);
    if (!state || !location || !guide) return null;

    return {
      slug: state.slug,
      name: state.name,
      region: location.region,
      image: guide.hero?.src ?? state.image,
      tagline: guide.heroTagline ?? null,
    };
  })
  .filter((card): card is StripCard => card !== null);

// El canonical ya no se hereda del layout raíz, así que la portada fija el suyo.
export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }} />
      <main>
        <Hero />
        <SearchPanel />
        <StatesStrip cards={stripCards} />
        <FeaturedDestinations />
        <Articles />
        <AmazonSelection />
      </main>
    </>
  );
}
