# signal Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the Signal channel plugin under `extensions/signal/`.

## Entry contracts

- `extensions/signal/openclaw.plugin.json` declares plugin id `signal` and channel id `signal`.
- `extensions/signal/package.json` defines the bundled/private `@openclaw/signal` plugin and setup entry.
- `extensions/signal/index.ts` registers `signalPlugin` and the runtime setter.
- `extensions/signal/setup-entry.ts` registers the setup-specific plugin from `src/channel.setup.ts`.
- `extensions/signal/api.ts`, `runtime-api.ts`, and `src/runtime-api.ts` expose Signal-specific API/runtime surfaces.

## Primary behavior surfaces

- Setup/config/accounts: `src/channel.setup.ts`, `src/setup-core.ts`, `src/setup-surface.ts`, `src/config-schema.ts`, `src/accounts.ts`, `src/shared.ts`, and `src/plugin-shared.ts`.
- Signal REST/RPC runtime: `src/client.ts`, `src/rpc-context.ts`, `src/probe.ts`, `src/daemon.ts`, `src/sse-reconnect.ts`, and `src/runtime.ts`.
- Channel adapter/outbound: `src/channel.ts`, `src/channel.runtime.ts`, `src/outbound-adapter.ts`, `src/outbound-session.ts`, `src/send.ts`, `src/send-reactions.ts`, and `src/format.ts`.
- Inbound monitor: `src/monitor.ts`, `src/monitor/access-policy.ts`, `src/monitor/event-handler.ts`, `src/monitor/mentions.ts`, and tool-result test harnesses.
- Message actions and reactions: `src/message-actions.ts`, `src/reaction-level.ts`, and reaction send helpers.

## Leaf status

This is a leaf module in the channel-plugin taxonomy. Split further only if Signal gains separately owned monitor/event-handler, REST client, or setup/daemon management boundaries.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current evidence limits

No product tests/builds/graph indexes were run while deepening this leaf. The map is based on repo-native structural inspection of Signal source and colocated tests.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `69` (修改 41，新增 18，删除 8，重命名/移动 2).
- Target-existing changed paths listed here: `61`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `8`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/signal/api.ts`
- `extensions/signal/channel-entry.ts`
- `extensions/signal/channel-plugin-api.ts`
- `extensions/signal/config-api.ts`
- `extensions/signal/contract-api.ts`
- `extensions/signal/index.ts`
- `extensions/signal/package.json`
- `extensions/signal/runtime-api.ts`
- `extensions/signal/secret-contract-api.ts`
- `extensions/signal/setup-entry.ts`
- `extensions/signal/src/account-types.ts`
- `extensions/signal/src/accounts.test.ts`
- `... 另有 49 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `38`
- Target-existing changed paths reflected here: `38`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/signal/api.ts`
- `extensions/signal/config-api.ts`
- `extensions/signal/openclaw.plugin.json`
- `extensions/signal/package.json`
- `extensions/signal/runtime-api.ts`
- `extensions/signal/src/account-types.ts`
- `extensions/signal/src/channel.ts`
- `extensions/signal/src/client.test.ts`
- `extensions/signal/src/client.ts`
- `extensions/signal/src/core.test.ts`
- `extensions/signal/src/daemon.ts`
- `extensions/signal/src/format.ts`
- `extensions/signal/src/inbound-context.contract.test.ts`
- `extensions/signal/src/install-signal-cli.test.ts`
- `extensions/signal/src/install-signal-cli.ts`
- `extensions/signal/src/message-actions.test.ts`
- `extensions/signal/src/monitor.tool-result.autostart.test.ts`
- `extensions/signal/src/monitor.tool-result.pairs-uuid-only-senders-uuid-allowlist-entry.test.ts`
- `extensions/signal/src/monitor.tool-result.sends-tool-summaries-responseprefix.test.ts`
- `extensions/signal/src/monitor.tool-result.test-harness.ts`
- `extensions/signal/src/monitor.ts`
- `extensions/signal/src/monitor/access-policy.test.ts`
- `extensions/signal/src/monitor/access-policy.ts`
- `extensions/signal/src/monitor/event-handler.inbound-context.test.ts`
- `extensions/signal/src/monitor/event-handler.mention-gating.test.ts`
- `extensions/signal/src/monitor/event-handler.ts`
- `extensions/signal/src/monitor/event-handler.types.ts`
- `extensions/signal/src/monitor/inbound-context.ts`
- `extensions/signal/src/reaction-level.ts`
- `extensions/signal/src/runtime-api.ts`
- `extensions/signal/src/runtime.ts`
- `extensions/signal/src/send-reactions.test.ts`
- `extensions/signal/src/send-reactions.ts`
- `extensions/signal/src/send.ts`
- `extensions/signal/src/setup-core.ts`
- `extensions/signal/src/setup-surface.ts`
- `extensions/signal/src/shared.ts`
- `extensions/signal/src/sse-reconnect.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
