const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const root = path.join(__dirname, '..');
const catalog = JSON.parse(fs.readFileSync(path.join(root, 'lib/site-translations.json'), 'utf8'));
const compiler = { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 };
function readGuide(slug) {
  const source = fs.readFileSync(path.join(root, `lib/states/data/${slug}.ts`), 'utf8');
  const output = ts.transpileModule(source, { compilerOptions: compiler }).outputText;
  const mod = { exports: {} };
  const localRequire = name => {
    assert.equal(name, '@/lib/commons-image');
    return { commonsImage: file => `https://commons.wikimedia.org/${encodeURIComponent(file)}` };
  };
  new Function('require', 'module', 'exports', output)(localRequire, mod, mod.exports);
  return mod.exports[slug];
}
async function main() {
  const base = process.argv[2];
  for (const slug of ['carabobo', 'aragua', 'miranda']) {
    const guide = readGuide(slug);
    assert.match(guide.intro.paragraphs[0], /centro-norte de Venezuela/);
    assert.match(guide.intro.paragraphs[0], /capital/);
    assert.match(guide.seo.title, /dónde queda/);
    assert.ok(guide.seo.description.length < 165);
    const changedCopy = [guide.intro.title, guide.intro.paragraphs[0], guide.access.intro,
      guide.faqs.items[0].question, guide.faqs.items[0].answer];
    if (slug !== 'miranda') changedCopy.push(guide.faqs.items[1].answer);
    if (slug === 'miranda') changedCopy.push(guide.tips.items.at(-1).title, guide.tips.items.at(-1).text);
    for (const text of changedCopy) {
      for (const lang of ['en', 'de', 'fr']) assert.ok(catalog[text]?.[lang], `${slug}: missing ${lang}: ${text}`);
    }
    if (base) {
      const res = await fetch(`${base}/estado/${slug}`);
      assert.equal(res.status, 200);
      const html = await res.text();
      assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
      assert.ok(html.includes(guide.intro.paragraphs[0]));
      assert.ok(html.includes(guide.access.intro));
      assert.ok(html.includes(guide.seo.title));
      const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
      const graph = schemas.flatMap(s => s['@graph'] || [s]);
      const faq = graph.find(s => s['@type'] === 'FAQPage');
      assert.deepEqual(faq.mainEntity.map(q => q.name), guide.faqs.items.map(q => q.question));
      assert.equal(graph.find(s => s['@type'] === 'TouristDestination').description, guide.seo.description);
    }
    console.log(`PASS ${slug}: practical introduction, metadata, translated copy${base ? ', HTTP and matching FAQ schema' : ''}`);
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
