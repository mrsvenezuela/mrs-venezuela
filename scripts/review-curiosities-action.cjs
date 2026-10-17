// Download licensed candidates for visual editorial review; does not change site data.
const fs = require('node:fs/promises');
const os = require('node:os');
const path = require('node:path');
const titles = [
  'WKBO4046 triplejump W final Rojas (53173093826).jpg',
  'WKBO4067 triplejump W final Rojas (53173093821).jpg',
];
(async()=>{
  const dir = await fs.mkdtemp(path.join(os.tmpdir(),'curiosities-action-'));
  const query = new URLSearchParams({action:'query',format:'json',prop:'imageinfo',iiprop:'url|extmetadata',titles:titles.map(t=>'File:'+t).join('|')});
  const response = await fetch('https://commons.wikimedia.org/w/api.php?'+query);
  if(!response.ok) throw Error(response.status);
  const data = await response.json();
  for (const [index,title] of titles.entries()) {
    const info = Object.values(data.query.pages).find(p=>p.title==='File:'+title)?.imageinfo?.[0];
    if(!info) continue;
    const license = info.extmetadata.LicenseShortName?.value;
    if(!/^CC BY(-SA)? [234]\.0$/.test(license)) continue;
    console.log(JSON.stringify({title,license,url:info.url}));
    const image = await fetch(info.url, {headers:{'User-Agent':'MrsVenezuelaEditorial/1.0 (mrsvenezuela.com)'}});
    if(!image.ok) throw Error(image.status);
    const destination = path.join(dir,index+'.jpg');
    await fs.writeFile(destination,Buffer.from(await image.arrayBuffer()));
    console.log(JSON.stringify({title,license,destination}));
    await new Promise(resolve=>setTimeout(resolve,3000));
  }
})().catch(error=>{console.error(error);process.exitCode=1});
