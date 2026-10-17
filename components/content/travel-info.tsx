import { Info } from "lucide-react";

/*
 * «Información de viaje»: el único sitio de una guía para los datos que caducan
 * (conexiones aéreas, aeropuertos, carreteras, transporte, excursiones que dependen
 * de la operación), con la fecha de la última revisión.
 *
 * Así, cuando algo cambia, se actualiza esta caja y su fecha, en lugar de buscar el
 * mismo aviso repetido por toda la página.
 */
export function TravelInfo({
  id,
  title,
  lede,
  reviewedLabel,
  reviewedMonth,
  reviewedDate,
  items,
  className = "",
}: {
  id: string;
  title: string;
  lede?: string;
  /** «Última revisión» */
  reviewedLabel: string;
  /** «septiembre de 2026», ya en el idioma del lector. */
  reviewedMonth: string;
  /** AAAA-MM-DD, para <time>. */
  reviewedDate: string;
  items: Array<{ title: string; text: string }>;
  className?: string;
}) {
  if (!items.length) return null;

  return (
    <aside id={id} aria-labelledby={`${id}-titulo`} className={`scroll-mt-24 rounded-[28px] border border-[#e2dbcd] bg-white/70 px-6 py-7 md:px-10 md:py-9 ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2">
        <h3 id={`${id}-titulo`} className="flex items-center gap-2.5 text-[0.74rem] font-bold uppercase tracking-[0.2em] text-[#1f6d7e]">
          <Info size={17} aria-hidden="true" className="text-[#247c8f]" />
          {title}
        </h3>
        <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-[#68726d]">
          {reviewedLabel}: <time dateTime={reviewedDate.slice(0, 7)} className="text-[#17201b]">{reviewedMonth}</time>
        </p>
      </div>
      {lede ? <p className="mt-4 max-w-3xl leading-7 text-[#59675f]">{lede}</p> : null}
      <dl className="mt-5 grid gap-x-12 md:grid-cols-2">
        {items.map((item, index) => (
          <div key={item.title} className={`border-t border-[#e2dbcd] py-5 ${index < 2 ? "md:border-t-0 md:pt-2" : ""} ${index === 0 ? "border-t-0 pt-2" : ""}`}>
            <dt className="font-semibold text-[#17201b]">{item.title}</dt>
            <dd className="mt-1.5 leading-7 text-[#68726d]">{item.text}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}
