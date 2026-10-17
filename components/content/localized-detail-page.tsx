"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, MapPin, Sparkles, Waves } from "lucide-react";
import type { DiscoverItem } from "@/lib/content";
import type { LanguageCode } from "@/lib/i18n";

type DetailCopy = {
  home: string;
  eyebrow: string;
  overview: string;
  overviewTitle: (name: string) => string;
  overviewText: (name: string, kind: string) => string;
  facts: Array<{ label: string; value: (kind: string) => string }>;
  discover: string;
  discoverTitle: (name: string) => string;
  moments: Array<{ title: string; text: (name: string) => string }>;
  planning: string;
  planningTitle: string;
  planningText: (name: string) => string;
  faq: string;
  questions: Array<{ question: string; answer: (name: string) => string }>;
  backHome: string;
};

const kindLabels: Record<LanguageCode, Record<DiscoverItem["kind"], string>> = {
  es: {
    estado: "Estado", ciudad: "Ciudad", "parque-nacional": "Parque nacional", playa: "Playa", montana: "Montaña",
    animal: "Fauna", planta: "Flora", comida: "Gastronomía", historia: "Historia", articulo: "Artículo",
  },
  en: {
    estado: "State", ciudad: "City", "parque-nacional": "National park", playa: "Beach", montana: "Mountain",
    animal: "Wildlife", planta: "Flora", comida: "Cuisine", historia: "History", articulo: "Article",
  },
  de: {
    estado: "Bundesstaat", ciudad: "Stadt", "parque-nacional": "Nationalpark", playa: "Strand", montana: "Berg",
    animal: "Tierwelt", planta: "Flora", comida: "Gastronomie", historia: "Geschichte", articulo: "Artikel",
  },
  fr: {
    estado: "État", ciudad: "Ville", "parque-nacional": "Parc national", playa: "Plage", montana: "Montagne",
    animal: "Faune", planta: "Flore", comida: "Gastronomie", historia: "Histoire", articulo: "Article",
  },
  zh: {
    estado: "州", ciudad: "城市", "parque-nacional": "国家公园", playa: "海滩", montana: "山峰",
    animal: "野生动物", planta: "植物", comida: "美食", historia: "历史", articulo: "文章",
  },
};

