import Link from "next/link";
import { ADVISORS, CENTER_POINTS } from "@/content/conductor";
import { IconImg, icon } from "./IconImg";

export function Conductor() {
  const left = ADVISORS.slice(0, 3);
  const right = ADVISORS.slice(3);
  const card = (a: (typeof ADVISORS)[number]) => (
    <article className="frame cond-card" key={a.role}>
      <div className="fi">
        <IconImg src={icon("Conductors", a.role)} size={60} />
        <div>
          <h3>{a.role}</h3>
          <p>{a.d}</p>
        </div>
      </div>
    </article>
  );
  return (
    <section className="sec ivory-2" id="coordination">
      <div className="w">
        <h2 className="h2">Your Advisors, Finally <em>on the Same Page</em></h2>
        <div className="rule2" />
        <div className="cond">
          <div className="cond-col">{left.map(card)}</div>
          <div className="frame dark cond-center">
            <div className="fi">
              <span className="cond-mark">Novo<i>Time</i></span>
              <p className="cond-lead">One central point of contact, so every advisor works from the same complete picture.</p>
              <ul>{CENTER_POINTS.map((p) => <li key={p}>{p}</li>)}</ul>
              <Link className="more" href="/approach">See How We Work <span aria-hidden="true">&rarr;</span></Link>
            </div>
          </div>
          <div className="cond-col">{right.map(card)}</div>
        </div>
      </div>
    </section>
  );
}
