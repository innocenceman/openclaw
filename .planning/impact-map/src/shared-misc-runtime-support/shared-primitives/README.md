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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `shared-runtime-support`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `307`
- Target-existing changed paths reflected here: `303`
- Deleted or renamed-away paths omitted from active impact-map: `4`

### Target-version changed paths

- `src/chat/canvas-render.ts`
- `src/chat/tool-content.ts`
- `src/infra/agent-events.test.ts`
- `src/infra/agent-events.ts`
- `src/infra/approval-gateway-resolver.ts`
- `src/infra/approval-handler-bootstrap.test.ts`
- `src/infra/approval-handler-bootstrap.ts`
- `src/infra/approval-handler-runtime.ts`
- `src/infra/approval-native-route-coordinator.test.ts`
- `src/infra/approval-native-route-coordinator.ts`
- `src/infra/approval-native-route-notice.ts`
- `src/infra/approval-native-runtime.ts`
- `src/infra/approval-native-target-key.test.ts`
- `src/infra/approval-native-target-key.ts`
- `src/infra/approval-request-account-binding.ts`
- `src/infra/approval-turn-source.test.ts`
- `src/infra/approval-turn-source.ts`
- `src/infra/approval-view-model.ts`
- `src/infra/approval-view-model.types.ts`
- `src/infra/archive.test.ts`
- `src/infra/archive.ts`
- `src/infra/backup-create.test.ts`
- `src/infra/backup-create.ts`
- `src/infra/boundary-path.ts`
- `src/infra/brew.test.ts`
- `src/infra/brew.ts`
- `src/infra/browser-open.test.ts`
- `src/infra/browser-open.ts`
- `src/infra/build-stamp.test.ts`
- `src/infra/channel-approval-auth.ts`
- `src/infra/channel-summary.ts`
- `src/infra/clawhub-spec.ts`
- `src/infra/clawhub.test.ts`
- `src/infra/clawhub.ts`
- `src/infra/command-analysis/explain.test.ts`
- `src/infra/command-analysis/explain.ts`
- `src/infra/command-analysis/inline-eval.test.ts`
- `src/infra/command-analysis/inline-eval.ts`
- `src/infra/command-analysis/policy.ts`
- `src/infra/command-analysis/risks.test.ts`
- … plus 263 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
