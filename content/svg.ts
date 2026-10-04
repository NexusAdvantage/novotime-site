// Icon sprite and How It Works illustrations. Colors are CSS classes in app/globals.css.

export const SPRITE = `
<pattern id="hatchGold" width="3" height="3" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<rect class="svgc-fill-e7dcb0" width="3" height="3"/>
<line class="svgc-stroke-86731e" x1="0" y1="0" x2="0" y2="3" stroke-width="1.2"/>
</pattern>
<pattern id="hatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<line class="svgc-stroke-86731e" x1="0" y1="0" x2="0" y2="4" stroke-width="1.1" opacity=".6"/>
</pattern>
<pattern id="hatchInk" width="3.5" height="3.5" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
<line class="svgc-stroke-002f5f" x1="0" y1="0" x2="0" y2="3.5" stroke-width=".9" opacity=".35"/>
</pattern>
<symbol id="i-ledger" viewBox="0 0 64 64">
<path d="M6 16c9-4 18-3 26 3c8-6 17-7 26-3v34c-9-4-18-3-26 3c-8-6-17-7-26-3z" fill="none"/>
<path d="M32 19v34"/>
<path d="M11 24c6-2 11-1 16 2M11 30c6-2 11-1 16 2M11 36c6-2 11-1 16 2M11 42c6-2 11-1 16 2"/>
<path d="M37 26c5-3 10-4 16-2v18c-6-2-11-1-16 2z" fill="url(#hatch)" stroke="none"/>
<path d="M37 26c5-3 10-4 16-2M37 44c5-3 10-4 16-2"/>
</symbol>
<symbol id="i-tax" viewBox="0 0 64 64">
<path d="M14 6h24l10 10v38H14z" fill="none"/>
<path d="M38 6v10h10"/>
<path d="M20 22h20M20 28h22M20 34h14"/>
<circle cx="44" cy="46" r="10" fill="url(#hatch)"/>
<circle class="svgc-fill-f6f2e9" cx="44" cy="46" r="6"/>
<path d="M38 54l-3 8l5-3l3 4l2-7M50 54l3 8l-5-3l-3 4"/>
</symbol>
<symbol id="i-invest" viewBox="0 0 64 64">
<rect x="6" y="10" width="52" height="40" fill="none"/>
<path d="M6 18h52"/>
<path d="M12 44l10-9l8 4l10-12l12 5" fill="none"/>
<path d="M12 44l10-9l8 4l10-12l12 5v12H12z" fill="url(#hatch)" stroke="none"/>
<circle cx="40" cy="27" r="2.2"/>
<path d="M20 56h24M32 50v6"/>
</symbol>
<symbol id="i-shield" viewBox="0 0 64 64">
<path d="M6 30C10 14 20 8 32 8s22 6 26 22" fill="none"/>
<path d="M6 30c3-4 7-4 10 0c3-4 7-4 10 0c3-4 7-4 10 0c3-4 7-4 10 0c3-4 9-4 12 0" fill="none"/>
<path d="M32 8c-6 6-8 14-8 22M32 8c6 6 8 14 8 22"/>
<path d="M32 8C26 14 24 22 24 30c-3-4-5-4-8 0C16 20 22 12 32 8z" fill="url(#hatch)" stroke="none"/>
<path d="M32 30v20c0 6-8 6-8 1"/>
</symbol>
<symbol id="i-column" viewBox="0 0 64 64">
<path d="M8 18L32 6l24 12z" fill="url(#hatch)"/>
<path d="M10 22h44M12 50h40M8 56h48"/>
<path d="M17 24v24M23 24v24M30 24v24M34 24v24M41 24v24M47 24v24"/>
</symbol>
<symbol id="i-tree" viewBox="0 0 64 64">
<circle cx="32" cy="20" r="11" fill="url(#hatch)"/>
<circle cx="19" cy="28" r="8" fill="none"/>
<circle cx="45" cy="28" r="8" fill="none"/>
<path d="M32 31v25M32 40l-9-8M32 38l10-7"/>
<path d="M32 56c-5 0-10 1-14 3M32 56c5 0 10 1 14 3M24 59h16"/>
</symbol>
<symbol id="i-cap" viewBox="0 0 64 64">
<path d="M4 22L32 10l28 12l-28 12z" fill="url(#hatch)"/>
<path d="M15 27v13c10 7 24 7 34 0V27"/>
<path d="M60 22v16"/>
<circle cx="60" cy="41" r="2.5"/>
</symbol>
<symbol id="i-vault" viewBox="0 0 64 64">
<rect x="8" y="8" width="48" height="46" rx="2" fill="none"/>
<rect x="13" y="13" width="38" height="36" fill="none"/>
<circle cx="32" cy="31" r="10" fill="url(#hatch)"/>
<circle class="svgc-fill-f6f2e9" cx="32" cy="31" r="4"/>
<path d="M32 21v3M32 38v3M22 31h3M39 31h3"/>
<path d="M14 54v4M50 54v4"/>
</symbol>
<symbol id="i-house" viewBox="0 0 64 64">
<path d="M6 30L32 10l26 20" fill="none"/>
<path d="M13 25v29h38V25"/>
<rect x="27" y="38" width="10" height="16" fill="url(#hatch)"/>
<rect x="18" y="31" width="8" height="8" fill="none"/>
<rect x="38" y="31" width="8" height="8" fill="none"/>
<path d="M4 58c10-2 18-3 28-3s18 1 28 3"/>
</symbol>
<symbol id="i-talk" viewBox="0 0 64 64">
<circle cx="22" cy="22" r="9" fill="none"/>
<circle cx="42" cy="22" r="9" fill="url(#hatch)"/>
<path d="M8 54c0-10 6-16 14-16s14 6 14 16M28 54c0-10 6-16 14-16s14 6 14 16"/>
</symbol>
<symbol id="i-plan" viewBox="0 0 64 64">
<path d="M14 6h36v52H14z" fill="none"/>
<path d="M14 6h36v12H14z" fill="url(#hatch)"/>
<path d="M21 28l4 4l8-8M21 40l4 4l8-8M38 29h6M38 41h6"/>
</symbol>
<symbol id="i-sun" viewBox="0 0 64 64">
<path d="M16 44a16 16 0 0 1 32 0z" fill="url(#hatch)"/>
<path d="M16 44a16 16 0 0 1 32 0"/>
<path d="M4 44h56M10 52h44M20 58h24"/>
<path d="M32 10v8M14 18l5 5M50 18l-5 5M6 34h6M52 34h6"/>
</symbol>
<symbol id="i-indep" viewBox="0 0 64 64">
<path d="M32 8v48M18 56h28M12 18h40"/>
<path d="M32 8l-3 4h6z"/>
<path d="M12 18L5 34h14z" fill="url(#hatch)"/>
<path d="M52 18l-7 16h14z" fill="url(#hatch)"/>
<path d="M5 34c2 4 12 4 14 0M45 34c2 4 12 4 14 0"/>
</symbol>
<symbol id="i-flat" viewBox="0 0 64 64">
<ellipse cx="32" cy="44" rx="18" ry="5" fill="url(#hatch)"/>
<path d="M14 44v6c0 3 8 5 18 5s18-2 18-5v-6"/>
<ellipse cx="32" cy="34" rx="18" ry="5" fill="none"/>
<path d="M14 34v6M50 34v6"/>
<ellipse cx="32" cy="24" rx="18" ry="5" fill="url(#hatch)"/>
<path d="M14 24v6M50 24v6"/>
</symbol>
<symbol id="i-nocomm" viewBox="0 0 64 64">
<circle cx="32" cy="32" r="22" fill="none"/>
<circle cx="32" cy="32" r="15" fill="url(#hatch)"/>
<path d="M14 50L50 14"/>
</symbol>
<symbol id="i-hand" viewBox="0 0 64 64">
<path d="M30 8H52v22L28 54L8 34z" fill="url(#hatch)"/>
<circle class="svgc-fill-fbf9f4" cx="44" cy="16" r="3.5"/>
<path d="M6 58L58 6" stroke-width="2"/>
</symbol>
<symbol id="i-biz" viewBox="0 0 64 64">
<path d="M10 56V20h22v36M32 56V8h22v48" fill="none"/>
<path d="M32 8h22v10H32z" fill="url(#hatch)"/>
<path d="M16 28h4M24 28h4M16 36h4M24 36h4M16 44h4M24 44h4M38 26h4M46 26h4M38 34h4M46 34h4M38 42h4M46 42h4M6 56h52"/>
</symbol>
<symbol id="i-check" viewBox="0 0 24 24">
<path class="svgc-fill-86731e" d="M12 1l11 11l-11 11L1 12z" stroke="none"/>
<path class="svgc-stroke-fbf9f4" d="M7.5 12.2l3 3l6-6.4" stroke-width="1.8" fill="none"/>
</symbol>
<symbol id="i-x" viewBox="0 0 24 24">
<path class="svgc-stroke-9aa6b0" d="M12 1l11 11l-11 11L1 12z" fill="none"/>
<path class="svgc-stroke-9aa6b0" d="M8.5 8.5l7 7M15.5 8.5l-7 7" stroke-width="1.5"/>
</symbol>
`;

