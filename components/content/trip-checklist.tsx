"use client";

import { useState } from "react";
import { useLanguage } from "@/components/i18n/language-provider";
import { planningCopy } from "@/lib/planning-ui";

/** Session-only checklist: no account, storage, personal data or analytics events. */
export function TripChecklist({ items }: { items: { title: string; text: string }[] }) {
  const { language } = useLanguage();
  const copy = planningCopy[language];
  const [checked, setChecked] = useState<number[]>([]);
  return (
    <section className="mt-12 rounded-3xl bg-[#eaf0e6] p-5 sm:p-8" aria-labelledby="trip-checklist-title">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 id="trip-checklist-title" className="font-[family-name:var(--font-display)] text-3xl font-semibold">{copy.checklist}</h3>
        <p role="status" className="text-sm font-medium text-[#456557]">{checked.length} / {items.length} {copy.completed}</p>
      </div>
      <p className="mt-2 max-w-2xl text-sm leading-6 text-[#536158]">{copy.note}</p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item, index) => (
          <li key={index}>
            <label className="flex h-full cursor-pointer items-start gap-3 rounded-xl bg-white/75 p-4 transition hover:bg-white">
              <input type="checkbox" checked={checked.includes(index)}
                onChange={(event) => setChecked((previous) => event.target.checked ? [...previous, index] : previous.filter((value) => value !== index))}
                className="mt-1 h-5 w-5 shrink-0 accent-[#0f3d2e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4"
              />
              <span><span className="block font-semibold">{item.title}</span><span className="mt-1 block text-sm leading-6 text-[#536158]">{item.text}</span></span>
            </label>
          </li>
        ))}
      </ul>
      <button type="button" disabled={!checked.length} onClick={() => setChecked([])} className="mt-4 min-h-11 rounded-lg px-3 text-sm font-semibold underline underline-offset-4 disabled:opacity-40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{copy.reset}</button>
    </section>
  );
}
