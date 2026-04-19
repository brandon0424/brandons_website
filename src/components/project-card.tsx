"use client";

import { ArrowUpRight, FileText, Github, Globe2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="ui-panel group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-accent/45">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.screenshots[0]}
          alt={`${project.title} preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={project.featured}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className="ui-badge border-white/20 bg-slate-950/40 text-white backdrop-blur">
            {project.category}
          </span>
          <span className="ui-badge border-white/20 bg-slate-950/40 text-white backdrop-blur">
            {project.year}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-6">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 transition group-hover:text-accent"
            >
              {project.title}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </h3>
          <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
          <div className="ui-panel-muted p-3">
            <p className="text-sm leading-relaxed text-foreground">{project.highlights[0]}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="ui-badge bg-background/65"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-border/70 pt-4 text-sm">
          <Link
            href={`/projects/${project.slug}`}
            className="ui-pill bg-background/70 px-3 py-2 text-sm"
          >
            Project Details <ArrowUpRight className="h-4 w-4" />
          </Link>
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="ui-pill-muted px-3 py-2 text-sm"
            >
              <Globe2 className="h-4 w-4" /> {project.liveLabel ?? "Live"}
            </Link>
          ) : null}
          {project.repoUrl ? (
            <Link
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="ui-pill-muted px-3 py-2 text-sm"
            >
              <Github className="h-4 w-4" /> GitHub
            </Link>
          ) : null}
          {project.caseStudyUrl ? (
            <Link
              href={project.caseStudyUrl}
              target="_blank"
              rel="noreferrer"
              className="ui-pill-muted px-3 py-2 text-sm"
            >
              <FileText className="h-4 w-4" /> Case Study
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
}
