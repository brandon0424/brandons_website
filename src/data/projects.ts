export type ProjectCategory = "Startups" | "Automation" | "Data" | "Writing";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  summary: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
  caseStudyUrl?: string;
  year: number;
  highlights: string[];
  featured: boolean;
  overview: string;
  problem: string;
  solution: string;
  stack: string[];
  outcomes: string[];
  screenshots: string[];
};

export const projectCategories: ProjectCategory[] = [
  "Startups",
  "Automation",
  "Data",
  "Writing"
];

export const projects: Project[] = [
  {
    title: "Skedra",
    slug: "skedra",
    category: "Startups",
    summary:
      "SMS-first AI scheduling assistant for assisted and senior living facility managers.",
    tags: ["Product Strategy", "B2B Sales", "Scheduling"],
    liveUrl: "https://skedraai.com",
    repoUrl: "https://github.com/brandon0424/skedra",
    caseStudyUrl: "https://skedraai.com",
    year: 2026,
    highlights: [
      "Built for facilities with roughly 10–100 employees",
      "Positioned around reducing last-minute schedule chaos",
      "Pricing direction: $2 per employee per month"
    ],
    featured: true,
    overview:
      "Skedra helps managers handle shift changes, call-outs, and urgent coverage requests in the same channel teams already use: text.",
    problem:
      "Managers in assisted living often rely on manual group texts, spreadsheets, and bulky systems that slow down time-sensitive decisions.",
    solution:
      "I lead customer discovery, positioning, and sales strategy while shaping the product toward a practical SMS-first workflow.",
    stack: ["SMS Workflows", "AI Assistant Logic", "Operations Design", "Go-to-Market"],
    outcomes: [
      "Clear ICP: assisted/senior living facilities",
      "Refined messaging around stress reduction and speed",
      "Built repeatable discovery and outreach process"
    ],
    screenshots: [
      "/images/placeholders/automation-1.svg",
      "/images/placeholders/automation-2.svg"
    ]
  },
  {
    title: "Shift Alert Router",
    slug: "shift-alert-router",
    category: "Automation",
    summary:
      "A lightweight automation flow that routes schedule call-outs to the right staff via SMS logic.",
    tags: ["Python", "Automation", "Ops"],
    liveUrl: "https://example.com/shift-alert-router",
    repoUrl: "https://github.com/brandon0424/shift-alert-router",
    year: 2025,
    highlights: [
      "Reduced manual call tree effort",
      "Structured escalation by availability windows",
      "Kept messaging human and actionable"
    ],
    featured: true,
    overview:
      "This project prototypes practical shift-coverage automation without requiring teams to adopt a new communication behavior.",
    problem:
      "Coverage gaps become stressful when managers have to text individuals one by one during peak hours.",
    solution:
      "I mapped a simple escalation workflow that checks constraints first, then sends targeted outreach in sequence.",
    stack: ["Python", "Twilio", "Webhook Workflows", "Google Sheets"],
    outcomes: [
      "Faster response to urgent call-outs",
      "Lower coordination overhead for managers",
      "Better visibility into who was contacted and when"
    ],
    screenshots: [
      "/images/placeholders/pipeline-1.svg",
      "/images/placeholders/pipeline-2.svg"
    ]
  },
  {
    title: "Facility Coverage Dashboard",
    slug: "facility-coverage-dashboard",
    category: "Data",
    summary:
      "SQL-driven dashboard for staffing reliability, call-out patterns, and shift-fill speed.",
    tags: ["SQL", "Analytics", "Operations"],
    liveUrl: "https://example.com/facility-coverage-dashboard",
    repoUrl: "https://github.com/brandon0424/facility-coverage-dashboard",
    year: 2026,
    highlights: [
      "Tracked weekly coverage risk by shift type",
      "Surfaced bottlenecks in response speed",
      "Connected metrics to operator decisions"
    ],
    featured: true,
    overview:
      "A practical reporting layer for managers who need clear staffing signal without a complicated analytics stack.",
    problem:
      "Teams often know they are overloaded but lack a simple way to quantify where breakdowns are happening.",
    solution:
      "I modeled core staffing metrics in SQL and presented them in a dashboard optimized for fast weekly review.",
    stack: ["SQL", "Google BigQuery", "Looker Studio", "Data Modeling"],
    outcomes: [
      "Made staffing risk visible earlier in the week",
      "Helped prioritize process fixes over guesswork",
      "Created reusable metric definitions for future tooling"
    ],
    screenshots: [
      "/images/placeholders/dashboard-1.svg",
      "/images/placeholders/dashboard-2.svg"
    ]
  },
  {
    title: "Outbound Rhythm System",
    slug: "outbound-rhythm-system",
    category: "Automation",
    summary:
      "Sales outreach system combining segmentation, follow-up logic, and lightweight personalization.",
    tags: ["Sales", "Automation", "CRM"],
    liveUrl: "https://example.com/outbound-rhythm-system",
    repoUrl: "https://github.com/brandon0424/outbound-rhythm-system",
    year: 2025,
    highlights: [
      "Improved consistency of founder-led outreach",
      "Reduced follow-up drops between touches",
      "Kept messaging specific to manager pain points"
    ],
    featured: false,
    overview:
      "Built to support practical B2B sales execution while Brandon led product and business conversations.",
    problem:
      "Manual outreach can lose momentum when lead lists, notes, and follow-ups are scattered.",
    solution:
      "I designed a simple outreach cadence with automation triggers and a clear decision process for next touch.",
    stack: ["CRM", "Zapier", "Email + SMS", "Lead Qualification"],
    outcomes: [
      "Higher follow-through on target accounts",
      "More consistent message testing",
      "Cleaner handoff between discovery and sales calls"
    ],
    screenshots: [
      "/images/placeholders/crm-1.svg",
      "/images/placeholders/crm-2.svg"
    ]
  },
  {
    title: "Founder Learning Notes",
    slug: "founder-learning-notes",
    category: "Writing",
    summary:
      "Short practical writing on entrepreneurship, leadership, and ethical AI product decisions.",
    tags: ["Writing", "Leadership", "Ethics"],
    liveUrl: "https://example.com/founder-learning-notes",
    repoUrl: "https://github.com/brandon0424/founder-learning-notes",
    year: 2026,
    highlights: [
      "Distills live startup lessons into clear frameworks",
      "Focuses on practical decisions, not hype",
      "Covers leadership and psychology in early teams"
    ],
    featured: false,
    overview:
      "A writing practice used to sharpen thinking and communicate decisions with clarity.",
    problem:
      "Important lessons from customer calls and sales work get lost if they are not captured quickly.",
    solution:
      "I turned recurring patterns into concise notes that can guide product, sales, and hiring decisions.",
    stack: ["Editorial Workflow", "Research", "Founder Journaling"],
    outcomes: [
      "Improved internal alignment on priorities",
      "Built reusable language for positioning",
      "Created a personal knowledge loop for better decisions"
    ],
    screenshots: [
      "/images/placeholders/writing-1.svg",
      "/images/placeholders/writing-2.svg"
    ]
  },
  {
    title: "UVU Finance Ops Model",
    slug: "uvu-finance-ops-model",
    category: "Data",
    summary:
      "An accounting-forward model linking pricing, staffing assumptions, and unit economics.",
    tags: ["Accounting", "Finance", "Unit Economics"],
    liveUrl: "https://example.com/uvu-finance-ops-model",
    repoUrl: "https://github.com/brandon0424/uvu-finance-ops-model",
    year: 2025,
    highlights: [
      "Connected operational metrics to margin outcomes",
      "Tested pricing sensitivity scenarios",
      "Used as a decision aid for founder strategy"
    ],
    featured: false,
    overview:
      "A practical model shaped by Brandon's accounting training and startup operating context.",
    problem:
      "Early-stage teams often make pricing and hiring choices without a consistent financial lens.",
    solution:
      "I built a scenario model to make tradeoffs explicit and support clear weekly planning.",
    stack: ["SQL", "Spreadsheets", "Financial Modeling", "Scenario Planning"],
    outcomes: [
      "Improved confidence in pricing discussions",
      "Created shared assumptions across product and sales",
      "Reduced ambiguity in planning conversations"
    ],
    screenshots: [
      "/images/placeholders/analytics-1.svg",
      "/images/placeholders/analytics-2.svg"
    ]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
