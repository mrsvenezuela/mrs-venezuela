// Curated species photographs. Source metadata is retained alongside every asset.
const fs = require('node:fs/promises');
const path = require('node:path');
const sharp = require('sharp');
const chosen = {
  capybara:'Capybara - Chigüire (Hydrochoerus hydrochaeris) (9722123353).jpg',
  bear:'Tremarctos ornatus (portrait).jpg',
  troupial:'Venezuelan Troupial - Icterus icterus.jpg',
  macaw:'Ara ararauna -Parque del Este, Caracas, Venezuela -eating-8.jpg',
  flamingo:'American Flamingo Flamenco Phoenicopterus Ruber (67375537).jpeg',
  orchid:'Cattleya mossiae tipo.jpg',
  cattleya:'Cattleya lueddemanniana Orchi 04.jpg',
  araguaney:'Araguaney hermoso.JPG',
  saman:'Samán (Samanea saman) - Punto Fijo, Venezuela.jpg',
  ceiba:'Ceiba pentandra La Lagunita 2013 001.jpg',
  moriche:'Gran Sabana (2004) 06.jpg',
  turtle:'Tucacas04012422TortugaCareyEretmochelysImbricata.JPG',
  dolphin:'Boto-cor-de-rosa (Inia geoffrensis).jpg',
  parrotfish:'Stoplight-parrotfish.jpg',
  coral:'Acropora palmata 01 Pickles Reef 20230713.jpg',
};
const headers = {'User-Agent':'MrsVenezuelaNature/1.0 (https://mrsvenezuela.com)'};
const clean = value => (value||'').replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
async function get(url) {
  const response=await fetch(url,{headers,signal:AbortSignal.timeout(60000)});
  if(!response.ok) throw new Error(`HTTP ${response.status}: ${url}`);
  return response;
}
async function main() {
  const dir=path.resolve(__dirname,'../public/images/nature');
  await fs.mkdir(dir,{recursive:true});
  const requested=process.argv.slice(2);
  for(const id of requested) if(!chosen[id]) throw new Error('Unknown species '+id);
  const selected=Object.entries(chosen).filter(([id])=>!requested.length||requested.includes(id));
  const params=new URLSearchParams({action:'query',format:'json',prop:'imageinfo',iiprop:'url|extmetadata',titles:selected.map(([,title])=>'File:'+title).join('|')});
  const data=await (await get('https://commons.wikimedia.org/w/api.php?'+params)).json();
  const records=requested.length?JSON.parse(await fs.readFile(path.resolve(__dirname,'../lib/nature/photos.json'),'utf8')):{};
  for(const [id,title] of selected) {
    const info=Object.values(data.query.pages).find(page=>page.title==='File:'+title)?.imageinfo?.[0];
    if(!info) throw new Error('Missing source '+title);
    const m=info.extmetadata;
    if(!/^(CC BY(-SA)? [234]\.0|CC0)$/.test(m.LicenseShortName?.value)) throw new Error('Unapproved license '+title);
    const filename=id==='saman'?'saman-punto-fijo.jpg':id==='dolphin'?'dolphin-pink.jpg':id+'.jpg';
    const destination=path.join(dir,filename);
    const bytes=Buffer.from(await (await get(info.url)).arrayBuffer());
    await sharp(bytes).rotate().resize({width:1440,withoutEnlargement:true}).jpeg({quality:86,mozjpeg:true}).toFile(destination);
    records[id]={src:'/images/nature/'+filename,author:clean(m.Artist?.value),license:m.LicenseShortName.value,licenseUrl:m.LicenseUrl.value,href:info.descriptionurl,description:clean(m.ImageDescription?.value)};
    // This older Commons file credits PSE in its description and Pedrosanch as uploader.
    if(id==='turtle') records[id].author='PSE / Pedrosanch';
    console.log(id+': '+records[id].license);
  }
  records.ibis={src:'/images/commons/corocoro-rojo-manglar-cuare.jpg',author:'Fernando Flores',license:'CC BY-SA 3.0',licenseUrl:'https://creativecommons.org/licenses/by-sa/3.0/',href:'https://commons.wikimedia.org/wiki/File:Scarlet_Ibis,_Corocoro_Colorado_(Eudocimus_ruber).jpg',description:'Scarlet ibis, Cuare, Venezuela. Existing project asset.'};
  await fs.writeFile(path.resolve(__dirname,'../lib/nature/photos.json'),JSON.stringify(records,null,2)+'\n');
  console.log('Saved '+Object.keys(records).length+' licensed species photographs.');
}
main().catch(error=>{console.error(error);process.exitCode=1;});
