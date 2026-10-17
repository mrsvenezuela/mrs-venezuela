"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import { useLanguage } from "@/components/i18n/language-provider";
import type { LanguageCode } from "@/lib/i18n";

const famousBeaches = [
  {
    name: "Los Roques",
    location: "Dependencias Federales",
    href: "/playa/los-roques",
    description: "Un archipiélago de cayos, arrecifes y lagunas turquesa donde el Caribe se siente inmenso y sereno.",
  },
  {
    name: "Cayo Sombrero",
    location: "Morrocoy, Falcón",
    href: "/playa/cayo-sombrero",
    description: "Uno de los cayos más populares de Morrocoy, conocido por sus aguas tranquilas.",
  },
  {
    name: "Playa El Agua",
    location: "Nueva Esparta",
    href: "/playa/playa-el-agua",
    description: "Un clásico de Margarita, amplia, turística y muy reconocida.",
  },
  {
    name: "Playa El Yaque",
    location: "Nueva Esparta",
    href: "/playa/playa-el-yaque",
    description: "Famosa por el windsurf, el kitesurf y su ambiente caribeño relajado.",
  },
  {
    name: "Mochima",
    location: "Sucre y Anzoátegui",
    href: "/playa/mochima",
    description: "Islas, ensenadas y playas de agua calma dentro de un paisaje marino único.",
  },
  {
    name: "Choroni",
    location: "Aragua",
    href: "/playa/choroni",
    description: "Pueblo costero, montaña tropical y playas con mucha identidad venezolana.",
  },
  {
    name: "Cuyagua",
    location: "Aragua",
    href: "/playa/cuyagua",
    description: "Una playa amplia y muy querida por surfistas y viajeros de aventura.",
  },
  {
    name: "Bahía de Cata",
    location: "Aragua",
    href: "/playa/bahia-de-cata",
    description: "Una de las bahías más conocidas de la costa central, rodeada de montañas.",
  },
  {
    name: "Puerto Cabello",
    location: "Carabobo",
    href: "/playa/puerto-cabello",
    description: "Costa histórica y acceso a playas cercanas como Patanemo e Isla Larga.",
  },
  {
    name: "Isla de Coche",
    location: "Nueva Esparta",
    href: "/playa/isla-de-coche",
    description: "Isla cercana a Margarita, conocida por playas tranquilas y paisajes abiertos.",
  },
  {
    name: "Patanemo",
    location: "Carabobo",
    href: "/playa/patanemo",
    description: "Bahía amplia y muy visitada, con ambiente playero clásico de la costa central.",
  },
  {
    name: "Playa Medina",
    location: "Sucre",
    href: "/playa/playa-medina",
    description: "Una playa de palmeras, arena clara y agua tranquila en la península de Paria.",
  },
  {
    name: "Isla La Tortuga",
    location: "Dependencias Federales",
    href: "/playa/isla-la-tortuga",
    description: "Destino insular de aguas cristalinas, bancos de arena y una sensación muy remota.",
  },
  {
    name: "Chichiriviche",
    location: "Falcón",
    href: "/playa/chichiriviche",
    description: "Punto de entrada a Morrocoy y sus cayos, ideal para moverse en lancha.",
  },
  {
    name: "Macuto",
    location: "La Guaira",
    href: "/playa/macuto",
    description: "Balneario histórico del litoral central, muy conectado con Caracas.",
  },
];

const coastalHighlights = [
  {
    title: "Costa caribeña y atlántica",
    text: "Un litoral amplio donde conviven playas urbanas, bahías naturales, pueblos pesqueros y parques marinos.",
  },
  {
    title: "Archipiélagos, cayos y bahías",
    text: "Los Roques, Morrocoy, Mochima y Margarita muestran caras muy distintas del mar venezolano.",
  },
  {
    title: "Íconos y joyas escondidas",
    text: "Desde destinos famosos hasta rincones más tranquilos, cada playa tiene su propio ritmo, paisaje e identidad.",
  },
];

