import type { Metadata } from "next";
import { HistoryIndex } from "@/components/content/history-index";
import { getHistoryContent } from "@/lib/history";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Historia de Venezuela",
  description:
    "La historia de Venezuela en una página: pueblos originarios, colonia, independencia, Simón Bolívar, petróleo, democracia, crisis y el país de hoy.",
  alternates: {
    canonical: "/historia",
  },
  openGraph: {
    title: "Historia de Venezuela | Mrs Venezuela",
    description:
      "Un viaje por Venezuela a través del tiempo: de los pueblos que habitaban el territorio antes de 1498 a la gente que forma el país hoy.",
    url: "/historia",
    type: "website",
    locale: "es_VE",
    images: [
      {
        url: absoluteUrl("/images/commons/casa-congreso-angostura.jpg"),
        width: 1800,
        height: 1350,
        alt: "Fachada de la Casa del Congreso de Angostura, en Ciudad Bolívar",
      },
    ],
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
