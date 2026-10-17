{
  "dimension": "Content, Informationsarchitektur und interne Verlinkung",
  "summary": "Der Produktionsbuild erzeugt 55 indexierbare URLs (sitemap.xml: 55 loc-Einträge; 50 Detailseiten aus searchIndex + /, /estados, /playas, /sobre-nosotros, /contacto), verteilt auf estado 24, playa 15, articulo 3, parque-nacional 2, montana 1 sowie je 1 ciudad/animal/planta/comida/historia. Die 23 redaktionellen Bundesstaat-Guides (1.755–2.797 Wörter, 11 h2, ~27 h3, 5–6 echte FAQs) sind exzellent; alles andere ist substanzlos: 19 der 50 Detailseiten liegen unter 310 Wörtern inklusive Header/Footer-Boilerplate, und acht davon sind zu 73–79 % wortidentisch, weil sie aus einem einzigen Template (getEditorialCopy) generiert werden — /comida/arepa trägt die h3 \"Cómo llegar\". Die interne Verlinkung ist zerbrochen: fünf Seiten haben null eingehende Links, alle 15 Strandseiten sind Sackgassen mit ausschließlich Footer-Links, 17 in den State-Daten hinterlegte Querverweise werden nie gerendert, und /playas kanonisiert wegen eines fehlenden metadata-Exports auf die Startseite — damit fällt die einzige Zugangsseite zu 14 Strandseiten aus dem Index. Es gibt weder Datums- noch Autorensignale, keine BreadcrumbList, nur zwei von zehn möglichen Hub-Seiten und null Abdeckung des kompletten Planungs-Clusters (Sicherheit, Visum, Impfungen, Geld/Dollar, Budget), der bei Venezuela sowohl das Suchvolumen als auch die AI-Fragen dominiert.",
  "findings": [
    {
      "title": "/playas kanonisiert auf die Startseite und trägt deren Title – die einzige Einstiegsseite zu 14 Strandseiten fällt aus dem Index",
      "severity": "kritisch",
      "evidence": "app/playas/page.tsx:1 ist `\"use client\"` und hat deshalb keinen metadata-Export; damit erbt die Route app/layout.tsx:33 `alternates: { canonical: \"/\" }`. Im Build steht in .next/server/app/playas.html wörtlich: `<link rel=\"canonical\" href=\"https://mrsvenezuela.com\"/>`, `<meta property=\"og:url\" content=\"https://mrsvenezuela.com\"/>` und `<title>Descubre Venezuela | Guia premium de destinos, cultura y naturaleza</title>` – identisch mit der Startseite. Gleichzeitig listet app/sitemap.ts:15 /playas mit priority 0.8. Die Linkgraph-Auswertung des Builds zeigt: 14 der 15 Strandseiten haben genau einen eingehenden internen Link, und der kommt ausschließlich von /playas.",
      "recommendation": "app/playas/page.tsx in eine Server-Komponente aufteilen (Datenliste + `export const metadata` mit eigenem title/description/`alternates.canonical: \"/playas\"`), die interaktive Sprachlogik in eine Kind-Client-Komponente auslagern – exakt das Muster, das app/estados/page.tsx:30-45 bereits korrekt verwendet. Zusätzlich CollectionPage+ItemList-JSON-LD ergänzen (auf /playas ist ld=0, auf /estados ld=2). Danach prüfen, dass alle Client-Routen ohne metadata (auch app/not-found.tsx) nicht mehr die Startseiten-Canonical erben.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "S"
    },
    {
      "title": "Fünf Seiten sind vollständig verwaist – die Kategorie-Navigation, die einzig auf sie verlinkte, wird nirgends gerendert",
      "severity": "kritisch",
      "evidence": "Auswertung aller 56 generierten HTML-Dateien: /animal/turpial, /planta/orquidea, /comida/arepa, /ciudad/caracas und /historia/camino-de-los-libertadores haben 0 eingehende interne Links. Ursache: `export const categories` (lib/content.ts:330-341) ist die einzige Datenquelle mit Links auf /comida/arepa, /animal/turpial, /planta/orquidea, /ciudad/caracas und /historia/camino-de-los-libertadores; gerendert wird sie nur von components/sections/category-grid.tsx – und `<CategoryGrid` kommt in app/ und components/ kein einziges Mal vor (app/page.tsx:59-66 rendert Hero, SearchPanel, StatesStrip, FeaturedDestinations, Experiences, Articles). Dieselbe Verwaisung trifft components/sections/gallery.tsx und components/sections/interactive-map.tsx.",
      "recommendation": "Entweder die fünf Seiten in eine echte Hub-Struktur einhängen (siehe Befund \"Fehlende Hub-Seiten\") oder sie aus searchIndex und Sitemap entfernen. Kurzfristig: `categories` aus lib/content.ts entstauben (die Labels tragen keine Akzente – \"Montanas\", \"Gastronomia\", \"Fauna\") und die überlebenden Einträge im Footer (components/sections/home-footer.tsx:20-27, aktuell nur 7 Links) sowie in einer serverseitig gerenderten Themen-Sektion der Startseite verlinken. Die drei toten Komponenten category-grid.tsx, gallery.tsx, interactive-map.tsx löschen oder bewusst wieder einbauen.",
      "impact_search": "hoch",
      "impact_ai": "mittel",
      "effort": "M"
    },
    {
      "title": "Acht Detailseiten sind zu 73–79 % wortidentisch: ein Template fragt \"Cómo llegar\" für eine Arepa",
      "severity": "kritisch",
      "evidence": "components/content/detail-page.tsx:276-306 (`getEditorialCopy`) erzeugt für jeden Inhalt ohne Spezial-Guide denselben Text mit eingesetztem Namen. Gemessene Jaccard-Ähnlichkeit (6-Wort-Shingles) auf dem Build: /planta/orquidea vs. /comida/arepa 79,3 %, /animal/turpial vs. /comida/arepa 78,1 %, /comida/arepa vs. /ciudad/caracas 78,7 %, /ciudad/caracas vs. /historia/camino-de-los-libertadores 73,8 %. Die Überschriftenkette von /comida/arepa lautet: h1 \"Arepa\" → h2 \"Historia, rutas y contexto\" → h3 \"Cómo llegar\" → h3 \"Curiosidades\" → h3 \"Mapa local\" → h3 \"Preguntas frecuentes\", mit dem Fließtext \"Para Arepa, conviene planificar conexiones, traslados locales y ventanas de luz\". Wortzahl inkl. Header/Footer: turpial 252, orquidea 248, arepa 246, caracas 250, camino-de-los-libertadores 264. Zusätzlicher Textfehler in detail-page.tsx:282: `item.name.toLowerCase()` erzeugt auf /articulo/ruta-perfecta-14-dias den Satz \"entender la ruta perfecta para descubrir venezuela en 14 dias\".",
      "recommendation": "Das generische Template ersatzlos streichen. Für jede der acht Seiten entweder echten redaktionellen Inhalt nach dem Muster von lib/states/types.ts schreiben (eigenes Datenmodell für comida/animal/planta/historia, mindestens 800–1.200 Wörter plus 5–6 spezifische FAQs) oder die Route deindexieren. Bis dahin `robots: { index: false }` in lib/page-factory.tsx für alle Items setzen, für die weder ein StateGuide noch ein beachGuide noch ein Spezial-Guide existiert – das ist genau die Bedingung, die detail-page.tsx:611-628 bereits auswertet.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "L"
    },
    {
      "title": "Alle 15 Strandseiten sind Sackgassen: kein Link zum Bundesstaat, zu Nachbarstränden oder zu Artikeln",
      "severity": "hoch",
      "evidence": "Linkauswertung des Builds: die ausgehenden internen Links von .next/server/app/playa/mochima.html sind exakt ['/', '/playas', '/estados', '/sobre-nosotros', '/contacto'] – ausschließlich Header-Logo und Footer (components/sections/home-footer.tsx:20-27). Identisch für alle 15 playa-Seiten (Spalte outlinks=5). Der \"related\"-Block aus components/content/detail-page.tsx:802-805 wird im `isFeaturedBeach`-Zweig nicht erreicht. /playa/choroni verlinkt also nicht auf /estado/aragua, obwohl lib/states/data/aragua.ts:82 den umgekehrten Verweis bereits als Daten enthält.",
      "recommendation": "Im Strand-Zweig von detail-page.tsx einen Kontextblock ergänzen, der aus `item.region` den Bundesstaat auflöst und auf /estado/<slug> verlinkt, plus 3–4 Strände desselben Bundesstaats und den passenden Artikel. Sauberer: die Strände analog zu components/content/guide-related.tsx behandeln, das für Estado-Guides bereits Geschwister derselben Region rendert (state-editorial-guide.tsx:526). Zusätzlich ein `region`-Feld mit echtem State-Slug statt Freitext (\"Sucre y Anzoátegui\", \"Dependencias Federales\" in lib/content.ts:222, 293) einführen, damit die Auflösung deterministisch ist.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "M"
    },
    {
      "title": "17 in den State-Daten gepflegte interne Querverweise werden nie als Link gerendert",
      "severity": "hoch",
      "evidence": "lib/states/types.ts:31 definiert `StatePlace.href` ausdrücklich als \"Ruta interna existente (por ejemplo `/parque-nacional/canaima`). Solo rutas verificadas.\" Befüllt ist das Feld 17-mal, u.a. lib/states/data/falcon.ts:87 `/parque-nacional/medanos-de-coro`, falcon.ts:103 `/playa/cayo-sombrero`, falcon.ts:109 `/playa/chichiriviche`, merida.ts:93 `/montana/pico-bolivar`, bolivar.ts:98 `/parque-nacional/canaima`, aragua.ts:82/88/94, nueva-esparta.ts:81/87/93, sucre.ts:83/89, carabobo.ts:93/99, anzoategui.ts:80, la-guaira.ts:82. Gerendert werden die Places von components/content/place-gallery.tsx – dort kommt weder `href` noch `Link` ein einziges Mal vor (grep auf 'href|Link' liefert 0 Treffer). Der Build bestätigt es: ausgehende Links von /estado/falcon sind nur ['/', '/playas', '/estados', '/estado/lara', '/estado/yaracuy', '/estado/zulia', '/sobre-nosotros', '/contacto'].",
      "recommendation": "In components/content/place-gallery.tsx den Ort-Titel als `next/link` rendern, wenn `place.href` gesetzt ist (Lightbox-Verhalten für das Foto beibehalten, Link nur auf Überschrift/CTA). Danach die href-Abdeckung von 17 auf möglichst viele der 135 gelisteten Orte ausbauen – jeder gesetzte href ist ein thematisch perfekter Kontextlink von einer 2.500-Wörter-Seite auf eine 300-Wörter-Seite.",
      "impact_search": "hoch",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "FAQPage-Markup auf 27 Seiten enthält erfundene Fragen, die nicht zum sichtbaren Inhalt passen",
      "severity": "hoch",
      "evidence": "lib/page-factory.tsx:79-99: für jedes Item ohne StateGuide wird ein FAQPage mit zwei generischen Fragen ausgeliefert. In .next/server/app/playa/mochima.html steht: \"¿Cuál es la mejor época para visitar Mochima?\" mit der Antwort \"Depende de la región, el clima y el tipo de experiencia. La guía prioriza temporadas...\". Auf der Seite sichtbar sind aber drei völlig andere FAQs aus dem beachGuides-Objekt (detail-page.tsx:309-601), Überschrift \"Preguntas frecuentes\". Bei /comida/arepa lautet die ausgelieferte Frage \"¿Cuál es la mejor época para visitar Arepa?\" und \"¿Qué se puede descubrir cerca de Arepa?\". Betroffen sind alle 27 Nicht-Estado-Detailseiten mit exakt demselben Antworttext.",
      "recommendation": "Den generischen FAQ-Fallback in lib/page-factory.tsx:83-99 ersatzlos entfernen und FAQPage nur ausliefern, wenn echte, auf der Seite sichtbare Fragen existieren (guide.faqs bei Estados, beachGuide.faqs bei Stränden – letztere sind heute nicht im Markup, obwohl sie sichtbar sind). Structured Data, die nicht dem sichtbaren Inhalt entspricht, ist ein Richtlinienverstoß und riskiert den Verlust aller Rich Results der Domain, auch der 23 korrekten Estado-FAQs.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "S"
    },
    {
      "title": "Breadcrumbs existieren nur auf 23 von 55 Seiten und nirgends als BreadcrumbList-Markup",
      "severity": "hoch",
      "evidence": "Sichtbare Breadcrumb-Navigation gibt es ausschließlich in components/content/guide-toc.tsx:121-141 (`<nav aria-label=\"Ruta de navegación\">` mit Inicio › Estados › Región › Estado), eingebunden nur an einer Stelle: components/content/state-editorial-guide.tsx:243. Die 15 Strand-, 2 Parque-, 1 Montaña-, 3 Artikel- und 5 verwaisten Seiten haben stattdessen nur einen \"Descubre Venezuela\"-Chip zurück zur Startseite (detail-page.tsx:822). Ein grep auf \"BreadcrumbList\" über das gesamte Repo liefert 0 Treffer – die drei JSON-LD-Stellen (app/page.tsx:45, app/estados/page.tsx:48, lib/page-factory.tsx:56) enthalten kein Breadcrumb-Schema.",
      "recommendation": "GuideToc-Breadcrumb-Teil in eine eigenständige Komponente `<Breadcrumbs>` herausziehen und in lib/page-factory.tsx für alle kinds rendern (Inicio › <Hub> › <Seite>, mit /playas als Hub für playa, /estados für estado). Parallel in den JSON-LD-@graph von page-factory.tsx einen `BreadcrumbList` mit ItemListElement aufnehmen – das ist die Voraussetzung dafür, dass Google statt der nackten URL den Pfad in den Snippets zeigt, und gibt AI-Systemen die Hierarchie, die aktuell nur die Sitemap kennt.",
      "impact_search": "hoch",
      "impact_ai": "mittel",
      "effort": "M"
    },
    {
      "title": "Acht von zehn Inhaltstypen haben keine Übersichtsseite – es existieren nur /estados und /playas",
      "severity": "hoch",
      "evidence": "lib/content.ts:444-455 definiert zehn `pageKinds` (estado, ciudad, parque-nacional, playa, montana, animal, planta, comida, historia, articulo) und app/sitemap.ts:18-27 erzeugt daraus 50 Detail-URLs. Übersichtsrouten gibt es nur zwei: app/estados/page.tsx und app/playas/page.tsx. Es fehlen /parque-nacional, /montana, /ciudad, /comida, /animal, /planta, /historia, /articulo. Auch die sechs Regionen aus lib/states/regions.ts:11-18 haben keine eigene URL: components/sections/search-panel.tsx:16-19 verlinkt auf /estados?region=Los+Andes, aber components/content/states-hub.tsx:28-33 liest den Parameter erst clientseitig aus `window.location.search`, das ausgelieferte HTML ist identisch mit /estados und die Canonical zeigt korrekt auf /estados – die Regionen sind für Crawler unsichtbar.",
      "recommendation": "Mindestens sechs Region-Hubs (/estados/los-andes, /estados/occidente, /estados/region-central, /estados/los-llanos, /estados/oriente, /estados/guayana-y-amazonas) als statische Server-Routen anlegen; die Daten dafür liegen bereits vollständig in lib/states/regions.ts und lib/nav-data.ts:17-24 (navRegionGroups). Anschließend /parques-nacionales, /articulos (Blog-Index) und /gastronomia als redaktionelle Hubs bauen. Jeder Hub braucht ein CollectionPage+ItemList-JSON-LD nach dem Vorbild app/estados/page.tsx:47-63 und 300–600 Wörter eigenen Einleitungstext, sonst entsteht nur eine weitere Linkliste.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "L"
    },
    {
      "title": "Keinerlei Aktualitäts- oder Autorensignale: kein Datum, kein Autor, kein Publisher – und eine Sitemap, die täglich alle 55 URLs als geändert meldet",
      "severity": "hoch",
      "evidence": "grep über app/, components/ und lib/ nach `datePublished|dateModified|<time|Actualizado|Última actualización|publishedAt` liefert 0 Treffer. Der Artikel-JSON-LD in lib/page-factory.tsx:66-75 hat `\"@type\": \"Article\"` ohne author, ohne publisher, ohne datePublished/dateModified. Die einzigen \"author\"-Felder im Repo sind Wikimedia-Fotocredits (z.B. lib/states/data/falcon.ts:199, components/content/pico-bolivar-guide.tsx:41). Sichtbar ist nur \"© 2026 Mrs Venezuela\" (home-footer.tsx:82). app/sitemap.ts:9/15/22 setzt `lastModified: new Date()` für jede URL bei jedem Build – im generierten .next/server/app/sitemap.xml.body tragen alle 55 Einträge denselben Zeitstempel 2026-08-25T16:52:31.726Z.",
      "recommendation": "Pro Inhalt ein `updated`-Feld pflegen (in StateGuideData und DiscoverItem), sichtbar unter der h1 als `<time dateTime=\"…\">Actualizado en agosto de 2026</time>` rendern und in JSON-LD als dateModified/datePublished ausgeben. Für Artikel zusätzlich `author` und `publisher` (Organization \"Mrs Venezuela\" mit logo) ergänzen und die Redaktionsseite app/sobre-nosotros/page.tsx als `sameAs`/`about` verlinken. In app/sitemap.ts `lastModified` aus diesem Feld ableiten statt aus `new Date()` – ein Sitemap-Datum, das sich bei jedem Deploy für alle URLs ändert, wird von Google ignoriert und kostet Crawl-Budget.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "M"
    },
    {
      "title": "Der komplette praktische Planungs-Cluster fehlt – genau die Fragen, die Nutzer zu Venezuela an ChatGPT und Perplexity stellen",
      "severity": "hoch",
      "evidence": "Wortgenauer grep über lib/states/data/, lib/content.ts und components/content/ ergibt: \\bvisa\\b 0 Dateien, \\bvisado\\b 0, \\bpasaporte\\b 0, \\bvacun 0, \\bfiebre amarilla\\b 0, \\bmoneda\\b 0, \\bd[oó]lar 0, \\bdivisas\\b 0, \\bcajero\\b 0, \"tarjeta de cr\" 0, \\bZelle\\b 0, \\bPagom[oó]vil\\b 0, \\bseguro de viaje\\b 0, \\bdatos m[oó]viles\\b 0, \"es seguro\" 1, \\bpresupuesto\\b 1, \\bitinerario\\b 1. Die vorhandenen 134 FAQ-Einträge der Estado-Guides decken durchweg lokale Intentionen ab (\"¿Cuántos días conviene dedicar a Falcón?\", \"¿Cómo se llega a Isla Larga?\") – exzellent, aber ausschließlich auf Bundesstaat-Ebene. Auf Länderebene existiert kein einziger Absatz.",
      "recommendation": "Vier Landesseiten mit je 1.200–2.000 Wörtern und 8–12 FAQs anlegen: (1) \"¿Es seguro viajar a Venezuela?\" mit regionaler Differenzierung, (2) \"Requisitos de entrada: visado, pasaporte, vacunas y seguro\", (3) \"Dinero en Venezuela: dólares en efectivo, bolívares, Zelle, Pago Móvil y cajeros\", (4) \"Cuánto cuesta viajar a Venezuela: presupuesto diario\". Diese vier Themen sind die meistgestellten Fragen zu Venezuela-Reisen überhaupt und der einzige Weg, in AI-Antworten zitiert zu werden – heute liefert die Domain dazu buchstäblich nichts. Jede dieser Seiten mit FAQPage-Markup versehen, das dem sichtbaren Text entspricht, und aus jedem der 23 Estado-Guides kontextuell verlinken.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "L"
    },
    {
      "title": "Die 10 wertvollsten fehlenden Seiten/Hubs für Suche und AI-Antworten",
      "severity": "hoch",
      "evidence": "Belegt aus dem Ist-Bestand: 55 URLs, davon 24 estado, 15 playa, 3 articulo, 2 parque-nacional, 1 montana und je 1 ciudad/animal/planta/comida/historia (lib/content.ts:382-441). Venezuela hat 43 Nationalparks – die Site hat zwei Seiten (canaima, medanos-de-coro). Die 23 Estado-Guides listen zusammen 135 Orte (lib/states/data/*, 6 Orte pro Guide, Kommentar in components/content/place-gallery.tsx:13), von denen keiner eine eigene URL besitzt. Alle 23 Guides nennen ihre Hauptstadt (lib/states/regions.ts:31-56), aber es existiert nur eine einzige, verwaiste Stadtseite (/ciudad/caracas, 250 Wörter, 0 eingehende Links).",
      "recommendation": "Priorisierte Liste: 1) /venezuela/es-seguro-viajar – die mit Abstand häufigste Frage, heute 0 Wörter. 2) /venezuela/requisitos-de-entrada (visado, pasaporte, fiebre amarilla, seguro). 3) /venezuela/dinero-y-pagos (dólares en efectivo, bolívares, Zelle, Pago Móvil, cajeros, presupuesto diario). 4) /parques-nacionales – Hub plus Einzelseiten für Morrocoy, Mochima, Henri Pittier, Sierra Nevada, Los Roques, Cueva del Guácharo, Guatopo, Yurubí; deckt \"parques nacionales de Venezuela\" und entlastet die überladene playa-Kategorie. 5) /que-ver-en-venezuela als echter Destinations-Hub – heute nur die Startseite mit den h2 \"Lecturas con pulso de revista.\" und \"Viajar aquí es cambiar de ritmo.\" 6) /itinerarios plus echte 7-/10-/14-Tage-Routen; /articulo/ruta-perfecta-14-dias verspricht das bereits und liefert nichts. 7) /gastronomia-venezolana Hub plus Einzelseiten (pabellón criollo, hallaca, cachapa, tequeños, arepa neu) – \"comida típica de Venezuela\" ist eine Kernfrage in Suche und AI. 8) /mejor-epoca-para-viajar-a-venezuela – der Rohstoff steckt bereits in den 23 Guides (\"temporada\" trifft 16 Dateien), gehört aber auf eine aggregierende Landesseite. 9) Sechs Region-Hubs /estados/<region> – Daten liegen fertig in lib/states/regions.ts, SearchPanel verlinkt schon dorthin, nur ohne indexierbare URL. 10) /ciudades Hub plus Maracaibo, Mérida, Valencia, Barquisimeto, Ciudad Bolívar, Puerto La Cruz – jede Stadt wird in ihrem Estado-Guide bereits beschrieben und wartet auf eine eigene Seite.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "L"
    },
    {
      "title": "/estado/distrito-capital ist die einzige Estado-Seite ohne Guide und kannibalisiert /ciudad/caracas",
      "severity": "mittel",
      "evidence": "lib/content.ts:117-141 listet 24 Bundesstaaten, lib/states/index.ts:31-55 registriert aber nur 23 Guides – distrito-capital fehlt. Die Seite fällt deshalb in den Legacy-Zweig components/content/detail-page.tsx:1034 (`isState && stateGuide`) und rendert das alte StateGuide-Objekt aus detail-page.tsx:251 (vier Felder Text). Ergebnis im Build: 594 Wörter gegenüber 1.755–2.797 der anderen 23, Title \"Distrito Capital | Descubre Venezuela\" und Description \"Paisajes, cultura, sabores y rutas para descubrir la identidad de Distrito Capital\" – die generische Vorlage aus lib/content.ts:392-394, während z.B. Zulia \"Zulia: guía de viaje del Lago de Maracaibo, el Catatumbo y la gaita\" trägt. Parallel existiert /ciudad/caracas (250 Wörter, 0 eingehende Links) zum selben Thema.",
      "recommendation": "lib/states/data/distrito-capital.ts nach dem Muster der übrigen 23 anlegen (Caracas, El Ávila/Waraira Repano, Casco Histórico, Museos, Sabana Grande, El Hatillo, Metro) und in lib/states/index.ts registrieren. /ciudad/caracas entweder per 301 auf /estado/distrito-capital umleiten oder klar abgrenzen als Stadtführer mit eigenem Fokus – zwei dünne Seiten zum selben Entity teilen sich derzeit jede Chance auf ein Ranking.",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "M"
    },
    {
      "title": "\"Lugares cercanos\" zeigt auf jeder Seite dieselben vier Ziele, obwohl ein nearby-Feld existiert",
      "severity": "mittel",
      "evidence": "components/content/detail-page.tsx:1131 rendert `searchIndex.slice(0, 4)` – das sind immer Canaima, Los Roques, Médanos de Coro und Pico Bolívar, unabhängig vom Standort der Seite. Im Build von /comida/arepa erscheint unter der h2 \"Lugares cercanos\" exakt diese Viererliste. Das dafür vorgesehene Feld `nearby?: string[]` ist in lib/content.ts:35 deklariert, wird aber in keinem einzigen der 50 Einträge befüllt. Ebenso konzentriert der \"related\"-Filter in detail-page.tsx:802-805 (`entry.kind === item.kind || entry.region === item.region || entry.kind === \"articulo\"`) mit `.slice(0, 3)` alle Links auf dieselben wenigen Ziele.",
      "recommendation": "`nearby` je Item befüllen oder – robuster – aus `region` und Geo-Nähe ableiten und die Auswahl deterministisch rotieren lassen (z.B. Ranking nach gemeinsamem Bundesstaat, dann Region, dann Kind), statt `.slice(0, 3)` auf eine unsortierte Liste anzuwenden. Ziel ist eine gleichmäßige Verteilung interner Links: aktuell erhalten die drei Artikelseiten je 8 interne Links, während 11 Strandseiten je 1 bekommen.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "M"
    },
    {
      "title": "Die 24 Bundesstaat-Links im Mega-Menü und im Mobilmenü stehen nicht im ausgelieferten HTML",
      "severity": "mittel",
      "evidence": "components/sections/site-header.tsx:148-155 rendert das Mega-Menü in `<AnimatePresence>{megaOpen ? … : null}</AnimatePresence>` – die 24 `<Link href={`/estado/${state.slug}`}>` (site-header.tsx:185-198) existieren erst nach dem Klick. Dasselbe gilt für das Mobilmenü ab site-header.tsx:227. Der Build bestätigt es: /playa/mochima liefert nur 5 interne Links aus, /estado/falcon nur 8. Der Kommentar in site-header.tsx:13-15 beschreibt das Menü ausdrücklich als \"la única navegación presente en las 54 páginas\" – für Crawler ist es das aber nicht.",
      "recommendation": "Das Mega-Menü immer ins DOM rendern und nur per CSS/`hidden`-Attribut ein- und ausblenden (framer-motion kann auf einem stets gemounteten Container animieren), damit die 24 Estado-Links auf jeder der 55 Seiten crawlbar sind. Alternativ die Region-Gruppen zusätzlich in den Footer aufnehmen – components/sections/home-footer.tsx:20-27 führt heute nur 7 Links und ist die einzige serverseitig gerenderte Navigation.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "S"
    },
    {
      "title": "Zwei konkurrierende Markennamen in den Titles und Titles ohne spanische Akzente",
      "severity": "mittel",
      "evidence": "app/layout.tsx:26-29 setzt `template: \"%s | Descubre Venezuela\"` und den Default \"Descubre Venezuela | Guia premium de destinos, cultura y naturaleza\" (ohne Akzent in \"Guia\"), Description mit \"montanas\" und \"gastronomia\". app/contacto/page.tsx und app/sobre-nosotros/page.tsx liefern dagegen \"Contacto | Mrs Venezuela\" und \"Sobre nosotros | Mrs Venezuela\". Die Domain ist mrsvenezuela.com, das Logo in site-header.tsx:78 lautet \"Mrs Venezuela\", der Footer-Copyright \"© 2026 Mrs Venezuela\" – aber 51 von 55 Titles enden auf \"| Descubre Venezuela\". Auch die JSON-LD-Entity heißt durchgängig \"Descubre Venezuela\" (lib/page-factory.tsx:60, app/page.tsx:48).",
      "recommendation": "Einen Markennamen festlegen und in Title-Template, JSON-LD `WebSite.name`/`publisher`, og:site_name und Footer identisch verwenden. Alle Titles und Descriptions in app/layout.tsx:24-57 mit korrekten Akzenten schreiben (\"Guía\", \"montañas\", \"gastronomía\") – die 23 Estado-Guides machen es in ihren seo.title-Feldern bereits richtig. Uneindeutige Entitätsbenennung ist einer der Hauptgründe, warum eine Marke in AI-Antworten nicht namentlich zitiert wird.",
      "impact_search": "mittel",
      "impact_ai": "hoch",
      "effort": "S"
    },
    {
      "title": "Startseite ohne Keyword-Substanz in h1 und h2",
      "severity": "mittel",
      "evidence": "Aus dem Build .next/server/app/index.html: h1 \"Descubre la belleza de Venezuela\" (lib/i18n.ts, hero.title), h2 \"Venezuela, estado por estado.\", \"Destinos que definen a Venezuela.\", \"Viajar aquí es cambiar de ritmo.\", \"Lecturas con pulso de revista.\". Gesamtwortzahl der Startseite: 427 inkl. Header/Footer. Keine der Überschriften enthält eine der tatsächlichen Suchintentionen (\"qué visitar\", \"guía de viaje\", \"lugares turísticos\", \"mejor época\"). Positiv: alle 56 gebauten Seiten haben exakt eine h1 – die Hierarchie ist strukturell sauber.",
      "recommendation": "h1 und die vier h2 der Startseite auf reale Intentionen umstellen, ohne den redaktionellen Ton zu verlieren (z.B. h1 \"Guía de viaje de Venezuela\", h2 \"Qué visitar en Venezuela\", \"Los 23 estados, uno por uno\", \"Playas, islas y cayos\", \"Cuándo viajar y cómo organizarlo\"). Da alle Texte über lib/i18n.ts und lib/site-translations.json laufen, ist das eine Datenänderung ohne Komponentenumbau – die Memory-Notiz zum Übersetzungsskript beachten (Snapshot vor dem Lauf).",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "JSON-LD mit relativen Bild-URLs und falschen Schema-Typen",
      "severity": "niedrig",
      "evidence": "lib/page-factory.tsx:70 setzt `image: item.image` unverändert in den Graph, obwohl direkt darüber in generateMetadataFor:23 bereits absolutiert wird. Im Build steht in /playa/mochima.html: `\"image\":\"/images/mochima.jpg\"` – eine relative URL, die Google für ImageObject nicht akzeptiert. Betroffen sind alle 50 Detailseiten. Zusätzlich vergibt page-factory.tsx:66 `\"@type\": kind === \"articulo\" ? \"Article\" : \"TouristDestination\"` – dadurch ist /comida/arepa ein TouristDestination, ebenso /animal/turpial und /planta/orquidea.",
      "recommendation": "In ContentRoute dieselbe Absolutierung wie in Zeile 23 anwenden. Typmapping pro kind ausdifferenzieren: playa/parque-nacional/montana/estado/ciudad → TouristDestination bzw. Place, comida → Recipe oder Article, animal/planta → Article, historia → Article. Falsche Typen kosten nicht nur Rich Results, sie verwirren auch die Entitätszuordnung in AI-Systemen.",
      "impact_search": "niedrig",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "/playas pflegt eine zweite, handgeschriebene Strandliste parallel zu searchIndex",
      "severity": "niedrig",
      "evidence": "app/playas/page.tsx:8-152 definiert `famousBeaches` mit 15 Einträgen (name, location, href, description) vollständig separat von lib/content.ts:187-329 (`additionalDestinations` plus los-roques aus `featured`). Die Beschreibungen weichen bereits ab: lib/content.ts:207 sagt für Cayo Sombrero \"Arena clara, palmeras y aguas tranquilas dentro del Parque Nacional Morrocoy\", app/playas/page.tsx:21 sagt \"Uno de los cayos más populares de Morrocoy, conocido por sus aguas tranquilas\". Auch die Ortsangaben divergieren (\"Dependencias Federales\" für Los Roques in playas/page.tsx:11 vs. region \"Los Roques\" in lib/content.ts:159). Für die vier Fremdsprachen wird die Beschreibung sogar durch ein Template ersetzt: `description: (name) => name + \" es uno de los destinos…\"` (playas/page.tsx ff.).",
      "recommendation": "famousBeaches aus `searchIndex.filter(i => i.kind === \"playa\")` ableiten, sobald die Seite eine Server-Komponente ist (siehe Befund 1). Jede neue Strandseite in lib/content.ts erscheint dann automatisch im Hub; heute muss sie an zwei Stellen gepflegt werden und fehlt sonst still im einzigen Crawl-Pfad.",
      "impact_search": "niedrig",
      "impact_ai": "niedrig",
      "effort": "S"
    }
  ]
}