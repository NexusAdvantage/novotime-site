/** Splits a line into words that rise in one after another when the hero loads. */
export function Words({ text, start = 0, accent = false }: { text: string; start?: number; accent?: boolean }) {
  return (
    <>
      {text.split(" ").map((w, i) => (
        <span key={i}>
          <span className={`wd${accent ? " foil" : ""}`} style={{ ["--i" as string]: start + i }}>{w}</span>
          {" "}
        </span>
      ))}
    </>
  );
}