type BeachesCopy = {
  back: string;
  eyebrow: string;
  title: string;
  intro: string[];
  highlights: { title: string; text: string }[];
  top: string;
  mostFamous: string;
  description: (name: string) => string;
};

const beachesCopy: Record<Exclude<LanguageCode, "es">, BeachesCopy> = {
  en: {
    back: "Back to home", eyebrow: "Beaches and islands", title: "Beaches, islands and cays of Venezuela.",
    intro: ["Venezuela has one of the Caribbean's most diverse coastlines: white-sand beaches, hidden bays, fishing villages, marine national parks and clear-water archipelagos.", "This selection brings together some of the country's best-known beaches and islands, each with its own landscape, atmosphere and connection to the sea."],
    highlights: [{ title: "Caribbean and Atlantic coasts", text: "A long shoreline where city beaches, natural bays, fishing villages and marine parks meet." }, { title: "Archipelagos, cays and bays", text: "Los Roques, Morrocoy, Mochima and Margarita reveal very different sides of Venezuela's sea." }, { title: "Icons and quieter corners", text: "From celebrated destinations to calmer shores, every beach has its own pace and identity." }],
    top: "Top 15", mostFamous: "The best-known beaches.", description: (name) => name + " is one of the coastal places to discover on a journey through Venezuela.",
  },
  de: {
    back: "Zur Startseite", eyebrow: "Strände und Inseln", title: "Strände, Inseln und Cayos Venezuelas.",
    intro: ["Venezuela besitzt eine der vielfältigsten Küsten der Karibik: weiße Sandstrände, versteckte Buchten, Fischerdörfer, Meeresnationalparks und klare Archipele.", "Diese Auswahl vereint bekannte Strände und Inseln des Landes, jeder Ort mit eigener Landschaft, Atmosphäre und Verbindung zum Meer."],
    highlights: [{ title: "Karibik- und Atlantikküste", text: "Eine lange Küste, an der Stadtstrände, Naturbuchten, Fischerdörfer und Meeresparks zusammenkommen." }, { title: "Archipele, Cayos und Buchten", text: "Los Roques, Morrocoy, Mochima und Margarita zeigen ganz unterschiedliche Seiten des venezolanischen Meeres." }, { title: "Ikonen und ruhige Orte", text: "Von berühmten Zielen bis zu stilleren Küsten hat jeder Strand seinen eigenen Rhythmus." }],
    top: "Top 15", mostFamous: "Die bekanntesten Strände.", description: (name) => name + " gehört zu den Küstenorten, die man auf einer Reise durch Venezuela entdecken kann.",
  },
  fr: {
    back: "Retour à l'accueil", eyebrow: "Plages et îles", title: "Plages, îles et cayes du Venezuela.",
    intro: ["Le Venezuela possède l'un des littoraux les plus variés des Caraïbes : plages de sable blanc, baies secrètes, villages de pêcheurs, parcs marins et archipels aux eaux claires.", "Cette sélection réunit des plages et îles emblématiques du pays, chacune avec son paysage, son atmosphère et son lien avec la mer."],
    highlights: [{ title: "Côtes caraïbe et atlantique", text: "Un vaste littoral où se rencontrent plages urbaines, baies naturelles, villages et parcs marins." }, { title: "Archipels, cayes et baies", text: "Los Roques, Morrocoy, Mochima et Margarita révèlent des visages très différents de la mer vénézuélienne." }, { title: "Icônes et coins tranquilles", text: "Des destinations célèbres aux rivages plus calmes, chaque plage possède son propre rythme." }],
    top: "Top 15", mostFamous: "Les plages les plus connues.", description: (name) => name + " fait partie des lieux côtiers à découvrir lors d'un voyage au Venezuela.",
  },
  zh: {
    back: "返回首页", eyebrow: "海滩与岛屿", title: "委内瑞拉的海滩、岛屿与沙洲。",
    intro: ["委内瑞拉拥有加勒比地区最多样的海岸线之一，汇集白沙滩、隐秘海湾、渔村、海洋国家公园与清澈海水环绕的群岛。", "这份精选带你认识该国最具代表性的海滩和岛屿，每一处都有独特的风景、氛围与海洋气质。"],
    highlights: [{ title: "加勒比与大西洋海岸", text: "漫长海岸线上分布着城市海滩、天然海湾、渔村和海洋公园。" }, { title: "群岛、沙洲与海湾", text: "洛斯罗克斯、莫罗科伊、莫奇马和玛格丽塔展现出委内瑞拉海洋的不同面貌。" }, { title: "经典与静谧角落", text: "从知名目的地到更安静的海岸，每一片海滩都有自己的节奏。" }],
    top: "精选 15 处", mostFamous: "最受欢迎的海滩。", description: (name) => name + " 是探索委内瑞拉海岸风景时值得了解的目的地之一。",
  },
};

