# Server Methods Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Change scope      | First validation                                                                                                                                                                                                      | Escalation trigger                                                                                                                  | Notes                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `server-methods/` | pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts | Use GitNexus api_impact before code changes to specific handlers; escalate to pnpm test:gateway when shared method routing changes. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `81` (修改 52，新增 29).
- Target-existing path refs in active map: `81`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/gateway/server-methods.control-plane-rate-limit.test.ts`
- `src/gateway/server-methods.ts`
- `src/gateway/server-methods/agent-job.ts`
- `src/gateway/server-methods/agent-wait-dedupe.test.ts`
- `src/gateway/server-methods/agent-wait-dedupe.ts`
- `src/gateway/server-methods/agent.create-event.test.ts`
- `src/gateway/server-methods/agent.test.ts`
- `src/gateway/server-methods/agent.ts`
- `src/gateway/server-methods/agents-mutate.test.ts`
- `src/gateway/server-methods/agents.ts`
- `src/gateway/server-methods/approval-shared.test.ts`
- `src/gateway/server-methods/approval-shared.ts`
- `src/gateway/server-methods/artifacts.test.ts`
- `src/gateway/server-methods/artifacts.ts`
- `src/gateway/server-methods/channels.start.test.ts`
- `src/gateway/server-methods/channels.status.test.ts`
- `src/gateway/server-methods/channels.ts`
- `src/gateway/server-methods/chat-transcript-inject.ts`
- `src/gateway/server-methods/chat-webchat-media.test.ts`
- `src/gateway/server-methods/chat-webchat-media.ts`
- `src/gateway/server-methods/chat.abort.test-helpers.ts`
- `src/gateway/server-methods/chat.directive-tags.test.ts`
- `src/gateway/server-methods/chat.inject.parentid.test.ts`
- `src/gateway/server-methods/chat.test-helpers.ts`
- `src/gateway/server-methods/chat.ts`
- `src/gateway/server-methods/commands.test.ts`
- `src/gateway/server-methods/commands.ts`
- `src/gateway/server-methods/config-write-flow.ts`
- `src/gateway/server-methods/config.shared-auth.test.ts`
- `src/gateway/server-methods/config.test.ts`
- `src/gateway/server-methods/config.ts`
- `src/gateway/server-methods/cron.ts`
- `src/gateway/server-methods/cron.validation.test.ts`
- `src/gateway/server-methods/devices.test.ts`
- `src/gateway/server-methods/devices.ts`
- `src/gateway/server-methods/doctor.memory-core-runtime.ts`
- `src/gateway/server-methods/doctor.test.ts`
- `src/gateway/server-methods/doctor.ts`
- `src/gateway/server-methods/exec-approval.ts`
- `src/gateway/server-methods/health.ts`
- … plus 45 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
