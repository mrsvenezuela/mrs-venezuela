"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Car, ChevronDown, Info, MoonStar, Plane, PlaneTakeoff } from "lucide-react";
import { AffiliateDisclosure } from "@/components/content/affiliate-disclosure";
import { EditorialSectionHeading } from "@/components/content/editorial-section-heading";
import { FeaturedStay } from "@/components/content/featured-stay";
import { PartnerCta } from "@/components/content/partner-cta";
import { TourPartnerOffer } from "@/components/content/tour-partner-offer";
import { TravelInfo } from "@/components/content/travel-info";
import { TripChecklist } from "@/components/content/trip-checklist";
import { planningCopy } from "@/lib/planning-ui";
import { useLanguage } from "@/components/i18n/language-provider";
import { getFeaturedStay, getStayLink, getTourPartner, needsDisclosure } from "@/lib/affiliates";
import { getItinerary, ITINERARY_SLUG, ITINERARY_UPDATED } from "@/lib/itinerary";
import type { ItineraryDay, ItineraryLeg, ItineraryPhoto, StageId, TransferMode } from "@/lib/itinerary/types";

/*
 * «Una ruta por Venezuela en 14 días»: un itinerario que se pueda usar, no un artículo genérico.
 *
 * Jerarquía de las guías del sitio: número pequeño, título grande, frase corta y
 * contenido. El día por día es el centro: agrupado por destino, cada día con su foto,
 * y con dos ritmos para no repetir catorce tarjetas iguales: los días de experiencia a
 * media página y los de traslado más compactos, pero igual de visibles.
 *
 * Lo que caduca (aeropuertos, conexiones, carreteras, excursiones) vive solo en
 * «Información de viaje», dentro de «Antes de reservar», con su fecha de revisión.
 *
 * Lo comercial (lib/affiliates) está preparado y apagado: botones de alojamiento,
 * alojamiento destacado, operador receptivo y aviso de afiliados solo aparecen con
 * socios activos y acuerdo confirmado. Apagados no dejan hueco. El aviso va antes del
 * primer bloque comercial.
 */

const INK = "#17201b";
const MUTED = "#68726d";
const RULE = "#e2dbcd";
/** Turquesa del sitio para iconos, bordes, marcadores y cifras grandes. */
const ACCENT = "#247c8f";
/** Mismo turquesa, más oscuro, para texto pequeño y enlaces: llega a AA sobre el crema. */
const ACCENT_TEXT = "#1f6d7e";
const FOCUS = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f3d2e]";

/** Puntos del mapa conceptual, en % sobre /images/venezuela-political-map.jpg (2000×1625). */
const MAP_POINTS: Record<Exclude<StageId, "regreso">, { x: number; y: number }> = {
  caracas: { x: 45.2, y: 18.5 },
  canaima: { x: 77.2, y: 50.0 },
  "los-roques": { x: 44.4, y: 7.4 },
  merida: { x: 16.35, y: 37.7 },
};

const SECTION_IDS = {
  route: "la-ruta",
  days: "dia-por-dia",
  sleep: "donde-dormir",
  move: "como-moverse",
  budget: "presupuesto",
  before: "antes-de-reservar",
  travelInfo: "informacion-de-viaje",
} as const;

const MODE_ICON: Record<TransferMode, typeof Plane> = { flight: Plane, "small-plane": PlaneTakeoff, road: Car };

