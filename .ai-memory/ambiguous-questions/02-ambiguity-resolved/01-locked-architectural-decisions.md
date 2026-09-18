# Resolved Ambiguities: Locked Architectural Decisions

## Resolution
1. **Primary Browser Target (v1 LOCKED):** Google Chrome MV3 only (`00-overview/05-browser-scope.md`). Firefox, Edge, Safari deferred to Phase 4.
2. **Numeric Slot 21 Buffer (SI-001 Closed):** Slot 21 is permanently reserved as an empty buffer between domain specs (00-20) and infrastructure/audits (22-23).
3. **Canonical 7-Role SQL Enum (SI-011 Closed):** SQL type `org_role` is strictly `('owner', 'admin', 'editor', 'viewer', 'billing', 'guest', 'system')`. `share_viewer` is an unauthenticated cookie pseudo-role.
4. **Single-Table Share Model in v1:** Shipping v1 uses single-table `shares` (`02-data-model/07-share.md`). Multi-table model is postponed to post-v1.
5. **Path Parameter Style (SI-018 Closed):** API route paths standardize on colon prefix `:param`.

- **Status:** Resolved.
