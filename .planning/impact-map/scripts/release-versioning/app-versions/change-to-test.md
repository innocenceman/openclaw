# App Version Surfaces Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                  | First validation                                          | Escalation trigger                                                                       |
| -------------------------------------------- | --------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| CLI/app version bump across shipped surfaces | Inspect all version locations called out in repo guidance | Escalate to release checks only when the task includes an actual release/publish flow.   |
| Only docs/install/updating.md changed        | `pnpm check:docs`                                         | Confirm whether package/app versions also changed or whether the docs edit is premature. |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, wrapper references, and root `package.json` scripts without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `18` (修改 15，新增 3).
- Target-existing path refs in active map: `18`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `compatible`.
- First validation move: Run the smallest build/test/tooling check that exercises this leaf, then rely on broader CI only for packaging surfaces.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
