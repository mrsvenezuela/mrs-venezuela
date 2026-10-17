{
  "topic": "Next.js 15.5.20 / Vercel SEO-Implementierung für mrsvenezuela.com (Repo-Abgleich + Web-Recherche, Stand 25.08.2026)",
  "summary": "Der SEO-Unterbau ist solider als erwartet: alle 58 Routen sind echt statisch prerendert (`.next/prerender-manifest.json`, `initialRevalidateSeconds: false`), `generateStaticParams` existiert in allen zehn `[slug]`-Routen, robots.txt und sitemap.xml (55 URLs) werden korrekt als statische Dateien ausgeliefert, und `metadataBase` ist sauber gesetzt.\n\nEs gibt aber einen harten Indexierungs-Bug, den ich im gebauten HTML verifiziert habe: `app/playas/page.tsx` ist `\"use client\"` und kann deshalb kein `metadata` exportieren. `.next/server/app/playas.html` trägt darum den Titel, die Description UND das `<link rel=\"canonical\" href=\"https://mrsvenezuela.com\">` des Root-Layouts — die Playas-Übersicht erklärt sich selbst zum Duplikat der Startseite und fällt aus dem Index. Ursache ist die Kombination aus Client-Component-Page und dem globalen `alternates.canonical: \"/\"` in `app/layout.tsx`; dieselbe Vererbung setzt auch auf `/contacto` und `/sobre-nosotros` ein falsches `og:url`.\n\nWeitere belegte Lücken: kein einziges Favicon/Icon im ganzen Projekt (`ICONS: null` im gebauten HTML), alle 55 Sitemap-Einträge tragen denselben Build-Zeitstempel als `lastmod`, `minimumCacheTTL` steht auf 60 Sekunden (teuer bei Vercel-Bildtransformationen), und Remote-Bilder von Wikimedia laufen fast überall mit `unoptimized` — 1800-px-JPEGs ohne srcset auf Mobilgeräten, direkt gegen Core Web Vitals.\n\nZu hreflang: `alternates.languages` lohnt sich hier heute NICHT. Die Übersetzung passiert per DOM-Mutation in `components/i18n/content-translator.tsx`, es gibt keine lokalisierten URLs — hreflang-Einträge, die fünf Sprachen auf dieselbe URL zeigen, sind ungültig. Entweder so lassen oder echte `/[locale]`-Routen bauen.\n\nWichtige Versionsfalle: nextjs.org liefert inzwischen die Doku für 16.3.3 aus. Ich habe jede Aussage gegen die installierten Typen in `node_modules/next@15.5.20` geprüft. Konkret nicht verfügbar in 15.5.20: das `other`-Feld in robots.ts (erst v16.3.0). Und `params` in `opengraph-image.tsx` ist in 15.5.20 ein einfaches Objekt, kein Promise (Loader-Code: `handler({ params: restParams, id })`).",
  "key_points": [
    {
      "claim": "Metadata-Exporte funktionieren in Client Components überhaupt nicht — sie schlagen still fehl. `app/playas/page.tsx` ist `\"use client\"`, deshalb erbt die Seite Titel, Description und Canonical vom Root-Layout.",
      "source_url": "https://nextjs.org/docs/app/api-reference/functions/generate-metadata",
      "why_it_matters": "Empirisch verifiziert in `.next/server/app/playas.html`: `<title>Descubre Venezuela | Guia premium…</title>` und `<link rel=\"canonical\" href=\"https://mrsvenezuela.com\"/>`. Google konsolidiert /playas damit auf die Startseite. Das ist der schwerwiegendste Fund.",
      "confidence": "belegt",
      "date_or_version": "Doku v16.3.3, lastUpdated 2026-08-25; Verhalten identisch in 15.5.20"
    },
    {
      "claim": "`alternates` wird flach vererbt, nicht tief gemerged: setzt eine Seite kein eigenes `alternates`, gilt das des Root-Layouts. `alternates.canonical: \"/\"` in `app/layout.tsx` ist damit ein Fallback auf die Startseite für jede Seite ohne eigenen Canonical.",
      "source_url": "https://nextjs.org/docs/app/api-reference/functions/generate-metadata",
      "why_it_matters": "Betrifft aktuell /playas (kompletter Canonical-Fehler) und /_not-found. Gleiches Muster bei `openGraph.url: \"/\"` — /contacto und /sobre-nosotros senden `og:url = https://mrsvenezuela.com`, obwohl ihr Canonical korrekt ist.",
      "confidence": "belegt",
      "date_or_version": "next 15.5.20, gebautes HTML vom 2026-08-25"
    },
    {
      "claim": "Ein absoluter Pfad in einem Metadata-Feld wird relativ zu `metadataBase` aufgelöst, nicht als Ersatz des ganzen Pfads. Doppelte Slashes werden normalisiert, und ein voll qualifizierter URL-String ignoriert `metadataBase` komplett.",
      "source_url": "https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadatabase",
      "why_it_matters": "`lib/utils.ts` baut mit `absoluteUrl()` überall absolute URLs und umgeht `metadataBase` damit faktisch. Funktioniert, ist aber redundant — und wenn die Domain je wechselt, muss man beide Stellen anfassen (`app/layout.tsx` und `lib/utils.ts` Zeile 8-12).",
      "confidence": "belegt",
      "date_or_version": "Doku v16.3.3"
    },
    {
      "claim": "`MetadataRoute.Sitemap` unterstützt in 15.5.20 bereits `alternates.languages`, `images` und `videos` — verifiziert in `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts` Zeile 554-565.",
      "source_url": "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap",
      "why_it_matters": "Eine Bild-Sitemap ist ohne Zusatzpaket möglich — relevant für eine Foto-lastige Reise-Site mit 24 Bundesstaat-Guides. Die Localizations kamen in v14.2.0, `changeFrequency`/`priority` in v13.4.14.",
      "confidence": "belegt",
      "date_or_version": "next 15.5.20 (lokale Typdefinition)"
    },
    {
      "claim": "`generateSitemaps` ist erst ab ~50.000 URLs pro Sitemap nötig (Google-Limit). Ausgabe liegt unter `/<segment>/sitemap/<id>.xml`. In Next 16 ist `id` ein Promise, in 15.5.20 noch ein einfacher Wert.",
      "source_url": "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap#generating-multiple-sitemaps",
      "why_it_matters": "`app/sitemap.ts` erzeugt aktuell 55 URLs (gezählt in `.next/server/app/sitemap.xml.body`). generateSitemaps ist hier reiner Overhead — nicht einbauen.",
      "confidence": "belegt",
      "date_or_version": "Version History: v16.0.0 id→Promise, v13.3.0 eingeführt"
    },
    {
      "claim": "`MetadataRoute.Robots` akzeptiert ein Array von rules-Objekten, dazu `sitemap: string | string[]` und `host`. Das in der aktuellen Doku gezeigte `other`-Feld für Nicht-Standard-Direktiven gibt es erst ab v16.3.0.",
      "source_url": "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots",
      "why_it_matters": "Verifiziert gegen den lokalen Typ `RobotsFile` (metadata-interface.d.ts Zeile 539-553): dort existieren nur `userAgent`, `allow`, `disallow`, `crawlDelay`. Wer die Online-Doku 1:1 kopiert, bekommt in diesem Repo einen TS-Fehler.",
      "confidence": "belegt",
      "date_or_version": "next 15.5.20 vs. Doku v16.3.3"
    },
    {
      "claim": "`dynamicParams` ist standardmäßig `true`: Pfade, die `generateStaticParams` nicht liefert, werden bei der ersten Anfrage on-demand gerendert und gecacht. Mit `export const dynamicParams = false` liefern nicht gelistete Pfade sofort 404.",
      "source_url": "https://nextjs.org/docs/app/api-reference/functions/generate-static-params",
      "why_it_matters": "Im Repo bestätigt: `.next/prerender-manifest.json` zeigt für alle zehn `[slug]`-Routen `\"fallback\": null` (= blocking/on-demand). Jede Müll-URL wie /playa/xyz startet also eine Function, die dann `notFound()` wirft. Bei rein statischem Content ist das unnötige Laufzeit.",
      "confidence": "belegt",
      "date_or_version": "Doku v16.3.3, Verhalten seit v13"
    },
    {
      "claim": "Streaming Metadata (seit v15.2.0) sendet die UI vor `generateMetadata`; die Tags landen dann im `<body>`. Für HTML-limitierte Bots (z. B. facebookexternalhit) blockiert Next weiterhin und schreibt ins `<head>`. Steuerbar über `htmlLimitedBots` in next.config.",
      "source_url": "https://nextjs.org/docs/app/api-reference/functions/generate-metadata#streaming-metadata",
      "why_it_matters": "Für dieses Repo faktisch irrelevant: alle 58 Routen sind vollständig prerendert, die Metadaten stehen bereits im statischen `<head>` (im gebauten HTML geprüft). `htmlLimitedBots: /.*/` wäre hier ein Performance-Verlust ohne Nutzen.",
      "confidence": "belegt",
      "date_or_version": "eingeführt v15.2.0"
    },
    {
      "claim": "Vercel setzt `x-robots-tag: noindex` automatisch auf Preview-Deployments und auf veraltete Production-Deployments. Ausnahme: sobald einem Branch eine Production-Domain zugewiesen ist, entfällt der Header.",
      "source_url": "https://vercel.com/docs/headers/response-headers",
      "why_it_matters": "Es braucht also keinen eigenen Code, um Previews aus dem Index zu halten. Wichtig ist nur, keiner Preview-Branch eine echte Domain zuzuweisen. Ein `robots.ts`, das auf `VERCEL_ENV` reagiert, ist überflüssig.",
      "confidence": "belegt",
      "date_or_version": "Vercel Docs, last_updated 2026-07-08"
    },
    {
      "claim": "Vercel rechnet Image-Transformationen bei jedem Cache-MISS und STALE ab (Hobby: 5.000/Monat inkl., 300K Cache-Reads, 100K Cache-Writes). Quellbilder max. 8192 px, Ergebnis max. 10 MB.",
      "source_url": "https://vercel.com/docs/image-optimization/limits-and-pricing",
      "why_it_matters": "`.next/images-manifest.json` zeigt `minimumCacheTTL: 60`. Jeder Cache-Eintrag wird nach 60 Sekunden STALE → erneute abgerechnete Transformation. Bei 8 deviceSizes × 8 imageSizes und Remote-Quellen von Wikimedia summiert sich das schnell.",
      "confidence": "belegt",
      "date_or_version": "Vercel Docs, last_updated 2026-02-23"
    },
    {
      "claim": "IndexNow wird von Bing, Yandex, Naver, Seznam, Yep und Amazon unterstützt — Google steht nicht auf der Liste. Die Key-Datei muss exakt `<key>.txt` heißen, den Key als einzigen Inhalt haben und öffentlich erreichbar sein.",
      "source_url": "https://www.indexnow.org/faq",
      "why_it_matters": "`public/<key>.txt` in diesem Repo reicht aus und wird von Vercel automatisch als `text/plain` ausgeliefert. POST-Endpoint `https://api.indexnow.org/indexnow` mit `{host, key, urlList}`, max. 10.000 URLs, min. 5 Minuten zwischen Wiederholungen derselben URL.",
      "confidence": "belegt",
      "date_or_version": "indexnow.org FAQ, abgerufen 2026-08-25"
    },
    {
      "claim": "hreflang setzt separate URLs pro Sprache voraus, und die Annotationen müssen im initialen HTML stehen. Rein clientseitig injizierte Sprachvarianten werden von Crawlern nicht zuverlässig erkannt.",
      "source_url": "https://fridamarketing.com/seo/technical-seo/hreflang-complete-guide-nextjs-2026",
      "why_it_matters": "`components/i18n/content-translator.tsx` übersetzt das DOM zur Laufzeit, `components/i18n/language-provider.tsx` setzt nur `document.documentElement.lang`. Es existiert kein einziges lokalisiertes URL-Paar — `alternates.languages` wäre hier eine Falschangabe.",
      "confidence": "wahrscheinlich",
      "date_or_version": "2026"
    },
    {
      "claim": "`params` in `opengraph-image.tsx` ist in 15.5.20 ein einfaches Objekt, nicht ein Promise — die aktuelle Doku zeigt bereits die v16-Signatur.",
      "source_url": "https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image",
      "why_it_matters": "Verifiziert im Loader `node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js` Zeile 176: `return handler({ params: restParams, id })`. Version History bestätigt: „v16.0.0 | params is now a promise\". Doku-Snippet kopieren erzeugt hier eine falsche TS-Signatur.",
      "confidence": "belegt",
      "date_or_version": "next 15.5.20 (Loader-Quelltext)"
    },
    {
      "claim": "vercel.json und next.config.ts können beide Header und Redirects setzen; vercel.json unterstützt zusätzlich `cleanUrls`, `trailingSlash`, `bulkRedirectsPath` und `images`. Es darf nur eine Konfigurationsdatei pro Projekt geben (vercel.json ODER vercel.ts).",
      "source_url": "https://vercel.com/docs/project-configuration",
      "why_it_matters": "Das Repo hat aktuell kein vercel.json. Für einen reinen Next.js-Build gehören Redirects und Header nach `next.config.ts` — dann greifen sie auch bei `next dev` und `next start` und sind testbar. vercel.json nur nutzen, wenn man Plattform-Features braucht, die next.config nicht kennt.",
      "confidence": "belegt",
      "date_or_version": "Vercel Docs, last_updated 2026-06-16"
    }
  ],
  "actions": [
    {
      "action": "/playas serverseitig machen — Canonical-Bug beheben",
      "priority": "P0",
      "effort": "M",
      "how": "`app/playas/page.tsx` beginnt mit `\"use client\"` und kann deshalb kein `metadata` exportieren. Verifiziert: `.next/server/app/playas.html` trägt canonical=Startseite.\n\nSchritt 1: Datei umbenennen nach `components/sections/playas-page-content.tsx`, `\"use client\"` behalten, Default-Export z. B. `PlayasPageContent`.\nSchritt 2: neues `app/playas/page.tsx` als Server Component:\n\n```tsx\nimport type { Metadata } from \"next\";\nimport { PlayasPageContent } from \"@/components/sections/playas-page-content\";\nimport { searchIndex } from \"@/lib/content\";\nimport { absoluteUrl } from \"@/lib/utils\";\n\nexport const metadata: Metadata = {\n  title: \"Playas e islas de Venezuela: las 15 más conocidas\",\n  description:\n    \"Guía de las playas, cayos e islas de Venezuela: Los Roques, Morrocoy, Mochima, Margarita, Choroní y más, con ubicación y qué esperar de cada una.\",\n  alternates: { canonical: \"/playas\" },\n  openGraph: {\n    title: \"Playas e islas de Venezuela | Descubre Venezuela\",\n    description: \"Los Roques, Morrocoy, Mochima, Margarita, Choroní y más.\",\n    url: \"/playas\",\n    type: \"website\",\n    locale: \"es_VE\",\n  },\n};\n\nexport default function PlayasPage() {\n  const beaches = searchIndex.filter((item) => item.kind === \"playa\");\n  const schema = {\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"CollectionPage\",\n    name: \"Playas e islas de Venezuela\",\n    url: absoluteUrl(\"/playas\"),\n    inLanguage: \"es\",\n    mainEntity: {\n      \"@type\": \"ItemList\",\n      numberOfItems: beaches.length,\n      itemListElement: beaches.map((b, i) => ({\n        \"@type\": \"ListItem\",\n        position: i + 1,\n        name: b.name,\n        url: absoluteUrl(`/playa/${b.slug}`),\n      })),\n    },\n  };\n  return (\n    <>\n      <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />\n      <PlayasPageContent />\n    </>\n  );\n}\n```\n\nDie Muster dafür stehen schon im Repo: `app/estados/page.tsx` macht exakt das (Server-Page + JSON-LD + Client-Kind `StatesHub`). Prüfen nach dem Build mit: `node -e \"const h=require('fs').readFileSync('.next/server/app/playas.html','utf8');console.log(h.match(/<link rel=.canonical.[^>]*>/))\"`"
    },
    {
      "action": "Globalen Canonical- und og:url-Fallback aus dem Root-Layout entfernen",
      "priority": "P0",
      "effort": "S",
      "how": "In `app/layout.tsx` sorgen `alternates: { canonical: \"/\" }` und `openGraph.url: \"/\"` dafür, dass jede Seite ohne eigene Angabe auf die Startseite zeigt.\n\nIn `app/layout.tsx` entfernen:\n```ts\n  alternates: {\n    canonical: \"/\",\n  },\n```\nund im `openGraph`-Block die Zeile `url: \"/\",` streichen. `metadataBase`, `title.template`, `openGraph.images` und `twitter` bleiben unangetastet.\n\nDann in `app/page.tsx` neu setzen (die Datei hat aktuell gar kein `metadata`):\n```ts\nimport type { Metadata } from \"next\";\n\nexport const metadata: Metadata = {\n  alternates: { canonical: \"/\" },\n  openGraph: { url: \"/\" },\n};\n```\n\nUnd in `app/contacto/page.tsx` sowie `app/sobre-nosotros/page.tsx` je einen `openGraph`-Block mit `url: \"/contacto\"` bzw. `url: \"/sobre-nosotros\"` in das bestehende `generateMetadata()` ergänzen — beide senden derzeit `og:url = https://mrsvenezuela.com`.\n\nAchtung: `alternates` wird flach ersetzt. Wenn später `alternates.languages` im Layout landet, geht es auf jeder Seite verloren, die ein eigenes `alternates` setzt — dann muss jede Seite beides mitliefern."
    },
    {
      "action": "Favicon und Icons anlegen — im Projekt existiert aktuell keines",
      "priority": "P0",
      "effort": "S",
      "how": "Verifiziert: das gebaute `index.html` enthält kein einziges `<link rel=\"icon\">`, und weder `app/` noch `public/` haben eine .ico- oder icon-Datei. Google zeigt in den mobilen SERPs dann einen generischen Globus.\n\nDateikonventionen von Next 15 nutzen (keine Metadata-Konfiguration nötig, Tags werden automatisch injiziert):\n- `app/favicon.ico` (32×32, klassischer Fallback)\n- `app/icon.png` (z. B. 512×512)\n- `app/apple-icon.png` (180×180)\n\nOptional dazu `app/manifest.ts` mit `MetadataRoute.Manifest` (der Typ existiert in 15.5.20). Passendes Motiv wäre das bestehende Wappen-/Logo-Motiv aus dem Header („Mrs Venezuela\")."
    },
    {
      "action": "lastModified in der Sitemap aus echten Inhaltsdaten statt new Date()",
      "priority": "P1",
      "effort": "M",
      "how": "`app/sitemap.ts` setzt derzeit an jeder der 55 URLs `new Date()`. Im Build-Output `.next/server/app/sitemap.xml.body` tragen alle Einträge denselben Zeitstempel `2026-08-25T16:52:31.726Z`. Google wertet ein identisches lastmod über die ganze Site als Signal ohne Aussagekraft.\n\nEmpfohlener Weg (robust, kein Git nötig): ein Feld am Inhalt.\n1. In `lib/content.ts` den Typ `DiscoverItem` (Zeile 26 ff.) um `updated?: string;` erweitern.\n2. In `lib/states/types.ts` das Guide-Objekt um `updated: string;` erweitern und in den 23 Dateien unter `lib/states/data/` je ein ISO-Datum setzen (die Guides wurden laut `git log` am 2026-08-24 committet).\n3. `app/sitemap.ts` umbauen:\n\n```ts\nimport type { MetadataRoute } from \"next\";\nimport { pageKinds, searchIndex } from \"@/lib/content\";\nimport { getStateGuide } from \"@/lib/states\";\nimport { absoluteUrl } from \"@/lib/utils\";\n\nconst FALLBACK = \"2026-08-24\";\n\nexport default function sitemap(): MetadataRoute.Sitemap {\n  const staticPages = [\n    { url: absoluteUrl(), lastModified: FALLBACK, priority: 1 },\n    { url: absoluteUrl(\"/estados\"), lastModified: FALLBACK, priority: 0.9 },\n    { url: absoluteUrl(\"/playas\"), lastModified: FALLBACK, priority: 0.8 },\n    { url: absoluteUrl(\"/sobre-nosotros\"), lastModified: FALLBACK, priority: 0.5 },\n    { url: absoluteUrl(\"/contacto\"), lastModified: FALLBACK, priority: 0.5 },\n  ];\n\n  const detail = pageKinds.flatMap((kind) =>\n    searchIndex\n      .filter((item) => item.kind === kind)\n      .map((item) => {\n        const guide = kind === \"estado\" ? getStateGuide(item.slug) : undefined;\n        const image = guide?.hero?.src ?? item.image;\n        return {\n          url: absoluteUrl(`/${kind}/${item.slug}`),\n          lastModified: guide?.updated ?? item.updated ?? FALLBACK,\n          priority: kind === \"estado\" ? 0.9 : 0.75,\n          images: [image.startsWith(\"/\") ? absoluteUrl(image) : image],\n        };\n      }),\n  );\n\n  return [...staticPages, ...detail];\n}\n```\n\n`images` erzeugt automatisch den `xmlns:image`-Namespace und `<image:image><image:loc>` — der Typ ist in 15.5.20 vorhanden (metadata-interface.d.ts Zeile 563). Von einer Git-basierten Lösung würde ich abraten: Vercel klont flach, `git log` ist im Build nicht zuverlässig.\n\n`changeFrequency` kann ersatzlos weg (siehe outdated_beliefs)."
    },
    {
      "action": "robots.ts auf mehrere Regelgruppen umstellen (exakte 15.5.20-Syntax)",
      "priority": "P1",
      "effort": "S",
      "how": "`app/robots.ts` hat aktuell nur ein einzelnes rules-Objekt. Die Array-Form für 15.5.20 — ohne das `other`-Feld, das es hier noch nicht gibt:\n\n```ts\nimport type { MetadataRoute } from \"next\";\nimport { absoluteUrl } from \"@/lib/utils\";\n\nexport default function robots(): MetadataRoute.Robots {\n  return {\n    rules: [\n      {\n        userAgent: \"*\",\n        allow: \"/\",\n      },\n      {\n        userAgent: [\"GPTBot\", \"ClaudeBot\", \"PerplexityBot\", \"Google-Extended\", \"Applebot-Extended\"],\n        allow: \"/\",\n      },\n      {\n        userAgent: [\"AhrefsBot\", \"SemrushBot\", \"MJ12bot\", \"DotBot\"],\n        disallow: \"/\",\n      },\n    ],\n    sitemap: [absoluteUrl(\"/sitemap.xml\")],\n    host: \"mrsvenezuela.com\",\n  };\n}\n```\n\nAusgabe: pro rules-Objekt ein `User-Agent:`-Block, danach einmal `Host:` und die `Sitemap:`-Zeilen.\n\nWICHTIG: **niemals** `/_next/` disallowen. Googlebot braucht CSS und JS aus `/_next/static/`, um die Seite zu rendern; ein Disallow dort bricht das Rendering und damit die Bewertung. Die zweite Gruppe (KI-Crawler explizit erlaubt) ist eine bewusste Entscheidung für Sichtbarkeit in AI-Antworten — bei einer redaktionellen Reise-Site sinnvoll, bei Bedenken die Gruppe einfach weglassen (`allow: \"/\"` in Gruppe 1 deckt sie ohnehin ab)."
    },
    {
      "action": "Bildkosten und LCP bei Vercel entschärfen: minimumCacheTTL und qualities in next.config.ts",
      "priority": "P1",
      "effort": "S",
      "how": "`.next/images-manifest.json` zeigt `minimumCacheTTL: 60`. Jede optimierte Datei wird nach 60 s STALE und wird bei Vercel als neue Transformation abgerechnet.\n\n`next.config.ts` erweitern (alle drei Optionen existieren in 15.5.20, verifiziert in `node_modules/next/dist/shared/lib/image-config.d.ts` Zeile 76-94):\n\n```ts\nimport type { NextConfig } from \"next\";\n\nconst nextConfig: NextConfig = {\n  images: {\n    remotePatterns: [\n      { protocol: \"https\", hostname: \"upload.wikimedia.org\" },\n      { protocol: \"https\", hostname: \"commons.wikimedia.org\" },\n    ],\n    minimumCacheTTL: 31536000,          // 1 Jahr statt 60 s\n    qualities: [75],                     // nur eine Qualitätsstufe -> weniger Cache-Keys\n    deviceSizes: [640, 828, 1080, 1920], // statt 8 Breiten nur 4\n    formats: [\"image/webp\"],\n  },\n};\n\nexport default nextConfig;\n```\n\nDie Inhalte sind statisch und ändern sich nur beim Deploy — ein Jahr TTL ist hier korrekt, nicht riskant. `deviceSizes` von 8 auf 4 zu reduzieren halbiert die Zahl möglicher Varianten pro Bild direkt.\n\nRegel dazu: bei Änderung des Bildpfads ändert sich der Cache-Key ohnehin, ein langes TTL kann also nichts „einfrieren\"."
    },
    {
      "action": "unoptimized bei Remote-Bildern überdenken — direkter CWV-Verlust",
      "priority": "P1",
      "effort": "L",
      "how": "In 13 Komponenten steht `unoptimized` bzw. `unoptimized={item.image.startsWith(\"http\")}`, u. a. `components/content/detail-page.tsx` Zeile 818, 950, 1302, `components/content/localized-detail-page.tsx` Zeile 156, `components/content/state-editorial-guide.tsx`, `components/content/place-gallery.tsx`.\n\nWirkung heute: `lib/content.ts` Zeile 39-40 baut Commons-URLs mit `?width=1800` (bzw. 2200 für Pico Bolívar). Mit `unoptimized` bekommt ein Handy mit 390 px Viewport ein 1800-px-JPEG ohne WebP und ohne srcset — genau der LCP-Killer, den Core Web Vitals bestrafen. Vercel-Bildkosten sind dabei zwar null, aber der Preis ist Ranking.\n\nZwei Wege:\n(a) `unoptimized` streichen und den Optimizer arbeiten lassen — die remotePatterns für `upload.wikimedia.org` und `commons.wikimedia.org` stehen bereits in `next.config.ts`. Zusammen mit `minimumCacheTTL: 31536000` und `deviceSizes: [640,828,1080,1920]` bleiben die Transformationen überschaubar: ~55 Seiten × wenige Hero-/Galeriebilder × 4 Breiten, einmalig beim ersten Abruf.\n(b) Wenn `unoptimized` bleiben soll: die Commons-URL pro Breakpoint variieren, also `?width=` passend zum `sizes`-Attribut wählen statt pauschal 1800 — Wikimedia liefert Thumbnails in jeder gewünschten Breite.\n\nVorher messen: `npx lighthouse https://mrsvenezuela.com/estado/merida --preset=desktop` und mobil, LCP-Element notieren. Die gebaute Seite ist 113 KB HTML — der Flaschenhals sind mit hoher Wahrscheinlichkeit die Bilder, nicht das Markup."
    },
    {
      "action": "dynamicParams = false in den zehn [slug]-Routen setzen",
      "priority": "P1",
      "effort": "S",
      "how": "`.next/prerender-manifest.json` zeigt für alle zehn dynamischen Routen `\"fallback\": null` — nicht gelistete Slugs werden also zur Laufzeit gerendert, laufen durch `getItem()`, finden nichts und rufen `notFound()`. Bei rein statischem Content aus `lib/content.ts` gibt es keinen Grund dafür.\n\nIn jeder der zehn Dateien `app/{animal,articulo,ciudad,comida,estado,historia,montana,parque-nacional,planta,playa}/[slug]/page.tsx` eine Zeile ergänzen:\n\n```tsx\nexport const dynamicParams = false;\n```\n\nEffekt: unbekannte Slugs bekommen sofort 404 auf Routing-Ebene, ohne Function-Invocation. Der `notFound()`-Aufruf in `ContentRoute` (lib/page-factory.tsx) bleibt als Sicherheitsnetz drin.\n\n`export const dynamic` oder `revalidate` NICHT setzen: die Routen sind bereits vollständig statisch (`initialRevalidateSeconds: false`), und `revalidate` würde daraus ISR machen — mehr Kosten, kein Nutzen, weil der Content nur beim Deploy wechselt."
    },
    {
      "action": "Fehlender Guide für Distrito Capital",
      "priority": "P1",
      "effort": "M",
      "how": "`lib/states/data/` enthält 23 Dateien, `lib/content.ts` Zeile 117-142 listet aber 24 Einträge (die 23 Bundesstaaten plus Distrito Capital). Für `distrito-capital` gibt es keinen Guide.\n\nBelegt im Build: `.next/server/app/estado/distrito-capital.html` hat den generischen Titel „Distrito Capital | Descubre Venezuela\" statt eines redaktionellen SEO-Titels — alle anderen 23 haben Formen wie „Mérida: guía de viaje de los Andes, el páramo y el Mukumbarí\".\n\nEntweder `lib/states/data/distrito-capital.ts` nach dem Muster von `lib/states/data/merida.ts` anlegen und in `lib/states/index.ts` registrieren, oder in `generateMetadataFor` (lib/page-factory.tsx) einen brauchbaren Fallback-Titel je `kind` bauen. Der Titel des Guides ist die wichtigste On-Page-Variable — für die Hauptstadtregion ihn generisch zu lassen ist die teuerste Einzelseite, die man so verschenkt."
    },
    {
      "action": "Dynamische OG-Bilder mit ImageResponse — lohnt sich, aber nur an einer Stelle",
      "priority": "P2",
      "effort": "M",
      "how": "Verdikt: für die 24 Estado-Seiten und die 3 Artikel ja, für den Rest nein. Aktuell trägt jede Detailseite ein reines Foto als og:image (verifiziert: `/estado/merida` → hero-Bild). Ein Overlay mit Ortsname und Kicker hebt die CTR beim Teilen deutlich, und alle Bilder werden zur Buildzeit einmal als PNG erzeugt — keine Laufzeitkosten.\n\n`app/estado/[slug]/opengraph-image.tsx` — beachte die 15.5.20-Signatur, `params` ist hier KEIN Promise:\n\n```tsx\nimport { ImageResponse } from \"next/og\";\nimport { getItem } from \"@/lib/content\";\nimport { getStateGuide } from \"@/lib/states\";\n\nexport const alt = \"Guía de viaje | Descubre Venezuela\";\nexport const size = { width: 1200, height: 630 };\nexport const contentType = \"image/png\";\n\nexport default function Image({ params }: { params: { slug: string } }) {\n  const item = getItem(\"estado\", params.slug);\n  const guide = getStateGuide(params.slug);\n  return new ImageResponse(\n    (\n      <div style={{\n        display: \"flex\", flexDirection: \"column\", justifyContent: \"flex-end\",\n        width: \"100%\", height: \"100%\", padding: 72,\n        background: \"linear-gradient(135deg,#0f3d2e 0%,#247c8f 100%)\", color: \"white\",\n      }}>\n        <div style={{ fontSize: 28, letterSpacing: 6, textTransform: \"uppercase\", opacity: 0.8 }}>\n          Descubre Venezuela\n        </div>\n        <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05, marginTop: 16 }}>\n          {item?.name ?? \"Venezuela\"}\n        </div>\n        <div style={{ fontSize: 32, marginTop: 20, opacity: 0.9 }}>\n          {guide?.heroTagline ?? \"\"}\n        </div>\n      </div>\n    ),\n    { ...size },\n  );\n}\n```\n\nZwei Fallstricke:\n1. `lib/page-factory.tsx` setzt in `generateMetadataFor` explizit `openGraph.images`. Solange das drinsteht, kann die Dateikonvention überschrieben werden — für `kind === \"estado\"` das explizite `images` entfernen und die Datei übernehmen lassen. Nach dem Build im HTML gegenprüfen, welches `og:image` tatsächlich rauskommt.\n2. Satori kennt die `next/font/google`-Variablen aus `app/layout.tsx` nicht. Entweder ohne Custom-Font arbeiten (wie oben) oder eine `.ttf` von Cormorant Garamond ins Repo legen und per `readFile` einbinden.\n\nFür `icon.tsx` per ImageResponse sehe ich keinen Grund — ein statisches `app/icon.png` ist einfacher und schneller."
    },
    {
      "action": "Statische Dateien: IndexNow-Key und llms.txt",
      "priority": "P2",
      "effort": "S",
      "how": "Beides gehört bei diesem Repo nach `public/` — nicht in einen Route Handler.\n\nIndexNow: `public/<dein-key>.txt` mit dem Key als einzigem Inhalt. Vercel liefert `.txt` aus `public/` automatisch als `text/plain` aus, da gibt es keinen Content-Type-Fallstrick. Der Fallstrick liegt woanders: eine Datei OHNE Endung in `public/` wird als `application/octet-stream` ausgeliefert — deshalb muss der Key zwingend `.txt` heißen (was IndexNow ohnehin vorschreibt). Zweiter Fallstrick in genau diesem Repo: `.vercelignore` filtert bereits `*.log` und einzelne Bilder heraus. Vor dem Anlegen prüfen, dass dort kein Muster steht, das die neue Datei erwischt.\n\nPing nach dem Deploy (Google ignoriert IndexNow, Bing/Yandex/Naver/Seznam/Yep nicht):\n```bash\ncurl -X POST https://api.indexnow.org/indexnow \\\n  -H \"Content-Type: application/json; charset=utf-8\" \\\n  -d '{\"host\":\"mrsvenezuela.com\",\"key\":\"DEIN_KEY\",\"urlList\":[\"https://mrsvenezuela.com/estado/merida\"]}'\n```\n\nllms.txt: `public/llms.txt`, ebenfalls text/plain. Es gibt in Next 15.5.20 KEINE Dateikonvention dafür (anders als robots.ts/sitemap.ts) — das steht nur als Discussion im next.js-Repo. Wenn der Inhalt aus `lib/content.ts` generiert werden soll, geht das über einen Route Handler `app/llms.txt/route.ts`:\n\n```ts\nimport { pageKinds, searchIndex } from \"@/lib/content\";\nimport { absoluteUrl } from \"@/lib/utils\";\n\nexport const dynamic = \"force-static\";\n\nexport function GET() {\n  const lines = pageKinds.flatMap((kind) =>\n    searchIndex.filter((i) => i.kind === kind)\n      .map((i) => `- [${i.name}](${absoluteUrl(`/${kind}/${i.slug}`)}): ${i.description}`),\n  );\n  const body = `# Descubre Venezuela\\n\\n> Guía editorial de viaje sobre Venezuela.\\n\\n## Contenido\\n\\n${lines.join(\"\\n\")}\\n`;\n  return new Response(body, {\n    headers: { \"content-type\": \"text/plain; charset=utf-8\" },\n  });\n}\n```\n\n`export const dynamic = \"force-static\"` ist hier wichtig, damit die Datei zur Buildzeit erzeugt und nicht pro Request gerendert wird. Ein Ordnername mit Punkt (`app/llms.txt/`) ist im App Router zulässig."
    },
    {
      "action": "Vercel-Konfiguration: apex/www-Redirect und Speed Insights",
      "priority": "P2",
      "effort": "S",
      "how": "Apex/www: das gehört NICHT in Code. In den Vercel-Projekteinstellungen unter Domains beide Domains hinzufügen (`mrsvenezuela.com` und `www.mrsvenezuela.com`) und eine davon als Redirect (308) auf die andere setzen. Vercel erledigt das auf Edge-Ebene, bevor überhaupt eine Function läuft. Ein Redirect in `next.config.ts` würde erst danach greifen und ist dafür die schlechtere Ebene. Wichtig ist nur, dass das Ziel zu `absoluteUrl()` in `lib/utils.ts` Zeile 9 passt — dort steht `https://mrsvenezuela.com` ohne www, also muss www auf apex zeigen, nicht umgekehrt.\n\nPreview-Deployments: nichts zu tun. Vercel setzt `x-robots-tag: noindex` automatisch. Nur darauf achten, keinem Nicht-Production-Branch eine echte Domain zuzuweisen, sonst entfällt der Header. Nachprüfbar mit `curl -I <preview-url> | grep -i x-robots-tag`.\n\nSpeed Insights: `node_modules/@vercel/` enthält nur `analytics`. Für echte Core-Web-Vitals-Felddaten (die für Rankings zählen, nicht Lab-Werte) ergänzen:\n```bash\nnpm i @vercel/speed-insights\n```\n```tsx\n// app/layout.tsx, neben dem bestehenden <Analytics />\nimport { SpeedInsights } from \"@vercel/speed-insights/next\";\n// ...\n        <Analytics />\n        <SpeedInsights />\n```\n\nHeader in `next.config.ts` statt vercel.json: das Repo hat kein vercel.json, und für einen reinen Next-Build ist next.config die bessere Ebene — Header und Redirects gelten dann auch lokal bei `next dev`/`next start` und sind testbar. Ein vercel.json erst anlegen, wenn du Plattform-Features brauchst, die next.config nicht kennt (`cleanUrls`, `bulkRedirectsPath`, `crons`)."
    },
    {
      "action": "hreflang: bewusst NICHT einbauen — oder richtig auf lokalisierte URLs umbauen",
      "priority": "P2",
      "effort": "L",
      "how": "Kurze Antwort auf die Frage „lohnt sich alternates.languages hier\": nein, im aktuellen Zustand nicht.\n\nBegründung aus dem Repo: `components/i18n/content-translator.tsx` übersetzt das gerenderte DOM zur Laufzeit über `lib/site-translations.json`, `components/i18n/language-provider.tsx` speichert die Wahl in localStorage plus Cookie und setzt `document.documentElement.lang`. Es gibt genau eine URL pro Inhalt. Fünf hreflang-Einträge, die alle auf dieselbe URL zeigen, sind formal ungültig; Google verwirft solche Cluster. Crawler sehen ohnehin nur das spanische HTML — verifiziert: `<html lang=\"es\">` im gebauten `index.html`, `has hreflang: false` auf allen 58 Seiten.\n\nWenn Mehrsprachigkeit wirklich ranken soll, ist der Umbau groß, aber der einzige gangbare Weg:\n1. Routen unter `app/[locale]/` verschieben, `generateStaticParams` liefert `[{locale:\"es\"},{locale:\"en\"},{locale:\"de\"},{locale:\"fr\"},{locale:\"zh\"}]` × Slug.\n2. Übersetzungen serverseitig aus `lib/site-translations.json` einsetzen statt per DOM-Mutation.\n3. Erst dann im `generateMetadata`:\n```ts\nalternates: {\n  canonical: `/${locale}${path}`,\n  languages: {\n    \"es\": `/es${path}`,\n    \"en\": `/en${path}`,\n    \"de\": `/de${path}`,\n    \"fr\": `/fr${path}`,\n    \"zh\": `/zh${path}`,\n    \"x-default\": `/es${path}`,\n  },\n},\n```\nDer Typ `Languages<T>` in `node_modules/next/dist/lib/metadata/types/alternative-urls-types.d.ts` akzeptiert `x-default` explizit.\n4. Parallel `alternates.languages` pro URL in `app/sitemap.ts` — erzeugt `<xhtml:link rel=\"alternate\" hreflang=\"…\">`.\n\nZwischenlösung ohne Umbau: `<html lang=\"es\">` beibehalten (ist korrekt) und den Sprachumschalter als reines UX-Feature verstehen. Das ist die ehrliche Einordnung des Ist-Zustands, kein Mangel."
    }
  ],
  "pitfalls": [
    "`\"use client\"` auf einer page.tsx macht jeden `metadata`-Export wirkungslos — ohne Fehler, ohne Warnung. Genau das passiert in `app/playas/page.tsx`. Prüfmethode nach jedem Build: die erzeugten HTML-Dateien unter `.next/server/app/` auf `<link rel=\"canonical\">` und `<title>` abklopfen, nicht dem Quelltext vertrauen.",
    "`alternates` und `openGraph` werden flach ersetzt, nicht tief gemerged. Eine Seite, die `alternates: { canonical: \"/x\" }` setzt, verliert ein im Layout definiertes `alternates.languages` komplett. Beim späteren hreflang-Einbau muss jede Seite beide Felder liefern.",
    "nextjs.org liefert inzwischen die Doku für Version 16.3.3 aus, das Projekt läuft auf 15.5.20. Konkret aus der Online-Doku NICHT übernehmbar: das `other`-Feld in `MetadataRoute.Robots` (erst v16.3.0), `params` als Promise in `opengraph-image.tsx` (erst v16.0.0), `id` als Promise in `generateSitemaps` (erst v16.0.0). Im Zweifel gegen `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts` prüfen — das ist die Wahrheit für die installierte Version.",
    "Niemals `/_next/` in robots.txt disallowen. Googlebot braucht CSS und JS aus `/_next/static/`, um zu rendern; ein Disallow dort zerstört die Bewertung der Seite. Das aktuelle `app/robots.ts` macht das richtig — beim Ausbau nicht kaputtmachen.",
    "`minimumCacheTTL: 60` (aktueller Zustand laut `.next/images-manifest.json`) bedeutet bei Vercel: jeder Bild-Cache-Eintrag wird nach einer Minute STALE und löst eine erneut abgerechnete Transformation aus. Bei statischem Content ist das reine Geldverbrennung.",
    "`unoptimized` bei next/image spart Vercel-Transformationskosten, kostet aber LCP: kein WebP, kein srcset, volle Quellbreite auf jedem Gerät. Im Repo betrifft das 13 Komponenten mit Wikimedia-Bildern bei `?width=1800`. Das ist ein direkter Core-Web-Vitals-Verlust, kein reiner Kosten-Trade-off.",
    "Wenn `generateMetadata` ein explizites `openGraph.images` setzt (wie `lib/page-factory.tsx` es tut), kann eine neu angelegte `opengraph-image.tsx` wirkungslos bleiben. Nach dem Umbau immer das tatsächlich erzeugte `og:image` im HTML gegenprüfen, nicht auf die Konvention vertrauen.",
    "Dateien in `public/` ohne Endung liefert Vercel als `application/octet-stream` aus. Der IndexNow-Key muss deshalb zwingend `<key>.txt` heißen. `.txt`-Dateien selbst sind unproblematisch — die richtige Sorge ist stattdessen `.vercelignore`: dort stehen bereits Ausschlussmuster (`*.log` und einzelne Bildpfade), die eine neue Datei versehentlich mitnehmen können.",
    "`revalidate` oder `export const dynamic` auf den `[slug]`-Routen zu setzen würde die aktuell rein statischen Seiten (`initialRevalidateSeconds: false`) in ISR verwandeln: mehr Function-Invocations, mehr Kosten, kein SEO-Gewinn, weil der Content sich nur beim Deploy ändert.",
    "`absoluteUrl()` in `lib/utils.ts` hardcodet `https://mrsvenezuela.com` und umgeht `metadataBase` faktisch. Das ist für Preview-Deployments sogar erwünscht (Canonicals zeigen auf Production, Vercel setzt dort ohnehin noindex), bedeutet aber: bei einem Domainwechsel müssen `lib/utils.ts` Zeile 9 UND `app/layout.tsx` angefasst werden.",
    "Vercel entfernt das automatische `x-robots-tag: noindex` von einem Preview-Deployment, sobald diesem Branch eine echte Domain zugewiesen wird. Das ist der einzige Weg, wie Preview-URLs versehentlich in den Index geraten können.",
    "`.next/server/app/_not-found.html` trägt `<link rel=\"canonical\" href=\"https://mrsvenezuela.com\">` — geerbt vom Layout. Der 404-Statuscode gewinnt zwar gegenüber dem Canonical, aber nach dem Entfernen des Layout-Canonicals verschwindet auch dieses schiefe Signal."
  ],
  "outdated_beliefs": [
    "„changeFrequency und priority in der Sitemap steuern das Crawling.\" Google ignoriert beide Felder seit Jahren offiziell; nur `<lastmod>` wird ausgewertet, und auch nur, wenn es konsistent und plausibel ist. `app/sitemap.ts` setzt derzeit beide Felder plus ein für alle 55 URLs identisches lastmod — das ist die schlechteste Kombination: Ballast plus ein entwertetes Signal.",
    "„Man braucht ein SEO-Paket wie next-seo.\" Seit dem App Router deckt die Metadata-API alles ab, was next-seo je konnte, inklusive Alternates, Robots-Direktiven und OG/Twitter. Das Repo macht das bereits richtig — kein Zusatzpaket nötig.",
    "„Für viele URLs braucht man generateSitemaps und einen Sitemap-Index.\" Die Schwelle liegt bei 50.000 URLs bzw. 50 MB pro Datei. Bei 55 URLs ist das reiner Overhead.",
    "„Streaming Metadata in Next 15 ist ein SEO-Risiko, also htmlLimitedBots auf /.*/ setzen.\" Für vollständig prerenderte Seiten — und alle 58 Routen hier sind das — stehen die Metadaten ohnehin im statischen `<head>`. Der Override kostet nur TTFB.",
    "„Preview-Deployments muss man selbst per robots.ts oder Middleware ausschließen.\" Vercel setzt `x-robots-tag: noindex` automatisch auf Previews und auf abgelöste Production-Deployments. Eine eigene VERCEL_ENV-Abfrage in `app/robots.ts` ist überflüssig und kann bei falscher Bedingung sogar die Production deindexieren.",
    "„og:image sollte man mit width und height annotieren, dann passt es.\" `lib/page-factory.tsx` deklariert für JEDES Bild pauschal `width: 1200, height: 800` — unabhängig von den echten Maßen. Falsche Angaben sind schlechter als gar keine; entweder die realen Maße liefern oder die Felder weglassen.",
    "„Redirects gehören in vercel.json.\" Für ein reines Next.js-Projekt gehören Header und Redirects nach `next.config.ts` (greifen dann auch lokal und sind testbar); apex/www-Redirects gehören überhaupt nicht in eine Datei, sondern in die Domain-Einstellungen des Vercel-Projekts.",
    "„Ein clientseitiger Sprachumschalter reicht für internationales SEO, wenn man hreflang ergänzt.\" Ohne eigene URLs pro Sprache ist hreflang formal ungültig. Die DOM-Übersetzung in `components/i18n/content-translator.tsx` ist ein UX-Feature, kein SEO-Feature — und das ist völlig in Ordnung, solange man es nicht mit hreflang zu kaschieren versucht.",
    "„IndexNow bringt schnellere Google-Indexierung.\" Google unterstützt IndexNow nicht (Stand indexnow.org FAQ, August 2026). Der Nutzen beschränkt sich auf Bing, Yandex, Naver, Seznam, Yep und Amazon."
  ]
}