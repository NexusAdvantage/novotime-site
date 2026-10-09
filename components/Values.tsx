"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { VALUES, valueHref } from "@/content/values";

const ic = (f: string) => encodeURI(`/icons/What We Stand For/${f}.png`);
const plain = (t: string) => t.replace(/<\/?em>/g, "");

/** Values as a binder: one value open with its full intro and a link to its page, the rest as navy spines. Clicking a spine slides it open. */
export function Values({ heading = true }: { heading?: boolean }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="sec ivory-2" id="values">
      <div className="w">
        {heading && (
          <>
            <h2 className="h2">What We <em>Stand For</em></h2>
            <div className="rule2" />
          </>
        )}
        <div className="bdr">
          {VALUES.map((v, i) => {
            const on = i === open;
            return (
              <div className={`bdr-item${on ? " on" : ""}`} key={v.slug}>
                <button className="bdr-spine" onClick={() => setOpen(i)} aria-expanded={on} tabIndex={on ? -1 : 0} aria-hidden={on}>
                  <span className="bdr-band" />
                  <span className="bdr-medal sm">
                    <Image src={ic(v.file)} alt="" width={46} height={46} sizes="46px" />
                  </span>
                  <span className="bdr-title">{plain(v.title)}</span>
                  <span className="bdr-open" aria-hidden="true">+</span>
                  <span className="bdr-band" />
                </button>
                <article className="bdr-page" aria-hidden={!on}>
                  <div className="bdr-page-in">
                    <span className="bdr-medal">
                      <Image src={ic(v.file)} alt="" width={96} height={96} sizes="96px" />
                    </span>
                    <h3 dangerouslySetInnerHTML={{ __html: v.title }} />
                    <p className="bdr-line">{v.headline}</p>
                    <p>{v.intro}</p>
                    <Link className="vbtn" href={valueHref(v.slug)} tabIndex={on ? 0 : -1}>Read More About {v.name} <span aria-hidden="true">&rarr;</span></Link>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
