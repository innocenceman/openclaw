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

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `105`
- Target-existing changed paths reflected here: `105`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/config/agent-dirs.ts`
- `src/config/allowed-values.ts`
- `src/config/backup-rotation.ts`
- `src/config/bindings.ts`
- `src/config/bundled-channel-config-metadata.generated.ts`
- `src/config/bundled-channel-config-runtime.test.ts`
- `src/config/cache-utils.ts`
- `src/config/channel-capabilities.ts`
- `src/config/channel-compat-normalization.ts`
- `src/config/channel-configured.test.ts`
- `src/config/channel-configured.ts`
- `src/config/commands.test.ts`
- `src/config/commands.ts`
- `src/config/config-env-vars.ts`
- `src/config/config-misc.test.ts`
- `src/config/config.acp-binding-cutover.test.ts`
- `src/config/config.allowlist-requires-allowfrom.test.ts`
- `src/config/config.compaction-settings.test.ts`
- `src/config/config.env-vars.test.ts`
- `src/config/config.model-ref-validation.test.ts`
- `src/config/config.multi-agent-agentdir-validation.test.ts`
- `src/config/config.plugin-validation.test.ts`
- `src/config/config.pruning-defaults.test.ts`
- `src/config/config.sandbox-docker.test.ts`
- `src/config/config.schema-regressions.test.ts`
- `src/config/config.talk-validation.test.ts`
- `src/config/config.ts`
- `src/config/config.web-search-provider.test.ts`
- `src/config/context-visibility.ts`
- `src/config/control-ui-css.ts`
- `src/config/dangerous-name-matching.ts`
- `src/config/defaults.test.ts`
- `src/config/defaults.ts`
- `src/config/env-substitution.ts`
- `src/config/env-vars.ts`
- `src/config/future-version-guard.test.ts`
- `src/config/future-version-guard.ts`
- `src/config/gateway-control-ui-origins.test.ts`
- `src/config/gateway-control-ui-origins.ts`
- `src/config/group-policy.test.ts`
- … plus 65 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
