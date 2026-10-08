"use client";

import { useState } from "react";
import { SERVICE_TABS } from "@/content/serviceTabs";

export function ServiceTabs() {
  const [active, setActive] = useState(0);
  const t = SERVICE_TABS[active];
  return (
    <section className="sec navy" id="what-we-do">
      <div className="w c">
        <h2 className="h2">What We Do for <em className="foil">Your Family</em></h2>
        <div className="tabs svc-tabs" role="tablist">
          {SERVICE_TABS.map((x, k) => (
            <button key={x.slug} role="tab" aria-selected={k === active} className={`tab${k === active ? " on" : ""}`} onClick={() => setActive(k)}>
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
                {t.iconImage && <img src={t.iconImage} alt="" />}
              </div>
            </div>
            <div>
              <h3>{t.title}</h3>
              <p>{t.body}</p>
              <ul>{t.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <a className="more" href={`/services/${t.slug}`}>
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