/** «septiembre de 2026», «September 2026», «2026年9月»… a partir de una sola fecha. */
function formatMonth(date: string, language: string) {
  const [year, month] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(language, { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}

/** «Día 02» o «第2天» según el patrón del idioma; `spoken` sin cero a la izquierda. */
function dayLabel(pattern: string, day: number, spoken = false) {
  return pattern.replace("{nn}", spoken ? String(day) : String(day).padStart(2, "0")).replace("{n}", String(day));
}

function Photo({ photo, ratio, sizes, className = "" }: {
  photo: ItineraryPhoto;
  ratio: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-[24px] bg-[#e9e2d6] ${className}`} style={{ aspectRatio: ratio }}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: photo.position ?? "center" }}
      />
    </div>
  );
}

function Section({ id, number, title, lede, children }: {
  id: string;
  number: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="container-page scroll-mt-24 border-t py-16 md:py-24" style={{ borderColor: RULE }}>
      <EditorialSectionHeading number={number} title={title} description={lede} wide />
      <div className="mt-10 md:mt-14">{children}</div>
    </section>
  );
}

export function ItineraryGuide() {
  const { language } = useLanguage();
  const page = getItinerary(language);
  const planning = planningCopy[language];
  const reviewedMonth = formatMonth(ITINERARY_UPDATED, language);
  const message = page.hero.title;
  const commercialTexts = { newTabLabel: page.commercial.newTab, codeLabel: page.commercial.codeLabel, article: ITINERARY_SLUG };

  // Socios activos (hoy, ninguno). El aviso de afiliados va antes del primer bloque que tenga alguno.
  const stayLinks = Object.fromEntries(page.sleep.areas.map((area) => [area.id, getStayLink(area.id, message)]));
  const featured = Object.fromEntries(page.sleep.areas.map((area) => [area.id, getFeaturedStay(area.id, language, message)]));
  const tour = getTourPartner(message);
  const disclosureInSleep = needsDisclosure([...Object.values(stayLinks), ...Object.values(featured).map((view) => view?.link)]);
  const disclosureInMove = !disclosureInSleep && needsDisclosure([tour?.link]);
  const extraCredits = Object.values(featured).flatMap((view) =>
    view?.photo ? [{ title: view.link.partnerName, ...view.photo.credit }] : [],
  );

  const index = [
    { id: SECTION_IDS.route, number: "01", title: page.route.title },
    { id: SECTION_IDS.days, number: "02", title: page.days.title },
    { id: SECTION_IDS.sleep, number: "03", title: page.sleep.title },
    { id: SECTION_IDS.move, number: "04", title: page.move.title },
    { id: SECTION_IDS.budget, number: "05", title: page.budget.title },
    { id: SECTION_IDS.before, number: "06", title: page.before.title },
  ];

  return (
    <main data-translated="true" className="bg-[#f7f4ec]" style={{ color: INK }}>
      {/* Portada: el mismo concepto que las demás guías, con poco texto encima de la foto */}
      <section className="relative min-h-[78vh] overflow-hidden text-white">
        <Image
          src={page.hero.photo.src}
          alt={page.hero.photo.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: page.hero.photo.position ?? "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/55 to-black/25" />
        <div className="container-page relative z-10 flex min-h-[78vh] items-end pb-16 pt-28 md:pb-20">
          <div className="max-w-4xl">
            <Link
              href="/"
              className="mb-8 inline-flex rounded-full bg-black/35 px-4 py-2 text-sm font-semibold backdrop-blur-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              {page.hero.home}
            </Link>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/90">{page.hero.eyebrow}</p>
            <h1 className="mt-4 max-w-[15ch] font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.92] sm:text-6xl md:text-8xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 text-base font-semibold uppercase tracking-[0.2em] text-white/90 md:text-lg">{page.hero.subtitle}</p>
            <dl className="mt-9 flex flex-wrap gap-x-9 gap-y-3 border-t border-white/25 pt-5">
              {page.hero.stats.map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none">{stat.value}</dd>
                  <dd aria-hidden="true" className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Introducción corta, enlace a la información que caduca e índice */}
      <section className="container-page pb-6 pt-14 md:pt-20">
        <p className="max-w-3xl text-lg leading-8 text-[#59675f] md:text-xl md:leading-9">{page.intro}</p>
        <a
          href={`#${SECTION_IDS.travelInfo}`}
          className={`mt-6 inline-flex items-center gap-2 rounded-sm text-sm font-semibold ${FOCUS}`}
          style={{ color: ACCENT_TEXT }}
        >
          <Info size={16} aria-hidden="true" style={{ color: ACCENT }} />
          {page.travelInfo.linkLabel.replace("{month}", reviewedMonth)}
          <ArrowDown size={15} aria-hidden="true" />
        </a>
        <nav className="mt-12" aria-labelledby="itinerario-indice">
          <p id="itinerario-indice" className="text-[0.66rem] font-bold uppercase tracking-[0.2em]" style={{ color: MUTED }}>
            {planning.intro}
          </p>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {index.map((entry, entryIndex) => (
              <li key={entry.id}>
                <a
                  href={`#${entry.id}`}
                  className={`flex h-full items-start gap-4 rounded-2xl border bg-white/70 p-5 text-sm transition hover:bg-[#eaf0e6] ${FOCUS}`}
                  style={{ borderColor: RULE }}
                >
                  <span aria-hidden="true" className="pt-1 text-xs font-bold" style={{ color: ACCENT_TEXT }}>{entry.number}</span>
                  <span><span className="block text-base font-semibold">{entry.title}</span><span className="mt-1 block leading-6 text-[#59675f]">{planning.descriptions[entryIndex]}</span></span>
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-1 text-sm text-[#59675f]">
          <p>{planning.alternatives}</p>
          <Link className={`inline-flex min-h-11 items-center font-semibold text-[#1f6d7e] underline underline-offset-4 ${FOCUS}`} href="/caribe-y-playa#destinos-esenciales">{planning.beaches}</Link>
          <Link className={`inline-flex min-h-11 items-center font-semibold text-[#1f6d7e] underline underline-offset-4 ${FOCUS}`} href="/estados">{planning.states}</Link>
        </div>
      </section>

      {/* 01 — La ruta: recorrido y mapa conceptual */}
      <Section id={SECTION_IDS.route} number="01" title={page.route.title} lede={page.route.lede}>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <ol className="relative">
            {page.route.stops.map((stop, stopIndex) => (
              <li key={`${stop.id}-${stopIndex}`} className="relative flex gap-5 pb-8 last:pb-0">
                {stopIndex < page.route.stops.length - 1 ? (
                  <span className="absolute left-[15px] top-9 h-[calc(100%-2.25rem)] w-px" style={{ background: RULE }} aria-hidden="true" />
                ) : null}
                <span
                  aria-hidden="true"
                  className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                  style={{ background: stop.id === "regreso" ? MUTED : ACCENT_TEXT }}
                >
                  {stopIndex + 1}
                </span>
                <div>
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em]" style={{ color: ACCENT_TEXT }}>{stop.days}</p>
                  <p className="mt-1 font-[family-name:var(--font-display)] text-3xl font-semibold leading-none">{stop.name}</p>
                  <p className="mt-1.5 leading-7" style={{ color: MUTED }}>{stop.role}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="m-0">
            <div className="relative overflow-hidden rounded-[24px] border bg-[#f9faf8]" style={{ borderColor: "#eee7db", aspectRatio: "2000 / 1625" }}>
              <Image
                src="/images/venezuela-political-map.jpg"
                alt={page.route.mapAlt}
                fill
                quality={60}
                sizes="(min-width: 1220px) 642px, (min-width: 1024px) calc(57.5vw - 60px), calc(100vw - 28px)"
                className="object-cover opacity-80 saturate-[0.65]"
              />
              {page.route.stops.map((stop, stopIndex) => {
                if (stop.id === "regreso") return null;
                const point = MAP_POINTS[stop.id];
                const numbers = page.route.stops
                  .map((other, otherIndex) => (other.id === stop.id || (stop.id === "caracas" && other.id === "regreso") ? otherIndex + 1 : null))
                  .filter(Boolean)
                  .join(" · ");
                return (
                  <span
                    key={`${stop.id}-${stopIndex}`}
                    aria-hidden="true"
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-1.5"
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  >
                    <span className="flex h-7 min-w-7 items-center justify-center rounded-full border-2 border-white px-1.5 text-[0.68rem] font-bold text-white shadow-[0_4px_12px_rgba(23,32,27,0.3)]" style={{ background: ACCENT_TEXT }}>
                      {numbers}
                    </span>
                    <span className="rounded-full bg-white/90 px-2 py-0.5 text-[0.7rem] font-bold uppercase tracking-[0.12em]" style={{ color: INK }}>
                      {stop.name}
                    </span>
                  </span>
                );
              })}
            </div>
            <figcaption className="mt-3 text-sm leading-6" style={{ color: MUTED }}>{page.route.mapNote}</figcaption>
          </figure>
        </div>
      </Section>

      {/* 02 — Día por día: agrupado por destino; experiencia a media página, traslados más compactos */}
      <Section id={SECTION_IDS.days} number="02" title={page.days.title} lede={page.days.lede}>
        <div className="space-y-20 md:space-y-28">
          {page.days.stages.map((stage) => (
            <div key={stage.id}>
              <header className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3 border-b pb-5" style={{ borderColor: RULE }}>
                <div>
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.22em]" style={{ color: ACCENT_TEXT }}>{stage.days}</p>
                  <h3 className="mt-1 font-[family-name:var(--font-display)] text-5xl font-semibold leading-none md:text-6xl">{stage.name}</h3>
                </div>
                {stage.guide ? (
                  <Link
                    href={stage.guide.href}
                    className={`inline-flex items-center gap-1.5 rounded-sm pb-1 font-semibold transition hover:gap-2.5 ${FOCUS}`}
                    style={{ color: ACCENT_TEXT }}
                  >
                    {stage.guide.label}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                ) : null}
              </header>

              {stage.note ? (
                <p className="mt-6 flex max-w-3xl gap-3 text-[0.95rem] leading-7" style={{ color: MUTED }}>
                  <Info size={18} className="mt-1 shrink-0" style={{ color: ACCENT }} aria-hidden="true" />
                  <span>{stage.note}</span>
                </p>
              ) : null}

              <div className="mt-10 space-y-14 md:space-y-16">
                {stage.items.map((item) => (
                  <DayRow key={item.day} item={item} flip={(item.day - 1) % 2 === 1} labels={page.days} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 03 — Dónde dormir: noches y tipo de alojamiento; los huecos comerciales no se pintan apagados */}
      <Section id={SECTION_IDS.sleep} number="03" title={page.sleep.title} lede={page.sleep.lede}>
        <AffiliateDisclosure text={page.commercial.disclosure} show={disclosureInSleep} className="mb-10 max-w-2xl" />
        <div className="grid gap-x-12 md:grid-cols-2">
          {page.sleep.areas.map((area) => {
            const stayLink = stayLinks[area.id];
            return (
              <article key={area.id} className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-t py-8 sm:grid-cols-[5.5rem_1fr]" style={{ borderColor: RULE }}>
                <p className="leading-none">
                  <span className="block font-[family-name:var(--font-display)] text-6xl font-semibold" style={{ color: ACCENT }}>{area.nights}</span>
                  <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.18em]" style={{ color: MUTED }}>{area.nightsLabel}</span>
                </p>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none">{area.place}</h3>
                  <p className="mt-2.5 text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT_TEXT }}>{area.kinds}</p>
                  <p className="mt-2 text-[0.98rem] leading-7" style={{ color: MUTED }}>{area.text}</p>
                  <PartnerCta
                    link={stayLink}
                    label={page.commercial.cta[stayLink?.label ?? area.ctaKey]}
                    context={area.place}
                    placement="where-to-stay"
                    {...commercialTexts}
                    className="mt-4"
                  />
                  <FeaturedStay
                    view={featured[area.id]}
                    eyebrow={page.commercial.featuredStay}
                    cta={page.commercial.cta.seeStay}
                    {...commercialTexts}
                    className="mt-5"
                  />
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      {/* 04 — Cómo moverse: los tramos reales, en orden; sin datos que caduquen */}
      <Section id={SECTION_IDS.move} number="04" title={page.move.title} lede={page.move.lede}>
        <ol className="grid gap-x-12 md:grid-cols-2">
          {page.move.legs.map((leg, legIndex) => (
            <LegRow key={`${leg.day}-${legIndex}`} leg={leg} labels={{ ...page.move, dayPattern: page.days.dayPattern }} />
          ))}
        </ol>
        <AffiliateDisclosure text={page.commercial.disclosure} show={disclosureInMove} className="mt-10 max-w-2xl" />
        <TourPartnerOffer
          variant="inline"
          view={tour}
          texts={page.commercial.tour}
          cta={page.commercial.cta.organizedTrip}
          {...commercialTexts}
          className="mt-10"
        />
      </Section>

      {/* 05 — Presupuesto: qué presupuestar; cifras solo con fecha y fuente, y sin mezclar partner y estimación */}
      <Section id={SECTION_IDS.budget} number="05" title={page.budget.title} lede={page.budget.lede}>
        <div className="grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {page.budget.items.map((item) => (
            <article key={item.id} className="border-t py-6" style={{ borderColor: RULE }}>
              <h3 className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: ACCENT_TEXT }}>{item.title}</h3>
              <p className="mt-2 leading-7" style={{ color: MUTED }}>{item.text}</p>
              {item.prices?.length ? (
                <ul className="mt-3 space-y-2 text-sm leading-6">
                  {item.prices.map((price) => (
                    <li key={`${price.kind}-${price.source}`}>
                      <span className="block text-[0.66rem] font-bold uppercase tracking-[0.16em]" style={{ color: MUTED }}>
                        {price.kind === "partner" ? page.budget.priceLabels.partner : page.budget.priceLabels.estimate}
                      </span>
                      <span className="font-semibold">{price.value}</span>
                      <span className="block text-xs" style={{ color: MUTED }}>
                        {page.budget.priceLabels.updated}: {price.updated} · {price.source}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </Section>

      {/* 06 — Antes de reservar: la información que caduca, con fecha, y pocas comprobaciones */}
      <Section id={SECTION_IDS.before} number="06" title={page.before.title} lede={page.before.lede}>
        <TravelInfo
          id={SECTION_IDS.travelInfo}
          title={page.travelInfo.title}
          lede={page.travelInfo.lede}
          reviewedLabel={page.travelInfo.reviewedLabel}
          reviewedMonth={reviewedMonth}
          reviewedDate={ITINERARY_UPDATED}
          items={page.travelInfo.items}
        />
        <TripChecklist items={page.before.tips} />
        <aside className="mt-8" aria-labelledby="planning-sources">
          <h3 id="planning-sources" className="font-semibold">{planning.sources}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-[#59675f]">{planning.sourcesNote}</p>
          <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li><a className={`inline-flex min-h-11 items-center underline underline-offset-4 ${FOCUS}`} href="https://www.gov.uk/foreign-travel-advice/venezuela">GOV.UK · Venezuela</a></li>
            <li><a className={`inline-flex min-h-11 items-center underline underline-offset-4 ${FOCUS}`} href="https://www.auswaertiges-amt.de/de/service/laender/venezuela-node/venezuelasicherheit-224982">Auswärtiges Amt · Venezuela</a></li>
          </ul>
        </aside>
        <TourPartnerOffer
          variant="options"
          view={tour}
          texts={page.commercial.tour}
          cta={page.commercial.cta.requestItinerary}
          {...commercialTexts}
          className="mt-14"
        />
      </Section>

      <div className="container-page pb-14">
        <ItineraryCredits label={page.creditsLabel} note={page.creditsNote} credits={[...page.credits, ...extraCredits]} />
      </div>
    </main>
  );
}

/** Créditos plegables, con el mismo aspecto que los del resto de guías. Sin crédito no se publica la foto. */
function ItineraryCredits({ label, note, credits }: {
  label: string;
  note?: string;
  credits: Array<{ title: string; author: string; license: string; href: string }>;
}) {
  if (!credits.length) return null;
  return (
    <details className="group">
      <summary className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-3 py-2 text-xs font-medium text-[#59675f] transition hover:text-[#0f3d2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f3d2e] [&::-webkit-details-marker]:hidden">
        <span>{label}</span>
        <ChevronDown size={15} aria-hidden="true" className="shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="pb-2 pt-3 text-xs leading-5 text-[#59675f]">
        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {credits.map((credit) => (
            <li key={credit.href} className="min-w-0 break-words">
              {credit.title} ·{" "}
              <a href={credit.href} target="_blank" rel="noreferrer" className={`rounded-sm underline underline-offset-2 transition hover:text-[#0f3d2e] ${FOCUS}`}>
                {credit.author}
              </a>
              , {credit.license}
            </li>
          ))}
        </ul>
        {note ? <p className="mt-3">{note}</p> : null}
      </div>
    </details>
  );
}

/** Un tramo: día, origen, medio y destino, como en un cuaderno de viaje. */
function LegRow({ leg, labels }: {
  leg: ItineraryLeg;
  labels: { dayPattern: string; modeLabels: Record<TransferMode, string>; toLabel: string };
}) {
  const modes = leg.modes.map((mode) => labels.modeLabels[mode]).join(" · ");
  return (
    <li className="grid grid-cols-[4.5rem_1fr] gap-x-5 border-t py-7" style={{ borderColor: RULE }}>
      <p aria-hidden="true" className="pt-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT_TEXT }}>
        {dayLabel(labels.dayPattern, leg.day)}
      </p>
      <div>
        <h3 className="sr-only">
          {dayLabel(labels.dayPattern, leg.day, true)}: {leg.from} {labels.toLabel} {leg.to} ({modes})
        </h3>
        <div aria-hidden="true">
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight">{leg.from}</p>
          <p className="my-1.5 flex items-center gap-2 pl-1 text-[0.66rem] font-bold uppercase tracking-[0.16em]" style={{ color: ACCENT_TEXT }}>
            {leg.modes.map((mode) => {
              const Icon = MODE_ICON[mode];
              return (
                <span key={mode} className="flex h-7 w-7 items-center justify-center rounded-full bg-[#e8f3ef]" style={{ color: ACCENT }}>
                  <Icon size={14} />
                </span>
              );
            })}
            <span className="ml-1">{modes}</span>
          </p>
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight">{leg.to}</p>
        </div>
        <p className="mt-2.5 text-[0.95rem] leading-7" style={{ color: MUTED }}>{leg.text}</p>
      </div>
    </li>
  );
}

function DayRow({ item, flip, labels }: {
  item: ItineraryDay;
  flip: boolean;
  labels: { dayPattern: string; nightLabel: string; transferLabel: string };
}) {
  const compact = Boolean(item.transfer);

  const text = (
    <div className="max-w-xl">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <p aria-hidden="true" className="rounded-full px-3 py-1 text-[0.72rem] font-bold uppercase tracking-[0.18em] text-white" style={{ background: ACCENT_TEXT }}>
          {dayLabel(labels.dayPattern, item.day)}
        </p>
        <span className="text-[0.72rem] font-bold uppercase tracking-[0.18em]" style={{ color: MUTED }}>{item.place}</span>
        {item.transfer ? (
          <span className="inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[0.66rem] font-bold uppercase tracking-[0.14em]" style={{ borderColor: RULE, color: MUTED }}>
            <Plane size={11} aria-hidden="true" />
            {labels.transferLabel}
          </span>
        ) : null}
      </div>
      <h4 className={`mt-3 font-[family-name:var(--font-display)] font-semibold leading-tight ${compact ? "text-3xl" : "text-3xl md:text-4xl"}`}>
        <span className="sr-only">{dayLabel(labels.dayPattern, item.day, true)}: </span>
        {item.title}
      </h4>
      <p className="mt-3 text-[1.02rem] leading-8" style={{ color: MUTED }}>{item.text}</p>
      {item.night ? (
        <p className="mt-5 flex items-center gap-2 border-t pt-4 text-sm" style={{ borderColor: RULE }}>
          <MoonStar size={15} style={{ color: ACCENT }} aria-hidden="true" />
          <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em]" style={{ color: MUTED }}>{labels.nightLabel}</span>
          <span className="font-semibold">{item.night}</span>
        </p>
      ) : null}
    </div>
  );

  if (!item.photo) {
    return <article className="md:pl-[calc(41.666%+1.5rem)]">{text}</article>;
  }

  const portrait = item.photo.ratio === "3 / 4";
  // Traslado: foto más pequeña (5/12) y apaisada; experiencia: media página.
  const columns = compact
    ? flip
      ? "md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
      : "md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    : "md:grid-cols-2";
  const sizes = portrait
    ? "(min-width: 920px) 416px, (min-width: 768px) calc(50vw - 44px), (min-width: 444px) 416px, calc(100vw - 28px)"
    : compact
      ? "(min-width: 1220px) 470px, (min-width: 768px) calc(41.6vw - 36px), calc(100vw - 28px)"
      : "(min-width: 1220px) 566px, (min-width: 768px) calc(50vw - 44px), calc(100vw - 28px)";

  return (
    <article className={`grid items-center gap-6 md:gap-12 ${columns}`}>
      <div className={flip ? "md:order-2" : ""}>
        <Photo
          photo={item.photo}
          ratio={item.photo.ratio ?? (compact ? "3 / 2" : "4 / 3")}
          sizes={sizes}
          className={portrait ? "mx-auto max-w-[26rem]" : ""}
        />
      </div>
      <div className={flip ? "md:order-1" : ""}>{text}</div>
    </article>
  );
}
