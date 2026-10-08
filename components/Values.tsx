import { VALUES } from "@/content/values";
import { IconImg, icon } from "./IconImg";

const FILES = ["Integrity", "One Interest", "Find a Way", "Challenge the Playbook", "Humility"];

/** Five company values as a bento: two wide navy cards, then three ivory cards. */
export function Values() {
  return (
    <section className="sec ivory-2" id="values">
      <div className="w">
        <h2 className="h2">What We <em>Stand For</em></h2>
        <div className="rule2" />
        <div className="vbento">
          {VALUES.map((v, i) => (
            <article className={`frame vcard${i < 2 ? " dark" : ""}`} key={v.title}>
              <div className="fi">
                <IconImg src={icon("What We Stand For", FILES[i])} size={76} />
                <h3 dangerouslySetInnerHTML={{ __html: v.title }} />
                <ul>{v.lines.map((l) => <li key={l}>{l}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
