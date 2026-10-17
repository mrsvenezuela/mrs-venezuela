"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useState } from "react";
import { useModalFocus } from "@/components/ui/use-modal-focus";
import { LanguageSwitcher } from "@/components/sections/language-switcher";
import { useLanguage } from "@/components/i18n/language-provider";
import { planningCopy } from "@/lib/planning-ui";

const menuLinks = [
  { key: "home", href: "/" },
  { key: "plan", href: "/articulo/ruta-perfecta-14-dias" },
  { key: "about", href: "/sobre-nosotros" },
  { key: "contact", href: "/contacto" },
] as const;

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary, language } = useLanguage();

  const closeMenu = useCallback(() => setIsOpen(false), []);
  const menuRef = useModalFocus(isOpen, closeMenu);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50 w-full px-3 py-3 sm:px-4 sm:py-4">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-2 rounded-[22px] border border-white/70 bg-[#f7f4ec]/90 px-3 py-2 shadow-[0_12px_50px_rgba(23,32,27,0.08)] backdrop-blur-md sm:px-6 sm:py-3">
          <Link href="/" className="flex min-h-11 min-w-0 flex-col justify-center leading-none text-[#0f3d2e]" aria-label="Mrs Venezuela, inicio">
            <span className="block whitespace-nowrap font-[family-name:var(--font-display)] text-[clamp(1.125rem,5.6vw,1.5rem)] font-semibold tracking-[0.01em] sm:text-3xl">
              Mrs Venezuela
            </span>
            <span className="mt-1 hidden text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#68726d] sm:block sm:text-[0.62rem]">
              Sharing Venezuela with the world.
            </span>
          </Link>

          <div className="flex shrink-0 items-center gap-1 sm:gap-3">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="inline-flex h-11 min-w-11 items-center justify-center gap-2 rounded-full px-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0f3d2e] transition-opacity duration-200 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f]"
              aria-label={dictionary.nav.menuLabel}
              aria-expanded={isOpen}
              aria-controls="site-menu"
            >
              {/*
                Del diccionario, no una palabra suelta: escrita a pelo, el traductor
                del DOM la buscaba en el catálogo automático y en alemán devolvía
                "Speisekarte" —la carta de un restaurante— en vez de "Menü".
              */}
              <span className="hidden sm:inline">{dictionary.nav.menuLabel}</span>
              <Menu size={22} strokeWidth={1.7} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label={dictionary.nav.menuLabel}
            id="site-menu"
            className="fixed inset-0 z-[80] overflow-y-auto bg-[#103d31] text-[#f7f1e3]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.24, ease: "easeOut" }}
          >
            <div className="container-page flex min-h-dvh flex-col py-5 sm:py-7">
              <div className="flex items-start justify-between border-b border-[#f7f1e3]/20 pb-5">
                <Link href="/" onClick={() => setIsOpen(false)} className="leading-none text-[#f7f1e3]">
                  <span className="block font-[family-name:var(--font-display)] text-3xl font-medium tracking-[0.01em] sm:text-4xl">
                    Mrs Venezuela
                  </span>
                  <span className="mt-2 block text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-[#f7f1e3]/65 sm:text-[0.62rem]">
                    Sharing Venezuela with the world.
                  </span>
                </Link>
                <button
                  data-modal-initial-focus
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#f7f1e3]/35 text-[#f7f1e3] transition-colors duration-200 hover:border-[#c3a36a] hover:bg-[#f7f1e3]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c3a36a]"
                  aria-label={`${dictionary.search.close} ${dictionary.nav.menuLabel}`}
                >
                  <X size={21} strokeWidth={1.5} aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Navegación principal" className="flex flex-1 items-center py-8 sm:py-20">
                <ol className="w-full max-w-4xl space-y-7 sm:space-y-9">
                  {menuLinks.map(({ key, href }, index) => (
                    <motion.li
                      key={key}
                      initial={{ opacity: 0, y: 14 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.32, delay: 0.05 + index * 0.05 }}
                    >
                      <Link
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className="group flex items-baseline gap-4 py-2 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.05] text-[#f7f1e3] transition-all duration-200 hover:translate-x-2 hover:text-[#c3a36a] sm:gap-6 sm:text-6xl md:text-7xl"
                      >
                        <span className="relative w-7 font-sans text-[0.65rem] font-semibold tracking-[0.16em] text-[#c3a36a] after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#c3a36a] after:transition-all after:duration-200 group-hover:after:w-5 sm:w-9 sm:text-xs">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span data-translated="true">{key === "plan" ? planningCopy[language].menu : dictionary.nav.menu[key]}</span>
                      </Link>
                    </motion.li>
                  ))}
                </ol>
              </nav>

              <div className="border-t border-[#f7f1e3]/20 pt-5" />
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
