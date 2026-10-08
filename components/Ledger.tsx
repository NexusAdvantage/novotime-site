import type { Row } from "@/content/serviceDetails";
import { CtaRow } from "./Cta";

/**
 * Signature device: the ledger of what comes off a family's desk.
 * Ties to the name: every row is time handed back.
 */
export function Ledger({ rows, closing, title, cta = false }: { rows: Row[]; closing?: string; title?: React.ReactNode; cta?: boolean }) {
  return (
    <section className="sec navy ledger-sec">
      <div className="w">
        <h2 className="h2">{title ?? <>What Comes <em className="foil">Off Your Desk</em></>}</h2>
        <div className="rule2" />
        <div className="frame dark ledger">
          <div className="fi">
            <div className="lg-row lg-head" aria-hidden="true">
              <span>The Task</span>
              <span>Without a Family Office</span>
              <span>With NovoTime</span>
            </div>
            {rows.map((r) => (
              <div className="lg-row" key={r.task}>
                <span className="lg-task">{r.task}</span>
                <span className="lg-without"><b className="lg-label">Without a Family Office</b><s>{r.without}</s></span>
                <span className="lg-with"><b className="lg-label">With NovoTime</b>{r.with}</span>
              </div>
            ))}
          </div>
        </div>
        {closing && <p className="lg-close">{closing}</p>}
        {cta && <CtaRow center light />}
      </div>
    </section>
  );
}
