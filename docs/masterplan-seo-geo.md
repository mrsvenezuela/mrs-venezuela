# SEO- und GEO-Masterplan mrsvenezuela.com

**Stand: 25. August 2026 · Verantwortlich: SEO-Lead**

Grundlage sind fünf Repo-Audits (Technik, Schema, Content, i18n, Performance), sechs Web-Recherchen (Next.js-Metadata, Schema/Rich Results, IndexNow, E-E-A-T, Entitäten, KI-Sichtbarkeit) und eine anschließende Faktenprüfung von 24 überprüfbaren Behauptungen gegen Primärquellen und gegen `node_modules/next@15.5.20` — insgesamt 15 Agentenläufe. Jede Zahl, die nicht primärquellenbelegt ist, ist im Text als solche gekennzeichnet; belegte Repo-Befunde tragen Datei und Zeile.

---

## Die 10 wichtigsten Schritte in Reihenfolge

Die Reihenfolge bildet echte Abhängigkeiten ab, nicht Wirkungsgrößen. Schritt 2 kann alles ab Schritt 3 umwerfen; die Schritte 5 und 6 sind keine Kür, sondern Haftungsfragen; Schritt 9 setzt die Schritte 3, 4, 7 und 8 voraus, weil eine zu früh eingereichte Sitemap Google auf eine selbstkanonisierte Route schickt.

1. **Google Search Console als Domain-Property per DNS-TXT verifizieren — und noch nichts einreichen.** Ohne verifizierte Property gibt es weder Crawling-Statistik noch die Voraussetzung für Schritt 2, und der Gen-AI-Bericht sammelt keine Daten rückwirkend (`Vercel DNS`, TXT auf dem Apex; `search.google.com`; → 2.7).
2. **Sofort danach Domain-Historie und manuelle Maßnahmen prüfen.** Eine geerbte Strafe oder ein Drop-Catch-Spamprofil erklärt die aktuelle Unsichtbarkeit besser als jeder technische Befund dieses Plans und würde die Reihenfolge ab Schritt 3 ändern (`GSC → Sicherheit und manuelle Maßnahmen`, `web.archive.org/web/*/mrsvenezuela.com`, WHOIS-Erstregistrierung, Ahrefs Webmaster Tools Backlink-Profil; → 9).
3. **Den `/playas`-Canonical-Blocker auflösen**, indem die Client-Seite in einen Server-Wrapper mit eigenem `metadata`-Export und einen ausgelagerten Client-Body zerlegt wird (`app/playas/page.tsx:1` → neu `components/sections/playas-page-content.tsx`; → 2.1).
4. **Die Canonical-Vererbung aus dem Root-Layout entfernen** und Startseite und 404 explizit versorgen, sonst produziert jede künftige Client-Route denselben Fehler erneut (`app/layout.tsx:32-34, :38`; `app/page.tsx`; `app/not-found.tsx`; → 2.2).
5. **Impressum und Datenschutzerklärung als indexierbare Server-Routen anlegen und im Footer verlinken.** Bei einer in Deutschland ansässigen Betreiberin und aktiv beworbenen Kooperationen ist das kein Trust-Signal, sondern § 5 DDG und Art. 13 DSGVO (`app/aviso-legal/page.tsx`, `app/privacidad/page.tsx`, `components/sections/home-footer.tsx:19-27`; → 9).
6. **Bildherkunft dokumentieren und Commons-Hotlinks abstellen.** Eine Registerdatei als einzige Quelle, ein Build-Gate gegen nicht registrierte Dateien, `unoptimized` raus (das ist zugleich der Drittlandtransfer-Fix), Dateien ohne belegbare Lizenz ersetzen statt weiter ausliefern (neu `lib/image-credits.ts`; `components/content/detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`; → 9).
7. **Strukturierte Daten reparieren, bevor sie ausgerollt werden:** generischen FAQPage-Fallback ersatzlos löschen, `TravelGuide` durch einen `@graph` aus `WebSite`, `Organization`, `WebPage` ersetzen, Bild-URLs absolut ausgeben (`lib/page-factory.tsx:86-103`, `:70`; `app/page.tsx`; neu `lib/schema.ts`; → 3). Vorbedingung: `Organization.logo` braucht ein Logo-Asset, das im Projekt noch nicht existiert.
8. **Crawl- und Darstellungsschalter setzen:** `lastModified: new Date()` durch echte oder feste Daten ersetzen, `max-image-preview:large` und `max-snippet:-1` ergänzen, Icon-Set und Manifest aus demselben Logo ableiten (`app/sitemap.ts:9,13-16,22`; `app/layout.tsx` `robots`-Block; `app/icon.png`, `app/apple-icon.png`, `app/manifest.ts`; → 2.3–2.6).
9. **Erst jetzt einreichen:** Sitemap in GSC und Bing Webmaster Tools, IndexNow-Key ablegen und den Push-Hook einrichten (`search.google.com`, `bing.com/webmasters`, `public/<key>.txt`, `.github/workflows/indexnow.yml`; → 2.8).
10. **Das Ergebnis gegen sich selbst absichern, bevor die erste URL umzieht:** CI mit Typecheck, Lint, Build und HTML-Invarianten über `.next/server/app/**/*.html`, dazu ein Redirect-Register als einzige Quelle für jede je ausgelieferte URL (`.github/workflows/ci.yml`, `scripts/seo-check.mjs`, `lib/redirects.ts` in `next.config.ts`; → 10).

---

## 1. Lagebericht

### Was heute steht

Der technische Unterbau ist besser als bei den meisten Projekten dieser Größe:

- **Alle Routen sind echt statisch prerendert.** `generateStaticParams` existiert in allen zehn `[slug]`-Routen über `lib/page-factory.tsx:11-13`. Im Prerender-Manifest steht `initialRevalidateSeconds: false` — keine ISR-Laufzeitkosten, kein Rendering-Risiko für Crawler.
- **Metadata-API korrekt aufgesetzt**: `app/layout.tsx:24-58` mit `metadataBase` (Zeile 25), Title-Template, OG- und Twitter-Block. `app/estados/page.tsx:29-45`, `app/contacto/page.tsx` und `app/sobre-nosotros/page.tsx` setzen eigene Canonicals.
- **robots.txt und sitemap.xml** werden als statische Dateien ausgeliefert (`app/robots.ts`, `app/sitemap.ts`), ~55 URLs.
- **Bild-Hygiene im Markup**: 41 `next/image`-Verwendungen, kein einziges rohes `<img>`, alle mit `alt`, alle `fill`-Bilder mit `sizes`. `app/globals.css` ist 1,3 KB.
- **Redaktioneller Kern**: 23 Bundesstaat-Guides in `lib/states/data/` mit 1.755–2.797 Wörtern, 11 h2, ~27 h3, 5–6 echten FAQs je Guide (134 insgesamt), handgeschriebene `seo.title`/`seo.description` (58–69 Zeichen). Das ist der eigentliche Wert der Site.
- **JSON-LD wird serverseitig gerendert** (`app/page.tsx`, `app/estados/page.tsx`, `lib/page-factory.tsx:110`) — Voraussetzung dafür, dass JS-lose KI-Crawler es überhaupt sehen. `components/i18n/content-translator.tsx:82` schließt `script` von der Laufzeit-Übersetzung aus, das Markup bleibt sauber spanisch.

### Was fehlt oder kaputt ist

Fünf Befunde sind sofort geschäftsrelevant:

1. **`/playas` kanonisiert auf die Startseite.** `app/playas/page.tsx:1` ist `"use client"` — Client Components können in Next.js kein `metadata` exportieren. Die Route erbt deshalb `alternates.canonical: "/"` aus `app/layout.tsx:32-34`. Im gebauten HTML steht wörtlich der Startseiten-Titel und `<link rel="canonical" href="https://mrsvenezuela.com"/>`. Die einzige crawlbare Einstiegsseite zu 14 von 15 Strandseiten faltet sich damit selbst weg. Dass Metadata-Objekte nur „shallowly" gemergt werden und ein früher gesetztes verschachteltes Feld vom letzten definierenden Segment überschrieben wird, ist wörtlich dokumentiert — die Vererbung ist kein Bug, sondern das spezifizierte Verhalten.
2. **`lib/page-factory.tsx:86-103` erfindet FAQs.** Für alle ~26 Nicht-Estado-Seiten werden zwei generische Fragen mit eingesetztem Namen erzeugt („¿Cuál es la mejor época para visitar Arepa?") und zweimal derselbe Antworttext ausgeliefert. Diese Texte stehen nirgends im DOM. Das verstößt gegen Googles Structured-Data-Policy („Don't mark up content that is not visible to readers") und bringt seit dem 7. Mai 2026 keinerlei Rich Result mehr.
3. **`app/page.tsx` verwendet `"@type": "TravelGuide"`** — ein Typ, den schema.org nicht kennt (per HTTP-Status gegen schema.org geprüft: 404). Die Startseite hat damit faktisch kein gültiges strukturiertes Markup: kein `WebSite`, keine `Organization`, kein `@id`.
4. **`app/sitemap.ts:9,13-16,22`** setzt `lastModified: new Date()` auf jeden Eintrag. Jeder Vercel-Deploy meldet alle ~55 URLs als heute geändert. Gary Illyes: Wer falsche lastmod-Werte liefert, ist „probably better off without the lastmods" (Zitat wörtlich belegt; Datierung 16.07.2026 nur über Sekundärquelle).
5. **Null E-E-A-T-Signale.** Kein `author`, kein `datePublished`, kein `dateModified`, keine `Organization`, kein `sameAs` — im gesamten Repo. Die einzigen `author`-Felder sind Wikimedia-Fotocredits, und die sind in 16 von 23 Guides leer (`lib/states/data/bolivar.ts` hat `credits: []`).

Dazu: kein Favicon und überhaupt kein Marken-Asset (im gesamten Projekt existiert keine `icon.*`, `favicon.*`, `manifest.*`, und `public/images` enthält unter 83 Dateien keine Logodatei), kein `max-image-preview:large`, keine `BreadcrumbList`, fünf komplett verwaiste Detailseiten ohne einen einzigen internen Link, acht Detailseiten mit 73–79 % Textgleichheit aus `components/content/detail-page.tsx:276-306`, und ein 2,4-MB-Übersetzungskatalog im Client-Bundle jeder Seite.

Fünf weitere Kategorien fehlen vollständig — sie stehen nicht im Rang von Optimierungen, sondern von Vorbedingungen:

- **Keine Rechtstexte.** `app/` kennt nur `contacto` und `sobre-nosotros`; die sieben Footer-Links in `components/sections/home-footer.tsx:19-27` enthalten keinen rechtlichen. Gleichzeitig weist `lib/institutional-i18n.ts:10` die Betreiberin als „una venezolana viviendo en Alemania" aus und `:11` wirbt um Kooperationen mit Unterkünften, Veranstaltern und Marken — geschäftsmäßiges Telemedium ohne Impressum und ohne Datenschutzerklärung.
- **Keine Bildherkunfts-Dokumentation.** Nur 6 von 23 Guides führen überhaupt `license:`-Einträge (13 Nachweise insgesamt); die sechs Commons-Hotlinks in `lib/content.ts:44-61` haben gar kein Feld dafür, weil `DiscoverItem` (`:26-37`) nur `image: string` kennt; für die 83 lokalen Dateien in `public/images` existiert kein einziger Nachweis. Dazu kommen belegte Falschzuordnungen (`morrocoy: "/images/playa-el-agua.jpg"`, `orchid: "/images/delta-orinoco.jpg"`), die zugleich Faktenfehler im `alt`-Text und falsche Attribution sind.
- **Kein CI- und kein Build-Gate.** `package.json` kennt nur `dev`, `build`, `start`, `lint` — kein `typecheck`, keine Tests; `.github/` existiert nicht. Jeder Push auf `main` geht ungeprüft in Produktion. Genau so ist der `/playas`-Canonical-Bug entstanden.
- **Keine Redirect-Strategie.** `next.config.ts` hat kein `redirects()`, und es gibt kein Slug-Historienfeld — während dieser Plan mindestens sechs URL-Umzüge vorschlägt und `components/sections/search-panel.tsx:16-18` bereits auf drei `?region=`-Parametervarianten verlinkt.
- **Keine Barrierefreiheits-Basis.** Kein Skip-Link im gesamten Repo, `<main>` ohne `id` als Sprungziel, `app/globals.css:55` nimmt bei `prefers-reduced-motion` nur `scroll-behavior` zurück (die framer-motion-Animationen in ~10 Komponenten ignorieren die Einstellung, nur `components/sections/hero.tsx:63` wertet sie aus), und die Lightbox `components/content/place-gallery.tsx:116` hat `role="dialog"`/`aria-modal`, aber weder Fokus-Trap noch Fokus-Rückgabe. Kein Rankingfaktor — aber dieselben Landmark-, Fokus- und Kontrastfehler lassen Crawler und Screenreader an derselben Stelle stolpern.

### Realistische Einordnung

Ahrefs liefert für mrsvenezuela.com ein leeres Country-Metrics-Ergebnis: **die Domain hat aktuell praktisch keinen organischen Fußabdruck.** Das ist gleichzeitig das größte Risiko und der größte Vorteil.

- Vorteil: Ein URL- oder Struktur-Umbau kostet heute nichts an Migrationsrisiko. Mit jedem Monat wird er teurer.
- Risiko: Für den eigenen Content besteht keine Abstrafungsgefahr — mit ~55 Seiten liegt die Site weit unter jeder Scaled-Content-Schwelle. Das eigentliche Problem ist **Unsichtbarkeit**, nicht Bestrafung. Diese Aussage ist allerdings eine Annahme, solange die Domain-Historie nicht geprüft ist: eine geerbte manuelle Maßnahme aus einer Vornutzung würde denselben Nullbefund erzeugen. Deshalb steht die Prüfung an Position 2 der Reihenfolge und nicht in der Roadmap.
- Chance: „Travel & Hospitality" hat laut Similarweb mit ~23 % die höchste Zitierrate aller Branchen in KI-Antworten (Mai 2026; Anbieterzahl, nicht primärquellenprüfbar). Und Google Discover kennt keine Mindest-Sitegröße und kein Publisher Center — es ist der einzige große Google-Kanal, den ein kleines Projekt ohne Backlink-Budget erreichen kann.
- Aktiv zu schützender Vorteil: Die Site ist heute **consent-frei**. Fonts sind self-hosted über `next/font`, es gibt kein Tracking-Cookie und kein Fremdskript; der einzige Speicherzugriff ist die nutzerinitiierte Sprachwahl (`components/i18n/language-provider.tsx:20,27`). Kein Banner heißt: kein CLS-Einbruch, keine INP-Last, kein Discover-Hindernis, kein Zustimmungsverlust in der Messung. Dieser Zustand kippt mit dem ersten YouTube-Embed, Affiliate-Widget, Kartendienst oder Ad-Slot — jede solche Maßnahme in diesem Plan trägt den Consent-Vorbehalt daher ausdrücklich mit.

**Zeithorizont, ehrlich:** Erste Seiten im Index in Tagen bis zwei Wochen. Vollständige Abdeckung der ~55 URLs über Wochen bis Monate. Messbarer organischer Traffic frühestens nach 12–26 Wochen, und dann zuerst auf Longtail wie „cómo llegar a Los Roques desde Maiquetía", nicht auf „playas de Venezuela".

---

## Inhalt

1. **Lagebericht** — Bestand, Blocker, realistische Erwartung
2. **Sofort-Fundamente** — Canonical, robots, Sitemap, GSC/Bing, IndexNow
3. **Strukturierte Daten** — `@graph`, `@id`-Anker, Typ-Mapping, Validierung
4. **Technik, Performance und Barrierefreiheit** — P0/P1/P2 mit Datei und Zeile
5. **Content und Informationsarchitektur** — interne Verlinkung, Thin Content, neue Seiten, E-E-A-T
6. **Mehrsprachigkeit** — Ist-Zustand des Laufzeit-Übersetzers, Stufenplan, hreflang-Vorbedingungen
7. **KI-Sichtbarkeit (GEO)** — Belegtes, Wetten, Maßnahmen, Messung
8. **Off-Site, Discover und Marke** — Discover-Hebel, Bilder, Wikimedia, Kanäle, Namensvereinheitlichung
9. **Recht, Lizenzen und Risiko** — Impressum, Datenschutz, Bildrechte, Marke, YMYL, Monetarisierung
10. **Prozess und Absicherung** — CI-Gate, Redirect-Register, Entitäts→URL-Tabelle, Zugänge
11. **Messen und Steuern** — KPIs, Tools, Reporting-Rhythmus, erwartbare Werte
12. **Roadmap** — priorisierte Maßnahmenliste mit Aufwand und Wirkung
13. **Bewusst NICHT tun** — begründete Ausschlüsse
14. **Quellen** — Primärquellen, Sekundärquellen, ausdrücklich unbestätigte Angaben

---

## 2. Sofort-Fundamente (Woche 1)

Reihenfolge ist bindend: **erst der Canonical-Fix, dann einreichen.** Eine Sitemap-Einreichung vor Schritt 2.1 lässt Google auf `/playas` ins Leere laufen.

Das Woche-1-Paket umfasst sechs technische Eingriffe (2.1–2.6) plus die Property-Verifizierung (2.7). Alles darin ist reine Auslieferungsmechanik: kein Text wird umgeschrieben, keine URL umgezogen. Die einzige Ausnahme sind die drei `?region=`-Parameter-Links in `components/sections/search-panel.tsx:16-18`, die im selben Commit wie der Canonical-Fix mitgehen (2.2) — sie sind heute schon Duplikat-Zubringer und werden es nach dem Regions-Umbau doppelt.

### 2.1 Blocker: `/playas` serverseitig machen

Schritt 1 — bestehende Datei umbenennen:

```
components/sections/playas-page-content.tsx   (Inhalt von app/playas/page.tsx, "use client" bleibt drin,
                                               Export umbenennen in `PlayasPageContent`)
```

Schritt 2 — neue Server-Page `app/playas/page.tsx`:

```tsx
import type { Metadata } from "next";
import { PlayasPageContent } from "@/components/sections/playas-page-content";
import { searchIndex } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: { absolute: "Playas, islas y cayos de Venezuela: las 15 más conocidas" },
  description:
    "Guía de las playas e islas más conocidas de Venezuela: Los Roques, Morrocoy, Mochima, Margarita, Choroní, Playa Medina y más, con ubicación y qué esperar.",
  alternates: { canonical: "/playas" },
  openGraph: {
    title: "Playas, islas y cayos de Venezuela",
    description: "Los Roques, Morrocoy, Mochima, Margarita, Choroní y más.",
    url: "/playas",
    type: "website",
    locale: "es_VE",
    siteName: "Mrs Venezuela",
    images: [{ url: absoluteUrl("/images/cayo-de-agua.jpg"), width: 1600, height: 899, alt: "Cayo de Agua, Los Roques" }],
  },
};

export default function PlayasPage() {
  const beaches = searchIndex.filter((item) => item.kind === "playa");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": absoluteUrl("/playas#webpage"),
        url: absoluteUrl("/playas"),
        name: "Playas, islas y cayos de Venezuela",
        inLanguage: "es",
        isPartOf: { "@id": absoluteUrl("/#website") },
        breadcrumb: { "@id": absoluteUrl("/playas#breadcrumb") },
        mainEntity: { "@id": absoluteUrl("/playas#list") },
      },
      {
        "@type": "ItemList",
        "@id": absoluteUrl("/playas#list"),
        numberOfItems: beaches.length,
        itemListElement: beaches.map((b, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: absoluteUrl(`/playa/${b.slug}`),
          name: b.name,
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": absoluteUrl("/playas#breadcrumb"),
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl() },
          { "@type": "ListItem", position: 2, name: "Playas" },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <PlayasPageContent />
    </>
  );
}
```

Das Muster steht bereits korrekt in `app/estados/page.tsx:29-72` (Server-Page mit eigenem `metadata` + JSON-LD, Client-Kind `StatesHub`).

**Zu `width`/`height` im OG-Block:** `1600, 899` sind an der Datei gelesen, nicht gerundet. `public/images/cayo-de-agua.jpg` ist **1600×899** — die naheliegende Annahme „1600×900" ist falsch. Vor jedem Eintrag prüfen:

```bash
file public/images/cayo-de-agua.jpg     # → "… baseline, precision 8, 1600x899, components 3"
```

Wer die Maße nicht ausliest, lässt `width`/`height` weg. Beide Felder sind optional; ein falscher Wert ist schlechter als kein Wert, weil Scraper danach zuschneiden. Dieselbe Regel gilt für jedes `ImageObject` im JSON-LD (siehe 3.x) und für die Hero-/Discover-Bilder.

**Verifikation nach dem Build (Pflicht):**

```bash
node -e "const h=require('fs').readFileSync('.next/server/app/playas.html','utf8');console.log(h.match(/<link rel=.canonical.[^>]*>/), h.match(/<title>[^<]*<\/title>/))"
```

Der Ist-Zustand vor dem Fix, direkt aus `.next/server/app/playas.html` gelesen: `<link rel="canonical" href="https://mrsvenezuela.com"/>` und `<title>Descubre Venezuela | Guia premium de destinos, cultura y naturaleza</title>`. Nach dem Fix muss dort `/playas` und der eigene Titel stehen.

### 2.2 Globalen Canonical-Fallback entfernen

In `app/layout.tsx` streichen:

```diff
-  alternates: {
-    canonical: "/",
-  },
   openGraph: {
     type: "website",
     locale: "es_VE",
-    url: "/",
```

Danach in `app/page.tsx` neu setzen (die Datei hat aktuell gar kein `metadata`):

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};
```

`openGraph.url` zusätzlich in `app/contacto/page.tsx` und `app/sobre-nosotros/page.tsx` ergänzen — beide senden heute `og:url = https://mrsvenezuela.com`.

**Die 404 wird von diesem Schritt mitgefixt — ohne eigenen Code.** `.next/server/app/_not-found.html` enthält heute `<link rel="canonical" href="https://mrsvenezuela.com"/>`, geerbt aus dem Root-Layout. Fällt der Fallback weg, verschwindet der Canonical von der 404 automatisch. Zwei Dinge, die man dort **nicht** tut:

- Kein `robots: { index: false }` für die 404. Next injiziert `<meta name="robots" content="noindex"/>` selbst — im gebauten `_not-found.html` verifiziert.
- Kein `metadata`-Export in `app/not-found.tsx`. Metadata ist nur aus `layout.tsx` und `page.tsx` exportierbar; ein Export dort bleibt wirkungslos. Der 404-Titel bleibt damit der Layout-Default. Der einzige unterstützte Weg zu einem eigenen 404-Titel wäre `app/global-not-found.tsx` (existiert in 15.5.20 hinter `experimental: { globalNotFound: true }`, lokal verifiziert) — die Datei rendert aber ein vollständiges `<html>`-Dokument und dupliziert die Layout-Shell inklusive Fonts. Auf einer `noindex`-Seite lohnt das nicht.

**Im selben Commit: die drei Parameter-Links.** `components/sections/search-panel.tsx:16-18` verlinkt intern auf `/estados?region=Los+Andes`, `/estados?region=Guayana+y+Amazonas` und `/estados?region=Regi%C3%B3n+Central`. Der Parameter wird ausschließlich clientseitig gelesen; ausgeliefert wird dreimal exakt dasselbe HTML wie unter `/estados`. Der Self-Canonical aus `app/estados/page.tsx:33` fängt die Duplikate ab, aber erst nach dem Crawl — drei Abrufe ohne Gegenwert, und die einzigen internen Links, die überhaupt auf Parameter-URLs zeigen. Sie werden jetzt auf die spätere Zielform umgestellt; sobald `/estados/<region>` existiert (Abschnitt 5), wird die Parametervariante zusätzlich per `redirects()` in `next.config.ts` gemappt, damit extern gesetzte Links nicht ins Leere laufen. Die Regel dahinter steht in der Redirect-Strategie: eine einmal ausgelieferte URL wird nie gelöscht, sondern gemappt, und interne Links wandern **immer im selben Commit** mit.

**Regel für CLAUDE.md:** Jede neue Route MUSS `alternates.canonical` selbst setzen. `alternates` und `openGraph` werden in Next.js flach ersetzt, nicht tief gemerged — die Doku sagt „shallowly merged", verschachtelte Felder aus einem früheren Segment werden vom letzten definierenden Segment überschrieben.

### 2.3 Favicon und Icon-Set

Im gesamten Projekt existiert keine Icon-Datei. Google zeigt in den mobilen SERPs damit den Default-Globus statt der Marke — direkter CTR-Verlust.

**Vorbedingung, kein Nebenschritt: Es gibt kein Logo.** `public/images` enthält 83 Dateien und darunter kein einziges Markenasset; im ganzen Repo existiert keine Logodatei. Alle vier Icon-Dateien unten sind Ableitungen desselben Quellassets, und dasselbe Asset ist später die Quelle für `Organization.logo` (Abschnitt 3) — ein 404 dort entwertet den Organization-Knoten. Der Schritt beginnt also mit einer Gestaltungsaufgabe: eine Wortmarke oder ein Signet, quadratisch, auf transparentem und auf hellem Grund lesbar, in 512 px als Master. Ohne dieses Asset ist 2.3 blockiert und darf nicht mit einem Platzhalter „vorläufig" ausgeliefert werden — Favicon und Logo sind über Monate sichtbar und in Caches.

Liegt der Master vor:

```
app/favicon.ico        32x32
app/icon.png           512x512
app/apple-icon.png     180x180
app/manifest.ts        (MetadataRoute.Manifest, im Typ von 15.5.20 vorhanden)
```

Next injiziert die Link-Tags automatisch. Zusätzlich in `app/layout.tsx` einen separaten Viewport-Export. `themeColor` und `colorScheme` stehen zwar weiterhin im `Metadata`-Typ, sind dort aber **seit Next 14 deprecated** — nicht entfernt; der `viewport`-Export ist der unterstützte Weg:

```tsx
import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ec" },
    { media: "(prefers-color-scheme: dark)", color: "#0f3d2e" },
  ],
  colorScheme: "light",
};
```

### 2.4 `max-image-preview:large` — der eine fehlende Discover-Schalter

Im ganzen Repo kommt `max-image-preview` nicht vor. Ohne diesen Wert liefert Google Discover grundsätzlich nur kleine Thumbnails statt der großen Bildkarte. In `app/layout.tsx` ins `metadata`-Objekt:

```tsx
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
```

Das ist die Voraussetzung, nicht die Garantie: die Bildanforderungen für Discover (dokumentiert ist ausschließlich „mindestens 1200 px Breite") stehen in Abschnitt 8.1.

### 2.5 robots.ts nach Bot-Klassen strukturieren

`app/robots.ts` hat heute nur ein einzelnes rules-Objekt mit `userAgent: "*"`. Wichtig: **Das `other`-Feld aus der Online-Doku existiert erst ab Next 16.3.0** — hier läuft 15.5.20, der Typ `RobotsFile` kennt nur `userAgent`, `allow`, `disallow`, `crawlDelay`. In der Array-Form ist `userAgent` Pflicht (verifiziert in `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts:539-553`).

```tsx
import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/utils";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // 1) Retrieval-/Such-Crawler der Antwortmaschinen. Diese bringen Zitate. Niemals blocken.
      {
        userAgent: [
          "Googlebot", "Bingbot", "Applebot",
          "OAI-SearchBot", "ChatGPT-User",
          "PerplexityBot", "Perplexity-User",
          "Claude-SearchBot", "Claude-User",
          "DuckAssistBot", "MistralAI-User", "Amazonbot",
        ],
        allow: "/",
      },
      // 2) Reine Trainings-Crawler. Bewusst erlaubt: kein Lizenzgeschäft, Modellwissen über
      //    Venezuela nützt der Marke mehr als es kostet.
      {
        userAgent: ["GPTBot", "ClaudeBot", "Google-Extended", "Applebot-Extended", "meta-externalagent", "CCBot"],
        allow: "/",
      },
      // 3) Ohne Nutzen für uns.
      {
        userAgent: ["Bytespider", "Timpibot", "cohere-training-data-crawler", "AhrefsBot", "SemrushBot", "MJ12bot", "DotBot"],
        disallow: "/",
      },
    ],
    sitemap: [absoluteUrl("/sitemap.xml")],
    host: "mrsvenezuela.com",
  };
}
```

Vier Dinge, die man dabei wissen muss:

- **Niemals `/_next/` disallowen.** Googlebot braucht CSS und JS aus `/_next/static/`, um zu rendern.
- **`Google-Extended` und `Applebot-Extended` sind reine robots.txt-Steuertoken ohne eigenen Crawler.** Google dokumentiert wörtlich, dass Google-Extended keinen eigenen User-Agent-String für HTTP-Requests hat und das Token „in a control capacity" verwendet wird; Applebot-Extended crawlt ebenfalls nicht selbst. Beide in Server-Logs zu suchen ist sinnlos. Und: Google-Extended zu blocken verhindert **nicht** AI Overviews oder AI Mode — die laufen über Googlebot, gesteuert über die Googlebot-Direktiven; zusätzliche Anforderungen zur Teilnahme gibt es laut Doku nicht. Google-Extended steuert Gemini-Apps und Vertex-AI-Training/-Grounding, nicht die Suche.
- **Nutzerausgelöste Fetches ignorieren robots.txt nur bei zwei Anbietern.** OpenAI schreibt zu `ChatGPT-User`: „Because these actions are initiated by a user, robots.txt rules may not apply." Perplexity schreibt zu `Perplexity-User`: „Since a user requested the fetch, this fetcher generally ignores robots.txt rules." **Nicht betroffen ist Anthropic:** `ClaudeBot`, `Claude-User` und `Claude-SearchBot` respektieren alle drei robots.txt — auch der nutzerausgelöste `Claude-User`. Ein Disallow gegen ChatGPT-User oder Perplexity-User wäre Scheinsicherheit, ein Disallow gegen Claude-User dagegen wirksam und genau deshalb schädlich: er kostet Zitate.
- **`OAI-SearchBot` ist im Log nur mit vollständigem Muster zu finden.** Der ausgelieferte User-Agent lautet vollständig `Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot`. Ein am Zeilenanfang verankertes Kurzmuster wie `^OAI-SearchBot` matcht **nie**, weil der Token-Name mitten im String steht. Für jede Log- oder Analytics-Auswertung (Abschnitt 7.4) gilt deshalb: ungeankert und case-insensitiv auf den Token-Namen filtern, nicht auf den Zeilenanfang. Derselbe Fehler tritt bei allen Bots auf, die sich als Browser-UA mit `compatible;`-Suffix ausgeben.

**Kurzcheck auf Edge-Ebene (5 Minuten, einmalig):** robots.txt ist nicht die einzige Sperre. Vercel führt ein „AI Bot Managed Ruleset" in der Firewall. Es ist laut Doku standardmäßig inaktiv — im Dashboard als **Allow** beschriftet. Der Check lohnt trotzdem einmal, ist aber nur dann relevant, wenn jemand das Ruleset aktiv auf Deny gestellt hat; die Details stehen in 7.3.

### 2.6 Sitemap korrigieren

`app/sitemap.ts` setzt heute auf jeden der ~55 Einträge `lastModified: new Date()` plus `changeFrequency` und `priority`. Zwei davon sind wirkungslos, einer ist schädlich:

- **`priority` und `changefreq` ignoriert Google vollständig** — wörtlich dokumentiert: „Google ignores `<priority>` and `<changefreq>` values." Sie kosten nur Bytes.
- **`lastModified: new Date()` ist aktiv schädlich.** Jeder Vercel-Deploy meldet damit alle URLs als heute geändert, auch wenn nur eine CSS-Zeile anders ist. Gary Illyes dazu: Wer falsche lastmod-Werte liefert, ist „probably better off without the lastmods" (Zitat verifiziert; die Datierung 16.07.2026 stammt aus Sekundärberichterstattung, nicht aus einer Primärquelle).

**Sofort (5 Minuten, wenn das Datenmodell noch nicht angefasst werden soll):**

```tsx
import type { MetadataRoute } from "next";
import { pageKinds, searchIndex } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

const FALLBACK = "2026-08-24"; // Commit-Datum der Guides, e76e4d1

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/estados", "/playas", "/sobre-nosotros", "/contacto"].map((p) => ({
    url: absoluteUrl(p),
    lastModified: FALLBACK,
  }));

  const detail = pageKinds.flatMap((kind) =>
    searchIndex
      .filter((item) => item.kind === kind)
      .map((item) => ({ url: absoluteUrl(`/${kind}/${item.slug}`), lastModified: FALLBACK })),
  );

  return [...staticPages, ...detail];
}
```

Ein konstantes, korrektes Datum ist besser als ein täglich wanderndes falsches. Sobald echte Daten vorliegen, ersetzt es sich selbst.

**Woche 3–4, mit echtem Datenfeld** (Voraussetzung auch für `dateModified` im Schema und für IndexNow):

```ts
// lib/content.ts, DiscoverItem (Zeile 26-37) ergänzen:
  publishedAt?: string;   // "2026-03-14"
  updatedAt?: string;     // "2026-08-25"

// lib/states/types.ts, StateGuideData ergänzen:
  updatedAt: string;
```

Dann `lastModified: guide?.updatedAt ?? item.updatedAt ?? FALLBACK` und zusätzlich das `images`-Feld pro Eintrag — `MetadataRoute.Sitemap` unterstützt es in 15.5.20 bereits (`SitemapFile`, `images?: string[]`, verifiziert in `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts:554-564`):

```ts
images: [image.startsWith("/") ? absoluteUrl(image) : image].filter((u) => u.startsWith("https://mrsvenezuela.com")),
```

Wikimedia-Remote-URLs gehören **nicht** in die eigene Bild-Sitemap — die Bilder liegen nicht auf der eigenen Domain.

`generateSitemaps` nicht einbauen: die dokumentierten Grenzen sind **50.000 URLs oder 50 MB unkomprimiert je Sitemap-Datei**, hier sind es ~55 URLs. Aufteilen erzeugt nur Verwaltung.

**Einreichen, nicht pingen.** Der Sitemap-Ping-Endpunkt (`google.com/ping?sitemap=…`) wurde im Juni 2023 zur Abschaffung angekündigt und Ende 2023 abgeschaltet; er liefert heute 404. Wer ihn im Deploy-Skript stehen lässt, protokolliert einen Fehlschlag oder — schlimmer — schluckt ihn und hält die Sitemap für gemeldet. Der einzige verbleibende Weg für Google ist die Einreichung im Sitemaps-Report der Search Console (2.7) plus der `Sitemap:`-Eintrag in robots.txt, den 2.5 bereits setzt. Für die IndexNow-Teilnehmer gilt ein eigener Mechanismus (Abschnitt 11) — Google gehört nicht dazu.

---

### 2.7 Google Search Console — Domain-Property per DNS

Die Generative-AI-Reports in GSC sind am **03.06.2026** gestartet, mit Daten ab **18.05.2026** und **ohne Backfill** — jeder Tag ohne verifizierte Property ist unwiederbringlich verloren. Zwei Vorbehalte gehören dazu, ohne dass sie die Dringlichkeit mindern: Der Report liefert ausschließlich **Impressionen** (keine Klicks, keine CTR, keine Queries) für AI Overviews, AI Mode und die KI-Oberflächen in Discover. Und er wurde laut Sekundärquellen zunächst nur für eine **Teilmenge der Property-Inhaber** ausgerollt (Start im UK), die globale Ausweitung ist angekündigt, aber ohne Termin. Der Plan setzt deshalb **nicht** voraus, dass der Report nach der Verifizierung sichtbar ist. Verifiziert wird trotzdem sofort: die Datenerhebung hängt an der Property, nicht an der Sichtbarkeit des Reports.

1. `search.google.com/search-console` → „+ Eigenschaft hinzufügen" → linke Kachel **Domain** → `mrsvenezuela.com` (ohne https://, ohne www).
2. TXT-Wert `google-site-verification=…` kopieren.
3. Vorher prüfen, wo die DNS-Zone liegt: `dig NS mrsvenezuela.com +short`. Steht dort `ns1.vercel-dns.com` o. ä., dann: Vercel-Dashboard → Sidebar **Domains** → Domain anklicken → Advanced Settings → **Name** leer lassen (Apex), **Type** `TXT`, **Value** = der String, **TTL** 60, Comment „GSC verification". Andernfalls beim Registrar eintragen.
4. `dig TXT mrsvenezuela.com +short` prüfen, dann in GSC verifizieren.
5. Sitemaps-Report → `sitemap.xml` einreichen.

Den TXT-Record niemals später aufräumen — die Property wird sonst still un-verifiziert. Der Record gehört in die Zone-Dokumentation mit Kommentar, damit ihn keine spätere DNS-Bereinigung erwischt.

**Zugänge und Absenderidentität — im selben DNS-Durchgang erledigen.** Die Property auf einen privaten Einzelaccount zu legen, bindet die komplette spätere Search-Historie an dieses eine Konto. Bevor die erste Verifizierung steht:

- **Organisationsadresse auf die eigene Domain.** Offizieller Kontakt ist heute `infomrsvenezuela@gmail.com` (`components/institutional/contact-page-content.tsx:6`, `components/sections/home-footer.tsx:70`). Eine Gmail-Adresse ist als Absender eines geschäftsmäßigen Telemediums ein schwaches Trust-Signal und im Impressum unpassend. `info@mrsvenezuela.com` einrichten und überall dort einsetzen, wo der Plan später `Organization.email`, Impressum und Kontaktseite befüllt.
- **SPF, DKIM und DMARC gleich mitsetzen.** Ohne DMARC ist die Domain spoofbar, und eine spoofbare Absenderdomain untergräbt genau die Entität, die Kapitel 8 aufbaut. Reihenfolge: MX und SPF (`v=spf1 include:<provider> -all`) des Mailanbieters, dessen DKIM-Selektor als CNAME/TXT, dann `_dmarc.mrsvenezuela.com` als TXT mit `v=DMARC1; p=none; rua=mailto:…` zum Mitlesen, nach zwei bis vier Wochen Reports auf `p=quarantine`, später `p=reject`.
- **Zweiter Owner und 2FA auf jedem Zugang**: GSC, Bing Webmaster Tools, Vercel, GitHub, Registrar. Jede dieser fünf Stellen ist einzeln ein Single Point of Failure für die Site.
- **Registrar-Lock** (`clientTransferProhibited`) und **Auto-Renew** aktivieren, Registrierung auf die Betreiberin, WHOIS-Kontaktdaten aktuell halten.

### 2.8 Bing Webmaster Tools + IndexNow

Bing ist die Retrieval-Schicht für Microsoft Copilot, speist DuckDuckGo und Ecosia und trägt weiterhin zu ChatGPT Search bei. Ohne Bing-Index ist die Site für diese Oberflächen unsichtbar. Dazu kommt der Report **„AI Performance"**, seit **10.02.2026** als Public Preview verfügbar: Total Citations, Average Cited Pages, Grounding Queries und Zitierungen je URL für Copilot, die KI-Zusammenfassungen in Bing und „select partner integrations". Das ist derzeit die einzige Webmaster-Oberfläche überhaupt, die absolute Zitierungszahlen ausweist — mehr als GSC im Gen-AI-Report liefert. Eine darüber hinausgehende Erweiterung um Intents, Topics, Citation Share und einen Compare-Modus im Juni 2026 kursiert in Sekundärquellen, ist **nicht belegt** und wird hier nicht eingeplant.

1. `bing.com/webmasters` → Kachel **Import from Google Search Console** → Google-Konto → `mrsvenezuela.com` → Import. Damit sofort verifiziert.
2. Sitemap einreichen.
3. **Settings → API Access → API Key → Generate** — dieser Key ist gleichzeitig der IndexNow-Key.
4. `public/<KEY>.txt` anlegen, Inhalt = exakt der Key, UTF-8, ohne BOM. Vercel liefert `.txt` aus `public/` als `text/plain` aus. Vorher prüfen, dass `.vercelignore` kein Muster enthält, das die Datei erwischt.
5. Key als GitHub-Secret `INDEXNOW_KEY` hinterlegen.

`scripts/indexnow.mjs`:

```js
const KEY = process.env.INDEXNOW_KEY;
const HOST = "mrsvenezuela.com";
if (!KEY) { console.log("kein INDEXNOW_KEY – übersprungen"); process.exit(0); }

const arg = process.argv[2];
let urlList;
if (arg) {
  const fs = await import("node:fs");
  urlList = fs.readFileSync(arg, "utf8").split("\n").filter(Boolean);
} else {
  const xml = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

for (let i = 0; i < urlList.length; i += 10000) {
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST, key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urlList.slice(i, i + 10000),
    }),
  });
  console.log(res.status, res.status === 429 ? res.headers.get("retry-after") : "");
}
```

`.github/workflows/indexnow.yml` — Vercel-Account-Webhooks sind laut Doku Pro- und Enterprise-Teams vorbehalten, der Trigger muss deshalb aus GitHub kommen:

```yaml
name: IndexNow
on:
  push:
    branches: [main]
  workflow_dispatch:
jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: sleep 180        # Vercel-Deploy abwarten
      - uses: actions/setup-node@v4
        with: { node-version: 22 }
      - run: node scripts/indexnow.mjs
        env:
          INDEXNOW_KEY: ${{ secrets.INDEXNOW_KEY }}
```

**Nur ein Endpunkt anpingen** (`api.indexnow.org`) — die IndexNow-FAQ sagt zu, dass die Meldung an alle teilnehmenden Suchmaschinen geteilt wird. Teilnehmer sind **Amazon, Bing, Naver, Seznam.cz, Yandex und Yep**; **Google nimmt an IndexNow nicht teil**, für Google bleibt ausschließlich die Sitemap der Weg. Pro POST sind **bis zu 10.000 URLs** erlaubt — daher die `slice(i, i + 10000)`-Schleife, die bei ~55 URLs zwar nie greift, aber den Ausbau auf mehrere hundert Seiten ohne Änderung übersteht. **Nur geänderte URLs** senden, sobald `updatedAt` existiert; das vollständige Sitemap-Set bei jedem Push zu melden ist der schnellste Weg in eine Drosselung (HTTP 429, `Retry-After` wird im Script bereits geloggt).

### 2.9 Domain-Historie und Altlasten prüfen

Der gesamte Plan unterstellt, dass die Site unsichtbar ist, weil ihr technische Fundamente und Content-Tiefe fehlen. Diese Annahme ist ungeprüft. Eine geerbte manuelle Maßnahme oder ein Drop-Catch-Spamprofil erklärt fehlende Sichtbarkeit besser als jedes Canonical-Problem — und macht jede Content-Investition wertlos, solange sie besteht. Vier Prüfungen, zusammen unter einer Stunde, direkt nach der Verifizierung und **vor** jeder inhaltlichen Maßnahme:

1. **WHOIS-Erstregistrierung.** `whois mrsvenezuela.com`, Feld `Creation Date`. Liegt es deutlich vor dem Projektstart, war die Domain schon einmal etwas anderes, und alles Weitere ist keine Formalie mehr.
2. **Vornutzung im Archiv.** `web.archive.org/web/*/mrsvenezuela.com` für Sprache, Thema und Zeitraum; dazu das URL-Inventar über `web.archive.org/cdx/search/cdx?url=mrsvenezuela.com*&output=text&fl=original&collapse=urlkey`. Alte URLs, die noch Links tragen, gehören in `lib/redirects.ts` (C2) und nicht in eine 404.
3. **GSC → „Sicherheit und manuelle Maßnahmen"**, beide Unterpunkte einzeln. Eine geerbte Maßnahme verjährt nicht von selbst: Sie erfordert einen Antrag auf erneute Überprüfung, und der setzt voraus, dass die Altlast nachweislich entfernt ist. Das kann die Reihenfolge des gesamten Plans umwerfen.
4. **Ahrefs Webmaster Tools** (für verifizierte Domains kostenlos) → Backlink-Profil und Anchor-Verteilung. Warnzeichen: fremdsprachige Anchor-Cluster, Pharma-/Casino-/Adult-Anchors, ein Referring-Domain-Peak vor dem Projektstart. Eine Disavow-Datei nur bei tatsächlich geerbtem Spam und im Zusammenhang mit einer dokumentierten Maßnahme anlegen — prophylaktisches Disavowen entfernt vor allem funktionierende Links.

Das Ergebnis wird auch dann festgehalten, wenn es negativ ausfällt. „Geprüft am TT.MM.JJJJ: Creation Date X, keine Archivkopien vor Y, keine manuelle Maßnahme, kein verwertbares Altlink-Profil" ist eine Aussage, die niemand ein zweites Mal recherchieren muss — und die Voraussetzung dafür, spätere Ranking-Ausbleiber sauber der Umsetzung und nicht einer unbekannten Vorgeschichte zuzuschreiben.

### 2.10 Preview-Deployments

Vercel setzt auf jedes Preview-Deployment automatisch `X-Robots-Tag: noindex`. Es ist also **nichts zu tun** — mit genau einer Ausnahme, die die Doku wörtlich benennt: Der Header entfällt, sobald einer Nicht-Produktions-Branch eine eigene (Custom-)Domain zugewiesen ist.

Prüfen: `curl -sI <preview-url> | grep -i x-robots-tag`

Härtung ohne Kosten (auf Hobby verfügbar): Projekt → Settings → **Deployment Protection** → Vercel Authentication, Scope Standard Protection.

Kein `VERCEL_ENV`-Abfrage in `app/robots.ts` einbauen — bei falscher Bedingung deindexiert man die Produktion. Und `lib/utils.ts:9` hardcodet `https://mrsvenezuela.com`: Previews zeigen ihre Canonicals damit auf die Produktion, was hier genau richtig ist.

### 2.11 Apex/www und Speed Insights

- Apex/www gehört **nicht in Code**: Vercel-Projekteinstellungen → Domains → beide hinzufügen, `www.mrsvenezuela.com` als 308-Redirect auf `mrsvenezuela.com` (Richtung muss zu `absoluteUrl()` in `lib/utils.ts:9` passen). Vercel erledigt das auf Edge-Ebene.
- `npm i @vercel/speed-insights`, dann in `app/layout.tsx:75` neben `<Analytics />` ein `<SpeedInsights />`. Nur damit gibt es Core-Web-Vitals-**Felddaten** — Lighthouse-Laborwerte zählen für Rankings nicht.

### 2.12 Gezielt Indexierung beantragen — für maximal 7 URLs

GSC → oberes Suchfeld → URL prüfen → **Indexierung beantragen**. Gesichert ist: Es **gibt** ein Kontingent, es hängt an der Property und nicht am Konto, und wiederholtes Beantragen derselben URL bringt nichts. Eine **Zahl nennt Google nicht** — kursierende Werte um 10–12 URLs pro Tag sind Praxisschätzungen und taugen nicht als Planungsgrundlage. Operativ heißt das: die wichtigsten URLs zuerst, an einem Tag, keine Wiederholung, und keine Erwartung, damit den Rest der Site nachziehen zu können.

Nur für: `/`, `/estados`, `/playas`, `/parque-nacional/canaima`, `/estado/merida`, `/playa/los-roques`, `/sobre-nosotros`. Für die restlichen ~48 URLs ist ausschließlich die Sitemap der Weg.

**Die Google Indexing API ist kein Ausweg.** Sie ist laut Doku ausschließlich für Seiten mit `JobPosting` oder mit `BroadcastEvent` innerhalb eines `VideoObject` zugelassen, bei einer Default-Quota von 200 Publish-Requests pro Tag und Projekt. Keine Route dieser Site erfüllt die Typ-Voraussetzung; Einreichungen für redaktionelle Seiten sind wirkungslos.

**Kontrolle der Wirkung** läuft über die URL-Prüfung („Abgedeckte URL" gegen Live-Test — der Live-Test sagt nur, dass die Seite abrufbar ist, nicht dass sie indexiert wurde), den Seitenindexierungs-Report und den Sitemaps-Report in GSC, dazu **Bing WMT → Crawl Information**. **Nicht** über Vercel Log Drains: Das Feature ist Pro/Enterprise, und da alle Routen prerendert sind, werden Crawler-Requests direkt aus dem CDN bedient und tauchen in den Function-Logs ohnehin nicht auf. Wer Bot-Zugriffe wirklich pro User-Agent sehen will, braucht einen anderen Weg als Vercel-Logs (siehe Kapitel 7).

---

## 3. Strukturierte Daten

### 3.1 Grundregeln

1. **Ein einziges `<script type="application/ld+json">` pro Seite mit einem `@graph`.** Getrennte Blöcke werden vom Schema Markup Validator getrennt bewertet, `@id`-Referenzen über Blockgrenzen sind nicht garantiert auflösbar.
2. **Jeder Knoten bekommt eine `@id`** nach dem Muster `<kanonische URL>#<rolle>`. Site-weite Knoten hängen an der Root-URL.
3. **Referenzen sind immer `{ "@id": "..." }`**, nie ein wiederholtes Objekt. Das aktuelle `isPartOf`-Duplikat in `lib/page-factory.tsx:72-76` erzeugt zwei konkurrierende `WebSite`-Entitäten.
4. **Genau eine Primärentität pro Seite**, verbunden über `WebPage.about` und `Entity.mainEntityOfPage`.
5. **Alle URLs absolut.** `lib/page-factory.tsx:70` gibt `image: item.image` roh aus — für lokale Bilder also `/images/salto-angel.jpg`. Zwei Zeilen darüber (`:23`) macht dieselbe Datei es im Metadata-Pfad korrekt.
6. **Nichts auszeichnen, was nicht sichtbar ist.** Das ist der einzige Punkt mit Manual-Action-Risiko.
7. **Nichts raten.** Keine erfundenen Geokoordinaten, keine geschätzten Bildmaße, keine per Namensmatch generierten Wikidata-IDs.
8. **Kein Knoten zeigt auf eine URL, die es nicht gibt.** Das betrifft konkret `Organization.logo` (kein Logo-Asset im Projekt, siehe 3.4) und `publishingPrinciples`/`correctionsPolicy` (Route aus Abschnitt 9 noch nicht ausgeliefert). Ein 404 an dieser Stelle entwertet den Knoten, ein fehlender Key kostet nichts.

Zu Regel 7 im Detail: `lib/states/regions.ts:22-27` definiert `StateLocation` mit `x`/`y` — laut Kommentar in der Datei „Posición de la capital sobre el mapa político, en % de ancho y alto". `lib/content.ts:117-142` führt nochmals andere Prozentwerte derselben Art. Das sind Bildkoordinaten, **keine** Geokoordinaten. `GeoCoordinates` wird deshalb nirgends ausgegeben, bis echte Werte aus einer benannten Quelle vorliegen. Ebenso bei Wikidata: Estado Bolívar (Q191164), Ciudad Bolívar (Q26906) und Simón Bolívar sind drei verschiedene Entitäten — jede QID einzeln verifizieren, nie aus dem Namen ableiten.

### 3.2 Typ-Mapping pro Routentyp

`lib/page-factory.tsx:65` typisiert heute alles außer `articulo` als `TouristDestination` — eine Arepa ist damit ein Ort. Ersetzen durch eine Tabelle. Alle Typen am 25.08.2026 per HTTP-Status gegen schema.org geprüft; aktuelle Release ist **V30.0 vom 19.03.2026**. Ergebnis: `TravelGuide`, `NationalPark` und `Food` liefern **404** und existieren nicht. Bestätigt vorhanden (200): `Beach`, `Mountain`, `Park`, `State`, `City`, `TouristDestination`, `TouristAttraction`, `AdministrativeArea`, `Guide`.

| Route | `@type` | Anmerkung |
|---|---|---|
| `/estado/[slug]` | `["State","TouristDestination"]` | Mehrfachtypisierung ist gültig, beide sind Place-Subtypen |
| `/estado/distrito-capital` | `["AdministrativeArea","TouristDestination"]` | Distrito Capital ist kein „State" |
| `/ciudad/[slug]` | `["City","TouristDestination"]` | |
| `/parque-nacional/[slug]` | `["Park","TouristAttraction"]` | **`NationalPark` existiert nicht** (404) |
| `/playa/[slug]` | `["Beach","TouristAttraction"]` | |
| `/montana/[slug]` | `["Mountain","TouristAttraction"]` | |
| `/animal`, `/planta`, `/comida`, `/historia`, `/articulo` | `Article` + `about: Thing` | **`Food` existiert nicht.** Kein `Recipe` ohne echte Zubereitung |
| `/` | `WebSite` + `Organization` + `WebPage` + `Country` | statt `TravelGuide` (404) |
| `/estados`, `/playas` | `CollectionPage` + `ItemList` + `BreadcrumbList` | |
| `/sobre-nosotros` | `AboutPage` + `mainEntity → #organization` | |
| `/contacto` | `ContactPage` + `mainEntity → #organization` | |

Ungültige Properties am Place-Knoten entfernen: `headline` (dupliziert nur `name`), `inLanguage` und `isPartOf` gehören auf den `WebPage`-Knoten, nicht auf `TouristDestination` (`isPartOf` und `inLanguage` sind CreativeWork-Properties, `Place` ist keine).

### 3.3 Vokabular ohne Google-Feature — trotzdem oder gerade nicht ausliefern

Vier Typen, über die 2026 regelmäßig falsch entschieden wird. Maßstab ist nicht „erzeugt ein Rich Result", sondern „beschreibt die Seite korrekt und ist durch sichtbaren Inhalt gedeckt".

| Vokabular | Stand 2026 | Entscheidung hier |
|---|---|---|
| `FAQPage` | Rich Result seit **07.05.2026** abgeschaltet, Doku am **15.06.2026** entfernt. Das Ende des API-Supports im August 2026 nur **laut Branchenberichterstattung**, nicht von Google bestätigt | **Ausliefern** — nur bei echten, auf der Seite sichtbaren Fragen. Gültiges Vokabular, das KI-Systeme lesen; Frage-Antwort-Paare sind das beste Passagenmaterial, das die Guides haben |
| `HowTo` | Ankündigung 08.08.2023, vollständige Entfernung Desktop September 2023 | **Nicht ausliefern** |
| `SearchAction` / Sitelinks-Searchbox | ab **21.11.2024** entfernt; Markup ohne Wirkung, erzeugt aber keine GSC-Fehler | **Nicht ausliefern.** Der `WebSite`-Knoten bleibt trotzdem — er ist der `@id`-Anker, an dem `isPartOf` und `publisher` hängen. Zusätzlich fehlt hier die Voraussetzung: `search-overlay.tsx` arbeitet rein clientseitig, es gibt keine indexierbare Such-URL |
| `Guide` | existiert (HTTP 200), war nie ein Google-Feature | Vokabularisch korrekter Ersatz für das nicht existierende `TravelGuide`. Als Zweittyp am `WebPage`-Knoten (`["WebPage","Guide"]`) formal zulässig; Nutzen ausschließlich auf der Entitäts- und KI-Seite, kein SERP-Effekt |

### 3.4 Neue Datei `lib/schema.ts`

```ts
import type { ContentKind, DiscoverItem } from "@/lib/content";
import type { StateGuideData } from "@/lib/states/types";
import { absoluteUrl } from "@/lib/utils";

export const ID = {
  website: absoluteUrl("/#website"),
  org: absoluteUrl("/#organization"),
  logo: absoluteUrl("/#logo"),
  page: (p: string) => absoluteUrl(`${p}#webpage`),
  entity: (p: string) => absoluteUrl(`${p}#entity`),
  image: (p: string) => absoluteUrl(`${p}#primaryimage`),
  crumb: (p: string) => absoluteUrl(`${p}#breadcrumb`),
  faq: (p: string) => absoluteUrl(`${p}#faq`),
};

export const SITE_NAME = "Mrs Venezuela";
export const SITE_ALT_NAME = "Descubre Venezuela";

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/mrsvenezuela_1/",
  "https://www.tiktok.com/@mrsvenezuela1",
]; // Quelle: components/sections/home-footer.tsx:8-9 — von dort importieren, nicht duplizieren

// Vorbedingungen, nicht Geschmacksfragen. Beide bleiben false, bis das Asset bzw. die Route real existiert.
const LOGO_ASSET_LIVE = false;        // public/images enthält kein Logo — siehe unten
const EDITORIAL_POLICY_LIVE = false;  // /politica-editorial aus Abschnitt 9

export const toAbsolute = (src: string) => (src.startsWith("/") ? absoluteUrl(src) : src);

export const placeTypeFor: Partial<Record<ContentKind, string[]>> = {
  estado: ["State", "TouristDestination"],
  ciudad: ["City", "TouristDestination"],
  "parque-nacional": ["Park", "TouristAttraction"],
  playa: ["Beach", "TouristAttraction"],
  montana: ["Mountain", "TouristAttraction"],
};

export const articleKinds: ContentKind[] = ["animal", "planta", "comida", "historia", "articulo"];

export const CC_LICENSE_URL: Record<string, string> = {
  "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
  "CC BY-SA 2.5": "https://creativecommons.org/licenses/by-sa/2.5/",
  "CC BY-SA 3.0": "https://creativecommons.org/licenses/by-sa/3.0/",
  "CC BY 4.0": "https://creativecommons.org/licenses/by/4.0/",
  "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
};

export const organizationNode = () => ({
  "@type": "Organization",
  "@id": ID.org,
  name: SITE_NAME,
  alternateName: SITE_ALT_NAME,
  url: absoluteUrl("/"),
  email: "infomrsvenezuela@gmail.com",
  description: "Guía editorial independiente sobre destinos, naturaleza y cultura de Venezuela.",
  sameAs: SOCIAL_PROFILES,
  knowsLanguage: ["es", "en", "de", "fr", "zh"],
  ...(LOGO_ASSET_LIVE
    ? {
        logo: { "@type": "ImageObject", "@id": ID.logo, url: absoluteUrl("/images/logo-512.png"), width: 512, height: 512 },
        image: { "@id": ID.logo },
      }
    : {}),
  ...(EDITORIAL_POLICY_LIVE
    ? {
        publishingPrinciples: absoluteUrl("/politica-editorial"),
        correctionsPolicy: absoluteUrl("/politica-editorial#correcciones"),
      }
    : {}),
});

export const websiteNode = () => ({
  "@type": "WebSite",
  "@id": ID.website,
  url: absoluteUrl("/"),
  name: SITE_NAME,
  alternateName: SITE_ALT_NAME,
  inLanguage: "es",
  publisher: { "@id": ID.org },
  // bewusst kein potentialAction/SearchAction — siehe 3.3
});

export function breadcrumbNode(kind: ContentKind, item: DiscoverItem, path: string) {
  const hub: Partial<Record<ContentKind, { label: string; href: string }>> = {
    estado: { label: "Estados", href: "/estados" },
    playa: { label: "Playas", href: "/playas" },
    // Weitere Kinds erst eintragen, wenn der Hub als echte URL existiert.
  };
  const middle = hub[kind];
  const list = [{ "@type": "ListItem", position: 1, name: "Inicio", item: absoluteUrl("/") }];
  if (middle) list.push({ "@type": "ListItem", position: 2, name: middle.label, item: absoluteUrl(middle.href) });
  list.push({ "@type": "ListItem", position: list.length + 1, name: item.name });
  return { "@type": "BreadcrumbList", "@id": ID.crumb(path), itemListElement: list };
}
```

Drei Anmerkungen zu Abweichungen gegenüber der naheliegenden Fassung:

**`logo` fehlt bewusst.** `public/images` enthält **kein** Logo-Asset — im gesamten Projekt existiert keine Markenlogodatei. Eine `@id`-Referenz `image: { "@id": ID.logo }` ohne zugehörigen Knoten wäre zusätzlich eine unauflösbare Referenz und verstößt gegen Grundregel 2. **Ein Logo zu gestalten ist damit Vorbedingung, kein Nebenschritt** — dasselbe Asset speist `app/icon.png`, `apple-icon.png` und das Manifest. Bis dahin: Key weglassen, nicht auf `/images/logo-512.png` zeigen.

**`publishingPrinciples`/`correctionsPolicy`** zeigen auf die Redaktions-, Korrektur- und KI-Kennzeichnungsrichtlinie aus Abschnitt 9. Beide Properties sind der maschinenlesbare Teil dessen, was dort als eigene Seite entsteht; `EDITORIAL_POLICY_LIVE` wird im selben Commit umgelegt, in dem die Route ausgeliefert wird.

**Trailing Slash.** `absoluteUrl()` liefert `https://mrsvenezuela.com` **ohne** Schrägstrich (`lib/utils.ts:8-12`), `absoluteUrl("/")` **mit**. Im Graph muss dieselbe Ressource überall dieselbe Zeichenkette sein, sonst entstehen zwei Entitäten für die Startseite — deshalb durchgehend `absoluteUrl("/")`.

Die `email` bleibt vorerst die bestehende Gmail-Adresse. Sie ist ein schwaches Trust-Signal und wird ersetzt, sobald die Domain-Mailbox steht; das gehört zusammen mit Impressum und Zugriffsrechten in Abschnitt 9.

### 3.5 Vollständiges Beispiel: `/estado/bolivar`

Wikidata-IDs verifiziert per es.wikipedia-API (25.08.2026): Venezuela Q717, Estado Bolívar Q191164, Estado Mérida Q165582, PN Canaima Q1244337, Pico Bolívar Q213704, Salto Ángel Q80299, Ciudad Bolívar Q26906. **Alle weiteren QIDs einzeln verifizieren, nie per Namensmatch raten.**

Der `Organization`-Knoten unten zeigt den Zustand **nach** Abschnitt 9: mit `publishingPrinciples`/`correctionsPolicy`, weiterhin ohne `logo`. Vorher entfallen die beiden Policy-Keys ersatzlos.

```json
{
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "Organization", "@id": "https://mrsvenezuela.com/#organization",
      "name": "Mrs Venezuela", "alternateName": "Descubre Venezuela",
      "url": "https://mrsvenezuela.com/", "email": "infomrsvenezuela@gmail.com",
      "publishingPrinciples": "https://mrsvenezuela.com/politica-editorial",
      "correctionsPolicy": "https://mrsvenezuela.com/politica-editorial#correcciones",
      "sameAs": ["https://www.instagram.com/mrsvenezuela_1/", "https://www.tiktok.com/@mrsvenezuela1"],
      "knowsLanguage": ["es","en","de","fr","zh"] },

    { "@type": "WebSite", "@id": "https://mrsvenezuela.com/#website",
      "url": "https://mrsvenezuela.com/", "name": "Mrs Venezuela",
      "alternateName": "Descubre Venezuela", "inLanguage": "es",
      "publisher": { "@id": "https://mrsvenezuela.com/#organization" } },

    { "@type": "WebPage", "@id": "https://mrsvenezuela.com/estado/bolivar#webpage",
      "url": "https://mrsvenezuela.com/estado/bolivar",
      "name": "Bolívar: guía de viaje del Orinoco, Canaima y la Gran Sabana",
      "description": "…guide.seo.description…",
      "isPartOf": { "@id": "https://mrsvenezuela.com/#website" },
      "about": { "@id": "https://mrsvenezuela.com/estado/bolivar#entity" },
      "primaryImageOfPage": { "@id": "https://mrsvenezuela.com/estado/bolivar#primaryimage" },
      "breadcrumb": { "@id": "https://mrsvenezuela.com/estado/bolivar#breadcrumb" },
      "inLanguage": "es",
      "datePublished": "2026-08-18",
      "dateModified": "2026-08-25",
      "author": { "@id": "https://mrsvenezuela.com/#autora" },
      "publisher": { "@id": "https://mrsvenezuela.com/#organization" } },

    { "@type": "BreadcrumbList", "@id": "https://mrsvenezuela.com/estado/bolivar#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://mrsvenezuela.com/" },
        { "@type": "ListItem", "position": 2, "name": "Estados", "item": "https://mrsvenezuela.com/estados" },
        { "@type": "ListItem", "position": 3, "name": "Bolívar" } ] },

    { "@type": ["State", "TouristDestination"], "@id": "https://mrsvenezuela.com/estado/bolivar#entity",
      "name": "Estado Bolívar", "alternateName": "Bolívar",
      "description": "El estado más extenso de Venezuela: Orinoco, Guayana, tepuyes y Gran Sabana.",
      "url": "https://mrsvenezuela.com/estado/bolivar",
      "mainEntityOfPage": { "@id": "https://mrsvenezuela.com/estado/bolivar#webpage" },
      "image": { "@id": "https://mrsvenezuela.com/estado/bolivar#primaryimage" },
      "sameAs": ["https://www.wikidata.org/wiki/Q191164",
                 "https://es.wikipedia.org/wiki/Estado_Bol%C3%ADvar"],
      "containedInPlace": { "@type": "Country", "@id": "https://www.wikidata.org/wiki/Q717",
        "name": "Venezuela", "sameAs": "https://es.wikipedia.org/wiki/Venezuela" },
      "additionalProperty": [
        { "@type": "PropertyValue", "name": "Capital", "value": "Ciudad Bolívar" },
        { "@type": "PropertyValue", "name": "Región", "value": "Guayana venezolana" },
        { "@type": "PropertyValue", "name": "Superficie", "value": "240.528 km²" },
        { "@type": "PropertyValue", "name": "Gentilicio", "value": "Bolivarense" } ],
      "includesAttraction": [
        { "@type": ["Park","TouristAttraction"], "@id": "https://mrsvenezuela.com/parque-nacional/canaima#entity",
          "name": "Parque Nacional Canaima",
          "url": "https://mrsvenezuela.com/parque-nacional/canaima",
          "sameAs": "https://www.wikidata.org/wiki/Q1244337" } ] },

    { "@type": "ImageObject", "@id": "https://mrsvenezuela.com/estado/bolivar#primaryimage",
      "url": "https://mrsvenezuela.com/images/states/bolivar.jpg",
      "contentUrl": "https://mrsvenezuela.com/images/states/bolivar.jpg",
      "caption": "Salto Ángel cayendo del Auyantepuy entre la selva de Canaima",
      "representativeOfPage": true },

    { "@type": "FAQPage", "@id": "https://mrsvenezuela.com/estado/bolivar#faq",
      "isPartOf": { "@id": "https://mrsvenezuela.com/estado/bolivar#webpage" },
      "mainEntity": [ /* NUR aus guide.faqs.items — sichtbar auf der Seite */ ] }
  ]
}
```

Alle Werte stammen aus dem Repo, keiner ist gesetzt: `additionalProperty` speist sich direkt aus `guide.know.facts` (`lib/states/data/bolivar.ts:34-41`, Typ `StateFact = { label; value }` in `lib/states/types.ts:16` — `label` wird zu `PropertyValue.name`), `includesAttraction` aus `guide.places.items` — aber **nur** aus Einträgen mit gesetztem `href` (17 verifizierte interne Routen im Repo; für Bolívar genau einer, `lib/states/data/bolivar.ts:98`). Bild und `caption` kommen aus `photos.saltoAngelSelva` (`:4`), `/images/states/bolivar.jpg` existiert. Beides ist eine reine Map-Operation ohne Redaktionsarbeit.

Der `ImageObject`-Knoten trägt hier bewusst **keine** Lizenzfelder: Für die lokalen Dateien in `public/images` gibt es bis heute keine Herkunftsdokumentation. Damit erfüllt er zwar die Pflichtangabe `contentUrl`, qualifiziert sich aber nicht für die Bildlizenz-Auszeichnung (siehe 3.7 und 3.8). Auch `width`/`height` fehlen: `cayo-de-agua.jpg` ist 1600×899 und nicht 1600×900 — Maße werden im Build aus der Datei gelesen oder gar nicht ausgegeben.

### 3.6 Umbau `lib/page-factory.tsx`

Vier konkrete Eingriffe:

```diff
  // Zeile 24: Guide-Titel absolut ausliefern, sonst hängt das Template
  //           in app/layout.tsx:28 nochmals 21 Zeichen an (79–90 Zeichen)
- const title = guide?.seo.title ?? item.name;
+ const title = guide?.seo.title
+   ? { absolute: guide.seo.title }
+   : `${item.name}: qué ver, cuándo ir y cómo llegar`;

  // Zeile 32-39: siteName ergänzen, falsche Bildmaße raus
  openGraph: {
+   siteName: "Mrs Venezuela",
-   images: [{ url: image, width: 1200, height: 800, alt: item.name }],
+   images: [{ url: image, alt: item.name }],   // oder echte Maße, nie geraten
  },

  // Zeile 70: absolute Bild-URL
- image: item.image,
+ image: { "@id": ID.image(path) },

  // Zeile 86-103: generischen FAQ-Fallback ersatzlos streichen
- : [ { "@type": "Question", name: `¿Cuál es la mejor época…` }, … ]
```

`siteName` steht bereits in `app/layout.tsx:39` — es muss trotzdem hier erneut gesetzt werden. Next.js merged Metadata-Objekte **flach**: verschachtelte Felder wie `openGraph` und `robots` aus einem früheren Segment werden vom letzten Segment, das sie definiert, **vollständig überschrieben**. Jede Seite, die einen eigenen `openGraph`-Block exportiert, verliert damit `siteName` und `images` aus dem Root-Layout. Dieselbe Mechanik ist der Grund, warum jede Detailseite ihr `og:image` explizit mitgeben muss, statt sich auf `/images/opengraph-venezuela.jpg` aus `app/layout.tsx:43-50` zu verlassen.

Der FAQPage-Knoten wird nur noch gerendert, wenn echte, sichtbare Fragen existieren:

```tsx
const faqs = guide?.faqs.items ?? beachGuides[item.slug]?.faqs;
...(faqs?.length
  ? [{ "@type": "FAQPage", "@id": ID.faq(path), isPartOf: { "@id": ID.page(path) },
       mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question,
         acceptedAnswer: { "@type": "Answer", text: f.answer } })) }]
  : []),
```

**Nebeneffekt mit echtem Gewinn:** In `components/content/detail-page.tsx:309` liegen 13 echte, sichtbar gerenderte Strand-FAQ-Blöcke (`beachGuides`, verifiziert: 13 `faqs`-Arrays zwischen `:333` und `:595`). Die gehören in eine serverfähige Datei (`lib/beach-guides.ts`), damit page-factory sie lesen kann. Damit hätten 13 Strandseiten erstmals echtes, seitenspezifisches FAQ-Markup statt Boilerplate — und zwar unter der Bedingung aus 3.3: kein Google-Feature mehr, aber sichtbare, zitierfähige Substanz für KI-Systeme.

### 3.7 Bildherkunft als Datenquelle: `lib/image-credits.ts`

Die Bildherkunft ist im Repo heute dreifach unvollständig, und das blockiert gleich drei Ausgaben: Lizenz-JSON-LD, sichtbare Attribution und die Sammelseite. Bestandsaufnahme, am Repo gezählt:

- **`StateCredit` ist nur in 6 von 23 Guides gefüllt** — merida 4, zulia 3, falcon 3, sucre/la-guaira/carabobo je 1, zusammen 13 Nachweise. Die restlichen 17 Guides liefern keine.
- **Sechs Commons-Hotlinks haben gar kein Feld:** fünf `commonsFile()`-Aufrufe in `lib/content.ts:46,55,58,60,61` (Los Roques, Puerto Cabello, Playa Medina, Chichiriviche, Macuto) plus die hartcodierte `Special:FilePath`-URL für `picoBolivar` in `:63-64`. `DiscoverItem` (`lib/content.ts:26-37`) kennt nur `image: string` — es gibt keinen Platz für Autor oder Lizenz.
- **Für die 83 lokalen Dateien in `public/images` existiert keinerlei Herkunftsnachweis.**

Konsequenz: eine einzige Quelle für alle drei Fälle, gekeyt so, dass beide Adressierungsformen aufgelöst werden.

```ts
// lib/image-credits.ts
export type ImageCredit = {
  title: string;        // Werktitel, bei Commons der Dateititel ohne Endung
  source: "commons" | "own" | "licensed";
  author: string;
  license: string;      // Anzeigename: "CC BY-SA 4.0"
  licenseUrl: string;   // Deed-URL — siehe CC_LICENSE_URL in lib/schema.ts
  filePage: string;     // Commons-Dateiseite bzw. Herkunftsnachweis
  changes?: string;     // bei CC BY-SA Pflicht, sobald bearbeitet: "Zuschnitt auf 16:9"
};

const COMMONS_PREFIX = "https://commons.wikimedia.org/wiki/Special:FilePath/";

export const imageCredits: Record<string, ImageCredit> = {
  // Commons-Hotlinks: Schlüssel ist der Dateiname, wie ihn commonsFile() erhält
  "Village Gran Roque.jpg": {
    title: "Village Gran Roque",
    source: "commons",
    author: "…",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0/",
    filePage: "https://commons.wikimedia.org/wiki/File:Village_Gran_Roque.jpg",
  },
  // Lokale Dateien: Schlüssel ist der public-Pfad
  "/images/states/merida.jpg": { /* … */ },
};

export function creditFor(src: string): ImageCredit | undefined {
  if (src.startsWith(COMMONS_PREFIX)) {
    const file = decodeURIComponent(src.slice(COMMONS_PREFIX.length).split("?")[0]);
    return imageCredits[file];
  }
  return imageCredits[src];
}
```

Der `startsWith`-Zweig fängt beide Varianten ab: die von `commonsFile()` erzeugten URLs und die hartcodierte Pico-Bolívar-URL, weil beide denselben Präfix und dieselbe `?width=`-Query tragen. Seed-Daten sind die 13 vorhandenen `StateCredit`-Einträge; sie werden einmal umgezogen und danach nicht mehr von Hand gepflegt.

**Drei Verbraucher, eine Quelle:**

1. **`ImageObject`-JSON-LD** über `imageObjectNode()` (3.8). Ohne Eintrag entstehen keine Lizenzfelder — dann fehlt das Licensable-Merkmal, aber es steht auch nichts Falsches im Graph.
2. **Sichtbare Attribution** als `<figure>/<figcaption>`. JSON-LD ist unsichtbar und erfüllt die Attributionspflicht **nicht**.
3. **Sammelseite `/creditos`**, aus derselben Map generiert und im Footer verlinkt.

```tsx
// components/content/credited-image.tsx — Server Component
import Image from "next/image";
import { creditFor } from "@/lib/image-credits";

type Props = { src: string; alt: string } & Omit<React.ComponentProps<typeof Image>, "src" | "alt">;

export function CreditedImage({ src, alt, ...rest }: Props) {
  const credit = creditFor(src);
  return (
    <figure>
      <Image src={src} alt={alt} {...rest} />
      {credit && (
        <figcaption className="mt-2 text-xs leading-5 text-[#89918d]">
          {alt} · Foto: {credit.author},{" "}
          <a href={credit.licenseUrl} rel="license noopener" target="_blank">{credit.license}</a>,{" "}
          <a href={credit.filePage} rel="noopener" target="_blank">{credit.title}</a>
          {credit.changes ? ` · Bearbeitung: ${credit.changes}` : null}
        </figcaption>
      )}
    </figure>
  );
}
```

```tsx
// app/creditos/page.tsx
import type { Metadata } from "next";
import { imageCredits } from "@/lib/image-credits";

export const metadata: Metadata = {
  title: "Créditos de imágenes",
  description: "Autoría, licencia y fuente de cada fotografía publicada en Mrs Venezuela.",
  alternates: { canonical: "/creditos" },
};

export default function CreditosPage() {
  const entries = Object.entries(imageCredits).sort(([, a], [, b]) => a.title.localeCompare(b.title));
  return (
    <main id="main" className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">Créditos de imágenes</h1>
      <ul className="mt-8 space-y-3 text-sm leading-6">
        {entries.map(([key, c]) => (
          <li key={key}>
            <a href={c.filePage} rel="noopener" target="_blank">{c.title}</a> — {c.author},{" "}
            <a href={c.licenseUrl} rel="license noopener" target="_blank">{c.license}</a>
            {c.changes ? ` · ${c.changes}` : null}
          </li>
        ))}
      </ul>
    </main>
  );
}
```

`StateCredit` (`lib/states/types.ts:73`) bleibt als Typ bestehen, wird aber zur **Projektion** statt zur Quelle: `credits` erzeugt sich aus den `src`-Werten der im Guide verwendeten Fotos, `filePage` wird zu `href`. Damit sind leere `credits`-Arrays strukturell nicht mehr möglich, und der bereits vorhandene, heute meist leere Credits-Block in `components/content/state-editorial-guide.tsx:503-521` füllt sich ohne weitere Redaktionsarbeit. Ein Build-Gate über dieselbe Map — jedes in `searchIndex`, `heroSlides` oder einem Guide referenzierte Bild ohne Eintrag bricht den Build — gehört in die CI-Kette.

Zwei Abhängigkeiten nach außen: Die **rechtliche** Seite (CC-BY-SA-Pflichten, Bilder ohne belegbare Herkunft, Drittlandtransfer durch die Commons-Hotlinks) steht in Abschnitt 9 — sie ist der eigentliche Grund für diese Datei, das Schema ist nur der Zweitnutzen. Und sobald die Hotlinks nicht mehr direkt aus `commons.wikimedia.org` geladen, sondern lokal kopiert oder über den Bildoptimizer geleitet werden, wandert `contentUrl` auf die neue URL mit — `filePage` und `licenseUrl` bleiben unverändert.

### 3.8 `ImageObject` mit Lizenz für Commons-Bilder

```ts
// lib/schema.ts (Ergänzung)
import { creditFor } from "@/lib/image-credits";

const SOURCE_LABEL = { commons: "Wikimedia Commons", own: "Mrs Venezuela", licensed: "Lizenzgeber" } as const;

export function imageObjectNode(src: string, id: string, caption: string) {
  const url = toAbsolute(src);
  const credit = creditFor(src);
  return {
    "@type": "ImageObject",
    "@id": id,
    url,
    contentUrl: url,                    // Pflichtfeld
    caption,
    ...(credit
      ? {
          creator: { "@type": "Person", name: credit.author },
          creditText: `${credit.author} / ${SOURCE_LABEL[credit.source]} / ${credit.license}`,
          copyrightNotice: `${credit.author}, ${credit.license}`,
          license: credit.licenseUrl,   // URL, nicht der String "CC BY-SA 3.0"
          acquireLicensePage: credit.filePage,
        }
      : {}),                            // ohne belegte Herkunft keine Lizenzfelder
  };
}
```

Ausgabe für ein belegtes Bild (Daten aus `lib/states/data/merida.ts:198`):

```json
{ "@type": "ImageObject",
  "@id": "https://mrsvenezuela.com/estado/merida#image-pico-espejo",
  "contentUrl": "https://commons.wikimedia.org/wiki/Special:FilePath/Telef%C3%A9rico%20del%20Pico%20Espejo.JPG?width=1800",
  "url": "…dieselbe URL…",
  "caption": "Teleférico del Pico Espejo",
  "creator": { "@type": "Person", "name": "Ivan Carvajal" },
  "creditText": "Ivan Carvajal / Wikimedia Commons / CC BY-SA 3.0",
  "copyrightNotice": "Ivan Carvajal, CC BY-SA 3.0",
  "license": "https://creativecommons.org/licenses/by-sa/3.0/",
  "acquireLicensePage": "https://commons.wikimedia.org/wiki/File:Telef%C3%A9rico_del_Pico_Espejo.JPG" }
```

Google verlangt `contentUrl` als Pflicht plus **mindestens eines** aus `creator`, `creditText`, `copyrightNotice`, `license`. `license` muss eine **URL** sein, nicht der String „CC BY-SA 3.0" — daher die Mapping-Tabelle `CC_LICENSE_URL` in `lib/schema.ts`. Für das Licensable-Merkmal in Google Bilder ist `license` **zwingend**; die drei anderen Felder allein reichen dafür nicht, auch wenn sie das Markup gültig machen.

**Wichtig und unabhängig davon:** JSON-LD ist unsichtbar und erfüllt die CC-Attributionspflicht **nicht**. Commons verlangt eine für Menschen wahrnehmbare Attribution (Autor, Werktitel, Lizenzname mit Link, Quell-URL) — genau das, was `CreditedImage` aus 3.7 rendert. Bei CC BY-SA sind zusätzlich Änderungen zu kennzeichnen (Zuschnitt, Farbkorrektur), dafür das Feld `changes`. Die leeren `credits`-Arrays sind damit eine Lizenzverletzung, nicht nur ein SEO-Defizit; die Einordnung und die Konsequenz für Bilder ohne belegbare Herkunft stehen in Abschnitt 9.

### 3.9 `VideoObject` — erst mit eigenen eingebetteten Videos

`VideoObject` ist eines der wenigen 2026 verbliebenen Rich Results und der einzige Grund, überhaupt noch neues Vokabular aufzunehmen. Die Bedingung ist aber strikt: **ausgezeichnet wird nur, was auf der Seite tatsächlich eingebettet ist** (Grundregel 6). Videos, die ausschließlich auf YouTube liegen, gehören nicht in den `@graph` dieser Site.

Sobald eigene Videos eingebettet werden, gilt:

- Einbetten **ausschließlich über `youtube-nocookie.com`** und nur mit Klick-zum-Laden-Fassade (statisches Vorschaubild, iframe erst nach Nutzeraktion). Ein direkt geladenes YouTube-iframe kippt den heutigen consent-freien Zustand der Site — die Begründung und die Folgen stehen in Abschnitt 9.
- Der Knoten hängt als `video` am `WebPage`-Knoten und trägt `name`, `description`, `thumbnailUrl`, `uploadDate` als Pflichtangaben; `duration` (ISO-8601) und `embedUrl` als sinnvolle Ergänzung.
- Ein **sichtbares Transkript** unter dem Video ist der eigentliche Ertrag: es liefert das Passagenmaterial, das RAG-Systeme zitieren können, und macht den Videoinhalt überhaupt erst indexierbar.

```json
{ "@type": "VideoObject",
  "@id": "https://mrsvenezuela.com/estado/bolivar#video",
  "name": "…",
  "description": "…",
  "thumbnailUrl": ["https://mrsvenezuela.com/images/…"],
  "uploadDate": "2026-…",
  "duration": "PT…M…S",
  "embedUrl": "https://www.youtube-nocookie.com/embed/…",
  "isPartOf": { "@id": "https://mrsvenezuela.com/estado/bolivar#webpage" } }
```

`SitemapFile` in Next 15.5.20 unterstützt neben `alternates.languages` und `images` auch `videos` — eine separate Video-Sitemap ist dafür nicht nötig, das Feld wird in `app/sitemap.ts` mitgeführt, sobald der erste Videoknoten live ist.

### 3.10 Validierungs-Routine

Drei Werkzeuge, drei Zuständigkeiten:

| Tool | prüft | erwartetes Ergebnis hier |
|---|---|---|
| `validator.schema.org` | Vokabular, unabhängig von Google | Findet als einziges Fehler wie `TravelGuide` oder unauflösbare `@id`. Zuerst laufen lassen. |
| `search.google.com/test/rich-results` | nur Google-Features | Auf `/estado/bolivar` wird **nur Breadcrumbs** erkannt. `TouristDestination` erzeugt kein Rich Result — das ist kein Fehler. FAQ wird seit dem 07.05.2026 nicht mehr dargestellt (Doku am 15.06.2026 entfernt) und taucht hier gar nicht mehr auf. |
| GSC URL-Prüfung + Enhancements | Crawlbarkeit inkl. Bild-URLs, Breadcrumbs-Report | Der Breadcrumbs-Report ist zwangsläufig leer, bis `BreadcrumbList` ausgeliefert wird. |

Lokale Vorprüfung ohne Deploy (Dev-Port 3003):

```bash
curl -s http://localhost:3003/estado/bolivar \
  | grep -o '<script type="application/ld+json">[^<]*' \
  | sed 's|<script[^>]*>||' | python -m json.tool
```

Zwei Invarianten, die dabei mitgeprüft werden müssen und sich automatisieren lassen: jede `@id`-Referenz im Graph muss einen Knoten mit genau dieser `@id` finden, und jede Bild-URL im Graph muss absolut sein. Beide Regeln fangen genau die Fehlerklassen ab, die dieser Abschnitt beseitigt — das Doppel-`WebSite` aus `lib/page-factory.tsx:72-76` und das relative `image: item.image` aus `:70`.

---

---

## 4. Technisches SEO, Performance und Barrierefreiheit

Priorisiert nach Wirkung pro Aufwand. P0 sind die Fehler, die Indexierung oder Rechtslage direkt beschädigen; P1 kostet Sichtbarkeit und Ladezeit; P2 ist Hygiene. Die Unterabschnitte 4.4 bis 4.6 ergänzen drei Felder, die in der reinen Ranking-Logik nicht auftauchen, aber an denselben Strukturen hängen.

### 4.1 P0

| Fix | Datei:Zeile | Grund |
|---|---|---|
| `/playas` Server-Wrapper | `app/playas/page.tsx:1` | Canonical auf Startseite, 14 Strandseiten verlieren ihren einzigen Einstieg |
| `alternates.canonical: "/"` entfernen | `app/layout.tsx:32-34` | Vererbt sich auf jede Route ohne eigenes `alternates` |
| `openGraph.url: "/"` entfernen | `app/layout.tsx:38` | `/contacto` und `/sobre-nosotros` senden falsches `og:url` |
| Metadata für 404 | `app/not-found.tsx` (kein Export vorhanden) | Startseiten-Titel und -Canonical auf jeder Fehlerseite |
| Titel absolut ausliefern | `lib/page-factory.tsx:24` + `app/layout.tsx:28` | 79–90 Zeichen, garantiert abgeschnitten |
| `TravelGuide` ersetzen | `app/page.tsx:46-54` | Typ existiert nicht (404), Startseite hat kein gültiges Markup |
| FAQ-Fallback löschen | `lib/page-factory.tsx:86-103` | Policy-Risiko ohne Gegenwert |
| Relative Bild-URL im JSON-LD | `lib/page-factory.tsx:70` | ungültig; `:23` macht es zwei Zeilen höher richtig |
| `lastModified: new Date()` | `app/sitemap.ts:9,13-16,22` | entwertet das lastmod-Signal site-weit |
| Favicon/Icons | `app/` (nicht vorhanden) | Default-Globus in mobilen SERPs |
| `max-image-preview:large` | `app/layout.tsx` | Voraussetzung für die große Discover-Karte |
| Akzente in Titel/Description | `app/layout.tsx:27,31`, `app/page.tsx` | „Guia" statt „Guía", „montanas" statt „montañas" — für spanischsprachige Nutzer in der SERP sofort sichtbar |
| **`unoptimized` bei Remote-Bildern entfernen** | `detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`, `los-roques-guide.tsx:97,113`, `medanos-guide.tsx:288,307`, `pico-bolivar-guide.tsx:183,212`, `island-carousel.tsx:53`, `localized-detail-page.tsx:156` | Der Browser jedes EU-Besuchers kontaktiert direkt `commons.wikimedia.org` — Drittlandtransfer ohne Rechtsgrundlage. Zugleich LCP-Fix |

**Warum `unoptimized` in P0 gehört und nicht, wie zunächst eingeordnet, in P1.** Das Prop steht überall in derselben Form: `unoptimized={<src>.startsWith("http")}`, also genau für die Fremdbilder. Mit gesetztem Flag schreibt `next/image` die fremde URL unverändert in `src`/`srcset`; der Browser des Besuchers baut die Verbindung zu `commons.wikimedia.org` selbst auf und übermittelt dabei IP-Adresse, User-Agent und Referrer an einen Drittanbieter. Das ist strukturell dieselbe Konstellation wie eine eingebundene Google-Font — nur mit Bildern. Ohne das Flag holt der Vercel-Optimizer die Datei serverseitig und liefert sie von der eigenen Origin aus; der Browser des Besuchers sieht den fremden Host nie.

Die Rangfolge der Begründungen ändert sich damit: Der Datenschutz-Aspekt ist der Grund für P0, der Performance-Gewinn fällt als Nebenprodukt an — 646 KB rohes JPEG statt 92 KB WebP, über den nicht cachebaren `Special:FilePath`-Redirect (`lib/content.ts:39-40`), ohne `srcset`, auf mehreren Seiten unmittelbar als LCP-Element (`state-editorial-guide.tsx:218`, `detail-page.tsx:818`, `los-roques-guide.tsx:113`, `medanos-guide.tsx:307`, `pico-bolivar-guide.tsx:212` tragen alle `priority`). Die rechtliche Einordnung und der zugehörige Text in der Datenschutzerklärung stehen in Abschnitt 9; dieser Abschnitt liefert nur den Code-seitigen Teil.

Zwei Folgewirkungen, die den Aufwand rechtfertigen: Erstens werden die Bildmaße dann vom Optimizer bestimmt statt geraten — die falschen OG-Maße in `lib/page-factory.tsx:36` verlieren dadurch nicht automatisch ihre Wirkung, aber die Datenlage wird konsistent. Zweitens wird eine echte `img-src 'self' data:`-Direktive in der CSP überhaupt erst möglich (4.5). Solange `unoptimized` steht, müsste die CSP `upload.wikimedia.org` und `commons.wikimedia.org` erlauben und wäre damit an genau der Stelle offen, die sie schließen soll.

Die Entfernung ist mechanisch: Prop streichen, `sizes` prüfen (steht überall bereits), `remotePatterns` in `next.config.ts` deckt beide Hostnamen ab. Bei den fünf `commonsFile(...)`-Einträgen (`lib/content.ts:46,55,58,60,61`) und der direkt notierten Commons-URL (`:64`) bleibt die Remote-Adresse in den Daten bestehen, sie läuft dann aber durch `/_next/image`.

### 4.2 P1

| Fix | Datei:Zeile | Grund |
|---|---|---|
| `siteName` im Child-OG | `app/estados/page.tsx:37-44`, `lib/page-factory.tsx:32` | `openGraph` wird flach ersetzt → `/estados` und alle 50 Detailseiten verlieren `og:image` bzw. `og:site_name` |
| Falsche OG-Maße | `lib/page-factory.tsx:36` | pauschal `1200x800` für Wikimedia-Originale mit anderem Seitenverhältnis |
| Übersetzungskatalog code-splitten | `components/i18n/content-translator.tsx:5` | 2,4 MB JSON, ~885 KB brotli, ~80 % des Gesamt-JS der Startseite — für **alle** Besucher, auch spanische |
| Früher Ausstieg bei `language === "es"` | `components/i18n/content-translator.tsx:79` | TreeWalker läuft heute über den gesamten Body, auch wenn `lookup` garantiert `undefined` liefert |
| `next.config.ts` Bildoptionen | `next.config.ts:3-16` | `minimumCacheTTL: 60` (Default) → jeder Cache-Eintrag wird nach 60 s STALE und als neue Vercel-Transformation abgerechnet |
| Hero-Bild Hochformat im Querformat-Band | `components/sections/hero.tsx:70,81` → `/images/salto-angel.jpg` (1733×2599, 2.774 KB) | ~77 % der geladenen Pixel werden weggeschnitten |
| 16:9-Derivat von `salto-angel.jpg` erzeugen | `lib/content.ts:43-44,78-79,83,123,151,344` | dieselbe Datei ist Hero, Estado-Karte und OG-/Discover-Bild von `/parque-nacional/canaima` |
| Zweiter Hero-Slide vorgeladen | `components/sections/hero.tsx:76-78,86` | zwei Vollbilder konkurrieren um Bandbreite; `priority` hängt am Index statt am Zustand |
| `dynamicParams = false` | alle zehn `app/*/[slug]/page.tsx` | unbekannte Slugs starten heute eine Function, die dann `notFound()` wirft |
| `BreadcrumbList` | `lib/page-factory.tsx` | eines der wenigen 2026 verbliebenen Rich Results; sichtbare Breadcrumb existiert bereits in `guide-toc.tsx:121-138` |

**Das Salto-Ángel-Derivat ist kein Hero-Detail, sondern ein Asset-Defizit an vier Stellen.** `lib/content.ts:43` und `:44` mappen `angelFalls` und `canaima` auf dieselbe hochkante Datei (1733×2599, 2.774 KB). Verbraucht wird sie als `heroImage` (`:78-79`), als erster Hero-Slide (`:83`, gerendert in `hero.tsx:81` mit `priority`), als Kartenbild des Estado Bolívar (`:123`), als `image` des `searchIndex`-Eintrags `parque-nacional/canaima` (`:151`) — und damit über `lib/page-factory.tsx` als OG- und Discover-Bild dieser Route — sowie in der Galerie (`:344`). Eine hochkante Datei als OG-Bild wird von jeder Plattform mittig beschnitten; dass in `page-factory.tsx:36` pauschal `1200x800` deklariert wird, macht die Angabe zusätzlich falsch.

Konsequenz: ein redaktionell gesetzter 16:9-Zuschnitt als eigene Datei (Arbeitsname `salto-angel-16x9.jpg`), mindestens 1200 px breit, unter 300 KB. Die 1200-px-Mindestbreite ist für Discover dokumentiert; **16:9 ist Praxisempfehlung, kein dokumentiertes Google-Kriterium** — Google nennt ausschließlich die Breite. Das Original bleibt für die Detailansicht erhalten. Getrennte Konstanten statt eines gemeinsamen Alias: `angelFallsPortrait` für die Bildstrecke, `angelFallsWide` für Hero, Karte und OG. Dasselbe gilt für die Maßangaben generell: Bildmaße programmatisch aus der Datei lesen oder das Feld weglassen — `public/images/cayo-de-agua.jpg` ist 1600×899, nicht 1600×900.

`next.config.ts` neu (Bild- und Buildteil; die `headers()`-Funktion steht vollständig in 4.5, weil sie dort um die Sicherheits-Direktiven ergänzt wird):

```ts
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "commons.wikimedia.org" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 828, 1080, 1920],
    qualities: [75],
  },
  poweredByHeader: false,
  experimental: { optimizePackageImports: ["framer-motion"] },
  // async headers() → siehe 4.5
};
```

Ein Jahr `minimumCacheTTL` ist hier korrekt und nicht riskant: Bei Änderung des Bildpfads ändert sich der Cache-Key ohnehin. `3840` aus `deviceSizes` streichen — es gibt keine Quelldatei, die das bedienen kann.

Katalog-Code-Splitting in `content-translator.tsx`:

```tsx
const [catalog, setCatalog] = useState<Catalog | null>(null);
useEffect(() => {
  if (language === "es") { setCatalog(null); return; }
  let alive = true;
  import(`@/lib/translations/${language}.json`).then((m) => { if (alive) setCatalog(m.default); });
  return () => { alive = false; };
}, [language]);
```

Voraussetzung: `scripts/generate-site-translations.mjs` schreibt statt einer 2,4-MB-Datei vier Sprachdateien. Spanische Besucher laden dann 0 KB Katalog statt 655 KB brotli.

### 4.3 P2

- 92 MB in `public/images` bei 112 Dateien, davon `caracas-avila.jpg`, `states/distrito-capital.jpg` und `states/miranda.jpg` byte-identisch (je 2.922.925 Bytes). Auf eine Datei zusammenführen, Quellbilder auf max. 2000 px lange Kante und ~300 KB, `patanemo-hero.png` (2.548.190 Bytes) und `merida-pico-espejo.png` (1.248.652 Bytes) als JPEG/WebP neu ablegen (PNG für Fotos, zusammen 3,7 MB).
- `public/data/venezuela-adm1.json` (1,26 MB) wird von keiner Datei referenziert. Ebenso ungenutzt: `components/sections/interactive-map.tsx`, `components/sections/site-footer.tsx`, `components/sections/gallery.tsx`, `components/sections/category-grid.tsx` (jeweils kein Import irgendwo im Repo).
- `lib/site-translations.json.bak` (2,6 MB) und `.tmp-sapo/` (2 MB) in `.gitignore` **und** `.vercelignore` aufnehmen.
- framer-motion in `components/sections/site-header.tsx:4` lädt das volle `motion`-Paket (39,5 KB gzip) auf jeder Route. Auf `LazyMotion` + `m` umstellen → 6,5 KB synchron.
- Ungedrosselter scroll-Listener mit Layout-Lesung in `components/content/guide-toc.tsx:54-62` — betrifft alle 23 Guide-Seiten. Per `requestAnimationFrame` drosseln, `scrollHeight` einmalig messen, Fortschritt als CSS-Variable statt React-State.

### 4.4 Barrierefreiheit

Barrierefreiheit ist kein Rankingfaktor, und dieser Abschnitt behauptet nichts anderes. Der Grund, sie hier zu führen, ist ein anderer: Fehlende Landmarks, fehlende Sprungziele und nicht wiederhergestellter Fokus sind dieselben Strukturdefekte, über die auch Parser stolpern — und mit dem geplanten Newsletter plus Kooperations-/Affiliate-Angebot ist die Betroffenheit durch das BFSG (in Kraft seit 28.06.2025) nicht mehr sicher auszuschließen. Alle folgenden Punkte sind am Repo verifiziert.

**Kein Skip-Link, kein Sprungziel.** Im gesamten Repo gibt es keinen Skip-Link (Suche nach „skip"/„saltar al contenido": null Treffer). `<main>` existiert an zwölf Stellen — `app/not-found.tsx:13`, `app/page.tsx:59`, `app/playas/page.tsx:159`, `components/content/detail-page.tsx:808`, `localized-detail-page.tsx:154`, `los-roques-guide.tsx:111`, `medanos-guide.tsx:296`, `pico-bolivar-guide.tsx:201`, `state-editorial-guide.tsx:206`, `states-hub.tsx:51`, `components/institutional/about-page-content.tsx:9`, `contact-page-content.tsx:10` — aber keines trägt eine `id`. Der Header mit Regionen-Dropdown steht auf jeder Route vor dem Inhalt.

Als erstes Kind von `<body>` in `app/layout.tsx`:

```tsx
<a
  href="#contenido"
  className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#0f3d2e] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
>
  Saltar al contenido
</a>
```

Dazu `id="contenido"` an allen zwölf `<main>`-Elementen. Der Text läuft durch `ContentTranslator` und wird in den anderen Sprachen mitübersetzt.

**`prefers-reduced-motion` wird ausgewertet, aber nur an einer Stelle.** `app/globals.css:55` setzt bei reduzierter Bewegung ausschließlich `scroll-behavior: auto`. Ausgewertet wird die Präferenz sonst nur in `components/sections/hero.tsx:63` (Autorotation stoppt). Zehn Komponenten animieren mit framer-motion und ignorieren sie: `canaima-experience-carousel.tsx`, `canaima-landmarks.tsx`, `manual-image-carousel.tsx`, `medanos-guide.tsx`, `pico-bolivar-guide.tsx`, `state-editorial-guide.tsx`, `interactive-map.tsx`, `language-switcher.tsx`, `search-panel.tsx`, `site-header.tsx`.

Zwei Ebenen, weil eine nicht reicht. Für CSS-Transitions (z. B. `transition-all duration-[1400ms]` in `hero.tsx:88`) die globale Regel in `app/globals.css`:

```css
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Diese Regel greift bei framer-motion **nicht**, weil dort `transform` und `opacity` pro Frame als Inline-Style geschrieben werden, nicht über CSS-Transitions. Dafür ist `MotionConfig` der vorgesehene Weg:

```tsx
// components/a11y/reduced-motion.tsx
"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

export function ReducedMotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

In `app/layout.tsx` um den `LanguageProvider` legen. `reducedMotion="user"` deaktiviert Transform- und Layout-Animationen der darunterliegenden `motion`-Komponenten, lässt `opacity` laufen — Ein-/Ausblenden bleibt also erhalten, das Verschieben nicht. Beim P2-Umbau auf `LazyMotion`/`m` bleibt `MotionConfig` unverändert gültig.

**Lightbox ohne Fokus-Trap und ohne Fokus-Rückgabe.** `components/content/place-gallery.tsx:116-118` setzt korrekt `role="dialog"`, `aria-modal="true"` und `aria-label`, aber der Fokus bleibt beim auslösenden Element im Hintergrund, Tab wandert hinter den Overlay, und nach dem Schließen ist der Fokus verloren. Der Schließ-Overlay-Button (`:121-127`) trägt `tabIndex={-1}` und muss aus der Trap-Auswahl herausgefiltert werden:

```tsx
const dialogRef = useRef<HTMLDivElement | null>(null);
const openerRef = useRef<HTMLElement | null>(null);

useEffect(() => {
  const node = dialogRef.current;
  if (!abierta?.photo || !node) return;

  openerRef.current = document.activeElement as HTMLElement | null;

  const focusables = () =>
    Array.from(node.querySelectorAll<HTMLElement>('a[href],button:not([disabled]),[tabindex]'))
      .filter((el) => el.tabIndex >= 0);

  focusables()[0]?.focus();

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") { close(); return; }
    if (event.key !== "Tab") return;
    const items = focusables();
    if (items.length === 0) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  };

  document.addEventListener("keydown", onKeyDown);
  const previousOverflow = document.body.style.overflow;
  document.body.style.overflow = "hidden";

  return () => {
    document.removeEventListener("keydown", onKeyDown);
    document.body.style.overflow = previousOverflow;
    openerRef.current?.focus();
  };
}, [abierta, close]);
```

Dazu `ref={dialogRef}` an das `<div role="dialog">`. Escape-Behandlung und Scroll-Sperre fehlen heute ebenfalls und sind hier gleich mit erledigt.

**Kontrast: knapp, nicht falsch.** `--muted: #68726d` (`app/globals.css:11`) auf dem Seitengrund `#f7f4ec` ergibt nach WCAG-Formel **4,53:1** — die 4,5:1-Schwelle für Fließtext ist damit erfüllt, aber mit drei Hundertstel Reserve. Jede Deckkraft-Variante (`text-[#68726d]/80`) und jeder etwas dunklere Hintergrund kippen den Wert. Betroffen ist genau die Klasse kleiner Text, in der die Farbe eingesetzt wird, etwa `text-xs` in `components/sections/language-switcher.tsx:91`. Der an anderer Stelle vorgeschlagene Ersatzton `#5c6b60` erreicht dagegen **5,13:1** und hat echte Reserve — er ist die bessere Wahl, aber nicht wegen eines bestehenden Verstoßes, sondern wegen des Puffers. Beide Werte sind gegen `#f7f4ec` gerechnet; die Guide-Sektionen mit dunklem Grund (`#0f3d2e`) sind separat zu prüfen.

**Sprachwahl: besser als vermutet, trotzdem falsch beschriftet.** Die Vermutung, `public/flags` bedeute Flaggen als Sprachwahl, trifft nur halb zu: `components/sections/language-switcher.tsx` liefert die Flaggen mit `alt=""` (`:35`, `:83`) und in einem `aria-hidden`-Container (`:80`) aus, also korrekt dekorativ, und zeigt daneben immer einen Textlabel (`:40-41`, `:90`). Der tatsächliche Defekt liegt in `lib/i18n.ts:2-6`: Die Labels sind spanische Exonyme — „Alemán", „Inglés", „Francés", „Chino". Der Autonym steht nur klein im `note`-Feld (`:91-93`). Ein deutschsprachiger Besucher sucht „Deutsch", nicht „Alemán". Primärlabel auf den Autonym umstellen (`Deutsch`, `English`, `Français`, `中文`, `Español`), spanische Bezeichnung in die Zweitzeile. Ergänzend fehlt dem Popup ein Tastaturmodell: `role="listbox"` (`:62`) ohne Pfeiltasten-Navigation, ohne Escape, ohne Fokus-Rückgabe an den Trigger (`:25-46`) und ohne `aria-controls`. Kleiner Umbau, dieselbe Mechanik wie bei der Lightbox.

**Zur doppelten `<h1>` — Entwarnung, mit Beleg.** Beide Vorkommen existieren tatsächlich: `components/content/state-editorial-guide.tsx:224` und `:236`, beide mit `{guide.name}`. Offen war, ob beide im DOM landen. Sie tun es nicht: Die beiden Blöcke sind die Zweige des Ternärs `{guide.hero ? (…) : (…)}` in `:208` (Hero mit Foto gegen typografische Variante ohne Foto), es rendert also immer genau einer. Gegenprobe im Build: jede Datei unter `.next/server/app/estado/*.html` enthält genau ein `<h1>`. Kein technischer Befund. Was bleibt, ist der h1-**Text** — „Bolívar" allein kollidiert mit Simón Bolívar, Pico Bolívar und Ciudad Bolívar; das ist eine Entitäts-, keine Struktur-Frage und gehört ins Content-Kapitel.

### 4.5 Sicherheits-Header

Die drei geplanten Header (`Strict-Transport-Security`, `X-Content-Type-Options`, `Referrer-Policy`) sind richtig, aber es fehlen genau die, die etwas verhindern. Die Site ist statisch prerendert, hat keine Fremdskripte und keine Formular-Endpunkte — das ist die seltene Ausgangslage, in der eine echte Content-Security-Policy realistisch erreichbar ist und dauerhaft die drei Stellen absichert, an denen JSON-LD per `dangerouslySetInnerHTML` in die Seite geschrieben wird (`app/page.tsx:58`, `app/estados/page.tsx:68`, `lib/page-factory.tsx:110`).

**Warnung zu HSTS `preload`.** Die Direktive ist eine faktisch irreversible Zusage für die Domain und alle Subdomains; die Entfernung aus der Preload-Liste dauert Monate und greift erst mit dem übernächsten Browser-Release. Sie darf erst gesetzt werden, wenn Apex **und** `www` dauerhaft und ausnahmslos HTTPS liefern (siehe 2.10) — und sie muss dann auch tatsächlich unter `hstspreload.org` beantragt werden, sonst steht sie wirkungslos im Header. Bis dahin: `max-age` ohne `preload`, wie unten.

Vollständige `headers()`-Funktion, eingesetzt in den Block aus 4.2:

```ts
// next.config.ts — ersetzt die Kommentarzeile aus 4.2
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  // images, poweredByHeader und experimental unverändert aus 4.2
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), browsing-topics=()",
          },
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
      {
        source: "/images/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};
```

Anmerkungen zur CSP, damit sie beim Scharfschalten nicht bricht:

- `'unsafe-inline'` in `script-src` ist hier unvermeidbar. Next.js schreibt in prerenderte Seiten Inline-Skripte für die Flight-Payload (`self.__next_f.push(…)`), und eine Nonce-Lösung setzt Middleware voraus, die jede Route auf dynamisches Rendering zwingt — das würde den statischen Zustand der Site aufheben, also genau den Vorteil zerstören, den dieser Plan an anderer Stelle sichert. Der Schutzwert liegt trotzdem in `default-src 'self'`, `object-src 'none'`, `base-uri 'self'` und `frame-ancestors`.
- `style-src 'unsafe-inline'` ist nötig, weil framer-motion Inline-`style`-Attribute setzt.
- `img-src 'self' data: blob:` funktioniert **erst nach** dem `unoptimized`-Fix aus 4.1. Vorher müssten `upload.wikimedia.org` und `commons.wikimedia.org` in der Direktive stehen.
- `connect-src 'self'` genügt für `@vercel/analytics`, weil das Skript und die Beacons auf Vercel unter `/_vercel/insights/*` von der eigenen Origin laufen. Ob das für die konkrete Konfiguration zutrifft, zeigt der Report-Only-Lauf — deshalb Report-Only zuerst.
- `frame-ancestors 'self'` ist die wirksame Direktive; `X-Frame-Options: SAMEORIGIN` bleibt für ältere Clients als Doppelung stehen.

Vorgehen: mindestens zwei Wochen Report-Only laufen lassen, Verstöße über die Browser-Konsole prüfen (ein Report-Endpunkt lohnt bei diesem Traffic-Volumen nicht), dann den Key auf `Content-Security-Policy` umstellen. Der Umbau kostet nichts an Ladezeit — Header, keine Bytes im Body.

**Lieferkette und Meldeweg.** `.github/` existiert im Repo nicht. Im selben Commit wie der CI-Workflow anlegen:

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 5
    groups:
      minor-and-patch:
        update-types: ["minor", "patch"]
```

Ergänzend `npm audit --omit=dev` als nicht blockierender Schritt in derselben Pipeline: Bei einer Site ohne Nutzerdaten ist ein harter Abbruch bei jeder transitiven Meldung Reibung ohne Gegenwert, ein sichtbares Log genügt.

`public/.well-known/security.txt` nach RFC 9116 (Next liefert `public/` an der Root aus, die Datei ist danach unter `/.well-known/security.txt` erreichbar):

```
Contact: mailto:security@mrsvenezuela.com
Expires: 2027-08-24T22:00:00.000Z
Preferred-Languages: es, de, en
Canonical: https://mrsvenezuela.com/.well-known/security.txt
```

`Expires` ist nach RFC 9116 Pflicht und darf höchstens ein Jahr in der Zukunft liegen — der Eintrag muss also jährlich verlängert werden, sonst ist die Datei formal ungültig. Die Adresse setzt die Domain-Mailbox voraus; bis die steht, gehört dort eine tatsächlich gelesene Adresse hinein, keine erfundene.

### 4.6 Feed und Suchtelemetrie

Zwei kleine technische Bausteine mit überproportionalem Hebel, beide unter einer Stunde.

**RSS-Feed.** Es gibt keinen. Der Feed ist die Verteilrail ohne Algorithmus dazwischen: Zubringer für den geplanten Newsletter (RSS-to-Email erspart die komplette Handarbeit), für Feedly und Flipboard, für Pinterest-Auto-Pins und Reise-Aggregatoren. Aufwand rund 30 Minuten.

```ts
// app/feed.xml/route.ts
import { pageKinds, searchIndex } from "@/lib/content";
import { absoluteUrl } from "@/lib/utils";

export const dynamic = "force-static";

const escapeXml = (value: string) =>
  value.replace(/[<>&'"]/g, (c) =>
    ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '"': "&quot;" })[c] as string,
  );

export function GET() {
  const items = pageKinds.flatMap((kind) =>
    searchIndex
      .filter((item) => item.kind === kind)
      .map((item) => {
        const url = absoluteUrl(`/${kind}/${item.slug}`);
        return `    <item>
      <title>${escapeXml(item.name)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(item.description)}</description>
    </item>`;
      }),
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Descubre Venezuela</title>
    <link>${absoluteUrl()}</link>
    <description>Guías editoriales de destinos, cultura y naturaleza de Venezuela.</description>
    <language>es</language>
    <atom:link href="${absoluteUrl("/feed.xml")}" rel="self" type="application/rss+xml" />
${items.join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
```

`dynamic = "force-static"` erzeugt die Datei zur Buildzeit; es läuft keine Function. Bewusst **ohne** `pubDate`: Ein `new Date()` an dieser Stelle wäre derselbe Fehler wie das `lastModified: new Date()` in `app/sitemap.ts` — ein erfundenes Datum, das obendrein bei jedem Deploy alle Einträge als neu markiert und Aggregatoren zu Wiederholungs-Pushes verleitet. `pubDate` kommt hinzu, sobald das im Content-Kapitel vorgesehene `updatedAt`-Feld existiert; dann fällt auch die Sortierung nach Datum ab.

Verlinkung im `<head>` über `app/layout.tsx` — `alternates.types` ist in Next 15.5.20 im `AlternateURLs`-Typ vorhanden:

```ts
alternates: {
  types: {
    "application/rss+xml": [{ url: "/feed.xml", title: "Descubre Venezuela" }],
  },
},
```

Der `canonical`-Eintrag im selben `alternates`-Objekt entfällt ersatzlos (P0). Wichtig wegen des flachen Merges: Jede Route, die selbst `alternates` exportiert, überschreibt auch diesen `types`-Eintrag — entweder ist das hinnehmbar (der Feed steht dann nur im Root-`<head>`) oder der Eintrag wandert in dieselbe Helper-Funktion, die die Canonicals baut.

**Suchtelemetrie.** Im gesamten Repo existiert kein einziger `track()`-Aufruf, obwohl `@vercel/analytics` (2.0.1) installiert und in `app/layout.tsx:75` eingebunden ist. Die interne Suche (`components/sections/search-overlay.tsx`) filtert rein clientseitig über `searchIndex` und erzeugt keine URL — korrekt so, kein Indexierungsthema, aber es geht dabei die billigste und ehrlichste Content-Recherche verloren, die diese Site haben kann: die Begriffe, mit denen eigene Besucher ins Leere laufen.

In `SearchOverlay()`, nach `matches` (`:53-63`):

```tsx
import { track } from "@vercel/analytics";

useEffect(() => {
  const needle = query.trim();
  if (needle.length < 3) return;
  const timer = window.setTimeout(() => {
    track("search", { q: normalize(needle).slice(0, 60), results: matches.length });
  }, 800);
  return () => window.clearTimeout(timer);
}, [query, matches.length]);
```

Die 800-ms-Verzögerung sorgt dafür, dass nur die stehengebliebene Eingabe gezählt wird und nicht jeder Tastenanschlag. `normalize` (`:31-36`) existiert bereits und entfernt Diakritika und Groß-/Kleinschreibung; die Kürzung auf 60 Zeichen begrenzt den Wert. `track` akzeptiert `string | number | boolean | null` als Property-Werte, keine verschachtelten Objekte.

Drei Bedingungen, bevor das live geht:

1. **Datenschutzerklärung.** Der Vorgang muss dort benannt werden — welche Ereignisse erhoben werden, dass der Suchbegriff darunterfällt und keine Kennung des Besuchers gespeichert wird (Abschnitt 9).
2. **Keine Freitext-Weitergabe ohne Filter.** Suchfelder bekommen erfahrungsgemäß auch das, was nicht hineingehört. Die Länge ist gekappt; zusätzlich sollte alles verworfen werden, was wie eine E-Mail-Adresse oder eine Telefonnummer aussieht.
3. **Plan prüfen.** Custom Events der Vercel Web Analytics sind planabhängig kontingentiert. Vor dem Einbau im Dashboard nachsehen — dieselbe Prüfung, die auch für die Log Drains beim Bot-Monitoring ansteht; ein KPI, dessen Datenquelle im gebuchten Plan nicht existiert, ist schlimmer als kein KPI.

Auswertung monatlich, Ergebnis fließt direkt in den Redaktionsplan: Null-Treffer-Suchen sind Themenvorschläge mit belegter Nachfrage aus dem eigenen Publikum.

### 4.7 Was nicht anzufassen ist

`htmlLimitedBots` (alle Routen sind prerendert, die Metadaten stehen ohnehin im statischen `<head>`), `revalidate`/`dynamic` auf den Slug-Routen (macht aus statischen Seiten ISR), Fonts (`next/font`, selbst gehostet, `adjustFontFallback` aktiv) — und die zweite `<h1>` in `state-editorial-guide.tsx`, siehe die Entwarnung in 4.4.

---

## 5. Content und Informationsarchitektur

### 5.1 Der harte Befund

Von 50 Detailseiten sind 23 exzellent (die Bundesstaat-Guides) und der Rest substanzlos:

- 19 Seiten liegen unter 310 Wörtern **inklusive** Header/Footer.
- Acht davon sind zu 73–79 % wortidentisch (gemessene Jaccard-Ähnlichkeit über 6-Wort-Shingles), weil sie aus `components/content/detail-page.tsx:276-306` (`getEditorialCopy`) generiert werden. `/comida/arepa` trägt die h3 **„Cómo llegar"**. `/articulo/ruta-perfecta-14-dias` enthält den Satz „entender la ruta perfecta para descubrir venezuela en 14 dias", weil `detail-page.tsx:282` `item.name.toLowerCase()` anwendet.
- Fünf Seiten haben **null** eingehende interne Links: `/ciudad/caracas`, `/animal/turpial`, `/planta/orquidea`, `/comida/arepa`, `/historia/camino-de-los-libertadores`. Ursache: `lib/content.ts:330-341` (`categories`) wird nur von `components/sections/category-grid.tsx` gerendert, und diese Komponente kommt in `app/` nirgends vor.
- Alle 15 Strandseiten sind Sackgassen: die einzigen ausgehenden internen Links sind Header-Logo und Footer.
- 17 in `StatePlace.href` gepflegte Querverweise (z. B. `falcon.ts:87` → `/parque-nacional/medanos-de-coro`) werden nie als Link gerendert — in `components/content/place-gallery.tsx` kommt weder `href` noch `Link` vor.
- Die 24 Bundesstaat-Links im Mega-Menü stehen nicht im ausgelieferten HTML: `components/sections/site-header.tsx:148-155` rendert sie in `<AnimatePresence>`, sie existieren erst nach dem Klick.

### 5.2 Sofortmaßnahmen interne Verlinkung

1. **`place-gallery.tsx`**: Ort-Titel als `next/link` rendern, wenn `place.href` gesetzt ist (Lightbox für das Foto behalten). 17 thematisch perfekte Kontextlinks von 2.500-Wörter-Seiten auf 300-Wörter-Seiten, sofort verfügbar.
2. **Mega-Menü immer ins DOM rendern**, nur per CSS/`hidden` ein-/ausblenden. framer-motion kann auf einem stets gemounteten Container animieren. Ergebnis: 24 Estado-Links auf allen 55 Seiten crawlbar.
3. **`guide-related.tsx`** um eine zweite Zeile „Naturaleza y cultura de Venezuela" erweitern mit Links auf die fünf verwaisten Seiten — erscheint dann unter allen 23 Guides.
4. **Strand-Kontextblock** in `detail-page.tsx`: aus `item.region` den Bundesstaat auflösen und auf `/estado/<slug>` verlinken, plus 3–4 Strände desselben Bundesstaats. Dafür braucht `DiscoverItem` ein `stateSlug`-Feld — `region` ist heute Freitext („Sucre y Anzoátegui", „Dependencias Federales") und nicht deterministisch auflösbar.
5. **„Lugares cercanos"** in `detail-page.tsx:1131` zeigt `searchIndex.slice(0, 4)` — auf jeder Seite dieselben vier Ziele. Das dafür deklarierte `nearby?: string[]` (`lib/content.ts:35`) ist in keinem der 50 Einträge befüllt.

### 5.3 Thin Content: löschen oder ersetzen

Das generische Template ersatzlos streichen. Für die acht betroffenen Seiten gilt: **entweder echter Inhalt (800–1.200 Wörter plus 5–6 spezifische FAQs) oder Deindexierung.** Bis dahin in `lib/page-factory.tsx` `robots: { index: false }` für alle Items setzen, für die weder ein StateGuide noch ein beachGuide noch ein Spezial-Guide existiert — genau diese Bedingung wertet `detail-page.tsx:611-628` bereits aus.

`/estado/distrito-capital` ist ein Sonderfall: `lib/content.ts:117-141` listet 24 Einträge, `lib/states/index.ts:30-54` registriert 23 Guides. Die Seite hat 594 Wörter gegen 1.755–2.797 der anderen und trägt den generischen Titel „Distrito Capital | Descubre Venezuela". Caracas ist das suchstärkste Ziel des Landes — `lib/states/data/distrito-capital.ts` nach dem Muster von `la-guaira.ts` anlegen. Parallel `/ciudad/caracas` (250 Wörter, 0 eingehende Links) entweder per 301 dorthin umleiten oder klar als Stadtführer abgrenzen.

### 5.4 Entitäts-Register: genau eine kanonische URL je realer Entität

Vor jeder neuen Seite steht ein ungelöstes Problem im Bestand: die zehn `ContentKind`-Werte beschreiben **Darstellungsformen**, keine Entitäten — und die Zuordnung stimmt an mehreren Stellen nicht mit der Wirklichkeit überein.

- `los-roques` ist `kind: "playa"` (`lib/content.ts:156-157`), obwohl der Archipiélago ein Nationalpark ist.
- `medanos-de-coro` ist `parque-nacional` (`:166-167`) und soll gleichzeitig der Dünen-Guide bleiben — hier deckt sich der Typ mit der Realität, die Doppelrolle ist nur redaktionell zu klären.
- `cayo-sombrero` (`:189-190`) und `chichiriviche` (`:309-310`) beschreiben **beide** den Parque Nacional Morrocoy, der selbst keine Seite hat. Zwei URLs konkurrieren um eine dritte Entität, die es nicht gibt.
- Die geplanten Hubs `/parques-nacionales` (inkl. Morrocoy) und `/ciudades` (inkl. Ciudad Bolívar) überschneiden sich mit `/estado/<slug>`, das dieselben Orte bereits beschreibt.

Solange das ungeklärt ist, produziert jede neue Seite Kannibalisierung statt Abdeckung. Die Regel lautet: **`kind` ist nur Darstellung und Routenpräfix; kanonisch ist die Entität.** Jede reale Entität bekommt genau eine URL, jede neue Hub- oder Detailseite bekommt ihre Zeile **vor** der ersten Textzeile, Doppelungen werden per 301 zusammengeführt (Mapping-Datei und Redirect-Mechanik: Prozessabschnitt).

| Reale Entität | Typ | Kanonische URL | Bestand heute | Entscheidung |
|---|---|---|---|---|
| Parque Nacional Canaima | Nationalpark | `/parque-nacional/canaima` | `content.ts:146-147` | bleibt |
| Salto Ángel | Wasserfall im PN Canaima | Abschnittsanker in `/parque-nacional/canaima` | keine eigene Zeile, aber eigenes Hero-Bild | keine eigene URL, solange kein eigener 800-Wörter-Text existiert |
| Parque Nacional Archipiélago Los Roques | Nationalpark | `/playa/los-roques` | `kind: "playa"`, `:156-157` | URL bleibt (Bestandsschutz), Schema-Typ wird `Park`, nicht `Beach` |
| Parque Nacional Médanos de Coro | Nationalpark | `/parque-nacional/medanos-de-coro` | `:166-167` | bleibt; Dünen-Guide ist derselbe Text, keine zweite Seite |
| Parque Nacional Morrocoy | Nationalpark | `/parque-nacional/morrocoy` (neu) | keine Seite | neu; die beiden Bestandsseiten hören auf, den Park zu beschreiben |
| Cayo Sombrero | Cayo im PN Morrocoy | `/playa/cayo-sombrero` | `:189-190` | bleibt, Text auf den Cayo begrenzen, Elternlink auf Morrocoy |
| Chichiriviche | Küstenort in Falcón | `/playa/chichiriviche` | `:309-310`, `kind: "playa"` | URL bleibt, Schema-Typ `City`, Text = Ausgangsort statt Parkporträt |
| Parque Nacional Mochima | Nationalpark | `/playa/mochima` | `:219-220`, `kind: "playa"` | URL bleibt, Schema-Typ `Park` |
| Distrito Capital | Bundesstaat-äquivalent | `/estado/distrito-capital` | `content.ts:127`, kein Guide registriert | Guide anlegen (5.3) |
| Caracas | Stadt | `/ciudad/caracas` **oder** `/estado/distrito-capital` | `:399-400`, 250 Wörter | Entscheidung erzwingen: eigener Stadtführer mit eigenem Umfang oder 301 |
| Ciudad Bolívar | Stadt | Anker in `/estado/bolivar`, eigene URL erst ab eigenem Substanzumfang | im Estado-Guide beschrieben | `/ciudades`-Hub verlinkt den Anker, legt keine Zweitseite an |
| Pico Bolívar | Berg | `/montana/pico-bolivar` | `:176-177` | bleibt; ein späterer Sierra-Nevada-Text darf den Gipfel nicht wiederholen |
| Región (6 ×) | Region | `/estados/<region>` | `lib/states/regions.ts:10-17`; Parameter-Links in `components/sections/search-panel.tsx:16-18` | Hub ist kanonisch, `?region=` wird per 301 gemappt |
| Arepa | Gericht | `/comida/arepa` | `:423-424` | bleibt Entität; `/gastronomia-venezolana` verlinkt, schreibt keinen zweiten Arepa-Text |

Maschinenlesbare Form, damit das Register nicht als Dokument verwahrlost:

```ts
// lib/entities.ts
export type EntityType =
  | "estado" | "region" | "ciudad" | "pueblo"
  | "parque-nacional" | "playa" | "montana"
  | "plato" | "especie" | "tema";

export type Entity = {
  /** Stabile ID, unabhängig von der URL. */
  id: string;
  name: string;
  type: EntityType;
  /** Genau eine kanonische URL, Pfad ohne Domain. Anker = untergeordnete Entität ohne eigene Seite. */
  canonical: string;
  /** Übergeordnete Entität: Cayo → Park, Stadt → Estado. */
  partOf?: string;
  /** Weitere Namen derselben Sache (Redaktion, interne Suche, Alias-Prüfung). */
  aliases?: string[];
  /** Nur eintragen, wenn die QID einzeln verifiziert wurde — Namensmatch reicht nicht. */
  wikidata?: string;
};

export const entities: Entity[] = [
  { id: "pn-canaima", name: "Parque Nacional Canaima", type: "parque-nacional", canonical: "/parque-nacional/canaima", partOf: "estado-bolivar" },
  { id: "salto-angel", name: "Salto Ángel", type: "tema", canonical: "/parque-nacional/canaima#salto-angel", partOf: "pn-canaima", aliases: ["Kerepakupai Merú"] },
  { id: "pn-los-roques", name: "Parque Nacional Archipiélago Los Roques", type: "parque-nacional", canonical: "/playa/los-roques", aliases: ["Los Roques", "Gran Roque"] },
  { id: "pn-morrocoy", name: "Parque Nacional Morrocoy", type: "parque-nacional", canonical: "/parque-nacional/morrocoy", partOf: "estado-falcon" },
  { id: "cayo-sombrero", name: "Cayo Sombrero", type: "playa", canonical: "/playa/cayo-sombrero", partOf: "pn-morrocoy" },
  { id: "chichiriviche", name: "Chichiriviche", type: "pueblo", canonical: "/playa/chichiriviche", partOf: "estado-falcon" },
  // … eine Zeile je Entität, bevor die Seite geschrieben wird
];

/** Zwei Entitäten dürfen nie dieselbe Seite beanspruchen. Anker sind erlaubt. */
export function duplicateCanonicals(): string[] {
  const owner = new Map<string, string>();
  const clashes: string[] = [];
  for (const entity of entities) {
    if (entity.canonical.includes("#")) continue;
    const previous = owner.get(entity.canonical);
    if (previous) clashes.push(`${entity.canonical}: ${previous} + ${entity.id}`);
    else owner.set(entity.canonical, entity.id);
  }
  return clashes;
}
```

Drei Invarianten gehören in dasselbe Build-Gate, das auch die Canonical-Regeln prüft: keine doppelte kanonische URL; jede ausgelieferte Detail- und Hub-Route hat genau eine Registerzeile; jede Registerzeile zeigt auf eine Route, die tatsächlich gebaut wird (Anker gegen die Sektions-IDs der Zielseite prüfen). Eine Route ohne Registerzeile geht nicht in die Sitemap.

### 5.5 Keyword- und Intent-Mapping vor dem Schreiben

Die Seitenliste in 5.6 ist mit wortgenauen Null-Treffer-greps **im eigenen Repo** begründet — das belegt die Lücke, nicht die Nachfrage. Belastbare Volumina liegen bislang nur für den englischsprachigen Markt vor. Bevor eine der Seiten geschrieben wird, bekommt sie eine Zeile:

| Zielseite | Hauptquery (es) | Volumen VE / CO / US-es / ES | SERP-Typ | Abgedeckte Unterfragen | Abgrenzung zur nächstähnlichen Bestandsseite |
|---|---|---|---|---|---|
| `/venezuela/requisitos-de-entrada` | *(einzutragen)* | *(zu erheben)* | AI Overview? Foren? YouTube? | 5–8 Fragen, wörtlich | welche Seite sonst ranken würde und warum sie es nicht soll |

Regeln dazu:

- **„Volumen unbekannt" ist ein zulässiger Eintrag, „nicht erhoben" nicht.** Quelle je Zeile nennen (Keywords Explorer pro Land, später GSC-Query-Daten der eigenen Property).
- Der **SERP-Typ steuert das Format**, nicht die Wortzahl: dominieren Foren, gewinnt nur eigene Erfahrung mit eigenen Fotos; dominiert YouTube, reicht Text allein nicht; steht ein AI Overview darüber, muss die direkte Antwort in den ersten Sätzen der Seite stehen und nicht in der Zusammenfassung am Ende.
- **Stop-Regel gegen 5.4:** Bedient eine Bestandsseite den Hauptquery bereits, wird sie erweitert. Keine neue URL, keine zweite Zeile im Entitäts-Register.
- Die Reihenfolge der zehn Seiten unten ist bis zum Ausfüllen dieser Tabelle eine begründete Hypothese, keine Priorisierung nach Nachfrage.

### 5.6 Die zehn wertvollsten neuen Seiten

Der komplette praktische Planungs-Cluster fehlt. Wortgenauer grep über `lib/states/data/`, `lib/content.ts` und `components/content/`: `visa` 0 Treffer, `visado` 0, `pasaporte` 0, `vacun` 0, `fiebre amarilla` 0, `moneda` 0, `dólar` 0, `cajero` 0, `Zelle` 0, `Pago Móvil` 0, `seguro de viaje` 0, `presupuesto` 1.

| # | Seite | Warum |
|---|---|---|
| 1 | `/venezuela/es-seguro-viajar` | mit Abstand häufigste Frage; heute 0 Wörter. **Achtung:** grenzt an YMYL — nur mit datierten Primärquellen, regional differenziert, oder weglassen |
| 2 | `/venezuela/requisitos-de-entrada` | Visum, Pass, Gelbfieber, Reiseversicherung |
| 3 | `/venezuela/dinero-y-pagos` | Dollar bar, Bolívar, Zelle, Pago Móvil, Geldautomaten |
| 4 | `/venezuela/presupuesto` | Tagesbudget, Preisspannen |
| 5 | `/parques-nacionales` Hub + Morrocoy, Mochima, Henri Pittier, Sierra Nevada, Cueva del Guácharo | Venezuela hat 43 Nationalparks, die Site hat 2 Seiten |
| 6 | `/estados/<region>` × 6 | Daten liegen fertig in `lib/states/regions.ts:10-17`; `search-panel.tsx:16-18` verlinkt bereits auf `/estados?region=…`, aber `components/content/states-hub.tsx:31-36` liest den Parameter erst clientseitig — für Crawler unsichtbar |
| 7 | `/mejor-epoca-para-viajar-a-venezuela` | Rohstoff steckt in 14 der 23 Guides (`grep -ril "temporada" lib/states/data/`), gehört aggregiert auf eine Landesseite |
| 8 | `/gastronomia-venezolana` Hub + pabellón criollo, hallaca, cachapa, tequeños, arepa neu | „comida típica de Venezuela" ist Kernfrage in Suche und KI |
| 9 | `/itinerarios` + echte 7-/10-/14-Tage-Routen | `/articulo/ruta-perfecta-14-dias` verspricht das bereits und liefert nichts |
| 10 | `/ciudades` Hub + Maracaibo, Mérida, Valencia, Barquisimeto, Ciudad Bolívar | jede Stadt ist im Estado-Guide bereits beschrieben — der Hub verlinkt Anker, bis eine Stadt eigenen Substanzumfang hat (5.4) |

Jeder Hub braucht `CollectionPage`+`ItemList`-JSON-LD nach dem Vorbild `app/estados/page.tsx:48-64` und 300–600 Wörter eigenen Einleitungstext — sonst entsteht nur eine weitere Linkliste.

**Warnung zum Tempo:** Nicht alles auf einmal. Die Site ist mit ~55 Seiten weit unter jeder Scaled-Content-Schwelle; gefährlich wird nicht das Volumen, sondern Volumen bei gleichbleibender Uniformität. 2–4 substanzielle Veröffentlichungen pro Monat, nicht 40 Seiten in einer Woche.

### 5.7 Ein Bild = eine Entität

Die Bilddubletten sind kein Ästhetik- und kein Dateigrößenthema, sondern Falschaussagen im Bestand. `lib/content.ts:41-74` bindet mehrere Motive mehrfach und dabei falsch ein:

- `morrocoy: "/images/playa-el-agua.jpg"` — ein Strand auf Margarita steht für Morrocoy und, über denselben Schlüssel, als Kartenbild für **Anzoátegui** (`:119`), **Carabobo** (`:124`) und **Yaracuy** (`:140`). Zusammen mit `margarita` (`:134`, `:136`) und `playaElAgua` (`:204`) liefert dieselbe Datei sechs verschiedene Orte aus.
- `orchid: "/images/delta-orinoco.jpg"` — eine Flusslandschaft illustriert `/planta/orquidea` (`:420`).
- `culture` = `history` = `avila` = `caracas-avila.jpg` — acht Verwendungen: Hero-Slide (`:107`), Kartenbild für Distrito Capital, Miranda und La Guaira (`:127`, `:132`, `:139`), Galerie (`:349`), `/articulo/cultura-viva` (`:377`), `/ciudad/caracas` (`:404`), `/historia/camino-de-los-libertadores` (`:436`).

Falscher `alt`-Text ist ein Faktenfehler und damit ein E-E-A-T-Problem; bei einem CC-Bild ist er zusätzlich eine falsche Attribution; in Discover ist er ein gebrochenes Kartenversprechen, weil das Bild der eigentliche Klickauslöser ist; in Google Images ist er Dedup-Material. Er widerspricht außerdem der bestehenden Projektregel, nie dieselbe Fotografie zweimal zu verwenden.

**Regel:** ein Bild = eine Entität. Die betroffenen Zuordnungen mit echten Motiven ersetzen; wo kein korrektes Motiv mit belegter Lizenz verfügbar ist, wird die Sektion **ohne Bild** ausgeliefert. Ein fehlendes Bild ist ein Layoutproblem, ein falsches Bild ein Glaubwürdigkeitsproblem.

**Alt-Texte sind ein eigener Kanal und laufen heute ins Leere.** `alt` steht in der Liste der clientseitig ersetzten Attribute (`components/i18n/content-translator.tsx:74`, zusammen mit `aria-label`, `placeholder`, `title`). Übersetzt wird also erst im Browser — für den Google-Images-Index existiert die Site ausschließlich auf Spanisch, und zwar unabhängig davon, wie viele Sprachen der Umschalter anbietet.

Beim Umbau die Texte redaktionell neu schreiben, nicht mechanisch aus dem Dateinamen ableiten: **Motiv + Ort + Bundesstaat**, ein Satz, ohne „Foto de", ohne Keyword-Stapelung. Sobald `/en` als eigene Route existiert, muss `alt` serverseitig pro Sprache kommen:

```ts
// lib/states/types.ts
export type Locale = "es" | "en" | "de" | "fr" | "zh";

export type StatePhoto = {
  /** Ruta local (`/images/...`) o URL ya usada en el proyecto (Wikimedia Commons). */
  src: string;
  /** Español, siempre presente: motivo + lugar + estado. */
  alt: string;
  /** Traducciones revisadas; sin entrada se sirve el texto en español. */
  altByLocale?: Partial<Record<Exclude<Locale, "es">, string>>;
  /** `object-position` para el recorte; por defecto "center". */
  position?: string;
};

export const photoAlt = (photo: StatePhoto, locale: Locale): string =>
  (locale !== "es" && photo.altByLocale?.[locale]) || photo.alt;
```

Im selben Commit `"alt"` aus `translatedAttributes` (`content-translator.tsx:74`) entfernen — sonst überschreibt der Client den serverseitig korrekten Text wieder. Dieselbe Datenquelle liefert später auch die sichtbare `figcaption` mit Urheber und Lizenz, weshalb Bildkredite und Alt-Text-Neufassung ein Arbeitsgang sind.

### 5.8 YMYL betrifft den Bestand, nicht nur eine geplante Seite

Nicht nur `/venezuela/es-seguro-viajar` ist heikel. `access.routes` ist ein Pflichtfeld des Guide-Modells (`lib/states/types.ts:146-151`) — **alle 23 Guides** enthalten damit „Cómo llegar" mit Transport-, Anreise- und teils Grenzangaben zu einem Land mit volatiler Lage. Was fehlt, ist nicht Vorsicht im Ton, sondern Datierung pro Faktenblock: `updatedAt` auf Seitenebene (5.9) sagt nichts darüber aus, wann eine einzelne Flugverbindung zuletzt geprüft wurde.

```ts
// lib/states/types.ts
export type Volatility = "high" | "low";

export type VerifiedBlock = {
  /** ISO-Datum der letzten Prüfung dieses Blocks, nicht der Seite. */
  verifiedAt: string;
  /** "high" = Anreise, Grenzen, Preise, Öffnungszeiten. "low" = Geografie, Geschichte, Kultur. */
  volatility: Volatility;
  /** Offizielle Quellen, auf die der Block sich stützt. */
  sources?: Array<{ label: string; href: string }>;
};

/** 07 — CÓMO LLEGAR */
access: {
  description: string;
  intro?: string;
  routes: StateRoute[];
} & VerifiedBlock;

/** 08 — CONSEJOS PARA VIAJEROS */
tips: {
  description: string;
  items: StateTip[];
} & VerifiedBlock;
```

Sichtbarer Kopfblock in jeder Praxis-Sektion, als Server-Komponente:

```tsx
// components/content/verified-note.tsx
import type { VerifiedBlock } from "@/lib/states/types";

const dateFormat = new Intl.DateTimeFormat("es-VE", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function VerifiedNote({ verifiedAt, volatility, sources }: VerifiedBlock) {
  return (
    <p className="mt-6 text-sm leading-6 text-[#5c6b60]">
      Datos verificados el{" "}
      <time dateTime={verifiedAt}>{dateFormat.format(new Date(`${verifiedAt}T12:00:00Z`))}</time>
      {volatility === "high" && " · La situación puede cambiar sin aviso"}
      {" · Consulta siempre las recomendaciones oficiales de tu país"}
      {sources?.length ? (
        <>
          {" · "}
          {sources.map((source, index) => (
            <span key={source.href}>
              {index > 0 && ", "}
              <a href={source.href} rel="nofollow noopener" target="_blank" className="underline underline-offset-2">
                {source.label}
              </a>
            </span>
          ))}
        </>
      ) : null}
    </p>
  );
}
```

`timeZone: "UTC"` ist kein Detail: ohne Fixierung formatiert die Umgebung nach lokaler Zeitzone, und ein um einen Tag abweichendes Prüfdatum ist genau die Sorte Fehler, die dieser Block verhindern soll.

Regeln daraus:

- **Aktualisierungspflicht nur für `volatility: "high"`.** Geografie und Geschichte werden nicht quartalsweise „geprüft", nur weil ein Datum daneben steht.
- **Keine Preisangabe ohne Datum und Währung.** Geprüft: heute enthält keiner der 23 Guides eine Preisangabe (`grep -rnoE 'US\$ ?[0-9]+|\$[0-9]+|[0-9]+ ?(dólares|bolívares|USD)' lib/states/data/` → 0 Treffer). Die Regel ist präventiv und gilt ab der ersten Zahl: Betrag, Währung, Erhebungsdatum, Quelle. Bei venezolanischer Inflation ist jede undatierte Angabe binnen Wochen falsch — und `/venezuela/dinero-y-pagos` sowie `/venezuela/presupuesto` bestehen fast vollständig aus solchen Angaben.
- **Ohne `verifiedAt`, `volatility` und den sichtbaren Hinweis gehen diese beiden Seiten nicht live.** Das ist kein SEO-Kriterium, sondern die Bedingung dafür, sie verantwortbar zu veröffentlichen.
- Die Textbausteine „Datos verificados el", „Consulta siempre las recomendaciones oficiales de tu país" und die spanischen Monatsnamen müssen **vor** dem nächsten Übersetzungslauf in den `manual`-Block von `content-translator.tsx` — dieselbe Falle wie bei der Byline in 5.9.

Wer die Angaben verantwortet, nach welcher Methode geprüft wird und wie Korrekturen ausgewiesen werden, gehört nicht in einen Absatz auf `/sobre-nosotros`, sondern auf eine eigene, verlinkte Redaktions-, Korrektur- und KI-Kennzeichnungsrichtlinie; sie liefert zugleich `Organization.publishingPrinciples` und `correctionsPolicy` → Abschnitt 9.

### 5.9 E-E-A-T-Bausteine

Kein `author`, kein `datePublished`, kein `dateModified` existiert im Repo. Für Reise-Content 2026 ist das die teuerste Einzellücke — Googles Leitfaden vom 15.05.2026 stellt First-Hand-Experience explizit gegen Zusammenfassungen allgemein verfügbaren Wissens.

**Autorenseite** `app/autora/page.tsx` (oder `/sobre-nosotros` erweitern):

```json
{ "@type": "Person", "@id": "https://mrsvenezuela.com/#autora",
  "name": "Michell Naranjo",
  "url": "https://mrsvenezuela.com/autora",
  "knowsAbout": ["Venezuela", "turismo en Venezuela", "Canaima", "Los Roques"],
  "sameAs": ["https://www.instagram.com/mrsvenezuela_1/"] }
```

Der Name steht bereits im `manual`-Dictionary von `components/i18n/content-translator.tsx:12-18` — eine reale Identität, die SEO-seitig komplett ungenutzt bleibt.

**Sichtbare Byline** in `components/content/state-editorial-guide.tsx` (Intro-Block, ~Zeile 248):

```tsx
<p className="mt-3 text-sm text-[#5c6b60]">
  Por <a href="/autora">Michell Naranjo</a> · Actualizado el{" "}
  <time dateTime={guide.updatedAt}>
    {new Date(guide.updatedAt).toLocaleDateString("es-VE", { day: "numeric", month: "long", year: "numeric" })}
  </time>
</p>
```

`guide.updatedAt` existiert noch nicht — im ganzen Repo findet sich kein einziges Vorkommen. Das Feld ist zusammen mit der Byline anzulegen (`updatedAt: string` in `StateGuideData`, ISO-Datum), und es ist dieselbe Quelle, die `dateModified` im JSON-LD und `lastmod` in der Sitemap speist. Drei Ausgabestellen, ein Feld — auseinanderlaufende Datumsangaben sind schlimmer als gar keine.

**Falle:** Der Datumsstring läuft durch `content-translator.tsx`. „Actualizado el", „Por" und die Monatsnamen müssen vorher als Einträge in den `manual`-Block — sonst passiert dasselbe wie bei „Menú" → „Menü" → „Speisekarte" (im Code selbst dokumentiert, Zeile 19-25). Vor jedem Skriptlauf Snapshot von `lib/site-translations.json` anlegen.

**`components/institutional/about-page-content.tsx`** ist heute rein atmosphärisch. Ergänzen: wer schreibt, Bezug zu Venezuela, Recherchemethodik, Quellen, Aktualisierungsrhythmus — und eine ehrliche Angabe zur KI-Unterstützung. Google empfiehlt in der gen-AI-Doku ausdrücklich „sharing information about how a piece of content was created". Da die Texte über `lib/institutional-i18n.ts` laufen, müssen die Blöcke in allen fünf Sprachen gepflegt werden.

**Originalfotos** sind die größte E-E-A-T-Lücke: `next.config.ts:4-15` erlaubt ausschließlich Wikimedia-Hosts. Pragmatischer Einstieg ohne Reisebudget: eigene Handyfotos, Familien-/Diaspora-Bestände mit dokumentierter Erlaubnis, Leser-Einsendungen mit Namensnennung. Ein einziges Originalfoto pro Guide ändert den Charakter der Seite. Ein Feld `ownPhoto: true` führen, damit sich der Fortschritt messen lässt.

### 5.10 Redaktionsplan: Quartalsrhythmus plus Saisonvorlauf

Quartalsrhythmus, aber **nur mit echtem Informationsgewinn**. Datums-Refreshes ohne inhaltliche Änderung sind erkennbar und wirken gegen die Site.

- Alle 90 Tage: die in GSC am stärksten fallenden Seiten ansehen, drei bis fünf substanziell überarbeiten.
- Als echtes Update zählt: neue Preise, geänderte Zugangslage, neue Fotos, korrigierte Fakten, neue Unterfragen.
- Nicht: Umformulierungen, Jahreszahl im Titel, Copyright-Update.
- Nur bei echten Änderungen `updatedAt` hochziehen → lastmod bleibt vertrauenswürdig, IndexNow sendet nur echte Änderungen.
- Discover-Frische-Fenster (*wahrscheinlich*, aus Branchenauswertung): Tag 1–7 maximaler Boost, 8–14 moderat, 15–30 begrenzt. Die 23 Guides sind alle mit Commit `e76e4d1` gleichzeitig live gegangen — ohne Nachschub fallen sie geschlossen aus dem Fenster. 2–4 Veröffentlichungen pro Monat.

**Der reaktive Teil reicht nicht.** „Alle 90 Tage die fallenden Seiten überarbeiten" hat keinen Vorlauf, Reisenachfrage aber sehr wohl. Für eine Site ohne Nachrichtenanlass ist der Saisonkalender der einzige **planbare** Discover-Auslöser. Zwei Regeln:

1. Veröffentlichung **8–12 Wochen vor** dem Fenster, nicht darin.
2. `updatedAt` der Saisonseiten **vor** der Saison hochziehen, nicht mittendrin — mitten in der Saison ist der Traffic bereits verteilt.

Die venezolanische Besonderheit, die kein generischer Reisekalender abbildet: Trockenzeit Dez–Apr ist die Empfehlung für Gran Sabana und Los Roques, **aber der Salto Ángel führt in der Regenzeit Jun–Nov das meiste Wasser**. Das ist eine der häufigsten Fragen überhaupt und ein eigener Timing-Hebel, weil er der Standardantwort widerspricht.

| Fenster | Zeitraum | Veröffentlichung / `updatedAt` | Seiten | Rohstoff im Bestand |
|---|---|---|---|---|
| Trockenzeit Gran Sabana, Los Roques | Dez–Apr | Sep–Okt | `/mejor-epoca-para-viajar-a-venezuela`, `/estado/bolivar`, `/playa/los-roques` | „temporada" in 14 von 23 Guides |
| Salto Ángel mit maximaler Wasserführung | Jun–Nov | Mär–Apr | `/parque-nacional/canaima`, `/estado/bolivar` | Guides vorhanden, Aussage fehlt |
| Karneval (beweglich, Feb/Mär) | jahresweise prüfen | Nov–Dez | Estado-Guides, `/itinerarios` | `Carnaval` in 8 Guides, u. a. `bolivar.ts` (El Callao) |
| Semana Santa (beweglich, Mär/Apr) | jahresweise prüfen | Dez–Jan | Estado-Guides, `/itinerarios` | `Semana Santa` in 6 Guides |
| Diablos Danzantes (Corpus Christi, beweglich) | jahresweise prüfen | ~3 Monate vorher | `/estado/miranda`, `/estado/aragua`, `/estado/carabobo`, `/estado/cojedes`, `/estado/la-guaira` | in genau diesen 5 Guides belegt |
| Feria de la Chinita | November, Zulia | Aug–Sep | `/estado/zulia` | nur in `zulia.ts` |
| Hallacas und Dezemberküche | Dezember | Sep–Okt | `/gastronomia-venezolana`, `/comida/hallaca` | `hallaca` nur in `tachira.ts` |

Karneval, Semana Santa und Corpus Christi sind bewegliche Feste — das konkrete Datum wird je Jahr geprüft und nicht aus dem Vorjahr fortgeschrieben. Das Muster der Tabelle zeigt zugleich die Content-Lücke: der kulturelle Rohstoff liegt verstreut in einzelnen Bundesstaat-Guides, es gibt keine Landesseite, die ihn bündelt.

**Einschränkung zur Discover-Erwartung:** Das erste reine Discover-Core-Update (05.–27.02.2026) wurde zunächst nur für englischsprachige Nutzer in den USA ausgerollt, die Ausweitung ist angekündigt, aber nicht terminiert. Für eine spanischsprachige Site ist die Wirkung damit offen. Der Saisonvorlauf lohnt trotzdem — er zahlt unabhängig davon auf Suche und auf Pinterest ein.

**Dritte Quelle neben GSC und Kalender: die eigene interne Suche.** Null-Treffer-Suchen der Besucher sind die billigste und ehrlichste Content-Recherche, die es gibt, weil sie Nachfrage misst, die die Site gerade nicht bedient. Die Erhebung (`track("search", { q, results })` über das bereits installierte `@vercel/analytics`, Normalisierung der Begriffe, Nennung in der Datenschutzerklärung) steht in Abschnitt 4; redaktionell gilt: **monatliche Auswertung, die häufigsten Null-Treffer-Begriffe gehen als Zeilen in das Keyword-Mapping aus 5.5** — entweder als neue Seite mit Registerzeile oder als Erweiterung einer Bestandsseite. Damit hat der Redaktionsplan drei Eingänge — fallende Rankings (reaktiv), Saisonkalender (planbar), Null-Treffer-Suchen (Nachfrage) — statt nur einen.

---

## 6. Mehrsprachigkeit

### Ist-Zustand

`components/i18n/language-provider.tsx:15` startet immer mit `"es"` und liest die Sprache erst in einem `useEffect` aus localStorage (`:18`). Beim Wechsel wird sie doppelt weggeschrieben: localStorage `descubre-venezuela-language` (`:26`) **und** Cookie `mrs-venezuela-language` (`:27`). Der Cookie-Name kommt im gesamten Repo genau einmal vor — er wird nirgends gelesen. `components/i18n/content-translator.tsx` ersetzt danach DOM-Textknoten und genau vier Attribute (`translatedAttributes` = `alt`, `aria-label`, `placeholder`, `title`, `:74`). `<title>`, `<meta name="description">` und JSON-LD bleiben unangetastet, weil `translateTree` bei `document.body` startet (`:123`). `<html lang="es">` steht fest in `app/layout.tsx:66` und wird ausschließlich clientseitig überschrieben.

Es gibt genau eine URL pro Inhalt, kein `[lang]`-Segment, keine `middleware.ts`. `alternates` erscheint an fünf Stellen (`app/layout.tsx:32`, `app/estados/page.tsx:34`, `app/contacto/page.tsx:16`, `app/sobre-nosotros/page.tsx:16`, `lib/page-factory.tsx:29`) — ausnahmslos als `canonical`, kein einziges `languages`.

Konsequenz: **Googlebot crawlt ohne localStorage. GPTBot, ClaudeBot, PerplexityBot und OAI-SearchBot führen überhaupt kein JavaScript aus** (Vercel/MERJ über 500 Mio. Fetches: ClaudeBot lädt JS in 23,84 % der Requests, führt es nie aus). Für alle Crawler existiert mrsvenezuela.com ausschließlich auf Spanisch. EN, DE, FR und ZH erzeugen null organische Sichtbarkeit und werden von KI-Systemen nie in der Zielsprache zitiert. Bezahlt wird diese Nicht-Sichtbarkeit trotzdem — vom Sprachkatalog im Layout-Chunk jeder Route, den auch jeder spanische Besucher lädt (beziffert in Abschnitt 4).

Der doppelte Speicherzugriff ist zugleich ein offener Posten der Markenvereinheitlichung (Roadmap 16): localStorage-Schlüssel und Cookie tragen **verschiedene** Namen. Wer nur einen davon umbenennt, setzt die Spracheinstellung aller Bestandsbesucher auf Spanisch zurück. Beide gehören in einem Schritt angefasst, mit Migrationspfad (Stufe 1). Als nutzerinitiierte Einstellung ist der Zugriff nach § 25 TDDDG einwilligungsfrei vertretbar, muss aber dokumentiert werden — mit dem tatsächlich verwendeten Namen, in Abschnitt 9.

### Empfehlung

**Stufe 1 sofort, Stufe 2 nach Bewertung, Stufe 3 vorerst nicht.**

#### Stufe 1 — Katalog-Splitting und Skript-Bereinigung (P1, unabhängig von jeder Routing-Entscheidung)

Das wirkt für 100 % der Besucher und ist Voraussetzung für alles Weitere:

- Katalog pro Sprache in eigene Datei, dynamisch nachladen (Code in Abschnitt 4).
- `scripts/generate-site-translations.mjs:30` scannt `lib/` komplett — also auch `lib/i18n.ts`, dessen fremdsprachige Blöcke bei `:190`, `:364`, `:538`, `:712` liegen. Folge: Ketten-Übersetzungen. Beleg im Katalog: `"Icônes et coins tranquilles"` → de `"Ikonen und stille Münzen"` (frz. „coins" = Ecken, als engl. „coins" = Münzen übersetzt). `lib/i18n.ts` aus der Dateiliste ausschließen.
- `looksLikeCopy` (`:9-16`) prüft nur String-Anfänge — 141 Tailwind-Klassenstrings sind als Übersetzungsschlüssel im Katalog (`"container-page py-16"`, `"absolute inset-0"`, `"object-cover transition duration-500 ease-out group-hover:scale-[1.02]"`). Auf Positivprüfung umstellen und den Katalog einmalig bereinigen.
- Eigennamen-Sperrliste aus allen `name`-Feldern in `lib/content.ts` und allen `capital`-Werten in `lib/states/regions.ts` generieren. Belegte Schäden: `"Isla de Coche"` → en `"Coche Island"`, `"Laguna de Canaima"` → de `"Canaima-Lagune"`, `"Ciudad Bolivar"` → `"Ciudad Bolívar"`. Geschützt sind heute nur fünf Namen (`content-translator.tsx:12-18`).
- Frühen Ausstieg bei `language === "es"` einbauen.

**Speichernamen zusammenführen, ohne Bestandsbesucher zu verlieren.** Ein Name, ein Ort, ein Migrationsschritt beim ersten Lesen:

```tsx
// components/i18n/language-provider.tsx
const STORAGE_KEY = "mrs-venezuela-language";
const LEGACY_KEY = "descubre-venezuela-language";

useEffect(() => {
  const legacy = window.localStorage.getItem(LEGACY_KEY);
  if (legacy && !window.localStorage.getItem(STORAGE_KEY)) {
    window.localStorage.setItem(STORAGE_KEY, legacy);
    window.localStorage.removeItem(LEGACY_KEY);
  }
  const saved = window.localStorage.getItem(STORAGE_KEY) as LanguageCode | null;
  if (saved && saved in translations) setLanguageState(saved);
}, []);
```

Das Cookie in `:27` bekommt denselben Namen — oder fällt ersatzlos weg. Behalten lohnt nur, wenn es später eine Middleware liest (Stufe 2); dann gehört an die Zeile ein Kommentar, der genau das sagt. Ein Cookie, das niemand liest, ist im Datenschutzhinweis trotzdem aufzuführen und damit reine Belastung.

**Sprachwahl über Sprachnamen, nicht über Flaggen.** `components/sections/language-switcher.tsx:11-15` bindet `public/flags/{es,de,en,fr,zh}.png` ein. Immerhin sind die Flaggen bereits dekorativ ausgezeichnet (`aria-hidden="true"`, `alt=""`) und der Sprachname steht daneben (`option.label`, `:90`) — der Screenreader-Fall ist damit sauber. Das visuelle Problem bleibt: `es.png` ist die **spanische** Flagge auf einer Site über Venezuela, `en.png` der Union Jack, während der gesamte Marktfall unten auf den US-Markt zeigt. Flaggen sind Staaten, keine Sprachen. Bilder entfernen, Endonym als primäres Label (`Español`, `Deutsch`, `English`, `Français`, `中文`) und den spanischen Exonym-Namen aus `lib/i18n.ts:2-6` (`"Alemán"`, `"Inglés"`) höchstens als sekundäre Zeile. Spart nebenbei fünf Bild-Requests im Header.

#### Stufe 2 — nur Englisch, nur die wichtigsten Seiten (P2, nach Auswertung von Stufe 1)

Marktdaten (Ahrefs, abgerufen 25.08.2026): `mount roraima` 10.000/Mo US (KD 11), `los roques` 6.000/Mo US (KD 0), `angel falls venezuela` 3.600/Mo US (KD 36), `venezuela beaches` 3.100/Mo US (KD 0), `canaima national park` 1.800/Mo US (KD 0). Dagegen DE: `venezuela urlaub` 800/Mo, `venezuela sehenswürdigkeiten` 250/Mo. FR: `los roques` 800/Mo, `voyage venezuela` 150/Mo.

Englisch ist 10–20× größer als DE und FR zusammen, bei Keyword-Difficulty 0–36. Deshalb: `app/[lang]/` einziehen, aber **nur `/en` und nur 8–12 URLs** — Startseite, `/en/estados`, `/en/playas` plus die Guides zu Canaima/Salto Ángel, Los Roques, Roraima/Gran Sabana, Mérida/Pico Bolívar, Médanos de Coro.

Der teure Teil ist nicht der Code, sondern der Text: ~54.500 Wörter × 4 Sprachen = ~218.000 Wörter, die maschinell übersetzt und dann redaktionell geprüft werden müssten. Vier Sprachen komplett auszurollen erzeugte 212 dünne, teils fehlerhafte Seiten — bei Reisethemen ein Qualitätsrisiko, kein Gewinn.

**Harte Freigaberegel — nicht verhandelbar.** Unrevidierte maschinelle Übersetzung ist ein ausdrückliches Beispiel für „scaled content abuse" in Googles Spam-Policies; die Sanktion trifft nicht die einzelne Seite, sondern die Domain. Daraus folgt für jede `/en`-URL:

- Keine `/en`-URL geht live ohne muttersprachliche Durchsicht. Kein Ausnahmefall, kein „vorläufig", kein `noindex`-Parkplatz.
- Jede freigegebene Übersetzung trägt einen eigenen `reviewedBy`-Eintrag im Datenmodell (Name der prüfenden Person, Datum) — dieselbe Struktur, die Abschnitt 3 für `author`/`reviewedBy` im `Article`-Knoten vorsieht. Ohne Eintrag rendert die Route nicht.
- Der Rollout ist durch die Prüfkapazität begrenzt, nicht durch die Übersetzungskapazität. **Lieber 6 geprüfte als 12 rohe URLs.** Die Zielzahl 8–12 ist eine Obergrenze, kein Soll.

**Metadaten und alt-Texte serverseitig, pro Sprache.** `generateMetadataFor` (`lib/page-factory.tsx:15-47`) um den `lang`-Parameter erweitern, `openGraph.locale` (`en_US` statt `es_VE`, `:38`) und `inLanguage` daraus ableiten. Genauso die Bildtexte: `alt` läuft heute durch `content-translator.tsx:74`, also rein clientseitig — für Google Images existiert die Site ausschließlich spanisch. Mit `/en` müssen `alt` und Bildunterschrift aus derselben serverseitig gerenderten Quelle kommen wie der Fließtext, nicht aus dem Laufzeit-Übersetzer. Die redaktionelle Neufassung der Alt-Texte (Motiv + Ort + Bundesstaat) gehört deshalb in denselben Arbeitsgang wie der `figcaption`-Umbau aus Abschnitt 3 — sonst wird sie zweimal gemacht.

**hreflang erst dann.** Solange es keine lokalisierten URLs gibt, ist hreflang nicht „schon mal vorbereitet", sondern formal ungültig: Fünf `alternates.languages`-Einträge, die alle auf dieselbe URL zeigen, deklarieren fünf Sprachversionen eines Dokuments, das nur in einer Sprache existiert. Google verwirft solche Annotationen als nicht-reziprok. Erst Routen, dann hreflang:

```ts
alternates: {
  canonical: `/en${path}`,
  languages: {
    "es": path,
    "en": `/en${path}`,
    "x-default": path,
  },
},
```

Dazu `alternates.languages` pro Eintrag in `app/sitemap.ts` — der Typ `SitemapFile` unterstützt es, Localizations sind seit Next 14.2.0 verfügbar, in 15.5.20 also gesetzt:

```ts
// app/sitemap.ts — nur für Pfade, die tatsächlich in beiden Sprachen existieren
{
  url: absoluteUrl(path),
  lastModified: item.updatedAt,
  alternates: {
    languages: {
      es: absoluteUrl(path),
      en: absoluteUrl(`/en${path}`),
    },
  },
}
```

Der Sprachumschalter (`components/sections/language-switcher.tsx:67-96`) muss von `<button onClick>` auf `<Link href={…} hrefLang={…}>` umgebaut werden — heute erzeugt er keinen einzigen crawlbaren Link, und die hreflang-Annotation im `<head>` ohne Link im Body ist ein Signal ohne Pfad.

Sprachcode-Detail: `lib/i18n.ts:6` definiert `"zh"`, das Skript übersetzt gegen `"zh-CN"` (`generate-site-translations.mjs:6`) und mappt zurück. Für hreflang und `<html lang>` gehört `zh-Hans` verwendet, nicht `zh` — sonst konkurrieren Vereinfacht und Traditionell um dieselbe Annotation. `x-default` immer auf die spanische Variante.

#### Stufe 3 — DE, FR, ZH: vorerst nicht

Bei 150–800 Suchen/Monat rechtfertigt der Aufwand den Ertrag nicht. ZH zusätzlich zurückstellen: Google spielt in China kaum eine Rolle, und maschinelles Chinesisch bei Eigennamen ist am schwersten zu kontrollieren (der Katalog liefert bereits `Arepa` → `Arepa 玉米饼` als Mischform). Solange die Prüfkapazität für `/en` nicht steht, ist jede weitere Sprache nur eine weitere Möglichkeit, die Freigaberegel zu brechen.

#### Middleware-basierte Accept-Language-Weiterleitung

Als alleinige Lösung ungeeignet: Sie erzeugt keine indexierbaren URLs, trifft Googlebot ohnehin nicht (crawlt aus den USA ohne Accept-Language-Header) und birgt das Risiko, Nutzer in eine Variante zu sperren. Wenn überhaupt, dann *nach* Stufe 2 als reine Komfortschicht mit 302 und ohne Redirect für Bot-User-Agents. Erst dieser Fall gibt dem Cookie aus `language-provider.tsx:27` einen Leser — vorher nicht.

#### Sofort-Fix ohne Routing-Umbau

`components/sections/search-overlay.tsx:58` baut den Haystack aus `item.name`, `item.kicker`, `item.description`, `item.region` — alle spanisch — plus dem lokalisierten Typnamen aus `localizedKinds` (`:19-25`). Der Typname trägt weiter, als man erwartet: „Strand" findet tatsächlich alle 15 Playa-Seiten, weil `de.playa = "Strand"` im Haystack steht. Unterhalb der Typebene bricht es ab. Eigennamen und Beschreibungen bleiben spanisch, also liefern „Wasserfall", „Hochland", „waterfall" oder „white sand" null Treffer, obwohl der Nutzer eine vollständig übersetzte Oberfläche vor sich hat — die Suche ist der einzige Ort, an dem die Übersetzungsschicht sichtbar aufhört zu funktionieren. Die Katalogwerte für `item.name` und `item.description` in der aktiven Sprache mit in den Haystack aufnehmen; `language` steht in `:46` bereits zur Verfügung. Kostet nichts an Routing und behebt den auffälligsten Bruch der bestehenden Lösung.

### Was das realistisch bringt

Stufe 1 bringt **kein Keyword**. Sie bringt Ladezeit für 100 % der Besucher und beseitigt Fehler, die heute in vier Sprachen ausgeliefert werden. Das ist der sichere Teil und der einzige mit vollständig kalkulierbarem Ergebnis.

Stufe 2 ist eine Wette auf sechs bis zwölf Seiten, keine Marktöffnung. Keyword-Difficulty 0 heißt nicht Ranking in Woche eins — sie heißt nur, dass die vorderen Plätze wenig Links tragen; Alter, Themenautorität und interne Verlinkung entscheiden trotzdem, und beides baut sich über Quartale auf, nicht über Wochen. Die realistische Erwartung für die ersten zwei Quartale nach dem `/en`-Rollout liegt bei Long-Tail-Einstiegen (`how to get to los roques`, `angel falls best time to visit`) im zwei- bis niedrigen dreistelligen Klickbereich pro Monat, nicht bei den Kopf-Volumina aus der Tabelle. Die Head-Terms sind das Ziel für Monat 12+, falls die Seiten Bestand haben.

Der zweite, schlechter messbare Hebel ist GEO: KI-Antworten werden überwiegend aus englischsprachigem Material zusammengesetzt, und eine spanischsprachige Quelle wird für eine englische Frage seltener zitiert — Zitierbarkeit ist der eigentliche Grund für `/en`, nicht das Suchvolumen. Ein Zahlenwert dafür lässt sich aus den vorliegenden Quellen nicht ableiten.

Dagegen steht ein asymmetrisches Risiko: Der Ertrag von `/en` ist auf die `/en`-Seiten begrenzt, der Schaden einer als skaliert erkannten Übersetzung ist es nicht. Deshalb ist die Reihenfolge nicht verhandelbar — Stufe 1 vollständig, dann sechs geprüfte englische Seiten, dann messen. Der größere und sicherere Traffic-Hebel bleibt bis dahin der spanische Ausbau aus Abschnitt 5: gleicher Redaktionsaufwand, kein Übersetzungsrisiko, und ein Markt, in dem die Site inhaltlich bereits zu Hause ist.

---

## 7. KI-Sichtbarkeit (GEO)

### 7.1 Was belegt ist

**Google verlangt für die KI-Suche keine eigenen Dateien und kein eigenes Markup.** Der Optimierungsleitfaden vom 15.05.2026 sagt wörtlich: „You don't need to create new machine readable files, AI text files, markup, or Markdown to appear in Google Search (including its generative AI capabilities)" und „Structured data isn't required for generative AI search, and there's no special schema.org markup you need to add." Ebenfalls wörtlich: „There's no requirement to break your content into tiny pieces." Und als Rahmensatz über allem: „optimizing for generative AI search is optimizing for the search experience, and thus still SEO." Diese vier Sätze sind das Rückgrat dieses Kapitels — sie streichen jede Maßnahme, die als „KI-Sonderbehandlung" verkauft wird, und lassen genau das übrig, was die Abschnitte 2 bis 5 ohnehin verlangen. Der vierte belegte Satz betrifft Off-Site: „Seeking inauthentic 'mentions' across the web isn't as helpful as it might seem" — die Gegenposition zu jedem Mention-Paket, das in Abschnitt 8 auftauchen könnte.

**Serverseitiges HTML ist die harte Grenze.** Kein großer KI-Crawler führt JavaScript aus (Vercel/MERJ über >500 Mio. Fetches; Ladequoten wie „ClaudeBot lädt JS in 23,84 %" sind Sekundärzahlen, die Kernaussage null Ausführung ist konsistent belegt). Für dieses Repo ist das bei den Guides unkritisch: `app/estado/[slug]/page.tsx` ist über `generateStaticParams` prerendert, und `components/content/state-editorial-guide.tsx` trägt zwar `"use client"`, wird aber vollständig ins HTML gerendert. Kritisch ist alles, was erst *nach* der Hydration entsteht: die DOM-Übersetzung in `components/i18n/content-translator.tsx`, die Trefferliste in `components/sections/search-overlay.tsx` und die Zustände des Mega-Menüs. Für jede KI-Antwortmaschine existiert mrsvenezuela.com ausschließlich auf Spanisch (Abschnitt 6).

**Training und Retrieval sind entkoppelt.** GPTBot = Training, OAI-SearchBot = Zitate in ChatGPT-Search. ClaudeBot = Training, Claude-SearchBot = Suche. Wer pauschal alles blockt, verhindert nicht das Training (das läuft auch über CCBot und Drittdatensätze), sondern nur die Zitierung.

**Wer robots.txt respektiert — präzise, weil im Entwurf zu grob:** GPTBot und OAI-SearchBot befolgen robots.txt. **Nutzerausgelöste Fetches ignorieren robots.txt nur bei OpenAI und Perplexity**: OpenAI dokumentiert für ChatGPT-User „Because these actions are initiated by a user, robots.txt rules may not apply", Perplexity für Perplexity-User „Since a user requested the fetch, this fetcher generally ignores robots.txt rules." **Alle drei Anthropic-Crawler — ClaudeBot, Claude-User, Claude-SearchBot — respektieren robots.txt**, auch der nutzerausgelöste Claude-User. Der pauschale Satz „nutzerausgelöste Fetches ignorieren robots.txt" ist falsch und darf so nirgends im Plan stehen. **Google-Extended und Applebot-Extended sind reine Steuertoken**: „Google-Extended doesn't have a separate HTTP request user agent string … the robots.txt user-agent token is used in a control capacity." Sie crawlen selbst nichts, steuern nur Gemini-Apps/Vertex-AI, und AI Overviews sowie AI Mode laufen über Googlebot — „There are no additional requirements to appear in AI Overviews or AI Mode."

Die heutige `app/robots.ts` enthält genau eine Regel (`userAgent: "*"`, `allow: "/"`). Für GEO ist damit nichts zu reparieren; die Differenzierung in Gruppen ist eine Frage aus Abschnitt 2, keine Voraussetzung für Zitierbarkeit.

**Bing ist Retrieval-Schicht für Copilot** und speist weiterhin ChatGPT Search. Ohne Bing-Index unsichtbar für beide, unabhängig vom Google-Ranking.

**Die einzige peer-reviewte GEO-Studie** (Princeton/IIT Delhi, KDD 2024, GEO-Bench ~10.000 Queries) misst 22–41 % Sichtbarkeitsgewinn. Stärkste Einzelmethoden: **Zitate aus autoritativen Quellen** (+41 % Position-Adjusted Word Count) und **relevante Statistiken hinzufügen**. Der oft zitierte „+40 %" ist ein Maximalwert, kein Durchschnitt. Die Zahlen sind nicht primär nachprüfbar und bleiben als Größenordnung markiert.

**Reise & Gastgewerbe hat die höchste Zitierrate aller Branchen** (~23 %, Similarweb, Mai 2026, branchenübergreifend 6,8 %) — Sekundärquelle, als Richtungsindiz brauchbar, nicht als Zielwert.

**FAQ-Rich-Results sind seit 07.05.2026 abgeschaltet**, die Doku wurde am 15.06.2026 entfernt; das Ende des API-Supports im August 2026 stammt aus der Branchenberichterstattung. FAQPage bleibt gültiges Vokabular und schadet nicht — solange die Fragen sichtbar auf der Seite stehen.

**llms.txt ist praktisch tot.** John Mueller am 02.06.2026: „purely speculative for now", die Datei existiere seit Jahren, „yet none of the AI systems use it". Gary Illyes hatte zuvor bestätigt, dass Google sie nicht unterstützt und nicht plant. **Neu und ausdrücklich nur als Beobachtungspunkt:** Mueller nennt als Alternative mit „clear goals & processes" **WebMCP** — ein von Google gestütztes Protokoll für agentische Zugriffe. Das ist heute keine Maßnahme, keine Datei und kein Aufwand im Plan; es ist der Kandidat, den man beobachtet, falls sich die Frage „maschinenlesbare Schnittstelle" 2027 doch stellt (Abschnitt 11).

### 7.2 Was Wette ist (klar gekennzeichnet)

- **Logdaten gegen llms.txt** (*wahrscheinlich*): In einer Auswertung von >500 Mio. Bot-Events über 90 Tage gab es nur „einige hundert" Requests auf `/llms.txt`; unter den 50 meistzitierten Domains hatte genau eine die Datei. Sekundärquelle, nicht primär belegt — deckt sich aber mit Muellers Aussage.
- **Ahrefs-Korrelationsstudie** (75.000 Marken, Dez. 2025): YouTube-Erwähnungen ~0,737 > Branded Web Mentions 0,656–0,709 > Branded Anchors 0,511–0,628 > Domain Rating 0,266–0,326 > Backlinks ~0,218. Die Autoren schreiben selbst „correlation isn't causation", und die Stichprobe ist auf DR>40 gefiltert — **nicht direkt auf eine junge Site übertragbar.** Die Richtung (Off-Site-Entitätssignale schlagen Link-Metriken) ist konsistent genug, um Aufwand zu lenken.
- **Plattform-Konzentration ist volatil** (Semrush, 14.07.–12.10.2025, >230.000 Prompts): ChatGPT zitierte Reddit ~60 % und Wikipedia ~55 % der Antworten — bis Mitte September 2025, dann Absturz auf ~10 % bzw. <20 %. Google AI Mode lag im selben Zeitraum bei Wikipedia ~2 %. Methodisch belastbare Studie, aber eine Momentaufnahme: **Es gibt keine Strategie „für KI", nur eine pro Engine — und keine, auf die man sich festlegt.**
- **Struktur-Zahlen aus Anbieter-Blogs** („Tabellen 4,2× häufiger zitiert", „FAQ-Schema +45 %", „Semantic Completeness r=0,87") — *unsicher*, Methodik nicht offengelegt. **Nicht als Fakt weitergeben.** Der Mechanismus (Retrieval arbeitet auf Passagen von typisch 150–300 Wörtern) ist unstrittig, die Prozentzahl nicht.
- **Blocken von Trainings-Crawlern**: widersprüchliche Evidenz. BuzzStream (19.03.2026, 4 Mio. Zitationen) findet kaum Zusammenhang; Cloro (Juli 2026) findet, dass GPTBot-blockende Domains je Google-Ranking fast keine ChatGPT-Zitationen erhalten (Median 0,003 vs. 0,417); Rutgers/Wharton (31.12.2025) misst bei blockenden Publishern −23,1 % monatliche Besuche. **Als Richtungsindiz behandeln.** Für eine junge Content-Site ohne Lizenzgeschäft gibt es keinen ökonomischen Grund zu blocken.
- **Überlappung KI-Zitate ↔ Google-Top-10** schrumpft: Werte je nach Methodik 52 % (Surfer), 38 % (Ahrefs, März 2026, gegen ~76 % Mitte 2025), 6,8 % (ChatGPT vs. Google-Top-10). **Richtung nehmen, nicht die Zahl.**

Belastbar sind in diesem Kapitel genau vier Quellen: Princeton GEO (KDD 2024), Ahrefs (75.000 Marken, mit Kausalitäts-Disclaimer), Semrush (230.000 Prompts) und Vercel/MERJ (>500 Mio. Fetches). Alles andere ist Richtungsindiz.

### 7.3 Konkrete Maßnahmen

**Vercel-Firewall-Kurzcheck (5 Minuten, keine P0-Dringlichkeit).** Vercel bietet ein „AI Bot Managed Ruleset", das GPTBot, ClaudeBot, PerplexityBot und Bytespider mit einem Klick blockiert, und es greift **vor** `app/robots.ts`. Entscheidend ist die Entwarnung aus der Doku: **„The ruleset is inactive by default. In the dashboard this is labeled Allow."** Relevant ist der Check also nur, falls jemand das Ruleset aktiv auf Deny gestellt hat — nicht als Standardrisiko. (Die im Entwurf stehende Behauptung, das Ruleset sei „auf allen Plänen verfügbar", ist unbelegt und entfällt; die Doku macht keine Planangabe.) Einmal verifizieren, dann abhaken:

```bash
curl -A "Mozilla/5.0 (compatible; ClaudeBot/1.0)" -sI https://mrsvenezuela.com/estado/bolivar | head -1
curl -A "Mozilla/5.0 (compatible; GPTBot/1.4)" -sI https://mrsvenezuela.com/estado/bolivar | head -1
```

Beides muss HTTP 200 liefern, nicht 403 und keine Challenge-Seite.

**Zitierfähige Content-Muster — die einzige echte Content-Maßnahme dieses Kapitels.** Googles Leitfaden sagt ausdrücklich, dass Content *nicht* in Kleinstteile zerlegt werden muss; das Gegenteil davon ist aber nicht Prosa ohne Antwort. RAG-Retrieval arbeitet auf Passagen, und eine Antwort, die über drei Absätze verteilt ist, überlebt das Chunking nicht. In `lib/states/types.ts` pro Sektion (`know`, `history`, `nature`, `access`) ein Feld `answer: string` einführen — ein einziger Satzblock von 40–60 Wörtern, vollständig ohne Rückverweis:

```ts
answer: "Bolívar es el estado más extenso de Venezuela con 240.528 km², una cuarta parte del país. Ocupa el sureste, entre el río Orinoco al norte, Brasil al sur y Guyana al este. Su capital es Ciudad Bolívar, la antigua Angostura, y su mayor ciudad es Ciudad Guayana."
```

In `state-editorial-guide.tsx` direkt nach `EditorialSectionHeading` rendern, vor den `paragraphs` (Sektion 01 ab Zeile 271). Damit steht in jedem Chunk: Überschrift (= Frage) + vollständige Antwort + Zahl. Das entspricht exakt dem, was Princeton als wirksam gemessen hat und was Microsoft in der AI-Performance-Ankündigung empfiehlt. Jede Zahl in diesen Sätzen muss belegt sein — ein erfundener km²-Wert ist im KI-Kontext teurer als in der klassischen Suche, weil er zitiert weitergereicht wird. **Mit den fünf suchstärksten Bundesstaaten beginnen** (Bolívar, Mérida, Nueva Esparta, Falcón, Zulia), nicht mit allen 23. Die neuen Strings gehören in denselben Commit wie ihre Einträge in `lib/site-translations.json`.

**Fakten-Semantik: bereits erledigt, im Repo verifiziert.** Der Entwurf verlangt, `guide.know.facts` von Label/Value-Divs auf `<dl>` umzustellen. Beide Renderstellen nutzen bereits `<dl>/<dt>/<dd>` — `PracticalFacts` (`state-editorial-guide.tsx:155`) und Sektion 01 (`:282`). Die Maßnahme entfällt. Offen bleibt nur `guide.access.routes` (`:446–457`): ein `<div>`-Stapel aus Icon, `<h3>` und `<p>`. Das ist im Kern die Tabelle „Anreiseart → Beschreibung" und wäre als `<dl>` eindeutiger. Nutzen gering, Aufwand gering — P2, nicht vorziehen.

**Entitäts-Disambiguierung.** Die `<h1>` der Guides enthält nur `{guide.name}`, also „Bolívar" — kollidiert mit Simón Bolívar, Pico Bolívar, Ciudad Bolívar und Bolívar in Kolumbien/Ecuador. Entweder „Estado Bolívar, Venezuela" als h1-Text oder mindestens `sameAs` auf Wikidata (Abschnitt 3). **Korrektur zum Entwurf:** Die dort vermutete Doppel-h1 existiert nicht. `state-editorial-guide.tsx:224` und `:236` liegen in den beiden Zweigen desselben Ternärs (`guide.hero ? … : …`, ab Zeile 208); es rendert immer genau eine. Der Punkt ist geprüft und erledigt — die h1-Invariante in der CI (Abschnitt „Prozess") hält ihn erledigt.

**Sprechende Sektions-IDs.** `#guia-01` … `#guia-09` (`state-editorial-guide.tsx:194–202`, Sektionen ab `:271`) sind für Menschen und Maschinen bedeutungslos. `#historia`, `#naturaleza`, `#como-llegar`, `#consejos` machen Deep-Links zitierbar; Perplexity und ChatGPT verlinken Fragmente, wenn sie sie finden. `guide-toc.tsx` liest die IDs aus derselben `sections`-Liste (`:176`) und zieht automatisch mit — die Umstellung ist eine Änderung an einem Array, plus 301-Regel für die alten Fragmente entfällt (Fragmente werden nicht serverseitig aufgelöst).

**404-Rate.** KI-Crawler raten URLs deutlich häufiger als Googlebot (ChatGPT-Crawler 34,82 % 404 gegenüber 8,22 % bei Googlebot; Vercel/MERJ, Sekundärzahl). `app/not-found.tsx` liefert bereits echten 404 — `lib/page-factory.tsx:52` ruft `notFound()` — und enthält einen Home-Link plus vier Vorschläge (`/playas`, `/estado/merida`, `/parque-nacional/canaima`, `/playa/los-roques`). Das ist richtig so. Welche URLs geraten werden, ist auf diesem Setup allerdings nicht direkt auslesbar (siehe 7.4): Als Ersatz die 404-Meldungen aus der GSC-Abdeckung („Nicht gefunden (404)") und Bing WMT auswerten. Jede plausible, aber nicht existierende URL (`/playa/morrocoy`, `/estado/distrito-capital`) ist ein Signal für eine erwartete Entität, die fehlt — entweder anlegen oder 301 mappen.

**Was hier bewusst nicht steht:** llms.txt, eine `ai.txt`, Markdown-Spiegelversionen der Guides, KI-spezifisches Schema-Markup oder gekaufte Erwähnungen. Alle fünf sind von Google wörtlich als überflüssig bzw. schädlich benannt.

### 7.4 Messung

| Ebene | Was | Verlässlichkeit |
|---|---|---|
| Bing WMT → AI Performance (Public Preview seit 10.02.2026) | Total Citations, Average Cited Pages, Grounding Queries, Zitierungen pro URL. Deckt Copilot, Bing-KI-Zusammenfassungen und „select partner integrations" | **Echte First-Party-Zählung** — die einzige verfügbare. Eine Erweiterung um Intents/Topics/Citation Share/Compare im Juni 2026 kursiert in Sekundärquellen, ist **nicht belegt** und wird nicht eingeplant |
| GSC → Search Generative AI (seit 03.06.2026) | Impressionen in AI Overviews, AI Mode und Discover-KI nach Seite/Land/Gerät/Datum. Daten ab 18.05.2026, kein Backfill | belegt, aber **nur Impressionen** — keine Klicks, keine CTR, keine Queries. Zusätzlich: laut Sekundärquellen zunächst nur für eine **Teilmenge der Properties** ausgerollt (Start UK), globale Ausweitung ohne Termin. Der Plan setzt nicht voraus, dass der Report nach der Verifizierung sichtbar ist |
| Vercel Analytics | Referrer `chatgpt.com`, `perplexity.ai`, `claude.ai`, `copilot.microsoft.com`, `gemini.google.com` | unvollständig: 35–70 % der KI-Sessions kommen ohne Referrer; Google-AI-Mode-Klicks tragen `noreferrer` und sind grundsätzlich nicht trennbar |
| GSC → Crawling-Statistik | Crawl-Anfragen, Antwortcodes, Dateitypen, Googlebot-Typ | die einzige belastbare Crawl-Sicht — **nur Google**, kein KI-Bot außer Googlebot |
| Bing WMT → Crawl Information | Bingbot-Crawls, Fehlerseiten, blockierte URLs | zweite Quelle, **nur Bing**; relevant, weil Bing die Retrieval-Schicht für Copilot ist |

**Der KPI „Crawler-Hits pro Bot" ist auf dem aktuellen Setup nicht erhebbar — und wird deshalb nicht als KPI geführt.** Der Entwurf sieht Vercel Log Drains vor, um `OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `Claude-SearchBot`, `ClaudeBot`, `GPTBot` und `Bingbot` zu zählen. Das scheitert doppelt: Log Drains sind ein Pro-/Enterprise-Feature, und **selbst mit Pro liefe die Messung ins Leere**, weil alle Routen prerendert sind (`generateStaticParams` in `app/estado/[slug]/page.tsx` und den übrigen Content-Routen) — Crawler-Requests werden aus dem CDN bedient und erscheinen nie im Function-Log. Die Vorfrage „werden wir überhaupt abgeholt?" bleibt damit für die KI-Crawler unbeantwortet. Drei Optionen, in dieser Reihenfolge:

1. **Nichts zubuchen** (Empfehlung für den Start): GSC-Crawling-Statistik und Bing WMT Crawl Information decken die beiden Crawler ab, an denen alle KI-Oberflächen hängen, die dieser Plan überhaupt bespielt. Google und Bing sind gecrawlt = die Retrieval-Basis steht.
2. **DNS auf Cloudflare umziehen** (kostenloser Plan, liefert eine Bot-Übersicht inklusive KI-Crawlern). Kein Hosting-Wechsel, nur Nameserver — kollidiert allerdings mit dem GSC-TXT-Record und den Mail-Records aus Abschnitt 2 und will als eigener, geplanter Schritt gemacht werden.
3. **Vercel Observability zubuchen** bzw. auf einen Plan mit Log Drains gehen — nur sinnvoll, wenn Bot-Daten wirklich eine Entscheidung tragen.

Zwei Log-Fallen gelten für alle drei Wege: Der **OAI-SearchBot-UA beginnt seit 2026 mit einem vollen Chrome-Desktop-String** (`Mozilla/5.0 (Macintosh; …) Chrome/131.0.0.0 Safari/537.36; compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot`) — ein Filter auf `^OAI-SearchBot` matcht nicht mehr; es braucht `contains`. Und **Google-Extended sowie Applebot-Extended erscheinen nie in Logs**, weil sie reine Steuertoken ohne eigenen Request sind. Wer sie sucht und nicht findet, zieht sonst den falschen Schluss.

Marketing, nicht Realität: „AI Visibility Scores" und „Share of Voice in LLMs" von Drittanbietern sind Prompt-Stichproben mit n = einige tausend, keine Messung. Für Trends nutzbar, nicht für Reporting.

**Erwartungsmanagement:** KI-Referral-Traffic liegt branchenübergreifend bei ~1 % (Spanne 0,1–2,8 %). Der Wert liegt 2026 in Zitierung und Markenpräsenz, nicht in Sessions. Wer GEO über Klick-ROI rechtfertigt, misst das Falsche — und unterschätzt den Effekt zugleich, weil ein großer Teil als Direct verbucht wird.

---

## 8. Off-Site, Discover und Marke

Off-Site heißt hier nicht Linkaufbau. Es heißt: die vier Kanäle, über die eine Site ohne Domain-Historie überhaupt in fremde Oberflächen kommt — Discover, Google Images, algorithmusfreie Verteil-Rails, unabhängige Erwähnungen — und die zwei Entscheidungen, die darüber bestimmen, ob sich diese Arbeit später summiert oder gegen die Site richtet: der Markenname und der erste bezahlte Link.

### 8.1 Google Discover — der größte einzelne Hebel

Discover kennt keine Mindest-Sitegröße, keinen Domain-Authority-Schwellenwert und keine Publisher-Center-Registrierung. Google wörtlich: „No special tags or structured data are required." Bewertung erfolgt auf Themenebene — genau das Profil dieser Site.

Voraussetzungen, die heute fehlen:

1. **`max-image-preview:large`** (Abschnitt 2.4). Im ganzen Repo kein Treffer. Ohne diesen Wert gibt es nur kleine Thumbnails statt der großen Bildkarte — die Bildkarte ist der gesamte Mechanismus von Discover.
2. **Großformatige Bilder.** Dokumentiert ist ausschließlich **„At least 1200 px wide"**. Ein Seitenverhältnis nennt Google nicht; **16:9 ist Praxisempfehlung, keine Anforderung** — begründet damit, dass dieselbe Datei auch die OG- und Twitter-Karte bedient und Querformat in allen drei Oberflächen ohne Beschnitt durchgeht. Der Ist-Zustand widerspricht beidem: `lib/page-factory.tsx:36` deklariert für **jede** Route pauschal `width: 1200, height: 800`, obwohl das Bild pro Slug ein anderes ist und bei den Commons-Hotlinks ohnehin nicht stimmt. `public/images/salto-angel.jpg` ist 1733×2599, also hochkant, und dient in `lib/content.ts:43-44` gleichzeitig als `angelFalls` und `canaima` — damit ist ein Hochformat das OG- und Discover-Bild von `/parque-nacional/canaima`.
3. **Sichtbare Byline und sichtbares Datum** (Abschnitt 5, E-E-A-T-Bausteine).
4. **Publikationsrhythmus** (Abschnitt 5, Redaktionsplan).

Maßnahme zu Punkt 2: pro Guide ein dediziertes Querformat-Derivat mit mindestens 1600 px Breite unter `public/images/og/<slug>.jpg` ablegen und als eigenes Feld führen, statt das Hero-Bild zweckzuentfremden. `StatePhoto` in `lib/states/types.ts` um ein optionales Feld erweitern:

```ts
export type StatePhoto = {
  src: string;
  alt: string;
  position?: string;
  /** Querformat-Derivat ≥1600 px für OG/Discover. Nur eigene Dateien unter /images/og/. */
  ogSrc?: string;
};
```

Und in `lib/page-factory.tsx` die Bildauflösung so, dass Maße nur dort stehen, wo sie an der Datei gelesen wurden:

```tsx
  const heroImage = guide?.hero?.ogSrc ?? guide?.hero?.src ?? item.image;
  const image = heroImage.startsWith("/") ? absoluteUrl(heroImage) : heroImage;
  // Eigene Derivate haben bekannte Maße; bei allem anderen lieber kein Feld als ein geratenes.
  const ogImage = heroImage.startsWith("/images/og/")
    ? { url: image, width: 1600, height: 900, alt: item.name }
    : { url: image, alt: item.name };
```

Der Grund für die Fallunterscheidung steht in Abschnitt 13: `public/images/cayo-de-agua.jpg` ist 1600×**899**, nicht 900. Maße werden gelesen oder weggelassen, nie geschätzt.

**Zum Discover Core Update vom Februar 2026 — und was daraus nicht folgt.** Das Update lief vom **05.02.2026** bis zum **27.02.2026** und war das erste reine Discover-Update überhaupt. Zwei Vorbehalte sind für diese Site entscheidend: Der Rollout betraf zunächst **nur englischsprachige Nutzer in den USA**, eine Ausweitung auf weitere Länder und Sprachen ist angekündigt, aber nicht terminiert — für eine spanischsprachige Site ist die Wirkung damit offen. Und die verbreitete Ableitung, Qualitäts- und E-E-A-T-Signale seien seit Februar 2026 die Eligibility-Schwelle und Engagement nur noch sekundär, ist **doppelt unsicher**: Google hat das Update bestätigt, nicht dessen Zielbeschreibung, und der geografische Geltungsbereich deckt diesen Markt bisher nicht ab. Byline, Datum und Autorenprofil bleiben trotzdem richtig — sie sind unabhängig davon in den Quality-Rater-Kriterien verankert. Keine Maßnahme dieses Plans darf mit „seit Februar 2026 Pflicht" begründet werden.

Blockierend wären außerdem die Meta-Tags `nopagereadaloud` und `notranslate` — beide kommen im Repo nicht vor, das ist in Ordnung.

**Warnung:** Discover-Traffic ist volatil und darf nie die einzige Säule sein. Nutzer-Dismissals wirken pro URL dauerhaft. Und da diese Site keinen Nachrichtenanlass produziert, ist der einzige planbare Discover-Auslöser der saisonale Vorlauf aus dem Redaktionskalender (Abschnitt 5) — Veröffentlichung vor dem Reisefenster, nicht mittendrin.

### 8.2 Bilder-SEO

83 eigene Bilder in `public/images`, 41 `next/image`-Tags, alle mit `alt` — die Basis stimmt. Es fehlen: Bild-Sitemap (Abschnitt 2.6), `ImageObject` mit Lizenz (Abschnitt 3) und die Ablösung der 55 Commons-Hotlinks, die schwach sind, weil Google typischerweise zugunsten der Originalquelle dedupliziert: Die Bildsuche zeigt dann Commons, nicht diese Domain.

Priorisiert die Commons-Bilder durch eigene bzw. lokal gespiegelte ersetzen: erst Canaima, Los Roques, Médanos, Pico Bolívar, Morrocoy. Sobald der letzte Hotlink weg ist, können die beiden `remotePatterns`-Einträge in `next.config.ts` entfallen — und `unoptimized` mit ihnen.

Dieselbe Änderung zahlt auf drei Konten gleichzeitig ein: LCP (Abschnitt 4), Bildindexierung (hier) und Drittlandtransfer (Abschnitt 9) — denn `unoptimized` bewirkt, dass der Browser jedes EU-Besuchers direkt Wikimedia kontaktiert. Das ist der Grund, warum dieser Punkt nicht als Performance-Nachzügler behandelt wird.

Ein Nebeneffekt des Bildregisters aus Abschnitt 9, der hier zählt: Die sichtbare Attribution als `<figcaption>` ist zugleich der einzige Fließtext unmittelbar am Bild — Kontext für Google Images und zitierfähiges Chunk-Material für RAG-Systeme in einem.

### 8.3 Wikimedia — mit klarer Regel-Warnung

**Nicht tun:**

- **Keinen Wikipedia-Artikel über Mrs Venezuela** anlegen oder anlegen lassen. Die Site erfüllt die Relevanzkriterien nicht (keine unabhängige Berichterstattung). Wikipedia rät bei persönlicher oder beruflicher Beziehung ausdrücklich davon ab; wer es dennoch tut, muss die Beziehung offenlegen und über Articles for Creation einreichen. Bezahltes Editieren erfordert nach den Wikimedia-Nutzungsbedingungen die Offenlegung von Auftraggeber und Zahlendem. Ein bezahlter Artikel über ein nicht-relevantes Thema wird trotzdem gelöscht — das Geld ist weg und die Marke hat eine öffentlich dokumentierte COI-Historie.
- **Keine Links auf mrsvenezuela.com in bestehende Venezuela-Artikel.** Wikipedia-Policy: „you should avoid linking to a site that you own." Wird revertiert, im Wiederholungsfall Blacklisting der Domain.
- **Kein Wikidata-Item für die Website.** Erfüllt keines der drei Notabilitätskriterien (Sitelink zu einem Wikimedia-Projekt / klar identifizierbare Entität mit seriösen öffentlichen Quellen / struktureller Nutzen für andere Items) und landet im Löschantrag. Erst sinnvoll, wenn unabhängige, zitierfähige Quellen über das Projekt existieren.

Die COI- und Offenlegungsregeln sind kein Stilhinweis, sondern der Grund, warum dieser Kanal nur in eine Richtung nutzbar ist; die Einordnung steht in Abschnitt 9.

**Legitim und sofort umsetzbar:**

- **`sameAs` auf die bestehenden Wikidata-Items der Orte** (Abschnitt 3). Die Q-IDs existieren längst; das ist der billigste Entitäts-Hebel im Projekt. Jede QID einzeln verifizieren — Estado, gleichnamige Stadt und gleichnamige Person sind drei Entitäten (Abschnitt 13).
- **Eigene Fotos unter CC BY-SA 4.0 auf Wikimedia Commons hochladen**, sauber kategorisiert (Category:Canaima National Park, Category:Los Roques …). Werden sie in Artikel eingebunden, erscheint der Name der Urheberin dauerhaft auf der Dateibeschreibungsseite. Kein COI, keine Löschgefahr.

  **Vorbedingung, ohne die dieser Punkt sofort kippt:** hochgeladen wird ausschließlich, was nachweislich selbst fotografiert wurde. Es gilt dieselbe Nachweispflicht wie beim Bildregister in Abschnitt 9 — für die 83 lokalen Dateien existiert heute keine Herkunftsdokumentation, und ein Upload fremden Materials unter eigener Lizenz ist auf Commons ein Löschgrund mit Namensnennung und in Deutschland zusätzlich ein Haftungsfall. **Ebenfalls vorher klären:** CC BY-SA ist unwiderruflich und erlaubt jedem Dritten auch die kommerzielle Nachnutzung.

### 8.4 Verteilkanäle — Priorität nach Zitier- und Referral-Wert, nicht nach Reichweite

1. **Pinterest** — zweithöchste Referral-Menge nach Facebook, höchste Conversion-Rate (2,31 %), Evergreen-Halbwertszeit von Monaten bis Jahren (*wahrscheinlich*, Anbieter-Erhebung 2025/2026). Business-Konto, `mrsvenezuela.com` als Claimed Website verifizieren, ein Board pro Region plus Playas/Parques/Gastronomía, pro Guide 3–5 vertikale 1000×1500-Pins mit **Deeplink auf `/estado/<slug>`**, nicht auf die Startseite. Titel und Beschreibung spanisch und englisch.
2. **YouTube** — ~23,3 % Anteil an Google-AI-Overview-Zitaten, aber **94 % der KI-Zitate entfallen auf Long-form, nicht auf Shorts** (*wahrscheinlich*). Also 5–12-Minuten-Videos pro Bundesstaat mit vollständigem, redigiertem Transkript in der Beschreibung, Kapitelmarken, Kernantwort in den ersten 30 Sekunden. Shorts nur als Zubringer aus dem bestehenden TikTok-Bestand.
3. **Reddit** — meistzitierte Domain in KI-Antworten, besonders bei Perplexity. Aber: Rule 8 stuft ausschließliches Posten eigener Inhalte als Spam ein, und markenbenannte Accounts haben strukturell schlechtere Überlebensraten. **Persönlicher Account mit offengelegter Rolle**, in r/venezuela, r/travelphotography, r/solotravel. Die Antwort muss vollständig im Kommentar stehen — genau der Text wird zitiert. Link nur, wenn er zusätzlich etwas liefert. Regeln jedes Subreddits einzeln lesen, sie variieren stark.
4. **Instagram und TikTok** — laufen bereits (`components/sections/home-footer.tsx:8-9`), gehören ins `sameAs`, taugen für Markenaufbau, tauchen aber in keiner Top-Zitat-Liste auf und schicken kaum Traffic.
5. **Newsletter** — die einzige Traffic-Quelle, die niemand abschalten kann. Bei ~60 % Zero-Click-Suchen und einem berichteten Rückgang des organischen Google-Traffics von 33 % im Jahresvergleich (Reuters Institute Digital News Report 2026, *wahrscheinlich*, Sekundärerhebung) ist das keine Nebensache. Die Site hat heute nur `mailto:` im Footer (`components/sections/home-footer.tsx:70,74`). Anbieter mit EU-Hosting (Betreiberin sitzt in Deutschland), Double-Opt-In, konkretes Versprechen: „Un estado de Venezuela al mes, con fotos y guía." Formular serverseitig rendern.
6. **RSS-Feed** — die Rail unter den Punkten 1 und 5, und die einzige Verteilstrecke ohne Algorithmus dazwischen. Ein Feed unter `/feed.xml` (Technik: Abschnitt 4) speist drei Dinge ohne weitere Handarbeit: **RSS-to-Email** — der Newsletter-Versand entfällt als eigener Arbeitsschritt und wird zur Konfiguration; **Feedly, Flipboard und Reise-Aggregatoren** — reine Themenabos, die niemand zwischen Site und Leser umgewichten kann; **Pinterest Auto-Pins** — neue Guides landen ohne manuelles Anlegen im Board. Aufwand einmalig ~30 Minuten, danach null. Genau deshalb steht der Feed hier und nicht unter „nice to have": Er ist die billigste Absicherung gegen die Volatilität aus 8.1.

**Video nicht nur rausschicken, sondern zurückholen.** Punkt 2 produziert Material, das die Site heute nirgends verwendet — kein Embed, kein `VideoObject`, kein Transkript on-site (`grep -r youtube`: null Treffer). Das ist die teuerste Auslassung des Kanals, denn `VideoObject` ist eines der wenigen 2026 verbliebenen Rich Results und ein sichtbares Transkript liefert exakt das Passagenmaterial, das RAG-Systeme zitieren. Drei Regeln:

- **Einbetten ausschließlich über `youtube-nocookie.com` mit Klick-zum-Laden-Fassade.** Ein direkt geladenes Embed kippt den heute consent-freien Zustand der Site und erzwingt eine CMP (Abschnitt 9) — plus LCP- und INP-Kosten für ein Element, das die meisten Besucher nie starten.
- **Transkript sichtbar in die Seite**, nicht nur in die YouTube-Beschreibung. Redigiert, mit Zwischenüberschriften; das ist gleichzeitig der Barrierefreiheits-Baustein (Abschnitt 4).
- **`VideoObject` in den `@graph`** der jeweiligen Guide-Seite (Abschnitt 3), mit `transcript` und `embedUrl` auf dieselbe nocookie-URL.

```tsx
// components/content/video-embed.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

type VideoEmbedProps = { videoId: string; title: string; poster: string; posterAlt: string };

export function VideoEmbed({ videoId, title, poster, posterAlt }: VideoEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <button
        type="button"
        onClick={() => setLoaded(true)}
        aria-label={`Reproducir el video: ${title}`}
        className="relative block aspect-video w-full overflow-hidden rounded-2xl"
      >
        <Image src={poster} alt={posterAlt} fill sizes="(max-width: 768px) 100vw, 800px" className="object-cover" />
      </button>
    );
  }

  return (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="aspect-video w-full rounded-2xl border-0"
    />
  );
}
```

Das Poster ist eine lokale Datei und braucht damit einen Eintrag im Bildregister aus Abschnitt 9 wie jedes andere Bild auch.

### 8.5 Backlinks und unabhängige Erwähnungen

Links sind deutlich entwertet, aber nicht tot. Gary Illyes on record: seit längerem kein Top-3-Faktor, „We need very few links to rank pages." Es gibt keinen Schwellenwert, der erst erreicht werden müsste — Ressourcen gehören in Inhalt und Originalmaterial.

Ausgeschlossen: gekaufte Links, PBNs, Wikipedia-Selbsteinträge, gekaufte Mention-Pakete (Google warnt im AI-Leitfaden ausdrücklich vor „seeking inauthentic 'mentions' across the web") — und **Google Business Profile**. Dokumentiert ist: „If your business either has a physical location that customers can visit, or travels to customers where they are, you can create a Business Profile." Ein rein informationelles Online-Angebot ohne Ladengeschäft und ohne Kundenbesuche erfüllt keine der beiden Bedingungen und ist damit nicht eligible; ein trotzdem angelegtes Profil riskiert Sperrung.

Realistisch: Commons-Uploads, echte Beteiligung in Diaspora-Communities, Kontaktaufnahme zu venezolanischen Regional- und Diaspora-Medien für Interviews über die reale Person hinter dem Projekt. **Ziel sind nicht Links, sondern dass der Markenname unabhängig von der eigenen Domain auftaucht.**

### 8.6 Vor der Vereinheitlichung: markenrechtliche Prüfung des Namens

Der nächste Abschnitt zieht die gesamte Entität — Site-Name, `og:site_name`, JSON-LD `name`, Social-Handles, Kontaktadresse — auf „Mrs Venezuela". Diese Konsolidierung ist SEO-seitig richtig und **rechtlich ungeprüft**. Das gehört in dieser Reihenfolge entschieden, nicht danach.

Der Sachverhalt: „Miss Venezuela" ist als Kennzeichen der Organización Miss Venezuela (Cisneros) geschützt, und „Mrs." ist im Pageant-Umfeld ein eingeführtes Kennzeichen derselben Kategorie. Die Site tritt geschäftsmäßig auf — `lib/institutional-i18n.ts:11` bietet aktiv Kooperationen mit Unterkünften, Reiseveranstaltern und Marken an —, sie ist also kein reines Privatprojekt. Damit sind Berechtigungsanfrage, UDRP-Verfahren gegen die Domain oder Abmahnung reale Szenarien. Entscheidend ist die Asymmetrie: **Je vollständiger die Entität auf diesen Namen konsolidiert wird, desto größer der Schaden im Ernstfall** — nach der Vereinheitlichung hängen Site-Name in den SERPs, `sameAs`-Cluster, Pinterest-Claimed-Website, YouTube-Kanal, Newsletter-Absender und E-Mail-Domain an einem Namen, der dann nicht mehr wechselbar ist, ohne alles Aufgebaute zu verlieren.

Maßnahme, terminiert **vor** dem Vereinheitlichungs-Commit (Roadmap, Abschnitt 12):

1. **Recherche in TMview, DPMAregister und USPTO**, Nizza-Klassen **39** (Reise, Reisevermittlung), **41** (Unterhaltung, Wettbewerbe) und **16** (Druckerzeugnisse). Gesucht wird nicht nur die identische Zeichenfolge, sondern die verwechslungsfähige — „Miss Venezuela", „Mrs Venezuela", „Sra. Venezuela".
2. **Dokumentierte Entscheidung** mit Datum und Rechercheergebnis, abgelegt im Repo. Eine bewusste, belegte Risikoübernahme ist etwas anderes als ein übersehenes Risiko — auch in der Außenwirkung, falls es später zur Auseinandersetzung kommt.
3. **Fallback sichern:** „Descubre Venezuela" als Zweitdomain registrieren, bevor der Name konsolidiert wird. Kostet zweistellig pro Jahr und ist die einzige Versicherung, die es hier gibt. Der Claim bleibt ohnehin in Gebrauch (siehe 8.7), die Domain ist damit kein Wegwerfposten.
4. Unabhängig vom Ergebnis: **Registrar-Lock, Auto-Renew und 2FA** aktivieren, Registrierung auf die Betreiberin (Details in Abschnitt 10).

Die rechtliche Einordnung im Detail — Kennzeichenrecht, UDRP, Reaktion auf eine Berechtigungsanfrage — steht in Abschnitt 9. Hier zählt nur die Reihenfolge: prüfen, entscheiden, dann konsolidieren.

### 8.7 Markenname vereinheitlichen — blockiert alles Off-Site-Weitere

17 Fundstellen sagen „Descubre Venezuela" (`app/layout.tsx:27-28,39-40,48,54`, `app/page.tsx:49`, `app/estados/page.tsx:38`, `lib/page-factory.tsx:33,42,60,74`, dazu `components/content/detail-page.tsx:824`, `guide-toc.tsx:101`, `los-roques-guide.tsx:117`, `medanos-guide.tsx:313`, `pico-bolivar-guide.tsx:218`), 16 sagen „Mrs Venezuela" (Domain, `components/sections/site-header.tsx:76,78,238`, `lib/institutional-i18n.ts:10-27`, Footer-Copyright, Instagram, TikTok, E-Mail).

**Entscheidung: „Mrs Venezuela" ist der Name, „Descubre Venezuela" wird `alternateName` und Claim** — vorbehaltlich 8.6. Domain, Social Handles und Kontaktadresse sprechen eindeutig dafür. Google leitet den in den SERPs angezeigten Site-Namen aus genau diesen Signalen ab; widersprüchliche Angaben führen dazu, dass stattdessen der nackte Domainname gezeigt wird.

**Bekannter Nachteil, den man nicht wegoptimieren kann:** Namenskollision mit dem realen Schönheitswettbewerb. Gegenmittel sind Disambiguierung im Schema (`description`, `knowsAbout`, `alternateName`) und thematisch gebundene Marken-Queries („Mrs Venezuela guía", „Mrs Venezuela viajes"). Die Erwartung, den Pageant-Namensraum zu übernehmen, ist unrealistisch.

`components/content/detail-page.tsx:824` zeigt im Hero den Badge „Descubre Venezuela" — als Claim in Ordnung, aber `og:site_name` und JSON-LD `name` müssen „Mrs Venezuela" sagen.

Zwei Dinge, die im selben Commit mitlaufen müssen: die **Speicherschlüssel** in `components/i18n/language-provider.tsx` (localStorage `descubre-venezuela-language` gegen Cookie `mrs-venezuela-language` — beide anfassen, sonst verlieren Bestandsbesucher ihre Spracheinstellung), und die **E-Mail-Adresse**: `infomrsvenezuela@gmail.com` (`components/institutional/contact-page-content.tsx:6`, `home-footer.tsx:70,74`) ist als Organisationsadresse ein schwaches Trust-Signal und im Impressum unpassend — `info@mrsvenezuela.com` mit SPF, DKIM und DMARC gehört zur Namensentscheidung dazu (Abschnitt 10).

### 8.8 Monetarisierung — die Regeln stehen vor dem ersten bezahlten Link

Die Site wirbt bereits aktiv um Kooperationen: `lib/institutional-i18n.ts:11` bietet Zusammenarbeit mit „alojamientos, operadores turísticos, proyectos locales, fotógrafos, creadores y marcas" an. Es gibt aber keine Regel, was passiert, wenn jemand annimmt. Diese Regel jetzt schriftlich festzulegen kostet eine Stunde; sie nachträglich einzuführen bedeutet, bereits veröffentlichte Empfehlungen zurückzubauen.

**Vier Regeln, verbindlich ab dem ersten bezahlten oder vergüteten Link:**

- **`rel="sponsored"`** an jedem bezahlten, vergüteten oder aus einer Gegenleistung entstandenen Link. Bei Unsicherheit `rel="sponsored nofollow"` — der Schaden eines zu viel gesetzten Attributs ist null, der eines fehlenden ist eine manuelle Maßnahme.
- **Sichtbare Werbekennzeichnung im Text**, am Anfang des betreffenden Abschnitts oder Beitrags — **nicht** im Footer, nicht in den AGB, nicht hinter einem Aufklappen. Kennzeichnung muss dort stehen, wo die Empfehlung steht.
- **Trennung redaktioneller von kommerziellen Empfehlungen.** Ein bezahlter Eintrag darf nicht als redaktionelle Auswahl auftreten. Praktisch: kommerzielle Nennungen kommen in einen eigenen, als solchen benannten Block, nie in die Fließtext-Empfehlung einer Guide-Sektion.
- **Keine Unterseiten vermieten, keine Fremdinhalte auf der Domain hosten** — weder Gastbeiträge gegen Geld noch „Partnerbereiche". Das ist Site Reputation Abuse und trifft die gesamte Domain, nicht nur die betroffene URL.

**Die SEO-Folge, die dabei regelmäßig übersehen wird:** Affiliate- und Buchungs-Widgets sind die häufigste Einzelursache für einbrechende INP- und CLS-Werte — ein nachgeladenes Preis- oder Verfügbarkeits-Widget verschiebt Layout und blockiert den Main Thread genau in dem Moment, in dem der Nutzer scrollt. Ein einziges eingebautes Widget kann die gesamte Performance-Arbeit aus Abschnitt 4 aufzehren. Dazu kommt: Fast jedes dieser Widgets setzt Cookies oder lädt Drittanbieter-Skripte und **erzwingt damit eine CMP** — der heute consent-freie Zustand der Site ist ein realer Discover- und CWV-Vorteil, den man einmal ausgibt und nicht zurückbekommt (Abschnitt 9).

Falls monetarisiert wird, ist die verträglichste Form deshalb der statische, redaktionell gesetzte Link mit `rel="sponsored"` — kein Widget, kein Skript, kein Iframe. Die vollständige Kooperationsrichtlinie inklusive Kennzeichnungspflicht nach § 5a UWG gehört auf dieselbe öffentliche Seite wie die Redaktions- und KI-Richtlinie (Abschnitt 9).

---

---

## 9. Recht, Lizenzen und Risiko

Dieser Abschnitt gehört in einen SEO-Plan, weil die drei teuersten Fehler, die dieses Projekt machen kann, keine Ranking-Fehler sind: eine Abmahnung wegen fehlendem Impressum, eine Lizenzforderung für ein Foto ohne belegbare Herkunft, der Verlust der Domain nach der Entitäts-Konsolidierung. Jeder dieser Fälle kostet mehr als der gesamte Rest des Plans einbringt, und die ersten beiden sind heute im Repo verifizierbar offen. Dazu kommt die SEO-Seite derselben Medaille: Betreiber- und Kontaktangaben, eine sichtbare Redaktionsrichtlinie und Bildnachweise sind genau die Trust-Signale, auf die Abschnitt 5 die E-E-A-T-Argumentation stützt — sie fehlen aber auf der Basisebene, während der Plan die Kür plant.

**Das hier ersetzt keine Rechtsberatung.** Es ist eine Befundliste mit Datei- und Zeilenangaben, konkret genug, um sie entweder selbst abzuarbeiten oder einer Anwältin mit einer präzisen Frageliste vorzulegen statt mit „bitte mal draufschauen". Wo die Einordnung strittig ist, steht das ausdrücklich dabei.

### 9.1 Impressum und Datenschutzerklärung (§ 5 DDG, Art. 13 DSGVO)

**Befund.** Weder Route noch Footer-Link. `app/` enthält an institutionellen Seiten nur `contacto` und `sobre-nosotros`. Die `siteLinks`-Liste in `components/sections/home-footer.tsx:19-27` führt sieben Einträge (`/`, `/estados`, `/playas`, `/#destinos`, `/#articulos`, `/sobre-nosotros`, `/contacto`) — keiner davon rechtlich. `app/sitemap.ts:15-16` kennt entsprechend nur die beiden bestehenden institutionellen URLs.

**Warum die Ausnahme „private Website" hier nicht greift.** `lib/institutional-i18n.ts:10` benennt die Betreiberin wörtlich als „Michell Naranjo, una venezolana viviendo en Alemania" — deutscher Wohnsitz, damit deutsches Recht. `:11` bietet auf `/contacto` aktiv Kooperationen mit „alojamientos, operadores turísticos, proyectos locales, fotógrafos, creadores y marcas" an. Das ist eine auf Dauer angelegte, auf Einnahmen gerichtete Tätigkeit; die Impressumspflicht des § 5 DDG knüpft an „geschäftsmäßige, in der Regel gegen Entgelt angebotene" Telemedien an und setzt keine tatsächlich erzielten Einnahmen voraus. Die Angebotsseite genügt.

**Maßnahme — zwei Server-Routen, indexierbar.** Kein `noindex`. Diese Seiten sind ein Trust-Signal, sie sollen gefunden werden, sie ranken ohnehin nur auf Marken-Queries und sind für die Quality Rater die Stelle, an der „Wer betreibt das?" beantwortet wird. Fehlende oder versteckte Betreiber-/Kontaktangaben sind bei einer Site, die Empfehlungen ausspricht, das Standard-Negativkriterium.

```tsx
// app/aviso-legal/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Aviso legal | Mrs Venezuela" },
  description:
    "Datos del responsable del sitio, contacto y responsable de contenidos conforme a la legislación alemana (§ 5 DDG).",
  alternates: { canonical: "/aviso-legal" },
};

export default function AvisoLegalPage() {
  return (
    <main className="container-page py-16">
      <h1 className="font-[family-name:var(--font-display)] text-4xl">Aviso legal</h1>
      {/* Angaben nach § 5 DDG — Text siehe Checkliste unten */}
    </main>
  );
}
```

`app/privacidad/page.tsx` analog mit `canonical: "/privacidad"`.

**Der `canonical`-Export ist hier nicht optional.** Metadata wird in Next 15 flach gemerged; ein Segment ohne eigenes `alternates` erbt `alternates.canonical: "/"` aus `app/layout.tsx:32-34`. Genau so ist der `/playas`-Bug entstanden (Abschnitt 2). Zwei neue Routen ohne eigenen Canonical wären zwei neue Duplikate der Startseite — und ausgerechnet die Rechtsseiten wären damit nicht indexierbar auffindbar.

**Verlinkung in einem Commit:** zwei Einträge in `siteLinks` (`home-footer.tsx:19-27`), zwei Einträge in `app/sitemap.ts` mit `changeFrequency: "yearly"`, `priority: 0.3`, und die `publishingPrinciples`-Verkettung aus 9.6. Die Labels laufen über `dictionary.nav.menu.*` wie alle anderen Footer-Links, brauchen also je einen Eintrag in `lib/site-translations.json` — Vorsicht dabei, das Übersetzungsskript ist bekanntlich übergriffig (Projektregel: Snapshot vor dem Lauf).

**Inhaltliche Checkliste Impressum.** Vollständiger Name, ladungsfähige Anschrift, E-Mail plus zweiter Kanal für schnelle Kontaktaufnahme, bei journalistisch-redaktionellen Angeboten zusätzlich der inhaltlich Verantwortliche mit Anschrift (§ 18 Abs. 2 MStV — bei redaktionell aufbereiteten Reiseguides naheliegend, im Zweifel aufnehmen: kostet nichts). Ob der früher übliche Hinweis auf die EU-Online-Streitbeilegungsplattform noch aufzunehmen ist, vor der Veröffentlichung kurz prüfen; die Plattform wurde eingestellt.

**Das Adressproblem ist der eigentliche Blocker.** „Ladungsfähig" heißt: eine Anschrift, unter der zugestellt werden kann. Ein Postfach genügt nicht, eine reine c/o-Angabe ohne tatsächliche Erreichbarkeit ebenfalls nicht. Wer die Privatanschrift nicht veröffentlichen will, braucht einen Impressumsdienst mit ladungsfähiger Adresse oder eine c/o-Adresse mit belegbarer Zustellmöglichkeit. Das ist ein Vorgang von wenigen Tagen und der einzige Punkt in 9.1, der nicht am selben Nachmittag erledigt ist — deshalb zuerst anstoßen, dann die Routen bauen.

**Inhaltliche Checkliste Datenschutzerklärung (Art. 13 DSGVO).** Verantwortliche mit Kontaktdaten; je Verarbeitung Zweck und Rechtsgrundlage; Empfänger und Auftragsverarbeiter (Vercel Inc. für Hosting und Analytics, ggf. Wikimedia Foundation als Drittempfänger solange Hotlinks bestehen, siehe 9.2); Drittlandtransfer inklusive Garantie; Speicherdauer; Betroffenenrechte inklusive Widerspruch; Beschwerderecht bei der Aufsichtsbehörde. Nicht vergessen: die Server-Logs des Hosters sind eine eigene Verarbeitung (IP-Adresse, Art. 6 Abs. 1 lit. f) und müssen genannt werden, auch wenn niemand sie auswertet.

### 9.2 Die drei ungelösten Datenschutz-Sachverhalte

Drei Sachverhalte laufen heute in Produktion ohne Grundlage in einer Datenschutzerklärung, die es nicht gibt. Keiner davon ist ein Skandal, alle drei sind in wenigen Stunden versorgt — aber sie müssen einzeln benannt werden, weil sie unterschiedliche Rechtsgrundlagen und unterschiedliche technische Fixes haben.

**(a) Vercel Analytics läuft bereits, Speed Insights soll dazukommen.** `app/layout.tsx:2` importiert `{ Analytics } from "@vercel/analytics/next"`, `:75` rendert `<Analytics />` unbedingt in jedem Request — außerhalb des `LanguageProvider`, ohne jede Bedingung, auf allen Routen. Abschnitt 4 legt `@vercel/speed-insights` obendrauf. Zu erledigen: den Auftragsverarbeitungsvertrag im Vercel-Dashboard aktiv akzeptieren (er gilt nicht automatisch mit dem Abschluss des Accounts), den Übermittlungsweg in die USA sowie die Transfergarantie prüfen und beides in der Datenschutzerklärung benennen, dazu Zweck („aggregierte Reichweiten- und Performancemessung") und Speicherdauer. Zur Rechtsgrundlage: Vercel beschreibt beide Produkte nach Anbieterangabe als cookielos ohne personenbezogene Wiedererkennung — das trägt eine Argumentation über Art. 6 Abs. 1 lit. f, ist aber nicht dasselbe wie „keine Zustimmung nötig", weil § 25 TDDDG jeden Zugriff auf Endeinrichtungen erfasst und die Einordnung des Client-seitigen Skripts strittig sein kann. Das ist der eine Punkt aus 9.2, für den eine anwaltliche Einschätzung sinnvoll ist. Falls sie negativ ausfällt, muss `<Analytics />` an eine Einwilligung gekoppelt werden — was den ganzen Vorteil aus dem letzten Absatz dieses Kapitels kostet.

**(b) Die Wikimedia-Hotlinks sind ein Drittlandtransfer, kein Performanceproblem.** `unoptimized={…src.startsWith("http")}` steht in `detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`, `los-roques-guide.tsx:97,113`, `medanos-guide.tsx:288,307`, `pico-bolivar-guide.tsx:183,212`, `island-carousel.tsx:53`, `localized-detail-page.tsx:156`. Das schaltet den Vercel-Bildoptimizer ab, und der Browser jedes EU-Besuchers kontaktiert dann **direkt** `commons.wikimedia.org` — überträgt also IP-Adresse, User-Agent und Referrer an einen US-Server, ohne Grundlage und ohne Hinweis. Das ist strukturell dieselbe Konstellation wie die eingebundenen Google Fonts, deren Bewertung durch das LG München I (20.01.2022, Az. 3 O 17493/20, 100 € Schadensersatz) die bekannten Abmahnwellen ausgelöst hat. Die Analogie ist nicht deckungsgleich — die Wikimedia Foundation ist kein Werbekonzern, und es handelt sich um eine erstinstanzliche Einzelfallentscheidung ohne höchstrichterliche Klärung — der Mechanismus ist aber identisch, und die Abmahnpraxis fragt nicht nach dem Empfänger.

Der Fix ist bereits im Plan, nur mit falscher Begründung: Abschnitt 4 streicht `unoptimized` aus LCP-Gründen. Sobald es weg ist, holt der Optimizer das Bild serverseitig und liefert es von `mrsvenezuela.com` aus; der Browser des Besuchers spricht nie mit Wikimedia. Ein technischer Eingriff, zwei erledigte Probleme — **deshalb hat er Vorrang vor allem anderen in Abschnitt 4.** Die `remotePatterns` in `next.config.ts:5-15` bleiben dabei stehen und sind unproblematisch, weil sie nur den serverseitigen Abruf erlauben. Endgültig verschwindet der Transfer erst, wenn die sechs Hotlinks in `lib/content.ts` durch lokale Dateien ersetzt sind (9.3 und Abschnitt 4) — danach kann `remotePatterns` entfallen.

**(c) Speicherzugriff: einmal localStorage, einmal ein Cookie, das niemand liest.** `components/i18n/language-provider.tsx:18` liest `localStorage["descubre-venezuela-language"]` beim Mount, `:26` schreibt denselben Schlüssel, `:27` setzt zusätzlich das Cookie `mrs-venezuela-language` mit `max-age=31536000` (zwölf Monate). Die Namen weichen voneinander ab, und eine Suche über das gesamte Repo findet **keine einzige lesende Stelle** für dieses Cookie — es wird gesetzt und nie ausgewertet.

Einordnung: das Speichern der vom Nutzer selbst gewählten Sprache ist eine nutzerinitiierte Einstellung und nach § 25 Abs. 2 Nr. 2 TDDDG als „unbedingt erforderlich" für den ausdrücklich gewünschten Dienst vertretbar. Der Lesezugriff in `:18` erfolgt allerdings vor jeder Nutzerhandlung bei jedem Seitenaufruf; er fällt ebenfalls unter § 25, bleibt aber vom selben Zweck gedeckt. Vertretbar heißt nicht undokumentiert: In die Datenschutzerklärung gehört eine Tabelle mit Name, Typ, Zweck, Dauer je Eintrag.

Konkret und heute erledigbar: **Zeile 27 löschen.** Ein Cookie, das nie gelesen wird, ist ein Verstoß gegen die Datenminimierung (Art. 5 Abs. 1 lit. c) ohne jeden Gegenwert, und es halbiert die Tabelle in der Datenschutzerklärung. Sollte Abschnitt 6 später serverseitige Sprachweichen bringen, kommt die Sprache aus der URL (`/en/...`), nicht aus einem Cookie — das Cookie wird also auch dann nicht gebraucht.

**Der Vorteil, den niemand im Plan bemerkt hat, und die Regel, die ihn schützt.** Die Schriften sind über `next/font/google` eingebunden (`app/layout.tsx:13-22`) und werden damit zur Build-Zeit selbst gehostet — kein Google-Request beim Besucher. Es gibt kein Tracking-Cookie, keine Werbeskripte, keine eingebetteten Fremdinhalte. **Diese Site braucht heute keinen Consent-Banner.** Das ist ein handfester Vorteil bei LCP, INP und CLS, und es ist ein Discover-Vorteil, weil eine Overlay-Wand über dem Viewport genau das Gegenteil der geforderten Nutzererfahrung ist.

Daraus wird eine harte Regel, die in `CLAUDE.md` gehört:

> Kein Drittinhalt, der beim Besucher lädt, ohne vorherige Entscheidung: YouTube-Embeds (Plan 8.4), Affiliate- und Buchungs-Widgets, Kartendienste, Werbenetzwerke, Kommentar- oder Newsletter-Skripte. Jedes dieser Elemente erzwingt eine Einwilligungslösung und damit ein zusätzliches, früh geladenes Skript plus Overlay — und kostet damit genau die Werte, die Abschnitt 4 verbessert.

Der Plan schlägt mehrere dieser Dinge vor, ohne die Folge zu nennen. Wenn ein YouTube-Einbau kommt, dann ausschließlich als Klick-zu-Laden-Fassade (statisches Vorschaubild, Iframe erst nach Klick) — das ist die einzige Variante, die den Zustand nicht kippt.

### 9.3 Bildlizenzen — das teuerste offene Risiko

Der Entwurf behandelt Bildrechte in Abschnitt 3.6 als Schema-Thema (`ImageObject` mit `license`) und in der Roadmap als P1-Zeile „`credits` in 16 fehlenden Guides füllen". Beides ist richtig und beides greift zu kurz, weil es nur den Teil des Bestands erfasst, für den es überhaupt ein Datenfeld gibt.

**Die verifizierte Lage, drei Ebenen:**

1. **Guides mit Nachweisen: 6 von 23.** `grep -c "license:" lib/states/data/*.ts` liefert Einträge nur für `merida` (4), `falcon` (3), `zulia` (3), `carabobo` (1), `la-guaira` (1), `sucre` (1) — zusammen 13 Nachweise. Die anderen 17 Guides haben kein `credits`-Array, zeigen aber Fotos.
2. **Sechs Commons-Hotlinks ganz ohne Feld.** `lib/content.ts:46,55,58,60,61` rufen `commonsFile(...)` auf (Los Roques, Puerto Cabello, Playa Medina, Chichiriviche, Macuto), `:63-64` enthält eine von Hand geschriebene Commons-URL (Pico Bolívar). Für keinen dieser sechs existiert ein Ort, an dem Autor und Lizenz stehen könnten: `DiscoverItem` (`lib/content.ts:26-37`) kennt genau `image: string`. Diese Bilder erscheinen in `heroSlides` (`:81`) und `searchIndex` (`:382`) — also auf der Startseite und in den Übersichten, nicht in einer Randposition.
3. **83 lokale Dateien in `public/images` ohne jede Herkunftsdokumentation.** Davon sind 57 über `.vercelignore` vom Deployment ausgeschlossen, rund 26 werden tatsächlich ausgeliefert. Die Namensmuster der ausgeschlossenen Dateien — `cayo-de-agua-candidate-1..3`, `isla-la-tortuga-candidate-1..9`, `mochima-option-1..6`, `patanemo-viajero-1..2` — sind das Muster einer Web-Recherche mit anschließender Auswahl. Nicht ausgeliefert heißt nicht risikofrei: die Dateien liegen weiterhin im Git-Repository.

**Dazu ein drittes, inkompatibles Datenmodell.** `medanos-guide.tsx:57-68` und `pico-bolivar-guide.tsx:40-44` führen jeweils ein eigenes lokales `credits`-Array mit dem Feld `file` (Commons-Dateiname), während `StateCredit` (`lib/states/types.ts:73`) `href` verwendet. Drei Formen für dieselbe Information, keine davon vollständig.

**Was am bestehenden Nachweis konkret fehlt.** `state-editorial-guide.tsx:503-521` rendert die vorhandenen Credits in einem eingeklappten `<details>` und gibt die Lizenz als reinen Text aus („CC BY-SA 3.0"), ohne Link. CC BY und CC BY-SA verlangen vier Elemente: Titel des Werks, Urheber, Link zur Lizenz, Link zur Quelle — dazu bei Bearbeitungen einen Änderungshinweis. Der fehlende **Lizenzlink** ist der eindeutige Defekt; das eingeklappte `<details>` ist verteidigbar, eine Bildunterschrift am Bild ist der sichere Weg und liefert nebenbei Kontext für die Bildersuche und für das Chunking der KI-Systeme (Abschnitt 7).

**Maßnahme 1 — eine einzige Quelle.**

```ts
// lib/image-credits.ts
export type ImageCredit = {
  /** Exakt der `src`-Wert, wie er im Code steht (lokaler Pfad oder Remote-URL). */
  src: string;
  /** "Wikimedia Commons", "Unsplash", "Eigene Aufnahme", "Lizenz erworben: <Anbieter>" */
  source: string;
  author: string;
  /** Anzeigename, z. B. "CC BY-SA 4.0" oder "Todos los derechos reservados". */
  license: string;
  /** Deed-URL; leer nur bei eigenen Aufnahmen. */
  licenseUrl: string;
  /** Dateibeschreibungsseite bzw. Beleg-URL. */
  filePage: string;
  /** Pflicht bei CC BY-SA, wenn bearbeitet: "Recorte y ajuste de color". */
  changes?: string;
  /** Werktitel laut Quelle, falls abweichend vom `alt`. */
  title?: string;
};

export const imageCredits: Record<string, ImageCredit> = {
  "https://commons.wikimedia.org/wiki/Special:FilePath/Village%20Gran%20Roque.jpg?width=1800": {
    src: "https://commons.wikimedia.org/wiki/Special:FilePath/Village%20Gran%20Roque.jpg?width=1800",
    source: "Wikimedia Commons",
    author: "…",
    license: "…",
    licenseUrl: "…",
    filePage: "https://commons.wikimedia.org/wiki/File:Village_Gran_Roque.jpg",
  },
};

export function creditFor(src: string): ImageCredit | undefined {
  return imageCredits[src];
}
```

`StateCredit` wird nicht erweitert, sondern abgelöst: die bestehenden 13 Einträge wandern nach `lib/image-credits.ts`, `guide.credits` verschwindet aus `StateGuideData`, und die Guides referenzieren nur noch `photo.src`. Damit speist dieselbe Tabelle die sichtbare Attribution **und** das `ImageObject` aus Abschnitt 3.6 — die dort geforderte Zuordnung `license`-String → Deed-URL ist dann kein Mapping mehr, sondern ein Feld.

**Maßnahme 2 — ein Build-Gate, das nicht verhandelbar ist.** Ohne Gate wird das Verzeichnis in drei Monaten wieder lückenhaft sein; das ist derselbe Mechanismus, der den `/playas`-Canonical erzeugt hat.

```ts
// scripts/check-image-credits.ts
import { heroSlides, searchIndex } from "@/lib/content";
import { getStateGuide, stateGuideSlugs } from "@/lib/states";
import { imageCredits } from "@/lib/image-credits";

const used = new Set<string>();
const push = (src?: string | null) => { if (src) used.add(src); };

for (const slide of heroSlides) push((slide as { image?: string }).image);
for (const item of searchIndex) push(item.image);

for (const slug of stateGuideSlugs) {
  const guide = getStateGuide(slug);
  if (!guide) continue;
  // Rekursiv jedes `photo.src` im Guide-Objekt einsammeln.
  const walk = (node: unknown): void => {
    if (!node || typeof node !== "object") return;
    if (Array.isArray(node)) { node.forEach(walk); return; }
    const rec = node as Record<string, unknown>;
    if (typeof rec.src === "string" && typeof rec.alt === "string") push(rec.src);
    Object.values(rec).forEach(walk);
  };
  walk(guide);
}

const missing = [...used].filter((src) => !imageCredits[src]).sort();

if (missing.length > 0) {
  console.error(`Fehlender Bildnachweis für ${missing.length} Datei(en):`);
  for (const src of missing) console.error(`  - ${src}`);
  console.error("Eintrag in lib/image-credits.ts ergänzen oder Bild entfernen.");
  process.exit(1);
}

console.log(`Bildnachweise vollständig: ${used.size} referenzierte Bilder.`);
```

```jsonc
// package.json — tsx löst die "@/*"-Pfade aus tsconfig.json auf
"scripts": {
  "check:credits": "tsx scripts/check-image-credits.ts",
  "prebuild": "npm run check:credits"
}
```

`npm i -D tsx`. Das `prebuild`-Skript läuft auch auf Vercel vor `next build`; ein Bild ohne Eintrag verhindert das Deployment. Der Check gehört zusätzlich in die CI aus dem Prozess-Abschnitt, damit er im Pull Request scheitert und nicht erst beim Deploy. Ergänzend eine Lint-Regel in derselben CI: kein `<Image>` mit literaler `src`, die nicht über `imageCredits` läuft.

**Maßnahme 3 — sichtbare Attribution als Komponente.** Eine Stelle, an der die Ausgabeform definiert ist, statt sechs Guides mit eigenem Markup:

```tsx
// components/content/image-credit.tsx
import { creditFor } from "@/lib/image-credits";

export function ImageCredit({ src, className }: { src: string; className?: string }) {
  const credit = creditFor(src);
  if (!credit) return null;

  return (
    <figcaption className={className}>
      <a href={credit.filePage} target="_blank" rel="noreferrer">{credit.title ?? credit.source}</a>
      {" — "}{credit.author}{", "}
      {credit.licenseUrl
        ? <a href={credit.licenseUrl} target="_blank" rel="license noreferrer">{credit.license}</a>
        : credit.license}
      {credit.changes ? ` · ${credit.changes}` : null}
    </figcaption>
  );
}
```

Das `<Image>` wandert dabei in ein `<figure>`; `place-gallery.tsx:163-168` und `state-locator.tsx:20-22` nutzen bereits `<figure>/<figcaption>` und zeigen, dass die Form im Layout funktioniert. `rel="license"` ist das korrekte Linkverhältnis und macht die Angabe maschinenlesbar.

**Maßnahme 4 — Sammelseite `/creditos`.** Eine Server-Route, die `imageCredits` als Liste rendert, nach Quelle gruppiert, mit eigenem `canonical`, im Footer neben `/aviso-legal` verlinkt. Sie ersetzt die Attribution am Bild nicht, sie ergänzt sie — und sie ist die Seite, auf die man verweist, wenn jemand fragt.

**Maßnahme 5 — die unangenehme.** Für jede der rund 26 ausgelieferten lokalen Dateien muss eine Herkunft belegbar sein. Wo sie das nicht ist, wird das Bild ersetzt, nicht dokumentiert-geschätzt. Commons bietet für jedes Motiv dieses Plans Material unter CC BY / CC BY-SA; die Projektregel „nie dieselbe Foto zweimal" gilt dabei weiter. Reihenfolge: erst die Startseiten- und Hero-Bilder (höchste Sichtbarkeit, höchstes Auffindungsrisiko über Rückwärtssuche), dann die Detailseiten. Bilder ohne belegbare Herkunft weiter auszuliefern ist die einzige Position in diesem gesamten Plan, die mit jedem Tag teurer wird.

### 9.4 Marke und Domain

Abschnitt 8.6 entscheidet, die gesamte Entität auf „Mrs Venezuela" zu ziehen, und nennt als Risiko nur die SERP-Kollision mit dem Schönheitswettbewerb. Das ist die kleinere Hälfte. Die größere: „Miss Venezuela" ist als Kennzeichen einer bekannten Organisation im Markt etabliert, und „Mrs." ist im Pageant-Umfeld ein gängiges Kennzeichnungselement. Ob daraus eingetragene Marken in den hier relevanten Klassen bestehen, ist **nicht geprüft** — genau das ist der Punkt. Eine kommerziell auftretende Site unter `mrsvenezuela.com` kann eine Berechtigungsanfrage, eine UDRP-Beschwerde oder eine Abmahnung auslösen, und der Schaden wächst proportional zur Vollständigkeit der Konsolidierung: Backlinks, Marken-Queries, `sameAs`-Verweise und Social-Handles auf einen Namen zu ziehen, den man später aufgeben muss, ist der teuerste denkbare Verlauf.

**Vor Roadmap-Punkt 16, nicht danach:** Recherche in TMview, DPMAregister, dem EUIPO-Register und USPTO TESS auf „Mrs Venezuela", „Miss Venezuela" und „Venezuela" als Wortbestandteil, in den Nizza-Klassen 39 (Reisen), 41 (Unterhaltung, auch Schönheitswettbewerbe) und 16 (Druckerzeugnisse). Ergebnis dokumentieren — auch ein negatives Ergebnis ist ein Ergebnis und rechtfertigt die Investition in die Marke. Bei Treffern: bewusste Entscheidung mit dokumentierter Fallback-Position statt stillschweigendem Weitermachen.

**Die Fallback-Domain jetzt sichern, nicht erst im Ernstfall.** Bemerkenswert und im Plan bisher unbenannt: die Site führt heute ohnehin zwei Namen. `app/layout.tsx:27-31` setzt als Default-Title und `og:siteName` „Descubre Venezuela", während `lib/institutional-i18n.ts` durchgängig „Mrs Venezuela" verwendet. Die Entität ist also bereits gespalten — Abschnitt 8.6 löst das auf, und dieselbe Entscheidung sollte die Zweitdomain mitnehmen. Eine Domain kostet im Jahr weniger als eine Stunde anwaltlicher Beratung.

**Unabhängig vom Markenergebnis, einmalig zu erledigen:** Registrar-Lock (`clientTransferProhibited`) aktivieren, Auto-Renew aktivieren und die Zahlungsmethode auf Gültigkeit prüfen, 2FA auf dem Registrar-Konto, Registrant = die Betreiberin persönlich (nicht eine Agentur, nicht ein Dienstleisterkonto), Ablaufdatum als wiederkehrender Kalendereintrag, und die WHOIS-Kontaktadresse muss tatsächlich erreichbar sein — eine nicht bestätigte ICANN-Verifizierungsmail führt zur Suspendierung der Domain, unabhängig von allem anderen. Eine verlorene Domain macht jede Zeile dieses Plans wertlos; das ist die einzige Position, bei der es kein Zurück gibt.

### 9.5 Zugänge und Kontinuität

**Die offizielle Adresse ist heute eine Gmail.** `components/institutional/contact-page-content.tsx:6` definiert `const email = "infomrsvenezuela@gmail.com"`, `components/sections/home-footer.tsx:70,74` verlinkt und zeigt sie. Der Entwurf schreibt sie zusätzlich in `Organization.email` (Abschnitt 3). Das ist an drei Stellen falsch: als Trust-Signal (eine Organisation ohne Adresse auf der eigenen Domain), im Impressum (dort steht die Adresse, unter der die Betreiberin geschäftlich erreichbar ist) und im Entitätsgraphen (`Organization.email` sollte zur Domain gehören, sonst ist der Knoten selbst schwach).

**`info@mrsvenezuela.com` einrichten und in einem Commit ersetzen** — beide Fundstellen plus der geplante Schema-Knoten. Danach die Mail-Authentifizierung setzen, sonst ist die Domain für Dritte spoofbar:

```dns
; SPF — nur der tatsächlich genutzte Versanddienst, keine ~all-Sammelbecken
mrsvenezuela.com.            TXT  "v=spf1 include:<versanddienst> -all"

; DKIM — Selector und Schlüssel liefert der Mailanbieter
<selector>._domainkey        TXT  "v=DKIM1; k=rsa; p=<public-key>"

; DMARC — mit p=none starten, Reports lesen, dann verschärfen
_dmarc                       TXT  "v=DMARC1; p=none; rua=mailto:dmarc@mrsvenezuela.com; fo=1; adkim=s; aspf=s"
```

Reihenfolge zwingend: SPF und DKIM zuerst verifizieren, DMARC einige Wochen auf `p=none` laufen lassen und die Aggregate-Reports auswerten, dann `p=quarantine`, dann `p=reject`. Wer direkt auf `p=reject` geht, blockiert im Zweifel die eigene Post — etwa Formularmails aus der Vercel-Infrastruktur, falls `/contacto` später ein Backend bekommt.

**Der Single Point of Failure bei den Zugängen ist der zweite Teil.** Search Console, Bing Webmaster Tools, Vercel, GitHub, Registrar, Ahrefs, IndexNow-Key: nirgends ist dokumentiert oder abgesichert, wem sie gehören. Der Plan warnt korrekt davor, den GSC-TXT-Record je zu löschen, übersieht aber, dass ein privates Einzelkonto die gesamte Search-Historie an sich bindet — und die ist nicht wiederherstellbar. Ein verlorener Zugang zur Property bedeutet: neue Verifizierung, aber keine Rückgabe der historischen Daten.

Konkret: auf jeder Property einen **zweiten Owner** eintragen (in der GSC einen zweiten verifizierten Inhaber über eine andere Verifizierungsmethode als den TXT-Record, damit ein einzelner DNS-Fehler nicht beide entwertet), 2FA überall mit offline gesicherten Backup-Codes, alle Zugänge in einem Passwortmanager, und ein einseitiges Dokument „welcher Dienst, welches Konto, welche Wiederherstellungsmethode". Das ist eine Stunde Arbeit und der Unterschied zwischen einem Ausfall und einem Totalverlust.

### 9.6 Redaktions-, Korrektur- und KI-Kennzeichnungsrichtlinie

Im Entwurf ist die KI-Offenlegung ein Absatz auf `/sobre-nosotros`. Für eine in Deutschland ansässige Betreiberin, die redaktionelle Texte veröffentlicht und laut Abschnitt 6 mit maschineller Übersetzung skalieren will, ist das zu wenig — nicht weil ein Absatz rechtlich zwingend zu wenig wäre, sondern weil eine eigene, verlinkte Seite dieselbe Arbeit macht und dreifach zahlt: als Trust-Signal für Leser, als Beleg für die Quality Rater, und als Datenquelle für zwei Schema-Properties, die im Entwurf schlicht fehlen.

**Eine Route, `/politica-editorial`,** mit sechs Blöcken:

1. **Wer schreibt.** Namentliche Autorschaft mit Bezug zum Thema — die Betreiberin ist Venezolanerin, das ist die belegbare Erfahrungskomponente und gehört benannt, nicht angedeutet.
2. **Welche Quellen.** Welche Kategorien von Quellen verwendet werden (amtliche Stellen, Institutionen vor Ort, eigene Reisen, Bildarchive) und welche nicht (unbelegte Foren- und Social-Beiträge als alleinige Grundlage).
3. **Wie geprüft wird.** Zwei-Quellen-Regel für Zahlen; keine Zahl ohne Quelle und Datum; Preise nur mit Währung und Erhebungsdatum (siehe 9.7).
4. **Wie korrigiert wird.** Korrekturhinweis mit Datum am Fuß des betroffenen Artikels, keine stille Korrektur bei inhaltlichen Fehlern; eine Kontaktadresse für Fehlermeldungen; eine Zusage zur Bearbeitungsfrist, die realistisch ist.
5. **Anteil der KI-Unterstützung.** Wofür KI eingesetzt wird (Recherche, Strukturierung, Übersetzungsentwurf) und wofür nicht (Faktenbehauptungen ohne menschliche Prüfung, erfundene Erfahrungsberichte). Dazu die harte Regel aus D3, hier öffentlich nachprüfbar formuliert: **keine `/en`-URL geht live ohne muttersprachliche Durchsicht.** Unrevidierte maschinelle Übersetzung ist ein ausdrückliches Beispiel für „scaled content abuse" — die Regel auf der eigenen Richtlinienseite zu veröffentlichen ist die billigste Selbstbindung, die es gibt.
6. **Wer verantwortet.** Namentlich, mit Verweis auf `/aviso-legal`.

Wie weit die Transparenzpflichten des AI Act auf redaktionelle Texte durchschlagen, ist eine Frage für die anwaltliche Prüfung; die freiwillige Offenlegung ist hier der billigere Weg und deckt den Fall unabhängig von der Antwort.

**Der Schema-Nebeneffekt.** Beide Properties fehlen im Entwurf zu Abschnitt 3 und sind mit dieser Seite ohne Zusatzaufwand zu haben:

```ts
{
  "@type": "Organization",
  "@id": "https://mrsvenezuela.com/#organization",
  "name": "Mrs Venezuela",
  "email": "info@mrsvenezuela.com",
  "publishingPrinciples": "https://mrsvenezuela.com/politica-editorial",
  "correctionsPolicy": "https://mrsvenezuela.com/politica-editorial#correcciones"
}
```

Beide Properties erzeugen kein Rich Result und sollen es nicht — sie sind Entitätssignale, und sie zeigen auf eine Seite, die es tatsächlich gibt. Voraussetzung: der Anker `#correcciones` existiert im Markup.

Verlinkt wird die Seite im Footer und im Autorenbereich jedes Guides. Ein Link in der Fußzeile allein reicht als Trust-Signal, ein Link direkt neben dem Autorennamen ist wirksamer.

### 9.7 Reiseinformationen als YMYL-Thema

Der Entwurf streift YMYL nur bei der geplanten Seite `/venezuela/es-seguro-viajar`. Tatsächlich betrifft es den Bestand: alle 23 Guides enthalten „cómo llegar", Transport- und Grenzangaben zu einem Land mit volatiler Lage. Die redaktionelle Umsetzung — `verifiedAt` und `volatility` je Faktenblock, Aktualisierungspflicht nur für die volatilen — steht in Abschnitt 5. Hier geht es um die drei Punkte, die davon rechtlich übrig bleiben.

**Erstens: ein Haftungsausschluss, der die Zusage begrenzt, ohne falsche Angaben zu heilen.** Der Text gehört auf `/aviso-legal` und, verkürzt, in den Praxis-Block jeder Guide: Reiseinformationen werden nach bestem Wissen recherchiert, ohne Gewähr für Richtigkeit, Vollständigkeit und Aktualität; die Site ist keine Reisevermittlung und übernimmt keine Beratungsfunktion; maßgeblich sind die offiziellen Hinweise des Herkunftslandes. Wichtig und oft missverstanden: ein solcher Hinweis begrenzt das Leistungsversprechen, er ersetzt keine Sorgfalt. Eine als Tatsache formulierte falsche Angabe bleibt eine falsche Angabe — die Konsequenz ist redaktionell, nicht juristisch abzufangen.

**Zweitens: Verweis auf die zuständigen Stellen statt eigener Lagebewertung.** Sicherheitslage, Einreisebestimmungen und Gesundheitshinweise werden nicht in eigenen Worten bewertet, sondern verlinkt — Auswärtiges Amt (Reise- und Sicherheitshinweise), U.S. Department of State (Travel Advisories) und die venezolanische Cancillería für die Einreiseseite. Diese Verweise sind zugleich der stärkste zitierfähige Autoritätsanker, den diese Seiten haben können, und decken sich mit dem, was die einzige peer-reviewte GEO-Studie als wirksam misst (Abschnitt 7). Externe Links dorthin bleiben `follow`.

**Drittens: keine undatierte Preis- oder Sicherheitsangabe.** Bei venezolanischer Inflation ist jede undatierte Preisangabe binnen Wochen falsch, und eine falsche Preisangabe auf einer Reiseseite ist genau der Fehlertyp, den ein Quality Rater als Beleg für mangelnde Sorgfalt nimmt. Regel: jede Zahl mit Währung (VES oder USD, ausgeschrieben) und Erhebungsdatum, sonst gar nicht. Ein sichtbarer Block am Kopf jeder Praxis-Sektion — „Datos verificados el … · Consulta siempre las recomendaciones oficiales de tu país" — erledigt Datierung und Quellenverweis in einer Zeile. Ohne diese Regel sind die geplanten Seiten `/venezuela/dinero-y-pagos` und `/presupuesto` nicht verantwortbar veröffentlichbar; sie erst nach der Einführung von `verifiedAt` schreiben, nicht davor.

### 9.8 Werbekennzeichnung und Kooperationen

Die Site wirbt heute aktiv um Kooperationen (`lib/institutional-i18n.ts:11`, gerendert auf `/contacto`), hat aber keine Regel für den ersten bezahlten Link. Die Regel muss vorher stehen, weil sie im Moment des ersten Angebots nicht mehr neutral getroffen wird.

**Kennzeichnung.** Der kommerzielle Zweck einer Veröffentlichung muss erkennbar sein, wenn er sich nicht unmittelbar aus den Umständen ergibt (§ 5a Abs. 4 UWG); dazu kommen je nach Einordnung die Anforderungen an kommerzielle Kommunikation nach § 6 DDG und an Werbung in Telemedien nach § 22 MStV. Praktisch heißt das: Kennzeichnung **im Text**, am Anfang des betroffenen Abschnitts oder Beitrags, in der Sprache der Seite („Publicidad", „Contenido patrocinado", „Enlace de afiliado"), gut lesbar — nicht im Footer, nicht als graues Kleingedrucktes, nicht als Hashtag am Ende. Ein kostenloser Aufenthalt, eine bezahlte Reise oder ein gestelltes Produkt sind geldwerte Vorteile und unterliegen derselben Regel wie Geld.

**Auszeichnung der Links.** Bezahlte oder durch geldwerte Vorteile veranlasste Links bekommen `rel="sponsored"`, Links ohne Prüfung oder aus Nutzerbeiträgen `rel="nofollow"` bzw. `rel="ugc"`. Damit man es nicht vergessen kann, gehört das in eine Komponente statt in die Disziplin:

```tsx
// components/content/paid-link.tsx
export function PaidLink({
  href, children, kind = "sponsored",
}: { href: string; children: React.ReactNode; kind?: "sponsored" | "nofollow" }) {
  return (
    <a href={href} rel={`${kind} noopener noreferrer`} target="_blank" data-commercial="true">
      {children}
    </a>
  );
}
```

Das `data-commercial`-Attribut ist kein SEO-Signal, sondern ein Prüfhaken: die CI kann darüber verifizieren, dass jede Seite mit mindestens einem solchen Link auch einen sichtbaren Kennzeichnungsblock trägt.

**Was nicht verhandelbar ist.** Keine Vermietung von Unterseiten oder Verzeichnissen an Dritte — das ist „site reputation abuse" und wird von Google als eigener Verstoß behandelt, unabhängig von der Qualität des Inhalts. Redaktionelle Empfehlungen und bezahlte Platzierungen bleiben getrennt: eine Unterkunft, die in einer Kooperation steht, erscheint nicht in einer als redaktionell ausgewiesenen Bestenliste.

**Die Performance-Flanke, die der Plan bisher ignoriert.** Affiliate- und Buchungs-Widgets sind die häufigste Einzelursache für INP- und CLS-Einbrüche: sie laden Drittskripte, schieben Layout nach dem ersten Paint und binden den Main Thread genau in der Phase, in der der Nutzer zum ersten Mal tippt oder scrollt. Dazu kommt die Einwilligungspflicht aus 9.2, also ein weiteres früh geladenes Skript plus Overlay. Ein einziges eingebautes Widget kann die gesamte Arbeit aus Abschnitt 4 aufzehren. Regel: **kein Drittanbieter-Widget ohne gemessenes Vorher/Nachher** auf der real betroffenen Seite (Feld- oder mindestens Lab-Messung von LCP, INP, CLS), und ohne Ausstiegsplan, falls die Messung schlecht ausfällt. Textlinks statt Widgets, wo immer es geht — sie kosten nichts und sind rechtlich einfacher zu kennzeichnen.

Die Kooperationsrichtlinie gehört auf dieselbe Seite wie 9.6 (`/politica-editorial`), als eigener Abschnitt mit Anker. Damit steht sie öffentlich, bevor das erste Angebot kommt, und die Verhandlung beginnt bei den eigenen Bedingungen.

### Reihenfolge

Die Punkte dieses Abschnitts konkurrieren nicht mit der Roadmap, sie unterlaufen sie an drei Stellen:

1. **9.3, Build-Gate und Bildherkunft** — die einzige Position, die mit jedem Deploy teurer wird. Das Gate zuerst, weil es den Bestand einfriert; das Aufarbeiten danach.
2. **9.2 (b), `unoptimized` entfernen** — steht in Abschnitt 4 als P1 aus LCP-Gründen und ist zugleich der Datenschutz-Fix. Auf P0 ziehen; ein Eingriff, zwei Probleme.
3. **9.1, Impressum und Datenschutzerklärung** — ein Nachmittag Arbeit, sobald die ladungsfähige Anschrift geklärt ist. Deshalb die Adressfrage sofort anstoßen, auch wenn der Rest wartet.

Danach 9.5 (eine Stunde, verhindert Totalverlust), 9.4 (Recherche vor Roadmap-Punkt 16), 9.6 und 9.8 gemeinsam als eine Seite, 9.7 zusammen mit `verifiedAt` aus Abschnitt 5.

---

---

## 10. Prozess und Absicherung

Alles bis hierher beschreibt Zustände, die ein einziger Push wieder aufheben kann. Der `/playas`-Canonical aus 2.1 ist kein Denkfehler gewesen, sondern eine Nebenwirkung: Jemand hat eine Seite auf `"use client"` umgestellt, alles sah im Browser richtig aus, und niemand hat danach in das gebaute HTML gesehen. Genau diese Klasse von Fehlern — unsichtbar im Betrieb, sichtbar nur in der Ausgabe — ist der Grund für diesen Abschnitt. Er ist die einzige Maßnahme des Plans, die die anderen dauerhaft hält.

### 10.1 CI und Build-Gate

**Befund.** `package.json` kennt genau vier Scripts: `dev`, `build`, `start`, `lint`. Kein `typecheck`, kein Test, keine Prüfung der Ausgabe. `.github/` existiert nicht — es gibt keinen einzigen automatisierten Schritt zwischen `git push` und Produktion. Jeder Push auf `main` löst den Vercel-Deploy aus, und was dort landet, hat vorher niemand gegen irgendetwas geprüft. Der `/playas`-Bug ist so entstanden und würde so wiederkommen: `.next/server/app/playas.html` trägt heute wörtlich `<link rel="canonical" href="https://mrsvenezuela.com"/>` und den Startseitentitel. Sichtbar wäre das in unter einer Sekunde gewesen — nur hat es nie jemand ausgeführt.

Zwei Dinge sind dabei besser als erwartet und ändern die Reihenfolge der Einführung: `npx tsc --noEmit` und `npm run lint` laufen auf dem heutigen Stand **fehlerfrei durch** (beides lokal ausgeführt, Exit 0). Die CI lässt sich also sofort einführen, ohne dass zuerst ein Altlastenberg abgetragen werden muss. Sie ist von Tag eins an reiner Regressionsschutz. Das Gate aus 10.2 dagegen bricht auf dem heutigen Stand sofort — es gehört deshalb in denselben Commit wie die P0-Korrekturen aus 2 und 3, nicht davor.

Das vorhandene `lint`-Script ruft `eslint` direkt auf und ist damit bereits die zukunftsfeste Form: `next lint` ist in 15.5 deprecated und verschwindet in Next 16 (`node_modules/next/dist/cli/next-lint.js:50` gibt genau diese Warnung aus). Nichts daran ist zu ändern, nur zu ergänzen:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "postbuild": "node scripts/seo-check.mjs",
    "start": "next start",
    "lint": "eslint",
    "typecheck": "tsc --noEmit",
    "seo:check": "node scripts/seo-check.mjs"
  }
}
```

`postbuild` ist der entscheidende Haken: npm führt es nach **jedem** `npm run build` aus — in der CI, lokal und auf Vercel, sofern dort das `build`-Script des Projekts läuft (Standardfall; im Zweifel unter *Settings → General → Build Command* nachsehen und auf `npm run build` setzen). Ein Verstoß bricht damit auch den Vercel-Build, und ein gebrochener Build wird nicht ausgeliefert; die letzte funktionierende Produktions-Version bleibt online. Das schließt die Lücke, die eine reine GitHub-Action offenlässt: Das Projekt ist lokal mit Vercel verknüpft (`.vercel/` existiert), ein `vercel --prod` vom Arbeitsrechner geht an GitHub vorbei. Wer lokal bewusst mit bekannten Verstößen bauen will, ruft `npx next build` direkt auf — das umgeht die npm-Lifecycle-Hooks, aber eben nur lokal und sichtbar.

`.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

permissions:
  contents: read

jobs:
  verify:
    runs-on: ubuntu-latest
    timeout-minutes: 15
    env:
      NEXT_TELEMETRY_DISABLED: "1"
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version-file: .nvmrc
          cache: npm

      - name: Abhängigkeiten exakt aus dem Lockfile
        run: npm ci

      - name: Typen
        run: npx tsc --noEmit

      - name: Lint
        run: npm run lint

      - name: Build und SEO-Invarianten
        run: npm run build
```

Zur Reihenfolge, weil sie nicht willkürlich ist:

- **`npm ci` statt `npm install`.** Installiert exakt den Stand aus `package-lock.json` (vorhanden) und bricht ab, wenn Lockfile und `package.json` auseinanderlaufen. Ein Build, der sich seine Versionen selbst aussucht, ist kein Nachweis.
- **`tsc` und `eslint` vor `next build`.** `next build` prüft Typen und Lint zwar selbst, aber erstens erst nach dem teuersten Teil, und zweitens lassen sich beide Prüfungen mit je einer Zeile in `next.config.ts` abschalten (`typescript.ignoreBuildErrors`, `eslint.ignoreDuringBuilds`). Die getrennten Schritte hängen nicht an dieser Konfiguration und melden in Sekunden statt nach dem vollen Build.
- **`next build` bleibt trotzdem in der Kette.** `tsconfig.json` bindet `.next/types/**/*.ts` ein — diese generierten Routen-Typen existieren im frischen CI-Checkout noch gar nicht. Was `tsc` dort prüft, ist der handgeschriebene Code; die Routen-Signaturen prüft ausschließlich der Build selbst.
- **`concurrency` mit `cancel-in-progress`.** Bei mehreren Pushes hintereinander läuft nur der neueste Stand — spart Minuten und verhindert, dass ein alter grüner Lauf einen neuen roten überholt.

Zwei Workflows teilen sich damit dasselbe Verzeichnis: `ci.yml` und das `indexnow.yml` aus 2.8. Sie bleiben getrennt — IndexNow meldet erst nach dem Deploy und darf nie laufen, wenn der Build nicht durchgekommen ist.

### 10.2 `scripts/seo-check.mjs` — harte Invarianten

Das Gate prüft **die gebaute Ausgabe**, nicht den Quelltext. Der Unterschied ist nicht akademisch, sondern in diesem Repo in beide Richtungen belegt:

- Im Quelltext stehen zwei `<h1>` in `components/content/state-editorial-guide.tsx:224` und `:236`. Ein Grep meldet einen Fehler, den es nicht gibt: Es sind die beiden Zweige derselben Ternär-Bedingung, und in der Ausgabe hat jede der 23 Guide-Seiten genau ein `<h1>` (über alle 56 gebauten HTML-Dateien gezählt: null Verstöße).
- Umgekehrt sieht `app/playas/page.tsx` im Quelltext unauffällig aus — die Datei enthält keinen Metadata-Export, und genau deshalb existiert der Fehler nur im Ergebnis.

Über beides entscheidet allein `.next/server/app/**/*.html`. Der Prüflauf über den heutigen Build (25.08.2026, 56 HTML-Dateien, 0,8 s Laufzeit) liefert **76 Verstöße**:

| Invariante | Warum sie hart ist | Befund heute |
|---|---|---|
| Genau ein `<link rel="canonical">` je indexierbarer Seite | Zwei Canonicals heben sich gegenseitig auf; keiner überlässt die Entscheidung Google | 0 |
| Canonical = eigener Pfad, nie `/` außer auf `/` | Der Bug, der `/playas` und mit ihm 14 Strandseiten wegfaltet | 2 (`/playas`, dazu `/_not-found`, das den Root-Canonical mit erbt) |
| `og:url` = Canonical | Zwei widersprüchliche Adressangaben im selben Dokument | 2 (`/contacto`, `/sobre-nosotros` senden `og:url` = Startseite) |
| Genau ein `<h1>` | Dokumentstruktur; zugleich der Beleg, dass Grep-Befunde hier nichts entscheiden | 0 |
| `<title>` ≤ 60 Zeichen | Alles darüber wird in der SERP abgeschnitten | 28 von 55 (81–90 Zeichen bei den Estado-Guides) |
| JSON-LD parst | Ein Syntaxfehler entwertet den gesamten Block lautlos | 0 |
| Kein `@type` außerhalb der geprüften Liste | `TravelGuide`, `NationalPark`, `Food` existieren nicht (schema.org 404) | 1 (`TravelGuide` auf `/`) |
| Jede Bild-URL im JSON-LD absolut | Relative URLs sind im JSON-LD ungültig | 42 |
| Jedes Bild hat einen Eintrag in `lib/image-credits.ts` | Attributionspflicht und Herkunftsnachweis (3.7, Abschnitt 9) | Register existiert noch nicht |
| Sitemap und gebaute Routen decken sich | Verhindert, dass das Gate unbemerkt Routen verliert oder tote URLs meldet | 0 (55 `<loc>`, 55 indexierbare Routen) |

Die letzte Zeile ist der Selbstschutz des Gates: Wird eine Route dynamisch, verschwindet ihre HTML-Datei aus `.next/server/app/` — und alle Invarianten würden für sie stillschweigend aufhören zu gelten. Der Abgleich gegen `sitemap.xml.body` erzwingt, dass dieser Fall auffällt.

```js
// scripts/seo-check.mjs — Build-Gate über die prerenderte Ausgabe.
// Keine Abhängigkeiten außer node:fs / node:path. Exit 1 bricht den Build.
import fs from "node:fs";
import path from "node:path";

const ORIGIN = "https://mrsvenezuela.com";
const APP_DIR = path.join(".next", "server", "app");
const SITEMAP_BODY = path.join(APP_DIR, "sitemap.xml.body");
const CREDITS_FILE = path.join("lib", "image-credits.ts");
const REDIRECTS_FILE = path.join("lib", "redirects.ts");
const COMMONS_PREFIX = "https://commons.wikimedia.org/wiki/Special:FilePath/";
const TITLE_MAX = 60;

/** Routen ohne Sitemap-Eintrag: müssen noindex liefern, brauchen keinen Titel-Check. */
const NOINDEX_ROUTES = new Set(["/_not-found"]);
/** Bewusste Fremd-Canonicals, Route → Zielpfad. Leer: der Plan löst Doppelungen per 301. */
const CROSS_CANONICAL = new Map();
/** Eigene UI-Assets: kein Eintrag im Bildregister nötig. */
const UI_ASSETS = [/^\/flags\//, /^\/icon\b/, /^\/apple-icon\b/, /^\/images\/logo-/];
/** Nur Typen, die einzeln gegen schema.org geprüft wurden (HTTP 200). Erweitern nur nach Prüfung. */
const ALLOWED_TYPES = new Set([
  "WebSite", "WebPage", "CollectionPage", "Organization", "Person", "ContactPoint",
  "PostalAddress", "BreadcrumbList", "ListItem", "ItemList", "Article", "ImageObject",
  "VideoObject", "FAQPage", "Question", "Answer", "TouristDestination",
  "TouristAttraction", "AdministrativeArea", "State", "City", "Park", "Beach",
  "Mountain", "Guide",
]);
/** Bekannt nicht existent — eigene Meldung statt "unbekannter Typ". */
const DENIED_TYPES = new Map([
  ["TravelGuide", "existiert nicht (schema.org 404)"],
  ["NationalPark", "existiert nicht (schema.org 404) — Park verwenden"],
  ["Food", "existiert nicht (schema.org 404)"],
]);

const errors = [];
const fail = (where, message) => errors.push(`${where}: ${message}`);

function htmlFiles(dir, acc = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) htmlFiles(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const routeOf = (file) =>
  "/" + path.relative(APP_DIR, file).split(path.sep).join("/").replace(/\.html$/, "").replace(/^index$/, "");

const decode = (s) =>
  s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
   .replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, "&");

const attr = (tag, name) => (tag.match(new RegExp(`${name}="([^"]*)"`)) || [])[1];

const stripOrigin = (url) => url.replace(ORIGIN, "").replace(/\/$/, "") || "/";

/** Bild-URL auf den Schlüssel normalisieren, den creditFor() in lib/image-credits.ts erwartet. */
function creditKey(raw) {
  let url = decode(raw);
  if (url.startsWith("/_next/image")) {
    const inner = url.match(/[?&]url=([^&]+)/);
    if (inner) url = decodeURIComponent(inner[1]);
  }
  url = url.replace(ORIGIN, "");
  if (url.startsWith(COMMONS_PREFIX)) return decodeURIComponent(url.slice(COMMONS_PREFIX.length).split("?")[0]);
  return url.split("?")[0];
}

/** Schlüssel des Bildregisters lesen, ohne TypeScript zu parsen. */
function creditKeys() {
  if (!fs.existsSync(CREDITS_FILE)) {
    fail(CREDITS_FILE, "Bildregister fehlt — ohne Register keine Attributionsprüfung");
    return null;
  }
  const src = fs.readFileSync(CREDITS_FILE, "utf8");
  return new Set([...src.matchAll(/"([^"\n]+)":\s*\{/g)].map((m) => m[1]));
}

/** Einträge aus lib/redirects.ts; leer, solange die Datei nicht existiert. */
function redirectEntries() {
  if (!fs.existsSync(REDIRECTS_FILE)) return [];
  const src = fs.readFileSync(REDIRECTS_FILE, "utf8");
  return src
    .split(/\bsource:\s*/)
    .slice(1)
    .map((chunk) => ({
      source: (chunk.match(/^"([^"]+)"/) || [])[1],
      destination: (chunk.match(/destination:\s*"([^"]+)"/) || [])[1],
      conditional: /\bhas:\s*\[/.test(chunk),
    }))
    .filter((entry) => entry.source && entry.destination);
}

function collectJsonLd(html, route) {
  const blocks = [];
  for (const match of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) {
    try {
      blocks.push(JSON.parse(match[1]));
    } catch (error) {
      fail(route, `JSON-LD parst nicht: ${error.message}`);
    }
  }
  return blocks;
}

function walkGraph(node, route, images) {
  if (Array.isArray(node)) return node.forEach((child) => walkGraph(child, route, images));
  if (!node || typeof node !== "object") return;
  const type = node["@type"];
  for (const single of Array.isArray(type) ? type : type ? [type] : []) {
    if (DENIED_TYPES.has(single)) fail(route, `@type "${single}" ${DENIED_TYPES.get(single)}`);
    else if (!ALLOWED_TYPES.has(single)) fail(route, `@type "${single}" nicht in der geprüften Typliste`);
  }
  for (const [key, value] of Object.entries(node)) {
    if (["image", "logo", "contentUrl", "thumbnailUrl"].includes(key)) {
      for (const entry of Array.isArray(value) ? value : [value]) {
        if (typeof entry === "string") {
          images.add(entry);
          if (!/^https?:\/\//.test(entry)) fail(route, `Bild-URL im JSON-LD ist relativ: ${entry}`);
        }
      }
    }
    walkGraph(value, route, images);
  }
}

function checkFile(file, credits) {
  const route = routeOf(file);
  const html = fs.readFileSync(file, "utf8");
  const images = new Set();

  const noindex = NOINDEX_ROUTES.has(route);
  const canonicals = [...html.matchAll(/<link[^>]*rel="canonical"[^>]*>/g)].map((t) => attr(t[0], "href"));
  const expected = CROSS_CANONICAL.get(route) ?? route;
  if (canonicals.length > 1) fail(route, `${canonicals.length} Canonical-Tags statt höchstens einem`);

  if (noindex) {
    const robots = [...html.matchAll(/<meta[^>]*name="robots"[^>]*>/g)].map((t) => attr(t[0], "content")).join(" ");
    if (!/noindex/.test(robots)) fail(route, "als noindex geführt, liefert aber kein noindex");
    if (canonicals[0]) fail(route, `noindex-Route erbt einen Canonical: ${canonicals[0]}`);
  } else {
    if (canonicals.length !== 1) fail(route, `${canonicals.length} Canonical-Tags statt genau einem`);
    const canonical = canonicals[0];
    if (canonical) {
      if (stripOrigin(canonical) === "/" && route !== "/") fail(route, `Canonical zeigt auf die Startseite: ${canonical}`);
      else if (stripOrigin(canonical) !== expected) fail(route, `Canonical ${canonical} passt nicht zu ${expected}`);
      const ogUrl = [...html.matchAll(/<meta[^>]*property="og:url"[^>]*>/g)].map((t) => attr(t[0], "content"))[0];
      if (!ogUrl) fail(route, "og:url fehlt");
      else if (stripOrigin(ogUrl) !== stripOrigin(canonical)) fail(route, `og:url ${ogUrl} weicht vom Canonical ${canonical} ab`);
    }
    const title = html.match(/<title>([^<]*)<\/title>/);
    if (!title) fail(route, "<title> fehlt");
    else if (decode(title[1]).length > TITLE_MAX) fail(route, `<title> ${decode(title[1]).length} Zeichen (max. ${TITLE_MAX})`);
  }

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) fail(route, `${h1} <h1> statt genau einem`);

  for (const block of collectJsonLd(html, route)) walkGraph(block, route, images);
  for (const match of html.matchAll(/<img[^>]*\ssrc="([^"]+)"/g)) images.add(match[1]);

  if (credits) {
    for (const image of images) {
      const key = creditKey(image);
      if (UI_ASSETS.some((pattern) => pattern.test(key))) continue;
      if (!credits.has(key)) fail(route, `Bild ohne Eintrag in ${CREDITS_FILE}: ${key}`);
    }
  }
  return route;
}

function checkRedirects(entries, routes) {
  const sources = new Set(entries.map((e) => e.source));
  const seen = new Set();
  for (const { source, destination, conditional } of entries) {
    if (seen.has(source) && !conditional) fail(REDIRECTS_FILE, `${source} ist doppelt eingetragen`);
    seen.add(source);
    if (!conditional && routes.has(source)) fail(REDIRECTS_FILE, `${source} wird gebaut und zugleich umgeleitet`);
    const target = destination.split("#")[0].split("?")[0];
    if (sources.has(target)) fail(REDIRECTS_FILE, `Kettenredirect: ${source} → ${target} → …`);
    if (target.startsWith("/") && !routes.has(target)) fail(REDIRECTS_FILE, `Redirect-Ziel ${target} wird nicht gebaut`);
  }
}

function checkSitemap(routes, entries) {
  if (!fs.existsSync(SITEMAP_BODY)) return fail(SITEMAP_BODY, "Sitemap wurde nicht prerendert");
  const redirected = new Set(entries.filter((e) => !e.conditional).map((e) => e.source));
  const xml = fs.readFileSync(SITEMAP_BODY, "utf8");
  const locs = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => stripOrigin(decode(m[1])));
  for (const loc of locs) {
    if (!routes.has(loc)) fail("sitemap.xml", `${loc} steht in der Sitemap, wird aber nicht gebaut`);
    if (redirected.has(loc)) fail("sitemap.xml", `${loc} wird umgeleitet und darf nicht in der Sitemap stehen`);
  }
  for (const route of routes) {
    if (NOINDEX_ROUTES.has(route)) continue;
    if (!locs.includes(route)) fail("sitemap.xml", `${route} wird gebaut, fehlt aber in der Sitemap`);
  }
}

if (!fs.existsSync(APP_DIR)) {
  console.error(`${APP_DIR} fehlt — zuerst "npm run build" ausführen.`);
  process.exit(1);
}

const credits = creditKeys();
const entries = redirectEntries();
const files = htmlFiles(APP_DIR);
const routes = new Set(files.map((file) => checkFile(file, credits)));
checkRedirects(entries, routes);
checkSitemap(routes, entries);

console.log(`seo-check: ${files.length} HTML-Dateien geprüft, ${errors.length} Verstöße.`);
if (errors.length) {
  for (const error of errors) console.error(`  ${error}`);
  process.exit(1);
}
```

Vier Entwurfsentscheidungen, die beim Weiterbauen zählen:

- **Kein Parser für TypeScript.** `lib/image-credits.ts` und `lib/redirects.ts` werden als Text gelesen. Das Bildregister muss deshalb seine Schlüssel in Anführungszeichen führen und die Feldnamen darin nicht (genau die Form aus 3.7); im Redirect-Register steht `source` vor `destination`. Der Preis ist diese Konvention, der Gewinn ist ein Gate ohne Abhängigkeiten, das in 0,8 s läuft und nie an einem Build-Setup scheitert.
- **`creditKey()` normalisiert drei Adressformen auf denselben Schlüssel:** den `/_next/image?url=…`-Wrapper des Optimizers, die absolute Site-URL und den Commons-Präfix `Special:FilePath/`. Damit prüft dasselbe Gate vor und nach dem Entfernen von `unoptimized` (P1) dieselben Bilder — der Wechsel auf den Optimizer ändert die ausgelieferte `src`, nicht den Registereintrag.
- **`CROSS_CANONICAL` ist bewusst leer.** Ein Canonical, der auf eine fremde URL zeigt, ist im Sinne dieses Plans kein Werkzeug: Doppelungen werden per 301 zusammengeführt (5.4), nicht per Canonical entschärft. Wer trotzdem einen braucht, muss ihn hier eintragen — und damit begründen.
- **`ALLOWED_TYPES` ist eine Positivliste.** Ein neuer Typ bricht den Build, bis jemand ihn einträgt. Das ist beabsichtigt: Genau ein nicht geprüfter Typ (`TravelGuide`) lässt die Startseite bis heute ohne gültiges strukturiertes Markup dastehen. Vor dem Eintrag steht der HTTP-Status gegen `schema.org/<Typ>`, nicht das Gefühl, dass es den Typ geben müsste.

**Branch Protection auf `main`.** Ohne sie ist das Gate umgehbar, indem man es umgeht. In GitHub unter *Settings → Rules → Rulesets* für `main`:

- *Require a pull request before merging* (Approvals dürfen bei Ein-Personen-Betrieb auf 0 stehen — der Zweck ist, dass die CI vor dem Merge läuft, nicht das Vier-Augen-Prinzip).
- *Require status checks to pass* → `verify`, dazu *Require branches to be up to date before merging*.
- *Block force pushes* und *Restrict deletions*.
- *Do not allow bypassing the above settings* — sonst gilt die Regel für alle außer der einen Person, die tatsächlich pusht.

**Rollback-Weg, einmal dokumentiert.** Vercel → Projekt → *Deployments* → letztes funktionierendes Produktions-Deployment → *Instant Rollback*. Es wird nicht neu gebaut, das bereits vorhandene Artefakt wird wieder aktiv geschaltet — deshalb ist es der schnellste verfügbare Weg zurück. Drei Dinge gehören dazu:

1. **Erst zurückrollen, dann diagnostizieren.** Die Ursache lässt sich in Ruhe im Preview-Deployment suchen.
2. **Ein Rollback ändert Git nicht.** Ohne `git revert` im Anschluss stellt der nächste Push den kaputten Stand wieder her.
3. **Ein Rollback nimmt keine Meldung zurück.** Ein bereits abgesetzter IndexNow-Ping (2.8) und eine bereits abgerufene Sitemap sind draußen. Das ist der eigentliche Grund, warum das Gate vor dem Deploy sitzen muss und nicht danach.

### 10.3 Redirects und URL-Stabilität

**Befund.** `next.config.ts` umfasst 18 Zeilen und enthält ausschließlich `images.remotePatterns` — kein `redirects()`, kein `headers()`. Ein Feld für frühere Slugs gibt es nirgends. Gleichzeitig verschiebt dieser Plan mehrere URLs: die drei `?region=`-Varianten aus `components/sections/search-panel.tsx:16-18` auf `/estados/<region>`, `/ciudad/caracas` je nach Entscheidung aus 5.4 auf `/estado/distrito-capital`, `/articulo/ruta-perfecta-14-dias` auf eine Itinerar-Seite, dazu jede Zusammenführung, die das Entitäts-Register erzwingt. Ohne Register verliert jede dieser URLs beim Umzug ihre externen Links und ihre Indexhistorie.

Welche URL kanonisch ist, entscheidet **nicht** dieser Abschnitt, sondern das Entitäts-Register in 5.4: genau eine kanonische URL je realer Entität, `kind` ist nur Darstellung. Die Doppelbelegungen (Morrocoy über `cayo-sombrero` und `chichiriviche`, Caracas gegen Distrito Capital, Ciudad Bolívar im Estado-Guide) sind dort einzeln entschieden. Hier steht nur das Werkzeug: Sobald dort eine Zeile ihre URL ändert, entsteht hier ein Eintrag.

```ts
// lib/redirects.ts — einzige Quelle für jede je ausgelieferte URL.
export type RedirectEntry = {
  /** Alte URL, Pfad ohne Domain. Next matcht ausschließlich gegen den Pfad. */
  source: string;
  destination: string;
  /** Datum der Umstellung — macht spätere Aufräumfragen datierbar. */
  since: string;
  /** Warum. Ohne Begründung weiß in einem Jahr niemand, ob der Eintrag noch trägt. */
  reason: string;
  /** Query-Bedingung für Parameter-URLs; ohne sie würde die Route selbst umgeleitet. */
  has?: { type: "query"; key: string; value?: string }[];
};

export const redirects: RedirectEntry[] = [
  {
    source: "/estados",
    destination: "/estados/los-andes",
    since: "2026-09-01",
    reason: "Region wird eigene Route; Parametervariante war intern verlinkt",
    has: [{ type: "query", key: "region", value: "Los Andes" }],
  },
  {
    source: "/estados",
    destination: "/estados/guayana-y-amazonas",
    since: "2026-09-01",
    reason: "wie oben",
    has: [{ type: "query", key: "region", value: "Guayana y Amazonas" }],
  },
  {
    source: "/estados",
    destination: "/estados/region-central",
    since: "2026-09-01",
    reason: "wie oben",
    has: [{ type: "query", key: "region", value: "Región Central" }],
  },
];
```

```ts
// next.config.ts
import type { NextConfig } from "next";
import { redirects as redirectEntries } from "@/lib/redirects";

const nextConfig: NextConfig = {
  images: { /* … Abschnitt 4 */ },
  async headers() { /* … Abschnitt 4 */ return []; },
  async redirects() {
    return redirectEntries.map((entry) => ({
      source: entry.source,
      destination: entry.destination,
      permanent: true,
      ...(entry.has ? { has: entry.has } : {}),
    }));
  },
};

export default nextConfig;
```

Der Import aus `@/lib/redirects` funktioniert in 15.5.20 ohne Zusatzschritt: Next transpiliert `next.config.ts` mit SWC und registriert dabei einen require-Hook für `.ts`, `.cts`, `.mts`, `.cjs` und `.mjs`; die `paths`-Aliase aus `tsconfig.json` werden an SWC durchgereicht (`node_modules/next/dist/build/next-config-ts/transpile-config.js:17-31` und `next-config-ts/require-hook.js`). Damit bleibt das Register eine normale, typisierte TypeScript-Datei statt einer zweiten Wahrheit in YAML oder JSON.

`permanent: true` erzeugt einen 308 statt eines 301. Beide sind für Suchmaschinen gleichwertig dauerhaft; der Unterschied betrifft nur die Methodenerhaltung bei POST, was hier nicht vorkommt.

**Die Regel für `CLAUDE.md`** — sie gilt für Menschen und Agenten gleichermaßen und ist der Teil, der ohne Werkzeug nicht durchhaltbar ist:

```md
## URL-Regel
- Eine einmal ausgelieferte URL wird nie gelöscht, sondern in `lib/redirects.ts` gemappt (`permanent: true`).
- Ein Eintrag in `lib/redirects.ts` wird nie wieder entfernt. Er kostet nichts und ist der einzige Schutz
  für extern gesetzte Links, die niemand kennt.
- Kettenredirects sind verboten: Zeigt A auf B und B später auf C, wird A im selben Commit auf C umgeschrieben.
- Die alte URL verschwindet im selben Commit aus `app/sitemap.ts`.
- Interne Links auf die alte URL werden im selben Commit umgestellt — Ausgangspunkt heute:
  `components/sections/search-panel.tsx:16-18`.
- Neue Route, neue Zeile im Entitäts-Register (`lib/entities.ts`, Abschnitt 5.4) — vor der ersten Textzeile.
```

Vier dieser Regeln prüft `seo-check.mjs` aus 10.2 mechanisch: doppelte Quellen, Kettenredirects, Ziele, die gar nicht gebaut werden, und Quellen, die weiterhin in der Sitemap stehen. Der Rest ist Disziplin, aber die drei teuersten Fehler sind abgefangen.

Zwei Details zur Parametervariante: Die `has`-Bedingung ist zwingend, weil `source` nur gegen den Pfad matcht — ohne sie würde `/estados` selbst umgeleitet. Und ob Next den Parameter an das Ziel weiterreicht, ist für die Wirkung gleichgültig: `/estados/los-andes` kanonisiert sich selbst. Entscheidend ist der dauerhafte Redirect und dass die internen Links nicht mehr auf die Parameterform zeigen — 2.2 stellt sie bereits um, bevor die Zielrouten überhaupt existieren. Die Zielslugs oben sind Beispielform: `lib/states/regions.ts:10-17` führt heute nur die sechs Anzeigenamen, kein Slug-Feld; die kanonische Schreibweise entsteht mit den Routen aus Abschnitt 5 und wird von dort übernommen, nicht hier erfunden.

### 10.4 Eine Änderung, ein Commit, eine Messung

**Keine Deploys während eines laufenden Update-Rollouts.** 2026 gab es bereits sechs bestätigte Google-Updates (zwei Core, drei Spam, ein Discover). Fällt eine größere Änderung in ein laufendes Rollout, sind Ursache und Wirkung nicht mehr trennbar — und die Versuchung, den nächsten Umbau auf eine falsche Diagnose zu stützen, ist groß. Vor jedem größeren Deploy ein Blick auf das Google-Search-Status-Dashboard; läuft ein Rollout, gehen nur Fehlerkorrekturen live, keine strukturellen Änderungen.

**Ein Umbau je Deploy, wenn der Umbau messbar sein soll.** Die P0-Korrekturen aus 2 und 3 gehören zusammen und werden gemeinsam ausgeliefert — sie sind Fehlerbehebungen, deren Wirkung ohnehin nur binär ist (indexiert oder nicht). Alles danach — Titel-Umbau, Content-Erweiterung, `unoptimized`-Entfernung, Redirects, i18n-Ausbau — wird einzeln ausgerollt, mit mindestens zwei Wochen Abstand und einem festen Vorher-Nachher-Vergleich in der GSC. Bei einer Site ohne Traffic ist das kein Luxus, sondern die einzige Möglichkeit, überhaupt jemals zu wissen, was gewirkt hat.

**Bevor eine Kennzahl ins Dashboard kommt, muss sie erhebbar sein.** Für „Crawler-Hits pro Bot" gilt das derzeit nicht. Log Drains sind ein kostenpflichtiges Plan-Feature (Plan-Status im Vercel-Dashboard prüfen, bevor die Kennzahl eingeplant wird), und selbst mit Zugang liefe die Erhebung ins Leere: **alle Routen sind prerendert**, Crawler-Anfragen werden aus dem CDN bedient und tauchen in den Function-Logs gar nicht erst auf. Was stattdessen tatsächlich zur Verfügung steht:

| Frage | Belastbare Quelle | Grenze |
|---|---|---|
| Crawlt Google, wie oft, mit welchen Antwortcodes? | GSC → Einstellungen → Crawling-Statistik | nur Googlebot, aggregiert |
| Crawlt Bing, was hat es gesehen? | Bing WMT → Crawl Information | nur Bingbot |
| Kommen KI-Crawler überhaupt? | nicht ohne Zusatzinfrastruktur | siehe unten |

Wer die Bot-Daten wirklich braucht, hat zwei Wege: DNS auf Cloudflare umziehen (die kostenlose Stufe liefert eine Bot-Übersicht am Edge, vor dem CDN) oder Vercel Observability zubuchen. Beides ist eine bewusste Entscheidung mit eigenem Aufwand — kein Nebenprodukt des bestehenden Setups. Bis dahin bleibt die Zeile „Crawler-Hits pro Bot" aus dem wöchentlichen Bericht draußen, statt dort als dauerhaft leeres Feld zu stehen.

### 10.5 Abhängigkeiten und Betrieb

**Dependabot.** Elf Produktions- und sechs Entwicklungsabhängigkeiten, keine Automatik. Dass in `package.json` bereits ein `overrides`-Block für `postcss` steht, zeigt, dass transitive Sicherheitsmeldungen hier schon einmal von Hand nachgezogen wurden — genau diese Arbeit übernimmt Dependabot, und die Pull Requests laufen durch dieselbe CI aus 10.1, sodass ein Update, das den Build bricht, `main` nie erreicht.

```yaml
# .github/dependabot.yml
version: 2
updates:
  - package-ecosystem: npm
    directory: "/"
    schedule:
      interval: weekly
      day: monday
    open-pull-requests-limit: 3
    groups:
      types:
        patterns: ["@types/*"]
      next:
        patterns: ["next", "eslint-config-next", "@next/*"]
    ignore:
      - dependency-name: "react"
        update-types: ["version-update:semver-major"]
      - dependency-name: "react-dom"
        update-types: ["version-update:semver-major"]

  - package-ecosystem: github-actions
    directory: "/"
    schedule:
      interval: monthly
```

Die Gruppierung ist der Punkt: `next` und `eslint-config-next` müssen versionsgleich wandern, `@types/*` erzeugen sonst wöchentlich drei einzelne Pull Requests. React-Major-Updates bleiben ausgenommen — die gehören zu einem Next-Major und werden geplant, nicht gemergt. Wer keinen Bot will, hängt stattdessen `npm audit --audit-level=high` als eigenen Schritt in `ci.yml`; das meldet aber nur, es behebt nichts.

**Node-Version festnageln.** Heute steht die Version nirgends: kein `.nvmrc`, kein `engines`-Feld. Lokal läuft Node 24, der IndexNow-Workflow aus 2.8 pinnt `node-version: 22`, und Vercel nimmt, was in den Projekteinstellungen steht. Drei Orte, drei mögliche Antworten — und Build-Unterschiede, die niemand reproduzieren kann. Maßgeblich ist die Einstellung im Vercel-Projekt (*Settings → General → Node.js Version*); sie wird abgelesen, nicht geraten, und dann in `.nvmrc` (eine Zeile, z. B. `22`), in `package.json` (`"engines": { "node": "22.x" }`) und in beiden Workflows gespiegelt. `ci.yml` liest über `node-version-file: .nvmrc`, `indexnow.yml` bekommt denselben Wert.

**`.gitignore` und `.vercelignore` aufräumen.** Beide Dateien enden in langen Listen aussortierter Bildkandidaten und decken die Standardfälle ab. Zwei Einträge fehlen in **beiden** (per Grep geprüft, kein Treffer): `lib/site-translations.json.bak` (2.634.977 Bytes) und `.tmp-sapo/` (2,0 MB). Beide sind untracked — ein unbedachtes `git add -A` schreibt 4,6 MB toter Daten dauerhaft in die Historie, und da `.vercelignore` sie ebenfalls nicht kennt, wandern sie in jeden Upload.

```gitignore
# .gitignore und .vercelignore, jeweils ergänzen
lib/*.bak
.tmp-sapo/
```

Die Log-Dateien im Wurzelverzeichnis sind bereits über `*.log` in beiden Dateien erfasst, `.env*` ebenfalls (`git check-ignore` bestätigt `.env.local`). Es bleibt bei diesen zwei Zeilen.

**Das Repo ist das Backup — und damit ein Sicherheitsthema, kein Speicherthema.** Es gibt kein CMS und keine Datenbank: Die 23 Guides liegen als TypeScript in `lib/states/data/`, der Rest in `lib/content.ts`. Vom Bildbestand in `public/images` (112 Dateien, 92 MB auf der Platte) sind 60 Dateien versioniert; die übrigen 52 sind über `.gitignore` ausgeschlossene Auswahlkandidaten, die ausschließlich auf dem Arbeitsrechner existieren. Alles, was die Site ausmacht, hängt damit an genau zwei Kopien: Arbeitsrechner und GitHub. Daraus folgt:

- **GitHub-Zugang absichern** — 2FA, Wiederherstellungscodes offline, und ein zweiter Owner beziehungsweise Organisationsbesitz statt eines einzelnen Privatkontos. Dieselbe Anforderung wie bei den Property-Zugängen in 9.5, aus demselben Grund: Ein einzelnes Konto ist hier kein Zugriffsweg, sondern der Single Point of Failure für den gesamten Bestand.
- **„Block force pushes" aus 10.2 ist zugleich eine Backup-Maßnahme.** Ein erzwungener Push auf `main` ist der realistischste Weg, Historie zu verlieren — und der einzige, gegen den eine Einstellung hilft.
- **Vor größeren Umbauten ein Tag setzen** (`git tag -a pre-<vorhaben> -m "…" && git push --tags`). Das kostet nichts und macht den Zustand vor dem Umbau ohne Suche in der Historie auffindbar — die Git-Entsprechung zum Instant Rollback in Vercel.

---

---

## 11. Messen und Steuern

Der Kennzahlensatz dieses Plans ist absichtlich klein. Er besteht aus Metriken, deren Quelle im heute gebuchten Setup tatsächlich existiert, und jede von ihnen trägt eine notierte Blindstelle. Beides ist eine Lehre aus dem Entwurf: Dort stand „Crawler-Hits pro Bot via Vercel Log Drains" als wöchentlicher Primär-KPI — eine Zahl, die auf dieser Site aus zwei unabhängigen Gründen nie im Dashboard erschienen wäre.

### 11.1 Zwei Regeln, die diesen Abschnitt kurz halten

**Regel 1 — keine Kennzahl ohne erhebbare Quelle im gebuchten Plan.** Log Drains sind ein Pro-/Enterprise-Feature, und selbst mit Pro liefe die Bot-Zählung ins Leere, weil alle Content-Routen prerendert sind und Crawler-Requests aus dem CDN bedient werden, ohne je eine Function zu berühren (ausführlich in 7.4). Der KPI ist gestrichen, nicht verschoben. Dieselbe Prüfung steht vor der Suchtelemetrie an: Custom Events der Vercel Web Analytics sind planabhängig kontingentiert (4.6). Ein KPI, dessen Datenquelle im gebuchten Plan nicht existiert, ist schlimmer als kein KPI — er erzeugt monatlich die Frage, warum die Zeile leer ist, und irgendwann die falsche Antwort „da passiert nichts".

**Regel 2 — keine Kennzahl ohne notierte Blindstelle.** Die vierte Spalte der Tabelle in 11.2 ist kein Beiwerk. Fast jede Fehlentscheidung in diesem Feld entsteht nicht durch eine falsche Zahl, sondern durch eine richtige Zahl, die etwas anderes misst als angenommen: „indexiert" ist keine Rankingaussage, „Rich-Result-Eignung" ist keine Darstellungszusage, und Impressionen im Gen-AI-Bericht sind keine Zitierungen.

**Getrennt davon: Erledigungsstände sind keine Wirkungsmetriken.** Die Rechtstexte und die lückenlose Bildherkunft aus Abschnitt 9 sowie das CI-Gate aus Abschnitt 10 werden in 11.3 als Startwerte geführt, weil sie ein binäres Ziel haben. Sie erzeugen keine einzige Impression. Sie verhindern Kosten und sichern die übrigen Maßnahmen ab — wer sie im Monatsbericht als Fortschritt neben Klicks stellt, misst Erledigung und nennt es Wachstum.

### 11.2 Der Kennzahlensatz

| Metrik | Quelle | Rhythmus | Was sie NICHT sagt |
|---|---|---|---|
| Indexierte Seiten | GSC → Seitenindexierung | wöchentlich | nichts über Rankings; der Report hinkt der Realität um Tage nach, und „Gecrawlt – zurzeit nicht indexiert" ist kein Fehlerzustand, sondern eine Bewertung |
| Seiten mit „Alternative Seite mit richtigem kanonischen Tag" | GSC → Seitenindexierung | wöchentlich | nicht, ob die Kanonisierung gewollt ist — die Meldung bestätigt nur, dass Google dem ausgelieferten Tag folgt. Genau deshalb steht `/playas` heute korrekt gemeldet und trotzdem falsch |
| Gültige `BreadcrumbList`-Elemente | GSC → Verbesserungen | wöchentlich, ab Auslieferung des Markups | keine Zusage auf Darstellung: Eignung ≠ Anzeige. Ein leerer Report vor dem Deploy des Markups ist erwartungsgemäß, kein Befund |
| Crawl-Anfragen, Antwortcodes, Googlebot-Typ | GSC → Crawling-Statistik | wöchentlich | ausschließlich Googlebot. Kein KI-Crawler taucht hier auf — auch nicht die, die über Googlebot laufen, denn sie sind darin nicht getrennt ausgewiesen |
| Bingbot-Crawls, Fehlerseiten, blockierte URLs | Bing WMT → Crawl Information | wöchentlich | ausschließlich Bing. Relevant, weil Bing die Retrieval-Schicht für Copilot ist — eine Aussage über Zitierung ist es nicht |
| Bing-indexierte Seiten | Bing WMT → Site Explorer | wöchentlich | keine Vergleichbarkeit mit der GSC-Zahl; beide Indizes zählen unterschiedlich und aktualisieren unterschiedlich schnell |
| 404-Meldungen („Nicht gefunden") | GSC → Seitenindexierung, Bing WMT | monatlich | keine Fehlerliste, sondern ein Erwartungssignal: geratene URLs zeigen, welche Entität ein Nutzer oder ein Bot auf dieser Site vermutet (7.4). Wer sie geraten hat, ist daraus nicht ablesbar |
| Impressionen, Klicks, Position | GSC → Leistung | monatlich | keine Ursache. Die Position ist ein impressionsgewichteter Durchschnitt — bei zweistelligen Fallzahlen ist ihre Bewegung Rauschen und kein Trend |
| Impressionen in AI Overviews, AI Mode und Discover-KI | GSC → Search Generative AI | monatlich, sobald der Report für die Property sichtbar ist | keine Klicks, keine CTR, keine Queries; kein Backfill vor dem 18.05.2026. Der Report wurde laut Sekundärquellen zunächst nur für eine Teilmenge der Properties ausgerollt (Start UK) — sein Fehlen ist kein Befund über die Site |
| Total Citations, Average Cited Pages, Grounding Queries, Zitierungen pro URL | Bing WMT → AI Performance (Public Preview seit 10.02.2026) | monatlich | nichts über ChatGPT, Perplexity oder Claude; Preview-Daten ohne Stabilitätszusage. Die kursierende Juni-2026-Erweiterung um Intents, Topics, Citation Share und Compare ist **unbelegt** und wird nicht eingeplant |
| KI-Referrals (`chatgpt.com`, `perplexity.ai`, `claude.ai`, `copilot.microsoft.com`, `gemini.google.com`) | Vercel Analytics, Referrer-Filter | monatlich | keine Vollzählung: 35–70 % der KI-Sessions kommen ohne Referrer an, AI-Mode-Klicks tragen `noreferrer` und sind grundsätzlich nicht trennbar. Ein Nullwert beweist keine Nullsichtbarkeit |
| LCP, INP, CLS (Felddaten) | Vercel Speed Insights (ab 2.11) | monatlich | Lighthouse-Laborwerte ersetzen sie nicht. Bei geringem Traffic dauert es Wochen bis zu einer belastbaren Verteilung, und CrUX zeigt für die Domain unter Umständen gar nichts |
| Discover-Impressionen | GSC → Leistung → Discover | monatlich | der Reiter erscheint erst, wenn Discover-Traffic existiert. Sein Fehlen ist der Normalzustand und kein Fehler |
| Null-Treffer-Suchen der internen Suche | `track("search", …)` über Vercel Analytics (4.6) | monatlich | keine Suchvolumina. Gemessen wird die Nachfrage der Besucher, die schon da sind — nicht der Markt (11.4) |
| Fehlgeschlagene CI-Läufe und verletzte HTML-Invarianten | GitHub Actions (Abschnitt 10) | wöchentlich | keine SEO-Wirkung. Reiner Regressionsschutz — der Wert dieser Zeile ist, dass sie langweilig bleibt |

**Was an die Stelle des gestrichenen Bot-KPI tritt:** die beiden Crawl-Zeilen (GSC-Crawling-Statistik, Bing WMT Crawl Information). Sie decken exakt die beiden Crawler ab, an denen alle KI-Oberflächen hängen, die dieser Plan überhaupt bespielt. Die Frage „welcher KI-Bot war da?" bleibt damit unbeantwortet — das ist der bewusste Preis der Empfehlung, nichts zuzubuchen. Die beiden anderen Optionen (DNS-Umzug zu Cloudflare, Vercel Observability) samt der beiden Log-Fallen beim User-Agent-Matching stehen in 7.4 und werden hier nicht wiederholt.

### 11.3 Startwerte, die vor dem ersten Deploy festgehalten werden

Diese Tabelle ist keine Statistik, sondern ein Protokoll: Sie wird am Tag der GSC-Verifizierung von Hand notiert. Weder GSC noch Bing liefern Historie vor der Verifizierung, und der Gen-AI-Bericht sammelt ausdrücklich ohne Backfill. Was jetzt nicht aufgeschrieben wird, lässt sich in zwölf Wochen nicht rekonstruieren — und ohne diese Zeile ist später keine Aussage darüber möglich, ob eine Maßnahme gewirkt hat oder ob die Site nur älter geworden ist.

| Metrik | Ist am 25.08.2026 | Zielzustand |
|---|---|---|
| Indexierte Seiten (Google) | nicht erhoben — Property existiert noch nicht | die ~55 Sitemap-URLs abzüglich der bewusst überarbeiteten oder entfernten Thin-Content-Seiten (Abschnitt 5) |
| Kanonisierungsfehler | ≥ 1, im gebauten HTML belegt: `/playas` liefert `<link rel="canonical" href="https://mrsvenezuela.com"/>` | 0, und per CI-Invariante gehalten (Abschnitt 10) |
| Gültige `BreadcrumbList`-Elemente | 0 — im Repo kein Breadcrumb-Markup | eine gültige Kette je Detailseite (Abschnitt 3) |
| Bing-indexierte Seiten | 0 — keine Property | Größenordnung wie Google, ohne Zahlengleichheit zu erwarten |
| Bilder mit dokumentierter Herkunft | 13 `license`-Einträge in 6 von 23 Guides (`merida` 4, `zulia` 3, `falcon` 3, `sucre`/`la-guaira`/`carabobo` je 1); für die 83 Dateien in `public/images` kein Nachweis | 100 %, erzwungen durch das Build-Gate über `lib/image-credits.ts` (Abschnitt 9) |
| Rechtstexte erreichbar | keine Route, kein Footer-Link | `/aviso-legal` und `/privacidad` indexierbar, im Footer und im `Organization`-Knoten verlinkt (Abschnitt 9) |
| Automatisierte Regressionsprüfung | kein `.github/`-Verzeichnis, Scripts nur `dev`/`build`/`start`/`lint` | grüner Pflicht-Check auf `main` (Abschnitt 10) |
| Null-Treffer-Suchen | nicht erhoben — kein einziger `track()`-Aufruf im Repo | monatliche Top-20-Liste (11.4) |

Die letzten drei Zeilen sind binär und in wenigen Tagen erledigt. Sie gehören trotzdem in dieselbe Tabelle, weil sie die Voraussetzung dafür sind, dass die oberen fünf Zeilen überhaupt jemandem gehören und über Monate vergleichbar bleiben.

### 11.4 Null-Treffer-Suchen als eigene Monatsmetrik

Die interne Suche ist die einzige Datenquelle dieses Plans, die Nachfrage misst, ohne dass die Site dafür ranken muss. Ein Besucher, der „Strand", „hallacas" oder „visa" eintippt und null Treffer bekommt, hat eine Lücke belegt — kein Keyword-Tool liefert dieses Signal so früh. Die Erhebung selbst steht in 4.6 (Debounce, Normalisierung, Längenkappung, Filter gegen versehentlich eingegebene Kontaktdaten, Nennung in der Datenschutzerklärung).

Berichtet wird monatlich genau eine Liste: **die 20 häufigsten Suchbegriffe mit `results: 0`**, absteigend, mit absoluter Häufigkeit. Jeder Begriff bekommt genau eine von drei Konsequenzen, und diese Zuordnung ist die eigentliche Arbeit:

1. **Fehlende Entität** → Zeile im Keyword-/Intent-Register (5.5) und damit Kandidat für eine neue Seite oder einen Abschnitt in einer Bestandsseite. Beispiel aus dem Bestand: `/playa/morrocoy` existiert nicht, obwohl zwei Seiten Morrocoy beschreiben.
2. **Vorhandene Entität, falsches Vokabular** → kein neuer Content, sondern ein Synonym- oder Sprachproblem im Suchindex. „Strand" trifft auf einer rein spanischen Datenbasis nichts, obwohl 15 Strandseiten existieren; das ist ein Fall für Abschnitt 6, nicht für die Redaktion.
3. **Kein Thema dieser Site** → protokollieren und ignorieren. Diese Kategorie muss ausdrücklich existieren, sonst zieht die Liste den Redaktionsplan in Richtungen, die nicht zur Entität gehören.

**Was die Metrik nicht sagt:** Sie ist in den ersten Monaten fast leer, weil kaum jemand da ist. Bis zu einer zweistelligen Trefferzahl pro Begriff ist sie qualitativ zu lesen — als Ideenliste, nicht als Priorisierung. Und sie ist systematisch verzerrt: Sie misst nur Besucher, die die Suche überhaupt öffnen, also überproportional Wiederkehrer und Menschen, die den ersten Navigationsversuch bereits aufgegeben haben.

### 11.5 Werkzeuge

- **Kostenlos und für diese Site ausreichend:** GSC, Bing Webmaster Tools, Screaming Frog Free (500 URLs, hier ~55 — **mit JavaScript-Rendering crawlen**, sonst fehlt der Client-Content), Rich Results Test, `validator.schema.org`, PageSpeed Insights für die CrUX-Felddaten, Ahrefs Webmaster Tools (für verifizierte Domains kostenlos: Backlink-Profil und Site Audit, Einstiegspunkt für die Altlastenprüfung aus 2.9).
- **Vor jedem Deploy:** nichts von Hand. Canonical-Eindeutigkeit, `og:url`-Gleichheit, h1-Anzahl, Titellänge und JSON-LD-Parsebarkeit über die gebauten HTML-Dateien in `.next/server/app/` prüft das CI-Gate aus Abschnitt 10. Die manuelle Variante (`grep` über `.next/server/app/`, JSON-LD durch `python -m json.tool`, Beispiel in 3.10) bleibt nur für Hotfixes am Gate vorbei.
- **Nach jedem Deploy, 20 Sekunden**, weil das Gate gegen den Build prüft und nicht gegen die Auslieferung:

```bash
for u in / /playas /estados /estado/merida /parque-nacional/canaima; do
  printf '%-32s' "$u"
  curl -s "https://mrsvenezuela.com$u" | grep -o '<link rel="canonical" href="[^"]*"' || echo "KEIN CANONICAL"
done
```

- **Nicht anschaffen:** „AI Visibility Scores" und „Share of Voice in LLMs" von Drittanbietern. Das sind Prompt-Stichproben, keine Messung (7.4). Für Trendbeobachtung nutzbar, im Monatsbericht deplatziert.

### 11.6 Reporting-Rhythmus

- **Wöchentlich, 10 Minuten:** die sechs Wochenzeilen aus 11.2 — Indexierungsstatus, neue Fehlerklassen, Crawl-Statistik, Bing-Abdeckung, CI-Zustand. Kein Fließtext, nur die Zahlen und eine Zeile Kommentar bei Abweichung.
- **Monatlich, 60 Minuten:** Leistungsbericht gegen Vormonat, beide KI-Berichte (soweit sichtbar), Speed-Insights-Verteilung, die Null-Treffer-Liste aus 11.4 und deren Zuordnung zu den drei Konsequenzen. Ergebnis ist die Eingangsliste für den Redaktionsplan (5.5), nicht ein Diagramm.
- **Quartalsweise, ein halber Tag:** Content-Review — drei bis fünf Seiten inhaltlich überarbeiten, `updatedAt` nur bei echter Änderung hochziehen, IndexNow läuft dann automatisch mit (2.8). Im selben Termin: Stichprobe auf die Bildherkunft (jede seit dem letzten Quartal neu eingebundene Datei hat einen Eintrag in `lib/image-credits.ts`) und ein Blick in die Marken-/Rechtsseiten aus Abschnitt 9 auf Aktualität der Angaben.
- **Vor jedem größeren Deploy:** Google Search Status Dashboard prüfen. **Kein Deploy während eines laufenden Update-Rollouts** — 2026 gab es bereits sechs bestätigte Updates (zwei Core, drei Spam, eines für Discover). Fällt eine große Änderung in ein Rollout, lassen sich Ursache und Wirkung hinterher nicht mehr trennen, und der Bericht des Folgemonats ist wertlos.

### 11.7 Was in 4 / 12 / 26 Wochen realistisch passiert

Die Trennlinie verläuft nicht zwischen „klein" und „groß", sondern zwischen zwei Wirkmechanismen. **Sofort wirksam, weil Google und Bing nur neu lesen müssen:** Indexierbarkeit, Kanonisierung, Sitemap-Vertrauen, `max-image-preview:large`, Rich-Result-**Eignung**, Feed und interne Verlinkung. Diese Dinge sind nach dem Crawl entweder richtig oder falsch — Tage bis wenige Wochen. **Monate braucht alles, was eine Bewertung ist:** thematische Autorität, E-E-A-T-Wahrnehmung, Discover-Eignung, Zitierung in KI-Antworten. Dafür gibt es keinen Schalter und keinen Deploy, sondern nur Publikationshistorie und externe Erwähnungen.

**Nach 4 Wochen — reine Fundament-Metriken, kein Traffic:**

- GSC und Bing WMT verifiziert, Domain-Historie und manuelle Maßnahmen geprüft, Sitemap eingereicht, 30–55 URLs als „gecrawlt" oder „indexiert" geführt.
- `/playas` erscheint nicht mehr als Duplikat der Startseite.
- Erste `BreadcrumbList`-Elemente im Verbesserungen-Report.
- GSC-Crawling-Statistik zeigt Anfragen über null; Bing WMT Crawl Information ebenso. **Über KI-Bots sagt dieser Zeitpunkt nichts** — sie sind auf diesem Setup nicht sichtbar, und ihr Fehlen im Bericht ist kein Befund.
- Rechtstexte und Bildlizenzen (Abschnitt 9) sind fertig. Sie stehen hier, weil sie zu den ersten erledigten Punkten gehören, nicht weil sie eine Zahl bewegen: **Voraussetzung, kein Wachstumstreiber.** Dasselbe gilt für das CI-Gate aus Abschnitt 10 — sein Ertrag ist, dass der Kanonisierungsfehler nicht ein zweites Mal auftritt.
- Organischer Traffic: **nahe null.** Wer hier Zahlen erwartet, hat die Ausgangslage nicht verstanden.

**Nach 12 Wochen:**

- Vollständige Indexabdeckung ist realistisch, sofern die Thin-Content-Seiten überarbeitet oder deindexiert wurden. „Gecrawlt – zurzeit nicht indexiert" bei 5–15 Seiten ist normal und **nicht** durch erneutes Einreichen lösbar: Google veröffentlicht kein Kontingent für „Indexierung beantragen", wiederholtes Beantragen derselben URL bringt nichts, und kursierende Tageszahlen sind Praxisschätzungen ohne Planungswert (2.12).
- Erste Longtail-Impressionen auf Positionen 15–40, spanischsprachig, mit geringen Volumina.
- Erste Zitierungen in Bing WMT AI Performance sind **denkbar** — Copilot nimmt über IndexNow gemeldete Seiten oft binnen Stunden auf. Denkbar ist keine Prognose; genauso plausibel ist eine leere Tabelle.
- Klicks im niedrigen zwei- bis dreistelligen Bereich pro Monat wären ein gutes Ergebnis.
- Discover: möglich, aber nicht planbar, und wenn, dann in Schüben. Das erste reine Discover-Core-Update lief vom 05.02. bis 27.02.2026 und betraf zunächst nur englischsprachige Nutzer in den USA — für eine spanischsprachige Site ist damit sowohl die Zielrichtung als auch der Geltungsbereich offen.

**Nach 26 Wochen:**

- Bei umgesetztem Content-Plan erste Top-10-Positionen für Longtail wie „cómo llegar a Los Roques" oder „mejor época Canaima".
- Marken-Queries sollten die eigene Site liefern — vorausgesetzt, der Markenname wurde vereinheitlicht (8.7) und die markenrechtliche Prüfung aus 8.6 hat den Namen bestätigt.
- Realistischer Korridor: **niedriger vierstelliger Bereich an Impressionen pro Monat, dreistellig bei Klicks.** Alles darüber ist Überperformance und kein Planwert.
- KI-Zitate bleiben vermutlich Einzelfälle. Die branchenübergreifende Referral-Rate von ~1 % gilt auch hier; der Ertrag liegt in Zitierung und Markenpräsenz, nicht in Sessions (7.4).

**Was den Zeitplan verschiebt:** ein Core Update mitten im Umbau, eine geerbte Altlast aus der Domain-Historie, ausbleibende externe Erwähnungen, ein Verzicht auf die Content-Erweiterung — und jede unrevidiert veröffentlichte Übersetzung, weil sie das Volumen ohne Qualität erhöht.

**Was dieser Abschnitt nicht enthält, und zwar absichtlich: eine Rankingzusage.** Keine Position, kein Datum, keine Traffic-Garantie. Steuerbar sind Indexierbarkeit, Struktur, Publikationsrhythmus und Fehlerfreiheit. Alles darüber ist eine Bewertung durch Dritte, und die einzige ehrliche Prognose dazu ist ein Korridor mit offenem oberen Rand und einer sehr realen Möglichkeit, dass in 26 Wochen dreistellige Klickzahlen stehen.

---

## 12. Roadmap

Die Tabelle ist nach Wirkung pro Aufwand sortiert und innerhalb gleicher Priorität nach Abhängigkeit: Was weiter oben steht, ist entweder wirksamer bei gleichem Aufwand oder Vorbedingung für das, was darunter folgt. **P0** sind die Positionen, die Indexierbarkeit, Rechtslage oder die Gültigkeit aller späteren Messungen betreffen — sie werden nicht gegen P1 abgewogen, sondern zuerst erledigt; **P1** kostet Sichtbarkeit, Ladezeit oder Substanz; **P2** ist Ausbau und Hygiene. Aufwand: **S** unter zwei Stunden, **M** ein halber bis ganzer Tag, **L** mehrere Tage; „Wirkung Suche" und „Wirkung KI" sind Einschätzungen (hoch / mittel / niedrig) und keine Prognosen — eine Zeile mit „niedrig / niedrig" kann trotzdem P0 sein, wenn sie ein Rechtsrisiko schließt oder eine spätere Maßnahme erst möglich macht.

| # | Maßnahme | Prio | Aufwand | Wirkung Suche | Wirkung KI | Abschnitt | Datei / Ort |
|---|---|---|---|---|---|---|---|
| 1 | GSC Domain-Property per DNS-TXT verifizieren — und noch nichts einreichen | P0 | S | hoch | mittel | 2.7 | Vercel DNS (TXT auf dem Apex), `search.google.com` |
| 2 | Domain-Historie prüfen: WHOIS-`Creation Date`, Wayback-CDX-Inventar, GSC → Sicherheit und manuelle Maßnahmen, Ahrefs-Backlinkprofil; Ergebnis auch bei Negativbefund schriftlich festhalten | P0 | S | hoch | niedrig | 2.9 | extern; Altlast-URLs gehen nach `lib/redirects.ts` |
| 3 | `/playas` in Server-Wrapper + Client-Body aufteilen, eigene Metadata, Canonical und `CollectionPage`-JSON-LD | P0 | M | hoch | hoch | 2.1 | `app/playas/page.tsx:1` → neu `components/sections/playas-page-content.tsx` |
| 4 | `alternates.canonical: "/"` und `openGraph.url: "/"` aus dem Root-Layout entfernen | P0 | S | hoch | mittel | 2.2 | `app/layout.tsx:32-34, :38` |
| 5 | Canonical und `openGraph.url` in der Startseite neu setzen, `og:url` in `/contacto` und `/sobre-nosotros` ergänzen | P0 | S | hoch | mittel | 2.2 | `app/page.tsx` (neuer `metadata`-Export), `app/contacto/page.tsx`, `app/sobre-nosotros/page.tsx` |
| 6 | 404 gegenprüfen statt anfassen: Canonical fällt mit dem Fallback weg, `noindex` injiziert Next selbst — kein `metadata`-Export, kein `robots:{index:false}` | P0 | S | niedrig | niedrig | 2.2 / 13 | Gegenprobe in `.next/server/app/_not-found.html` |
| 7 | Die drei `?region=`-Links im selben Commit auf die spätere Zielform umstellen | P0 | S | niedrig | niedrig | 2.2 | `components/sections/search-panel.tsx:16-18` |
| 8 | Guide-Titel absolut ausliefern, Fallback-Titel mit Keywords statt 79–90 Zeichen | P0 | S | hoch | mittel | 4.1 | `lib/page-factory.tsx:24`, `app/layout.tsx:28` |
| 9 | Generischen FAQPage-Fallback ersatzlos löschen (erfundene, nirgends sichtbare Q&A auf ~26 Seiten) | P0 | S | mittel | hoch | 3.1 / 4.1 | `lib/page-factory.tsx:86-103` |
| 10 | `TravelGuide` (Typ existiert nicht) durch `@graph` aus `WebSite`, `Organization`, `WebPage`, `Country` ersetzen | P0 | M | hoch | hoch | 3.4 / 3.5 | `app/page.tsx:46-54`, neu `lib/schema.ts` |
| 11 | Relative Bild-URL im JSON-LD absolut machen | P0 | S | mittel | hoch | 4.1 | `lib/page-factory.tsx:70` (`:23` als Vorlage) |
| 12 | `lastModified: new Date()` durch echte oder feste Daten ersetzen, `changeFrequency` und `priority` streichen | P0 | S | mittel | niedrig | 2.6 | `app/sitemap.ts:9,13-16,22-24` |
| 13 | `max-image-preview:large` + `max-snippet:-1` im Root-Layout | P0 | S | hoch | mittel | 2.4 | `app/layout.tsx` (`robots`-Block) |
| 14 | Fehlende spanische Akzente in Titeln und Descriptions korrigieren | P0 | S | mittel | mittel | 4.1 | `app/layout.tsx:27,31`, `app/page.tsx`, `lib/content.ts` |
| 15 | `unoptimized` bei allen Remote-Bildern entfernen — Drittlandtransfer **und** LCP, ein Eingriff für beides | P0 | M | hoch | niedrig | 4.1 / 9.2 | `detail-page.tsx:818,950`, `state-editorial-guide.tsx:105,218`, `place-gallery.tsx:80,160`, `los-roques-guide.tsx:97,113`, `medanos-guide.tsx:288,307`, `pico-bolivar-guide.tsx:183,212`, `island-carousel.tsx:53`, `localized-detail-page.tsx:156` |
| 16 | Ladungsfähige Anschrift klären (Impressumsdienst oder c/o; ein Postfach genügt nicht) — Vorbedingung für 17 | P0 | S | niedrig | niedrig | 9.1 | extern |
| 17 | `/aviso-legal` als indexierbare Server-Route anlegen (§ 5 DDG) | P0 | S | mittel | mittel | 9.1 | `app/aviso-legal/page.tsx` |
| 18 | `/privacidad` mit den vier tatsächlichen Sachverhalten: Vercel Analytics, Bildauslieferung, Sprachspeicher, Suchtelemetrie (Art. 13 DSGVO) | P0 | M | mittel | mittel | 9.1 / 9.2 | `app/privacidad/page.tsx` |
| 19 | Vercel-DPA im Dashboard aktiv akzeptieren, US-Transfer und Zweck in der Erklärung benennen | P0 | S | niedrig | niedrig | 9.2 | Vercel → Settings |
| 20 | Rechtslinks in den Footer aufnehmen (heute sieben Links, kein einziger rechtlicher) | P0 | S | niedrig | niedrig | 9.1 | `components/sections/home-footer.tsx:19-27` |
| 21 | `lib/image-credits.ts` als einzige Herkunftsquelle anlegen, Seed aus den 13 vorhandenen `StateCredit`-Einträgen | P0 | M | mittel | niedrig | 3.7 | neu `lib/image-credits.ts` |
| 22 | Build-Gate: jedes in `searchIndex`, `heroSlides` oder einem Guide referenzierte Bild ohne Credit-Eintrag bricht den Build — friert den Bestand ein, bevor er aufgearbeitet wird | P0 | S | niedrig | niedrig | 3.7 / 10.2 | `scripts/seo-check.mjs` |
| 23 | Bilder ohne belegbare Herkunft ersetzen statt weiter ausliefern (83 lokale Dateien ohne jeden Nachweis) | P0 | L | niedrig | niedrig | 9.3 | `public/images/` |
| 24 | Sichtbare Attribution als `<figure>`/`<figcaption>` plus Sammelseite `/creditos` — JSON-LD allein erfüllt die Attributionspflicht nicht | P0 | M | mittel | mittel | 3.7 | neu `components/content/credited-image.tsx`, `app/creditos/page.tsx` |
| 25 | Logo gestalten: quadratischer 512-px-Master, auf transparentem und hellem Grund lesbar — Vorbedingung für 26 und 27, kein Platzhalter | P0 | M | mittel | mittel | 2.3 | Gestaltungsaufgabe, danach `public/images/` |
| 26 | Favicon, `icon.png`, `apple-icon.png`, `manifest.ts` und `viewport`-Export aus demselben Asset ableiten | P0 | S | mittel | niedrig | 2.3 | `app/` |
| 27 | `Organization.logo` als `ImageObject`-Knoten ergänzen — vorher Key ersatzlos weglassen statt auf eine 404-URL zeigen | P0 | S | niedrig | mittel | 3.4 | `lib/schema.ts` |
| 28 | Markenrecherche TMview / DPMAregister / USPTO (Klassen 39/41/16) mit dokumentierter Fallback-Position; dazu Registrar-Lock, Auto-Renew, 2FA, Registrierung auf die Betreiberin — Vorbedingung für 29 | P0 | M | niedrig | niedrig | 8.6 / 9.4 | extern, Registrar |
| 29 | Markenname vereinheitlichen, „Descubre Venezuela" als `alternateName`; Cookie- **und** localStorage-Namen im selben Commit mitziehen | P0 | M | mittel | hoch | 8.7 | 17 Fundstellen (`app/layout.tsx`, `app/page.tsx`, `lib/page-factory.tsx`, …) + `components/i18n/language-provider.tsx:20,27` |
| 30 | CI-Workflow: `npm ci`, `tsc --noEmit`, `lint`, `build`; `typecheck`-Script ergänzen, Branch Protection auf `main` | P0 | S | mittel | mittel | 10.1 | `.github/workflows/ci.yml`, `package.json` |
| 31 | `scripts/seo-check.mjs` mit harten Invarianten über `.next/server/app/**/*.html`, als `postbuild` verdrahtet — greift damit auch im Vercel-Build | P0 | M | hoch | mittel | 10.2 | `scripts/seo-check.mjs`, `package.json` |
| 32 | Erst jetzt: Sitemap in der GSC einreichen | P0 | S | hoch | mittel | 2.8 | `search.google.com` |
| 33 | Bing Webmaster Tools per GSC-Import verifizieren, Sitemap einreichen | P0 | S | mittel | hoch | 2.8 | `bing.com/webmasters` |
| 34 | Gezielt Indexierung für maximal sieben URLs beantragen (Kontingentgröße ist unbestätigt, Wiederholung bringt nichts) | P0 | S | mittel | niedrig | 2.12 | GSC URL-Prüfung |
| 35 | IndexNow-Key als `public/<key>.txt` + GitHub Action nach Push auf `main` (Bing, Yandex, Naver, Seznam, Yep — nicht Google) | P1 | M | mittel | hoch | 2.8 | `public/`, `scripts/indexnow.mjs`, `.github/workflows/indexnow.yml` |
| 36 | `robots.ts` nach Bot-Klassen strukturieren (Retrieval / Training / Block) | P1 | S | niedrig | hoch | 2.5 | `app/robots.ts:5-11` |
| 37 | Vercel „AI Bot Managed Ruleset" einmal prüfen — Default laut Doku ist **Allow**, relevant nur bei aktiv gesetztem Deny | P1 | S | niedrig | mittel | 7.3 | Vercel Firewall |
| 38 | `lib/schema.ts` ausbauen: `@id`-Anker, Kind→Typ-Mapping, `Organization`- und `WebSite`-Knoten in jeder Route | P1 | M | mittel | hoch | 3.4 / 3.6 | `lib/schema.ts`, `lib/page-factory.tsx` |
| 39 | `BreadcrumbList` in den `@graph` aller Detailseiten und Hubs — sichtbare Breadcrumb existiert bereits | P1 | S | mittel | mittel | 3.2 | `lib/page-factory.tsx`, `app/estados`, `app/playas` |
| 40 | `siteName` im Child-OG ergänzen, pauschale `1200x800`-Maße entfernen | P1 | S | mittel | mittel | 4.2 | `app/estados/page.tsx:37-44`, `lib/page-factory.tsx:32,36` |
| 41 | `lib/redirects.ts` als einzige Quelle, per `async redirects()` eingebunden; URL-Regel in CLAUDE.md — vor dem ersten URL-Umzug | P1 | S | mittel | niedrig | 10.3 | `lib/redirects.ts`, `next.config.ts` |
| 42 | Entitäts→URL-Register: genau eine kanonische URL je realer Entität, `kind` ist nur Darstellung; jede neue Route bekommt vorab eine Zeile | P1 | S | hoch | hoch | 5.4 | Registertabelle; `lib/content.ts:146-157,166-167,189-190,219-220,309-310` |
| 43 | Keyword- und Intent-Mapping je Zielseite **vor** dem Schreiben: Hauptquery, Volumen VE/CO/US-es/ES, SERP-Typ, Unterfragen, Abgrenzung | P1 | M | hoch | mittel | 5.5 | eine Zeile je geplanter URL |
| 44 | `place.href` als `next/link` rendern — 17 interne Kontextlinks, die heute kein Link sind | P1 | S | hoch | mittel | 5.2 | `components/content/place-gallery.tsx` |
| 45 | Verwaiste Seiten anbinden: zweite Zeile in `guide-related.tsx` | P1 | S | mittel | mittel | 5.2 | `components/content/guide-related.tsx` |
| 46 | Mega-Menü immer ins DOM rendern (24 Estado-Links auf allen ~55 Seiten) | P1 | S | mittel | niedrig | 5.2 | `components/sections/site-header.tsx:148-155, :227` |
| 47 | Strand-Kontextblock: Link auf den Bundesstaat und auf Nachbarstrände, `stateSlug`-Feld ergänzen | P1 | M | hoch | hoch | 5.2 | `components/content/detail-page.tsx`, `lib/content.ts` |
| 48 | Generisches `getEditorialCopy`-Template streichen, die acht Seiten mit 73–79 % Textgleichheit deindexieren oder ausbauen | P1 | L | hoch | hoch | 5.3 | `components/content/detail-page.tsx:276-306`, `lib/page-factory.tsx` |
| 49 | `beachGuides` nach `lib/beach-guides.ts` ziehen, echte FAQs ins sichtbare Markup | P1 | M | mittel | hoch | 5.3 | `components/content/detail-page.tsx:309` |
| 50 | `author`, `publishedAt`, `updatedAt` als Datenfelder, sichtbare Byline, Ausgabe im `@graph` | P1 | M | hoch | hoch | 5.9 | `lib/content.ts:26-37`, `lib/states/types.ts`, `components/content/state-editorial-guide.tsx` |
| 51 | Autorenseite mit `Person`-Schema, About-Seite um Methodik und KI-Offenlegung erweitern | P1 | M | mittel | hoch | 5.9 | `app/autora/page.tsx`, `components/institutional/about-page-content.tsx`, `lib/institutional-i18n.ts` |
| 52 | `/politica-editorial`: Redaktions-, Korrektur- und KI-Kennzeichnungsrichtlinie inkl. der harten MT-Regel; speist `publishingPrinciples` und `correctionsPolicy` | P1 | M | mittel | hoch | 9.6 | `app/politica-editorial/page.tsx`, `lib/schema.ts` |
| 53 | Werbekennzeichnung und Kooperationsregeln schriftlich festlegen, bevor das erste Angebot kommt: `rel="sponsored"`, Kennzeichnung im Text, kein Vermieten von Unterseiten | P1 | S | niedrig | niedrig | 9.8 | dieselbe Route wie 52 |
| 54 | `verifiedAt` + `volatility` je Faktenblock, sichtbarer Verifikationshinweis am Kopf jeder Praxis-Sektion, keine Preisangabe ohne Datum und Währung | P1 | M | mittel | hoch | 5.8 / 9.7 | `lib/states/types.ts`, `lib/content.ts`, Guide-Komponenten |
| 55 | Sechs Region-Hubs `/estados/<region>` als statische Server-Routen; `?region=` im selben Zug per 301 mappen | P1 | M | hoch | mittel | 5.6 | neu unter `app/estados/`, Daten aus `lib/states/regions.ts:10-17`, `lib/redirects.ts` |
| 56 | Vier Planungsseiten: `es-seguro-viajar`, `requisitos-de-entrada`, `dinero-y-pagos`, `presupuesto` — nur mit 54 veröffentlichbar | P1 | L | hoch | hoch | 5.6 | neu `app/venezuela/` |
| 57 | `lib/states/data/distrito-capital.ts` anlegen und registrieren | P1 | M | mittel | mittel | 5.3 | `lib/states/data/`, `lib/states/index.ts:30-54` |
| 58 | Sektions-`answer`-Feld (40–60 Wörter, chunk-vollständig) für die fünf Top-Guides | P1 | L | mittel | hoch | 7.3 | `lib/states/types.ts`, `lib/states/data/{bolivar,merida,nueva-esparta,falcon,zulia}.ts` |
| 59 | Saisonkalender in den Redaktionsplan: Veröffentlichung und `updatedAt` 8–12 Wochen **vor** dem Fenster, nicht mittendrin | P1 | S | mittel | niedrig | 5.10 | Redaktionsplan; Saisonseiten in `lib/states/data/`, `app/venezuela/` |
| 60 | Übersetzungskatalog pro Sprache splitten und dynamisch nachladen (2,4 MB JSON heute für alle Besucher) | P1 | M | hoch | mittel | 4.2 | `components/i18n/content-translator.tsx:5`, `scripts/generate-site-translations.mjs` |
| 61 | Früher Ausstieg bei `language === "es"`, No-Op-Schreibzugriffe des TreeWalkers vermeiden | P1 | S | mittel | niedrig | 4.2 | `components/i18n/content-translator.tsx:79,89,106` |
| 62 | `next.config.ts`: AVIF, `minimumCacheTTL`, `deviceSizes` ohne 3840, `qualities`, `poweredByHeader:false` | P1 | S | mittel | niedrig | 4.2 | `next.config.ts:3-16` |
| 63 | Sicherheits-Header vollständig: `X-Frame-Options`/`frame-ancestors`, `Permissions-Policy`, CSP zunächst als `Content-Security-Policy-Report-Only`; HSTS ohne `preload` | P1 | S | niedrig | niedrig | 4.5 | `next.config.ts` (`headers()`) |
| 64 | 16:9-Derivat von `salto-angel.jpg` erzeugen (1733×2599 hochkant, an vier Stellen als Hero-, Karten- und OG-Bild verbraucht), getrennte Konstanten für Hoch- und Querformat | P1 | S | mittel | niedrig | 4.2 | `public/images/`, `lib/content.ts:43-44,78-79,83,123,151,344` |
| 65 | Hero: `priority` an den Zustand statt an den Index binden, zweiten Slide nicht vorladen | P1 | S | niedrig | niedrig | 4.2 | `components/sections/hero.tsx:76-78,86` |
| 66 | `dynamicParams = false` in allen zehn `[slug]`-Routen | P1 | S | niedrig | niedrig | 4.2 | `app/{animal,articulo,ciudad,comida,estado,historia,montana,parque-nacional,planta,playa}/[slug]/page.tsx` |
| 67 | Skip-Link „Saltar al contenido" plus `id="contenido"` an allen zwölf `<main>`-Elementen | P1 | S | niedrig | niedrig | 4.4 | `app/layout.tsx`, zwölf Seitenkomponenten |
| 68 | Reduced-Motion auf zwei Ebenen: globale CSS-Regel für Transitions, `MotionConfig reducedMotion="user"` für framer-motion | P1 | S | niedrig | niedrig | 4.4 | `app/globals.css:55`, neu `components/a11y/reduced-motion.tsx` |
| 69 | Fokus-Trap, Escape, Scroll-Sperre und Fokus-Rückgabe in der Lightbox | P1 | M | niedrig | niedrig | 4.4 | `components/content/place-gallery.tsx:116-127` |
| 70 | RSS-Feed als statische Route, im `<head>` als `alternate` verlinkt — Zubringer für Newsletter, Feedly, Pinterest | P1 | S | niedrig | mittel | 4.6 | neu `app/feed.xml/route.ts`, `app/layout.tsx` |
| 71 | Interne Suche tracken (`track("search", { q, results })`), Begriffe normalisieren, Vorgang in der Datenschutzerklärung nennen; Plan-Kontingent vorher prüfen | P1 | S | mittel | niedrig | 4.6 / 11.4 | `components/sections/search-overlay.tsx` |
| 72 | Dependabot mit Gruppierung, `npm audit` als nicht blockierender Schritt, Node-Version in `.nvmrc`, `engines` und beiden Workflows fixieren | P1 | S | niedrig | niedrig | 10.5 | `.github/dependabot.yml`, `.nvmrc`, `package.json` |
| 73 | Domain-Mailbox `info@mrsvenezuela.com` einrichten, SPF, DKIM und DMARC setzen — ohne DMARC ist die Domain spoofbar | P1 | S | niedrig | mittel | 9.5 | DNS + Mailhoster; danach in `Organization.email`, Impressum, `security.txt` |
| 74 | Zweiter Owner auf jeder Property (in der GSC über eine andere Methode als den TXT-Record), 2FA mit offline gesicherten Codes, einseitiges Zugangsdokument | P1 | S | niedrig | niedrig | 9.5 | GSC, Bing, Vercel, GitHub, Registrar |
| 75 | Bild-Falschzuordnungen korrigieren (~10 Zuordnungen, u. a. `morrocoy → playa-el-agua.jpg`, `orchid → delta-orinoco.jpg`), im Zweifel Sektion ohne Bild | P1 | M | mittel | mittel | 5.7 | `lib/content.ts:41-74` |
| 76 | Alt-Texte redaktionell neu schreiben (Motiv + Ort + Bundesstaat) — heute laufen sie durch den Laufzeit-Übersetzer und existieren für Google Images nur spanisch | P1 | M | mittel | niedrig | 5.7 / 8.2 | `lib/content.ts`, `lib/states/data/*.ts`, `components/i18n/content-translator.tsx:74` |
| 77 | Wikidata-QIDs als Feld pflegen und als `sameAs` ausgeben — jede QID einzeln verifiziert, keine geratene | P1 | M | mittel | hoch | 3.2 / 7.3 | `lib/states/regions.ts`, `lib/content.ts` |
| 78 | `ImageObject` mit Lizenzfeldern für Commons-Bilder aus `lib/image-credits.ts` erzeugen | P1 | M | mittel | niedrig | 3.8 | `lib/schema.ts`, `lib/states/data/*.ts` |
| 79 | Fakten-Blöcke als `<dl>` oder `<table>` statt Div-Grid ausgeben | P1 | S | niedrig | mittel | 7.3 | `components/content/state-editorial-guide.tsx` |
| 80 | h1-Text entitäts-disambiguieren („Bolívar" kollidiert mit Simón Bolívar, Pico Bolívar, Ciudad Bolívar) — die doppelte `h1` selbst ist ein Ternär-Zweig und kein Defekt | P1 | S | mittel | hoch | 4.4 / 5.4 | `components/content/state-editorial-guide.tsx:224, :236` |
| 81 | Bild-Sitemap: `images`-Feld pro Eintrag, ausschließlich eigene Domain | P2 | M | mittel | niedrig | 2.6 | `app/sitemap.ts` |
| 82 | Echte `updatedAt`-Daten statt Fixdatum, IndexNow nur noch für tatsächlich geänderte URLs | P2 | M | mittel | mittel | 2.6 / 2.8 | `lib/content.ts`, `lib/states/types.ts`, `app/sitemap.ts`, `scripts/indexnow.mjs` |
| 83 | Sprechende Sektions-IDs (`#historia` statt `#guia-01`) | P2 | M | niedrig | mittel | 7.3 | `components/content/state-editorial-guide.tsx`, `guide-toc.tsx` |
| 84 | Kontrast-Audit der Palette: `--muted` liegt bei 4,53:1, `#5c6b60` bei 5,13:1; dunkle Guide-Sektionen separat rechnen | P2 | S | niedrig | niedrig | 4.4 | `app/globals.css:11` |
| 85 | Sprachwahl: Autonyme als Primärlabel („Deutsch" statt „Alemán"), Tastaturmodell im Popup — Flaggen sind bereits korrekt dekorativ | P2 | S | niedrig | niedrig | 4.4 | `lib/i18n.ts:2-6`, `components/sections/language-switcher.tsx` |
| 86 | `security.txt` nach RFC 9116 mit Pflichtfeld `Expires`, jährlich verlängern | P2 | S | niedrig | niedrig | 4.5 | `public/.well-known/security.txt` |
| 87 | Newsletter-Anmeldung (EU-Hosting, Double-Opt-In, serverseitig gerendert) — löst Consent-Prüfung aus | P2 | M | niedrig | niedrig | 8.4 | `components/sections/home-footer.tsx`, Guide-Ende |
| 88 | Pinterest Business, Claimed Website, Boards pro Region, Pins am Saisonvorlauf aus 59 | P2 | M | mittel | niedrig | 8.4 | extern; URL danach in `sameAs` |
| 89 | YouTube: Long-form je Top-Ziel, Transkript, Kapitel, Deeplink | P2 | L | mittel | hoch | 8.4 | extern; URL danach in `sameAs` |
| 90 | `VideoObject` im `@graph` plus Klick-zum-Laden-Fassade über `youtube-nocookie.com` — kippt sonst den consent-freien Zustand | P2 | M | mittel | hoch | 3.9 | Guide-Komponenten, `lib/schema.ts` |
| 91 | Eigene Fotos unter CC BY-SA auf Wikimedia Commons hochladen (Commons-Regeln beachten, keine Eigenwerbung) | P2 | L | niedrig | mittel | 8.3 | extern |
| 92 | framer-motion auf `LazyMotion` + `m` umstellen (39,5 → 6,5 KB synchron) | P2 | M | niedrig | niedrig | 4.3 | 10 Dateien, primär `components/sections/site-header.tsx:4` |
| 93 | Scroll-Listener per `requestAnimationFrame` drosseln, `scrollHeight` einmalig messen, Fortschritt als CSS-Variable | P2 | S | niedrig | niedrig | 4.3 | `components/content/guide-toc.tsx:54-62` |
| 94 | Bilddateien komprimieren, drei byte-identische Duplikate zusammenführen, PNG-Fotos als JPEG/WebP neu ablegen | P2 | M | mittel | niedrig | 4.3 | `public/images/` (112 Dateien, 92 MB) |
| 95 | Tote Dateien löschen, `.bak` und `.tmp-sapo/` in `.gitignore` **und** `.vercelignore` aufnehmen | P2 | S | niedrig | niedrig | 4.3 / 10.5 | `public/data/venezuela-adm1.json`, `interactive-map.tsx`, `site-footer.tsx`, `gallery.tsx`, `category-grid.tsx` |
| 96 | Interne Suche mehrsprachig machen (Katalogwerte in den Haystack) | P2 | S | niedrig | niedrig | 6 | `components/sections/search-overlay.tsx:54-61` |
| 97 | Restliche Seiten aus 5.6: `/parques-nacionales`, `/gastronomia-venezolana`, `/itinerarios`, `/ciudades`, `/mejor-epoca-para-viajar-a-venezuela` — je 2–4 Veröffentlichungen im Monat, nicht 40 Seiten in einer Woche | P2 | L | hoch | hoch | 5.6 | neue Routen, jeweils mit Registerzeile aus 42 und Mapping aus 43 |
| 98 | `/en` für 8–12 URLs mit hreflang, Sitemap-Alternates, Link-Sprachumschalter und serverseitigen Alt-Texten — keine URL ohne muttersprachliche Durchsicht | P2 | L | hoch | hoch | 6 | `app/[lang]/`, `lib/page-factory.tsx:15-47`, `app/sitemap.ts`, `components/sections/language-switcher.tsx:67-75` |

**Reihenfolge der ersten zwei Wochen**

- **Tag 1** — 1 (GSC-Property), unmittelbar danach 2 (Domain-Historie). Fällt 2 negativ aus, wird die Reihenfolge ab hier neu bewertet, nicht weitergearbeitet. Parallel und ohne Abhängigkeit anstoßen: 16 (Anschrift) und 25 (Logo) — beide haben externe Vorlaufzeit und blockieren später.
- **Tag 2–3** — Der Canonical-Block in einem Rutsch: 3, 4, 5, 6, 7. Danach ist die Indexierbarkeit hergestellt; alles Weitere baut darauf auf.
- **Tag 3–4** — Metadaten und Markup: 8, 9, 10, 11, 12, 13, 14. Jede Zeile ein eigener Commit, damit die Wirkung zuordenbar bleibt.
- **Tag 4–5** — 15 (`unoptimized`). Ein Eingriff, der LCP und Drittlandtransfer gleichzeitig schließt und die spätere CSP aus 63 überhaupt erst möglich macht.
- **Tag 5–7** — 21 und 22 zuerst (Register plus Gate friert den Bestand ein), dann 23 als laufende Aufarbeitung im Hintergrund.
- **Tag 6–8** — Rechtstexte, sobald die Anschrift steht: 17, 18, 19, 20.
- **Tag 8–9** — 30 und 31. Die CI läuft auf dem heutigen Stand fehlerfrei durch; das Gate aus 31 gehört in denselben Commit wie die P0-Korrekturen, weil es davor bricht.
- **Tag 9–10** — 28, danach 29. Die Recherche steht vor der Vereinheitlichung, nicht danach.
- **Tag 10–11** — Logo fertig: 26 und 27.
- **Tag 12** — 24 (`figcaption` und `/creditos`), auf der Datenbasis aus 21.
- **Tag 13–14** — Erst jetzt einreichen: 32, 33, 34. Vorher schickt die Sitemap Google auf selbstkanonisierte Routen.

Zwei Regeln, die für den gesamten Zeitraum gelten: **eine Änderung, ein Commit, eine Messung** (10.4) — und **kein Deploy während eines laufenden Core-Update-Rollouts**, weil sich Ursache und Wirkung sonst nicht mehr trennen lassen.

---

---

## 13. Bewusst NICHT tun

**`llms.txt` anlegen.** Google nutzt sie nicht (Mueller, 02.06.2026: „none of the AI systems use it"; Illyes bestätigte, dass Google es nicht unterstützt und nicht plant). Googles offizieller Optimierungsleitfaden nennt das Anlegen ausdrücklich unter dem, was man ignorieren kann. Behauptungen, Anthropic oder Perplexity würden sie konsumieren, stammen aus Content-Marketing ohne Primärquelle — beide *publizieren* eine llms.txt für die eigene Doku, das ist etwas anderes. Wer sie trotzdem will: 20 Minuten, Risiko null, als kuratierte Linkliste über einen `app/llms.txt/route.ts` mit `dynamic = "force-static"`. Eine `llms-full.txt` mit dem kompletten Guide-Text **auf keinen Fall** — das dupliziert den gesamten Content in eine ungeschützte Textdatei ohne dokumentierten Abnehmer. Mueller nennt im selben Zusammenhang **WebMCP** als die von Google gestützte Alternative — das ist der Beobachtungspunkt für die nächsten Quartale, nicht llms.txt. Zu bauen gibt es dort für eine rein redaktionelle Site ohne Transaktionen heute nichts; die Aufgabe lautet, den Stand zu verfolgen, nicht vorzugreifen.

**Google-Extended blocken, um AI Overviews zu verlassen.** Google-Extended steuert ausschließlich Gemini-Training und Grounding in Gemini-Apps sowie Vertex AI. AI Overviews und AI Mode werden über Googlebot gespeist. Wer wirklich raus will, braucht `nosnippet`/`max-snippet` — und verliert damit auch klassische Snippets.

**Alle KI-Bots blocken.** Training und Retrieval sind entkoppelt. GPTBot und ClaudeBot zu sperren verhindert nicht das Training (läuft auch über CCBot und Drittdatensätze), sondern nur die Zitierung — falls dabei OAI-SearchBot und Claude-SearchBot mitgesperrt werden. Rutgers/Wharton (31.12.2025) misst bei blockenden Publishern −23,1 % monatliche Besuche.

**`ChatGPT-User` oder `Perplexity-User` per robots.txt sperren wollen.** Beide Anbieter dokumentieren ausdrücklich, dass robots.txt für nutzerausgelöste Fetches nicht gilt. Ein Disallow erzeugt nur falsche Sicherheit. Der Umkehrschluss gilt nicht für Anthropic: ClaudeBot, Claude-User und Claude-SearchBot respektieren robots.txt laut Doku alle drei — ein pauschales „nutzerausgelöste Fetches ignorieren robots.txt" wäre falsch.

**Sitemap-Ping an Google.** Die Abschaffung des Endpunkts `google.com/ping?sitemap=` wurde im Juni 2023 angekündigt, abgeschaltet wurde er Ende 2023; er liefert heute 404. Für Google existiert kein Ping-Mechanismus mehr.

**Google Indexing API einrichten.** Offiziell auf `JobPosting` und `BroadcastEvent` beschränkt und durchgesetzt; Kontingenterhöhungen setzen die entsprechenden strukturierten Daten voraus. Alle „Instant Indexing für Google"-Angebote sind Missbrauch oder Scheinleistung.

**IndexNow für Google-Indexierung erwarten.** Google nimmt nicht teil (Stand indexnow.org FAQ, August 2026), obwohl seit Oktober 2021 „getestet" wird.

**„Indexierung beantragen" als Massenwerkzeug.** Bestätigt ist nur, dass ein Kontingent existiert, an der Property hängt und wiederholtes Beantragen derselben URL nichts bringt; die kursierende Größenordnung von ~10–12 URLs/Tag ist eine Praxisschätzung (*wahrscheinlich* — Google veröffentlicht keinen Wert). Bei >50 Seiten dauert das so oder so Wochen und garantiert nichts.

**`generateSitemaps` einbauen.** Die Schwelle liegt bei 50.000 URLs bzw. 50 MB pro Datei. Bei ~55 URLs reiner Overhead.

**`htmlLimitedBots: /.*/ ` setzen.** Alle 58 Routen sind vollständig prerendert, die Metadaten stehen ohnehin im statischen `<head>`. Der Override kostet nur TTFB.

**`revalidate` oder `export const dynamic` auf den Slug-Routen.** Verwandelt statische Seiten (`initialRevalidateSeconds: false`) in ISR: mehr Function-Invocations, mehr Kosten, kein SEO-Gewinn.

**`/_next/` in robots.txt disallowen.** Googlebot braucht CSS und JS aus `/_next/static/`, um zu rendern. Ein Disallow dort zerstört die Bewertung der Seite.

**Eine eigene `VERCEL_ENV`-Abfrage in `app/robots.ts`** zum Deindexieren von Previews. Vercel setzt `X-Robots-Tag: noindex` automatisch; eine falsche Bedingung deindexiert die Produktion. Der einzige Sonderfall ist eine Custom-Domain auf einem Nicht-Produktions-Branch.

**„Crawler-Hits pro Bot" als wöchentliche Kennzahl festschreiben, ohne die Datenquelle zu haben.** Vercel Log Drains sind ein Pro-/Enterprise-Feature; auf Hobby existieren nur kurzlebige Runtime-Logs. Und weil sämtliche Routen prerendert sind, werden Bot-Requests aus dem CDN bedient und tauchen in den Function-Logs gar nicht erst auf — der KPI wäre also selbst mit Log Drain systematisch leer. Erhebbar sind ohne Umbau nur die GSC-Crawling-Statistik (Googlebot) und Bing WMT Crawl Information (Bingbot); alles darüber hinaus verlangt DNS-Umzug auf Cloudflare oder zugebuchte Vercel-Observability. Erst Plan-Status und Quelle klären, dann die Kennzahl definieren. Ein Dashboard-Feld, das nie befüllt wird, ist schlechter als kein Feld.

**Redirects für apex/www in `next.config.ts`.** Gehört in die Vercel-Domain-Einstellungen — dort greift der 308 auf Edge-Ebene, bevor überhaupt eine Function läuft.

**`app/global-not-found.tsx` einbauen, nur um der 404 einen eigenen Titel zu geben.** Die Datei existiert in 15.5.20 hinter `experimental: { globalNotFound: true }` (lokal verifiziert), rendert aber ein vollständiges `<html>`-Dokument und dupliziert damit die Layout-Shell inklusive Fonts. Auf einer `noindex`-Seite ist das Kosten-Nutzen-Verhältnis schlecht. Ebenso überflüssig: `robots: { index: false }` für die 404 — Next injiziert `<meta name="robots" content="noindex"/>` automatisch (im gebauten `.next/server/app/_not-found.html` verifiziert). Und ein `metadata`-Export in `app/not-found.tsx` wirkt ohnehin nicht; Metadata ist nur aus `layout.tsx` und `page.tsx` exportierbar.

**FAQ-Rich-Results erwarten.** Seit 07.05.2026 abgeschaltet, Doku am 15.06.2026 entfernt (beides belegt); das Ende des API-Supports im August 2026 stammt aus der Branchenberichterstattung. FAQPage schadet nicht, wenn die Fragen sichtbar sind, bringt bei Google aber keine Darstellung mehr.

**HowTo-Markup für Anreise-Abschnitte.** Ankündigung 08.08.2023, vollständige Entfernung im September 2023, 2026 in keiner Google-Galerie mehr.

**`SearchAction`/Sitelinks-Searchbox.** Feature ab 21.11.2024 entfernt. Der `WebSite`-Knoten bleibt als `@id`-Anker sinnvoll, die `potentialAction` erzeugt kein Feature mehr — und dürfte hier ohnehin nicht gesetzt werden, weil `search-overlay.tsx` rein clientseitig ist und es keine indexierbare Such-URL gibt.

**`Recipe`-Markup für `/comida`-Seiten.** Google verlangt zwar nur `name` und `image`, sagt aber „content about preparing a particular dish". Die Seiten sind redaktionelle Porträts ohne `recipeIngredient` und `recipeInstructions` — genau der Relevanz-Verstoß, den die Guidelines als Beispiel nennen.

**Erfundene `GeoCoordinates` „zur Vollständigkeit".** `lib/states/regions.ts:22-27` speichert Prozentwerte auf einer Bilddatei, `lib/content.ts:117-142` nochmals andere Prozentwerte. Beide sind **keine** Koordinaten. Lieber weglassen als raten.

**Geratene Bildmaße im OG-Tag oder im JSON-LD.** `public/images/cayo-de-agua.jpg` ist 1600×899, nicht 1600×900 — Maße nur eintragen, wenn sie an der Datei gelesen wurden, sonst Feld weglassen.

**`Organization.logo` auf eine URL zeigen lassen, die es nicht gibt.** `public/images` enthält kein Logo-Asset (83 Dateien geprüft). Erst gestalten, dann referenzieren.

**Die gesamte Entität auf „Mrs Venezuela" konsolidieren, bevor die Markenrecherche vorliegt.** Neben der SERP-Kollision mit dem Schönheitswettbewerb steht die ungeprüfte Frage, ob „Miss Venezuela" und „Mrs." als Pageant-Kennzeichen in den relevanten Klassen (39 Reisen, 41 Unterhaltung/Publikation, 16 Druckerzeugnisse) geschützt sind. Jeder weitere Konsolidierungsschritt — `Organization.name`, `sameAs`-Profile, Domain-E-Mail, Autorenprofile, Cookie- und Storage-Namen, Social-Handles — erhöht den Schaden, falls Berechtigungsanfrage, UDRP oder Abmahnung kommen. Reihenfolge: erst TMview/DPMAregister/USPTO recherchieren, Fallback-Position dokumentieren (z. B. „Descubre Venezuela" als Zweitdomain sichern), dann konsolidieren. Registrar-Lock, Auto-Renew und 2FA sind davon unabhängig sofort zu setzen.

**Wikidata-QIDs per Namensmatch generieren.** Estado Bolívar (Q191164), Ciudad Bolívar (Q26906) und Simón Bolívar sind drei Entitäten. Jede einzeln verifizieren.

**Wikipedia-Artikel über die Site anlegen oder Links dort setzen.** COI-Editing, wird revertiert, im Wiederholungsfall Blacklisting. Siehe 10.3.

**Wikidata-Item für die Website anlegen.** Erfüllt keines der drei Notabilitätskriterien und landet im Löschantrag.

**Google Business Profile.** Setzt laut Doku einen physischen Standort oder Kundenbesuche voraus. Rein informationelle Sites sind nicht eligible; ein trotzdem erstelltes Profil riskiert Sperrung.

**Google News / Publisher Center anstreben.** Verlangt originäre, zeitaktuelle Nachrichteninhalte plus journalistische Infrastruktur. Für redaktionelle Reiseguides aussichtslos — und der Umbau in Richtung Nachrichtenformat würde die thematische Fokussierung zerstören. Discover funktioniert komplett ohne Publisher Center.

**hreflang setzen, solange es keine lokalisierten URLs gibt.** Fünf `alternates.languages`-Einträge auf dieselbe URL sind formal ungültig. Erst Routen, dann hreflang. Das gilt auch für die Zwischenstufe: ein `x-default` oder ein `en`-Eintrag, der auf die spanische Seite zeigt, ist kein Teilfortschritt, sondern derselbe Fehler in kleiner.

**Unrevidierte maschinelle Übersetzung veröffentlichen.** Ausdrückliches Beispiel für „scaled content abuse". Vier Sprachen komplett auszurollen erzeugte 212 dünne, teils fehlerhafte Seiten.

**Gekaufte Links, PBNs oder Mention-Pakete.** Google warnt im AI-Leitfaden wörtlich vor „seeking inauthentic 'mentions' across the web".

**Massenhaftes Nachschieben von Seiten nach dem bestehenden Template.** Gefährlich wird nicht Volumen, sondern Volumen bei gleichbleibender Uniformität — das August-2026-Spam-Update zielte laut Branchenauswertung (*wahrscheinlich*, Zielbeschreibung nicht von Google bestätigt) genau darauf.

**Datums-Refreshes ohne inhaltliche Änderung.** Erkennbar und wirkt gegen die Site. Maßstab ist Informationsgewinn.

**HSTS mit `preload` setzen, bevor Apex und www dauerhaft HTTPS liefern.** Faktisch irreversible Zusage inklusive aller Subdomains — und ohne Antrag bei `hstspreload.org` ohnehin wirkungslos.

**YouTube-Embeds, Affiliate-Widgets oder Kartendienste ohne CMP-Planung einbauen.** Die Site ist heute consent-frei (self-hosted Fonts, kein Tracking-Cookie, keine Fremdskripte). Jeder dieser Bausteine kippt das und kostet LCP, INP und Discover-Eignung.

**Platzhalter-Rechtstexte aus Generatoren ungeprüft veröffentlichen.** Impressum und Datenschutzerklärung sind Pflicht (§ 5 DDG, Art. 13 DSGVO) — aber ein Generator-Output ohne **ladungsfähige Anschrift** erfüllt § 5 DDG nicht, und ein Postfach genügt dafür nicht. Solange die Adressfrage (Privatanschrift, Impressumsdienst oder c/o) ungeklärt ist, ersetzt der Platzhalter ein Risiko durch zwei. Dasselbe gilt inhaltlich: Eine Datenschutzerklärung, die Verarbeitungen beschreibt, die es nicht gibt, oder die real laufenden auslässt — Vercel Analytics samt US-Transfer, die direkten Wikimedia-Hotlinks aus dem Browser des Besuchers, den Sprach-Cookie und den localStorage-Eintrag — ist schlechter als keine, weil sie die Unrichtigkeit dokumentiert. Erst Sachverhalte erheben, dann formulieren, dann anwaltlich prüfen lassen.

**Bilder ohne dokumentierte Herkunft weiter ausliefern.** In Deutschland teurer als jedes Ranking-Problem in diesem Dokument. Betroffen sind nicht nur die Commons-Hotlinks, sondern vor allem die 83 lokalen Dateien in `public/images`, für die es bislang keinerlei Nachweis gibt. Ohne Eintrag in der Bildquellen-Map wird eine Datei nicht referenziert, sondern ersetzt — die Alternative „vorerst drin lassen und später klären" gibt es nicht.

**Prozentzahlen aus GEO-Anbieter-Blogs als Fakten weitergeben.** Belastbar sind: Princeton GEO (KDD 2024), Ahrefs (75.000 Marken, mit Kausalitäts-Disclaimer), Semrush (230.000 Prompts), Vercel/MERJ (>500 Mio. Fetches). **Nicht belastbar und im Plan als unbestätigt gekennzeichnet:** „Tabellen 4,2× häufiger zitiert", „FAQ-Schema +45 %", „Semantic Completeness r=0,87", die Bing-WMT-Erweiterung vom Juni 2026, die Verfügbarkeit des Vercel-AI-Rulesets „auf allen Plänen".

**Deploys während eines laufenden Update-Rollouts.** 2026 gab es bereits sechs bestätigte Updates. Fällt eine größere Änderung hinein, lassen sich Ursache und Wirkung nicht mehr trennen.

---

## 14. Quellen

**Google — Suche, KI-Features, Guidelines**
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- https://developers.google.com/search/docs/essentials/spam-policies
- https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- https://developers.google.com/search/docs/crawling-indexing/google-common-crawlers
- https://developers.google.com/search/updates
- https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports
- https://developers.google.com/search/blog/2023/06/sitemaps-lastmod-ping
- https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history

**Google — Strukturierte Daten, Sitemaps, Indexierung, Crawling**
- https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://developers.google.com/search/docs/appearance/structured-data/faqpage *(Deprecation-Hinweis: 07.05.2026 / 15.06.2026)*
- https://developers.google.com/search/docs/appearance/structured-data/recipe
- https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- https://developers.google.com/search/apis/indexing-api/v3/quota-pricing
- https://developers.google.com/search/blog/2024/10/sitelinks-search-box
- https://support.google.com/webmasters/answer/34592
- https://support.google.com/webmasters/answer/9012289
- https://support.google.com/webmasters/answer/7552505
- https://support.google.com/webmasters/answer/9679690 *(Crawl-Statistik — einzige belastbare Bot-Datenquelle für Googlebot)*

**Google Discover, Business Profile, News**
- https://developers.google.com/search/docs/appearance/google-discover *(dokumentiert ist ≥1200 px Breite; kein Seitenverhältnis)*
- https://developers.google.com/search/docs/appearance/preferred-sources
- https://support.google.com/business/answer/3038177
- https://support.google.com/news/publisher-center/answer/6204050
- https://searchengineland.com/google-february-2026-discover-core-update-is-now-complete-469450 *(Rollout zunächst US/Englisch)*
- https://searchengineland.com/google-discover-qualifies-ranks-filters-content-research-470190
- https://www.digitalapplied.com/blog/google-discover-core-update-february-2026-seo-guide *(„wahrscheinlich")*

**schema.org (Vokabular V30.0, 19.03.2026)**
- https://schema.org/docs/releases.html
- https://schema.org/TouristDestination · https://schema.org/Park · https://schema.org/Beach · https://schema.org/State
- https://schema.org/Guide *(Ersatz für das nicht existierende `TravelGuide`)*
- *Nicht existent (HTTP 404, geprüft 25.08.2026): `TravelGuide`, `NationalPark`, `Food`*
- https://www.wikidata.org/wiki/Wikidata:Notability

**KI-Crawler und Bot-Policies**
- https://developers.openai.com/api/docs/bots *(ChatGPT-User: „robots.txt rules may not apply"; vollständiger OAI-SearchBot-UA)*
- https://support.claude.com/en/articles/8896518 *(ClaudeBot, Claude-User, Claude-SearchBot — alle drei respektieren robots.txt)*
- https://docs.perplexity.ai/guides/bots *(Perplexity-User: „generally ignores robots.txt rules")*
- https://support.apple.com/en-us/119829 *(Applebot-Extended)*
- https://github.com/ai-robots-txt/ai.robots.txt/blob/main/table-of-bot-metrics.md
- https://vercel.com/blog/the-rise-of-the-ai-crawler *(JS-Ausführung, 404-Raten — Anbietererhebung, „unbestätigt" in den Zahlen)*
- https://www.seroundtable.com/google-extended-seo-36865.html

**llms.txt / WebMCP**
- https://www.searchenginejournal.com/google-says-llms-txt-is-purely-speculative-for-now/577576/ *(Mueller-Zitat verifiziert; WebMCP als genannte Alternative)*
- https://www.seroundtable.com/google-ai-llms-txt-39607.html
- https://geojacker.com/llms-txt *(sekundär, „wahrscheinlich")*
- https://presenc.ai/research/state-of-llms-txt-2026 *(Content-Marketing, „unbestätigt")*

**GEO-Studien und Zitierdaten**
- https://collaborate.princeton.edu/en/publications/geo-generative-engine-optimization/ *(einzige peer-reviewte Studie; Zahlen nicht primär nachprüfbar)*
- https://ahrefs.com/blog/ai-brand-visibility-correlations *(Korrelation, keine Kausalität; DR>40-Filter)*
- https://www.semrush.com/blog/most-cited-domains-ai/
- https://aisearch.similarweb.com/blog/gen-ai-stats/ *(„~23 % Travel-Zitierrate" — unbestätigt)*
- https://searchengineland.com/ai-search-engines-cite-reddit-youtube-and-linkedin-most-study-473138
- https://otterly.ai/blog/youtube-ai-citation-study-2026/ *(„unbestätigt")*
- https://cloro.dev/research/ai-crawler-blocks/ *(widersprüchliche Evidenz)*
- https://machinerelations.ai/research/content-structure-ai-citation-rates-2026 *(Methodik nicht offengelegt — „unbestätigt")*
- https://patrickryall.com/articles/structured-data-ai-crawlers *(„unbestätigt")*

**Bing, IndexNow, weitere Suchmaschinen**
- https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview *(Start 10.02.2026)*
- https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools
- https://blogs.bing.com/webmaster/september-2021/Access-to-Instant-Indexing-%C2%A0Bing%C2%A0URL-submission-API
- https://www.indexnow.org/documentation
- https://www.indexnow.org/faq *(Teilnehmer: Amazon, Bing, Naver, Seznam.cz, Yandex, Yep — Google nicht)*

**Next.js 15.5.20 und Vercel**
- https://nextjs.org/docs/app/api-reference/functions/generate-metadata *(„shallowly merged", verschachtelte Felder werden überschrieben)*
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
- https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image
- https://nextjs.org/docs/app/api-reference/functions/generate-static-params
- https://vercel.com/docs/domains/managing-dns-records
- https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines
- https://vercel.com/docs/deployment-protection
- https://vercel.com/docs/headers/response-headers
- https://vercel.com/docs/image-optimization/limits-and-pricing
- https://vercel.com/docs/bot-management *(„The ruleset is inactive by default … labeled Allow")*
- https://vercel.com/docs/webhooks *(Account-Webhooks Pro/Enterprise)*
- https://vercel.com/docs/log-drains *(Planvoraussetzung für jede eigene Bot-Log-Auswertung)*
- https://vercel.com/docs/project-configuration

*Hinweis zur Doku-Version: nextjs.org liefert inzwischen die Doku für Version 16.x aus. Lokal gegen `node_modules/next@15.5.20` verifiziert und in 15.5.20 **nicht** verfügbar: das `other`-Feld in `robots.ts` (erst v16.3.0), `params` als Promise in `opengraph-image.tsx` (erst v16.0.0), `id` als Promise in `generateSitemaps` (erst v16.0.0). Verfügbar und geprüft: `RobotsFile.rules` als Array (userAgent Pflicht), `SitemapFile.images`/`alternates.languages`, `images.qualities`, `images.minimumCacheTTL` (Default 60), `experimental.globalNotFound` (Default false), `alternates.canonical: null`. `themeColor` ist im `Metadata`-Typ vorhanden, aber **seit Next 14 deprecated** — nicht entfernt. Im Zweifel gegen `node_modules/next/dist/lib/metadata/types/metadata-interface.d.ts` prüfen.*

**Ranking-Realität, Links, Updates**
- https://searchengineland.com/links-google-search-ranking-factor-gary-illyes-432422
- https://www.seroundtable.com/google-lastmod-dates-incorrect-41697.html *(Illyes-Zitat verifiziert, Datum sekundär)*
- https://www.seroundtable.com/google-august-2026-spam-update-done-41906.html *(Zielbeschreibung ist Branchenauswertung, „wahrscheinlich")*
- https://www.searchenginejournal.com/google-drops-faq-rich-results-from-search/574429/
- https://searchengineland.com/google-search-to-drop-sitelinks-search-box-447682
- https://www.gsqi.com/marketing-blog/deindexed-and-delayed-manual-action-case-study/ *(Fallstudie Drittanbieter — Kontext für die Prüfung auf geerbte manuelle Maßnahmen)*

**Recht, Lizenzen, Barrierefreiheit** *(keine Rechtsberatung — für die Umsetzung von Impressum, Datenschutzerklärung und Werbekennzeichnung ist anwaltliche Prüfung einzuplanen)*
- § 5 DDG (Digitale-Dienste-Gesetz), Art. 13 DSGVO, § 25 TDDDG, § 5a UWG
- BFSG (Barrierefreiheitsstärkungsgesetz), in Kraft seit 28.06.2025
- https://commons.wikimedia.org/wiki/Commons:Credit_line
- https://commons.wikimedia.org/wiki/Commons:Licensing
- https://creativecommons.org/licenses/ *(Deed-URLs für die `CC_LICENSE_URL`-Tabelle)*
- https://en.wikipedia.org/wiki/Wikipedia:External_links
- https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest
- https://www.tmdn.org/tmview/ · https://register.dpma.de/ · https://tmsearch.uspto.gov/
- https://www.rfc-editor.org/rfc/rfc9116.html *(security.txt)*
- https://hstspreload.org/

**Social, Traffic, Zero-Click**
- https://redship.io/blog/reddit-self-promotion-rules *(„wahrscheinlich")*
- https://socialpulsestats.com/social-media-traffic-statistics-2025-platform-referral-data-conversion-trends/ *(„unbestätigt")*
- https://pushly.com/resources/the-zero-click-era-what-it-means-for-publisher-traffic-in-2026/ *(„wahrscheinlich")*
- https://www.icrossing.com/insights/reddits-rise-in-search-results *(„wahrscheinlich")*
- https://www.mdpi.com/2227-7390/14/12/2227 *(Wikidata/Tourismus, „wahrscheinlich")*

---
