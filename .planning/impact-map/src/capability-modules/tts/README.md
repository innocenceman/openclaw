# Tts Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

## Parent module

- Impact module: `capability-modules/`
- Leaf: `tts/`

## Purpose

Text-to-speech registry, text preparation, and provider selection.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

## 2026-05-09 G005 verification result

Result: `verified`. TTS tests passed inside the full context/cron/tts command.

Evidence ledger: `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/SRC-CAPABILITIES-SHARED-VERIFIED-WAVE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `17` (新增 5，修改 11，删除 1).
- Target-existing changed paths listed here: `16`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/tts/directives.test.ts`
- `src/tts/directives.ts`
- `src/tts/prepare-text.test.ts`
- `src/tts/provider-registry.test.ts`
- `src/tts/provider-registry.ts`
- `src/tts/provider-types.ts`
- `src/tts/status-config.test.ts`
- `src/tts/status-config.ts`
- `src/tts/tts-auto-mode.ts`
- `src/tts/tts-config.test.ts`
- `src/tts/tts-config.ts`
- `src/tts/tts-core.ts`
- `... 另有 4 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `15`
- Target-existing changed paths reflected here: `15`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/tts/directives.test.ts`
- `src/tts/directives.ts`
- `src/tts/openai-compatible-speech-provider.test.ts`
- `src/tts/openai-compatible-speech-provider.ts`
- `src/tts/provider-registry-core.ts`
- `src/tts/provider-registry.test.ts`
- `src/tts/provider-registry.ts`
- `src/tts/provider-types.ts`
- `src/tts/status-config.test.ts`
- `src/tts/status-config.ts`
- `src/tts/tts-config.test.ts`
- `src/tts/tts-config.ts`
- `src/tts/tts-types.ts`
- `src/tts/tts.test.ts`
- `src/tts/tts.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
