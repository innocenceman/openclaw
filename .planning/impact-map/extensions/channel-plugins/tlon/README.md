# tlon Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Tlon/Urbit channel plugin under `extensions/tlon/`.

## Entry contracts

- `extensions/tlon/openclaw.plugin.json` declares plugin id `tlon`, channel id `tlon`, and bundled skill `node_modules/@tloncorp/tlon-skill`.
- `extensions/tlon/package.json` publishes `@openclaw/tlon`, advertises docs at `/channels/tlon`, and keeps Urbit/Tlon/S3 runtime dependencies local to the plugin.
- `extensions/tlon/index.ts` registers `tlonPlugin`, runtime setter, and an allowlisted `tlon` CLI tool wrapper.
- `extensions/tlon/setup-entry.ts`, `setup-api.ts`, `api.ts`, and `runtime-api.ts` expose setup/runtime-facing surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/setup-core.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/types.ts`, `src/account-fields.ts`, and `src/settings.ts`.
- Channel adapter/runtime: `src/channel.ts`, `src/channel.runtime.ts`, `src/runtime.ts`, `src/session-route.ts`, and `src/targets.ts`.
- Monitor/runtime: `src/monitor/**` for authorization, approvals, history, discovery, cites, media, settings helpers, and processed-message tracking.
- Urbit API: `src/urbit/**` for base URL validation, auth, fetch/context, SSE, sends, uploads, story/channel ops, foreigns, and errors.
- Tooling: `index.ts` CLI allowlist and shell-split/run wrapper for `@tloncorp/tlon-skill`.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Tlon gains independently owned Urbit API, monitor authorization, or CLI-tool surfaces with distinct validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Tlon source and colocated tests.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `28` (修改 24，新增 3，删除 1).
- Target-existing changed paths listed here: `27`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/tlon/api.ts`
- `extensions/tlon/channel-plugin-api.ts`
- `extensions/tlon/index.ts`
- `extensions/tlon/package.json`
- `extensions/tlon/runtime-api.ts`
- `extensions/tlon/setup-entry.ts`
- `extensions/tlon/src/channel.runtime.ts`
- `extensions/tlon/src/channel.ts`
- `extensions/tlon/src/config-schema.ts`
- `extensions/tlon/src/monitor/authorization.ts`
- `extensions/tlon/src/monitor/cites.ts`
- `extensions/tlon/src/monitor/index.ts`
- `... 另有 15 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `21`
- Target-existing changed paths reflected here: `21`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/tlon/api.ts`
- `extensions/tlon/doctor-contract-api.ts`
- `extensions/tlon/index.ts`
- `extensions/tlon/openclaw.plugin.json`
- `extensions/tlon/package.json`
- `extensions/tlon/runtime-api.ts`
- `extensions/tlon/src/channel.runtime.ts`
- `extensions/tlon/src/channel.ts`
- `extensions/tlon/src/config-schema.ts`
- `extensions/tlon/src/monitor/authorization.ts`
- `extensions/tlon/src/monitor/index.ts`
- `extensions/tlon/src/monitor/processed-messages.ts`
- `extensions/tlon/src/monitor/utils.ts`
- `extensions/tlon/src/settings.ts`
- `extensions/tlon/src/setup-core.ts`
- `extensions/tlon/src/targets.ts`
- `extensions/tlon/src/urbit/auth.ssrf.test.ts`
- `extensions/tlon/src/urbit/auth.ts`
- `extensions/tlon/src/urbit/base-url.ts`
- `extensions/tlon/src/urbit/send.ts`
- `extensions/tlon/src/urbit/sse-client.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
