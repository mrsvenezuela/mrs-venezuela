"use client";

import Image from "next/image";
import { PhotoCredits } from "@/components/content/photo-credits";
import Link from "next/link";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { getHistoryContent, type HistoryChapter, type HistoryFacts, type HistoryPhoto } from "@/lib/history";
import { useLanguage } from "@/components/i18n/language-provider";

/*
 * La historia de Venezuela en una sola página.
 *
 * Diez capítulos numerados —el décimo es el cierre, sobre fondo oscuro— y, entre
 * el noveno y el décimo, una pausa sin número: «Venezuela en datos». La página
 * empieza con los pueblos que habitaban el territorio y termina con una
 * fotografía de venezolanos y una frase. No hay listas ni anexos detrás.
 *
 * Jerarquía, en este orden y sin excepciones: número pequeño, título grande,
 * período pequeño, entradilla secundaria, contenido. La entradilla nunca puede
 * pesar más que el título.
 *
 * El ritmo lo dan los bloques: un capítulo puede abrir con fechas, seguir con
 * bloques conceptuales, respirar con una foto y cerrar con prosa. Lo que no
 * puede es repetir diez veces título y párrafo largo.
 *
 * El color se usa con cuentagotas y siempre con la paleta del sitio: dorado en
 * los números, terracota en las fechas y las etiquetas, verde profundo en las
 * cifras, una banda crema en la pausa y una sola banda oscura al final.
 *
 * `data-translated` le dice al traductor de DOM que no toque esta página: aquí
 * el idioma se resuelve en el contenido, no reescribiendo nodos de texto.
 */

const GOLD = "#c3a36a";
const TERRACOTTA = "#a4614a";

const num = (index: number) => String(index + 1).padStart(2, "0");

