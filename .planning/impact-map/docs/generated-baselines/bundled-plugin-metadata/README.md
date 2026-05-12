# Bundled Plugin Metadata Baselines

Coverage: `verified`
Freshness: 2026-05-09 targeted generated-baseline checks and tests

## Scope

Leaf module for the bundled plugin metadata generation/check path and its checked-in runtime artifact under `src/plugins/`.

## Observed facts

- `scripts/copy-bundled-plugin-metadata.mjs` participates in runtime postbuild handling for bundled metadata.

## Risk triggers

- Hand-editing generated artifacts instead of using the paired generator/check flow.
- Treating generated-output drift as isolated when the real source change sits in config, SDK, or extension metadata surfaces.

## Validation status

Wave 4 promoted this exact-priority leaf with repo-native inspection only. No generator/check commands were executed, so this is not `verified`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `docs-generated-baselines`.
- Risk: `medium`.
- Compatibility: `docs-only`.
- Changed paths in this leaf: `1887` (修改 317，新增 1520，重命名/移动 14，删除 36).
- Target-existing changed paths listed here: `1849`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `38`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/AGENTS.md`
- `extensions/active-memory/config.test.ts`
- `extensions/active-memory/index.test.ts`
- `extensions/active-memory/index.ts`
- `extensions/active-memory/openclaw.plugin.json`
- `extensions/alibaba/index.ts`
- `extensions/alibaba/openclaw.plugin.json`
- `extensions/alibaba/package.json`
- `extensions/alibaba/plugin-registration.contract.test.ts`
- `extensions/alibaba/tsconfig.json`
- `extensions/alibaba/video-generation-provider.test.ts`
- `extensions/alibaba/video-generation-provider.ts`
- `... 另有 1837 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `docs-generated-baselines`
- Risk: `medium`
- Compatibility: `docs-only`
- Coverage: `verified`
- Changed paths in diff: `1763`
- Target-existing changed paths reflected here: `1729`
- Deleted or renamed-away paths omitted from active impact-map: `34`

### Target-version changed paths

- `extensions/AGENTS.md`
- `extensions/active-memory/config.test.ts`
- `extensions/active-memory/index.test.ts`
- `extensions/active-memory/index.ts`
- `extensions/active-memory/openclaw.plugin.json`
- `extensions/alibaba/openclaw.plugin.json`
- `extensions/alibaba/package.json`
- `extensions/alibaba/plugin-registration.contract.test.ts`
- `extensions/alibaba/video-generation-provider.test.ts`
- `extensions/amazon-bedrock-mantle/discovery.ts`
- `extensions/amazon-bedrock-mantle/index.test.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts`
- `extensions/amazon-bedrock-mantle/openclaw.plugin.json`
- `extensions/amazon-bedrock-mantle/package.json`
- `extensions/anthropic-vertex/index.test.ts`
- `extensions/anthropic-vertex/openclaw.plugin.json`
- `extensions/anthropic-vertex/package.json`
- `extensions/anthropic-vertex/region.adc.test.ts`
- `extensions/arcee/index.test.ts`
- `extensions/arcee/onboard.ts`
- `extensions/arcee/openclaw.plugin.json`
- `extensions/arcee/package.json`
- `extensions/arcee/provider-catalog.ts`
- `extensions/azure-speech/azure-speech.live.test.ts`
- `extensions/azure-speech/index.ts`
- `extensions/azure-speech/openclaw.plugin.json`
- `extensions/azure-speech/package.json`
- `extensions/azure-speech/speech-provider.test.ts`
- `extensions/azure-speech/speech-provider.ts`
- `extensions/azure-speech/tsconfig.json`
- `extensions/azure-speech/tts.test.ts`
- `extensions/azure-speech/tts.ts`
- `extensions/bonjour/index.test.ts`
- `extensions/bonjour/index.ts`
- `extensions/bonjour/manifest.test.ts`
- `extensions/bonjour/openclaw.plugin.json`
- `extensions/bonjour/package.json`
- `extensions/bonjour/src/advertiser.test.ts`
- `extensions/bonjour/src/advertiser.ts`
- `extensions/bonjour/src/ciao.test.ts`
- … plus 1689 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
