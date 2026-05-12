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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `82` (修改 52，新增 17，删除 1，重命名/移动 12).
- Target-existing changed paths listed here: `75`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `7`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/feishu/api.ts`
- `extensions/feishu/channel-entry.ts`
- `extensions/feishu/channel-plugin-api.ts`
- `extensions/feishu/contract-api.ts`
- `extensions/feishu/index.ts`
- `extensions/feishu/openclaw.plugin.json`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/secret-contract-api.ts`
- `extensions/feishu/security-contract-api.ts`
- `extensions/feishu/session-key-api.ts`
- `extensions/feishu/setup-api.ts`
- `... 另有 63 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `46`
- Target-existing changed paths reflected here: `45`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `extensions/feishu/api.ts`
- `extensions/feishu/openclaw.plugin.json`
- `extensions/feishu/package.json`
- `extensions/feishu/runtime-api.ts`
- `extensions/feishu/src/bot.broadcast.test.ts`
- `extensions/feishu/src/bot.card-action.test.ts`
- `extensions/feishu/src/bot.checkBotMentioned.test.ts`
- `extensions/feishu/src/bot.helpers.test.ts`
- `extensions/feishu/src/bot.test.ts`
- `extensions/feishu/src/bot.ts`
- `extensions/feishu/src/card-action.ts`
- `extensions/feishu/src/card-interaction.ts`
- `extensions/feishu/src/card-ux-launcher.test.ts`
- `extensions/feishu/src/card-ux-launcher.ts`
- `extensions/feishu/src/channel.test.ts`
- `extensions/feishu/src/channel.ts`
- `extensions/feishu/src/client.test.ts`
- `extensions/feishu/src/client.ts`
- `extensions/feishu/src/config-schema.ts`
- `extensions/feishu/src/docx-color-text.ts`
- `extensions/feishu/src/docx-table-ops.ts`
- `extensions/feishu/src/docx-types.ts`
- `extensions/feishu/src/docx.test.ts`
- `extensions/feishu/src/docx.ts`
- `extensions/feishu/src/monitor.account.ts`
- `extensions/feishu/src/monitor.acp-init-failure.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.bot-identity.ts`
- `extensions/feishu/src/monitor.bot-menu-handler.ts`
- `extensions/feishu/src/monitor.bot-menu.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.broadcast.reply-once.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.card-action.lifecycle.test-support.ts`
- `extensions/feishu/src/monitor.cleanup.test.ts`
- `extensions/feishu/src/monitor.comment.test.ts`
- `extensions/feishu/src/monitor.comment.ts`
- `extensions/feishu/src/monitor.message-handler.ts`
- `extensions/feishu/src/monitor.reaction.test.ts`
- `extensions/feishu/src/monitor.startup.test.ts`
- `extensions/feishu/src/monitor.startup.ts`
- `extensions/feishu/src/monitor.transport.ts`
- `extensions/feishu/src/monitor.webhook-security.test.ts`
- … plus 5 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
