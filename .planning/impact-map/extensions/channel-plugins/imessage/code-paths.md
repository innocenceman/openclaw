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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `73` changed path(s) to this final leaf. `66` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 33, 'A': 33, 'D': 7}`.

- `extensions/imessage/api.ts`
- `extensions/imessage/channel-plugin-api.ts`
- `extensions/imessage/config-api.ts`
- `extensions/imessage/contract-api.ts`
- `extensions/imessage/doctor-contract-api.ts`
- `extensions/imessage/index.ts`
- `extensions/imessage/media-contract-api.ts`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/secret-contract-api.ts`
- `extensions/imessage/setup-entry.ts`
- `extensions/imessage/src/account-types.ts`
- `extensions/imessage/src/accounts.test.ts`
- `extensions/imessage/src/accounts.ts`
- `extensions/imessage/src/channel-api.ts`
- `extensions/imessage/src/channel-inbound-roots.contract.test.ts`
- `extensions/imessage/src/channel.runtime.ts`
- `extensions/imessage/src/channel.setup.ts`
- `extensions/imessage/src/channel.ts`
- `extensions/imessage/src/client.ts`
- `extensions/imessage/src/config-accessors.test.ts`
- `extensions/imessage/src/config-accessors.ts`
- `extensions/imessage/src/config-schema.test.ts`
- `extensions/imessage/src/config-schema.ts`
- `extensions/imessage/src/conversation-bindings.ts`
- `extensions/imessage/src/conversation-id-core.ts`
- `extensions/imessage/src/conversation-id.ts`
- `extensions/imessage/src/conversation-route.test.ts`
- `extensions/imessage/src/conversation-route.ts`
- `extensions/imessage/src/imessage.test-plugin.ts`
- `... 另有 36 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `extensions/imessage/api.ts`
- `extensions/imessage/config-api.ts`
- `extensions/imessage/openclaw.plugin.json`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/src/account-types.ts`
- `extensions/imessage/src/channel-api.ts`
- `extensions/imessage/src/channel-inbound-roots.contract.test.ts`
- `extensions/imessage/src/channel.runtime.ts`
- `extensions/imessage/src/client.ts`
- `extensions/imessage/src/config-accessors.ts`
- `extensions/imessage/src/conversation-bindings.ts`
- `extensions/imessage/src/conversation-route.test.ts`
- `extensions/imessage/src/conversation-route.ts`
- `extensions/imessage/src/imessage.test-plugin.ts`
- `extensions/imessage/src/media-contract.ts`
- `extensions/imessage/src/monitor.gating.test.ts`
- `extensions/imessage/src/monitor.watch-subscribe-retry.test.ts`
- `extensions/imessage/src/monitor/abort-handler.ts`
- `extensions/imessage/src/monitor/deliver.runtime.ts`
- `extensions/imessage/src/monitor/deliver.ts`
- `extensions/imessage/src/monitor/echo-cache.ts`
- `extensions/imessage/src/monitor/inbound-processing.test.ts`
- `extensions/imessage/src/monitor/inbound-processing.ts`
- `extensions/imessage/src/monitor/loop-rate-limiter.ts`
- `extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`
- `extensions/imessage/src/monitor/monitor-provider.ts`
- `extensions/imessage/src/monitor/reflection-guard.ts`
- `extensions/imessage/src/monitor/self-chat-cache.ts`
- `extensions/imessage/src/monitor/self-chat-dedupe.test.ts`
- `extensions/imessage/src/monitor/types.ts`
- `extensions/imessage/src/monitor/watch-error-log.ts`
- `extensions/imessage/src/normalize.ts`
- `extensions/imessage/src/probe.ts`
- `extensions/imessage/src/runtime.ts`
- `extensions/imessage/src/send.ts`
- `extensions/imessage/src/setup-core.ts`
- `extensions/imessage/src/setup-surface.ts`
- `extensions/imessage/src/shared.ts`
- `extensions/imessage/src/status.test.ts`
- … plus 1 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
