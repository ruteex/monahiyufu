
const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
const root=document.documentElement;let th=localStorage.getItem('th')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
function setT(t){root.dataset.theme=t;try{localStorage.setItem('th',t)}catch(e){}$('#tg').textContent=t=='dark'?'☀':'☾'}setT(th);
$('#tg').onclick=()=>setT(root.dataset.theme=='dark'?'light':'dark');
const hd=$('header.nav'),pg=$('#prog');
const sc=()=>{hd.classList.toggle('on',scrollY>40);pg.style.width=scrollY/Math.max(1,document.body.scrollHeight-innerHeight)*100+'%'};sc();addEventListener('scroll',sc,{passive:true});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
$$('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*80+'ms';io.observe(el)});
$$('.hero').forEach(h=>{if(!rm)for(let i=0;i<10;i++){const p=document.createElement('i');p.className='petal';p.style.left=Math.random()*100+'%';p.style.animationDuration=14+Math.random()*14+'s';p.style.animationDelay=-Math.random()*20+'s';h.appendChild(p)}
 h.addEventListener('mousemove',e=>{if(rm)return;const x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;$$('g[data-d]',h).forEach(g=>{const d=+g.dataset.d;g.style.transform=`translate(${-x*d}px,${-y*d/2}px)`})})});
$$('.card').forEach(c=>{c.addEventListener('mousemove',e=>{if(rm)return;const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`perspective(700px) rotateY(${x*9}deg) rotateX(${-y*9}deg) translateY(-6px)`});c.addEventListener('mouseleave',()=>c.style.transform='')});
let ac;function bell(v=.25){try{ac=ac||new (window.AudioContext||window.webkitAudioContext)();const t=ac.currentTime;[[220,1],[607,.5],[1188,.25],[1960,.12]].forEach(([f,a])=>{const o=ac.createOscillator(),g=ac.createGain();o.frequency.value=f;o.type='sine';g.gain.setValueAtTime(v*a,t);g.gain.exponentialRampToValueAtTime(.0001,t+5);o.connect(g).connect(ac.destination);o.start(t);o.stop(t+5)})}catch(e){}}
$$('.tabs').forEach(t=>$$('button',t).forEach(btn=>btn.onclick=()=>{const w=t.parentElement;$$('button',t).forEach(x=>x.classList.toggle('on',x==btn));$$('.panel',w).forEach(p=>p.classList.toggle('on',p.id==btn.dataset.t))}));
// breath
let bt,bon=false;const bc=$('.bc');
function phase(i=0,n=0){if(!bon)return;const P=[['Вдох',4,1.35],['Пауза',2,1.35],['Выдох',6,1]][i];bc.style.transitionDuration=P[1]+'s';bc.style.transform=`scale(${P[2]})`;bc.textContent=P[0];
 if(i==2)$('#bn').textContent=n+1;bt=setTimeout(()=>phase((i+1)%3,i==2?n+1:n),P[1]*1000)}
if($('#bb'))$('#bb').onclick=e=>{bon=!bon;clearTimeout(bt);e.target.textContent=bon?'Остановить':'Начать';if(bon){bell(.15);$('#bn').textContent=0;phase()}else{bc.style.transform='';bc.textContent='Дыши'}};
// mala
const ml=$('.mala');let mc=0,mr=0;
if(ml){for(let i=0;i<108;i++){const a=i/108*Math.PI*2-Math.PI/2,c=document.createElementNS('http://www.w3.org/2000/svg','circle');c.setAttribute('cx',150+Math.cos(a)*128);c.setAttribute('cy',150+Math.sin(a)*128);c.setAttribute('r',4.4);ml.insertBefore(c,ml.firstChild)}
 ml.onclick=()=>{const cs=$$('circle',ml);cs[mc].classList.add('f');cs[mc].setAttribute('r',6.5);mc++;$('#mn').textContent=mc;if(mc==108){bell(.3);mr++;$('#mrr').textContent='Кругов: '+mr;setTimeout(()=>{cs.forEach(c=>{c.classList.remove('f');c.setAttribute('r',4.4)});mc=0;$('#mn').textContent=0},1500)}}}
// bell
$$('.bellb').forEach(b=>b.onclick=()=>{bell(.35);b.classList.remove('r');const r=b.nextElementSibling;r.classList.remove('r');void b.offsetWidth;b.classList.add('r');r.classList.add('r')});
// wheel & map
$$('.sel').forEach(w=>{const it=JSON.parse(w.dataset.items),n=$$('.spk,.pin',w);const go=i=>{n.forEach((x,j)=>x.classList.toggle('on',i==j));$('h3',w).textContent=it[i][0];$('.wt',w).textContent=it[i][1]};n.forEach((x,i)=>{x.onclick=()=>go(i);x.onkeydown=e=>{if(e.key=='Enter')go(i)};x.tabIndex=0});go(0)});
// candle
$$('.candle').forEach(c=>c.onclick=()=>{c.classList.toggle('out');$('.ct',c).textContent=c.classList.contains('out')?'Само слово означает «угасание» или «затухание», подобно тому как огонь постепенно гаснет, когда исчерпывается его топливо. Нажмите, чтобы зажечь вновь.':'Нажмите на пламя.'});
// timeline
$$('.tl').forEach(t=>{const E=JSON.parse(t.dataset.ev),r=$('input',t),u=()=>{const h=+r.value;let e=E[0];E.forEach(x=>{if(x[0]<=h)e=x});$('.tm',t).textContent=String(h).padStart(2,'0')+':00';$('.ev',t).textContent=e[1]};r.oninput=u;u()});


$$('.tgall').forEach(b=>b.onclick=()=>{const ds=$$('details.pt',b.parentElement),o=ds.some(d=>d.open);ds.forEach(d=>d.open=!o);b.textContent=o?'Развернуть всё':'Свернуть всё'});
const lb=document.createElement('div');lb.id='lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);
document.addEventListener('click',e=>{const i=e.target.closest('.fg img');if(i){$('img',lb).src=i.src;lb.classList.add('on')}else if(lb.contains(e.target))lb.classList.remove('on')});
addEventListener('keydown',e=>{if(e.key=='Escape')lb.classList.remove('on')});
(function(){const A=new Audio('music/aruarian-dance.mp3');A.loop=true;A.preload='auto';
const g=k=>{try{return localStorage.getItem(k)}catch(e){return null}},st=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
let vol=g('mv')!==null?+g('mv'):40,want=g('mo')!=='0';A.volume=vol/100;
const mus=$('.mus'),mp=$('#mp'),rg=$('#mr'),pc=$('#mpc');rg.value=vol;pc.textContent=vol+'%';
const ui=p=>{mp.classList.toggle('on',p);mp.setAttribute('aria-pressed',p);mp.setAttribute('aria-label',p?'Выключить музыку':'Включить музыку');mus.classList.toggle('hint',!p&&want)};
const kick=e=>{if(want&&A.paused&&!(e.target.closest&&e.target.closest('#mp')))play()};
const ev=['pointerdown','keydown','touchend'];
function play(){A.play().then(()=>{ui(true);ev.forEach(x=>removeEventListener(x,kick))}).catch(()=>ui(false))}
A.addEventListener('loadedmetadata',()=>{const t=+g('mt');if(t>0&&t<A.duration-1)A.currentTime=t});
ev.forEach(x=>addEventListener(x,kick));
mp.onclick=()=>{if(A.paused){want=true;st('mo','1');play()}else{A.pause();want=false;st('mo','0');ui(false)}};
rg.oninput=()=>{vol=+rg.value;A.volume=vol/100;pc.textContent=vol+'%';st('mv',vol)};
$('#mvb').onclick=e=>{const o=mus.classList.toggle('open');e.currentTarget.setAttribute('aria-expanded',o)};
document.addEventListener('click',e=>{if(!mus.contains(e.target)){mus.classList.remove('open');$('#mvb').setAttribute('aria-expanded',false)}});
setInterval(()=>{if(!A.paused)st('mt',A.currentTime)},500);addEventListener('pagehide',()=>st('mt',A.currentTime));
if(want)play();else ui(false)})();
