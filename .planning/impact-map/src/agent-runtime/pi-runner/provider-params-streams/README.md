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
