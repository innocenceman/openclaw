# Backend Policy Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/sandbox/`
- Leaf: `backend-policy/`

## Purpose

Backend registration, sandbox config/policy, and security validation.

## 2026-05-08 result

Passed in `sandbox-core.log` and `tool-policy-sandbox.log`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `27` (修改 23，新增 3，删除 1).
- Target-existing changed paths listed here: `26`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/sandbox.resolveSandboxContext.test.ts`
- `src/agents/sandbox.ts`
- `src/agents/sandbox/backend-handle.types.ts`
- `src/agents/sandbox/backend.ts`
- `src/agents/sandbox/backend.types.ts`
- `src/agents/sandbox/config-hash.test.ts`
- `src/agents/sandbox/config-hash.ts`
- `src/agents/sandbox/config.ts`
- `src/agents/sandbox/constants.ts`
- `src/agents/sandbox/context.ts`
- `src/agents/sandbox/manage.test.ts`
- `src/agents/sandbox/manage.ts`
- `... 另有 14 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `14`
- Target-existing changed paths reflected here: `14`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/agents/sandbox.resolveSandboxContext.test.ts`
- `src/agents/sandbox.ts`
- `src/agents/sandbox/backend.ts`
- `src/agents/sandbox/config.ts`
- `src/agents/sandbox/constants.ts`
- `src/agents/sandbox/context.ts`
- `src/agents/sandbox/manage.test.ts`
- `src/agents/sandbox/manage.ts`
- `src/agents/sandbox/prune.ts`
- `src/agents/sandbox/registry.test.ts`
- `src/agents/sandbox/registry.ts`
- `src/agents/sandbox/sanitize-env-vars.ts`
- `src/agents/sandbox/validate-sandbox-security.test.ts`
- `src/agents/sandbox/validate-sandbox-security.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
