// Parallax/Scroll-Animation für Banner
const bg=document.querySelector('.hero-bg'),hero=document.querySelector('.hero');
if(bg&&hero){
  const onScroll=()=>{
    const r=hero.getBoundingClientRect(),vh=window.innerHeight||800;
    const p=Math.min(Math.max((0-r.top)/(vh*0.6),0),1);
    bg.style.transform=`scale(${1.08-p*0.06}) translateY(${p*16}px)`;
    bg.style.filter=`blur(${p*2.0}px) saturate(${1-p*0.15})`;
    bg.style.opacity=String(1-p*0.25);
  };
  document.addEventListener('scroll',onScroll,{passive:true});onScroll();
}

// Sprach-Switch: wechselt zwischen DE/EN Spiegelpfad
const sw=document.querySelector('.switch');
if(sw){
  const knob=sw.querySelector('.knob');
  const isEN=location.pathname.split('/').includes('en');
  if(isEN) sw.classList.add('active');
  if(knob) knob.textContent=isEN?'EN':'DE';
  sw.addEventListener('click',()=>{
    const parts=location.pathname.split('/').filter(Boolean);
    const file=parts.pop()||'index.html';
    if(isEN){ const i=parts.indexOf('en'); if(i>=0) parts.splice(i,1); }
    else { if(!parts.includes('en')) parts.push('en'); }
    const base='/'+parts.join('/')+'/';
    const next=(base==='//'?'/':base)+file;
    location.href=next.replace('//','/');
  });
}
