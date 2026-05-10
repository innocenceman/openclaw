# Generated or Localized Docs zh-CN Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                                 | First validation                                             | Escalation trigger                                                                          |
| ----------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Generated zh-CN output changed because English source moved | `pnpm docs:check-i18n-glossary`                              | Escalate to `scripts/docs-i18n` only when the task explicitly includes regeneration.        |
| Direct zh-CN edit requested                                 | Inspect the matching English source and glossary entry first | Generated content must stay consistent with the upstream English page and glossary choices. |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.
