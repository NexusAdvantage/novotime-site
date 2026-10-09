import Image from "next/image";
import Link from "next/link";
import { VALUES, valueHref } from "@/content/values";
import { icon } from "./IconImg";

/** Each value as its own short sub section: icon panel, title, one paragraph, and a link to its page. Sides alternate. */
export function Values({ heading = true }: { heading?: boolean }) {
  return (
    <section className="sec ivory-2" id="values">
      <div className="w">
        {heading && (
          <>
            <h2 className="h2">What We <em>Stand For</em></h2>
            <div className="rule2" />
          </>
        )}
        <div className="vrows">
          {VALUES.map((v) => (
            <article className="vrow2" key={v.slug}>
              <Link className="vrow2-art" href={valueHref(v.slug)} aria-hidden="true" tabIndex={-1}>
                <span className="vrow2-medal">
                  <Image src={encodeURI(icon("What We Stand For", v.file))} alt="" width={96} height={96} sizes="96px" />
                </span>
              </Link>
              <div className="vrow2-txt">
                <h3 dangerouslySetInnerHTML={{ __html: v.title }} />
                <p>{v.summary}</p>
                <Link className="more" href={valueHref(v.slug)}>What It Means to Us <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
