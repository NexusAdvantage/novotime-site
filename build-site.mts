// Builds the static NovoTime site into dist/.
// Copies site/ as is, then generates the subpages from the copy in content/
// and Diana's verbatim service lists in site/services.html.
// Run: node --experimental-strip-types build-site.mts
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import { SERVICE_DETAILS } from './content/serviceDetails.ts';
import { SERVICES } from './content/services.ts';
import { VALUES } from './content/values.ts';
import { FAQ } from './content/faq.ts';

const SRC = 'site', OUT = 'dist';
rmSync(OUT, { recursive: true, force: true });
cpSync(SRC, OUT, { recursive: true });
const read = (f: string) => readFileSync(`${SRC}/${f}`, 'utf8');
// Diana spells it advisor everywhere; the legal disclosure keeps its regulatory wording
const advisor = (s: string) => s.split(/(<p class="disc">[\s\S]*?<\/p>)/).map(p => p.startsWith('<p class="disc">') ? p : p.replace(/([Aa])dviser/g, '$1dvisor')).join('');
const write = (f: string, s: string) => writeFileSync(`${OUT}/${f}`, advisor(s));
const E = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/’/g, '&rsquo;').replace(/‘/g, '&lsquo;').replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;');


// line icons, drawn on a 24 grid, stroke only
const IC: Record<string, string> = {
  book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/><path d="M8 7h7M8 11h7"/>',
  receipt: '<path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9 8h6M9 12h6M9 16h3"/>',
  bank: '<path d="M3 9l9-5 9 5"/><path d="M4 9h16"/><path d="M6 9v8M10 9v8M14 9v8M18 9v8"/><path d="M3 20h18"/>',
  house: '<path d="M4 11l8-7 8 7"/><path d="M6 10v10h12V10"/><path d="M10 20v-5h4v5"/>',
  chart: '<path d="M4 4v16h16"/><path d="M7 15l4-4 3 3 5-6"/>',
  calendar: '<rect x="4" y="5" width="16" height="15" rx="1"/><path d="M4 10h16M9 3v4M15 3v4"/>',
  doc: '<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4"/><path d="M10 12h5M10 16h5"/>',
  heart: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  folder: '<path d="M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  chat: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/>',
  arrows: '<path d="M4 8h15l-3-3M20 16H5l3 3"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14c2.8 0 5 2.2 5 5"/>',
  person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.9 3.1-7 7-7s7 3.1 7 7"/>',
  scale: '<path d="M12 4v16M7 20h10M4 7h16"/><path d="M6 7l-3 6a3 3 0 0 0 6 0zM18 7l-3 6a3 3 0 0 0 6 0z"/>',
  building: '<path d="M5 21V4h9v17M14 9h5v12"/><path d="M8 8h3M8 12h3M8 16h3M3 21h18"/>',
  lock: '<rect x="5" y="11" width="14" height="9" rx="1"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l8-8M16 7l2 2M14 9l2 2"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
  cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c3 2 9 2 12 0v-5"/>',
  plane: '<path d="M3 12l18-8-5 17-4-7z"/><path d="M12 14l9-10"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16 9.5"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
};
const icon = (k: string) => `<svg class="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[k]}</svg>`;
const SVC_IC: Record<string, string> = { 'financial-administration': 'book', 'tax-and-compliance': 'receipt', 'risk-and-insurance': 'shield', 'investment-coordination': 'chart',
  'estate-and-legal': 'scale', 'documents-and-information': 'folder', 'governance-and-philanthropy': 'people', 'next-generation-education': 'cap', 'travel-and-property': 'plane' };
