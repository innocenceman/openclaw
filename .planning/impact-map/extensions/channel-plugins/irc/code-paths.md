# IRC Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Setup/connect

```text
setup-surface/setup-core -> accounts -> connect-options -> client.connectIrcClient
```

Impact: server/TLS/nick/password/NickServ behavior and probe/startup reliability.

## Monitor inbound

```text
monitorIrcProvider -> connectIrcClient events -> resolveIrcInboundTarget
  -> handleIrcInbound -> policy/normalize -> reply dispatch
```

Impact: channel vs DM routing, allowlist/pairing/mention decisions, command gating, session context.

## Outbound

```text
OpenClaw outbound -> sendMessageIrc -> protocol.sanitize/split -> IRC PRIVMSG
```

Impact: target syntax, control characters, line splitting, IRC injection safety.

## Graph-use rule

Use graph tools only after fresh bounded coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `41` changed path(s) to this final leaf. `39` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 25, 'A': 14, 'D': 2}`.

- `extensions/irc/api.ts`
- `extensions/irc/channel-plugin-api.ts`
- `extensions/irc/configured-state.ts`
- `extensions/irc/contract-api.ts`
- `extensions/irc/index.test.ts`
- `extensions/irc/index.ts`
- `extensions/irc/openclaw.plugin.json`
- `extensions/irc/package.json`
- `extensions/irc/runtime-api.test.ts`
- `extensions/irc/runtime-api.ts`
- `extensions/irc/secret-contract-api.ts`
- `extensions/irc/setup-entry.ts`
- `extensions/irc/src/accounts.ts`
- `extensions/irc/src/channel-api.ts`
- `extensions/irc/src/channel-runtime.ts`
- `extensions/irc/src/channel.test.ts`
- `extensions/irc/src/channel.ts`
- `extensions/irc/src/client.ts`
- `extensions/irc/src/config-schema.test.ts`
- `extensions/irc/src/config-schema.ts`
- `extensions/irc/src/doctor.ts`
- `extensions/irc/src/gateway.ts`
- `extensions/irc/src/inbound.ts`
- `extensions/irc/src/monitor.ts`
- `extensions/irc/src/normalize.ts`
- `extensions/irc/src/outbound-base.ts`
- `extensions/irc/src/policy.test.ts`
- `extensions/irc/src/policy.ts`
- `extensions/irc/src/probe.test.ts`
- `extensions/irc/src/runtime-api.ts`
- `... 另有 9 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
