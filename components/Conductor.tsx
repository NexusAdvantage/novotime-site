import Image from "next/image";
import Link from "next/link";
import { ADVISORS, HUB } from "@/content/conductor";
import { FAVICON_N } from "@/content/favicon";
import { icon } from "./IconImg";

const Seal = () => (
  <span className="adv-seal" aria-hidden="true">
    <svg viewBox="40 40 230 230"><path d={FAVICON_N} /></svg>
  </span>
);

export function Conductor() {
  return (
    <section className="sec ivory-2" id="coordination">
      <div className="w">
        <h2 className="h2">Your Advisors, Finally <em>on the Same Page</em></h2>
        <div className="rule2" />
        <div className="hub">
          <div className="hub-lead">
            <Seal />
            <h3>{HUB.title}</h3>
            <p>{HUB.body}</p>
            <Link className="more" href="/approach">See How We Work <span aria-hidden="true">&rarr;</span></Link>
          </div>
          <div className="hub-points">
            {HUB.points.map((p) => (
              <div className="hub-pt" key={p.t}>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="adv">
          {ADVISORS.map((a) => (
            <article className="adv-item" key={a.role}>
              <div className="adv-art" aria-hidden="true">
                <Seal />
                <i className="adv-line"><b /></i>
                <span className="adv-medal">
                  <Image src={encodeURI(icon("Conductors", a.role))} alt="" width={72} height={72} sizes="72px" />
                </span>
              </div>
              <div className="adv-txt">
                <h3>{a.role}</h3>
                <p>{a.d}</p>
                <Link className="more" href={`/services/${a.slug}`}>{a.link} <span aria-hidden="true">&rarr;</span></Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
