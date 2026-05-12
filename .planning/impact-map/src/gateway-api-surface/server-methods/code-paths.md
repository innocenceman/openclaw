# Server Methods Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/gateway/server-methods.ts`, `src/gateway/server-methods/**`
- Runtime handoff: Validated requests dispatch into method families that bridge app/UI/CLI actions into runtime operations.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `81` changed path(s) to this final leaf. `81` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 52, 'A': 29}`.

- `src/gateway/server-methods.control-plane-rate-limit.test.ts`
- `src/gateway/server-methods.ts`
- `src/gateway/server-methods/agent-job.ts`
- `src/gateway/server-methods/agent-timestamp.ts`
- `src/gateway/server-methods/agent-wait-dedupe.ts`
- `src/gateway/server-methods/agent.create-event.test.ts`
- `src/gateway/server-methods/agent.test.ts`
- `src/gateway/server-methods/agent.ts`
- `src/gateway/server-methods/agents-mutate.test.ts`
- `src/gateway/server-methods/agents.ts`
- `src/gateway/server-methods/approval-shared.ts`
- `src/gateway/server-methods/channels.start.test.ts`
- `src/gateway/server-methods/channels.status.test.ts`
- `src/gateway/server-methods/channels.ts`
- `src/gateway/server-methods/chat-transcript-inject.ts`
- `src/gateway/server-methods/chat-webchat-media.test.ts`
- `src/gateway/server-methods/chat-webchat-media.ts`
- `src/gateway/server-methods/chat.abort-persistence.test.ts`
- `src/gateway/server-methods/chat.directive-tags.test.ts`
- `src/gateway/server-methods/chat.send-deleted-agent.test.ts`
- `src/gateway/server-methods/chat.ts`
- `src/gateway/server-methods/commands.test.ts`
- `src/gateway/server-methods/commands.ts`
- `src/gateway/server-methods/config.shared-auth.test.ts`
- `src/gateway/server-methods/config.test-helpers.ts`
- `src/gateway/server-methods/config.test.ts`
- `src/gateway/server-methods/config.ts`
- `src/gateway/server-methods/cron.ts`
- `src/gateway/server-methods/cron.validation.test.ts`
- `src/gateway/server-methods/deleted-agent-guard.test-helpers.ts`
- `... 另有 51 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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
