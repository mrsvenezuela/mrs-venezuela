"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BeachDestinations } from "@/components/sections/beach-comparison";
import { MusicHelp, MusicSample } from "@/components/content/music-sample";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { PhotoCredits } from "@/components/content/photo-credits";
import {
  FoodCacao,
  FoodDishes,
  FoodGroups,
  FoodInfluences,
  FoodPantry,
  FoodRegions,
  FoodTable,
} from "@/components/content/thematic-food";
import { useLanguage } from "@/components/i18n/language-provider";
import { getThematicPage } from "@/lib/thematic";
import { getThematicTheme } from "@/lib/thematic/themes";
import type {
  ThematicItem,
  ThematicPhoto,
  ThematicSection,
  ThematicTheme,
} from "@/lib/thematic/types";

/*
 * Las cinco páginas temáticas se pintan desde aquí.
 *
 * Un solo renderizador y cinco temperaturas. No hay cinco diseños porque no hay
 * cinco sitios: hay una colección. Lo que cambia entre páginas es el color de
 * acento, el fondo —siempre a un paso del crema del sitio—, la composición de la
 * portada y, sobre todo, la proporción de las fotografías. Caribe abre el
 * horizonte en apaisado; Montaña levanta la mirada en vertical; Sabores acerca el
 * plato en cuadrado. Ese es el carácter.
 *
 * Jerarquía, igual que en /historia y sin excepciones: número pequeño, título
 * corto, entradilla de una o dos líneas, contenido. La entradilla nunca pesa más
 * que el título.
 *
 * La norma que manda sobre todas: poco texto. Aquí cuentan la fotografía, el
 * título y el espacio. Si un bloque necesita un párrafo largo, está mal resuelto.
 *
 * `data-translated` mantiene fuera al traductor de DOM: el idioma se resuelve en
 * el contenido, un archivo por idioma, para que Mucubají y hallaca no se traduzcan
 * solos.
 */

const INK = "#17201b";
const MUTED = "#68726d";
const RULE = "#e2dbcd";


export function ThematicPageView({ slug }: { slug: string }) {
  const { language } = useLanguage();
  const page = getThematicPage(language, slug);
  const theme = getThematicTheme(slug);

  return (
    <main data-translated="true" style={{ background: theme.paper, color: INK }}>
      {theme.hero === "full" ? <HeroFull page={page} theme={theme} /> : <HeroSplit page={page} theme={theme} />}

      <Index page={page} theme={theme} />

      <div className="container-page pb-6">
        {page.sections.map((section) => (
          <Section key={section.slug} section={section} theme={theme} />
        ))}
      </div>

      {page.finalPhoto ? <FinalPhoto photo={page.finalPhoto} theme={theme} /> : null}
      {page.closing ? <Closing closing={page.closing} theme={theme} /> : null}
      {page.credits?.length ? <div className="container-page py-7 md:py-9"><PhotoCredits credits={page.credits} /></div> : null}
    </main>
  );
}

/* ------------------------------------------------------------- portadas */

function BackLink({ label }: { label: string }) {
  return (
    <Link
      href="/"
      className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#0f3d2e] shadow-[0_14px_40px_rgba(23,32,27,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(23,32,27,0.12)]"
    >
      <ArrowLeft size={17} aria-hidden="true" />
      {label}
    </Link>
  );
}

/** Fotografía a sangre con el título encima. Para Caribe y Selva: abre y envuelve. */
function HeroFull({ page, theme }: { page: ReturnType<typeof getThematicPage>; theme: ThematicTheme }) {
  return (
    <section className="relative">
      <div className="relative h-[78vh] min-h-[30rem] w-full overflow-hidden" style={{ background: theme.soft }}>
        <Image
          src={page.hero.src}
          alt={page.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: page.hero.position ?? "center" }}
        />
        <div
          className="absolute inset-0"
          aria-hidden="true"
          style={{ background: `linear-gradient(to top, ${theme.deep}e6 0%, ${theme.deep}59 42%, ${theme.deep}1a 100%)` }}
        />
        <div className="container-page absolute inset-x-0 top-28">
          <BackLink label={page.backLabel} />
        </div>
        <div className="container-page absolute inset-x-0 bottom-0 pb-12 md:pb-16">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-[13ch] font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-white md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/85">{page.intro}</p>
        </div>
      </div>
    </section>
  );
}

