"use client";

import { useState } from "react";
import { HOW_IT_WORKS } from "@/content/howItWorks";
import { ILLUSTRATIONS } from "@/content/svg";

export function HowItWorks() {
  const [active, setActive] = useState(0);
  const t = HOW_IT_WORKS[active];
  return (
    <section className="sec navy" id="how-it-works">
      <div className="w c">
        <h2 className="h2">How NovoTime <em className="foil">Works</em></h2>
        <div className="tabs" role="tablist">
          {HOW_IT_WORKS.map((x, k) => (
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
              <div className="art-in">
                <svg
                  className="illo"
                  viewBox="0 0 500 400"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{
                    __html: `<g fill="none" stroke="url(#gl)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${ILLUSTRATIONS[active]}</g>`,
                  }}
                />
              </div>
            </div>
            <div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <a className="more" href="#services">
                Learn More
                <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true"><path d="M5 2l6 6l-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
