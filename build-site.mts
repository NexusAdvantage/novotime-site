// Builds the static NovoTime site into dist/.
// Copies site/ as is, then generates the subpages from the copy in content/
// and Diana's verbatim service lists in site/services.html.
// Run: node --experimental-strip-types build-site.mts
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import { SERVICE_DETAILS } from './content/serviceDetails.ts';
import { SERVICES } from './content/services.ts';
import { FOUNDER } from './content/about.ts';
import { VALUES } from './content/values.ts';
import { FAQ } from './content/faq.ts';

const SRC = 'site', OUT = 'dist';
rmSync(OUT, { recursive: true, force: true });
cpSync(SRC, OUT, { recursive: true });
const read = (f: string) => readFileSync(`${SRC}/${f}`, 'utf8');
const write = (f: string, s: string) => writeFileSync(`${OUT}/${f}`, s);
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
  [/renewal|deadline/i, 'calendar'], [/insurance|coverage/i, 'shield'], [/adviser/i, 'people'], [/capital call|distribution|transfer|liquidity/i, 'arrows'],
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
const cta = (p = '') => `<section class="cta"><div class="w"><h2 class="reveal">Let&rsquo;s make room<br>for <em>what matters.</em></h2><a class="btn reveal" href="${p}contact.html">Contact us</a></div></section>`;
const phead = (h1: string, _sub = '', lt = false) => `<section class="phead${lt ? ' lt' : ''}"><canvas id="c" data-v="flow"${lt ? ' data-t="light"' : ''} aria-hidden="true"></canvas><div class="w"><h1>${h1}</h1></div></section>`;
const faq = (items: any[]) => items.map(q => `<details class="qa reveal"><summary>${E(q.q)}</summary><p>${E(q.a)}</p></details>`).join('');

// services overview: an even three by three grid with Diana's names and taglines
const cells = SV.map((s, k) => `<a class="gc reveal" data-d="${(k % 3) * 120}" href="services/${s.slug}.html"><span class="gl" aria-hidden="true"></span>${icon(SVC_IC[s.slug])}<h2>${s.name}</h2><p>${s.tag}</p><span class="go">View service</span></a>`).join('');
const glow = `<script>document.querySelectorAll('.gc').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--x',(e.clientX-r.left)+'px');c.style.setProperty('--y',(e.clientY-r.top)+'px')}))</script>`;
write('services.html', page('Our Services', 's', phead('Our Services', 'There is no all-or-nothing package. Choose only the services most valuable to you.') +
  `<section class="sgrid"><svg class="lines" data-l="light" aria-hidden="true"></svg><div class="w"><div class="gg">${cells}</div></div></section>${glow}` + cta(),
  '', 'The nine services NovoTime provides to families, from financial administration to travel and property.'));

