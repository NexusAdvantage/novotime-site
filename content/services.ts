export type Service = { slug: string; icon: string; title: string; summary: string; iconImage?: string };

// iconImage: illustrated icon in /public/icons. Remove it to fall back to the line SVG in `icon`.
export const SERVICES: Service[] = [
  {
    "slug": "financial-administration",
    "icon": "i-ledger",
    "iconImage": "/icons/financial-administration.webp",
    "title": "Financial Administration",
    "summary": "Books kept current all year, bills paid on time, and our team acting as your family's controller."
  },
  {
    "slug": "tax-and-compliance",
    "icon": "i-tax",
    "iconImage": "/icons/tax-and-compliance.webp",
    "title": "Tax and Compliance",
    "summary": "Year round planning with your CPA, organized records on time, and an independent review before filing."
  },
  {
    "slug": "investment-coordination",
    "icon": "i-invest",
    "iconImage": "/icons/investment-coordination.webp",
    "title": "Investment Coordination",
    "summary": "Consolidated reporting across every manager, with capital calls and deadlines handled for you."
  },
  {
    "slug": "risk-and-insurance",
    "icon": "i-shield",
    "iconImage": "/icons/risk-and-insurance.webp",
    "title": "Risk and Insurance",
    "summary": "Every policy reviewed on schedule, and coverage updated every time you buy or sell an asset."
  },
  {
    "slug": "estate-and-legal",
    "icon": "i-column",
    "iconImage": "/icons/estate-and-legal.webp",
    "title": "Estate and Legal",
    "summary": "Year round coordination with your attorneys, so changes to your plan actually get executed."
  },
  {
    "slug": "governance-and-philanthropy",
    "icon": "i-tree",
    "iconImage": "/icons/governance-and-philanthropy.webp",
    "title": "Governance and Philanthropy",
    "summary": "Family meetings, mission statements, and charitable giving, organized around what your family values."
  },
  {
    "slug": "next-generation-education",
    "icon": "i-cap",
    "iconImage": "/icons/next-generation-education.webp",
    "title": "Next Generation Education",
    "summary": "Financial education for every family member, built around their age and experience."
  },
  {
    "slug": "documents-and-information",
    "icon": "i-vault",
    "iconImage": "/icons/documents-and-information.webp",
    "title": "Documents and Information",
    "summary": "One secure repository for every document, policy, and login your family depends on."
  },
  {
    "slug": "travel-and-property",
    "icon": "i-house",
    "iconImage": "/icons/travel-and-property.webp",
    "title": "Travel and Property",
    "summary": "Property managers and travel partners coordinated, with every vendor vetted and invoice reviewed."
  }
];
