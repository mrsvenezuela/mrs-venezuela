# Vollständigkeits-Kritik: echte Lücken im Masterplan

Alle Befunde am Repo verifiziert (Stand `main`, 25.08.2026). Reihenfolge = Priorität.

---

## A. Rechtliche Existenzrisiken — im Entwurf gar nicht vorhanden

### A1. Kein Impressum, keine Datenschutzerklärung — bei deutscher Betreiberin
**Was fehlt:** Weder Route noch Footer-Link. `app/` enthält nur `contacto` und `sobre-nosotros`; `components/sections/home-footer.tsx:19-27` listet sieben Links, keiner davon rechtlich. Gleichzeitig steht in `lib/institutional-i18n.ts:10` wörtlich „Michell Naranjo, una venezolana viviendo en Alemania" und `:11` wirbt aktiv um Kooperationen mit „alojamientos, operadores turísticos … y marcas" — damit ist es ein geschäftsmäßiges Telemedium.
**Warum es zählt:** § 5 DDG (Impressum mit ladungsfähiger Anschrift) und Art. 13 DSGVO sind hier nicht optional. Abmahnrisiko real. SEO-seitig: fehlende Betreiber-/Kontaktangaben sind das Standard-Negativkriterium der Quality Rater — der Plan baut in Abschnitt 5.5 E-E-A-T auf, während die Basisebene fehlt.
**Maßnahme:** `app/aviso-legal/page.tsx` + `app/privacidad/page.tsx` als Server-Routen, indexierbar (Trust-Signal, nicht `noindex`), im Footer und in `Organization.publishingPrinciples` verlinkt. Adressproblem (Privatanschrift) über Impressumsdienst/c/o lösen — Postfach genügt nicht.

### A2. Drei konkrete Datenschutz-Sachverhalte, die heute unversorgt laufen
**(a) Analytics ohne Grundlage:** `app/layout.tsx:75` lädt bereits `@vercel/analytics`, der Plan legt `@vercel/speed-insights` obendrauf — beides ohne AV-Vertrag-Erwähnung. Vercel-DPA muss im Dashboard aktiv akzeptiert werden, US-Transfer und Zweck gehören in die Datenschutzerklärung.
**(b) Wikimedia-Hotlinks als Drittlandtransfer:** `unoptimized={…startsWith("http")}` in `detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`, `los-roques-guide.tsx:97,113`, `medanos-guide.tsx:288,307`, `pico-bolivar-guide.tsx:183,212`, `island-carousel.tsx:53`, `localized-detail-page.tsx:156` bewirkt, dass der Browser jedes EU-Besuchers **direkt** `commons.wikimedia.org` kontaktiert. Das ist exakt die Google-Fonts-Konstellation. Der Plan streicht `unoptimized` nur aus LCP-Gründen (P1) — es ist zugleich der Datenschutz-Fix, weil dann der Vercel-Optimizer proxyt. **Priorität auf P0 ziehen.**
**(c) Speicherzugriff:** `language-provider.tsx:20,27` schreibt localStorage `descubre-venezuela-language` **und** Cookie `mrs-venezuela-language` (Namen weichen voneinander ab — der Cookie wird nirgends gelesen). Nutzerinitiierte Spracheinstellung ist nach § 25 TDDDG vertretbar, muss aber dokumentiert sein.
**Der übersehene Vorteil:** Fonts sind self-hosted (`next/font`), kein Tracking-Cookie, keine Fremdskripte → **die Site braucht heute keinen Consent-Banner.** Das ist ein direkter CWV-/Discover-Vorteil. Daraus muss eine Regel werden: YouTube-Embeds (Plan 8.4), Affiliate-Widgets, Kartendienste oder Ads kippen diesen Zustand und erzwingen eine CMP. Der Plan schlägt genau diese Dinge vor, ohne die Folge zu nennen.

