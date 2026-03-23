export type ProjectCategory = "Ventures" | "Web" | "Experience";

export type Project = {
  title: string;
  slug: string;
  category: ProjectCategory;
  summary: string;
  period?: string;
  compactDetail?: boolean;
  role?: string;
  roleLabel?: string;
  contributions?: string[];
  tags: string[];
  liveUrl?: string;
  liveLabel?: string;
  repoUrl?: string;
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
  "Ventures",
  "Web",
  "Experience"
];

export const projects: Project[] = [
  {
    title: "Skedra",
    slug: "skedra",
    category: "Ventures",
    period: "November 2025 - Present",
    summary:
      "Co-founded an AI scheduling assistant for assisted living facilities, leading product management, customer development, and business direction.",
    tags: ["Co-founder", "Product Management", "Customer Discovery"],
    liveUrl: "https://skedraai.com",
    liveLabel: "skedraai.com",
    year: 2025,
    highlights: [
      "A real scheduling solution built for live facility workflows",
      "Shaped with input from 60+ assisted living managers",
      "3 design partners are actively using Skedra"
    ],
    featured: true,
    overview:
      "Skedra is an AI scheduling assistant built specifically for assisted living facilities. I co-founded the company with Austin Bee through Utah Valley University's Sandbox program to solve the scheduling stress managers deal with every week.",
    problem:
      "Managers in assisted living facilities often handle callouts, shift changes, and staff communication through fragmented manual systems. The result is constant follow-up, avoidable stress, and too much time spent chasing coverage.",
    solution:
      "Skedra uses SMS-first workflows to automate callouts, shift changes, and staff communication in the channel teams already use. It reduces manual follow-up and gives managers clearer visibility into responses, open gaps, and next actions.",
    role:
      "As co-founder and product manager, I focus on product strategy, customer development, positioning, and the overall direction of the business. My work sits between customer conversations, product decisions, and the go-to-market motion.",
    contributions: [
      "Led discovery conversations with 60+ assisted living managers",
      "Performed focused outreach to expand design-partner conversations and growth",
      "Worked directly on product direction and design-partner growth"
    ],
    stack: [],
    outcomes: [
      "Launched in November 2025",
      "3 design partners are actively using Skedra",
      "Built specifically for assisted living facilities",
      "Ongoing product iteration with real customer feedback"
    ],
    screenshots: ["/images/projects/skedra.png"]
  },
  {
    title: "Nomen Global",
    slug: "nomen-global",
    category: "Experience",
    period: "February 2025 - August 2025",
    summary:
      "Worked as an Account Executive at an English-learning school, building referral partnerships through outreach, trust, and relationship development.",
    tags: ["Account Executive", "Partnerships", "Business Development"],
    year: 2025,
    highlights: [
      "Helped start 3 major partnerships",
      "Worked on partnerships with DWS, Deseret Industries, and PF Staffing",
      "Built relationships designed to drive long-term student referrals"
    ],
    featured: true,
    overview:
      "At Nomen Global, an English-learning school, I worked as an Account Executive focused on building relationships with organizations that could become long-term sources of student referrals. My work centered on outreach, partnership development, and creating trust with organizations whose communities could benefit from English education.",
    problem:
      "The school needed trusted organizational partners that could become long-term sources of student referrals, which required professional outreach, relationship-building, and clear communication of value.",
    solution:
      "The approach centered on targeted outreach and partnership development with organizations whose communities could benefit from English education, turning initial conversations into real opportunities for long-term referral growth.",
    role:
      "As an Account Executive, I focused on outreach, partnership development, and building trust with organizations that could become long-term referral sources.",
    contributions: [
      "Helped establish partnerships with DWS, Deseret Industries, and PF Staffing",
      "Built relationships with organizations serving potential students",
      "Moved partnership conversations forward through consistent follow-through"
    ],
    stack: [],
    outcomes: [],
    screenshots: ["/images/projects/nomen-global.png"]
  },
  {
    title: "Brandon's Personal Website",
    slug: "brandons-personal-website",
    category: "Web",
    period: "2026 - Present",
    compactDetail: true,
    summary:
      "Built this site as a simple place to show who I am, what I am building, and where I am headed.",
    tags: ["Portfolio", "Personal Brand", "Next.js"],
    repoUrl: "https://github.com/brandon0424/brandons_website",
    year: 2026,
    highlights: [
      "Built as a portfolio, networking tool, and digital business card"
    ],
    featured: true,
    overview:
      "My personal website is a digital extension of who I am, what I am building, and where I am headed. It gives me one place to share my projects, values, and direction clearly.",
    problem:
      "A resume or business card only tells part of the story. I wanted a central place that felt more human, current, and useful.",
    solution:
      "The site gives me a central place to share what I am building, how I think, and what kind of work I want to do in a format that is more current and useful than a resume alone.",
    roleLabel: "Built by Me",
    role:
      "I designed and built the site myself, from the messaging and layout to the frontend implementation. It is meant to function as a living portfolio, a networking tool, and a digital business card that actually feels like me.",
    contributions: [],
    stack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    outcomes: [],
    screenshots: ["/images/projects/brandons-personal-website.png"]
  },
  {
    title: "Skedra Website",
    slug: "skedra-website",
    category: "Web",
    period: "2025 - Present",
    summary:
      "Designed Skedra's website to establish credibility, clarify messaging, and support early lead capture.",
    tags: ["Website", "Brand", "Messaging"],
    liveUrl: "https://skedraai.com",
    liveLabel: "skedraai.com",
    year: 2025,
    highlights: [
      "Built and Designed by Brandon",
      "Built around lead capture and credibility",
      "Created to support early-stage startup growth and trust-building"
    ],
    featured: false,
    overview:
      "The Skedra website is the landing page potential customers see when they want to understand what the product is, how it helps, and whether it is worth taking seriously.",
    problem:
      "An early-stage startup needs to explain what it does quickly and credibly, especially when it is trying to earn attention and trust from real operators.",
    solution:
      "The site was designed to give Skedra a credible public presence, explain the product clearly, and support early lead capture from operators who need to trust the company quickly.",
    role: undefined,
    contributions: [],
    stack: [],
    outcomes: [
      "Created a public-facing home for the brand",
      "Established a clearer first impression for potential customers",
      "Sharpened Skedra's messaging and online presentation"
    ],
    screenshots: ["/images/projects/skedra-website.png"]
  },
  {
    title: "Aptive Sales",
    slug: "aptive-sales",
    category: "Experience",
    period: "Summer 2021",
    summary:
      "Sold pest control door-to-door, closing around 40 accounts and generating about $25,000 in revenue over the summer.",
    tags: ["Door-to-Door Sales", "Sales", "Resilience"],
    year: 2021,
    highlights: [
      "Sold around 40 accounts",
      "Generated about $25,000 in revenue",
      "Learned resilience and core sales principles"
    ],
    featured: false,
    overview:
      "At Aptive, I worked in door-to-door sales selling pest control services. It was one of the most formative sales experiences I have had.",
    problem:
      "Door-to-door sales puts you in a high-rejection environment where you have to earn attention quickly, handle pressure, and stay consistent anyway.",
    solution:
      "Success came from applying direct-response sales fundamentals in person: earning attention quickly, handling objections clearly, and staying consistent through rejection.",
    role:
      "As a door-to-door sales representative, I sold pest control services in a high-pressure, face-to-face environment.",
    contributions: [
      "Sold around 40 accounts",
      "Generated about $25,000 in revenue",
      "Built confidence and resilience through repeated rejection"
    ],
    stack: [],
    outcomes: [],
    screenshots: ["/images/projects/aptive-sales.png"]
  },
  {
    title: "Mission",
    slug: "mission",
    category: "Experience",
    period: "2022 - 2024",
    summary:
      "Served in the Tennessee Knoxville Mission, where leadership, discipline, empathy, and communication became daily practice.",
    tags: ["Leadership", "Service", "Discipline"],
    year: 2024,
    highlights: [
      "District Leader for 10.5 months",
      "Zone Leader for 10.5 months",
      "Trainer for 7.5 months"
    ],
    featured: false,
    overview:
      "I served a two-year mission for The Church of Jesus Christ of Latter-day Saints in the Tennessee Knoxville Mission from 2022 to 2024. It remains one of the most formative experiences of my life.",
    problem:
      "Missionary service requires sustained discipline, empathy, communication, and leadership across demanding schedules and often challenging situations.",
    solution:
      "The work was grounded in disciplined daily service, teaching, and leadership, with a strong emphasis on communication, empathy, and consistency.",
    role:
      "I served for two years and spent extended time in leadership and training roles that shaped how I communicate, work, and lead.",
    contributions: [
      "District Leader for 10.5 months",
      "Zone Leader for 10.5 months",
      "Trainer for 7.5 months"
    ],
    stack: ["Leadership", "Discipline", "Empathy", "Communication"],
    outcomes: [
      "Served 10.5 months as District Leader",
      "Served 10.5 months as Zone Leader",
      "Spent 7.5 months training a new missionary"
    ],
    screenshots: ["/images/projects/mission.png"]
  }
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
