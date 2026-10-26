(function(){const c=document.getElementById('c');if(!c)return;const x=c.getContext('2d');const RM=true;let W,H,d=Math.min(devicePixelRatio||1,1.5);
function rs(){W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)}addEventListener('resize',rs);rs();
const st=performance.now();let last=0,vis=true,run=false;
const S=[[.565,.82,.022,1],[.605,.74,.033,0],[.655,.65,.047,1],[.72,.55,.064,0]];
function sph(cx,cy,r,gold,a){const g=x.createRadialGradient(cx-r*.3,cy-r*.35,r*.05,cx,cy,r);
if(gold){g.addColorStop(0,`rgba(250,244,226,${a})`);g.addColorStop(.6,`rgba(201,180,114,${a*.8})`);g.addColorStop(1,`rgba(134,115,30,${a*.85})`)}
else{g.addColorStop(0,`rgba(236,242,248,${a})`);g.addColorStop(.6,`rgba(130,162,196,${a*.75})`);g.addColorStop(1,`rgba(0,47,95,${a*.85})`)}
x.fillStyle=g;x.beginPath();x.arc(cx,cy,r,0,7);x.fill()}
function draw(t){x.clearRect(0,0,W,H);const m=Math.min(W,H*1.6);x.globalCompositeOperation='multiply';
S.forEach((s,i)=>sph(W*s[0]+Math.sin(t*.35+i*1.3)*8,H*s[1]+Math.cos(t*.3+i*1.1)*10,m*s[2]*1.4,s[3],.9));
const R=m*.17*(1+.02*Math.sin(t*.25)),X=W*.82,Y=H*.40;sph(X,Y,R,0,.92);x.globalCompositeOperation='source-over';
x.strokeStyle='rgba(134,115,30,.55)';x.lineWidth=1;x.beginPath();x.arc(X,Y,R,0,7);x.stroke()}

function loop(now){if(!vis){run=false;return}if(now-last>=33){last=now;draw((now-st)/1000)}requestAnimationFrame(loop)}
function start(){if(!run&&vis&&!RM){run=true;requestAnimationFrame(loop)}}
if('IntersectionObserver' in window)new IntersectionObserver(e=>{vis=e[0].isIntersecting;start()}).observe(c);
draw(0);start();addEventListener('resize',()=>draw((performance.now()-st)/1000))})();
