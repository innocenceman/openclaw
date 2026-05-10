# ACP Impact Subtree

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

## Parent module

- Impact module: `capability-modules/`
- Subtree: `acp/`

## Purpose

ACP client/server/control-plane/runtime support, session translation, persistent bindings, and secret/env bridge behavior.

## Split basis

code-review-graph flagged ACP control-plane and session identity files as high-risk, while GitNexus shows ACP spawn/session behavior crossing agent runtime. ACP therefore needs narrower leaves than a single `src/acp/**` card.

Use `leaf-index.md` to choose the narrowest ACP leaf.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `5` (新增 5).
- Target-existing changed paths listed here: `5`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/acp/approval-classifier.test.ts`
- `src/acp/approval-classifier.ts`
- `src/acp/client-helpers.ts`
- `src/acp/normalize-text.ts`
- `src/acp/record-shared.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
