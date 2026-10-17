## Faktenprüfung Masterplan-Entwurf — 25.08.2026

Geprüft: 24 überprüfbare Behauptungen (Primärquellen wo möglich; Next.js-Details lokal gegen `node_modules/next@15.5.20`).

---

### A. BESTÄTIGT — unverändert übernehmen

**1. FAQPage-Rich-Results abgeschaltet**
BESTÄTIGT. Google-Doku trägt Deprecation-Hinweis: Feature erscheint seit **7. Mai 2026** nicht mehr, Doku am **15. Juni 2026** entfernt. FAQPage bleibt gültiges schema.org-Vokabular. Der API-Support-Termin „August 2026" ist plausibel (SEJ), aber nur sekundär belegt — im Text als „laut Branchenberichterstattung" kennzeichnen.
https://developers.google.com/search/docs/appearance/structured-data/faqpage

**2. llms.txt / keine KI-Sonderdateien**
BESTÄTIGT, sogar stärker als im Entwurf. Google-Leitfaden wörtlich: „You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities)" und „Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add." Ebenfalls wörtlich bestätigt: „optimizing for generative AI search is optimizing for the search experience, and thus still SEO", „Seeking inauthentic 'mentions' across the web isn't as helpful as it might seem", „There's no requirement to break your content into tiny pieces". Mueller-Zitat verifiziert. **Ergänzung fürs Kapitel 11:** Mueller verweist als Alternative auf **WebMCP** (Google-gestützt) — das gehört als Beobachtungspunkt in den Plan.
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide · https://www.searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/

**3. IndexNow-Teilnehmer**
BESTÄTIGT, exakt. Teilnehmer laut FAQ: **Amazon, Bing, Naver, Seznam.cz, Yandex, Yep**. Google **nicht** dabei. „up to 10,000 URLs per POST request" bestätigt. Ein Endpunkt genügt: „your submission will be shared across all IndexNow-enabled search engines".
https://www.indexnow.org/faq

**4. Google Indexing API**
BESTÄTIGT. Wörtlich: „can only be used to crawl pages with either `JobPosting` or `BroadcastEvent` embedded in a `VideoObject` markup". Default-Quota 200 Publish-Requests/Tag/Projekt. Für normale Seiten unbrauchbar.
https://developers.google.com/search/apis/indexing-api/v3/quota-pricing

**5. OpenAI-Crawler / ChatGPT-User ignoriert robots.txt**
BESTÄTIGT. OpenAI dokumentiert für ChatGPT-User: „Because these actions are initiated by a user, robots.txt rules may not apply." OAI-SearchBot und GPTBot respektieren robots.txt. **Die Log-Falle des Entwurfs ist belegt** — vollständige UA: `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot`. Kurz-Pattern `^OAI-SearchBot` matcht nicht.
https://developers.openai.com/api/docs/bots

**6. Perplexity-User ignoriert robots.txt**
BESTÄTIGT, wörtlich: „Since a user requested the fetch, this fetcher generally ignores robots.txt rules."
https://docs.perplexity.ai/guides/bots

**7. Anthropic-Crawler-Namen**
BESTÄTIGT: ClaudeBot (Training), Claude-User (nutzerausgelöst), Claude-SearchBot (Suche). **Wichtige Korrektur zur Formulierung:** Alle drei respektieren robots.txt — auch Claude-User. Der Satz „nutzerausgelöste Fetches ignorieren robots.txt" gilt nur für OpenAI und Perplexity, nicht für Anthropic. Im Plan entsprechend präzisieren.
https://support.claude.com/en/articles/8896518

**8. Google-Extended und Applebot-Extended = reine Steuertoken**
BESTÄTIGT, wörtlich: „Google-Extended doesn't have a separate HTTP request user agent string … the robots.txt user-agent token is used in a control capacity." Steuert Gemini-Apps/Vertex-AI-Training und -Grounding, nicht Search. AI Overviews/AI Mode laufen über Googlebot: „robots.txt directives for Googlebot is the control for site owners to manage access" plus „There are no additional requirements to appear in AI Overviews or AI Mode." Applebot-Extended ebenso: crawlt selbst nicht.
https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers · https://developers.google.com/search/docs/appearance/ai-features · https://support.apple.com/en-us/119829

