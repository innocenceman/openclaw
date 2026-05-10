# Release Docs and Changelog Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                    | First validation                             | Escalation trigger                                                                      |
| ------------------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------- |
| Release-policy docs changed    | `pnpm check:docs`                            | Escalate to script-level release checks when the docs claim a changed release behavior. |
| Release route/redirect changed | `pnpm docs:check-links` and `pnpm docs:list` | Confirm the Mintlify redirect still lands at the intended release reference page.       |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, wrapper references, and root `package.json` scripts without claiming fresh runtime success.
