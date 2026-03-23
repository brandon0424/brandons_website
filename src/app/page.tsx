import {
  ArrowRight,
  BookOpen,
  ChartLine,
  CircleFadingArrowUp,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Target,
  Workflow
} from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const process = [
  {
    title: "Start with customer signal",
    body: "I start with real conversations so the problem is clear before the solution gets polished.",
    icon: CircleFadingArrowUp
  },
  {
    title: "Ship practical workflows",
    body: "I care about simple positioning, useful product decisions, and execution people can actually adopt.",
    icon: Workflow
  },
  {
    title: "Measure what changed",
    body: "I look for signs of traction: better response, clearer momentum, and less wasted motion.",
    icon: ChartLine
  }
];

const learningNow = [
  "SQL + Python for practical automation",
  "Sales strategy + outreach systems",
  "Web scraping + data workflows"
];

const interests = [
  "Leadership + psychology",
  "Ethics in technology",
  "Sustainable energy",
  "AI agents that are useful and principled",
  "Business strategy + finance/accounting"
];

const problemFit = [
  "Turning customer pain into clear product direction",
  "Reducing last-minute operational chaos",
  "Improving outreach, response, and follow-through"
];

const githubUrl =
  siteConfig.socials.find((social) => social.key === "github")?.href ?? "#";
const linkedinUrl =
  siteConfig.socials.find((social) => social.key === "linkedin")?.href ?? "#";
const skedraUrl =
  siteConfig.socials.find((social) => social.key === "website")?.href ?? "#";

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-20 pt-20 md:px-8 md:pt-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
            <div>
              <Reveal>
                <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted">
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  UVU Accounting + Sandbox Entrepreneur
                </p>
              </Reveal>

              <Reveal delay={80}>
                <h1 className="max-w-3xl font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
                  Brandon
                </h1>
              </Reveal>

              <Reveal delay={150}>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
                  Founder and go-to-market-minded operator working across sales, positioning, product direction, and execution.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                  I am Brandon. I am co-building Skedra and learning through real customer conversations, outreach, and product decisions. I like helping early ideas get clearer, more useful, and closer to traction.
                </p>
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
                  >
                    Start a Conversation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
                  >
                    View Projects
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted transition hover:border-accent hover:text-foreground"
                  >
                    <Github className="h-3.5 w-3.5" /> GitHub
                  </Link>
                  <Link
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted transition hover:border-accent hover:text-foreground"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-medium text-muted transition hover:border-accent hover:text-foreground"
                  >
                    <Mail className="h-3.5 w-3.5" /> Email
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <aside className="rounded-2xl border border-border bg-card/95 p-6 shadow-soft">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Current Focus
                </p>
                <h2 className="mt-4 text-xl font-semibold text-foreground">Skedra</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  I am co-building Skedra with Austin Bee. It is the clearest example of how I work: customer discovery, positioning, outreach, and product direction around a real operating problem.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-foreground">
                  <li>• Customer discovery with assisted living operators</li>
                  <li>• Testing message, market, and early sales motion</li>
                  <li>• Keeping the solution simple and text-native</li>
                </ul>
                <Link
                  href={skedraUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:opacity-80"
                >
                  View Skedra <ExternalLink className="h-4 w-4" />
                </Link>
              </aside>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8">
        <div className="mx-auto max-w-6xl space-y-10">
          <Reveal>
            <SectionHeading
              eyebrow="How I Work"
              title="Practical, Fast, and Specific"
              description="I like clear problems, direct communication, and work that moves quickly toward something real."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.title} delay={70 * index}>
                  <article className="rounded-2xl border border-border bg-card p-6">
                    <Icon className="h-5 w-5 text-accent" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          <Reveal>
            <article className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex rounded-full border border-border bg-background p-2">
                <BookOpen className="h-4 w-4 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Learning Now</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {learningNow.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex rounded-full border border-border bg-background p-2">
                <Target className="h-4 w-4 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Problems I Like Solving</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {problemFit.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="h-full rounded-2xl border border-border bg-card p-6">
              <div className="inline-flex rounded-full border border-border bg-background p-2">
                <Sparkles className="h-4 w-4 text-accent" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Long-Term Interests</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {interests.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="px-6 pb-24 pt-20 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_1fr]">
          <Reveal>
            <div className="space-y-6">
              <SectionHeading
                eyebrow="Contact"
                title="Start a Conversation"
                description="If you are building something early and want to talk through positioning, sales, product direction, or practical execution, reach out."
              />

              <div className="rounded-2xl border border-border bg-card p-6">
                <p className="text-sm text-muted">Find me on</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                  <Link
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition hover:border-accent hover:text-accent"
                  >
                    <Mail className="h-4 w-4" /> Email
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={110}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
