// Read-only inventory of state-guide images and their existing source credits.
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');
const Module = require('node:module');
const root = path.resolve(__dirname, '..');
const resolve = Module._resolveFilename;
Module._resolveFilename = function (name, parent, ...args) {
  return resolve.call(this, name.startsWith('@/') ? path.join(root, name.slice(2)) : name, parent, ...args);
};
require.extensions['.ts'] = (module, file) => module._compile(ts.transpileModule(fs.readFileSync(file, 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
}).outputText, file);
const { getStateGuide, stateGuideSlugs } = require('../lib/states/index.ts');
function collect(value, key = '', output = []) {
  if (!value || typeof value !== 'object') return output;
  if (typeof value.src === 'string') output.push({ section: key, ...value, exists: fs.existsSync(path.join(root, 'public', value.src)) });
  else for (const [k, v] of Object.entries(value)) collect(v, key ? `${key}.${k}` : k, output);
  return output;
}
const report = stateGuideSlugs.map(slug => {
  const guide = getStateGuide(slug);
  return { slug, hero: guide.hero, photos: collect(guide), credits: guide.credits || [] };
});
console.log(JSON.stringify(report, null, process.argv.includes('--compact') ? 0 : 2));
