"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, ChevronDown, ChevronRight, List, Share2 } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";

export type GuideSection = {
  id: string;
  number: string;
  title: string;
};

/*
 * Barra de orientación de las guías largas (~2.300 palabras, 18 pantallas).
 * Reemplaza a nada: antes no había índice, ni ancla, ni forma de saber por dónde ibas.
 */
export function GuideToc({
  stateName,
  region,
  sections,
}: {
  stateName: string;
  region?: string;
  sections: GuideSection[];
}) {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [copied, setCopied] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const { dictionary } = useLanguage();
  const copy = dictionary.states;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    }

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? Math.min(1, Math.max(0, window.scrollY / scrollable)) : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeOnOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOnOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOnOutside);
    };
  }, [open]);

  const active = sections.find((section) => section.id === activeId);

  /*
   * El salto lo hace el navegador con el ancla nativa (`href="#guia-0N"`), que ya
   * respeta el `scroll-margin-top` definido en globals.css y funciona sin JavaScript.
   * Solo se aplaza el cierre del panel: hacerlo en el mismo ciclo de React desmonta
   * el enlace antes de que el navegador procese la navegación y el salto se pierde.
   */
  const closeAfterJump = () => {
    window.setTimeout(() => setOpen(false), 0);
  };

  /* Comparte con el diálogo del sistema si existe; si no, copia el enlace. */
  const share = async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({ title: `${stateName} | Descubre Venezuela`, url });
        return;
      } catch {
        // El usuario canceló: no hay nada que hacer.
        return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      // Sin permiso de portapapeles: se deja el estado como estaba.
    }
  };

  return (
    <div className="sticky top-0 z-40 border-b border-[#e6dfd2] bg-[#f7f4ec]/95 backdrop-blur-md">
      <div className="container-page flex items-center justify-between gap-4 py-2.5">
        <nav aria-label="Ruta de navegación" className="flex min-w-0 items-center gap-1.5 text-xs text-[#68726d]">
          <Link href="/" className="shrink-0 rounded px-1 py-2 hover:text-[#0f3d2e]">
            {dictionary.nav.menu.home}
          </Link>
          <ChevronRight size={13} className="shrink-0 text-[#c3bcae]" aria-hidden="true" />
          <Link href="/estados" className="shrink-0 rounded px-1 py-2 hover:text-[#0f3d2e]">
            {dictionary.nav.menu.states}
          </Link>
          {region ? (
            <>
              <ChevronRight size={13} className="hidden shrink-0 text-[#c3bcae] sm:block" aria-hidden="true" />
              <span className="hidden shrink-0 py-2 sm:block">{region}</span>
            </>
          ) : null}
          <ChevronRight size={13} className="shrink-0 text-[#c3bcae]" aria-hidden="true" />
          <span aria-current="page" className="truncate py-2 font-semibold text-[#17201b]">
            {stateName}
          </span>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={share}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#e6dfd2] bg-white px-3.5 text-xs font-semibold text-[#0f3d2e] transition hover:border-[#247c8f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] sm:px-4"
          >
            {copied ? <Check size={15} aria-hidden="true" /> : <Share2 size={15} aria-hidden="true" />}
            <span className="hidden sm:inline">{copied ? copy.shareCopied : copy.share}</span>
          </button>

        <div className="relative" ref={panelRef}>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            aria-expanded={open}
            aria-controls="guide-toc-panel"
            className="inline-flex h-11 items-center gap-2 rounded-full border border-[#e6dfd2] bg-white px-4 text-xs font-semibold text-[#0f3d2e] transition hover:border-[#247c8f] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f]"
          >
            <List size={15} aria-hidden="true" />
            <span className="hidden sm:inline">{active ? `${active.number} · ${active.title}` : copy.inThisGuide}</span>
            <span className="sm:hidden">{copy.inThisGuide}</span>
            <ChevronDown size={14} className={`transition duration-200 ${open ? "rotate-180" : ""}`} aria-hidden="true" />
          </button>

          {open ? (
            <div
              id="guide-toc-panel"
              className="absolute right-0 top-[calc(100%+8px)] z-50 max-h-[70vh] w-[19rem] overflow-y-auto rounded-[22px] border border-[#e6dfd2] bg-white p-2 shadow-[0_24px_70px_rgba(23,32,27,0.18)]"
            >
              {sections.map((section) => {
                const isActive = section.id === activeId;

                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={closeAfterJump}
                    aria-current={isActive ? "true" : undefined}
                    className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition ${
                      isActive ? "bg-[#f3efe4]" : "hover:bg-[#f9faf8]"
                    }`}
                  >
                    <span
                      className={`w-5 shrink-0 text-[0.65rem] font-bold tracking-[0.08em] ${
                        isActive ? "text-[#c3a36a]" : "text-[#c9c2b4]"
                      }`}
                    >
                      {section.number}
                    </span>
                    <span
                      className={`text-sm leading-snug ${
                        isActive ? "font-bold text-[#0f3d2e]" : "font-medium text-[#405047]"
                      }`}
                    >
                      {section.title}
                    </span>
                  </a>
                );
              })}
            </div>
          ) : null}
          </div>
        </div>
      </div>

      <div className="h-[3px] w-full bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-[#c3a36a] transition-[width] duration-150 ease-out"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>
    </div>
  );
}
