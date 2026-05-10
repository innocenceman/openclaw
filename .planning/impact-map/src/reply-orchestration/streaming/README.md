# Streaming Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `reply-orchestration/`
- Leaf: `streaming/`

## Purpose

Block streaming, heartbeat typing, inline action streaming, and raw-body shaping.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `27` (新增 2，修改 21，删除 3，重命名/移动 1).
- Target-existing changed paths listed here: `23`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `4`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/auto-reply/heartbeat-filter.test.ts`
- `src/auto-reply/heartbeat-filter.ts`
- `src/auto-reply/heartbeat.test.ts`
- `src/auto-reply/heartbeat.ts`
- `src/auto-reply/reply.block-streaming.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-harness.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-mocks.ts`
- `src/auto-reply/reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.shows-current-verbose-level-verbose-has-no.test.ts`
- `src/auto-reply/reply.directive.parse.test.ts`
- `src/auto-reply/reply.media-note.test.ts`
- `src/auto-reply/reply.raw-body.test.ts`
- `... 另有 11 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
