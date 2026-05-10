# Docs Support .generated Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                           | First validation                     | Escalation trigger                                                                                                |
| ------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Config schema/help drift touched      | `pnpm config:docs:check`             | Approved drift refresh uses `pnpm config:docs:gen`; run broader config/docs checks when public help text changes. |
| Plugin SDK API drift touched          | `pnpm plugin-sdk:api:check`          | Approved refresh uses `pnpm plugin-sdk:api:gen`; add export checks when public SDK entrypoints move.              |
| Bundled plugin metadata drift touched | `pnpm check:bundled-plugin-metadata` | Escalate to `pnpm build` or contract tests when runtime catalog behavior changes, not just generated text.        |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `386` (修改 133，删除 81，新增 170，重命名/移动 2).
- Target-existing path refs in active map: `304`; deleted/renamed-away refs kept only in transition artifacts: `82`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