const copies: Record<Exclude<LanguageCode, "es">, DetailCopy> = {
  en: {
    home: "Discover Venezuela", eyebrow: "Travel guide", overview: "Overview",
    overviewTitle: (name) => `Discover ${name} at an unhurried pace.`,
    overviewText: (name, kind) => `${name} is one of Venezuela's remarkable ${kind.toLowerCase()} destinations. This guide brings together the landscape, local identity and practical context needed to approach the place with curiosity and care.`,
    facts: [
      { label: "Country", value: () => "Venezuela" }, { label: "Category", value: (kind) => kind },
      { label: "Travel style", value: () => "Nature and culture" }, { label: "Plan ahead", value: () => "Check local conditions" },
    ],
    discover: "The experience", discoverTitle: (name) => `Ways to experience ${name}.`,
    moments: [
      { title: "Read the landscape", text: (name) => `Allow time to see how the light, weather and surroundings shape ${name}.` },
      { title: "Follow local knowledge", text: (name) => `Local guides and residents offer the best context for understanding ${name} responsibly.` },
      { title: "Travel with care", text: (name) => `Respect the natural and cultural setting that makes ${name} distinctive.` },
    ],
    planning: "Plan your visit", planningTitle: "Useful before you go.",
    planningText: (name) => `Access, weather and services around ${name} can change by season. Confirm routes, schedules and local guidance before travelling.`,
    faq: "Frequently asked questions",
    questions: [
      { question: "When is the best time to visit?", answer: () => "It depends on the season, local weather and the experience you are planning. Check current conditions before leaving." },
      { question: "Do I need a local guide?", answer: () => "For nature routes, remote places or water-based visits, local guidance is strongly recommended." },
      { question: "What should I bring?", answer: () => "Bring water, sun protection, suitable footwear and anything required for the route or activity." },
    ],
    backHome: "Explore more of Venezuela",
  },
  de: {
    home: "Venezuela entdecken", eyebrow: "Reiseführer", overview: "Überblick",
    overviewTitle: (name) => `${name} in aller Ruhe entdecken.`,
    overviewText: (name, kind) => `${name} ist eines der bemerkenswerten Reiseziele Venezuelas in der Kategorie ${kind.toLowerCase()}. Dieser Guide verbindet Landschaft, lokale Identität und praktische Hinweise für einen aufmerksamen Besuch.`,
    facts: [
      { label: "Land", value: () => "Venezuela" }, { label: "Kategorie", value: (kind) => kind },
      { label: "Reisestil", value: () => "Natur und Kultur" }, { label: "Vorbereitung", value: () => "Lokale Bedingungen prüfen" },
    ],
    discover: "Das Erlebnis", discoverTitle: (name) => `${name} auf verschiedene Weise erleben.`,
    moments: [
      { title: "Die Landschaft lesen", text: (name) => `Nimm dir Zeit, um Licht, Wetter und Umgebung von ${name} wahrzunehmen.` },
      { title: "Lokales Wissen nutzen", text: (name) => `Lokale Guides und Bewohner vermitteln den besten Zugang zu ${name}.` },
      { title: "Achtsam reisen", text: (name) => `Respektiere die Natur und Kultur, die ${name} so besonders machen.` },
    ],
    planning: "Reise planen", planningTitle: "Gut vorbereitet losgehen.",
    planningText: (name) => `Zugang, Wetter und Angebote rund um ${name} können sich je nach Saison ändern. Prüfe Routen, Zeiten und lokale Hinweise vor der Reise.`,
    faq: "Häufige Fragen",
    questions: [
      { question: "Wann ist die beste Reisezeit?", answer: () => "Das hängt von Saison, Wetter und geplanter Erfahrung ab. Prüfe die aktuellen Bedingungen vor der Abreise." },
      { question: "Brauche ich einen lokalen Guide?", answer: () => "Für Naturtouren, abgelegene Orte und Ausflüge auf dem Wasser ist lokale Begleitung sehr empfehlenswert." },
      { question: "Was sollte ich mitnehmen?", answer: () => "Nimm Wasser, Sonnenschutz, geeignetes Schuhwerk und die für die Route nötige Ausrüstung mit." },
    ],
    backHome: "Mehr Venezuela entdecken",
  },
  fr: {
    home: "Découvrir le Venezuela", eyebrow: "Guide de voyage", overview: "En bref",
    overviewTitle: (name) => `Découvrir ${name} en prenant son temps.`,
    overviewText: (name, kind) => `${name} compte parmi les destinations vénézuéliennes les plus remarquables de la catégorie ${kind.toLowerCase()}. Ce guide réunit paysages, identité locale et repères pratiques pour l'aborder avec attention.`,
    facts: [
      { label: "Pays", value: () => "Venezuela" }, { label: "Catégorie", value: (kind) => kind },
      { label: "Style de voyage", value: () => "Nature et culture" }, { label: "À prévoir", value: () => "Vérifier les conditions locales" },
    ],
    discover: "L'expérience", discoverTitle: (name) => `Plusieurs façons de vivre ${name}.`,
    moments: [
      { title: "Lire le paysage", text: (name) => `Prends le temps d'observer comment la lumière, la météo et les alentours dessinent ${name}.` },
      { title: "Suivre les savoirs locaux", text: (name) => `Les guides et habitants offrent le meilleur contexte pour découvrir ${name} avec respect.` },
      { title: "Voyager avec attention", text: (name) => `Respecte le cadre naturel et culturel qui rend ${name} singulier.` },
    ],
    planning: "Préparer la visite", planningTitle: "À savoir avant de partir.",
    planningText: (name) => `L'accès, la météo et les services autour de ${name} peuvent changer selon la saison. Confirme les itinéraires, horaires et conseils locaux avant le départ.`,
    faq: "Questions fréquentes",
    questions: [
      { question: "Quelle est la meilleure période ?", answer: () => "Elle dépend de la saison, de la météo locale et de l'expérience recherchée. Vérifie les conditions avant de partir." },
      { question: "Faut-il un guide local ?", answer: () => "Pour les itinéraires nature, les lieux isolés ou les sorties sur l'eau, un accompagnement local est vivement recommandé." },
      { question: "Que faut-il emporter ?", answer: () => "Prévois de l'eau, une protection solaire, des chaussures adaptées et l'équipement nécessaire à l'itinéraire." },
    ],
    backHome: "Explorer davantage le Venezuela",
  },
  zh: {
    home: "探索委内瑞拉", eyebrow: "旅行指南", overview: "概览",
    overviewTitle: (name) => `从容探索${name}。`,
    overviewText: (name, kind) => `${name}是委内瑞拉极具代表性的${kind}目的地。本指南汇集当地景观、文化身份与实用信息，帮助你以好奇心和尊重走近这里。`,
    facts: [
      { label: "国家", value: () => "委内瑞拉" }, { label: "类别", value: (kind) => kind },
      { label: "旅行方式", value: () => "自然与文化" }, { label: "出发前", value: () => "确认当地条件" },
    ],
    discover: "体验", discoverTitle: (name) => `体验${name}的几种方式。`,
    moments: [
      { title: "感受风景", text: (name) => `留出时间感受光线、天气与周边环境如何塑造${name}。` },
      { title: "聆听当地经验", text: (name) => `当地向导和居民能帮助你更好、更负责任地理解${name}。` },
      { title: "用心旅行", text: (name) => `尊重让${name}独具特色的自然与文化环境。` },
    ],
    planning: "规划行程", planningTitle: "出发前的实用信息。",
    planningText: (name) => `${name}周边的交通、天气和服务会随季节变化。出发前请确认路线、时间安排和当地建议。`,
    faq: "常见问题",
    questions: [
      { question: "什么时候最适合前往？", answer: () => "取决于季节、当地天气和你期待的体验。出发前请确认最新情况。" },
      { question: "需要当地向导吗？", answer: () => "前往自然路线、偏远地点或水上区域时，强烈建议有当地向导陪同。" },
      { question: "应该带什么？", answer: () => "请携带饮用水、防晒用品、合适的鞋子及路线所需装备。" },
    ],
    backHome: "继续探索委内瑞拉",
  },
};

