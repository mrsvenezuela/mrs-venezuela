import { t, type GuideBlock, type GuidePlanner, type LocalText } from './types';

export const block = (title: LocalText, text: LocalText): GuideBlock => ({ title, text });
export const named = (name: string, text: LocalText) => block(t(name, name, name, name), text);
export const baseTitle = t('Primero, elige tu base', 'First, choose your base', 'Zuerst den Ausgangsort wählen', 'D’abord, choisissez votre base');
export const moveTitle = t('Cómo moverte allí', 'Getting around there', 'Vor Ort unterwegs', 'Se déplacer sur place');
export const twoDays = t('Dos días, sin correr', 'Two days, unhurried', 'Zwei Tage ohne Eile', 'Deux jours, sans courir');
export const oneDay = t('Un día bien organizado', 'A well-planned day', 'Ein gut geplanter Tag', 'Une journée bien organisée');
export const suggestion = t('Una propuesta para organizarte, no un paquete turístico. Ajusta las salidas al tiempo disponible y a las condiciones del día.', 'A suggested plan, not a tour package. Adapt outings to your available time and the day’s conditions.', 'Ein Planungsvorschlag, kein Reisepaket. Ausflüge an verfügbare Zeit und Tagesbedingungen anpassen.', 'Une suggestion, pas un forfait touristique. Adaptez les sorties au temps disponible et aux conditions du jour.');
export const boatNote = t('Antes de embarcar: punto de salida, destino, regreso acordado y chaleco para cada pasajero. Un traslado no incluye automáticamente comidas, sombra ni excursiones adicionales.', 'Before boarding: departure point, destination, agreed return and a lifejacket for everyone. Transfers do not automatically include meals, shade or extra excursions.', 'Vor dem Einsteigen: Abfahrtsort, Ziel, vereinbarte Rückfahrt und Rettungsweste für alle. Essen, Sonnenschutz und weitere Ausflüge sind nicht automatisch enthalten.', 'Avant d’embarquer : départ, destination, retour convenu et gilet pour chacun. Repas, abri et excursions supplémentaires ne sont pas automatiquement inclus.');

// Shared cost categories, with destination-specific transport and outing costs.
export function budget(transport: LocalText, outing: LocalText): GuidePlanner['budget'] {
  return {
    title: t('Qué entra en tu presupuesto', 'What to budget for', 'Was ins Reisebudget gehört', 'Que prévoir dans votre budget'),
    items: [
      block(t('Llegar y moverte', 'Travel and transfers', 'Anreise und Transfers', 'Trajets et transferts'), transport),
      block(t('Actividades', 'Activities', 'Aktivitäten', 'Activités'), outing),
      block(t('Comer y pasar el día', 'Meals and the beach day', 'Essen und Strandtag', 'Repas et journée plage'), t('Agua, comidas y alquileres de sombra o sillas que no incluya tu reserva. Lleva resuelto el almuerzo si vas a una playa aislada.', 'Water, meals and shade or chair hire not included in your booking. Arrange lunch in advance for an isolated beach.', 'Wasser, Mahlzeiten und nicht enthaltene Schatten- oder Stuhlmiete. Für abgelegene Strände das Mittagessen vorher planen.', 'Eau, repas et location d’abri ou de chaises non inclus. Prévoyez le déjeuner avant de partir vers une plage isolée.')),
      block(t('Alojamiento', 'Accommodation', 'Unterkunft', 'Hébergement'), t('Cuenta todas las noches, incluidas las de llegada o de conexión. Compara qué comidas y traslados incluye cada alojamiento.', 'Count every night, including arrival and connection nights. Compare the meals and transfers each accommodation includes.', 'Alle Nächte einrechnen, auch vor Anreise oder Anschlussflug. Enthaltene Mahlzeiten und Transfers der Unterkünfte vergleichen.', 'Comptez toutes les nuits, y compris avant une arrivée ou une correspondance. Comparez les repas et transferts inclus.')),
    ],
    note: t('Los precios dependen de fechas, grupo y servicios. Pide el total desglosado antes de reservar; aquí no publicamos tarifas ni horarios sin confirmar.', 'Prices depend on dates, group size and services. Request an itemised total before booking; unverified fares and timetables are not listed here.', 'Preise hängen von Termin, Gruppe und Leistungen ab. Vor der Buchung Gesamtkosten aufschlüsseln lassen; unbestätigte Preise und Fahrpläne werden hier nicht angegeben.', 'Les prix varient selon les dates, le groupe et les prestations. Demandez un total détaillé ; aucun tarif ni horaire non confirmé n’est indiqué ici.'),
  };
}
