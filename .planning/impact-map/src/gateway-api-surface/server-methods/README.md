# Server Methods Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Parent module

- Impact module: `gateway-api-surface/`
- Leaf: `server-methods/`

## Purpose

RPC method handlers for agents, config, channels, devices, logs, send, and sessions.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `81` (修改 52，新增 29).
- Target-existing changed paths listed here: `81`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 69 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `85`
- Target-existing changed paths reflected here: `85`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
