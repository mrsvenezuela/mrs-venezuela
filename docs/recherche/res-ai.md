{
  "topic": "Sichtbarkeit in KI-Antworten (GEO/AEO) für descubre-venezuela / mrsvenezuela.com – Recherchestand 25. August 2026",
  "summary": "Kurzfassung: 2026 gibt es keine „KI-SEO-Datei\" und keinen Geheim-Hebel. Was nachweisbar zählt, ist (1) Index-Abdeckung in Google UND Bing – Bing ist weiterhin die Retrieval-Schicht für ChatGPT-Search und Copilot, (2) serverseitig ausgeliefertes HTML (die großen KI-Crawler führen kein JavaScript aus), (3) zitierfähige Textstruktur mit Direktantworten, Fakten-Tabellen, Datum/Autor, und (4) Off-Site-Entitätssignale (Marken-/Ortserwähnungen, YouTube, Wikipedia/Wikidata, Reddit) – in der einzigen großen Korrelationsstudie (Ahrefs, 75.000 Marken) schlagen Markenerwähnungen Backlinks um das 2–3-Fache. llms.txt ist praktisch tot: Google sagt explizit, es wird nicht genutzt, und Logdaten zeigen, dass die relevanten Crawler die Datei kaum abrufen.\n\nFür dieses Projekt ist die Ausgangslage gut: Next.js liefert die 23 Bundesstaat-Guides statisch/SSR aus, der Text ist original-redaktionell (kein Aggregat-Content), es gibt Fakten-Blöcke und FAQs. Die konkreten Lücken sind: (a) `app/robots.ts` kennt nur `User-agent: *` und differenziert nicht zwischen Trainings- und Retrieval-Bots, (b) `app/sitemap.ts` setzt bei jedem Build `lastModified: new Date()` für ALLE URLs – ein wertloses bzw. schädliches Frische-Signal, (c) das JSON-LD in `lib/page-factory.tsx` hat kein `datePublished`/`dateModified`, keinen `author`, keinen `publisher` und kein `sameAs` (Wikipedia/Wikidata), (d) die Nicht-Estado-Seiten bekommen generische Platzhalter-FAQs im Schema (Boilerplate-Risiko), (e) die Mehrsprachigkeit ist rein clientseitig – für JEDEN Crawler, auch für ChatGPT/Claude/Perplexity, existiert die Site ausschließlich auf Spanisch. Für Reise-Content ist das relevant, weil ausgerechnet „Travel & Hospitality\" laut Similarweb mit ~23 % die höchste Zitierrate aller Branchen in KI-Antworten hat (Mai 2026).\n\nWas Marketing und was Realität ist: KI-Referral-Traffic liegt 2026 branchenübergreifend bei ~1 % (Spanne 0,1–2,8 %). Zitierungen sind derzeit mehr wert als Klicks. Google AI Mode/AI Overviews sind in der Search Console seit 3. Juni 2026 als „Search Generative AI\"-Report sichtbar, aber NUR mit Impressionen, ohne Klicks – und AI-Mode-Klicks sind wegen `noreferrer` analytisch nicht trennbar. Verlässlich messbar sind: Bing Webmaster Tools „AI Performance\" (seit 11.02.2026, echte Copilot-Zitierdaten), Referrer `chatgpt.com`/`perplexity.ai`/`claude.ai` in Vercel Analytics, und Server-/Edge-Logs für Crawler-Hits. Alle „AI-Visibility-Scores\" von Drittanbietern sind Stichproben-Schätzungen, keine Messung.",
  "key_points": [
    {
      "claim": "Google sagt offiziell, dass für generative KI-Features KEINE neuen maschinenlesbaren Dateien, KI-Textdateien, Markup oder Markdown nötig sind – wörtlich: \"You don't need to create new machine readable files, AI text files, markup, or Markdown\". Ebenso: \"Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add.\" Ausdrücklich als überflüssig genannt werden auch: Content in winzige Chunks zerlegen, Texte speziell für KI umschreiben, unechte Erwähnungen kaufen, llms.txt anlegen.",
      "source_url": "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
      "why_it_matters": "Das ist der Maßstab für alle GEO-Ratschläge: Wer euch llms.txt, FAQ-Schema-Spam oder „Chunk-Optimierung\" als Pflicht verkauft, widerspricht der offiziellen Doku. Investiert stattdessen in Indexierbarkeit und einzigartigen Inhalt – beides habt ihr im Ansatz schon.",
      "confidence": "belegt",
      "date_or_version": "Stand 2026-07-10 (Google Search Central, \"Guide to optimizing for generative AI features\")"
    },
    {
      "claim": "Google fordert im selben Dokument ausdrücklich Einzigartigkeit: \"Don't just recycle what others on the internet have already said.\" Voraussetzung für AI Overviews/AI Mode ist außerdem, dass die Seite indexiert und für normale Google-Snippets zugelassen ist (kein `nosnippet`, kein `noindex`, kein `data-nosnippet` auf den Kernpassagen).",
      "source_url": "https://developers.google.com/search/docs/appearance/ai-features",
      "why_it_matters": "Eure 23 Bundesstaat-Guides in lib/states/data/*.ts sind original geschrieben (z. B. bolivar.ts mit Angostura/Congreso de Angostura 1819, El Callao, Escudo Guayanés) – genau das, was Google als „unique, compelling, useful\" beschreibt. Der Hebel liegt nicht im Text, sondern in Auffindbarkeit und Zitierbarkeit.",
      "confidence": "belegt",
      "date_or_version": "Google-Doku, zuletzt aktualisiert 2025-12-10 bzw. 2026-07-10"
    },
    {
      "claim": "Die großen KI-Crawler führen KEIN JavaScript aus. Die Vercel/MERJ-Analyse über >500 Mio. Fetches fand null Belege für JS-Ausführung bei GPTBot; ChatGPT lädt 11,50 % JS-Dateien, Claude 23,84 %, führt sie aber nicht aus. Nur Applebot und Googles Gemini-Infrastruktur rendern (weil sie Googlebot-Rendering erben). Auffällig: ChatGPT-Crawler landeten in 34,82 % der Fetches auf 404 (Claude 34,16 %) gegenüber 8,22 % bei Googlebot.",
      "source_url": "https://vercel.com/blog/the-rise-of-the-ai-crawler",
      "why_it_matters": "Für euch aktuell unkritisch, weil Next.js App Router die Guides serverseitig rendert – aber es ist die harte Grenze für alles Client-seitige. Konkret betroffen: components/i18n/content-translator.tsx übersetzt das DOM erst zur Laufzeit, d. h. für GPTBot/ClaudeBot/PerplexityBot existiert die Site NUR auf Spanisch. Ebenso: alles, was in guide-toc.tsx, search-overlay.tsx oder state-locator.tsx erst nach Interaktion erscheint, ist für KI-Crawler nicht vorhanden.",
      "confidence": "belegt",
      "date_or_version": "Vercel/MERJ, publiziert 2024-12-17; 2026 mehrfach repliziert"
    },
    {
      "claim": "OpenAI betreibt vier getrennte Agents mit unterschiedlicher Funktion: GPTBot (Training, UA `GPTBot/1.4`, \"Disallowing GPTBot indicates a site's content should not be used in training generative AI foundation models\"), OAI-SearchBot (\"used to surface websites in search results in ChatGPT's search features\", UA seit 2026 mit vollem Chrome-Prefix und `OAI-SearchBot/1.4`), ChatGPT-User (Live-Abruf bei Nutzerfrage – wörtlich: \"Because these actions are initiated by a user, robots.txt rules may not apply\") und OAI-AdsBot.",
      "source_url": "https://developers.openai.com/api/docs/bots",
      "why_it_matters": "Training-Blocken und Zitiert-werden sind ENTKOPPELT. Ihr könnt GPTBot sperren und trotzdem in ChatGPT-Search zitiert werden – solange OAI-SearchBot erlaubt bleibt. Wer pauschal „alle KI-Bots blocken\" sagt, killt genau den Bot, der Traffic bringt. Achtung beim Log-Filtern: der alte kurze UA-String von OAI-SearchBot matcht nicht mehr.",
      "confidence": "belegt",
      "date_or_version": "OpenAI-Doku, Stand August 2026 (umgezogen von platform.openai.com auf developers.openai.com)"
    },
    {
      "claim": "Anthropic betreibt exakt drei Agents: ClaudeBot (Training – \"collecting web content that could potentially contribute to their training\"), Claude-SearchBot (\"navigates the web to improve search result quality\") und Claude-User (\"When individuals ask questions to Claude, it may access websites using a Claude-User agent\"). Alle drei sind per robots.txt einzeln steuerbar, `Crawl-delay` wird unterstützt. `anthropic-ai` und `Claude-Web` sind in der offiziellen Doku NICHT mehr als aktive Crawler geführt.",
      "source_url": "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
      "why_it_matters": "Claude ist 2026 laut Similarweb auf ~9 % Anteil am Gen-AI-Traffic gestiegen (von 2 %) und in manchen Referral-Auswertungen bereits Nr. 2. Claude-SearchBot und Claude-User explizit zu erlauben ist damit kein Nischen-Thema mehr.",
      "confidence": "belegt",
      "date_or_version": "Anthropic-Supportartikel, Stand 2026"
    },
    {
      "claim": "Perplexity trennt PerplexityBot (Index-Crawler, \"not used for AI model training\", befolgt robots.txt) und Perplexity-User (Live-Abruf). Zu Letzterem steht wörtlich in der Doku: \"Since a user requested the fetch, this fetcher generally ignores robots.txt rules.\" IP-Listen unter perplexity.com/perplexitybot.json bzw. /perplexity-user.json.",
      "source_url": "https://docs.perplexity.ai/guides/bots",
      "why_it_matters": "Ein `Disallow` für Perplexity-User ist wirkungslos; nur PerplexityBot lässt sich real steuern. Für die Verifikation echter vs. gefälschter Bots in den Logs sind die JSON-IP-Listen der einzige belastbare Weg.",
      "confidence": "belegt",
      "date_or_version": "Perplexity-Doku, Stand 2026"
    },
    {
      "claim": "Google-Extended ist KEIN Crawler, sondern ein reines robots.txt-Steuertoken ohne eigenen HTTP-User-Agent. Es steuert Gemini-Training und Grounding in Gemini-Apps sowie Grounding-with-Google-Search in Vertex AI. Google dokumentiert seit April 2025 ausdrücklich: Google-Extended beeinflusst weder Aufnahme in die Google-Suche noch das Ranking. AI Overviews und AI Mode werden über Googlebot + normale Snippet-Controls gespeist, NICHT über Google-Extended.",
      "source_url": "https://www.seroundtable.com/google-extended-seo-36865.html",
      "why_it_matters": "Google-Extended zu blocken schützt vor Gemini-Training, verhindert aber NICHT die Zitierung in AI Overviews/AI Mode. Wer AI Overviews wirklich verlassen will, muss `nosnippet`/`max-snippet` setzen – und verliert damit auch klassische Snippets. Diese Verwechslung ist der häufigste Fehler in robots.txt-Vorlagen.",
      "confidence": "belegt",
      "date_or_version": "Google-Doku-Update April 2025, in 2026 unverändert gültig"
    },
    {
      "claim": "llms.txt ist praktisch bedeutungslos. John Mueller am 2. Juni 2026: llms.txt sei \"purely speculative for now\", die Datei existiere seit Jahren, \"yet none of the AI systems use it\", und er empfahl: erst anlegen, \"when an AI platform that brings you clients complains that it needs the file\". Zuvor hatte Gary Illyes auf Search Central Live bestätigt, dass Google llms.txt nicht unterstützt und es nicht plant; Mueller verglich es mit dem Keywords-Meta-Tag.",
      "source_url": "https://www.searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/",
      "why_it_matters": "Spart euch die Diskussion. llms.txt ist kein Ranking-, Retrieval- oder Zitationssignal bei Google. Der einzige reale Nutzen liegt in Developer-Tooling (Cursor, Continue, MCP-Integrationen) – für eine Reise-Site irrelevant.",
      "confidence": "belegt",
      "date_or_version": "2026-06-02 (Mueller), Google Search Central Live 2025 (Illyes)"
    },
    {
      "claim": "Logdaten stützen das: In einer Auswertung von über 500 Mio. KI-Bot-Events über 90 Tage gab es nur „einige hundert\" Requests auf /llms.txt – GPTBot, ClaudeBot, PerplexityBot, OAI-SearchBot und Google-Extended crawlen ganz überwiegend direkt HTML. Adoptionsrate ~10 % über 300.000 Domains, aber unter den 50 meistzitierten Domains hatte genau EINE die Datei.",
      "source_url": "https://geojacker.com/llms-txt",
      "why_it_matters": "Die stärkste Evidenz gegen llms.txt: Die Domains, die tatsächlich zitiert werden, haben die Datei nicht. Kausalität in die Gegenrichtung wäre kaum erklärbar.",
      "confidence": "wahrscheinlich",
      "date_or_version": "Auswertung 2026 (Limy.ai-Daten, sekundär zitiert)"
    },
    {
      "claim": "Behauptungen, Anthropic und Perplexity würden llms.txt „offiziell unterstützen\", finden sich nur in SEO-Blogs (z. B. presenc.ai) ohne Primärquelle. Anthropic und Perplexity PUBLIZIEREN eine llms.txt für ihre eigene Doku – das ist etwas anderes, als sie bei fremden Sites zu KONSUMIEREN. In den offiziellen Crawler-Dokumentationen beider Anbieter kommt llms.txt nicht vor.",
      "source_url": "https://presenc.ai/research/state-of-llms-txt-2026",
      "why_it_matters": "Wichtig für die Bewertung: Diese Quellen sind Content-Marketing, nicht Evidenz. Behandelt sie als Spekulation, nicht als Beleg.",
      "confidence": "unsicher",
      "date_or_version": "Quelle datiert April 2026, ohne Primärbeleg"
    },
    {
      "claim": "ChatGPT-Search stützt sich weiterhin maßgeblich auf den Bing-Index; Bing ist zugleich die Retrieval-Schicht für Microsoft Copilot. Eine Seite, die Bing nicht indexiert hat, ist für beide Antwortmaschinen unsichtbar – unabhängig vom Google-Ranking. OAI-SearchBot-Crawls lassen sich indirekt über Bing Webmaster Tools / IndexNow anstoßen. Unabhängige Tests (Iyer, Solís, Juli–August 2025, bestätigt bis Mai 2026) zeigen zusätzlich, dass ChatGPT auch Google-Index-Daten zieht – von OpenAI nicht offengelegt.",
      "source_url": "https://subscribepr.com/blog/how-to-get-indexed-on-bing/",
      "why_it_matters": "Ihr habt vermutlich keine Bing-Webmaster-Tools-Property. Das ist der billigste ungenutzte Hebel: Sitemap in BWT einreichen + IndexNow anschließen, dann ist die Site in ChatGPT-Search UND Copilot abrufbar. Die Google-Beimischung ist Sekundärquelle – als „wahrscheinlich\" behandeln.",
      "confidence": "wahrscheinlich",
      "date_or_version": "Stand 2026; OpenAI-Bestätigung zu Bing seit Launch von ChatGPT Search 2024"
    },
    {
      "claim": "Microsoft hat am 11. Februar 2026 den „AI Performance\"-Report in den Bing Webmaster Tools als Public Preview veröffentlicht – erstmals First-Party-Zitierdaten eines großen KI-Anbieters. Metriken: Total Citations, Average Cited Pages, Grounding Queries (die intern von Copilot generierten Suchphrasen, nicht die Nutzerprompts), Zitierungen pro URL, Trends. Abdeckung: Copilot, KI-Zusammenfassungen in Bing und „select partner integrations\" (Partner werden nicht namentlich genannt). Im Juni 2026 erweitert um Intents, Topics, Citation Share und Compare. Microsofts eigene Empfehlungen: klare Überschriften und FAQ-Abschnitte, Belege für Aussagen, Frische über IndexNow, konsistente Informationen über Formate hinweg.",
      "source_url": "https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview",
      "why_it_matters": "Das ist 2026 die einzige echte Messung von KI-Zitierungen (keine Stichprobenschätzung). Und Microsofts On-Page-Empfehlungen sind der einzige offizielle Herstellerhinweis, der Überschriften/FAQ/Belege explizit nennt.",
      "confidence": "belegt",
      "date_or_version": "2026-02-11 (Preview), Erweiterung Juni 2026"
    },
    {
      "claim": "Google hat am 3. Juni 2026 „Search Generative AI performance reports\" in der Search Console eingeführt: eigene Ansichten für Impressionen in AI Overviews, AI Mode und generativen Discover-Features, aufgeschlüsselt nach Seiten, Ländern, Geräten und Datum. NUR Impressionen – keine Klicks, keine CTR, keine Query-Daten. Rollout zunächst auf eine Teilmenge (UK-Sites), Daten ab 18. Mai 2026, kein Backfill. Bereits seit 16. Juni 2025 fließen AI-Mode-Klicks/Impressionen in die normalen GSC-Summen ein, ohne dass man sie herausfiltern kann.",
      "source_url": "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
      "why_it_matters": "Ihr seht Sichtbarkeit, aber nicht deren Wert. Wer euch „AI-Mode-Traffic-Reporting\" verkauft, verkauft eine Schätzung. AI-Mode-Klicks tragen zudem `noreferrer` und sind in Vercel Analytics nicht von Direct zu unterscheiden.",
      "confidence": "belegt",
      "date_or_version": "2026-06-03 (GSC Gen-AI-Reports), 2025-06-16 (AI-Mode-Daten in Standardberichten)"
    },
    {
      "claim": "Ahrefs hat 75.000 Marken auf Korrelation zwischen SEO-Metriken und KI-Sichtbarkeit (ChatGPT, AI Mode, AI Overviews) untersucht (Spearman, Filter: DR>40, Top-Keyword ≥800 Suchvolumen). Ranking: YouTube-Erwähnungen ~0,737 > YouTube-Impressionen ~0,717 > Branded Web Mentions 0,656–0,709 > Branded Anchors 0,511–0,628 > Branded Search Volume 0,352–0,466 > Domain Rating 0,266–0,326 > Backlinks (schwach) > Seitenanzahl ~0,194. Die Autoren schreiben selbst: \"correlation isn't causation.\"",
      "source_url": "https://ahrefs.com/blog/ai-brand-visibility-correlations",
      "why_it_matters": "Off-Site-Entitätssignale schlagen klassische Link-Metriken um das 2–3-Fache. Für „Descubre Venezuela\" heißt das: Erwähnungen des Namens + YouTube-Präsenz + konsistente Ortsnamen sind wichtiger als Backlink-Aufbau. Aber: Korrelation, kein Kausalnachweis – und die Stichprobe ist auf DR>40-Marken gefiltert, also nicht direkt auf eine junge Site übertragbar.",
      "confidence": "belegt",
      "date_or_version": "Ahrefs, publiziert 2025-12-12"
    },
    {
      "claim": "Die Princeton/IIT-Delhi-Studie „GEO: Generative Engine Optimization\" (Aggarwal et al., KDD 2024, arXiv 2311.09735, GEO-Bench mit ~10.000 Queries über 9 Datensätze) zeigte messbare Sichtbarkeitsgewinne von 22–41 %. Stärkste Einzelmethoden: Zitate aus autoritativen Quellen hinzufügen (+41 % Position-Adjusted Word Count, +28 % Subjective Impression) und relevante Statistiken hinzufügen. Der oft zitierte „+40 %\" ist ein Maximalwert, kein Durchschnitt.",
      "source_url": "https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/",
      "why_it_matters": "Die einzige peer-reviewte GEO-Studie. Für eure Guides direkt umsetzbar: konkrete Zahlen und benannte Quellen in den Fließtext (ihr habt sie schon – 240.528 km², Congreso de Angostura 1819, Namensänderung 1846 – aber sie stehen in Prosa statt in zitierfähigen Blöcken).",
      "confidence": "belegt",
      "date_or_version": "ACM SIGKDD 2024; 2026 weiterhin die Referenzarbeit"
    },
    {
      "claim": "KI-Antworten stützen sich stark auf wenige Plattformen. Semrush (14.07.–12.10.2025, >230.000 Prompts, >100 Mio. Zitationen, ChatGPT / Google AI Mode / Perplexity): ChatGPT zitierte Reddit ~60 % und Wikipedia ~55 % der Antworten – bis Mitte September 2025, dann Absturz auf ~10 % bzw. <20 %. Google AI Mode dagegen: LinkedIn ~15 %, Wikipedia nur ~2 %. Perplexity: Reddit, LinkedIn, NIH stabil.",
      "source_url": "https://www.semrush.com/blog/most-cited-domains-ai/",
      "why_it_matters": "Zwei Lehren: (1) Die Quellenmischung unterscheidet sich pro Engine drastisch – eine Strategie „für KI\" gibt es nicht. (2) Die Anteile sind hochvolatil; ein einzelnes Modell-Update hat Reddit bei ChatGPT von 60 % auf 10 % gedrückt. Baut nichts auf einer Plattform auf.",
      "confidence": "belegt",
      "date_or_version": "Semrush-Studie, Erhebung Juli–Oktober 2025"
    },
    {
      "claim": "Die Überlappung zwischen KI-Zitationen und den klassischen Google-Top-10 schrumpft. Werte je nach Methodik: 52 % (Surfer SEO), 38 % (Ahrefs, März 2026, gegenüber ~76 % Mitte 2025), 13,7 % URL-Überlappung zwischen AI Overviews und AI Mode, ~6,8 % zwischen ChatGPT-Ergebnissen und Googles Top-10. Brandlight berichtet einen Rückgang der Überlappung von 70 % auf unter 20 %.",
      "source_url": "https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138",
      "why_it_matters": "Gute Google-Rankings sind 2026 keine Garantie mehr für KI-Zitierung – aber Indexierung bleibt Voraussetzung. Die exakten Prozentwerte streuen stark je nach Anbieter-Methodik; nehmt die Richtung, nicht die Zahl.",
      "confidence": "wahrscheinlich",
      "date_or_version": "diverse Studien 2026; Zahlen methodisch nicht vergleichbar"
    },
    {
      "claim": "Reise & Gastgewerbe hat die höchste KI-Zitierrate aller Branchen: Similarweb misst ~23 % (Automotive ~20 %, Professional Services <4 %), bei einer branchenübergreifenden Zitierrate, die von 1,6 % (Juni 2025) auf 6,8 % (Mai 2026) gestiegen ist. Gleichzeitig: ChatGPT hält nur noch ~53 % des Gen-AI-Web-Traffics (von 76 %), Gemini 27–28 %, Claude ~9 %.",
      "source_url": "https://aisearch.similarweb.com/blog/gen-ai-stats/",
      "why_it_matters": "Direkt euer Segment. Reise-Content wird in KI-Antworten überdurchschnittlich oft zitiert – der potenzielle Ertrag von GEO ist hier höher als im Durchschnitt. Und: nur auf ChatGPT zu optimieren wäre 2026 falsch, Gemini ist fast gleichauf.",
      "confidence": "belegt",
      "date_or_version": "Similarweb, Daten bis Mai 2026"
    },
    {
      "claim": "KI-Referral-Traffic ist absolut gesehen klein: ~1 % des Web-Traffics, über Studien hinweg 0,1–2,8 % je nach Branche und Autorität. GA4 hat am 13. Mai 2026 einen nativen Default-Channel „AI Assistant\" eingeführt (Medium = `ai-assistant`, Campaign = `(ai-assistant)`), breite Verfügbarkeit ab ca. 7. Juni 2026 – erkennt aber nur Sessions MIT Referrer und deckt Perplexity zunächst nicht ab. 35–70 % der KI-Sessions landen mangels Referrer in „Direct\".",
      "source_url": "https://www.searchenginejournal.com/google-analytics-adds-ai-assistant-as-default-channel-group/574974/",
      "why_it_matters": "Erwartungsmanagement: KI-Sichtbarkeit zahlt sich 2026 eher über Markenbekanntheit und Branded Search aus als über direkte Klicks. Wer ROI in Klicks misst, wird enttäuscht – und unterschätzt den Effekt zugleich, weil ein großer Teil als Direct verbucht wird.",
      "confidence": "belegt",
      "date_or_version": "GA4-Änderung 2026-05-13; Traffic-Anteile aus mehreren Studien 2026"
    },
    {
      "claim": "Trainings-Crawler zu blocken hat unklare, aber vermutlich negative Effekte. Widersprüchliche Evidenz: BuzzStream (19.03.2026, 4 Mio. Zitationen über 3.600 Prompts) findet kaum Zusammenhang zwischen Crawler-Zugang und Zitierung; Cloro (Juli 2026) findet dagegen, dass die typische GPTBot-blockende Domain je Google-Ranking fast keine ChatGPT-Zitationen erhält (Median 0,003 vs. 0,417). Eine akademische Arbeit von Rutgers/Wharton (31.12.2025) misst bei Publishern, die KI-Crawler per robots.txt blocken, −23,1 % monatliche Besuche und −13,9 % rein menschliches Browsing.",
      "source_url": "https://cloro.dev/research/ai-crawler-blocks/",
      "why_it_matters": "Für eine junge Content-Site ohne Lizenzgeschäft gibt es keinen ökonomischen Grund, GPTBot/ClaudeBot zu blocken – aber auch keinen belegten Vorteil daraus, sie zu erlauben. Entscheidend ist nur, die RETRIEVAL-Bots offen zu halten. Die Studien widersprechen sich; als Richtungsindiz behandeln.",
      "confidence": "unsicher",
      "date_or_version": "BuzzStream 2026-03-19, Cloro 2026-07, Rutgers/Wharton 2025-12-31"
    },
    {
      "claim": "Google hat FAQ-Rich-Results beendet: Deprecation-Hinweis am 7. Mai 2026 in der Doku, ab Juni 2026 Entfernung von Search-Appearance-Filter, GSC-Report und Rich-Results-Test-Unterstützung, ab August 2026 auch aus der Search-Console-API. FAQPage bleibt als Schema.org-Typ gültig und schadet nicht, wenn es stehen bleibt.",
      "source_url": "https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/",
      "why_it_matters": "Direkt relevant für lib/page-factory.tsx: Das FAQPage-JSON-LD dort bringt bei Google keine Rich Results mehr. Es schadet nicht – ABER die generischen Platzhalter-Antworten für alle Nicht-Estado-Seiten („Depende de la región, el clima y el tipo de experiencia…\") sind identischer Boilerplate über hunderte URLs. Das ist genau das, was Google mit \"Don't just recycle\" meint.",
      "confidence": "belegt",
      "date_or_version": "2026-05-07 Deprecation, Phasen bis August 2026"
    },
    {
      "claim": "Struktur beeinflusst Zitierwahrscheinlichkeit – die Evidenz ist real, die kursierenden Zahlen aber überwiegend aus Anbieter-Blogs ohne offengelegte Methodik (z. B. „Tabellen 4,2× häufiger zitiert\", „Überschriften mit Query-Match 41 % vs. 29 %\", „FAQ-Schema +45 %\", „Semantic Completeness r=0,87\"). Belastbar sind nur: die Princeton-GEO-Ergebnisse (Zitate + Statistiken), Microsofts eigene Empfehlung (klare Überschriften, FAQ-Abschnitte, Belege) und die RAG-Mechanik selbst (Retrieval arbeitet auf Passagen/Chunks, typisch 150–300 Wörter).",
      "source_url": "https://machinerelations.ai/research/content-structure-ai-citation-rates-2026",
      "why_it_matters": "Handelt danach, aber zitiert die Prozentzahlen nicht als Fakt. Die praktische Regel folgt aus der Mechanik, nicht aus den Zahlen: Eine Antwort muss innerhalb EINES Retrieval-Chunks vollständig sein – Frage in der Überschrift, Antwort in den ersten 2–3 Sätzen darunter, ohne Rückverweis auf vorherige Absätze.",
      "confidence": "unsicher",
      "date_or_version": "diverse Anbieter-Studien 2025/2026, Methodik meist nicht offengelegt"
    },
    {
      "claim": "Wikidata ist die wichtigste Einzelquelle für Googles Knowledge Graph, und Wikidata gilt in der Tourismusforschung als eine der ergiebigsten offenen Quellen für POI-Daten (mehrsprachige Labels, strukturierte Properties, Wikipedia-Verknüpfungen, Denkmal-Kennzeichnungen, Koordinaten). ChatGPT ist stark Wikipedia-abhängig (~47,9 % der Top-10-Zitationen), Perplexity dagegen Reddit-lastig (~46,5 %); nur ~11 % der Sites werden von beiden zitiert.",
      "source_url": "https://www.mdpi.com/2227-7390/14/12/2227",
      "why_it_matters": "Für Venezuela-Entitäten (23 Bundesstaaten, Canaima, Los Roques, Pico Bolívar, Médanos de Coro) existieren Wikidata-Items bereits. Wenn eure Seiten per `sameAs` auf Wikipedia/Wikidata verweisen, wird die Verknüpfung „diese Seite handelt von genau dieser Entität\" maschinell eindeutig – das ist der billigste Entitäts-Hebel, den ihr habt.",
      "confidence": "wahrscheinlich",
      "date_or_version": "MDPI Mathematics 2026 (Wikidata/Tourismus-Pipeline); Zitationsanteile aus Anbieterstudien 2026"
    },
    {
      "claim": "Vollständige, aktuelle Agent-Taxonomie (Stand August 2026) – Training: GPTBot, ClaudeBot, CCBot, Amazonbot, meta-externalagent, Bytespider (befolgt robots.txt NICHT), cohere-training-data-crawler, Timpibot. Retrieval/Suche: OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, Bingbot, Applebot, DuckAssistBot, Google-CloudVertexBot. Nutzerausgelöst: ChatGPT-User, Claude-User, Perplexity-User (ignoriert robots.txt), MistralAI-User, Google-Agent (ignoriert robots.txt). Reine Steuertokens ohne eigene Requests: Google-Extended, Applebot-Extended.",
      "source_url": "https://github.com/ai-robots-txt/ai.robots.txt/blob/main/table-of-bot-metrics.md",
      "why_it_matters": "Das ist die Liste, nach der ihr app/robots.ts strukturieren solltet. Wichtig: Google-Extended und Applebot-Extended tauchen NIE in Logfiles auf – wer sie dort sucht, sucht vergeblich. Applebot-Extended blockt nur Apple-Intelligence-Training, nicht Siri/Spotlight.",
      "confidence": "belegt",
      "date_or_version": "ai-robots-txt Community-Tabelle, laufend gepflegt; ergänzt um nohacks.co-Reference 2026"
    },
    {
      "claim": "Neu und noch nicht produktionsreif: Web Bot Auth (IETF-Draft, HTTP Message Signatures) als kryptografische Bot-Verifikation. Stand August 2026 experimentiert Google damit für Google-Agent, Cloudflare implementiert es, OpenAI/Anthropic/Perplexity haben keine Adoption dokumentiert. John Mueller nannte im Juni 2026 WebMCP (in Chrome unterstützt) als das Protokoll mit \"clear goals & processes\" – im Gegensatz zu llms.txt.",
      "source_url": "https://nohacks.co/blog/ai-user-agents-landscape-2026",
      "why_it_matters": "Für euch 2026 noch nichts zu tun, aber die Richtung ist klar: Statt einer Textdatei für LLMs geht die Standardisierung zu signierten Agent-Identitäten und echten Tool-Schnittstellen. Beobachten, nicht implementieren.",
      "confidence": "wahrscheinlich",
      "date_or_version": "Stand August 2026, IETF-Draft-Status"
    }
  ],
  "actions": [
    {
      "action": "app/robots.ts nach Bot-Klassen strukturieren statt nur `User-agent: *`",
      "how": "Aktuell steht dort nur `{ userAgent: \"*\", allow: \"/\" }` – funktional erlaubt das zwar alles, dokumentiert aber keine Entscheidung und lässt aggressive Bots durch. Ersetzt den Inhalt von C:/Users/User/Desktop/descubre-venezuela/app/robots.ts durch Regel-Gruppen (MetadataRoute.Robots akzeptiert ein Array und userAgent als string[]):\n\nimport type { MetadataRoute } from \"next\";\nimport { absoluteUrl } from \"@/lib/utils\";\n\nexport default function robots(): MetadataRoute.Robots {\n  return {\n    rules: [\n      { userAgent: \"*\", allow: \"/\" },\n      // 1) Retrieval-/Such-Crawler der Antwortmaschinen – das sind die, die Zitate\n      //    und Traffic bringen. Niemals blocken.\n      {\n        userAgent: [\n          \"Googlebot\", \"Bingbot\", \"Applebot\",\n          \"OAI-SearchBot\", \"ChatGPT-User\",\n          \"PerplexityBot\", \"Perplexity-User\",\n          \"Claude-SearchBot\", \"Claude-User\",\n          \"DuckAssistBot\", \"MistralAI-User\", \"Amazonbot\",\n        ],\n        allow: \"/\",\n      },\n      // 2) Reine Trainings-Crawler. Bewusst erlaubt: kein Lizenzgeschäft,\n      //    Modellwissen über Venezuela nützt der Marke mehr als es kostet.\n      {\n        userAgent: [\"GPTBot\", \"ClaudeBot\", \"Google-Extended\", \"Applebot-Extended\", \"meta-externalagent\", \"CCBot\"],\n        allow: \"/\",\n      },\n      // 3) Undokumentiert / aggressiv / ohne Nutzen für uns.\n      {\n        userAgent: [\"Bytespider\", \"Timpibot\", \"cohere-training-data-crawler\", \"Diffbot\", \"omgilibot\"],\n        disallow: \"/\",\n      },\n    ],\n    sitemap: absoluteUrl(\"/sitemap.xml\"),\n    host: absoluteUrl(),\n  };\n}\n\nWichtig zu wissen: Bei Perplexity-User und ChatGPT-User ist ein Disallow ohnehin wirkungslos (beide Anbieter dokumentieren das). Google-Extended und Applebot-Extended erzeugen keine Requests – sie tauchen nie in Logs auf. Blockt Google-Extended NICHT in der Annahme, damit AI Overviews zu verlassen: die laufen über Googlebot.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "sitemap.ts: echte lastModified-Daten statt `new Date()` bei jedem Build",
      "how": "In C:/Users/User/Desktop/descubre-venezuela/app/sitemap.ts steht bei JEDER der ~hundert URLs `lastModified: new Date()`. Bei jedem Vercel-Deploy behauptet die Sitemap damit, alle Seiten hätten sich geändert. Bing und IndexNow werten das als Rauschen ab, und ihr verschenkt das einzige Frische-Signal, das ihr kontrolliert.\n\nSchritt 1 – Datumsfeld ins Datenmodell: in lib/states/types.ts das StateGuideData-Objekt um `updatedAt: string` (ISO, z. B. \"2026-08-20\") erweitern; analog ein optionales `updatedAt` an DiscoverItem in lib/content.ts.\n\nSchritt 2 – sitemap.ts nutzt es:\nconst lastMod = (item: DiscoverItem) => new Date(item.updatedAt ?? SITE_CONTENT_EPOCH);\n...map((item) => ({ url: absoluteUrl(`/${kind}/${item.slug}`), lastModified: lastMod(item), changeFrequency: \"monthly\" as const, priority: kind === \"estado\" ? 0.9 : 0.7 }))\n\nSchritt 3 – changeFrequency ehrlich setzen: die 23 Bundesstaat-Guides sind Evergreen, `weekly` ist unglaubwürdig. `monthly` für Guides, `weekly` nur für /estados und die Startseite.\n\nAlternative ohne Datenmodell-Änderung, wenn es schnell gehen muss: Git-mtime der jeweiligen lib/states/data/*.ts-Datei zur Buildzeit auslesen. Das ist aber auf Vercel wegen Shallow-Clone unzuverlässig – lieber das explizite Feld.",
      "priority": "P0",
      "effort": "M"
    },
    {
      "action": "JSON-LD in lib/page-factory.tsx um Datum, Autor, Publisher und sameAs erweitern",
      "how": "Das @graph in C:/Users/User/Desktop/descubre-venezuela/lib/page-factory.tsx hat weder Datum noch Urheber. Genau diese Felder benutzen Antwortmaschinen, um Aktualität und Verantwortlichkeit einzuschätzen. Ergänzt im TouristDestination/Article-Knoten:\n\n  datePublished: item.publishedAt,\n  dateModified: item.updatedAt,\n  author: { \"@type\": \"Person\", name: \"Michell Naranjo\", url: absoluteUrl(\"/sobre-nosotros\") },\n  publisher: { \"@id\": absoluteUrl(\"#organization\") },\n  inLanguage: \"es\",\n  ...(guide?.wikidataId ? { sameAs: [`https://www.wikidata.org/wiki/${guide.wikidataId}`, guide.wikipediaEs] } : {}),\n  ...(guide?.geo ? { geo: { \"@type\": \"GeoCoordinates\", latitude: guide.geo.lat, longitude: guide.geo.lon } } : {}),\n\nund fügt dem @graph einen Organization-Knoten hinzu (einmal zentral, am besten in app/layout.tsx statt pro Seite):\n\n  { \"@type\": \"Organization\", \"@id\": absoluteUrl(\"#organization\"), name: \"Descubre Venezuela\", url: absoluteUrl(), logo: absoluteUrl(\"/images/logo.png\"), sameAs: [ /* YouTube-, Instagram-, X-Profile */ ] }\n\nFür `wikidataId` reicht ein neues Feld in StateGuideData; die Items existieren alle (Bolívar = Q46437, Mérida = Q216882 usw. – vor dem Eintragen einzeln auf wikidata.org verifizieren, nicht raten). Google sagt zwar, Structured Data sei für AI-Features nicht nötig – aber `sameAs` löst ein anderes Problem: die eindeutige Entitätszuordnung.",
      "priority": "P0",
      "effort": "M"
    },
    {
      "action": "Generische Platzhalter-FAQs aus dem Schema entfernen",
      "how": "In lib/page-factory.tsx bekommt jede Nicht-Estado-Seite (ciudad, parque-nacional, playa, montana, animal, planta, comida, historia, articulo) denselben FAQPage-Block mit zwei inhaltsleeren Antworten: „Depende de la región, el clima y el tipo de experiencia…\" und „La plataforma conecta estados, ciudades, parques…\". Das ist identischer Boilerplate über hunderte URLs und widerspricht direkt Googles \"Don't just recycle what others on the internet have already said\".\n\nFix: den else-Zweig ersatzlos streichen. Der FAQPage-Knoten wird nur noch ausgegeben, wenn `guide?.faqs.items` existiert:\n\n  ...(guide ? [{ \"@type\": \"FAQPage\", mainEntity: guide.faqs.items.map(...) }] : []),\n\nFAQ-Rich-Results gibt es bei Google seit Mai 2026 ohnehin nicht mehr; der einzige verbleibende Wert des Markups ist die maschinelle Frage-Antwort-Zuordnung – und die ist bei Platzhaltern negativ, weil sie Nichtaussagen als Antworten deklariert. Mittelfristig: echte, ortsspezifische FAQs für die wichtigsten Nicht-Estado-Seiten (Canaima, Los Roques, Pico Bolívar, Médanos de Coro) schreiben.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "Bing Webmaster Tools einrichten und IndexNow anschließen",
      "how": "Ohne Bing-Index existiert die Site weder für ChatGPT-Search noch für Copilot. Drei Schritte:\n\n1. bing.com/webmasters → Site mrsvenezuela.com verifizieren (auf Vercel am einfachsten per DNS-TXT oder via Import aus der Google Search Console). Sitemap https://mrsvenezuela.com/sitemap.xml einreichen.\n\n2. IndexNow-Key: eine Datei public/<32-stelliger-hex-key>.txt anlegen, deren Inhalt exakt der Key ist.\n\n3. Post-Deploy-Ping. Da der Content statisch in TS-Dateien liegt und sich nur bei Deploys ändert, reicht ein npm-Script, das nach dem Build die geänderten URLs meldet:\n\n// scripts/indexnow.mjs\nconst key = process.env.INDEXNOW_KEY;\nconst urlList = [/* aus dem gleichen searchIndex wie sitemap.ts generieren */];\nawait fetch(\"https://api.indexnow.org/indexnow\", {\n  method: \"POST\",\n  headers: { \"Content-Type\": \"application/json; charset=utf-8\" },\n  body: JSON.stringify({ host: \"mrsvenezuela.com\", key, keyLocation: `https://mrsvenezuela.com/${key}.txt`, urlList }),\n});\n\nEinbinden über \"postbuild\": \"node scripts/indexnow.mjs\" in package.json. Wichtig: nur GEÄNDERTE URLs senden, nicht bei jedem Deploy alle – sonst wird der Key gedrosselt. Dafür braucht ihr ohnehin das `updatedAt`-Feld aus der Sitemap-Maßnahme.\n\nDanach: Bing Webmaster Tools → AI Performance (Public Preview seit 11.02.2026) liefert echte Copilot-Zitierdaten pro URL. Das ist eure einzige First-Party-Messung von KI-Zitierungen.",
      "priority": "P0",
      "effort": "M"
    },
    {
      "action": "Sichtbares Aktualisierungsdatum und Autorenzeile in den Guides ausgeben",
      "how": "Antwortmaschinen lesen Datumsangaben aus dem Fließtext, nicht nur aus JSON-LD – und Aktualität ist einer der wenigen breit bestätigten Auswahlfaktoren. In components/content/state-editorial-guide.tsx fehlt beides.\n\nIm Intro-Block (um Zeile 248–252, direkt unter guide.intro.title) einfügen:\n\n<p className=\"mt-3 text-sm text-[#5c6b60]\">\n  Por <a href=\"/sobre-nosotros\">Michell Naranjo</a> · Actualizado el{\" \"}\n  <time dateTime={guide.updatedAt}>\n    {new Date(guide.updatedAt).toLocaleDateString(\"es-VE\", { day: \"numeric\", month: \"long\", year: \"numeric\" })}\n  </time>\n</p>\n\nWICHTIG für dieses Projekt: Der Datumsstring wird von components/i18n/content-translator.tsx zur Laufzeit durch das Katalog-Lookup geschickt. Setzt die Monatsnamen und „Actualizado el\"/\"Por\" als Identitäts- bzw. echte Einträge in den `manual`-Block von content-translator.tsx (wie bereits bei \"Menú\"/\"Estado\"/\"Superficie\" gelöst), sonst wird das Datum zerlegt oder doppelt übersetzt. Das ist genau die Falle, die in eurem Memory-Eintrag zum Übersetzungsskript beschrieben ist.",
      "priority": "P1",
      "effort": "S"
    },
    {
      "action": "Zitierfähige Direktantwort an den Anfang jeder Guide-Sektion setzen",
      "how": "RAG-Retrieval arbeitet auf Passagen, typisch 150–300 Wörter. Eine Antwort, die über drei Absätze verteilt ist, überlebt das Chunking nicht. Eure Sektionen (`know`, `history`, `nature`, `routes`) starten mit `description` als Teaser und dann Prosa.\n\nÄndert in lib/states/types.ts das Muster: pro Sektion ein neues Feld `answer: string` – ein einziger, vollständiger Satzblock von 40–60 Wörtern, der die Sektionsfrage beantwortet, ohne Rückverweis auf vorherige Absätze. Beispiel für bolivar.ts / know:\n\n  answer: \"Bolívar es el estado más extenso de Venezuela con 240.528 km², una cuarta parte del país. Ocupa el sureste, entre el río Orinoco al norte, Brasil al sur y Guyana al este. Su capital es Ciudad Bolívar, la antigua Angostura, y su mayor ciudad es Ciudad Guayana.\"\n\nIn state-editorial-guide.tsx direkt nach der `<h2>` der Sektion rendern, vor den `paragraphs`. Damit steht in jedem Chunk: Überschrift (= Frage) + vollständige Antwort + Zahl. Das entspricht genau dem, was die Princeton-GEO-Studie als wirksam gemessen hat (Statistiken hinzufügen) und was Microsoft in der AI-Performance-Ankündigung empfiehlt (klare Überschriften, Belege).\n\nStartet mit den 5 Bundesstaaten, die die meisten Suchanfragen haben (Bolívar, Mérida, Nueva Esparta, Falcón, Zulia), nicht mit allen 23.",
      "priority": "P1",
      "effort": "L"
    },
    {
      "action": "Fakten-Blöcke als echte Tabelle statt als Div-Grid ausgeben",
      "how": "Der `facts`-Array in lib/states/data/*.ts (Capital, Región, Superficie, Clima, Gentilicio …) ist strukturierte Daten, die derzeit vermutlich als Label/Value-Divs gerendert werden. Tabellen und Definitionslisten sind für Extraktoren eindeutig, ein Div-Grid ist es nicht.\n\nIn components/content/state-editorial-guide.tsx den facts-Block auf `<table>` oder `<dl>` umstellen:\n\n<dl className=\"...\">\n  {guide.know.facts.map((f) => (\n    <div key={f.label}>\n      <dt>{f.label}</dt>\n      <dd>{f.value}</dd>\n    </div>\n  ))}\n</dl>\n\nOptik bleibt über Tailwind identisch, die Semantik wird eindeutig. Gleiches gilt für `routes` (StateRoute mit mode/title/text) – das ist im Kern eine Tabelle „Anreiseart → Beschreibung\".\n\nDie oft zitierte Zahl „Tabellen werden 4,2× häufiger zitiert\" stammt aus einem Anbieter-Blog ohne offengelegte Methodik – der Mechanismus (eindeutige Schlüssel-Wert-Extraktion) ist aber unstrittig, die Änderung kostet nichts und kann nicht schaden.",
      "priority": "P1",
      "effort": "S"
    },
    {
      "action": "Entscheidung zur Mehrsprachigkeit treffen: derzeit sind EN/DE/FR/ZH für jeden Crawler unsichtbar",
      "how": "components/i18n/content-translator.tsx übersetzt das DOM erst im Browser. GPTBot, ClaudeBot, PerplexityBot und OAI-SearchBot führen kein JavaScript aus (Vercel/MERJ, >500 Mio. Fetches, null JS-Ausführung). Ergebnis: Für ALLE KI-Antwortmaschinen existiert mrsvenezuela.com ausschließlich auf Spanisch. Es gibt keine lokalisierten URLs und kein hreflang – der gesamte englische, deutsche, französische und chinesische Content ist für Suche und KI nicht vorhanden.\n\nDrei Optionen, in dieser Reihenfolge zu bewerten:\n\n(a) Bewusst akzeptieren. Spanischsprachige Venezuela-Anfragen sind ein Nischenmarkt mit wenig Konkurrenz – legitime Strategie. Dann aber die Sprachumschaltung nicht als SEO-Feature betrachten und keine Zeit in Katalogpflege für Reichweite investieren.\n\n(b) Nur Englisch serverseitig, als /en/-Segment: app/[lang]/... oder eine parallele Routengruppe, die dieselben Guide-Daten mit einem serverseitigen Übersetzungsdurchlauf rendert. Dann `alternates.languages` in generateMetadataFor ergänzen:\n  alternates: { canonical: path, languages: { \"es-VE\": path, \"en\": `/en${path}`, \"x-default\": path } }\nund die Sitemap um die /en/-URLs erweitern. Aufwand hoch, Ertrag am größten – Englisch ist die Sprache, in der die meisten KI-Reiseanfragen zu Venezuela gestellt werden.\n\n(c) Minimal: nur die 5–8 wichtigsten Guides (Canaima, Los Roques, Salto Ángel, Mérida, Médanos de Coro) als statische englische Seiten mit eigener URL, Rest bleibt clientseitig.\n\nWas ihr NICHT tun solltet: hreflang für Sprachen setzen, die nur clientseitig existieren. Das erzeugt Verweise auf identische URLs und ist wirkungslos bis schädlich.",
      "priority": "P1",
      "effort": "L"
    },
    {
      "action": "Off-Site-Entitätssignale aufbauen: YouTube, Wikipedia/Wikidata, Reddit",
      "how": "In der einzigen großen Korrelationsstudie (Ahrefs, 75.000 Marken, Dez. 2025) sind die drei stärksten Prädiktoren für KI-Sichtbarkeit YouTube-Erwähnungen (~0,737), Branded Web Mentions (0,656–0,709) und Branded Anchors (0,511–0,628) – alle deutlich vor Backlinks (~0,218) und Domain Rating (0,266–0,326). Die Autoren betonen selbst: Korrelation, nicht Kausalität. Trotzdem ist die Richtung eindeutig genug, um Aufwand dorthin zu lenken statt in Linkbuilding.\n\nKonkret, in dieser Reihenfolge:\n1. YouTube: Die Fotostrecken aus public/images/canaima und den Wikimedia-Beständen als kurze Guide-Videos veröffentlichen, Kanalname und Beschreibung konsistent „Descubre Venezuela\", Website-Link in jeder Beschreibung. Höchster gemessener Korrelat, und Reise-Content funktioniert visuell.\n2. Wikidata: Für die Marke selbst gibt es vermutlich kein Item – anlegen (Website, Gründer, Sprache) und in app/layout.tsx per Organization-`sameAs` verknüpfen. Für die Ortsentitäten die bestehenden Items per `sameAs` referenzieren (siehe P0-Maßnahme).\n3. Wikipedia: NICHT selbst Links auf mrsvenezuela.com in Artikel setzen – das ist COI-Editing und fliegt raus. Legitim: hochwertige Commons-Fotos mit korrekter CC-BY-Lizenz und Urheberangabe hochladen (ihr arbeitet ohnehin schon so, siehe StateCredit-Typ), die dann in Artikeln verwendet werden. Erwähnung entsteht über die Dateibeschreibung.\n4. Reddit: r/venezuela, r/travel, r/solotravel. Als Fachbeiträge, nicht als Linkdrops. Reddit ist bei Perplexity die dominante Quelle (~46,5 % der Top-Zitationen) – aber die Anteile sind hochvolatil (bei ChatGPT von ~60 % auf ~10 % innerhalb weniger Wochen im Sept. 2025). Nicht darauf aufbauen, nur mitnehmen.",
      "priority": "P1",
      "effort": "L"
    },
    {
      "action": "Messung aufsetzen: was real messbar ist, sauber von Schätzungen trennen",
      "how": "Vier Ebenen, absteigend nach Verlässlichkeit:\n\n1. Bing Webmaster Tools → AI Performance (echte Zählung). Citations, Average Cited Pages, Grounding Queries, Zitierungen pro URL, seit Juni 2026 zusätzlich Intents/Topics/Citation Share/Compare. Deckt Copilot, Bing-KI-Zusammenfassungen und „select partner integrations\" ab. Das ist die einzige First-Party-Zitiermessung, die euch offensteht.\n\n2. Google Search Console → Search Generative AI performance report (seit 03.06.2026). NUR Impressionen in AI Overviews / AI Mode / Discover-KI, nach Seite/Land/Gerät/Datum. Keine Klicks, keine Queries, Daten ab 18.05.2026, kein Backfill, Rollout schrittweise. Sichtbarkeit ja, Wert nein.\n\n3. Vercel Analytics (ihr habt `@vercel/analytics/next` bereits in app/layout.tsx). Filtert dort auf Referrer `chatgpt.com`, `perplexity.ai`, `claude.ai`, `copilot.microsoft.com`, `gemini.google.com`. Realistische Erwartung: KI-Referrals liegen branchenübergreifend bei ~1 % des Traffics (Spanne 0,1–2,8 %); 35–70 % der KI-Sessions kommen ohne Referrer an und landen in „Direct\". Google-AI-Mode-Klicks tragen `noreferrer` und sind grundsätzlich nicht trennbar.\n\n4. Vercel Log Drains / Edge-Logs für Crawler-Nachweis: Filtert auf `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `ClaudeBot`, `GPTBot`, `Bingbot`. Das beantwortet „werden wir überhaupt abgeholt?\" – die Vorfrage zu jeder Zitierung. Achtung: der OAI-SearchBot-UA beginnt seit 2026 mit einem vollen Chrome-Desktop-String; alte Kurz-Filter greifen nicht mehr. Google-Extended und Applebot-Extended erscheinen NIE in Logs (reine Steuertokens).\n\nMarketing, nicht Realität: „AI Visibility Scores\", „Share of Voice in LLMs\" und Prozentangaben aus Prompt-Stichproben von Drittanbietern. Sie sind Umfragen mit n=einige tausend Prompts, nicht Messungen – nutzbar für Trends, nicht für Reporting.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "404-Rate für KI-Crawler prüfen und app/not-found.tsx absichern",
      "how": "Die Vercel/MERJ-Analyse fand bei ChatGPT-Crawlern 34,82 % 404-Antworten (Claude 34,16 %) gegenüber 8,22 % bei Googlebot – KI-Crawler raten URLs deutlich häufiger. Ihr habt gerade app/not-found.tsx neu angelegt (noch ungetrackt laut Git-Status). Zwei Punkte:\n\n1. Stellt sicher, dass die 404-Seite echten HTTP-Status 404 liefert (bei Next.js App Router über notFound() aus lib/page-factory.tsx gegeben – ihr ruft es korrekt auf) und nicht 200 mit Fehlertext.\n\n2. Nutzt die 404-Seite als Navigationshilfe: Links auf /estados, die 23 Bundesstaaten-Übersicht und die Top-Guides. Ein KI-Crawler, der auf eine geratene URL stößt, findet dann trotzdem den Einstieg.\n\n3. Prüft in den Vercel-Logs, welche URLs KI-Crawler raten. Häufig sind das plausible, aber nicht existierende Muster wie /estado/distrito-capital oder /playa/morrocoy. Wo das Muster inhaltlich sinnvoll ist, legt die Seite an oder setzt einen 301 – jede geratene URL ist ein Signal für eine erwartete Entität, die euch fehlt.",
      "priority": "P2",
      "effort": "S"
    },
    {
      "action": "llms.txt: optional, mit realistischer Erwartung – oder bewusst weglassen",
      "how": "Klare Empfehlung: Es bringt mit hoher Wahrscheinlichkeit nichts. Google nutzt es nicht (Mueller, 02.06.2026: \"none of the AI systems use it\"), Logdaten über >500 Mio. Bot-Events zeigen nur einige hundert Abrufe, und unter den 50 meistzitierten Domains hat genau eine die Datei. Behauptungen, Anthropic oder Perplexity würden sie konsumieren, stammen aus Content-Marketing ohne Primärquelle – beide publizieren eine llms.txt für die eigene Doku, das ist etwas anderes.\n\nWenn ihr sie trotzdem wollt (Kosten: 20 Minuten, Risiko: null), dann als kuratierte Einstiegskarte, nicht als Volltext-Dump. Für eine Reise-Site:\n\n# Descubre Venezuela\n\n> Guía editorial independiente sobre los 23 estados de Venezuela: destinos, naturaleza, gastronomía, historia y cultura. Contenido original en español, publicado por Michell Naranjo.\n\n## Guías de estado\n- [Bolívar](https://mrsvenezuela.com/estado/bolivar): Orinoco, Angostura, Canaima y la Guayana venezolana. 240.528 km².\n- [Mérida](https://mrsvenezuela.com/estado/merida): Andes venezolanos, Pico Bolívar, páramo.\n… (23 Zeilen, je eine Zeile pro Bundesstaat mit einem konkreten Faktum)\n\n## Destinos destacados\n- [Parque Nacional Canaima](…): tepuyes, Salto Ángel, Patrimonio de la Humanidad.\n- [Los Roques](…): archipiélago coralino en el Caribe.\n\n## Optional\n- [Sobre nosotros](https://mrsvenezuela.com/sobre-nosotros)\n\nAls app/llms.txt/route.ts generieren, aus demselben searchIndex wie die Sitemap – sonst veraltet sie sofort. Was ihr NICHT tun solltet: llms-full.txt mit dem kompletten Guide-Text. Das dupliziert euren gesamten Content in eine ungeschützte Textdatei, ohne dass irgendein Abnehmer dokumentiert ist.",
      "priority": "P2",
      "effort": "S"
    },
    {
      "action": "Semantische HTML-Struktur der Guides nachschärfen",
      "how": "components/content/state-editorial-guide.tsx ist bereits ordentlich (`<main>`, `<section id=\"guia-01\">…`, `<article>`, h1/h2/h3-Hierarchie). Drei Restpunkte:\n\n1. Doppelte h1: In Zeile ~224 und ~236 gibt es zwei `<h1>{guide.name}</h1>` (offenbar zwei Hero-Varianten mit/ohne Foto). Wenn beide im DOM landen, hat die Seite zwei h1 mit identischem Text. Prüfen und auf eine reduzieren.\n\n2. Die h1 enthält nur `{guide.name}`, also „Bolívar\". Für Retrieval ist das mehrdeutig (Simón Bolívar, Pico Bolívar, Ciudad Bolívar, Bolívar in Kolumbien/Ecuador). Besser: `Estado Bolívar, Venezuela` als h1-Text oder zumindest als `aria-label`/Title-Ergänzung. Das ist eine echte Entity-Disambiguierung, kein Keyword-Stuffing.\n\n3. Sektions-IDs sind `guia-01` … `guia-09` – für Menschen und Maschinen bedeutungslos. Sprechende IDs (`#historia`, `#naturaleza`, `#como-llegar`, `#consejos`) machen Deep-Links zitierbar; Perplexity und ChatGPT verlinken Fragmente, wenn sie sie finden. components/content/guide-toc.tsx muss dann mitgezogen werden.",
      "priority": "P2",
      "effort": "M"
    },
    {
      "action": "Bilder für multimodale Auswertung nutzbar halten",
      "how": "Ihr habt bereits gute alt-Texte (StatePhoto.alt, z. B. „Pared de un tepuy con una cascada entre la niebla, Parque Nacional Canaima\") und ein StateCredit-Modell mit Lizenz und Quelle – das ist mehr, als die meisten Sites haben, und passt zu eurem Memory-Eintrag zu Commons-Fotos.\n\nZwei Ergänzungen:\n1. ImageObject in das JSON-LD aufnehmen statt nur einer Bild-URL: `image: { \"@type\": \"ImageObject\", url, caption: photo.alt, license, creditText, creator }`. Damit sind Urheber und Lizenz maschinenlesbar – relevant, weil Antwortmaschinen zunehmend Bilder mit Quellenangabe einblenden.\n2. Die Wikimedia-Remote-Bilder aus next.config.ts remotePatterns: prüft, ob sie über den Next-Image-Optimizer laufen (dann liegen sie unter eurer Domain und werden euch zugeordnet) oder direkt eingebettet sind (dann wird Commons zugeordnet). Ersteres ist für die Zuordnung besser.",
      "priority": "P2",
      "effort": "S"
    }
  ],
  "outdated_beliefs": [
    "\"llms.txt ist der neue Standard für KI-Sichtbarkeit\" – falsch. John Mueller am 02.06.2026: \"purely speculative for now\", die Datei existiere seit Jahren, \"yet none of the AI systems use it\". Gary Illyes hatte zuvor bestätigt, dass Google llms.txt nicht unterstützt und es nicht plant. Googles offizieller Optimierungsleitfaden nennt das Anlegen einer llms.txt ausdrücklich unter dem, was man ignorieren kann. Logdaten über >500 Mio. Bot-Events zeigen nur einige hundert Abrufe.",
    "\"Google-Extended blocken schützt vor AI Overviews\" – falsch. Google-Extended steuert ausschließlich Gemini-Training und Grounding in Gemini-Apps sowie Vertex AI. AI Overviews und AI Mode werden über Googlebot gespeist. Wer wirklich aus AI Overviews raus will, braucht `nosnippet`/`max-snippet` – und verliert damit auch klassische Snippets.",
    "\"Alle KI-Crawler blocken schützt den Content\" – gefährlich verkürzt. Training und Retrieval sind entkoppelt: GPTBot ist Training, OAI-SearchBot bringt Zitate in ChatGPT-Search. Wer beide blockt, verhindert nicht das Training (das läuft auch über CCBot und Drittdatensätze), sondern nur die Zitierung. Eine Rutgers/Wharton-Arbeit (31.12.2025) misst bei blockenden Publishern −23,1 % monatliche Besuche.",
    "\"robots.txt hält alle KI-Bots auf\" – nicht für nutzerausgelöste Fetcher. OpenAI dokumentiert für ChatGPT-User: \"Because these actions are initiated by a user, robots.txt rules may not apply.\" Perplexity noch deutlicher für Perplexity-User: \"this fetcher generally ignores robots.txt rules.\" Googles Agent-Fetcher ebenfalls nicht.",
    "\"FAQ-Schema bringt Rich Results\" – seit 07.05.2026 nicht mehr. Google hat FAQ-Rich-Results abgeschafft, im Juni 2026 GSC-Report und Rich-Results-Test entfernt, im August 2026 auch die API-Daten. Das Markup schadet nicht, bringt bei Google aber keine Darstellung mehr. (Bereits seit August 2023 war es auf Behörden- und Gesundheitsseiten beschränkt.)",
    "\"Structured Data ist Voraussetzung für KI-Antworten\" – Google sagt wörtlich das Gegenteil: \"Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add.\" Schema bleibt nützlich für Entitätszuordnung (sameAs) und klassische Rich Results, ist aber kein KI-Eintrittsticket.",
    "\"Content in kleine Chunks zerlegen und für KI umschreiben\" – Google listet genau das unter den Dingen, die man ignorieren kann: kein \"chunking\" in Kleinstteile, kein KI-spezifisches Umschreiben, keine gekauften Erwähnungen. Chunk-freundlich schreiben (Antwort vollständig in einem Absatz) ist sinnvoll; Content künstlich zerhacken nicht.",
    "\"Wer bei Google auf Platz 1 steht, wird auch von KI zitiert\" – die Überlappung bricht ein. Ahrefs (März 2026): nur noch 38 % der AI-Overview-Zitationen aus den Google-Top-10, gegenüber ~76 % Mitte 2025. Zwischen AI Overviews und AI Mode nur 13,7 % URL-Überlappung, zwischen ChatGPT und Googles Top-10 ~6,8 %.",
    "\"Backlinks und Domain Authority treiben KI-Sichtbarkeit\" – in der Ahrefs-Studie über 75.000 Marken korrelieren Backlinks (~0,218) und DR (0,266–0,326) deutlich schwächer als YouTube-Erwähnungen (~0,737) und Branded Web Mentions (0,656–0,709). Kausalität ist nicht belegt, aber die Prioritätenumkehr ist konsistent über ChatGPT, AI Mode und AI Overviews.",
    "\"KI-Traffic ist schon ein relevanter Kanal\" – noch nicht in Klicks. KI-Referrals liegen 2026 bei ~1 % des Web-Traffics (0,1–2,8 % je nach Branche). Der Wert liegt derzeit in Zitierung und Markenpräsenz, nicht in Sessions. Wer GEO über Klick-ROI rechtfertigt, misst das Falsche.",
    "\"Man kann AI-Mode-Traffic in Analytics tracken\" – nein. Google AI Mode setzt `noreferrer`; die Klicks landen in Direct. Der GSC-Gen-AI-Report (seit 03.06.2026) zeigt ausschließlich Impressionen, keine Klicks, keine Queries. GA4s neuer \"AI Assistant\"-Channel (13.05.2026) erfasst nur Sessions MIT Referrer.",
    "\"ChatGPT hat einen eigenen Index, Bing ist egal\" – Bing bleibt 2026 die dokumentierte Retrieval-Schicht für ChatGPT-Search und Copilot. Nicht bei Bing indexiert heißt für beide unsichtbar, unabhängig vom Google-Ranking. (Dass ChatGPT zusätzlich Google-Daten beimischt, zeigen unabhängige Tests – es ersetzt Bing aber nicht.)"
  ],
  "pitfalls": [
    "Sitemap-Selbstsabotage: `lastModified: new Date()` in app/sitemap.ts markiert bei jedem Deploy ALLE ~hundert URLs als heute geändert. Crawler lernen daraus, das Feld zu ignorieren – ihr verliert das einzige Frische-Signal, das ihr steuert, und IndexNow-Pings auf Basis dieser Daten wären reines Rauschen.",
    "Boilerplate-FAQ über hunderte URLs: Der else-Zweig im FAQPage-Schema in lib/page-factory.tsx erzeugt für jede Nicht-Estado-Seite dieselben zwei Nichtantworten. Das ist maschinell trivial als Duplikat erkennbar und widerspricht direkt Googles \"Don't just recycle what others on the internet have already said\".",
    "Client-seitige Übersetzung als Reichweiten-Feature missverstehen: components/i18n/content-translator.tsx läuft erst im Browser. GPTBot, ClaudeBot, PerplexityBot und OAI-SearchBot führen kein JS aus – EN/DE/FR/ZH existieren für sie schlicht nicht. Jede Stunde Katalogpflege zahlt auf UX ein, auf KI-Sichtbarkeit null.",
    "hreflang für nicht existierende URLs setzen: Wenn ihr `alternates.languages` ergänzt, ohne serverseitige /en/-Routen zu haben, verweist ihr auf identische URLs. Das ist wirkungslos bis schädlich. Erst Routen, dann hreflang.",
    "Übersetzungsskript und neue Datums-/Autorenzeilen: Laut eurem eigenen Memory-Eintrag zieht das Skript Phrasen aus dem ganzen Repo, übersetzt Eigennamen falsch und fasst auch CSS-Klassen an. Neue Strings wie „Actualizado el\" oder Monatsnamen MÜSSEN vorher in den `manual`-Block von content-translator.tsx – sonst wird das Datum doppelt übersetzt oder zerlegt (dieselbe Falle wie \"Menú\" → \"Menü\" → \"Speisekarte\").",
    "Zwei h1 pro Guide-Seite: In components/content/state-editorial-guide.tsx stehen zwei `<h1>{guide.name}</h1>` (Zeilen ~224 und ~236, offenbar Hero mit und ohne Foto). Wenn beide im DOM landen, ist die Dokumentstruktur mehrdeutig.",
    "Mehrdeutige Entitätsnamen: h1 „Bolívar\" ohne Kontext kollidiert mit Simón Bolívar, Pico Bolívar, Ciudad Bolívar und Bolívar in Kolumbien/Ecuador. Ohne `sameAs` auf Wikidata und ohne Präzisierung im Titel muss das Modell raten – und Reise-Antworten zu Venezuela laufen dann über andere Quellen.",
    "Log-Filter, die den neuen OAI-SearchBot-UA verpassen: Der User-Agent beginnt seit 2026 mit einem vollen Chrome-Desktop-String (`Mozilla/5.0 (Macintosh; …) Chrome/131… ; compatible; OAI-SearchBot/1.4`). Alte Kurz-Pattern matchen nicht mehr – ihr würdet fälschlich schließen, ChatGPT crawle euch nicht.",
    "In Logs nach Google-Extended oder Applebot-Extended suchen: Beide sind reine robots.txt-Steuertokens ohne eigenen HTTP-User-Agent und erzeugen NIE einen Request. Ihr Fehlen im Log sagt nichts aus.",
    "Perplexity-User oder ChatGPT-User per robots.txt sperren wollen: Beide Anbieter dokumentieren ausdrücklich, dass robots.txt für nutzerausgelöste Fetches nicht bzw. nicht zuverlässig gilt. Ein Disallow erzeugt nur falsche Sicherheit.",
    "Prozentzahlen aus GEO-Anbieter-Blogs als Fakten weitergeben: Werte wie \"Tabellen 4,2× häufiger zitiert\", \"FAQ-Schema +45 %\" oder \"Semantic Completeness r=0,87\" stammen aus Content-Marketing ohne offengelegte Methodik. Die Richtung stimmt oft, die Zahl ist nicht belastbar. Belastbar sind: Princeton GEO (KDD 2024), Ahrefs (75.000 Marken, mit Kausalitäts-Disclaimer), Semrush (230.000 Prompts), Vercel/MERJ (>500 Mio. Fetches).",
    "Auf eine Plattform setzen: Die Semrush-Daten zeigen, wie volatil das ist – ChatGPTs Reddit-Zitierungen fielen Mitte September 2025 innerhalb weniger Wochen von ~60 % auf ~10 %, Wikipedia von ~55 % auf <20 %. Bei Google AI Mode lag Wikipedia im selben Zeitraum bei ~2 %. Es gibt keine Strategie \"für KI\", nur pro Engine.",
    "Wikipedia-Links selbst setzen: Das ist COI-Editing, wird revertiert und kann die Domain in Wikipedias Spam-Blacklist bringen. Der legitime Weg für euch läuft über Commons-Uploads mit korrekter Lizenz und Urheberangabe – ihr habt mit StateCredit bereits die Datenstruktur dafür.",
    "IndexNow bei jedem Deploy mit allen URLs füttern: Führt zur Drosselung des Keys. Nur tatsächlich geänderte URLs senden – was voraussetzt, dass ihr vorher echte `updatedAt`-Daten ins Datenmodell aufnehmt."
  ]
}