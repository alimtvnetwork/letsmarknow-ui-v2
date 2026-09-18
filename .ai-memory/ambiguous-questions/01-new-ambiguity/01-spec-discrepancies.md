# Open Ambiguities: Specification Discrepancies

## 1. Item-Group Cardinality Schema Discrepancy
- **Description:** `01-information-architecture/00-overview.md` states: *"an Item belongs to exactly one Collection but may appear in many Groups within that Collection"*, and `02-data-model/00-overview.md` mentions `group_items` (many-to-many). In contrast, `02-data-model/05-item.md` defines a single nullable column `group_id: uuid` on the `items` table (1-to-many).
- **Status:** Open.

## 2. Free Tier Active Shares Limit
- **Description:** `10-licensing-billing/01-plans-matrix.md` and `08-sharing-collab/01-share-model.md` state 3 active shares for Free tier, while `09-auth-accounts/13-rate-limit-values.md` lists 5 active shares.
- **Status:** Open (Canonical is 3 per `01-plans-matrix.md`).

## 3. Design System Default Accent Theme
- **Description:** `02-data-model/01-organization.md` sets default Org theme to `"pink"`, while `06-ui-ux/01-design-tokens.md` anchors default brand token on `--brand-500: 220 84% 54%` (Blue/Indigo).
- **Status:** Open.
