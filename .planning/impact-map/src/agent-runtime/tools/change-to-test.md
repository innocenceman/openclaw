# Tools Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope | First validation                                                                                                                                          | Escalation trigger                                                                            | Notes                    |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------ |
| `tools/`     | pnpm test -- src/agents/apply-patch.test.ts src/agents/bash-tools.exec.pty.test.ts src/agents/bash-tools.test.ts src/agents/openclaw-tools.agents.test.ts | Run pnpm build when tool schemas, lazy-loading boundaries, or exported tool contracts change. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `209` (修改 126，新增 69，删除 12，重命名/移动 2).
- Target-existing path refs in active map: `196`; deleted/renamed-away refs kept only in transition artifacts: `13`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
