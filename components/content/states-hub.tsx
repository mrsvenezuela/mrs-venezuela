"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { stateRegions, type StateRegion } from "@/lib/states/regions";
import { useLanguage } from "@/components/i18n/language-provider";

/*
 * Las tarjetas llegan ya resueltas desde el servidor (`app/estados/page.tsx`).
 * Importar aquí las guías de estado metería sus ~400 KB de texto en el bundle
 * del navegador solo para mostrar sus datos básicos y su foto.
 */
export type StateCard = {
  slug: string;
  name: string;
  capital: string;
  region: StateRegion;
  /** Foto verificada del estado; null = todavía no hay una correcta y la tarjeta queda con fondo liso. */
  image: string | null;
};

export function StatesHub({ cards }: { cards: StateCard[] }) {
  const [region, setRegion] = useState<StateRegion | null>(null);

  /*
   * Las tarjetas de intención de la portada enlazan con ?region=...; se lee del
   * navegador en vez de con useSearchParams para no sacar la página del prerender.
   */
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("region");
    if (requested && (stateRegions as readonly string[]).includes(requested)) {
      setRegion(requested as StateRegion);
    }
  }, []);
  const { dictionary } = useLanguage();
  const copy = dictionary.states;

  const visible = useMemo(
    () => (region ? cards.filter((card) => card.region === region) : cards),
    [cards, region],
  );

  const filters: Array<{ label: string; value: StateRegion | null }> = [
    { label: copy.all, value: null },
    ...stateRegions.map((entry) => ({ label: entry, value: entry })),
  ];

  return (
    <main className="bg-[#f7f4ec]">
      <section className="container-page pt-36">
        <Link
          href="/"
          className="inline-flex h-12 items-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-[#0f3d2e] shadow-[0_14px_40px_rgba(23,32,27,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(23,32,27,0.12)]"
        >
          <ArrowLeft size={17} />
          {copy.back}
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-[0.6fr_0.4fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#247c8f]">{copy.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.96] text-[#17201b] md:text-7xl">
              {copy.title}
            </h1>
          </div>
          <p className="max-w-md text-lg leading-8 text-[#4d5b54]">{copy.intro}</p>
        </div>

        <div className="mt-10 rounded-[30px] border border-[#e6dfd2] bg-white p-5 shadow-[0_20px_60px_rgba(23,32,27,0.06)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <span className="shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-[#9aa39d]">
              {copy.region}
            </span>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const isActive = filter.value === region;

                return (
                  <button
                    key={filter.label}
                    type="button"
                    onClick={() => setRegion(filter.value)}
                    aria-pressed={isActive}
                    className={`h-11 rounded-full border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] focus-visible:ring-offset-2 ${
                      isActive
                        ? "border-[#0f3d2e] bg-[#0f3d2e] text-white"
                        : "border-[#e6dfd2] bg-white text-[#405047] hover:border-[#247c8f] hover:text-[#0f3d2e]"
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <p aria-live="polite" className="mt-6 text-sm text-[#68726d]">
          <span className="font-bold text-[#17201b]">
            {visible.length} {copy.count}
          </span>
          {region ? ` · ${region}` : null}
        </p>
      </section>

      <section className="container-page pb-24 pt-8">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((card) => (
            <Link href={`/estado/${card.slug}`} key={card.slug} className="group">
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-[#e6dfd2] bg-white shadow-[0_20px_60px_rgba(23,32,27,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,32,27,0.11)]">
                <div className={`relative h-44 overflow-hidden ${card.image ? "bg-[#dce8df]" : "bg-[#0f3d2e]"}`}>
                  {/* Decorativa: el nombre ya está en el título. Sin foto verificada, fondo liso, nunca la de otro estado. */}
                  {card.image ? (
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 380px"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-[#0f3d2e]">
                    <MapPin size={12} />
                    {card.region}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2.5 p-6">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none text-[#17201b]">
                      {card.name}
                    </h2>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[#247c8f]">
                    {copy.capital} · {card.capital}
                  </p>

                  <div className="mt-auto flex items-center gap-2 pt-4 text-sm font-semibold text-[#0f3d2e]">
                    {copy.open}
                    <ArrowUpRight size={16} className="transition group-hover:rotate-12" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
