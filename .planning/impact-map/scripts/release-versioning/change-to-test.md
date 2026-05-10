# Release Versioning Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                 | First validation                                   | Escalation trigger                                                                |
| --------------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------- |
| Version surface changed     | Start with `app-versions/change-to-test.md`        | Escalate to release guards only when the task is actually a release/version bump. |
| CLI release guard changed   | Start with `cli-package-version/change-to-test.md` | Escalate to publish verification only in an approved release workflow.            |
| Release policy docs changed | Start with `release-docs/change-to-test.md`        | Escalate to script-level checks when the docs claim changed release behavior.     |

## Validation evidence

No commands above were executed during Wave 4. They were selected from current version files, release scripts, and public release docs without claiming fresh runtime success.
