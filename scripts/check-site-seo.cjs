/* Run after next build, or pass a local/public base URL for a live smoke test. */
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const base = process.argv[2];
const root = path.join(process.cwd(), '.next/server/app');
const decode = value => value.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#x27;/g, "'");
const normal = value => value.replace(/\/$/, '');

async function read(route) {
  if (base) {
    const response = await fetch(new URL(route, base), { signal: AbortSignal.timeout(30000) });
    assert.equal(response.status, 200, `${route}: HTTP ${response.status}`);
    return response.text();
  }
  const file = route === '/' ? 'index.html' : route === '/sitemap.xml' ? 'sitemap.xml.body' : `${route.slice(1)}.html`;
  return fs.readFileSync(path.join(root, file), 'utf8');
}

async function main() {
  const xml = await read('/sitemap.xml');
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decode(match[1]));
  assert.ok(urls.length > 50, 'sitemap inventory');
  assert.equal(new Set(urls.map(normal)).size, urls.length, 'unique sitemap URLs');
  assert.ok(!urls.some(url => /privacidad|terminos|preview=|localhost|127\.0\.0\.1/.test(url)), 'no drafts or local URLs in sitemap');
  for (const match of xml.matchAll(/<lastmod>(.*?)<\/lastmod>/g)) assert.match(match[1], /^\d{4}-\d{2}-\d{2}$/, 'explicit editorial date');
  const titles = new Set();
  for (const url of urls) {
    const route = new URL(url).pathname;
    const html = await read(route);
    const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/);
    assert.ok(canonical, `${route}: canonical`);
    assert.equal(normal(decode(canonical[1])), normal(url), `${route}: self canonical`);
    assert.equal((html.match(/<h1(?:\s|>)/g) || []).length, 1, `${route}: one H1`);
    assert.ok(!/<meta[^>]*name="robots"[^>]*content="[^"]*noindex/.test(html), `${route}: indexable`);
    const title = decode(html.match(/<title>(.*?)<\/title>/)?.[1] || '');
    assert.ok(title, `${route}: title`);
    assert.ok(!titles.has(title), `${route}: unique title (${title})`);
    titles.add(title);
    assert.match(html, /<meta name="description" content="[^"]+"/, `${route}: description`);
    const blocks = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)];
    for (const match of blocks) {
      const data = JSON.parse(match[1]);
      assert.ok(data['@context'], `${route}: schema context`);
      const serialized = JSON.stringify(data);
      assert.ok(!serialized.includes('"@type":"TravelGuide"'), `${route}: no unsupported TravelGuide`);
      assert.ok(!serialized.includes('La plataforma conecta estados, ciudades, parques'), `${route}: no fabricated generic FAQ`);
      assert.ok(!/"image":"\//.test(serialized), `${route}: absolute schema image`);
    }
  }
  const home = await read('/');
  assert.match(home, /Venezuela: destinos y guía para tu viaje \| Mrs Venezuela/);
  assert.match(home, /max-image-preview:large/);
  assert.ok(!/href="[^"]*(?:amazon\.(?:de|com)|booking\.com)/.test(home), 'no active affiliate products');
  const trip = await read('/articulo/ruta-perfecta-14-dias');
  assert.match(trip, /Tu lista antes de reservar/);
  assert.equal((trip.match(/type="checkbox"/g) || []).length, 6);
  for (const anchor of ['la-ruta', 'dia-por-dia', 'donde-dormir', 'como-moverse', 'presupuesto', 'antes-de-reservar']) {
    assert.ok(trip.includes(`href="#${anchor}"`) && trip.includes(`id="${anchor}"`), `${anchor}: usable planning anchor`);
  }
  assert.ok(!trip.includes('Tras los terremotos de junio de 2026'), 'no stale operational status presented as current');
  console.log(`PASS: ${urls.length} sitemap pages, HTTP/build HTML, unique titles, canonicals, H1, descriptions, JSON-LD, planning links and inactive affiliates.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
