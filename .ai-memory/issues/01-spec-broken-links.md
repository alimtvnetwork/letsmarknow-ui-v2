# Discovered Spec Issues: Broken Internal References

During deep reading of `02-spec/21-app/`, the following cross-reference inconsistencies were cataloged:

1. **`00-overview/04-competitive-analysis.md` (Line 89)**: References `07-features/add-item-hover-button.md`. Target file is `07-features/09-hover-to-jump.md` / `07-features/01-save-tab.md`.
2. **`03-api-endpoints/10-shares.md` (Line 214)**: References `08-sharing-collab/share-model.md` without `01-` sequence prefix (actual file is `01-share-model.md`).
3. **`03-api-endpoints/17-billing-webhooks.md` (Line 345)**: References non-existent `07-billing-emails.md` (actual file is `10-licensing-billing/09-dunning-and-recovery.md`).
4. **`04-extension/02-surfaces.md` (Line 29)**: References non-existent `06-ui-ux/options-page.md`.
5. **`04-extension/08-keyboard-shortcuts.md` (Line 48)**: References non-existent `06-ui-ux/keyboard-cheatsheet.md` (actual file is `06-ui-ux/08-keyboard-input.md`).
6. **`04-extension/07-context-menu.md` (Line 115)**: References non-existent `17-i18n-a11y/extension-strings.md` (actual file is `06-ui-ux/17-copy-strings.md`).
7. **`05-web-app/05-account-settings.md` (Line 67)**: References non-existent `14-integrations/`.
