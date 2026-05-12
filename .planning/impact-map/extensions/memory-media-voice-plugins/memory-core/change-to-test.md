# Memory Core Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                   | First validation                                                                                           | Escalation trigger                                                                   |
| --------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Memory prompt or tool registration changed    | `pnpm test -- extensions/memory-core/index.test.ts`                                                        | Add shared plugin contract tests if runtime registration crosses package boundaries. |
| Memory slot/config/status integration changed | `pnpm test -- src/plugins/slots.test.ts src/plugins/config-state.test.ts src/commands/status.scan.test.ts` | Escalate when slot switching, plugin enablement, or status output semantics change.  |
| Package/build surface changed                 | `pnpm build`                                                                                               | Widen if published surfaces or plugin-slot packaging behavior changes.               |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `121` (修改 45，新增 70，重命名/移动 1，删除 5).
- Target-existing path refs in active map: `116`; deleted/renamed-away refs kept only in transition artifacts: `5`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/memory-core/api.ts`
- `extensions/memory-core/index.test.ts`
- `extensions/memory-core/index.ts`
- `extensions/memory-core/openclaw.plugin.json`
- `extensions/memory-core/package.json`
- `extensions/memory-core/src/cli.host.runtime.ts`
- `extensions/memory-core/src/cli.runtime.ts`
- `extensions/memory-core/src/cli.test.ts`
- `extensions/memory-core/src/cli.ts`
- `extensions/memory-core/src/concept-vocabulary.ts`
- `extensions/memory-core/src/config.test.ts`
- `extensions/memory-core/src/dreaming-command.test.ts`
- `extensions/memory-core/src/dreaming-command.ts`
- `extensions/memory-core/src/dreaming-narrative.test.ts`
- `extensions/memory-core/src/dreaming-narrative.ts`
- `extensions/memory-core/src/dreaming-phases.test.ts`
- `extensions/memory-core/src/dreaming-phases.ts`
- `extensions/memory-core/src/dreaming-repair.ts`
- `extensions/memory-core/src/dreaming.test.ts`
- `extensions/memory-core/src/dreaming.ts`
- `extensions/memory-core/src/flush-plan.ts`
- `extensions/memory-core/src/memory-tool-manager-mock.ts`
- `extensions/memory-core/src/memory/embeddings.test.ts`
- `extensions/memory-core/src/memory/embeddings.ts`
- `extensions/memory-core/src/memory/hybrid.ts`
- `extensions/memory-core/src/memory/index.test.ts`
- `extensions/memory-core/src/memory/index.ts`
- `extensions/memory-core/src/memory/manager-atomic-reindex.ts`
- `extensions/memory-core/src/memory/manager-batch-state.ts`
- `extensions/memory-core/src/memory/manager-db.ts`
- `extensions/memory-core/src/memory/manager-embedding-ops.ts`
- `extensions/memory-core/src/memory/manager-embedding-policy.test.ts`
- `extensions/memory-core/src/memory/manager-embedding-policy.ts`
- `extensions/memory-core/src/memory/manager-embedding-timeout.test.ts`
- `extensions/memory-core/src/memory/manager-provider-state.ts`
- `extensions/memory-core/src/memory/manager-reindex-state.ts`
- `extensions/memory-core/src/memory/manager-search.test.ts`
- `extensions/memory-core/src/memory/manager-search.ts`
- `extensions/memory-core/src/memory/manager-sync-control.ts`
- `extensions/memory-core/src/memory/manager-sync-ops.archive-delta-bypass.test.ts`
- … plus 25 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
