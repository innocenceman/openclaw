# zalo Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Zalo Bot API channel plugin under `extensions/zalo/`.

## Entry contracts

- `extensions/zalo/openclaw.plugin.json` declares plugin id `zalo` and channel id `zalo`.
- `extensions/zalo/package.json` publishes `@openclaw/zalo`, advertises docs at `/channels/zalo`, alias `zl`, and local runtime dependencies `undici`/`zod`.
- `extensions/zalo/index.ts` registers `zaloPlugin` and the runtime setter.
- `extensions/zalo/setup-entry.ts`, `api.ts`, and `runtime-api.ts` expose setup/runtime-facing surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/accounts.ts`, `src/config-schema.ts`, `src/setup-core.ts`, `src/setup-surface.ts`, `src/secret-input.ts`, `src/token.ts`, `src/types.ts`, and `src/status-issues.ts`.
- Channel adapter/runtime: `src/channel.ts`, `src/channel.runtime.ts`, `src/runtime.ts`, `src/session-route.ts`, `src/probe.ts`, and `src/proxy.ts`.
- Inbound monitor: `src/monitor.ts`, `src/monitor.webhook.ts`, group-policy tests, lifecycle tests, pairing/reply-once lifecycle tests, and image polling tests.
- Outbound/actions/API: `src/send.ts`, `src/api.ts`, `src/actions.ts`, `src/actions.runtime.ts`, and proxy-aware fetch.
- Group/direct policy: scoped DM policy, groupPolicy/groupAllowFrom, requireMention, directory allowFrom resolution, and status issue collection.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Zalo gains separately owned polling, webhook, or send/API subsystems with independent validation ownership.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Zalo source and colocated tests.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `65` (删除 4，修改 42，新增 18，重命名/移动 1).
- Target-existing changed paths listed here: `61`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `4`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/zalo/README.md`
- `extensions/zalo/api.ts`
- `extensions/zalo/channel-plugin-api.ts`
- `extensions/zalo/contract-api.ts`
- `extensions/zalo/index.test.ts`
- `extensions/zalo/index.ts`
- `extensions/zalo/openclaw.plugin.json`
- `extensions/zalo/package.json`
- `extensions/zalo/runtime-api.test.ts`
- `extensions/zalo/runtime-api.ts`
- `extensions/zalo/secret-contract-api.ts`
- `extensions/zalo/setup-api.ts`
- `... 另有 49 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `34`
- Target-existing changed paths reflected here: `32`
- Deleted or renamed-away paths omitted from active impact-map: `2`

### Target-version changed paths

- `extensions/zalo/api.ts`
- `extensions/zalo/index.test.ts`
- `extensions/zalo/openclaw.plugin.json`
- `extensions/zalo/package.json`
- `extensions/zalo/runtime-api.test.ts`
- `extensions/zalo/runtime-api.ts`
- `extensions/zalo/src/accounts.ts`
- `extensions/zalo/src/actions.ts`
- `extensions/zalo/src/channel.directory.test.ts`
- `extensions/zalo/src/channel.startup.test.ts`
- `extensions/zalo/src/channel.ts`
- `extensions/zalo/src/monitor.image.polling.test.ts`
- `extensions/zalo/src/monitor.lifecycle.test.ts`
- `extensions/zalo/src/monitor.pairing.lifecycle.test.ts`
- `extensions/zalo/src/monitor.polling.media-reply.test.ts`
- `extensions/zalo/src/monitor.reply-once.lifecycle.test.ts`
- `extensions/zalo/src/monitor.ts`
- `extensions/zalo/src/monitor.webhook.test.ts`
- `extensions/zalo/src/monitor.webhook.ts`
- `extensions/zalo/src/outbound-payload.contract.test.ts`
- `extensions/zalo/src/runtime-api.ts`
- `extensions/zalo/src/runtime-support.ts`
- `extensions/zalo/src/secret-contract.ts`
- `extensions/zalo/src/secret-input.ts`
- `extensions/zalo/src/send.ts`
- `extensions/zalo/src/setup-status.test.ts`
- `extensions/zalo/src/setup-surface.test.ts`
- `extensions/zalo/src/status-issues.test.ts`
- `extensions/zalo/src/test-support/lifecycle-test-support.ts`
- `extensions/zalo/src/test-support/monitor-mocks-test-support.ts`
- `extensions/zalo/src/token.ts`
- `extensions/zalo/src/types.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
