# Authoritative Reading Order

This document defines the canonical onboarding and deep-reading sequence for Lets Mark Now UI.

## Phase 1: Institutional Core
1. `readme.md` (root architectural entry point and casing rules)
2. `.lovable/strictly-avoid.md` (CODE RED prohibitions)
3. `.lovable/plan.md` (Master UI presentation deck plan)
4. `.lovable/memory/features/presentation-chapters.md` (Status of presentation deck & chapters)
5. `.lovable/memory/index.md` (Knowledge registry)
6. `.lovable/plans/index.md` (Plan registry)

## Phase 2: Domain Specifications (`spec/21-app/`)
1. `spec/21-app/readme.md` (Master spec index and product overview)
2. `spec/21-app/00-overview/` (Vision, glossary, personas, competitive analysis)
3. `spec/21-app/01-information-architecture/` (6-level hierarchy: Org → Space → Collection → Group → Item)
4. `spec/21-app/02-data-model/` (Entity contracts, UUIDv7, Audit Block)
5. `spec/21-app/03-api-endpoints/` (REST contracts, error envelopes, pagination, rate limits)
6. `spec/21-app/04-extension/` (Chrome MV3, background SW, popup, newtab, sidepanel, omnibox)
7. `spec/21-app/05-web-app/` (SSR marketing vs CSR SPA dashboard, routes map)
8. `spec/21-app/06-ui-ux/` (Design tokens HSL only, typography, themes, components, motion, a11y)
9. `spec/21-app/07-features/` (Save tab, save session, quick find, tags, notes, bulk ops, view modes)
10. `spec/21-app/08-sharing-collab/` (Public, password, invite-only shares, realtime presence)
11. `spec/21-app/09-auth-accounts/` (Identity model, signup, magic links, MFA, OAuth, sessions)
12. `spec/21-app/10-licensing-billing/` (Free/Pro/Team/Lifetime ladder, entitlements engine, Stripe/Paddle)
13. `spec/21-app/11-import-export/` (Importers, deduplication pipeline, export formats)
14. `spec/21-app/12-history-undo/` (Append-only event log, undo/redo, conflict resolution)
15. `spec/21-app/13-spec-issues/` (Naming conventions, resolved issue archive SI-001..SI-020)
16. `spec/21-app/14-search/` (Global search ⌘K, item search, filters, jump-to-tab, search engine)
17. `spec/21-app/15-visualization/` (List, Grid, Compact, Mindmap, Tab Extend Column view)
18. `spec/21-app/16-notifications-updates/` (What's new feed, extension & web updater, release channels)
19. `spec/21-app/17-admin-org/` (Org settings, members, 7 roles enum, audit log, data deletion)
20. `spec/21-app/18-analytics-telemetry/` (Zero-PII telemetry, GlitchTip error reporting, canonical events)
21. `spec/21-app/19-security-privacy/` (STRIDE threat model, AES-256 envelope encryption, GDPR Art. 17)
22. `spec/21-app/20-roadmap/` (Phases 0–4, universal Definition of Done)
23. `spec/21-app/22-infrastructure/` (Hosting, env vars, 10 S3 buckets, 21 UTC crons, IaC)
24. `spec/21-app/23-audits/` (Historical gap analysis, 100/100/100 readiness scores)

## Phase 3: Application Codebase
1. `package.json`, `tsconfig.json`, `vite.config.ts`, `vitest.config.ts`
2. `src/main.tsx`, `src/App.tsx`, `src/index.css`
3. `src/pages/Index.tsx`, `src/pages/Present.tsx`
4. `src/slides/manifest.ts` and `src/slides/chapters/`
5. `src/components/presentation/` and `src/slides/_layout/`