export function HistoryIndex() {
  const { language } = useLanguage();
  const content = getHistoryContent(language);
  const photos = [...content.chapters, content.closing].flatMap((chapter) =>
    [chapter.portrait, chapter.photo].filter((photo): photo is HistoryPhoto => Boolean(photo)),
  );
  if (content.finalPhoto) photos.push(content.finalPhoto);
  const credits = Array.from(new Map(photos.map((photo) => [photo.credit.href, photo.credit])).values());

  return (
    <main className="bg-[#f7f4ec]" data-translated="true">
      {/* ------------------------------------------------------- portada */}
      <section className="container-page pt-36">
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#0f3d2e] shadow-[0_14px_40px_rgba(23,32,27,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(23,32,27,0.12)]"
        >
          <ArrowLeft size={17} aria-hidden="true" />
          {content.backLabel}
        </Link>

        <div className="mt-10 grid items-end gap-8 lg:grid-cols-[1fr_0.72fr] lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#247c8f]">{content.eyebrow}</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.96] text-[#17201b] md:text-7xl">
              {content.title}
            </h1>
          </div>
          <p className="text-lg leading-8 text-[#4d5b54] lg:pb-2">{content.intro}</p>
        </div>

        {/* Orientación, no navegación: solo marca la distancia entre extremos. */}
        <ol className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-[#e3dacb] pt-6">
          {content.introTimeline.map((year, index) => (
            <li key={year} className="flex items-center gap-3">
              {index > 0 ? <span className="h-px w-5 bg-[#ddd0b8]" aria-hidden="true" /> : null}
              <span className="text-[0.78rem] font-semibold tracking-[0.08em]" style={{ color: TERRACOTTA }}>
                {year}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* --------------------------------------------------------- índice */}
      <section id="indice" className="container-page scroll-mt-24 pt-12">
        <div className="rounded-[32px] border border-[#e6dfd2] bg-white p-7 shadow-[0_24px_70px_rgba(23,32,27,0.06)] md:p-10">
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#9aa39d]">{content.indexLabel}</p>

          {/* Dos columnas de cinco: diez entradas llenan la rejilla exacta, sin huecos.
              Se llena por columnas para que los números se lean de arriba abajo. La
              pausa de datos no entra aquí: la navegación es de 01 a 10. */}
          <ol className="mt-7 grid gap-x-12 lg:grid-flow-col lg:grid-cols-2 lg:grid-rows-5">
            {[...content.chapters, content.closing].map((chapter, index) => (
              <li key={chapter.slug} className="border-t border-[#eee7db] first:border-t-0 lg:[&:nth-child(6)]:border-t-0">
                <IndexLink slug={chapter.slug} title={chapter.title} period={chapter.period} number={num(index)} />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------------ capítulos */}
      <div className="container-page pb-4 pt-4">
        {content.chapters.map((chapter, index) => (
          <Chapter key={chapter.slug} chapter={chapter} number={num(index)} topLabel={content.topLabel} />
        ))}
      </div>

      <Facts facts={content.facts} />
      <Closing chapter={content.closing} number={num(content.chapters.length)} photo={content.finalPhoto} />
      <div className="container-page py-7 md:py-9">
        <PhotoCredits credits={credits} />
      </div>
    </main>
  );
}

/* ------------------------------------------------------------------- */

function IndexLink({ slug, title, period, number }: { slug: string; title: string; period: string; number: string }) {
  return (
    <a
      href={`#${slug}`}
      className="group flex items-baseline gap-4 py-3.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f]"
    >
      <span className="w-6 shrink-0 text-[0.72rem] font-bold" style={{ color: GOLD }}>
        {number}
      </span>
      <span className="min-w-0 flex-1 font-semibold leading-snug text-[#17201b] transition group-hover:text-[#247c8f]">
        {title}
      </span>
      <span className="shrink-0 text-[0.75rem] text-[#9aa39d]">{period}</span>
    </a>
  );
}

function Chapter({ chapter, number, topLabel }: { chapter: HistoryChapter; number: string; topLabel: string }) {
  return (
    <section id={chapter.slug} className="scroll-mt-24 border-t border-[#ddd6ca] py-14 md:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none" style={{ color: GOLD }}>
            {number}
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b] md:text-[2.6rem]">
            {chapter.title}
          </h2>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em]" style={{ color: TERRACOTTA }}>
            {chapter.period}
          </p>

          <a
            href="#indice"
            className="mt-6 hidden items-center gap-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-[#9aa39d] transition hover:text-[#247c8f] lg:inline-flex"
          >
            <ArrowUp size={13} aria-hidden="true" />
            {topLabel}
          </a>
        </div>

        <div>
          <p className="mb-8 text-lg font-medium leading-8 text-[#46564d] md:text-xl md:leading-9">{chapter.lede}</p>
          <ChapterBody chapter={chapter} />
        </div>
      </div>
    </section>
  );
}

/** El orden de los bloques es siempre el mismo; cada capítulo usa los suyos. */
function ChapterBody({
  chapter,
  dark = false,
  hideQuote = false,
}: {
  chapter: HistoryChapter;
  dark?: boolean;
  hideQuote?: boolean;
}) {
  const cuerpo = (
    <>
      {chapter.timeline ? <Timeline items={chapter.timeline} dark={dark} /> : null}
      {chapter.paragraphs.length ? <Prose paragraphs={chapter.paragraphs} dark={dark} /> : null}
      {chapter.parts ? <Parts items={chapter.parts} dark={dark} /> : null}
    </>
  );

  return (
    <>
      {/* Con retrato, el capítulo se abre en dos: la imagen a un lado y los bloques al otro. */}
      {chapter.portrait ? (
        <div className="grid gap-8 lg:grid-cols-[0.44fr_1fr] lg:gap-10">
          <Portrait photo={chapter.portrait} />
          <div>{cuerpo}</div>
        </div>
      ) : (
        cuerpo
      )}

      {chapter.photo ? <Photo photo={chapter.photo} dark={dark} /> : null}
      {chapter.figures ? <Figures items={chapter.figures} dark={dark} /> : null}
      {chapter.bars ? <Bars items={chapter.bars} source={chapter.barsSource} dark={dark} /> : null}
      {chapter.entries ? <Entries items={chapter.entries} /> : null}
      {chapter.tags ? <Tags tags={chapter.tags} dark={dark} /> : null}
      {chapter.outro ? <Prose paragraphs={chapter.outro} dark={dark} className="mt-8" /> : null}
      {chapter.quote && !hideQuote ? <Quote quote={chapter.quote} dark={dark} /> : null}
    </>
  );
}

function Prose({ paragraphs, dark, className = "" }: { paragraphs: string[]; dark: boolean; className?: string }) {
  return (
    <div
      className={`space-y-5 text-[1.0625rem] leading-8 md:text-lg ${dark ? "text-[#c3d0c8]" : "text-[#59675f]"} ${className}`}
    >
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)}>{paragraph}</p>
      ))}
    </div>
  );
}

/* --------------------------------------------------------- línea de tiempo */