**9. Sitemap-Ping abgeschafft**
BESTÄTIGT dem Grunde nach, **Datum präzisieren**: Ankündigung Juni 2023, Abschaltung nach ~6 Monaten; der Endpunkt liefert heute 404. Formulierung „im Juni 2023 abgeschafft" → „im Juni 2023 angekündigt, Ende 2023 abgeschaltet".
https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping

**10. Sitemap: 50.000 URLs / 50 MB, changefreq+priority ignoriert**
BESTÄTIGT, wörtlich beides: „All formats limit a single sitemap to 50MB (uncompressed) or 50,000 URLs" und „Google ignores `<priority>` and `<changefreq>` values." `generateSitemaps` bei ~55 URLs korrekt als Overhead eingestuft.
https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

**11. Illyes zu lastmod**
BESTÄTIGT. Wörtliches Zitat (Bluesky): „probably better off without the lastmods. at least you save a few bytes." Datum 16.07.2026 durch Tagesrückblicke gestützt, aber nur sekundär — als „Sekundärquelle" markieren.
https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html

**12. schema.org-Typprüfung**
BESTÄTIGT per HTTP-Status gegen schema.org: `TravelGuide` **404**, `NationalPark` **404**, `Food` **404**. Vorhanden (200): `Beach`, `Mountain`, `Park`, `State`, `City`, `TouristDestination`, `TouristAttraction`, `AdministrativeArea`, `Guide`. Auch die Versionsangabe stimmt: aktuelle Release ist **V30.0 vom 19.03.2026**.
https://schema.org/docs/releases.html

**13. Image-License-Structured-Data**
BESTÄTIGT: `contentUrl` ist Pflicht, dazu mindestens eines aus `creator` / `creditText` / `copyrightNotice` / `license`; `license` muss eine URL sein. Für das Licensable-Badge ist `license` zwingend. Die Mapping-Tabelle in `lib/schema.ts` ist damit richtig begründet.
https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata

**14. HowTo und Sitelinks-Searchbox**
BESTÄTIGT. HowTo: Ankündigung 08.08.2023, vollständige Entfernung Desktop September 2023. Sitelinks Searchbox / `SearchAction`: ab **21.11.2024** entfernt, Markup ohne Wirkung, erzeugt aber keine GSC-Fehler.
https://developers.google.com/search/blog/2024/10/sitelinks-search-box

**15. Google Business Profile**
BESTÄTIGT: „If your business either has a physical location that customers can visit, or travels to customers where they are, you can create a Business Profile." Reine Online-Angebote sind nicht eligible. Der Ausschluss im Plan ist korrekt.
https://support.google.com/business/answer/3038177

**16. Vercel Preview-Deployments**
BESTÄTIGT, wörtlich: „Vercel adds an `X-Robots-Tag: noindex` HTTP response header to every Preview Deployment automatically" — und die genannte Ausnahme ebenfalls wörtlich: „Vercel omits `X-Robots-Tag: noindex` when a custom domain is assigned to a non-production branch."
https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines

**17. Vercel Account-Webhooks Pro/Enterprise-only**
BESTÄTIGT: „Pro and Enterprise teams will be able to configure these webhooks at the account level." Der GitHub-Action-Umweg für IndexNow ist damit richtig begründet.
https://vercel.com/docs/webhooks

**18. Next.js 15.5.20 API-Details** (lokal gegen `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts` geprüft)
BESTÄTIGT:
- `RobotsFile.rules` akzeptiert Objekt **oder Array** (Zeile 539–553) → der Multi-Regel-Block funktioniert; in der Array-Form ist `userAgent` **Pflicht**.
- Kein `other`-Feld im Typ → Aussage des Entwurfs korrekt.
- `SitemapFile` (Zeile 554–564) unterstützt `alternates.languages`, `images: string[]`, `videos` → beides in 15.5.20 verfügbar. Versionshistorie: Localizations seit **v14.2.0**, `id` als Promise erst **v16.0.0** — die Warnung im Quellenhinweis stimmt.
- `images.minimumCacheTTL` Default **60** und `images.qualities` existieren in 15.5.20 (`node_modules/next/dist/shared/lib/image-config.js`).

