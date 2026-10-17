const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const sharp = require('sharp');
require.extensions['.ts'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText,file);
const {curiosityCopy,storyIds,sources,universeWinners} = require('../lib/curiosities/content.ts');
const {languages} = require('../lib/i18n.ts');
const {discoverCards} = require('../lib/home/discover.ts');
const photos = require('../lib/curiosities/photos.json');
const {editorialCopy,editorialSections,additionalPhotoCredits} = require('../lib/curiosities/editorial.ts');
const {albumCopy,albumSections,albumGroups,newStoryIds,newSources} = require('../lib/curiosities/album.ts');
(async()=>{
  assert.equal(storyIds.length,16);
  assert.equal(newStoryIds.length,4);
  assert.ok(!newStoryIds.includes('mapoyo'));
  assert.deepEqual([...Object.values(albumGroups).flat(),'miss','catatumbo'].sort(),[...storyIds,...newStoryIds].sort());
  assert.deepEqual(albumSections,['talento','records','historias','tradiciones','reinados']);
  assert.deepEqual(Object.keys(albumCopy).sort(),languages.map(l=>l.code).sort());
  for (const [lang,copy] of Object.entries(albumCopy)) {
    assert.equal(copy.headings.length,5);
    assert.equal(copy.navigation.length,5);
    assert.deepEqual(Object.keys(copy.stories).sort(),[...newStoryIds].sort());
    assert.deepEqual(Object.keys(copy.questions).sort(),Object.keys(albumCopy.es.questions).sort());
    for (const id of newStoryIds) {
      assert.ok(copy.stories[id].title && copy.stories[id].text && copy.stories[id].detail,lang+': '+id);
      assert.match(newSources[id].href,/^https:\/\//);
    }
  }
  assert.equal(universeWinners.length,7);
  assert.deepEqual(Object.keys(curiosityCopy).sort(),languages.map(l=>l.code).sort());
  for (const [lang,copy] of Object.entries(curiosityCopy)) {
    assert.deepEqual(Object.keys(copy.stories).sort(),[...storyIds].sort());
    assert.equal(copy.sections.length,3); assert.equal(copy.descriptions.length,3); assert.equal(copy.labels.length,3);
    for (const [key,value] of Object.entries(copy)) if(typeof value==='string') assert.ok(value.trim(),lang+': '+key);
    for(const id of storyIds) {
      const story=copy.stories[id];
      assert.ok(story.title && story.text && story.detail);
      assert.ok(story.text.length<340,lang+': keep '+id+' concise');
      if (['miss','yulimar','cabrera','coromoto'].includes(id)) assert.ok(story.extra,lang+': expanded story');
      if (id === 'cabrera') {
        assert.match(story.text,/Maracay/);
        for (const figure of ['.330','44','139','1967']) assert.ok(story.detail.includes(figure),lang+': Triple Crown '+figure);
        assert.ok(story.extra.includes('2021') && story.extra.includes('2022'));
      }
      if (id === 'coromoto') {
        assert.ok(story.text.includes('1991') && story.text.includes('Guinness') && story.text.includes('AFP'));
        assert.ok(story.detail.includes('2010') && story.detail.includes('860'));
      }
      if (id === 'miss') assert.deepEqual(story.highlights,universeWinners);
      assert.match(sources[id].href,/^https:\/\//);
      if(photos[id]) assert.ok(story.caption || editorialCopy[lang].captions[id]);
    }
  }
  assert.equal(Object.keys(photos).length,14);
  assert.ok(!newStoryIds.includes('aula'));
  assert.ok(!photos.aula);
  assert.equal(photos.yulimar.src, '/images/curiosidades/yulimar-salto-budapest-2023.jpg');
  assert.equal(photos.cabrera.src, '/images/curiosidades/cabrera-bateando-2012.jpg');
  assert.equal(photos.casabe.src, '/images/curiosidades/casabe-puerto-ayacucho.jpg');
  assert.equal(photos.casabe.author, 'Luisovalles');
  for (const copy of Object.values(curiosityCopy)) {
    assert.ok(copy.stories.casabe.caption.includes('Puerto Ayacucho'));
    assert.ok(!copy.stories.casabe.caption.includes('Camaguán'));
  }
  for(const [id,p] of Object.entries(photos)) {
    assert.ok(p.author && p.license && p.licenseUrl && p.href);
    assert.match(p.href,/^https:\/\/commons.wikimedia.org\/wiki\/File:/);
    const info=await sharp(path.join(__dirname,'../public',p.src)).metadata();
    const archival = ['moran','convit','cruz','abreu'].includes(id);
    assert.ok(info.width>=(archival?144:600) && info.height>=(archival?160:400),id+': sufficient resolution for displayed size');
  }
  assert.deepEqual(editorialSections,['talento','arte-musica','records','historias','pais']);
  for(const lang of languages.map(l=>l.code)) {
    assert.equal(editorialCopy[lang].headings.length,5);
    assert.equal(editorialCopy[lang].navigation.length,5);
    assert.equal(Object.keys(editorialCopy[lang].captions).length,6);
    for (const key of ['musicians','crowns','backToBack']) assert.ok(editorialCopy[lang][key]);
  }
  for(const p of Object.values(additionalPhotoCredits)) {
    assert.ok(p.author && p.license && p.licenseUrl && p.href);
    assert.ok(fs.existsSync(path.join(__dirname,'../public',p.src)));
  }
  const card=discoverCards.find(c=>c.id==='curiosidades');
  assert.equal(card.available,true); assert.equal(card.href,'/curiosidades');
  assert.ok(fs.readFileSync(path.join(__dirname,'../app/sitemap.ts'),'utf8').includes('"/curiosidades"'));
  const component = fs.readFileSync(path.join(__dirname, '../components/content/curiosities-page.tsx'),'utf8');
  const {topStoryIds,topCopy,storyAnchor,topSources} = require('../lib/curiosities/top.ts');
  assert.equal(topStoryIds.length,10);
  assert.equal(new Set(topStoryIds).size,10);
  assert.equal(new Set(topStoryIds.map(storyAnchor)).size,10);
  for (const lang of languages.map(l=>l.code)) {
    assert.ok(topCopy[lang].title.includes('10'));
    assert.deepEqual(Object.keys(topCopy[lang].stories).sort(),[...topStoryIds].sort());
    for (const id of topStoryIds) {
      const fact = topCopy[lang].stories[id];
      assert.ok(fact.title && fact.text);
      assert.ok(fact.text.split(/\s+/).length <= 50, lang+': keep '+id+' below 50 words');
      assert.ok(photos[id]);
      assert.match(topSources[id].href,/^https:\/\//);
    }
  }
  assert.ok(component.includes('topStoryIds.map'));
  assert.ok(component.includes('{story.text}'));
  assert.ok(!component.includes('{story.detail}'));
  assert.ok(!component.includes('{story.extra}'));
  assert.ok(!component.includes('StoryText'));
  assert.ok(component.includes('data-miss-portraits'));
  assert.ok(component.includes('curiosities-editorial.module.css'));
  assert.ok(component.includes('data-layout={layout}'));
  assert.ok(!component.includes('const tones'));
  const layout = fs.readFileSync(path.join(__dirname, '../components/content/curiosities-editorial.module.css'),'utf8');
  assert.ok(layout.includes('@media (max-width: 767px)'));
  assert.ok(layout.includes('.reverse .visual'));
  assert.ok(layout.includes('.panorama .storyBody'));
  assert.ok(layout.includes('.paired'));
  assert.ok(!component.includes('IntersectionObserver'));
  assert.ok(!component.includes('onClick={surprise}'));
  assert.ok(component.includes('{copy.intro}'));
  assert.ok(component.includes('Photograph by Christopher Peterson.'));
  assert.ok(component.includes('https://www.christopherpeterson.com/'));
  const page = fs.readFileSync(path.join(__dirname,'../app/curiosidades/page.tsx'),'utf8');
  assert.ok(page.includes('Top 10 curiosidades de Venezuela'));
  assert.ok(!page.includes('20 curiosidades'));
  assert.ok(page.includes('numberOfItems: topStoryIds.length'));
  console.log('PASS: 10 selected facts in 4 languages, at most 50 words each, 10 unique anchors, no archive biographies rendered, licensed photographs and matching metadata.');

})().catch(e=>{console.error(e);process.exitCode=1;});
