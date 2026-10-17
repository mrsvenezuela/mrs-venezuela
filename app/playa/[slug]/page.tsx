import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";
import type { Metadata } from "next";
import { BeachEditorialGuide } from "@/components/content/beach-editorial-guide";
import { getBeachGuide } from "@/lib/beach-guides";
import { absoluteUrl } from "@/lib/utils";

/** Descripciones para buscadores cuando el lema de la guía es demasiado corto. */
const seoDescriptions: Record<string, string> = {
  "isla-de-plata": "Isla de Plata, frente a Guanta (Anzoátegui): cómo llegar en lancha desde el muelle, qué esperar de la playa y qué acordar antes de pasar el día.",
  "morrocoy": "Parque Nacional Morrocoy, entre Tucacas y Chichiriviche (Falcón): cayos, manglares, cómo llegar a los cayos en lancha y consejos para organizar tu visita.",
  "cayo-sombrero": "Cayo Sombrero, en el Parque Nacional Morrocoy (Falcón): arena clara y cocoteros. Cómo funciona la lancha, cómo organizar el día y qué presupuestar.",
  "mochima": "Parque Nacional Mochima, entre Sucre y Anzoátegui: bahías, islas y pueblos de pescadores. Cómo llegar, cómo moverte y qué entra en tu presupuesto.",
  "choroni": "Choroní, en la costa de Aragua: el pueblo, Puerto Colombia y Playa Grande al otro lado de la montaña. Cómo llegar, cómo moverte y qué presupuestar.",
  "cuyagua": "Cuyagua, en la costa de Aragua: playa abierta de olas para el surf, montaña y un pueblo con ritmo propio. Cómo llegar, cómo moverte y qué tener en cuenta.",
  "playa-medina": "Playa Medina, en la península de Paria (Sucre): una ensenada de cocoteros al este de Río Caribe. Cómo llegar, cómo moverte y qué presupuestar.",
  "isla-de-coche": "Isla de Coche, en Nueva Esparta: playas abiertas y ambiente sereno junto a Margarita. Cómo llegar por mar y qué confirmar antes de pagar el traslado.",
  "isla-la-tortuga": "Isla La Tortuga, en las Dependencias Federales: arena, sal y mar abierto en el Caribe venezolano. Cómo organizar la travesía, la estancia y el regreso.",
};

export const generateStaticParams = () => [...generateStaticParamsFor("playa"), { slug: "isla-de-plata" }, { slug: "morrocoy" }];
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBeachGuide(slug);
  if (!guide) return generateMetadataFor("playa", params);
  const title = `${guide.name}: guía de viaje | Mrs Venezuela`;
  const description = seoDescriptions[guide.slug] ?? guide.tagline.es;
  const url = `/playa/${guide.slug}`;
  const image = absoluteUrl(guide.hero.src);
  return {
    title: { absolute: title }, description, alternates: { canonical: url },
    openGraph: { title, description, url, type: "article", locale: "es_VE", images: [{ url: image, alt: guide.hero.caption.es }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getBeachGuide(slug);
  if (guide) return <BeachEditorialGuide guide={guide} />;
  return <ContentRoute kind="playa" params={params} />;
}
