# Frontend

This directory contains the Next.js 15 frontend for AccessAI, built with TypeScript, Tailwind CSS, and a minimal component set inspired by shadcn/ui.

The design prioritizes clarity over complexity, a single core flow, and emotional resonance for the 8M audience. The user journey is:

1. Paste profile →
2. Analyze →
3. View structured results

## Getting started

```bash
cd frontend
npm install
npm run dev
```

The app entry point is `app/page.tsx`. Additional routes such as `app/results/page.tsx` support the results dashboard.