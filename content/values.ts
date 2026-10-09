// The two lines under each value are verbatim from NovoTime Company Values 2026.
// Page copy (intro, practice, why) expands on them and needs Diana's approval.
export type Value = {
  slug: string;
  file: string;
  title: string; // HTML with an <em> accent
  name: string;
  lines: [string, string];
  summary: string;
  headline: string;
  intro: string;
  practice: { t: string; d: string }[];
  why: string;
};

export const VALUES: Value[] = [
  {
    slug: "integrity",
    file: "Integrity",
    title: "We Stand on <em>Integrity</em>",
    name: "Integrity",
    lines: ["Our story doesn’t change with the audience.", "We keep our word, even if it costs us."],
    summary: "Our story doesn’t change with the audience, and we keep our word, even when it costs us.",
    headline: "Our Story Doesn’t Change with the Audience",
    intro: "Integrity is the ground everything else at NovoTime stands on. You hear the same answer whether you ask us, your CPA asks us, or your children ask us. When we give our word, we keep it, even when keeping it costs us time, effort, or business.",
    practice: [
      { t: "One Version of the Truth", d: "Every advisor works from the same complete, accurate picture. We never shade the facts to make a meeting go smoother." },
      { t: "Promises in Writing", d: "Your scope and flat fee are agreed up front and written down, so nothing changes on you later." },
      { t: "Mistakes Owned Out Loud", d: "If something slips, you hear it from us first, along with exactly how we are fixing it." },
    ],
    why: "Your family trusts us with information you share with almost no one. That trust only works if what we tell you is what we tell everyone else, every time.",
  },
  {
    slug: "one-interest",
    file: "One Interest",
    title: "We Serve <em>One Interest</em>",
    name: "One Interest",
    lines: ["The client’s interest comes first, always.", "We give the honest answer, not the convenient one."],
    summary: "Your interest comes first, always, so you get the honest answer instead of the convenient one.",
    headline: "Your Interest Comes First, Always",
    intro: "NovoTime is paid only by the families we serve. We take no commissions and have no products to sell, so there is never a second party whose interests compete with yours. That freedom is what lets us give you the honest answer, even when it is not the convenient one.",
    practice: [
      { t: "Paid Only by You", d: "Our only income is the flat fee you agree to. No advisor, bank, or provider we coordinate pays us anything." },
      { t: "No Products to Sell", d: "We do not manage investments or sell insurance or any other product, so what we tell you is never a sales pitch." },
      { t: "The Honest Answer", d: "If something is not in your interest, even when it would mean more work for us, we say so." },
    ],
    why: "When the only person paying us is you, the only outcome we are working toward is yours.",
  },
  {
    slug: "find-a-way",
    file: "Find a Way",
    title: "We Find a <em>Way</em>",
    name: "Finding a Way",
    lines: ["We own the issue until it’s solved.", "When the obvious path closes, we find an open one."],
    summary: "We own every issue until it is solved, and when the obvious path closes, we find an open one.",
    headline: "We Own the Issue Until It Is Solved",
    intro: "Wealth brings problems that do not fit neatly into anyone’s job description. When one lands on your desk, it becomes ours, and it stays ours until it is resolved. If the obvious path closes, we look for another one instead of handing the problem back to you.",
    practice: [
      { t: "One Owner for Every Issue", d: "You never have to keep track of who is supposed to be handling something. We are." },
      { t: "Follow Through to the End", d: "We do not stop at a recommendation. We see it carried out, signed, filed, or paid." },
      { t: "A Second Path Ready", d: "When a deadline, institution, or plan falls through, we come back with options, not excuses." },
    ],
    why: "The whole point of NovoTime is that the work moves off your desk and stays off it.",
  },
  {
    slug: "challenge-the-playbook",
    file: "Challenge the Playbook",
    title: "We Challenge the <em>Playbook</em>",
    name: "Challenging the Playbook",
    lines: ["We question what works, not just what doesn’t.", "Every situation gets fresh thinking."],
    summary: "We question what works, not just what doesn’t, so every situation gets fresh thinking.",
    headline: "Every Situation Gets Fresh Thinking",
    intro: "It is easy to keep doing what has always been done, especially when it seems to be working. We question what works, not just what doesn’t, because no two families are alike and an arrangement that fit five years ago may not fit today.",
    practice: [
      { t: "No Templates", d: "Your family’s structure, priorities, and pain points shape the work, not a standard checklist." },
      { t: "Regular Second Looks", d: "We revisit arrangements that seem settled to make sure they still serve your family." },
      { t: "Better Questions", d: "We ask why something is done the way it is before we accept that it should stay that way." },
    ],
    why: "Families and their wealth change over time. Thinking that never changes eventually stops fitting either one.",
  },
  {
    slug: "humility",
    file: "Humility",
    title: "We Earn It with <em>Humility</em>",
    name: "Humility",
    lines: ["Our reputation is earned every day.", "Ego has no place in what we do."],
    summary: "Our reputation is earned every day, and ego has no place in the work we do for you.",
    headline: "Our Reputation Is Earned Every Day",
    intro: "No past result entitles us to your trust tomorrow. We earn it in the details, every day, and we leave ego out of the work. That means listening first, respecting the other professionals on your team, and doing the quiet tasks as carefully as the important ones.",
    practice: [
      { t: "Listening First", d: "We learn how your family works before we suggest that anything should change." },
      { t: "Supporting Your Advisors", d: "Your CPA, attorney, and other advisors keep their roles. Our job is to make their work easier, not to compete with it." },
      { t: "Every Task Done Well", d: "Reconciling an account gets the same care as preparing for a family meeting." },
    ],
    why: "The families we serve deserve a team focused on them, not on itself.",
  },
];

export const valueHref = (slug: string) => `/values/${slug}`;
