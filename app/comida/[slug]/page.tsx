import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("comida");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("comida", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="comida" params={params} />;
}
