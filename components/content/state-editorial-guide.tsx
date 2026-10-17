"use client";

import { PhotoCredits } from "@/components/content/photo-credits";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Backpack,
  Bug,
  Camera,
  Car,
  Clock3,
  Compass,
  Droplets,
  Footprints,
  Leaf,
  Map,
  Mountain,
  Plane,
  Ship,
  Shield,
  Shirt,
  Snowflake,
  Sun,
  Umbrella,
  Users,
  Waves,
  Info,
  Wind,
  type LucideIcon,
} from "lucide-react";
import type { DiscoverItem } from "@/lib/content";
import type { StateFact, StateGuideData, StatePhoto, StateRouteMode, StateTipIcon } from "@/lib/states/types";
import { EditorialSectionHeading } from "@/components/content/editorial-section-heading";
import { GuideToc, type GuideSection } from "@/components/content/guide-toc";
import { GuideRelated } from "@/components/content/guide-related";
import { StateLocator } from "@/components/content/state-locator";
import { getStateLocation } from "@/lib/states/regions";
import { useLanguage } from "@/components/i18n/language-provider";

/*
 * Guía editorial de estado: un solo componente alimentado por `lib/states/data/<slug>.ts`.
 * La personalidad de cada estado viene de sus fotografías, su contenido y las variantes
 * de composición (`layout`), no de paletas distintas: todo sigue siendo Mrs Venezuela.
 */

const tipIcons: Record<StateTipIcon, LucideIcon> = {
  sun: Sun,
  droplets: Droplets,
  shirt: Shirt,
  mountain: Mountain,
  leaf: Leaf,
  compass: Compass,
  ship: Ship,
  car: Car,
  shield: Shield,
  camera: Camera,
  bug: Bug,
  snowflake: Snowflake,
  footprints: Footprints,
  clock: Clock3,
  map: Map,
  wind: Wind,
  umbrella: Umbrella,
  backpack: Backpack,
  users: Users,
  waves: Waves,
};

const routeIcons: Record<StateRouteMode, LucideIcon> = {
  aire: Plane,
  carretera: Car,
  mar: Ship,
  rio: Waves,
  local: Compass,
};

