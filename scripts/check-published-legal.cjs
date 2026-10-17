const assert = require('node:assert/strict');
const base = process.argv[2];
if (!base) throw Error('Provide the site base URL');
async function check() {
  const notice = await fetch(`${base}/aviso-legal`);
  assert.equal(notice.status, 200);
  const html = await notice.text();
  assert.match(html, /Michell Naranjo/);
  assert.match(html, /Alfred-Althus-Straße 12/);
  assert.match(html, /01067 Dresden/);
  assert.match(html, /mailto:infomrsvenezuela@gmail.com/);
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1);
  assert.match(html, /name="robots" content="noindex, follow"/);
  assert.doesNotMatch(html, /Datos pendientes|Borrador de revisión/);
  const home = await (await fetch(base)).text();
  assert.match(home, /href="\/aviso-legal"/);
  assert.doesNotMatch(home, /href="\/(?:privacidad|terminos)"/);
  for (const draft of ['privacidad','terminos']) {
    assert.equal((await fetch(`${base}/${draft}`)).status,404,`${draft} must stay unpublished`);
  }
  console.log('PASS: public notice, authorized contact data, footer link, noindex and unpublished privacy/terms drafts');
}
check().catch(error=>{console.error(error);process.exitCode=1;});
