# Brandon Portfolio (Next.js 14)

Production-ready personal portfolio built with Next.js App Router, TypeScript, and Tailwind CSS.

## Stack
- Next.js 14+
- TypeScript
- Tailwind CSS
- Lucide icons

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Build checks
```bash
npm run typecheck
npm run build
```

## Update site URL for SEO
Set `NEXT_PUBLIC_SITE_URL` in your environment (for sitemap, robots, metadata canonical URL).

Example:
```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## Deploy to Vercel
1. Push to GitHub.
2. Import the repo in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` in Vercel project environment variables.
4. Deploy.
