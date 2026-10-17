"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { featured } from "@/lib/content";
import { useLanguage } from "@/components/i18n/language-provider";

export function FeaturedDestinations() {
  const { dictionary } = useLanguage();

  return (
    <section id="destinos" className="container-page py-16 md:py-28">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{dictionary.featured.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl md:text-7xl md:leading-none">
            {dictionary.featured.title}
          </h2>
        </div>
        <p className="max-w-sm text-base leading-7 text-[#68726d]">{dictionary.featured.text}</p>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {featured.map((item, index) => {
          const translatedItem = dictionary.featured.items[item.slug as keyof typeof dictionary.featured.items];

          return (
            <Link
              key={item.slug}
              href={`/${item.kind}/${item.slug}`}
              className={index === 0 || index === featured.length - 1 ? "group lg:col-span-2" : "group"}
            >
              <article className="relative min-h-[400px] overflow-hidden rounded-[28px] bg-[#0f3d2e] shadow-[0_30px_80px_rgba(23,32,27,0.12)] sm:min-h-[520px] sm:rounded-[34px]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes={index === 0 || index === featured.length - 1 ? "(min-width: 1280px) 780px, (min-width: 1024px) 66vw, 96vw" : "(min-width: 1280px) 380px, (min-width: 1024px) 33vw, 96vw"}
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="relative flex min-h-[400px] flex-col justify-end p-5 text-white sm:min-h-[520px] sm:p-7 md:p-9">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/16 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur-md">
                      {translatedItem.kicker}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0f3d2e] transition group-hover:rotate-12">
                      <ArrowUpRight size={19} />
                    </span>
                  </div>
                  <h3 className="font-[family-name:var(--font-display)] text-4xl font-semibold md:text-5xl">{item.name}</h3>
                  <p className="mt-3 max-w-xl leading-7 text-white/82">{translatedItem.description}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
