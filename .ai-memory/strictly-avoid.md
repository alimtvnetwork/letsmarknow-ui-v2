# CODE RED: Strict Prohibitions & Anti-Patterns

1. **NO UPPERCASE README**: The root readme file must ALWAYS be lowercase `readme.md`. Never create, rename to, or commit `README.md`.
2. **NO FOLDER NAME `memories/`**: The institutional knowledge folder must ALWAYS be `.ai-memory/memory/`, NEVER `.ai-memory/memories/`.
3. **NO CODEBASE / APPLICATION MODIFICATIONS DURING READ-ONLY PHASES**: Never refactor, edit, or write application source code during read memory/onboarding phases (only readme lowercase self-healing and `.ai-memory/` memory persistence allowed).
4. **NO SWALLOWING ERRORS**: Never write empty `catch` blocks or catch-and-ignore. Always log operation name, key inputs, and maintain error cause wrapping.
5. **NO HALLUCINATIONS / GUESSING PAST SPECS**: The repository specs and codebase are the single source of truth. Training data is not. Never invent rules or guess past ambiguities. Open ambiguities must be logged under `.ai-memory/ambiguous-questions/01-new-ambiguity/`.
6. **NO GROUP-INSIDE-GROUP IN V1**: Groups inside Groups are strictly forbidden in v1 (`parent_group_id` constrained to `NULL`).
7. **NO FLOATING POINT MONEY**: Money values must always be represented as integer cents (`amount_cents`, `unit_amount_cents`), never floating point or decimal numbers.
8. **NO NON-CANONICAL ROLE ENUM**: Database SQL enum for `org_role` is strictly 7 values: `'owner'`, `'admin'`, `'editor'`, `'viewer'`, `'billing'`, `'guest'`, `'system'`. Pseudo-role `share_viewer` is never added to SQL enum.
9. **NO BRACELESS IF-STATEMENTS / UNGUARDED NESTING**: Always wrap `if` / `else` / `for` / `while` statements with curly braces `{}`. Always use early returns / guard clauses.
10. **NO BANNED / HARDCODED COLORS**: Never use raw hex/RGB color strings in component UI code. All colors must use CSS variables and design tokens (`hsl(var(--token) / <alpha>)`).
