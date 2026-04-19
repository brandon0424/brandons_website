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

const focusPoints = [
  "Customer discovery with assisted living operators",
  "Testing positioning, outreach, and early sales motion",
  "Keeping the product simple, useful, and text-native"
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
                    className="ui-pill translate-y-1 bg-background/80"
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
                    className="ui-pill-accent px-6"
                  >
                    Start a Conversation <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="ui-pill px-6 py-3 font-semibold"
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
                    className="ui-pill-muted text-xs"
                  >
                    <Linkedin className="h-3.5 w-3.5" /> LinkedIn
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="ui-pill-muted text-xs"
                  >
                    <Mail className="h-3.5 w-3.5" /> Email
                  </Link>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <aside className="ui-panel p-5 md:p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Current Focus
                    </p>
                    <h2 className="mt-3 text-xl font-semibold text-foreground">Skedra</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      The clearest example of how I work: customer discovery, positioning, outreach, and product direction around a real scheduling problem.
                    </p>
                  </div>
                  <span className="ui-badge shrink-0">Flagship Venture</span>
                </div>

                <div className="mt-5 space-y-3 border-t border-border/70 pt-4">
                  {focusPoints.map((point) => (
                    <div key={point} className="flex items-start gap-3 text-sm text-muted">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent" />
                      <p>{point}</p>
                    </div>
                  ))}
                </div>

                <Link
                  href={skedraUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ui-pill mt-5 bg-background/80"
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
                  <article className="ui-panel p-6">
                    <div className="inline-flex rounded-xl border border-border/70 bg-background/70 p-3">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>
                    <div className="mt-5 space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm leading-relaxed text-muted">{item.body}</p>
                    </div>
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

              <div className="ui-panel p-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-foreground">Find me on</p>
                  <span className="ui-badge">Fastest response: LinkedIn</span>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  <Link
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ui-pill bg-background/70"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Link>
                  <Link
                    href={`mailto:${siteConfig.email}`}
                    className="ui-pill bg-background/70"
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
