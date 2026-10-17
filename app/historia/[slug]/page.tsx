import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("historia");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("historia", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="historia" params={params} />;
}
