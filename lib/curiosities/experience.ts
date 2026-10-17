import type { ActiveLanguageCode } from "@/lib/i18n";
import type { TopStoryId } from "./top";
type Experience = { intro: string; start: string; surprise: string; explore: string; next: string; top: string; highlights: Record<TopStoryId, [string, string]> };
export const experienceCopy: Record<ActiveLanguageCode, Experience> = {
  es: {
    intro: "Un salto imposible. Helados de ajo. Una corona que se quedó en casa. Elige una historia y déjate sorprender.",
    start: "Empieza a descubrir", surprise: "Sorpréndeme", explore: "Elige tu curiosidad", next: "Siguiente curiosidad", top: "Volver al inicio",
    highlights: { moran: ["1953", "Una cuchilla que cambió la microscopía"], coromoto: ["¿Helado de ajo?", "Sí. Y también de macarrones con queso."], yulimar: ["15,74 m", "Récord mundial · Belgrado 2022"], catatumbo: ["233", "Destellos por km² al año · estudio de 2016"], miss: ["2008 → 2009", "Dos coronas consecutivas"], cabrera: ["45 años", "La espera que terminó con su Triple Corona"], carreno: ["9 años", "Una niña de Caracas en la Casa Blanca"], orchestra: ["8.573", "Músicos reunidos en Caracas · 2021"], herrera: ["1981", "Su primera colección en Nueva York"], casabe: ["2024", "Un reconocimiento compartido de la UNESCO"] },
  },
  en: {
    intro: "An extraordinary jump. Garlic ice cream. A crown that stayed home. Pick a story and discover something unexpected.", start: "Start exploring", surprise: "Surprise me", explore: "Pick a curiosity", next: "Next curiosity", top: "Back to the top",
    highlights: { moran: ["1953", "A blade that changed microscopy"], coromoto: ["Garlic ice cream?", "Yes. And macaroni with cheese, too."], yulimar: ["15.74 m", "World record · Belgrade 2022"], catatumbo: ["233", "Flashes per km² per year · 2016 study"], miss: ["2008 → 2009", "Two consecutive crowns"], cabrera: ["45 years", "The wait ended with his Triple Crown"], carreno: ["Age 9", "A girl from Caracas at the White House"], orchestra: ["8,573", "Musicians in Caracas · 2021"], herrera: ["1981", "Her first collection in New York"], casabe: ["2024", "A shared UNESCO recognition"] },
  },
  de: {
    intro: "Ein unglaublicher Sprung. Knoblaucheis. Eine Krone, die im Land blieb. Wähle eine Geschichte und lass dich überraschen.", start: "Entdecken", surprise: "Überrasch mich", explore: "Wähle eine Geschichte", next: "Nächste Geschichte", top: "Zurück zum Anfang",
    highlights: { moran: ["1953", "Eine Klinge veränderte die Mikroskopie"], coromoto: ["Knoblaucheis?", "Ja. Auch Makkaroni mit Käse gab es."], yulimar: ["15,74 m", "Weltrekord · Belgrad 2022"], catatumbo: ["233", "Blitze pro km² und Jahr · Studie von 2016"], miss: ["2008 → 2009", "Zwei Kronen in Folge"], cabrera: ["45 Jahre", "Dann gewann er die Triple Crown"], carreno: ["9 Jahre", "Ein Mädchen aus Caracas im Weißen Haus"], orchestra: ["8.573", "Musiker in Caracas · 2021"], herrera: ["1981", "Ihre erste Kollektion in New York"], casabe: ["2024", "Eine gemeinsame UNESCO-Anerkennung"] },
  },
  fr: {
    intro: "Un saut exceptionnel. Des glaces à l’ail. Une couronne restée au pays. Choisissez une histoire et laissez-vous surprendre.", start: "Commencer la découverte", surprise: "Surprenez-moi", explore: "Choisissez une curiosité", next: "Curiosité suivante", top: "Retour en haut",
    highlights: { moran: ["1953", "Une lame qui changea la microscopie"], coromoto: ["Une glace à l’ail ?", "Oui. Et aux macaronis au fromage aussi."], yulimar: ["15,74 m", "Record du monde · Belgrade 2022"], catatumbo: ["233", "Éclairs par km² et par an · étude de 2016"], miss: ["2008 → 2009", "Deux couronnes consécutives"], cabrera: ["45 ans", "Une attente terminée par sa Triple Couronne"], carreno: ["9 ans", "Une enfant de Caracas à la Maison-Blanche"], orchestra: ["8 573", "Musiciens réunis à Caracas · 2021"], herrera: ["1981", "Sa première collection à New York"], casabe: ["2024", "Une reconnaissance partagée de l’UNESCO"] },
  },
};
