// Service page copy, built from Diana's Menu of Services and Client Services Checklist.
// Guardrails: no dashes, never "financial life" or "fractional", no invented numbers.

export type Row = { task: string; without: string; with: string };
export type QA = { q: string; a: string };

export type ServiceDetail = {
  slug: string;
  headline: string;
  intro: string[];
  signs: string[];
  outcome: string;
  items: { t: string; d: string }[];
  ledger: Row[];
  inHouse: string[];
  partners: string[];
  faqs: QA[];
  related: string[];
  disclosure?: "investment" | "education";
};

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    slug: "financial-administration",
    headline: "A Controller for Your Family",
    intro: [
      "In a lot of families with real complexity, the finances live in a kitchen drawer, three banking apps, and an assistant’s inbox. Bills get paid, mostly. The books come together in March, when the CPA asks for them. Nobody has a current picture until somebody needs one in a hurry.",
      "We take over that work. NovoTime keeps a complete set of books for your family in QuickBooks, pays every bill on schedule, reconciles every account, and delivers financial reports to you on a regular schedule. Because the books stay current all year, decisions get made with real numbers, and tax planning finally has a foundation to stand on.",
      "This is the work everything else rests on. Accurate books are what let your CPA plan instead of reconstruct, let your investment advisers see real cash flow, and let you make a large decision without waiting weeks for someone to pull the numbers together. It is also the part of a family office most families never get from a wealth manager, because there is nothing to sell in it.",
    ],
    signs: ["Bills are paid from several accounts and nobody sees them all in one place", "Your books only come together when the CPA asks for them", "A large purchase or wire turns into a day of phone calls", "You are not sure what the household actually spends each month", "An assistant or family member carries this work on top of everything else"],
    outcome: "Books stay current all year and bills are paid on time, with NovoTime serving as your family’s controller.",
    items: [
      { t: "Bill Payment", d: "Real estate taxes, legal fees, household and project expenses paid on time from the right account. Every payment is recorded, so nothing is paid twice and nothing is missed." },
      { t: "Bookkeeping and Reporting", d: "A complete set of books maintained in QuickBooks, with consolidated reports delivered on a regular schedule. One view of what you own, what you owe, and where the money went." },
      { t: "Bank Account Oversight", d: "Every account reconciled. Large purchases, wires, and liquidity needs coordinated ahead of time, so funds are where they need to be before the closing date arrives." },
      { t: "Cash Flow and Budgeting", d: "Budgets built around how your family actually lives, trend analysis that shows where spending is heading, and liquidity planning that keeps enough cash ready without letting too much sit idle." },
    ],
    ledger: [
      { task: "Paying the property tax bill", without: "Found in a stack of mail, paid late or paid twice", with: "Scheduled, paid from the right account, and recorded" },
      { task: "Knowing what the family spends", without: "A guess until someone adds up the statements", with: "A report delivered on a regular schedule" },
      { task: "Wiring funds for a purchase", without: "Calls to two banks on the day it is due", with: "Liquidity planned and coordinated ahead of time" },
      { task: "Getting ready for tax season", without: "Rebuilding the whole year in March", with: "Books already current and handed to your CPA" },
    ],
    inHouse: ["Books Maintained in QuickBooks", "Bill Pay on Schedule", "Account Reconciliation", "Regular Financial Reports"],
    partners: ["Your Banks", "Your External CPA"],
    faqs: [
      { q: "Do You Replace My Bookkeeper or Assistant?", a: "Not necessarily. Some families hand the full controller role to us. Others keep a household assistant for day to day errands and let us run the books, bill pay, and reporting behind them. We set it up around what already works." },
      { q: "What Software Do You Use?", a: "We maintain your books in QuickBooks. You receive regular financial reports, and your CPA receives complete, organized records when it is time to prepare your return." },
      { q: "How Often Will I See Reports?", a: "On a regular schedule agreed when we set up your engagement, and any time you ask. Because the books stay current all year, a report always reflects today, not last quarter." },
      { q: "Can You Work with Our Existing Accounts?", a: "Yes. Your accounts stay where they are, at the banks you already use. We reconcile them, pay bills from them, and coordinate any large movements between them." },
    ],
    related: ["tax-and-compliance", "investment-coordination", "documents-and-information"],
  },
  {
    slug: "tax-and-compliance",
    headline: "Tax Planning That Starts Long Before April",
    intro: [
      "For many families, tax season means a box of envelopes, a CPA chasing missing K1s, and a return signed in a hurry. Planning happens after the year is already over, which is the one moment it can no longer change anything.",
      "NovoTime coordinates your tax work all year. Our accounting team meets regularly with your external CPA, looks for planning opportunities while there is still time to act on them, and delivers complete, organized records on schedule. Before any return is filed, we review it independently. Your CPA stays your CPA. They simply get far better information to work with.",
      "Good tax work depends on good records, which is why this service sits so close to our financial administration. When the books are current all year, your CPA can spend their time on planning and judgment rather than on gathering paper, and you get the benefit of their expertise while it can still make a difference.",
    ],
    signs: ["Your return is filed on extension most years", "K1s and 1099s arrive in a dozen places and someone has to chase them", "You only talk to your CPA about taxes once the year is over", "You sign returns without anyone checking them against your books", "Charitable gifts are hard to document when it is time to file"],
    outcome: "Everything your CPA needs arrives complete and on time, and every return gets an independent review before it is filed.",
    items: [
      { t: "Year Round Tax Planning", d: "Regular tax meetings between our accounting team and your external CPA, so opportunities are spotted while there is still time to act, not after the year closes." },
      { t: "Organized Records", d: "Complete, organized records delivered to your tax preparer on schedule. No shoebox, no chain of follow up emails, no extension filed because one statement went missing." },
      { t: "Charitable Contributions", d: "Every gift tracked and documented as it happens, with the acknowledgments your CPA needs already in hand when the return is prepared." },
      { t: "Tax Document Tracking", d: "Every K1, 1099, and supporting document collected, logged, and tracked in one place, including the ones that arrive late every single year." },
      { t: "Independent Return Review", d: "Before anything is filed, our team reviews the return against the books we keep, so questions get answered before the deadline instead of after a notice arrives." },
    ],
    ledger: [
      { task: "Collecting K1s and 1099s", without: "Chased one envelope at a time into April", with: "Logged as they arrive and tracked until complete" },
      { task: "Planning your taxes", without: "Discussed after the year is already over", with: "Reviewed with your CPA throughout the year" },
      { task: "Charitable receipts", without: "Searched for across inboxes in March", with: "Recorded with every gift" },
      { task: "Reviewing the return", without: "Signed because the deadline is tomorrow", with: "Checked independently before it is filed" },
    ],
    inHouse: ["Year Round Tax Planning", "Tax Document Tracking", "Charitable Contribution Records", "Independent Return Review"],
    partners: ["Your External CPA", "Your Tax Preparer"],
    faqs: [
      { q: "Do I Need to Change CPAs?", a: "No. We work alongside the CPA and tax preparer you already have. Our role is to make their work easier and more complete, and to give you an independent check on the result." },
      { q: "Do You Prepare My Tax Returns?", a: "Your external CPA prepares and files your returns. We coordinate everything around that: planning meetings, organized records, document tracking, and an independent review before filing." },
      { q: "What If Documents Arrive Late?", a: "Some always do. We track every document your family expects, follow up on the missing ones, and keep your CPA informed, so a late K1 is a known item rather than a surprise in April." },
      { q: "Is the Independent Review a Second Opinion?", a: "It is a check against the books we keep for you. Our team reviews the return before it is filed and raises any questions with your CPA, so they are resolved before the deadline rather than after a notice arrives." },
    ],
    related: ["financial-administration", "estate-and-legal", "governance-and-philanthropy"],
  },
  {
    slug: "investment-coordination",
    headline: "The Paperwork Around Your Investments, Handled",
    intro: [
      "Families with more than one investment manager often end up as the only person who can see the whole picture, and the only person chasing capital calls, distribution notices, and reporting deadlines from every direction at once.",
      "NovoTime takes on that administrative weight. We compile consolidated reporting from the information your custodians and managers provide, track capital calls and distributions along with the cash they require, and handle the schedules, document requests, and deadlines that come with each relationship. We do not provide investment advice or manage money. Your investment advisers make the investment decisions, and we make sure they are working from your family’s full position.",
      "Because we sell nothing and manage nothing, we have no reason to favor one adviser or product over another. That independence is deliberate. It lets us keep every adviser well informed, keep every deadline in view, and give you a clear picture of where things stand without a sales conversation attached to it.",
    ],
    signs: ["You work with more than one adviser, manager, or custodian", "Capital calls catch you without the cash ready", "No single report shows everything your family owns", "Each adviser only sees the piece of the picture they manage", "You are the one tracking every deadline and document request"],
    outcome: "The administrative weight around your investments, from paperwork to deadlines, sits with us rather than you.",
    items: [
      { t: "Consolidated Reporting", d: "One consolidated report compiled from the information your custodians and external managers provide, so every account can be seen in one place and on the same terms." },
      { t: "Capital Calls and Distributions", d: "Capital calls, distributions, and liquidity events tracked from notice to settlement, with the cash each one requires planned ahead of time." },
      { t: "Advisor Administration", d: "Reporting schedules, document requests, deadlines, and investment related meetings handled with your advisers and managers, so the administration never lands on your desk." },
      { t: "Advisers Kept Informed", d: "Your investment advisers stay informed, as needed, on cash flow, capital calls, and holdings outside their purview, so their decisions account for your family’s full position." },
    ],
    ledger: [
      { task: "Answering a capital call", without: "A notice in the inbox and days to find the cash", with: "Tracked on arrival, with funding already planned" },
      { task: "Seeing every account together", without: "A stack of statements in different formats", with: "One consolidated report" },
      { task: "Keeping advisers informed", without: "Each one sees only their own piece", with: "Each one knows the full position they need" },
      { task: "Meeting deadlines and requests", without: "Remembered by you, or missed", with: "Handled by our team" },
    ],
    inHouse: ["Consolidated Reporting", "Capital Call Tracking", "Distribution and Deadline Management"],
    partners: ["Custodians", "External Investment Advisers", "External Investment Managers"],
    faqs: [
      { q: "Do You Give Investment Advice?", a: "No. NovoTime is not a registered investment adviser and does not provide investment advice, recommendations, or analysis. Investment advice comes from your licensed independent advisers. We handle the administration around it." },
      { q: "Will You Work with My Current Advisers?", a: "Yes. We coordinate with the custodians, advisers, and managers you already use. Nothing about those relationships has to change for us to start." },
      { q: "Do You Hold My Assets?", a: "No. We do not custody assets or effect securities transactions. Your assets stay exactly where they are, with your custodians." },
      { q: "How Does This Work with My Adviser’s Reporting?", a: "Your advisers and custodians keep producing their own reports. We compile the information they provide into one consolidated view and coordinate the administrative side of each relationship." },
    ],
    related: ["financial-administration", "tax-and-compliance", "risk-and-insurance"],
    disclosure: "investment",
  },
  {
    slug: "risk-and-insurance",
    headline: "Every Policy Tracked, Every Change Covered",
    intro: [
      "Insurance tends to get attention twice: when a policy is bought and when a claim is filed. In between, homes get renovated, cars and art are bought and sold, and coverage quietly falls out of step with what the family actually owns.",
      "We keep it in step. NovoTime tracks every policy, renewal, and claim in one place and reviews your coverage on a regular schedule alongside independent insurance professionals. Every purchase or sale of an asset triggers a matching update to coverage, so nothing new goes uninsured and nothing sold stays on the bill.",
      "Because we also keep your books and track your assets, we see changes as they happen: a closing on a new home, a vehicle sold, a collection that has grown. That is what makes it possible to keep coverage current without asking you to remember to call anyone.",
    ],
    signs: ["You own several homes, vehicles, or valuables across different policies", "Nobody can say for certain when each policy renews", "Coverage has not been reviewed since you bought it", "You have paid for coverage on something you no longer own", "A past claim took far more of your time than it should have"],
    outcome: "Every policy, renewal, and claim is tracked in one place, and coverage changes the moment your assets do.",
    items: [
      { t: "Periodic Insurance Reviews", d: "Comprehensive reviews of your coverage on a regular schedule, completed alongside independent insurance professionals who answer to you." },
      { t: "Coverage That Follows Your Assets", d: "Every new home, vehicle, or significant purchase added to coverage, and every sale removed, as part of the transaction itself." },
      { t: "Claims Support", d: "When something goes wrong, we coordinate the claim and the communication around it, so you are not the one on hold with the carrier." },
      { t: "Policy Administration", d: "Streamlined communication with carriers for renewals and policy changes, handled without pulling you into every email." },
      { t: "Document Storage", d: "Every policy, declaration page, and renewal notice organized and stored in one place, ready the moment someone needs it." },
      { t: "One Point of Contact", d: "Your carriers and insurance professionals coordinated through our team, so everyone works from the same list of what you own." },
    ],
    ledger: [
      { task: "Buying a new property", without: "Coverage added if someone remembers", with: "Coverage updated as part of the purchase" },
      { task: "Selling a vehicle or asset", without: "Still insured and still billed months later", with: "Removed from coverage when it is sold" },
      { task: "Filing a claim", without: "Hours on the phone with the carrier", with: "Coordinated by our team" },
      { task: "Finding a policy", without: "A search through email and file cabinets", with: "Stored in one place" },
    ],
    inHouse: ["Policy Inventory", "Renewal Tracking", "Coverage Updates When Assets Change", "Insurance Document Storage"],
    partners: ["Independent Insurance Professionals", "Insurance Carriers"],
    faqs: [
      { q: "Do You Sell Insurance?", a: "No. We do not sell insurance or any other product. We coordinate with independent insurance professionals and your carriers, and we are paid only by you." },
      { q: "How Often Is Coverage Reviewed?", a: "On a regular schedule set with your independent insurance professionals, and any time something changes, such as the purchase or sale of an asset." },
      { q: "Can You Help with a Claim That Is Already Open?", a: "Yes. We can step in to coordinate communication with the carrier and pull together the documentation the claim requires." },
      { q: "Will You Replace My Insurance Agent?", a: "No. Your independent insurance professionals keep their role. We give them a complete, current picture of what you own and handle the administration that usually falls to you." },
    ],
    related: ["estate-and-legal", "documents-and-information", "travel-and-property"],
  },
  {
    slug: "estate-and-legal",
    headline: "From Recommendation to Signed Document",
    intro: [
      "Estate plans rarely fail because of bad advice. They fail because the follow through never happens: a trust is drafted but never funded, a beneficiary form never gets updated, the meeting with the attorney keeps sliding to next quarter.",
      "NovoTime coordinates with your external counsel all year, as matters require attention. We organize your legal and estate documents, support trustees with administration, keep tax and legal planning working in tandem, and track every open item to completion. When something in your family’s affairs calls for a legal change, we do not simply flag it. We make certain it is executed.",
      "Estate and legal work touches nearly every other part of a family office. Trusts own accounts, entities file returns, beneficiaries appear on insurance policies. Because we coordinate all of it from one central point, a change in one place gets carried through to every other place it matters.",
    ],
    signs: ["Your estate plan has not been reviewed in years", "No one is sure where every trust or entity document lives", "Attorney recommendations sit unfinished for months", "Beneficiary designations may not match your current plan", "Your attorney and your CPA rarely, if ever, talk to each other"],
    outcome: "When something in your family’s affairs calls for a legal change, we do not simply flag it. We make certain it is executed.",
    items: [
      { t: "Estate Planning Coordination", d: "Estate matters coordinated alongside your external counsel throughout the year, with tax and legal planning kept in step with each other." },
      { t: "Legal Document Management", d: "Wills, trusts, operating agreements, and related documents organized in one place and kept current as your family changes." },
      { t: "Trustee and Entity Support", d: "Administrative coordination for trusts and family entities, so trustees have the records and support they need when they need them." },
      { t: "Beneficiary Reviews", d: "Periodic review of beneficiary designations with your counsel, so accounts and policies pass the way your plan intends." },
      { t: "Wealth Transfer Logistics", d: "Oversight of the practical steps when wealth changes hands, with every party involved kept on the same timeline." },
      { t: "Entity and Succession Planning", d: "Formation, restructuring, and business transition discussions facilitated with your advisors, so decisions turn into documents." },
    ],
    ledger: [
      { task: "Updating a beneficiary", without: "On the list for next year, again", with: "Reviewed with counsel and completed" },
      { task: "Finding the trust agreement", without: "Somewhere in the attorney’s files", with: "Organized and current in one place" },
      { task: "Acting on your attorney’s advice", without: "Discussed, agreed, then forgotten", with: "Tracked until it is signed and executed" },
      { task: "Keeping tax and legal aligned", without: "Two advisors who rarely talk", with: "Coordinated through one central point" },
    ],
    inHouse: ["Legal and Estate Document Management", "Trustee and Entity Administration", "Beneficiary Designation Reviews"],
    partners: ["Estate Planning Attorneys", "Business Counsel", "Your External CPA"],
    faqs: [
      { q: "Are You a Law Firm?", a: "No. NovoTime does not provide legal advice. We work alongside your estate planning attorney and business counsel, coordinating the work and making sure their recommendations are carried out." },
      { q: "Can You Work with My Existing Attorney?", a: "Yes. We coordinate with the counsel you already trust. When a matter calls for a specialist you do not have, we help engage the right expertise." },
      { q: "What Does Trustee Support Include?", a: "Administrative coordination for trusts and family entities: records kept organized, counsel and your CPA kept in the loop, and required steps completed on time." },
      { q: "What Happens When Our Plan Changes?", a: "We coordinate the updates with your counsel and carry them through everywhere they apply: documents, accounts, beneficiary designations, and your CPA’s planning." },
    ],
    related: ["tax-and-compliance", "governance-and-philanthropy", "documents-and-information"],
  },
  {
    slug: "governance-and-philanthropy",
    headline: "Helping Families Decide Together",
    intro: [
      "Wealth that lasts across generations usually has more to do with how a family talks than how it invests. Shared values, clear expectations, and a plan for giving all take work, and that work tends to get postponed until a transition forces it.",
      "Your family decides what matters. The machinery of acting on it sits with us. NovoTime facilitates family meetings and conversations between generations, helps you develop mission, vision, and values statements and a governance framework, and supports your charitable giving alongside your legal, tax, and charitable advisors.",
      "This work is less about paperwork than about people. It takes patience, discretion, and a willingness to let a family find its own answers. Our role is to create the structure and the time for those conversations, then handle everything that follows once a decision is made.",
    ],
    signs: ["Your family has never held a formal family meeting", "Giving decisions are made one request at a time", "The next generation does not know what the family values or owns", "A foundation or donor advised fund has become a chore", "You want your values to outlast you, not just your assets"],
    outcome: "Your family decides what matters. The machinery of acting on it sits with us.",
    items: [
      { t: "Philanthropic Planning", d: "Giving coordinated alongside your legal, tax, and charitable advisors, so generosity and planning work together instead of separately." },
      { t: "Charitable Vehicle Support", d: "Administrative support for foundations and donor advised funds, with the records your advisors need kept organized and current." },
      { t: "Wealth Transition Conversations", d: "Facilitated discussions about wealth transition and communication between generations, held well before a transition forces them." },
      { t: "Family Meetings", d: "Family meetings and long term planning discussions organized and facilitated, so every generation stays aligned on what comes next." },
      { t: "Mission, Vision, and Values", d: "Guidance developing your family’s mission, vision, and values statements, and a governance framework your family can actually use." },
      { t: "Advisor Coordination", d: "Your philanthropic, tax, legal, and investment advisors working from one plan and one set of family priorities." },
    ],
    ledger: [
      { task: "Holding a family meeting", without: "Talked about at the holidays, never scheduled", with: "Planned, facilitated, and followed up" },
      { task: "Deciding what to support", without: "Requests handled one at a time", with: "Guided by a shared family mission" },
      { task: "Running a foundation or fund", without: "Administration on a family member’s desk", with: "Administrative support from our team" },
      { task: "Preparing the next generation", without: "Left until the transition arrives", with: "Conversations started early, across generations" },
    ],
    inHouse: ["Family Meeting Facilitation", "Mission, Vision, and Values Statements", "Charitable Vehicle Administration"],
    partners: ["Charitable Advisors", "Estate Attorneys", "Tax Advisors"],
    faqs: [
      { q: "Do We Need a Foundation to Use This Service?", a: "No. Many families give directly or through a donor advised fund. We support whatever structure you use, and coordinate with your advisors if you are considering a new one." },
      { q: "Who Runs the Family Meeting?", a: "We organize and facilitate it, working from an agenda your family agrees on ahead of time. The decisions always stay with your family." },
      { q: "Can This Include the Next Generation?", a: "Yes. This service pairs naturally with Next Generation Education, so younger family members understand both the values behind the wealth and the basics of managing it." },
      { q: "Is This Only for Very Large Families?", a: "No. A married couple with grown children benefits from a clear mission and an occasional facilitated conversation just as much as a large, multi generation family does." },
    ],
    related: ["next-generation-education", "estate-and-legal", "tax-and-compliance"],
  },
  {
    slug: "next-generation-education",
    headline: "Preparing Heirs at Their Own Pace",
    intro: [
      "The next generation often inherits responsibility long before anyone prepares them for it. Parents want to talk about money, but finding the right words, the right moment, and the right level of detail is hard, especially across very different ages.",
      "NovoTime builds financial education around your family. We offer one on one or group sessions for any family member, covering investing, budgeting, and financial literacy from the ground up, customized to age, experience, and your family’s goals. The pace, depth, and level of formality suit each person, not a curriculum.",
      "Education works best when it starts early and happens often. A single conversation rarely sticks; a steady series of sessions, built around what each person already knows, gives the next generation real confidence. And because we sell no products, every lesson is exactly what it appears to be: education.",
    ],
    signs: ["Your children or grandchildren will inherit responsibility one day", "Money is hard to talk about at home", "Younger family members ask questions no one has time to answer", "You want heirs prepared before a transition, not after", "Family members are at very different stages of financial knowledge"],
    outcome: "Financial literacy built around your family, at a pace and depth that suits each person.",
    items: [
      { t: "One on One or Group Sessions", d: "Financial education sessions for a single family member or a group, scheduled around school, work, and family life." },
      { t: "Foundational Education", d: "Investing, budgeting, and financial literacy from the ground up, taught in plain language with no product attached." },
      { t: "Built Around Each Person", d: "Customized to age, experience, and your family’s goals, from a first budget to understanding how the family’s affairs are structured." },
      { t: "A Pace That Fits", d: "The depth and formality of every session set by the person in the room, so no one is talked down to and no one is left behind." },
    ],
    ledger: [
      { task: "Talking about money", without: "Avoided, or one lecture at the wrong moment", with: "Ongoing sessions at the right level" },
      { task: "Learning the basics", without: "Picked up online, or not at all", with: "Taught from the ground up in plain language" },
      { task: "Understanding the family’s wealth", without: "A surprise at the transition", with: "Introduced gradually, as your family chooses" },
    ],
    inHouse: ["One on One Sessions", "Group Sessions", "Lessons Built by Age and Experience"],
    partners: [],
    faqs: [
      { q: "Who Are the Sessions For?", a: "Any family member. Sessions are customized to age and experience, so they work for someone learning to budget for the first time and for an adult preparing to take on more responsibility." },
      { q: "Are Sessions Investment Advice?", a: "No. Educational sessions are general in nature and informational only. They do not constitute investment, legal, tax, or accounting advice." },
      { q: "Can Parents Attend?", a: "Yes, if your family prefers. Some families hold joint sessions and others prefer one on one. We follow your lead." },
      { q: "How Are Topics Chosen?", a: "Together with your family. We start with what each person already knows and what your family wants them to learn, then build sessions from there." },
    ],
    related: ["governance-and-philanthropy", "estate-and-legal", "financial-administration"],
    disclosure: "education",
  },
  {
    slug: "documents-and-information",
    headline: "Everything Your Family Needs, in One Secure Place",
    intro: [
      "Ask most families where the deed is, who insures the lake house, or how to log into an old brokerage account, and the answer starts with a search. Now imagine someone else having to find it, on short notice, in a hard week.",
      "NovoTime maintains a secure, centralized digital repository for your family, organizes your financial, legal, and personal records, and helps manage logins and passwords as requested. We also coordinate a third party assessment to evaluate and strengthen your personal cybersecurity. Whatever tomorrow brings, every login, policy, and entity contact is already in one place.",
      "This service quietly supports every other one. Your CPA needs records, your attorney needs documents, your insurance professionals need policies, and your family needs a clear path if something happens. Keeping it all in one secure place is how we make each of those requests take minutes instead of days.",
    ],
    signs: ["Important documents are split across drawers, inboxes, and offices", "Only one person knows where everything is", "You could not hand someone your affairs tomorrow if you had to", "Passwords and logins live in memory or on paper", "No one has ever assessed your family’s personal cybersecurity"],
    outcome: "Every login, policy, and entity contact already in one place: peace of mind for you, and a clear path for whoever needs it next.",
    items: [
      { t: "Secure Repository", d: "One secure, centralized digital home for every document, so what you need is at your fingertips rather than at the end of a hunt." },
      { t: "Cybersecurity Assessment", d: "A third party assessment, coordinated by our team, to evaluate and strengthen your family’s personal security." },
      { t: "Organized Records", d: "Financial, legal, and personal records organized and kept current, so the latest version is always the one in front of you." },
      { t: "Password Management", d: "Support managing logins and passwords, as requested, so access never depends on one person’s memory." },
    ],
    ledger: [
      { task: "Finding a deed or policy", without: "A hunt through drawers and inboxes", with: "Found in the repository in minutes" },
      { task: "Handing things off in an emergency", without: "Family left to piece it together", with: "A clear path already in place" },
      { task: "Personal cybersecurity", without: "Unknown until something goes wrong", with: "Assessed by an independent third party" },
      { task: "Managing logins", without: "Passwords on sticky notes", with: "Managed with our support, as requested" },
    ],
    inHouse: ["Secure Document Repository", "Record Organization", "Password Management Support"],
    partners: ["Independent Cybersecurity Assessors"],
    faqs: [
      { q: "Who Can Access the Repository?", a: "Your family decides. We follow your instructions on who can see what, and we keep that list current as circumstances change." },
      { q: "Who Performs the Cybersecurity Assessment?", a: "An independent third party. We coordinate the assessment and help put its recommendations into practice." },
      { q: "Do I Have to Organize Everything First?", a: "No. Organizing your financial, legal, and personal records is part of the service. Bring what you have and we will take it from there." },
      { q: "What Kinds of Records Do You Organize?", a: "Financial, legal, and personal records: statements, policies, deeds, entity documents, and the contacts that go with them, organized so the current version is always easy to find." },
    ],
    related: ["financial-administration", "estate-and-legal", "risk-and-insurance"],
  },
  {
    slug: "travel-and-property",
    headline: "Homes and Travel Without the Hidden Cost",
    intro: [
      "Second homes, rentals, and family trips come with a long tail of vendors, invoices, and small decisions. Left unwatched, convenience quietly becomes expensive: a contractor bills twice, an invoice is paid without a second look, a trip gets planned three different ways.",
      "The coordination behind your homes and travel sits with us and the professionals who handle them. NovoTime coordinates family travel alongside trusted travel agents and property needs with local property management companies. Every vendor is vetted before they are hired, and every invoice is reviewed before it is paid.",
      "Homes and travel generate a steady stream of invoices, and those invoices flow straight into the books we keep. Pairing this coordination with our financial administration means every vendor payment is checked against what was actually agreed, recorded properly, and never paid twice.",
    ],
    signs: ["You own more than one home or a property in another state", "Contractor and vendor invoices are paid without review", "Planning family travel eats into your own time", "No one vets new vendors before they are hired", "You suspect convenience is costing more than it should"],
    outcome: "The coordination behind your homes and travel sits with us, so convenience never quietly becomes expensive.",
    items: [
      { t: "Travel Coordination", d: "Family travel coordinated alongside trusted travel agents, so plans come together without hours of logistics landing on you." },
      { t: "Property Management", d: "Property needs coordinated with local management companies, wherever your homes happen to be." },
      { t: "Vendor Vetting", d: "Every vendor vetted before they are hired, so the people working in your homes are people you would choose." },
      { t: "Invoice Review", d: "Every invoice reviewed before it is paid, so mistakes and double billing are caught before the money leaves." },
    ],
    ledger: [
      { task: "Hiring a contractor", without: "Whoever answered the phone first", with: "Vetted before they are hired" },
      { task: "Paying property invoices", without: "Paid without a second look", with: "Reviewed before they are paid" },
      { task: "Planning a family trip", without: "Hours of logistics across the family", with: "Coordinated with trusted travel agents" },
      { task: "Managing a second home", without: "Calls from out of state on short notice", with: "Coordinated with local property managers" },
    ],
    inHouse: ["Vendor Vetting", "Invoice Review"],
    partners: ["Trusted Travel Agents", "Local Property Management Companies"],
    faqs: [
      { q: "Do You Replace My Property Manager?", a: "No. We coordinate with local property management companies and keep an eye on their work and invoices. They manage the property. We manage the coordination." },
      { q: "Do You Book Travel Directly?", a: "We coordinate family travel alongside trusted travel agents, who handle the bookings themselves." },
      { q: "Can I Choose Only This Service?", a: "Yes. Every service is a menu, not a mandate. Many families pair it with Financial Administration, since the same invoices flow through both." },
      { q: "Which Properties Can You Coordinate?", a: "Your primary home, second homes, and other properties your family owns, coordinated with local property management companies wherever they are located." },
    ],
    related: ["risk-and-insurance", "financial-administration", "documents-and-information"],
  },
];

// Shared across every service page: how an engagement begins.
export const BEGIN = [
  { t: "A Discovery Meeting", d: "In person whenever possible. We learn your family’s structure, priorities, and pain points before we talk about anything else." },
  { t: "A Clear Scope", d: "You choose the services that matter most. We tell you exactly what we will handle and which advisors we will coordinate." },
  { t: "One Flat Fee", d: "Agreed up front and set by complexity and scope. Never a percentage of assets, never a commission." },
  { t: "We Take It from There", d: "Records gathered, advisors introduced, and the work moves off your desk and onto ours." },
];

export const DISCLOSURES = {
  investment:
    "NovoTime LLC is not a registered investment adviser and does not provide investment advice, recommendations, or analysis. NovoTime LLC does not review or evaluate the performance of investments or investment managers or effect securities transactions. All investment advice, performance reviews, and related services are provided by licensed independent investment advisers.",
  education:
    "Any educational sessions, materials, or discussions provided by NovoTime LLC are general in nature, intended for informational purposes only, and do not constitute investment, legal, tax, or accounting advice. Clients should consult their own qualified professionals before making any financial, legal, or tax decisions.",
};

export const detailFor = (slug: string) => SERVICE_DETAILS.find((d) => d.slug === slug);
