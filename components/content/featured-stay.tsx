"use client";

import Image from "next/image";
import { PartnerCta } from "@/components/content/partner-cta";
import type { FeaturedStayView } from "@/lib/affiliates";

/*
 * «Alojamiento destacado»: foto, nombre, breve descripción y «Ver alojamiento →».
 *
 * Solo para alojamientos con acuerdo confirmado (lib/affiliates/config.ts). Sin socio
 * activo no pinta nada ni deja hueco. Discreto, dentro del bloque del destino: no es un
 * anuncio, es una opción más para quien quiera reservar.
 */
export function FeaturedStay({
  view,
  eyebrow,
  cta,
  newTabLabel,
  codeLabel,
  article,
  className = "",
}: {
  view: FeaturedStayView | null;
  eyebrow: string;
  cta: string;
  newTabLabel: string;
  codeLabel: string;
  article: string;
  className?: string;
}) {
  if (!view) return null;

  return (
    <aside className={`grid gap-4 rounded-[20px] border border-[#e2dbcd] bg-white/70 p-4 sm:grid-cols-[9rem_1fr] sm:items-start ${className}`}>
      {view.photo ? (
        <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#e9e2d6]">
          <Image src={view.photo.src} alt={view.photo.alt} fill sizes="(min-width: 640px) 144px, calc(100vw - 80px)" className="object-cover" />
        </div>
      ) : null}
      <div>
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.18em] text-[#68726d]">{eyebrow}</p>
        <h4 className="mt-1 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">
          {view.link.partnerName}
        </h4>
        <p className="mt-1.5 text-[0.92rem] leading-6 text-[#68726d]">{view.description}</p>
        <PartnerCta
          link={view.link}
          label={cta}
          context={view.link.partnerName}
          placement="featured-stay"
          article={article}
          newTabLabel={newTabLabel}
          codeLabel={codeLabel}
          className="mt-3"
        />
      </div>
    </aside>
  );
}
