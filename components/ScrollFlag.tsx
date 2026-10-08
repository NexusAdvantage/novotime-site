"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Everything that rises into place as it scrolls into view.
const REVEAL = ".sec .h2, .sec .rule2, .card, .cond-card, .cond-center, .vcard, .sign, .lg-row, .steps li, .sb, .svc-row, .tline li, .who-card, .cmp, .feecard, .glance, .intro-text, .faq .qi, .cta-card, .fquote, .name-grid > div, .gopt, .guide-panel, .pane";

/**
 * 1. Sets data-scrolled on <html> once the page passes the masthead, which pins the header as a bar.
 * 2. Reveals content as it scrolls into view, with a short stagger between siblings.
 */
export function ScrollFlag() {
  const path = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    let on = false;
    const check = () => {
      const next = window.scrollY > 140;
      if (next !== on) {
        on = next;
        if (on) root.setAttribute("data-scrolled", "");
        else root.removeAttribute("data-scrolled");
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    return () => window.removeEventListener("scroll", check);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const root = document.documentElement;
    root.classList.add("motion");
    const els = Array.from(document.querySelectorAll<HTMLElement>(REVEAL)).filter((el) => !el.closest(".hero"));
    els.forEach((el) => {
      el.classList.add("rv");
      const sibs = el.parentElement ? Array.from(el.parentElement.children).filter((c) => c.matches(REVEAL)) : [];
      el.style.setProperty("--rv", `${Math.min(sibs.indexOf(el), 6) * 90}ms`);
    });
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { rootMargin: "0px 0px -4% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [path]);

  return null;
}