export const ILLUSTRATION_DEFS = `
<linearGradient id="gl" x1="0" y1="0" x2="1" y2="1">
<stop class="svgc-stopcolor-b9a256" offset="0"/>
<stop class="svgc-stopcolor-f2e4aa" offset=".45"/>
<stop class="svgc-stopcolor-9c8530" offset="1"/>
</linearGradient>
<pattern id="hg" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
<line class="svgc-stroke-c9b86a" x1="0" y1="0" x2="0" y2="5" stroke-width="1" opacity=".55"/>
</pattern>
<pattern id="hg2" width="3.2" height="3.2" patternUnits="userSpaceOnUse" patternTransform="rotate(-35)">
<line class="svgc-stroke-c9b86a" x1="0" y1="0" x2="0" y2="3.2" stroke-width=".9" opacity=".7"/>
</pattern>
<radialGradient id="glow" cx=".5" cy=".5" r=".5">
<stop class="svgc-stopcolor-f2e4aa" offset="0" stop-opacity=".22"/>
<stop class="svgc-stopcolor-f2e4aa" offset="1" stop-opacity="0"/>
</radialGradient>
`;

export const ILLUSTRATIONS: string[] = [
`
<g fill="none" stroke="url(#gl)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="250" cy="230" rx="220" ry="120" fill="url(#glow)" stroke="none"/>
<path d="M24 316H476M24 316l-6 10H482l-6-10M40 326v54M460 326v54"/>
<path class="svgc-fill-0e2a49" d="M44 316l14-74h104l14 74z"/>
<path d="M58 242h104"/>
<g stroke-width="1">
<rect x="66" y="270" width="12" height="9"/>
<rect x="86" y="270" width="12" height="9"/>
<rect x="106" y="270" width="12" height="9"/>
<rect x="126" y="270" width="12" height="9"/>
<rect x="146" y="270" width="12" height="9" fill="url(#hg2)"/>
<rect x="64" y="288" width="12" height="9"/>
<rect x="84" y="288" width="12" height="9"/>
<rect x="104" y="288" width="12" height="9"/>
<rect x="124" y="288" width="12" height="9"/>
<rect x="144" y="288" width="14" height="20" fill="url(#hg2)"/>
</g>
<path d="M150 260l22-8M164 256v-6"/>
<path class="svgc-fill-0e2a49" d="M90 242V120q0-10 10-10h22q10 0 10 10v122"/>
<path d="M90 140c-14 0-18-28 2-30" stroke-width="1"/>
<path d="M98 128h26M98 142h20M98 156h26M98 170h22M98 184h26M98 198h18M98 212h26M98 226h24" stroke-width=".8" opacity=".7"/>
<path class="svgc-fill-0e2a49" d="M200 306l12-86q60-10 104 12v86q-50-22-116-12z"/>
<path d="M316 318v-86"/>
<path class="svgc-fill-0e2a49" d="M316 318v-86q40-22 88-12l10 86q-56-10-98 12z"/>
<path d="M222 240q46-6 84 8M220 256q46-6 86 8M218 272q46-6 88 8M216 288q46-6 90 8" stroke-width=".8" opacity=".6"/>
<path d="M276 238l4 4 8-9M276 254l4 4 8-9M276 270l4 4 8-9M276 286l4 4 8-9" stroke-width="1.4"/>
<path d="M330 248q34-12 72-6M332 264q34-12 74-6M334 280q34-12 76-6M336 296q34-12 78-6" stroke-width=".8" opacity=".6"/>
<path d="M440 316v-150M430 316h20"/>
<path d="M440 166l-3-8h6z"/>
<path class="svgc-fill-0e2a49" d="M412 196h56v40h-56z" transform="rotate(-6 440 216)"/>
<path class="svgc-fill-0e2a49" d="M414 214h56v40h-56z" transform="rotate(5 440 234)"/>
<path class="svgc-fill-0e2a49" d="M412 234h56v44h-56z"/>
<rect x="420" y="246" width="40" height="18" stroke-width="1.2" transform="rotate(-8 440 255)"/>
<text x="440" y="260" text-anchor="middle" font-size="11" letter-spacing="2" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif" transform="rotate(-8 440 255)">PAID</text>
</g>
`,
`
<g fill="none" stroke="url(#gl)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<g transform="translate(250 200) scale(1.3) translate(-250 -200)">
<ellipse cx="250" cy="200" rx="230" ry="150" fill="url(#glow)" stroke="none"/>
<g transform="rotate(90 100 200)">
<rect x="78" y="184" width="44" height="32" rx="8" fill="url(#hg)"/>
<path d="M78 190h44" stroke-width="1"/>
</g>
<g transform="rotate(-90 400 200)">
<rect x="378" y="184" width="44" height="32" rx="8" fill="url(#hg)"/>
<path d="M378 190h44" stroke-width="1"/>
</g>
<g transform="rotate(0 195 92)">
<rect x="173" y="76" width="44" height="32" rx="8" fill="url(#hg)"/>
<path d="M173 82h44" stroke-width="1"/>
</g>
<g transform="rotate(0 305 92)">
<rect x="283" y="76" width="44" height="32" rx="8" fill="url(#hg)"/>
<path d="M283 82h44" stroke-width="1"/>
</g>
<g transform="rotate(180 195 308)">
<rect x="173" y="292" width="44" height="32" rx="8" fill="url(#hg)"/>
<path d="M173 298h44" stroke-width="1"/>
</g>
<g transform="rotate(180 305 308)">
<rect x="283" y="292" width="44" height="32" rx="8" fill="url(#hg)"/>
<path d="M283 298h44" stroke-width="1"/>
</g>
<ellipse class="svgc-fill-0e2a49" cx="250" cy="200" rx="128" ry="82"/>
<ellipse cx="250" cy="200" rx="118" ry="73" stroke-width=".8" opacity=".5"/>
<g transform="rotate(-4 250 200)">
<rect class="svgc-fill-0e2a49" x="218" y="170" width="64" height="62"/>
<rect class="svgc-fill-0e2a49" x="214" y="166" width="64" height="62"/>
<path d="M226 186h40M226 196h40M226 206h30M226 216h36" stroke-width=".8" opacity=".7"/>
<text x="246" y="181" text-anchor="middle" font-size="10" font-style="italic" fill="url(#gl)" stroke="none" font-family="Bodoni Moda,serif">One Plan</text>
</g>
<g transform="rotate(90 158 200)">
<rect class="svgc-fill-0e2a49" x="132" y="189" width="52" height="22" stroke-width="1"/>
<text x="158" y="204" text-anchor="middle" font-size="10.5" letter-spacing="1.5" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">YOU</text>
</g>
<g transform="rotate(-90 342 200)">
<rect class="svgc-fill-0e2a49" x="300" y="189" width="84" height="22" stroke-width="1"/>
<text x="342" y="204" text-anchor="middle" font-size="10.5" letter-spacing="1.5" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">NOVOTIME</text>
</g>
<g transform="rotate(0 198 140)">
<rect class="svgc-fill-0e2a49" x="172" y="129" width="52" height="22" stroke-width="1"/>
<text x="198" y="144" text-anchor="middle" font-size="10.5" letter-spacing="1.5" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">CPA</text>
</g>
<g transform="rotate(0 302 140)">
<rect class="svgc-fill-0e2a49" x="262" y="129" width="80" height="22" stroke-width="1"/>
<text x="302" y="144" text-anchor="middle" font-size="10.5" letter-spacing="1.5" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">ATTORNEY</text>
</g>
<g transform="rotate(0 198 262)">
<rect class="svgc-fill-0e2a49" x="158" y="251" width="80" height="22" stroke-width="1"/>
<text x="198" y="266" text-anchor="middle" font-size="10.5" letter-spacing="1.5" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">ADVISORS</text>
</g>
<g transform="rotate(0 302 262)">
<rect class="svgc-fill-0e2a49" x="260" y="251" width="84" height="22" stroke-width="1"/>
<text x="302" y="266" text-anchor="middle" font-size="10.5" letter-spacing="1.5" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">INSURANCE</text>
</g>
<path d="M220 200h-34M280 200h34" stroke-width=".7" opacity=".4" stroke-dasharray="2 4"/>
</g>
</g>
`,
`
<g fill="none" stroke="url(#gl)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="250" cy="200" rx="210" ry="160" fill="url(#glow)" stroke="none"/>
<path class="svgc-fill-0e2a49" d="M126 28h232v348H126z" transform="rotate(-3 242 202)"/>
<g transform="rotate(-3 242 202)">
<text x="242" y="72" text-anchor="middle" font-size="22" fill="url(#gl)" stroke="none" font-family="Bodoni Moda,serif">Statement of Fees</text>
<path d="M154 88h176" stroke-width="1"/>
<text x="154" y="128" font-size="13" letter-spacing="1" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">Commissions</text>
<text x="330" y="128" text-anchor="end" font-size="18" font-style="italic" fill="url(#gl)" stroke="none" font-family="Bodoni Moda,serif">$0</text>
<path d="M154 140h176" stroke-width=".7" opacity=".45"/>
<text x="154" y="170" font-size="13" letter-spacing="1" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">Asset Fees</text>
<text x="330" y="170" text-anchor="end" font-size="18" font-style="italic" fill="url(#gl)" stroke="none" font-family="Bodoni Moda,serif">$0</text>
<path d="M154 182h176" stroke-width=".7" opacity=".45"/>
<text x="154" y="212" font-size="13" letter-spacing="1" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">Product Sales</text>
<text x="330" y="212" text-anchor="end" font-size="18" font-style="italic" fill="url(#gl)" stroke="none" font-family="Bodoni Moda,serif">$0</text>
<path d="M154 224h176" stroke-width=".7" opacity=".45"/>
<text x="154" y="254" font-size="13" letter-spacing="1" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">Referral Payments</text>
<text x="330" y="254" text-anchor="end" font-size="18" font-style="italic" fill="url(#gl)" stroke="none" font-family="Bodoni Moda,serif">$0</text>
<path d="M154 270h176M154 275h176" stroke-width="1"/>
<text x="154" y="304" font-size="13.5" letter-spacing="1" font-weight="500" fill="url(#gl)" stroke="none" font-family="Jost,sans-serif">One Flat Monthly Fee</text>
<path d="M310 296l6 6 12-14" stroke-width="2"/>
<path d="M154 340c12-18 22-8 18 4s18-20 26-8 14 0 20-6" stroke-width="1.4"/>
</g>
<path d="M370 330l84-110 8 6-84 110z" fill="url(#hg2)"/>
<path d="M370 330l-5 16 13-10"/>
<path d="M446 228l10 8"/>
</g>
`,
`
<g fill="none" stroke="url(#gl)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="250" cy="170" rx="220" ry="140" fill="url(#glow)" stroke="none"/>
<path d="M30 300H470" stroke-width="1.1"/>
<path d="M240 300c4-50 4-110 0-150h20c-4 40-4 100 0 150z" fill="url(#hg2)"/>
<path d="M250 160c-30-20-70-30-110-28M250 160c30-20 70-30 110-28M250 150V80"/>
<path d="M140 132c-24-10-50-14-80-8M140 132c4-24 0-44-6-60M360 132c24-10 50-14 80-8M360 132c-4-24 0-44 6-60M250 80c-20-10-44-14-64-12M250 80c20-10 44-14 64-12"/>
<ellipse class="svgc-fill-0e2a49" cx="250" cy="160" rx="19" ry="22.8"/>
<ellipse cx="250" cy="160" rx="15" ry="18" fill="url(#hg)" stroke-width=".8"/>
<circle cx="250" cy="157" r="5.32" stroke-width="1"/>
<path d="M241.45 174.25q8.55 -15.2 17.1 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="140" cy="132" rx="16" ry="19.2"/>
<ellipse cx="140" cy="132" rx="12" ry="14.4" fill="url(#hg)" stroke-width=".8"/>
<circle cx="140" cy="129" r="4.48" stroke-width="1"/>
<path d="M132.8 144.0q7.2 -12.8 14.4 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="360" cy="132" rx="16" ry="19.2"/>
<ellipse cx="360" cy="132" rx="12" ry="14.4" fill="url(#hg)" stroke-width=".8"/>
<circle cx="360" cy="129" r="4.48" stroke-width="1"/>
<path d="M352.8 144.0q7.2 -12.8 14.4 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="250" cy="74" rx="16" ry="19.2"/>
<ellipse cx="250" cy="74" rx="12" ry="14.4" fill="url(#hg)" stroke-width=".8"/>
<circle cx="250" cy="71" r="4.48" stroke-width="1"/>
<path d="M242.8 86.0q7.2 -12.8 14.4 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="60" cy="124" rx="13" ry="15.6"/>
<ellipse cx="60" cy="124" rx="9" ry="10.8" fill="url(#hg)" stroke-width=".8"/>
<circle cx="60" cy="121" r="3.64" stroke-width="1"/>
<path d="M54.15 133.75q5.85 -10.4 11.7 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="134" cy="66" rx="13" ry="15.6"/>
<ellipse cx="134" cy="66" rx="9" ry="10.8" fill="url(#hg)" stroke-width=".8"/>
<circle cx="134" cy="63" r="3.64" stroke-width="1"/>
<path d="M128.15 75.75q5.85 -10.4 11.7 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="186" cy="62" rx="13" ry="15.6"/>
<ellipse cx="186" cy="62" rx="9" ry="10.8" fill="url(#hg)" stroke-width=".8"/>
<circle cx="186" cy="59" r="3.64" stroke-width="1"/>
<path d="M180.15 71.75q5.85 -10.4 11.7 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="314" cy="62" rx="13" ry="15.6"/>
<ellipse cx="314" cy="62" rx="9" ry="10.8" fill="url(#hg)" stroke-width=".8"/>
<circle cx="314" cy="59" r="3.64" stroke-width="1"/>
<path d="M308.15 71.75q5.85 -10.4 11.7 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="366" cy="66" rx="13" ry="15.6"/>
<ellipse cx="366" cy="66" rx="9" ry="10.8" fill="url(#hg)" stroke-width=".8"/>
<circle cx="366" cy="63" r="3.64" stroke-width="1"/>
<path d="M360.15 75.75q5.85 -10.4 11.7 0" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="440" cy="124" rx="13" ry="15.6"/>
<ellipse cx="440" cy="124" rx="9" ry="10.8" fill="url(#hg)" stroke-width=".8"/>
<circle cx="440" cy="121" r="3.64" stroke-width="1"/>
<path d="M434.15 133.75q5.85 -10.4 11.7 0" stroke-width="1"/>
<path d="M244 300c-14 22-40 34-74 40M248 300c-8 30-26 50-52 64M252 300c8 30 26 50 52 64M256 300c14 22 40 34 74 40M250 300v76" stroke-width="1.2"/>
<path d="M170 340c-20 4-38 2-54-6M330 340c20 4 38 2 54-6" stroke-width=".8" opacity=".6"/>
</g>
`,
`
<g fill="none" stroke="url(#gl)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
<ellipse cx="250" cy="200" rx="220" ry="160" fill="url(#glow)" stroke="none"/>
<path class="svgc-fill-0e2a49" d="M176 210V90q0-60 74-60t74 60v120z"/>
<path d="M188 200V94q0-50 62-50t62 50v106z"/>
<path d="M250 44v156M188 120h124" stroke-width="1"/>
<path d="M196 196l46-46M256 196l50-50M200 150l40-40" stroke-width=".6" opacity=".35"/>
<path d="M150 210h200" stroke-width="1"/>
<ellipse class="svgc-fill-0e2a49" cx="250" cy="282" rx="70" ry="16"/>
<path d="M250 298v62M222 362h56"/>
<path class="svgc-fill-0e2a49" d="M212 272l48-10 28 10-48 10z" stroke-width="1.2"/>
<path d="M222 271l30-6M228 275l30-6" stroke-width=".7" opacity=".6"/>
<text x="250" y="246" text-anchor="middle" font-size="14" font-style="italic" fill="url(#gl)" stroke="none" font-family="Bodoni Moda,serif">Your Plan</text>
<path d="M250 250v10" stroke-width=".8" opacity=".6"/>
<path d="M192 280v-12h14v12M198 266c0-7 4-7 4-13" stroke-width="1"/>
<path d="M294 280v-12h14v12M300 266c0-7 4-7 4-13" stroke-width="1"/>
<path d="M50 362V230q0-42 38-48q38 6 38 48v32"/>
<path d="M50 266q-18 0-18 20v34q0 12 12 12h82q12 0 12-12v-34q0-20-18-20"/>
<path d="M58 230q30-8 60 0v46H58z" fill="url(#hg2)"/>
<path d="M44 332v30M134 332v30"/>
<path d="M450 362V230q0-42-38-48q-38 6-38 48v32"/>
<path d="M450 266q18 0 18 20v34q0 12-12 12h-82q-12 0-12-12v-34q0-20 18-20"/>
<path d="M442 230q-30-8-60 0v46h60z" fill="url(#hg2)"/>
<path d="M456 332v30M366 332v30"/>
<path d="M20 370H480" stroke-width=".8" opacity=".5"/>
</g>
`
];
