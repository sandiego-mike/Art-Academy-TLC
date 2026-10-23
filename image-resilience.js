(()=>{
'use strict';
const API='https://commons.wikimedia.org/w/api.php';
const LOCAL={
  'Igor_Stravinsky_Essay.jpg':'assets/igor-stravinsky-picasso.jpg'
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
  const hero=img.closest('.dialog-hero');
  const heroText=hero?hero.innerText:'';
  const fallback=img.nextElementSibling?.innerText||'';
  const fileText=String(filename||'').replace(/[_-]+/g,' ').replace(/\.[a-z0-9]+$/i,'');
  return [alt,fallback,heroText,fileText].filter(Boolean).join(' ').replace(/\s+/g,' ').trim();
}
async function exactCommons(filename){
  if(!filename)return '';
  if(LOCAL[filename])return LOCAL[filename];
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
  const cleaned=query.replace(/\([^)]*\)/g,' ').replace(/\bweek\s+\d+\b/gi,' ').replace(/\s+/g,' ').trim();
  const key='search:'+cleaned;
  if(CACHE.has(key))return CACHE.get(key);
  const url=`${API}?action=query&origin=*&format=json&generator=search&gsrnamespace=6&gsrlimit=8&gsrsearch=${encodeURIComponent(cleaned)}&prop=imageinfo&iiprop=url&iiurlwidth=1600`;
  const r=await fetch(url,{cache:'force-cache'});
  if(!r.ok)throw new Error('Commons search failed');
  const data=await r.json();
  const pages=Object.values(data?.query?.pages||{}).filter(p=>p?.imageinfo?.[0]);
  const tokens=cleaned.toLowerCase().split(/[^a-z0-9]+/).filter(t=>t.length>3);
  pages.sort((a,b)=>{
    const score=p=>tokens.reduce((n,t)=>n+(String(p.title||'').toLowerCase().includes(t)?1:0),0);
    return score(b)-score(a);
  });
  const info=pages[0]?.imageinfo?.[0];
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
  next.innerHTML='<strong>Artwork reference unavailable</strong><small>Please reopen this week after refreshing the page.</small>';
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
  img.decoding='async';
  try{
    const exact=await exactCommons(filename);
    if(exact){await loadInto(img,exact);img.dataset.artRepair='done';return}
  }catch(e){}
  try{
    const query=lessonQuery(img,filename);
    const searched=await searchCommons(query);
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