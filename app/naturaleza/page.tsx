import type { Metadata } from "next";
import { NaturePage } from "@/components/content/nature-page";
import { natureCopy } from "@/lib/nature/copy";
import { absoluteUrl } from "@/lib/utils";

// Same canonical-language policy as the existing thematic pages; the global
// language provider handles translated content and persists the visitor's choice.
export const metadata: Metadata = {
  title: { absolute: "Naturaleza de Venezuela: fauna, flora y aves | Mrs Venezuela" },
  description: "Descubre la naturaleza de Venezuela: fauna, aves, flores, árboles y vida acuática. Una selección visual con tortugas, toninas, peces y corales.",
  alternates: { canonical: "/naturaleza" },
  openGraph: { title: "Venezuela está viva | Mrs Venezuela", description: natureCopy.es.intro, url: "/naturaleza", type: "website", locale: "es_VE", images: [{ url: "/images/commons/corocoro-rojo-manglar-cuare.jpg", alt: "Corocora roja en Cuare, Venezuela" }] },
};

export default function Page() {
  const schema = { "@context": "https://schema.org", "@type": "CollectionPage", name: natureCopy.es.eyebrow, description: natureCopy.es.intro, url: absoluteUrl("/naturaleza"), inLanguage: "es", about: natureCopy.es.sections };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><NaturePage /></>;
}
