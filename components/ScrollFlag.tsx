"use client";

import { useEffect } from "react";

/** Sets data-scrolled on <html> once the page scrolls past the masthead, which pins the header as a bar. */
export function ScrollFlag() {
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
  return null;
}
