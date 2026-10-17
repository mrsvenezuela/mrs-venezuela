import type { LanguageCode } from "@/lib/i18n";
import { featuredStays, partners, staySlots, tourPartner } from "./config";
import type {
  DestinationId,
  FeaturedStaySlot,
  Partner,
  PartnerContact,
  PartnerLink,
  PartnerType,
  StayCtaKey,
  TourPartnerSlot,
} from "./types";

export type {
  AffiliateClick,
  CtaKey,
  DestinationId,
  PartnerLink,
  Placement,
  ReferralModel,
  StayCtaKey,
  TravelServiceId,
} from "./types";

/** Solo URL https completas. Un enlace vacío, relativo o de prueba nunca llega a la página. */
export function isRealUrl(href: string | null | undefined): href is string {
  return typeof href === "string" && /^https:\/\/[^\s/]+\.[^\s]+$/.test(href.trim());
}

const hasText = (value: string | null | undefined): value is string => typeof value === "string" && value.trim() !== "";

/**
 * Convierte el contacto de un socio en un destino clicable según su modelo.
 * Devuelve null si falta cualquier dato que ese modelo necesita.
 * `message` es texto sin datos personales (el título de la guía) para WhatsApp y correo.
 */
export function resolveContact(
  contact: PartnerContact,
  { urlOverride, message }: { urlOverride?: string | null; message?: string } = {},
): { href: string; code: string | null } | null {
  const url = isRealUrl(urlOverride) ? urlOverride.trim() : isRealUrl(contact.url) ? contact.url.trim() : null;

  switch (contact.model) {
    case "affiliate-link":
    case "referral-link":
    case "contact-form":
      return url ? { href: url, code: null } : null;
    case "tracking-code": {
      if (!url || !hasText(contact.code) || !hasText(contact.codeParam)) return null;
      try {
        const withCode = new URL(url);
        withCode.searchParams.set(contact.codeParam.trim(), contact.code.trim());
        return { href: withCode.toString(), code: null };
      } catch {
        return null;
      }
    }
    case "promo-code":
      return url && hasText(contact.code) ? { href: url, code: contact.code.trim() } : null;
    case "whatsapp": {
      const digits = (contact.phone ?? "").replace(/\D/g, "");
      if (digits.length < 8 || digits.length > 15) return null;
      const text = hasText(message) ? `?text=${encodeURIComponent(message)}` : "";
      return { href: `https://wa.me/${digits}${text}`, code: null };
    }
    case "email": {
      const email = (contact.email ?? "").trim();
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
      const subject = hasText(message) ? `?subject=${encodeURIComponent(message)}` : "";
      return { href: `mailto:${email}${subject}`, code: null };
    }
    default:
      return null;
  }
}

/** Socio utilizable: existe, del tipo esperado, activado y con acuerdo fechado. */
function activePartner(id: string | null, types: PartnerType[]): Partner | null {
  if (!id) return null;
  const partner = partners.find((candidate) => candidate.id === id);
  if (!partner || !types.includes(partner.type) || !partner.enabled || !hasText(partner.agreement?.confirmedOn)) {
    return null;
  }
  return partner;
}

function toLink(partner: Partner, key: string, resolved: { href: string; code: string | null }, destination?: DestinationId): PartnerLink {
  return {
    key,
    partnerId: partner.id,
    partnerName: partner.name,
    partnerType: partner.type,
    model: partner.contact.model,
    destination,
    href: resolved.href,
    code: resolved.code,
    disclosure: partner.disclosure,
  };
}

/** Botón de alojamiento de un destino, o null. Para `affiliate-link` exige la URL propia del destino. */
export function getStayLink(destination: DestinationId, message?: string): (PartnerLink & { label: StayCtaKey | null }) | null {
  const slot = staySlots[destination];
  if (!slot?.affiliateEnabled) return null;
  const partner = activePartner(slot.affiliateProvider, ["stay-program", "stay"]);
  if (!partner) return null;
  if (partner.contact.model === "affiliate-link" && !isRealUrl(slot.affiliateUrl)) return null;
  const resolved = resolveContact(partner.contact, { urlOverride: slot.affiliateUrl, message });
  if (!resolved) return null;
  return { ...toLink(partner, `stay-${partner.id}-${destination}`, resolved, destination), label: slot.affiliateLabel };
}

export type FeaturedStayView = {
  link: PartnerLink;
  description: string;
  photo: { src: string; alt: string; credit: NonNullable<FeaturedStaySlot["photo"]>["credit"] } | null;
};

/** «Alojamiento destacado» de un destino en un idioma, o null si falta algo (incluida la traducción). */
export function getFeaturedStay(destination: DestinationId, language: LanguageCode, message?: string): FeaturedStayView | null {
  const slot = featuredStays[destination];
  if (!slot?.partnerEnabled) return null;
  const partner = activePartner(slot.partnerId, ["stay"]);
  const description = slot.description[language];
  if (!partner || !hasText(description)) return null;
  const resolved = resolveContact(partner.contact, { message });
  if (!resolved) return null;
  const alt = slot.photo?.alt[language];
  const photo = slot.photo && hasText(alt) && hasText(slot.photo.credit.author) ? { src: slot.photo.src, alt, credit: slot.photo.credit } : null;
  return { link: toLink(partner, `featured-${partner.id}-${destination}`, resolved, destination), description: description.trim(), photo };
}

export type TourPartnerView = { link: PartnerLink; services: TourPartnerSlot["services"] };

/** Operador receptivo activo, o null. */
export function getTourPartner(message?: string): TourPartnerView | null {
  if (!tourPartner.tourPartnerEnabled) return null;
  const partner = activePartner(tourPartner.tourPartnerId, ["tour-operator"]);
  if (!partner) return null;
  const resolved = resolveContact(partner.contact, { message });
  if (!resolved) return null;
  return { link: toLink(partner, `tour-${partner.id}`, resolved), services: tourPartner.services };
}

/** ¿Hace falta el aviso de afiliados? Solo si hay al menos un enlace activo que lo requiera. */
export function needsDisclosure(links: Array<PartnerLink | null | undefined>): boolean {
  return links.some((link) => Boolean(link?.disclosure));
}