const RULES: [RegExp, string][] = [[/password/i, 'key'], [/secure|cybersecurity/i, 'lock'], [/travel/i, 'plane'], [/vett/i, 'search'], [/invoice/i, 'receipt'],
  [/property management|real estate/i, 'house'], [/one.on.one|group/i, 'people'], [/foundational/i, 'book'], [/education|lesson|age and experience/i, 'cap'],
  [/bank/i, 'bank'], [/bill|budget/i, 'receipt'], [/reconcil/i, 'check'], [/book/i, 'book'], [/tax planning/i, 'calendar'], [/return/i, 'doc'],
  [/charit|philanthrop/i, 'heart'], [/vehicle/i, 'building'], [/k.1|document|record|storage|inventory/i, 'folder'], [/claims|communication|carriers/i, 'chat'],
  [/renewal|deadline/i, 'calendar'], [/insurance|coverage/i, 'shield'], [/advis[eo]r/i, 'people'], [/capital call|distribution|transfer|liquidity/i, 'arrows'],
  [/report/i, 'chart'], [/beneficiar/i, 'person'], [/estate|counsel|legal/i, 'scale'], [/entity|business|trustee/i, 'building'],
  [/meeting/i, 'calendar'], [/mission|values/i, 'compass'], [/family|intergenerational/i, 'people']];
const pick = (t: string) => (RULES.find(([r]) => r.test(t)) || [, 'doc'])[1] as string;

const SD: Record<string, any> = Object.fromEntries(SERVICE_DETAILS.map((x: any) => [x.slug, x]));
const SUM: Record<string, string> = Object.fromEntries(SERVICES.map((x: any) => [x.slug, x.summary]));
const svcSrc = read('services.html');
const SLUGS = ['financial-administration', 'tax-and-compliance', 'risk-and-insurance', 'investment-coordination', 'estate-and-legal',
  'documents-and-information', 'governance-and-philanthropy', 'next-generation-education', 'travel-and-property'];
const blocks = [...svcSrc.matchAll(/<h3>(.*?)<\/h3><p class="g">(.*?)<\/p><\/div><ul>(.*?)<\/ul>/g)];
const SV = SLUGS.map((slug, k) => ({ slug, name: blocks[k][1], tag: blocks[k][2], items: [...blocks[k][3].matchAll(/<li>(.*?)<\/li>/g)].map(m => m[1]) }));
const NM: Record<string, string> = Object.fromEntries(SV.map(s => [s.slug, s.name]));

const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;1,6..96,400&family=Manrope:wght@400;500;600&display=swap" rel="stylesheet">';
const DISC = svcSrc.match(/<p class="disc">[\s\S]*?<\/p>/)![0];

