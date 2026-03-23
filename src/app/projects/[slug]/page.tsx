import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, FileText, Github, Globe2 } from "lucide-react";
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
      images: project.screenshots[0]
        ? [
            {
              url: project.screenshots[0]
            }
          ]
        : undefined
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
  const isCompactDetail = project.compactDetail === true;
  const hasHighlights = project.highlights.length > 0;
  const hasStack = project.stack.length > 0;
  const hasOutcomes = project.outcomes.length > 0;
  const hasRole = Boolean(project.role);
  const hasContributions = (project.contributions?.length ?? 0) > 0;

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
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.period ?? project.year}</span>
              </div>

              <div className="flex flex-wrap gap-3 text-sm">
                {project.liveUrl ? (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 transition hover:border-accent hover:text-accent"
                  >
                    <Globe2 className="h-4 w-4" /> {project.liveLabel ?? "Live"}
                  </Link>
                ) : null}
                {project.repoUrl ? (
                  <Link
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-4 py-2 transition hover:border-accent hover:text-accent"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </Link>
                ) : null}
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
            </div>
            <h1 className="font-serif text-4xl leading-tight md:text-5xl">{project.title}</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-muted">{project.summary}</p>
          </header>
        </Reveal>

        {!isCompactDetail && hasHighlights ? (
          <Reveal>
            <article className="rounded-2xl border border-border bg-card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Highlights</h2>
              <ul className="mt-4 grid gap-3 md:grid-cols-3">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-xl border border-border bg-background/50 p-3 text-sm text-foreground"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ) : null}

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

        {hasRole || hasContributions ? (
          <Reveal>
            <article className="rounded-2xl border border-border bg-card p-6">
              {hasRole ? (
                <>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    {project.roleLabel ?? "My Role"}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-foreground">{project.role}</p>
                </>
              ) : null}

              {hasContributions ? (
                <>
                  <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-muted">
                    Major Accomplishments
                  </h3>
                  <ul className="mt-4 grid gap-3 md:grid-cols-3">
                    {project.contributions?.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border border-border bg-background/50 p-3 text-sm text-foreground"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </article>
          </Reveal>
        ) : null}

        {hasStack ? (
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
        ) : null}

        {hasOutcomes ? (
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
        ) : null}

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
