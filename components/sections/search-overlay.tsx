"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { searchIndex, type ContentKind } from "@/lib/content";
import { useLanguage } from "@/components/i18n/language-provider";
import type { LanguageCode } from "@/lib/i18n";
import { useModalFocus } from "@/components/ui/use-modal-focus";

/** Evento con el que cualquier botón del sitio abre el buscador. */
export const OPEN_SEARCH_EVENT = "mrs-venezuela:open-search";

export function openSearch() {
  window.dispatchEvent(new Event(OPEN_SEARCH_EVENT));
}

const localizedKinds: Record<LanguageCode, Record<ContentKind, string>> = {
  es: { playa: "Playa", "parque-nacional": "Parque nacional", montana: "Montaña", estado: "Estado", ciudad: "Ciudad", comida: "Gastronomía", animal: "Fauna", planta: "Flora", historia: "Historia", articulo: "Artículo" },
  en: { playa: "Beach", "parque-nacional": "National park", montana: "Mountain", estado: "State", ciudad: "City", comida: "Food", animal: "Wildlife", planta: "Flora", historia: "History", articulo: "Article" },
  de: { playa: "Strand", "parque-nacional": "Nationalpark", montana: "Berg", estado: "Bundesstaat", ciudad: "Stadt", comida: "Gastronomie", animal: "Tierwelt", planta: "Flora", historia: "Geschichte", articulo: "Artikel" },
  fr: { playa: "Plage", "parque-nacional": "Parc national", montana: "Montagne", estado: "État", ciudad: "Ville", comida: "Gastronomie", animal: "Faune", planta: "Flore", historia: "Histoire", articulo: "Article" },
  zh: { playa: "海滩", "parque-nacional": "国家公园", montana: "山峰", estado: "州", ciudad: "城市", comida: "美食", animal: "动物", planta: "植物", historia: "历史", articulo: "文章" },
};

const filterOrder: ContentKind[] = ["estado", "playa", "parque-nacional", "montana", "ciudad", "comida", "animal", "planta", "historia", "articulo"];

const popularSlugs = ["los-roques", "canaima", "merida", "arepa"];

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

