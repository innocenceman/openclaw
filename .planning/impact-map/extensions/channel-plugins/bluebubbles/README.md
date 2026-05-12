# BlueBubbles Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled BlueBubbles channel plugin in `extensions/bluebubbles/`.

This leaf covers the BlueBubbles plugin manifest/install metadata, runtime injection, setup/config, account/server credential resolution, webhook monitor/auth/routing, inbound normalization/debounce/reply cache/self-chat reflection guard, inbound access and pairing, OpenClaw routing/reply pipeline, outbound text/media/attachments/reactions/chat private API actions, target/session routing, status/probe, and group policy.

## Why this remains one leaf

BlueBubbles has several internal behavior paths, but they share one installed plugin, one channel id (`bluebubbles`), one BlueBubbles server account config model, and one webhook/send runtime boundary. Split only if webhook processing, media/attachment delivery, or private API chat actions gain independent ownership or a separate public contract.

## Entry contracts

- Plugin id/channel id: `bluebubbles` from `extensions/bluebubbles/openclaw.plugin.json`.
- Package/install contract: `@openclaw/bluebubbles` from `extensions/bluebubbles/package.json`.
- Loader boundary: `extensions/bluebubbles/index.ts` registers `bluebubblesPlugin` and `setBlueBubblesRuntime`.
- Public local barrels: `extensions/bluebubbles/api.ts`, `extensions/bluebubbles/runtime-api.ts`, and `extensions/bluebubbles/src/runtime-api.ts`.

## Primary behavior surfaces

- `extensions/bluebubbles/src/channel.ts`: channel plugin composition, allowlist/security/status/gateway/outbound/action wiring.
- `extensions/bluebubbles/src/monitor.ts`: webhook target registration, auth, body parsing, event filtering, and dispatch to message/reaction processors.
- `extensions/bluebubbles/src/monitor-processing.ts`: inbound authorization, pairing, route/session context, reply pipeline, history/reply/self-chat caches, outbound id tracking, reactions.
- `extensions/bluebubbles/src/send.ts`: outbound text sends, chat GUID resolution, chat creation, reply threading and message effects via Private API.
- `extensions/bluebubbles/src/media-send.ts` and `extensions/bluebubbles/src/attachments.ts`: outbound media and attachment download/send boundaries.
- `extensions/bluebubbles/src/setup-surface.ts`: setup wizard for server URL, password, webhook path, and allowFrom.

## Detail files

- `file-roles.md`: file/path ownership and impact radius.
- `code-paths.md`: traceable behavior paths and handoff boundaries.
- `change-to-test.md`: targeted validation ladder for common changes.

## Current validation state

This map was created from source inspection only. No product code was modified, no tests/builds were run, and no GitNexus/code-review-graph index was run for this leaf.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `88` (修改 56，新增 25，删除 5，重命名/移动 2).
- Target-existing changed paths listed here: `83`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `5`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/bluebubbles/README.md`
- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/channel-plugin-api.ts`
- `extensions/bluebubbles/contract-api.ts`
- `extensions/bluebubbles/index.ts`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/runtime-api.ts`
- `extensions/bluebubbles/secret-contract-api.ts`
- `extensions/bluebubbles/setup-entry.ts`
- `extensions/bluebubbles/src/account-resolve.test.ts`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/accounts-normalization.ts`
- `... 另有 71 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `53`
- Target-existing changed paths reflected here: `53`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/bluebubbles/api.ts`
- `extensions/bluebubbles/doctor-contract-api.ts`
- `extensions/bluebubbles/openclaw.plugin.json`
- `extensions/bluebubbles/package.json`
- `extensions/bluebubbles/src/account-resolve.ts`
- `extensions/bluebubbles/src/accounts.ts`
- `extensions/bluebubbles/src/actions.test.ts`
- `extensions/bluebubbles/src/actions.ts`
- `extensions/bluebubbles/src/attachments.test.ts`
- `extensions/bluebubbles/src/attachments.ts`
- `extensions/bluebubbles/src/channel-shared.ts`
- `extensions/bluebubbles/src/channel.status.test.ts`
- `extensions/bluebubbles/src/channel.ts`
- `extensions/bluebubbles/src/client.ts`
- `extensions/bluebubbles/src/config-apply.ts`
- `extensions/bluebubbles/src/config-schema.ts`
- `extensions/bluebubbles/src/conversation-bindings.test.ts`
- `extensions/bluebubbles/src/conversation-bindings.ts`
- `extensions/bluebubbles/src/conversation-route.test.ts`
- `extensions/bluebubbles/src/conversation-route.ts`
- `extensions/bluebubbles/src/group-policy.ts`
- `extensions/bluebubbles/src/history.ts`
- `extensions/bluebubbles/src/inbound-dedupe.ts`
- `extensions/bluebubbles/src/media-send.test.ts`
- `extensions/bluebubbles/src/media-send.ts`
- `extensions/bluebubbles/src/monitor-debounce.ts`
- `extensions/bluebubbles/src/monitor-normalize.test.ts`
- `extensions/bluebubbles/src/monitor-normalize.ts`
- `extensions/bluebubbles/src/monitor-processing-api.ts`
- `extensions/bluebubbles/src/monitor-processing-chat-resolve.test.ts`
- `extensions/bluebubbles/src/monitor-processing.ts`
- `extensions/bluebubbles/src/monitor-reply-cache.test.ts`
- `extensions/bluebubbles/src/monitor-reply-cache.ts`
- `extensions/bluebubbles/src/monitor-reply-fetch.test.ts`
- `extensions/bluebubbles/src/monitor-reply-fetch.ts`
- `extensions/bluebubbles/src/monitor-shared.ts`
- `extensions/bluebubbles/src/monitor.test.ts`
- `extensions/bluebubbles/src/monitor.ts`
- `extensions/bluebubbles/src/monitor.webhook-auth.test.ts`
- `extensions/bluebubbles/src/monitor.webhook.test-helpers.ts`
- … plus 13 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
