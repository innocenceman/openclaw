# Feishu Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled Feishu/Lark channel plugin in `extensions/feishu/`.

This leaf covers channel registration plus Feishu skills/tools, Lark SDK client setup, account/app credentials, setup/config/status/probe, WebSocket/webhook monitor lifecycle, inbound bot message/card/reaction handling, allowlist/group policy/pairing, reply dispatch, outbound text/card/media/reactions, thread bindings/session routing, subagent hooks, and Feishu document/wiki/drive/permission/bitable/chat tools.

## Entry contracts

- Plugin id/channel id: `feishu` from `extensions/feishu/openclaw.plugin.json`.
- Package/install contract: `@openclaw/feishu` from `extensions/feishu/package.json`.
- Loader boundary: `extensions/feishu/index.ts` registers channel plugin, runtime, subagent hooks, and Feishu tool families.
- Skill directory: `extensions/feishu/skills/`.

## Primary behavior surfaces

- `extensions/feishu/src/channel.ts`: channel plugin composition and action/tool wiring.
- `extensions/feishu/src/monitor.ts`: provider monitor lifecycle.
- `extensions/feishu/src/bot.ts`: Feishu event/message parsing and inbound handling.
- `extensions/feishu/src/send.ts`, `media.ts`, `reply-dispatcher.ts`: outbound/reply/media/card delivery.
- `extensions/feishu/src/client.ts`: Lark client and WS/event dispatcher construction.
- `extensions/feishu/src/docx.ts`, `wiki.ts`, `drive.ts`, `perm.ts`, `bitable.ts`, `chat.ts`: registered Feishu tools.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.
