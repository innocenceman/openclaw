# Auth Provider Commands Change-to-Test Ladder

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

1. Run targeted `auth-choice` and OAuth command tests.
2. Run `agent-runtime/providers-auth/` or plugin provider auth tests when runtime auth behavior changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `70` (修改 44，删除 9，新增 16，重命名/移动 1).
- Target-existing path refs in active map: `60`; deleted/renamed-away refs kept only in transition artifacts: `10`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
