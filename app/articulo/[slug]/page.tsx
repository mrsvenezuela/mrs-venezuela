import { ContentRoute, generateMetadataFor, generateStaticParamsFor } from "@/lib/page-factory";

export const generateStaticParams = () => generateStaticParamsFor("articulo");
export const generateMetadata = ({ params }: { params: Promise<{ slug: string }> }) => generateMetadataFor("articulo", params);

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ContentRoute kind="articulo" params={params} />;
}
