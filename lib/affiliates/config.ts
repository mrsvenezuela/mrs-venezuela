import type { DestinationId, FeaturedStaySlot, Partner, PartnerContact, StaySlot, TourPartnerSlot } from "./types";

/*
 * ÚNICO lugar donde se activa algo comercial. Todo está apagado y sin URL a propósito
 * (septiembre de 2026): no hay cuentas de afiliado aprobadas ni acuerdos firmados con
 * alojamientos ni con operadores. Antes de tocar nada, leer README.md de esta carpeta.
 *
 * Para que algo aparezca en una página hacen falta, a la vez: el socio con `enabled: true`,
 * `agreement.confirmedOn` y un contacto válido para su modelo, y el hueco de la guía activado.
 */

const noContact = (model: PartnerContact["model"]): PartnerContact => ({
  model,
  url: null,
  code: null,
  codeParam: null,
  phone: null,
  email: null,
});

/**
 * Registro de socios. Aquí no se añade ningún alojamiento ni operador sin acuerdo por
 * escrito: estar en conversaciones no basta.
 */
export const partners: Partner[] = [
  {
    // Programa oficial de afiliados. Sin cuenta aprobada.
    id: "booking",
    name: "Booking.com",
    type: "stay-program",
    enabled: false,
    agreement: null,
    contact: noContact("affiliate-link"),
    commissionType: "percentage",
    disclosure: true,
  },
  {
    // Mrs Venezuela no ha sido aceptada en ningún programa de Airbnb.
    id: "airbnb",
    name: "Airbnb",
    type: "stay-program",
    enabled: false,
    agreement: null,
    contact: noContact("affiliate-link"),
    commissionType: null,
    disclosure: true,
  },
];

const emptyStay: StaySlot = { affiliateEnabled: false, affiliateProvider: null, affiliateUrl: null, affiliateLabel: null };

/**
 * Botón de alojamiento de cada destino. Canaima no lleva programa: allí se trabaja con
 * campamentos (ver `featuredStays`). Rellenar la URL solo tras comprobar inventario real
 * en ese destino desde el panel del programa.
 */
export const staySlots: Record<DestinationId, StaySlot> = {
  caracas: { ...emptyStay },
  canaima: { ...emptyStay },
  "los-roques": { ...emptyStay },
  merida: { ...emptyStay },
};

/** «Alojamiento destacado». Preparado para Canaima; ningún campamento tiene acuerdo. */
export const featuredStays: Partial<Record<DestinationId, FeaturedStaySlot>> = {
  canaima: { partnerEnabled: false, partnerId: null, description: {}, photo: null },
};

/** Operador receptivo para el viaje completo. Ninguno elegido. */
export const tourPartner: TourPartnerSlot = {
  tourPartnerEnabled: false,
  tourPartnerId: null,
  services: [],
};
