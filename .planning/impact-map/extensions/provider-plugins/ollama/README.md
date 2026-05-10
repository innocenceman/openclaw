# Ollama Provider Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled provider plugin `extensions/ollama/` registering provider id `ollama` with local/custom auth, discovery, wizard setup, and model-pull hooks backed by `openclaw/plugin-sdk/ollama-setup`.

## Why this remains one leaf

Ollama has very few local files, but auth, discovery, onboarding, and on-model-selected behavior are all concentrated in one plugin package `@openclaw/ollama-provider`.

## Entry contracts

- Plugin id and provider id: `ollama` from `extensions/ollama/openclaw.plugin.json` and `index.ts`.
- Package/install contract: `@openclaw/ollama-provider` from `extensions/ollama/package.json`.
- Loader boundary: `extensions/ollama/index.ts` registers the local auth method, discovery, wizard setup/model picker, and model pull hook.

## Primary behavior surfaces

- `extensions/ollama/index.ts`: dynamic import of `openclaw/plugin-sdk/ollama-setup`, local auth method, discovery fallback, wizard metadata, and `onModelSelected` pull behavior.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; Ollama tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-ollama.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; Ollama provider tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `34` (修改 13，新增 17，删除 2，重命名/移动 2).
- Target-existing changed paths listed here: `32`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `2`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/ollama/api.ts`
- `extensions/ollama/index.test.ts`
- `extensions/ollama/index.ts`
- `extensions/ollama/openclaw.plugin.json`
- `extensions/ollama/package.json`
- `extensions/ollama/plugin-registration.contract.test.ts`
- `extensions/ollama/provider-discovery.import-guard.test.ts`
- `extensions/ollama/provider-discovery.test.ts`
- `extensions/ollama/provider-discovery.ts`
- `extensions/ollama/provider-policy-api.test.ts`
- `extensions/ollama/provider-policy-api.ts`
- `extensions/ollama/runtime-api.ts`
- `... 另有 20 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
