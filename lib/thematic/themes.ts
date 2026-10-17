import type { ThematicTheme } from "./types";

/*
 * El carácter de cada página, en cinco líneas cada uno.
 *
 * No hay cinco diseños: hay uno con cinco temperaturas. Los fondos están todos a
 * un paso del crema del sitio (#f7f4ec) y los acentos salen de la paleta que ya
 * usan la portada y las guías de estado —el azul petróleo del buscador, el verde
 * profundo de la marca, la terracota de /historia—. Un visitante no debería poder
 * decir qué color cambió; debería notar que la página tiene otro ánimo.
 *
 * Lo que de verdad separa una página de otra no es el color sino la PROPORCIÓN de
 * sus fotografías y el orden de sus bloques:
 *   16/10 apaisado abre el horizonte      → Caribe
 *   4/5 vertical levanta la mirada        → Montaña
 *   3/2 grande y cercano envuelve         → Selva
 *   1/1 cuadrado ordena como una fachada  → Ciudades
 *   1/1 cuadrado acerca como un plato     → Sabores
 */
export const thematicThemes: Record<string, ThematicTheme> = {
  // Luminosa, azul, abierta. Portada a sangre y tarjetas apaisadas: horizonte.
  "caribe-y-playa": {
    accent: "#247c8f",
    soft: "#dceef0",
    deep: "#123b43",
    paper: "#f6f6f2",
    cardRatio: "16/10",
    hero: "full",
  },

  // Fría, verde, tranquila. Tarjetas verticales y portada partida: altura y calma.
  "montana-y-paramo": {
    accent: "#4f7a63",
    soft: "#e4ece6",
    deep: "#1f3d33",
    paper: "#f5f5f0",
    cardRatio: "4/5",
    hero: "split",
  },

  // Profunda, natural, inmersiva. Portada a sangre y fotografías grandes.
  "selva-y-rios": {
    accent: "#3d7a5c",
    soft: "#dfe9e0",
    deep: "#0f342a",
    paper: "#f3f5f0",
    cardRatio: "3/2",
    hero: "full",
  },

  // Humana, arquitectónica, cultural. El crema de siempre y el cuadrado de una fachada.
  "ciudades-y-cultura": {
    accent: "#a4614a",
    soft: "#f0e4dd",
    deep: "#3a2620",
    paper: "#f7f4ec",
    cardRatio: "1/1",
    hero: "split",
  },

  // Cálida, cercana, gastronómica. Fondo un punto más cálido; el plato es cuadrado.
  sabores: {
    accent: "#b3703f",
    soft: "#f4e7d9",
    deep: "#472d1f",
    paper: "#f8f3ea",
    cardRatio: "1/1",
    hero: "split",
  },
};

export function getThematicTheme(slug: string): ThematicTheme {
  return thematicThemes[slug] ?? thematicThemes["caribe-y-playa"];
}
