import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("parque-nacional");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("parque-nacional", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="parque-nacional" params={params} />;
}
