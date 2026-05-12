# LLM Task Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled tool plugin `extensions/llm-task/` registering a JSON-only embedded-agent task tool with provider/model defaults, allowlists, and schema validation.

## Why this remains one leaf

LLM task is one optional tool plugin, but its single leaf owns the orchestration-sensitive embedded-agent contract and the JSON/schema safety envelope around that tool.

## Entry contracts

- Plugin id: `llm-task` from `extensions/llm-task/openclaw.plugin.json` and `index.ts`.
- Package/install contract: `@openclaw/llm-task` from `extensions/llm-task/package.json`.
- Loader boundary: `extensions/llm-task/index.ts` registers `createLlmTaskTool(api)` as an optional tool.

## Primary behavior surfaces

- `extensions/llm-task/src/llm-task-tool.ts`: tool schema, provider/model default resolution, thinking-level normalization, allowlist enforcement, embedded-agent execution, JSON parsing, and AJV validation.
- `extensions/llm-task/api.ts`: local barrel re-exporting the narrow plugin-SDK surface used by the tool.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; llm-task tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-llm-task.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; llm-task tool tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `4` (修改 3，新增 1).
- Target-existing changed paths listed here: `4`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/llm-task/package.json`
- `extensions/llm-task/src/llm-task-tool.test.ts`
- `extensions/llm-task/src/llm-task-tool.ts`
- `extensions/llm-task/tsconfig.json`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `6`
- Target-existing changed paths reflected here: `6`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/llm-task/api.ts`
- `extensions/llm-task/openclaw.plugin.json`
- `extensions/llm-task/package.json`
- `extensions/llm-task/src/llm-task-tool.test.ts`
- `extensions/llm-task/src/llm-task-tool.ts`
- `extensions/llm-task/src/runtime-api.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
