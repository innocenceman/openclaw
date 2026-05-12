# Queue Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

## Parent module

- Impact module: `reply-orchestration/`
- Leaf: `queue/`

## Purpose

Reply queue state, enqueue/drain flow, queue normalization, and queue policy.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `16` (新增 7，修改 9).
- Target-existing changed paths listed here: `16`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/auto-reply/reply/queue.collect.test.ts`
- `src/auto-reply/reply/queue.dedupe.test.ts`
- `src/auto-reply/reply/queue.drain-restart.test.ts`
- `src/auto-reply/reply/queue.test-helpers.ts`
- `src/auto-reply/reply/queue.ts`
- `src/auto-reply/reply/queue/cleanup.test.ts`
- `src/auto-reply/reply/queue/cleanup.ts`
- `src/auto-reply/reply/queue/directive.ts`
- `src/auto-reply/reply/queue/drain.ts`
- `src/auto-reply/reply/queue/enqueue.ts`
- `src/auto-reply/reply/queue/normalize.ts`
- `src/auto-reply/reply/queue/settings-runtime.ts`
- `... 另有 4 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `15`
- Target-existing changed paths reflected here: `15`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/auto-reply/reply/queue-policy.test.ts`
- `src/auto-reply/reply/queue-policy.ts`
- `src/auto-reply/reply/queue.collect.test.ts`
- `src/auto-reply/reply/queue.dedupe.test.ts`
- `src/auto-reply/reply/queue.drain-restart.test.ts`
- `src/auto-reply/reply/queue.ts`
- `src/auto-reply/reply/queue/drain.ts`
- `src/auto-reply/reply/queue/enqueue.ts`
- `src/auto-reply/reply/queue/normalize.ts`
- `src/auto-reply/reply/queue/settings.test.ts`
- `src/auto-reply/reply/queue/settings.ts`
- `src/auto-reply/reply/queue/state.test.ts`
- `src/auto-reply/reply/queue/state.ts`
- `src/auto-reply/reply/queue/steering.ts`
- `src/auto-reply/reply/queue/types.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
