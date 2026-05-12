# Session Scope Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Impact module: `agent-runtime/runtime/`
- Leaf: `session-scope/`

## Purpose

Agent scope, path, and session selection primitives used before execution starts.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-08 remaining runtime wave

Decision: `verified`.

Evidence: `session-scope.log` and `session-identity.log` passed.

Wave evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `10` (修改 10).
- Target-existing changed paths listed here: `10`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/agent-paths.ts`
- `src/agents/agent-scope.test.ts`
- `src/agents/agent-scope.ts`
- `src/agents/cli-session.test.ts`
- `src/agents/cli-session.ts`
- `src/agents/identity-avatar.test.ts`
- `src/agents/identity-avatar.ts`
- `src/agents/identity-file.test.ts`
- `src/agents/identity-file.ts`
- `src/agents/identity.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `7`
- Target-existing changed paths reflected here: `7`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/agents/agent-scope.test.ts`
- `src/agents/agent-scope.ts`
- `src/agents/cli-session.test.ts`
- `src/agents/cli-session.ts`
- `src/agents/identity-avatar.test.ts`
- `src/agents/identity-avatar.ts`
- `src/agents/identity-file.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
