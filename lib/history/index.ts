import type { LanguageCode } from "@/lib/i18n";
import type { HistoryContent } from "./types";
import { historyEs } from "./es";
import { historyEn } from "./en";
import { historyDe } from "./de";
import { historyFr } from "./fr";
import { historyZh } from "./zh";

export type { HistoryChapter, HistoryContent, HistoryFacts, HistoryPhoto } from "./types";

/*
 * El contenido de /historia, un objeto por idioma.
 *
 * El español es el maestro y también el respaldo: si falta una traducción, la
 * página sigue funcionando en lugar de romperse. Los `slug`, los `percent`, las
 * rutas de los enlaces y todas las cifras son iguales en los cinco archivos.
 */
const contenido: Record<LanguageCode, HistoryContent> = {
  es: historyEs,
  en: historyEn,
  de: historyDe,
  fr: historyFr,
  zh: historyZh,
};

export function getHistoryContent(language: LanguageCode): HistoryContent {
  return contenido[language] ?? historyEs;
}

/** Para el sitemap y el JSON-LD, que se generan en el servidor y en español. */
export const historyChapters = historyEs.chapters;
