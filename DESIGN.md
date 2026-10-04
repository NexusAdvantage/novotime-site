# NovoTime Design Lock

Approved direction: navy and gold foil, editorial serif, no photography. Homepage "Side of the Table" (October 2026).

## Rules
1. **Title Case headings.** Capitalize every word except a, an, the, and, but, or, nor, for, of, on, in, at, to, by, with, unless first or last in the line.
2. **No dashes in copy.** No em dashes, en dashes or hyphenated compounds ("in house", "long term", "day to day"). The verbatim compliance text is the only exception.
3. **Graphics, not diagrams.** Visuals are illustrations (gold line art, engraved feel, light hatching) that show the literal subject of the section. No charts, tables or schematic boxes passed off as art.
4. **No stock icon libraries.** Icons are custom SVG symbols in `content/svg.ts` or supplied artwork in `/public/icons`.
5. **No eyebrow labels above headings** except the small kicker inside interactive panels.
6. **All color lives in `app/globals.css`.** Components use classes and tokens only.
7. **No numbered sections or numbered styling.** Steps use diamonds and words.
8. **Body copy is short.** One or two sentences per block.

## Color
| Token | Hex | Use |
|---|---|---|
| navy | #0E2A49 | Dark sections, hero, ink |
| brand-blue | #002F5F | Client's official blue. Kept lighter on site per Diana's feedback that the brand blue reads too dark |
| ivory | #F6F2E9 | Light sections |
| ivory-2 | #EFE9DB | Alternate light sections |
| card | #FBF9F4 | Cards and panels |
| gold | #86731E | Client's official gold. Accents on light grounds |
| gold-light | #D4C27C | Accents on navy |
| foil gradients | see :root | Headline accents, buttons, diamonds |

Section rhythm alternates navy and ivory. Never two navy sections back to back.

## Type
- Display: Bodoni Moda (stand in for **Questa Grande Light**, the client's brand font; swap once a web license is provided).
- Body: Jost 300/400/500.
- Headline accent: the last phrase in italic with `.foil`.

## Signature devices
- Gold foil italic phrase in every major heading.
- Double gold rule under headings.
- Gold diamond bullets.
- Fine paper grain on navy.

## Open items
- Questa Grande web license and files.
- Final logo files (wordmark is set in type for now).
- Service icons from ChatGPT (drop into `/public/icons`, set `iconImage` in `content/services.ts`).
- Final illustrations (current SVG line art is a placeholder of the approved concepts).
