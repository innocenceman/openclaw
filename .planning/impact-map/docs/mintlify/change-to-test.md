# Docs and Mintlify Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                          | First validation                                                   | Escalation trigger                                                                             |
| ---------------------------------------------------- | ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Public docs content or route changed                 | `pnpm check:docs`                                                  | Add `pnpm docs:check-links` and `pnpm docs:list` when paths, redirects, or route groups moved. |
| Shared Mintlify shell config or nav behavior changed | Inspect `docs/docs.json` and `docs/nav-tabs-underline.js` together | Escalate to a manual docs render review when page-shell behavior changed.                      |
| Locale control or generated docs changed             | `pnpm docs:check-i18n-glossary`                                    | Only rerun `scripts/docs-i18n` when the task explicitly includes locale regeneration.          |

## Validation evidence

No commands above were executed during Wave 4. They were selected from the current docs tree, root package scripts, and shared Mintlify files without claiming fresh runtime success.
