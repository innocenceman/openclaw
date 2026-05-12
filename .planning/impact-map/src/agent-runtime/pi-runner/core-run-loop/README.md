# Core Run Loop Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/pi-runner/`
- Leaf: `core-run-loop/`

## Purpose

Model resolution, run loop, compaction overflow, lanes, and usage/runtime state.

## 2026-05-08 result

Passed in `pi-runner-core.log`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `190` (新增 82，删除 1，修改 106，重命名/移动 1).
- Target-existing changed paths listed here: `189`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts`
- `src/agents/pi-embedded-runner.buildembeddedsandboxinfo.test.ts`
- `src/agents/pi-embedded-runner.bundle-mcp.e2e.test.ts`
- `src/agents/pi-embedded-runner.cache.live.test.ts`
- `src/agents/pi-embedded-runner.compaction-safety-timeout.test.ts`
- `src/agents/pi-embedded-runner.e2e.test.ts`
- `src/agents/pi-embedded-runner.extensions.test.ts`
- `src/agents/pi-embedded-runner.limithistoryturns.test.ts`
- `src/agents/pi-embedded-runner.openai-tool-id-preservation.test.ts`
- `... 另有 177 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `152`
- Target-existing changed paths reflected here: `145`
- Deleted or renamed-away paths omitted from active impact-map: `7`

### Target-version changed paths

- `src/agents/pi-embedded-runner.anthropic-tool-replay.live.test.ts`
- `src/agents/pi-embedded-runner.e2e.test.ts`
- `src/agents/pi-embedded-runner.guard.test.ts`
- `src/agents/pi-embedded-runner.run-embedded-pi-agent.auth-profile-rotation.e2e.test.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test-harness.ts`
- `src/agents/pi-embedded-runner.sanitize-session-history.test.ts`
- `src/agents/pi-embedded-runner.ts`
- `src/agents/pi-embedded-runner/aliases.test.ts`
- `src/agents/pi-embedded-runner/cache-ttl.ts`
- `src/agents/pi-embedded-runner/compact-reasons.test.ts`
- `src/agents/pi-embedded-runner/compact-reasons.ts`
- `src/agents/pi-embedded-runner/compact.hooks.harness.ts`
- `src/agents/pi-embedded-runner/compact.hooks.test.ts`
- `src/agents/pi-embedded-runner/compact.queued.ts`
- `src/agents/pi-embedded-runner/compact.runtime.ts`
- `src/agents/pi-embedded-runner/compact.ts`
- `src/agents/pi-embedded-runner/compact.types.ts`
- `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.test.ts`
- `src/agents/pi-embedded-runner/compaction-duplicate-user-messages.ts`
- `src/agents/pi-embedded-runner/compaction-hooks.ts`
- `src/agents/pi-embedded-runner/compaction-runtime-context.ts`
- `src/agents/pi-embedded-runner/compaction-successor-transcript.test.ts`
- `src/agents/pi-embedded-runner/compaction-successor-transcript.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.test.ts`
- `src/agents/pi-embedded-runner/context-engine-maintenance.ts`
- `src/agents/pi-embedded-runner/context-truncation-notice.ts`
- `src/agents/pi-embedded-runner/delivery-evidence.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.test.ts`
- `src/agents/pi-embedded-runner/effective-tool-policy.ts`
- `src/agents/pi-embedded-runner/empty-assistant-turn.ts`
- `src/agents/pi-embedded-runner/failure-signal.test.ts`
- `src/agents/pi-embedded-runner/failure-signal.ts`
- `src/agents/pi-embedded-runner/history.test.ts`
- `src/agents/pi-embedded-runner/history.ts`
- `src/agents/pi-embedded-runner/lanes.test.ts`
- `src/agents/pi-embedded-runner/lanes.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.test.ts`
- `src/agents/pi-embedded-runner/manual-compaction-boundary.ts`
- `src/agents/pi-embedded-runner/model.forward-compat.errors-and-overrides.test.ts`
- `src/agents/pi-embedded-runner/model.forward-compat.test.ts`
- … plus 105 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
