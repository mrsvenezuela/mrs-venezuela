import { ThematicPageView } from "@/components/content/thematic-page";
import { thematicMetadata, thematicSchema } from "@/lib/thematic/metadata";

const SLUG = "montana-y-paramo";

export const metadata = thematicMetadata(SLUG);

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(thematicSchema(SLUG)) }} />
      <ThematicPageView slug={SLUG} />
    </>
  );
}
