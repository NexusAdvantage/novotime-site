import { VALUES } from "@/content/values";
import { Icon } from "./Icon";

export function Values() {
  return (
    <section className="sec ivory-2" id="values">
      <div className="w">
        <h2 className="h2">What We <em>Stand For</em></h2>
        <div className="rule2" />
        <div className="vrows">
          {VALUES.map((v) => (
            <article className="vrow" key={v.title}>
              <div className="vrow-head">
                <span className="vrow-ic"><Icon name={v.icon} /></span>
                <h3 dangerouslySetInnerHTML={{ __html: v.title }} />
              </div>
              {v.lines.map((l) => <p key={l}>{l}</p>)}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