### A3. CC-Attribution fehlt flächendeckend — und für die lokalen Bilder gibt es gar keinen Nachweis
**Was fehlt:** Der Plan adressiert nur `StateCredit` in 16 Guides. Tatsächliche Zählung: nur **6 von 23** Guides haben überhaupt `license:`-Einträge (merida 4, zulia 3, falcon 3, sucre/la-guaira/carabobo je 1) = 13 Nachweise. Dazu kommen sechs Commons-Hotlinks direkt in `lib/content.ts:44-61` (`commonsFile(...)`: Los Roques, Puerto Cabello, Playa Medina, Chichiriviche, Macuto, Pico Bolívar) — für die existiert **kein Feld**, `DiscoverItem` (`lib/content.ts:26-37`) kennt nur `image: string`.
**Größerer Punkt:** Für die 83 lokalen Dateien in `public/images` gibt es keinerlei Herkunftsdokumentation. Die Namensmuster in `.vercelignore` (`patanemo-viajero-*.jpg`, `mochima-option-*.jpg`, `yaque-candidate-*.jpg`) deuten auf Auswahl aus Web-Recherche. Ohne belegte Lizenz je Datei ist jede davon ein Abmahnrisiko in Deutschland — teurer als jedes SEO-Thema in diesem Plan.
**Maßnahme:** `lib/image-credits.ts` als einzige Quelle (`src → { source, author, license, licenseUrl, filePage, changes }`), Build-Gate: jedes in `searchIndex`/`heroSlides`/Guides referenzierte Bild ohne Eintrag bricht den Build. Sichtbare Attribution als `<figure>/<figcaption>` plus Sammelseite `/creditos`. Bilder ohne belegbare Herkunft ersetzen, nicht weiter ausliefern. Nebeneffekt: `figcaption` ist zugleich Bilder-SEO-Kontext und GEO-Chunk-Kontext.

