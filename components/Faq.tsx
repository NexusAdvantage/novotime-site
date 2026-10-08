"use client";

import { useState } from "react";
import { FAQ } from "@/content/faq";

import type { ReactNode } from "react";

type Item = { q: string; a: string };

export function Faq({ items = FAQ, title, tone = "ivory", aside }: { items?: Item[]; title?: ReactNode; tone?: "ivory" | "ivory-2"; aside?: ReactNode }) {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const toggle = (k: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      next.has(k) ? next.delete(k) : next.add(k);
      return next;
    });
  return (
    <section className={`sec ${tone}`} id="faq">
      <div className={aside ? "w faq-split" : "w c"}>
        <div className="faq-head">
          <h2 className="h2">{title ?? <>The Questions Other Family Offices <em>Hope You Won&rsquo;t Ask</em></>}</h2>
          <div className="rule2" />
          {aside}
        </div>
        <div className="faq">
          {items.map((f, k) => (
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
