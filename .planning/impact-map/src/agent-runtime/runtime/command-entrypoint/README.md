# Command Entrypoint Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 remaining runtime verified wave

## Parent module

- Impact module: `agent-runtime/runtime/`
- Leaf: `command-entrypoint/`

## Purpose

Agent command entrypoint and gateway/CLI handoff into runtime execution.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-08 remaining runtime wave

Decision: `exceptioned-deep-partial`.

Evidence: `agent-via-gateway.log` and `command-entrypoint-adjacent.log` passed, but `src/commands/agent.test.ts` exits non-zero with no Vitest failure output; keep exceptioned.

Wave evidence: `.planning/impact-map/evidence/src-agent-runtime-remaining-verified-wave-2026-05-08/AGENT-RUNTIME-REMAINING-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `516` (重命名/移动 25，新增 222，修改 241，删除 28).
- Target-existing changed paths listed here: `478`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `38`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/AGENTS.md`
- `src/agents/CLAUDE.md`
- `src/agents/agent-runtime-config.ts`
- `src/agents/agent-scope-config.ts`
- `src/agents/anthropic-payload-log.test.ts`
- `src/agents/anthropic-payload-log.ts`
- `src/agents/anthropic-payload-policy.test.ts`
- `src/agents/anthropic-payload-policy.ts`
- `src/agents/anthropic-transport-stream.test.ts`
- `src/agents/anthropic-transport-stream.ts`
- `src/agents/anthropic-vertex-stream.ts`
- `src/agents/anthropic.setup-token.live.test.ts`
- `... 另有 466 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `fallback`
- Changed paths in diff: `362`
- Target-existing changed paths reflected here: `354`
- Deleted or renamed-away paths omitted from active impact-map: `8`

### Target-version changed paths

- `src/agents/agent-delete-safety.ts`
- `src/agents/agent-runtime-config.ts`
- `src/agents/agent-runtime-metadata.ts`
- `src/agents/agent-runtime-policy.ts`
- `src/agents/agent-scope-config.ts`
- `src/agents/announce-idempotency.ts`
- `src/agents/anthropic-payload-log.ts`
- `src/agents/anthropic-transport-stream.live.test.ts`
- `src/agents/anthropic-transport-stream.test.ts`
- `src/agents/anthropic-transport-stream.ts`
- `src/agents/anthropic-vertex-stream.ts`
- `src/agents/anthropic.setup-token.live.test.ts`
- `src/agents/auth-health.test.ts`
- `src/agents/auth-health.ts`
- `src/agents/auth-profile-runtime-contract.test.ts`
- `src/agents/bootstrap-budget.test.ts`
- `src/agents/bootstrap-budget.ts`
- `src/agents/bootstrap-cache.test.ts`
- `src/agents/bootstrap-cache.ts`
- `src/agents/bootstrap-files.test.ts`
- `src/agents/bootstrap-files.ts`
- `src/agents/bootstrap-mode.test.ts`
- `src/agents/bootstrap-mode.ts`
- `src/agents/btw-transcript.ts`
- `src/agents/btw.test.ts`
- `src/agents/btw.ts`
- `src/agents/bundle-mcp-config.test.ts`
- `src/agents/bundle-mcp-config.ts`
- `src/agents/bundle-mcp.test-harness.ts`
- `src/agents/cache-trace.test.ts`
- `src/agents/cache-trace.ts`
- `src/agents/channel-tools.ts`
- `src/agents/chutes-oauth.ts`
- `src/agents/cli-auth-epoch.test.ts`
- `src/agents/cli-auth-epoch.ts`
- `src/agents/cli-credentials.test.ts`
- `src/agents/cli-credentials.ts`
- `src/agents/cli-output.test.ts`
- `src/agents/cli-output.ts`
- `src/agents/codex-app-server.extensions.test.ts`
- … plus 314 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
