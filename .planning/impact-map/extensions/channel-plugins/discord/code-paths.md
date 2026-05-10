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
