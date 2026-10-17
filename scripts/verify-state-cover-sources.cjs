// Read-only comparison of local cover pixels with their credited Commons sources.
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const sharp = require('sharp');
const root = path.resolve(__dirname, '..');
const headers = { 'User-Agent': 'MrsVenezuelaPhotoAudit/1.0 (https://mrsvenezuela.com)' };
const normalize = title => decodeURIComponent(title).replaceAll('_', ' ');
async function get(url) {
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(45000) });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response;
}
async function main() {
  const states = JSON.parse(execFileSync(process.execPath, [path.join(__dirname, 'audit-state-photos.cjs'), '--compact'], { encoding: 'utf8' }));
  const candidates = states.filter(s => s.slug !== 'trujillo').map(s => ({ ...s, title: normalize(s.credits[0].href.split('/wiki/')[1]) }));
  const trujillo = states.find(s => s.slug === 'trujillo');
  for (const title of ['File:Valera.JPG', 'File:Valera con zoom desde Carvajal.JPG']) candidates.push({ ...trujillo, title });
  const query = new URLSearchParams({ action: 'query', format: 'json', prop: 'imageinfo', iiprop: 'url|extmetadata', titles: candidates.map(s => s.title).join('|') });
  const metadata = await (await get(`https://commons.wikimedia.org/w/api.php?${query}`)).json();
  const pages = Object.values(metadata.query.pages);
  for (let start = 0; start < candidates.length; start += 3) {
    await Promise.all(candidates.slice(start, start + 3).map(async state => {
      try {
        const page = pages.find(p => normalize(p.title) === state.title);
        const info = page.imageinfo[0];
        const bytes = Buffer.from(await (await get(info.url)).arrayBuffer());
        const sample = input => sharp(input).rotate().resize(32, 32, { fit: 'fill' }).removeAlpha().raw().toBuffer();
        const [local, source] = await Promise.all([sample(path.join(root, 'public', state.hero.src)), sample(bytes)]);
        const difference = local.reduce((sum, value, i) => sum + Math.abs(value - source[i]), 0) / local.length;
        console.log(JSON.stringify({ state: state.slug, title: state.title, meanPixelDifference: Number(difference.toFixed(3)), description: info.extmetadata.ImageDescription?.value, author: info.extmetadata.Artist?.value, license: info.extmetadata.LicenseShortName?.value, source: info.descriptionurl }));
      } catch (error) {
        console.log(JSON.stringify({ state: state.slug, title: state.title, error: error.message }));
      }
    }));
  }
}
main().catch(error => { console.error(error); process.exitCode = 1; });
