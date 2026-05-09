# iMessage Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Registration/setup

```text
openclaw.plugin.json -> package.json -> index.ts -> channel.ts/shared.ts
setup-surface/setup-core -> accounts/config-schema -> cliPath/account config
```

Impact: catalog, setup status, account/CLI path selection, runtime injection.

## Monitor inbound

```text
monitorIMessageProvider(...)
  -> client.ts RPC notifications
  -> parse-notification.ts
  -> inbound-processing.ts resolveIMessageInboundDecision/buildIMessageInboundContext
  -> echo/reflection/self-chat/loop guards
  -> reply delivery
```

Impact: dispatch gating, command/mention policy, reflected content drops, session context, delivery.

## Outbound

```text
OpenClaw outbound -> outbound-adapter.ts/channel.runtime.ts
  -> send.ts sendMessageIMessage
  -> target parsing + reply tag sanitization
  -> imsg RPC client
```

Impact: manual sends, reply threading tags, media/text chunking, outbound sanitization.

## Graph-use rule

Use graph tools only after fresh bounded coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
