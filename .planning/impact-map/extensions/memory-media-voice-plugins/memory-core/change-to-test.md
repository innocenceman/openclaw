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
