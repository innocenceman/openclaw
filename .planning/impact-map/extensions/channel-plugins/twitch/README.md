# twitch Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Twitch chat channel plugin under `extensions/twitch/`.

## Entry contracts

- `extensions/twitch/openclaw.plugin.json` declares plugin id `twitch` and channel id `twitch`.
- `extensions/twitch/package.json` defines `@openclaw/twitch`, Twurple runtime dependencies, docs at `/channels/twitch`, and alias `twitch-chat`.
- `extensions/twitch/index.ts` registers `twitchPlugin`, runtime setter, and exports `monitorTwitchProvider`.
- `extensions/twitch/api.ts` and `runtime-api.ts` expose runtime-facing surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/config-schema.ts`, `src/config.ts`, `src/setup-surface.ts`, `src/types.ts`, and `src/utils/twitch.ts`.
- Channel/plugin/status: `src/plugin.ts`, `src/status.ts`, `src/probe.ts`, `src/runtime.ts`, and `src/resolver.ts`.
- Twitch client/auth: `src/twitch-client.ts`, `src/token.ts`, and Twurple API/Auth/Chat dependencies.
- Inbound monitor/access: `src/monitor.ts` and `src/access-control.ts` for roles, allowlists, mentions, and message handling.
- Outbound/actions: `src/outbound.ts`, `src/send.ts`, `src/actions.ts`, and `src/utils/markdown.ts`.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Twitch gains separately owned EventSub, IRC monitor, or token-refresh subsystems with distinct validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Twitch source and colocated tests.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `36` (删除 2，修改 28，新增 6).
- Target-existing changed paths listed here: `34`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/twitch/README.md`
- `extensions/twitch/api.ts`
- `extensions/twitch/channel-plugin-api.ts`
- `extensions/twitch/index.test.ts`
- `extensions/twitch/index.ts`
- `extensions/twitch/openclaw.plugin.json`
- `extensions/twitch/package.json`
- `extensions/twitch/setup-entry.ts`
- `extensions/twitch/setup-plugin-api.ts`
- `extensions/twitch/src/access-control.ts`
- `extensions/twitch/src/actions.test.ts`
- `extensions/twitch/src/actions.ts`
- `... 另有 22 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
