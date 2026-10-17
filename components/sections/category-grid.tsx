"use client";

import Link from "next/link";
import { categories } from "@/lib/content";
import { useLanguage } from "@/components/i18n/language-provider";

const categoryKeys = [
  "playas",
  "parques",
  "montanas",
  "selvas",
  "ciudades",
  "gastronomia",
  "fauna",
  "flora",
  "historia",
  "cultura",
] as const;

export function CategoryGrid() {
  const { dictionary } = useLanguage();

  return (
    <section className="container-page py-24">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
        {categories.map((category, index) => {
          const Icon = category.icon;
          const translatedCategory = dictionary.categories[categoryKeys[index]];

          return (
            <Link
              href={category.href}
              key={category.label}
              className="group rounded-[28px] border border-[#e6dfd2] bg-white p-6 shadow-[0_20px_60px_rgba(23,32,27,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,32,27,0.11)]"
            >
              <span className="mb-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#dce8df] text-[#0f3d2e] transition group-hover:bg-[#247c8f] group-hover:text-white">
                <Icon size={21} />
              </span>
              <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold">{translatedCategory[0]}</h3>
              <p className="mt-3 text-sm leading-6 text-[#68726d]">{translatedCategory[1]}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
