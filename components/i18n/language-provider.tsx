"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { type ActiveLanguageCode, resolveActiveLanguage, translations } from "@/lib/i18n";

type LanguageContextValue = {
  language: ActiveLanguageCode;
  setLanguage: (language: ActiveLanguageCode) => void;
  dictionary: (typeof translations)[ActiveLanguageCode];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<ActiveLanguageCode>("es");

  useEffect(() => {
    const saved = window.localStorage.getItem("descubre-venezuela-language");
    const restored = resolveActiveLanguage(saved);
    setLanguageState(restored);
    // Migrate retired or invalid selections and keep both persistence stores in sync.
    window.localStorage.setItem("descubre-venezuela-language", restored);
    document.cookie = "mrs-venezuela-language=" + restored + "; path=/; max-age=31536000; samesite=lax";
  }, []);

  const setLanguage = (requestedLanguage: ActiveLanguageCode) => {
    const nextLanguage = resolveActiveLanguage(requestedLanguage);
    setLanguageState(nextLanguage);
    window.localStorage.setItem("descubre-venezuela-language", nextLanguage);
    document.cookie = "mrs-venezuela-language=" + nextLanguage + "; path=/; max-age=31536000; samesite=lax";
    document.documentElement.lang = nextLanguage;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      dictionary: translations[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
