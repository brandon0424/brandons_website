export const siteConfig = {
  ownerName: "Brandon",
  siteName: "Brandon",
  description:
    "Accounting student at UVU and cofounder of Skedra. I build practical AI, automation, and data-driven tools.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brandonsmith-portfolio.vercel.app",
  email: "brandon.smithlf@gmail.com",
  location: "Utah, USA",
  role: "Product & Business Lead at Skedra",
  education: "Accounting at Utah Valley University (UVU)",
  currentBuild: {
    name: "Skedra",
    href: "https://skedraai.com",
    summary:
      "SMS-first AI scheduling assistant for assisted living managers."
  },
  socials: [
    { label: "GitHub", href: "https://github.com/brandon0424", key: "github" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/brandon-smith-b17572325",
      key: "linkedin"
    },
    { label: "Resume", href: "/resume", key: "resume" },
    { label: "Skedra", href: "https://skedraai.com", key: "website" },
    { label: "Email", href: "mailto:brandon.smithlf@gmail.com", key: "email" }
  ]
} as const;
