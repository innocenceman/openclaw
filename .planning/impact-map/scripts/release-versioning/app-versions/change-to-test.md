# App Version Surfaces Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                  | First validation                                          | Escalation trigger                                                                       |
| -------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| CLI/app version bump across shipped surfaces | Inspect all version locations called out in repo guidance | Escalate to release checks only when the task includes an actual release/publish flow.   |
| Only docs/install/updating.md changed        | `pnpm check:docs`                                         | Confirm whether package/app versions also changed or whether the docs edit is premature. |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, wrapper references, and root `package.json` scripts without claiming fresh runtime success.
