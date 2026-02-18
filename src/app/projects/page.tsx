import type { Metadata } from "next";
import Link from "next/link";

import { FilterableProjectGrid } from "@/components/filterable-project-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Brandon's startup, automation, data, and writing projects from Skedra and related work."
};

export default function ProjectsPage() {
  const sortedProjects = [...projects].sort((a, b) => b.year - a.year);

  return (
    <section className="px-6 py-20 md:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-5">
            <SectionHeading
              eyebrow="Portfolio"
              title="Projects"
              description="Startup, automation, data, and writing work focused on practical operations outcomes."
            />
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
            >
              Need help with a workflow-heavy product?
            </Link>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <FilterableProjectGrid projects={sortedProjects} />
        </Reveal>
      </div>
    </section>
  );
}
