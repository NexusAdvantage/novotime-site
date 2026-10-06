export const SITE = {
  name: "NovoTime",
  legalName: "NovoTime LLC",
  url: "https://novo-time.com",
  phoneDisplay: "402.239.8086",
  phoneHref: "tel:4022398086",
  email: "dnovoselska@novo-time.com",
  address: { street: "9375 Burt Street, Suite 202", city: "Omaha", region: "NE", regionLong: "Nebraska", zip: "68114" },
  tagline: "An independent family office in Omaha, Nebraska.",
  // Verbatim compliance disclosure. Do not edit without Diana's sign off.
  compliance:
    "NovoTime LLC is not an investment firm, broker-dealer, or registered investment adviser. NovoTime LLC and its employees, associates, contractors, and representatives do not provide investment advice, financial advice, or recommendations regarding the purchase, sale, or holding of any securities, digital assets, or other financial instruments.",
};

export type NavItem = { label: string; href: string; children?: { label: string; href: string }[] };

// Services children are filled from content/services.ts in the Header.
export const NAV_LEFT: NavItem[] = [
  { label: "Services", href: "/services" },
  { label: "Our Approach", href: "/approach" },
  { label: "Our Story", href: "/about" },
];
export const NAV_RIGHT = [{ label: "Contact", href: "/contact" }];
// Every content page ends with the booking form (#book), so the CTA scrolls in place.
export const CTA = { label: "Book a Discovery Meeting", href: "#book" };
