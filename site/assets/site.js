(function(){const io='IntersectionObserver' in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15}):null;
document.querySelectorAll('.reveal').forEach((el,i)=>{el.style.transitionDelay=(el.dataset.d||0)+'ms';io?io.observe(el):el.classList.add('in')})})();

document.querySelectorAll('svg.lines').forEach(s=>{const d=s.dataset.l==='dark',W=1000,H=600,n=40,c1=d?[79,122,163]:[0,47,95],c2=d?[201,180,114]:[134,115,30],op=d?.4:.35;
s.setAttribute('viewBox','0 0 '+W+' '+H);s.setAttribute('preserveAspectRatio','none');let o='';
for(let k=0;k<n;k++){const u=k/(n-1),c=c1.map((a,i)=>Math.round(a+(c2[i]-a)*u));o+='<path d="M'+(W*.15+u*W*.3)+' -20 C '+(W*.45+u*W*.2)+' '+H*.35+', '+(W*.7+u*W*.1)+' '+H*.55+', '+(W+20)+' '+(H*.6+u*H*.4)+'" fill="none" stroke="rgb('+c+')" stroke-opacity="'+(op*(.4+.6*Math.abs(1-2*Math.abs(u-.5)))).toFixed(2)+'" stroke-width="1"/>'}s.innerHTML=o});
