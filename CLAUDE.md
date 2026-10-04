# NovoTime site, working notes for Claude Code

Client: NovoTime LLC, independent multifamily office, Omaha. Founder Diana V. Novoselska.
Agency: Nexus Advantage (Kaiden, Luke). Launch target October 15, 2026, event October 22.

## Stack
Next.js 15 App Router, React 19, TypeScript, Tailwind v4 (tokens in `app/globals.css`), fonts via @fontsource.

## Structure
- `content/` holds all copy and data. Edit copy here, not in components.
- `content/svg.ts` holds the icon sprite and the five How It Works illustrations (generated, colors are CSS classes).
- `components/` one component per homepage section.
- `app/api/book/route.ts` form handler (Resend). Env: RESEND_API_KEY, BOOK_NOTIFY_TO, BOOK_NOTIFY_FROM.

## Rules
Read DESIGN.md before any change. Title Case headings, no dashes anywhere in copy, illustrations not diagrams, no hex outside globals.css.

## Copy guardrails (client facing)
- Compliance disclosure in `content/site.ts` is verbatim. Never edit.
- Use "nearly 14 years", never "over 14".
- Do not publish team names other than Diana, client names, dollar results, or the net worth range until Diana approves.
- Diana dislikes the phrase "financial life" and the word "fractional"; avoid both.
- She wants clear that NovoTime is not a wealth management firm and sells nothing, and that a lot of work is done in house.

## Planned pages
/services/[slug] for the nine services (content from Menu of Services and Client Services Checklist), /about, /contact, /privacy-policy (draft, needs counsel), plus an Insights section later.

## Workflow
Commit to `staging` for previews once main is stable. Screenshot every page at 1440 and 390 before calling it done.
