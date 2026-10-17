import fs from "node:fs/promises";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();
const targets = ["en", "de", "fr", "zh-CN"];
const output = path.join(root, "lib", "site-translations.json");
const normalize = (value) => value.replace(/\s+/g, " ").trim();
const looksLikeCopy = (value) => {
  const text = normalize(value);
  if (text.length < 2 || !/[A-Za-zÁÉÍÓÚÑáéíóúñ¿¡]/.test(text)) return false;
  if (/^(https?:|\/|#|\.|@)/.test(text)) return false;
  if (/^[a-z0-9_./:@%?=&-]+$/i.test(text) && !/^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]{3,}$/.test(text)) return false;
  if (/^(bg-|text-|mt-|mb-|py-|px-|grid|flex|rounded|border|shadow|transition|hover:|md:|lg:)/.test(text)) return false;
  return !text.includes("className") && text.length <= 900;
};

async function sourceFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const found = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...await sourceFiles(full));
    else if (/\.(tsx?|jsx?)$/.test(entry.name)) found.push(full);
  }
  return found;
}

const phrases = new Set();
for (const sourceRoot of ["app", "components", "lib"]) {
  for (const file of await sourceFiles(path.join(root, sourceRoot))) {
    const source = await fs.readFile(file, "utf8");
    const tree = ts.createSourceFile(file, source, ts.ScriptTarget.Latest, true, file.endsWith("x") ? ts.ScriptKind.TSX : ts.ScriptKind.TS);
    const visit = (node) => {
      if (ts.isJsxText(node) || ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) {
        const text = normalize(node.text);
        if (looksLikeCopy(text)) phrases.add(text);
      }
      ts.forEachChild(node, visit);
    };
    visit(tree);
  }
}

let catalog = {};
try { catalog = JSON.parse(await fs.readFile(output, "utf8")); } catch {}
for (const phrase of phrases) catalog[phrase] ??= {};

async function translate(text, target) {
  const url = new URL("https://translate.googleapis.com/translate_a/single");
  url.search = new URLSearchParams({ client: "gtx", sl: "es", tl: target, dt: "t", q: text });
  for (let attempt = 0; attempt < 4; attempt++) {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data[0].map((part) => part[0]).join("");
    }
    await new Promise((resolve) => setTimeout(resolve, 500 * (attempt + 1)));
  }
  throw new Error(`Translation failed: ${target} ${text.slice(0, 60)}`);
}

const jobs = [];
for (const phrase of phrases) for (const target of targets) {
  const key = target === "zh-CN" ? "zh" : target;
  if (!catalog[phrase][key]) jobs.push({ phrase, target, key });
}
let cursor = 0;
async function worker() {
  while (cursor < jobs.length) {
    const job = jobs[cursor++];
    catalog[job.phrase][job.key] = await translate(job.phrase, job.target);
    if (cursor % 50 === 0) {
      await fs.writeFile(output, JSON.stringify(catalog, null, 2) + "\n");
      process.stdout.write(`Translated ${cursor}/${jobs.length}\n`);
    }
  }
}
await Promise.all(Array.from({ length: 8 }, worker));
await fs.writeFile(output, JSON.stringify(catalog, null, 2) + "\n");
console.log(`Saved ${phrases.size} phrases (${jobs.length} new translations).`);
