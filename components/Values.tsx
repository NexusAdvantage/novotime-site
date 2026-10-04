import { VALUES } from "@/content/values";
import { Icon } from "./Icon";

export function Values() {
  return (
    <section className="sec ivory" id="values">
      <div className="w vals-wrap">
        <div className="vals-head">
          <h2 className="h2">What We <em>Stand For</em></h2>
          <div className="rule2" />
          <p className="sub">Five commitments every member of our team is held to, with every family we serve.</p>
        </div>
        <div className="vals">
          {VALUES.map((v) => (
            <article className="val" key={v.title}>
              <span className="val-icon"><Icon name={v.icon} className="vi" /></span>
              <div className="val-body">
                <h3 dangerouslySetInnerHTML={{ __html: v.title }} />
                <div className="val-lines">
                  {v.lines.map((l) => <p key={l}>{l}</p>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
