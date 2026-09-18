# Coding Guidelines & Error Management Philosophy

## 1. Zero-Tolerance Coding Standards
- **Function Size:** Max 15 lines (8 lines preferred). Split helper logic into pure, single-purpose functions.
- **Braces & Formatting:** Always use curly braces `{}` for all control flow (`if`, `else`, `for`, `while`), even single-line statements.
- **Guard Clauses & Condition Extraction:** Extract complex conditional statements into positively-named booleans (`is*`, `has*`, `can*`, `should*`). Return early to eliminate nested blocks.
- **DRY Priority 1 & Immutability:** Prefer immutable data patterns (spread, `map`, `filter`). Avoid in-place mutation of props or shared state.
- **Enum Standards:** Standardize on uppercase string literals or strict TypeScript union types. SQL enums must match canonical definition.

## 2. Error Management Philosophy
- **Never Swallow Errors:** Empty `catch` blocks or unhandled promise rejections are strictly prohibited.
- **Log Operation & Inputs:** Every `catch` block must log the operation name and key input identifiers (with PII redacted).
- **Wrap Without Losing Cause:** Wrap errors into domain-specific typed errors while preserving the original cause (`new AppError("Failed to save", { cause: error })`).
- **Standardized API Error Envelope:**
  ```json
  {
    "error": {
      "code": "VALIDATION_FAILED",
      "message": "...",
      "http_status": 400,
      "retryable": false,
      "retry_after_ms": null,
      "request_id": "...",
      "details": {}
    }
  }
  ```

## 3. Database & Entity Conventions
- **Naming:** Lowercase `snake_case` plural for tables; `snake_case` for columns.
- **Primary Keys:** UUIDv7 (`id`) across all entities.
- **Money Values:** Expressed strictly as integer cents (`amount_cents`).
- **Soft Deletes:** Standard `deleted_at` timestamp with 30-day grace period before purge (except GDPR Art. 17 immediate erasure).
