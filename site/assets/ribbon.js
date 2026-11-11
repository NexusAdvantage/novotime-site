(function(){const c=document.getElementById('c');if(!c)return;const x=c.getContext('2d');const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,FINE=matchMedia('(pointer: fine)').matches;let W,H,d=1;
function rs(){W=c.clientWidth;H=c.clientHeight;c.width=W*d;c.height=H*d;x.setTransform(d,0,0,d,0,0);x.lineJoin='round'}addEventListener('resize',rs);rs();
const FL=c.dataset.v==='flow',LT=c.dataset.t==='light',L=36,S=64,A=LT?[0,47,95]:[120,160,205],B=LT?[79,122,163]:[170,195,225],C=LT?[134,115,30]:[201,184,118];
function col(u){const m=u<.5?[A,B,u/.5]:[B,C,(u-.5)/.5];return m[0].map((v,i)=>Math.round(v+(m[1][i]-v)*m[2])).join(',')}
const styles=[...Array(L)].map((_,k)=>{const u=k/(L-1)-.5;return `rgba(${col(k/(L-1))},${(.10+.34*Math.sin(Math.PI*(u+.5))).toFixed(3)})`});
function bz(p0,p1,p2,p3,s){const m=1-s;return m*m*m*p0+3*m*m*s*p1+3*m*s*s*p2+s*s*s*p3}
function db(p0,p1,p2,p3,s){const m=1-s;return 3*m*m*(p1-p0)+6*m*s*(p2-p1)+3*s*s*(p3-p2)}
// pointer: the ribbon swells like a lens around the cursor and catches gold light where it passes
const host=c.parentElement;let tx=-1e4,ty=-1e4,mx=-1e4,my=-1e4,lastMove=-1e4,inside=false,amp=0;
if(FINE&&!RM){host.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();tx=e.clientX-r.left;ty=e.clientY-r.top;if(!inside){mx=tx;my=ty}inside=true;lastMove=performance.now();start()});
host.addEventListener('pointerleave',()=>{inside=false;lastMove=performance.now()})}
const st=performance.now();let last=0,vis=true,run=false,busy=0;addEventListener('scroll',()=>{busy=performance.now()},{passive:true});
const px=new Float32Array(S+1),py=new Float32Array(S+1),nx=new Float32Array(S+1),ny=new Float32Array(S+1),w=new Float32Array(S+1),cs=new Float32Array(S+1),sn=new Float32Array(S+1),tx_=new Float32Array(S+1),ty_=new Float32Array(S+1);
function draw(now){const t=(now-st)/1000;x.globalCompositeOperation='source-over';x.clearRect(0,0,W,H);
mx+=(tx-mx)*.14;my+=(ty-my)*.14;amp+=((inside?1:0)-amp)*.08;
const R=Math.max(150,Math.min(W,H)*.22),R2=2*R*R,LENS=FL?.35:.45,on=amp>.01;
const sw=Math.sin(t*.04),sw2=Math.cos(t*.03);
const P=FL?[[-W*.12,H*(1.02+.03*sw2)],[W*(.35+.03*sw),H*(.66+.05*sw2)],[W*(.66-.03*sw2),H*(1.22+.05*sw)],[W*1.14,H*(.36+.03*sw)]]:[[W*.50,-H*.25],[W*(1.02+.03*sw),H*(.10+.04*sw2)],[W*(.48-.03*sw2),H*(.80+.04*sw)],[W*1.18,H*1.05]];
for(let i=0;i<=S;i++){const s=i/S,dx=db(P[0][0],P[1][0],P[2][0],P[3][0],s),dy=db(P[0][1],P[1][1],P[2][1],P[3][1],s),l=Math.hypot(dx,dy);
px[i]=bz(P[0][0],P[1][0],P[2][0],P[3][0],s);py[i]=bz(P[0][1],P[1][1],P[2][1],P[3][1],s);nx[i]=-dy/l;ny[i]=dx/l;tx_[i]=dx/l;ty_[i]=dy/l;const ph=s*3.1-.15+t*.07;cs[i]=Math.cos(ph);sn[i]=Math.sin(ph);w[i]=H*(FL?.30:.46)*(.55+.45*Math.sin(Math.PI*s))}
const g=x.createLinearGradient(W*.45,0,W,H);g.addColorStop(0,'rgba(120,160,205,.05)');g.addColorStop(.5,'rgba(170,195,225,.06)');g.addColorStop(1,'rgba(180,156,56,.08)');
const E=(i,u)=>{const o=u*w[i]*cs[i],q=u*w[i]*.38*sn[i];let X=px[i]+nx[i]*o+tx_[i]*q,Y=py[i]+ny[i]*o+ty_[i]*q;
if(on){const ex=X-mx,ey=Y-my,dd=ex*ex+ey*ey;if(dd<R2*5){const f=amp*LENS*Math.exp(-dd/R2);X+=ex*f;Y+=ey*f}}return[X,Y]};
x.beginPath();for(let i=0;i<=S;i++){const e=E(i,-.5);i?x.lineTo(e[0],e[1]):x.moveTo(e[0],e[1])}for(let i=S;i>=0;i--){const e=E(i,.5);x.lineTo(e[0],e[1])}x.closePath();x.fillStyle=g;x.fill('nonzero');
x.lineWidth=1.25;for(let k=0;k<L;k++){const u=k/(L-1)-.5;x.beginPath();for(let i=0;i<=S;i++){const e=E(i,u);i?x.lineTo(e[0],e[1]):x.moveTo(e[0],e[1])}x.strokeStyle=styles[k];x.stroke()}
if(on){x.globalCompositeOperation='source-atop';const h=x.createRadialGradient(mx,my,0,mx,my,R*1.3);h.addColorStop(0,`rgba(246,228,160,${amp.toFixed(3)})`);h.addColorStop(.5,`rgba(214,192,118,${(.7*amp).toFixed(3)})`);h.addColorStop(1,'rgba(201,184,118,0)');x.fillStyle=h;x.fillRect(mx-R*1.3,my-R*1.3,R*2.6,R*2.6);x.globalCompositeOperation='source-over'}}
function loop(now){if(!vis||document.hidden){run=false;return}const live=now-lastMove<1600,gap=live?33:66;if(now-last>=gap&&(live||now-busy>180)){last=now;draw(now)}requestAnimationFrame(loop)}
function start(){if(!run&&vis&&!RM){run=true;requestAnimationFrame(loop)}}
if('IntersectionObserver' in window)new IntersectionObserver(e=>{vis=e[0].isIntersecting;start()}).observe(c);
document.addEventListener('visibilitychange',start);draw(performance.now());start();addEventListener('resize',()=>draw(performance.now()))})();
