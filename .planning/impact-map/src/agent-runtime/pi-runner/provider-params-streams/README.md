# Provider Params Streams Impact Leaf

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

## Parent module

- Impact module: `agent-runtime/pi-runner/`
- Leaf: `provider-params-streams/`

## Purpose

Provider-specific params, stream wrappers, tool payload shaping, and model capabilities.

## 2026-05-08 result

Split only. Grouped provider-param commands failed with wrapper exit 1 and no retained Vitest failure output.

## 2026-05-09 final audit result

Exceptioned. The final provider params and stream wrapper targeted test set exited 1 after 159.7s with wrapper failure artifacts and no retained Vitest failure detail, so this high-blast-radius provider surface remains unverified. Evidence: `../../../evidence/final-cross-module-audit-2026-05-09/FINAL-CROSS-MODULE-AUDIT.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `28` (删除 5，修改 16，重命名/移动 4，新增 3).
- Target-existing changed paths listed here: `20`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `8`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/pi-embedded-runner/bedrock-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/extra-params.cache-retention-default.test.ts`
- `src/agents/pi-embedded-runner/extra-params.google.test.ts`
- `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts`
- `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts`
- `src/agents/pi-embedded-runner/extra-params.test-support.ts`
- `src/agents/pi-embedded-runner/extra-params.ts`
- `src/agents/pi-embedded-runner/extra-params.zai-tool-stream.test.ts`
- `src/agents/pi-embedded-runner/google-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/google-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/minimax-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/minimax-stream-wrappers.ts`
- `... 另有 8 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `10`
- Target-existing changed paths reflected here: `10`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/agents/pi-embedded-runner/extra-params.openrouter-cache-control.test.ts`
- `src/agents/pi-embedded-runner/extra-params.provider-runtime.test.ts`
- `src/agents/pi-embedded-runner/extra-params.ts`
- `src/agents/pi-embedded-runner/moonshot-thinking-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/openai-stream-wrappers.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.test.ts`
- `src/agents/pi-embedded-runner/openrouter-model-capabilities.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.test.ts`
- `src/agents/pi-embedded-runner/proxy-stream-wrappers.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
