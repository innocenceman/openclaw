# CLI Runner Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Impact module: `agent-runtime/runtime/`
- Leaf: `cli-runner/`

## Purpose

Agent CLI backend runner, bundled MCP handoff, reliability, and watchdog glue.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-08 remaining runtime wave

Decision: `verified`.

Evidence: `cli-runner.log` passed.

Wave evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `27` (删除 2，修改 15，新增 10).
- Target-existing changed paths listed here: `25`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/cli-backends.test.ts`
- `src/agents/cli-backends.ts`
- `src/agents/cli-runner.before-agent-reply-cron.test.ts`
- `src/agents/cli-runner.bundle-mcp.e2e.test.ts`
- `src/agents/cli-runner.helpers.test.ts`
- `src/agents/cli-runner.reliability.test.ts`
- `src/agents/cli-runner.runtime.ts`
- `src/agents/cli-runner.spawn.test.ts`
- `src/agents/cli-runner.test-support.ts`
- `src/agents/cli-runner.ts`
- `src/agents/cli-runner/bundle-mcp.test.ts`
- `src/agents/cli-runner/bundle-mcp.ts`
- `... 另有 13 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `31`
- Target-existing changed paths reflected here: `30`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

- `src/agents/cli-backends.test.ts`
- `src/agents/cli-backends.ts`
- `src/agents/cli-runner.before-agent-reply-cron.test.ts`
- `src/agents/cli-runner.bundle-mcp.e2e.test.ts`
- `src/agents/cli-runner.helpers.test.ts`
- `src/agents/cli-runner.reliability.test.ts`
- `src/agents/cli-runner.spawn.test.ts`
- `src/agents/cli-runner.test-support.ts`
- `src/agents/cli-runner.ts`
- `src/agents/cli-runner/bundle-mcp-adapter-shared.ts`
- `src/agents/cli-runner/bundle-mcp-claude.ts`
- `src/agents/cli-runner/bundle-mcp-codex.ts`
- `src/agents/cli-runner/bundle-mcp-gemini.ts`
- `src/agents/cli-runner/bundle-mcp.codex.test.ts`
- `src/agents/cli-runner/bundle-mcp.gemini.live.test.ts`
- `src/agents/cli-runner/bundle-mcp.gemini.test.ts`
- `src/agents/cli-runner/bundle-mcp.resume.test.ts`
- `src/agents/cli-runner/bundle-mcp.test-support.ts`
- `src/agents/cli-runner/bundle-mcp.test.ts`
- `src/agents/cli-runner/bundle-mcp.ts`
- `src/agents/cli-runner/bundle-mcp.user-config.test.ts`
- `src/agents/cli-runner/claude-live-session.ts`
- `src/agents/cli-runner/execute.ts`
- `src/agents/cli-runner/helpers.ts`
- `src/agents/cli-runner/prepare.test.ts`
- `src/agents/cli-runner/prepare.ts`
- `src/agents/cli-runner/reliability.ts`
- `src/agents/cli-runner/session-history.test.ts`
- `src/agents/cli-runner/session-history.ts`
- `src/agents/cli-runner/types.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
