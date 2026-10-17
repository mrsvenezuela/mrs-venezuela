import type { Metadata } from "next";
import { HistoryIndex } from "@/components/content/history-index";
import { getHistoryContent } from "@/lib/history";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Historia de Venezuela",
  description:
    "La historia de Venezuela en una sola página: los pueblos originarios, la colonia, la independencia, Simón Bolívar, la nueva república, la era del petróleo, la migración, la democracia y la crisis, el país contemporáneo y la Venezuela de hoy.",
  alternates: {
    canonical: "/historia",
  },
  openGraph: {
    title: "Historia de Venezuela | Descubre Venezuela",
    description:
      "Un viaje por Venezuela a través del tiempo: de los pueblos que habitaban el territorio antes de 1498 a la gente que forma el país hoy.",
    url: "/historia",
    type: "website",
    locale: "es_VE",
  },
};

export default function HistoryPage() {
  const content = getHistoryContent("es");

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: "Historia de Venezuela",
    url: absoluteUrl("/historia"),
    inLanguage: "es",
    headline: "Historia de Venezuela",
    description: content.intro,
    articleSection: [...content.chapters.map((chapter) => chapter.title), content.closing.title],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <HistoryIndex />
    </>
  );
}
