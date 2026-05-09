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
