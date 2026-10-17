import type { ActiveLanguageCode } from "@/lib/i18n";
import type { ItineraryContent } from "./types";

/** Editorial preparation prompts, not a live flight/road status feed. */
export const travelChecks: Record<ActiveLanguageCode, ItineraryContent["travelInfo"]> = {
  es: {
    title: "Información que debes reconfirmar", reviewedLabel: "Actualización editorial", linkLabel: "Qué comprobar antes de viajar · {month}",
    lede: "Esta guía no muestra el estado de los servicios en tiempo real. Confirma cada punto antes de pagar y de nuevo cerca de tu salida.",
    items: [
      { title: "Llegada a Maiquetía", text: "Pide a tu aerolínea la terminal, la hora de presentación y las condiciones de equipaje. Acuerda el punto de encuentro y el contacto del traslado con tu alojamiento." },
      { title: "Vuelos internos", text: "Comprueba qué conexiones operan en tus fechas antes de fijar las noches en Canaima, Los Roques o Mérida. No des por hecho que los vuelos salen a diario o del mismo aeropuerto." },
      { title: "Traslados por carretera", text: "Confirma la recogida, el destino exacto y el estado de la ruta con quien hará el traslado, especialmente en el trayecto El Vigía–Mérida." },
      { title: "Excursiones y teleférico", text: "Consulta la operación en tus fechas, las restricciones por clima, los servicios incluidos y qué ocurre si la actividad se cancela." },
      { title: "Documentos de entrada", text: "Consulta al consulado venezolano los requisitos aplicables a tu nacionalidad y documento de viaje. No todos los visitantes necesitan los mismos documentos." },
      { title: "Recomendaciones y cobertura", text: "Lee los avisos oficiales de tu país y confirma por escrito con tu aseguradora qué destinos y actividades cubre. Una reserva no garantiza que sea aconsejable viajar." },
    ],
  },
  en: {
    title: "Information to reconfirm", reviewedLabel: "Editorial update", linkLabel: "What to check before travelling · {month}",
    lede: "This guide does not show live service status. Confirm each point before paying and again shortly before departure.",
    items: [
      { title: "Arrival at Maiquetía", text: "Ask your airline about the terminal, check-in time and baggage rules. Agree on the meeting point and transfer contact with your accommodation." },
      { title: "Domestic flights", text: "Check which connections operate on your dates before booking nights in Canaima, Los Roques or Mérida. Do not assume daily flights or departures from the same airport." },
      { title: "Road transfers", text: "Confirm pickup, the exact destination and road conditions with your transfer provider, particularly on the El Vigía–Mérida route." },
      { title: "Excursions and cable car", text: "Check operation on your dates, weather restrictions, included services and what happens if the activity is cancelled." },
      { title: "Entry documents", text: "Ask the Venezuelan consulate which requirements apply to your nationality and travel document. Requirements are not the same for every visitor." },
      { title: "Travel advice and insurance", text: "Read your country's official advice and obtain written confirmation of destinations and activities covered by your insurer. Having a booking does not mean travel is advisable." },
    ],
  },
  de: {
    title: "Was du erneut prüfen solltest", reviewedLabel: "Redaktionell aktualisiert", linkLabel: "Vor der Reise prüfen · {month}",
    lede: "Dieser Reiseführer zeigt keinen Betriebsstatus in Echtzeit. Prüfe jeden Punkt vor der Zahlung und nochmals kurz vor der Abreise.",
    items: [
      { title: "Ankunft in Maiquetía", text: "Frage deine Fluggesellschaft nach Terminal, Check-in-Zeit und Gepäckregeln. Vereinbare Treffpunkt und Transferkontakt mit deiner Unterkunft." },
      { title: "Inlandsflüge", text: "Prüfe die Verbindungen an deinen Reisetagen, bevor du Nächte in Canaima, Los Roques oder Mérida buchst. Gehe nicht von täglichen Flügen oder demselben Abflughafen aus." },
      { title: "Straßentransfers", text: "Bestätige Abholung, genaues Ziel und Straßenzustand mit deinem Fahrer, besonders für die Strecke El Vigía–Mérida." },
      { title: "Ausflüge und Seilbahn", text: "Erkundige dich nach dem Betrieb an deinen Reisetagen, Wetterbeschränkungen, enthaltenen Leistungen und den Regeln bei einer Absage." },
      { title: "Einreisedokumente", text: "Frage beim venezolanischen Konsulat nach den Voraussetzungen für deine Staatsangehörigkeit und dein Reisedokument. Nicht alle Reisenden benötigen dieselben Unterlagen." },
      { title: "Reisehinweise und Versicherung", text: "Lies die offiziellen Hinweise deines Landes und lass dir den Schutz für Ziele und Aktivitäten schriftlich bestätigen. Eine Buchung bedeutet nicht, dass eine Reise ratsam ist." },
    ],
  },
  fr: {
    title: "Informations à reconfirmer", reviewedLabel: "Mise à jour éditoriale", linkLabel: "À vérifier avant de partir · {month}",
    lede: "Ce guide ne présente pas l’état des services en temps réel. Confirmez chaque point avant de payer puis à nouveau peu avant le départ.",
    items: [
      { title: "Arrivée à Maiquetía", text: "Demandez à votre compagnie le terminal, l’heure de présentation et les règles de bagages. Convenez du point de rencontre et du contact pour le transfert avec votre hébergement." },
      { title: "Vols intérieurs", text: "Vérifiez les liaisons à vos dates avant de réserver vos nuits à Canaima, Los Roques ou Mérida. Ne supposez pas que les vols sont quotidiens ou partent du même aéroport." },
      { title: "Transferts routiers", text: "Confirmez la prise en charge, la destination exacte et l’état de la route avec votre prestataire, surtout pour El Vigía–Mérida." },
      { title: "Excursions et téléphérique", text: "Vérifiez le fonctionnement à vos dates, les restrictions météo, les services inclus et les conditions en cas d’annulation." },
      { title: "Documents d’entrée", text: "Consultez le consulat vénézuélien sur les conditions applicables à votre nationalité et à votre document de voyage. Elles ne sont pas identiques pour tous les visiteurs." },
      { title: "Conseils et assurance", text: "Lisez les conseils officiels de votre pays et demandez à votre assureur de confirmer par écrit les destinations et activités couvertes. Une réservation ne signifie pas que le voyage soit conseillé." },
    ],
  },
};