// service pages
mkdirSync(`${OUT}/services`, { recursive: true });
const lc = (t: string) => t.split(' ').map(w => /^[A-Z0-9]{2,}$/.test(w) ? w : w.toLowerCase()).join(' ');
const andList = (xs: string[]) => xs.length < 2 ? xs.join('') : xs.slice(0, -1).join(', ') + (xs.length > 2 ? ',' : '') + ' and ' + xs[xs.length - 1];
const carousel = `<script>document.querySelectorAll('.car').forEach(c=>{const t=c.querySelector('.track'),st=()=>t.querySelector('.rc').offsetWidth+32;c.querySelector('.prev').onclick=()=>t.scrollBy({left:-st(),behavior:'smooth'});c.querySelector('.next').onclick=()=>t.scrollBy({left:st(),behavior:'smooth'})})</script>`;
const arrow = (d: string) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`;
for (const s of SV) {
  const d = SD[s.slug];
  const intro = d.intro.slice(0, 2).map((t: string) => `<p class="reveal">${E(t)}</p>`).join('');
  const rows = s.items.map((t, k) => `<li class="reveal" data-d="${(k % 2) * 100}">${icon(pick(t))}<p>${t}</p></li>`).join('');
  const led = d.ledger.map((r: any, k: number) => `<div class="dd reveal" data-d="${(k % 2) * 100}"><h3>${E(r.task)}</h3><p>${E(r.with)}.</p></div>`).join('');
  const ih = d.inHouse.map((t: string, k: number) => `<li class="reveal" data-d="${k * 90}">${icon(pick(t))}<p>${E(t)}</p></li>`).join('');
  const who = d.partners.length ? `All of this is done in house by NovoTime, in coordination with ${andList(d.partners.map(lc))}.` : 'All of this is done in house by NovoTime.';
  const k0 = SLUGS.indexOf(s.slug);
  const others = [...SLUGS.slice(k0 + 1), ...SLUGS.slice(0, k0)];
  const rel = others.map(r => `<a class="rc" href="${r}.html">${icon(SVC_IC[r])}<h3>${NM[r]}</h3><p>${SV.find(x => x.slug === r)!.tag}</p><span class="go">View service</span></a>`).join('');
  const body = phead(s.name) +
    `<section class="sintro"><div class="w"><h2 class="reveal">${E(d.headline)}</h2><div class="lede">${intro}</div></div></section>` +
    `<section class="incl"><div class="w"><h2 class="reveal">What&rsquo;s Included</h2><ul class="rows">${rows}</ul></div></section>` +
    `<section class="ledger"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h2 class="reveal">How We Handle <em>the Everyday</em></h2><div class="ddg">${led}</div></div></section>` +
    `<section class="who"><div class="w"><h2 class="reveal">Who Does the Work</h2><ul class="ihs">${ih}</ul><p class="wsum reveal">${E(who)}</p></div></section>` +
    `<section class="faqs"><div class="w"><h2 class="reveal">Common Questions</h2><div class="qas">${faq(d.faqs)}</div></div></section>` +
    `<section class="related"><div class="w"><div class="car"><div class="carh"><h2 class="reveal">Explore Other Services</h2><div class="nav2"><button class="prev" aria-label="Previous">${arrow('M15 5l-7 7 7 7')}</button><button class="next" aria-label="Next">${arrow('M9 5l7 7-7 7')}</button></div></div><div class="track">${rel}</div></div></div></section>${carousel}` + cta('../');
  write(`services/${s.slug}.html`, page(s.name, 's', body, '../', E(SUM[s.slug])));
}

// about
const letterSec = read('founder.html').match(/<section class="letter">[\s\S]*?<\/section>/)![0];
const paras = [...letterSec.matchAll(/<p class="reveal">([\s\S]*?)<\/p>/g)].map(m => m[1]);
const quote = letterSec.match(/<p class="q reveal">([\s\S]*?)<\/p>/)![1];
const sig = letterSec.match(/<p class="sig reveal">([\s\S]*?)<small>([\s\S]*?)<\/small><\/p>/)!;
// Diana's story in four sections, each with its own layout built from her words
const PH = `<div class="ph"><div class="ph-in"><img src="assets/nt-mark.svg" alt=""><span>Headshot of Diana</span></div></div>`;
const body = (xs: string[]) => xs.map(t => `<p>${t}</p>`).join('');
const path = FOUNDER.chapters.map((c: any) => `<div class="st reveal"><h3>${E(c.title)}</h3><p>${E(c.body)}</p></div>`).join('');
const four = ['Handles the complexities', 'Brings the right people together', 'Looks ahead', 'Follows through'];
const story =
  `<section class="sa s-1"><div class="w s1g"><div><h2 class="reveal">Where It Started</h2><div class="sb reveal">${body([paras[0], paras[1], paras[2]])}</div></div><div class="s1p reveal">${PH}</div></div></section>` +
  `<section class="sa s-2"><div class="w"><h2 class="reveal">A Better Way</h2><div class="sb reveal">${body([paras[3], paras[4]])}</div><div class="tl">${path}</div></div></section>` +
  `<section class="sa s-3"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h2 class="reveal">Something <em>Different</em></h2><div class="sb reveal">${body([paras[5], paras[6]])}</div><div class="four">${four.map((t, k) => `<p class="reveal" data-d="${k * 110}">${t}</p>`).join('')}</div></div></section>` +
  `<section class="sa s-4"><div class="w"><h2 class="reveal">What Our Name Means</h2><div class="sb reveal">${body([paras[7], paras[8]])}</div>` +
  `<div class="close reveal"><p class="q">${quote}</p><p class="by">${sig[1]}<small>${sig[2]}</small></p></div></div></section>`;
const vals = VALUES.map((v: any) => `<div class="v reveal"><h3>${v.title}</h3><p>${E(v.lines[0])} ${E(v.lines[1])}</p></div>`).join('');
write('about.html', page('About', 'a', phead('Why I started <em>NovoTime.</em>', 'Diana V. Novoselska, Founder') + story +
  `<section class="vals"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h2 class="reveal">What We <em>Stand On</em></h2><div class="vlist">${vals}</div></div></section>` + cta(),
  '', 'Why Diana V. Novoselska founded NovoTime and the values behind the work.'));
write('founder.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=about.html"><link rel="canonical" href="about.html"><title>About | NovoTime</title></head><body><a href="about.html">About NovoTime</a></body></html>\n');

// contact
const cform = `<section class="reach"><div class="w"><div class="rgrid2">
<div class="direct reveal"><h2>Reach Us Directly</h2>
<div class="dl"><span>Phone</span><a href="tel:+14022398086">402-239-8086</a></div>
<div class="dl"><span>Email</span><a href="mailto:contact@novo-time.com">contact@novo-time.com</a></div>
<div class="dl"><span>Office</span><p>9375 Burt St., Suite 202<br>Omaha, NE 68114</p></div></div>
<form class="cf reveal" onsubmit="event.preventDefault()"><h2>Send a Message</h2>
<div class="two"><label>Name<input class="f" name="name" autocomplete="name"></label><label>Email<input class="f" type="email" name="email" autocomplete="email"></label></div>
<label>Phone<input class="f" type="tel" name="phone" autocomplete="tel"></label>
<label>How can we help?<textarea class="f" name="message" rows="4"></textarea></label>
<button type="submit" class="btn">Send message</button></form>
</div></div></section>`;
write('contact.html', page('Contact Us', 'c', phead('Let&rsquo;s start <em>a conversation.</em>') + cform +
  `<section class="faqs alt"><div class="w"><h2 class="reveal">Common Questions</h2><div class="qas">${faq(FAQ)}</div></div></section>`,
  '', 'Start a conversation with NovoTime in Omaha.'));

// homepage: About link, subpage styles, and a link from each service panel to its page
let idx = read('index.html').replace('<p class="eyebrow reveal">A simpler financial life starts here</p>', '').replaceAll('href="founder.html"', 'href="about.html"')
  .replace('<link rel="stylesheet" href="assets/site.css">', '<link rel="stylesheet" href="assets/site.css"><link rel="stylesheet" href="assets/pages.css">');
SV.forEach((s, k) => {
  const a = `<div class="pane${k === 0 ? ' on' : ''}" id="sp${k}" role="tabpanel">`;
  const j = idx.indexOf(a); const e = idx.indexOf('</ul>', j) + 5;
  idx = idx.slice(0, e) + `<a class="link light more" href="services/${s.slug}.html">View ${s.name}</a>` + idx.slice(e);
});
write('index.html', idx);
console.log('built', SV.length, 'service pages');
