import { track } from "@vercel/analytics";
import type { AffiliateClick } from "./types";

/*
 * Medición de clics en enlaces comerciales con la analítica que el sitio ya usa
 * (Vercel Web Analytics: sin cookies y sin datos personales). No se añade ningún
 * proveedor nuevo. El evento solo lleva socio, ubicación, artículo, modelo y destino.
 */
export function trackAffiliateClick(event: AffiliateClick): void {
  try {
    const properties: Record<string, string> = {
      partner: event.partner,
      placement: event.placement,
      article: event.article,
      model: event.model,
    };
    if (event.destination) properties.destination = event.destination;
    track("affiliate_click", properties);
  } catch {
    // Medir nunca debe impedir que el enlace funcione.
  }
}
