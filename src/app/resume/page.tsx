import type { Metadata } from "next";
import { readFileSync } from "fs";
import Link from "next/link";
import { join } from "path";

import { Reveal } from "@/components/reveal";
import { ResumeFrame } from "@/components/resume-frame";
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

function getResumeSrcDoc(): string {
  const resumeDir = join(process.cwd(), "resume");
  const html = readFileSync(join(resumeDir, "Brandon_Smith_Resume.html"), "utf8");
  const css = readFileSync(join(resumeDir, "resume.css"), "utf8");
  const webOverrides = `
    <style>
      html, body {
        margin: 0;
        padding: 0;
        background: #eef4fb;
      }

      body {
        padding: 20px 20px 56px;
      }

      .page {
        min-height: auto;
        margin: 0 auto;
      }
    </style>
  `;

  return html
    .replace('<link rel="stylesheet" href="./resume.css" />', `<style>${css}</style>`)
    .replace("</head>", `${webOverrides}</head>`);
}

export default function ResumePage() {
  const resumeSrcDoc = getResumeSrcDoc();

  return (
    <section className="px-4 py-5 md:px-6 md:py-6">
      <div className="mx-auto max-w-[82rem] space-y-4">
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Resume
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={websitePath}
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                Website
              </Link>
              <a
                href={resumePdfPath}
                download
                className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent"
              >
                Download PDF
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <ResumeFrame srcDoc={resumeSrcDoc} />
          </div>
        </Reveal>

        <div aria-hidden="true" className="invisible">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
              Resume
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground">
                Website
              </span>
              <span className="inline-flex items-center rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground">
                Download PDF
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
