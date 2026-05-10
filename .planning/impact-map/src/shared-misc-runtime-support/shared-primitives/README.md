# Shared Primitives Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `shared-misc-runtime-support/`
- Leaf: `shared-primitives/`

## Purpose

Shared primitives, utilities, and types used across runtime modules.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `verified`. Shared primitives and utils tests passed.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `shared-runtime-support`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `440` (重命名/移动 12，新增 128，修改 286，删除 14).
- Target-existing changed paths listed here: `414`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `26`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/chat/canvas-render.ts`
- `src/infra/agent-events.test.ts`
- `src/infra/agent-events.ts`
- `src/infra/approval-display-paths.test.ts`
- `src/infra/approval-display-paths.ts`
- `src/infra/approval-errors.test.ts`
- `src/infra/approval-errors.ts`
- `src/infra/approval-gateway-resolver.test.ts`
- `src/infra/approval-gateway-resolver.ts`
- `src/infra/approval-handler-adapter-runtime.ts`
- `src/infra/approval-handler-bootstrap.test.ts`
- `src/infra/approval-handler-bootstrap.ts`
- `... 另有 402 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
