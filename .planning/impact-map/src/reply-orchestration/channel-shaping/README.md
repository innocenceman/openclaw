# Channel Shaping Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `reply-orchestration/`
- Leaf: `channel-shaping/`

## Purpose

Chunking, envelope shaping, media-note formatting, and inbound metadata shaping before channel send.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `11` (修改 9，新增 2).
- Target-existing changed paths listed here: `11`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/auto-reply/chunk.ts`
- `src/auto-reply/envelope.ts`
- `src/auto-reply/media-note.test.ts`
- `src/auto-reply/media-note.ts`
- `src/auto-reply/reply/inbound-context.test.ts`
- `src/auto-reply/reply/inbound-context.ts`
- `src/auto-reply/reply/inbound-dedupe.test.ts`
- `src/auto-reply/reply/inbound-dedupe.ts`
- `src/auto-reply/reply/inbound-media.ts`
- `src/auto-reply/reply/inbound-meta.test.ts`
- `src/auto-reply/reply/inbound-meta.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `5`
- Target-existing changed paths reflected here: `5`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/auto-reply/envelope.ts`
- `src/auto-reply/reply/inbound-dedupe.test.ts`
- `src/auto-reply/reply/inbound-dedupe.ts`
- `src/auto-reply/reply/inbound-meta.test.ts`
- `src/auto-reply/reply/inbound-meta.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
