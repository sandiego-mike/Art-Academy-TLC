(()=>{
'use strict';
const API='https://commons.wikimedia.org/w/api.php';
const VERIFIED={
  'Vassily_Kandinsky,_1923_-_Composition_8,_huile_sur_toile,_140_cm_x_201_cm,_Musée_Guggenheim,_New_York.jpg':'https://upload.wikimedia.org/wikipedia/commons/4/47/Vassily_Kandinsky%2C_1923_-_Composition_8%2C_huile_sur_toile%2C_140_cm_x_201_cm%2C_Mus%C3%A9e_Guggenheim%2C_New_York.jpg',
  'Albrecht_Dürer_-_Praying_Hands,_1508_-_Google_Art_Project.jpg':'https://upload.wikimedia.org/wikipedia/commons/6/63/Albrecht_D%C3%BCrer_-_Praying_Hands%2C_1508_-_Google_Art_Project.jpg',
  'Igor_Stravinsky_Essay.jpg':'assets/igor-stravinsky-picasso.jpg',
  'The_Calling_of_Saint_Matthew-Caravaggo_(1599-1600).jpg':'https://upload.wikimedia.org/wikipedia/commons/4/48/The_Calling_of_Saint_Matthew-Caravaggo_%281599-1600%29.jpg',
  'Paul_Cézanne_-_Still_Life_with_Apples_-_Google_Art_Project.jpg':'https://upload.wikimedia.org/wikipedia/commons/2/29/Paul_C%C3%A9zanne_-_Still_Life_with_Apples_-_Google_Art_Project.jpg',
  'Giorgio_Morandi_-_Natura_morta_-_Google_Art_Project.jpg':'https://www.italymagazine.com/sites/default/files/inline-images/11-Natura-morta-Giorgio-Morandi.jpg',
  'Jean_Siméon_Chardin_-_Still_Life_with_Attributes_of_the_Arts_-_WGA04784.jpg':'https://upload.wikimedia.org/wikipedia/commons/d/d8/Chardin%2C_Jean-Baptiste_Sim%C3%A9on_-_Still_Life_with_Attributes_of_the_Arts_-_1766.jpg',
  'Las_Meninas_01.jpg':'https://upload.wikimedia.org/wikipedia/commons/9/99/Las_Meninas_01.jpg',
  'Maman_(sculpture).jpg':'https://cdn.sanity.io/images/zcj3i1pm/production/32b4a8b05fb5f4b20f93af2058f6eb7707fe0e51-4000x3000.jpg?auto=format&fit=clip&q=75&w=1600'
};
const CACHE=new Map();
function filenameFrom(src){
  try{
    const u=new URL(src,location.href);
    const m=u.pathname.match(/Special:FilePath\/(.+)$/i);
    return m?decodeURIComponent(m[1]):'';
  }catch(e){return ''}
}
function lessonQuery(img,filename){
  const alt=String(img.alt||'').replace(/\s+by\s+/i,' ');
  const fallback=img.nextElementSibling?.innerText||'';
  const fileText=String(filename||'').replace(/[_-]+/g,' ').replace(/\.[a-z0-9]+$/i,'');
  return [alt,fallback,fileText].filter(Boolean).join(' ').replace(/\s+/g,' ').trim();
}
async function exactCommons(filename){
  if(!filename)return '';
  if(VERIFIED[filename])return VERIFIED[filename];
  const key='file:'+filename;
  if(CACHE.has(key))return CACHE.get(key);
  const url=`${API}?action=query&origin=*&format=json&prop=imageinfo&iiprop=url&iiurlwidth=1600&titles=${encodeURIComponent('File:'+filename)}`;
  const r=await fetch(url,{cache:'force-cache'});
  if(!r.ok)throw new Error('Commons exact lookup failed');
  const data=await r.json();
  const page=Object.values(data?.query?.pages||{})[0];
  const info=page?.imageinfo?.[0];
  const out=info?.thumburl||info?.url||'';
  CACHE.set(key,out);
  return out;
}
async function searchCommons(query){
  if(!query)return '';
  const cleaned=query.replace(/\([^)]*\)/g,' ').replace(/\s+/g,' ').trim();
  const key='search:'+cleaned;
  if(CACHE.has(key))return CACHE.get(key);
  const url=`${API}?action=query&origin=*&format=json&generator=search&gsrnamespace=6&gsrlimit=6&gsrsearch=${encodeURIComponent(cleaned)}&prop=imageinfo&iiprop=url&iiurlwidth=1600`;
  const r=await fetch(url,{cache:'force-cache'});
  if(!r.ok)throw new Error('Commons search failed');
  const data=await r.json();
  const page=Object.values(data?.query?.pages||{}).find(p=>p?.imageinfo?.[0]);
  const info=page?.imageinfo?.[0];
  const out=info?.thumburl||info?.url||'';
  CACHE.set(key,out);
  return out;
}
function reveal(img){
  img.style.display='block';
  img.removeAttribute('hidden');
  const next=img.nextElementSibling;
  if(next){next.hidden=true;next.style.display='none'}
}
function showFallback(img){
  const next=img.nextElementSibling;
  img.style.display='none';
  if(!next)return;
  next.hidden=false;
  next.style.display='grid';
  next.innerHTML='<strong>Artwork reference unavailable</strong><small>This lesson needs a local replacement image.</small>';
}
function loadInto(img,url){
  return new Promise((ok,bad)=>{
    if(!url){bad(new Error('No image URL'));return}
    const probe=new Image();
    probe.referrerPolicy='no-referrer';
    probe.onload=()=>{img.onerror=null;img.referrerPolicy='no-referrer';img.src=url;reveal(img);ok(url)};
    probe.onerror=()=>bad(new Error('Image failed to load'));
    probe.src=url;
  });
}
async function repair(img){
  if(!(img instanceof HTMLImageElement)||img.dataset.artRepair==='working'||img.dataset.artRepair==='done')return;
  const src=img.getAttribute('src')||'';
  const filename=filenameFrom(src);
  if(!filename)return;
  img.dataset.artRepair='working';
  img.referrerPolicy='no-referrer';
  try{
    const exact=await exactCommons(filename);
    if(exact){await loadInto(img,exact);img.dataset.artRepair='done';return}
  }catch(e){}
  try{
    const searched=await searchCommons(lessonQuery(img,filename));
    await loadInto(img,searched);
    img.dataset.artRepair='done';
  }catch(e){
    img.dataset.artRepair='failed';
    showFallback(img);
  }
}
function scan(root=document){
  root.querySelectorAll?.('img[src*="commons.wikimedia.org/wiki/Special:FilePath/"]').forEach(repair);
}
const observer=new MutationObserver(muts=>{
  for(const m of muts)for(const n of m.addedNodes){
    if(n.nodeType!==1)continue;
    if(n.matches?.('img[src*="commons.wikimedia.org/wiki/Special:FilePath/"]'))repair(n);
    scan(n);
  }
});
function start(){scan();observer.observe(document.documentElement,{childList:true,subtree:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
window.repairArtAcademyImages=()=>scan();
})();