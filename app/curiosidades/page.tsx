import type { Metadata } from "next";
import { CuriositiesPage } from "@/components/content/curiosities-page";
import { topCopy, topStoryIds, storyAnchor } from "@/lib/curiosities/top";
import { absoluteUrl } from "@/lib/utils";

// The existing site uses one Spanish canonical URL and a persisted client-side
// language selection. Do not invent language URLs or hreflang destinations.
export const metadata: Metadata = {
  title: { absolute: "Top 10 curiosidades de Venezuela | Mrs Venezuela" },
  description: "10 curiosidades de Venezuela en una lectura rápida: helados de ajo, el bisturí de diamante, el Catatumbo y una niña que tocó para Lincoln. Con fotos y fuentes.",
  alternates: { canonical: "/curiosidades" },
  openGraph: { title: topCopy.es.title, description: topCopy.es.intro, url:"/curiosidades", type:"website", locale:"es_VE", images:[{url:"/images/curiosidades/yulimar-salto-budapest-2023.jpg",alt:"Yulimar Rojas saltando en Budapest, 2023"}] },
  twitter: {card:"summary_large_image",title:topCopy.es.title,description:topCopy.es.intro,images:["/images/curiosidades/yulimar-salto-budapest-2023.jpg"]},
};

export default function Page() {
  const schema = {"@context":"https://schema.org","@type":"CollectionPage",name:topCopy.es.title,description:topCopy.es.intro,url:absoluteUrl("/curiosidades"),inLanguage:"es",
    mainEntity: { "@type": "ItemList", numberOfItems: topStoryIds.length, itemListOrder: "https://schema.org/ItemListUnordered",
      itemListElement: topStoryIds.map((id, index) => ({ "@type": "ListItem", position: index + 1, name: topCopy.es.stories[id].title, url: absoluteUrl(`/curiosidades#${storyAnchor(id)}`) })) },
  };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/><CuriositiesPage/></>;
}
