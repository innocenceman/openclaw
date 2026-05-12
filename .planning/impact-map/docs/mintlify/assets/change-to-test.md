# Docs assets Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                      | First validation                               | Escalation trigger                                                             |
| ------------------------------------------------ | ---------------------------------------------- | ------------------------------------------------------------------------------ |
| Asset path, filename, or extension changed       | `pnpm docs:check-links`                        | Do a manual page render check when screenshots or diagrams changed materially. |
| Only the visual content changed at the same path | Inspect the owning page plus nearby references | Escalate to a manual docs render review when UI/state fidelity matters.        |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `8` (新增 8).
- Target-existing path refs in active map: `8`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
