// Read-only discovery of Commons photographs, with licensing and identification.
const queries = ['Hydrochoerus hydrochaeris Venezuela', 'Tremarctos ornatus portrait', 'Icterus icterus Venezuela', 'Ara ararauna Venezuela', 'Phoenicopterus ruber Venezuela', 'Cattleya mossiae flower', 'Cattleya lueddemanniana flower', 'Handroanthus chrysanthus Venezuela tree', 'Samanea saman Venezuela tree', 'Ceiba pentandra Venezuela', 'Mauritia flexuosa Venezuela'];
async function main() {
  for (const query of process.argv.length > 2 ? process.argv.slice(2) : queries) {
    const params = new URLSearchParams({action:'query',format:'json',generator:'search',gsrnamespace:'6',gsrlimit:'3',gsrsearch:query,prop:'imageinfo',iiprop:'url|extmetadata|size',iiurlwidth:'1200'});
    const response = await fetch('https://commons.wikimedia.org/w/api.php?'+params, {headers:{'User-Agent':'MrsVenezuelaNature/1.0 (https://mrsvenezuela.com)'},signal:AbortSignal.timeout(45000)});
    const result = await response.json();
    console.log(JSON.stringify({query, photos:Object.values(result.query?.pages||{}).map(page=>{const image=page.imageinfo?.[0];const m=image?.extmetadata;return {title:page.title,url:image?.thumburl||image?.url,source:image?.descriptionurl,width:image?.width,height:image?.height,author:m?.Artist?.value,license:m?.LicenseShortName?.value,licenseUrl:m?.LicenseUrl?.value,description:m?.ImageDescription?.value};})}));
  }
}
main().catch(error=>{console.error(error);process.exitCode=1;});
