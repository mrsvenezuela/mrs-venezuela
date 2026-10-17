import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("ciudad");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("ciudad", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="ciudad" params={params} />;
}
