{
  "topic": "Strukturierte Daten (JSON-LD) fuer Reise-/Tourismus-Content — Recherche-Stand 25.08.2026, angewendet auf mrsvenezuela.com (Next.js 15 App Router)",
  "summary": "Die groesste Aenderung seit deinem Wissensstand: FAQPage ist tot. Google hat FAQ-Rich-Results am 07.05.2026 abgeschaltet und die Doku am 15.06.2026 komplett geloescht — auch fuer Behoerden-/Gesundheitsseiten, die seit 2023 als einzige noch Ausnahme waren. HowTo ist schon seit Sept. 2023 weg. Fuer diese Site heisst das: der FAQPage-Block in lib/page-factory.tsx (Zeile 78-105) bringt bei Google exakt null Rich Results. Schlimmer als nutzlos ist er aber, weil er fuer ALLE Nicht-Estado-Seiten zwei frei erfundene Fragen mit inhaltsleeren Antworten erzeugt, die so nirgends auf der Seite stehen — das ist ein Verstoss gegen die Quality Guidelines (\"Don't mark up content that is not visible to readers\") und damit ein Manual-Action-Risiko ohne jeden Gegenwert. Zweiter harter Fund: app/page.tsx Zeile 47 verwendet \"@type\": \"TravelGuide\" — diesen Typ gibt es in schema.org nicht (https://schema.org/TravelGuide liefert 404). Dritter Fund: lib/page-factory.tsx typisiert ALLES ausser \"articulo\" als TouristDestination, also auch Gerichte (comida), Tiere (animal) und Pflanzen (planta) — eine Arepa ist kein Place. Vierter Fund: das JSON-LD gibt item.image roh aus, also z.B. \"/images/salto-angel.jpg\" ohne Domain; generateMetadataFor() macht es in derselben Datei richtig mit absoluteUrl(), das Schema nicht. Es fehlen komplett: BreadcrumbList, Organization, @id-Verknuepfungen, ImageObject mit Lizenzdaten (obwohl StateCredit in lib/states/types.ts schon Titel/Autor/Lizenz/Link modelliert, in bolivar.ts aber credits: [] steht) und sameAs-Verknuepfungen zu Wikidata. Genau diese fehlenden Teile sind das, was 2026 noch etwas bringt: Breadcrumb ist eines der wenigen verbliebenen Rich Results, Image-Lizenz-Metadaten geben das \"Licensable\"-Badge in Google Bilder, und Organization+sameAs+Wikidata sind das stabilste Entitaets-Signal fuer Knowledge Graph und fuer KI-Crawler, die kein JavaScript ausfuehren. Ein Detail spricht fuer euch: components/i18n/content-translator.tsx schliesst in Zeile 82 script-Elemente aus, das JSON-LD wird also von der Laufzeit-Uebersetzung nicht zerstoert und bleibt sauber spanisch — genau richtig, solange es keine lokalisierten URLs gibt.",
  "key_points": [
    {
      "claim": "FAQPage-Rich-Results sind vollstaendig abgeschaltet: Deprecation-Hinweis am 08.05.2026, Feature seit 07.05.2026 nicht mehr in der Suche, Doku-Seite am 15.06.2026 geloescht. Die Beschraenkung auf 'well-known authoritative government and health websites' von 2023 ist damit gegenstandslos — es gibt gar kein FAQ-Rich-Result mehr, fuer niemanden.",
      "confidence": "belegt",
      "date_or_version": "Changelog 08.05.2026 und 15.06.2026",
      "source_url": "https://developers.google.com/search/updates",
      "why_it_matters": "lib/page-factory.tsx erzeugt auf JEDER Detailseite (estado, ciudad, playa, comida, animal ...) einen FAQPage-Knoten. Der Aufwand ist ab sofort ohne Gegenleistung in der Google-Suche."
    },
    {
      "claim": "FAQ verschwindet auch aus den Tools: Search-Console-Bericht und Rich-Results-Test-Unterstuetzung endeten im Juni 2026, die Search-Console-API-Unterstuetzung im August 2026.",
      "confidence": "belegt",
      "date_or_version": "Juni/August 2026",
      "source_url": "https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/",
      "why_it_matters": "Wer nach dem Deploy im Rich Results Test nach FAQ sucht, findet nichts mehr — das ist erwartetes Verhalten, kein Fehler. Nicht daran verzweifeln."
    },
    {
      "claim": "HowTo-Rich-Results wurden bereits im August 2023 (mobil) bzw. September 2023 (Desktop) abgeschaltet; 2026 gibt es sie auf keiner Oberflaeche mehr. HowTo taucht in der aktuellen Rich-Results-Galerie nicht mehr auf.",
      "confidence": "belegt",
      "date_or_version": "Galerie zuletzt aktualisiert 15.06.2026",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/search-gallery",
      "why_it_matters": "Fuer 'Wie komme ich zum Salto Angel'-Abschnitte lohnt HowTo-Markup nicht. Diese Inhalte gehoeren in den Fliesstext bzw. in Article-Markup."
    },
    {
      "claim": "Die aktuell von Google unterstuetzten Rich Results (Galerie, Stand 15.06.2026) sind: Article, Breadcrumb, Carousel, Course list, Dataset, Discussion forum, Education Q&A, Employer aggregate rating, Event, Image metadata, Job posting, Local business, Math solver, Movie, Organization, Product, Profile page, Q&A, Recipe, Review snippet, Software app, Speakable, Subscription/paywalled content, Vacation rental, Video. FAQ und HowTo fehlen.",
      "confidence": "belegt",
      "date_or_version": "2026-06-15",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/search-gallery",
      "why_it_matters": "Fuer diese Site sind realistisch nur vier davon erreichbar: Breadcrumb, Article (nur /articulo und /historia), Image metadata und Organization. TouristDestination/Beach/Mountain erzeugen KEIN Rich Result — sie sind reine Entitaets-Signale."
    },
    {
      "claim": "FAQPage bleibt gueltiges schema.org-Vokabular und ungenutztes Markup schadet Google nicht ('Structured data that's not being used does not cause problems for Search'). Was schadet, ist Markup fuer Inhalte, die nicht sichtbar auf der Seite stehen — das faellt unter die Quality Guidelines und kann eine Manual Action ausloesen.",
      "confidence": "belegt",
      "date_or_version": "sd-policies, zuletzt 10.07.2026",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      "why_it_matters": "Entscheidend fuer euren Fall: die generischen Fallback-FAQs in lib/page-factory.tsx Zeile 87-104 ('Depende de la region, el clima ...') stehen NICHT im DOM. Das ist der Teil, der weg muss. Die echten guide.faqs.items der Estado-Guides stehen dagegen sichtbar auf der Seite und duerfen bleiben."
    },
    {
      "claim": "FAQPage-Markup fuer KI-Systeme: JSON-LD ist das einzige Format, das KI-Crawler halbwegs konsistent verarbeiten, und GPTBot/ClaudeBot/PerplexityBot fuehren kein JavaScript aus — JSON-LD muss also in der Server-Antwort stehen. Ob LLM-Systeme JSON-LD tatsaechlich semantisch parsen oder die Seite nur als Text tokenisieren, ist umstritten; belastbare Zahlen zu Zitierraten gibt es nicht.",
      "confidence": "unsicher",
      "date_or_version": "2026",
      "source_url": "https://patrickryall.com/articles/structured-data-ai-crawlers",
      "why_it_matters": "Konkretes Argument FUER Beibehalten der echten Estado-FAQs: sie stehen ohnehin im HTML, das Markup kostet nichts und ist im Zweifel ein sauberer Frage-Antwort-Block. Konkretes Argument GEGEN erfundene FAQs: sie stehen nicht im HTML, also holen KI-Crawler daraus auch nichts Sinnvolles."
    },
    {
      "claim": "JSON-LD wird in diesem Projekt server-seitig gerendert. app/page.tsx, app/estados/page.tsx und lib/page-factory.tsx sind Server Components ohne 'use client' und schreiben das Script per dangerouslySetInnerHTML — es steht damit im initialen HTML.",
      "confidence": "belegt",
      "date_or_version": "Repo-Stand 25.08.2026",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      "why_it_matters": "Das ist die Voraussetzung dafuer, dass die JS-losen KI-Crawler das Markup ueberhaupt sehen. Diese Architektur beibehalten — auf keinen Fall JSON-LD in eine Client Component verschieben."
    },
    {
      "claim": "'TravelGuide' existiert in schema.org nicht — https://schema.org/TravelGuide liefert HTTP 404. Der naechstliegende echte Typ ist 'Guide' (Thing > CreativeWork > Guide), definiert als Seite/Artikel, die bestimmte Produkte, Dienste oder Aspekte einer Sache zur Betrachtung empfiehlt; markiert als 'new area'. Aktuelle Vokabular-Version ist schema.org V30.0 (19.03.2026).",
      "confidence": "belegt",
      "date_or_version": "schema.org V30.0, 19.03.2026",
      "source_url": "https://schema.org/Guide",
      "why_it_matters": "app/page.tsx Zeile 47 verwendet einen nicht existierenden Typ. Der Schema Markup Validator meldet das als unbekannten Typ; Google ignoriert den Knoten stillschweigend. Startseite gehoert auf WebSite + Organization + CollectionPage/ItemList."
    },
    {
      "claim": "Typ-Hierarchien fuer die Content-Arten dieser Site (alle verifiziert): State = Thing > Place > AdministrativeArea > State ('A state or province of a country'). City = Thing > Place > AdministrativeArea > City. TouristDestination = Thing > Place > TouristDestination, definiert als Place mit einer oder mehreren TouristAttractions, Properties includesAttraction und touristType, Status 'new area', 10K-100K Domains (Juli 2026). Beach = Thing > Place > CivicStructure > Beach. Mountain = Thing > Place > Landform > Mountain. Park = Thing > Place > CivicStructure > Park.",
      "confidence": "belegt",
      "date_or_version": "schema.org V30.0",
      "source_url": "https://schema.org/TouristDestination",
      "why_it_matters": "Bundesstaat-Seiten koennen sauber als Array ['State','TouristDestination'] getypt werden (Mehrfachtypisierung ist gueltiges JSON-LD, beide sind Place-Subtypen). Distrito Capital ist kein 'State' — dort AdministrativeArea nehmen."
    },
    {
      "claim": "Einen Typ 'NationalPark' gibt es in schema.org NICHT — https://schema.org/NationalPark liefert 404, und Park listet keinen solchen Subtyp. Ebenso gibt es keinen Typ 'Food'.",
      "confidence": "belegt",
      "date_or_version": "schema.org V30.0",
      "source_url": "https://schema.org/Park",
      "why_it_matters": "Fuer /parque-nacional/* ist die korrekte Modellierung ['Park','TouristAttraction'] plus additionalType auf die Wikidata-Klasse Nationalpark, NICHT ein erfundenes 'NationalPark'. Fuer /comida/* gibt es keinen Place- oder Food-Typ; dort gehoert Article + about auf ein Thing."
    },
    {
      "claim": "Recipe = Thing > CreativeWork > HowTo > Recipe. Google verlangt fuer das Recipe-Rich-Result nur name und image, sagt aber ausdruecklich: 'Use Recipe structured data for content about preparing a particular dish.'",
      "confidence": "belegt",
      "date_or_version": "Recipe-Doku 10.12.2025",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/recipe",
      "why_it_matters": "Die /comida-Seiten sind redaktionelle Portraits, keine Kochanleitungen mit Zutaten und Zubereitung. Recipe-Markup dort waere genau der Relevanz-Verstoss, den die General Guidelines als Beispiel nennen (Holzarbeits-Anleitung als Rezept auszeichnen). Finger weg — es sei denn, ihr schreibt echte Rezepte mit recipeIngredient und recipeInstructions."
    },
    {
      "claim": "General Structured Data Guidelines (Stand 10.07.2026): JSON-LD ist das empfohlene Format; die Seite darf fuer Googlebot nicht per robots.txt/noindex gesperrt sein; Markup muss den Seiteninhalt korrekt repraesentieren (Relevanz), darf keine versteckten oder irrelevanten Inhalte auszeichnen, muss auf der Seite liegen, die es beschreibt, soll den spezifischsten passenden Typ verwenden, und Bild-URLs muessen crawl- und indexierbar sein. Verstoesse fuehren zu Manual Actions, die die Rich-Result-Eligibility entziehen — nicht das Web-Ranking.",
      "confidence": "belegt",
      "date_or_version": "2026-07-10",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      "why_it_matters": "'Bild-URLs muessen crawlbar sein' trifft euch direkt: lib/page-factory.tsx gibt image: item.image aus, also z.B. '/images/salto-angel.jpg' als relative URL im JSON-LD. Google kann daraus nichts aufloesen. In derselben Datei macht generateMetadataFor() es korrekt mit absoluteUrl()."
    },
    {
      "claim": "ImageObject-Lizenzdaten: contentUrl ist Pflicht ('Google uses contentUrl to determine which image the photo metadata applies to'), dazu mindestens EINES aus creator, creditText, copyrightNotice, license. Empfohlen sind license (URL zur Lizenz-Seite), acquireLicensePage (URL, wo man erfaehrt, wie man das Bild lizenziert), creator, creditText, copyrightNotice. Alternativ IPTC-Metadaten direkt in der Bilddatei.",
      "confidence": "belegt",
      "date_or_version": "2025-12-10",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata",
      "why_it_matters": "Das ist eines der wenigen Rich-Result-Features, das diese Site realistisch erreichen kann ('Licensable'-Badge in Google Bilder). lib/states/types.ts hat mit StateCredit {title, author, license, href} bereits genau die vier Felder, die man dafuer braucht — sie sind nur nicht befuellt (bolivar.ts Zeile 193: credits: [])."
    },
    {
      "claim": "Wikimedia Commons verlangt fuer CC BY / CC BY-SA: Autorenname (bzw. Pseudonym), Werktitel falls vorhanden, Lizenzangabe (Name und moeglichst Link) und die vom Lizenzgeber angegebene URL. Empfohlenes Minimalformat: 'John Doe / CC-BY-SA-3.0', erweitert 'Marble Lady' by John Doe / CC-BY-SA-3.0. Das Format ist frei, solange alle Bestandteile enthalten sind.",
      "confidence": "belegt",
      "date_or_version": "Commons:Credit line",
      "source_url": "https://commons.wikimedia.org/wiki/Commons:Credit_line",
      "why_it_matters": "Wichtige Abgrenzung: JSON-LD ist fuer Google, aber NICHT fuer die Lizenz. Die CC-Attribution muss fuer Menschen sichtbar sein — JSON-LD ist unsichtbar und erfuellt die Lizenzbedingung nicht. Ihr braucht beides: sichtbare Bildunterschrift/Credits-Block UND ImageObject."
    },
    {
      "claim": "Organization: Google nennt keine Pflicht-Properties, empfiehlt name, url, logo, sameAs, description, address, contactPoint, email, telephone, legalName, alternateName, foundingDate. Platzierung ausdruecklich auf der Startseite ODER einer einzelnen Seite, die die Organisation beschreibt (z.B. 'about us') — nicht auf jeder Seite noetig. Logo mindestens 112x112 px, crawl- und indexierbar.",
      "confidence": "belegt",
      "date_or_version": "2026-04-15",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/organization",
      "why_it_matters": "Es gibt aktuell gar kein Organization-Markup. app/sobre-nosotros und app/contacto sind die natuerlichen Orte dafuer; ueber @id kann jede andere Seite darauf referenzieren, ohne die Daten zu duplizieren."
    },
    {
      "claim": "sameAs auf Wikidata ist das hoechstwertige Entitaets-Signal, weil Wikidata direkt in Googles Knowledge Graph einspeist; konsistente Angaben ueber Wikidata, Wikipedia, Schema-Markup und die eigene Site erhoehen die Entitaets-Konfidenz. Verifizierte QIDs fuer euren Content: Venezuela Q717, Estado Bolivar Q191164, Estado Merida Q165582, Parque nacional Canaima Q1244337, Pico Bolivar Q213704, Salto Angel Q80299, Ciudad Bolivar Q26906 (8.1028532 / -63.5469562).",
      "confidence": "wahrscheinlich",
      "date_or_version": "Wikidata-Abfrage 25.08.2026",
      "source_url": "https://www.digitalapplied.com/blog/entity-seo-knowledge-graph-optimization-guide-2026",
      "why_it_matters": "Die QIDs sind per es.wikipedia-API verifiziert und koennen direkt in lib/states/regions.ts bzw. lib/content.ts als Feld gepflegt werden. Der Effekt-Teil der Aussage stammt aus SEO-Fachquellen, nicht aus Google-Doku — deshalb 'wahrscheinlich'."
    },
    {
      "claim": "BreadcrumbList: itemListElement mit mindestens zwei ListItem, jeweils position, name und item (URL). Beim letzten Element ist item optional — fehlt es, nimmt Google die URL der Seite. Mehrere BreadcrumbList-Objekte pro Seite sind erlaubt (als Array).",
      "confidence": "belegt",
      "date_or_version": "2025-12-10",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/breadcrumb",
      "why_it_matters": "Breadcrumb ist eines der wenigen verbliebenen Rich Results und im Search-Console-Bericht 'Enhancements' auswertbar. Fuer /estado/bolivar ist die Kette Inicio > Estados > Bolivar trivial ableitbar; es fehlt aktuell komplett."
    },
    {
      "claim": "Article: keine Pflicht-Properties; unterstuetzt werden Article, NewsArticle, BlogPosting. Empfohlen: headline, datePublished, dateModified (ISO 8601), image (1x1, 4x3, 16x9), author mit @type, name und url. Jeder Autor gehoert in ein eigenes author-Feld; author.name ohne Titel, Anreden oder Verlagsnamen.",
      "confidence": "belegt",
      "date_or_version": "2025-12-10",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/article",
      "why_it_matters": "lib/page-factory.tsx setzt fuer kind === 'articulo' zwar Article, liefert aber weder author noch datePublished/dateModified. Ohne author gibt es kein E-E-A-T-Signal und keine Profile-page-Verknuepfung."
    },
    {
      "claim": "Der Sitelinks-Searchbox wurde am 21.11.2024 abgeschaltet, die Doku entfernt. WebSite mit potentialAction/SearchAction erzeugt kein Feature mehr, schadet aber nicht und wird von Teilen der Branche als Entitaets-Signal weitergefuehrt.",
      "confidence": "belegt",
      "date_or_version": "21.11.2024",
      "source_url": "https://searchengineland.com/google-search-to-drop-sitelinks-search-box-447682",
      "why_it_matters": "Falls jemand vorschlaegt, fuer components/sections/search-overlay.tsx eine SearchAction einzubauen: optional, aber keine Prioritaet. Der WebSite-Knoten selbst bleibt sinnvoll als Anker fuer isPartOf/publisher."
    },
    {
      "claim": "Validierung: Der Rich Results Test prueft ausschliesslich Google-unterstuetzte Features und faengt 'most technical errors'; Google garantiert aber auch bei bestandenem Test keine Rich Results. Die URL Inspection prueft, ob Google die URLs — auch die Bild-URLs aus dem Markup — abrufen kann. Der Schema Markup Validator (validator.schema.org) stammt von schema.org und prueft das Vokabular unabhaengig von Googles Feature-Liste.",
      "confidence": "belegt",
      "date_or_version": "2026-07-10",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      "why_it_matters": "Arbeitsteilung fuer euch: 'TravelGuide' und ein fehlerhaftes @graph findet NUR validator.schema.org — der Rich Results Test wird auf /estado/bolivar schlicht 'keine Rich Results gefunden' melden, und das ist korrekt, weil TouristDestination kein Rich Result ist."
    },
    {
      "claim": "In der Search Console sind 2026 unter anderem noch aktiv: Breadcrumbs, Product snippets und Merchant listings (unter Shopping), Review snippets, Video, AMP. Die Berichte listen nicht alle Fundstellen, sondern eine Stichprobe.",
      "confidence": "wahrscheinlich",
      "date_or_version": "2026",
      "source_url": "https://support.google.com/webmasters/answer/7552505",
      "why_it_matters": "Fuer mrsvenezuela.com ist realistisch nur der Breadcrumbs-Bericht relevant — und den gibt es erst, wenn ihr BreadcrumbList ausliefert. Vorher ist 'Enhancements' zwangslaeufig leer."
    },
    {
      "claim": "components/i18n/content-translator.tsx schliesst in Zeile 82 script-, style-, code- und pre-Elemente von der Laufzeit-Uebersetzung aus (parent.closest('script, style, code, pre')).",
      "confidence": "belegt",
      "date_or_version": "Repo-Stand 25.08.2026",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
      "why_it_matters": "Das JSON-LD wird beim Sprachwechsel nicht angefasst und bleibt spanisch — genau richtig, weil es keine lokalisierten URLs gibt. inLanguage: 'es' bleibt korrekt, und es darf KEIN mehrsprachiges Markup ergaenzt werden, solange /en/, /de/ usw. nicht als eigene URLs existieren."
    }
  ],
  "actions": [
    {
      "action": "Erfundene Fallback-FAQs aus lib/page-factory.tsx entfernen, echte Estado-FAQs behalten",
      "priority": "P0",
      "effort": "S",
      "how": "In lib/page-factory.tsx den FAQPage-Knoten (Zeile 78-105) so umbauen, dass er nur noch existiert, wenn guide?.faqs?.items vorhanden ist — der komplette else-Zweig mit '¿Cual es la mejor epoca para visitar ...' und '¿Que se puede descubrir cerca de ...' muss weg, weil diese Texte nirgends im DOM stehen.\n\nconst faqNode = guide?.faqs?.items?.length\n  ? [{\n      \"@type\": \"FAQPage\",\n      \"@id\": `${pageUrl}#faq`,\n      mainEntity: guide.faqs.items.map((faq) => ({\n        \"@type\": \"Question\",\n        name: faq.question,\n        acceptedAnswer: { \"@type\": \"Answer\", text: faq.answer },\n      })),\n    }]\n  : [];\n\nBegruendung: FAQ-Rich-Results sind seit 07.05.2026 abgeschaltet, das Markup bringt bei Google nichts mehr. Es schadet aber auch nicht, solange die Fragen sichtbar auf der Seite stehen (StateEditorialGuide rendert sie) — und fuer JS-lose KI-Crawler ist ein sauberer Q&A-Block im HTML nicht wertlos. Nur die erfundenen Fallbacks sind ein echtes Risiko (Manual Action wegen Markup fuer nicht sichtbare Inhalte).\n\nHinweis: FAQPage steht in einem WebPage-Graph normalerweise als eigener Knoten. Sauberer waere, statt FAQPage die Fragen als mainEntity der WebPage zu haengen — aber FAQPage ist gueltiges Vokabular und der geringere Eingriff."
    },
    {
      "action": "'TravelGuide' in app/page.tsx durch echte Typen ersetzen",
      "priority": "P0",
      "effort": "S",
      "how": "app/page.tsx Zeile 45-53 komplett ersetzen. https://schema.org/TravelGuide liefert 404 — der Typ existiert nicht. Ausserdem ist about: [Strings] schwach; about erwartet Thing.\n\nconst schema = {\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    ORGANIZATION_NODE,          // siehe eigene Action\n    WEBSITE_NODE,               // siehe eigene Action\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": `${absoluteUrl()}#webpage`,\n      url: absoluteUrl(),\n      name: \"Descubre Venezuela\",\n      description: \"Guia premium para descubrir estados, playas, parques, ciudades, gastronomia, fauna, flora, historia y cultura de Venezuela.\",\n      isPartOf: { \"@id\": `${absoluteUrl()}#website` },\n      inLanguage: \"es\",\n      about: { \"@id\": \"https://www.wikidata.org/wiki/Q717\" },\n      primaryImageOfPage: { \"@id\": `${absoluteUrl()}#primaryimage` },\n    },\n    {\n      \"@type\": \"Country\",\n      \"@id\": \"https://www.wikidata.org/wiki/Q717\",\n      name: \"Venezuela\",\n      sameAs: [\"https://es.wikipedia.org/wiki/Venezuela\", \"https://www.wikidata.org/wiki/Q717\"],\n    },\n  ],\n};\n\nDie 8 destacados-Karten koennen zusaetzlich als ItemList-Knoten in denselben @graph, mit item-Referenzen auf `${absoluteUrl(`/estado/${slug}`)}#place`."
    },
    {
      "action": "Relative Bild-URLs im JSON-LD absolut machen",
      "priority": "P0",
      "effort": "S",
      "how": "lib/page-factory.tsx Zeile 74: image: item.image gibt Pfade wie '/images/salto-angel.jpg' aus. Google kann relative URLs im JSON-LD nicht aufloesen; die General Guidelines verlangen crawlbare Bild-URLs.\n\nIn generateMetadataFor() steht die richtige Zeile bereits:\n  const image = heroImage.startsWith(\"/\") ? absoluteUrl(heroImage) : heroImage;\n\nDiese Logik in eine Hilfsfunktion ziehen und im Schema wiederverwenden:\n  export const toAbsoluteImage = (src: string) => (src.startsWith(\"/\") ? absoluteUrl(src) : src);\n\nAchtung Next-Image-Falle: der gerenderte DOM-src ist bei next/image '/_next/image?url=...'. contentUrl soll trotzdem die Original-URL sein (die Optimierungs-URL ist nicht stabil). Google loest das in der Praxis auf — als 'wahrscheinlich' einstufen und nach dem Deploy per URL Inspection kontrollieren."
    },
    {
      "action": "Kind-zu-Typ-Mapping einfuehren statt pauschal TouristDestination",
      "priority": "P0",
      "effort": "M",
      "how": "Neue Datei lib/schema-types.ts. Aktuell typisiert lib/page-factory.tsx Zeile 65 alles ausser 'articulo' als TouristDestination — eine Arepa, ein Oso frontino und eine Orchidee sind damit als Place ausgezeichnet. Das ist ein Relevanz-Verstoss nach sd-policies.\n\nimport type { ContentKind } from \"@/lib/content\";\n\n// Alle Hierarchien gegen schema.org V30.0 verifiziert.\n// Es gibt KEINEN Typ 'NationalPark' und KEINEN Typ 'Food'.\nexport const placeTypeFor: Partial<Record<ContentKind, string[]>> = {\n  estado:            [\"State\", \"TouristDestination\"],      // Distrito Capital: AdministrativeArea\n  ciudad:            [\"City\", \"TouristDestination\"],\n  \"parque-nacional\": [\"Park\", \"TouristAttraction\"],\n  playa:             [\"Beach\", \"TouristAttraction\"],\n  montana:           [\"Mountain\", \"TouristAttraction\"],\n};\n\n// Nicht-Orte: die Seite ist ein Artikel, die Entitaet haengt an about.\nexport const articleKinds: ContentKind[] = [\"animal\", \"planta\", \"comida\", \"historia\", \"articulo\"];\n\nFuer animal/planta/comida also:\n{\n  \"@type\": \"Article\",\n  \"@id\": `${pageUrl}#article`,\n  headline: item.name,\n  about: { \"@type\": \"Thing\", name: item.name, sameAs: [wikidataUrl] },\n  ...\n}\n\nFuer parque-nacional zusaetzlich additionalType auf die Wikidata-Klasse, statt einen Typ zu erfinden:\n  additionalType: \"https://www.wikidata.org/wiki/Q46169\"   // Nationalpark\n\nAusdruecklich NICHT tun: Recipe fuer /comida. Google verlangt zwar nur name und image, sagt aber 'content about preparing a particular dish'. Eure comida-Seiten sind redaktionelle Portraits ohne recipeIngredient und recipeInstructions — Recipe waere Spam."
    },
    {
      "action": "Vollstaendigen @graph mit @id-Verknuepfungen fuer Bundesstaat-Seiten bauen",
      "priority": "P0",
      "effort": "L",
      "how": "Eine zentrale Funktion in lib/schema.ts, aufgerufen aus lib/page-factory.tsx. Ein einziges <script type=\"application/ld+json\"> pro Seite mit einem @graph — nicht mehrere Bloecke, weil der Schema Markup Validator getrennte Bloecke getrennt bewertet und @id-Referenzen ueber Blockgrenzen nicht garantiert aufgeloest werden.\n\nUebertragbares Beispiel fuer https://mrsvenezuela.com/estado/bolivar (alle QIDs verifiziert):\n\n{\n  \"@context\": \"https://schema.org\",\n  \"@graph\": [\n    {\n      \"@type\": \"Organization\",\n      \"@id\": \"https://mrsvenezuela.com/#organization\",\n      \"name\": \"Descubre Venezuela\",\n      \"url\": \"https://mrsvenezuela.com/\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"@id\": \"https://mrsvenezuela.com/#logo\",\n        \"url\": \"https://mrsvenezuela.com/images/logo-descubre-venezuela.png\",\n        \"contentUrl\": \"https://mrsvenezuela.com/images/logo-descubre-venezuela.png\",\n        \"width\": 512,\n        \"height\": 512,\n        \"caption\": \"Descubre Venezuela\"\n      },\n      \"image\": { \"@id\": \"https://mrsvenezuela.com/#logo\" },\n      \"description\": \"Guia editorial independiente sobre destinos, naturaleza y cultura de Venezuela.\",\n      \"sameAs\": [\"https://www.instagram.com/DEIN_HANDLE\"]\n    },\n    {\n      \"@type\": \"WebSite\",\n      \"@id\": \"https://mrsvenezuela.com/#website\",\n      \"url\": \"https://mrsvenezuela.com/\",\n      \"name\": \"Descubre Venezuela\",\n      \"inLanguage\": \"es\",\n      \"publisher\": { \"@id\": \"https://mrsvenezuela.com/#organization\" }\n    },\n    {\n      \"@type\": \"WebPage\",\n      \"@id\": \"https://mrsvenezuela.com/estado/bolivar#webpage\",\n      \"url\": \"https://mrsvenezuela.com/estado/bolivar\",\n      \"name\": \"Estado Bolivar: guia de ciudades, cultura, rios y naturaleza\",\n      \"description\": \"Guia editorial del estado Bolivar: Ciudad Bolivar, Ciudad Guayana, Orinoco, Caroni, El Callao, cultura guayanesa, Canaima y Gran Sabana.\",\n      \"isPartOf\": { \"@id\": \"https://mrsvenezuela.com/#website\" },\n      \"about\": { \"@id\": \"https://mrsvenezuela.com/estado/bolivar#place\" },\n      \"primaryImageOfPage\": { \"@id\": \"https://mrsvenezuela.com/estado/bolivar#primaryimage\" },\n      \"breadcrumb\": { \"@id\": \"https://mrsvenezuela.com/estado/bolivar#breadcrumb\" },\n      \"inLanguage\": \"es\",\n      \"datePublished\": \"2026-08-18\",\n      \"dateModified\": \"2026-08-25\"\n    },\n    {\n      \"@type\": \"BreadcrumbList\",\n      \"@id\": \"https://mrsvenezuela.com/estado/bolivar#breadcrumb\",\n      \"itemListElement\": [\n        { \"@type\": \"ListItem\", \"position\": 1, \"name\": \"Inicio\", \"item\": \"https://mrsvenezuela.com/\" },\n        { \"@type\": \"ListItem\", \"position\": 2, \"name\": \"Estados\", \"item\": \"https://mrsvenezuela.com/estados\" },\n        { \"@type\": \"ListItem\", \"position\": 3, \"name\": \"Bolivar\" }\n      ]\n    },\n    {\n      \"@type\": [\"State\", \"TouristDestination\"],\n      \"@id\": \"https://mrsvenezuela.com/estado/bolivar#place\",\n      \"name\": \"Estado Bolivar\",\n      \"alternateName\": \"Bolivar\",\n      \"description\": \"El estado mas extenso de Venezuela, al sureste del pais: Orinoco, Guayana, tepuyes y Gran Sabana.\",\n      \"url\": \"https://mrsvenezuela.com/estado/bolivar\",\n      \"mainEntityOfPage\": { \"@id\": \"https://mrsvenezuela.com/estado/bolivar#webpage\" },\n      \"image\": { \"@id\": \"https://mrsvenezuela.com/estado/bolivar#primaryimage\" },\n      \"sameAs\": [\n        \"https://www.wikidata.org/wiki/Q191164\",\n        \"https://es.wikipedia.org/wiki/Estado_Bol%C3%ADvar\"\n      ],\n      \"containedInPlace\": {\n        \"@type\": \"Country\",\n        \"@id\": \"https://www.wikidata.org/wiki/Q717\",\n        \"name\": \"Venezuela\",\n        \"sameAs\": \"https://es.wikipedia.org/wiki/Venezuela\"\n      },\n      \"additionalProperty\": [\n        { \"@type\": \"PropertyValue\", \"name\": \"Capital\", \"value\": \"Ciudad Bolivar\" },\n        { \"@type\": \"PropertyValue\", \"name\": \"Region\", \"value\": \"Guayana venezolana\" },\n        { \"@type\": \"PropertyValue\", \"name\": \"Superficie\", \"value\": \"240.528 km2\" },\n        { \"@type\": \"PropertyValue\", \"name\": \"Gentilicio\", \"value\": \"Bolivarense\" }\n      ],\n      \"includesAttraction\": [\n        {\n          \"@type\": [\"Park\", \"TouristAttraction\"],\n          \"@id\": \"https://mrsvenezuela.com/parque-nacional/canaima#place\",\n          \"name\": \"Parque Nacional Canaima\",\n          \"url\": \"https://mrsvenezuela.com/parque-nacional/canaima\",\n          \"sameAs\": \"https://www.wikidata.org/wiki/Q1244337\"\n        }\n      ]\n    },\n    {\n      \"@type\": \"ImageObject\",\n      \"@id\": \"https://mrsvenezuela.com/estado/bolivar#primaryimage\",\n      \"url\": \"https://mrsvenezuela.com/images/states/bolivar.jpg\",\n      \"contentUrl\": \"https://mrsvenezuela.com/images/states/bolivar.jpg\",\n      \"width\": 2400,\n      \"height\": 1350,\n      \"caption\": \"Salto Angel cayendo del Auyantepuy entre la selva de Canaima\",\n      \"representativeOfPage\": true\n    }\n  ]\n}\n\nRegeln, die dieses Beispiel uebertragbar machen:\n- Jeder Knoten hat eine @id nach dem Muster <kanonische URL>#<rolle>. Site-weite Knoten haengen an der Root-URL (#organization, #website), Seiten-Knoten an der Seiten-URL (#webpage, #breadcrumb, #place, #primaryimage).\n- Referenzen sind IMMER { \"@id\": \"...\" } und nie eine Wiederholung des Objekts. Damit faellt das derzeitige isPartOf-Duplikat in lib/page-factory.tsx Zeile 70-74 weg.\n- Genau eine Primaerentitaet pro Seite, verbunden ueber WebPage.about und Entity.mainEntityOfPage.\n- geo/GeoCoordinates nur setzen, wenn ihr echte Koordinaten habt. Erfundene Werte sind ein Guidelines-Verstoss. Fuer Ciudad Bolivar liegen sie vor: 8.1028532 / -63.5469562."
    },
    {
      "action": "Wikidata-QIDs als Datenfeld pflegen und als sameAs ausspielen",
      "priority": "P1",
      "effort": "M",
      "how": "In lib/states/regions.ts (dort liegt schon capital und region pro Estado) ein Feld wikidata: string ergaenzen, analog in lib/content.ts fuer DiscoverItem ein optionales wikidata?: string.\n\nVerifiziert (per es.wikipedia API, 25.08.2026):\n  Venezuela                 Q717\n  Estado Bolivar            Q191164\n  Estado Merida             Q165582\n  Parque nacional Canaima   Q1244337\n  Pico Bolivar              Q213704\n  Salto Angel               Q80299\n  Ciudad Bolivar            Q26906\n\nDie restlichen QIDs lassen sich in einem Rutsch holen:\n  https://es.wikipedia.org/w/api.php?action=query&prop=pageprops&ppprop=wikibase_item&format=json&titles=Estado%20Zulia|Estado%20Falcon|...\n\nDaraus dann:\n  sameAs: [\n    `https://www.wikidata.org/wiki/${item.wikidata}`,\n    `https://es.wikipedia.org/wiki/${encodeURIComponent(item.wikipediaTitle)}`,\n  ]\n\nWichtig fuer Seriositaet: sameAs darf nur auf Seiten zeigen, die WIRKLICH dieselbe Entitaet beschreiben. Nicht der Wikidata-Eintrag von Simon Bolivar (Person) beim Estado Bolivar, nicht der von Ciudad Bolivar beim Estado. Jede QID einzeln pruefen, nicht per Namensmatch raten — das ist der haeufigste Fehler bei Entity-SEO."
    },
    {
      "action": "Organization-Knoten auf /sobre-nosotros und /contacto anlegen",
      "priority": "P1",
      "effort": "M",
      "how": "Google empfiehlt Organization auf der Startseite ODER einer Seite, die die Organisation beschreibt. Bei euch: app/sobre-nosotros/page.tsx als Heimat, plus Referenz per @id aus jedem anderen @graph.\n\nAuf /sobre-nosotros zusaetzlich AboutPage statt WebPage:\n{\n  \"@type\": \"AboutPage\",\n  \"@id\": \"https://mrsvenezuela.com/sobre-nosotros#webpage\",\n  \"mainEntity\": { \"@id\": \"https://mrsvenezuela.com/#organization\" },\n  \"isPartOf\": { \"@id\": \"https://mrsvenezuela.com/#website\" },\n  \"breadcrumb\": { \"@id\": \"https://mrsvenezuela.com/sobre-nosotros#breadcrumb\" },\n  \"inLanguage\": \"es\"\n}\n\nAuf /contacto ContactPage, und den Organization-Knoten dort um contactPoint ergaenzen:\n  \"contactPoint\": {\n    \"@type\": \"ContactPoint\",\n    \"contactType\": \"customer support\",\n    \"email\": \"DIE_OEFFENTLICHE_ADRESSE\",\n    \"availableLanguage\": [\"es\", \"en\", \"de\", \"fr\", \"zh\"]\n  }\n\nZwei Bedingungen, sonst lasst es weg:\n1. Es braucht ein echtes Logo unter public/images/, mindestens 112x112 px, crawlbar. Aktuell existiert nur opengraph-venezuela.jpg — das ist kein Logo.\n2. sameAs nur auf Profile, die euch wirklich gehoeren und aktiv sind. Leere oder fremde Profile in sameAs sind ein Vertrauensschaden, kein Signal.\n\nE-E-A-T ehrlich: sameAs und Organization ersetzen keine Autorenschaft. Wenn ihr Person-Markup wollt, braucht ihr eine echte Autorenseite (ProfilePage + Person mit name, url, sameAs, knowsAbout) — erfundene Autoren sind genau die Art Taeuschung, die sd-policies als Verstoss nennt."
    },
    {
      "action": "ImageObject mit Lizenzdaten fuer Wikimedia-Commons-Bilder ausliefern",
      "priority": "P1",
      "effort": "L",
      "how": "lib/states/types.ts hat mit StateCredit { title, author, license, href } bereits das richtige Datenmodell — es ist nur ungenutzt (bolivar.ts Zeile 193: credits: []). Modell minimal erweitern:\n\nexport type StateCredit = {\n  title: string;          // Dateiname bzw. Werktitel auf Commons\n  author: string;         // Urheber laut Dateibeschreibungsseite\n  license: string;        // Anzeigename, z.B. \"CC BY-SA 4.0\"\n  licenseUrl: string;     // NEU: Deed-URL, z.B. https://creativecommons.org/licenses/by-sa/4.0/\n  href: string;           // Commons-Dateiseite\n  src: string;            // NEU: Zuordnung zum konkreten Bild (StatePhoto.src)\n};\n\nDaraus pro Bild ein ImageObject:\n{\n  \"@type\": \"ImageObject\",\n  \"@id\": \"https://mrsvenezuela.com/estado/bolivar#image-canaima-tepuy\",\n  \"contentUrl\": \"https://commons.wikimedia.org/wiki/Special:FilePath/Auyantepui.jpg?width=1800\",\n  \"url\": \"https://commons.wikimedia.org/wiki/Special:FilePath/Auyantepui.jpg?width=1800\",\n  \"caption\": \"Pared de un tepuy con una cascada entre la niebla, Parque Nacional Canaima\",\n  \"license\": \"https://creativecommons.org/licenses/by-sa/4.0/\",\n  \"acquireLicensePage\": \"https://commons.wikimedia.org/wiki/File:Auyantepui.jpg\",\n  \"creditText\": \"NOMBRE DEL AUTOR / Wikimedia Commons / CC BY-SA 4.0\",\n  \"creator\": { \"@type\": \"Person\", \"name\": \"NOMBRE DEL AUTOR\" },\n  \"copyrightNotice\": \"NOMBRE DEL AUTOR, CC BY-SA 4.0\"\n}\n\nWas Google verlangt: contentUrl ist Pflicht (darueber ordnet Google die Metadaten dem Bild zu) plus mindestens eines aus creator, creditText, copyrightNotice, license. license soll auf die Lizenzbeschreibung zeigen (CC-Deed), acquireLicensePage auf die Seite, wo man erfaehrt, wie man das Bild bekommt — bei Commons ist das die Dateibeschreibungsseite.\n\nWas die LIZENZ verlangt (davon unabhaengig!): Commons fordert Autorenname, Werktitel falls vorhanden, Lizenzname mit Link und die vom Lizenzgeber genannte URL. JSON-LD ist unsichtbar und erfuellt das NICHT. Ihr braucht zusaetzlich einen sichtbaren Credit — Bildunterschrift oder Credits-Block am Seitenende, im Format 'TITEL' von AUTOR / Wikimedia Commons / CC BY-SA 4.0 mit Link auf Deed und Dateiseite. Bei CC BY-SA ausserdem Aenderungen kennzeichnen (Zuschnitt, Farbkorrektur).\n\nHeissester Punkt: eure Merkregel 'Commons CC BY/BY-SA mit Krediten und Link' ist damit erst zur Haelfte umgesetzt, solange credits: [] leer ist. Die Lizenzpflicht besteht unabhaengig von SEO."
    },
    {
      "action": "BreadcrumbList auf allen Route-Typen ausliefern",
      "priority": "P1",
      "effort": "M",
      "how": "Breadcrumb ist eines der wenigen 2026 noch existierenden Rich Results und das einzige, das ihr flaechendeckend erreichen koennt. Eine Helper-Funktion in lib/schema.ts, gespeist aus ContentKind:\n\nconst crumbLabels: Record<ContentKind, { label: string; href: string | null }> = {\n  estado:            { label: \"Estados\",           href: \"/estados\" },\n  playa:             { label: \"Playas\",            href: \"/playas\" },\n  \"parque-nacional\": { label: \"Parques nacionales\", href: null },   // keine Hub-Seite -> Ebene weglassen\n  // ...\n};\n\nWichtig: nur Ebenen aufnehmen, die es als echte URL gibt. Ein ListItem mit item auf eine 404-URL ist ein Fehler im GSC-Bericht. Fuer parque-nacional, montana, animal, planta, comida, historia gibt es aktuell keine Hub-Route (app/ enthaelt nur estados und playas als Hubs) — dort also nur Inicio > <Name>, oder vorher die Hub-Seiten bauen.\n\nDas letzte ListItem bekommt kein item; Google nimmt dann die Seiten-URL.\n\nDanach in der Search Console unter Enhancements den Breadcrumbs-Bericht beobachten — vorher ist er zwangslaeufig leer."
    },
    {
      "action": "Article-Knoten fuer /articulo und /historia vervollstaendigen",
      "priority": "P1",
      "effort": "M",
      "how": "lib/page-factory.tsx setzt bei kind === 'articulo' zwar Article, aber ohne author, datePublished und dateModified. Ohne diese Felder ist Article praktisch wertlos.\n\n{\n  \"@type\": \"Article\",\n  \"@id\": \"https://mrsvenezuela.com/articulo/SLUG#article\",\n  \"headline\": \"...\",\n  \"description\": \"...\",\n  \"image\": { \"@id\": \"...#primaryimage\" },\n  \"datePublished\": \"2026-07-02\",\n  \"dateModified\": \"2026-08-19\",\n  \"author\": { \"@type\": \"Person\", \"name\": \"NOMBRE REAL\", \"url\": \"https://mrsvenezuela.com/sobre-nosotros\" },\n  \"publisher\": { \"@id\": \"https://mrsvenezuela.com/#organization\" },\n  \"isPartOf\": { \"@id\": \"...#webpage\" },\n  \"mainEntityOfPage\": { \"@id\": \"...#webpage\" },\n  \"inLanguage\": \"es\"\n}\n\nDafuer braucht DiscoverItem in lib/content.ts zwei neue Felder: publishedAt und updatedAt (ISO-Datum). Diese Daten muessen echt sein — Google-Guideline: veraltete oder falsche zeitbezogene Angaben kosten Eligibility.\n\nauthor.name ohne Titel und ohne Verlagsnamen. Wenn es keinen benannten Autor gibt, author auf { \"@id\": \".../#organization\" } setzen statt eine Person zu erfinden.\n\n/historia gehoert ebenfalls auf Article (nicht TouristDestination), mit about auf die historische Entitaet."
    },
    {
      "action": "sitemap.ts: echte lastModified-Daten statt new Date()",
      "priority": "P2",
      "effort": "M",
      "how": "app/sitemap.ts setzt fuer JEDE der ~300 URLs lastModified: new Date() — bei jedem Vercel-Deploy behaupten damit alle Seiten, gerade geaendert worden zu sein. Das ist inhaltlich falsch und entwertet das Signal.\n\nSobald DiscoverItem und StateGuideData ein updatedAt-Feld haben (siehe Article-Action), hier verwenden:\n  lastModified: new Date(item.updatedAt)\n\nSelbe Quelle wie dateModified im JSON-LD — die beiden duerfen sich nicht widersprechen.\n\nAlternative ohne neues Feld: Git-Mtime der jeweiligen Datenquelle beim Build auslesen. Aufwendiger, aber selbstpflegend."
    },
    {
      "action": "Validierungs-Routine nach dem Deploy festlegen",
      "priority": "P2",
      "effort": "S",
      "how": "Drei Werkzeuge, drei unterschiedliche Zustaendigkeiten — nicht verwechseln:\n\n1. Schema Markup Validator, https://validator.schema.org/ (von schema.org, nicht Google)\n   Prueft das Vokabular unabhaengig von Googles Feature-Liste. NUR dieses Tool haette 'TravelGuide' gefunden. Hier zuerst pruefen, bei jedem Umbau des @graph. Meldet unbekannte Typen und Properties sowie falsche Werttypen.\n\n2. Rich Results Test, https://search.google.com/test/rich-results\n   Prueft ausschliesslich Google-unterstuetzte Features und faengt laut Doku 'most technical errors'. Erwartung fuer euch: auf /estado/bolivar wird nur 'Breadcrumbs' erkannt — TouristDestination erzeugt kein Rich Result und taucht dort NICHT auf. Das ist kein Fehler. Fuer FAQ seit Juni 2026 keine Unterstuetzung mehr.\n   Google garantiert auch bei bestandenem Test keine Rich Results.\n\n3. Search Console\n   - URL-Pruefung: sieht Google die Seite und die Bild-URLs aus dem Markup? Die General Guidelines verlangen crawl- und indexierbare Bild-URLs — genau hier faellt der relative-Pfad-Fehler auf.\n   - Enhancements > Breadcrumbs: der einzige Bericht, der fuer diese Site relevant wird.\n   - Fehler = Element nicht eligible. Warnung = eligible, aber empfohlene Felder fehlen. Nur Fehler sind blockierend.\n   - Berichte zeigen eine Stichprobe, keine vollstaendige Liste.\n\nSchnelle lokale Vorpruefung ohne Deploy (Port 3003 laut Projekt-Setup):\n  curl -s http://localhost:3003/estado/bolivar | grep -o '<script type=\"application/ld+json\">[^<]*' | sed 's|<script[^>]*>||' | python -m json.tool\nDas faengt Syntaxfehler und relative URLs sofort."
    }
  ],
  "outdated_beliefs": [
    "'FAQPage ist noch fuer autoritative Regierungs- und Gesundheitsseiten erlaubt' — das war der Stand von August 2023 bis Mai 2026. Seit 07.05.2026 gibt es das FAQ-Rich-Result fuer NIEMANDEN mehr, die Doku-Seite wurde am 15.06.2026 geloescht.",
    "'FAQ-Markup bringt breitere SERP-Snippets / mehr Klickflaeche' — die Aufklapper existieren nicht mehr. Wer heute FAQPage einbaut, um Snippets zu vergroessern, baut ins Leere.",
    "'HowTo lohnt fuer Anreise- und Routenabschnitte' — HowTo-Rich-Results sind seit Sept. 2023 komplett weg und stehen 2026 in keiner Google-Galerie mehr.",
    "'Sitelinks-Searchbox lohnt sich, also WebSite + SearchAction einbauen' — das Feature wurde am 21.11.2024 abgeschaltet. Der WebSite-Knoten bleibt als @id-Anker sinnvoll, die SearchAction erzeugt kein Feature mehr.",
    "'schema.org hat einen Typ NationalPark' — hat es nicht (404). Korrekt ist Park, ggf. plus additionalType auf die Wikidata-Klasse.",
    "'schema.org hat einen Typ TravelGuide' — hat es nicht (404). Genau das steht aber in app/page.tsx Zeile 47.",
    "'schema.org hat einen Typ Food fuer Gerichte' — hat es nicht. Ein Gericht ohne Zubereitungsanleitung ist kein Recipe und kein Place; die Seite ist ein Article mit about auf ein Thing.",
    "'Rich Results Test ist DAS Validierungstool' — er prueft nur Google-Features. Vokabularfehler wie erfundene Typen findet ausschliesslich validator.schema.org.",
    "'ImageObject-Lizenzdaten erfuellen die CC-Attributionspflicht' — nein. JSON-LD ist unsichtbar; CC BY/BY-SA verlangen eine fuer Menschen wahrnehmbare Attribution zusaetzlich."
  ],
  "pitfalls": [
    "Erfundene Inhalte im Markup: die Fallback-FAQs in lib/page-factory.tsx Zeile 87-104 stehen nicht im DOM. Genau das nennen die General Guidelines als Verstoss ('Don't mark up content that is not visible to readers') — Folge sind Manual Actions, die die Rich-Result-Eligibility entziehen.",
    "Relative Bild-URLs im JSON-LD (lib/page-factory.tsx Zeile 74). generateMetadataFor() in derselben Datei macht es mit absoluteUrl() richtig — im Schema fehlt der Aufruf.",
    "Falscher Typ fuer Nicht-Orte: TouristDestination fuer comida, animal, planta bedeutet 'dies ist ein Ort'. Relevanz-Verstoss nach sd-policies.",
    "Recipe fuer /comida-Seiten, weil Google nur name und image verlangt — technisch valide, inhaltlich Spam, weil kein Zubereitungsinhalt existiert.",
    "sameAs auf die falsche Wikidata-Entitaet: Estado Bolivar (Q191164) vs. Ciudad Bolivar (Q26906) vs. Simon Bolivar. Jede QID einzeln verifizieren, nie per Namensmatch generieren.",
    "Erfundene GeoCoordinates 'zur Vollstaendigkeit'. Lieber weglassen als raten — falsche Fakten im Markup sind ein Guidelines-Verstoss.",
    "Mehrere getrennte ld+json-Bloecke pro Seite mit @id-Referenzen ueber Blockgrenzen: der Schema Markup Validator bewertet sie getrennt und meldet unaufloesbare Referenzen. Ein @graph pro Seite.",
    "isPartOf als vollstaendiges Duplikat des WebSite-Objekts (aktuell lib/page-factory.tsx Zeile 70-74) statt als { \"@id\": ... }-Referenz — dadurch entstehen zwei konkurrierende WebSite-Entitaeten ohne Identitaet.",
    "JSON-LD in eine Client Component verschieben: GPTBot, ClaudeBot und PerplexityBot fuehren kein JavaScript aus. Aktuell ist alles server-gerendert — so lassen.",
    "Mehrsprachiges Markup ergaenzen, obwohl es keine lokalisierten URLs gibt. Die Uebersetzung passiert per DOM-Manipulation zur Laufzeit auf derselben URL; inLanguage: 'es' ist korrekt. Erst wenn /en/, /de/ usw. als eigene Routen existieren, kommen hreflang und lokalisierte @id-Graphen dazu.",
    "Organization ohne echtes Logo. Google verlangt mindestens 112x112 px, crawlbar. public/images enthaelt bislang nur opengraph-venezuela.jpg (1200x630) — das ist ein OG-Bild, kein Logo.",
    "sameAs mit leeren, fremden oder inaktiven Social-Profilen befuellen, um die Liste zu verlaengern. Das ist ein Vertrauensschaden statt eines Entitaets-Signals.",
    "Sitemap-lastModified auf new Date() (app/sitemap.ts) widerspricht dem dateModified im JSON-LD, sobald ihr echte Daten einfuehrt. Beide muessen aus derselben Quelle kommen.",
    "Bei next/image ist der DOM-src '/_next/image?url=...', im ImageObject aber die Original-URL. In der Praxis loest Google das auf, aber nach dem Deploy per URL-Pruefung kontrollieren — das ist der wackeligste Punkt der Image-Lizenz-Umsetzung."
  ]
}