**19. Metadata-Vererbung ist flach**
BESTÄTIGT, wörtlich aus der Doku: Metadata-Objekte werden „**shallowly** merged", und „metadata with nested fields such as `openGraph` and `robots` that are defined in an earlier segment are **overwritten** by the last segment to define them." Die These, dass `/estados` und alle Detailseiten `og:site_name`/`og:image` verlieren, ist damit belegt — ebenso, dass `/playas` ohne eigenen Export den Root-Canonical erbt.
https://nextjs.org/docs/app/api-reference/functions/generate-metadata

---

### B. TEILWEISE — Formulierung im Entwurf korrigieren

**20. „In Next 15 ist `themeColor` aus `metadata` entfernt"**
FALSCH in der Sache, richtig im Ergebnis. `themeColor` steht weiterhin im `Metadata`-Typ (Zeile 157), markiert als „**Deprecated**: The `themeColor` option in `metadata` is deprecated **as of Next.js 14**." Es ist deprecated, nicht entfernt. Korrekte Fassung: *„`themeColor`/`colorScheme` sind seit Next 14 in `metadata` deprecated; der separate `viewport`-Export ist der unterstützte Weg."* Empfehlung selbst bleibt unverändert richtig.

**21. Discover: „16:9-Bilder mit mindestens 1200 px"**
Die 1200-px-Breite ist BESTÄTIGT und wörtlich dokumentiert, ebenso „No special tags or structured data are required" und `max-image-preview:large` als Voraussetzung für große Bilder. **Das Seitenverhältnis 16:9 ist nicht dokumentiert** — Google nennt nur „At least 1200 px wide". Als Praxisempfehlung kennzeichnen, nicht als Anforderung.
https://developers.google.com/search/docs/appearance/google-discover

**22. GSC „Search Generative AI"-Report**
Kerndaten BESTÄTIGT: Start **03.06.2026**, Daten ab **18.05.2026**, kein Backfill, nur Impressionen (keine Klicks/CTR/Queries), Abdeckung AI Overviews + AI Mode + Discover-KI. **Fehlender Vorbehalt:** Laut mehreren Sekundärquellen startete der Report zunächst nur für eine **Teilmenge der Property-Inhaber (Rollout in UK)**, globale Ausweitung angekündigt ohne Termin. Die Dringlichkeitsbegründung „jeder Tag ohne verifizierte Property ist unwiederbringlich" bleibt trotzdem gültig (GSC verifizieren lohnt), aber der Plan darf nicht versprechen, dass der Report sofort sichtbar ist.
https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports

**23. Vercel „AI Bot Managed Ruleset"**
Existenz BESTÄTIGT, mit wichtiger Entschärfung: **„The ruleset is inactive by default. In the dashboard this is labeled Allow."** Das Risiko-Szenario ist damit deutlich unwahrscheinlicher als im Entwurf suggeriert — die 5-Minuten-Prüfung bleibt sinnvoll, aber die P0-Dringlichkeitsbegründung („jede GEO-Arbeit wirkungslos") sollte auf „nur relevant, falls jemand das Ruleset aktiv auf Deny gestellt hat" abgeschwächt werden. **Die Behauptung „auf allen Plänen verfügbar" ist UNBELEGT** — die Doku macht keine Planangabe.
https://vercel.com/docs/bot-management

