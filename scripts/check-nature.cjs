const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const sharp = require('sharp');
require.extensions['.ts'] = (module, filename) => {
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
  module._compile(output.outputText, filename);
};
const root = path.resolve(__dirname, '..');
const { natureCopy } = require('../lib/nature/copy.ts');
const { natureDetails, curiositySources } = require('../lib/nature/details.ts');
const { languages } = require('../lib/i18n.ts');
const { natureGroups, scientificNames } = require('../lib/nature/species.ts');
const { discoverCards } = require('../lib/home/discover.ts');
const photos = require('../lib/nature/photos.json');
async function main() {
  for (const { code } of languages) assert.ok(natureCopy[code], code + ' page copy');
  const ids = natureGroups.flatMap(group => group.species);
  assert.equal(new Set(ids).size, 16);
  assert.deepEqual(Object.keys(photos).sort(), [...ids].sort());
  assert.deepEqual(natureGroups.find(group => group.id === 'agua').species, ['turtle', 'dolphin', 'parrotfish', 'coral']);
  for (const [language, copy] of Object.entries(natureCopy)) {
    const details = natureDetails[language];
    assert.ok(details.habitatLabel && details.didYouKnow);
    assert.deepEqual(Object.keys(details.habitats).sort(), [...ids].sort());
    for (const habitat of Object.values(details.habitats)) assert.ok(habitat.trim());
    assert.deepEqual(Object.keys(details.facts).sort(), ['agua', 'arboles', 'fauna']);
    for (const fact of Object.values(details.facts)) assert.ok(fact.title.trim() && fact.text.trim());
    assert.equal(copy.sections.length, natureGroups.length);
    assert.equal(copy.descriptions.length, natureGroups.length);
    assert.deepEqual(Object.keys(copy.species).sort(), [...ids].sort());
    for (const id of ids) {
      assert.ok(copy.species[id].name.trim());
      assert.ok(copy.species[id].text.trim());
      assert.ok(scientificNames[id]);
    }
    for (const field of ['title', 'eyebrow', 'intro', 'back', 'index', 'careTitle', 'care', 'sources', 'photoNote', 'licenses']) assert.ok(copy[field].trim(), language + ': ' + field);
    assert.ok(!JSON.stringify(copy).includes('Canaima'));
  }
  for (const id of ids) {
    const photo = photos[id];
    assert.ok(photo.author && photo.license && photo.licenseUrl && photo.href);
    assert.match(photo.href, /^https:\/\/commons.wikimedia.org\/wiki\/File:/);
    const metadata = await sharp(path.join(root, 'public', photo.src)).metadata();
    assert.ok(metadata.width >= 600 && metadata.height >= 400, id + ' image dimensions');
  }
  const card = discoverCards.find(card => card.id === 'naturaleza');
  assert.equal(curiositySources.length, 3);
  assert.equal(card.available, true);
  assert.equal(card.href, '/naturaleza');
  console.log(`PASS: ${languages.length} active languages, ${ids.length} identified species, ${ids.length} licensed images, complete page copy, homepage link.`);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
