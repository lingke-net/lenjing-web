# AGENTS.md

## Next.js version warning
This is Next.js **16.2.6** — it has breaking changes from mainstream Next.js. APIs, conventions, and file structure may differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any Next.js-specific code. Heed deprecation notices.

## Stack
- **Next.js 16** App Router only (no `pages/`). All routes under `app/`.
- **React 19** with `'use client'` boundaries on interactive/page components.
- **TypeScript 5** strict mode. Path alias: `@/*` → `./*`.
- **Tailwind CSS v4** via `@tailwindcss/postcss` plugin. No `tailwind.config.ts` — all config is in `app/globals.css` (`@theme`, `@import "tailwindcss"`, CSS variables with oklch colors). Dark mode: `.dark` class variant.
- **shadcn/ui** (radix-nova style, lucide icons, RSC enabled). Components in `components/ui/`. Use `npx shadcn add <name>` to add components.
- **Forms**: react-hook-form + zod.

## Commands
| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | ESLint v9 flat config |

There is **no test infrastructure** — no test runner, no spec files. Do not try to run tests.

## Formatting & linting
- ESLint v9 flat config only (`eslint.config.mjs`). Uses `eslint-config-next` core-web-vitals + typescript presets.
- **No Prettier.** Do not install or configure Prettier.
- Ignored in lint: `.next/`, `out/`, `build/`, `next-env.d.ts`.

## Important constraints
- No database, no ORM, no backend — this is a static landing/marketing site.
- No CI/CD config (no `.github/workflows/`).
- No Docker config.
- Content is in Chinese (zh-CN). Company: 深圳瓴克网络科技有限公司 (Lingke Network, brand: 棱镜视界 / Prism Vision).
- Animation-heavy: components use GSAP, framer-motion, three.js, and custom WebGL. Be careful when modifying animation components — they have complex render logic.
