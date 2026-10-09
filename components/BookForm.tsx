"use client";

import { useState, type FormEvent } from "react";
import { SITE } from "@/content/site";

export function BookForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/book", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="navy book" id="book">
      <div className="w book-grid">
        <div>
          <h2 className="h2">Everything Starts with a <em className="foil">Conversation</em></h2>
          <p className="book-lead">
            The first step is a meeting, in person whenever possible, with the people who would actually do your work, not a salesperson. You leave with a clear answer: an exact scope and flat fee if we’re a fit, or an honest referral if we’re not.
          </p>
          <p className="direct">
            Prefer to write first? Email{" "}
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
          </p>
        </div>
        <div className="fcard">
          {state === "sent" ? (
            <div className="fdone" role="status">
              <div className="seal" />
              <h3>Thank You</h3>
              <p>Your request has been received. Someone from our team, a person and not an autoresponder, will reach out within one business day to find a time.</p>
            </div>
          ) : (
            <form className="fform" onSubmit={onSubmit}>
              <h3>Book a Discovery Meeting</h3>
              <div className="frow">
                <label>First Name<input name="firstName" required autoComplete="given-name" /></label>
                <label>Last Name<input name="lastName" required autoComplete="family-name" /></label>
              </div>
              <label>Email<input name="email" type="email" required autoComplete="email" /></label>
              <label>Phone<input name="phone" type="tel" autoComplete="tel" /></label>
              <label>What Prompted You to Reach Out? <em>Optional</em><textarea name="message" rows={3} /></label>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ display: "none" }} aria-hidden="true" />
              <button className="btn-foil" type="submit" disabled={state === "sending"}>
                {state === "sending" ? "Sending" : "Request My Meeting"}
              </button>
              {state === "error" && <p className="ferr">Something went wrong. Please email us directly.</p>}
              <p className="priv">Everything you share is held in confidence. See our <a href="/privacy-policy">privacy policy</a>.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
