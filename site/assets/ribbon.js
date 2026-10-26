(function(){const c=document.getElementById('c');if(!c)return;const x=c.getContext('2d');const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;let W,H,d=Math.min(devicePixelRatio||1,1.5);
function rs(){W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)}addEventListener('resize',rs);rs();
const st=performance.now();let last=0,vis=true,run=false;
function draw(t){x.clearRect(0,0,W,H);const gap=Math.max(14,W/72);for(let X=W*.40;X<W+gap;X+=gap){for(let Y=-gap;Y<H+gap;Y+=gap){
const u=(X-W*.40)/(W*.60),v=Y/H,z=Math.sin(u*5+t*.35)*Math.cos(v*4-t*.25)+Math.sin((u+v)*3+t*.2);
const y=Y+z*gap*.9,r=1.4+1.5*(z+2)/4,a=Math.min(1,u*1.8)*Math.max(0,Math.min(1,(Y-70)/140))*(.30+.50*(z+2)/4);
x.fillStyle=(z>.5)?`rgba(134,115,30,${a})`:`rgba(0,47,95,${a})`;x.beginPath();x.arc(X,y,r,0,7);x.fill()}}}

function loop(now){if(!vis){run=false;return}if(now-last>=33){last=now;draw((now-st)/1000)}requestAnimationFrame(loop)}
function start(){if(!run&&vis&&!RM){run=true;requestAnimationFrame(loop)}}
if('IntersectionObserver' in window)new IntersectionObserver(e=>{vis=e[0].isIntersecting;start()}).observe(c);
draw(0);start();addEventListener('resize',()=>draw((performance.now()-st)/1000))})();
