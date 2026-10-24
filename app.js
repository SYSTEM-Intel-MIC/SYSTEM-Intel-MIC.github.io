(()=>{const d=document,r=d.documentElement,rm=matchMedia('(prefers-reduced-motion:reduce)').matches;r.classList.add('js');
let t=0;const u=()=>{t=0;const y=scrollY,m=Math.max(1,r.scrollHeight-innerHeight);r.style.setProperty('--p',Math.min(1,y/m).toFixed(4));r.style.setProperty('--h',Math.min(1,y/innerHeight).toFixed(4));d.body.classList.toggle('sc',y>40)};
addEventListener('scroll',()=>{t||(t=requestAnimationFrame(u))},{passive:true});addEventListener('resize',u);u();
d.querySelectorAll('.grid,.bento,.btns,.panel').forEach(g=>[...g.children].forEach((c,i)=>c.style.setProperty('--i',i%8)));
const rv=d.querySelectorAll('.rv');
if(rm||!('IntersectionObserver'in window))rv.forEach(e=>e.classList.add('in'));
else{const o=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -6% 0px'});rv.forEach(e=>o.observe(e))}
d.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card');if(c){const b=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-b.left+'px');c.style.setProperty('--my',e.clientY-b.top+'px')}},{passive:true});
const ns=[...d.querySelectorAll('.nav a[href^="#"]')];
if(ns.length&&'IntersectionObserver'in window){const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)ns.forEach(a=>a.classList.toggle('on',a.hash==='#'+e.target.id))}),{rootMargin:'-40% 0px -55% 0px'});ns.forEach(a=>{const s=d.querySelector(a.hash);s&&so.observe(s)})}
const tt=d.createElement('div');tt.className='toast glass';d.body.appendChild(tt);let tm;
d.querySelectorAll('[data-copy]').forEach(el=>el.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(el.dataset.copy)}catch(_){}tt.textContent='已复制 '+el.dataset.copy;tt.classList.add('on');clearTimeout(tm);tm=setTimeout(()=>tt.classList.remove('on'),1800)}));
addEventListener('keydown',e=>{const i=d.querySelector('.search input');if(e.key==='/'&&i&&!/INPUT|TEXTAREA/.test(d.activeElement.tagName)){e.preventDefault();scrollTo({top:0});i.focus()}});
})();
