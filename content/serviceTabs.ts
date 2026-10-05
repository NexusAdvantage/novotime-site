import { SERVICES } from "./services";

export type ServiceTab = { slug: string; tab: string; title: string; body: string; bullets: string[] };

// Bullets follow Diana's Menu of Services and Client Services Checklist.
const DETAILS: Omit<ServiceTab, "slug">[] = [
  {
    tab: "Administration",
    title: "Your Family’s Back Office",
    body: "Our team keeps your books current all year and pays every bill on time. We act as your family’s controller, so you always know where your money is and where it is going.",
    bullets: ["Bill Payment and Cash Flow", "Bookkeeping in QuickBooks", "Bank Account Oversight", "Consolidated Financial Reporting"],
  },
  {
    tab: "Tax",
    title: "Tax Season Without the Scramble",
    body: "We work with your CPA all year, not just in April. Your records are organized and delivered on time, and every return gets an independent review before it is filed.",
    bullets: ["Year Round Planning with Your CPA", "Organized Records for Your Preparer", "Charitable Contribution Tracking", "Independent Review Before Filing"],
  },
  {
    tab: "Investments",
    title: "Every Account in One Picture",
    body: "We do not manage money or sell products. We bring every manager and account into one consolidated report, and we track the capital calls and deadlines so nothing slips.",
    bullets: ["Consolidated Reporting", "Capital Call and Distribution Tracking", "Deadline and Document Management", "Coordination with Your Advisers"],
  },
  {
    tab: "Insurance",
    title: "Coverage That Keeps Up with You",
    body: "Every policy is reviewed on a schedule, and coverage is updated every time you buy or sell an asset. We work with your insurance professionals so gaps are caught early.",
    bullets: ["Periodic Insurance Reviews", "Coverage Updates When Assets Change", "Claims Coordination", "Renewal Support"],
  },
  {
    tab: "Estate",
    title: "A Plan That Actually Gets Carried Out",
    body: "We coordinate with your attorneys year round, so changes to your estate plan get executed and your documents stay current as your family changes.",
    bullets: ["Coordination with Your Attorneys", "Trust and Entity Administration", "Beneficiary Designation Reviews", "Succession Planning Support"],
  },
  {
    tab: "Governance",
    title: "Keeping Your Family on the Same Side",
    body: "We help families make decisions together. Family meetings, mission statements, and charitable giving are organized around what your family values most.",
    bullets: ["Family Meetings", "Mission, Vision, and Values Statements", "Philanthropic Planning", "Foundation and Donor Advised Fund Support"],
  },
  {
    tab: "Next Generation",
    title: "Preparing the Next Generation",
    body: "Financial education for every family member, built around their age and experience, so the next generation is ready long before wealth passes to them.",
    bullets: ["One on One or Group Sessions", "Investing and Budgeting Basics", "Built Around Age and Experience", "A Pace Set by Each Person"],
  },
  {
    tab: "Documents",
    title: "Everything in One Secure Place",
    body: "One secure repository for every document, policy, and login your family depends on. When something is needed, it is found in minutes instead of days.",
    bullets: ["Secure Document Repository", "Cybersecurity Assessment", "Organized Records", "Password Management Support"],
  },
  {
    tab: "Property",
    title: "Homes and Travel, Handled",
    body: "We coordinate your property managers and travel partners, vet every vendor, and review every invoice, so your time goes to your family instead of logistics.",
    bullets: ["Travel Coordination", "Property Management Coordination", "Vendor Vetting", "Invoice Review"],
  },
];

export const SERVICE_TABS: (ServiceTab & { title: string; serviceTitle: string; iconImage?: string })[] = SERVICES.map((s, i) => ({
  ...DETAILS[i],
  slug: s.slug,
  serviceTitle: s.title,
  iconImage: s.iconImage,
}));
