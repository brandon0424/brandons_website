import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const timeline = [
  {
    year: "2026",
    title: "Product & Business Lead, Skedra",
    detail:
      "Co-leading Skedra with Austin Bee in UVU's Sandbox program. Focused on customer discovery, positioning, sales, and strategy."
  },
  {
    year: "2025",
    title: "Accounting Student, UVU",
    detail:
      "Sophomore year focused on accounting, entrepreneurship, and practical technical learning in SQL and Python."
  },
  {
    year: "2024",
    title: "B2B Sales Execution",
    detail:
      "Built direct sales experience through outreach, discovery calls, and practical messaging iteration."
  },
  {
    year: "2023",
    title: "Early Builder Momentum",
    detail:
      "Started combining business strategy with hands-on experimentation in automation and data workflows."
  }
];

const principles = [
  "Solve real operational pain, not theoretical problems.",
  "Keep communication clear, direct, and human.",
  "Use AI where it makes work calmer and better.",
  "Treat ethics as a product requirement, not an afterthought.",
  "Build systems that teams can sustain long term."
];

const strengths = ["Learner", "Input", "Arranger", "Positivity", "Strategic"];

const interests = [
  "Entrepreneurship + startups",
  "Leadership + psychology",
  "AI agents and how they work",
  "Business strategy + finance",
  "Sustainable energy"
];

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Brandon, his background, and working principles."
};

export default function AboutPage() {
  return (
    <section className="px-6 py-20 md:px-8">
      <div className="mx-auto max-w-5xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="I build practical tools for real operating problems."
            description={`${siteConfig.ownerName} is an accounting student at UVU and an entrepreneur in the UVU Sandbox program, focused on building useful AI and automation systems.`}
          />
        </Reveal>

        <Reveal delay={70}>
          <article className="rounded-2xl border border-border bg-card p-7 md:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Short Bio</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground">
              I am currently co-building Skedra, an SMS-first AI scheduling assistant for assisted living and senior living managers. My role is product and business: customer discovery, positioning, sales, and strategy. I am actively learning SQL and Python to build more of the tools I use every week.
            </p>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="rounded-2xl border border-border bg-card p-7 md:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Timeline</h2>
            <div className="mt-6 space-y-6 border-l border-border pl-5">
              {timeline.map((item) => (
                <div key={item.year} className="relative grid gap-2 md:grid-cols-[100px_1fr] md:gap-4">
                  <span className="absolute -left-[1.7rem] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                  <p className="text-sm font-semibold text-accent">{item.year}</p>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={160}>
          <article className="rounded-2xl border border-border bg-card p-7 md:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Principles</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="rounded-xl border border-border bg-background/60 p-4 text-sm text-foreground">
                  {principle}
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <Reveal>
            <article className="rounded-2xl border border-border bg-card p-7 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Strengths + Style</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Top CliftonStrengths themes:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {strengths.map((strength) => (
                  <span
                    key={strength}
                    className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-foreground"
                  >
                    {strength}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">
                Communication style: friendly, energetic, direct, and practical.
              </p>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="rounded-2xl border border-border bg-card p-7 md:p-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Outside Work</h2>
              <ul className="mt-4 space-y-2 text-sm text-foreground">
                <li>• Training to complete a marathon while staying healthy and injury-aware</li>
                <li>• Swimming as a long-term fitness base</li>
                <li>• Tracking consistency on Strava</li>
              </ul>
              <h3 className="mt-5 text-sm font-semibold text-foreground">Interests</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="rounded-2xl border border-border bg-card p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Work Together</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Need a practical product + business operator?</h2>
            <p className="mt-2 text-sm text-muted">
              I am especially interested in workflow-heavy products where AI can reduce stress and make decisions clearer.
            </p>
            <Link
              href="/#contact"
              className="mt-5 inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Get in touch
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
