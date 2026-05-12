# Generated or Localized Docs zh-CN Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                                 | First validation                                             | Escalation trigger                                                                          |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Generated zh-CN output changed because English source moved | `pnpm docs:check-i18n-glossary`                              | Escalate to `scripts/docs-i18n` only when the task explicitly includes regeneration.        |
| Direct zh-CN edit requested                                 | Inspect the matching English source and glossary entry first | Generated content must stay consistent with the upstream English page and glossary choices. |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `1` (修改 1).
- Target-existing path refs in active map: `1`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `docs/.i18n/glossary.zh-CN.json`
<!-- version-diff-refresh:v2026.5.4:end -->