function page(title: string, on: string, body: string, p = '', desc = '', hdr = 'dark') {
  const nav = [['s', 'services.html', 'Services'], ['a', 'about.html', 'About'], ['c', 'contact.html', 'Contact Us']]
    .map(([k, h, t]) => `<a href="${p}${h}"${k === on ? ' class="on"' : ''}>${t}</a>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | NovoTime</title>${desc ? `<meta name="description" content="${desc}">` : ''}
<link rel="icon" href="${p}assets/nt-mark.svg">${FONTS}<link rel="stylesheet" href="${p}assets/site.css"><link rel="stylesheet" href="${p}assets/pages.css"></head><body class="sub">
<header class="top ${hdr}"><a class="lk" href="${p}index.html"><img src="${p}assets/nt-mark.svg" alt=""><span>NovoTime</span></a><nav class="main">${nav}</nav></header>
${body}
<footer><div class="w"><div class="cols"><div><a class="lk" href="${p}index.html"><img src="${p}assets/nt-mark.svg" alt=""><span>NovoTime</span></a><p class="tag">Independent by design. Personal by nature.</p></div>
<div class="fl"><a href="${p}services.html">Services</a><a href="${p}about.html">About</a><a href="${p}contact.html">Contact Us</a></div>
<div>9375 Burt St., Suite 202<br>Omaha, NE 68114<br><a href="tel:+14022398086">402-239-8086</a><br><a href="mailto:contact@novo-time.com">contact@novo-time.com</a></div></div>
${DISC}<div class="bot">&copy; NovoTime LLC</div></div></footer><script src="${p}assets/site.js"></script><script src="${p}assets/ribbon.js"></script></body></html>
`;
}
const cta = (p = '') => `<section class="cta"><div class="w"><p class="eyebrow reveal">A simpler financial life starts here</p><h2 class="reveal">Let&rsquo;s make time<br>for <em>what matters.</em></h2><a class="btn reveal" href="${p}contact.html">Contact us</a></div></section>`;
const phead = (h1: string, lt = false) => `<section class="phead${lt ? ' lt' : ''}"><canvas id="c" data-v="flow"${lt ? ' data-t="light"' : ''} aria-hidden="true"></canvas><div class="w"><h1>${h1}</h1></div></section>`;
const faq = (items: any[]) => items.map(q => `<details class="qa reveal"><summary>${E(q.q)}</summary><p>${E(q.a)}</p></details>`).join('');

// services overview: an even three by three grid with Diana's names and taglines
const cells = SV.map((s, k) => `<a class="gc reveal" data-d="${(k % 3) * 120}" href="services/${s.slug}.html"><span class="gl" aria-hidden="true"></span>${icon(SVC_IC[s.slug])}<h2>${s.name}</h2><p>${s.tag}</p><span class="go">View service</span></a>`).join('');
const glow = `<script>document.querySelectorAll('.gc').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')}))</script>`;
write('services.html', page('Our Services', 's', phead('Our Services') +
  `<section class="sgrid"><svg class="lines" data-l="light" aria-hidden="true"></svg><div class="w"><div class="gg">${cells}</div></div></section>${glow}` + cta(),
  '', 'The nine services NovoTime provides to families, from financial administration to travel and property.'));

// service pages
mkdirSync(`${OUT}/services`, { recursive: true });
const carousel = `<script>document.querySelectorAll('.car').forEach(c=>{const t=c.querySelector('.track'),st=()=>t.querySelector('.rc').offsetWidth+32;c.querySelector('.prev').onclick=()=>t.scrollBy({left:-st(),behavior:'smooth'});c.querySelector('.next').onclick=()=>t.scrollBy({left:st(),behavior:'smooth'})})</script>`;
const arrow = (d: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
for (const s of SV) {
  const d = SD[s.slug];
  const intro = d.intro.slice(0, 2).map((t: string) => `<p class="reveal">${E(t)}</p>`).join('');
  const rows = s.items.map((t, k) => `<li class="reveal" data-d="${(k % 3) * 100}">${icon(pick(t))}<p>${t}</p></li>`).join('');
  const led = d.ledger.map((r: any, k: number) => `<div class="dd reveal" data-d="${(k % 2) * 100}"><h3>${E(r.task)}</h3><p>${E(r.with)}.</p></div>`).join('');
  const ih = d.inHouse.map((t: string, k: number) => `<li class="reveal" data-d="${k * 90}">${icon(pick(t))}<p>${E(t)}</p></li>`).join('');
  const k0 = SLUGS.indexOf(s.slug);
  const others = [...SLUGS.slice(k0 + 1), ...SLUGS.slice(0, k0)];
  const rel = others.map(r => `<a class="rc" href="${r}.html">${icon(SVC_IC[r])}<h3>${NM[r]}</h3><p>${SV.find(x => x.slug === r)!.tag}</p><span class="go">View service</span></a>`).join('');
  const body = phead(s.name) +
    `<section class="sintro"><div class="w"><h2 class="reveal">${E(d.headline)}</h2><div class="lede">${intro}</div></div></section>` +
    `<section class="incl"><div class="w"><h2 class="reveal">What&rsquo;s Included</h2><ul class="rows" style="--c:${s.items.length % 2 === 0 ? 2 : 3}">${rows}</ul></div></section>` +
    `<section class="ledger"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h2 class="reveal">How We Handle <em>the Everyday</em></h2><div class="ddg">${led}</div></div></section>` +
    `<section class="who"><div class="w"><h2 class="reveal">Who Does the Work</h2><ul class="ihs">${ih}</ul></div></section>` +
    `<section class="faqs"><div class="w"><h2 class="reveal">Common Questions</h2><div class="qas">${faq(d.faqs)}</div></div></section>` +
    `<section class="related"><div class="w"><div class="car"><div class="carh"><h2 class="reveal">Explore Other Services</h2><div class="nav2"><button class="prev" aria-label="Previous">${arrow('M15 5l-7 7 7 7')}</button><button class="next" aria-label="Next">${arrow('M9 5l7 7-7 7')}</button></div></div><div class="track">${rel}</div></div></div></section>${carousel}` + cta('../');
  write(`services/${s.slug}.html`, page(s.name, 's', body, '../', E(SUM[s.slug])));
}

// about: team first, built from Diana's working copy
const ABOUT = {
  who: 'NovoTime is a fully independent team that manages your financial life with the care and discipline of a well-run business. We act as your personal controller, your big-picture integrator, and the point of connection between all your advisors, so you have greater clarity and peace of mind. Our only product is the work we do for you every day.',
  story: [
    'For years, a dear friend told me his advisors were doing right by him. Then one day he came to me and said, “I have lost a lot of money, I no longer actively work, and everyone is shrugging their shoulders and blaming it on lack of information.” It was clear he had lost more than money. He had lost trust and peace of mind.',
    'Each of his advisors had done their own job well, but no one saw the full picture. He didn’t know which questions to ask, what information to share, or, most importantly, how to put the advice into action. Nobody was connecting the dots.',
    'Once we brought the right professionals together, he got back on solid ground. But I couldn’t unsee the problem.',
    'I knew there was a better way because I had lived it. After five years in traditional wealth management, I spent most of my career inside a single-family office, first as Chief Investment Officer and later also as Chief Operating Officer. Every day, I saw what an independent team could do: see the whole picture, anticipate what was coming, and make sure nothing fell through the cracks. It taught me something I still believe: good advice is only as valuable as what happens next.',
    'Too often, that kind of support is reserved for those wealthy and experienced enough to build it themselves. I don’t believe it should be. So I brought together a team that shares that belief, and together we built something different.'],
  quotes: ['I couldn’t unsee the problem.', 'Good advice is only as valuable as what happens next.'],
  exp: [['Founder', 'NovoTime'], ['Chief Operating Officer', 'Single-family office'], ['Chief Investment Officer', 'Single-family office'], ['Wealth Management', 'Five years in traditional wealth management']],
  edu: [['Master of Security Analysis and Portfolio Management', 'Creighton University'], ['Master of Business Administration (MBA)', 'Creighton University'], ['Bachelor of Arts in Finance, Banking, Investment and Portfolio Management', 'University of Nebraska at Omaha']],
  different: ['Our team knows the investment world from the inside, and we deliberately chose not to be another wealth management firm. We wanted our independence to be beyond question. We sell no financial products and earn no commissions, from anyone, on anything.',
    'NovoTime gives people who have worked hard for what they have an advocate in their corner: a team that handles the complexities, brings the right people together, looks ahead, and follows through.'],
  name: '<em>Novo</em> means new, and while you can always earn more money, you can never buy back time. NovoTime is about giving you new time, and the freedom to devote it to whatever matters most to you. And knowing someone is looking out for your interests is where peace of mind begins.',
  zeroes: 'We don’t measure a client by the zeroes. We ask one question: Can our team make a real, consistent, and lasting difference in your life?',
  quote: 'Bring us the problems everyone else doesn’t want to deal with. That’s where we do our best work.',
};
const words = (t: string) => E(t).split(/(\s+)/).map(w => /^\s+$/.test(w) ? w : `<span>${w}</span>`).join('');
const aboutHero = `<section class="phead ahero"><canvas id="c" data-v="flow" aria-hidden="true"></canvas><div class="w ahg"><div><p class="aeb">About NovoTime</p><h1>The Purpose Behind <em>NovoTime.</em></h1><p class="sub">We run the day-to-day, bring your advisors together, and make sure nothing falls through the cracks.</p></div><div class="tph"><div class="tph-in"><img src="assets/nt-mark.svg" alt=""><span>Team photo</span></div></div></div></section>`;
const story =
  `<section class="sa a-who"><div class="w"><h2 class="reveal">Who We Are</h2><div class="sb reveal"><p>${E(ABOUT.who)}</p></div></div></section>` +
  `<section class="sa a-story"><div class="w"><h2 class="reveal">How NovoTime Began</h2>` +
  `<div class="chs">${[[0, 3], [3, 5]].map(([a, b], k) => `<div class="ch reveal"><p class="pq">${E(ABOUT.quotes[k])}</p><div class="chb">${ABOUT.story.slice(a, b).map(t => `<p>${E(t)}</p>`).join('')}</div></div>`).join('')}</div>` +
  `<div class="fd reveal"><div class="fdp"><div class="fdp-in"><img src="assets/nt-mark.svg" alt=""><span>Photo of Diana</span></div></div><div class="fdr"><p class="nm">Diana V. Novoselska</p><p class="rl">Founder, NovoTime</p>` +
  `<div class="cvg">${[['Experience', ABOUT.exp, 'building'], ['Education', ABOUT.edu, 'cap']].map(([t, l, ic]: any) => `<div class="cv"><h3>${icon(ic)}${t}</h3><ul>${l.map(([a, b]: string[]) => `<li><b>${E(a)}</b><span>${E(b)}</span></li>`).join('')}</ul></div>`).join('')}</div></div></div></div></section>` +
  `<section class="sa s-3"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h2 class="reveal">Why We&rsquo;re <em>Different</em></h2><div class="sb reveal">${ABOUT.different.map(t => `<p>${E(t)}</p>`).join('')}</div></div></section>` +
  `<section class="sa a-name"><div class="w"><h2 class="reveal">What Our Name Means</h2><div class="sb reveal"><p>${ABOUT.name}</p></div></div></section>`;
const vals = VALUES.map((v: any) => `<div class="v reveal"><h3>${v.title}</h3><p>${E(v.lines[0])} ${E(v.lines[1])}</p></div>`).join('');
const closing = `<section class="sa a-close"><div class="w"><p class="zr reveal">${E(ABOUT.zeroes)}</p><div class="close"><p class="q">${words(ABOUT.quote)}</p></div></div></section>`;
const aboutFx = `<script>(function(){const q=document.querySelectorAll('.close .q span');if(matchMedia('(prefers-reduced-motion: reduce)').matches){q.forEach(s=>s.classList.add('on'));return}
let t=0;function u(){t=0;const vh=innerHeight;if(q.length){const r=q[0].parentNode.getBoundingClientRect(),p=Math.max(0,Math.min(1,(vh*.85-r.top)/(vh*.5)));const n=Math.round(p*q.length);q.forEach((s,i)=>s.classList.toggle('on',i<n))}}
addEventListener('scroll',()=>{if(!t)t=requestAnimationFrame(u)},{passive:true});u()})()</script>`;
write('about.html', page('About', 'a', aboutHero + story +
  `<section class="vals"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h2 class="reveal">What We <em>Stand On</em></h2><div class="vlist">${vals}</div></div></section>` + closing + cta() + aboutFx,
  '', 'NovoTime is an independent team in Omaha that runs the day-to-day of your financial life and brings your advisors together.'));
write('founder.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=about.html"><link rel="canonical" href="about.html"><title>About | NovoTime</title></head><body><a href="about.html">About NovoTime</a></body></html>\n');

// contact
const cform = `<section class="reach"><div class="w"><div class="rgrid2">
<div class="direct reveal"><h2>Reach Us Directly</h2>
<div class="dl"><span>Phone</span><a href="tel:+14022398086">402-239-8086</a></div>
<div class="dl"><span>Email</span><a href="mailto:contact@novo-time.com">contact@novo-time.com</a></div>
<div class="dl"><span>Office</span><p>9375 Burt St., Suite 202<br>Omaha, NE 68114</p></div></div>
<form class="cf reveal" onsubmit="event.preventDefault();const f=this.elements,b=['Name: '+f.name.value,'Email: '+f.email.value,'Phone: '+f.phone.value,'',f.message.value].join('\\n');location.href='mailto:contact@novo-time.com?subject='+encodeURIComponent('Website inquiry from '+(f.name.value||'a visitor'))+'&body='+encodeURIComponent(b)"><h2>Send a Message</h2>
<div class="two"><label>Name<input class="f" name="name" autocomplete="name" required></label><label>Email<input class="f" type="email" name="email" autocomplete="email" required></label></div>
<label>Phone<input class="f" type="tel" name="phone" autocomplete="tel"></label>
<label>How can we help?<textarea class="f" name="message" rows="4"></textarea></label>
<button type="submit" class="btn">Send message</button></form>
</div></div></section>`;
const map = `<section class="map"><iframe title="NovoTime office on Burt St. in Omaha" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps?q=9375+Burt+St+Suite+202,+Omaha,+NE+68114&z=15&output=embed"></iframe></section>`;
write('contact.html', page('Contact Us', 'c', phead('Let&rsquo;s start <em>a conversation.</em>') + cform + map +
  `<section class="faqs alt"><div class="w"><h2 class="reveal">Common Questions</h2><div class="qas">${faq(FAQ)}</div></div></section>`,
  '', 'Start a conversation with NovoTime in Omaha.'));

// homepage: About link, subpage styles, and a link from each service panel to its page
let idx = read('index.html').replaceAll('href="founder.html"', 'href="about.html"')
  .replace('<h1>Your financial life,<br><em>brought together.</em></h1>', '<h1>Your financial life,<br><em>brought together</em><span class="l3">by one team, fully on your side.</span></h1>')
  .replace('One team with nothing to sell, so you have more time and peace of mind for what matters to you.', 'So you have more time and peace of mind for what matters most.')
  .replace('Let&rsquo;s make room<br>for', 'Let&rsquo;s make time<br>for')
  .replace('</title>', '</title><meta name="description" content="NovoTime is an independent family office in Omaha. One team that handles the financial administration, tax coordination and paperwork behind your family, with nothing to sell.">')
  .replace('<link rel="stylesheet" href="assets/site.css">', '<link rel="stylesheet" href="assets/site.css"><link rel="stylesheet" href="assets/pages.css">');
SV.forEach((s, k) => {
  const a = `<div class="pane${k === 0 ? ' on' : ''}" id="sp${k}" role="tabpanel">`;
  const j = idx.indexOf(a); const e = idx.indexOf('</ul>', j) + 5;
  idx = idx.slice(0, e) + `<a class="link light more" href="services/${s.slug}.html">View ${s.name}</a>` + idx.slice(e);
});
const DOTS = `<section class="dots"><div class="w"><h2 class="reveal">Every Dot, <em>Connected.</em></h2><div class="stage"></div><p class="after reveal">Your CPA, attorney, insurance agent, banker, and investment advisor each do their own job well. NovoTime runs the day-to-day of your financial life and connects all of them around you, so nothing falls through the cracks.</p></div></section>`;
idx = idx.replace('<section class="approach">', DOTS + '<section class="approach">').replace('</body>', '<script src="assets/dots.js"></script></body>');
write('index.html', idx);
console.log('built', SV.length, 'service pages');
