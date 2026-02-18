import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-6 py-28 md:px-8">
      <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-10 text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="mt-4 font-serif text-4xl">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for does not exist or has moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
        >
          Back home
        </Link>
      </div>
    </section>
  );
}
