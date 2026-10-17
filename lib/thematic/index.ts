import type { LanguageCode } from "@/lib/i18n";
import type { ThematicContent, ThematicPage } from "./types";
import { thematicEs } from "./es";
import { thematicEn } from "./en";
import { thematicDe } from "./de";
import { thematicFr } from "./fr";
import { thematicZh } from "./zh";

export type {
  ThematicContent,
  ThematicCredit,
  ThematicItem,
  ThematicLayout,
  ThematicPage,
  ThematicPhoto,
  ThematicSection,
  ThematicTheme,
} from "./types";

/*
 * Las cinco páginas temáticas, un objeto por idioma.
 *
 * Mismo modelo que /historia: el español es el maestro y también el respaldo, de
 * modo que si falta una traducción la página sigue en pie en lugar de romperse.
 * Los `slug` de sección, las rutas de las imágenes y los enlaces internos son
 * idénticos en los cinco archivos; solo cambia el texto.
 */
const contenido: Record<LanguageCode, ThematicContent> = {
  es: thematicEs,
  en: thematicEn,
  de: thematicDe,
  fr: thematicFr,
  zh: thematicZh,
};

/** Las cinco rutas, en el orden en que aparecen en la portada. */
export const thematicSlugs = [
  "caribe-y-playa",
  "montana-y-paramo",
  "selva-y-rios",
  "ciudades-y-cultura",
  "sabores",
] as const;

export function getThematicPage(language: LanguageCode, slug: string): ThematicPage {
  const idioma = contenido[language] ?? thematicEs;
  return idioma[slug] ?? thematicEs[slug];
}

/** Para los metadatos y el sitemap, que se generan en el servidor y en español. */
export function getThematicPageEs(slug: string): ThematicPage {
  return thematicEs[slug];
}
