import type { Metadata } from "next";
import Link from "next/link";

import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site";

const resumePdfPath = "/resume/Brandon_Smith_Resume.pdf";
const websitePath = "/";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${siteConfig.ownerName}.`,
  robots: {
    index: false,
    follow: true
  }
};

export default function ResumePage() {
  return (
    <section className="px-6 py-16 md:px-8">
      <div className="mx-auto max-w-5xl space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Resume"
            title="Brandon Lee Smith"
            description="Open the PDF directly or preview it below."
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="flex flex-wrap gap-3">
            <Link
              href={websitePath}
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Back to Website
            </Link>
            <Link
              href={resumePdfPath}
              target="_blank"
              className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
            >
              Open PDF
            </Link>
            <a
              href={resumePdfPath}
              download
              className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
            >
              Download PDF
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <iframe
              src={`${resumePdfPath}#view=FitH`}
              title="Brandon Lee Smith Resume"
              className="h-[960px] w-full bg-white"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
