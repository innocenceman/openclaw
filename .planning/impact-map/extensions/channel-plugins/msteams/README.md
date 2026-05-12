# msteams Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Microsoft Teams channel plugin under `extensions/msteams/`.

## Entry contracts

- `extensions/msteams/openclaw.plugin.json` declares plugin id `msteams` and channel id `msteams`.
- `extensions/msteams/package.json` publishes `@openclaw/msteams`, advertises docs at `/channels/msteams`, and carries Teams SDK/Express runtime dependencies inside the plugin.
- `extensions/msteams/index.ts` registers `msteamsPlugin` and the runtime setter.
- `extensions/msteams/setup-entry.ts`, `api.ts`, and `runtime-api.ts` expose setup and runtime-facing surfaces without reaching outside the plugin boundary.

## Primary behavior surfaces

- Setup/config/credentials: `src/setup-core.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/token.ts`, and `src/secret-input.ts`.
- Channel adapter/runtime: `src/channel.ts`, `src/channel.runtime.ts`, `src/runtime.ts`, `src/probe.ts`, and directory adapters.
- Inbound webhook/SDK monitor: `src/monitor.ts`, `src/sdk.ts`, `src/messenger.ts`, `src/monitor-handler.ts`, `src/monitor-handler/message-handler.ts`, and `src/monitor-handler/inbound-media.ts`.
- Policy and routing: `src/policy.ts`, `src/resolve-allowlist.ts`, `src/inbound.ts`, `src/session-route.ts`, `src/conversation-store*.ts`, and `src/sent-message-cache.ts`.
- Graph/API/media: `src/graph.ts`, `src/graph-chat.ts`, `src/graph-users.ts`, `src/graph-upload.ts`, `src/attachments/**`, `src/file-consent*.ts`, and `src/media-helpers.ts`.
- Outbound/replies/actions: `src/send.ts`, `src/outbound.ts`, `src/reply-dispatcher.ts`, `src/streaming-message.ts`, `src/polls.ts`, `src/welcome-card.ts`, and feedback reflection files.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Teams gains separately owned implementation areas such as Graph attachment handling, Bot Framework monitor runtime, or poll/feedback action workflows.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Teams source and colocated tests.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `148` (删除 4，修改 85，新增 59).
- Target-existing changed paths listed here: `144`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `4`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/msteams/api.ts`
- `extensions/msteams/channel-plugin-api.ts`
- `extensions/msteams/config-api.ts`
- `extensions/msteams/contract-api.ts`
- `extensions/msteams/index.ts`
- `extensions/msteams/openclaw.plugin.json`
- `extensions/msteams/package.json`
- `extensions/msteams/runtime-api.ts`
- `extensions/msteams/secret-contract-api.ts`
- `extensions/msteams/setup-entry.ts`
- `extensions/msteams/src/approval-auth.ts`
- `... 另有 132 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `80`
- Target-existing changed paths reflected here: `75`
- Deleted or renamed-away paths omitted from active impact-map: `5`

### Target-version changed paths

- `extensions/msteams/api.ts`
- `extensions/msteams/channel-plugin-api.ts`
- `extensions/msteams/config-api.ts`
- `extensions/msteams/openclaw.plugin.json`
- `extensions/msteams/package.json`
- `extensions/msteams/runtime-api.ts`
- `extensions/msteams/setup-entry.ts`
- `extensions/msteams/setup-plugin-api.ts`
- `extensions/msteams/src/attachments.graph.test.ts`
- `extensions/msteams/src/attachments.ts`
- `extensions/msteams/src/attachments/download.ts`
- `extensions/msteams/src/attachments/shared.ts`
- `extensions/msteams/src/block-streaming-config.test.ts`
- `extensions/msteams/src/channel-api.ts`
- `extensions/msteams/src/channel.actions.test.ts`
- `extensions/msteams/src/channel.directory.test.ts`
- `extensions/msteams/src/channel.runtime.ts`
- `extensions/msteams/src/channel.setup.ts`
- `extensions/msteams/src/channel.test.ts`
- `extensions/msteams/src/channel.ts`
- `extensions/msteams/src/config-ui-hints.ts`
- `extensions/msteams/src/errors.ts`
- `extensions/msteams/src/feedback-reflection-prompt.ts`
- `extensions/msteams/src/feedback-reflection.ts`
- `extensions/msteams/src/file-consent-helpers.ts`
- `extensions/msteams/src/file-consent-invoke.ts`
- `extensions/msteams/src/file-consent.ts`
- `extensions/msteams/src/graph-group-management.ts`
- `extensions/msteams/src/graph-members.ts`
- `extensions/msteams/src/graph-teams.ts`
- `extensions/msteams/src/graph-upload.test.ts`
- `extensions/msteams/src/graph-upload.ts`
- `extensions/msteams/src/graph.ts`
- `extensions/msteams/src/inbound.ts`
- `extensions/msteams/src/mentions.ts`
- `extensions/msteams/src/messenger.test.ts`
- `extensions/msteams/src/messenger.ts`
- `extensions/msteams/src/monitor-handler.test-helpers.ts`
- `extensions/msteams/src/monitor-handler.ts`
- `extensions/msteams/src/monitor-handler/access.ts`
- … plus 35 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
