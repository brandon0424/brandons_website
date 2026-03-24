"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" }
];

const contactHref = "/#contact";

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-6 py-4 md:px-8">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
          {siteConfig.ownerName}
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          <nav className="flex items-center gap-2 rounded-full border border-border bg-card/85 p-1 text-sm text-muted">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3 py-2 transition",
                  isActiveRoute(pathname, item.href)
                    ? "bg-accent text-accent-foreground"
                    : "hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={contactHref}
            className="inline-flex items-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-border bg-card p-2 text-foreground transition hover:border-accent hover:text-accent"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-border/70 bg-card/95 px-6 pb-5 pt-4 backdrop-blur md:hidden">
          <nav className="space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "block rounded-lg px-3 py-2 text-sm transition",
                  isActiveRoute(pathname, item.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground hover:bg-background"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={contactHref}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-3 text-sm font-medium text-accent-foreground transition hover:opacity-90"
          >
            Contact
          </Link>
        </div>
      ) : null}
    </header>
  );
}
