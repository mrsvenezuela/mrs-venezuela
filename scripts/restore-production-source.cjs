// Restore exact deployment sources into a NEW staging directory, never the workspace.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');
const [cli, deployment, destination, ...candidates] = process.argv.slice(2);
if (!cli || !deployment || !destination || fs.existsSync(destination)) throw Error('Specify CLI, deployment and a new destination');
function api(endpoint) {
  return JSON.parse(execFileSync(process.execPath, [cli, 'api', endpoint, '--scope', 'mrs-venezuela'], {encoding:'utf8',maxBuffer:32*1024*1024,windowsHide:true}));
}
const tree = api(`/v6/deployments/${deployment}/files`);
const source = tree.find(item => item.name === 'src' && item.type === 'directory');
if (!source) throw Error('No source tree');
fs.mkdirSync(destination, {recursive:true});
let copied=0, downloaded=0;
function walk(nodes, prefix='') {
  for (const item of nodes) {
    const relative=path.join(prefix,item.name);
    const target=path.resolve(destination,relative);
    if (!target.startsWith(path.resolve(destination)+path.sep)) throw Error('Unsafe path');
    if (item.type==='directory') {walk(item.children||[],relative);continue;}
    if(item.type!=='file') throw Error('Unexpected source type');
    let data;
    for(const base of candidates) {
      const file=path.join(base,relative);
      if(!fs.existsSync(file)) continue;
      const bytes=fs.readFileSync(file);
      if(crypto.createHash('sha1').update(bytes).digest('hex')===item.uid) {data=bytes;copied++;break;}
    }
    if(!data) {const result=api(`/v8/deployments/${deployment}/files/${item.uid}`);data=Buffer.from(result.data,'base64');downloaded++;}
    if(crypto.createHash('sha1').update(data).digest('hex')!==item.uid) throw Error(`Hash mismatch ${relative}`);
    fs.mkdirSync(path.dirname(target),{recursive:true});
    fs.writeFileSync(target,data,{flag:'wx'});
  }
}
walk(source.children);
console.log(JSON.stringify({destination,copied,downloaded,verified:copied+downloaded}));