/** Título a la izquierda y fotografía a la derecha. Para Montaña, Ciudades y Sabores. */
function HeroSplit({ page, theme }: { page: ReturnType<typeof getThematicPage>; theme: ThematicTheme }) {
  return (
    <section className="container-page pt-36">
      <BackLink label={page.backLabel} />
      <div className="mt-10 grid items-end gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        <div className="pb-2">
          <p className="text-xs font-bold uppercase tracking-[0.24em]" style={{ color: theme.accent }}>
            {page.eyebrow}
          </p>
          <h1 className="mt-4 max-w-[12ch] font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] md:text-7xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8" style={{ color: "#59675f" }}>
            {page.intro}
          </p>
        </div>
        <div
          className="relative aspect-[4/3] overflow-hidden rounded-[28px] md:aspect-[16/11]"
          style={{ background: theme.soft }}
        >
          <Image
            src={page.hero.src}
            alt={page.hero.alt}
            fill
            priority
            sizes="(max-width:1024px) 100vw, 55vw"
            className="object-cover"
            style={{ objectPosition: page.hero.position ?? "center" }}
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- índice */

/**
 * Una fila de accesos, no la caja de /historia. Seis o siete secciones cortas no
 * necesitan una lista en dos columnas: necesitan caber de un vistazo y dejar sitio
 * a las fotografías.
 */
function Index({ page, theme }: { page: ReturnType<typeof getThematicPage>; theme: ThematicTheme }) {
  const numeradas = page.sections.filter((s) => s.number);
  return (
    <nav className="container-page pt-12 md:pt-14" aria-label={page.indexLabel}>
      <p className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-[#9aa39d]">{page.indexLabel}</p>
      <ol className="mt-4 flex flex-wrap gap-x-2 gap-y-2 border-t pt-5" style={{ borderColor: RULE }}>
        {numeradas.map((section) => (
          <li key={section.slug}>
            <a
              href={`#${section.slug}`}
              className="group inline-flex items-baseline gap-2 rounded-full border bg-white/70 px-4 py-2 text-sm transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2"
              style={{ borderColor: RULE }}
            >
              <span className="text-[0.68rem] font-bold" style={{ color: theme.accent }}>
                {section.number}
              </span>
              <span className="font-semibold leading-none">{section.title}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------- secciones */

function Section({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  // La banda ocupa todo el ancho: se pinta sin la caja de sección.
  const suelta = section.layout === "band";

  return (
    <section id={section.slug} className="scroll-mt-24 border-t py-14 md:py-20" style={{ borderColor: RULE }}>
      <header className={suelta ? "" : "max-w-3xl"}>
        <div className="flex items-baseline gap-3">
          {section.number ? (
            <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-none" style={{ color: theme.accent }}>
              {section.number}
            </span>
          ) : null}
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight md:text-[2.7rem]">
            {section.title}
          </h2>
        </div>
        {section.lede ? (
          <p className="mt-4 text-lg leading-8" style={{ color: "#59675f" }}>
            {section.lede}
          </p>
        ) : null}
      </header>

      <Body section={section} theme={theme} />
    </section>
  );
}

function Body({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  switch (section.layout) {
    case "prose":
      return null; // La entradilla ya es todo el contenido: es la sección más corta.
    case "gallery":
      if (section.slug === "destinos-esenciales") return <BeachDestinations items={section.items ?? []} />;
      return <Gallery items={section.items ?? []} theme={theme} fourColumns={section.slug === "ciudades-que-cuentan-el-pais" || section.slug === "destinos-esenciales"} />;
    case "facets":
      return <Facets items={section.items ?? []} theme={theme} fourColumns={section.slug === "artesania-y-memoria"} />;
    case "feature":
      return <Feature section={section} theme={theme} />;
    case "band":
      return <Band section={section} theme={theme} />;
    case "list":
      return <List items={section.items ?? []} theme={theme} />;
    case "regions":
      return <Regions section={section} theme={theme} />;
    case "tips":
      return <Tips items={section.items ?? []} theme={theme} />;
    case "coastline":
      return <Coastline items={section.items ?? []} theme={theme} />;
    case "numbers":
      return <Numbers items={section.items ?? []} theme={theme} />;
    case "islands":
      return <Islands section={section} theme={theme} />;
    case "food-dishes":
      return <FoodDishes items={section.items ?? []} theme={theme} />;
    case "food-regions":
      return <FoodRegions items={section.items ?? []} theme={theme} />;
    case "food-cacao":
      return <FoodCacao section={section} theme={theme} />;
    case "food-groups":
      return <FoodGroups section={section} theme={theme} />;
    case "food-influences":
      return <FoodInfluences items={section.items ?? []} theme={theme} />;
    case "food-pantry":
      return <FoodPantry items={section.items ?? []} theme={theme} />;
    case "food-table":
      return <FoodTable section={section} theme={theme} />;
    default:
      return null;
  }
}

/* --------------------------------------------------------------- bloques */

function Wrap({ href, children }: { href?: string; children: React.ReactNode }) {
  return href ? (
    <Link href={href} className="group block focus-visible:outline-none">
      {children}
    </Link>
  ) : (
    <div className="group block">{children}</div>
  );
}

function Frame({ photo, ratio, theme, sizes }: { photo: ThematicPhoto; ratio: string; theme: ThematicTheme; sizes: string }) {
  return (
    <div
      className="relative overflow-hidden rounded-[20px]"
      style={{ background: theme.soft, aspectRatio: ratio.replace("/", " / ") }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
        style={{ objectPosition: photo.position ?? "center" }}
      />
    </div>
  );
}

/** El bloque protagonista: fotografías grandes, nombre y una línea. */
function Gallery({ items, theme, fourColumns = false }: { items: ThematicItem[]; theme: ThematicTheme; fourColumns?: boolean }) {
  const useFourColumns = fourColumns || items.length === 4;
  const gridColumns = useFourColumns ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";
  const imageSizes = useFourColumns
    ? "(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
    : "(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw";

  return (
    <div className={`mt-9 grid gap-x-6 gap-y-10 ${gridColumns}`}>
      {items.map((item) => (
        <Wrap href={item.href} key={item.title}>
          {item.photo ? <Frame photo={item.photo} ratio={theme.cardRatio} theme={theme} sizes={imageSizes} /> : item.photoPlaceholder ? (
            <div
              className="flex items-center justify-center rounded-[20px] border p-6 text-center"
              style={{ background: theme.soft, borderColor: RULE, aspectRatio: theme.cardRatio.replace("/", " / ") }}
            >
              <div>
                <p className="font-[family-name:var(--font-display)] text-2xl font-semibold" style={{ color: theme.deep }}>
                  {item.photoPlaceholder.title}
                </p>
                <p className="mt-3 text-xs leading-5" style={{ color: MUTED }}>{item.photoPlaceholder.text}</p>
              </div>
            </div>
          ) : null}
          <div className="mt-4">
            {item.meta ? (
              <p className="text-[0.66rem] font-bold uppercase tracking-[0.16em]" style={{ color: theme.accent }}>
                {item.meta}
              </p>
            ) : null}
            <h3 className="mt-1 flex items-center gap-1.5 font-[family-name:var(--font-display)] text-2xl font-semibold">
              {item.title}
              {item.href ? <ArrowUpRight size={15} className="opacity-40 transition group-hover:opacity-100" aria-hidden="true" /> : null}
            </h3>
            {item.text ? (
              <p className="mt-2 leading-7" style={{ color: MUTED }}>
                {item.text}
              </p>
            ) : null}
          </div>
        </Wrap>
      ))}
    </div>
  );
}

/** Conceptos sin fotografía. Para escanear: qué costa buscas, qué se llevó la mesa. */
function Facets({ items, theme, fourColumns = false }: { items: ThematicItem[]; theme: ThematicTheme; fourColumns?: boolean }) {
  const [activeTrack, setActiveTrack] = useState<ThematicItem["spotifyTrack"] | null>(null);
  const fiveMusicSamples = items.length === 5 && items.every((item) => item.spotifyTrack);
  return (
    <>
    {items.some((item) => item.spotifyTrack) ? <MusicHelp /> : null}
    <div className={`mt-8 grid gap-x-10 sm:grid-cols-2 ${fiveMusicSamples ? "lg:grid-cols-6" : fourColumns ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
      {items.map((item) => (
        <div key={item.title} className={`min-w-0 border-t py-5 ${fiveMusicSamples ? "sm:last:col-span-2 lg:col-span-2 lg:[&:nth-child(n+4)]:col-span-3" : ""}`} style={{ borderColor: RULE }}>
          {item.meta ? (
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.16em]" style={{ color: theme.accent }}>
              {item.meta}
            </p>
          ) : null}
          <h3 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold">{item.title}</h3>
          {item.text ? (
            <p className="mt-1.5 text-[0.95rem] leading-7" style={{ color: MUTED }}>
              {item.text}
            </p>
          ) : null}
          {item.spotifyTrack ? (
            <MusicSample
              sampleKey={item.spotifyTrack}
              genre={item.title}
              open={activeTrack === item.spotifyTrack}
              onToggle={() => setActiveTrack(activeTrack === item.spotifyTrack ? null : item.spotifyTrack)}
            />
          ) : null}
        </div>
      ))}
    </div>
    </>
  );
}

/** Una fotografía grande y un texto corto al lado, separado por una regla de color. */
function Feature({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  if (!section.photo) return null;
  const enlaces = section.items?.filter((i) => i.href) ?? [];
  return (
    <div className="mt-9 grid items-center gap-8 md:grid-cols-[1.08fr_0.92fr]">
      <div className="relative aspect-[16/11] overflow-hidden rounded-[26px]" style={{ background: theme.soft }}>
        <Image
          src={section.photo.src}
          alt={section.photo.alt}
          fill
          sizes="(max-width:768px) 100vw, 46vw"
          className="object-cover"
          style={{ objectPosition: section.photo.position ?? "center" }}
        />
      </div>
      <div className="border-l-2 pl-6" style={{ borderColor: theme.accent }}>
        {section.items
          ?.filter((i) => !i.href)
          .map((item) => (
            <div key={item.title} className="mb-5 last:mb-0">
              <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold">{item.title}</h3>
              {item.text ? (
                <p className="mt-1.5 leading-7" style={{ color: MUTED }}>
                  {item.text}
                </p>
              ) : null}
            </div>
          ))}
        {enlaces.map((item) => (
          <Link
            key={item.title}
            href={item.href!}
            className="mt-4 inline-flex items-center gap-1.5 font-semibold transition hover:gap-2.5"
            style={{ color: theme.accent }}
          >
            {item.title}
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Fotografía a todo el ancho. Es la respiración de la página. */
function Band({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  if (!section.photo) return null;
  return (
    <figure className="mt-9">
      <div className="relative aspect-[16/9] overflow-hidden rounded-[26px] md:aspect-[21/9]" style={{ background: theme.soft }}>
        <Image
          src={section.photo.src}
          alt={section.photo.alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: section.photo.position ?? "center" }}
        />
      </div>
      {section.items?.length ? (
        <figcaption className="mt-7 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {section.items.map((item) => (
            <div key={item.title}>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">{item.title}</h3>
              {item.text ? (
                <p className="mt-1.5 text-[0.95rem] leading-7" style={{ color: MUTED }}>
                  {item.text}
                </p>
              ) : null}
            </div>
          ))}
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Lista compacta: nombre, etiqueta y una línea. Los sabores por región viven aquí. */
function List({ items, theme }: { items: ThematicItem[]; theme: ThematicTheme }) {
  return (
    <dl className="mt-8 grid gap-x-12 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.title} className="border-t py-5" style={{ borderColor: RULE }}>
          <dt>
            <span className="font-[family-name:var(--font-display)] text-xl font-semibold">{item.title}</span>
            {item.meta ? (
              <span className="ml-3 text-[0.68rem] font-bold uppercase tracking-[0.14em]" style={{ color: theme.accent }}>
                {item.meta}
              </span>
            ) : null}
          </dt>
          {item.text ? (
            <dd className="mt-1.5 text-[0.95rem] leading-7" style={{ color: MUTED }}>
              {item.text}
            </dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

/** El cierre de cada página: un mapa y las puertas a los estados y guías que existen. */
function Regions({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  return (
    <div className="mt-9 grid gap-8 lg:grid-cols-[0.68fr_1.32fr]">
      {section.photo ? (
        <div className="relative min-h-64 overflow-hidden rounded-[24px]" style={{ background: theme.soft }}>
          <Image
            src={section.photo.src}
            alt={section.photo.alt}
            fill
            sizes="(max-width:1024px) 100vw, 30vw"
            className="object-contain p-4"
          />
        </div>
      ) : null}
      <div className="grid gap-3 sm:grid-cols-2">
        {section.items?.map((item) => (
          <Wrap href={item.href} key={item.title}>
            <div
              className="h-full rounded-[18px] border bg-white p-5 transition group-hover:-translate-y-0.5"
              style={{ borderColor: RULE }}
            >
              {item.meta ? (
                <p className="text-[0.64rem] font-bold uppercase tracking-[0.15em]" style={{ color: theme.accent }}>
                  {item.meta}
                </p>
              ) : null}
              <h3 className="mt-1 flex items-center gap-1.5 font-[family-name:var(--font-display)] text-xl font-semibold">
                {item.title}
                {item.href ? <ArrowUpRight size={14} className="opacity-45" aria-hidden="true" /> : null}
              </h3>
              {item.text ? (
                <p className="mt-1.5 text-[0.9rem] leading-6" style={{ color: MUTED }}>
                  {item.text}
                </p>
              ) : null}
            </div>
          </Wrap>
        ))}
      </div>
    </div>
  );
}

/** Consejos breves. Solo Montaña los usa: es la única página donde subir tiene riesgo. */
function Tips({ items, theme }: { items: ThematicItem[]; theme: ThematicTheme }) {
  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="rounded-[18px] p-5" style={{ background: theme.soft }}>
          <h3 className="font-semibold" style={{ color: theme.deep }}>
            {item.title}
          </h3>
          <p className="mt-1.5 text-[0.9rem] leading-6" style={{ color: "#59675f" }}>
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

/**
 * Un recorrido geográfico, no cuatro tarjetas.
 *
 * La línea con sus puntos es lo que hace el trabajo: se lee de izquierda a
 * derecha como se recorre el país. En móvil la línea se pone de canto, a la
 * izquierda, y el recorrido baja en vez de avanzar. Sin enlaces: aquí no se va
 * a ninguna parte, se entiende una costa.
 */
function Coastline({ items, theme }: { items: ThematicItem[]; theme: ThematicTheme }) {
  return (
    <div className="mt-10">
      {/* La línea, solo en pantallas anchas: es donde el recorrido se lee de un tirón. */}
      <div className="relative hidden lg:block" aria-hidden="true">
        <div className="h-px w-full" style={{ background: RULE }} />
        <div className="absolute inset-x-0 -top-[3px] flex justify-between">
          {items.map((item) => (
            <span key={item.title} className="h-[7px] w-[7px] rounded-full" style={{ background: theme.accent }} />
          ))}
        </div>
      </div>

      <ol className="grid gap-x-8 gap-y-9 lg:grid-cols-4 lg:pt-7">
        {items.map((item) => (
          <li
            key={item.title}
            className="border-t pt-5 lg:border-t-0 lg:pt-0"
            style={{ borderColor: RULE }}
          >
            {item.meta ? (
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.2em]" style={{ color: theme.accent }}>
                {item.meta}
              </p>
            ) : null}
            <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-2xl font-semibold">{item.title}</h3>
            {item.text ? (
              <p className="mt-2 text-[0.95rem] leading-7" style={{ color: MUTED }}>
                {item.text}
              </p>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * Cifras grandes. La fuente va debajo y en pequeño, pero va: sobre la longitud
 * de la costa venezolana o el número de islas circulan cifras muy distintas, y
 * publicar una sin decir de dónde sale es publicar un rumor.
 */
function Numbers({ items, theme }: { items: ThematicItem[]; theme: ThematicTheme }) {
  return (
    <dl className="mt-9 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <div key={item.title} className="border-t pt-5" style={{ borderColor: RULE }}>
          <dt
            className="font-[family-name:var(--font-display)] text-[2.4rem] font-semibold leading-none"
            style={{ color: theme.accent }}
          >
            {item.value}
          </dt>
          <dd className="mt-2.5 text-[0.7rem] font-bold uppercase tracking-[0.16em]">{item.title}</dd>
          {item.text ? (
            <dd className="mt-1.5 text-[0.9rem] leading-6" style={{ color: MUTED }}>
              {item.text}
            </dd>
          ) : null}
          {item.source ? (
            <dd className="mt-2 text-[0.72rem] leading-5" style={{ color: theme.accent }}>
              {item.source}
            </dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

/**
 * Los nombres del territorio insular, en composición tipográfica.
 *
 * Deliberadamente no son tarjetas ni enlaces: la sección no vende destinos,
 * explica que el país no se acaba en la costa. Una fotografía a un lado y los
 * nombres al otro, agrupados por a quién pertenecen.
 */
function Islands({ section, theme }: { section: ThematicSection; theme: ThematicTheme }) {
  return (
    <div className="mt-9 grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">
      {section.photo ? (
        <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]" style={{ background: theme.soft }}>
          <Image
            src={section.photo.src}
            alt={section.photo.alt}
            fill
            sizes="(max-width:1024px) 100vw, 38vw"
            className="object-cover"
            style={{ objectPosition: section.photo.position ?? "center" }}
          />
        </div>
      ) : null}

      <ul className="grid content-start gap-x-10 sm:grid-cols-2">
        {section.items?.map((item) => (
          <li key={item.title} className="border-t py-4" style={{ borderColor: RULE }}>
            <p className="font-[family-name:var(--font-display)] text-[1.35rem] font-semibold leading-tight">
              {item.title}
            </p>
            {item.meta ? (
              <p className="mt-1 text-[0.7rem] font-bold uppercase tracking-[0.14em]" style={{ color: theme.accent }}>
                {item.meta}
              </p>
            ) : null}
            {item.text ? (
              <p className="mt-1 text-[0.88rem] leading-6" style={{ color: MUTED }}>
                {item.text}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------------- cierre */

/**
 * La fotografía con la que termina la página. Va a todo el ancho y sin nada
 * encima: la frase viene después, en la banda oscura, para no taparla.
 */
function FinalPhoto({ photo, theme }: { photo: ThematicPhoto; theme: ThematicTheme }) {
  return (
    <figure className="mt-6">
      <div className="relative h-[58vh] min-h-[22rem] w-full overflow-hidden md:h-[68vh]" style={{ background: theme.soft }}>
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: photo.position ?? "center" }}
        />
      </div>
    </figure>
  );
}

function Closing({ closing, theme }: { closing: { text: string; source?: string }; theme: ThematicTheme }) {
  return (
    <section className="py-16 md:py-20" style={{ background: theme.deep }}>
      <div className="container-page">
        <p className="max-w-3xl font-[family-name:var(--font-display)] text-2xl font-semibold leading-snug text-white md:text-[2.1rem]">
          {closing.text}
        </p>
        {closing.source ? <p className="mt-4 text-sm text-white/55">{closing.source}</p> : null}
      </div>
    </section>
  );
}

/* --------------------------------------------------------------- créditos */
