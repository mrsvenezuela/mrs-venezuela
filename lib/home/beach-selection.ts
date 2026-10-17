import type { ActiveLanguageCode } from "@/lib/i18n";
import type { ComparisonSlug } from "./beach-comparison";

export function toggleBeachSelection(selected: ComparisonSlug[], slug: ComparisonSlug): ComparisonSlug[] {
  if (selected.includes(slug)) return selected.filter(value => value !== slug);
  return selected.length < 2 ? [...selected, slug] : selected;
}

type SelectionCopy = {
  compare: string; selected: string; hint: string; one: string; ready: string;
  open: string; close: string; clear: string; remove: string; title: string; limit: string;
};
export const beachSelectionCopy: Record<ActiveLanguageCode, SelectionCopy> = {
  es: { compare: "Comparar", selected: "Seleccionada", hint: "¿Dudas entre dos destinos? Márcalos para comparar.", one: "Elige un destino más.", ready: "Ya puedes comparar tus dos destinos.", open: "Ver comparación", close: "Cerrar comparación", clear: "Borrar selección", remove: "Quitar", title: "Tus dos destinos, frente a frente", limit: "Para elegir otro, quita primero uno de los seleccionados." },
  en: { compare: "Compare", selected: "Selected", hint: "Deciding between two destinations? Select them to compare.", one: "Choose one more destination.", ready: "Your two destinations are ready to compare.", open: "View comparison", close: "Close comparison", clear: "Clear selection", remove: "Remove", title: "Your two destinations, side by side", limit: "To choose another, remove one of your selections first." },
  de: { compare: "Vergleichen", selected: "Ausgewählt", hint: "Du schwankst zwischen zwei Zielen? Wähle sie zum Vergleich aus.", one: "Wähle noch ein Reiseziel.", ready: "Deine beiden Ziele sind bereit zum Vergleich.", open: "Vergleich ansehen", close: "Vergleich schließen", clear: "Auswahl löschen", remove: "Entfernen", title: "Deine zwei Reiseziele im Vergleich", limit: "Entferne erst ein ausgewähltes Ziel, um ein anderes zu wählen." },
  fr: { compare: "Comparer", selected: "Sélectionnée", hint: "Vous hésitez entre deux destinations ? Sélectionnez-les pour comparer.", one: "Choisissez une autre destination.", ready: "Vos deux destinations sont prêtes à être comparées.", open: "Voir la comparaison", close: "Fermer la comparaison", clear: "Effacer la sélection", remove: "Retirer", title: "Vos deux destinations, côte à côte", limit: "Retirez une destination sélectionnée pour en choisir une autre." },
};
