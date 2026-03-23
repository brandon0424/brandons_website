"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

type ExpandableBioProps = {
  paragraphs: string[];
  previewCount?: number;
};

export function ExpandableBio({
  paragraphs,
  previewCount = 1
}: ExpandableBioProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleParagraphs = isExpanded
    ? paragraphs
    : paragraphs.slice(0, previewCount);

  return (
    <div className="mt-4 space-y-4">
      {visibleParagraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-relaxed text-foreground">
          {paragraph}
        </p>
      ))}

      {paragraphs.length > previewCount ? (
        <button
          type="button"
          onClick={() => setIsExpanded((current) => !current)}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
          aria-expanded={isExpanded}
        >
          {isExpanded ? (
            <>
              Show less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Read full bio <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      ) : null}
    </div>
  );
}
