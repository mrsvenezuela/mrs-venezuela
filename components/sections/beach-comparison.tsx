"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Columns2, Palmtree, Plus, X } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import { beachComparisonCopy, comparisonSlugs, type ComparisonSlug } from "@/lib/home/beach-comparison";
import { beachSelectionCopy, toggleBeachSelection } from "@/lib/home/beach-selection";
import type { ThematicItem } from "@/lib/thematic/types";

const focus = "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#247c8f]";

/** One destination catalogue; comparison is a compact, on-demand detail view. */
export function BeachDestinations({ items }: { items: ThematicItem[] }) {
  const { language } = useLanguage();
  const copy = beachComparisonCopy[language];
  const ui = beachSelectionCopy[language];
  const [selected, setSelected] = useState<ComparisonSlug[]>([]);
  const [open, setOpen] = useState(false);
  const openButton = useRef<HTMLButtonElement>(null);
  const destinations = items.flatMap(item => {
    const slug = comparisonSlugs.find(value => item.href === `/playa/${value}`);
    return slug && item.photo ? [{ ...item, slug, photo: item.photo }] : [];
  });
  const chosen = selected.flatMap(slug => destinations.filter(item => item.slug === slug));

  function toggle(slug: ComparisonSlug) {
    setSelected(previous => toggleBeachSelection(previous, slug));
    setOpen(false);
  }
  function close() {
    setOpen(false);
    openButton.current?.focus();
  }

  return (
    <div className="mt-8" data-translated="true">
      <span id="compara-playas" className="block scroll-mt-28" aria-hidden="true" />
      <div className="mb-6 rounded-2xl border border-[#dce5de] bg-[#edf2eb] p-4 md:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-start gap-3">
            <Columns2 size={21} className="mt-0.5 shrink-0 text-[#0f3d2e]" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold text-[#0f3d2e]">{ui.hint}</p>
              <p id="beach-selection-status" role="status" aria-live="polite" aria-atomic="true" className="mt-1 text-sm leading-6 text-[#526358]">
                {selected.length === 0 ? "0 / 2" : `${selected.length} / 2 · ${selected.length === 1 ? ui.one : ui.ready}`}
              </p>
            </div>
          </div>
          <button ref={openButton} type="button" disabled={chosen.length !== 2} aria-expanded={open} aria-controls="beach-comparison-panel" onClick={() => setOpen(value => !value)} className={`inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0f3d2e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#205541] disabled:cursor-not-allowed disabled:bg-[#d5ddd5] disabled:text-[#566258] ${focus}`}>
            {open ? ui.close : ui.open}<ArrowRight size={16} aria-hidden="true" />
          </button>
        </div>
        {chosen.length > 0 && <div className="mt-4 flex flex-wrap items-center gap-2">
          {chosen.map(item => <button type="button" key={item.slug} onClick={() => toggle(item.slug)} aria-label={`${ui.remove}: ${item.title}`} className={`inline-flex min-h-11 items-center gap-2 rounded-full border border-[#c9d7cd] bg-white px-4 py-2 text-sm font-medium text-[#0f3d2e] ${focus}`}>{item.title}<X size={14} aria-hidden="true" /></button>)}
          <button type="button" onClick={() => { setSelected([]); setOpen(false); }} className={`min-h-11 rounded px-3 text-sm text-[#526358] underline underline-offset-4 ${focus}`}>{ui.clear}</button>
          {chosen.length === 2 && <p className="w-full text-xs leading-5 text-[#526358]">{ui.limit}</p>}
        </div>}
      </div>

      {open && chosen.length === 2 && <div id="beach-comparison-panel" role="region" aria-labelledby="beach-comparison-title" onKeyDown={event => { if (event.key === "Escape") close(); }} className="mb-8 scroll-mt-28 overflow-hidden rounded-2xl border border-[#cad9cf] bg-white shadow-[0_12px_35px_rgba(23,32,27,0.05)]">
        <div className="flex items-start justify-between gap-3 bg-[#0f3d2e] p-4 text-white md:p-6">
          <h3 id="beach-comparison-title" tabIndex={-1} ref={element => { if (element) { element.focus({ preventScroll: true }); element.closest('[role="region"]')?.scrollIntoView({ block: "start", behavior: "instant" }); } }} className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight outline-none md:text-3xl">{ui.title}</h3>
          <button type="button" onClick={close} aria-label={ui.close} className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-white"><X size={20} aria-hidden="true" /></button>
        </div>
        <table className="w-full table-fixed border-collapse text-left text-sm">
          <caption className="sr-only">{chosen.map(item => item.title).join(" / ")}</caption>
          <thead><tr>{chosen.map(item => <th key={item.slug} scope="col" className="w-1/2 break-words bg-[#f1f5ef] p-4 font-[family-name:var(--font-display)] text-xl font-semibold text-[#0f3d2e] md:px-6 md:text-2xl">{item.title}</th>)}</tr></thead>
          <tbody>{copy.labels.map((label, row) => <tr key={label} className="border-t border-[#e3e9e2]">{chosen.map(item => <td key={item.slug} className="break-words p-4 align-top leading-6 md:px-6"><span className="mb-1 block text-xs font-semibold text-[#0f3d2e]">{label}</span><span className="text-[#526358]">{copy.facts[item.slug][row]}</span></td>)}</tr>)}</tbody>
          <tfoot><tr>{chosen.map(item => <td key={item.slug} className="p-4 align-top md:px-6"><Link href={item.href!} aria-label={`${copy.guide}: ${item.title}`} className={`inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-[#0f3d2e] ${focus}`}>{copy.guide}<ArrowRight size={16} aria-hidden="true" className="shrink-0" /></Link></td>)}</tr></tfoot>
        </table>
        <p className="border-t border-[#e3e9e2] px-4 py-4 text-xs leading-6 text-[#68726d] md:px-6">{copy.note}</p>
      </div>}

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {destinations.map(item => {
          const active = selected.includes(item.slug);
          const disabled = selected.length === 2 && !active;
          return <article key={item.slug} className={`flex min-w-0 flex-col overflow-hidden rounded-2xl border bg-white transition ${active ? "border-[#0f3d2e] ring-1 ring-[#0f3d2e]" : "border-[#e2e5dc]"}`}>
            <Link href={item.href!} aria-label={`${copy.guide}: ${item.title}`} className={`group relative block aspect-[4/3] overflow-hidden ${focus}`}>
              <Image src={item.photo.src} alt={item.photo.alt} fill sizes="(min-width:1024px) 280px, (min-width:640px) 48vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105 motion-reduce:transition-none" style={{ objectPosition: item.photo.position ?? "center" }} />
              {active && <span className="absolute right-3 top-3 rounded-full bg-[#0f3d2e] p-2 text-white"><Check size={16} aria-hidden="true" /></span>}
            </Link>
            <div className="flex flex-1 flex-col p-4 md:p-5">
              <p className="text-[0.65rem] font-semibold uppercase leading-5 tracking-wider text-[#247c8f]">{item.meta}</p>
              <h3 className="mt-2 font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#68726d]">{item.text}</p>
              <div className="mt-auto flex flex-wrap items-center justify-between gap-x-3 gap-y-2 pt-5">
                <Link href={item.href!} aria-label={`${copy.guide}: ${item.title}`} className={`inline-flex min-h-11 items-center gap-1.5 rounded text-sm font-semibold text-[#0f3d2e] ${focus}`}>{copy.guide}<ArrowRight size={15} aria-hidden="true" /></Link>
                <button type="button" aria-pressed={active} aria-label={`${ui.compare}: ${item.title}`} aria-describedby="beach-selection-status" disabled={disabled} onClick={() => toggle(item.slug)} className={`inline-flex min-h-11 items-center gap-1.5 rounded-lg border px-3 py-2 text-xs font-semibold transition disabled:cursor-not-allowed disabled:opacity-45 ${active ? "border-[#0f3d2e] bg-[#0f3d2e] text-white" : "border-[#d1dacf] text-[#0f3d2e] hover:bg-[#edf2eb]"} ${focus}`}>
                  {active ? <Check size={14} aria-hidden="true" /> : <Plus size={14} aria-hidden="true" />}{active ? ui.selected : ui.compare}
                </button>
              </div>
            </div>
          </article>;
        })}
      </div>
      {selected.length > 0 && !open && <div className="sticky bottom-3 z-20 mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#c9d7cd] bg-[#f8faf6] p-4 shadow-[0_8px_30px_rgba(23,32,27,0.16)]">
        <div className="min-w-0 flex-1 text-sm text-[#0f3d2e]"><p className="font-semibold">{selected.length} / 2 · {selected.length === 1 ? ui.one : ui.ready}</p><p className="mt-1 text-xs leading-5">{chosen.map(item => item.title).join(" · ")}</p></div>
        <button type="button" onClick={() => { setSelected([]); setOpen(false); }} aria-label={ui.clear} className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full hover:bg-[#e7eee5] ${focus}`}><X size={18} aria-hidden="true" /></button>
        <button type="button" disabled={chosen.length !== 2} onClick={() => setOpen(true)} className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0f3d2e] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:bg-[#d5ddd5] disabled:text-[#566258] sm:w-auto ${focus}`}>{ui.open}<ArrowRight size={16} aria-hidden="true" /></button>
      </div>}
    </div>
  );
}

export function BeachComparisonLink() {
  const { language } = useLanguage();
  const copy = beachComparisonCopy[language];
  return <Link href="/caribe-y-playa#destinos-esenciales" className={`group mt-7 flex flex-col gap-5 rounded-2xl bg-[#e8efe8] p-6 text-[#0f3d2e] transition hover:bg-[#dce8df] sm:flex-row sm:items-center sm:justify-between md:p-8 ${focus}`}>
    <div className="flex items-center gap-4"><Palmtree className="hidden shrink-0 sm:block" size={32} aria-hidden="true" /><div><h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold">{copy.homeTitle}</h3><p className="mt-1 text-sm leading-6 text-[#52685a]">{copy.homeText}</p></div></div>
    <span className="inline-flex shrink-0 items-center gap-2 text-sm font-bold">{copy.homeCta}<ArrowRight size={18} aria-hidden="true" className="transition group-hover:translate-x-1" /></span>
  </Link>;
}
