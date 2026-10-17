"use client";

import { ArrowRight } from "lucide-react";
import type { PartnerLink, Placement } from "@/lib/affiliates";
import { trackAffiliateClick } from "@/lib/affiliates/tracking";

/*
 * Botón comercial discreto: «Dónde hospedarse →», «Ver alojamiento →», «Solicitar itinerario →».
 *
 * Solo recibe enlaces ya filtrados por lib/affiliates (socio activo, acuerdo fechado y
 * contacto válido); sin enlace no pinta nada. El nombre del socio queda siempre a la
 * vista, los enlaces con contraprestación llevan rel="sponsored" y cada clic se mide
 * sin datos personales.
 */
export function PartnerCta({
  link,
  label,
  context,
  placement,
  article,
  newTabLabel,
  codeLabel,
  className = "",
}: {
  link: PartnerLink | null | undefined;
  label: string;
  /** Para lectores de pantalla, cuando el rótulo se repite: el destino, p. ej. «Caracas». */
  context?: string;
  placement: Placement;
  article: string;
  /** «se abre en una pestaña nueva» */
  newTabLabel: string;
  /** «Código» (modelo promo-code) */
  codeLabel: string;
  className?: string;
}) {
  if (!link) return null;
  const external = link.href.startsWith("https://");

  return (
    <p className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm ${className}`}>
      <a
        href={link.href}
        target={external ? "_blank" : undefined}
        rel={external ? (link.disclosure ? "sponsored noopener noreferrer" : "noopener noreferrer") : undefined}
        data-partner={link.partnerId}
        onClick={() =>
          trackAffiliateClick({ partner: link.partnerId, placement, article, model: link.model, destination: link.destination })
        }
        className="group inline-flex items-center gap-1.5 rounded-sm font-semibold text-[#1d6576] underline-offset-4 transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1d6576]"
      >
        {label}
        {context ? <span className="sr-only"> · {context}</span> : null}
        <ArrowRight size={15} aria-hidden="true" className="transition group-hover:translate-x-0.5" />
        {external ? <span className="sr-only"> ({newTabLabel})</span> : null}
      </a>
      <span className="text-[#68726d]">{link.partnerName}</span>
      {link.code ? (
        <span className="text-[#68726d]">
          {codeLabel}: <strong className="font-semibold text-[#17201b]">{link.code}</strong>
        </span>
      ) : null}
    </p>
  );
}
