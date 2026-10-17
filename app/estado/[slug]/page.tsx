import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("estado");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("estado", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="estado" params={params} />;
}
