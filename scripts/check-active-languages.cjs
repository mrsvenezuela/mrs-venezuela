const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => {
  const output = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
  module._compile(output.outputText, filename);
};
const { languages, resolveActiveLanguage, translations } = require('../lib/i18n.ts');
assert.deepEqual(languages.map(({ code }) => code), ['es', 'de', 'en', 'fr']);
for (const { code } of languages) {
  assert.equal(resolveActiveLanguage(code), code);
  assert.ok(translations[code]);
}
for (const saved of ['zh', '', 'unknown', null, undefined, 'constructor', '__proto__']) {
  assert.equal(resolveActiveLanguage(saved), 'es');
}
console.log('PASS: only ES/DE/EN/FR are active; retired Chinese and invalid preferences fall back to Spanish.');
