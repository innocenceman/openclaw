# mattermost Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Mattermost channel plugin under `extensions/mattermost/`.

## Entry contracts

- `extensions/mattermost/openclaw.plugin.json` declares plugin id `mattermost` and channel id `mattermost`.
- `extensions/mattermost/package.json` publishes `@openclaw/mattermost`, points install docs to `/channels/mattermost`, and keeps runtime dependencies local to the plugin.
- `extensions/mattermost/index.ts` registers the channel plugin and wires runtime state plus the slash-command HTTP route.
- `extensions/mattermost/api.ts` and `extensions/mattermost/runtime-api.ts` are the external/local barrels for plugin SDK-facing imports.

## Primary behavior surfaces

- Setup/config/account resolution: `src/setup-core.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, and `src/mattermost/accounts.ts`.
- Inbound monitor/runtime: `src/mattermost/monitor.ts`, `src/mattermost/monitor-websocket.ts`, `src/mattermost/monitor-gating.ts`, `src/mattermost/monitor-auth.ts`, `src/mattermost/monitor-resources.ts`, and `src/mattermost/monitor-slash.ts`.
- Slash commands/interactions: `src/mattermost/slash-commands.ts`, `src/mattermost/slash-state.ts`, `src/session-route.ts`, `src/mattermost/interactions.ts`, and `src/mattermost/model-picker.ts`.
- Outbound delivery and targets: `src/mattermost/send.ts`, `src/mattermost/reply-delivery.ts`, `src/mattermost/target-resolution.ts`, `src/mattermost/reactions.ts`, and `src/mattermost/directory.ts`.
- Shared normalization/group mention helpers: `src/normalize.ts` and `src/group-mentions.ts`.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Mattermost gains separately owned submodules, such as independently versioned slash-command routing, media resources, or websocket monitor runtime.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Mattermost source and colocated tests.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `88` (新增 26，修改 57，删除 5).
- Target-existing changed paths listed here: `83`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `5`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/mattermost/channel-plugin-api.ts`
- `extensions/mattermost/channel-plugin-runtime.ts`
- `extensions/mattermost/contract-api.ts`
- `extensions/mattermost/gateway-auth-api.ts`
- `extensions/mattermost/index.ts`
- `extensions/mattermost/openclaw.plugin.json`
- `extensions/mattermost/package.json`
- `extensions/mattermost/policy-api.ts`
- `extensions/mattermost/runtime-api.ts`
- `extensions/mattermost/secret-contract-api.ts`
- `extensions/mattermost/setup-entry.ts`
- `extensions/mattermost/slash-route-api.ts`
- `... 另有 71 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
