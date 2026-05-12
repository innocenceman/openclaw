# Reply Command Handlers Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `reply-orchestration/commands/`
- Leaf: `command-handlers/`

## Purpose

Reply command handlers for ACP, plugins, subagents, and runtime command execution.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `111` (新增 45，修改 63，删除 3).
- Target-existing changed paths listed here: `108`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `3`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/auto-reply/reply/commands-abort-trigger.test.ts`
- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp.ts`
- `src/auto-reply/reply/commands-acp/context.test.ts`
- `src/auto-reply/reply/commands-acp/context.ts`
- `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `src/auto-reply/reply/commands-acp/install-hints.test.ts`
- `src/auto-reply/reply/commands-acp/install-hints.ts`
- `src/auto-reply/reply/commands-acp/lifecycle.ts`
- `src/auto-reply/reply/commands-acp/runtime-options.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-acp/targets.ts`
- `... 另有 96 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `62`
- Target-existing changed paths reflected here: `61`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `src/auto-reply/reply/commands-acp.test.ts`
- `src/auto-reply/reply/commands-acp.ts`
- `src/auto-reply/reply/commands-acp/diagnostics.ts`
- `src/auto-reply/reply/commands-acp/shared.ts`
- `src/auto-reply/reply/commands-acp/targets.ts`
- `src/auto-reply/reply/commands-allowlist.test.ts`
- `src/auto-reply/reply/commands-allowlist.ts`
- `src/auto-reply/reply/commands-btw.test.ts`
- `src/auto-reply/reply/commands-compact.ts`
- `src/auto-reply/reply/commands-config.ts`
- `src/auto-reply/reply/commands-core.ts`
- `src/auto-reply/reply/commands-crestodian.ts`
- `src/auto-reply/reply/commands-diagnostics.test.ts`
- `src/auto-reply/reply/commands-diagnostics.ts`
- `src/auto-reply/reply/commands-dock.test.ts`
- `src/auto-reply/reply/commands-dock.ts`
- `src/auto-reply/reply/commands-export-common.ts`
- `src/auto-reply/reply/commands-export-session.test.ts`
- `src/auto-reply/reply/commands-export-session.ts`
- `src/auto-reply/reply/commands-export-trajectory.test.ts`
- `src/auto-reply/reply/commands-export-trajectory.ts`
- `src/auto-reply/reply/commands-gating.test.ts`
- `src/auto-reply/reply/commands-handlers.runtime.ts`
- `src/auto-reply/reply/commands-info.test.ts`
- `src/auto-reply/reply/commands-info.ts`
- `src/auto-reply/reply/commands-models.test.ts`
- `src/auto-reply/reply/commands-models.ts`
- `src/auto-reply/reply/commands-openclaw-cli.ts`
- `src/auto-reply/reply/commands-plugin.test.ts`
- `src/auto-reply/reply/commands-plugin.ts`
- `src/auto-reply/reply/commands-plugins.install.test.ts`
- `src/auto-reply/reply/commands-plugins.test.ts`
- `src/auto-reply/reply/commands-plugins.ts`
- `src/auto-reply/reply/commands-private-route.test.ts`
- `src/auto-reply/reply/commands-private-route.ts`
- `src/auto-reply/reply/commands-reset-hooks.test.ts`
- `src/auto-reply/reply/commands-reset-hooks.ts`
- `src/auto-reply/reply/commands-reset.ts`
- `src/auto-reply/reply/commands-session-abort.test-support.ts`
- `src/auto-reply/reply/commands-slash-parse.ts`
- … plus 21 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
