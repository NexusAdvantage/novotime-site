"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { VALUES, valueHref } from "@/content/values";

const ic = (f: string) => encodeURI(`/icons/What We Stand For/${f}.png`);
const plain = (t: string) => t.replace(/<\/?em>/g, "");

/** Values as stacked binder tabs: one value open with its intro and a link to its page, the rest as navy bars. Clicking a bar slides it open. */
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
                <div className="bdr-fold bdr-fold-spine">
                  <button className="bdr-spine" onClick={() => setOpen(i)} aria-expanded={on} tabIndex={on ? -1 : 0} aria-hidden={on}>
                    <span className="bdr-spine-in">
                      <span className="bdr-band" />
                      <span className="bdr-medal sm">
                        <Image src={ic(v.file)} alt="" width={46} height={46} sizes="46px" />
                      </span>
                      <span className="bdr-title">{plain(v.title)}</span>
                      <span className="bdr-open" aria-hidden="true">+</span>
                      <span className="bdr-band" />
                    </span>
                  </button>
                </div>
                <div className="bdr-fold bdr-fold-page">
                  <article className="bdr-page" aria-hidden={!on}>
                    <div className="bdr-page-in">
                      <span className="bdr-medal">
                        <Image src={ic(v.file)} alt="" width={96} height={96} sizes="96px" />
                      </span>
                      <div className="bdr-copy">
                        <h3 dangerouslySetInnerHTML={{ __html: v.title }} />
                        <p className="bdr-line">{v.headline}</p>
                        <p>{v.intro}</p>
                        <Link className="vbtn" href={valueHref(v.slug)} tabIndex={on ? 0 : -1}>Read More About {v.name} <span aria-hidden="true">&rarr;</span></Link>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
