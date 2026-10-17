"use client";

import { PartnerCta } from "@/components/content/partner-cta";
import type { TourPartnerView, TravelServiceId } from "@/lib/affiliates";

/*
 * Operador receptivo para el viaje completo, en dos formatos:
 *
 *   inline   «¿Quieres dejar la logística en manos de un operador?  Consultar viaje organizado →»
 *            una línea al final de «Cómo moverse».
 *   options  las dos formas de usar la guía: A, organizarlo por tu cuenta; B, que lo organice
 *            un operador local, con solo los servicios confirmados con ese operador.
 *
 * Sin operador activo con acuerdo (lib/affiliates/config.ts) no se renderiza nada: un bloque
 * así sin socio sería una promesa vacía. Nada de banners, logos grandes ni urgencia.
 */

export type TourPartnerTexts = {
  title: string;
  text: string;
  ownTitle: string;
  ownText: string;
  organizedTitle: string;
  inlineTitle: string;
  services: Record<TravelServiceId, string>;
};

export function TourPartnerOffer({
  variant,
  view,
  texts,
  cta,
  newTabLabel,
  codeLabel,
  article,
  className = "",
}: {
  variant: "inline" | "options";
  view: TourPartnerView | null;
  texts: TourPartnerTexts;
  cta: string;
  newTabLabel: string;
  codeLabel: string;
  article: string;
  className?: string;
}) {
  if (!view) return null;

  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 border-t border-[#e2dbcd] pt-6 ${className}`}>
        <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">{texts.inlineTitle}</p>
        <PartnerCta link={view.link} label={cta} placement="getting-around" article={article} newTabLabel={newTabLabel} codeLabel={codeLabel} />
      </div>
    );
  }

  return (
    <aside aria-labelledby="viaje-organizado" className={`border-t border-[#e2dbcd] pt-10 ${className}`}>
      <h3 id="viaje-organizado" className="max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b] md:text-4xl">
        {texts.title}
      </h3>
      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-12">
        <div>
          <p aria-hidden="true" className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#68726d]">A</p>
          <h4 className="mt-1 text-lg font-semibold text-[#17201b]">{texts.ownTitle}</h4>
          <p className="mt-2 leading-7 text-[#68726d]">{texts.ownText}</p>
        </div>
        <div className="md:border-l md:border-[#e2dbcd] md:pl-12">
          <p aria-hidden="true" className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#1f6d7e]">B</p>
          <h4 className="mt-1 text-lg font-semibold text-[#17201b]">{texts.organizedTitle}</h4>
          <p className="mt-2 leading-7 text-[#68726d]">{texts.text}</p>
          {view.services.length ? (
            <ul className="mt-3 flex flex-wrap gap-2">
              {view.services.map((service) => (
                <li key={service} className="rounded-full border border-[#e2dbcd] px-3 py-1 text-xs font-semibold text-[#17201b]">
                  {texts.services[service]}
                </li>
              ))}
            </ul>
          ) : null}
          <PartnerCta link={view.link} label={cta} placement="tour-partner" article={article} newTabLabel={newTabLabel} codeLabel={codeLabel} className="mt-5" />
        </div>
      </div>
    </aside>
  );
}
