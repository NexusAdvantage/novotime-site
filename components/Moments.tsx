"use client";

import { useState } from "react";
import { MOMENTS } from "@/content/moments";

/** Home: life events as tabs, each with what we coordinate and a link to the matching service. Same design as the original service tabs. */
export function Moments() {
  const [active, setActive] = useState(0);
  const t = MOMENTS[active];
  return (
    <section className="sec navy" id="moments">
      <div className="w c">
        <h2 className="h2">When Life Changes, We Handle <em className="foil">the Details</em></h2>
        <div className="tabs svc-tabs" role="tablist">
          {MOMENTS.map((x, k) => (
            <button key={x.tab} role="tab" aria-selected={k === active} className={`tab${k === active ? " on" : ""}`} onClick={() => setActive(k)}>
              {x.tab}
            </button>
          ))}
        </div>
      </div>
      <div className="w">
        <div className="panes">
          <div className="pane" key={active} role="tabpanel">
            <div className="art">
              <div className="art-in art-card">
                <img src={t.art} alt="" />
              </div>
            </div>
            <div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <a className="more" href={`/services/${t.slug}`}>
                More on {t.link}
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2l6 6l-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
