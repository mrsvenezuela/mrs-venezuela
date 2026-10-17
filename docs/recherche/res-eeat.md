{
  "topic": "Ranking-Realitaet fuer descubre-venezuela / mrsvenezuela.com — Google-Updates 2025/2026, E-E-A-T fuer Reise-Content, Links & Marke, Nischenstrategie, Frische, Tooling (Stand 25.08.2026)",
  "summary": "Kernbefund: Die Site ist mit ~55 Detailseiten viel zu klein, um algorithmisch als \"scaled content abuse\" aufzufallen — das eigentliche Risiko ist nicht Abstrafung, sondern Unsichtbarkeit. Google hat 2025 vier bestaetigte Updates gefahren (3 Core, 1 Spam) und 2026 bereits sechs (2 Core, 3 Spam, 1 Discover), zuletzt das August-2026-Spam-Update vom 18.–20.08.2026, das laut Berichten genau auf massenhaft erzeugte, duenne Seiten zielte. Abgestraft wird nachweislich nicht \"KI-Content\", sondern Skalierung ohne Mehrwert: Googles Spam-Policy nennt woertlich \"using generative AI tools to generate many pages without adding value for users\", und die Durchsetzung erfolgt sitewide per Manual Action.\n\nKonkret im Repo gefunden — drei Dinge, die aktiv schaden: (1) app/sitemap.ts setzt `lastModified: new Date()` auf JEDEN Eintrag, d.h. bei jedem Vercel-Deploy meldet die Sitemap \"alle ~55 URLs heute geaendert\". Gary Illyes hat am 16.07.2026 explizit gesagt, lastmod-Vertrauen sei binaer und man sei \"probably better off without the lastmods\", wenn sie falsch sind. Aktuell verbrennt die Site diesen Kanal. (2) lib/page-factory.tsx erzeugt fuer alle Nicht-Estado-Seiten (~26 Seiten: playa, ciudad, animal, planta, comida, historia, montana, parque-nacional, articulo) ein FAQPage-Fallback mit identischem Boilerplate-Antworttext, in den nur `item.name` eingesetzt wird — das ist exakt das Templating-Muster, das die Scaled-Content-Policy beschreibt. Zugleich sind FAQ-Rich-Results seit 07.05.2026 abgeschaltet, die Doku wurde am 15.06.2026 entfernt: Das Markup bringt null Sichtbarkeit und nur Risiko. (3) Im JSON-LD von page-factory.tsx laeuft `image: item.image` NICHT durch absoluteUrl() (anders als in generateMetadataFor darueber), und `description: item.description` liefert bei 22 Bundesstaaten den generischen Template-String \"Paisajes, cultura, sabores y rutas para descubrir la identidad de ${state.name}.\" aus lib/content.ts — waehrend die sichtbare Meta-Description aus guide.seo.description kommt. Structured Data und sichtbarer Inhalt weichen also voneinander ab.\n\nGroesste E-E-A-T-Luecke: Es gibt keinerlei Autor, kein Veroeffentlichungs-/Aktualisierungsdatum, kein Organization- oder Person-Schema irgendwo im Repo (grep ueber lib/ und components/content/ liefert nur Foto-`credits`). Alle Bilder stammen von Wikimedia Commons (next.config.ts erlaubt nur upload./commons.wikimedia.org) — null Originalfotos. Googles neuer Leitfaden vom 15.05.2026 stellt genau darauf ab: \"a first-hand review provides a unique perspective based on personal experience\" versus Zusammenfassungen von allgemein verfuegbarem Wissen. Eine Venezuela-Site, die ausschliesslich Commons-Bilder und recherchierten Text zeigt, hat definitionsgemaess keine First-Hand-Experience-Signale. Der Name \"Michell Naranjo\" / \"Mrs Venezuela\" steckt bereits im manual-Dictionary von components/i18n/content-translator.tsx — eine reale Identitaet, die SEO-seitig komplett ungenutzt bleibt.\n\nLinks: deutlich entwertet, aber nicht tot. Illyes on record: Links sind seit laengerem kein Top-3-Faktor, \"we need very few links to rank pages\". Wichtige Korrektur zu zwei Annahmen aus der Aufgabenstellung: Ein Google Business Profile ist fuer eine rein informationelle Website ohne Face-to-Face-Kundenkontakt NICHT zulaessig, und das Eintragen der eigenen Site als Wikipedia-Weblink ist nach Wikipedia-Policy Spam (\"you should avoid linking to a site that you own\"). Beides faellt als Linkquelle aus. Realistisch bleiben: eigene Fotos unter CC auf Wikimedia Commons hochladen (indirekte Marken-Sichtbarkeit statt Backlink), YouTube/Pinterest als eigenstaendige Traffic-Kanaele, echte Beteiligung in r/venezuela und Diaspora-Foren, Presse/Interviews ueber die reale Person hinter der Site.\n\nChance: Longtail auf Spanisch mit lokalem Detailwissen, das TripAdvisor und Lonely Planet nicht haben — konkrete Anfahrt, aktuelle Zugangslage, Preise in Bolivar/USD, Saisonalitaet pro Ort. Dazu zwei neue, unmittelbar nutzbare Google-Features: die Generative-AI-Performance-Reports in der Search Console (Start 03.06.2026, Daten ab 18.05.2026, nur Impressions) und \"Preferred Sources\", das seit 27.05.2026 auch in AI Overviews und AI Mode greift und einen einbaubaren Button hat (dokumentiert 20.08.2026).",
  "key_points": [
    {
      "claim": "Google bestaetigte 2025 genau vier Ranking-Updates: March 2025 core (13.–27.03.), June 2025 core (30.06.–17.07.), August 2025 spam (26.08.–22.09.), December 2025 core (11.–29.12.).",
      "source_url": "https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history",
      "why_it_matters": "Das ist die einzige autoritative Quelle. SEO-Blogs erfinden Update-Namen (z.B. ein 'October 2025 spam update' oder 'SpamBrain 3.0'), die im offiziellen Dashboard nicht existieren.",
      "confidence": "belegt",
      "date_or_version": "Google Search Status Dashboard, abgerufen 25.08.2026"
    },
    {
      "claim": "2026 bisher sechs bestaetigte Updates: February 2026 Discover update (05.–27.02.), March 2026 spam (24.–25.03.), March 2026 core (27.03.–08.04.), May 2026 core (21.05.–02.06.), June 2026 spam (24.–26.06.), August 2026 spam (18.–20.08.). Kein Core Update im Juli/August 2026.",
      "source_url": "https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history",
      "why_it_matters": "Drei Spam-Updates in fuenf Monaten gegenueber einem in ganz 2025 — die Spam-Durchsetzung hat sich stark verdichtet. Ein neuer Deploy sollte nicht in ein laufendes Rollout fallen, sonst ist die Ursache von Schwankungen nicht mehr trennbar.",
      "confidence": "belegt",
      "date_or_version": "Stand 25.08.2026"
    },
    {
      "claim": "Das August-2026-Spam-Update (18.–20.08.2026, gerade abgeschlossen) zielte breit auf mass-produced content, Cloaking, Doorway-/Thin-Pages, Keyword-Stuffing, aufgekaufte Altdomains, Scraped Content und KI-Content zur Ranking-Manipulation — ausdruecklich NICHT auf Link-Spam oder site reputation abuse. Google kuendigte periodische Refreshes an.",
      "source_url": "https://www.seroundtable.com/google-august-2026-spam-update-done-41906.html",
      "why_it_matters": "Direkt einschlaegig fuer eine KI-gestuetzt erstellte Reise-Site. Die Abgrenzung ist entscheidend: Nicht die Erzeugungsmethode wird bestraft, sondern Masse ohne Mehrwert. Refreshes bedeuten: einmal sauber aufraeumen reicht, aber der Zustand muss gehalten werden.",
      "confidence": "wahrscheinlich",
      "date_or_version": "Rollout 18.–21.08.2026; Zielbeschreibung ist Branchenauswertung, Google nannte nur 'spam policies' allgemein"
    },
    {
      "claim": "Googles Spam-Policy definiert scaled content abuse als 'many pages are generated for the primary purpose of manipulating search rankings and not helping users' und nennt explizit 'using generative AI tools or other similar tools to generate many pages without adding value for users'. Massgeblich ist: 'little to no effort, little to no originality, and little to no added value'.",
      "source_url": "https://developers.google.com/search/docs/essentials/spam-policies",
      "why_it_matters": "Das ist der Wortlaut, an dem die Site gemessen wird — nicht KI-Detektoren. Der Massstab ist Aufwand, Originalitaet und Mehrwert pro Seite. Bei ~55 Seiten ist die Site weit unter jeder Massenschwelle; das Risiko liegt allein in Templating-Mustern, nicht im Volumen.",
      "confidence": "belegt",
      "date_or_version": "Aktuelle Fassung, abgerufen 25.08.2026"
    },
    {
      "claim": "Gary Illyes am 16.07.2026: Sites mit unabsichtlich falschen lastmod-Werten sind 'probably better off without the lastmods. at least you save a few bytes'. Das lastmod-Vertrauen ist binaer — Google vertraut den Werten einer Site oder ignoriert das Tag komplett.",
      "source_url": "https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html",
      "why_it_matters": "Trifft app/sitemap.ts frontal: dort steht `lastModified: new Date()` auf allen Eintraegen, d.h. jeder Deploy meldet alle ~55 URLs als heute geaendert. Damit landet die Site auf der falschen Seite der binaeren Vertrauensentscheidung und verliert den Crawl-Steuerungskanal fuer echte Aktualisierungen.",
      "confidence": "belegt",
      "date_or_version": "16.07.2026"
    },
    {
      "claim": "Google hat FAQ-Rich-Results am 07.05.2026 abgeschaltet; die Dokumentation wurde am 15.06.2026 entfernt. Auch die zuvor verbliebene Ausnahme fuer Regierungs- und Gesundheitsseiten entfaellt. FAQPage bleibt als schema.org-Typ gueltig und schadet nicht per se.",
      "source_url": "https://developers.google.com/search/updates",
      "why_it_matters": "Der FAQPage-Block in lib/page-factory.tsx bringt in Google null Sichtbarkeit mehr. Der generische Fallback fuer ~26 Nicht-Estado-Seiten ist damit reines Risiko ohne Gegenwert — identische Antworttexte mit eingesetztem Namen sind genau das Templating-Muster der Scaled-Content-Policy.",
      "confidence": "belegt",
      "date_or_version": "Deprecation 07.05.2026, Doku-Entfernung 15.06.2026"
    },
    {
      "claim": "Google veroeffentlichte am 15.05.2026 einen eigenen Leitfaden 'Optimizing your website for generative AI features'. Kernaussage: 'from Google Search's perspective, optimizing for generative AI search is optimizing for the search experience, and thus still SEO'. Betont wird non-commodity content und 'a first-hand review provides a unique perspective based on personal experience'.",
      "source_url": "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      "why_it_matters": "Die Doku macht First-Hand-Experience zum expliziten Unterscheidungsmerkmal gegenueber Zusammenfassungen allgemein verfuegbaren Wissens. Genau diese Zusammenfassung ist der aktuelle Zustand der Guides in lib/states/data/.",
      "confidence": "belegt",
      "date_or_version": "15.05.2026, laufend aktualisiertes Dokument"
    },
    {
      "claim": "Die Mythbusting-Sektion desselben Leitfadens raeumt ausdruecklich ab: llms.txt wird von Google Search nicht genutzt (weder Nutzen noch Schaden), Content-Chunking ist nicht noetig, es gibt kein Spezial-Schema fuer AI-Features, AEO/GEO ist dasselbe wie SEO — und Google warnt vor 'seeking inauthentic mentions across the web'.",
      "source_url": "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      "why_it_matters": "Spart konkret Arbeit: keine llms.txt anlegen, kein Umbau der Guides in Chunks, kein zusaetzliches Markup. Und die Warnung vor kuenstlichen Erwaehnungen schliesst gekaufte Mention-Pakete als Strategie aus.",
      "confidence": "belegt",
      "date_or_version": "15.05.2026"
    },
    {
      "claim": "Googles Doku zu generativem KI-Content empfiehlt, 'sharing information about how a piece of content was created' — also offenzulegen, wie Inhalte entstanden sind — und fordert Genauigkeit auch bei automatisch erzeugten Metadaten, strukturierten Daten und Alt-Texten.",
      "source_url": "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content",
      "why_it_matters": "Fuer eine bewusst KI-gestuetzt erstellte Site ist eine ehrliche Methodenangabe (recherchiert, Quellen, redaktionell geprueft, Fotos lizenziert) kein Nachteil, sondern deckt sich mit Googles eigener Empfehlung. Betrifft app/sobre-nosotros/page.tsx.",
      "confidence": "belegt",
      "date_or_version": "Aktuelle Fassung, abgerufen 25.08.2026"
    },
    {
      "claim": "Manual Actions wegen scaled content abuse werden sitewide verhaengt, nicht seitenweise; seit etwa Juni 2025 gab es Wellen mit vollstaendiger Deindexierung betroffener Sites. Typisches Muster der getroffenen Sites: hunderte bis tausende KI-Seiten ohne redaktionelle Kontrolle, keine Originaldaten, generische Struktur, hohe Publishing-Geschwindigkeit.",
      "source_url": "https://www.gsqi.com/marketing-blog/deindexed-and-delayed-manual-action-case-study/",
      "why_it_matters": "Die Risikoschwelle ist Volumen plus Uniformitaet. Bei ~55 Seiten mit individuell geschriebenen Guides ist die Site weit davon entfernt — solange nicht in kurzer Zeit hunderte Seiten nach demselben Template nachgeschoben werden. Das ist das entscheidende Kriterium fuer jeden Ausbauplan.",
      "confidence": "wahrscheinlich",
      "date_or_version": "Fallstudien 2025/2026; die konkreten Zahlen (z.B. '1.446 Sites') stammen von Drittanbietern, nicht von Google"
    },
    {
      "claim": "Gary Illyes on record: Links sind 'for some time' kein Top-3-Ranking-Faktor mehr; 'We need very few links to rank pages. Over the years, we've made links less important.' Duy Nguyen (Google Search Quality): Backlinks haben 'a lot less significant impact' als frueher.",
      "source_url": "https://searchengineland.com/links-google-search-ranking-factor-gary-illyes-432422",
      "why_it_matters": "Fuer eine junge Site heisst das: Es gibt keinen Link-Schwellenwert, der erst erreicht werden muesste. Ressourcen gehoeren in Inhalt und Originalmaterial, nicht in Linkaufbau. Wenige echte Erwaehnungen genuegen.",
      "confidence": "belegt",
      "date_or_version": "Aussage Illyes; Position von Google seit 2024 mehrfach wiederholt"
    },
    {
      "claim": "Ein Google Business Profile setzt Face-to-Face-Kundenkontakt voraus: 'Only businesses that make face-to-face contact with customers are eligible for a Business Profile.' Rein informationelle Websites, Blogs und Affiliate-Seiten ohne physischen Standort oder Kundenbesuche sind nicht zulaessig.",
      "source_url": "https://support.google.com/business/answer/3038177?hl=en",
      "why_it_matters": "Direkte Korrektur: GBP faellt als Kanal fuer mrsvenezuela.com aus. Ein trotzdem angelegtes Profil riskiert Sperrung. Die Zeit gehoert stattdessen in Bing Webmaster Tools und eigene Kanaele.",
      "confidence": "belegt",
      "date_or_version": "Aktuelle Google-Business-Profile-Richtlinien"
    },
    {
      "claim": "Wikipedia-Policy: 'you should avoid linking to a site that you own'. Externe Links zu Promotionszwecken gelten als Spam; Artikel sind keine Verlaengerung der eigenen Website.",
      "source_url": "https://en.wikipedia.org/wiki/Wikipedia:External_links",
      "why_it_matters": "Zweite Korrektur: Die eigene Site in Wikipedia-Artikel zu Venezuela-Zielen einzutragen ist Policy-Verstoss und wird revertiert. Der legitime Weg ueber Wikimedia ist das Hochladen eigener Fotos unter CC-Lizenz — das erzeugt Sichtbarkeit und Namensnennung ohne Regelbruch.",
      "confidence": "belegt",
      "date_or_version": "Aktuelle en.wikipedia-Richtlinie"
    },
    {
      "claim": "Search Console hat am 03.06.2026 dedizierte Generative-AI-Performance-Reports gestartet. Daten ab 18.05.2026, kein Backfill. Enthalten: Impressions, Pages, Countries, Devices, Dates ueber AI Overviews, AI Mode und AI-Features in Discover. Klicks, CTR und Query-Daten fehlen.",
      "source_url": "https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/",
      "why_it_matters": "Erstmals messbar, ob die Guides in AI-Antworten zitiert werden — das ist fuer Reisethemen inzwischen ein eigener Kanal neben klassischem Organic. Ohne verifizierte GSC-Property gibt es diese Daten nicht, und es wird nichts nachtraeglich befuellt.",
      "confidence": "wahrscheinlich",
      "date_or_version": "Start 03.06.2026, Daten ab 18.05.2026; Rollout zunaechst schrittweise"
    },
    {
      "claim": "Google hat am 27.05.2026 'Preferred Sources' auf AI Overviews und AI Mode ausgeweitet; am 20.08.2026 kam ein einbaubarer, auto-lokalisierter Button dazu. Nur Domain-/Subdomain-Ebene ist eligible, verfuegbar in allen Sprachen, in denen Google Search laeuft.",
      "source_url": "https://developers.google.com/search/docs/appearance/preferred-sources",
      "why_it_matters": "Eines der wenigen Instrumente, mit denen eine junge Site an etablierten Playern vorbeikommt: Wer die Site einmal als bevorzugte Quelle setzt, sieht sie danach bevorzugt — inklusive Badge in AI Overviews. Passt zur Diaspora-Zielgruppe mit hoher Wiederkehrrate.",
      "confidence": "belegt",
      "date_or_version": "AI-Ausweitung 27.05.2026, Button-Doku 20.08.2026"
    },
    {
      "claim": "Das Helpful Content System existiert seit dem March 2024 Core Update nicht mehr als eigenstaendiger Klassifikator, sondern ist Teil des Kern-Rankingsystems und laeuft dauerhaft mit. Google fuehrt es unter den retired systems.",
      "source_url": "https://www.searchenginejournal.com/google-publishes-guide-to-current-retired-ranking-systems/471940/",
      "why_it_matters": "Es gibt kein separates 'Helpful Content Update' mehr, auf das man warten oder von dem man sich erholen koennte. Qualitaetsarbeit wirkt kontinuierlich, sichtbar wird sie in Schueben bei Core Updates.",
      "confidence": "belegt",
      "date_or_version": "Integration mit March 2024 Core Update"
    },
    {
      "claim": "Die aktuellen Search Quality Rater Guidelines datieren vom 11.09.2025 und gelten 2026 unveraendert weiter. Neu darin: Regeln fuer AI Overviews sowie eine erweiterte YMYL-Kategorie 'YMYL Government, Civics & Society'.",
      "source_url": "https://www.seo-kreativ.de/en/blog/google-quality-raters-update_9-25/",
      "why_it_matters": "Reise-Content ist grundsaetzlich kein YMYL. Aber Venezuela-spezifische Themen mit Sicherheits-, Grenz- oder Einreisebezug rutschen in die Naehe erhoehter Anforderungen — solche Passagen brauchen datierte Primaerquellen oder sollten weggelassen werden.",
      "confidence": "wahrscheinlich",
      "date_or_version": "Version vom 11.09.2025"
    },
    {
      "claim": "Reddit ist seit Anfang 2025 die zweitsichtbarste Domain in US-Google-Ergebnissen hinter Wikipedia; UGC aus Reddit, YouTube, LinkedIn und Quora hat laut Portfolio-Auswertungen einen deutlich groesseren SERP-Fussabdruck als AI Overviews und dominiert erfahrungsbasierte Suchanfragen.",
      "source_url": "https://www.icrossing.com/insights/reddits-rise-in-search-results",
      "why_it_matters": "Bei genau den Fragen, die eine Reise-Site beantworten will ('lohnt sich X', 'ist Y sicher', 'X vs Y'), steht die eigene Seite gegen Foren, nicht gegen TripAdvisor. Konsequenz: dort praesent sein statt dagegen anschreiben — und Inhalte liefern, die ein Forenthread nicht kann (strukturierte Anfahrt, Saison, Preise).",
      "confidence": "wahrscheinlich",
      "date_or_version": "Auswertungen 2025/2026; Marktanteilszahlen variieren je Anbieter"
    }
  ],
  "actions": [
    {
      "action": "app/sitemap.ts: `lastModified: new Date()` entfernen und durch echte Datumsangaben ersetzen — oder lastmod ganz weglassen",
      "how": "Aktuell steht in allen sechs Zweigen von app/sitemap.ts `lastModified: new Date()`. Bei jedem Vercel-Deploy meldet die Sitemap damit alle ~55 URLs als heute geaendert. Zwei saubere Wege: (a) Pro Content-Item ein Feld `updatedAt: string` in lib/content.ts (DiscoverItem) und in den State-Guides in lib/states/data/*.ts einfuehren und in der Sitemap `lastModified: new Date(item.updatedAt)` setzen; nur bei echten inhaltlichen Aenderungen hochziehen. (b) Wenn das jetzt zu aufwendig ist: `lastModified` ersatzlos streichen — laut Illyes ist gar kein lastmod besser als ein falsches. Ebenso `changeFrequency` und `priority` streichen, beide wertet Google nicht aus. Variante (b) sofort, (a) zusammen mit den Autoren-/Datumsfeldern.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "lib/page-factory.tsx: generischen FAQPage-Fallback ersatzlos loeschen",
      "how": "Der `else`-Zweig im FAQPage-Block erzeugt fuer alle ~26 Nicht-Estado-Seiten zwei identische Fragen ('¿Cuál es la mejor época para visitar ${item.name}?' / '¿Qué se puede descubrir cerca de ${item.name}?') mit wortgleichen, nichtssagenden Antworten ('Depende de la región, el clima y el tipo de experiencia...'). Das ist Templating ueber 26 URLs bei null Rich-Result-Nutzen, da FAQ-Rich-Results seit 07.05.2026 abgeschaltet sind. Den FAQPage-Node nur noch rendern, wenn `guide?.faqs.items` existiert und mindestens drei echte, ortsspezifische Fragen enthaelt — sonst weglassen. Fuer playas/parques/comida etc. mittelfristig echte FAQs in die jeweiligen Datendateien schreiben.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "lib/page-factory.tsx: JSON-LD-Bild absolut machen und Beschreibung an die sichtbare Meta-Description angleichen",
      "how": "Zwei Inkonsistenzen im `schema`-Objekt: (1) `image: item.image` laeuft nicht durch `absoluteUrl()`, obwohl generateMetadataFor direkt darueber genau das tut (`const image = heroImage.startsWith('/') ? absoluteUrl(heroImage) : heroImage`) — relative URLs in schema.org sind ungueltig. Dieselbe Logik uebernehmen und auch den Guide-Hero beruecksichtigen. (2) `description: item.description` liefert bei 22 Bundesstaaten den Template-String aus lib/content.ts ('Paisajes, cultura, sabores y rutas para descubrir la identidad de ${state.name}.'), waehrend die Meta-Description aus `guide.seo.description` kommt. Google verlangt, dass Structured Data zum sichtbaren Inhalt passt — also `guide?.seo.description ?? item.description` verwenden, identisch zur Metadata-Funktion.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "Autor, Veroeffentlichungs- und Aktualisierungsdatum als Datenfelder einfuehren und sowohl sichtbar als auch in JSON-LD ausgeben",
      "how": "grep ueber lib/ und components/content/ zeigt: kein einziges author-, datePublished- oder dateModified-Feld existiert (nur Foto-`credits` in lib/states/data/*.ts). Schritte: (1) In lib/states/data/*.ts und in DiscoverItem die Felder `author`, `publishedAt`, `updatedAt` ergaenzen. (2) In lib/page-factory.tsx den Article-/TouristDestination-Node um `author: { '@type': 'Person', name: ..., url: absoluteUrl('/sobre-nosotros') }`, `datePublished`, `dateModified` und `publisher` erweitern. (3) Sichtbar in components/content/state-editorial-guide.tsx und detail-page.tsx eine Zeile 'Por <Autor> · Actualizado el <Datum>' rendern — Structured Data ohne sichtbares Pendant ist wertlos. Der reale Name steht bereits im manual-Dictionary von components/i18n/content-translator.tsx ('Michell Naranjo', 'Mrs Venezuela').",
      "priority": "P0",
      "effort": "M"
    },
    {
      "action": "Originalfotos einfuehren — das ist die groesste E-E-A-T-Luecke der Site",
      "how": "next.config.ts erlaubt ausschliesslich upload.wikimedia.org und commons.wikimedia.org; saemtliche Bilder sind Fremdmaterial. Googles Leitfaden vom 15.05.2026 stellt First-Hand-Experience explizit gegen Zusammenfassungen allgemein verfuegbaren Wissens. Pragmatischer Einstieg ohne Reisebudget: eigene Handyfotos, Familien- und Diaspora-Bestaende mit dokumentierter Erlaubnis, Leser-Einsendungen mit Namensnennung. Pro Guide zunaechst ein einziges Originalfoto reicht, um den Charakter der Seite zu aendern. Bilder unter /public/images/ ablegen, mit Aufnahmeort und -datum in der Bildunterschrift, und ein Feld `ownPhoto: true` fuehren, damit sich der Fortschritt messen laesst. Doppelter Nutzen: dieselben Fotos unter CC BY-SA auf Wikimedia Commons hochladen erzeugt Namenssichtbarkeit, ohne gegen Wikipedia-Regeln zu verstossen.",
      "priority": "P0",
      "effort": "L"
    },
    {
      "action": "Foto-Credits vervollstaendigen — aktuell nur ~7 von 23 State-Guides befuellt",
      "how": "grep zeigt: lib/states/data/bolivar.ts hat `credits: []` (leer), befuellt sind nur carabobo, falcon, la-guaira, merida, sucre, zulia und wenige weitere. Das ist erstens eine Lizenzpflicht bei CC BY/BY-SA und zweitens ein Trust-Signal. Fuer jeden Guide die verwendeten Commons-Dateien mit title, author, license und href nachtragen — das Schema existiert bereits und muss nur ausgefuellt werden. Danach pruefen, ob components/content/state-editorial-guide.tsx die credits auch tatsaechlich rendert.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "BreadcrumbList-Schema ergaenzen — eines der wenigen noch aktiven Rich Results",
      "how": "In lib/page-factory.tsx ins `@graph` einen BreadcrumbList-Node aufnehmen: Inicio → Kind-Hub (z.B. /estados bzw. /playas) → Item-Name. Fuer Kinds ohne Hub (animal, planta, comida, historia, montana, ciudad) entweder Hub-Seiten anlegen oder zweistufig bleiben. Waehrend FAQ- und HowTo-Rich-Results 2026 abgeschaltet wurden, sind Breadcrumbs weiter aktiv und verbessern die SERP-Darstellung sichtbar.",
      "priority": "P1",
      "effort": "S"
    },
    {
      "action": "Organization- bzw. Person-Schema im Root-Layout ergaenzen und mit sobre-nosotros und contacto verknuepfen",
      "how": "app/layout.tsx enthaelt zwar vollstaendige Metadata (metadataBase, OG, Twitter), aber kein JSON-LD. Einen Organization-Node mit name, url, logo, sameAs (echte Instagram-/YouTube-/Pinterest-Profile) und einem founder/Person-Node ergaenzen. Zusaetzlich app/sobre-nosotros/page.tsx um AboutPage- und app/contacto/page.tsx um ContactPage-Schema erweitern. Wichtig: sameAs nur mit real existierenden, aktiven Profilen befuellen — Google warnt im AI-Leitfaden ausdruecklich vor kuenstlichen Erwaehnungen.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "components/institutional/about-page-content.tsx um verifizierbare Substanz erweitern",
      "how": "Die Seite ist aktuell rein atmosphaerisch (eyebrow, historyLead, distanceParagraphs, signature) — kein Name, keine Qualifikation, keine Methodik. Ergaenzen: wer schreibt (Klarname, Bezug zu Venezuela, Foto), wie recherchiert wird, welche Quellen genutzt werden, wie oft aktualisiert wird, und eine ehrliche Angabe zur KI-Unterstuetzung im Entstehungsprozess — Google empfiehlt letzteres in der gen-AI-Doku ausdruecklich. Da die Texte ueber lib/institutional-i18n laufen, muessen die neuen Bloecke dort in allen fuenf Sprachen gepflegt werden.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "Google Search Console und Bing Webmaster Tools einrichten, IndexNow ueber Bing anbinden",
      "how": "GSC: Domain-Property fuer mrsvenezuela.com per DNS-TXT verifizieren (nicht URL-Prefix, sonst fehlen www-/Protokollvarianten), sitemap.xml einreichen. Wichtig wegen der Generative-AI-Reports: Daten starten erst ab Verifizierung, es gibt keinen Backfill — jeder Tag ohne Property ist unwiederbringlich verloren. Bing WMT: Import aus GSC per Klick, dort zusaetzlich kostenlose Keyword-Recherche und Site-Scan nutzen. IndexNow ueber Bing WMT aktivieren (Key-File in /public/) und im Vercel-Deploy-Hook die geaenderten URLs pushen. Bing zaehlt 2026 doppelt, weil es Copilot und mehrere AI-Antwortmaschinen speist.",
      "priority": "P1",
      "effort": "S"
    },
    {
      "action": "Preferred-Sources-Button einbauen",
      "how": "Google hat Preferred Sources am 27.05.2026 auf AI Overviews und AI Mode ausgeweitet und am 20.08.2026 einen einbaubaren, auto-lokalisierten Button dokumentiert. Zwei Zeilen JavaScript, sinnvoll platziert in components/sections/home-footer.tsx oder als dezenter Hinweis am Ende der State-Guides. Alternativ der Deeplink https://www.google.com/preferences/source?q=mrsvenezuela.com. Nur Domain-Ebene ist eligible — passt hier. Fuer eine wiederkehrende Diaspora-Zielgruppe ist das einer der wenigen Hebel, der nicht ueber Autoritaet laeuft.",
      "priority": "P1",
      "effort": "S"
    },
    {
      "action": "Longtail-Content-Strategie: pro Guide drei bis fuenf konkrete Unterfragen statt neuer Uebersichtsseiten",
      "how": "Gegen TripAdvisor und Lonely Planet gewinnt man nicht bei 'que ver en Merida', sondern bei Fragen, die deren Redaktionen nicht beantworten koennen: 'como llegar a Los Roques desde Maiquetia 2026', 'cuanto cuesta subir al teleferico de Merida', 'se puede pagar en dolares en Canaima', 'esta abierto el Parque Nacional Morrocoy'. Solche Antworten in die bestehenden Guide-Strukturen in lib/states/data/*.ts einarbeiten, statt Dutzende neuer duenner Seiten anzulegen — das haelt die Site unter jeder Scaled-Content-Schwelle und erhoeht gleichzeitig die Tiefe pro URL. Diaspora-Winkel gezielt bedienen (Rueckkehr, Familienbesuch, was sich seit dem Weggang geaendert hat) — dort ist die Konkurrenz am duennsten und die emotionale Bindung am hoechsten.",
      "priority": "P1",
      "effort": "L"
    },
    {
      "action": "Aktualisierungs-Rhythmus festlegen: quartalsweise, aber nur mit echtem Informationsgewinn",
      "how": "Kein Datums-Refresh ohne inhaltliche Aenderung — Google erkennt das und es wirkt gegen die Site. Praktikabler Zyklus: alle 90 Tage die in GSC am staerksten fallenden Seiten ansehen und drei bis fuenf davon substanziell ueberarbeiten. Als echtes Update zaehlt: neue Preise, geaenderte Zugangs-/Oeffnungslage, neue Fotos, korrigierte Fakten, neue Unterfragen. Nicht: Umformulierungen, Jahreszahl im Titel, Copyright-Update. Nur bei echten Aenderungen `updatedAt` und damit lastmod in app/sitemap.ts hochziehen — so bleibt der lastmod-Kanal vertrauenswuerdig.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "Saubere Erwaehnungsquellen aufbauen — ohne GBP, ohne Wikipedia-Selbsteintrag, ohne gekaufte Links",
      "how": "Ausgeschlossen: Google Business Profile (Eligibility fehlt bei rein informationeller Site), eigene Links in Wikipedia-Artikeln (Policy-Verstoss), gekaufte Links und PBNs (SpamBrain entwertet dauerhaft, Manual Actions treffen die Zieldomain). Realistisch und sauber: eigene Fotos unter CC BY-SA auf Wikimedia Commons hochladen — dieselben Bilder, die die Site nutzt, mit Urheberangabe; echte Beteiligung in r/venezuela und Diaspora-Gruppen ohne Linkdrops; YouTube und Pinterest als eigenstaendige Kanaele mit demselben Bildmaterial (Pinterest funktioniert fuer visuelle Reiseziele als Traffic-Quelle unabhaengig von Google); Kontaktaufnahme zu venezolanischen Regional-/Diaspora-Medien fuer Interviews ueber die reale Person hinter dem Projekt. Ziel sind nicht Links, sondern dass der Markenname unabhaengig von der eigenen Domain auftaucht.",
      "priority": "P2",
      "effort": "L"
    },
    {
      "action": "Mehrsprachigkeit bewusst entscheiden: es-only akzeptieren oder auf lokalisierte URLs mit hreflang umbauen",
      "how": "components/i18n/content-translator.tsx uebersetzt das DOM zur Laufzeit ueber lib/site-translations.json; alle fuenf Sprachen teilen sich dieselbe URL, app/layout.tsx setzt fest lang='es'. Google indexiert dadurch nur Spanisch — en/de/fr/zh erzeugen null Suchsichtbarkeit. Das ist kein Ranking-Schaden, aber vier Sprachen ohne SEO-Ertrag. Option A (empfohlen fuer jetzt): bewusst bei es bleiben, Kraft in spanischen Longtail stecken, den Umschalter als reinen Besucherkomfort behandeln. Option B (spaeter, hoher Aufwand): [lang]-Segment einfuehren, statisch pro Sprache prerendern, hreflang plus x-default ueber die alternates.languages-Metadata setzen, lang-Attribut dynamisch. Option B nur angehen, wenn die spanischen Inhalte bereits ranken — sonst vervielfacht man duennen Content und erzeugt genau das Skalierungsmuster, das die Spam-Updates treffen. Vorsicht laut MEMORY.md: das Uebersetzungsskript zieht Phrasen aus dem ganzen Repo und uebersetzt Eigennamen falsch.",
      "priority": "P2",
      "effort": "L"
    },
    {
      "action": "Technische Basis-Audits mit kostenlosen Tools fahren",
      "how": "Screaming Frog Free (500 URLs, kein Zeitlimit — reicht fuer ~55 Seiten locker): Titel-/Description-Duplikate, defekte Links, Weiterleitungsketten, Meta-Robots. Achtung: Der Crawl muss mit JavaScript-Rendering laufen, sonst wird der Client-Content nicht erfasst. Rich Results Test und der Schema-Validator fuer die JSON-LD-Aenderungen aus lib/page-factory.tsx — der FAQ-Support ist im Rich Results Test seit Juni 2026 entfernt, das ist kein Fehler. PageSpeed Insights mit CrUX-Felddaten fuer LCP und INP; relevant, weil die Site viele grosse Remote-Bilder von Wikimedia laedt. Ahrefs Webmaster Tools kostenlos fuer verifizierte Domains: Backlink-Profil und Site-Audit, um zu sehen, ob unerwuenschte Links auftauchen.",
      "priority": "P2",
      "effort": "M"
    }
  ],
  "pitfalls": [
    "app/sitemap.ts meldet ueber `lastModified: new Date()` bei jedem Deploy alle ~55 URLs als heute geaendert. Nach Illyes' Aussage vom 16.07.2026 ist lastmod-Vertrauen binaer — die Site steht damit auf der Ignorier-Liste und verliert den Kanal fuer echte Aktualisierungssignale.",
    "Der FAQPage-Fallback in lib/page-factory.tsx erzeugt ueber ~26 Seiten identische Antworttexte mit nur ausgetauschtem `item.name`. Nutzen ist seit dem 07.05.2026 null (FAQ-Rich-Results abgeschaltet), das Templating-Muster bleibt.",
    "Im JSON-LD von lib/page-factory.tsx laeuft `image: item.image` nicht durch absoluteUrl(), obwohl generateMetadataFor unmittelbar darueber genau das tut — relative Bild-URLs in schema.org sind ungueltig.",
    "JSON-LD-`description` und sichtbare Meta-Description weichen bei 22 Bundesstaaten voneinander ab: das Schema bekommt den Template-String aus lib/content.ts, die Metadata die individuelle guide.seo.description. Google verlangt Uebereinstimmung von Structured Data und sichtbarem Inhalt.",
    "Kein einziges author-, datePublished- oder dateModified-Feld im gesamten Repo. Fuer Reise-Content 2026 ist das die teuerste Einzelluecke — weder Rater noch Algorithmus finden einen Verantwortlichen.",
    "Null Originalfotos: next.config.ts erlaubt ausschliesslich Wikimedia-Hosts. Genau das Signal, das Googles AI-Leitfaden vom 15.05.2026 als Unterschied zwischen First-Hand-Erfahrung und Zusammenfassung beschreibt.",
    "Foto-Credits nur in ~7 von 23 State-Guides gepflegt, lib/states/data/bolivar.ts hat `credits: []`. Bei CC-BY-SA-Material ist das eine Lizenzverletzung, nicht nur ein SEO-Defizit.",
    "Ein Google Business Profile anzulegen waere ein Fehlgriff: rein informationelle Sites ohne Face-to-Face-Kontakt sind nicht eligible, ein trotzdem erstelltes Profil riskiert Sperrung.",
    "Die eigene Site als Weblink in Wikipedia-Artikel einzutragen verstoesst gegen die External-Links-Policy und wird revertiert — im Wiederholungsfall Blacklisting der Domain.",
    "Massenhaftes Nachschieben von Seiten nach dem bestehenden Template waere der schnellste Weg ins August-2026-Spam-Update. Die Site ist mit ~55 Seiten sicher; gefaehrlich wird erst Volumen bei gleichbleibender Uniformitaet.",
    "Kein Deploy waehrend eines laufenden Update-Rollouts. Google faehrt 2026 periodische Spam-Refreshes; faellt eine groessere Aenderung hinein, laesst sich Ursache und Wirkung nicht mehr trennen.",
    "Bei Venezuela-Themen mit Sicherheits-, Grenz- oder Einreisebezug greifen die verschaerften YMYL-Anforderungen der Rater Guidelines vom 11.09.2025. Solche Passagen brauchen datierte Primaerquellen — oder gehoeren weggelassen.",
    "GSC-Verifizierung nicht aufschieben: Die Generative-AI-Reports starten erst ab Verifizierung und werden nicht rueckwirkend befuellt.",
    "Das Uebersetzungsskript zieht laut MEMORY.md Phrasen aus dem ganzen Repo inklusive CSS-Klassen und uebersetzt Eigennamen falsch. Vor jedem Lauf Snapshot von lib/site-translations.json anlegen — es existiert bereits eine .bak-Datei als Warnung."
  ],
  "outdated_beliefs": [
    "'Google bestraft KI-Content.' Falsch. Die Spam-Policy sagt woertlich 'no matter how it's created' — bestraft wird Masse ohne Mehrwert, nicht die Erzeugungsmethode. Google empfiehlt sogar, die Entstehungsweise offenzulegen.",
    "'FAQ-Schema bringt groessere SERP-Snippets.' Ueberholt seit dem 07.05.2026 — FAQ-Rich-Results sind abgeschaltet, die Doku wurde am 15.06.2026 entfernt, auch die Ausnahme fuer Regierungs- und Gesundheitsseiten ist weg.",
    "'HowTo-Rich-Results lohnen sich.' Ebenfalls abgeschaltet; nicht mehr in Ranking- oder Snippet-Plaene einbauen.",
    "'Ohne Backlinks geht gar nichts.' Illyes on record: kein Top-3-Faktor mehr, 'we need very few links to rank pages'. Es gibt keinen Schwellenwert, der erst erreicht werden muesste.",
    "'Man braucht eine llms.txt fuer AI-Sichtbarkeit.' Googles Leitfaden vom 15.05.2026 stellt ausdruecklich klar: Google Search nutzt sie nicht — weder Nutzen noch Schaden.",
    "'AEO/GEO ist eine eigene Disziplin mit eigenen Techniken.' Google: 'optimizing for generative AI search is optimizing for the search experience, and thus still SEO.' Auch Content-Chunking und Spezial-Schema fuer AI-Features werden explizit als unnoetig bezeichnet.",
    "'Markenerwaehnungen aufbauen, egal wie.' Google warnt im selben Dokument vor 'seeking inauthentic mentions across the web' — gekaufte Mention-Pakete sind kein Ersatz fuer Links, sondern dasselbe Risiko in neuer Verpackung.",
    "'Ein Helpful Content Update kommt und geht.' Das System ist seit dem March 2024 Core Update kein eigenstaendiger Klassifikator mehr, sondern laeuft dauerhaft im Kern-Ranking mit. Es gibt kein separates Update, auf das man warten koennte.",
    "'Sitemap-priority und changeFrequency steuern das Crawling.' Beides wertet Google nicht aus. Nur lastmod zaehlt — und auch nur, wenn es zuverlaessig ist.",
    "'Ein Google Business Profile hilft jeder Website.' Fuer rein informationelle Sites ohne Face-to-Face-Kundenkontakt existiert die Eligibility gar nicht.",
    "'Regelmaessiges Aktualisieren des Datums haelt Rankings frisch.' Datums-Refreshes ohne inhaltliche Aenderung sind erkennbar und wirken gegen die Site. Massstab ist Informationsgewinn.",
    "'Ein Google-Sandbox sperrt neue Domains fuer 3 bis 9 Monate.' Von Google nie bestaetigt und wiederholt dementiert. Der beobachtete Effekt erklaert sich durch fehlende Signale, nicht durch eine Sperrfrist. Konkrete Zahlen wie '#6 Ranking-Faktor mit 6 Prozent Gewicht' oder '20 bis 30 Prozent des Textes muessen sich aendern' stammen aus SEO-Blogs, nicht von Google.",
    "Vorsicht bei erfundenen Update-Namen: SEO-Quellen zitieren ein 'October 2025 spam update' und 'SpamBrain 3.0'. Beides taucht in Googles offiziellem Status-Dashboard nicht auf — 2025 gab es genau ein Spam-Update, im August."
  ]
}