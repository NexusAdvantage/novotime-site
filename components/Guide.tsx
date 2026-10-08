"use client";

import { useState } from "react";
import Link from "next/link";
import { GUIDE } from "@/content/guide";
import { SERVICES } from "@/content/services";
import { CTA } from "@/content/site";
import { Icon } from "./Icon";

const titleFor = (slug: string) => SERVICES.find((s) => s.slug === slug)?.title ?? slug;

export function Guide({ tone = "ivory" }: { tone?: "ivory" | "ivory-2" }) {
  const [active, setActive] = useState(0);
  const g = GUIDE[active];
  return (
    <section className={`sec ${tone}`} id="start">
      <div className="w">
        <h2 className="h2">Where Should You <em>Start?</em></h2>
        <div className="rule2" />
        <div className="guide">
          <div className="guide-list" role="tablist" aria-label="Choose your situation">
            {GUIDE.map((item, k) => (
              <button
                key={item.label}
                className={`gopt${k === active ? " on" : ""}`}
                role="tab"
                aria-selected={k === active}
                onClick={() => {
                  setActive(k);
                  if (window.matchMedia("(max-width: 900px)").matches) {
                    document.getElementById("guide-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                <span className="gi"><Icon name={item.icon} /></span>
                {item.label}
              </button>
            ))}
          </div>
          <div className="guide-panel" id="guide-panel" role="tabpanel">
            <div className="gans" key={active}>
              <h3>{g.label}</h3>
              <p>{g.body}</p>
              <h4>Where to Start</h4>
              <div className="glinks">
                {g.services.map((slug) => (
                  <a key={slug} href={`/services/${slug}`}>
                    {titleFor(slug)}<span>&rarr;</span>
                  </a>
                ))}
              </div>
              <Link className="btn-foil" href={CTA.href}>{CTA.label}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
