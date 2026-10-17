{
  "dimension": "Mehrsprachigkeit und ihre SEO-Folgen (i18n / hreflang / Crawler-Sichtbarkeit)",
  "summary": "Die Mehrsprachigkeit existiert ausschliesslich im Browser nach der Hydration: Die Sprache wird aus localStorage gelesen (components/i18n/language-provider.tsx:15-22) und der DOM-Text erst in einem useEffect ersetzt (components/i18n/content-translator.tsx:79) — Googlebot crawlt ohne localStorage und ohne Accept-Language, AI-Crawler wie GPTBot/ClaudeBot/PerplexityBot fuehren gar kein JavaScript aus, also sehen beide zu 100 Prozent Spanisch; live verifiziert: curl als Googlebot auf https://mrsvenezuela.com liefert `<html lang=\"es\">`, spanischen `<title>` und 0 hreflang-Tags. Es gibt genau eine URL pro Inhalt (Sitemap live: 53 URLs, 0 hreflang), keine middleware.ts, kein alternates.languages — EN/DE/FR/ZH sind damit strukturell nicht indexierbar, und die vier Sprachen sind derzeit reines UX-Feature ohne jeden SEO-Wert. Der Preis dafuer ist hoch: der 2,51-MB-Katalog wird per JSON-Import in eine Client-Komponente gezogen und landet im Layout-Chunk jeder Seite (live gemessen: layout-35cf2a23f28d7a3d.js = 2.436 KB roh / 885 KB komprimiert, 4.482 Katalogeintraege darin, Gesamt-JS der Startseite ~1.104 KB komprimiert) — das belastet LCP/INP fuer alle Besucher, auch die spanischen. Das Skript scripts/generate-site-translations.mjs verschaerft das, weil es die bereits uebersetzten en/de/fr/zh-Bloecke aus lib/i18n.ts (Zeilen 190/364/538/712) erneut als Quelltext einliest und ketten-uebersetzt (Beleg: Schluessel \"Icônes et coins tranquilles\" -> de \"Ikonen und stille Münzen\") und 141 Tailwind-Klassenstrings mitschleppt. Realistischer Hebel laut Ahrefs: EN ist 10-20x groesser als DE/FR (mount roraima 10.000/Mo US, los roques 6.000/Mo US, angel falls venezuela 3.600/Mo US bei KD 0-39 gegenueber venezuela urlaub 800/Mo DE und voyage venezuela 150/Mo FR) — und die Domain hat aktuell noch null organischen Fussabdruck, es gibt also nichts zu migrieren.",
  "findings": [
    {
      "title": "Sprachwahl haengt allein an localStorage nach der Hydration — kein Crawler sieht je eine Uebersetzung",
      "severity": "kritisch",
      "evidence": "components/i18n/language-provider.tsx:15 `const [language, setLanguageState] = useState<LanguageCode>(\"es\");` und :17-22 `useEffect(() => { const saved = window.localStorage.getItem(\"descubre-venezuela-language\") ... }, []);`. Die Ersetzung selbst laeuft erst clientseitig: components/i18n/content-translator.tsx:79 `useEffect(() => { ... translateTree(document.body); ... }, [language])`. Live verifiziert mit `curl -A \"Googlebot/2.1\" https://mrsvenezuela.com/` -> `<html lang=\"es\" ...>`, `<title>Descubre Venezuela | Guia premium de destinos, cultura y naturaleza</title>`, `og:locale content=\"es_VE\"`. Googlebot crawlt ohne localStorage und ohne Accept-Language-Header; GPTBot/OAI-SearchBot/ClaudeBot/PerplexityBot fuehren laut Vercel-Crawler-Studie ueberhaupt kein JS aus (ClaudeBot laedt JS in 23,8 % der Requests, fuehrt es aber nie aus).",
      "recommendation": "Die Sprache muss aus der URL kommen, nicht aus dem Browser-Speicher. Kurzfristig als Erststufe: Sprachaufloesung serverfaehig machen, indem das bereits geschriebene Cookie (language-provider.tsx:27) tatsaechlich serverseitig gelesen wird — aber das allein loest das Indexierungsproblem NICHT, weil eine URL weiterhin nur eine Variante indexiert bekommt. Die eigentliche Loesung ist ein `[lang]`-Segment im App Router (siehe Finding \"Optionsbewertung\"). Solange nichts umgebaut wird, ist der Sprachumschalter ehrlich als reines Besucher-Feature zu betrachten und sollte in keiner SEO-Planung als mehrsprachige Site gezaehlt werden.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "L"
    },
    {
      "title": "Eine einzige URL fuer fuenf Sprachen: hreflang ist technisch unmoeglich, EN/DE/FR/ZH sind nicht indexierbar",
      "severity": "kritisch",
      "evidence": "Es existiert keine middleware.ts (Suche im gesamten Repo leer) und kein lokalisiertes Routing — `find app -name page.tsx` liefert nur spanische Pfade (app/estado/[slug], app/playa/[slug], app/estados, app/playas, app/sobre-nosotros, app/contacto). app/sitemap.ts:5-27 erzeugt ausschliesslich `absoluteUrl(...)`-Eintraege ohne `alternates`; live gemessen: https://mrsvenezuela.com/sitemap.xml = 53 `<loc>`-Eintraege, 0 Vorkommen von `hreflang`. `alternates` wird an vier Stellen gesetzt und enthaelt jedes Mal nur `canonical`: app/layout.tsx:32-34, lib/page-factory.tsx:29-31, app/estados/page.tsx:34-36, app/contacto/page.tsx:16, app/sobre-nosotros/page.tsx:16 — `alternates.languages` kommt im Repo nirgends vor.",
      "recommendation": "Ohne separate URLs pro Sprache gibt es keinen gueltigen hreflang-Graph; Googles eigene Doku sagt explizit, dass dynamisch per Spracheinstellung umgeschaltete Inhalte nicht zuverlaessig gefunden werden. Bei Umstieg auf `/[lang]/...` dann: `alternates: { canonical: '/en/estado/merida', languages: { 'es': '/estado/merida', 'en': '/en/estado/merida', 'de': '/de/estado/merida', 'fr': '/fr/estado/merida', 'zh-Hans': '/zh/estado/merida', 'x-default': '/estado/merida' } }` zentral in lib/page-factory.tsx:26-46 erzeugen, plus `alternates` in app/sitemap.ts (MetadataRoute.Sitemap unterstuetzt `alternates.languages` pro Eintrag). Canonical muss dabei immer auf die gleichsprachige Variante zeigen, nie auf die ES-Version.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "L"
    },
    {
      "title": "2,44 MB Uebersetzungskatalog liegen im Client-Bundle jeder einzelnen Seite",
      "severity": "kritisch",
      "evidence": "components/i18n/content-translator.tsx:1 `\"use client\";` und :5 `import catalog from \"@/lib/site-translations.json\";`, eingehaengt im RootLayout in app/layout.tsx:69 `<ContentTranslator />`. Die Datei ist 2,51 MB (2.635.278 Bytes, 4.569 Schluessel). Live gemessen auf Produktion: `/_next/static/chunks/app/layout-35cf2a23f28d7a3d.js` = 2.436 KB roh / 885 KB komprimiert; darin 4.482 Vorkommen von `\"de\":\"` sowie Treffer auf `Trockenzeit`, `Nationalpark`, `Beste Reisezeit`, `海滩` und `container-page py-16` — der Katalog ist also nachweislich vollstaendig im Layout-Chunk. Gesamt-JS der Startseite: 12 Chunks, ~1.104 KB komprimiert; der Katalog macht davon ~80 %.",
      "recommendation": "Der Katalog darf nicht statisch importiert werden. Sofortmassnahme (kleiner Eingriff, grosser Effekt): pro Sprache eine eigene JSON-Datei erzeugen (lib/site-translations/en.json usw.) und in content-translator.tsx dynamisch laden, z. B. `const [dict, setDict] = useState(null); useEffect(() => { if (language === 'es') return setDict(null); import(`@/lib/site-translations/${language}.json`).then(m => setDict(m.default)); }, [language]);` — damit laedt ein spanischer Besucher 0 KB und ein deutscher nur ~1/4 des Katalogs, jeweils erst nach der Sprachwahl. Zweite Stufe: Sprachdateien als statische Assets aus public/ per fetch holen statt sie zu bundeln, dann sind sie ueberhaupt nicht mehr Teil des JS-Graphen. Beides ist unabhaengig von der Routing-Entscheidung sofort umsetzbar und verbessert LCP/INP fuer 100 % der Besucher.",
      "impact_search": "hoch",
      "impact_ai": "mittel",
      "effort": "M"
    },
    {
      "title": "Titel, Description, OpenGraph und JSON-LD sind hart auf Spanisch verdrahtet — das SERP-Snippet ist nie lokalisiert",
      "severity": "hoch",
      "evidence": "app/layout.tsx:26-31 (Default-Title und Description spanisch), :37 `locale: \"es_VE\"`. lib/page-factory.tsx:24-25 zieht `guide?.seo.title` / `item.description` (spanisch), :38 `locale: \"es_VE\"`, und das JSON-LD in :62 und :71 setzt zweimal `inLanguage: \"es\"`. Gleiches Muster in app/page.tsx:51 und app/estados/page.tsx:53 (`inLanguage: \"es\"`) sowie app/estados/page.tsx:29-45 (spanische Metadata). Der ContentTranslator kann daran nichts aendern: components/i18n/content-translator.tsx:82 schliesst `script, style, code, pre` explizit aus, und `<head>` wird ohnehin nie besucht, weil translateTree in :123 bei `document.body` startet.",
      "recommendation": "Metadaten sind der einzige Teil, den AI-Crawler und SERP garantiert lesen — sie muessen serverseitig pro Sprache erzeugt werden. Bei Einfuehrung von `/[lang]` in lib/page-factory.tsx:15-47 `generateMetadataFor(kind, params)` um den lang-Parameter erweitern und Title/Description/`openGraph.locale` (`en_US`, `de_DE`, `fr_FR`, `zh_CN`) sowie `inLanguage` im @graph (Zeilen 62 und 71) daraus ableiten. Ohne Routing-Umbau bringt hier nichts etwas — das ist ein weiteres Argument gegen Option (a).",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "M"
    },
    {
      "title": "Das Skript liest die bereits uebersetzten Bloecke aus lib/i18n.ts erneut ein und erzeugt Ketten-Uebersetzungen",
      "severity": "hoch",
      "evidence": "scripts/generate-site-translations.mjs:30 `for (const sourceRoot of [\"app\", \"components\", \"lib\"])` scannt lib/ komplett, also auch lib/i18n.ts, dessen Sprachbloecke bei :190 (`en:`), :364 (`de:`), :538 (`fr:`) und :712 (`zh:`) liegen. Folge im Katalog: fremdsprachige Strings stehen als spanische Quellschluessel drin — `\"Back to home\"` -> de `\"Zur Startseite\"`, `\"Plages et îles\"` -> de `\"Strände und Inseln\"`, `\"Retour à l'accueil\"`, und der Beweis fuer echten Bedeutungsverlust: `\"Icônes et coins tranquilles\"` -> de `\"Ikonen und stille Münzen\"` (frz. \"coins\" = Ecken, wurde als engl. \"coins\" = Muenzen uebersetzt). Der ContentTranslator kommentiert dieses Problem selbst in components/i18n/content-translator.tsx:19-25 (\"Menú\" -> \"Menü\" -> \"Speisekarte\") und flickt es mit Identitaets-Eintraegen in :26-33.",
      "recommendation": "Den Scan auf spanische Quellen begrenzen: lib/i18n.ts entweder ganz aus der Dateiliste in :30-43 ausschliessen (die UI-Strings sind dort ohnehin schon von Hand uebersetzt und werden ueber `dictionary` ausgeliefert, nicht ueber den Katalog) oder nur den `es:`-Teilbaum per AST-Position einlesen. Zusaetzlich vor dem Schreiben in :80 einen Reject-Filter laufen lassen, der Schluessel verwirft, die als Wert einer bestehenden Uebersetzung vorkommen. Der Speisekarte-/Muenzen-Hack in content-translator.tsx:12-34 kann danach schrumpfen statt weiter zu wachsen.",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "S"
    },
    {
      "title": "141 Tailwind-Klassenstrings sind als Uebersetzungsschluessel im Katalog und werden mit ausgeliefert",
      "severity": "mittel",
      "evidence": "scripts/generate-site-translations.mjs:14 `if (/^(bg-|text-|mt-|mb-|py-|px-|grid|flex|rounded|border|shadow|transition|hover:|md:|lg:)/.test(text)) return false;` prueft nur den Stringanfang. Alles, was mit einem anderen Utility beginnt, rutscht durch — im Katalog nachgewiesen: `\"container-page py-16\"`, `\"absolute inset-0\"`, `\"font-[var(--font-sans)] antialiased\"`, `\"relative aspect-[16/10] bg-[#e9eee9]\"`, `\"object-cover transition duration-500 ease-out group-hover:scale-[1.02]\"`. Automatische Zaehlung: 141 solcher Schluessel, jeder mit vier maschinellen Uebersetzungen. `container-page py-16` ist im ausgelieferten Chunk layout-35cf2a23f28d7a3d.js nachweisbar.",
      "recommendation": "Kein Render-Bug (className steht nicht in `translatedAttributes`, components/i18n/content-translator.tsx:74), aber reiner Ballast im Bundle und verschwendete Uebersetzungs-Calls. `looksLikeCopy` in :9-16 auf eine Positivpruefung umstellen statt auf Praefix-Blacklist: verwerfen, wenn der String keine Wortgrenze mit einem Kleinbuchstaben-Wort >=3 Zeichen ohne Bindestrich/Doppelpunkt/eckige Klammer enthaelt, bzw. wenn >30 % der Tokens `-`, `:`, `[` oder `#` enthalten. Danach Katalog einmal per Skript bereinigen (die 141 Schluessel loeschen, nicht neu uebersetzen lassen).",
      "impact_search": "niedrig",
      "impact_ai": "niedrig",
      "effort": "S"
    },
    {
      "title": "Eigennamen werden vom Maschinenkatalog verfremdet — nur fuenf sind manuell geschuetzt",
      "severity": "hoch",
      "evidence": "components/i18n/content-translator.tsx:12-18 schuetzt genau `Mrs Venezuela`, `Michell Naranjo`, `Venezuela`, `Canaima`, `Los Roques`. Alles andere laeuft ungefiltert durch das Google-Translate-Endpoint in scripts/generate-site-translations.mjs:49-61. Im Katalog nachgewiesen: `\"Isla de Coche\"` -> en `\"Coche Island\"`, `\"Playa\"` -> de `\"Strand\"` / en `\"Beach\"`, `\"Ciudad Bolivar\"` -> de `\"Ciudad Bolívar\"` (Akzent nachtraeglich eingefuegt), `\"La Asuncion\"` -> `\"La Asunción\"`, `\"San Cristobal\"` -> `\"San Cristóbal\"`, `\"Laguna de Canaima\"` -> de `\"Canaima-Lagune\"`, `\"Cueva del Guácharo\"` blieb dagegen unveraendert. Gluecksfaelle wie `\"Salto Ángel\"` -> en `\"Angel Falls\"` sind Zufall, nicht Regel.",
      "recommendation": "Der Schaden ist doppelt: der Nutzer liest einen Ortsnamen, den es nicht gibt, und die Seite rankt auf einen Namen, den niemand sucht. Vor jedem Skriptlauf eine Eigennamen-Sperrliste aus den vorhandenen Daten generieren — alle `name`-Felder aus lib/content.ts und alle `capital`/Ortsnamen aus lib/states/regions.ts und lib/states/data/*.ts — und diese Strings in generate-site-translations.mjs weder als Job anlegen (Zeile 64-67) noch als Teilstring uebersetzen lassen. Ausnahmen, bei denen der etablierte Exonym gewollt ist (Salto Ángel -> Angel Falls, Relámpago del Catatumbo -> Catatumbo Lightning), gehoeren als bewusste Eintraege in die `manual`-Map in content-translator.tsx:12-34, nicht in den Automatiklauf.",
      "impact_search": "mittel",
      "impact_ai": "mittel",
      "effort": "M"
    },
    {
      "title": "Das Cookie mrs-venezuela-language wird geschrieben, aber nirgends gelesen — toter Code, der Server-Support vortaeuscht",
      "severity": "mittel",
      "evidence": "components/i18n/language-provider.tsx:27 `document.cookie = \"mrs-venezuela-language=\" + nextLanguage + \"; path=/; max-age=31536000; samesite=lax\";`. Eine Volltextsuche ueber alle .ts/.tsx/.mjs im Repo findet den Cookie-Namen exakt einmal — an dieser Zeile. Es gibt keine middleware.ts und keinen `cookies()`-Aufruf, der ihn auswerten koennte.",
      "recommendation": "Entweder entfernen, damit niemand annimmt, es gaebe serverseitige Spracherkennung, oder — besser — als Baustein der Migration nutzen: das Cookie ist genau der Mechanismus, mit dem eine spaetere Middleware die zuletzt gewaehlte Sprache respektieren kann, ohne Googlebot umzuleiten. Solange es weder gelesen noch dokumentiert ist, ist es nur eine Falle fuer den naechsten Umbau.",
      "impact_search": "niedrig",
      "impact_ai": "niedrig",
      "effort": "S"
    },
    {
      "title": "Der Sprachumschalter erzeugt keine crawlbaren Links — auch nach einem Routing-Umbau muesste er umgebaut werden",
      "severity": "mittel",
      "evidence": "components/sections/language-switcher.tsx:67-75 rendert jede Sprachoption als `<button type=\"button\" role=\"option\" onClick={() => { setLanguage(option.code); setOpen(false); }}>`. Es gibt kein `<a href>`, also keinen einzigen Link auf eine andere Sprachvariante — weder heute (es gibt keine Ziel-URL) noch automatisch nach einem Umbau. Zusaetzlich haengt das gesamte Dropdown an framer-motion (:2, :48-56), laeuft also erst nach Hydration.",
      "recommendation": "Bei Einfuehrung von `/[lang]` die Optionen als `<Link href={switchLocalePath(pathname, option.code)} hrefLang={option.code}>` rendern. Das ist der guenstigste Weg, Google die Sprachvarianten ueberhaupt entdecken zu lassen, und funktioniert zusaetzlich zu hreflang. Der aktuelle Button-Ansatz waere sonst der zweite unsichtbare Layer nach dem localStorage-Problem.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "S"
    },
    {
      "title": "Laufzeit-Textersetzung ueber den kompletten Body kostet INP und erzeugt einen sichtbaren Sprach-Flash (CLS)",
      "severity": "mittel",
      "evidence": "components/i18n/content-translator.tsx:115-120 laeuft ein `document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT)` ueber `document.body` (:123) und ruft fuer jeden Textknoten `lookup()` (:53-70) mit Regex-Normalisierung (:11) und bis zu vier Prefix-Iterationen (:59-64). Danach bleibt ein `MutationObserver` mit `{ childList: true, subtree: true }` (:129) dauerhaft aktiv und wiederholt das fuer jeden neu eingefuegten Knoten (:126). Der redaktionelle Bestand umfasst rund 54.500 Woerter (26 Dateien unter lib/states plus lib/content.ts), eine einzelne Bundesstaat-Guide bringt also mehrere tausend Textknoten. Zusaetzlich werden pro Element vier Attribute geprueft (:74, :99-108).",
      "recommendation": "Erst nachrangig zu den strukturellen Punkten anfassen, aber zwei billige Verbesserungen: (1) den Initiallauf in :123 fuer `language === 'es'` komplett ueberspringen — aktuell laeuft der TreeWalker auch fuer spanische Besucher durch den gesamten Body, obwohl `lookup` in :85 garantiert `undefined` liefert; (2) den MutationObserver-Callback in :124-128 mit `requestIdleCallback`/Batching entkoppeln, damit Route-Wechsel nicht synchron blockieren. Der Sprach-Flash (erst Spanisch gerendert, dann ersetzt) verschwindet erst mit serverseitiger Lokalisierung.",
      "impact_search": "mittel",
      "impact_ai": "niedrig",
      "effort": "M"
    },
    {
      "title": "Zur Laufzeit zusammengesetzte Texte werden nie uebersetzt — die Prefix-Hacks sind der Beweis",
      "severity": "mittel",
      "evidence": "Der Katalog kennt nur String-Literale aus dem Quelltext (scripts/generate-site-translations.mjs:35 erfasst `isJsxText`, `isStringLiteral`, `isNoSubstitutionTemplateLiteral` — Template-Literale MIT Substitution also gerade nicht). Beispiele im Code: components/content/detail-page.tsx:1302 `alt={`${tepuy.name}, Parque Nacional Canaima`}`, components/content/canaima-landmarks.tsx:120 `aria-label={`Ver imagen ${index + 1} de La Gran Sabana`}`, components/content/canaima-experience-carousel.tsx:54 `aria-label={`Ver foto ${index + 1} de Salto El Sapo`}`. Genau dafuer existiert der Sonderpfad in components/i18n/content-translator.tsx:35-51 (`dynamicPrefixes` + `dynamicConnectors`), der exakt vier Muster abdeckt und dessen Kommentar in :41-45 einen bereits eingetretenen Fehler dokumentiert (\"Un pueblo de pescadores\" -> \"Un pueblo von pescadores\").",
      "recommendation": "Symptom eines Architekturproblems: DOM-Ersetzung kann komponierte Strings prinzipiell nicht sauber behandeln, weil Wortstellung und Genus sprachabhaengig sind. Bei serverseitiger Lokalisierung faellt das weg, weil die Templates pro Sprache formuliert werden. Bis dahin keine weiteren Prefix-Regeln hinzufuegen — jede zusaetzliche Teilstring-Ersetzung erhoeht das Risiko, mitten in redaktionellem Text zuzuschlagen, wie der Kommentar in :41-45 schon zeigt.",
      "impact_search": "niedrig",
      "impact_ai": "niedrig",
      "effort": "M"
    },
    {
      "title": "Die Suche bleibt einsprachig, obwohl die Oberflaeche uebersetzt ist",
      "severity": "mittel",
      "evidence": "components/sections/search-overlay.tsx:54-61 baut den Haystack aus den spanischen Feldern des `searchIndex` (importiert :8 aus lib/content) und filtert per `normalize(haystack).includes(needle)`. Der ContentTranslator uebersetzt nur gerenderte Textknoten und die Attribute `alt, aria-label, placeholder, title` (components/i18n/content-translator.tsx:74) — die Suchdaten selbst nie. Ein deutscher Nutzer sieht ein deutsches Suchfeld (Platzhalter kommt aus lib/i18n.ts) und bekommt auf \"Strand\" null Treffer, obwohl 15 Playa-Seiten existieren.",
      "recommendation": "Kleiner, sofort wirksamer Fix ohne Routing-Umbau: im Filter zusaetzlich die Katalogwerte fuer `item.name` und `item.description` in der aktiven Sprache in den Haystack aufnehmen (`language` steht in :46 bereits zur Verfuegung). Das nutzt den 2,5-MB-Katalog, der ohnehin schon geladen ist, und behebt einen Bruch, der aktuell wie ein leeres Angebot wirkt.",
      "impact_search": "niedrig",
      "impact_ai": "niedrig",
      "effort": "S"
    },
    {
      "title": "Sprachcode-Inkonsistenz zh vs zh-CN und fehlendes x-default",
      "severity": "niedrig",
      "evidence": "lib/i18n.ts:6 definiert den Code als `\"zh\"`, das Skript uebersetzt gegen `\"zh-CN\"` (scripts/generate-site-translations.mjs:6 `const targets = [\"en\", \"de\", \"fr\", \"zh-CN\"];`) und mappt beim Speichern zurueck (:65 `const key = target === \"zh-CN\" ? \"zh\" : target;`). Der Katalog enthaelt entsprechend vereinfachtes Chinesisch unter dem generischen Schluessel `zh`. In app/layout.tsx:66 steht `<html lang=\"es\">`, gesetzt wird spaeter `document.documentElement.lang = language` (components/i18n/language-provider.tsx:28, :32) — also potenziell `lang=\"zh\"` fuer Vereinfacht-Chinesisch.",
      "recommendation": "Fuer hreflang und `<html lang>` `zh-Hans` (oder `zh-CN`) verwenden, nicht `zh` — sonst konkurrieren Vereinfacht und Traditionell um dieselbe Annotation. Bei Einfuehrung des hreflang-Graphen zwingend `x-default` auf die spanische Variante setzen, da Spanisch die Hauptsprache und der Fallback fuer alle nicht abgedeckten Maerkte ist.",
      "impact_search": "niedrig",
      "impact_ai": "niedrig",
      "effort": "S"
    },
    {
      "title": "Optionsbewertung (a)-(d): Empfehlung ist (c) als erster Schritt auf dem Zielbild (b), niemals (d) allein",
      "severity": "hoch",
      "evidence": "Marktdaten (Ahrefs, abgerufen 2026-08-25): US/EN `mount roraima` 10.000/Mo (KD 11), `los roques` 6.000/Mo (KD 0), `angel falls venezuela` 3.600/Mo (KD 36), `venezuela beaches` 3.100/Mo (KD 0), `canaima national park` 1.800/Mo (KD 0), `things to do in venezuela` 800/Mo (KD 0). DE dagegen: `venezuela urlaub` 800/Mo, `venezuela sehenswürdigkeiten` 250/Mo, `venezuela reisen` 150/Mo, `canaima nationalpark` 10/Mo global. FR: `los roques` 800/Mo, `voyage venezuela` 150/Mo, `parc national canaima` 60/Mo, `que faire au venezuela` 40/Mo. Aufwandsbasis: 53 URLs in der Live-Sitemap, ~54.500 Woerter redaktioneller Text in 26 Dateien unter lib/states plus lib/content.ts. Ahrefs `site-explorer-metrics-by-country` fuer mrsvenezuela.com liefert ein leeres Ergebnis — es gibt aktuell keinerlei organischen Fussabdruck, der bei einer Umstellung Schaden nehmen koennte.",
      "recommendation": "(a) Status quo lassen — Aufwand 0, Nutzen 0. Vier Sprachen im Umschalter, null indexierbare fremdsprachige Seiten, dazu dauerhaft 885 KB komprimiertes JS Strafe fuer ALLE Besucher inklusive der spanischen. Nur vertretbar, wenn man Mehrsprachigkeit bewusst als reines Onsite-UX-Feature deklariert; dann aber mindestens Finding 3 (Code-Splitting des Katalogs) umsetzen, das ist unabhaengig und kostet wenig.\n\n(b) Sub-Pfad-Routing /en /de + generateStaticParams + alternates.languages — Aufwand L, Nutzen hoch, technisch der einzige saubere Zielzustand. Konkret: app/[lang] einziehen, `generateStaticParams` liefert lang x slug (53 x 5 = 265 statische Seiten, fuer einen statischen Export trivial), lib/page-factory.tsx:15-47 um lang erweitern (Title/Description/og:locale/inLanguage pro Sprache), app/sitemap.ts:5-27 um `alternates.languages` erweitern, Sprachumschalter auf `<Link hrefLang>` umbauen. Der teure Teil ist NICHT der Code, sondern die 54.500 Woerter x 4 = ~218.000 Woerter, die maschinell uebersetzt und dann redaktionell geprueft werden muessen — und genau dort schlaegt das bekannte Skriptproblem zu (Eigennamen, Ketten-Uebersetzung, siehe Findings 5 und 7). Vier Sprachen komplett maschinell auszurollen wuerde 212 duenne, teils fehlerhafte Seiten erzeugen; bei Reisethemen ist das ein Qualitaetsrisiko, kein Gewinn.\n\n(c) Nur Hauptseiten lokalisieren — Aufwand M, bestes Verhaeltnis, EMPFOHLENER ERSTER SCHRITT. Konkret: nur `/en` aufbauen (EN ist laut Daten 10-20x groesser als DE und FR zusammen) und dort nur die Seiten mit echtem Volumen: Startseite, /en/estados, /en/playas plus die Guides zu Canaima/Salto Ángel, Los Roques, Roraima/Gran Sabana, Merida/Pico Bolívar, Médanos de Coro — also etwa 8-12 URLs statt 265. Diese wenigen Texte lassen sich mit vertretbarem Aufwand redaktionell pruefen, statt 218.000 Woerter blind zu veroeffentlichen. Die Keyword-Difficulty von 0-36 bei 1.800-10.000 Suchen/Monat sagt: eine gute englische Seite zu Mount Roraima oder Canaima kann realistisch ranken. DE und FR erst nachziehen, wenn EN Traktion zeigt — bei 150-800 Suchen/Monat rechtfertigt der deutsche und franzoesische Markt den Uebersetzungs- und Pflegeaufwand vorerst nicht. ZH zurueckstellen: Google spielt in China kaum eine Rolle und maschinelles Chinesisch bei Eigennamen ist am schwersten zu kontrollieren (der Katalog liefert bereits `Arepa` -> `Arepa 玉米饼` als Mischform).\n\n(d) Middleware-basiert — als alleinige Loesung UNGEEIGNET, als Ergaenzung optional. Middleware erzeugt keine indexierbaren URLs; sie kann nur umleiten oder rewriten. Eine Accept-Language-Weiterleitung trifft Googlebot gar nicht (crawlt aus den USA ohne Accept-Language-Header) und birgt das Risiko, Nutzer und Crawler in eine Variante zu sperren. Wenn ueberhaupt, dann NACH (b)/(c) als reine Komfortschicht: beim ersten Besuch von `/` anhand von Accept-Language oder dem bereits vorhandenen Cookie (components/i18n/language-provider.tsx:27) auf `/en/...` weiterleiten, mit 302 statt 301 und ohne Redirect fuer Bot-User-Agents.\n\nReihenfolge: (1) Katalog-Code-Splitting (Finding 3) — sofort, unabhaengig, wirkt fuer 100 % der Besucher. (2) Skript-Bereinigung (Findings 5, 6, 7) — bevor irgendein Text als statische Seite veroeffentlicht wird. (3) `/en` fuer ~10 Seiten inklusive hreflang, Sitemap-alternates und Link-Sprachumschalter. (4) Auswerten, dann erst DE/FR. Der Zeitpunkt ist optimal: die Domain hat null Rankings, also kostet der URL-Umbau heute nichts an Migrationsrisiko und wird mit jedem Monat teurer.",
      "impact_search": "hoch",
      "impact_ai": "hoch",
      "effort": "L"
    }
  ]
}