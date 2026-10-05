// Service page copy. Lead paragraphs and item lists come from Diana's Menu of Services and
// Client Services Checklist, lightly edited for the web (no dashes, Title Case labels).

export type ServiceDetail = {
  slug: string;
  lead: string;
  items: string[];
  inHouse: string[];
  partners: string[];
  related: string[];
  disclosure?: "investment" | "education";
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "financial-administration",
    lead: "A complete set of books maintained in QuickBooks, with NovoTime serving as your family’s controller and delivering financial reports to you on a regular schedule. Books stay current all year and bills are paid on time, which makes informed decisions possible and lays the foundation for effective tax planning.",
    items: [
      "Bill payment, from real estate taxes and legal fees to household and project expenses.",
      "Bookkeeping and consolidated financial reporting.",
      "Bank account oversight, reconciliation, and coordination of large asset purchases, wires, and liquidity needs.",
      "Cash flow management, budgeting, trend analysis, and liquidity planning.",
    ],
    inHouse: ["Books Maintained in QuickBooks", "Bill Pay on Schedule", "Account Reconciliation", "Regular Financial Reports"],
    partners: ["Your Banks", "Your External CPA"],
    related: ["tax-and-compliance", "investment-coordination", "documents-and-information"],
  },
  {
    slug: "tax-and-compliance",
    lead: "Your family’s tax planning is never an afterthought. Everything your external CPA needs arrives complete, organized, and on time. We identify potential tax opportunities, convene regular tax meetings between our accounting team and your CPA, and review the returns independently before they are filed.",
    items: [
      "Proactive, year round tax planning in coordination with your external CPA.",
      "Facilitation of annual tax return preparation through coordinated delivery of complete and organized records to your tax preparer.",
      "Charitable contribution tracking and documentation.",
      "Centralized collection, organization, and tracking of K1s, 1099s, and supporting tax documentation.",
    ],
    inHouse: ["Year Round Tax Planning", "Tax Document Tracking", "Charitable Contribution Records", "Independent Return Review"],
    partners: ["Your External CPA", "Your Tax Preparer"],
    related: ["financial-administration", "estate-and-legal", "governance-and-philanthropy"],
  },
  {
    slug: "investment-coordination",
    lead: "Consolidated reporting drawn from multiple sources, with the big picture coordinated across all of them. Your investment advisers stay informed, as needed, on cash flow, capital calls, and holdings outside their purview, so their decisions account for your family’s full position. The administrative weight around your investments, from paperwork to deadlines, sits with us rather than you.",
    items: [
      "Consolidated reporting compiled from information provided by custodians and external investment managers.",
      "Tracking and administration of capital calls, distributions, liquidity events, and related cash flow obligations.",
      "Coordination of administrative matters with external investment advisers and managers, including reporting schedules, documentation requests, deadlines, and investment related meetings.",
    ],
    inHouse: ["Consolidated Reporting", "Capital Call Tracking", "Distribution and Deadline Management"],
    partners: ["Custodians", "External Investment Advisers", "External Investment Managers"],
    related: ["financial-administration", "tax-and-compliance", "risk-and-insurance"],
    disclosure: "investment",
  },
  {
    slug: "risk-and-insurance",
    lead: "The administrative burden of managing your insurance policies sits with us. Every policy, renewal, and claim is tracked in one place and reviewed on a regular schedule alongside your independent insurance professionals. Every purchase or sale of an asset triggers a corresponding update to coverage, so nothing gets missed.",
    items: [
      "Comprehensive periodic insurance reviews alongside independent insurance professionals.",
      "Ongoing coordination of insurance coverage for newly acquired and sold assets.",
      "Assistance with claims coordination and communication.",
      "Streamlined communication with insurance carriers to support efficient policy administration and renewals.",
      "Centralized organization and storage of insurance documents.",
    ],
    inHouse: ["Policy Inventory", "Renewal Tracking", "Coverage Updates When Assets Change", "Insurance Document Storage"],
    partners: ["Independent Insurance Professionals", "Insurance Carriers"],
    related: ["estate-and-legal", "documents-and-information", "travel-and-property"],
  },
  {
    slug: "estate-and-legal",
    lead: "Coordination with your external legal counsel runs all year, as matters require attention. Formation and trust paperwork is coordinated, communication with your attorneys is kept efficient, and tax and legal planning work in tandem. When something in your family’s affairs may call for a legal change, we do not simply flag it. We make certain it is executed.",
    items: [
      "Coordination of estate planning matters alongside external counsel.",
      "Centralized organization and management of legal and estate related documents.",
      "Trustee support and administrative coordination for trusts and family entities.",
      "Periodic review of beneficiary designations in coordination with external counsel.",
      "Oversight of general wealth transfer logistics.",
      "Facilitation of entity formation and restructuring discussions alongside external advisors.",
      "Facilitation of succession and business transition planning discussions alongside external advisors.",
    ],
    inHouse: ["Legal and Estate Document Management", "Trustee and Entity Administration", "Beneficiary Designation Reviews"],
    partners: ["Estate Planning Attorneys", "Business Counsel", "Your External CPA"],
    related: ["tax-and-compliance", "governance-and-philanthropy", "documents-and-information"],
  },
  {
    slug: "governance-and-philanthropy",
    lead: "Your family decides what matters. The machinery of acting on it sits with us, alongside your external philanthropic, tax, legal, and investment advisors.",
    items: [
      "Coordination of philanthropic planning alongside external legal, tax, and charitable advisors.",
      "Administrative support for charitable vehicles such as foundations and donor advised funds.",
      "Facilitation of family wealth transition discussions and communication between generations.",
      "Facilitation of family meetings and long term planning discussions to support alignment across generations.",
      "Guidance in developing family mission, vision, and values statements, as well as a family governance framework.",
    ],
    inHouse: ["Family Meeting Facilitation", "Mission, Vision, and Values Statements", "Charitable Vehicle Administration"],
    partners: ["Charitable Advisors", "Estate Attorneys", "Tax Advisors"],
    related: ["next-generation-education", "estate-and-legal", "tax-and-compliance"],
  },
  {
    slug: "next-generation-education",
    lead: "Financial literacy built around your family, at a pace, depth, and level of formality that suits each person.",
    items: [
      "One on one or group financial education sessions for family members.",
      "Foundational education in investing, budgeting, and financial literacy.",
      "Customized education based on age, experience, and family goals.",
    ],
    inHouse: ["One on One Sessions", "Group Sessions", "Lessons Built by Age and Experience"],
    partners: [],
    related: ["governance-and-philanthropy", "estate-and-legal", "financial-administration"],
    disclosure: "education",
  },
  {
    slug: "documents-and-information",
    lead: "One secure repository, so the document you need is at your fingertips rather than at the end of a hunt. Whatever tomorrow brings, every login, policy, and entity contact is already in one place: peace of mind for you, and a clear path for whoever needs it next.",
    items: [
      "Maintenance of a secure, centralized digital document repository.",
      "Coordination of a third party assessment to evaluate and strengthen your personal cybersecurity.",
      "Organization of financial, legal, and personal records.",
      "Password management support, as requested.",
    ],
    inHouse: ["Secure Document Repository", "Record Organization", "Password Management Support"],
    partners: ["Independent Cybersecurity Assessors"],
    related: ["financial-administration", "estate-and-legal", "risk-and-insurance"],
  },
  {
    slug: "travel-and-property",
    lead: "The coordination behind your homes and travel sits with us and the professionals who handle them. Vendors are vetted and invoices reviewed, so convenience never quietly becomes expensive.",
    items: [
      "Coordination of family travel alongside trusted travel agents.",
      "Coordination of property management needs with local property management companies.",
      "Vetting of vendors and review of every invoice.",
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
