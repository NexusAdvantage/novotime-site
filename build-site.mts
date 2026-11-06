// Builds the static NovoTime site into dist/.
// Copies site/ as is, then generates the subpages from the copy in content/
// and Diana's verbatim service lists in site/services.html.
// Run: node --experimental-strip-types build-site.mts
import { readFileSync, writeFileSync, mkdirSync, cpSync, rmSync } from 'node:fs';
import { SERVICE_DETAILS } from './content/serviceDetails.ts';
import { SERVICES } from './content/services.ts';
import { NAME, MISSION, FOUNDER } from './content/about.ts';
import { VALUES } from './content/values.ts';
import { FAQ } from './content/faq.ts';

const SRC = 'site', OUT = 'dist';
rmSync(OUT, { recursive: true, force: true });
cpSync(SRC, OUT, { recursive: true });
const read = (f: string) => readFileSync(`${SRC}/${f}`, 'utf8');
const write = (f: string, s: string) => writeFileSync(`${OUT}/${f}`, s);
const E = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/’/g, '&rsquo;').replace(/‘/g, '&lsquo;').replace(/“/g, '&ldquo;').replace(/”/g, '&rdquo;');

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

function page(title: string, on: string, body: string, p = '', desc = '') {
  const nav = [['s', 'services.html', 'Services'], ['a', 'about.html', 'About'], ['c', 'contact.html', 'Contact Us']]
    .map(([k, h, t]) => `<a href="${p}${h}"${k === on ? ' class="on"' : ''}>${t}</a>`).join('');
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} | NovoTime</title>${desc ? `<meta name="description" content="${desc}">` : ''}
<link rel="icon" href="${p}assets/nt-mark.svg">${FONTS}<link rel="stylesheet" href="${p}assets/site.css"><link rel="stylesheet" href="${p}assets/pages.css"></head><body>
<header class="top dark"><a class="lk" href="${p}index.html"><img src="${p}assets/nt-mark.svg" alt=""><span>NovoTime</span></a><nav class="main">${nav}</nav></header>
${body}
<footer><div class="w"><div class="cols"><div><a class="lk" href="${p}index.html"><img src="${p}assets/nt-mark.svg" alt=""><span>NovoTime</span></a><p class="tag">Independent by design. Personal by nature.</p></div>
<div class="fl"><a href="${p}services.html">Services</a><a href="${p}about.html">About</a><a href="${p}contact.html">Contact Us</a></div>
<div>9375 Burt St., Suite 202<br>Omaha, NE 68114<br><a href="tel:+14022398086">402-239-8086</a><br><a href="mailto:contact@novo-time.com">contact@novo-time.com</a></div></div>
${DISC}<div class="bot">&copy; NovoTime LLC</div></div></footer><script src="${p}assets/site.js"></script></body></html>
`;
}
const cta = (p = '') => `<section class="cta"><div class="w"><p class="eyebrow reveal">A simpler financial life starts here</p><h2 class="reveal">Let&rsquo;s make room<br>for <em>what matters.</em></h2><a class="btn reveal" href="${p}contact.html">Contact us</a></div></section>`;
const phead = (h1: string, sub = '') => `<section class="phead"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h1>${h1}</h1>${sub ? `<p class="sub">${sub}</p>` : ''}</div></section>`;
const faq = (items: any[]) => items.map(q => `<details class="qa reveal"><summary>${E(q.q)}</summary><p>${E(q.a)}</p></details>`).join('');

// services overview
const cards = SV.map(s => `<a class="scard reveal" href="services/${s.slug}.html"><h3>${s.name}</h3><p class="g">${s.tag}</p><p class="d">${E(SUM[s.slug])}</p><span class="more">View service</span></a>`).join('');
write('services.html', page('Our Services', 's', phead('Our Services', 'There is no all-or-nothing package. Choose only the services most valuable to you.') +
  `<section class="sgrid-sec"><div class="w"><div class="sgrid">${cards}</div></div></section>` + cta(),
  '', 'The nine services NovoTime provides to families, from financial administration to travel and property.'));

// service pages
mkdirSync(`${OUT}/services`, { recursive: true });
for (const s of SV) {
  const d = SD[s.slug];
  const intro = d.intro.slice(0, 2).map((t: string) => `<p class="reveal">${E(t)}</p>`).join('');
  const rows = s.items.map(t => `<li class="reveal">${t}</li>`).join('');
  const led = d.ledger.map((r: any) => `<div class="lrow reveal"><h3>${E(r.task)}</h3><div class="lc"><span>Without NovoTime</span><p>${E(r.without)}</p></div><div class="lc w2"><span>With NovoTime</span><p>${E(r.with)}</p></div></div>`).join('');
  const ih = d.inHouse.map((t: string) => `<li>${E(t)}</li>`).join('');
  const pt = d.partners.map((t: string) => `<li>${E(t)}</li>`).join('');
  const rel = d.related.map((r: string) => `<a class="rcard reveal" href="${r}.html"><h3>${NM[r]}</h3><span class="more">View service</span></a>`).join('');
  const body = phead(s.name, s.tag) +
    `<section class="sintro"><div class="w"><h2 class="reveal">${E(d.headline)}</h2><div class="lede">${intro}</div></div></section>` +
    `<section class="incl"><div class="w"><h2 class="reveal">What&rsquo;s Included</h2><ul class="rows">${rows}</ul></div></section>` +
    `<section class="ledger"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h2 class="reveal">The Difference <em>Day to Day</em></h2><div class="ltab">${led}</div></div></section>` +
    `<section class="who"><div class="w"><h2 class="reveal">Who Does the Work</h2><div class="split"><div class="reveal"><h3>Done In House by NovoTime</h3><ul>${ih}</ul></div><div class="reveal"><h3>Coordinated With</h3><ul>${pt}</ul></div></div></div></section>` +
    `<section class="faqs"><div class="w"><h2 class="reveal">Common Questions</h2><div class="qas">${faq(d.faqs)}</div></div></section>` +
    `<section class="related"><div class="w"><h2 class="reveal">Related Services</h2><div class="rgrid">${rel}</div></div></section>` + cta('../');
  write(`services/${s.slug}.html`, page(s.name, 's', body, '../', E(SUM[s.slug])));
}

// about
const letter = read('founder.html').match(/<section class="letter">[\s\S]*?<\/section>/)![0];
const name = NAME.map((n: any) => `<div class="reveal"><p class="word">${n.word}</p><h3>${E(n.title)}</h3><p>${E(n.body)}</p></div>`).join('');
const times = MISSION.times.map((t: any) => `<div class="t reveal"><h3>${E(t.title)}</h3><p>${E(t.body)}</p></div>`).join('');
const path = FOUNDER.chapters.map((c: any) => `<div class="st reveal"><h3>${E(c.title)}</h3><p>${E(c.body)}</p></div>`).join('');
const vals = VALUES.map((v: any) => `<div class="v reveal"><h3>${v.title}</h3><p>${E(v.lines[0])}</p><p>${E(v.lines[1])}</p></div>`).join('');
write('about.html', page('About', 'a', phead('Why I started <em>NovoTime.</em>') + letter +
  `<section class="nm"><svg class="lines" data-l="dark" aria-hidden="true"></svg><div class="w"><h2 class="reveal">What Our Name Means</h2><div class="nm2">${name}</div></div></section>` +
  `<section class="times"><div class="w"><h2 class="reveal">Time Given Back</h2><div class="tgrid">${times}</div></div></section>` +
  `<section class="path"><div class="w"><h2 class="reveal">Diana&rsquo;s Path</h2><div class="tl">${path}</div></div></section>` +
  `<section class="vals"><div class="w"><h2 class="reveal">What We Stand On</h2><div class="vlist">${vals}</div></div></section>` + cta(),
  '', 'Why Diana V. Novoselska founded NovoTime, what the name means, and the values behind the work.'));
write('founder.html', '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=about.html"><link rel="canonical" href="about.html"><title>About | NovoTime</title></head><body><a href="about.html">About NovoTime</a></body></html>\n');

// contact
const cgrid = read('contact.html').match(/<section class="contact">[\s\S]*?<\/section>/)![0];
write('contact.html', page('Contact Us', 'c', phead('Let&rsquo;s start <em>a conversation.</em>') + cgrid +
  `<section class="faqs alt"><div class="w"><h2 class="reveal">Common Questions</h2><div class="qas">${faq(FAQ)}</div></div></section>`,
  '', 'Start a conversation with NovoTime in Omaha.'));

// homepage: About link, subpage styles, and a link from each service panel to its page
let idx = read('index.html').replaceAll('href="founder.html"', 'href="about.html"')
  .replace('<link rel="stylesheet" href="assets/site.css">', '<link rel="stylesheet" href="assets/site.css"><link rel="stylesheet" href="assets/pages.css">');
SV.forEach((s, k) => {
  const a = `<div class="pane${k === 0 ? ' on' : ''}" id="sp${k}" role="tabpanel">`;
  const j = idx.indexOf(a); const e = idx.indexOf('</ul>', j) + 5;
  idx = idx.slice(0, e) + `<a class="link light more" href="services/${s.slug}.html">View ${s.name}</a>` + idx.slice(e);
});
write('index.html', idx);
console.log('built', SV.length, 'service pages');
