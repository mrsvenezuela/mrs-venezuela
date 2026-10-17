// Reproducible import of explicitly licensed photographs, with provenance.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const chosen = {
  herrera: 'Carolina Herrera.jpg',
  casabe: 'Casabe-1.jpg',
  miss: 'Miss Universe 2009 prepares to give up her crown cropped.jpg',
  dayana: 'Miss Universe 2008, Dayana Mendoza.jpg',
  coromoto: 'Full range of Heladería Coromotos Ice-cream flavours.jpg',
  moran: 'FernadezMoran.jpg',
  convit: 'Dr. Jacinto Convit.png',
  cruz: 'Retrato Cruz-Diez France 2013.jpg',
  yulimar: 'WKBO4067 triplejump W final Rojas (53173093821).jpg',
  cabrera: 'Miguel Cabrera batting against Angels (2012-09-09).JPG',
  orchestra: 'Orquestra Simon Bolivar 07042013.jpg',
  carreno: 'Concert pianist Teresa Carreno (SAYRE 18819).jpg',
  abreu: 'Antonio ABREU.jpg',
  catatumbo: 'Catatumbo Lightning - Rayo del Catatumbo.jpg',
};
const clean = s => (s || '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
async function get(url) {
  const r = await fetch(url, {headers: {'User-Agent': 'MrsVenezuelaEditorial/1.0 (mrsvenezuela.com)'}, signal: AbortSignal.timeout(45000)});
  if (!r.ok) throw Error(`${r.status}: ${url}`);
  return r;
}
(async () => {
  const requested = process.argv.slice(2);
  for (const id of requested) if (!chosen[id]) throw Error('Unknown photo: '+id);
  const selected = Object.entries(chosen).filter(([id])=>!requested.length || requested.includes(id));
  const p = new URLSearchParams({action:'query',format:'json',prop:'imageinfo',iiprop:'url|extmetadata',titles:selected.map(([,t])=>'File:'+t).join('|')});
  const data = await (await get('https://commons.wikimedia.org/w/api.php?'+p)).json();
  const dir = path.resolve(__dirname, '../public/images/curiosidades');
  await fs.mkdir(dir, {recursive:true});
  const photos = requested.length ? JSON.parse(await fs.readFile(path.resolve(__dirname,'../lib/curiosities/photos.json'),'utf8')) : {};
  for (const [id, title] of selected) {
    const info = Object.values(data.query.pages).find(p=>p.title==='File:'+title)?.imageinfo?.[0];
    if (!info) throw Error('Missing '+title);
    const m = info.extmetadata;
    const license = m.LicenseShortName?.value;
    if (!/^(CC BY(-SA)? [234]\.0|CC BY-SA 2.0 de|CC0|Public domain)$/.test(license)) throw Error('Review license: '+title);
    const basename = id === 'cabrera' ? 'cabrera-bateando-2012.jpg' : id === 'yulimar' ? 'yulimar-salto-budapest-2023.jpg' : id+'.jpg';
    const imageSrc = id === 'casabe' ? '/images/curiosidades/casabe-puerto-ayacucho.jpg' : '/images/curiosidades/'+basename;
    const destination = path.resolve(__dirname, '../public'+imageSrc);
    try { await fs.access(destination); } catch {
      const original = new URL(info.url); original.search = '';
      const bytes = Buffer.from(await (await get(original.href)).arrayBuffer());
      await sharp(bytes).rotate().resize({width:1400,withoutEnlargement:true}).jpeg({quality:86}).toFile(destination);
      await new Promise(resolve=>setTimeout(resolve,1500));
    }
    photos[id] = {src:imageSrc,author:clean(m.Artist?.value),license,licenseUrl:m.LicenseUrl?.value || 'https://creativecommons.org/publicdomain/mark/1.0/',href:info.descriptionurl,description:clean(m.ImageDescription?.value)};
    console.log(id+': '+license);
  }
  await fs.mkdir(path.resolve(__dirname,'../lib/curiosities'),{recursive:true});
  await fs.writeFile(path.resolve(__dirname,'../lib/curiosities/photos.json'), JSON.stringify(photos,null,2)+'\n');
})().catch(e=>{console.error(e);process.exitCode=1;});
