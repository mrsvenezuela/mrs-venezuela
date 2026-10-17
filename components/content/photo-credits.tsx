"use client";

import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import type { LanguageCode } from "@/lib/i18n";

const labels: Record<LanguageCode, string> = {
  es: "Créditos fotográficos",
  en: "Photo credits",
  de: "Bildnachweise",
  fr: "Crédits photographiques",
  zh: "图片来源",
};

/** `title` es opcional: sin él, la línea queda en «autor, licencia». */
type Credit = { title?: string; author: string; license: string; href: string };

export function PhotoCredits({ credits, children, className = "" }: {
  credits?: Credit[];
  children?: React.ReactNode;
  className?: string;
}) {
  const { language } = useLanguage();
  if (!credits?.length && !children) return null;

  return (
    <details className={`group ${className}`}>
      <summary data-translated="true" className="flex min-h-11 w-fit cursor-pointer list-none items-center gap-3 py-2 text-xs font-medium text-[#59675f] transition hover:text-[#0f3d2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0f3d2e] [&::-webkit-details-marker]:hidden">
        <span>{labels[language]}</span>
        <ChevronDown size={15} aria-hidden="true" className="shrink-0 transition-transform duration-200 group-open:rotate-180" />
      </summary>
      <div className="pb-2 pt-3 text-xs leading-5 text-[#59675f]">
        {credits?.length ? (
          <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {credits.map((credit) => (
              <li key={credit.href} className="min-w-0 break-words">
                {credit.title ? <>{credit.title} ·{" "}</> : null}
                <a href={credit.href} target="_blank" rel="noreferrer" className="underline underline-offset-2 transition hover:text-[#0f3d2e]">
                  <span data-translated="true">{credit.author}</span>
                </a>
                , <span data-translated="true">{credit.license}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {children}
      </div>
    </details>
  );
}
