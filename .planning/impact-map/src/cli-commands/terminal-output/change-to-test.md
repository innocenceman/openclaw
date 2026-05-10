# Terminal Output Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope       | First validation                                                                                                                   | Escalation trigger                                                                          | Notes                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------- |
| `terminal-output/` | pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts | Escalate to broader CLI smoke only when output formatting changes affect command UX widely. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `60` (修改 42，新增 17，删除 1).
- Target-existing path refs in active map: `59`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
