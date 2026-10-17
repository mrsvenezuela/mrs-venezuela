{
  "topic": "Indexierung & Webmaster-Tools für mrsvenezuela.com (Next.js 15 / Vercel) – Stand August 2026",
  "summary": "Für mrsvenezuela.com ist eine GSC-**Domain-Property** (nur DNS-TXT, deckt apex+www+alle Protokolle) der richtige Weg; der TXT-Record gehört in die Vercel-DNS-Zone, sofern die Domain Vercel-Nameserver nutzt. Preview-Deployments sind bei Vercel per Default durch `X-Robots-Tag: noindex` geschützt – die einzige Lücke sind Custom-Domains auf Nicht-Produktions-Branches. Bing/Copilot deckt man über Bing Webmaster Tools (Import aus GSC, autoverifiziert) plus IndexNow ab; IndexNow ist in diesem Repo mit einer Key-Datei unter `public/<key>.txt` und einem GitHub-Action-Skript nach `git push` auf `main` umsetzbar (Vercel-Account-Webhooks sind Pro/Enterprise-only). Google nimmt an IndexNow nicht teil, und die Google Indexing API bleibt auf JobPosting/BroadcastEvent beschränkt. WICHTIG vor allen Einreichungen: `app/playas/page.tsx` ist eine `\"use client\"`-Datei ohne eigenen `metadata`-Export und erbt daher `alternates.canonical: \"/\"` aus `app/layout.tsx` – die Seite kanonisiert sich selbst auf die Startseite und wird von Google nicht indexiert. Außerdem ignoriert Google `changeFrequency`/`priority` in `app/sitemap.ts`, und das dortige `lastModified: new Date()` erzeugt bei jedem Build ein unglaubwürdiges lastmod, das Google entwertet.",
  "key_points": [
    {
      "claim": "Eine GSC-Domain-Property umfasst alle Subdomains (www, m, …) und alle Protokolle (http/https) und lässt sich AUSSCHLIESSLICH per DNS-Record verifizieren; eine URL-Präfix-Property deckt nur genau ein Protokoll+Host+Pfad ab, erlaubt dafür HTML-Datei, Meta-Tag, Analytics, Tag Manager und DNS.",
      "why_it_matters": "Für mrsvenezuela.com genügt eine einzige Domain-Property: apex und www landen zusammen in einer Property, kein Datensplit. Da die Domain über Vercel läuft, ist DNS-Zugriff vorhanden – die Einschränkung 'nur DNS' ist also kein Problem.",
      "source_url": "https://support.google.com/webmasters/answer/34592?hl=en",
      "confidence": "belegt",
      "date_or_version": "Google Search Console Hilfe, abgerufen 08/2026"
    },
    {
      "claim": "DNS-Records für eine Vercel-Domain werden im Team-Dashboard unter Sidebar 'Domains' → Domain anklicken → Advanced Settings verwaltet (Felder: Name / Type / Value / TTL 60 / Comment). Voraussetzung: die Domain nutzt Vercel-Nameserver; bei Fremd-DNS (nur A/CNAME auf Vercel) muss der TXT beim Registrar rein. Änderungen können bis zu 24 h brauchen.",
      "why_it_matters": "Genauer Klickpfad für den google-site-verification-TXT. Für einen apex-TXT bleibt das Feld 'Name' leer (Name = Prefix, für www.example.com wäre es 'www').",
      "source_url": "https://vercel.com/docs/domains/managing-dns-records",
      "confidence": "belegt",
      "date_or_version": "Vercel Docs, last_updated 2026-02-27"
    },
    {
      "claim": "Vercel setzt auf JEDES Preview-Deployment (Nicht-Produktions-Branch) automatisch den Header `X-Robots-Tag: noindex`. Ebenso bekommt das vorherige Produktions-Deployment beim Promoten automatisch noindex. Ausnahme: sobald einem Nicht-Produktions-Branch eine Custom-Domain zugewiesen ist, lässt Vercel den Header WEG.",
      "why_it_matters": "Solange nur `*.vercel.app`-Preview-URLs existieren, ist nichts zu tun. Sobald jemand z. B. `staging.mrsvenezuela.com` an einen Branch hängt, ist die Preview-Umgebung indexierbar und konkurriert mit der Produktion.",
      "source_url": "https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines",
      "confidence": "belegt",
      "date_or_version": "Vercel KB, Stand 2026"
    },
    {
      "claim": "Deployment Protection mit 'Vercel Authentication' + 'Standard Protection' ist auf ALLEN Plänen inklusive Hobby verfügbar und schützt alle Deployments außer den Produktions-Domains. Pfad: Projekt → Settings → Deployment Protection.",
      "why_it_matters": "Das ist die einzige Variante, die Previews nicht nur per Header 'bittet' nicht zu indexieren, sondern Crawler technisch aussperrt (401/Login). Für mrsvenezuela.com die sauberste Absicherung, kostet nichts.",
      "source_url": "https://vercel.com/docs/deployment-protection",
      "confidence": "belegt",
      "date_or_version": "Vercel Docs, last_updated 2026-07-30"
    },
    {
      "claim": "Google ignoriert `<priority>` und `<changefreq>` in Sitemaps vollständig. `<lastmod>` wird nur verwendet, wenn der Wert 'konsistent und nachweislich korrekt' ist und eine inhaltlich signifikante Änderung markiert. Limits: 50.000 URLs bzw. 50 MB unkomprimiert pro Sitemap. Einreichung: Search Console Sitemaps-Report, Search Console API, robots.txt-Zeile, WebSub.",
      "why_it_matters": "`app/sitemap.ts` setzt für jede der ~200+ URLs `changeFrequency` und `priority` (wirkungslos) und `lastModified: new Date()` – letzteres bedeutet: bei jedem Deploy behaupten alle Seiten, gerade geändert worden zu sein. Google erkennt das als unzuverlässig und entwertet lastmod für die ganze Site.",
      "source_url": "https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap",
      "confidence": "belegt",
      "date_or_version": "Google Search Central Docs, abgerufen 08/2026"
    },
    {
      "claim": "Der Google-Sitemap-Ping-Endpunkt (`google.com/ping?sitemap=`) wurde im Juni 2023 abgeschafft. Es gibt keinen HTTP-Ping mehr, mit dem man Google eine aktualisierte Sitemap melden könnte – nur GSC-Sitemaps-Report, Search Console API oder die robots.txt-Referenz.",
      "why_it_matters": "Ein 'Sitemap-Ping nach dem Deploy' ist für Google tote Technik. Nur IndexNow (Bing & Co.) bietet dieses Muster 2026 noch.",
      "source_url": "https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping",
      "confidence": "belegt",
      "date_or_version": "Google Search Central Blog, Juni 2023"
    },
    {
      "claim": "'Indexierung beantragen' in der URL-Prüfung hat ein tägliches, von Google NICHT offiziell beziffertes Kontingent; Community-/Praxiswerte liegen bei ca. 10–12 URLs pro Tag und Property in einem rollierenden 24-h-Fenster. Das Limit hängt an der Property, nicht am Nutzerkonto – Browser- oder Kontowechsel hilft nicht. Google sagt ausdrücklich: 'Submitting a request does not guarantee that the page will appear in the Google Index' und verweist für Massen-Einreichung auf Sitemaps.",
      "why_it_matters": "Die ~200+ Detailseiten dieser Site lassen sich NICHT einzeln per Request-Indexing einreichen. Die Funktion ist nur für 5–10 strategische Seiten sinnvoll (Startseite, /estados, /playas, 2–3 Top-Guides).",
      "source_url": "https://support.google.com/webmasters/answer/9012289?hl=en",
      "confidence": "wahrscheinlich",
      "date_or_version": "GSC-Hilfe (Limit unspezifiziert) + Praxisberichte 2026"
    },
    {
      "claim": "IndexNow: Key ist 8–128 Zeichen aus a-z, A-Z, 0-9 und Bindestrich. Die Key-Datei `<key>.txt` (UTF-8, Inhalt = der Key) muss im Root erreichbar sein. GET-Form: `https://<endpoint>/indexnow?url=…&key=…&keyLocation=…`. POST-Form: JSON `{host, key, keyLocation, urlList}` mit bis zu 10.000 URLs. Antwortcodes: 200 OK, 202 Key-Prüfung ausstehend, 400 Format, 403 Key ungültig, 422 URL gehört nicht zum Host, 429 zu viele Anfragen (Retry-After beachten).",
      "why_it_matters": "Konkrete Implementierungsvorgaben. Für dieses Repo heißt das: Datei nach `public/<key>.txt`, dann ist sie automatisch unter https://mrsvenezuela.com/<key>.txt live – kein Route Handler nötig.",
      "source_url": "https://www.indexnow.org/documentation",
      "confidence": "belegt",
      "date_or_version": "indexnow.org Documentation, abgerufen 08/2026"
    },
    {
      "claim": "Teilnehmende IndexNow-Endpunkte 2026: api.indexnow.org/indexnow, www.bing.com/indexnow, yandex.com/indexnow, searchadvisor.naver.com/indexnow, search.seznam.cz/indexnow, indexnow.yep.com/indexnow, indexnow.amazonbot.amazon/indexnow. Man reicht bei GENAU EINEM Endpunkt ein – die Meldung wird an alle teilnehmenden Engines weitergegeben. Dieselbe URL soll nicht mehrfach täglich ohne echte Inhaltsänderung gemeldet werden; mindestens 5 Minuten zwischen Resubmits.",
      "why_it_matters": "Ein einziger POST an api.indexnow.org reicht – kein Fan-out nötig, keine separaten Yandex-/Naver-/Seznam-Accounts. Reduziert das Skript auf ~30 Zeilen.",
      "source_url": "https://www.indexnow.org/faq",
      "confidence": "belegt",
      "date_or_version": "indexnow.org FAQ, abgerufen 08/2026"
    },
    {
      "claim": "Google nimmt an IndexNow NICHT teil (Stand 2026), obwohl seit Oktober 2021 'getestet' wird. Die Google Indexing API bleibt offiziell auf `JobPosting` und `BroadcastEvent` (in einem VideoObject) beschränkt; andere Inhaltstypen werden ignoriert, und Kontingenterhöhungen setzen die passenden strukturierten Daten voraus.",
      "why_it_matters": "Für eine Reise-/Tourismus-Site gibt es keinen legitimen API-Weg, Google schneller zu benachrichtigen. Alle 'Instant Indexing für Google'-Angebote sind entweder Missbrauch der Indexing API oder Scheinleistung.",
      "source_url": "https://developers.google.com/search/apis/indexing-api/v3/quota-pricing",
      "confidence": "belegt",
      "date_or_version": "Google Indexing API Docs, 2026"
    },
    {
      "claim": "Bing Webmaster Tools erlaubt die Verifizierung per Import aus Google Search Console (importierte Sites gelten sofort als verifiziert, mehrere GSC-Konten möglich); alternativ XML-Datei, Meta-Tag oder DNS/CNAME. Der IndexNow-/URL-Submission-API-Key liegt unter Settings → API Access → API Key (ein Key pro Nutzer, gilt für alle verifizierten Sites).",
      "why_it_matters": "Schnellster Weg: erst GSC verifizieren, dann Bing per Import in ~60 Sekunden dazu. Der dort erzeugte Key kann direkt als IndexNow-Key verwendet werden.",
      "source_url": "https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools",
      "confidence": "belegt",
      "date_or_version": "Bing Webmaster Blog + Bing Docs, aktuell 2026"
    },
    {
      "claim": "Bing gewährt neuen/unverifizierten Projekten zunächst ein reduziertes URL-Submission-Kontingent (Größenordnung 100/Tag); nach Bewertung der Submission-Qualität steigt es auf den Standard von bis zu 10.000 URLs pro Domain und Tag (Reset täglich 00:00 UTC).",
      "why_it_matters": "Die ~200+ URLs der Site passen selbst ins Anfangskontingent nicht am ersten Tag, wohl aber innerhalb weniger Tage – bzw. sofort per IndexNow-POST, der nicht dasselbe Kontingent verbraucht.",
      "source_url": "https://blogs.bing.com/webmaster/september-2021/Access-to-Instant-Indexing-%C2%A0Bing%C2%A0URL-submission-API",
      "confidence": "wahrscheinlich",
      "date_or_version": "Bing Blog 2021 + Sekundärquellen 2026; Bing publiziert die exakten Zahlen nicht mehr"
    },
    {
      "claim": "Bing bleibt 2026 die Retrieval-Schicht für Microsoft Copilot und speist weiterhin ChatGPT Search mit; OpenAI betreibt aber zusätzlich eigene Crawler (u. a. `OAI-SearchBot`) und einen eigenen Index. Die Abhängigkeit ist gelockert, nicht aufgehoben. OpenAI-Crawler rendern kein JavaScript.",
      "why_it_matters": "Zwei Konsequenzen für dieses Projekt: (1) Bing-Indexierung ist Pflicht, nicht Kür. (2) Die client-seitige Übersetzung über `components/i18n/content-translator.tsx` ist für JS-lose KI-Crawler unsichtbar – sie sehen ausschließlich das spanische Server-HTML.",
      "source_url": "https://platform.openai.com/docs/bots",
      "confidence": "wahrscheinlich",
      "date_or_version": "OpenAI-Crawler-Doku Stand 2026 + Sekundäranalysen 03–05/2026"
    },
    {
      "claim": "Google hat am 3. Juni 2026 'Search Generative AI performance reports' in der Search Console eingeführt (Impressionen in AI Overviews und AI Mode, plus Discover; Dimensionen: Impressions, Pages, Countries, Devices, Dates). Rollout zunächst nur für eine Teilmenge von Sites (Start UK), globale Ausweitung folgt.",
      "why_it_matters": "Ein weiterer Grund, die GSC-Property JETZT einzurichten: die Berichte zeigen nur Daten ab Verifizierung. Ohne Property gibt es keine historische Nacherfassung.",
      "source_url": "https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports",
      "confidence": "belegt",
      "date_or_version": "Google Search Central Blog, 03.06.2026"
    },
    {
      "claim": "Vercel Account-Webhooks (u. a. Events 'Deployment Succeeded' und 'Deployment Promoted', bis zu 20 Webhooks pro Team, Signatur via `x-vercel-signature`) sind nur für Pro- und Enterprise-Teams konfigurierbar (Team Settings → Webhooks).",
      "why_it_matters": "Auf einem Hobby-Plan gibt es KEINEN Vercel-Post-Deploy-Webhook für IndexNow. Der Trigger muss stattdessen aus GitHub kommen (Action bei push auf main) oder aus einem `postbuild`-npm-Skript.",
      "source_url": "https://vercel.com/docs/webhooks",
      "confidence": "belegt",
      "date_or_version": "Vercel Docs, last_updated 2026-06-16"
    }
  ],
  "actions": [
    {
      "action": "BLOCKER zuerst fixen: falscher Canonical auf /playas – sonst ist jede Einreichung wirkungslos",
      "how": "`app/playas/page.tsx` beginnt mit `\"use client\";` und hat KEINEN `export const metadata`. Dadurch greift die Vererbung aus `app/layout.tsx` (Zeilen 32-34: `alternates: { canonical: \"/\" }`), und /playas liefert `<link rel=\"canonical\" href=\"https://mrsvenezuela.com/\">` → Google indexiert die Seite nicht, sondern faltet sie auf die Startseite. Fix: Client-Teil in `components/sections/…` bzw. eine `playas-content.tsx` auslagern und `app/playas/page.tsx` als Server Component mit `export const metadata: Metadata = { title: \"…\", description: \"…\", alternates: { canonical: \"/playas\" } }` neu anlegen (Muster: `app/estados/page.tsx` Zeilen 30-45). Danach für JEDE Route prüfen: `curl -s https://mrsvenezuela.com/<pfad> | grep -o '<link rel=\"canonical\"[^>]*>'` muss den eigenen Pfad zeigen. Ebenso prüfen: `app/contacto/page.tsx` und `app/sobre-nosotros/page.tsx` (haben laut grep eigene Canonicals – ok), `app/page.tsx` (kein eigener metadata-Export, erbt `/` – korrekt).",
      "priority": "P0",
      "effort": "M"
    },
    {
      "action": "Google Search Console: Domain-Property anlegen und per DNS-TXT in Vercel verifizieren",
      "how": "1) https://search.google.com/search-console öffnen → Property-Auswahl oben links → '+ Eigenschaft hinzufügen' → linke Kachel **Domain** wählen → `mrsvenezuela.com` eintragen (OHNE https://, OHNE www, ohne Pfad) → Weiter. 2) Google zeigt einen TXT-Wert `google-site-verification=…` – kopieren. 3) Vercel-Dashboard → Team-Dashboard → Sidebar **Domains** → `mrsvenezuela.com` anklicken → Advanced Settings → DNS-Record-Formular: **Name** leer lassen (Apex), **Type** `TXT`, **Value** = der komplette kopierte String, **TTL** 60 → **Add**. 4) Prüfen: `dig TXT mrsvenezuela.com +short` (bzw. `nslookup -type=TXT mrsvenezuela.com`) muss den Wert zeigen. 5) In GSC auf **Verifizieren** klicken – meist sofort, laut Vercel-Doku bis zu 24 h. ACHTUNG: Punkt 3 funktioniert nur, wenn die Domain Vercel-Nameserver (`ns1.vercel-dns.com` etc.) nutzt – prüfen mit `dig NS mrsvenezuela.com +short`. Falls dort ein Fremdregistrar steht, muss der TXT-Record dort eingetragen werden. Den Verifizierungs-TXT NIE später löschen, sonst verliert man die Property.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "Sitemap in GSC einreichen und app/sitemap.ts bereinigen",
      "how": "Einreichen: GSC → linke Sidebar **Indexierung → Sitemaps** → Feld 'Neue Sitemap hinzufügen' → `sitemap.xml` eintragen → **SENDEN**. Danach Status 'Erfolgreich' und 'Erkannte URLs' kontrollieren. Bereinigung in `C:/Users/User/Desktop/descubre-venezuela/app/sitemap.ts`: (a) `changeFrequency` und `priority` aus allen Einträgen entfernen – Google ignoriert beide. (b) `lastModified: new Date()` ersetzen: entweder ganz weglassen oder ein echtes Änderungsdatum pro Eintrag pflegen (z. B. Feld `updatedAt` in `lib/content.ts` / `lib/states/data/*.ts`, Fallback auf ein fixes Site-Launch-Datum). Ein bei jedem Build neu gesetztes `new Date()` macht lastmod unglaubwürdig, und Google entwertet es dann site-weit. (c) Neu hinzugekommene Routen ergänzen – `app/estados/` ist bereits drin, aber prüfen, ob alle 23 Estado-Slugs aus `lib/states/` tatsächlich in `searchIndex` mit `kind: \"estado\"` stehen: `curl -s https://mrsvenezuela.com/sitemap.xml | grep -c '<loc>'` gegen die erwartete Anzahl gegenrechnen.",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "Bing Webmaster Tools einrichten – per Import aus GSC",
      "how": "1) https://www.bing.com/webmasters öffnen, mit Microsoft-Konto anmelden. 2) Auf der Startseite die Kachel **Import from Google Search Console** → **Continue** → mit demselben Google-Konto anmelden, das die GSC-Property besitzt → Berechtigungen bestätigen → `mrsvenezuela.com` in der Liste auswählen → **Import**. Die Site ist damit ohne separate Verifizierung verifiziert und Sitemaps werden mitübernommen. 3) Falls der Import scheitert: manuell **Add site** → `https://mrsvenezuela.com` → Verifizierung per **DNS/CNAME** – TXT/CNAME analog zu Schritt 2 im Vercel-DNS anlegen. 4) In Bing: **Sitemaps** → `https://mrsvenezuela.com/sitemap.xml` einreichen. 5) **URL Submission** für die 10 wichtigsten Seiten nutzen (Startseite, /estados, /playas, Top-Estado-Guides). Neue Konten starten oft mit reduziertem Kontingent (~100/Tag), Standard sind bis zu 10.000/Tag pro Domain (Reset 00:00 UTC).",
      "priority": "P0",
      "effort": "S"
    },
    {
      "action": "IndexNow-Key-Datei ins Repo legen",
      "how": "1) Key holen: Bing Webmaster Tools → **Settings → API Access → API Key → Generate API Key** (ein Key pro Nutzer, gilt für alle verifizierten Sites). Alternativ selbst erzeugen, z. B. `node -e \"console.log(require('crypto').randomBytes(16).toString('hex'))\"` – erlaubt sind 8–128 Zeichen aus [a-zA-Z0-9-]. 2) Datei anlegen: `C:/Users/User/Desktop/descubre-venezuela/public/<KEY>.txt`, Inhalt = exakt der Key, UTF-8, ohne BOM, ohne abschließende Leerzeile ist am sichersten. Da `public/` in Next.js direkt vom Root aus ausgeliefert wird, ist sie nach dem Deploy unter `https://mrsvenezuela.com/<KEY>.txt` erreichbar – KEIN Route Handler nötig. 3) Denselben Key zusätzlich als Vercel-Env-Var `INDEXNOW_KEY` und als GitHub-Secret hinterlegen (Repo → Settings → Secrets and variables → Actions → New repository secret). 4) Nach dem Deploy verifizieren: `curl -s https://mrsvenezuela.com/<KEY>.txt` muss den Key im Klartext zurückgeben mit HTTP 200 und Content-Type text/plain.",
      "priority": "P1",
      "effort": "S"
    },
    {
      "action": "IndexNow-Submit-Skript + GitHub Action nach push auf main",
      "how": "Skript `C:/Users/User/Desktop/descubre-venezuela/scripts/indexnow.mjs`:\n```js\nconst KEY = process.env.INDEXNOW_KEY;\nconst HOST = 'mrsvenezuela.com';\nif (!KEY) { console.log('kein INDEXNOW_KEY – übersprungen'); process.exit(0); }\nconst xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();\nconst all = [...xml.matchAll(/<loc>([^<]+)<\\/loc>/g)].map(m => m[1]);\nconst arg = process.argv[2];            // optional: Datei mit URL-Liste\nconst urlList = arg\n  ? (await import('node:fs')).readFileSync(arg,'utf8').split('\\n').filter(Boolean)\n  : all;\nfor (let i = 0; i < urlList.length; i += 10000) {\n  const body = { host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList: urlList.slice(i, i+10000) };\n  const res = await fetch('https://api.indexnow.org/indexnow', {\n    method: 'POST',\n    headers: { 'Content-Type': 'application/json; charset=utf-8' },\n    body: JSON.stringify(body),\n  });\n  console.log(res.status, res.status === 429 ? res.headers.get('retry-after') : '');\n}\n```\nGitHub Action `.github/workflows/indexnow.yml` – Trigger, weil Vercel-Account-Webhooks Pro/Enterprise-only sind:\n```yaml\nname: IndexNow\non:\n  push:\n    branches: [main]\n  workflow_dispatch:\njobs:\n  ping:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - run: sleep 180        # Vercel-Deploy abwarten\n      - uses: actions/setup-node@v4\n        with: { node-version: 22 }\n      - run: node scripts/indexnow.mjs\n        env:\n          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}\n```\nErster Lauf: alle Sitemap-URLs. Danach besser nur geänderte melden – die Slugs aus dem Diff ableiten, z. B. `git diff --name-only HEAD~1 HEAD -- lib/states/data lib/content.ts` und daraus `https://mrsvenezuela.com/estado/<slug>` bauen. Nur EIN Endpunkt anpingen (api.indexnow.org) – die Meldung wird an Bing, Yandex, Naver, Seznam, Yep und Amazon weitergereicht.",
      "priority": "P1",
      "effort": "M"
    },
    {
      "action": "Preview-Deployments verifiziert aus dem Index halten",
      "how": "1) Ist-Zustand prüfen: `curl -sI https://<projekt>-<hash>.vercel.app | findstr /I x-robots-tag` (PowerShell) bzw. `curl -sI … | grep -i x-robots-tag` – erwartet wird `x-robots-tag: noindex`. Das setzt Vercel per Default für jeden Nicht-Produktions-Branch. 2) Härtung ohne Kosten: Vercel-Dashboard → Projekt → **Settings → Deployment Protection** → Methode **Vercel Authentication**, Scope **Standard Protection**. Damit sind alle Preview-/Deployment-URLs hinter Login, Produktion bleibt öffentlich; auf Hobby verfügbar. 3) NUR falls jemals eine Custom-Domain an einen Nicht-Produktions-Branch gehängt wird (z. B. staging.mrsvenezuela.com), lässt Vercel den noindex-Header weg – dann in `C:/Users/User/Desktop/descubre-venezuela/next.config.ts` ergänzen:\n```ts\nasync headers() {\n  if (process.env.VERCEL_ENV !== 'preview') return [];\n  return [{ source: '/:path*', headers: [{ key: 'X-Robots-Tag', value: 'noindex' }] }];\n}\n```\n4) Kein Handlungsbedarf bei den Canonicals: `absoluteUrl()` in `lib/utils.ts` ist hart auf `https://mrsvenezuela.com` verdrahtet, also zeigen auch Preview-Builds ihre Canonicals auf die Produktion – das ist hier genau richtig. 5) Keine GSC-Property für *.vercel.app anlegen; eine Domain-Property für `vercel.app` ist ohnehin nicht möglich und wird nicht gebraucht.",
      "priority": "P1",
      "effort": "S"
    },
    {
      "action": "Gezielt 'Indexierung beantragen' – aber nur für eine Handvoll Seiten",
      "how": "GSC → oberes Suchfeld ('Beliebige URL in … prüfen') → vollständige URL einfügen → Enter → nach der Live-Prüfung auf **INDEXIERUNG BEANTRAGEN** klicken. Nur für: `https://mrsvenezuela.com/`, `/estados`, `/playas`, `/sobre-nosotros` und 2–3 starke Guides (z. B. `/parque-nacional/canaima`, `/estado/merida`, `/playa/los-roques`). Das Kontingent liegt praktisch bei ~10–12 URLs pro Tag und Property (rollierendes 24-h-Fenster, hängt an der Property, nicht am Nutzer); Google beziffert es nicht offiziell und garantiert keine Indexierung. Für die restlichen ~200 URLs ist ausschließlich die Sitemap der Weg. Vorher immer 'URL ist auf Google verfügbar / Seite kann indexiert werden' im Live-Test kontrollieren – bei /playas wird das vor dem Canonical-Fix als 'Alternative Seite mit richtigem kanonischen Tag' scheitern.",
      "priority": "P1",
      "effort": "S"
    },
    {
      "action": "Weitere Suchmaschinen bewusst NICHT einzeln bespielen",
      "how": "Yandex Webmaster (RU), Naver Search Advisor (KR) und Seznam Webmaster (CZ) sind für eine spanischsprachige Venezuela-Reise-Site ohne messbaren Traffic-Beitrag. Sie erhalten die URLs bereits automatisch über den einen IndexNow-POST an api.indexnow.org – separate Konten und Verifizierungen lohnen den Aufwand nicht. Ebenso: die Google Indexing API (`indexing.googleapis.com/v3/urlNotifications:publish`) NICHT einrichten – sie ist offiziell auf `JobPosting` und `BroadcastEvent` beschränkt, für alle anderen Inhalte werden Requests ignoriert, und Kontingenterhöhungen setzen die passenden strukturierten Daten voraus. DuckDuckGo und Ecosia brauchen keine eigene Einreichung, sie beziehen den Bing-Index.",
      "priority": "P2",
      "effort": "S"
    },
    {
      "action": "Mehrsprachigkeit ist für Suchmaschinen aktuell unsichtbar – bewusst entscheiden",
      "how": "`components/i18n/content-translator.tsx` übersetzt das DOM zur Laufzeit; `app/layout.tsx` liefert fest `<html lang=\"es\">`, es gibt keine lokalisierten URLs und kein `alternates.languages`/hreflang. Konsequenz: Google und erst recht die JS-losen KI-Crawler (u. a. OAI-SearchBot) indexieren ausschließlich die spanische Fassung – en/de/fr/zh erzeugen null organische Sichtbarkeit. Das ist keine Fehlkonfiguration, sondern eine Architekturentscheidung; sie sollte nur nicht mit 'mehrsprachiges SEO' verwechselt werden. Wenn Sichtbarkeit in anderen Sprachen ein Ziel wird, führt kein Weg an serverseitig gerenderten Routen (`/en/…`, `/de/…`) plus `alternates.languages` in der Metadata-API und entsprechenden Sitemap-Einträgen vorbei – das wäre ein eigenes, großes Vorhaben und sollte NICHT nebenbei mit der Indexierungs-Einrichtung vermischt werden.",
      "priority": "P2",
      "effort": "L"
    },
    {
      "action": "Nach 7–14 Tagen: Indexierungs-Report auswerten statt weiter einzureichen",
      "how": "GSC → **Indexierung → Seiten**. Auf drei Kategorien achten: (a) 'Alternative Seite mit richtigem kanonischen Tag' → Canonical-Fehler wie bei /playas; (b) 'Gecrawlt – zurzeit nicht indexiert' / 'Gefunden – zurzeit nicht indexiert' → Qualitäts-/Priorisierungssignal, NICHT durch erneutes Einreichen lösbar, sondern durch mehr interne Verlinkung, echte Eigenständigkeit der Texte und externe Links; (c) 'Soft 404' → `app/not-found.tsx` prüfen, dass unbekannte Slugs echten HTTP 404 liefern (`notFound()` in `lib/page-factory.tsx` tut das) und nicht 200. Parallel Bing Webmaster Tools → 'Site Explorer' und 'URL Inspection'. Realistische Erwartung für eine neue Domain: erste Seiten in Tagen bis ~2 Wochen, vollständige Abdeckung der ~200+ Seiten über Wochen bis Monate; Bing/IndexNow oft innerhalb von Minuten bis Stunden.",
      "priority": "P2",
      "effort": "S"
    }
  ],
  "pitfalls": [
    "Der schwerwiegendste Fehler steckt schon im Repo: `app/playas/page.tsx` ist eine `\"use client\"`-Datei ohne `metadata`-Export und erbt damit `alternates.canonical: \"/\"` aus `app/layout.tsx` – die Seite kanonisiert sich selbst weg. Jede Sitemap-Einreichung und jedes 'Indexierung beantragen' läuft für diese URL ins Leere, bis das gefixt ist. Client Components können in Next.js grundsätzlich kein `metadata` exportieren – das ist eine Falle für jede weitere `\"use client\"`-Route.",
    "`lastModified: new Date()` in `app/sitemap.ts` lässt bei jedem Deploy alle ~200 URLs als 'gerade geändert' erscheinen. Google verwendet lastmod nur, wenn es 'konsistent und nachweislich korrekt' ist – ein pauschales Build-Datum trainiert Google darauf, das Feld für die ganze Domain zu ignorieren.",
    "`changeFrequency` und `priority` in `app/sitemap.ts` sind reiner Ballast: Google ignoriert beide explizit. Sie erzeugen die Illusion, man könne Crawl-Priorität steuern.",
    "Den google-site-verification-TXT-Record später aufräumen/löschen: die GSC-Property wird dann stillschweigend un-verifiziert und alle Daten sind weg. Record dauerhaft stehen lassen und in Vercel mit einem Comment ('GSC verification') markieren.",
    "DNS-TXT in Vercel eintragen, obwohl die Domain gar nicht auf Vercel-Nameservern liegt. Vercel-DNS-Records greifen nur bei Vercel-Nameservern – vorher `dig NS mrsvenezuela.com +short` prüfen, sonst geht der Record beim Registrar rein.",
    "IndexNow-Key-Datei nach `app/` statt `public/` legen oder mit BOM/Trailing-Whitespace speichern → Antwort 403 (Key ungültig) oder 422. Immer mit `curl -s https://mrsvenezuela.com/<key>.txt | xxd | head` gegenprüfen.",
    "Dieselben URLs bei jedem Push per IndexNow melden, auch ohne Inhaltsänderung. Das provoziert HTTP 429 und im Wiederholungsfall Spam-Einstufung. Mindestens 5 Minuten zwischen Resubmits derselben URL, und produktiv nur die tatsächlich geänderten URLs schicken.",
    "Das IndexNow-Skript im Vercel-Build (`postbuild`) laufen lassen, ohne auf `process.env.VERCEL_ENV === 'production'` zu prüfen – dann melden auch Preview-Builds Produktions-URLs, und der Build läuft, bevor das Deployment überhaupt live ist.",
    "IndexNow an mehrere Endpunkte gleichzeitig schicken 'um sicherzugehen'. Laut indexnow.org reicht ein Endpunkt; Mehrfach-Fan-out erhöht nur das 429-Risiko.",
    "Erwarten, dass IndexNow bei Google irgendetwas bewirkt. Google nimmt nicht teil – für Google gibt es 2026 nur Sitemap, interne/externe Links und (sehr begrenzt) 'Indexierung beantragen'.",
    "Eine Custom-Domain an einen Preview-Branch hängen und annehmen, Vercels noindex-Default greife weiter. Genau in diesem Fall lässt Vercel den `X-Robots-Tag: noindex` weg – die Staging-Umgebung wird indexierbar.",
    "'Indexierung beantragen' als Massenwerkzeug missverstehen. Bei ~10–12 URLs/Tag pro Property und über 200 Seiten dauert das Monate, ohne dass Google die Indexierung garantiert; wiederholtes Beantragen derselben URL bringt nachweislich nichts."
  ],
  "outdated_beliefs": [
    "'Nach jedem Deploy die Sitemap bei Google anpingen (google.com/ping?sitemap=…)' – der Endpunkt wurde im Juni 2023 abgeschaltet. Für Google existiert kein Ping-Mechanismus mehr; nur GSC-Sitemaps-Report, Search Console API oder die robots.txt-Referenz.",
    "'Mit priority und changefreq in der Sitemap steuert man, wie oft Google crawlt.' Google ignoriert beide Felder ausdrücklich – steht so in der offiziellen Sitemap-Doku.",
    "'Die Google Indexing API funktioniert inoffiziell für alle Seitentypen.' 2026 ist die Beschränkung auf JobPosting und BroadcastEvent nicht nur dokumentiert, sondern durchgesetzt: Kontingenterhöhungen setzen die entsprechenden strukturierten Daten voraus, andere Requests werden ignoriert.",
    "'Google übernimmt IndexNow demnächst.' Seit dem Test-Announcement 2021 ist nichts passiert; Stand 2026 nimmt Google nicht teil.",
    "'URL-Präfix-Property ist der Standard, Domain-Property nur für Fortgeschrittene.' Wenn DNS-Zugriff besteht – bei einer Vercel-Domain immer –, ist die Domain-Property die richtige Wahl: sie deckt apex, www, http und https in einer einzigen Property ab.",
    "'Man muss getrennte Properties für www und non-www anlegen und die Daten manuell zusammenrechnen.' Genau das erübrigt die Domain-Property.",
    "'*.vercel.app-Previews landen im Google-Index, dagegen braucht man eine eigene robots.txt-Logik.' Vercel setzt seit Jahren automatisch X-Robots-Tag: noindex auf Preview-Deployments und auf abgelöste Produktions-Deployments. Der Handlungsbedarf beschränkt sich auf den Sonderfall Custom-Domain-auf-Branch.",
    "'Bing ist irrelevant.' 2026 ist der Bing-Index die Retrieval-Schicht für Microsoft Copilot, speist DuckDuckGo und Ecosia und trägt weiterhin zu ChatGPT Search bei – wobei OpenAI mit OAI-SearchBot inzwischen zusätzlich einen eigenen Index aufbaut. Die frühere Aussage 'ChatGPT = Bing' ist allerdings ebenso überholt wie 'Bing egal'.",
    "'Client-seitige Übersetzung reicht für mehrsprachiges SEO.' Ohne eigene URLs und hreflang existiert für Suchmaschinen nur die spanische Version; JS-lose KI-Crawler sehen ohnehin ausschließlich das Server-HTML.",
    "'Eine neue Domain ist nach Sitemap-Einreichung in 24–48 Stunden vollständig indexiert.' Google nennt selbst 'a day or so' bis 'up to a week or two' pro URL und garantiert nichts; bei einer neuen Domain ohne externe Links dauert die vollständige Abdeckung von 200+ Seiten Wochen bis Monate. Beschleunigen lässt sich das nachweislich vor allem durch externe Verlinkung, saubere interne Verlinkung/flache Klicktiefe, korrekte Canonicals und schnelle Serverantworten – nicht durch wiederholtes Einreichen."
  ]
}