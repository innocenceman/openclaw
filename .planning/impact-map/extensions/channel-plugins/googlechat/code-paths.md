# Google Chat Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Registration and setup

```text
openclaw.plugin.json -> package.json -> index.ts -> channel.ts/runtime.ts
setup-surface.ts -> accounts.ts -> service account env/file/inline credentials
```

Impact: catalog, runtime injection, service-account credential selection, setup status.

## Webhook inbound

```text
Google Chat webhook
  -> monitor-webhook.ts createGoogleChatWebhookRequestHandler
  -> auth.ts verifyGoogleChatRequest
  -> monitor.ts processGoogleChatEvent
  -> monitor-access.ts applyGoogleChatInboundAccessPolicy
  -> reply pipeline / deliverGoogleChatReply
```

Impact: webhook authenticity, audience matching, event parsing, access decisions, media download/upload, replies.

## Outbound and actions

```text
OpenClaw outbound/action
  -> channel.ts/outbound
  -> targets.ts resolveGoogleChatOutboundSpace
  -> api.ts sendGoogleChatMessage/uploadGoogleChatAttachment/reactions
```

Impact: direct message discovery, space target syntax, message updates/deletes/reactions/media.

## Graph-use rule

Use graph tools only after fresh bounded coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `49` changed path(s) to this final leaf. `48` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 27, 'A': 21, 'D': 1}`.

- `extensions/googlechat/api.ts`
- `extensions/googlechat/channel-plugin-api.ts`
- `extensions/googlechat/contract-api.ts`
- `extensions/googlechat/index.ts`
- `extensions/googlechat/openclaw.plugin.json`
- `extensions/googlechat/package.json`
- `extensions/googlechat/runtime-api.ts`
- `extensions/googlechat/secret-contract-api.ts`
- `extensions/googlechat/setup-entry.ts`
- `extensions/googlechat/setup-plugin-api.ts`
- `extensions/googlechat/src/accounts.ts`
- `extensions/googlechat/src/actions.test.ts`
- `extensions/googlechat/src/actions.ts`
- `extensions/googlechat/src/api.ts`
- `extensions/googlechat/src/approval-auth.test.ts`
- `extensions/googlechat/src/approval-auth.ts`
- `extensions/googlechat/src/auth.ts`
- `extensions/googlechat/src/channel.adapters.ts`
- `extensions/googlechat/src/channel.deps.runtime.ts`
- `extensions/googlechat/src/channel.setup.ts`
- `extensions/googlechat/src/channel.test.ts`
- `extensions/googlechat/src/channel.ts`
- `extensions/googlechat/src/config-schema.test.ts`
- `extensions/googlechat/src/config-schema.ts`
- `extensions/googlechat/src/doctor-contract.test.ts`
- `extensions/googlechat/src/doctor-contract.ts`
- `extensions/googlechat/src/doctor.ts`
- `extensions/googlechat/src/gateway.ts`
- `extensions/googlechat/src/google-auth.runtime.test.ts`
- `extensions/googlechat/src/google-auth.runtime.ts`
- `... 另有 18 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
