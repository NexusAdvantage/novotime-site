import Link from "next/link";
import { ADVISORS, NOTES } from "@/content/conductor";
import { FAVICON_N } from "@/content/favicon";

const ICON = (role: string) => encodeURI(`/icons/Conductors/${role}.png`);
const W = 1240;
const XS = ADVISORS.map((_, i) => 110 + i * ((W - 220) / 5));
const N_Y = 330;
const YOU_Y = 520;

/** Six advisors flow into NovoTime, and one line runs from NovoTime to your family. Each advisor links to its service page. */
export function Conductor() {
  return (
    <section className="sec ivory-2" id="coordination">
      <div className="w">
        <h2 className="h2">How We Work with <em>Your Advisors</em></h2>
        <div className="rule2" />
        <svg viewBox={`0 0 ${W} 600`} className="tree" role="img" aria-label="Your six advisors connect to NovoTime, and NovoTime connects to your family">
          {XS.map((x, i) => (
            <path key={i} d={`M${x} 172 C ${x} 262, ${W / 2} 230, ${W / 2} ${N_Y - 62}`} className="tree-thread" />
          ))}
          <line x1={W / 2} y1={N_Y} x2={W / 2} y2={YOU_Y} className="tree-trunk" />
          {ADVISORS.map((a, i) => (
            <Link key={a.role} href={`/services/${a.slug}`} className="tree-node">
              <circle cx={XS[i]} cy={80} r={51} className="tree-halo" />
              <circle cx={XS[i]} cy={80} r={44} className="tree-medal" />
              <image href={ICON(a.role)} x={XS[i] - 27} y={53} width={54} height={54} />
              <text x={XS[i]} y={156} textAnchor="middle" className="tree-label">{a.short}</text>
            </Link>
          ))}
          <circle cx={W / 2} cy={N_Y} r={69} className="tree-halo" />
          <circle cx={W / 2} cy={N_Y} r={60} className="tree-seal" />
          <path d={FAVICON_N} className="tree-n" transform={`translate(${W / 2 - 69} ${N_Y - 69}) scale(0.445)`} />
          <circle cx={W / 2} cy={YOU_Y} r={64} className="tree-you" />
          <text x={W / 2} y={YOU_Y - 2} textAnchor="middle" className="tree-you-t">Your</text>
          <text x={W / 2} y={YOU_Y + 20} textAnchor="middle" className="tree-you-t">Family</text>
        </svg>
        <div className="tree-m" aria-hidden="true">
          <div className="tree-m-grid">
            {ADVISORS.map((a) => (
              <Link key={a.role} href={`/services/${a.slug}`} tabIndex={-1}>
                <span className="tree-m-medal"><img src={ICON(a.role)} alt="" /></span>
                <span>{a.short}</span>
              </Link>
            ))}
          </div>
          <i className="tree-m-line" />
          <span className="tree-m-seal"><svg viewBox="40 40 230 230"><path d={FAVICON_N} /></svg></span>
          <i className="tree-m-line" />
          <span className="tree-m-you">Your Family</span>
        </div>
        <div className="tree-notes">
          {NOTES.map((n) => (
            <div key={n.t}>
              <h3>{n.t}</h3>
              <p>{n.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
