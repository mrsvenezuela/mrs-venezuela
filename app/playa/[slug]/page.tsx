import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";
import type { Metadata } from "next";
import { BeachEditorialGuide } from "@/components/content/beach-editorial-guide";
import { getBeachGuide } from "@/lib/beach-guides";
import { absoluteUrl } from "@/lib/utils";

export const generateStaticParams = () => [...generateStaticParamsFor("playa"), { slug: "isla-de-plata" }, { slug: "morrocoy" }];
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getBeachGuide(slug);
  if (!guide) return generateMetadataFor("playa", params);
  const title = `${guide.name}: guía de viaje | Mrs Venezuela`;
  const description = guide.tagline.es;
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
