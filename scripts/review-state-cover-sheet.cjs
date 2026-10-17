// Diagnostic only: render the actual 23 local covers, without changing site assets.
const { execFileSync } = require('node:child_process');
const path = require('node:path');
const os = require('node:os');
const sharp = require('sharp');

async function main() {
  const root = path.resolve(__dirname, '..');
  const states = JSON.parse(execFileSync(process.execPath, [path.join(__dirname, 'audit-state-photos.cjs'), '--compact'], { encoding: 'utf8' }));
  const layers = [];
  for (const [index, state] of states.entries()) {
    const left = index % 4 * 320;
    const top = Math.floor(index / 4) * 230;
    const input = await sharp(path.join(root, 'public', state.hero.src)).resize(312, 192, { fit: 'contain', background: '#eee9df' }).toBuffer();
    layers.push({ input, left, top });
    layers.push({ input: Buffer.from(`<svg width="312" height="32"><text x="8" y="23" font-family="sans-serif" font-size="18">${state.slug}</text></svg>`), left, top: top + 192 });
  }
  const output = path.join(os.tmpdir(), 'mrs-venezuela-state-covers-audit.jpg');
  await sharp({ create: { width: 1280, height: Math.ceil(states.length / 4) * 230, channels: 3, background: '#f7f4ec' } }).composite(layers).jpeg({ quality: 90 }).toFile(output);
  console.log(output);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
