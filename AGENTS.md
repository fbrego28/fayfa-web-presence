# AGENTS.md

Agent instructions for this repository.

## Project Snapshot

- Stack: React 18 + TypeScript + Vite + Tailwind + shadcn/ui
- Runtime/package managers: Node (npm) and Bun (bun.lockb is present)
- Main app entry: [src/main.tsx](src/main.tsx)
- Route/provider shell: [src/App.tsx](src/App.tsx)
- Landing composition: [src/pages/Index.tsx](src/pages/Index.tsx)

## Commands Agents Should Run

- Install deps: `npm install` (or `bun install`)
- Dev server: `npm run dev` (port 8080)
- Build: `npm run build`
- Lint: `npm run lint`
- Test once: `npm run test`
- Test watch: `npm run test:watch`

Before opening a PR or finalizing larger edits, run at least:

1. `npm run lint`
2. `npm run test`
3. `npm run build`

## Architecture And Boundaries

- Keep page-level composition in [src/pages/](src/pages/), and section-level UI in [src/components/](src/components/).
- Reusable primitives belong in [src/components/ui/](src/components/ui/) (shadcn/radix style components).
- Use `@/` imports (configured alias to `src`).
- If adding routes, place them above the catch-all route in [src/App.tsx](src/App.tsx#L19).

## Conventions And Pitfalls

- TypeScript is intentionally permissive (`noImplicitAny: false`, `strictNullChecks: false` in [tsconfig.json](tsconfig.json)). Do not assume strict-mode guarantees.
- Vitest runs in jsdom and uses [src/test/setup.ts](src/test/setup.ts) for environment setup.
- Vite config enables `lovable-tagger` only in development; do not add production logic that depends on it. See [vite.config.ts](vite.config.ts).

## Deployment Context

- GitHub Pages deployment is configured in [README.md](README.md) and workflow [.github/workflows/deploy.yml](.github/workflows/deploy.yml).
- Custom domain is managed by [public/CNAME](public/CNAME).
- When making routing/build-output changes, ensure SPA fallback behavior remains intact for Pages deployment.

## Reference Docs

- Deployment details: [README.md](README.md)
- Test setup and include patterns: [vitest.config.ts](vitest.config.ts)
- Build/dev server and alias config: [vite.config.ts](vite.config.ts)
- Script source of truth: [package.json](package.json)