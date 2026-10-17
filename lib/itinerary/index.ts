import type { LanguageCode } from "@/lib/i18n";
import type { ItineraryContent } from "./types";
import { itineraryEs } from "./es";
import { itineraryEn } from "./en";
import { itineraryDe } from "./de";
import { itineraryFr } from "./fr";
import { itineraryZh } from "./zh";
import { travelChecks } from "./travel-checks";

export type { ItineraryContent } from "./types";

/** El artículo sigue en la misma dirección: se rehízo el contenido, no la URL. */
export const ITINERARY_SLUG = "ruta-perfecta-14-dias";
export const ITINERARY_PATH = `/articulo/${ITINERARY_SLUG}`;

/**
 * Fecha de actualización editorial, compartida por la página, el sitemap y dateModified.
 * No certifica disponibilidad en tiempo real de vuelos ni otros servicios.
 */
export const ITINERARY_UPDATED = "2026-10-08";

/** Fecha en que se publicó esta URL por primera vez. */
export const ITINERARY_PUBLISHED = "2026-07-22";

/*
 * Un objeto por idioma. El español es el maestro y también el respaldo: si falta
 * una traducción, la página sigue en pie en lugar de romperse.
 */
const contenido: Record<LanguageCode, ItineraryContent> = {
  es: itineraryEs,
  en: itineraryEn,
  de: itineraryDe,
  fr: itineraryFr,
  zh: itineraryZh,
};

export function getItinerary(language: LanguageCode): ItineraryContent {
  const active = language === "zh" ? "es" : language;
  return { ...(contenido[active] ?? itineraryEs), travelInfo: travelChecks[active] };
}
