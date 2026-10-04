import { VALUES } from "@/content/values";
import { Icon } from "./Icon";

export function Values() {
  return (
    <section className="sec ivory" id="values">
      <div className="w">
        <h2 className="h2">What We <em>Stand For</em></h2>
        <div className="rule2" />
        <div className="vals">
          {VALUES.map((v) => (
            <div className="val" key={v.title}>
              <Icon name={v.icon} className="vi" />
              <h3 dangerouslySetInnerHTML={{ __html: v.title }} />
              {v.lines.map((l) => <p key={l}>{l}</p>)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
