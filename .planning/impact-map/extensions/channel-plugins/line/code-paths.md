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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `69` changed path(s) to this final leaf. `66` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 50, 'A': 15, 'D': 3, 'R': 1}`.

- `extensions/line/api.ts`
- `extensions/line/channel-plugin-api.ts`
- `extensions/line/contract-api.ts`
- `extensions/line/index.ts`
- `extensions/line/openclaw.plugin.json`
- `extensions/line/package.json`
- `extensions/line/runtime-api.ts`
- `extensions/line/secret-contract-api.ts`
- `extensions/line/setup-entry.ts`
- `extensions/line/src/accounts.test.ts`
- `extensions/line/src/accounts.ts`
- `extensions/line/src/auto-reply-delivery.test.ts`
- `extensions/line/src/auto-reply-delivery.ts`
- `extensions/line/src/bindings.ts`
- `extensions/line/src/bot-handlers.test.ts`
- `extensions/line/src/bot-handlers.ts`
- `extensions/line/src/bot-message-context.test.ts`
- `extensions/line/src/bot-message-context.ts`
- `extensions/line/src/bot.ts`
- `extensions/line/src/card-command.ts`
- `extensions/line/src/channel-api.ts`
- `extensions/line/src/channel-setup-status.contract.test.ts`
- `extensions/line/src/channel-shared.ts`
- `extensions/line/src/channel.logout.test.ts`
- `extensions/line/src/channel.runtime.ts`
- `extensions/line/src/channel.sendPayload.test.ts`
- `extensions/line/src/channel.setup.ts`
- `extensions/line/src/channel.status.test.ts`
- `extensions/line/src/channel.ts`
- `extensions/line/src/config-adapter.ts`
- `... 另有 36 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
