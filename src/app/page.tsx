import {
  ArrowRight,
  ExternalLink,
  FileText,
  HeartHandshake,
  Linkedin,
  Mail,
  RefreshCcw,
  Zap
} from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const strengths = [
  {
    title: "Lead with people",
    body: "I genuinely like people, which helps me build trust, communicate clearly, and understand what actually matters to them.",
    icon: HeartHandshake
  },
  {
    title: "Move with initiative",
    body: "I like being proactive, working hard, and pushing things forward until they become real instead of staying theoretical.",
    icon: Zap
  },
  {
    title: "Learn and iterate fast",
    body: "I learn by doing, fail quickly when needed, and use each round of feedback to improve the next one.",
    icon: RefreshCcw
  }
];

const linkedinUrl =
  siteConfig.socials.find((social) => social.key === "linkedin")?.href ?? "#";
const resumeUrl =
  siteConfig.socials.find((social) => social.key === "resume")?.href ?? "/resume";
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
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                  Home
                </p>
              </Reveal>

              <Reveal delay={40}>
                <div className="flex flex-wrap items-center gap-4">
                  <h1 className="font-serif text-5xl leading-tight sm:text-6xl md:text-7xl">
                    Brandon
                  </h1>
                  <Link
                    href={resumeUrl}
                    className="inline-flex translate-y-1 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:border-accent hover:text-accent"
                  >
                    <FileText className="h-4 w-4" />
                    Resume
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted md:text-xl">
                  Founder and go-to-market-minded operator working across sales, positioning, product direction, and execution.
                </p>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                  I am Brandon. I am co-founding Skedra and learning through real customer conversations, outreach, and product decisions. I like helping early ideas turn into clear offers, useful products, and real traction.
                </p>
              </Reveal>

              <Reveal delay={160}>
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

              <Reveal delay={200}>
                <div className="mt-8 flex flex-wrap gap-3">
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
              <aside className="rounded-2xl border border-border bg-card/95 p-5 shadow-soft md:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  Current Focus
                </p>
                <h2 className="mt-3 text-xl font-semibold text-foreground">Skedra</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  I am co-founding Skedra with Austin Bee, an AI scheduling tool for assisted living teams. It is the clearest example of how I work: customer discovery, positioning, outreach, and product direction around a real operating problem.
                </p>
                <Link
                  href={skedraUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-accent transition hover:opacity-80"
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
              eyebrow="Strengths"
              title="How I Tend to Work Best"
              description="The strengths I rely on most are communication, initiative, and learning fast through real-world iteration."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-3">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={70 * index}>
                  <article className="rounded-2xl border border-border bg-card p-6">
                    <Icon className="h-5 w-5 text-accent" />
                    <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
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
