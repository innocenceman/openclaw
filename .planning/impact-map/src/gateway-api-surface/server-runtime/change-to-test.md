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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/gateway/channel-health-monitor.test.ts`
- `src/gateway/channel-health-monitor.ts`
- `src/gateway/channel-health-policy.test.ts`
- `src/gateway/channel-health-policy.ts`
- `src/gateway/control-ui-assistant-media.e2e.test.ts`
- `src/gateway/control-ui-contract.ts`
- `src/gateway/control-ui-csp.test.ts`
- `src/gateway/control-ui-csp.ts`
- `src/gateway/control-ui-links.ts`
- `src/gateway/control-ui-routing.ts`
- `src/gateway/control-ui.http.test.ts`
- `src/gateway/control-ui.ts`
- `src/gateway/server-close.runtime.ts`
- `src/gateway/server-close.test.ts`
- `src/gateway/server-close.ts`
- `src/gateway/server-http.probe.test.ts`
- `src/gateway/server-http.request-trace.test.ts`
- `src/gateway/server-http.test-harness.ts`
- `src/gateway/server-http.ts`
- `src/infra/ports.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
