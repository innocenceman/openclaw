# LINE Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled LINE Messaging API channel plugin in `extensions/line/`.

Covers plugin registration, setup/account/token/secret handling, webhook signature validation, bot event handlers/replay cache/access policy, message/postback context, reply delivery/loading keepalive, outbound push/reply/media/location/flex/template/rich-menu APIs, card command registration, markdown-to-LINE/Flex conversion, group policy, and media download.

## Entry contracts

- Plugin id/channel id: `line`.
- Package contract: `@openclaw/line`.
- Loader boundary: `extensions/line/index.ts` registers `linePlugin`, runtime, and card command.

## Primary behavior surfaces

- `extensions/line/src/channel.ts`: plugin composition.
- `extensions/line/src/monitor.ts`, `webhook.ts`, `webhook-node.ts`, `signature.ts`: webhook lifecycle/signature.
- `extensions/line/src/bot-handlers.ts`, `bot-message-context.ts`: inbound event access/context.
- `extensions/line/src/send.ts`, `auto-reply-delivery.ts`, `reply-chunks.ts`: delivery.
- `extensions/line/src/rich-menu.ts`, `flex-templates/**`, `markdown-to-line.ts`: LINE UX/card surfaces.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.
