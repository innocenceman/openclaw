# Core Abstractions Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `channel-abstraction/`
- Leaf: `core-abstractions/`

## Purpose

Core shared channel config, command gating, session metadata, and target helpers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `channel-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `59` (重命名/移动 1，修改 42，新增 13，删除 3).
- Target-existing changed paths listed here: `55`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `4`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/channels/AGENTS.md`
- `src/channels/account-inspection.ts`
- `src/channels/account-snapshot-fields.test.ts`
- `src/channels/account-snapshot-fields.ts`
- `src/channels/account-summary.ts`
- `src/channels/allow-from.test.ts`
- `src/channels/allow-from.ts`
- `src/channels/bundled-channel-catalog-read.test.ts`
- `src/channels/bundled-channel-catalog-read.ts`
- `src/channels/channel-config.ts`
- `src/channels/channels-misc.test.ts`
- `src/channels/chat-meta-shared.ts`
- `... 另有 43 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `channel-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `36`
- Target-existing changed paths reflected here: `36`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/channels/account-snapshot-fields.test.ts`
- `src/channels/account-snapshot-fields.ts`
- `src/channels/ack-reactions.test.ts`
- `src/channels/ack-reactions.ts`
- `src/channels/allow-from.ts`
- `src/channels/bundled-channel-catalog-read.fail-soft.test.ts`
- `src/channels/bundled-channel-catalog-read.test.ts`
- `src/channels/bundled-channel-catalog-read.ts`
- `src/channels/channels-misc.test.ts`
- `src/channels/config-presence.test.ts`
- `src/channels/config-presence.ts`
- `src/channels/conversation-binding-context.ts`
- `src/channels/conversation-resolution.test.ts`
- `src/channels/conversation-resolution.ts`
- `src/channels/ids.test.ts`
- `src/channels/registry-normalize.ts`
- `src/channels/registry.ts`
- `src/channels/run-state-machine.ts`
- `src/channels/session.test.ts`
- `src/channels/session.ts`
- `src/channels/session.types.ts`
- `src/channels/status-reactions.slack-lifecycle.test.ts`
- `src/channels/status-reactions.test.ts`
- `src/channels/status-reactions.ts`
- `src/channels/thread-bindings-policy.test.ts`
- `src/channels/thread-bindings-policy.ts`
- `src/channels/turn/context.test.ts`
- `src/channels/turn/context.ts`
- `src/channels/turn/dispatch-result.ts`
- `src/channels/turn/kernel.test.ts`
- `src/channels/turn/kernel.ts`
- `src/channels/turn/types.ts`
- `src/channels/typing-lifecycle.ts`
- `src/channels/typing-start-guard.ts`
- `src/channels/typing.test.ts`
- `src/channels/typing.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
