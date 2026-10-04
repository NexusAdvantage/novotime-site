import { SPRITE, ILLUSTRATION_DEFS } from "@/content/svg";

/** Icon symbols, hatch patterns and illustration gradients, rendered once per page. */
export function SvgSprite() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: `<defs>${SPRITE}${ILLUSTRATION_DEFS}</defs>` }}
    />
  );
}
