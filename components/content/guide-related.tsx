"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { states } from "@/lib/content";
import { getStateLocation } from "@/lib/states/regions";
import { useLanguage } from "@/components/i18n/language-provider";

/*
 * Cierre de las guías de estado. Antes terminaban en el FAQ y no llevaban a ningún
 * sitio: era el punto de mayor disposición a seguir leyendo y no había dónde ir.
 * Solo se usan datos ya existentes (nombre, capital, región), nunca texto inventado.
 */
export function GuideRelated({ slug }: { slug: string }) {
  const { dictionary } = useLanguage();
  const copy = dictionary.states;
  const location = getStateLocation(slug);

  const siblings = states
    .filter((state) => state.slug !== slug && getStateLocation(state.slug)?.region === location?.region)
    .sort((a, b) => a.name.localeCompare(b.name, "es"));

  return (
    <section className="bg-[#0f3d2e] py-16 text-[#f7f1e3] md:py-24">
      <div className="container-page">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f7f1e3]/60 md:text-sm">
              {copy.keepExploring}
            </p>
            {location ? (
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none md:text-6xl">
                {copy.otherStatesIn} {location.region}
              </h2>
            ) : (
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-none md:text-6xl">
                {copy.title}
              </h2>
            )}
          </div>
          <Link
            href="/estados"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-[#f7f1e3] px-6 text-sm font-semibold text-[#0f3d2e] transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c3a36a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f3d2e]"
          >
            {copy.viewAll}
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>

        {siblings.length > 0 ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siblings.map((state) => {
              const capital = getStateLocation(state.slug)?.capital;

              return (
                <Link
                  key={state.slug}
                  href={`/estado/${state.slug}`}
                  className="group flex min-h-[8.5rem] flex-col justify-between rounded-[22px] border border-[#f7f1e3]/20 p-5 transition hover:border-[#c3a36a] hover:bg-[#f7f1e3]/5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none">{state.name}</span>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-[#c3a36a] transition group-hover:rotate-12"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-4 space-y-1">
                    {capital ? (
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c3a36a]">{capital}</p>
                    ) : null}
                  </div>
                </Link>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