function Timeline({ items, dark }: { items: NonNullable<HistoryChapter["timeline"]>; dark: boolean }) {
  return (
    <ol className="mb-10 grid gap-x-6 gap-y-7 [grid-template-columns:repeat(auto-fit,minmax(8.5rem,1fr))]">
      {items.map((item) => (
        <li key={item.year} className="border-t pt-4" style={{ borderColor: dark ? "rgba(255,255,255,0.16)" : "#e3dacb" }}>
          <span className="mb-3 block h-1.5 w-1.5 rounded-full" style={{ backgroundColor: GOLD }} aria-hidden="true" />
          <p
            className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-none"
            style={{ color: dark ? "#f2ede2" : "#0f3d2e" }}
          >
            {item.year}
          </p>
          <p className={`mt-2 text-sm leading-6 ${dark ? "text-[#a9bcb1]" : "text-[#7d8a83]"}`}>{item.text}</p>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------- bloques con etiqueta */

function Parts({ items, dark }: { items: NonNullable<HistoryChapter["parts"]>; dark: boolean }) {
  return (
    <div className="mt-10 first:mt-0">
      {items.map((item, index) => (
        <div
          key={item.label}
          className={index === 0 ? "pb-6" : "border-t pb-6 pt-6 last:pb-0"}
          style={index === 0 ? undefined : { borderColor: dark ? "rgba(255,255,255,0.14)" : "#e6dfd2" }}
        >
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em]" style={{ color: dark ? GOLD : TERRACOTTA }}>
            {item.label}
          </p>
          <p className={`mt-3 text-[1.0625rem] leading-8 md:text-lg ${dark ? "text-[#c3d0c8]" : "text-[#59675f]"}`}>
            {item.text}
          </p>
          {item.note ? <Note note={item.note} dark={dark} /> : null}
        </div>
      ))}
    </div>
  );
}

/**
 * El recuadro que aclara un concepto sin abrir un capítulo nuevo.
 *
 * Se lee en dos segundos y en este orden: qué fue, cuándo, qué lo formó y una
 * línea que ata las dos cosas. Solo debajo, y en letra pequeña, la explicación.
 * Si alguna vez necesita más de tres líneas de texto es que el concepto pide su
 * propio capítulo, no un recuadro más grande.
 */
function Note({ note, dark }: { note: NonNullable<NonNullable<HistoryChapter["parts"]>[number]["note"]>; dark: boolean }) {
  return (
    <div
      className="mt-6 rounded-[18px] border px-6 py-5"
      style={{
        borderColor: dark ? "rgba(255,255,255,0.16)" : "#e6dfd2",
        background: dark ? "rgba(255,255,255,0.04)" : "#fbf8f1",
      }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
        <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em]" style={{ color: dark ? GOLD : TERRACOTTA }}>
          {note.title}
        </p>
        <p
          className="font-[family-name:var(--font-display)] text-lg font-semibold leading-none"
          style={{ color: dark ? GOLD : "#0f3d2e" }}
        >
          {note.period}
        </p>
      </div>

      {/* Los nombres, que es lo que de verdad se busca aquí. */}
      <ul
        className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 border-t pt-4"
        style={{ borderColor: dark ? "rgba(255,255,255,0.14)" : "#eee7db" }}
      >
        {/* El separador va DETRÁS de cada nombre, no delante: si la fila se parte
            en dos líneas —y en móvil se parte— la segunda empieza por un nombre
            y no por una barra suelta. */}
        {note.items.map((name, index) => (
          <li key={name} className="flex items-center gap-3">
            <span
              className={`text-[0.82rem] font-semibold uppercase tracking-[0.1em] ${dark ? "text-white" : "text-[#17201b]"}`}
            >
              {name}
            </span>
            {index < note.items.length - 1 ? (
              <span
                className="h-3 w-px"
                aria-hidden="true"
                style={{ background: dark ? "rgba(255,255,255,0.22)" : "#ddd0b8" }}
              />
            ) : null}
          </li>
        ))}
      </ul>

      <p className="mt-3 text-[0.9rem] font-semibold" style={{ color: dark ? GOLD : TERRACOTTA }}>
        {note.caption}
      </p>
      <p className={`mt-2 text-[0.95rem] leading-7 ${dark ? "text-[#a9bcb1]" : "text-[#68726d]"}`}>{note.text}</p>
    </div>
  );
}

/* ----------------------------------------------------------- fotografía */



/** Retrato vertical, en su propia columna. */
function Portrait({ photo }: { photo: HistoryPhoto }) {
  return (
    <figure>
      <div className="relative overflow-hidden rounded-[20px] bg-[#e9e2d5]" style={{ aspectRatio: photo.ratio.replace("/", " / ") }}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-cover" />
      </div>
      <figcaption className="mt-3">
        {photo.caption ? (
          <span className="block font-[family-name:var(--font-display)] text-xl leading-tight text-[#17201b]">
            {photo.caption}
          </span>
        ) : null}

      </figcaption>
    </figure>
  );
}

/** Fotografía ancha dentro de un capítulo. */
function Photo({ photo, dark }: { photo: HistoryPhoto; dark: boolean }) {
  return (
    <figure className="mt-10">
      <div className="relative overflow-hidden rounded-[24px] bg-[#e9e2d5]" style={{ aspectRatio: photo.ratio.replace("/", " / ") }}>
        <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
      </div>
      <figcaption className="mt-3">
        {photo.caption ? (
          <span className={`block text-sm leading-6 ${dark ? "text-[#a9bcb1]" : "text-[#68726d]"}`}>{photo.caption}</span>
        ) : null}

      </figcaption>
    </figure>
  );
}

/* -------------------------------------------------------- cifras y barras */

function Figures({ items, dark }: { items: NonNullable<HistoryChapter["figures"]>; dark: boolean }) {
  return (
    <dl
      className="mt-10 grid gap-x-8 gap-y-7 border-t pt-8 sm:grid-cols-2 lg:grid-cols-3"
      style={{ borderColor: dark ? "rgba(255,255,255,0.16)" : "#e6dfd2" }}
    >
      {items.map((item) => (
        <div key={item.label}>
          <dt
            className="font-[family-name:var(--font-display)] text-[2rem] font-semibold leading-none"
            style={{ color: dark ? GOLD : "#0f3d2e" }}
          >
            {item.value}
          </dt>
          <dd className={`mt-2 text-sm leading-6 ${dark ? "text-[#a9bcb1]" : "text-[#68726d]"}`}>{item.label}</dd>
          {/* Una cifra sin nombres no dice nada: el 6 solo se entiende leyéndolos. */}
          {item.detail ? (
            <dd
              className={`mt-2 text-[0.8rem] font-semibold uppercase leading-6 tracking-[0.06em] ${
                dark ? "text-[#c3d0c8]" : "text-[#4d5b54]"
              }`}
            >
              {item.detail}
            </dd>
          ) : null}
        </div>
      ))}
    </dl>
  );
}

function Bars({
  items,
  source,
  dark,
}: {
  items: NonNullable<HistoryChapter["bars"]>;
  source?: string;
  dark: boolean;
}) {
  return (
    <div className="mt-10 border-t pt-8" style={{ borderColor: dark ? "rgba(255,255,255,0.16)" : "#e6dfd2" }}>
      <ul className="space-y-5">
        {items.map((item) => (
          <li key={item.label}>
            <div className="flex items-baseline justify-between gap-4">
              <span className={`font-semibold ${dark ? "text-[#f2ede2]" : "text-[#17201b]"}`}>{item.label}</span>
              <span
                className="font-[family-name:var(--font-display)] text-xl font-semibold leading-none"
                style={{ color: dark ? GOLD : "#0f3d2e" }}
              >
                {item.value}
              </span>
            </div>
            <div
              className="mt-2 h-2 w-full overflow-hidden rounded-full"
              style={{ backgroundColor: dark ? "rgba(255,255,255,0.14)" : "#e9e2d5" }}
            >
              <div
                className="h-full rounded-full"
                style={{ width: `${Math.max(item.percent, 0.6)}%`, backgroundColor: dark ? GOLD : "#247c8f" }}
                aria-hidden="true"
              />
            </div>
          </li>
        ))}
      </ul>
      {source ? (
        <p className={`mt-4 text-[0.72rem] leading-5 ${dark ? "text-[#8aa094]" : "text-[#a3aaa4]"}`}>{source}</p>
      ) : null}
    </div>
  );
}

/* ------------------------- origen · período · huella · dos o tres líneas */

function Entries({ items }: { items: NonNullable<HistoryChapter["entries"]> }) {
  return (
    <dl className="mt-10">
      {items.map((item) => (
        <div key={item.term} className="grid gap-x-8 gap-y-2 border-t border-[#e6dfd2] py-6 md:grid-cols-[0.34fr_1fr]">
          <div>
            <dt className="font-semibold leading-snug text-[#17201b]">{item.term}</dt>
            <p className="mt-1 text-[0.72rem] font-bold uppercase tracking-[0.14em]" style={{ color: TERRACOTTA }}>
              {item.when}
            </p>
          </div>
          <dd>
            <p className="text-[0.8rem] font-semibold uppercase tracking-[0.1em] text-[#9aa39d]">{item.tags}</p>
            <p className="mt-2 leading-7 text-[#59675f]">{item.detail}</p>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/* ------------------------------------------------------------ etiquetas */

function Tags({ tags, dark }: { tags: NonNullable<HistoryChapter["tags"]>; dark: boolean }) {
  return (
    <div className="mt-10 border-t pt-8" style={{ borderColor: dark ? "rgba(255,255,255,0.16)" : "#e6dfd2" }}>
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em]" style={{ color: dark ? GOLD : TERRACOTTA }}>
        {tags.title}
      </p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.items.map((item) => (
          <li
            key={item}
            className={`rounded-full border px-4 py-1.5 text-[0.85rem] ${dark ? "text-[#dbe5de]" : "text-[#4a5a51]"}`}
            style={{ borderColor: dark ? "rgba(255,255,255,0.2)" : "#e0d6c3" }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------------------- cita */

function Quote({ quote, dark }: { quote: NonNullable<HistoryChapter["quote"]>; dark: boolean }) {
  return (
    <figure className="mt-10 border-l-2 pl-6" style={{ borderColor: dark ? GOLD : TERRACOTTA }}>
      <blockquote
        className={`font-[family-name:var(--font-display)] text-2xl leading-[1.45] ${dark ? "text-[#f2ede2]" : "text-[#17201b]"}`}
      >
        {quote.text}
      </blockquote>
      {quote.author ? (
        <figcaption className={`mt-3 text-sm ${dark ? "text-[#9fb3a7]" : "text-[#8d968f]"}`}>{quote.author}</figcaption>
      ) : null}
    </figure>
  );
}

/* ------------------------------------------------- Venezuela en datos */

function Facts({ facts }: { facts: HistoryFacts }) {
  return (
    <section id="venezuela-en-datos" className="scroll-mt-24 bg-[#f1ece0] py-16 md:py-20">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em]" style={{ color: TERRACOTTA }}>
              {facts.label}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[#17201b] md:text-[2.4rem]">
              {facts.title}
            </h2>
          </div>

          <div>
            <p className="text-lg font-medium leading-8 text-[#46564d]">{facts.lede}</p>

            {/* Sin tarjetas: tipografía, líneas finas y aire. */}
            <dl className="mt-8 grid gap-x-12 sm:grid-cols-2">
              {facts.items.map((item, index) => (
                <div
                  key={item.label}
                  className={`border-t border-[#e0d6c3] py-6 ${index < 2 ? "sm:first:border-t-0 sm:[&:nth-child(2)]:border-t-0" : ""}`}
                >
                  <dt className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#9aa39d]">{item.label}</dt>
                  <dd>
                    <p className="mt-2 font-[family-name:var(--font-display)] text-[1.85rem] font-semibold leading-tight text-[#0f3d2e]">
                      {item.value}
                    </p>
                    {item.detail ? <p className="mt-1.5 text-sm leading-6 text-[#68726d]">{item.detail}</p> : null}
                    <p className="mt-2 text-[0.72rem] leading-5" style={{ color: TERRACOTTA }}>
                      {item.source}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ cierre editorial */

function Closing({ chapter, number, photo }: { chapter: HistoryChapter; number: string; photo?: HistoryPhoto }) {
  return (
    <section id={chapter.slug} className="scroll-mt-24 bg-[#0f3d2e] py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.34fr_1fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="font-[family-name:var(--font-display)] text-4xl font-semibold leading-none" style={{ color: GOLD }}>
              {number}
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[#f7f4ec] md:text-[3rem]">
              {chapter.title}
            </h2>
            <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-[#8aa094]">{chapter.period}</p>
          </div>

          <div>
            <p className="mb-8 text-xl font-medium leading-9 text-[#dbe5de] md:text-2xl">{chapter.lede}</p>
            <ChapterBody chapter={chapter} dark hideQuote />
          </div>
        </div>
      </div>

      {/* La fotografía final ocupa todo el ancho editorial: es el último golpe de vista. */}
      {photo ? (
        <figure className="container-page mt-16 md:mt-20">
          <div className="relative overflow-hidden rounded-[24px] bg-[#0b2f23]" style={{ aspectRatio: photo.ratio.replace("/", " / ") }}>
            <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className="object-cover" priority={false} />
          </div>
          <figcaption className="mt-3">
            {photo.caption ? <span className="block text-sm leading-6 text-[#a9bcb1]">{photo.caption}</span> : null}

          </figcaption>
        </figure>
      ) : null}

      {chapter.quote ? (
        <div className="container-page mt-16 md:mt-20">
          <p className="max-w-3xl font-[family-name:var(--font-display)] text-3xl leading-[1.3] text-[#f7f4ec] md:text-[2.75rem]">
            {chapter.quote.text}
          </p>
        </div>
      ) : null}
    </section>
  );
}
