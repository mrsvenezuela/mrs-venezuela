// Scoped, reproducible Commons imports. Never overwrites other site photographs.
import { mkdir, writeFile } from 'node:fs/promises';
const entries = [
  ['choroni-puerto-colombia', 'Puerto Colombia (4143999586).jpg'],
  ['cuyagua-costa', 'Playa de Cuyagua 04.jpg'],
  ['tortuga-caldera', 'Playa caldera la tortuga venezuela A.jpg'],
  ['tortuga-caldera-mar', 'Playa caldera la tortuga venezuela B.jpg'],
];
const directory = new URL('../public/images/beach-guides/', import.meta.url);
await mkdir(directory, { recursive: true });
const records = [];
for (const [id, title] of entries) {
  const api = new URL('https://commons.wikimedia.org/w/api.php');
  api.search = new URLSearchParams({action:'query',format:'json',prop:'imageinfo',iiprop:'url|extmetadata',titles:`File:${title}`});
  const result = await (await fetch(api)).json();
  const info = Object.values(result.query.pages)[0].imageinfo?.[0];
  if (!info) throw new Error(`Missing Commons file: ${title}`);
  const metadata = info.extmetadata;
  if (!/^CC (BY|0)/.test(metadata.LicenseShortName.value)) throw new Error(`Review license: ${title}`);
  const response = await fetch(info.url);
  if (!response.ok || !response.headers.get('content-type')?.startsWith('image/')) throw new Error(`Download failed: ${title}`);
  await writeFile(new URL(`${id}.jpg`, directory), Buffer.from(await response.arrayBuffer()));
  records.push({id,title,source:info.descriptionurl,author:metadata.Artist.value.replace(/<[^>]*>/g,''),license:metadata.LicenseShortName.value,licenseUrl:metadata.LicenseUrl.value,description:metadata.ImageDescription.value,changes:'Original file; responsive CSS crop in the guide.',checked:'2026-09-29'});
  console.log(id, metadata.LicenseShortName.value);
}
await writeFile(new URL('sources.json', directory), JSON.stringify(records,null,2)+'\n');