export function LocalizedDetailPage({ item, language }: { item: DiscoverItem; language: Exclude<LanguageCode, "es"> }) {
  const copy = copies[language];
  const kind = kindLabels[language][item.kind];

  return (
    <main className="bg-[#f7f4ec]">
      <section className="relative min-h-[78vh] overflow-hidden text-white">
        <Image src={item.image} alt={item.name} fill priority sizes="100vw" className="object-cover" unoptimized={item.image.startsWith("http")} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/24 to-black/18" />
        <div className="container-page relative z-10 flex min-h-[78vh] items-end pb-20 pt-28">
          <div className="max-w-4xl">
            <Link href="/" className="mb-8 inline-flex rounded-full bg-white/14 px-4 py-2 text-sm font-semibold backdrop-blur-md">{copy.home}</Link>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/76">{kind}</p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-6xl font-semibold leading-[0.9] md:text-8xl">{item.name}</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86">{copy.overviewText(item.name, kind)}</p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{copy.overview}</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b] md:text-6xl">{copy.overviewTitle(item.name)}</h2>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#59675f]">{copy.overviewText(item.name, kind)}</p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-[#e8e1d5] bg-[#e8e1d5] sm:grid-cols-2 lg:grid-cols-4">
          {copy.facts.map((fact, index) => (
            <div key={fact.label} className="min-h-40 bg-[#fbfaf7] p-6">
              {index === 0 ? <MapPin size={20} className="text-[#247c8f]" /> : index === 1 ? <Compass size={20} className="text-[#247c8f]" /> : <Sparkles size={20} className="text-[#247c8f]" />}
              <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#247c8f]">{fact.label}</p>
              <p className="mt-2 text-base font-medium leading-6 text-[#17201b]">{fact.value(kind)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[#e8e1d5] bg-white/70 py-20 md:py-28">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{copy.discover}</p>
          <h2 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b] md:text-6xl">{copy.discoverTitle(item.name)}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {copy.moments.map(({ title, text }, index) => (
              <article key={title} className="border-t border-[#e8e1d5] pt-5">
                {index === 0 ? <Waves size={20} className="text-[#247c8f]" /> : <Sparkles size={20} className="text-[#247c8f]" />}
                <h3 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-semibold text-[#17201b]">{title}</h3>
                <p className="mt-3 leading-7 text-[#68726d]">{text(item.name)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{copy.planning}</p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.94] text-[#17201b]">{copy.planningTitle}</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-[#59675f]">{copy.planningText(item.name)}</p>
      </section>

      <section className="container-page pb-28">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{copy.faq}</p>
          <div className="mt-7 divide-y divide-[#e6dfd2] border-y border-[#e6dfd2]">
            {copy.questions.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center gap-4 text-[#17201b] [&::-webkit-details-marker]:hidden">
                  <span className="font-[family-name:var(--font-display)] text-2xl font-semibold leading-[0.95] md:text-3xl">{question}</span>
                  <span className="ml-auto text-2xl leading-none text-[#247c8f] transition-transform duration-200 group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-2xl text-[0.98rem] leading-7 text-[#68726d]">{answer(item.name)}</p>
              </details>
            ))}
          </div>
          <Link href="/" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#0f3d2e] transition-opacity hover:opacity-60">
            {copy.backHome} <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
