# Core Abstractions Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope         | First validation                                                                                                                               | Escalation trigger                                                    | Notes                 |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------- |
| `core-abstractions/` | pnpm test -- src/channels/channel-config.test.ts src/channels/command-gating.test.ts src/channels/session.test.ts src/channels/targets.test.ts | Escalate to pnpm test:channels when shared channel semantics broaden. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `59` (重命名/移动 1，修改 42，新增 13，删除 3).
- Target-existing path refs in active map: `55`; deleted/renamed-away refs kept only in transition artifacts: `4`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
