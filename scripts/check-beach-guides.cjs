const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
require.extensions['.ts'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,file);
const {beachGuides,getBeachGuide} = require('../lib/beach-guides/index.ts');
const {guideLabels} = require('../lib/beach-guides/copy.ts');
const {thematicEs} = require('../lib/thematic/es.ts');
const {languages} = require('../lib/i18n.ts');
const active = languages.map(l => l.code).sort();
function localized(value, label) {
  assert.deepEqual(Object.keys(value).sort(), active, label);
  for (const language of active) assert.ok(value[language]?.trim(), `${label}: ${language}`);
}
assert.equal(beachGuides.length,17);
assert.equal(new Set(beachGuides.map(g=>g.slug)).size,17);
for (const slug of ['bahia-de-cata','chichiriviche','isla-de-coche','macuto','patanemo','playa-el-yaque','puerto-cabello']) {
  const guide = getBeachGuide(slug);
  assert.ok(guide?.planner, slug+' upgraded from legacy detail');
  localized(guide.stayAdvice, slug+' lodging guidance');
}
assert.ok(getBeachGuide('los-roques')?.planner);
const roques = getBeachGuide('los-roques');
assert.match(roques.identity.es, /Maiquetía → vuelo a Gran Roque → posada/);
assert.match(roques.arrival[0].text.es, /antes de pagar/);
assert.match(roques.arrival[1].text.es, /cambio de terminal/);
assert.match(roques.arrival[2].text.es, /hora de recogida/);
assert.equal(getBeachGuide('not-a-destination'),undefined);
const linked = thematicEs['caribe-y-playa'].sections.find(s => s.slug==='destinos-esenciales').items.filter(i => i.href).map(i => i.href);
const nested = beachGuides.flatMap(g => g.highlights.flatMap(item => item.link ? [item.link.href] : []));
for (const href of [...linked,...nested]) assert.ok(beachGuides.some(g=>`/playa/${g.slug}`===href),href);
assert.ok(!linked.includes('/playa/isla-de-plata'));
assert.ok(!linked.includes('/playa/cayo-sombrero'));
assert.ok(linked.includes('/playa/morrocoy'));
assert.ok(getBeachGuide('morrocoy').highlights.some(item => item.link?.href === '/playa/cayo-sombrero'));
assert.ok(getBeachGuide('mochima').highlights.some(item => item.link?.href === '/playa/isla-de-plata'));
for (const language of active) {
  const thematic = require(`../lib/thematic/${language}.ts`)[`thematic${language[0].toUpperCase()+language.slice(1)}`];
  const destinations = thematic['caribe-y-playa'].sections.find(s => s.slug === 'destinos-esenciales').items;
  assert.equal(destinations.length, 8);
  assert.ok(!destinations.some(item => item.href === '/playa/isla-de-plata'));
  assert.ok(!destinations.some(item => item.href === '/playa/cayo-sombrero'));
  assert.ok(destinations.some(item => item.href === '/playa/morrocoy'));
}
for (const [key,value] of Object.entries(guideLabels)) localized(value,key);
for (const guide of beachGuides) {
  for (const key of ['region','access','setting','tagline','introTitle','intro','identity','timing','duration']) localized(guide[key],`${guide.slug}.${key}`);
  for (const key of ['highlights','faq','arrival']) {
    assert.equal(guide[key].length,3);
    for(const item of guide[key]) {
      localized(item.title,key); localized(item.text,key);
      if (item.link) {
        localized(item.link.label,'link');
        assert.ok(beachGuides.some(g => item.link.href === `/playa/${g.slug}`));
      }
    }
  }
  assert.equal(guide.tips.length,3);
  guide.tips.forEach(tip=>localized(tip,'tip'));
  assert.ok(guide.sources.length>=2);
  assert.ok(guide.planner, `${guide.slug}: practical planning is required for every destination`);
  if (guide.planner) {
    for (const key of ['arrivalNote','highlightsTitle']) localized(guide.planner[key],key);
    for (const key of ['bases','boats','itinerary','budget']) {
      const section = guide.planner[key];
      localized(section.title,key);
      if(section.intro) localized(section.intro,key);
      if(section.note) localized(section.note,key);
      assert.equal(section.items.length,key === 'budget' ? 4 : 2);
      for(const item of section.items) { localized(item.title,key); localized(item.text,key); }
    }
  }
  for(const photo of [guide.hero,...(guide.feature?[guide.feature]:[]),...(guide.gallery ?? [])]) {
    localized(photo.caption,'caption');
    assert.ok(fs.existsSync(path.join(__dirname,'../public',photo.src)),photo.src);
  }
  console.log(`PASS ${guide.slug}: four languages, complete guide and existing photographs`);
}
// Optional: validate the built pages, not a mocked component.
async function checkBuilt() {
  const base = process.argv[2];
  if(!base) return;
  const index = await (await fetch(`${base}/caribe-y-playa`)).text();
  const destinationSection = index.split('id="destinos-esenciales"')[1]?.split('</section>')[0];
  assert.ok(destinationSection?.includes('href="/playa/mochima"'));
  assert.ok(!destinationSection?.includes('href="/playa/isla-de-plata"'));
  assert.ok(destinationSection?.includes('href="/playa/morrocoy"'));
  assert.ok(!destinationSection?.includes('href="/playa/cayo-sombrero"'));
  for(const guide of beachGuides) {
    const response = await fetch(`${base}/playa/${guide.slug}`);
    assert.equal(response.status,200,guide.slug);
    const html = await response.text();
    if (guide.slug === 'mochima') assert.ok(html.includes('href="/playa/isla-de-plata"'));
    if (guide.slug === 'morrocoy') assert.ok(html.includes('href="/playa/cayo-sombrero"'));
    if (guide.planner) {
      for(const [id,key] of [['elige-base','bases'],['lanchas','boats'],['plan-dos-dias','itinerary'],['presupuesto','budget']]) {
        assert.ok(html.includes(`id="${id}"`));
        for (const item of guide.planner[key].items) assert.ok(html.includes(item.text.es));
      }
    } else assert.ok(!html.includes('id="plan-dos-dias"'));
    const arrival = html.match(/<section id="como-llegar"[^>]*>(.*?)<\/section>/s)?.[1];
    assert.equal((arrival?.match(/<li[ >]/g)||[]).length,3,guide.slug+' three arrival steps');
    for (const step of guide.arrival) assert.ok(arrival.includes(step.text.es),guide.slug+' arrival copy');
    assert.ok(html.includes(guide.duration.es),guide.slug+' duration');
    assert.ok(html.includes(guide.timing.es),guide.slug+' timing');
    assert.ok(html.includes(`rel="canonical" href="https://mrsvenezuela.com/playa/${guide.slug}"`),guide.slug+' canonical');
    assert.ok(html.includes(guide.intro.es),guide.slug+' prerendered introduction');
    assert.equal((html.match(/<h1[ >]/g)||[]).length,1,guide.slug+' one h1');
    const stay = html.match(/<section id="donde-hospedarse"[^>]*>(.*?)<\/section>/s)?.[1];
    assert.ok(stay?.includes(guideLabels.stayNotice.es),guide.slug+' lodging notice');
    assert.ok(stay?.includes(guideLabels.comingSoon.es),guide.slug+' coming soon');
    assert.ok(!/<a[ >]|<button[ >]/.test(stay),guide.slug+' no premature booking links');
    const activities = html.match(/<div[^>]*data-guide-activities[^>]*>(.*?)<\/div>/s)?.[1];
    assert.equal((activities?.match(/<article[ >]/g)||[]).length,3,guide.slug+' three unboxed activities');
    assert.ok(!activities.includes('rounded-'),guide.slug+' no rounded activity cards');
    for(const id of ['conoce','que-hacer','como-llegar','cuando-ir','cuanto-tiempo','consejos','preguntas']) assert.ok(html.includes(`id="${id}"`),id);
    const schemas = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/g)].map(m=>JSON.parse(m[1]));
    const faq = schemas.flatMap(s=>s['@graph']||[s]).find(s=>s['@type']==='FAQPage');
    assert.deepEqual(faq.mainEntity.map(q=>q.acceptedAnswer.text),guide.faq.map(q=>q.text.es));
    console.log('HTTP / canonical / SSR / FAQ schema PASS',guide.slug);
  }
}
checkBuilt().catch(error=>{console.error(error);process.exitCode=1;});
