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
  { label: "About", href: "/about" }
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
          <nav className="flex items-center gap-1 rounded-full border border-border/80 bg-card/90 p-1.5 text-sm text-muted shadow-soft">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-3.5 py-2 transition",
                  isActiveRoute(pathname, item.href)
                    ? "bg-accent text-accent-foreground shadow-sm"
                    : "hover:bg-background/80 hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href={contactHref}
            className="ui-pill-accent px-4 py-2"
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
            className="inline-flex items-center justify-center rounded-full border border-border bg-card p-2 text-foreground shadow-soft transition hover:border-accent hover:text-accent"
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
                  "block rounded-xl px-3 py-2.5 text-sm transition",
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
            className="ui-pill-accent mt-4 inline-flex w-full justify-center"
          >
            Contact
          </Link>
        </div>
      ) : null}
    </header>
  );
}
