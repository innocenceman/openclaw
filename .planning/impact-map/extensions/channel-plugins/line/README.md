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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `69` (修改 50，新增 15，删除 3，重命名/移动 1).
- Target-existing changed paths listed here: `66`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `3`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 54 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
