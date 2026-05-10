# Config Docs Baselines Change-to-Test Matrix

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

| Change type                          | First validation                                  | Escalation trigger                                                                   |
| ------------------------------------ | ------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Config help/schema behavior changed  | `pnpm config:docs:check`                          | Refresh with `pnpm config:docs:gen` only when the drift is intentional and approved. |
| Only baseline artifact files changed | Trace back to the source config/help change first | Do not accept checked-in baseline churn without the corresponding source change.     |

## Validation evidence

No commands above were executed during Wave 4. They were selected from the current repo tree, package-script wiring, and adjacent tests without claiming fresh runtime success.
