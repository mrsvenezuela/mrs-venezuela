"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/i18n/language-provider";
import { languages } from "@/lib/i18n";

const languageFlags: Record<(typeof languages)[number]["code"], string> = {
  es: "/flags/es.png",
  de: "/flags/de.png",
  en: "/flags/en.png",
  fr: "/flags/fr.png",
};

export function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { language, setLanguage, dictionary } = useLanguage();
  const selected = languages.find((entry) => entry.code === language) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) setOpen(false);
    };
    const keyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
      if (!rootRef.current?.contains(document.activeElement)) return;
      if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
      event.preventDefault();
      const options = Array.from(rootRef.current.querySelectorAll<HTMLButtonElement>('[role="option"]'));
      const current = options.findIndex(option => option === document.activeElement);
      const next = event.key === "ArrowDown" ? (current + 1) % options.length : (current - 1 + options.length) % options.length;
      options[next]?.focus();
    };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", keyboard);
    return () => {
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("keydown", keyboard);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={dictionary.nav.chooseLanguage}
        onClick={() => setOpen((current) => !current)}
        className="flex h-11 items-center gap-1.5 rounded-full border border-transparent bg-transparent px-1 text-sm font-semibold text-[#17201b] transition-opacity duration-200 hover:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#247c8f] sm:gap-2"
      >
        <Image
          src={languageFlags[selected.code]}
          alt=""
          width={20}
          height={15}
          className="rounded-[2px] shadow-sm"
        />
        <span className="hidden sm:inline">{selected.label}</span>
        <span className="sm:hidden">{selected.short}</span>
        <ChevronDown
          size={15}
          className={`text-[#68726d] transition duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute right-0 top-[calc(100%+12px)] z-50 w-56 overflow-hidden rounded-[22px] border border-white/80 bg-white/96 p-2 shadow-[0_24px_70px_rgba(23,32,27,0.18)] backdrop-blur"
          >
            <div className="px-3 pb-2 pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#247c8f]">
                {dictionary.nav.language}
              </p>
            </div>
            <div role="listbox" aria-label={dictionary.nav.chooseLanguage} className="space-y-1">
              {languages.map((option) => {
                const isSelected = option.code === selected.code;

                return (
                  <button
                    key={option.code}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      setLanguage(option.code);
                      setOpen(false);
                      triggerRef.current?.focus();
                    }}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left transition ${
                      isSelected ? "bg-[#eef5f0]" : "hover:bg-[#f6f2e9]"
                    }`}
                  >
                    <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f3f6f4]">
                      <Image
                        src={languageFlags[option.code]}
                        alt=""
                        width={24}
                        height={18}
                        className="rounded-[2px] shadow-sm"
                      />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-[#17201b]">{option.label}</span>
                      <span className="block text-xs text-[#68726d]">
                        {isSelected ? dictionary.nav.currentLanguage : option.note}
                      </span>
                    </span>
                    {isSelected && <Check size={16} className="text-[#234B39]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
