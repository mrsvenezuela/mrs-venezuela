import type { LanguageCode } from "@/lib/i18n";

/*
 * Tipos de la monetización editorial: un registro de socios (programas de alojamiento,
 * alojamientos con acuerdo directo y operadores receptivos) y los huecos de cada guía
 * que pueden apuntar a ellos.
 *
 * Nada de esto se pinta si no hay un acuerdo real y un contacto real. Ver README.md.
 */

/** Destinos con alojamiento en los itinerarios. Mismos identificadores que las etapas. */
export type DestinationId = "caracas" | "canaima" | "los-roques" | "merida";

/** Dónde aparece un enlace dentro de una guía. Se envía al medir clics. */
export type Placement = "where-to-stay" | "featured-stay" | "getting-around" | "tour-partner";

/** Rótulos de los botones; cada guía los traduce en su contenido por idioma. */
export type CtaKey = "whereToStay" | "seeStays" | "seeStay" | "requestItinerary" | "organizedTrip";

/** Rótulo del botón de alojamiento de un destino. */
export type StayCtaKey = Extract<CtaKey, "whereToStay" | "seeStays">;

export type CommissionType = "percentage" | "fixed" | "none";

/**
 * Cómo le llegan los viajeros a cada socio. No todos trabajan con enlaces ni cookies.
 *
 *   affiliate-link  enlace con identificador sacado del panel de un programa (Booking.com…)
 *   referral-link   enlace de referido acordado directamente con el socio
 *   tracking-code   la web del socio + un parámetro acordado (?ref=mrsvenezuela)
 *   promo-code      la web del socio + un código que el viajero menciona al reservar
 *   contact-form    formulario de contacto del socio
 *   whatsapp        chat de WhatsApp del socio
 *   email           correo del socio (solicitud de información)
 */
export type ReferralModel =
  | "affiliate-link"
  | "referral-link"
  | "tracking-code"
  | "promo-code"
  | "contact-form"
  | "whatsapp"
  | "email";

/** Datos de contacto según el modelo. Solo se usan los campos que ese modelo necesita. */
export type PartnerContact = {
  model: ReferralModel;
  /** https: enlace de afiliado o de referido, web del socio o su formulario. */
  url: string | null;
  /** Código promocional o de seguimiento. */
  code: string | null;
  /** Nombre del parámetro para `tracking-code`: «ref», «utm_source»… */
  codeParam: string | null;
  /** WhatsApp: número en formato internacional (solo cuentan los dígitos). */
  phone: string | null;
  email: string | null;
};

export type Agreement = {
  /** Fecha (AAAA-MM-DD) del acuerdo por escrito o de la aprobación de la cuenta. Sin fecha no se activa nada. */
  confirmedOn: string;
  notes?: string;
};

export type PartnerType = "stay-program" | "stay" | "tour-operator";

/** Un socio comercial. Lista única en config.ts. */
export type Partner = {
  /** Identificador estable: «booking», «airbnb»… Se envía al medir clics. */
  id: string;
  /** Nombre comercial tal como se muestra. */
  name: string;
  type: PartnerType;
  /** Interruptor general del socio. */
  enabled: boolean;
  /** null mientras no haya acuerdo o cuenta aprobada. */
  agreement: Agreement | null;
  contact: PartnerContact;
  commissionType: CommissionType | null;
  /** true si hay comisión u otra contraprestación: aviso de afiliados y rel="sponsored". */
  disclosure: boolean;
};

/**
 * Hueco de alojamiento de un destino («Dónde hospedarse →», «Ver alojamientos →»).
 * Apunta a un programa o a un alojamiento del registro.
 */
export type StaySlot = {
  affiliateEnabled: boolean;
  /** `id` del socio en el registro. */
  affiliateProvider: string | null;
  /**
   * URL de este destino generada en el panel del programa (con el identificador real).
   * Obligatoria para `affiliate-link`; para los demás modelos, si falta, se usa el contacto del socio.
   */
  affiliateUrl: string | null;
  /** Rótulo del botón; null = el del destino en el contenido de la guía. */
  affiliateLabel: StayCtaKey | null;
};

/** Texto de un socio en cada idioma. Si falta un idioma, el bloque no se muestra en ese idioma. */
export type LocalizedText = Partial<Record<LanguageCode, string>>;

/** Hueco «Alojamiento destacado» de un destino: foto, nombre, breve descripción y «Ver alojamiento →». */
export type FeaturedStaySlot = {
  partnerEnabled: boolean;
  /** `id` del socio (tipo "stay") en el registro. */
  partnerId: string | null;
  description: LocalizedText;
  /** Foto con licencia o cedida por escrito por el socio; sin crédito no se publica. */
  photo: {
    src: string;
    alt: LocalizedText;
    credit: { author: string; license: string; href: string };
  } | null;
};

/** Servicios que podría cubrir un operador receptivo. Se comprueban uno a uno antes de activar. */
export type TravelServiceId =
  | "airport-reception"
  | "domestic-flights"
  | "transfers"
  | "stays"
  | "excursions"
  | "trip-logistics"
  | "in-trip-assistance";

/** Hueco «¿Prefieres que organicen el viaje por ti?». */
export type TourPartnerSlot = {
  tourPartnerEnabled: boolean;
  /** `id` del socio (tipo "tour-operator") en el registro. */
  tourPartnerId: string | null;
  /** Solo los servicios confirmados con ese operador. Nunca suponer que cubre todos. */
  services: TravelServiceId[];
};

/** Enlace listo para pintar: socio activo, con acuerdo y destino comprobado. */
export type PartnerLink = {
  key: string;
  partnerId: string;
  partnerName: string;
  partnerType: PartnerType;
  model: ReferralModel;
  destination?: DestinationId;
  href: string;
  /** Código que el viajero debe mencionar (promo-code). */
  code: string | null;
  disclosure: boolean;
};

/** Evento de clic, sin datos personales. */
export type AffiliateClick = {
  partner: string;
  placement: Placement;
  article: string;
  model: ReferralModel;
  destination?: DestinationId;
};
