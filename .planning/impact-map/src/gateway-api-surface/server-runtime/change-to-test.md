# Server Runtime Change-to-Test

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope      | First validation                                                                                                                                      | Escalation trigger                                                         | Notes                    |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------ |
| `server-runtime/` | pnpm test -- src/gateway/boot.test.ts src/gateway/server-close.test.ts src/gateway/control-ui.http.test.ts src/gateway/channel-health-monitor.test.ts | Escalate to pnpm test:gateway when lifecycle or serving behavior broadens. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `21` (修改 19，新增 2).
- Target-existing path refs in active map: `21`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
