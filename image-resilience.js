(()=>{
'use strict';
const API='https://commons.wikimedia.org/w/api.php';
const LOCAL={
  'Igor_Stravinsky_Essay.jpg':'assets/igor-stravinsky-picasso.jpg'
};
function filenameFrom(src){
  try{
    const u=new URL(src,location.href);
    const m=u.pathname.match(/Special:FilePath\/(.+)$/i);
    return m?decodeURIComponent(m[1]):'';
  }catch(e){return ''}
}
async function resolveCommons(filename){
  if(!filename)return '';
  if(LOCAL[filename])return LOCAL[filename];
  const url=`${API}?action=query&origin=*&format=json&prop=imageinfo&iiprop=url&iiurlwidth=1400&titles=${encodeURIComponent('File:'+filename)}`;
  const r=await fetch(url,{cache:'force-cache'});
  if(!r.ok)throw new Error('Commons lookup failed');
  const data=await r.json();
  const page=Object.values(data?.query?.pages||{})[0];
  const info=page?.imageinfo?.[0];
  return info?.thumburl||info?.url||'';
}
function reveal(img){
  img.style.display='block';
  const next=img.nextElementSibling;
  if(next){next.hidden=true;next.style.display='none'}
}
function showUsefulFallback(img,filename){
  const next=img.nextElementSibling;
  if(!next)return;
  img.style.display='none';
  next.hidden=false;
  next.style.display='grid';
  if(!next.querySelector('.art-open-link')){
    const a=document.createElement('a');
    a.className='art-open-link';
    a.href=filename?`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(filename).replace(/%2F/g,'/')}`:'#';
    a.target='_blank';a.rel='noopener';
    a.textContent='Open artwork reference';
    a.style.cssText='display:inline-block;margin-top:12px;font:600 13px DM Sans,sans-serif;color:#1e1d1a;text-decoration:underline';
    next.appendChild(a);
  }
}
async function repair(img){
  if(!(img instanceof HTMLImageElement)||img.dataset.artRepair==='done')return;
  const src=img.getAttribute('src')||'';
  const filename=filenameFrom(src);
  if(!filename)return;
  img.dataset.artRepair='working';
  img.referrerPolicy='no-referrer';
  img.decoding='async';
  try{
    const resolved=await resolveCommons(filename);
    if(!resolved)throw new Error('No resolved image');
    await new Promise((ok,bad)=>{
      const probe=new Image();
      probe.referrerPolicy='no-referrer';
      probe.onload=ok;probe.onerror=bad;probe.src=resolved;
    });
    img.onerror=null;
    img.src=resolved;
    img.dataset.artRepair='done';
    reveal(img);
  }catch(e){
    img.dataset.artRepair='failed';
    showUsefulFallback(img,filename);
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