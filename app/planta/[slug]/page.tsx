import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("planta");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("planta", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="planta" params={params} />;
}
