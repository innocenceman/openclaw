# Plugin SDK API Baselines Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                | First validation                                 | Escalation trigger                                                                      |
| ------------------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Public Plugin SDK surface changed          | `pnpm plugin-sdk:api:check`                      | Refresh with `pnpm plugin-sdk:api:gen` only when the drift is intentional and approved. |
| Only Plugin SDK API baseline files changed | Trace back to the export/API source change first | Pair with export checks when entrypoints or public subpaths moved.                      |

## Validation evidence

No commands above were executed during Wave 4. They were selected from the current repo tree, package-script wiring, and adjacent tests without claiming fresh runtime success.
