# NovoTime Website

Marketing site for NovoTime LLC, built by Nexus Advantage.

```bash
npm install
npm run dev
```

The discovery meeting form emails submissions through Resend. Until `RESEND_API_KEY` and `BOOK_NOTIFY_TO` are set in Vercel, submissions show the thank you message but are only logged on the server, not emailed.

Search indexing is turned off (`robots: noindex` in `app/layout.tsx`) until launch.

See DESIGN.md and CLAUDE.md.
