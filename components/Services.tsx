import { SERVICES } from "@/content/services";
import { Icon } from "./Icon";

function Arrow() {
  return (
    <svg className="ar" viewBox="0 0 26 16" width="26" height="16" aria-hidden="true">
      <path d="M1 8h22M16 1l7 7l-7 7" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function Services() {
  return (
    <section className="sec ivory" id="services">
      <div className="w">
        <h2 className="h2">Everything Your Wealth <em>Touches</em></h2>
        <div className="rule2" />
        <p className="sub">
          Every engagement starts with the core of a family office. You add the rest as your life calls for it.
        </p>
        <div className="svc-grid">
          {SERVICES.map((s) => (
            <a className="sb" key={s.slug} href={`/services/${s.slug}`} id={s.slug}>
              <span className={s.iconImage ? "iconslot iconslot-img" : "iconslot"}>
                {s.iconImage ? <img src={s.iconImage} alt="" loading="lazy" /> : <Icon name={s.icon} />}
              </span>
              <div className="sb-title">
                <h3>{s.title}</h3>
                <Arrow />
              </div>
              <p>{s.summary}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
