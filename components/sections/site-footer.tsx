"use client";

import { useLanguage } from "@/components/i18n/language-provider";

export function SiteFooter() {
  const { dictionary } = useLanguage();

  return (
    <footer className="bg-[#0f3d2e] py-12 text-white">
      <div className="container-page flex flex-col justify-between gap-5 md:flex-row md:items-center">
        <p className="font-semibold tracking-[0.18em]">{dictionary.footer.siteName}</p>
        <p className="max-w-lg text-sm leading-6 text-white/70">{dictionary.footer.text}</p>
      </div>
    </footer>
  );
}
