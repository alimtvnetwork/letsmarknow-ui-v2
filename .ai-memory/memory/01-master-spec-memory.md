# Master Specification Memory (`02-spec/21-app`)

## 1. Domain Architecture & 6-Level Data Hierarchy
- **L0 Account:** Human / service identity; owns or joins 1..N Orgs.
- **L1 Organization:** Tenancy boundary & billing root; contains Spaces, Members, Licenses.
- **L2 Space:** Functional project/context workspace; contains Collections.
- **L3 Collection:** Primary tab container with color, icon, tags, notes.
- **L4a Group:** Flat 1-level sub-container in Collection. Group-in-group forbidden in v1.
- **L4b Item:** Leaf bookmark / saved tab URL with metadata, tags, notes.
- **L5 Annotations:** Tags (Org-scoped), Notes (≤8KB Markdown-lite), Descriptions (≤4KB), Favicons.

## 2. Entity Model & Database Architecture
- **Primary Keys:** UUIDv7 across all tables (`organizations`, `spaces`, `collections`, `groups`, `items`, `tags`, `shares`, `org_members`, `history_events`, `licenses`, `accounts`).
- **Audit Block:** Standard `id`, `created_at`, `updated_at`, `deleted_at` (soft delete 30-day grace, except GDPR Art. 17 hard erase), `created_by`, `updated_by`.
- **Database Naming:** Lowercase `snake_case` plural tables and columns.
- **Money Values:** Expressed strictly as integer `amount_cents` or `unit_amount_cents`.
- **SQL Roles Enum:** Strictly 7 values: `'owner'`, `'admin'`, `'editor'`, `'viewer'`, `'billing'`, `'guest'`, `'system'`. `share_viewer` is an unauthenticated cookie/JWT claim only.

## 3. API Route Contracts & Protocols
- **Prefix:** Strict `/v1/` prefix on all endpoints (`api.letsmarknow.com`).
- **Param Style:** Colon prefix `:param` (`/v1/spaces/:id`, `/v1/public/shares/:slug`).
- **Error Envelope:**
  ```json
  {
    "error": {
      "code": "SCREAMING_SNAKE_CASE",
      "message": "Human readable explanation",
      "http_status": 400,
      "retryable": false,
      "retry_after_ms": null,
      "request_id": "01J...",
      "details": {}
    }
  }
  ```
- **Pagination:** Cursor-based (`limit`, `cursor`, returning `{ data: [], page: { next_cursor, has_more, limit } }`).
- **Concurrency & Idempotency:** `Idempotency-Key` header on create POSTs; `If-Match` with `ETag` timestamp on mutating PATCH/DELETE.

## 4. Extension & Web App Surfaces
- **Chrome MV3 Extension:** Manifest V3, background service worker (`background/sw.js`), Toolbar Popup (380×540), New Tab dashboard override, Side Panel (`chrome.sidePanel`), Omnibox keyword `lmn`, Context Menus, Keyboard shortcuts (`Alt+S`, `Alt+Shift+S`, `Alt+Shift+W`, `Alt+K`).
- **Web App:** SSR marketing site (`letsmarknow.com`) + CSR SPA dashboard (`app.letsmarknow.com`), share viewer (`/t/:slug`), embed iframe (`/e/:slug`).
- **Design System:** HSL color tokens (`H S% L%`), dark/light themes, Inter + Inter Display typography, Radix / shadcn-ui component primitives.
- **Visualization:** List (Phase 0), Grid (Phase 1), Compact (Phase 0), Mindmap (Phase 3 D3-force), Tab Extend Column View (Phase 1).
