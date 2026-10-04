type Props = { name: string; className?: string; light?: boolean };

/** References a symbol from the sprite rendered once in SvgSprite. */
export function Icon({ name, className = "", light = false }: Props) {
  return (
    <svg
      className={`${light ? "svg-ico-light" : "svg-ico"} ${className}`}
      fill="none"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <use href={`#${name}`} />
    </svg>
  );
}

export function Mark({ name }: { name: "i-check" | "i-x" }) {
  return (
    <svg className="mk" aria-hidden="true" width="22" height="22">
      <use href={`#${name}`} />
    </svg>
  );
}
