// Home tabs: life events and what NovoTime coordinates when they happen. Each points to the service page that covers the work.
export type Moment = { tab: string; title: string; body: string; bullets: string[]; slug: string; link: string; art: string };

export const MOMENTS: Moment[] = [
  {
    tab: "Selling a Business",
    title: "After the Sale Closes",
    body: "A sale turns a company into new accounts, new paperwork, and a tax bill that arrives later. We work with your CPA and attorney so the tax and estate side is handled before year end, and nothing from the old business is left unfinished.",
    bullets: ["Tax Planning with Your CPA Before Year End", "Estate Documents Updated for New Assets", "New Accounts Tracked in One Report", "Insurance Reviewed for What Changed"],
    slug: "tax-and-compliance",
    link: "Tax and Compliance",
    art: "/icons/tax-and-compliance.webp",
  },
  {
    tab: "Buying a Home",
    title: "A New Property, Fully Set Up",
    body: "A new home comes with closing documents, insurance, property taxes, and a list of people to hire. We keep the paperwork organized, make sure coverage is in place, and vet the vendors who will care for it.",
    bullets: ["Closing Documents Stored Securely", "Coverage in Place Before You Move In", "Property Taxes and Bills Scheduled", "Vendors Vetted and Invoices Reviewed"],
    slug: "travel-and-property",
    link: "Travel and Property",
    art: "/icons/travel-and-property.webp",
  },
  {
    tab: "A New Child or Grandchild",
    title: "Planning for the Newest Member",
    body: "A birth changes beneficiaries, guardianship, and gifting plans. We flag what needs updating and work with your attorney and CPA so the paperwork catches up with your family.",
    bullets: ["Beneficiary Designations Reviewed", "Estate Updates Coordinated with Your Attorney", "Gifting Coordinated with Your CPA", "Records Added to Your Family Repository"],
    slug: "estate-and-legal",
    link: "Estate and Legal",
    art: "/icons/estate-and-legal.webp",
  },
  {
    tab: "Losing a Family Member",
    title: "Steady Help When It Is Hardest",
    body: "After a loss, the paperwork arrives when your family has the least energy for it. We gather documents, work with the attorney and trustees, and keep bills and accounts current so nothing is missed.",
    bullets: ["Documents Gathered for the Attorney", "Trustee and Entity Administration", "Bills and Accounts Kept Current", "One Point of Contact for Every Institution"],
    slug: "documents-and-information",
    link: "Documents and Information",
    art: "/icons/documents-and-information.webp",
  },
  {
    tab: "A Child Leaving Home",
    title: "Preparing the Next Generation",
    body: "Leaving home is often the first time a young adult manages money on their own. We offer sessions built around their age and experience, so they start with good habits and know who to call.",
    bullets: ["One on One Sessions", "Group Sessions with Siblings or Cousins", "Lessons Built by Age and Experience", "Shaped Around Your Family’s Goals"],
    slug: "next-generation-education",
    link: "Next Generation Education",
    art: "/icons/next-generation-education.webp",
  },
];
