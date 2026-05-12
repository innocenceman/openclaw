# LLM Task Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                   | First validation                                             | Escalation trigger                                                                      |
| ----------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Tool behavior changed         | `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts` | Add broader orchestration tests when embedded-agent contract or safety defaults change. |
| Package/build surface changed | `pnpm build`                                                 | Widen if published surfaces or runtime boundaries change.                               |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `4` (修改 3，新增 1).
- Target-existing path refs in active map: `4`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/llm-task/api.ts`
- `extensions/llm-task/openclaw.plugin.json`
- `extensions/llm-task/package.json`
- `extensions/llm-task/src/llm-task-tool.test.ts`
- `extensions/llm-task/src/llm-task-tool.ts`
- `extensions/llm-task/src/runtime-api.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
