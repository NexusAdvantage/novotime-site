(function(){const c=document.getElementById('c');if(!c)return;const x=c.getContext('2d');const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;let W,H,d=Math.min(devicePixelRatio||1,2);
function rs(){W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0)}addEventListener('resize',rs);rs();
const L=56,S=160,A=[0,47,95],B=[79,122,163],C=[150,128,40];
function col(u){const m=u<.5?[A,B,u/.5]:[B,C,(u-.5)/.5];return m[0].map((v,i)=>Math.round(v+(m[1][i]-v)*m[2])).join(',')}
const cols=[...Array(L)].map((_,k)=>col(k/(L-1)));
function bz(p0,p1,p2,p3,s){const m=1-s;return m*m*m*p0+3*m*m*s*p1+3*m*s*s*p2+s*s*s*p3}
function db(p0,p1,p2,p3,s){const m=1-s;return 3*m*m*(p1-p0)+6*m*s*(p2-p1)+3*s*s*(p3-p2)}
const st=performance.now();
function f(now){const t=(now-st)/1000;x.clearRect(0,0,W,H);
const sw=Math.sin(t*.04),sw2=Math.cos(t*.03);
const P=[[W*.46,-H*.2],[W*(.60+.03*sw),H*(.22+.03*sw2)],[W*(.80-.03*sw2),H*(.58+.04*sw)],[W*1.15,H*1.08]];
const pts=[];for(let i=0;i<=S;i++){const s=i/S,px=bz(P[0][0],P[1][0],P[2][0],P[3][0],s),py=bz(P[0][1],P[1][1],P[2][1],P[3][1],s),tx=db(P[0][0],P[1][0],P[2][0],P[3][0],s),ty=db(P[0][1],P[1][1],P[2][1],P[3][1],s),l=Math.hypot(tx,ty);
pts.push([px,py,-ty/l,tx/l,H*.50*(.6+.4*Math.sin(Math.PI*s))*(.55+.45*Math.cos(s*2.2+t*.07))])}
// soft filled body so the band reads as one smooth surface
const g=x.createLinearGradient(W*.45,0,W,H);g.addColorStop(0,'rgba(0,47,95,.14)');g.addColorStop(.5,'rgba(79,122,163,.16)');g.addColorStop(1,'rgba(150,128,40,.16)');
x.beginPath();for(let i=0;i<=S;i++){const p=pts[i],o=-.5*p[4];i?x.lineTo(p[0]+p[2]*o,p[1]+p[3]*o):x.moveTo(p[0]+p[2]*o,p[1]+p[3]*o)}
for(let i=S;i>=0;i--){const p=pts[i],o=.5*p[4];x.lineTo(p[0]+p[2]*o,p[1]+p[3]*o)}x.closePath();x.fillStyle=g;x.filter='blur(6px)';x.fill();x.filter='blur(.35px)';
for(let k=0;k<L;k++){const u=k/(L-1)-.5;x.beginPath();for(let i=0;i<=S;i++){const p=pts[i],o=u*p[4],X=p[0]+p[2]*o,Y=p[1]+p[3]*o;i?x.lineTo(X,Y):x.moveTo(X,Y)}
x.strokeStyle=`rgba(${cols[k]},${.22+.38*Math.sin(Math.PI*(u+.5))})`;x.lineWidth=1.1;x.stroke()}
x.filter='none';if(!RM)requestAnimationFrame(f)}requestAnimationFrame(f)})();
