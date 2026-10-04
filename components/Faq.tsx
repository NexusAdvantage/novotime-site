"use client";

import { useState } from "react";
import { FAQ } from "@/content/faq";

export function Faq() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const toggle = (k: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });
  return (
    <section className="sec ivory" id="faq">
      <div className="w c">
        <h2 className="h2">The Questions Other Family Offices <em>Hope You Won&rsquo;t Ask</em></h2>
        <div className="rule2" />
        <div className="faq">
          {FAQ.map((f, k) => (
            <div className={`qi${open.has(k) ? " on" : ""}`} key={f.q}>
              <button aria-expanded={open.has(k)} onClick={() => toggle(k)}>
                {f.q}
                <span className="pm" aria-hidden="true" />
              </button>
              <div className="qa"><div><p>{f.a}</p></div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
