const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
require.extensions['.ts'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } }).outputText, file);
const { beachComparisonCopy, comparisonSlugs } = require('../lib/home/beach-comparison.ts');
assert.equal(comparisonSlugs.length, 8);
assert.equal(new Set(comparisonSlugs).size, 8);
for (const language of ['es', 'en', 'de', 'fr']) {
  const copy = beachComparisonCopy[language];
  const thematic = require(`../lib/thematic/${language}.ts`)[`thematic${language[0].toUpperCase() + language.slice(1)}`];
  const items = thematic['caribe-y-playa'].sections.find(s => s.slug === 'destinos-esenciales').items;
  assert.equal(copy.labels.length, 4);
  assert.equal(copy.descriptions.length, 3);
  assert.deepEqual(Object.keys(copy.facts).sort(), [...comparisonSlugs].sort());
  for (const slug of comparisonSlugs) {
    assert.equal(copy.facts[slug].length, 4);
    assert.ok(copy.facts[slug].every(value => typeof value === 'string' && value.trim()));
    const item = items.find(item => item.href === `/playa/${slug}`);
    assert.ok(item?.title && item.photo?.alt, `${language}: missing destination ${slug}`);
    assert.ok(fs.existsSync(path.join(__dirname, '../public', item.photo.src)), `${slug}: missing image`);
  }
}
const page = fs.readFileSync(path.join(__dirname, '../components/content/thematic-page.tsx'), 'utf8');
assert.match(page, /section.slug === "destinos-esenciales"\) return <BeachDestinations/);
assert.ok(!page.includes('<BeachComparison />'));
assert.ok(!page.includes('href="#compara-playas"'));
const component = fs.readFileSync(path.join(__dirname, '../components/sections/beach-comparison.tsx'), 'utf8');
assert.match(component, /open && chosen.length === 2/);
assert.match(component, /\/caribe-y-playa#destinos-esenciales/);
assert.ok(!component.includes('getThematicPage'));
const { toggleBeachSelection, beachSelectionCopy } = require('../lib/home/beach-selection.ts');
for (const language of ['es', 'en', 'de', 'fr']) assert.ok(Object.values(beachSelectionCopy[language]).every(value => value.trim()));
for (const first of comparisonSlugs) for (const second of comparisonSlugs.filter(s => s !== first)) {
  const initial = [];
  const one = toggleBeachSelection(initial, first);
  const two = toggleBeachSelection(one, second);
  assert.deepEqual(initial, []);
  assert.deepEqual(one, [first]);
  assert.deepEqual(two, [first, second]);
  const third = comparisonSlugs.find(s => s !== first && s !== second);
  assert.deepEqual(toggleBeachSelection(two, third), two);
  assert.deepEqual(toggleBeachSelection(two, first), [second]);
  assert.deepEqual(toggleBeachSelection(one, first), []);
}
const articles = fs.readFileSync(path.join(__dirname, '../components/sections/articles.tsx'), 'utf8');
assert.ok(!articles.includes('BeachComparisonLink'), 'Homepage should not render the removed beach promotion');
assert.match(articles, /<PhotoCredits/);
console.log('PASS: single destination catalogue; 56 selection pairs; max two; removal; 4 languages; photos; on-demand panel; no homepage beach promotion.');
