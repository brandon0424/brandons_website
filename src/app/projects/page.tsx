import type { Metadata } from "next";
import Link from "next/link";

import { FilterableProjectGrid } from "@/components/filterable-project-grid";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Brandon's current ventures, websites, and real experience entries."
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
              description="A smaller set of real projects, websites, and experiences. More detail on each is being added over time."
            />
            <Link
              href="/#contact"
              className="ui-pill bg-card/95"
            >
              Want context on any of these?
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
