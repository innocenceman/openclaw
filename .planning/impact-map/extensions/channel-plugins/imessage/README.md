# iMessage Channel Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for the bundled iMessage channel plugin in `extensions/imessage/`.

Covers plugin registration, setup/config/account resolution, RPC client/probe, monitor provider lifecycle, notification parsing, inbound access/mention/command gating, echo/reflection/self-chat guards, reply delivery, outbound text/media adapter, target parsing/session routing, and iMessage-specific sanitization.

## Entry contracts

- Plugin id/channel id: `imessage`.
- Package contract: `@openclaw/imessage` private workspace plugin.
- Loader boundary: `extensions/imessage/index.ts` registers `imessagePlugin` and `setIMessageRuntime`.

## Primary behavior surfaces

- `extensions/imessage/src/channel.ts`: channel composition.
- `extensions/imessage/src/client.ts`: imsg RPC client.
- `extensions/imessage/src/monitor/monitor-provider.ts`: monitor lifecycle.
- `extensions/imessage/src/monitor/inbound-processing.ts`: inbound decision/context.
- `extensions/imessage/src/send.ts` and `outbound-adapter.ts`: outbound delivery.

## Current validation state

Source inspection only; no product code, tests/builds, or graph indexes were run.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `73` (修改 33，新增 33，删除 7).
- Target-existing changed paths listed here: `66`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `7`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/imessage/api.ts`
- `extensions/imessage/channel-plugin-api.ts`
- `extensions/imessage/config-api.ts`
- `extensions/imessage/contract-api.ts`
- `extensions/imessage/doctor-contract-api.ts`
- `extensions/imessage/index.ts`
- `extensions/imessage/media-contract-api.ts`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/secret-contract-api.ts`
- `extensions/imessage/setup-entry.ts`
- `extensions/imessage/src/account-types.ts`
- `... 另有 54 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `41`
- Target-existing changed paths reflected here: `41`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/imessage/api.ts`
- `extensions/imessage/config-api.ts`
- `extensions/imessage/openclaw.plugin.json`
- `extensions/imessage/package.json`
- `extensions/imessage/runtime-api.ts`
- `extensions/imessage/src/account-types.ts`
- `extensions/imessage/src/channel-api.ts`
- `extensions/imessage/src/channel-inbound-roots.contract.test.ts`
- `extensions/imessage/src/channel.runtime.ts`
- `extensions/imessage/src/client.ts`
- `extensions/imessage/src/config-accessors.ts`
- `extensions/imessage/src/conversation-bindings.ts`
- `extensions/imessage/src/conversation-route.test.ts`
- `extensions/imessage/src/conversation-route.ts`
- `extensions/imessage/src/imessage.test-plugin.ts`
- `extensions/imessage/src/media-contract.ts`
- `extensions/imessage/src/monitor.gating.test.ts`
- `extensions/imessage/src/monitor.watch-subscribe-retry.test.ts`
- `extensions/imessage/src/monitor/abort-handler.ts`
- `extensions/imessage/src/monitor/deliver.runtime.ts`
- `extensions/imessage/src/monitor/deliver.ts`
- `extensions/imessage/src/monitor/echo-cache.ts`
- `extensions/imessage/src/monitor/inbound-processing.test.ts`
- `extensions/imessage/src/monitor/inbound-processing.ts`
- `extensions/imessage/src/monitor/loop-rate-limiter.ts`
- `extensions/imessage/src/monitor/monitor-provider.echo-cache.test.ts`
- `extensions/imessage/src/monitor/monitor-provider.ts`
- `extensions/imessage/src/monitor/reflection-guard.ts`
- `extensions/imessage/src/monitor/self-chat-cache.ts`
- `extensions/imessage/src/monitor/self-chat-dedupe.test.ts`
- `extensions/imessage/src/monitor/types.ts`
- `extensions/imessage/src/monitor/watch-error-log.ts`
- `extensions/imessage/src/normalize.ts`
- `extensions/imessage/src/probe.ts`
- `extensions/imessage/src/runtime.ts`
- `extensions/imessage/src/send.ts`
- `extensions/imessage/src/setup-core.ts`
- `extensions/imessage/src/setup-surface.ts`
- `extensions/imessage/src/shared.ts`
- `extensions/imessage/src/status.test.ts`
- … plus 1 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
