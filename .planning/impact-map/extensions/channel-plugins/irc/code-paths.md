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
