import type { Metadata } from "next";
import "@fontsource/bodoni-moda/400.css";
import "@fontsource/bodoni-moda/500.css";
import "@fontsource/jost/300.css";
import "@fontsource/jost/400.css";
import "@fontsource/jost/500.css";
import "./globals.css";
import "./pages.css";
import "./sections.css";
import "./body.css";
import "./motion.css";
import "./polish.css";
import "./hero.css";
import "./process.css";
import "./conductor.css";
import "./values.css";
import "./still.css";
import { SvgSprite } from "@/components/SvgSprite";
import { ScrollFlag } from "@/components/ScrollFlag";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "NovoTime | Independent Family Office in Omaha", template: "%s | NovoTime" },
  description:
    "NovoTime is an independent family office in Omaha. We do the work behind your wealth and coordinate your advisors on one flat fee, with nothing to sell you.",
  openGraph: { type: "website", siteName: "NovoTime", locale: "en_US" },
  robots: { index: false, follow: false }, // flip to true at launch
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SvgSprite />
        <ScrollFlag />
        {children}
      </body>
    </html>
  );
}
