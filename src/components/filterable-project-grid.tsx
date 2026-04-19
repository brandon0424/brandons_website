"use client";

import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { projectCategories, type Project, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;
type SortKey = "newest" | "oldest";

type FilterableProjectGridProps = {
  projects: Project[];
};

const filters: Filter[] = ["All", ...projectCategories];

export function FilterableProjectGrid({ projects }: FilterableProjectGridProps) {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("newest");

  const categoryCount = useMemo(() => {
    return projects.reduce<Record<Filter, number>>(
      (acc, project) => {
        acc.All += 1;
        acc[project.category] += 1;
        return acc;
      },
      {
        All: 0,
        Ventures: 0,
        Web: 0,
        Experience: 0
      }
    );
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    let output = projects.filter((project) => {
      const inCategory = activeFilter === "All" || project.category === activeFilter;

      if (!inCategory) {
        return false;
      }

      if (!normalizedQuery) {
        return true;
      }

      return (
        project.title.toLowerCase().includes(normalizedQuery) ||
        project.summary.toLowerCase().includes(normalizedQuery) ||
        project.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
      );
    });

    output = [...output].sort((a, b) =>
      sortKey === "newest" ? b.year - a.year : a.year - b.year
    );

    return output;
  }, [activeFilter, projects, query, sortKey]);

  return (
    <div className="space-y-8">
      <div className="ui-panel space-y-5 p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-medium text-foreground">Browse projects</p>
            <p className="mt-1 text-sm text-muted">Search, sort, or narrow the list by category.</p>
          </div>
          <span className="ui-badge bg-background/80">
            {filteredProjects.length} showing
          </span>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by title, summary, or tag"
              className="ui-input pl-10 pr-10"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 inline-flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full text-muted transition hover:bg-card hover:text-foreground"
                aria-label="Clear search"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            ) : null}
          </label>

          <label className="inline-flex items-center gap-2 text-sm text-muted">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Sort projects</span>
            <select
              value={sortKey}
              onChange={(event) => setSortKey(event.target.value as SortKey)}
              className="ui-select"
            >
              <option value="newest">Newest first</option>
              <option value="oldest">Oldest first</option>
            </select>
          </label>
        </div>

        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
                activeFilter === filter
                  ? "border-accent bg-accent text-accent-foreground shadow-sm"
                  : "border-border bg-background/80 text-muted hover:border-accent/45 hover:text-foreground"
              )}
            >
              {filter}
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  activeFilter === filter
                    ? "bg-accent-foreground/15 text-accent-foreground"
                    : "bg-card text-muted"
                )}
              >
                {categoryCount[filter]}
              </span>
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-muted">
        Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span>{" "}
        project{filteredProjects.length === 1 ? "" : "s"}
        {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
        {query.trim() ? ` matching "${query.trim()}"` : ""}.
      </p>

      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="ui-panel border-dashed bg-card/70 p-8 text-sm text-muted">
          No projects match your current filters. Try another category or clear the search.
        </div>
      )}
    </div>
  );
}
