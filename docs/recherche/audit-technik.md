{
  "dimension": "Technisches SEO",
  "summary": "Die Basis (Metadata-API, metadataBase, sitemap.ts, robots.ts, statisches Rendering über generateStaticParams) steht, aber drei strukturelle Fehler entwerten sie: /playas ist eine Client-Component und kann deshalb gar keine Metadata exportieren, wodurch die Seite den Canonical der Startseite ausliefert (per curl bestätigt); das Title-Template hängt an bereits 58–69 Zeichen lange Guide-Titel nochmals \" | Descubre Venezuela\" an (79–90 Zeichen, garantiert abgeschnitten); und jedes eigene openGraph-Objekt überschreibt das des Root-Layouts, sodass /estados und alle 50 Detailseiten ihr og:image verlieren. Dazu kommen ein ungültiger schema.org-Typ (TravelGuide = 404) auf der Startseite und relative Bild-URLs im JSON-LD. Komplett fehlen Favicon/Icon-Set, Manifest, viewport/themeColor, Bild-Sitemap, BreadcrumbList, llms.txt, IndexNow-Key und Verifizierungs-Tags. Die Mehrsprachigkeit ist rein clientseitig, d. h. Titel und Descriptions bleiben in allen fünf Sprachen spanisch — vier von fünf Sprachen sind für Suche und AI-Crawler faktisch unsichtbar.",
  "findings": [
    {
      "title": "/playas kann keine Metadata exportieren und kanonisiert auf die Startseite",
      "severity": "kritisch",
      "evidence": "app/playas/page.tsx:1 `\"use client\";` — die Datei hat keinen `metadata`/`generateMetadata`-Export, weil Next.js diese in Client Components nicht unterstützt. Verifiziert per curl gegen http://localhost:3003/playas: `<title>Descubre Venezuela | Guia premium de destinos, cultura y naturaleza</title>`, `<meta name=\"description\" content=\"Explora Venezuela con una experiencia visual premium...\">`, `<link rel=\"canonical\" href=\"https://mrsvenezuela.com\"/>`, `<meta property=\"og:url\" content=\"https://mrsvenezuela.com\"/>`. Die Seite hat ein eigenes H1 (app/playas/page.tsx:172) und 15 interne Links, wird aber durch den Canonical vollständig auf / dedupliziert.",
      "recommendation": "app/playas/page.tsx in Server-Wrapper + Client-Body aufteilen. Neu `app/playas/page.tsx` (Server):\n```tsx\nimport type { Metadata } from \"next\";\nimport { BeachesPageContent } from \"@/components/content/beaches-page-content\";\nexport const metadata: Metadata = {\n  title: { absolute: \"Playas, islas y cayos de Venezuela: las 15 más famosas\" },\n  description: \"Guía de las playas e islas más conocidas de Venezuela: Los Roques, Morrocoy, Mochima, Margarita, Choroní, Playa Medina y más, con ubicación y qué esperar.\",\n  alternates: { canonical: \"/playas\" },\n  openGraph: { title: \"Playas, islas y cayos de Venezuela\", description: \"…\", url: \"/playas\", type: \"website\", locale: \"es_VE\", siteName: \"Mrs Venezuela\", images: [{ url: absoluteUrl(\"/images/cayo-de-agua.jpg\"), width: 1200, height: 630, alt: \"Cayo de Agua, Los Roques\" }] },\n};\nexport default function Page() { return <BeachesPageContent />; }\n```\nDer bisherige Inhalt (inkl. `\"use client\"`) wandert unverändert nach components/content/beaches-page-content.tsx. Danach unbedingt in der Search Console per Live-Test nachprüfen.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "S"
    },
    {
      "title": "Root-Layout vererbt `alternates.canonical: \"/\"` an jede Route ohne eigenes alternates",
      "severity": "kritisch",
      "evidence": "app/layout.tsx:32-34 `alternates: { canonical: \"/\" }`. In Next.js werden Metadata-Felder flach gemergt: jede Route, die kein eigenes `alternates` definiert, erbt diesen Canonical wörtlich. Betroffen sind heute app/playas/page.tsx (kein Metadata-Export möglich) und app/not-found.tsx (kein Metadata-Export vorhanden). Jede künftig neu angelegte Route ohne `alternates` erbt den Fehler stillschweigend mit.",
      "recommendation": "`alternates` aus app/layout.tsx entfernen und den Selbstverweis explizit in app/page.tsx setzen (`export const metadata = { alternates: { canonical: \"/\" } }`). Dasselbe für `openGraph.url: \"/\"` (app/layout.tsx:38) — auch das wird sonst als Startseiten-URL geerbt. Ergänzend eine kurze Regel in CLAUDE.md: „Jede neue Route MUSS `alternates.canonical` selbst setzen.“",
      "impact_search": "hoch",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "404-Seite ohne eigene Metadata: Homepage-Titel und Homepage-Canonical auf jeder Fehlerseite",
      "severity": "hoch",
      "evidence": "app/not-found.tsx:11 `export default function NotFound()` — die Datei exportiert kein `metadata`. Dadurch greift der Default aus app/layout.tsx:27 (`\"Descubre Venezuela | Guia premium …\"`) und der geerbte Canonical `https://mrsvenezuela.com` (app/layout.tsx:33). Jede 404-Antwort trägt damit einen Canonical auf die Startseite und den Startseiten-Titel.",
      "recommendation": "In app/not-found.tsx ergänzen:\n```tsx\nexport const metadata: Metadata = {\n  title: { absolute: \"Página no encontrada (404) | Mrs Venezuela\" },\n  description: \"La página que buscas no existe. Sigue explorando los estados, playas y parques nacionales de Venezuela.\",\n  robots: { index: false, follow: true },\n  alternates: { canonical: null },\n};\n```\n`alternates: { canonical: null }` unterdrückt den geerbten Canonical explizit.",
      "impact_search": "hoch",
      "impact_ai": "niedrig",
      "effort": "S"
    },
    {
      "title": "Title-Template bläht fertige Guide-Titel auf 79–90 Zeichen auf",
      "severity": "hoch",
      "evidence": "lib/page-factory.tsx:24 `const title = guide?.seo.title ?? item.name;` gibt einen reinen String zurück, worauf app/layout.tsx:28 `template: \"%s | Descubre Venezuela\"` (+21 Zeichen) greift. Die Guide-Titel sind aber bereits als vollständige SERP-Titel geschrieben: lib/states/data/guarico.ts:185 `\"Guárico: guía de viaje de los Morros de San Juan, el llano y Calabozo\"` = 69 Zeichen → ausgeliefert als 90 Zeichen. Gemessene Spannweite über alle 23 Guides: 58–69 Zeichen, also 79–90 nach Template. Per curl bestätigt: `<title>Mérida: guía de viaje de los Andes, el páramo y el Mukumbarí | Descubre Venezuela</title>` (80 Zeichen). app/contacto/page.tsx:14 und app/sobre-nosotros/page.tsx:14 machen es mit `title: { absolute: … }` bereits richtig.",
      "recommendation": "In lib/page-factory.tsx:26-27 den Guide-Titel absolut ausliefern und nur den Fallback templaten:\n```tsx\nconst title = guide?.seo.title\n  ? { absolute: guide.seo.title }\n  : `${item.name}: qué ver, cuándo ir y cómo llegar`;\n```\nSo bleiben die 23 handgeschriebenen Titel bei 58–69 Zeichen und die generischen Items bekommen endlich Keywords statt nur „Los Roques“.",
      "impact_search": "hoch",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "Eigenes openGraph-Objekt löscht og:image und og:site_name des Root-Layouts",
      "severity": "hoch",
      "evidence": "Next.js merged `openGraph` nicht tief: definiert ein Child das Feld, wird das Parent-Objekt komplett ersetzt. app/estados/page.tsx:37-44 definiert `openGraph` mit title/description/url/type/locale — ohne `images` und ohne `siteName`. Das og:image aus app/layout.tsx:43-50 (public/images/opengraph-venezuela.jpg, real vorhanden, korrekt 1200x630, 142 KB) geht damit auf /estados verloren. lib/page-factory.tsx:32-39 setzt zwar `images`, aber ebenfalls kein `siteName` → alle ~50 Detailseiten verlieren og:site_name.",
      "recommendation": "In app/estados/page.tsx:37-44 `siteName: \"Mrs Venezuela\"` und ein `images: [{ url: absoluteUrl(\"/images/mapa-venezuela.jpg\"), width: 1200, height: 630, alt: \"Los estados de Venezuela\" }]` ergänzen. In lib/page-factory.tsx:32 `siteName: \"Mrs Venezuela\"` ergänzen. Zusätzlich prüfen: die OG-Bilder der Detailseiten deklarieren `width: 1200, height: 800` (page-factory.tsx:36), obwohl es Wikimedia-Originale mit ganz anderen Seitenverhältnissen sind — die Angabe ist damit schlicht falsch und sollte entweder weggelassen oder aus echten Bilddaten gefüllt werden.",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "Startseite nutzt den nicht existierenden schema.org-Typ „TravelGuide“ und hat keinen WebSite-Knoten",
      "severity": "hoch",
      "evidence": "app/page.tsx:46-54: `const schema = { \"@context\": \"https://schema.org\", \"@type\": \"TravelGuide\", … }`. https://schema.org/TravelGuide liefert HTTP 404 — den Typ gibt es im Vokabular nicht. Google verwirft den kompletten Knoten. Damit hat die Startseite gar kein gültiges strukturiertes Markup: kein `WebSite`, kein `Organization`, keine `potentialAction`. Der `WebSite`-Knoten existiert nur auf Detailseiten (lib/page-factory.tsx:58-63) und auf /estados nur als `CollectionPage` (app/estados/page.tsx:49-64).",
      "recommendation": "app/page.tsx:46-54 durch einen @graph aus gültigen Typen ersetzen:\n```ts\n\"@graph\": [\n  { \"@type\": \"WebSite\", \"@id\": absoluteUrl(\"/#website\"), name: \"Mrs Venezuela\", alternateName: \"Descubre Venezuela\", url: absoluteUrl(), inLanguage: \"es\", publisher: { \"@id\": absoluteUrl(\"/#org\") } },\n  { \"@type\": \"Organization\", \"@id\": absoluteUrl(\"/#org\"), name: \"Mrs Venezuela\", url: absoluteUrl(), logo: absoluteUrl(\"/images/logo.png\"), sameAs: [\"https://www.instagram.com/mrsvenezuela_1/\", \"https://www.tiktok.com/@mrsvenezuela1\"] },\n  { \"@type\": \"CollectionPage\", \"@id\": absoluteUrl(\"/#webpage\"), isPartOf: { \"@id\": absoluteUrl(\"/#website\") }, about: { \"@type\": \"Country\", name: \"Venezuela\" } }\n]\n```\nDie Social-URLs stehen bereits in components/sections/home-footer.tsx:8-9 und können von dort importiert werden.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "M"
    },
    {
      "title": "JSON-LD liefert relative Bild-URLs aus",
      "severity": "hoch",
      "evidence": "lib/page-factory.tsx:71 `image: item.image` — ohne Absolutierung. Für alle lokalen Bilder aus lib/content.ts (z. B. `\"/images/mochima.jpg\"`, `\"/images/arepa.jpg\"`, `\"/images/salto-angel.jpg\"`) landet damit ein relativer Pfad im strukturierten Datum, was schema.org als URL nicht zulässt. Dieselbe Datei macht es zwei Zeilen weiter oben für Open Graph korrekt: page-factory.tsx:23 `const image = heroImage.startsWith(\"/\") ? absoluteUrl(heroImage) : heroImage;`.",
      "recommendation": "In lib/page-factory.tsx:71 die bereits berechnete Variable wiederverwenden — allerdings ist `image` in `generateMetadataFor` lokal. In `ContentRoute` (ab Zeile 49) dieselbe Normalisierung anlegen und `image: absoluteImage` setzen. Gleichzeitig `url: absoluteUrl(...)` (Zeile 68) ist korrekt, aber dem TouristDestination fehlen `@id`, `address`/`containedInPlace` (Bundesstaat) und `touristType` — für AI-Crawler die eigentlich wertvollen Felder.",
      "impact_search": "mittel",
      "impact_ai": "hoch",
      "effort": "S"
    },
    {
      "title": "Kein Favicon, kein Icon-Set, kein Manifest, kein viewport/themeColor — nichts davon existiert",
      "severity": "hoch",
      "evidence": "`find . -maxdepth 3 \\( -iname \"favicon*\" -o -iname \"icon.*\" -o -iname \"apple-icon*\" -o -iname \"manifest.*\" \\)` (ohne node_modules/.next) liefert null Treffer. public/ enthält nur data/, flags/, images/. app/ enthält keine favicon.ico/icon.tsx/apple-icon.tsx. `grep -rn \"viewport|themeColor|manifest|verification\" app lib components` findet ausschließlich framer-motion-`viewport`-Props (z. B. components/content/state-editorial-guide.tsx:86) — keinen einzigen Next.js-`viewport`-Export und keine `metadata.icons`.",
      "recommendation": "1) `app/icon.png` (512x512) und `app/apple-icon.png` (180x180) anlegen — Next generiert daraus automatisch die Link-Tags. 2) `app/manifest.ts` mit name/short_name/icons/theme_color/background_color. 3) In app/layout.tsx neben `metadata` einen separaten Export ergänzen (in Next 15 ist themeColor aus `metadata` entfernt):\n```tsx\nexport const viewport: Viewport = {\n  themeColor: [{ media: \"(prefers-color-scheme: light)\", color: \"#f7f4ec\" }, { media: \"(prefers-color-scheme: dark)\", color: \"#0f3d2e\" }],\n  colorScheme: \"light\",\n};\n```\nOhne Favicon zeigt Google in den mobilen SERPs den Default-Globus statt der Marke — das kostet direkt CTR.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "S"
    },
    {
      "title": "Dünne, akzentlose Metadata für alle Nicht-Guide-Seiten",
      "severity": "hoch",
      "evidence": "lib/page-factory.tsx:24-25 fällt ohne Guide auf `item.name` / `item.description` zurück. lib/content.ts:416-419: `name: \"Orquidea\"`, `description: \"Flor nacional y emblema de la diversidad botanica venezolana.\"` = 58 Zeichen. lib/content.ts:409-412 Turpial: 76 Zeichen. lib/content.ts:423-426 Arepa: `\"Icono culinario cotidiano, versatil y profundamente venezolano.\"` = 62 Zeichen. Per curl bestätigt für /playa/los-roques: `<title>Los Roques | Descubre Venezuela</title>` (31 Zeichen, kein einziges Keyword). Zusätzlich fehlen durchgängig die spanischen Akzente: „Orquidea“, „botanica“, „Gastronomia“, „versatil“, „Icono“, „gastronomia contemporanea“ (content.ts:404), „origenes“ (content.ts:437).",
      "recommendation": "lib/content.ts um optionale `seo: { title, description }`-Felder auf `DiscoverItem` (content.ts:26-37) erweitern — analog zu lib/states/types.ts:168 — und für die 26 Nicht-Guide-Items Titel mit 50–60 und Descriptions mit 140–160 Zeichen nachziehen. Beispiel Orquídea: Title „La orquídea, flor nacional de Venezuela: especies y dónde verla“, Description „La Cattleya mossiae es la flor nacional de Venezuela desde 1951. Dónde crece, cómo reconocerla y qué otras orquídeas alberga el país.“ Die fehlenden Akzente in einem Durchgang mitkorrigieren — sie stehen 1:1 in den ausgelieferten `<meta name=\"description\">`.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "M"
    },
    {
      "title": "Startseiten-Titel und -Description ohne spanische Akzente",
      "severity": "hoch",
      "evidence": "app/layout.tsx:27 `\"Descubre Venezuela | Guia premium de destinos, cultura y naturaleza\"` — „Guia“ statt „Guía“. app/layout.tsx:31 `\"…estados, playas, parques nacionales, montanas, fauna, gastronomia, historia y cultura.\"` — „montanas“ statt „montañas“, „gastronomia“ statt „gastronomía“. Identisch in app/page.tsx:52 im JSON-LD-`description`. Per curl im ausgelieferten HTML der Startseite bestätigt. Zum Vergleich: alle 23 Guide-Descriptions in lib/states/data/ sind korrekt akzentuiert.",
      "recommendation": "app/layout.tsx:27 und :31 sowie app/page.tsx:52 korrigieren: „Guía premium“, „montañas“, „gastronomía“. „montanas“ ist im Spanischen ein anderes Wort als „montañas“ — das ist in der SERP für spanischsprachige Nutzer unmittelbar sichtbar und untergräbt die Glaubwürdigkeit einer redaktionellen Reise-Site.",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "/estado/distrito-capital hat keine Guide, steht aber mit Priorität 0.9 in der Sitemap",
      "severity": "mittel",
      "evidence": "lib/content.ts:117-134 listet 24 Einträge inkl. `{ name: \"Distrito Capital\", slug: \"distrito-capital\" }` (Zeile 128). lib/states/index.ts:30-54 registriert aber nur 23 Guides — „distrito-capital“ fehlt im Record. Folge (per curl bestätigt): `<title>Distrito Capital | Descubre Venezuela</title>`, `<meta name=\"description\" content=\"Paisajes, cultura, sabores y rutas para descubrir la identidad de Distrito Capital.\">` (aus content.ts:394-396 generiert). app/sitemap.ts:24 gibt der Seite trotzdem `priority: kind === \"estado\" ? 0.9 : 0.75`. Der /estados-Hub bewirbt sie prominent (app/estados/page.tsx:31 „…y el Distrito Capital“).",
      "recommendation": "Entweder lib/states/data/distrito-capital.ts nach dem Muster von la-guaira.ts anlegen und in lib/states/index.ts registrieren (bevorzugt — Caracas ist das suchstärkste Ziel des Landes), oder bis dahin in app/sitemap.ts die Priorität auf 0.5 senken und in lib/page-factory.tsx bei fehlender Guide eine spezifischere Description generieren statt des Platzhaltersatzes.",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "L"
    },
    {
      "title": "sitemap.ts: lastModified ist überall Build-Zeit, changeFrequency/priority ohne Wirkung",
      "severity": "mittel",
      "evidence": "app/sitemap.ts:9, :13, :14, :15, :16 und :22 setzen jeweils `lastModified: new Date()`. Die Funktion läuft zur Build-Zeit, d. h. jeder Vercel-Deploy — auch ein reiner CSS-Fix — datiert alle ~55 URLs neu. Google entwertet ein `lastmod`, das nachweislich nicht mit inhaltlichen Änderungen korreliert, und ignoriert es dann dauerhaft. `changeFrequency` (Zeilen 10, 13-16, 23) und `priority` (Zeilen 11, 13-16, 24) werden von Google seit 2023 offiziell komplett ignoriert.",
      "recommendation": "Echte Änderungsdaten in die Daten legen: `DiscoverItem` (lib/content.ts:26-37) und `StateGuideData` (lib/states/types.ts) je ein `updated: \"2026-08-25\"`-Feld geben und in app/sitemap.ts `lastModified: new Date(item.updated)` verwenden. Für die statischen Routen ein Konstanten-Datum pflegen. `changeFrequency`/`priority` können bleiben (schaden nicht), sind aber tote Bytes — die Zeit besser in korrekte lastmod investieren.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "M"
    },
    {
      "title": "Keine Bild-Sitemap, obwohl die Site vollständig bildgetrieben ist",
      "severity": "mittel",
      "evidence": "app/sitemap.ts:17-26 erzeugt Einträge ausschließlich mit url/lastModified/changeFrequency/priority. Das von Next.js unterstützte `images`-Feld von `MetadataRoute.Sitemap` wird nirgends genutzt. Dabei liegt zu jedem Item ein Hero-Bild vor (`item.image` in lib/content.ts, `guide.hero.src` in lib/states/data/*) und public/images/ enthält über 60 ausgelieferte Fotos. Google Bilder ist für „playas de Venezuela“, „Salto Ángel“, „Médanos de Coro“ ein erheblicher Traffic-Kanal, der derzeit nur über das HTML entdeckt wird.",
      "recommendation": "In app/sitemap.ts pro Eintrag ergänzen:\n```ts\nimages: [absoluteUrl(guide?.hero?.src ?? item.image)].filter(u => u.startsWith(\"https://mrsvenezuela.com\"))\n```\n(Wikimedia-Remote-URLs gehören nicht in die eigene Bild-Sitemap, weil die Bilder nicht auf der eigenen Domain liegen.) Parallel die Galeriebilder aus components/content/place-gallery.tsx mit aufnehmen. Voraussetzung für die Wirkung: sprechende `alt`-Texte, die auf den Detailseiten überwiegend vorhanden sind.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "M"
    },
    {
      "title": "Alle Remote-Bilder laufen mit `unoptimized` — LCP-Bilder als Wikimedia-Originale",
      "severity": "mittel",
      "evidence": "components/content/detail-page.tsx:818 `unoptimized={item.image.startsWith(\"http\")}` — und das ist das `priority`-Hero-Bild (Zeile 814). Gleiches Muster in components/content/state-editorial-guide.tsx:218 (Hero mit `priority` in Zeile 214), :105, components/content/los-roques-guide.tsx:113 und :97, medanos-guide.tsx:307/:288, pico-bolivar-guide.tsx:212/:183, island-carousel.tsx:53, place-gallery.tsx:80/:160, localized-detail-page.tsx:156; canaima-experience-card.tsx:38, canaima-landmarks.tsx:109, manual-image-carousel.tsx:52 und detail-page.tsx:1302 setzen `unoptimized` sogar bedingungslos. Die Quellen sind Wikimedia-Originale mit `?width=1800` bzw. `?width=2200` (lib/content.ts:60-63) — unkomprimierte JPEGs als LCP-Element. next.config.ts:4-15 pflegt zwar `remotePatterns` für upload.wikimedia.org und commons.wikimedia.org, die durch `unoptimized` wirkungslos bleiben.",
      "recommendation": "`unoptimized` mindestens für alle `priority`-Heros entfernen, damit Vercel WebP/AVIF in der passenden Breite ausliefert. Falls der Grund für `unoptimized` die 302-Weiterleitung von `Special:FilePath` war: statt commons.wikimedia.org direkt die aufgelöste upload.wikimedia.org-URL speichern (Pattern ist bereits erlaubt, next.config.ts:7-9). Zusätzlich in next.config.ts `images: { formats: [\"image/avif\", \"image/webp\"], minimumCacheTTL: 2592000 }` setzen — der Default in Next 15.5 ist 60 Sekunden, d. h. jedes Bild wird faktisch permanent neu optimiert.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "M"
    },
    {
      "title": "next.config.ts enthält keine headers(), redirects() und keine Bild-/Header-Tuning-Optionen",
      "severity": "mittel",
      "evidence": "next.config.ts:3-16 besteht ausschließlich aus `images.remotePatterns`. Keine `headers()` (kein X-Content-Type-Options, kein Strict-Transport-Security, kein Cache-Control für /images/*), keine `redirects()`, kein `trailingSlash` (Default false — Next 308-redirected /pfad/ → /pfad, das ist korrekt), kein `poweredByHeader: false`. Es existiert auch keine vercel.json im Repo-Root (`cat vercel.json` → nicht vorhanden), d. h. www-vs-apex-Weiterleitung und Preview-noindex sind im Code nirgends nachweisbar und liegen ausschließlich im Vercel-Dashboard.",
      "recommendation": "1) `headers()` ergänzen mit `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin` und `Cache-Control: public, max-age=31536000, immutable` für `/images/:path*` (die Dateien sind inhaltlich stabil). 2) `poweredByHeader: false`. 3) Separat im Vercel-Dashboard verifizieren: www.mrsvenezuela.com → 308 auf mrsvenezuela.com (oder umgekehrt, konsistent zu absoluteUrl in lib/utils.ts:9) und http → https. Das lässt sich aus dem Repo nicht prüfen und muss live getestet werden.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "M"
    },
    {
      "title": "Fünf verwaiste Detailseiten ohne einen einzigen crawlbaren internen Link",
      "severity": "mittel",
      "evidence": "Interne Links im gerenderten HTML kommen aus: components/sections/site-header.tsx (/, /playas, /#articulos, /estados, /estado/[slug] — Zeilen 76, 100, 106, 165, 185, 206), components/sections/home-footer.tsx:20-26, components/sections/featured-destinations.tsx:30 (4 Items: canaima, los-roques, medanos-de-coro, pico-bolivar), components/sections/articles.tsx:28 (3 Artikel), app/playas/page.tsx:208 (15 Playas), components/content/guide-related.tsx:42/:58 (/estados + /estado/[slug]). Damit erhalten /ciudad/caracas (lib/content.ts:400-406), /animal/turpial (:407-413), /planta/orquidea (:414-420), /comida/arepa (:421-427) und /historia/camino-de-los-libertadores (:428-434) null interne Links. Der einzige weitere Zugang ist components/sections/search-overlay.tsx:229-296 — dessen Links entstehen erst nach `useState`-Eingabe (Zeile 40, 54) und stehen nie im SSR-HTML.",
      "recommendation": "components/sections/category-grid.tsx existiert bereits, wird aber in app/page.tsx:59-66 nicht gerendert (`grep -rn \"CategoryGrid\" app/` → kein Treffer). Entweder diese Sektion auf der Startseite wieder einhängen, oder in components/content/guide-related.tsx eine zweite Zeile „Naturaleza y cultura de Venezuela“ mit Links auf turpial/orquidea/arepa/camino-de-los-libertadores ergänzen — sie erscheint dann unter allen 23 Guides und verteilt Linkjuice auf die verwaisten Seiten.",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "Markenname im Site-Namen inkonsistent: „Descubre Venezuela“ vs. „Mrs Venezuela“",
      "severity": "mittel",
      "evidence": "app/layout.tsx:27-28 und :39-40 verwenden durchgängig „Descubre Venezuela“ (auch im Title-Template). lib/institutional-i18n.ts:10 und :11 liefern dagegen `metaTitle: \"Sobre nosotros | Mrs Venezuela\"` bzw. `\"Contacto | Mrs Venezuela\"`. components/sections/site-header.tsx:76 `aria-label=\"Mrs Venezuela, inicio\"`. components/content/detail-page.tsx:824 zeigt im Hero den Badge „Descubre Venezuela“. Die Domain ist mrsvenezuela.com (lib/utils.ts:9), die Kontaktadresse infomrsvenezuela@gmail.com (home-footer.tsx:70), Instagram @mrsvenezuela_1 (home-footer.tsx:8). Per curl sichtbar: /contacto → „Contacto | Mrs Venezuela“, /estado/merida → „… | Descubre Venezuela“.",
      "recommendation": "Auf „Mrs Venezuela“ als Site-Name vereinheitlichen (Domain, Social Handles und Kontaktadresse sprechen eindeutig dafür) und „Descubre Venezuela“ nur noch als Claim/`alternateName` führen. Konkret: app/layout.tsx:28 `template: \"%s | Mrs Venezuela\"`, :39 `siteName: \"Mrs Venezuela\"`, und im WebSite-JSON-LD `name: \"Mrs Venezuela\", alternateName: \"Descubre Venezuela\"`. Google leitet den in den SERPs angezeigten Site-Namen aus genau diesen Signalen ab; widersprüchliche Angaben führen dazu, dass stattdessen der nackte Domainname gezeigt wird.",
      "impact_search": "mittel",
      "impact_ai": "hoch",
      "effort": "S"
    },
    {
      "title": "Identisches FAQPage-Boilerplate auf allen Seiten ohne echte FAQ",
      "severity": "mittel",
      "evidence": "lib/page-factory.tsx:79-104: Fehlt eine Guide, wird ein FAQPage mit zwei generierten Fragen ausgegeben — `\"¿Cuál es la mejor época para visitar ${item.name}?\"` und `\"¿Qué se puede descubrir cerca de ${item.name}?\"` — mit zwei **wörtlich identischen** Antworttexten (Zeilen 92 und 100) auf allen betroffenen Seiten. Betroffen sind alle Nicht-Estado-Seiten: 15 Playas, 2 Parques, 1 Montaña, 3 Artículos, Caracas, Turpial, Orquídea, Arepa, Camino de los Libertadores — rund 26 Seiten mit demselben FAQ-Markup. Google zeigt FAQ-Rich-Results seit August 2023 praktisch nur noch für Behörden- und Gesundheitsseiten.",
      "recommendation": "Den Fallback-Zweig (page-factory.tsx:86-103) ersatzlos streichen. Der Guide-Zweig (Zeilen 81-85, gespeist aus `guide.faqs.items`) bleibt — dort stehen echte, seitenspezifische Antworten. Wo FAQ inhaltlich sinnvoll ist (Playas, Parques), lieber pro Item echte Fragen in lib/content.ts pflegen: für AI-Crawler sind konkrete Frage-Antwort-Paare weiterhin sehr wertvoll, identische Platzhalter dagegen ein Qualitätssignal nach unten. Zusätzlich: Bei `articulo` erzeugt page-factory.tsx:65 ein `Article` ohne `datePublished`, `author` und `publisher` — für Article-Markup Pflichtfelder.",
      "impact_search": "mittel",
      "impact_ai": "hoch",
      "effort": "S"
    },
    {
      "title": "Vier von fünf Sprachen sind für Suche und AI-Crawler unsichtbar",
      "severity": "mittel",
      "evidence": "components/i18n/content-translator.tsx:76-80 übersetzt per `useEffect` ausschließlich DOM-Textknoten und die Attribute alt/aria-label/placeholder/title (Zeile 74). `<title>`, `<meta name=\"description\">` und alle JSON-LD-Knoten bleiben unangetastet. components/i18n/language-provider.tsx:15 startet immer mit `\"es\"`; die Sprache kommt aus localStorage (Zeile 18) bzw. wird per Cookie gesetzt (Zeile 27) — beides für Crawler nicht existent. `grep -rn \"hreflang|alternates.*languages\" app lib components` → null Treffer. Es gibt keine lokalisierten URLs (app/-Baum enthält kein [locale]-Segment). app/contacto/page.tsx:5-9 dokumentiert die Entscheidung sogar bewusst.",
      "recommendation": "Bewusste Produktentscheidung, aber die Konsequenz sollte explizit sein: en/de/fr/zh erzeugen null organischen Traffic und werden von AI-Crawlern nie in der Zielsprache zitiert. Zwei Optionen: (a) Status quo akzeptieren und die Sprachumschaltung als reines On-Site-Feature führen; (b) mittelfristig `app/[locale]/`-Routing mit `generateStaticParams` über die fünf Sprachen und `alternates: { languages: { \"es-VE\": …, \"en\": …, x-default: … } }` in app/layout.tsx. Option (b) ist der einzige Weg, aus den bereits existierenden Übersetzungen (lib/site-translations.json, lib/institutional-i18n.ts) SEO-Wert zu ziehen. Vorher: die englischen/deutschen Metadaten in lib/institutional-i18n.ts:14-27 liegen bereits vor und werden aktuell nie ausgeliefert.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "L"
    },
    {
      "title": "Kein BreadcrumbList-Markup auf irgendeiner Seite",
      "severity": "niedrig",
      "evidence": "`grep -rn \"BreadcrumbList\" app lib components` → null Treffer. Die drei JSON-LD-Stellen sind app/page.tsx:46-54 (TravelGuide), app/estados/page.tsx:48-64 (CollectionPage/ItemList) und lib/page-factory.tsx:55-106 (WebSite + TouristDestination/Article + FAQPage). Die Hierarchie / → /estados → /estado/merida ist inhaltlich vorhanden (components/content/guide-related.tsx:42 verlinkt zurück auf /estados), aber nirgends ausgezeichnet. In den SERPs erscheint dadurch der nackte URL-Pfad statt einer lesbaren Breadcrumb.",
      "recommendation": "In lib/page-factory.tsx einen vierten @graph-Knoten ergänzen:\n```ts\n{ \"@type\": \"BreadcrumbList\", itemListElement: [\n  { \"@type\": \"ListItem\", position: 1, name: \"Inicio\", item: absoluteUrl() },\n  ...(kind === \"estado\" ? [{ \"@type\": \"ListItem\", position: 2, name: \"Estados\", item: absoluteUrl(\"/estados\") }] : []),\n  { \"@type\": \"ListItem\", position: kind === \"estado\" ? 3 : 2, name: item.name },\n]}\n```\nFür Playas analog mit /playas als Zwischenstufe. Zusätzlich fehlt eine sichtbare Breadcrumb im DOM — Google bevorzugt Markup, das sich mit sichtbarer Navigation deckt.",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "robots.ts minimal; absoluteUrl hardcodet die Produktionsdomain",
      "severity": "niedrig",
      "evidence": "app/robots.ts:5-11 liefert nur `{ userAgent: \"*\", allow: \"/\" }` plus Sitemap-Verweis — keine Disallow-Regeln, kein `host`, keine expliziten Regeln für AI-Crawler (GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot sind über den Wildcard implizit erlaubt). lib/utils.ts:9 `const baseUrl = \"https://mrsvenezuela.com\";` ist fest verdrahtet — ohne Fallback auf `process.env.VERCEL_URL`. Jede Vercel-Preview-Deployment liefert damit robots.txt mit „allow: /“ und Canonicals auf die Produktionsdomain.",
      "recommendation": "Der harte Canonical schützt Previews faktisch vor Duplicate Content — das ist hier eher Feature als Bug, sollte aber bewusst so bleiben. Empfehlung: in app/robots.ts bei `process.env.VERCEL_ENV !== \"production\"` auf `{ userAgent: \"*\", disallow: \"/\" }` umschalten, damit Previews gar nicht erst gecrawlt werden. Optional die AI-Crawler explizit auflisten (auch wenn erlaubt) — das dokumentiert die Absicht und schützt vor versehentlichen Wildcard-Änderungen.",
      "impact_search": "niedrig",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "Keine llms.txt, kein IndexNow-Key, keine Verifizierungs-Tags",
      "severity": "niedrig",
      "evidence": "`find . -maxdepth 3 -iname \"llms*.txt\" -o -iname \"*indexnow*\"` (ohne node_modules) → nur ./.vercel/README.txt. public/ enthält nur data/, flags/, images/. `grep -rn \"verification\" app lib components` → null Treffer, d. h. app/layout.tsx nutzt `metadata.verification` (google/bing/yandex/other) nicht. Für die Search Console läuft die Verifizierung damit vermutlich über DNS — nicht aus dem Repo prüfbar.",
      "recommendation": "1) `public/llms.txt` anlegen: kurze Site-Beschreibung plus eine kuratierte Linkliste (/estados, die 23 Guides, /playas, /sobre-nosotros) im Markdown-Format. Die Daten liegen in lib/nav-data.ts bereits strukturiert vor — ein `app/llms.txt/route.ts` könnte die Datei sogar aus `states` und `stateGuideSlugs` generieren und bliebe damit automatisch aktuell. 2) IndexNow: einen GUID als `public/<key>.txt` ablegen und nach jedem Deploy die geänderten URLs an api.indexnow.org melden (Bing/Yandex indexieren dadurch binnen Stunden statt Wochen). 3) `metadata.verification` in app/layout.tsx nur ergänzen, falls die GSC-Verifizierung nicht bereits per DNS läuft.",
      "impact_search": "niedrig",
      "impact_ai": "hoch",
      "effort": "M"
    },
    {
      "title": "/playas dupliziert die Beschreibungstexte der Detailseiten wörtlich",
      "severity": "niedrig",
      "evidence": "app/playas/page.tsx:8-99 pflegt ein eigenes `famousBeaches`-Array mit denselben Texten wie lib/content.ts. Beispiel: playas/page.tsx:13 `\"Un archipiélago de cayos, arrecifes y lagunas turquesa donde el Caribe se siente inmenso y sereno.\"` ist identisch mit lib/content.ts (featured, los-roques) — und genau dieser String wird über lib/page-factory.tsx:25 zur `<meta name=\"description\">` von /playa/los-roques (per curl bestätigt). Dasselbe für alle 15 Einträge. Zusätzlich ist die Liste manuell doppelt gepflegt, obwohl `searchIndex.filter(i => i.kind === \"playa\")` dieselben 15 Items liefert.",
      "recommendation": "app/playas/page.tsx auf `searchIndex` umstellen (Single Source of Truth) und für den Hub eigene, kürzere Anreißer schreiben, die sich von den Meta-Descriptions der Detailseiten unterscheiden. So entsteht auf /playas eigenständiger Text, und Änderungen an lib/content.ts müssen nicht doppelt nachgezogen werden. Der Effekt auf das Ranking ist gering — der Wartungsnutzen und die Abgrenzung Hub/Detail sind der eigentliche Gewinn.",
      "impact_search": "niedrig",
      "impact_ai": "niedrig",
      "effort": "S"
    }
  ]
}