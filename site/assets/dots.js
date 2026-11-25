// Connect the dots: the people a family relies on start scattered and tangled,
// then settle into one ring around the family as the section scrolls into view.
(function () {
  const st = document.querySelector('.dots .stage'); if (!st) return;
  const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const NS = 'http://www.w3.org/2000/svg';
  const names = ['CPA', 'Attorneys', 'Bankers', 'Charitable Advisors', 'Property Managers', 'Business Advisors', 'Insurance Agents', 'Investment Advisors'];
  const N = names.length;
  const scat = [[.12, .2], [.7, .1], [.9, .44], [.6, .9], [.2, .82], [.42, .28], [.86, .78], [.06, .52]];
  const tangle = [[0, 3], [1, 5], [2, 6], [4, 7], [0, 6], [3, 5], [1, 4], [2, 7], [5, 7]];
  const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('aria-hidden', 'true'); st.appendChild(svg);
  const mk = (t, a, p = svg) => { const e = document.createElementNS(NS, t); for (const k in a) e.setAttribute(k, a[k]); p.appendChild(e); return e; };
  const tg = tangle.map(() => mk('line', { class: 'tg' }));
  const halo = mk('circle', { class: 'halo' });
  const ring = mk('circle', { class: 'ring' });
  const inner = mk('circle', { class: 'inner' });
  // what NovoTime does, set around the ring
  const defs = mk('defs', {}), arcT = mk('path', { id: 'arcT' }, defs), arcB = mk('path', { id: 'arcB' }, defs);
  const words = mk('g', { class: 'words' });
  [['arcT', '25%', 'In-House Accounting'], ['arcT', '75%', 'Consolidated Reporting'], ['arcB', '25%', 'Daily Follow-Through'], ['arcB', '75%', 'Big Picture Coordination']].forEach(([id, off, t]) => {
    const tx = mk('text', {}, words), tp = mk('textPath', { href: '#' + id, startOffset: off, 'text-anchor': 'middle' }, tx); tp.textContent = t;
  });
  const studs = [0, 1, 2].map(() => mk('circle', { class: 'stud', r: 3 }, words));
  const gl = names.map(() => mk('path', { class: 'gl' }));
  const pulses = names.map(() => mk('circle', { class: 'pl', r: 3 }));
  const core = document.createElement('div'); core.className = 'core'; core.innerHTML = '<span>You</span><small>and Your Family</small>'; st.appendChild(core);
  const tag = document.createElement('div'); tag.className = 'tag'; tag.innerHTML = '<b><img src="assets/nt-mark.svg" alt="">NovoTime</b><small>Your financial team</small>'; st.appendChild(tag);
  const lab = names.map(n => { const d = document.createElement('div'); d.className = 'nd'; d.innerHTML = '<i></i><span>' + n + '</span>'; st.appendChild(d); return d; });
  let W, H, cx, cy, rC, rN, home, len = [];
  function layout() {
    W = st.clientWidth; H = st.clientHeight; cx = W / 2; cy = H / 2; svg.setAttribute('viewBox', `0 0 ${W} ${H}`);
    const m = Math.min(W, H), small = W < 700;
    rN = m * (small ? .24 : .25); rC = rN * (small ? .72 : .74);
    const rx = W * (small ? .34 : .4), ry = H * (small ? .42 : .38);
    home = names.map((_, k) => { const a = -Math.PI / 2 + Math.PI / N + k * 2 * Math.PI / N; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
    for (const c of [ring, halo]) { c.setAttribute('cx', cx); c.setAttribute('cy', cy); }
    ring.setAttribute('r', rN); halo.setAttribute('r', rN + 14);
    inner.setAttribute('cx', cx); inner.setAttribute('cy', cy); inner.setAttribute('r', rC);
    const fs = 10.5, rt = rC + (rN - rC) / 2 - fs * .35, rb = rC + (rN - rC) / 2 + fs * .35;
    words.style.fontSize = fs + 'px'; words.style.display = small ? 'none' : '';
    arcT.setAttribute('d', `M${cx - rt} ${cy}A${rt} ${rt} 0 0 1 ${cx + rt} ${cy}`);
    arcB.setAttribute('d', `M${cx - rb} ${cy}A${rb} ${rb} 0 0 0 ${cx + rb} ${cy}`);
    const rs = (rC + rN) / 2;
    [[cx, cy - rs], [cx - rs, cy], [cx + rs, cy]].forEach(([x, y], i) => { studs[i].setAttribute('cx', x); studs[i].setAttribute('cy', y); });
    const C = 2 * Math.PI * rN; ring.style.strokeDasharray = C; ring._c = C;
    core.style.cssText = `left:${cx}px;top:${cy}px;width:${rC * 2}px;height:${rC * 2}px`;
    tag.style.left = cx + 'px'; tag.style.top = (cy + rN + (small ? 30 : 34)) + 'px';
    draw(true);
  }
  const cl = v => Math.max(0, Math.min(1, v));
  const ss = (a, b, v) => { const t = cl((v - a) / (b - a)); return t * t * (3 - 2 * t); };
  let p = RM ? 1 : 0, lp = -1, vis = false, raf = 0;
  function prog() {
    if (RM) return 1;
    const r = st.getBoundingClientRect(), vh = innerHeight, start = vh * .95, end = vh * .5 - r.height / 2;
    return cl((start - r.top) / (start - end));
  }
  function draw(force, now = performance.now()) {
    p = prog(); const moved = force || Math.abs(p - lp) > .001; lp = p;
    const m = ss(.2, .62, p), tgo = (1 - m) * ss(0, .15, p) * .55, ln = ss(.42, .82, p), rg = ss(.5, .88, p), co = ss(.66, .96, p);
    if (moved) {
      const pos = home.map((h, k) => [W * scat[k][0] + (h[0] - W * scat[k][0]) * m, H * scat[k][1] + (h[1] - H * scat[k][1]) * m]);
      tangle.forEach(([a, b], i) => { const e = tg[i]; e.setAttribute('x1', pos[a][0]); e.setAttribute('y1', pos[a][1]); e.setAttribute('x2', pos[b][0]); e.setAttribute('y2', pos[b][1]); e.style.opacity = tgo; });
      pos.forEach((q, k) => {
        lab[k].style.transform = `translate(${q[0]}px,${q[1]}px)`; lab[k].style.opacity = ss(0, .12, p) * (.55 + .45 * m);
        lab[k].classList.toggle('on', ln > .98); lab[k].classList.toggle('up', home[k][1] < cy);
        const dx = cx - q[0], dy = cy - q[1], L = Math.hypot(dx, dy), ex = cx - dx / L * rN, ey = cy - dy / L * rN;
        const ll = Math.hypot(ex - q[0], ey - q[1]); len[k] = [q, ex, ey, ll];
        gl[k].setAttribute('d', `M${q[0]} ${q[1]}L${ex} ${ey}`); gl[k].style.strokeDasharray = ll; gl[k].style.strokeDashoffset = ll * (1 - ln);
      });
      ring.style.strokeDashoffset = ring._c * (1 - rg); halo.style.opacity = rg * .5; inner.style.opacity = rg; words.style.opacity = ss(.62, .92, p);
      core.style.opacity = co; core.style.transform = `translate(-50%,-50%) scale(${.86 + .14 * co})`;
      tag.style.opacity = rg; st.classList.toggle('done', co > .98);
    }
    // once everything is connected, light travels from each person into the ring
    const live = co > .98 && !RM;
    pulses.forEach((c, k) => {
      if (!live || !len[k]) { c.style.opacity = 0; return; }
      const [q, ex, ey] = len[k], f = ((now / 2600) + k / N) % 1, e = f * f * (3 - 2 * f);
      c.setAttribute('cx', q[0] + (ex - q[0]) * e); c.setAttribute('cy', q[1] + (ey - q[1]) * e); c.style.opacity = Math.sin(Math.PI * f);
    });
    return live;
  }
  function loop(now) { if (!vis) { raf = 0; return; } draw(false, now); raf = requestAnimationFrame(loop); }
  new IntersectionObserver(e => { vis = e[0].isIntersecting; if (vis && !raf) raf = requestAnimationFrame(loop); }, { rootMargin: '100px' }).observe(st);
  addEventListener('resize', layout); layout();
})();
