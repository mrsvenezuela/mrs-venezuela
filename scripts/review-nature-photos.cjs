const fs=require('node:fs');
const os=require('node:os');
const path=require('node:path');
const sharp=require('sharp');
async function main(){
  const photos=Object.entries(JSON.parse(fs.readFileSync(path.join(__dirname,'../lib/nature/photos.json'))));
  const layers=await Promise.all(photos.map(async([id,p],i)=>({input:await sharp(path.join(__dirname,'../public',p.src)).resize(300,215,{fit:'cover'}).extend({bottom:30,background:'#fff'}).composite([{input:Buffer.from(`<svg width="300" height="30"><text x="10" y="22" font-size="17">${id}</text></svg>`),top:215,left:0}]).jpeg().toBuffer(),top:Math.floor(i/4)*245,left:i%4*300})));
  const output=path.join(os.tmpdir(),'nature-contact.jpg');
  await sharp({create:{width:1200,height:Math.ceil(photos.length/4)*245,channels:3,background:'#fff'}}).composite(layers).jpeg().toFile(output);
  console.log(output);
}
main().catch(error=>{console.error(error);process.exitCode=1;});
