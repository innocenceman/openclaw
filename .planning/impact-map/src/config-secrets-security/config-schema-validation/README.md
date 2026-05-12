# Config Schema Validation Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `config-secrets-security/`
- Leaf: `config-schema-validation/`

## Purpose

Schema contracts, help/docs generation baselines, and fail-closed validation behavior.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `59` (修改 53，新增 5，删除 1).
- Target-existing changed paths listed here: `58`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `1`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/config/doc-baseline.integration.test.ts`
- `src/config/doc-baseline.runtime.ts`
- `src/config/doc-baseline.ts`
- `src/config/schema-base.ts`
- `src/config/schema.base.generated.test.ts`
- `src/config/schema.base.generated.ts`
- `src/config/schema.help.quality.test.ts`
- `src/config/schema.help.ts`
- `src/config/schema.hints.test.ts`
- `src/config/schema.hints.ts`
- `src/config/schema.labels.ts`
- `src/config/schema.shared.ts`
- `... 另有 46 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `58`
- Target-existing changed paths reflected here: `58`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/config/doc-baseline.integration.test.ts`
- `src/config/doc-baseline.runtime.ts`
- `src/config/doc-baseline.ts`
- `src/config/schema.base.generated.test.ts`
- `src/config/schema.base.generated.ts`
- `src/config/schema.help.quality.test.ts`
- `src/config/schema.help.ts`
- `src/config/schema.hints.test.ts`
- `src/config/schema.labels.ts`
- `src/config/schema.tags.ts`
- `src/config/schema.test.ts`
- `src/config/schema.ts`
- `src/config/types.access-groups.ts`
- `src/config/types.agent-defaults.ts`
- `src/config/types.agents-shared.ts`
- `src/config/types.agents.ts`
- `src/config/types.base.ts`
- `src/config/types.browser.ts`
- `src/config/types.channels.ts`
- `src/config/types.commitments.ts`
- `src/config/types.crestodian.ts`
- `src/config/types.cron.ts`
- `src/config/types.discord.ts`
- `src/config/types.gateway.ts`
- `src/config/types.installs.ts`
- `src/config/types.memory.ts`
- `src/config/types.messages.ts`
- `src/config/types.models.ts`
- `src/config/types.msteams.ts`
- `src/config/types.openclaw.ts`
- `src/config/types.plugins.ts`
- `src/config/types.sandbox.ts`
- `src/config/types.slack.ts`
- `src/config/types.telegram.ts`
- `src/config/types.tools.ts`
- `src/config/types.ts`
- `src/config/types.tts.ts`
- `src/config/zod-schema.agent-defaults.test.ts`
- `src/config/zod-schema.agent-defaults.ts`
- `src/config/zod-schema.agent-model.ts`
- … plus 18 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
