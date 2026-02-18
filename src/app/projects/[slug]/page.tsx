import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, FileText, Github, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Reveal } from "@/components/reveal";
import { getProjectBySlug, projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found"
    };
  }

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: `${project.title} | ${siteConfig.ownerName}`,
      description: project.summary,
      images: [
        {
          url: project.screenshots[0]
        }
      ]
    }
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section className="px-6 py-16 md:px-8">
      <div className="mx-auto max-w-5xl space-y-12">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Back to projects
          </Link>
        </Reveal>

        <Reveal delay={80}>
          <header className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
              <span>{project.category}</span>
              <span>•</span>
              <span>{project.year}</span>
            </div>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">{project.title}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 transition hover:border-accent hover:text-accent"
              >
                <Globe2 className="h-4 w-4" /> Live
              </Link>
              <Link
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 transition hover:border-accent hover:text-accent"
              >
                <Github className="h-4 w-4" /> GitHub
              </Link>
              {project.caseStudyUrl ? (
                <Link
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 transition hover:border-accent hover:text-accent"
                >
                  <FileText className="h-4 w-4" /> Case Study
                </Link>
              ) : null}
            </div>
          </header>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src={project.screenshots[0]}
              alt={`${project.title} screenshot`}
              width={1400}
              height={875}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Highlights</h2>
            <ul className="mt-4 grid gap-3 md:grid-cols-3">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="rounded-xl border border-border bg-background/50 p-3 text-sm text-foreground">
                  {highlight}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <article className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Overview</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{project.overview}</p>
            </article>
          </Reveal>

          <Reveal delay={80}>
            <article className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Problem</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{project.problem}</p>
            </article>
          </Reveal>

          <Reveal delay={140}>
            <article className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Solution</h2>
              <p className="mt-4 text-sm leading-relaxed text-foreground">{project.solution}</p>
            </article>
          </Reveal>
        </div>

        <Reveal>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-border bg-background/70 px-3 py-1 text-xs text-muted"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal delay={80}>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Outcomes</h2>
            <ul className="mt-4 space-y-3">
              {project.outcomes.map((outcome) => (
                <li key={outcome} className="text-sm leading-relaxed text-foreground">
                  • {outcome}
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        <Reveal delay={120}>
          <article className="rounded-2xl border border-border bg-card p-6">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Screenshots</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {project.screenshots.map((shot) => (
                <div key={shot} className="overflow-hidden rounded-xl border border-border bg-background">
                  <Image
                    src={shot}
                    alt={`${project.title} additional screenshot`}
                    width={1000}
                    height={700}
                    className="h-auto w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </article>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">Continue</p>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="mt-3 inline-flex items-center gap-2 text-lg font-semibold text-foreground transition hover:text-accent"
            >
              Next project: {nextProject.title}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
