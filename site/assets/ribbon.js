(function(){const c=document.getElementById('c');if(!c)return;const x=c.getContext('2d');const RM=true;let W,H,d=Math.min(devicePixelRatio||1,1.5);
function rs(){W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)}addEventListener('resize',rs);rs();
const st=performance.now();let last=0,vis=true,run=false;
const B=[[157,184,211,.70,.74,.34,.30,0],[217,200,142,.60,.86,.66,.26,1.7],[110,150,190,.45,.95,.50,.22,3.1],[233,223,184,.55,.66,.82,.24,4.4],[201,214,228,.65,.98,.18,.26,5.2]];
function draw(t){x.clearRect(0,0,W,H);for(const b of B){const cx=W*(b[4]+.04*Math.sin(t*.10+b[7])),cy=H*(b[5]+.05*Math.cos(t*.08+b[7])),r=Math.max(W,H)*b[6]*(1+.06*Math.sin(t*.12+b[7]));
const g=x.createRadialGradient(cx,cy,0,cx,cy,r);g.addColorStop(0,`rgba(${b[0]},${b[1]},${b[2]},${b[3]})`);g.addColorStop(.55,`rgba(${b[0]},${b[1]},${b[2]},${b[3]*.35})`);g.addColorStop(1,`rgba(${b[0]},${b[1]},${b[2]},0)`);x.fillStyle=g;x.fillRect(0,0,W,H)}}

function loop(now){if(!vis){run=false;return}if(now-last>=33){last=now;draw((now-st)/1000)}requestAnimationFrame(loop)}
function start(){if(!run&&vis&&!RM){run=true;requestAnimationFrame(loop)}}
if('IntersectionObserver' in window)new IntersectionObserver(e=>{vis=e[0].isIntersecting;start()}).observe(c);
draw(0);start();addEventListener('resize',()=>draw((performance.now()-st)/1000))})();