**24. Bing WMT AI Performance**
Metriken und Abdeckung BESTÄTIGT (Total Citations, Average Cited Pages, Grounding Queries, Zitierungen pro URL; Copilot, Bing-KI-Zusammenfassungen, „select partner integrations"). **Datum korrigieren: 10.02.2026**, nicht 11.02. Die Zusatzbehauptung „seit Juni 2026 Intents/Topics/Citation Share/Compare" konnte ich **nicht belegen** — entweder Quelle nachliefern oder streichen.
https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview

**25. Discover Core Update Februar 2026**
Existenz BESTÄTIGT: gestartet **05.02.2026**, abgeschlossen **27.02.2026**, erstes reines Discover-Update überhaupt. **Fehlender, für diese Site relevanter Vorbehalt:** Das Update betraf zunächst **nur englischsprachige Nutzer in den USA**, Ausweitung auf weitere Länder/Sprachen angekündigt. Für eine spanischsprachige Site ist die Wirkung damit noch offen — die Ableitung „E-E-A-T ist seit Februar 2026 Eligibility-Schwelle" ist doppelt unsicher (Zielbeschreibung + geografischer Geltungsbereich).
https://searchengineland.com/google-february-2026-discover-core-update-is-now-complete-469450

---

### C. UNBELEGT — nicht als Fakt stehen lassen

**26. „GSC-Kontingent ~10–12 URLs/Tag"** — UNBELEGT als Zahl. Google veröffentlicht keinen Wert; alle Angaben sind Praxisschätzungen. Bestätigt ist nur: es gibt ein Kontingent, es hängt an der Property, wiederholtes Beantragen derselben URL bringt nichts. Die Kennzeichnung „*wahrscheinlich*" im Entwurf ist damit korrekt und muss bleiben.

**27. Nicht primär prüfbar, im Entwurf bereits gehedgt — Hedging beibehalten und nicht abschwächen:** Similarweb „~23 % Travel-Zitierrate", Princeton/IIT-Delhi „22–41 %" und „+41 % PAWC", Ahrefs-Korrelationen (0,737 / 0,656 / 0,266), Vercel/MERJ „ClaudeBot lädt JS in 23,84 %", „ChatGPT-Crawler 34,82 % 404 vs. Googlebot 8,22 %", Pinterest „2,31 % Conversion", YouTube „94 % der KI-Zitate Long-form", Reuters „−33 % organischer Traffic", Ahrefs-Keyword-Volumina für `mount roraima` etc.

**28. Neu als UNBELEGT einzustufen:** die Bing-WMT-Juni-2026-Erweiterung (siehe 24) und die Verfügbarkeit des Vercel-AI-Rulesets „auf allen Plänen" (siehe 23).

---

### Empfohlene Änderungen am Entwurf (konkret)

1. Abschnitt 2.3 / 2.5: `themeColor` → „seit Next 14 deprecated", nicht „entfernt".
2. Abschnitt 2.5: Satz zu nutzerausgelösten Fetches auf OpenAI und Perplexity begrenzen; Claude-User ausdrücklich ausnehmen.
3. Abschnitt 2.7 / 9: Vorbehalt ergänzen, dass der GSC-Gen-AI-Report anfangs nur für eine Teilmenge der Properties ausgerollt wurde.
4. Abschnitt 7.3: Vercel-AI-Ruleset von P0-Dringlichkeit auf „Kurzcheck, Default ist Allow" herabstufen; „auf allen Plänen" streichen.
5. Abschnitt 8.1: „16:9" als Empfehlung kennzeichnen; dokumentiert ist nur ≥1200 px Breite.
6. Abschnitt 8.1: Beim Februar-2026-Discover-Update ergänzen, dass der Rollout zunächst US/Englisch war.
7. Abschnitt 11: „Juni 2023 abgeschafft" → „Juni 2023 angekündigt, Ende 2023 abgeschaltet (Endpunkt liefert 404)".
8. Abschnitt 9/Quellen: Bing-AI-Performance-Datum auf 10.02.2026 korrigieren; die Juni-2026-Erweiterung belegen oder streichen.
9. Abschnitt 11 (llms.txt): WebMCP als von Google favorisierte Alternative aufnehmen — das ist der einzige inhaltlich neue Punkt, den die Recherche gegenüber dem Entwurf ergibt.

**Kein einziger der geprüften P0-Befunde des Entwurfs (Canonical-Vererbung, FAQ-Fallback-Policy-Risiko, `TravelGuide` 404, lastmod, `NationalPark`/`Food` 404, Metadata-Shallow-Merge) hat sich als falsch erwiesen.** Die Fehler liegen ausschließlich in Nebendetails und in der Dringlichkeitsbewertung zweier Punkte.