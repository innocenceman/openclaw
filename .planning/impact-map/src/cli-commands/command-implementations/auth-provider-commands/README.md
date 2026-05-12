# Auth Provider Commands Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `cli-commands/command-implementations/`
- Leaf: `auth-provider-commands/`

## Purpose

Auth-choice, provider/model selection, token, and OAuth command flows.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `70` (修改 44，删除 9，新增 16，重命名/移动 1).
- Target-existing changed paths listed here: `60`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `10`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/commands/auth-choice-legacy.test.ts`
- `src/commands/auth-choice-legacy.ts`
- `src/commands/auth-choice-options.static.ts`
- `src/commands/auth-choice-options.test.ts`
- `src/commands/auth-choice-options.ts`
- `src/commands/auth-choice-prompt.ts`
- `src/commands/auth-choice.apply-helpers.ts`
- `src/commands/auth-choice.apply.api-providers.test.ts`
- `src/commands/auth-choice.apply.api-providers.ts`
- `src/commands/auth-choice.apply.plugin-provider.test.ts`
- `src/commands/auth-choice.apply.ts`
- `src/commands/auth-choice.apply.types.ts`
- `... 另有 48 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `cli-command-surface`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `57`
- Target-existing changed paths reflected here: `51`
- Deleted or renamed-away paths omitted from active impact-map: `6`

### Target-version changed paths

- `src/commands/auth-choice-legacy.test.ts`
- `src/commands/auth-choice-options.static.ts`
- `src/commands/auth-choice.apply-helpers.ts`
- `src/commands/auth-choice.apply.api-providers.test.ts`
- `src/commands/auth-choice.apply.plugin-provider.test.ts`
- `src/commands/auth-choice.apply.ts`
- `src/commands/auth-choice.model-check.test.ts`
- `src/commands/auth-choice.model-check.ts`
- `src/commands/auth-choice.test.ts`
- `src/commands/model-picker.runtime.ts`
- `src/commands/model-picker.test.ts`
- `src/commands/models.list.e2e.test.ts`
- `src/commands/models/auth-list.test.ts`
- `src/commands/models/auth-list.ts`
- `src/commands/models/auth-order.ts`
- `src/commands/models/auth.test.ts`
- `src/commands/models/auth.ts`
- `src/commands/models/list.auth-index.test.ts`
- `src/commands/models/list.auth-index.ts`
- `src/commands/models/list.auth-overview.test.ts`
- `src/commands/models/list.auth-overview.ts`
- `src/commands/models/list.format.ts`
- `src/commands/models/list.list-command.forward-compat.test.ts`
- `src/commands/models/list.list-command.ts`
- `src/commands/models/list.manifest-catalog.test.ts`
- `src/commands/models/list.manifest-catalog.ts`
- `src/commands/models/list.model-row.test.ts`
- `src/commands/models/list.model-row.ts`
- `src/commands/models/list.probe.targets.test.ts`
- `src/commands/models/list.probe.test.ts`
- `src/commands/models/list.probe.ts`
- `src/commands/models/list.provider-catalog.test.ts`
- `src/commands/models/list.provider-catalog.ts`
- `src/commands/models/list.provider-index-catalog.test.ts`
- `src/commands/models/list.provider-index-catalog.ts`
- `src/commands/models/list.registry-load.ts`
- `src/commands/models/list.registry.ts`
- `src/commands/models/list.row-sources.ts`
- `src/commands/models/list.rows.test.ts`
- `src/commands/models/list.rows.ts`
- … plus 11 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