export function SearchOverlay() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<ContentKind | null>(null);
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const listRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const { dictionary, language } = useLanguage();
  const copy = dictionary.search;

  /*
   * El índice incluye el nombre del tipo traducido, así que "Strand" o "beach"
   * encuentran las playas aunque el contenido esté escrito en español.
   */
  const matches = useMemo(() => {
    const needle = normalize(query.trim());
    if (!needle) return [];

    return searchIndex.filter((item) => {
      const haystack = [item.name, item.kicker, item.description, item.region, localizedKinds[language][item.kind]]
        .filter(Boolean)
        .join(" ");
      return normalize(haystack).includes(needle);
    });
  }, [query, language]);

  const counts = useMemo(() => {
    const result = new Map<ContentKind, number>();
    for (const item of matches) result.set(item.kind, (result.get(item.kind) ?? 0) + 1);
    return result;
  }, [matches]);

  const visible = useMemo(() => (kind ? matches.filter((item) => item.kind === kind) : matches), [matches, kind]);

  const popular = useMemo(
    () => popularSlugs.map((slug) => searchIndex.find((item) => item.slug === slug)).filter(Boolean).slice(0, 4),
    [],
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setKind(null);
    setCursor(0);
  }, []);
  const dialogRef = useModalFocus(open, close);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(OPEN_SEARCH_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_SEARCH_EVENT, onOpen);
  }, []);

  // La barra "/" abre el buscador salvo que se esté escribiendo en otro campo.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;
      const target = event.target as HTMLElement | null;
      if (target && (target.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName))) return;
      event.preventDefault();
      setOpen(true);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    setCursor(0);
  }, [query, kind]);

  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  if (!open) return null;

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      event.preventDefault();
      close();
      return;
    }
    if (!visible.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setCursor((current) => (current + 1) % visible.length);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setCursor((current) => (current - 1 + visible.length) % visible.length);
    } else if (event.key === "Enter") {
      const target = visible[cursor];
      if (target) {
        event.preventDefault();
        close();
        router.push(`/${target.kind}/${target.slug}`);
      }
    }
  };

  const trimmed = query.trim();

  return (
    <div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={copy.open}
      className="fixed inset-0 z-[90] flex h-dvh justify-center overflow-hidden bg-[#0f3d2e]/72 px-3 py-4 backdrop-blur-sm sm:px-6 sm:py-16"
      onKeyDown={onKeyDown}
    >
      <button type="button" aria-label={copy.close} onClick={close} className="fixed inset-0 -z-10 cursor-default" tabIndex={-1} />

      <div className="flex h-fit max-h-full w-full max-w-[56rem] flex-col overflow-hidden rounded-[28px] border border-white/50 bg-[#f9faf8] shadow-[0_40px_110px_rgba(9,26,20,0.45)]">
        <div className="flex shrink-0 items-center gap-2 border-b border-[#e6dfd2] bg-white px-4 py-3 sm:gap-4 sm:px-6 sm:py-4">
          <Search className="shrink-0 text-[#247c8f]" size={22} aria-hidden="true" />
          <input
            ref={inputRef}
            data-modal-initial-focus
            type="search"
            enterKeyHint="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={copy.mobilePlaceholder}
            aria-label={copy.open}
            className="min-w-0 flex-1 bg-transparent text-base text-[#17201b] outline-none placeholder:text-[#7c8680] sm:text-xl"
          />
          <button
            type="button"
            onClick={close}
            aria-label={copy.close}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[#68726d] transition hover:bg-[#f3efe4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f]"
          >
            <X size={19} aria-hidden="true" />
          </button>
        </div>

        {trimmed && matches.length > 0 ? (
          <div className="flex shrink-0 items-center gap-2 overflow-x-auto border-b border-[#eee7db] bg-white px-4 py-3 sm:flex-wrap sm:px-6">
            <button
              type="button"
              onClick={() => setKind(null)}
              aria-pressed={kind === null}
              className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-3.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] ${
                kind === null ? "border-[#0f3d2e] bg-[#0f3d2e] text-white" : "border-[#e6dfd2] bg-white text-[#405047]"
              }`}
            >
              {copy.all}
              <span className={kind === null ? "text-white/65" : "text-[#b0aa9c]"}>{matches.length}</span>
            </button>
            {filterOrder
              .filter((entry) => counts.get(entry))
              .map((entry) => {
                const isActive = kind === entry;

                return (
                  <button
                    key={entry}
                    type="button"
                    onClick={() => setKind(isActive ? null : entry)}
                    aria-pressed={isActive}
                    className={`inline-flex h-11 shrink-0 items-center gap-2 rounded-full border px-3.5 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] ${
                      isActive ? "border-[#0f3d2e] bg-[#0f3d2e] text-white" : "border-[#e6dfd2] bg-white text-[#405047]"
                    }`}
                  >
                    {localizedKinds[language][entry]}
                    <span className={isActive ? "text-white/65" : "text-[#b0aa9c]"}>{counts.get(entry)}</span>
                  </button>
                );
              })}
          </div>
        ) : null}

        <div ref={listRef} className="min-h-0 max-h-[58dvh] overflow-y-auto overscroll-contain p-3 sm:p-4">
          {!trimmed ? (
            <>
              <p className="px-3 pb-3 pt-2 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-[#9aa39d]">
                {copy.popular}
              </p>
              <div className="grid gap-2 sm:grid-cols-2">
                {popular.map((item) =>
                  item ? (
                    <Link
                      key={item.slug}
                      href={`/${item.kind}/${item.slug}`}
                      onClick={close}
                      className="flex items-center gap-4 rounded-[20px] p-3 transition hover:bg-white"
                    >
                      <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl bg-[#dce8df]">
                        {item.image ? <Image src={item.image} alt="" fill sizes="56px" className="object-cover" /> : null}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#247c8f]">
                          {localizedKinds[language][item.kind]}
                        </span>
                        <span className="block font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">
                          {item.name}
                        </span>
                      </span>
                    </Link>
                  ) : null,
                )}
              </div>
            </>
          ) : visible.length === 0 ? (
            <div className="px-4 py-10 text-center">
              <p className="break-words font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">
                {copy.noResults} «{trimmed}»
              </p>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-[#68726d]">{copy.noResultsHint}</p>
            </div>
          ) : (
            <div className="flex flex-col gap-1">
              {visible.map((item, index) => {
                const isActive = index === cursor;

                return (
                  <Link
                    key={`${item.kind}-${item.slug}`}
                    href={`/${item.kind}/${item.slug}`}
                    onClick={close}
                    onMouseEnter={() => setCursor(index)}
                    data-active={isActive}
                    className={`flex items-center gap-4 rounded-[20px] p-3 transition ${isActive ? "bg-[#f3efe4]" : ""}`}
                  >
                    <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl bg-[#dce8df]">
                      {/* Sin foto verificada (algunos estados): queda el fondo liso, nunca la foto de otro estado. */}
                      {item.image ? <Image src={item.image} alt="" fill sizes="64px" className="object-cover" /> : null}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#247c8f]">
                        {localizedKinds[language][item.kind]}
                        {item.region ? (
                          <>
                            <span className="h-[3px] w-[3px] rounded-full bg-[#ccc5b6]" aria-hidden="true" />
                            <span className="truncate font-medium normal-case tracking-normal text-[#68726d]">
                              {item.region}
                            </span>
                          </>
                        ) : null}
                      </span>
                      <span className="mt-0.5 block font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[#17201b]">
                        {item.name}
                      </span>
                      {item.description ? (
                        <span className="mt-0.5 line-clamp-1 block text-xs leading-5 text-[#68726d]">
                          {item.description}
                        </span>
                      ) : null}
                    </span>
                  </Link>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex shrink-0 items-center justify-between gap-4 border-t border-[#eee7db] bg-white px-5 py-3 text-[0.7rem] text-[#68726d] sm:px-6">
          <div className="hidden shrink-0 items-center gap-4 sm:flex">
            <span className="hidden items-center gap-2 sm:flex">
              <kbd className="rounded bg-[#f3efe4] px-1.5 py-0.5 font-sans font-bold text-[#405047]">↑↓</kbd>
              {copy.navigate}
            </span>
            <span className="flex items-center gap-2">
              <kbd className="rounded bg-[#f3efe4] px-1.5 py-0.5 font-sans font-bold text-[#405047]">↵</kbd>
              {copy.openResult}
            </span>
            <span className="flex items-center gap-2">
              <kbd className="rounded bg-[#f3efe4] px-1.5 py-0.5 font-sans font-bold text-[#405047]">esc</kbd>
              {copy.close}
            </span>
          </div>
          <p aria-live="polite" className="min-w-0 break-words">
            {trimmed ? `${visible.length} ${copy.resultsFor} «${trimmed}»` : null}
          </p>
        </div>
      </div>
    </div>
  );
}
