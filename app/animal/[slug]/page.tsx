import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("animal");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("animal", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="animal" params={params} />;
}
