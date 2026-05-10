# LINE Channel Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Registration/setup

```text
openclaw.plugin.json -> package.json -> index.ts -> channel.ts/runtime.ts
setup-surface/setup-core -> accounts/channel-access-token
```

Impact: channel catalog, quickstart allowFrom, token/secret setup.

## Webhook inbound

```text
LINE webhook -> signature.ts/webhook-node.ts/webhook.ts
  -> createLineBot/createLineWebhookCallback
  -> bot-handlers.handleLineWebhookEvents
  -> access/pairing/replay/mention/postback handling
  -> bot-message-context -> auto-reply delivery
```

Impact: signature/replay protection, event authorization, group/DM routing, context and replies.

## Outbound/UX

```text
OpenClaw reply/outbound/card command
  -> send.ts/reply-chunks/auto-reply-delivery
  -> flex/template/markdown-to-line/rich-menu helpers
  -> LINE Messaging API
```

Impact: text/media/location/flex/template messages, loading animations, quick replies, rich menu actions.

## Graph-use rule

Use graph tools only after fresh bounded coverage is recorded in `.planning/tools/GRAPH-COVERAGE.md`.
