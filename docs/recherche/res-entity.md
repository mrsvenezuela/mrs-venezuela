{
  "topic": "Entitäts-Aufbau und Off-Site-Präsenz für Suche und KI-Antworten (mrsvenezuela.com, Stand August 2026)",
  "summary": "Das Projekt hat ein fundamentales Entitäts-Problem, das jede Off-Site-Arbeit vorher entwertet: die Site trägt zwei Namen. app/layout.tsx, app/page.tsx und lib/page-factory.tsx sagen durchgehend \"Descubre Venezuela\" (17 Fundstellen), während Domain (mrsvenezuela.com), About-/Kontakt-Metatitel, Instagram (@mrsvenezuela_1), TikTok (@mrsvenezuela1) und E-Mail (infomrsvenezuela@gmail.com) \"Mrs Venezuela\" sagen (16 Fundstellen). Dazu kollidiert \"Mrs Venezuela\" mit dem realen Schönheitswettbewerb gleichen Namens. Es gibt nirgends ein Organization- oder Person-Schema und kein einziges sameAs — die beiden existierenden Social-Profile sind reine <a href> im Footer. Zweiter harter Befund: die Mehrsprachigkeit über components/i18n/content-translator.tsx läuft zur Laufzeit im DOM. GPTBot, ClaudeBot und PerplexityBot führen kein JavaScript aus (Vercel/MERJ: 500 Mio. GPTBot-Fetches, null JS-Ausführung) — für KI-Crawler existieren EN/DE/FR/ZH schlicht nicht, und hreflang fehlt ohnehin. Dritter Befund: Google Discover ist für eine bildstarke Reise-Site tatsächlich der größte Hebel (kein Mindest-Traffic, kein Publisher Center nötig, Eligibility auf Themenebene), aber die Site verfehlt die technische Grundvoraussetzung: max-image-preview:large kommt im gesamten Repo nicht vor, und die OG-Bilder sind auf 1200x800 hartkodiert statt 16:9. Bei Wikipedia/Wikidata ist ehrliche Warnung nötig: ein Wikipedia-Artikel über die Site ist chancenlos und regelwidrig, ein Wikidata-Item riskant — der legitime Weg läuft über Michell Naranjo als Fotografin und eigene Uploads auf Wikimedia Commons.",
  "key_points": [
    {
      "claim": "Google Discover braucht keine Sonder-Markup und kein Publisher Center: Inhalte sind automatisch eligible, sobald sie indexiert sind und die Discover-Richtlinien erfüllen. Wörtlich: \"No special tags or structured data are required.\"",
      "why_it_matters": "Für mrsvenezuela.com heisst das: der Zugang ist offen, es fehlt nur die technische Kür. Discover ist damit der einzige grosse Google-Kanal, den ein kleines Projekt ohne Backlink-Budget erreichen kann.",
      "source_url": "https://developers.google.com/search/docs/appearance/google-discover",
      "confidence": "belegt",
      "date_or_version": "Google Search Central, abgerufen 08/2026"
    },
    {
      "claim": "Discover-Bildanforderungen sind hart: mindestens 1200 px Breite, mehr als 300.000 Gesamtpixel, 16:9-Seitenverhältnis, und die grosse Karte erscheint nur mit aktiviertem max-image-preview:large. Ohne Bild gibt es überhaupt keine Discover-Karte.",
      "why_it_matters": "Im Repo existiert kein einziges Vorkommen von max-image-preview. lib/page-factory.tsx deklariert OG-Bilder fest als width: 1200, height: 800 — das ist 3:2, nicht 16:9. Damit ist die Site strukturell auf kleine Thumbnails begrenzt.",
      "source_url": "https://developers.google.com/search/docs/appearance/google-discover",
      "confidence": "belegt",
      "date_or_version": "Google Search Central, abgerufen 08/2026"
    },
    {
      "claim": "Discover blockiert auf Publisher-Ebene, BEVOR Interessens-Matching und Ranking stattfinden. og:image und og:title sind die primären Signale; die Meta-Tags nopagereadaloud und notranslate verhindern Eligibility komplett. Frische-Fenster: Tag 1-7 maximaler Boost, 8-14 moderat, 15-30 begrenzt, danach Abfall.",
      "why_it_matters": "Erklärt, warum ein statischer 23-Bundesstaaten-Bestand allein nicht reicht: ohne regelmässig neu datierte oder substanziell aktualisierte Beiträge fällt alles aus dem Frische-Fenster. Die Guides brauchen einen Publikations-/Update-Rhythmus, nicht nur Vollständigkeit.",
      "source_url": "https://searchengineland.com/google-discover-qualifies-ranks-filters-content-research-470190",
      "confidence": "wahrscheinlich",
      "date_or_version": "Search Engine Land, Discover-Reverse-Engineering-Recherche 2026"
    },
    {
      "claim": "Das Discover Core Update vom 5. Februar 2026 hat die Rangfolge umgedreht: Qualitäts-/E-E-A-T-Signale sind jetzt Eligibility-Schwelle, Engagement (CTR, Dwell Time) nur noch sekundär. Neu: ein Klassifikator für Headline-Content-Alignment gegen Clickbait und Topic Authority als eigenständiges Signal — spezialisierte Nischen-Sites schlagen Generalisten.",
      "why_it_matters": "Genau das Profil dieser Site: eine einzige Person, ein einziges Land, 23 Bundesstaaten in Tiefe. Topic Authority ist der Vorteil, den mrsvenezuela.com gegen grosse Reiseportale hat — aber nur, wenn Autorschaft und Expertise auf der Seite sichtbar sind.",
      "source_url": "https://www.digitalapplied.com/blog/google-discover-core-update-february-2026-seo-guide",
      "confidence": "wahrscheinlich",
      "date_or_version": "5. Februar 2026"
    },
    {
      "claim": "Google Discover hat keine formalen Eligibility-Hürden: keine Mindest-Sitegrösse, kein Domain-Authority-Schwellenwert, keine Marken-Bekanntheit nötig. Bewertung erfolgt auf Themenebene, weshalb kleine Spezialisten-Sites genauso auftauchen können wie grosse Publisher. Evergreen-Inhalte sind zugelassen, werden aber separat klassifiziert und brauchen Updates als Frische-Signal.",
      "why_it_matters": "Entkräftet die Annahme, Discover sei nur für Nachrichtenmarken. Die Guides in lib/states/ dürfen also bleiben, was sie sind — sie brauchen nur ein sichtbares lastModified/dateModified und periodische Überarbeitung.",
      "source_url": "https://growroom.agency/blog/googles-february-2026-discover-core-update/",
      "confidence": "wahrscheinlich",
      "date_or_version": "02/2026"
    },
    {
      "claim": "Kein grosser KI-Crawler führt JavaScript aus. Vercel/MERJ analysierten über 500 Mio. GPTBot-Fetches: GPTBot lud JS-Dateien in ca. 11,5 % der Requests, führte sie aber nie aus; ClaudeBot lud JS in ca. 23,84 % und führt es nie aus. Betroffen: GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, PerplexityBot. Nur Googlebot rendert (mit Verzögerung).",
      "why_it_matters": "components/i18n/content-translator.tsx übersetzt das DOM erst im Browser. Für ChatGPT, Claude und Perplexity ist die Site ausschliesslich spanisch — die EN/DE/FR/ZH-Versionen existieren in KI-Antworten schlicht nicht. Da es keine lokalisierten URLs gibt, ist auch kein hreflang möglich.",
      "source_url": "https://searchoptimo.com/blog/do-ai-crawlers-render-javascript",
      "confidence": "belegt",
      "date_or_version": "Vercel/MERJ-Daten, Auswertung 2026"
    },
    {
      "claim": "Peec AI wertete 30 Mio. Quellenangaben über ChatGPT, Google AI Mode, Gemini, Perplexity und AI Overviews aus (veröffentlicht 31.03.2026). Meistzitierte Domains insgesamt: Reddit, YouTube, LinkedIn, Wikipedia, Forbes. Enginespezifisch: ChatGPT bevorzugt Wikipedia und enzyklopädische Inhalte, Perplexity zitiert stark Reddit, Google AI Overviews bevorzugen YouTube und multimodale Inhalte.",
      "why_it_matters": "Die Off-Site-Prioritäten für dieses Projekt liegen damit fest: YouTube (Google-Oberflächen), Reddit (Perplexity/ChatGPT) und Wikimedia-Ökosystem (ChatGPT). Instagram und TikTok — die beiden einzigen Kanäle, die die Site heute betreibt — tauchen in keiner Top-Liste auf.",
      "source_url": "https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138",
      "confidence": "wahrscheinlich",
      "date_or_version": "31. März 2026"
    },
    {
      "claim": "YouTube ist mit ca. 23,3 % Anteil die meistzitierte Domain in Google AI Overviews. Long-form-Videos stellen aber 94 % der KI-Zitate, Shorts nur einen Bruchteil. Perplexity (38,7 %) und AI Overviews (36,6 %) erzeugen die Mehrheit der YouTube-Zitate.",
      "why_it_matters": "Wichtige Korrektur einer verbreiteten Annahme: Shorts bringen Reichweite, aber kaum KI-Zitate. Für mrsvenezuela.com heisst das, längere Bundesstaat-Videos (5-12 Min.) mit vollständigem Transkript sind der zitierfähige Asset-Typ, Shorts nur der Zubringer.",
      "source_url": "https://otterly.ai/blog/youtube-ai-citation-study-2026/",
      "confidence": "wahrscheinlich",
      "date_or_version": "2026"
    },
    {
      "claim": "Wikidata-Notabilität verlangt eines von drei Kriterien: (1) ein Sitelink zu einem Wikimedia-Projekt, (2) eine \"clearly identifiable conceptual or material entity that can be described using serious and publicly available references\", oder (3) struktureller Nutzen für andere Items. Die Formulierung ist bewusst vage; strittige Fälle gehen in den Löschantrag.",
      "why_it_matters": "Ein Wikidata-Item für die Website mrsvenezuela.com erfüllt heute keines der drei Kriterien und würde als Selbstdarstellung gelöscht. Die venezolanischen ORTE dagegen haben längst Q-IDs — die sind der legitime Anknüpfungspunkt.",
      "source_url": "https://www.wikidata.org/wiki/Wikidata:Notability",
      "confidence": "belegt",
      "date_or_version": "Wikidata-Policy, abgerufen 08/2026"
    },
    {
      "claim": "Wikipedia rät bei persönlicher oder beruflicher Beziehung zum Thema ausdrücklich davon ab, den Artikel selbst anzulegen. Wer es dennoch tut, MUSS die Beziehung offenlegen und über Articles for Creation einreichen. Bezahltes Editieren erfordert nach den Wikimedia-Nutzungsbedingungen die Offenlegung von Auftraggeber und Zahlendem. Notabilität ist unabhängig davon und nicht käuflich.",
      "why_it_matters": "Praktische Konsequenz: Finger weg von einem Wikipedia-Artikel über Mrs Venezuela. Auch das Einfügen von Links auf die eigene Site in bestehende Venezuela-Artikel ist COI-Editing und wird revertiert. Der einzige saubere Beitrag ist inhaltlicher Natur (Fotos, belegte Fakten) ohne Eigenlink.",
      "source_url": "https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest",
      "confidence": "belegt",
      "date_or_version": "Wikipedia-Guideline, abgerufen 08/2026"
    },
    {
      "claim": "Organization-Schema hat laut Google keine Pflichtfelder (\"There are no required properties\"). sameAs ist definiert als \"URL of a page on another website with additional information about your organization\". Google empfiehlt die Platzierung auf der Startseite oder EINER Seite, die die Organisation beschreibt (z. B. About-us). logo beeinflusst, welches Logo in Suchergebnissen und im Knowledge Panel erscheint.",
      "why_it_matters": "Direkt umsetzbar in app/sobre-nosotros/page.tsx: ein einziger Organization-Block mit name, url, logo, description, foundingDate, email, sameAs (Instagram, TikTok, künftig YouTube/Pinterest) plus founder als Person. Das ist der billigste Entitäts-Hebel, den das Projekt hat.",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/organization",
      "confidence": "belegt",
      "date_or_version": "Google Search Central, abgerufen 08/2026"
    },
    {
      "claim": "llms.txt wird von keinem KI-System genutzt. Gary Illyes bestätigte im Juli 2025, dass Google es nicht unterstützt und nicht plant; John Mueller: \"FWIW no AI system currently uses llms.txt\" und verglich es mit dem Keywords-Meta-Tag. Eine Ahrefs-Auswertung über 137.000 Sites fand, dass 97 % der llms.txt-Dateien im Mai 2026 null Traffic erhielten.",
      "why_it_matters": "Sparen Sie sich die Datei. Der Aufwand gehört stattdessen in serverseitig gerendertes HTML — das ist das, was GPTBot und ClaudeBot tatsächlich lesen.",
      "source_url": "https://www.seroundtable.com/google-ai-llms-txt-39607.html",
      "confidence": "belegt",
      "date_or_version": "Juli 2025 / Ahrefs-Daten Mai 2026"
    },
    {
      "claim": "Vercel bietet ein \"AI Bot Managed Ruleset\", das GPTBot, ClaudeBot, PerplexityBot, Bytespider u. a. mit einem Klick blockiert; es ist auf allen Plänen kostenlos verfügbar und aktualisiert sich automatisch. Im Deny-Modus blockiert es alle KI-Crawler.",
      "why_it_matters": "Die Site läuft auf Vercel. Wenn dieses Ruleset jemals auf Deny gesetzt wurde (auch versehentlich oder als Default eines Templates), ist jede GEO-Arbeit wirkungslos. app/robots.ts erlaubt zwar alles, aber die Firewall greift davor.",
      "source_url": "https://vercel.com/docs/bot-management",
      "confidence": "belegt",
      "date_or_version": "Vercel Docs, abgerufen 08/2026"
    },
    {
      "claim": "Google-Bild-SEO 2026: ImageObject-Strukturdaten mit contentUrl, name, description, creator, creditText, license und acquireLicensePage machen ein Bild für das \"Licensable\"-Badge in Google Bilder qualifiziert. Ergänzend empfiehlt Google Bild-Sitemaps, sprechende Dateinamen, beschreibende alt-Attribute und moderne Formate (AVIF/WebP).",
      "why_it_matters": "Die Site hat 83 eigene Bilder in public/images und 54 alt-Attribute — die Basis stimmt. Es fehlen Bild-Sitemap und ImageObject. Bei Michell Naranjos eigenen Fotos ist creator/creditText zudem ein direktes Marken-/Entitätssignal in einer Google-Oberfläche.",
      "source_url": "https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata",
      "confidence": "belegt",
      "date_or_version": "Google Search Central, abgerufen 08/2026"
    },
    {
      "claim": "Google News verlangt originäre, zeitaktuelle Nachrichteninhalte — nicht aggregiertes, wiederverwertetes oder werbliches Material — plus journalistische Standards, Autoren-Bylines mit Bios, Korrekturrichtlinie, transparente Impressums-/Eigentümerangaben, Article-Strukturdaten und News-Sitemap.",
      "why_it_matters": "Realistische Einschätzung: Google News ist für diese Site NICHT erreichbar und auch nicht anzustreben — redaktionelle Reiseguides sind per Definition keine News. Der Aufwand wäre komplett fehlinvestiert. Discover funktioniert ohne Publisher Center.",
      "source_url": "https://support.google.com/news/publisher-center/answer/6204050",
      "confidence": "belegt",
      "date_or_version": "Google Publisher Center Help, abgerufen 08/2026"
    },
    {
      "claim": "Reddit hat die alte 90/10-Regel offiziell zurückgezogen, Rule 8 der Content Policy definiert Spam aber weiterhin als \"repeated, unwanted, or unsolicited actions\" — einschliesslich des ausschliesslichen Postens eigener Inhalte. Persönliche Accounts mit offengelegter Zugehörigkeit haben in Communities deutlich bessere Überlebens- und Engagement-Raten als markenbenannte Accounts.",
      "why_it_matters": "Da Reddit die meistzitierte Domain in KI-Antworten ist, ist r/venezuela, r/solotravel, r/travelphotography u. Ä. der einzige realistische Weg, in Perplexity-/ChatGPT-Antworten zu Venezuela-Reisen aufzutauchen. Aber mit persönlichem Account und offengelegter Rolle, nicht mit einem Marken-Handle.",
      "source_url": "https://redship.io/blog/reddit-self-promotion-rules",
      "confidence": "wahrscheinlich",
      "date_or_version": "2026"
    },
    {
      "claim": "Wikimedia Commons akzeptiert eigene Fotos unter freien Lizenzen (z. B. CC BY-SA 4.0). Die Lizenz verpflichtet Nachnutzer zur Namensnennung des Urhebers; jede Verwendung in Wikipedia-Artikeln trägt die Urheberzeile auf der Dateibeschreibungsseite.",
      "why_it_matters": "Das ist der einzige vollständig regelkonforme Weg, im Wikimedia-Ökosystem präsent zu werden: Michell Naranjo lädt eigene Venezuela-Fotos hoch, sie landen in Artikeln zu Canaima, Los Roques, Médanos de Coro usw., und ihr Name wird dort dauerhaft als Urheberin geführt. Kein COI, keine Löschgefahr. Achtung: die Lizenz ist unwiderruflich und erlaubt auch kommerzielle Nachnutzung durch Dritte.",
      "source_url": "https://commons.wikimedia.org/wiki/Commons:Licensing",
      "confidence": "belegt",
      "date_or_version": "Commons-Policy, abgerufen 08/2026"
    },
    {
      "claim": "Pinterest liefert nach Facebook die zweithöchste Website-Referral-Menge und die höchste Conversion-Rate (2,31 %) der Social-Plattformen; Pins haben eine Evergreen-Halbwertszeit von Monaten bis Jahren, während Instagram Stories und TikToks binnen Tagen verpuffen. Instagram (18,2 %) und TikTok (15,6 %) führen bei reinem Volumen.",
      "why_it_matters": "Pinterest ist der einzige Social-Kanal, der Nutzer tatsächlich auf die eigene Site schickt und dabei bildlastigen Reise-Content bevorzugt — exakt das Profil dieser Site. Die 83 eigenen Bilder in public/images sind bereits das Rohmaterial. Instagram und TikTok laufen bereits, verlinken aber nur über Bio.",
      "source_url": "https://socialpulsestats.com/social-media-traffic-statistics-2025-platform-referral-data-conversion-trends/",
      "confidence": "wahrscheinlich",
      "date_or_version": "Erhebung 2025/2026"
    },
    {
      "claim": "Sechs von zehn Google-Suchen enden 2026 ohne Klick; der Reuters Institute Digital News Report 2026 weist einen Rückgang des organischen Google-Traffics von 33 % im Jahresvergleich aus (38 % in den USA). Als belastbarste Gegenmassnahme gelten E-Mail-Listen, Push-Benachrichtigungen und eigene Follower — Assets, die unabhängig von Algorithmusänderungen liefern.",
      "why_it_matters": "Rechtfertigt, warum ein Newsletter für dieses Projekt keine Nebensache ist: er ist die einzige Traffic-Quelle, die niemand abschalten kann. Aktuell hat die Site keinerlei E-Mail-Erfassung — nur eine mailto-Adresse im Footer.",
      "source_url": "https://pushly.com/resources/the-zero-click-era-what-it-means-for-publisher-traffic-in-2026/",
      "confidence": "wahrscheinlich",
      "date_or_version": "2026, Reuters Institute Digital News Report 2026"
    }
  ],
  "actions": [
    {
      "action": "Markennamen vereinheitlichen — das blockiert alles andere",
      "how": "Entscheidung treffen: die Marke heisst \"Mrs Venezuela\" (Domain, Instagram @mrsvenezuela_1, TikTok @mrsvenezuela1, E-Mail infomrsvenezuela@gmail.com sagen das bereits). \"Descubre Venezuela\" wird zum Claim/Untertitel degradiert, nicht zum Namen. Konkret ändern: app/layout.tsx metadata.title.default auf \"Mrs Venezuela | Descubre Venezuela: destinos, cultura y naturaleza\", title.template auf \"%s | Mrs Venezuela\", openGraph.siteName auf \"Mrs Venezuela\", openGraph.title und twitter.title ebenso. app/page.tsx Zeile 49 (TravelGuide name) und lib/page-factory.tsx Zeilen 60 und 75 (WebSite name, isPartOf.name) auf \"Mrs Venezuela\". lib/page-factory.tsx Zeilen 33 und 42 (openGraph.title / twitter.title `${item.name} | Descubre Venezuela`) ebenso. Insgesamt 17 Fundstellen von \"Descubre Venezuela\" prüfen. Zusätzlich alternateName: \"Descubre Venezuela\" ins Organization-Schema aufnehmen, damit der alte Name als Synonym erhalten bleibt.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "max-image-preview:large setzen — der eine fehlende Schalter für Google Discover",
      "how": "In app/layout.tsx in das metadata-Objekt einfügen: robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } }. Aktuell existiert im gesamten Repo kein Vorkommen von max-image-preview — ohne diesen Wert liefert Discover grundsätzlich nur kleine Thumbnails statt der grossen Karte, die laut Google für die volle Bildanzeige nötig ist. Da app/layout.tsx alle Routen umfasst, gilt es sofort für alle Guides.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "Organization- und Person-Schema mit sameAs auf der About-Seite anlegen",
      "how": "Google empfiehlt genau einen Ort: Startseite oder About-Seite. Nimm app/sobre-nosotros/page.tsx (Serverkomponente, ideal). JSON-LD mit @type: Organization, name: \"Mrs Venezuela\", alternateName: \"Descubre Venezuela\", url: absoluteUrl(), logo (mindestens 112x112, aus public/images), description aus institutionalTranslations.es.about.metaDescription, email: \"infomrsvenezuela@gmail.com\", knowsAbout: [\"Venezuela\", \"turismo en Venezuela\", \"Canaima\", \"Los Roques\", \"Parque Nacional Morrocoy\", ...], founder: { @type: Person, name: \"Michell Naranjo\", nationality: \"VE\" }, und sameAs: [\"https://www.instagram.com/mrsvenezuela_1/\", \"https://www.tiktok.com/@mrsvenezuela1\"]. Die beiden URLs stehen bereits in components/sections/home-footer.tsx Zeilen 8-9 — als Konstante nach lib/nav-data.ts ziehen und von Footer, Kontaktseite und Schema gemeinsam nutzen, damit sie nie auseinanderlaufen. Später YouTube- und Pinterest-URL ergänzen. Zusätzlich in lib/page-factory.tsx im @graph eine publisher-Referenz auf dieselbe Organization setzen.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "Vercel-Firewall prüfen: AI Bot Managed Ruleset darf nicht auf Deny stehen",
      "how": "Im Vercel-Dashboard unter Firewall / Bot Management nachsehen, ob das \"AI Bot Managed Ruleset\" aktiv und auf Deny gesetzt ist. Falls ja: auf Allow oder Log stellen, sonst werden GPTBot, ClaudeBot, PerplexityBot und Bytespider vor app/robots.ts abgefangen und die Site kann in keiner KI-Antwort auftauchen. Danach verifizieren: curl -A \"ClaudeBot/1.0\" https://mrsvenezuela.com/estado/bolivar und curl -A \"GPTBot/1.1\" ... — beides muss HTTP 200 mit vollem HTML liefern, nicht 403 und nicht eine Challenge-Seite.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "OG-Bilder auf 16:9 korrigieren und die hartkodierten Masse durch echte ersetzen",
      "how": "lib/page-factory.tsx Zeile 36 deklariert images: [{ url: image, width: 1200, height: 800 }] für jede einzelne Seite — das ist 3:2 und stimmt bei den Commons-Bildern (Special:FilePath ...?width=1800 bzw. ?width=2200) ohnehin nicht mit den echten Massen überein. Google Discover verlangt 16:9 bei mindestens 1200 px Breite. Lösung: pro Guide ein dediziertes 1600x900-Discover-Bild in public/images ablegen (das ist ohnehin sinnvoll, weil Redaktionsbilder oft hochformatig sind) und im StateGuide-Objekt in lib/states/data/*.ts als eigenes Feld führen, z. B. hero.ogSrc plus ogWidth/ogHeight. Fällt das Feld weg, auf das Hero-Bild zurückfallen — aber dann die echten Masse mitgeben statt 1200x800 zu raten.",
      "priority": "P0",
      "effort": "M"
    },
    {
      "action": "Ehrlich entscheiden: Wikipedia-Artikel nein, Wikidata vorerst nein, Wikimedia Commons ja",
      "how": "KEINEN Wikipedia-Artikel über Mrs Venezuela anlegen oder anlegen lassen — die Site erfüllt die Relevanzkriterien nicht (keine unabhängige Berichterstattung), und ein selbst angelegter Artikel wäre COI-Editing, das offengelegt und über Articles for Creation eingereicht werden müsste; er würde gelöscht. Ebenso KEINE Links auf mrsvenezuela.com in bestehende Venezuela-Artikel einfügen. Ein Wikidata-Item für die Website erfüllt derzeit keines der drei Notabilitätskriterien und landet im Löschantrag — erst sinnvoll, wenn es unabhängige, zitierfähige Quellen über das Projekt gibt (Presse, Interviews). Was JETZT legitim ist: Michell Naranjo lädt eigene Venezuela-Fotos unter CC BY-SA 4.0 auf Wikimedia Commons hoch, sauber kategorisiert (Category:Canaima National Park, Category:Los Roques usw.). Werden sie in Artikel eingebunden, erscheint ihr Name als Urheberin auf der Dateibeschreibungsseite. Wichtig vorab klären: CC BY-SA ist unwiderruflich und erlaubt auch kommerzielle Nachnutzung durch Dritte.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "Serverseitige Sprachversionen mit eigenen URLs statt DOM-Übersetzung im Browser",
      "how": "Das ist der grösste strukturelle Hebel für KI-Sichtbarkeit ausserhalb des spanischsprachigen Raums. components/i18n/content-translator.tsx läuft als \"use client\" und ersetzt Textknoten im useEffect — GPTBot, ClaudeBot und PerplexityBot führen kein JS aus und sehen ausschliesslich Spanisch. Realistischer Zwischenschritt ohne Komplettumbau: mit einem [lang]-Segment (app/[lang]/...) mindestens Englisch und Deutsch serverseitig rendern, dabei die bereits vorhandenen Übersetzungen aus lib/institutional-i18n.ts und lib/site-translations.json zur Build-Zeit einsetzen statt zur Laufzeit. Danach alternates.languages in generateMetadata setzen (hreflang), das heute komplett fehlt. Wenn das zu gross ist, ist die ehrliche Alternative: die Nicht-ES-Sprachen als reine Nutzer-Bequemlichkeit betrachten und für Suche/KI ausschliesslich auf Spanisch setzen — aber dann nicht erwarten, in englisch- oder deutschsprachigen KI-Antworten zu erscheinen.",
      "priority": "P1",
      "effort": "L"
    },
    {
      "action": "Autorschaft sichtbar machen — E-E-A-T ist seit 02/2026 Discover-Eligibility-Schwelle, nicht Bonus",
      "how": "Michell Naranjo taucht bisher nur in einem Fliesstext-Absatz in lib/institutional-i18n.ts auf. Nötig: (a) eine eigene Autorenseite unter app/autora/ (oder /sobre-nosotros erweitern) mit Person-Schema, Foto, Herkunft, Bezug zu Venezuela, Zeitraum der eigenen Reisen; (b) in lib/page-factory.tsx dem Article-/TouristDestination-Knoten author: { @type: Person, name: \"Michell Naranjo\", url: absoluteUrl(\"/autora\") } geben; (c) eine sichtbare Byline plus datePublished/dateModified in components/content/state-editorial-guide.tsx rendern — Discover bewertet Frische, und ohne sichtbares Datum gibt es kein Frische-Signal. Wo Fotos selbst gemacht sind, das explizit auszeichnen (\"Foto: Michell Naranjo\") — Erstautorschaft an Bildern ist ein Experience-Signal, das Konkurrenzportale mit Stockfotos nicht haben.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "Pinterest als Haupt-Discovery-Kanal aufbauen (nicht Instagram/TikTok)",
      "how": "Pinterest ist die einzige Social-Plattform, die bildlastigen Reise-Content mit Evergreen-Halbwertszeit auf die eigene Site schickt (zweithöchste Referral-Menge, höchste Conversion-Rate 2,31 %). Konkret: Business-Konto anlegen, mrsvenezuela.com als Claimed Website verifizieren (das erzeugt eine echte Verifikations-Verbindung, nicht nur einen Link), ein Board pro Region (Andes, Llanos, Caribe, Guayana, Oriente, Occidente) plus Boards für Playas, Parques Nacionales, Gastronomía. Pro Guide 3-5 vertikale 1000x1500-Pins aus den vorhandenen Bildern in public/images, jeder mit Deeplink auf /estado/<slug> statt auf die Startseite. Pin-Titel und -Beschreibung auf Spanisch UND Englisch, weil Pinterest sprachübergreifend ausspielt. Danach die Pinterest-URL in das sameAs-Array aufnehmen.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "YouTube-Kanal mit Long-form statt nur Shorts",
      "how": "YouTube ist mit ~23,3 % die meistzitierte Domain in Google AI Overviews, aber 94 % der KI-Zitate entfallen auf Long-form, nicht auf Shorts. Plan: pro Bundesstaat oder Top-Ziel ein 5-12-Minuten-Video aus dem vorhandenen Foto- und Videomaterial, mit vollständigem, redigiertem Transkript in der Beschreibung (nicht nur Auto-Captions), Kapitelmarken, und der Antwort auf die Kernfrage in den ersten 30 Sekunden — KI-Antwortmaschinen zitieren Videos, die die Antwort vorne haben, deutlich häufiger. Shorts dienen nur als Zubringer und Cross-Posting-Material aus dem bestehenden TikTok-Bestand. Jede Beschreibung mit Deeplink auf die passende Guide-URL. Kanal-URL danach in sameAs und ins Organization-Schema.",
      "priority": "P1",
      "effort": "L"
    },
    {
      "action": "Newsletter starten — die einzige algorithmusunabhängige Traffic-Basis",
      "how": "Die Site hat heute nur eine mailto-Adresse im Footer (components/sections/home-footer.tsx Zeile 70) und keinerlei E-Mail-Erfassung. Bei 60 % Zero-Click-Suchen und 33 % Rückgang des organischen Google-Traffics im Jahresvergleich ist das die riskanteste Lücke. Umsetzung schlank: ein Anmeldeformular am Ende jedes Guides und im Footer, angebunden an einen Anbieter mit EU-Hosting (DSGVO, Betreiberin sitzt in Deutschland) mit Double-Opt-In. Inhaltliches Versprechen konkret halten, z. B. \"Un estado de Venezuela al mes, con fotos y guía\" — das passt exakt zum Publikationsrhythmus, den Discover ohnehin belohnt. Wichtig: das Formular serverseitig rendern, damit es nicht erst nach Hydration erscheint.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "Bild-Sitemap und ImageObject-Auszeichnung für Google Bilder",
      "how": "Die Site ist bildlastig (83 Dateien in public/images, 54 alt-Attribute) und hat damit in Google Bilder einen unterschätzten Kanal. Zwei Schritte: (a) app/sitemap.ts um Bild-Einträge erweitern — Next.js MetadataRoute.Sitemap unterstützt das images-Feld pro URL, gespeist aus den Bildlisten der Guides in lib/states/data/*.ts; (b) im @graph in lib/page-factory.tsx pro Guide ImageObject-Knoten mit contentUrl, name, description, creator (Person Michell Naranjo bei eigenen Fotos), creditText und license ausgeben. Bei den 55 Commons-Bildern (lib/content.ts Zeile 40, lib/states/data/carabobo.ts Zeile 4 u. a.) die tatsächliche CC-Lizenz-URL und den Commons-Urheber eintragen — das ist ohnehin lizenzrechtlich Pflicht und macht die Auszeichnung korrekt statt nur SEO-motiviert.",
      "priority": "P2",
      "effort": "M"
    },
    {
      "action": "Eigene Bilder statt Commons-Hotlinks, wo immer möglich",
      "how": "An 55 Stellen werden Bilder über https://commons.wikimedia.org/wiki/Special:FilePath/... eingebunden (lib/content.ts, lib/states/data/*.ts). Für Google Bilder und für Discover ist das schwach: das kanonische Original liegt auf Wikimedia, und Google dedupliziert typischerweise zugunsten der Originalquelle. Wo Michell Naranjo eigenes Material hat, sollte es lokal in public/images liegen — dort stehen bereits 58 lokale Bildpfade, der Umbau ist also angefangen. Priorisieren nach Traffic-Potenzial: erst Canaima, Los Roques, Médanos, Pico Bolívar, Morrocoy. Sobald die letzten Commons-Hotlinks weg sind, kann auch der remotePatterns-Block in next.config.ts entfallen.",
      "priority": "P2",
      "effort": "L"
    },
    {
      "action": "Reddit-Präsenz aufbauen — mit persönlichem Account, nicht als Marke",
      "how": "Reddit ist die meistzitierte Domain in KI-Antworten (Perplexity zitiert es besonders stark). Aber: Rule 8 der Content Policy stuft ausschliessliches Posten eigener Inhalte als Spam ein, und markenbenannte Accounts haben strukturell schlechtere Überlebensraten als persönliche mit offengelegter Zugehörigkeit. Praktisch: Michell Naranjo postet unter eigenem Account in r/venezuela, r/travelphotography, r/solotravel, r/CasualVenezuela und beantwortet echte Fragen (\"is Los Roques worth it\", \"Canaima logistics\") ausführlich IM Kommentar — die Antwort muss auch ohne Klick vollständig sein, denn genau der Text wird zitiert. Ein Link auf den eigenen Guide nur, wenn er zusätzlich etwas liefert, und mit offener Nennung der eigenen Rolle. Vorher die Regeln jedes Subreddits einzeln lesen, die variieren stark. Kein Cross-Posting identischer Beiträge.",
      "priority": "P2",
      "effort": "L"
    },
    {
      "action": "Google News / Publisher Center bewusst NICHT verfolgen",
      "how": "Google News verlangt originäre, zeitaktuelle Nachrichteninhalte plus journalistische Infrastruktur (Bylines mit Bios, Korrekturrichtlinie, Sourcing-Standards, News-Sitemap, Article-Markup). Redaktionelle Reiseguides sind per Definition keine News — eine Bewerbung würde abgelehnt und der Umbau der Site zu einem Nachrichtenformat wäre für dieses Projekt schädlich. Wichtig zu wissen: Discover funktioniert komplett ohne Publisher Center. Der gesamte Aufwand gehört in die Discover-Voraussetzungen (max-image-preview, 16:9-Bilder, Bylines, Datumsangaben, Publikationsrhythmus), nicht in Google News.",
      "priority": "P2",
      "effort": "S"
    },
    {
      "action": "Publikations- und Update-Rhythmus etablieren statt einmaliger Vollständigkeit",
      "how": "Discover gibt maximalen Boost in den Tagen 1-7 nach Veröffentlichung, moderat bis Tag 14, begrenzt bis Tag 30. Die 23 Bundesstaat-Guides sind seit Commit e76e4d1 alle auf einmal live — ohne Nachschub fallen sie geschlossen aus dem Frische-Fenster. Empfehlung: einen Redaktionsplan mit 2-4 Veröffentlichungen pro Monat (neue Orte, Saisonthemen wie \"mejor época para Los Roques\", Fotostrecken) plus rotierende substanzielle Überarbeitung bestehender Guides. Dafür ein echtes dateModified pro Guide in lib/states/data/*.ts pflegen und in app/sitemap.ts verwenden — dort steht aktuell überall lastModified: new Date(), was bei jedem Build alle Seiten als geändert meldet und damit als Signal wertlos ist.",
      "priority": "P2",
      "effort": "M"
    }
  ],
  "outdated_beliefs": [
    "\"llms.txt anlegen, damit KI die Site versteht\" — kein KI-System nutzt sie. Gary Illyes hat die Unterstützung durch Google verneint, John Mueller verglich sie mit dem Keywords-Meta-Tag, und eine Ahrefs-Auswertung über 137.000 Sites fand 97 % llms.txt-Dateien mit null Traffic im Mai 2026. Reine Beschäftigungstherapie.",
    "\"Google Discover ist nur für Nachrichtenseiten und grosse Marken\" — falsch. Es gibt keine Mindest-Sitegrösse, keinen Domain-Authority-Schwellenwert und keine Publisher-Center-Registrierung als Voraussetzung. Eligibility wird auf Themenebene bewertet, und seit dem Core Update vom 5. Februar 2026 schlagen spezialisierte Nischen-Sites Generalisten.",
    "\"Discover-Ranking ist eine Engagement-Lotterie — Hauptsache viele Klicks\" — seit Februar 2026 überholt. Qualitäts- und E-E-A-T-Signale bilden jetzt die Eligibility-Schwelle, CTR ist vom primären zum sekundären Signal degradiert, Dwell Time und Bounce Rate steuern die Sichtbarkeit gar nicht mehr.",
    "\"Shorts und TikToks bringen KI-Sichtbarkeit\" — Reichweite ja, Zitate nein. 94 % der KI-Zitate aus YouTube entfallen auf Long-form-Videos. Kurzvideos sind Zubringer, keine zitierfähigen Quellen.",
    "\"Ein Wikipedia-Artikel ist der Königsweg zum Knowledge Panel\" — für ein Projekt ohne unabhängige Berichterstattung ist er unerreichbar UND regelwidrig, wenn man ihn selbst anlegt. Relevanz ist nicht kaufbar und existiert unabhängig davon, wer den Artikel schreibt. Wikidata ist zwar niedrigschwelliger, aber ein Item über die eigene Website ohne seriöse öffentliche Quellen landet im Löschantrag.",
    "\"Wenn Googlebot die Seite sieht, sehen KI-Crawler sie auch\" — nein. Googlebot rendert JavaScript, GPTBot, ClaudeBot, OAI-SearchBot und PerplexityBot nicht. Vercel/MERJ fanden in über 500 Mio. GPTBot-Fetches null JS-Ausführung. Client-seitig erzeugte Inhalte existieren für KI-Antworten nicht.",
    "\"robots.txt erlaubt alles, also kommen die KI-Crawler durch\" — nicht bei Vercel. Das AI Bot Managed Ruleset in der Firewall greift vor app/robots.ts und blockiert im Deny-Modus GPTBot, ClaudeBot, PerplexityBot und Bytespider komplett.",
    "\"Instagram und TikTok sind die Reise-Kanäle\" — für Markenaufbau ja, für Traffic und KI-Zitate nein. Beide tauchen in keiner der Top-Zitat-Listen der KI-Antwortmaschinen auf und schicken kaum Nutzer auf die eigene Site. Reddit, YouTube und Wikipedia dominieren die Zitate, Pinterest dominiert bei Reise-Referrals mit Evergreen-Wirkung."
  ],
  "pitfalls": [
    "Zwei Markennamen parallel führen. \"Descubre Venezuela\" steht 17-mal im Code (layout, page, page-factory), \"Mrs Venezuela\" 16-mal (About, Kontakt, Domain, Social, E-Mail). Solange das so bleibt, kann weder Google noch ein LLM die Entität auflösen — jedes sameAs, jedes Wikidata-Item und jeder Backlink verteilt sich auf zwei Kandidaten statt auf einen.",
    "Namenskollision mit dem realen Schönheitswettbewerb \"Mrs Venezuela\". Das ist ein struktureller Nachteil, den man nicht wegoptimieren kann: Suchanfragen nach \"Mrs Venezuela\" liefern überwiegend Pageant-Ergebnisse. Gegenmittel sind Disambiguierung im Schema (description, knowsAbout, alternateName) und konsequent thematisch gebundene Marken-Queries (\"Mrs Venezuela guía\", \"Mrs Venezuela viajes\") — aber die Erwartung, den Pageant-Namensraum zu übernehmen, ist unrealistisch.",
    "Selbst einen Wikipedia-Artikel anlegen oder anlegen lassen. Wikipedia rät bei persönlicher/beruflicher Beziehung ausdrücklich davon ab; wer es dennoch tut, muss die Beziehung offenlegen und über Articles for Creation einreichen. Bezahltes Editieren erfordert nach den Wikimedia-Nutzungsbedingungen die Offenlegung von Auftraggeber und Zahlendem. Verstösse führen zu Löschung, Account-Sperre und im schlimmsten Fall zu einer öffentlich dokumentierten COI-Meldung, die dauerhaft mit der Marke verbunden bleibt.",
    "Eigene Links in bestehende Wikipedia-Artikel zu venezolanischen Orten einfügen. Das ist COI-Editing, wird zuverlässig revertiert und markiert den Account. Auch \"nur ein Weblink unter Weblinks\" zählt dazu.",
    "Angebote von Agenturen für \"garantierten Wikipedia-Artikel\" oder \"Knowledge Panel in 30 Tagen\". Relevanz ist unabhängig davon, wer bezahlt hat — ein bezahlter Artikel über ein nicht-relevantes Thema wird trotzdem gelöscht, das Geld ist weg und die Marke hat eine COI-Historie.",
    "CC BY-SA 4.0 auf Commons unterschätzen. Die Lizenz ist unwiderruflich und erlaubt jedem Dritten auch die kommerzielle Nachnutzung der eigenen Fotos, solange attributiert wird. Vor dem ersten Upload klären, welche Bilder man wirklich freigeben will — die besten Hero-Bilder der Site gehören eventuell nicht dazu.",
    "OG-Bildmasse hartkodieren. lib/page-factory.tsx meldet für jede Seite 1200x800, unabhängig vom tatsächlichen Bild — bei den Commons-Bildern mit ?width=1800 bzw. ?width=2200 stimmt das nie. Google Discover liest og:image als Primärsignal; falsche Masse und ein Nicht-16:9-Verhältnis kosten die grosse Karte.",
    "In app/sitemap.ts überall lastModified: new Date() setzen. Damit meldet jeder Build sämtliche Seiten als geändert. Das entwertet das Frische-Signal, auf das Discover explizit reagiert — es ist kein Vorteil, sondern Rauschen.",
    "Discover-Erfolg als planbar behandeln. Laut Recherche laufen dort permanent rund 150 serverseitige Experimente plus über 50 Feature-Controls; zwei ähnliche Nutzer sehen unterschiedliche Feeds allein durch Experimentgruppen. Nutzer-Dismissals wirken pro URL dauerhaft und können sich auf Publisher-Ebene auswirken. Traffic aus Discover ist volatil und darf nie die einzige Säule sein — genau deshalb ist der Newsletter kein Nice-to-have.",
    "Reddit mit einem Marken-Account bespielen. Rule 8 stuft ausschliessliches Posten eigener Inhalte als Spam ein, markenbenannte Accounts haben schlechtere Überlebensraten, und ein Ban wirkt oft site-weit. Persönlicher Account mit offengelegter Rolle, Antwort vollständig im Kommentar statt als Klick-Köder.",
    "Google News anstreben. Verlangt originäre, zeitaktuelle Nachrichten plus journalistische Infrastruktur. Für redaktionelle Reiseguides aussichtslos, und der Umbau in Richtung Nachrichtenformat würde die Topic-Authority-Stärke der Site zerstören, die seit dem Februar-2026-Update gerade ihr Hauptvorteil ist."
  ]
}