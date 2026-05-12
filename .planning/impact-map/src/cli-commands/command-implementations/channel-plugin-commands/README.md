# Channel Plugin Commands Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `cli-commands/command-implementations/`
- Leaf: `channel-plugin-commands/`

## Purpose

Channels, channel setup, and plugin-facing channel command handlers.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `cli-command-surface`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `38` (修改 29，新增 9).
- Target-existing changed paths listed here: `38`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/commands/channel-account-context.test.ts`
- `src/commands/channel-account-context.ts`
- `src/commands/channel-setup/channel-plugin-resolution.test.ts`
- `src/commands/channel-setup/channel-plugin-resolution.ts`
- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-setup/registry.test.ts`
- `src/commands/channel-setup/registry.ts`
- `src/commands/channel-setup/trusted-catalog.ts`
- `src/commands/channel-setup/workspace-shadow-bypass.test.ts`
- `... 另有 26 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `cli-command-surface`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `30`
- Target-existing changed paths reflected here: `29`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `src/commands/channel-account-context.ts`
- `src/commands/channel-setup/channel-plugin-resolution.test.ts`
- `src/commands/channel-setup/channel-plugin-resolution.ts`
- `src/commands/channel-setup/discovery.test.ts`
- `src/commands/channel-setup/discovery.ts`
- `src/commands/channel-setup/plugin-install.test.ts`
- `src/commands/channel-setup/plugin-install.ts`
- `src/commands/channel-setup/registry.ts`
- `src/commands/channel-setup/workspace-shadow-bypass.test.ts`
- `src/commands/channel-test-registry.ts`
- `src/commands/channels.add.test.ts`
- `src/commands/channels.adds-non-default-telegram-account.test.ts`
- `src/commands/channels.config-only-status-output.test.ts`
- `src/commands/channels.list.auth-profiles.test.ts`
- `src/commands/channels.logs.test.ts`
- `src/commands/channels.remove.test.ts`
- `src/commands/channels.resolve.test.ts`
- `src/commands/channels.surfaces-signal-runtime-errors-channels-status-output.test.ts`
- `src/commands/channels/add.ts`
- `src/commands/channels/capabilities.test.ts`
- `src/commands/channels/capabilities.ts`
- `src/commands/channels/list.ts`
- `src/commands/channels/logs.ts`
- `src/commands/channels/remove.ts`
- `src/commands/channels/resolve.ts`
- `src/commands/channels/runtime-label.ts`
- `src/commands/channels/shared.ts`
- `src/commands/channels/status-config-format.ts`
- `src/commands/channels/status.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
