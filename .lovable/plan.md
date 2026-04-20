

## Goal
Build a **web-based, frontend-focused presentation** (slides app inside this React/Vite project) that explains the LMN extension + web app from the **user's point of view** — every screen, every click, every flow — sourced from the `spec/` folder.

Backend internals are excluded (saved for a future presentation). API endpoints will only appear as light "what's triggered" labels next to UI actions, not as technical deep-dives.

## Approach
- Build it as an in-app slide deck using the **Slides App pattern** (1920×1080 fixed canvas, scaled to viewport, sidebar thumbnails, fullscreen present mode, keyboard nav).
- Each slide = one React component under `src/slides/`, registered in a slide manifest.
- Content comes directly from the spec files already in the repo.
- We deliver in **phases**. You say "next" → I build the next phase.

## Content Outline (what the full deck will cover)

Grouped into 10 chapters. Slide counts are estimates; we refine per chapter.

| # | Chapter | What it covers | Approx slides |
|---|---|---|---|
| 1 | Intro & Vision | What LMN is, the problem it solves, who it's for | 3–4 |
| 2 | User Roles | Owner, Admin, Member, Viewer, Guest — what each sees & can do | 3 |
| 3 | First-Time Experience | Install extension → sign up → onboarding → first save | 5–6 |
| 4 | The Extension Surfaces | Popup, new-tab, omnibox, context menu, keyboard shortcuts — what appears on click | 6–8 |
| 5 | Web App Shell | Top bar, org switcher, sidebar, command palette, notifications, theme | 5 |
| 6 | Browsing Hierarchy | Org → Space → Collection → Group → Item — click-by-click of what's shown | 6–8 |
| 7 | Core Features | Save tab, save session, quick-find, tags, notes, star/pin, bulk ops, view modes (list/grid/compact/mindmap/column), hover-to-jump, delete-with-undo | 10–12 |
| 8 | Sharing & Collaboration | Share to person / team / org, public links, password links, invite-only, permissions, comments, presence | 6–8 |
| 9 | History, Search & Activity | Activity feed, undo/redo, trash, global search, filters | 4–5 |
| 10 | Account & Settings (frontend only) | Profile, theme, notifications, billing UI surface, import/export UI | 3–4 |

Total: ~50–65 slides. Light API-trigger annotations appear inline (e.g. "click Save → POST /v1/items") without backend depth.

## Technical Build Plan

```text
src/
├── slides/
│   ├── _layout/
│   │   ├── SlideLayout.tsx        ← 1920x1080 wrapper, dark/light tokens
│   │   └── ScaledSlide.tsx        ← scale-to-fit transform
│   ├── _components/
│   │   ├── BrowserMock.tsx        ← chrome window frame for screenshots
│   │   ├── ClickFlow.tsx          ← step → arrow → result visual
│   │   ├── ApiBadge.tsx           ← small "POST /v1/items" chip
│   │   └── RoleBadge.tsx
│   ├── manifest.ts                ← ordered list of slides + chapter metadata
│   └── chapters/
│       ├── 01-intro/
│       ├── 02-roles/
│       └── ...
├── pages/
│   ├── Index.tsx                  ← redirects to /present or landing
│   └── Present.tsx                ← editor + sidebar + canvas + present mode
└── components/presentation/
    ├── Toolbar.tsx
    ├── ThumbnailSidebar.tsx
    ├── SlideCanvas.tsx
    ├── PresenterPills.tsx
    └── FullscreenMode.tsx
```

Slide tokens added to `index.css` (`--slide-primary`, `--slide-accent`, `--slide-gray-*`, light + dark variants). Scoped `.slide-content` font scaling so app UI stays normal.

## Phased Delivery (you say "next" between phases)

**Phase 0 — Plan approval (this message).**

**Phase 1 — Foundation.** Slide engine: ScaledSlide, SlideLayout, manifest, Present page with sidebar thumbnails, keyboard nav, fullscreen mode, dark mode toggle. Ships with 1 placeholder cover slide so you can see the chrome working.

**Phase 2 — Chapter 1: Intro & Vision** (3–4 slides).

**Phase 3 — Chapter 2: User Roles** (3 slides).

**Phase 4 — Chapter 3: First-Time Experience** (5–6 slides).

**Phase 5 — Chapter 4: Extension Surfaces** (6–8 slides).

**Phase 6 — Chapter 5: Web App Shell** (5 slides).

**Phase 7 — Chapter 6: Browsing Hierarchy** (6–8 slides).

**Phase 8 — Chapter 7: Core Features** (split into 7a/7b if needed).

**Phase 9 — Chapter 8: Sharing & Collaboration** (6–8 slides).

**Phase 10 — Chapter 9: History, Search & Activity** (4–5 slides).

**Phase 11 — Chapter 10: Account & Settings** (3–4 slides).

**Phase 12 — Polish pass.** Transitions, presenter notes, table of contents, chapter dividers, cover & closing slides.

## Decisions I need from you

1. **API annotations** — show inline as small chips (`POST /v1/items`) on action slides, or omit entirely and keep purely UI-focused?
2. **Visual style** — clean light "Apple-keynote" feel (white/charcoal + one accent), or dark premium feel (near-black + electric accent)?
3. **Where to mount the deck** — make `/` (Index) the deck itself, or keep Index as a tiny landing with a "Open Presentation" button leading to `/present`?

Once you answer these (or say "use your judgment"), I'll start **Phase 1** when you say "next".

