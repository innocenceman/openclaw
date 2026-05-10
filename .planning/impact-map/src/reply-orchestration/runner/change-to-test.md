# Runner Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Change scope | First validation                                                                                                                                                                     | Escalation trigger                                                                                   | Notes                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------ |
| `runner/`    | pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts | Escalate to agent/runtime or channel suites when run selection, delivery, or hook behavior broadens. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `230` (重命名/移动 4，修改 146，新增 69，删除 11).
- Target-existing path refs in active map: `216`; deleted/renamed-away refs kept only in transition artifacts: `14`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
