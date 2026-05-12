# Anthropic Provider Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                   | First validation                                                                                       | Escalation trigger                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------- |
| Model aliasing or probe/list behavior changed | `pnpm test -- src/commands/models/list.probe.targets.test.ts src/commands/models/list.status.test.ts`  | Add broader model-list forward-compat tests when provider/model selection semantics change. |
| Media-understanding capability changed        | `pnpm test -- src/media-understanding/provider-registry.test.ts src/media-understanding/apply.test.ts` | Add targeted media tests if shared media defaults or provider selection behavior changes.   |
| Package/build surface changed                 | `pnpm build`                                                                                           | Run package/release checks if published surfaces or runtime boundaries change.              |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `29` (修改 11，新增 16，删除 2).
- Target-existing path refs in active map: `27`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/anthropic/cli-backend.ts`
- `extensions/anthropic/cli-migration.test.ts`
- `extensions/anthropic/cli-migration.ts`
- `extensions/anthropic/cli-shared.test.ts`
- `extensions/anthropic/cli-shared.ts`
- `extensions/anthropic/config-defaults.ts`
- `extensions/anthropic/doctor-contract-api.ts`
- `extensions/anthropic/index.test.ts`
- `extensions/anthropic/openclaw.plugin.json`
- `extensions/anthropic/package.json`
- `extensions/anthropic/provider-discovery.ts`
- `extensions/anthropic/provider-policy-api.test.ts`
- `extensions/anthropic/provider-policy-api.ts`
- `extensions/anthropic/provider-runtime.contract.test.ts`
- `extensions/anthropic/register.runtime.ts`
- `extensions/anthropic/stream-wrappers.test.ts`
- `extensions/anthropic/stream-wrappers.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