### A4. Bilder zeigen nicht, was sie behaupten
**Was fehlt:** Der Plan behandelt Bild-Dubletten nur als Dateigröße (P2/#53). `lib/content.ts:41-74` zeigt aber Falschzuordnungen: `morrocoy: "/images/playa-el-agua.jpg"` (Margarita-Strand als Morrocoy — und damit als Bild für Anzoátegui, Carabobo, Yaracuy), `orchid: "/images/delta-orinoco.jpg"` (Flusslandschaft als Orchidee), `culture` = `history` = `avila` = `caracas-avila.jpg`, `margarita` = `playa-el-agua.jpg`.
**Warum es zählt:** Falscher `alt`-Text ist ein Faktenfehler (E-E-A-T), bei CC-Bildern eine falsche Attribution, in Discover ein gebrochenes Kartenversprechen, in Google Images Dedup-Material. Widerspricht auch der bestehenden Projektregel „nie dieselbe Foto zweimal".
**Maßnahme:** Ein Bild = eine Entität. Die ~10 betroffenen Zuordnungen mit echten Motiven ersetzen; im Zweifel Sektion ohne Bild.

---

## B. Domain, Marke, Zugriffsrechte — im Entwurf nur halb

### B1. Domain-Historie nie geprüft
**Was fehlt:** Der Plan startet bei „kein organischer Fußabdruck", ohne zu klären, **warum**. Nicht geprüft: WHOIS-Erstregistrierung, Wayback-Vornutzung (`web.archive.org/web/*/mrsvenezuela.com`), Alt-Backlink-Profil, geerbte Manual Action.
**Maßnahme:** Als allererste Handlung nach der GSC-Verifizierung (Plan 2.7) → „Sicherheit und manuelle Maßnahmen" öffnen, danach Ahrefs Webmaster Tools Backlink-Profil. Eine geerbte Strafe oder ein Drop-Catch-Spamprofil erklärt Unsichtbarkeit besser als das Canonical-Problem und würde die Reihenfolge des gesamten Plans ändern.

### B2. Markenrechtliches Risiko der Domain wird nicht benannt
**Was fehlt:** Abschnitt 8.6 entscheidet, die **gesamte Entität** auf „Mrs Venezuela" zu ziehen, und nennt nur die SERP-Kollision mit dem Schönheitswettbewerb. Ungeprüft bleibt, dass „Miss Venezuela" (Organización Miss Venezuela/Cisneros) und „Mrs." als Pageant-Kennzeichen geschützte Marken sind. Eine kommerziell auftretende Site unter mrsvenezuela.com kann Berechtigungsanfrage, UDRP oder Abmahnung auslösen — und je vollständiger die Entität auf diesen Namen konsolidiert wird, desto größer der Schaden im Ernstfall.
**Maßnahme:** Vor Roadmap-Punkt 16: Recherche in TMview/DPMAregister/USPTO (Klassen 39/41/16), dann bewusste Entscheidung mit dokumentierter Fallback-Position („Descubre Venezuela" auf Zweitdomain sichern). Unabhängig davon: Registrar-Lock, Auto-Renew, 2FA, Registrierung auf die Betreiberin.

### B3. Keine Domain-E-Mail, Single Point of Failure bei den Zugängen
**Was fehlt:** Offizielle Adresse ist `infomrsvenezuela@gmail.com` — der Entwurf schreibt sie sogar in `Organization.email`. Eine Gmail als Organisationsadresse ist ein schwaches Trust-Signal und im Impressum unpassend. Zusätzlich fehlt jede Aussage dazu, wem GSC-, Bing-, Vercel-, GitHub- und Registrar-Zugang gehören.
**Maßnahme:** `info@mrsvenezuela.com` einrichten, SPF+DKIM+DMARC setzen (ohne DMARC ist die Domain spoofbar). Alle Property-Zugänge auf ein Projektkonto mit **zweitem Owner** legen — der Plan warnt korrekt davor, den GSC-TXT-Record je zu löschen, ignoriert aber, dass ein privater Einzelaccount die komplette Search-Historie an sich bindet.

---

## C. Prozess — verhindert, dass der Plan sich selbst wieder zerstört

### C1. Kein CI, kein Build-Gate, keine SEO-Regressionsprüfung
**Was fehlt:** `package.json` hat nur `dev/build/start/lint` — kein `typecheck`, kein Test. `.github/` existiert nicht. Jeder Push auf `main` geht ungeprüft in Produktion. Genau so ist der `/playas`-Canonical-Bug entstanden, und genau so kommt er wieder.
**Warum es zählt:** Das ist die einzige Maßnahme, die die anderen 56 dauerhaft sichert.
**Maßnahme:** `.github/workflows/ci.yml` mit `npm ci && npx tsc --noEmit && npm run lint && npm run build`, danach `scripts/seo-check.mjs` über `.next/server/app/**/*.html` mit harten Invarianten: genau ein `<link rel="canonical">`; Canonical ≠ `/` außer auf `/`; genau ein `<h1>`; `<title>` ≤ 60 Zeichen; JSON-LD parst und enthält keinen unbekannten `@type`; `og:url` == Canonical; jede Bild-URL im JSON-LD absolut. Exit 1 bricht den Build. Branch Protection auf `main`. Rollback-Weg (Vercel Instant Rollback) einmal dokumentieren.

### C2. Keine Redirect-Strategie, obwohl der Plan mindestens sechs URL-Umzüge vorschlägt
**Was fehlt:** `next.config.ts` hat kein `redirects()`, es gibt kein Slug-Historienfeld. Der Plan verschiebt aber `/ciudad/caracas`, `?region=…` → `/estados/<region>`, `/comida/arepa` → Gastronomie-Hub, `/articulo/ruta-perfecta-14-dias` → `/itinerarios`.
**Maßnahme:** `lib/redirects.ts` als einzige Quelle, in `next.config.ts` per `async redirects()` mit `permanent: true`. Regel in CLAUDE.md: eine einmal ausgelieferte URL wird nie gelöscht, sondern immer 301-gemappt; alte URL raus aus der Sitemap, interne Links (`search-panel.tsx:16-18`) **im selben Commit** umstellen.

### C3. Entitäts-Kannibalisierung zwischen den zehn Content-Kinds ist ungeklärt
**Was fehlt:** `los-roques` ist `kind: "playa"` (`lib/content.ts:157`), obwohl Los Roques ein Nationalpark ist. `medanos-de-coro` ist `parque-nacional` (`:167`) und soll gleichzeitig Dünen-Guide bleiben. `cayo-sombrero` (`:190`) und `chichiriviche` (`:310`) beschreiben beide Morrocoy, das keine eigene Seite hat — der Plan will aber `/parques-nacionales` **inkl. Morrocoy** und `/ciudades` **inkl. Ciudad Bolívar**, während `/estado/bolivar` dieselben Entitäten beschreibt.
**Maßnahme:** Entitäts→URL-Tabelle: genau eine kanonische URL je realer Entität, `kind` ist nur Darstellung. Jede neue Hub-/Detailseite bekommt vorab eine Zeile darin; Doppelungen 301.

### C4. Kein Keyword-/Intent-Mapping für die zehn neuen Seiten
**Was fehlt:** Abschnitt 5.4 begründet die Seiten mit Null-Treffer-greps **im eigenen Repo**, nicht mit Nachfrage. Volumina liegen nur für den EN-Markt vor (6.2).
**Maßnahme:** Vor dem Schreiben je Zielseite eine Zeile: Hauptquery (es), Volumen VE/CO/US-es/ES, SERP-Typ (AI Overview? Foren? YouTube?), abgedeckte Unterfragen, Ziel-URL, Abgrenzung zur nächstähnlichen Bestandsseite. Sonst ist die Reihenfolge geraten.

---

## D. Inhaltliche Risiken ohne Regelwerk

### D1. YMYL betrifft den Bestand, nicht nur eine geplante Seite
**Was fehlt:** Der Plan streift YMYL nur bei `/venezuela/es-seguro-viajar`. Alle 23 Guides enthalten „cómo llegar", Transport- und Grenzangaben zu einem Land mit volatiler Lage. Es fehlen: sichtbare Datierung der Angaben (der Plan führt `updatedAt` ein, aber keine **Verifikationsangabe pro Faktenblock**), Verweise auf offizielle Quellen (Auswärtiges Amt, US State Dept, Cancillería), ein Haftungsausschluss für Reiseinformationen, und die Regel „keine Preisangabe ohne Datum und Währung" — bei venezolanischer Inflation ist jede undatierte Angabe binnen Wochen falsch.
**Maßnahme:** Felder `verifiedAt` + `volatility: "high"|"low"` je Fakt; sichtbarer Block „Datos verificados el … · Consulta siempre las recomendaciones oficiales de tu país" am Kopf jeder Praxis-Sektion; Aktualisierungspflicht nur für `volatility: high`. Ohne das sind die geplanten Seiten `/venezuela/dinero-y-pagos` und `/presupuesto` nicht verantwortbar veröffentlichbar.

### D2. Keine Redaktions-/Korrektur-/KI-Kennzeichnungsrichtlinie als eigene Seite
**Was fehlt:** Die KI-Offenlegung ist im Plan ein Absatz auf `/sobre-nosotros`. Für eine EU-Betreiberin, die redaktionelle Texte publiziert und laut Plan mit maschineller Übersetzung skalieren will, gehört das auf eine eigene, verlinkte Seite: wer schreibt, welche Quellen, wie geprüft, wie korrigiert (Korrekturhinweis mit Datum), Anteil KI-Unterstützung, wer verantwortet.
**Warum es zählt:** Erfüllt gleichzeitig Googles Empfehlung zur Content-Entstehung, den EU-Transparenzgedanken für synthetische Inhalte, und liefert `Organization.publishingPrinciples` + `correctionsPolicy` — beide Properties fehlen im Schema-Entwurf.

### D3. Maschinelle Übersetzung als Scaled-Content-Risiko in Stufe 2
**Was fehlt:** Abschnitt 6 nennt den Aufwand (218.000 Wörter), nicht die Policy-Seite: unrevidierte MT ist ein ausdrückliches Beispiel für „scaled content abuse".
**Maßnahme:** Harte Regel „keine `/en`-URL geht live ohne muttersprachliche Durchsicht und eigenen `reviewedBy`-Eintrag". Lieber 6 geprüfte als 12 rohe URLs.

### D4. Saisonalität fehlt im Redaktionsplan
**Was fehlt:** „Alle 90 Tage die fallenden Seiten überarbeiten" ist rein reaktiv. Reisenachfrage hat Vorlauf, und Venezuela hat eine Besonderheit, die im Plan nicht vorkommt: Trockenzeit Dez–Apr für Gran Sabana/Los Roques, **aber der Salto Ángel führt in der Regenzeit Jun–Nov das meiste Wasser** — eine der häufigsten Fragen überhaupt und ein eigener Timing-Hebel. Dazu Karneval, Semana Santa, Feria de la Chinita (Nov, Zulia), Diablos Danzantes (Corpus Christi), Hallacas im Dezember.
**Maßnahme:** Redaktionskalender mit Veröffentlichung 8–12 Wochen vor dem jeweiligen Fenster; `updatedAt` der Saisonseiten **vor** der Saison hochziehen, nicht mittendrin; Pinterest-Pins am selben Vorlauf. Das ist der einzige planbare Discover-Auslöser für eine Site ohne Nachrichtenanlass.

### D5. Monetarisierung ist eine offene Flanke — die Site wirbt bereits aktiv darum
**Was fehlt:** `lib/institutional-i18n.ts:11` bietet Kooperationen mit Unterkünften und Reiseveranstaltern an. Es gibt keine Regel für den ersten bezahlten Link: `rel="sponsored"`, sichtbare Werbekennzeichnung (§ 5a UWG, im Text, nicht im Footer), Trennung redaktioneller von kommerziellen Empfehlungen, kein Vermieten von Unterseiten (site reputation abuse).
**SEO-Folge, die der Plan ignoriert:** Affiliate-/Buchungs-Widgets sind die häufigste Ursache für INP- und CLS-Einbrüche und würden Abschnitt 4 komplett auffressen — plus Consent-Pflicht (siehe A2).
**Maßnahme:** Kooperationsrichtlinie jetzt schriftlich festlegen, auf derselben Seite wie D2, bevor das erste Angebot kommt.

---

## E. Technik/Kanäle, die der Entwurf auslässt

### E1. Barrierefreiheit kommt im Plan überhaupt nicht vor
**Belegte Lücken:** Kein Skip-Link (kein Treffer im gesamten Repo); `<main>` existiert zwar in allen Seiten-Komponenten, aber ohne `id` als Sprungziel. `app/globals.css:55` nimmt bei `prefers-reduced-motion` nur `scroll-behavior` zurück — die framer-motion-Animationen in ~10 Komponenten ignorieren die Einstellung, nur `hero.tsx:63` wertet sie aus. Die Lightbox `place-gallery.tsx:116` hat `role="dialog"`/`aria-modal`, aber keinen Fokus-Trap/Restore. `--muted: #68726d` auf `#f7f4ec` und das im Plan vorgeschlagene `#5c6b60` liegen bei kleiner Schrift an der 4,5:1-Grenze. `public/flags` deutet auf Flaggen als Sprachwahl — Flaggen sind keine Sprachen.
**Warum es zählt:** Kein Rankingfaktor, aber Fokus-, Kontrast- und Landmark-Fehler sind dieselben Strukturfehler, die Crawler und Screenreader stolpern lassen; und sobald Newsletter/Affiliate hinzukommen, ist die BFSG-Betroffenheit (seit 28.06.2025) nicht mehr sicher auszuschließen.
**Maßnahme:** Skip-Link + `id="main"`, globale Reduced-Motion-Regel für Transitions, Kontrast-Audit der Palette, Fokus-Trap + Escape in der Lightbox, Sprachwahl mit Sprachnamen statt Flaggen.

### E2. Kein RSS/Atom-Feed
**Was fehlt:** Existiert nicht, wird nicht erwähnt.
**Warum es zählt:** Der Feed ist der Zubringer für den geplanten Newsletter (RSS-to-Email spart die komplette Handarbeit), für Feedly/Flipboard/Pinterest-Auto-Pins und Reise-Aggregatoren — eine der wenigen Verteilrails ohne Algorithmus dazwischen.
**Maßnahme:** `app/feed.xml/route.ts` mit `export const dynamic = "force-static"`, im `<head>` als `alternate` verlinkt. Aufwand ~30 Minuten.

### E3. Der Bot-Logging-KPI ist auf dem aktuellen Plan nicht messbar
**Was fehlt:** Abschnitt 7.4 und 9 machen „Crawler-Hits pro Bot via Vercel Log Drains" zum wöchentlichen KPI. Log Drains sind ein Pro-/Enterprise-Feature; auf Hobby gibt es nur kurzlebige Runtime-Logs — und da **alle** Routen prerendert sind, werden Crawler-Requests aus dem CDN bedient und tauchen im Function-Log ohnehin nicht auf.
**Maßnahme:** Plan-Status prüfen. Ersatz: GSC-Crawling-Statistik (nur Google), Bing WMT Crawl Information, und falls Bot-Daten wirklich gebraucht werden: DNS auf Cloudflare umziehen (kostenlos, liefert Bot-Übersicht) oder Vercel Observability zubuchen. Ohne diese Korrektur steht ein nicht erhebbarer KPI im Dashboard.

### E4. Interne Suche wird nicht als Datenquelle genutzt
**Was fehlt:** `search-overlay.tsx` erzeugt keine URL (korrekt — kein noindex-Thema), aber es gibt kein einziges `track()` im Repo. Null-Treffer-Suchen der eigenen Besucher sind die billigste und ehrlichste Content-Recherche, die es gibt — und der Plan ergänzt in 6 selbst, dass ein deutscher Nutzer auf „Strand" null Treffer bekommt.
**Maßnahme:** `track("search", { q, results })` über `@vercel/analytics` (bereits installiert), Begriffe normalisieren/kürzen, Vorgang in der Datenschutzerklärung nennen, monatliche Auswertung fließt in den Redaktionsplan.

### E5. `?region=`-Parameter-URLs bleiben nach dem Umbau bestehen
**Was fehlt:** `search-panel.tsx:16-18` verlinkt auf `/estados?region=Los+Andes`, `?region=Guayana+y+Amazonas`, `?region=Regi%C3%B3n+Central`. Der Plan erkennt, dass der Parameter clientseitig gelesen wird, zieht aber keine Konsequenz: Google crawlt drei URLs mit identischem HTML (Self-Canonical fängt es ab, kostet Crawls), und nach Einführung von `/estados/<region>` existieren beide Varianten parallel.
**Maßnahme:** Links im selben Commit umstellen, Parameter-Variante per `redirects()` mappen.

### E6. Video-SEO on-site fehlt
**Was fehlt:** Der Plan schickt YouTube-Videos nach draußen (8.4), holt sie aber nicht zurück: kein Embed in den Guides, kein `VideoObject` im `@graph`, keine Video-Sitemap.
**Warum es zählt:** `VideoObject` ist eines der wenigen 2026 verbliebenen Rich Results, und ein sichtbares Transkript liefert exakt das Passagenmaterial, das RAG-Systeme zitieren.
**Maßnahme:** Einbetten nur über `youtube-nocookie.com` mit Klick-zum-Laden-Fassade — sonst kippt der consent-freie Zustand aus A2.

### E7. Sicherheits-Header: der Plan setzt drei, es fehlen die wirksamen
**Was fehlt:** `frame-ancestors 'self'` bzw. `X-Frame-Options` (Framing durch Scraper-Sites), `Permissions-Policy` (Kamera/Mikro/Geolocation aus), und eine CSP — bei einer statischen Site ohne Fremdskripte ist eine echte CSP realistisch erreichbar und schützt die JSON-LD-Ausgabe via `dangerouslySetInnerHTML` dauerhaft; als `Content-Security-Policy-Report-Only` starten.
**Warnung zum Plan-Vorschlag:** `preload` im HSTS-Header ist eine faktisch irreversible Zusage inklusive aller Subdomains. Erst setzen, wenn Apex+www dauerhaft HTTPS liefern — und dann die Aufnahme auch tatsächlich bei hstspreload.org beantragen, sonst ist die Direktive wirkungslos.
**Ergänzend:** Kein Dependabot/`npm audit` eingerichtet, kein `security.txt` (RFC 9116, 2 Minuten).

### E8. Alt-Texte und Dateinamen als eigener Kanal
**Was fehlt:** `alt` läuft durch `content-translator.tsx:74` — also nur clientseitig übersetzt; für Google Images existiert die Site ausschließlich spanisch. Beim `/en`-Ausbau (Roadmap 56) muss `alt` serverseitig pro Sprache kommen, was der Plan nicht vorsieht.
**Maßnahme:** Mit dem `figcaption`-Umbau aus A3 die Alt-Texte redaktionell neu schreiben (Motiv + Ort + Bundesstaat), pro Sprache serverseitig ausliefern, sobald `/en` steht.

---

## F. Fehler im Entwurf selbst, die bei der Umsetzung sofort kippen

- **`logo-512.png` existiert nicht.** `lib/schema.ts` (Entwurf, `organizationNode()`) und das Beispiel in 3.4 zeigen auf `https://mrsvenezuela.com/images/logo-512.png` — `public/images` enthält **keine** Logodatei. Es gibt im ganzen Projekt kein Markenlogo-Asset. Google verlangt für `Organization.logo` eine erreichbare URL; ein 404 dort entwertet den Knoten. Zugleich ist dasselbe Asset die Quelle für `app/icon.png`, `apple-icon.png` und das Manifest (Plan 2.3). **Ein Logo muss erst gestaltet werden** — das ist eine Vorbedingung, kein Nebenschritt.
- **`cayo-de-agua.jpg` ist 1600×899, nicht 1600×900.** Der `/playas`-Codeblock in 2.1 deklariert `height: 900` — genau der Fehler, den der Plan an anderer Stelle selbst verbietet („nie geraten"). Maße programmatisch aus der Datei lesen oder weglassen.
- **`salto-angel.jpg` ist 2.774 KB und hochkant (1733×2599)** — bestätigt, aber der Plan behandelt es nur beim Hero. Dieselbe Datei ist `venezuelaImages.angelFalls` **und** `canaima` und damit das OG-/Discover-Bild von `/parque-nacional/canaima`. Ein 16:9-Derivat wird also an mindestens drei Stellen gebraucht.
- **Cookie-Name vs. localStorage-Name weichen ab:** `descubre-venezuela-language` (localStorage, `language-provider.tsx:20`) gegen `mrs-venezuela-language` (Cookie, `:27`). Der Plan nennt nur den Cookie. Bei der Markenvereinheitlichung (Roadmap 16) beide anfassen — sonst verlieren Bestandsbesucher ihre Spracheinstellung.
- **Zwei `<h1>` bestätigt:** `state-editorial-guide.tsx:224` und `:236`, beide `{guide.name}`. Im Plan als „zu prüfen" markiert — es ist der Fall.