export function PlayasPageContent() {
  const { language } = useLanguage();
  const copy = language === "es" ? null : beachesCopy[language];
  return (
    <>
      <main className="bg-[#f7f4ec]">
        <section className="container-page pt-36">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0f3d2e] shadow-[0_14px_40px_rgba(23,32,27,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_48px_rgba(23,32,27,0.12)]"
          >
            <ArrowLeft size={17} />
            {copy?.back ?? "Volver al inicio"}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-[#247c8f]">{copy?.eyebrow ?? "Playas e islas"}</p>
              <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[0.96] text-[#17201b] md:text-7xl">
                {copy?.title ?? "Playas, islas y cayos de Venezuela."}
              </h1>
            </div>
            <div className="rounded-[30px] border border-[#e6dfd2] bg-white p-7 shadow-[0_24px_70px_rgba(23,32,27,0.07)]">
              <p className="text-lg leading-8 text-[#4d5b54]">
                {copy?.intro[0] ?? "Venezuela tiene una de las costas más diversas del Caribe: playas de arena blanca, bahías escondidas, pueblos pesqueros, parques nacionales marinos y archipiélagos de aguas transparentes. Desde Los Roques hasta Mochima, desde Margarita hasta Morrocoy, el país reúne paisajes costeros muy distintos entre sí."}
              </p>
              <p className="mt-5 text-lg leading-8 text-[#4d5b54]">
                {copy?.intro[1] ?? "Hoy comenzamos con una selección de las playas e islas más famosas de Venezuela: lugares reconocidos por su belleza, su historia, su ambiente local o su importancia natural."}
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-4 rounded-[34px] border border-white/70 bg-white/90 p-4 shadow-[0_28px_90px_rgba(23,32,27,0.12)] backdrop-blur-xl md:grid-cols-3">
            {(copy?.highlights ?? coastalHighlights).map((item) => (
              <div key={item.title} className="rounded-[26px] bg-[#f9faf8] p-6">
                <p className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none text-[#0f3d2e]">
                  {item.title}
                </p>
                <p className="mt-4 text-sm font-medium leading-6 text-[#68726d]">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container-page py-16">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#247c8f]">{copy?.top ?? "Top 15"}</p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-5xl font-semibold leading-none text-[#17201b] md:text-6xl">
              {copy?.mostFamous ?? "Las playas más famosas."}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {famousBeaches.map((place, index) => (
              <Link href={place.href} key={place.name} className="group">
                <article className="flex h-full gap-5 rounded-[26px] border border-[#e6dfd2] bg-white p-5 shadow-[0_18px_55px_rgba(23,32,27,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,32,27,0.10)]">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0f3d2e] font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <h3 className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none text-[#17201b]">
                          {place.name}
                        </h3>
                        <p className="mt-2 flex items-center gap-2 text-sm font-semibold text-[#247c8f]">
                          <MapPin size={15} />
                          {place.location}
                        </p>
                      </div>
                      <ArrowUpRight className="shrink-0 text-[#0f3d2e] transition group-hover:rotate-12" size={19} />
                    </div>
                    <p className="mt-4 leading-7 text-[#68726d]">{copy ? copy.description(place.name) : place.description}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
