import type { ActiveLanguageCode } from "@/lib/i18n";

export const planningCopy = {
  es: {
    menu: "Planifica tu viaje", intro: "Organiza tu viaje, paso a paso",
    descriptions: ["Elige las etapas y su orden.", "Consulta qué hacer cada día.", "Decide dónde pasar cada noche.", "Revisa vuelos y traslados.", "Separa los gastos del viaje.", "Comprueba lo importante antes de pagar."],
    checklist: "Tu lista antes de reservar", completed: "comprobaciones marcadas", reset: "Desmarcar todo",
    note: "Marca lo que ya has comprobado. La lista se reinicia al recargar; no guarda ni envía tus datos.",
    sources: "Consulta antes de viajar", sourcesNote: "Los requisitos dependen de tu nacionalidad. Contrasta la información con el consulado venezolano y las recomendaciones oficiales de tu país.",
    alternatives: "¿Prefieres concentrarte en una región?", beaches: "Comparar destinos de playa", states: "Explorar los estados",
  },
  en: {
    menu: "Plan your trip", intro: "Organise your trip, step by step",
    descriptions: ["Choose your stops and their order.", "See what to do each day.", "Decide where to spend each night.", "Review flights and transfers.", "Break down your travel expenses.", "Check the essentials before paying."],
    checklist: "Your pre-booking checklist", completed: "checks marked", reset: "Clear all",
    note: "Tick what you have checked. The list resets when you reload; it does not save or send your data.",
    sources: "Check before travelling", sourcesNote: "Requirements depend on your nationality. Check with the Venezuelan consulate and your country's official travel advice.",
    alternatives: "Would you rather focus on one region?", beaches: "Compare beach destinations", states: "Explore the states",
  },
  de: {
    menu: "Reise planen", intro: "Plane deine Reise Schritt für Schritt",
    descriptions: ["Wähle Etappen und Reihenfolge.", "Entdecke Ideen für jeden Tag.", "Plane deine Übernachtungsorte.", "Prüfe Flüge und Transfers.", "Teile die Reisekosten auf.", "Prüfe Wichtiges vor der Zahlung."],
    checklist: "Deine Checkliste vor der Buchung", completed: "Punkte abgehakt", reset: "Alles zurücksetzen",
    note: "Markiere, was du geprüft hast. Beim Neuladen wird die Liste zurückgesetzt; deine Angaben werden weder gespeichert noch gesendet.",
    sources: "Vor der Reise prüfen", sourcesNote: "Die Voraussetzungen hängen von deiner Staatsangehörigkeit ab. Informiere dich beim venezolanischen Konsulat und in den offiziellen Reisehinweisen deines Landes.",
    alternatives: "Lieber auf eine Region konzentrieren?", beaches: "Strandziele vergleichen", states: "Bundesstaaten entdecken",
  },
  fr: {
    menu: "Préparer votre voyage", intro: "Organisez votre voyage étape par étape",
    descriptions: ["Choisissez les étapes et leur ordre.", "Découvrez les activités jour par jour.", "Décidez où passer chaque nuit.", "Vérifiez les vols et les transferts.", "Répartissez les dépenses du voyage.", "Vérifiez l’essentiel avant de payer."],
    checklist: "Votre liste avant de réserver", completed: "points cochés", reset: "Tout décocher",
    note: "Cochez ce que vous avez vérifié. La liste se réinitialise au rechargement ; vos données ne sont ni conservées ni envoyées.",
    sources: "À consulter avant de partir", sourcesNote: "Les conditions dépendent de votre nationalité. Vérifiez auprès du consulat vénézuélien et consultez les conseils officiels de votre pays.",
    alternatives: "Vous préférez explorer une seule région ?", beaches: "Comparer les destinations balnéaires", states: "Explorer les États",
  },
} satisfies Record<ActiveLanguageCode, {
  menu: string; intro: string; descriptions: string[]; checklist: string; completed: string;
  reset: string; note: string; sources: string; sourcesNote: string;
  alternatives: string; beaches: string; states: string;
}>;
