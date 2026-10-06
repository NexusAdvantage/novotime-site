// Service page copy, organized from Diana's Menu of Services and Client Services Checklist.
// Each item is a short title plus one line. Outcome lines condense her checklist summaries.

export type ServiceDetail = {
  slug: string;
  outcome: string;
  items: { t: string; d: string }[];
  inHouse: string[];
  partners: string[];
  related: string[];
  disclosure?: "investment" | "education";
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "financial-administration",
    outcome: "Books stay current all year and bills are paid on time, with NovoTime serving as your family’s controller.",
    items: [
      { t: "Bill Payment", d: "Real estate taxes, legal fees, household and project expenses, all paid on time." },
      { t: "Bookkeeping and Reporting", d: "A complete set of books in QuickBooks with consolidated financial reports." },
      { t: "Bank Account Oversight", d: "Reconciliation plus coordination of large purchases, wires, and liquidity needs." },
      { t: "Cash Flow and Budgeting", d: "Budgeting, trend analysis, and liquidity planning so you see what is coming." },
    ],
    inHouse: ["Books Maintained in QuickBooks", "Bill Pay on Schedule", "Account Reconciliation", "Regular Financial Reports"],
    partners: ["Your Banks", "Your External CPA"],
    related: ["tax-and-compliance", "investment-coordination", "documents-and-information"],
  },
  {
    slug: "tax-and-compliance",
    outcome: "Everything your CPA needs arrives complete and on time, and every return gets an independent review before it is filed.",
    items: [
      { t: "Year Round Tax Planning", d: "Proactive planning with your external CPA, not just in April." },
      { t: "Organized Records", d: "Complete, organized records delivered to your tax preparer on schedule." },
      { t: "Charitable Contributions", d: "Every gift tracked and documented." },
      { t: "Tax Document Tracking", d: "Every K1, 1099, and supporting document collected in one place." },
    ],
    inHouse: ["Year Round Tax Planning", "Tax Document Tracking", "Charitable Contribution Records", "Independent Return Review"],
    partners: ["Your External CPA", "Your Tax Preparer"],
    related: ["financial-administration", "estate-and-legal", "governance-and-philanthropy"],
  },
  {
    slug: "investment-coordination",
    outcome: "The administrative weight around your investments, from paperwork to deadlines, sits with us rather than you.",
    items: [
      { t: "Consolidated Reporting", d: "One report compiled from your custodians and external investment managers." },
      { t: "Capital Calls and Distributions", d: "Capital calls, distributions, and liquidity events tracked, along with the cash they require." },
      { t: "Advisor Administration", d: "Reporting schedules, document requests, deadlines, and meetings handled with your advisers." },
    ],
    inHouse: ["Consolidated Reporting", "Capital Call Tracking", "Distribution and Deadline Management"],
    partners: ["Custodians", "External Investment Advisers", "External Investment Managers"],
    related: ["financial-administration", "tax-and-compliance", "risk-and-insurance"],
    disclosure: "investment",
  },
  {
    slug: "risk-and-insurance",
    outcome: "Every policy, renewal, and claim is tracked in one place, and coverage changes the moment your assets do.",
    items: [
      { t: "Periodic Insurance Reviews", d: "Comprehensive reviews alongside independent insurance professionals." },
      { t: "Coverage That Follows Your Assets", d: "Coverage updated whenever an asset is bought or sold." },
      { t: "Claims Support", d: "Coordination and communication when a claim needs to be made." },
      { t: "Policy Administration", d: "Streamlined communication with carriers for renewals and policy changes." },
      { t: "Document Storage", d: "Every insurance document organized and stored in one place." },
      { t: "One Point of Contact", d: "Your carriers and insurance professionals coordinated through our team." },
    ],
    inHouse: ["Policy Inventory", "Renewal Tracking", "Coverage Updates When Assets Change", "Insurance Document Storage"],
    partners: ["Independent Insurance Professionals", "Insurance Carriers"],
    related: ["estate-and-legal", "documents-and-information", "travel-and-property"],
  },
  {
    slug: "estate-and-legal",
    outcome: "When something in your family’s affairs calls for a legal change, we do not simply flag it. We make certain it is executed.",
    items: [
      { t: "Estate Planning Coordination", d: "Estate matters coordinated alongside your external counsel." },
      { t: "Legal Document Management", d: "Legal and estate documents organized and kept current." },
      { t: "Trustee and Entity Support", d: "Administrative coordination for trusts and family entities." },
      { t: "Beneficiary Reviews", d: "Periodic review of beneficiary designations with your counsel." },
      { t: "Wealth Transfer Logistics", d: "Oversight of the practical steps when wealth changes hands." },
      { t: "Entity and Succession Planning", d: "Formation, restructuring, and business transition discussions facilitated with your advisors." },
    ],
    inHouse: ["Legal and Estate Document Management", "Trustee and Entity Administration", "Beneficiary Designation Reviews"],
    partners: ["Estate Planning Attorneys", "Business Counsel", "Your External CPA"],
    related: ["tax-and-compliance", "governance-and-philanthropy", "documents-and-information"],
  },
  {
    slug: "governance-and-philanthropy",
    outcome: "Your family decides what matters. The machinery of acting on it sits with us.",
    items: [
      { t: "Philanthropic Planning", d: "Coordinated alongside your legal, tax, and charitable advisors." },
      { t: "Charitable Vehicle Support", d: "Administration for foundations and donor advised funds." },
      { t: "Wealth Transition Conversations", d: "Facilitated discussions and communication between generations." },
      { t: "Family Meetings", d: "Meetings and long term planning that keep every generation aligned." },
      { t: "Mission, Vision, and Values", d: "Guidance developing your family statements and governance framework." },
      { t: "Advisor Coordination", d: "Your philanthropic, tax, legal, and investment advisors working from one plan." },
    ],
    inHouse: ["Family Meeting Facilitation", "Mission, Vision, and Values Statements", "Charitable Vehicle Administration"],
    partners: ["Charitable Advisors", "Estate Attorneys", "Tax Advisors"],
    related: ["next-generation-education", "estate-and-legal", "tax-and-compliance"],
  },
  {
    slug: "next-generation-education",
    outcome: "Financial literacy built around your family, at a pace and depth that suits each person.",
    items: [
      { t: "One on One or Group Sessions", d: "Financial education sessions for any member of your family." },
      { t: "Foundational Education", d: "Investing, budgeting, and financial literacy from the ground up." },
      { t: "Built Around Each Person", d: "Customized to age, experience, and your family’s goals." },
    ],
    inHouse: ["One on One Sessions", "Group Sessions", "Lessons Built by Age and Experience"],
    partners: [],
    related: ["governance-and-philanthropy", "estate-and-legal", "financial-administration"],
    disclosure: "education",
  },
  {
    slug: "documents-and-information",
    outcome: "Every login, policy, and entity contact already in one place: peace of mind for you, and a clear path for whoever needs it next.",
    items: [
      { t: "Secure Repository", d: "One secure, centralized digital home for every document." },
      { t: "Cybersecurity Assessment", d: "A third party assessment to evaluate and strengthen your personal security." },
      { t: "Organized Records", d: "Financial, legal, and personal records organized and kept current." },
      { t: "Password Management", d: "Support managing logins and passwords, as requested." },
    ],
    inHouse: ["Secure Document Repository", "Record Organization", "Password Management Support"],
    partners: ["Independent Cybersecurity Assessors"],
    related: ["financial-administration", "estate-and-legal", "risk-and-insurance"],
  },
  {
    slug: "travel-and-property",
    outcome: "The coordination behind your homes and travel sits with us, so convenience never quietly becomes expensive.",
    items: [
      { t: "Travel Coordination", d: "Family travel coordinated alongside trusted travel agents." },
      { t: "Property Management", d: "Property needs coordinated with local management companies." },
      { t: "Vendor Vetting", d: "Every vendor vetted before they are hired." },
      { t: "Invoice Review", d: "Every invoice reviewed before it is paid." },
    ],
    inHouse: ["Vendor Vetting", "Invoice Review"],
    partners: ["Trusted Travel Agents", "Local Property Management Companies"],
    related: ["risk-and-insurance", "financial-administration", "documents-and-information"],
  },
];

export const DISCLOSURES = {
  investment:
    "NovoTime LLC is not a registered investment adviser and does not provide investment advice, recommendations, or analysis. NovoTime LLC does not review or evaluate the performance of investments or investment managers or effect securities transactions. All investment advice, performance reviews, and related services are provided by licensed independent investment advisers.",
  education:
    "Any educational sessions, materials, or discussions provided by NovoTime LLC are general in nature, intended for informational purposes only, and do not constitute investment, legal, tax, or accounting advice. Clients should consult their own qualified professionals before making any financial, legal, or tax decisions.",
};

export const detailFor = (slug: string) => SERVICE_DETAILS.find((d) => d.slug === slug);
