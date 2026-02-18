import type { Metadata } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeScript } from "@/components/theme-script";
import { siteConfig } from "@/lib/site";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.ownerName} | Portfolio`,
    template: `%s | ${siteConfig.ownerName}`
  },
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.ownerName} | Portfolio`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: `${siteConfig.ownerName} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/placeholders/og-cover.svg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.ownerName} portfolio preview`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.ownerName} | Portfolio`,
    description: siteConfig.description,
    images: ["/images/placeholders/og-cover.svg"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
