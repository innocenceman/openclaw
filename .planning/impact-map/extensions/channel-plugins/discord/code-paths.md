# Discord Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## 1. Plugin registration and runtime

```text
openclaw.plugin.json -> package.json -> index.ts
  -> defineChannelPluginEntry({ id: "discord", plugin, setRuntime, registerFull })
  -> src/channel.ts -> src/runtime.ts
```

Impact: channel catalog, runtime dependency staging, Carbon/Discord runtime availability, subagent hooks.

## 2. Setup/token/account/status

```text
setup-entry/setup-surface/setup-core
  -> accounts.ts + token.ts
  -> client.ts/probe.ts/audit.ts/status-issues.ts
  -> channel status adapter
```

Impact: bot token handling, account enablement, required permissions/intents, guild audit/status warnings.

## 3. Gateway provider to inbound message handler

```text
channel.gateway.startAccount
  -> monitor.gateway.ts / monitor/provider.ts
  -> listeners.ts / allow-list.ts / commands.ts
  -> message-handler.ts
  -> message-handler.preflight.ts
  -> message-handler.process.ts
  -> inbound-job.ts / inbound-worker.ts
```

Impact: Discord gateway lifecycle, event filtering, bot-self filtering, allowlist/mention/command decisions, queueing and worker dispatch.

## 4. Inbound context, routing, and threads

```text
message-handler process
  -> inbound-context.ts + route-resolution.ts + sender-identity.ts
  -> thread-bindings*.ts / threading*.ts / thread-title*.ts
  -> reply-context.ts
  -> provider-session runtime
```

Impact: session keys, channel/thread binding, auto-thread behavior, parent info, reply target context, configured route matching.

## 5. Native commands, components, and approvals

```text
native-command*.ts / model-picker*.ts
  -> components.ts/shared-interactive.ts
  -> monitor/exec-approvals.ts + exec-approvals.ts
  -> Discord interactions/components
```

Impact: slash/native command UX, model picker, skills allowlist, callback payloads, exec approval safety.

## 6. Outbound and reply delivery

```text
OpenClaw outbound or reply pipeline
  -> outbound-adapter.ts
  -> send.ts + send.messages/channels/components/outbound/webhook-activity
  -> Discord REST API
```

Impact: manual sends, reply delivery, components, media/files, thread creation, permissions, typing, reactions.

## 7. Actions and voice

```text
actions/** and channel-actions.ts -> Discord REST side effects
voice/** and voice-message.ts -> Discord voice runtime/manager
```

Impact: moderation/admin/presence/message actions and voice command lifecycle.

## When to use graph tools

Use GitNexus/code-review-graph only after fresh bounded coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`, especially for `src/channel.ts`, `src/monitor/**`, `src/send*.ts`, `src/actions/**`, or public barrel changes.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `307` changed path(s) to this final leaf. `297` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 99, 'M': 197, 'D': 10, 'R': 1}`.

- `extensions/discord/account-inspect-api.ts`
- `extensions/discord/api.ts`
- `extensions/discord/channel-plugin-api.ts`
- `extensions/discord/config-api.ts`
- `extensions/discord/configured-state.ts`
- `extensions/discord/contract-api.ts`
- `extensions/discord/directory-contract-api.ts`
- `extensions/discord/doctor-contract-api.ts`
- `extensions/discord/index.test.ts`
- `extensions/discord/index.ts`
- `extensions/discord/openclaw.plugin.json`
- `extensions/discord/package.json`
- `extensions/discord/runtime-api.ts`
- `extensions/discord/runtime-setter-api.ts`
- `extensions/discord/secret-contract-api.ts`
- `extensions/discord/security-audit-contract-api.ts`
- `extensions/discord/security-contract-api.ts`
- `extensions/discord/setup-entry.ts`
- `extensions/discord/setup-plugin-api.ts`
- `extensions/discord/src/account-inspect.test.ts`
- `extensions/discord/src/account-inspect.ts`
- `extensions/discord/src/accounts.test.ts`
- `extensions/discord/src/accounts.ts`
- `extensions/discord/src/actions/handle-action.guild-admin.ts`
- `extensions/discord/src/actions/handle-action.test.ts`
- `extensions/discord/src/actions/handle-action.ts`
- `extensions/discord/src/actions/runtime.guild.ts`
- `extensions/discord/src/actions/runtime.messaging.ts`
- `extensions/discord/src/actions/runtime.moderation.authz.test.ts`
- `extensions/discord/src/actions/runtime.moderation.ts`
- `... 另有 267 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
