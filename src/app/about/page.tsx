import type { Metadata } from "next";
import Link from "next/link";

import { ExpandableBio } from "@/components/expandable-bio";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const timeline = [
  {
    year: "2025 - Present",
    title: "Co-founder, Product & Business Lead, Skedra",
    detail:
      "Co-founding Skedra with Austin Bee through UVU's Sandbox program. Focused on customer discovery, positioning, sales, product direction, and building an AI scheduling assistant for assisted living facilities."
  },
  {
    year: "2025",
    title: "Account Executive, Nomen Global",
    detail:
      "Built referral partnerships for an English-learning school and helped establish relationships with DWS, Deseret Industries, and PF Staffing."
  },
  {
    year: "2025 - Present",
    title: "Accounting Student, Utah Valley University",
    detail:
      "Studying accounting while learning entrepreneurship through real startup work, customer conversations, and hands-on technical experimentation in SQL, Python, and automation."
  },
  {
    year: "2022 - 2024",
    title: "Tennessee Knoxville Mission",
    detail:
      "Served a two-year mission in Tennessee Knoxville. It was one of the most meaningful and formative times of my life, and I am proud of the person it helped me become."
  },
  {
    year: "2021",
    title: "Door-to-Door Sales, Aptive",
    detail:
      "Sold pest control services in a high-pressure environment and learned resilience, consistency, and the fundamentals of direct communication."
  }
];

const principles = [
  "Start with people. Trust and useful work both begin with understanding people well.",
  "Be proactive. Momentum usually comes from following up, asking directly, and doing the next hard thing.",
  "Learn fast. I would rather test, fail quickly, and improve than stay stuck in theory.",
  "Keep communication clear, direct, and human.",
  "Use technology to reduce stress and create clarity, not more noise."
];

const strengths = ["Learner", "Input", "Arranger", "Positivity", "Strategic"];

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about Brandon, his background, strengths, and the work he is building."
};

export default function AboutPage() {
  const bioParagraphs = [
    "I’m Brandon Lee Smith, originally from Lake Forest, California, and now based in Provo, Utah. I’m 24 years old, studying Accounting at Utah Valley University, and trying to take every opportunity I can to learn, grow, and become more. This year, I’m also part of UVU’s Sandbox program, where I’m building Skedra with my co-founder, Austin Bee. Skedra is a staff scheduling software built for assisted living homes, and building it has been one of the most educational and rewarding experiences of my life. It has shown me how much I love learning by building, solving real problems, and turning ideas into something useful.",
    "People get me out of bed in the morning. I’m driven to achieve and become better by the people in my life. I love being around others, meeting new people, hearing their stories, and understanding what matters to them. I’m energized by relationships, collaboration, and shared purpose, and I care deeply about helping others move forward in whatever way I can. One of my greatest strengths is listening. I pay close attention, I care about understanding people well, and I want others to feel heard. That has become a real advantage in my work, especially in sales, partnership building, customer conversations, and product development.",
    "I’m also someone who stays very calm under pressure. Not much phases me, and that steadiness helps me think clearly, communicate effectively, and perform well when situations are intense or uncertain. In high-pressure moments, I tend to stay composed, speak clearly, and keep moving forward. That ability has helped me build trust and operate effectively when a lot is on the line.",
    "I’m fascinated by leadership, psychology, and human behavior, and I love the challenge of understanding people, shaping ideas, and helping things grow. My background in sales, outreach, and relationship-building has taught me a lot about resilience, communication, trust, and execution, and those lessons continue to shape the way I work.",
    "Outside of work and school, I love sports, reading, and writing for fun. I also have a strange fascination with movement and light. I can sit around a bonfire and watch the flames for hours, and I’ve always been captivated by the way water moves. I still remember watching the northern lights in Glacier National Park and being completely absorbed by the movement in the sky. I also love sunrises, sunsets, moonlight, and the way light reveals depth, shape, and beauty. Those things may seem small, but they reflect something real about me: I’m human.",
    "My family is incredible. My parents are Eric and Alicia Smith, and I have four siblings: my older sister Courtney, my older brothers Ryan and Tyler, and my younger brother Evan. We are an absolute riot together and spend a lot of our time laughing, joking, and having a genuinely good time. That environment gave me a love for people, a sense of humor, and a deep appreciation for connection.",
    "At the center of all of this is a desire to have real impact. I want my life to be spent building meaningful things and improving people’s lives in positive ways. Sometimes that impact comes through a company, a product, or a system. Other times it comes through a conversation, a relationship, or a small daily interaction. I care deeply about faith, discipline, character, and becoming someone who can contribute wherever I am. More than anything, I want to build things that last, help people move forward, and live a life marked by growth, contribution, and real purpose."
  ];

  return (
    <section className="px-6 py-20 md:px-8">
      <div className="mx-auto max-w-5xl space-y-14">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="People. Momentum. Execution."
            description={`${siteConfig.ownerName} is an accounting student at UVU, a co-founder of Skedra, and someone who likes working where sales, product thinking, and execution overlap.`}
          />
        </Reveal>

        <Reveal delay={70}>
          <article className="rounded-2xl border border-border bg-card p-7 md:p-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Bio</h2>
            <ExpandableBio paragraphs={bioParagraphs} />
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
              Communication style: friendly, energetic, direct, and practical. I care a lot about understanding people well and making conversations feel clear, useful, and real.
            </p>
          </article>
        </Reveal>

        <Reveal delay={200}>
          <div className="rounded-2xl border border-border bg-card p-7 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Work Together</p>
            <h2 className="mt-3 text-2xl font-semibold text-foreground">Need someone strong in people, momentum, and execution?</h2>
            <p className="mt-2 text-sm text-muted">
              I am especially interested in early-stage work where customer understanding, clear communication, and practical follow-through actually matter.
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
