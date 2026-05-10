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
