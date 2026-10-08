import { ImageResponse } from "next/og";
import { FAVICON_N } from "@/content/favicon";

/* PNG copy of app/icon.svg for browsers and devices that skip SVG favicons. Brand navy and gold. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0E2A49", borderRadius: 0 }}>
        <svg width="180" height="180" viewBox="0 0 310 310">
          <path fill="#B9A256" d={FAVICON_N} />
        </svg>
      </div>
    ),
    size,
  );
}
