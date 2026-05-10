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
