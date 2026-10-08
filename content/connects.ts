// Why each related service matters, shown in "How It Connects" on service pages.
export const CONNECTS: Record<string, Record<string, string>> = {
  "financial-administration": {
    "tax-and-compliance": "Current books are what let your CPA plan instead of rebuilding the year.",
    "investment-coordination": "Real cash flow means capital calls are funded before they are due.",
    "documents-and-information": "Every statement and report we keep lands in one secure place.",
  },
  "tax-and-compliance": {
    "financial-administration": "Good tax work starts with books that stay current all year.",
    "estate-and-legal": "Tax and legal planning move together instead of in separate rooms.",
    "governance-and-philanthropy": "Every charitable gift tracked and documented for your return.",
  },
  "investment-coordination": {
    "financial-administration": "Cash flow and liquidity planned around every capital call.",
    "tax-and-compliance": "K1s from every investment tracked until your CPA has them all.",
    "risk-and-insurance": "Coverage kept in step as your assets change.",
  },
  "risk-and-insurance": {
    "estate-and-legal": "Policies and beneficiaries kept in line with your estate plan.",
    "documents-and-information": "Every policy and declaration page stored where you can find it.",
    "travel-and-property": "New homes and properties added to coverage as they are acquired.",
  },
  "estate-and-legal": {
    "tax-and-compliance": "Legal changes coordinated with your CPA so planning stays aligned.",
    "governance-and-philanthropy": "Family values and governance carried into the plan itself.",
    "documents-and-information": "Wills, trusts, and entity documents kept current in one place.",
  },
  "governance-and-philanthropy": {
    "next-generation-education": "Heirs prepared with education at their own pace.",
    "estate-and-legal": "Decisions made at the family table carried into legal documents.",
    "tax-and-compliance": "Every gift tracked and documented for your CPA.",
  },
  "next-generation-education": {
    "governance-and-philanthropy": "Lessons connected to the values behind your family’s wealth.",
    "estate-and-legal": "Heirs who understand the plan long before they inherit it.",
    "financial-administration": "Budgeting lessons grounded in how your family actually runs.",
  },
  "documents-and-information": {
    "financial-administration": "Statements and reports filed as part of the books we keep.",
    "estate-and-legal": "Estate and entity documents organized and always current.",
    "risk-and-insurance": "Every policy in one place, ready the moment a claim is filed.",
  },
  "travel-and-property": {
    "risk-and-insurance": "Every new home or vehicle added to coverage.",
    "financial-administration": "Vendor invoices reviewed, paid, and recorded in your books.",
    "documents-and-information": "Contracts, warranties, and property records stored securely.",
  },
};