const pad = (index: number) => String(index + 1).padStart(2, "0");

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Photo({ photo, className = "", sizes }: { photo: StatePhoto; className?: string; sizes: string }) {
  return (
    <figure className={`relative overflow-hidden rounded-[28px] bg-[#e4ebe6] ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover"
        style={{ objectPosition: photo.position ?? "center" }}
        unoptimized={photo.src.startsWith("http")}
      />
    </figure>
  );
}

function DarkHeading({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#b9d9d6] md:text-sm">{number}</p>
      <div className="mt-4 grid items-end gap-6 lg:grid-cols-[1fr_0.72fr] lg:gap-14">
        <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.3rem,4.4vw,4.5rem)] font-semibold leading-[0.96] text-white">{title}</h2>
        <p className="text-base leading-7 text-white/72 md:text-lg md:leading-8 lg:pb-2">{description}</p>
      </div>
    </div>
  );
}

/*
 * Ficha de datos justo bajo el título. Toma los `know.facts` que ya escribe cada
 * guía —no inventa ninguno— y sube los cuatro más útiles para quien planifica,
 * que hasta ahora quedaban enterrados dentro de la sección 01.
 */
const factPriority = ["Capital", "Clima", "Altitud", "Superficie", "Región", "Paisaje"];

function PracticalFacts({ facts, slug, name }: { facts: StateFact[]; slug: string; name: string }) {
  const { dictionary } = useLanguage();

  const chosen = [...facts]
    .sort((a, b) => {
      const rank = (label: string) => {
        const index = factPriority.indexOf(label);
        return index === -1 ? factPriority.length : index;
      };
      return rank(a.label) - rank(b.label);
    })
    .slice(0, 4);

  if (chosen.length === 0) return null;

  return (
    <section className="container-page pt-10 md:pt-14">
      <div className="overflow-hidden rounded-[26px] border border-[#dce8df] bg-white shadow-[0_20px_60px_rgba(23,32,27,0.06)]">
        <div className="flex items-center gap-2 bg-[#dce8df] px-6 py-3.5">
          <Info size={16} className="text-[#0f3d2e]" aria-hidden="true" />
          <span className="text-[0.7rem] font-bold uppercase tracking-[0.16em] text-[#0f3d2e]">
            {dictionary.states.practical}
          </span>
        </div>
        <div className="grid lg:grid-cols-[1fr_17rem]">
          <dl className="m-0 grid divide-y divide-[#f0ebe0] sm:grid-cols-2 sm:divide-y-0">
            {chosen.map((fact, index) => (
              <div
                key={fact.label}
                className={`px-6 py-5 ${index % 2 === 0 ? "sm:border-r sm:border-[#f0ebe0]" : ""} ${
                  index > 1 ? "sm:border-t sm:border-[#f0ebe0]" : ""
                }`}
              >
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#9aa39d]">{fact.label}</dt>
                <dd className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold leading-tight text-[#17201b]">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="border-t border-[#f0ebe0] lg:border-l lg:border-t-0">
            <StateLocator slug={slug} name={name} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function StateEditorialGuide({ item, guide }: { item: DiscoverItem; guide: StateGuideData }) {
  const layout = guide.layout ?? {};
  const historyPhotoLeft = (layout.historyPhotoSide ?? "left") === "left";
  const cultureDark = (layout.cultureTone ?? "dark") === "dark";

  const definesWithPhotos = guide.defines.items.filter((entry) => entry.photo);
  const definesAsRows = guide.defines.items.length > 0 && definesWithPhotos.length === guide.defines.items.length;
  const definesPanorama = guide.defines.panorama ?? (definesAsRows ? null : definesWithPhotos[0]?.photo ?? null);

  /*
   * Los títulos son los mismos que se pintan en cada sección, para que el catálogo
   * de traducciones ya existente valga también para el índice.
   */
  const sections: GuideSection[] = [
    { id: "guia-01", number: "01", title: guide.know.title },
    { id: "guia-02", number: "02", title: "HISTORIA E IDENTIDAD" },
    { id: "guia-03", number: "03", title: guide.defines.title },
    { id: "guia-04", number: "04", title: "LUGARES QUE DEBES CONOCER" },
    { id: "guia-05", number: "05", title: "CULTURA Y SABORES" },
    { id: "guia-06", number: "06", title: "NATURALEZA" },
    { id: "guia-07", number: "07", title: "CÓMO LLEGAR" },
    { id: "guia-08", number: "08", title: "CONSEJOS PARA VIAJEROS" },
    { id: "guia-09", number: "09", title: "PREGUNTAS FRECUENTES" },
  ];

  return (
    <main className="bg-[#f7f4ec]">
      {/* Hero: fotografía panorámica protagonista; variante tipográfica cuando aún no existe una foto correcta */}
      {guide.hero ? (
        <section className="relative h-[24rem] md:h-[30rem] overflow-hidden text-white">
          <Image
            src={guide.hero.src}
            alt={guide.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: guide.hero.position ?? "center" }}
            unoptimized={guide.hero.src.startsWith("http")}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/24 to-black/18" />
          <div className="container-page relative z-10 flex h-[24rem] md:h-[30rem] items-end pb-12 pt-28">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">{guide.heroKicker}</p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.9] md:text-8xl">{guide.name}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86">{guide.heroTagline}</p>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative overflow-hidden bg-[#0f3d2e] text-white">
          <div className="absolute inset-y-0 right-0 w-1/2 bg-[radial-gradient(circle_at_center,rgba(185,217,214,0.16),transparent_65%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
          <div className="container-page relative z-10 flex h-[22rem] md:h-[26rem] items-end pb-20 pt-28">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b9d9d6]">{guide.heroKicker}</p>
              <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.9] md:text-8xl">{guide.name}</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/80">{guide.heroTagline}</p>
            </div>
          </div>
        </section>
      )}

      <GuideToc stateName={guide.name} region={getStateLocation(guide.slug)?.region} sections={sections} />

      <PracticalFacts facts={guide.know.facts} slug={guide.slug} name={guide.name} />

      {/* Introducción */}
      <section className="container-page py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
          <Reveal className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#247c8f] md:text-sm">{guide.intro.eyebrow}</p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-[clamp(2rem,3.4vw,3.4rem)] font-semibold leading-[1.02] text-[#17201b]">{guide.intro.title}</h2>
            <div className="mt-8 space-y-5 text-lg leading-8 text-[#59675f]">
              {guide.intro.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          {guide.intro.aside && (
            <Reveal className="lg:pt-20">
              <aside className="border-l border-[#d9d3c7] pl-7 md:pl-9">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{guide.intro.aside.label}</p>
                <p className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#0f3d2e] md:text-4xl">{guide.intro.aside.text}</p>
              </aside>
            </Reveal>
          )}
        </div>
      </section>

      {/* 01 — Conoce [estado]: texto 60 % · ficha 40 % */}
      <section id="guia-01" className="border-y border-[#e8e1d5] bg-white/75 py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <Reveal className="max-w-3xl">
            <EditorialSectionHeading number="01" title={guide.know.title} description={guide.know.description} />
            <div className="mt-9 space-y-5 text-lg leading-8 text-[#59675f]">
              {guide.know.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
          <Reveal className="lg:pt-14">
            <dl className="divide-y divide-[#ddd6ca] border-y border-[#ddd6ca]">
              {guide.know.facts.map(({ label, value }) => (
                <div key={label} className="grid gap-1 py-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f] sm:pt-1.5">{label}</dt>
                  <dd className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* 02 — Historia e identidad */}
      <section id="guia-02" className="container-page py-20 md:py-28">
        {guide.history.photo ? (
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-20">
            <Reveal className={historyPhotoLeft ? "order-1" : "order-1 lg:order-2"}>
              <Photo photo={guide.history.photo} className="aspect-[4/3] lg:aspect-[4/5]" sizes="(max-width: 1024px) 100vw, 46vw" />
            </Reveal>
            <Reveal className={`max-w-2xl ${historyPhotoLeft ? "order-2" : "order-2 lg:order-1"}`}>
              <EditorialSectionHeading number="02" title="HISTORIA E IDENTIDAD" description={guide.history.description} />
              <div className="mt-9 space-y-5 text-lg leading-8 text-[#59675f]">
                {guide.history.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>
          </div>
        ) : (
          <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <EditorialSectionHeading number="02" title="HISTORIA E IDENTIDAD" description={guide.history.description} />
            <div className="max-w-3xl space-y-5 text-lg leading-8 text-[#59675f] lg:pt-2">
              {guide.history.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        )}
      </section>

      {/* 03 — Lo que define a [estado] */}
      <section id="guia-03" className="border-y border-[#e8e1d5] bg-white/75 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <EditorialSectionHeading number="03" wide title={guide.defines.title} description={guide.defines.description} />
          </Reveal>

          {definesPanorama && (
            <Reveal className="mt-12 md:mt-14">
              <Photo photo={definesPanorama} className="aspect-[16/10] rounded-[32px] md:aspect-[21/9]" sizes="100vw" />
            </Reveal>
          )}

          {definesAsRows ? (
            <div className="mt-14 space-y-16 md:mt-20 md:space-y-24">
              {guide.defines.items.map((entry, index) => {
                const photoLeft = index % 2 === 0;
                return (
                  <Reveal key={entry.name}>
                    <article className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
                      <div className={photoLeft ? "" : "lg:order-2"}>
                        {entry.photo && <Photo photo={entry.photo} className="aspect-[4/3]" sizes="(max-width: 1024px) 100vw, 50vw" />}
                      </div>
                      <div className={`max-w-xl ${photoLeft ? "" : "lg:order-1 lg:justify-self-end"}`}>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#247c8f] md:text-sm">{pad(index)}</p>
                        <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-[0.96] text-[#17201b] md:text-5xl">{entry.name}</h3>
                        <p className="mt-6 text-lg leading-8 text-[#59675f]">{entry.text}</p>
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          ) : (
            <Reveal className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-3">
              {guide.defines.items.map((entry, index) => (
                <article key={entry.name} className="border-t border-[#ddd6ca] pt-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{pad(index)}</p>
                  <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b]">{entry.name}</h3>
                  <p className="mt-4 leading-7 text-[#59675f]">{entry.text}</p>
                </article>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* 04 — Lugares que debes conocer */}
      <section id="guia-04" className="container-page py-20 md:py-28">
        <Reveal>
          <EditorialSectionHeading number="04" wide title="LUGARES QUE DEBES CONOCER" description={guide.places.description} />
        </Reveal>
        {/*
          Solo texto y cuatro lugares: con cuatro la rejilla de dos columnas queda
          siempre completa, sin fila coja. Los demás siguen escritos en los datos.
        */}
        <Reveal className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2">
          {guide.places.items.slice(0, 4).map((place, index) => (
            <article key={place.name} className="flex gap-6 border-t border-[#ddd6ca] pt-6">
              <span className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none text-[#247c8f]">{pad(index)}</span>
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b]">{place.name}</h3>
                <p className="mt-3 leading-7 text-[#59675f]">{place.text}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </section>

      {/* 05 — Cultura y sabores */}
      <section id="guia-05" className={cultureDark ? "bg-[#173d2e] py-20 text-white md:py-28" : "border-y border-[#e8e1d5] bg-white/75 py-20 md:py-28"}>
        <div className="container-page">
          <Reveal>
            {cultureDark ? (
              <DarkHeading number="05" title="CULTURA Y SABORES" description={guide.culture.description} />
            ) : (
              <EditorialSectionHeading number="05" wide title="CULTURA Y SABORES" description={guide.culture.description} />
            )}
            {guide.culture.intro && (
              <p className={`mt-8 max-w-2xl text-lg leading-8 ${cultureDark ? "text-white/78" : "text-[#59675f]"}`}>{guide.culture.intro}</p>
            )}
          </Reveal>
          {/*
            Igual que en Naturaleza: con rejilla de dos columnas, un número impar de
            bloques dejaba el último solo y media anchura vacía. Los bloques con lista
            larga siguen ocupando todo el ancho, porque su contenido lo pide.
          */}
          <div className="mt-14 gap-14 lg:columns-2">
            {guide.culture.blocks.map((block) => (
              <Reveal
                key={block.label + (block.title ?? "")}
                className={`mb-14 break-inside-avoid ${block.items && block.items.length > 2 ? "lg:[column-span:all]" : ""}`}
              >
                <p className={`text-xs font-semibold uppercase tracking-[0.22em] ${cultureDark ? "text-[#b9d9d6]" : "text-[#247c8f]"}`}>{block.label}</p>
                {block.title && (
                  <h3 className={`mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight md:text-4xl ${cultureDark ? "text-white" : "text-[#17201b]"}`}>{block.title}</h3>
                )}
                {block.text && <p className={`mt-4 max-w-2xl text-lg leading-8 ${cultureDark ? "text-white/75" : "text-[#59675f]"}`}>{block.text}</p>}
                {block.items && (
                  <div className={`mt-8 grid gap-x-12 gap-y-8 ${block.items.length > 2 ? "md:grid-cols-2" : ""}`}>
                    {block.items.map((entry) => (
                      <div key={entry.name} className={`border-t pt-5 ${cultureDark ? "border-white/20" : "border-[#ddd6ca]"}`}>
                        <h4 className={`font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight md:text-3xl ${cultureDark ? "text-white" : "text-[#17201b]"}`}>{entry.name}</h4>
                        <p className={`mt-3 max-w-xl leading-7 ${cultureDark ? "text-white/72" : "text-[#68726d]"}`}>{entry.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 06 — Naturaleza */}
      <section id="guia-06" className="border-y border-[#dfe8e2] bg-[#eaf2ed] py-20 md:py-28">
        <div className="container-page">
          <Reveal className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-16">
            <EditorialSectionHeading number="06" title="NATURALEZA" description={guide.nature.description} />
            <p className="max-w-2xl text-lg leading-8 text-[#59675f]">{guide.nature.intro}</p>
          </Reveal>
          {guide.nature.photo && (
            <Reveal className="mt-12 md:mt-14">
              <Photo photo={guide.nature.photo} className="aspect-[16/10] rounded-[32px] md:aspect-[21/9]" sizes="100vw" />
            </Reveal>
          )}
          {/*
            Columnas de texto en vez de rejilla: 18 de las 23 guías tienen cinco
            elementos, y en una rejilla de cuatro el quinto se quedaba solo con tres
            huecos al lado. Con columnas el navegador reparte por altura y no queda
            fila coja, entren los que entren.
          */}
          <Reveal className="mt-12 gap-10 sm:columns-2">
            {guide.nature.items.map((entry) => (
              <article key={entry.name} className="mb-9 break-inside-avoid border-t border-[#c9d8cf] pt-5">
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b] md:text-[1.75rem]">{entry.name}</h3>
                <p className="mt-3 leading-7 text-[#59675f]">{entry.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 07 — Cómo llegar */}
      <section id="guia-07" className="container-page py-20 md:py-28">
        <Reveal className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <EditorialSectionHeading number="07" title="CÓMO LLEGAR" description={guide.access.description} />
            {guide.access.intro && <p className="mt-8 max-w-md text-lg leading-8 text-[#59675f]">{guide.access.intro}</p>}
          </div>
          <div className="divide-y divide-[#ddd6ca] border-y border-[#ddd6ca] lg:self-start">
            {guide.access.routes.map((route) => {
              const Icon = routeIcons[route.mode];
              return (
                <div key={route.title} className="grid gap-3 py-6 sm:grid-cols-[2.75rem_1fr] sm:gap-4">
                  <Icon size={20} className="mt-1 text-[#247c8f]" />
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b] md:text-3xl">{route.title}</h3>
                    <p className="mt-2 max-w-xl leading-7 text-[#68726d]">{route.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </section>

      {/* 08 — Consejos para viajeros */}
      <section id="guia-08" className="border-y border-[#e8e1d5] bg-white/75 py-20 md:py-28">
        <div className="container-page">
          <Reveal>
            <EditorialSectionHeading number="08" wide title="CONSEJOS PARA VIAJEROS" description={guide.tips.description} />
          </Reveal>
          <Reveal className="mt-12 grid gap-x-12 gap-y-9 md:grid-cols-2 lg:grid-cols-3">
            {guide.tips.items.map((tip) => {
              const Icon = tipIcons[tip.icon];
              return (
                <article key={tip.title} className="flex gap-5 border-t border-[#ddd6ca] pt-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eaf2ed] text-[#247c8f]">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b] md:text-[1.75rem]">{tip.title}</h3>
                    <p className="mt-2 max-w-md leading-7 text-[#68726d]">{tip.text}</p>
                  </div>
                </article>
              );
            })}
          </Reveal>
        </div>
      </section>

      {/* 09 — Preguntas frecuentes */}
      <section id="guia-09" className="container-page py-20 md:py-28">
        <Reveal className="max-w-4xl">
          <EditorialSectionHeading number="09" title="PREGUNTAS FRECUENTES" description={guide.faqs.description} />
          <div className="mt-10 divide-y divide-[#ddd6ca] border-y border-[#ddd6ca]">
            {guide.faqs.items.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95] md:text-3xl">{faq.question}</span>
                  <span className="ml-auto text-2xl leading-none text-[#247c8f] transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#68726d]">{faq.answer}</p>
              </details>
            ))}
          </div>
          {guide.credits && guide.credits.length > 0 && (
            <PhotoCredits credits={guide.credits} className="mt-8" />
          )}
          <p className="sr-only">{item.name}</p>
        </Reveal>
      </section>

      <GuideRelated slug={guide.slug} />
    </main>
  );
}
