import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/content/detail-page";
import { ItineraryGuide } from "@/components/content/itinerary-guide";
import { StateEditorialGuide } from "@/components/content/state-editorial-guide";
import { ContentKind, getItem, searchIndex } from "@/lib/content";
import { ITINERARY_SLUG } from "@/lib/itinerary";
import { itineraryMetadata, itinerarySchema } from "@/lib/itinerary/metadata";
import { getStateGuide } from "@/lib/states";
import { absoluteUrl } from "@/lib/utils";

type Params = Promise<{ slug: string }>;

export function generateStaticParamsFor(kind: ContentKind) {
  return searchIndex.filter((item) => item.kind === kind).map((item) => ({ slug: item.slug }));
}

export async function generateMetadataFor(kind: ContentKind, params: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getItem(kind, slug);
  if (!item) return {};

  // El itinerario de 14 días tiene título, descripción e imagen propios.
  if (kind === "articulo" && item.slug === ITINERARY_SLUG) return itineraryMetadata();

  const guide = kind === "estado" ? getStateGuide(item.slug) : undefined;
  const path = `/${kind}/${item.slug}`;
  // Estados: solo la foto verificada del hero (o la de content.ts si no hay guía). Sin foto
  // correcta, la vista previa usa el mapa de Venezuela, nunca la foto de otro estado.
  const heroImage = (kind === "estado" && guide ? guide.hero?.src : item.image) || "/images/venezuela-political-map.jpg";
  const image = heroImage.startsWith("/") ? absoluteUrl(heroImage) : heroImage;
  const title = guide?.seo.title ?? item.name;
  const description = guide?.seo.description ?? item.description;
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${item.name} | Mrs Venezuela`,
      description,
      url: path,
      images: [{ url: image, alt: (kind === "estado" && guide ? guide.hero?.alt : item.imageAlt) ?? item.name }],
      type: "article",
      locale: "es_VE",
    },
    twitter: {
      card: "summary_large_image",
      title: `${item.name} | Mrs Venezuela`,
      description,
      images: [image],
    },
  };
}

export async function ContentRoute({ kind, params }: { kind: ContentKind; params: Params }) {
  const { slug } = await params;
  const item = getItem(kind, slug);
  if (!item) notFound();

  // El itinerario de 14 días: componente, metadatos y JSON-LD propios, sin las FAQ genéricas.
  if (kind === "articulo" && item.slug === ITINERARY_SLUG) {
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itinerarySchema()) }} />
        <ItineraryGuide />
      </>
    );
  }

  const guide = kind === "estado" ? getStateGuide(item.slug) : undefined;
  // Estados: la foto verificada del hero (URL absoluta) o ninguna; nunca el respaldo genérico.
  const stateImage = kind === "estado" ? (guide ? guide.hero?.src : item.image) || null : undefined;
  const rawSchemaImage = stateImage === undefined ? item.image : stateImage;
  const schemaImage = rawSchemaImage ? (rawSchemaImage.startsWith("/") ? absoluteUrl(rawSchemaImage) : rawSchemaImage) : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Mrs Venezuela",
        url: absoluteUrl(),
        inLanguage: "es",
      },
      {
        "@type": kind === "articulo" ? "Article" : ["animal", "planta", "comida", "historia"].includes(kind) ? "WebPage" : "TouristDestination",
        name: item.name,
        headline: item.name,
        url: absoluteUrl(`/${kind}/${item.slug}`),
        description: guide?.seo.description ?? item.description,
        ...(schemaImage ? { image: schemaImage } : {}),
        inLanguage: "es",
        isPartOf: {
          "@type": "WebSite",
          name: "Mrs Venezuela",
          url: absoluteUrl(),
        },
      },
      ...(guide ? [{
        "@type": "FAQPage",
        mainEntity: guide.faqs.items.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
      }] : []),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {guide ? <StateEditorialGuide item={item} guide={guide} /> : <DetailPage item={item} />}
    </>
  );
}
