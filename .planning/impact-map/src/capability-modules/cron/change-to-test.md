# Cron Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope | First validation                                                                                                                          | Escalation trigger                                                                                   | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | --------------------- |
| `cron/`      | pnpm test -- src/cron/service.jobs.test.ts src/cron/isolated-agent/run.fast-mode.test.ts src/cron/schedule.test.ts src/cron/store.test.ts | Escalate to agent/channel delivery tests when scheduled execution changes delivery/runtime behavior. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

## 2026-05-09 validation result

Result: `verified`. Full cron/context/tts command passed across 73 filters.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `135` (重命名/移动 3，新增 52，修改 71，删除 9).
- Target-existing path refs in active map: `123`; deleted/renamed-away refs kept only in transition artifacts: `12`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
