import { states } from "@/lib/content";
import { getStateGuide } from "@/lib/states";
import { getStateLocation, stateRegions, type StateRegion } from "@/lib/states/regions";

export type NavState = { slug: string; name: string };
export type NavRegionGroup = { region: StateRegion; items: NavState[] };
export type NavHighlight = { slug: string; name: string; tagline: string | null };

/*
 * Datos del menú de navegación, resueltos en el servidor. Las guías de estado pesan
 * unos 400 KB de texto; el menú solo necesita nombres y tres frases.
 */

/** Los tres estados que se destacan en la columna derecha del menú. Edítalos a mano. */
const destacadosDelMenu = ["bolivar", "merida", "sucre"];
export const navRegionGroups: NavRegionGroup[] = stateRegions.map((region) => ({
  region,
  items: states
    .filter((state) => getStateLocation(state.slug)?.region === region)
    .map((state) => ({ slug: state.slug, name: state.name }))
    .sort((a, b) => a.name.localeCompare(b.name, "es")),
}));

export const navHighlights: NavHighlight[] = destacadosDelMenu
  .map((slug): NavHighlight | null => {
    const state = states.find((entry) => entry.slug === slug);
    const guide = getStateGuide(slug);
    if (!state || !guide) return null;

    return { slug: state.slug, name: state.name, tagline: guide.heroTagline ?? null };
  })
  .filter((entry): entry is NavHighlight => entry !== null);
