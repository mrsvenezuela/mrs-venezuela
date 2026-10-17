import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("montana");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("montana", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="montana" params={params} />;
}
