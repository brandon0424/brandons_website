import { Github, Globe2, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/lib/site";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  website: Globe2,
  email: Mail
};

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {siteConfig.ownerName}. Built in Utah.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          {siteConfig.socials.map((social) => {
            const Icon = iconMap[social.key as keyof typeof iconMap];

            return (
              <Link
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground transition hover:border-accent hover:text-accent"
              >
                <Icon className="h-4 w-4" />
                {social.label}
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
