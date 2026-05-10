# Config Io Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/`
- Leaf: `config-io/`

## Purpose

Config read/write, path resolution, includes, runtime snapshot, and merge behavior.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `160` (重命名/移动 4，修改 79，新增 53，删除 24).
- Target-existing changed paths listed here: `132`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `28`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/config/agent-dirs.ts`
- `src/config/agent-limits.ts`
- `src/config/agent-timeout-defaults.ts`
- `src/config/allowed-values.ts`
- `src/config/bindings.ts`
- `src/config/bundled-channel-config-metadata.generated.ts`
- `src/config/bundled-channel-config-runtime.test.ts`
- `src/config/channel-compat-normalization.ts`
- `src/config/channel-config-metadata.ts`
- `src/config/channel-configured-shared.ts`
- `src/config/channel-configured.test.ts`
- `src/config/channel-configured.ts`
- `... 另有 120 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
