const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const read = name => fs.readFileSync(path.join(root, name), 'utf8');
for (const slug of ['aviso-legal', 'privacidad', 'terminos']) {
  assert.ok(read('components/content/legal-draft.tsx').includes(`href="/${slug}"`));
  assert.match(read(`app/${slug}/page.tsx`), /index: false/);
  assert.match(read(`app/${slug}/page.tsx`), /googleBot: \{ index: false/);
  assert.ok(!read('app/sitemap.ts').includes(`"/${slug}"`));
}
assert.match(read('components/content/legal-draft.tsx'), /no es la versión legal definitiva/);
assert.match(read('app/privacidad/page.tsx'), /mrs-venezuela-language/);
assert.match(read('app/privacidad/page.tsx'), /Spotify/);
assert.match(read('app/privacidad/page.tsx'), /Vercel/);
console.log('PASS: legal links, explicit draft notice, noindex and exclusion from sitemap');

async function checkHttp() {
  const base = process.argv[2];
  if (!base) return;
  for (const slug of ['aviso-legal', 'privacidad', 'terminos']) {
    const response = await fetch(`${base}/${slug}`);
    assert.equal(response.status, 200);
    const html = await response.text();
    assert.match(html, /name="robots" content="noindex, follow"/);
    assert.match(html, /name="googlebot" content="noindex, follow"/);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
    if (slug === 'aviso-legal') {
      assert.match(html, /Michell Naranjo/);
      assert.match(html, /01067 Dresden/);
      assert.doesNotMatch(html, /Datos pendientes/);
    } else {
      assert.match(html, /no es la versión legal definitiva/);
    }
    console.log('PASS HTTP', slug);
  }
}
checkHttp().catch(error=>{console.error(error);process.exitCode=1;});
