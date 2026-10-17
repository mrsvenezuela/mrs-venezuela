import type { MetadataRoute } from "next";
import { pageKinds, searchIndex } from "@/lib/content";
import { ITINERARY_PATH, ITINERARY_UPDATED } from "@/lib/itinerary";
import { absoluteUrl } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  // Unknown modification dates are omitted, never replaced with the build time.
  const editorialDates: Record<string, string> = {
    "/": "2026-10-08", [ITINERARY_PATH]: ITINERARY_UPDATED,
    "/estado/carabobo": "2026-10-15", "/estado/aragua": "2026-10-15", "/estado/miranda": "2026-10-15",
  };
  const paths = [
    "/", "/estados", "/playas", "/playa/isla-de-plata", "/playa/morrocoy",
    "/historia", "/naturaleza", "/curiosidades", "/caribe-y-playa",
    "/montana-y-paramo", "/selva-y-rios", "/ciudades-y-cultura", "/sabores",
    "/sobre-nosotros", "/contacto",
    ...pageKinds.flatMap((kind) =>
      searchIndex
        .filter((item) => item.kind === kind)
        .map((item) => `/${kind}/${item.slug}`),
    ),
  ];
  return [...new Set(paths)].map((path) => ({
    url: absoluteUrl(path),
    ...(editorialDates[path] ? { lastModified: editorialDates[path] } : {}),
  }));
}
