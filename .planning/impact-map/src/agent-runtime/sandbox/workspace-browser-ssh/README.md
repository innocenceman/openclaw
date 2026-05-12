# Workspace Browser Ssh Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

## Parent module

- Impact module: `agent-runtime/sandbox/`
- Leaf: `workspace-browser-ssh/`

## Purpose

Workspace mounts, browser/noVNC, Docker/SSH adapters, and remote runtime operations.

## 2026-05-08 result

Split only. No verified promotion because grouped sandbox commands failed without actionable Vitest output.

## 2026-05-09 final audit result

Exceptioned. The non-Docker workspace/browser/SSH targeted test set passed, but Docker/container/browser runtime smoke coverage is not available in this environment. The leaf is explicit `exceptioned-deep-partial` until container/remote smoke evidence is recorded. Evidence: `../../../../evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `16` (修改 13，新增 3).
- Target-existing changed paths listed here: `16`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/sandbox/browser-bridges.ts`
- `src/agents/sandbox/browser.create.test.ts`
- `src/agents/sandbox/browser.ts`
- `src/agents/sandbox/docker-backend.test.ts`
- `src/agents/sandbox/docker-backend.ts`
- `src/agents/sandbox/docker.config-hash-recreate.test.ts`
- `src/agents/sandbox/docker.ts`
- `src/agents/sandbox/remote-fs-bridge.test.ts`
- `src/agents/sandbox/remote-fs-bridge.ts`
- `src/agents/sandbox/ssh-backend.test.ts`
- `src/agents/sandbox/ssh-backend.ts`
- `src/agents/sandbox/ssh.spawn-env.test.ts`
- `... 另有 4 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `8`
- Target-existing changed paths reflected here: `8`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/agents/sandbox/browser.create.test.ts`
- `src/agents/sandbox/browser.ts`
- `src/agents/sandbox/docker-backend.ts`
- `src/agents/sandbox/docker.config-hash-recreate.test.ts`
- `src/agents/sandbox/docker.test.ts`
- `src/agents/sandbox/docker.ts`
- `src/agents/sandbox/ssh-backend.test.ts`
- `src/agents/sandbox/workspace.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
