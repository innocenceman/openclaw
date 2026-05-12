# Protocol Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Parent module

- Impact module: `gateway-api-surface/`
- Leaf: `protocol/`

## Purpose

Gateway protocol schemas, primitives, and push/connect contracts.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `gateway-config-security`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `29` (修改 27，新增 2).
- Target-existing changed paths listed here: `29`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/gateway/protocol/AGENTS.md`
- `src/gateway/protocol/channels.schema.test.ts`
- `src/gateway/protocol/client-info.ts`
- `src/gateway/protocol/connect-error-details.test.ts`
- `src/gateway/protocol/connect-error-details.ts`
- `src/gateway/protocol/index.test.ts`
- `src/gateway/protocol/index.ts`
- `src/gateway/protocol/schema.ts`
- `src/gateway/protocol/schema/agent.ts`
- `src/gateway/protocol/schema/agents-models-skills.ts`
- `src/gateway/protocol/schema/channels.ts`
- `src/gateway/protocol/schema/commands.ts`
- `... 另有 17 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `gateway-config-security`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `27`
- Target-existing changed paths reflected here: `27`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/gateway/protocol/channels.schema.test.ts`
- `src/gateway/protocol/connect-error-details.ts`
- `src/gateway/protocol/cron-validators.test.ts`
- `src/gateway/protocol/exec-approvals-validators.test.ts`
- `src/gateway/protocol/index.test.ts`
- `src/gateway/protocol/index.ts`
- `src/gateway/protocol/schema.ts`
- `src/gateway/protocol/schema/agent.ts`
- `src/gateway/protocol/schema/agents-models-skills.ts`
- `src/gateway/protocol/schema/artifacts.ts`
- `src/gateway/protocol/schema/channels.ts`
- `src/gateway/protocol/schema/config.ts`
- `src/gateway/protocol/schema/cron.ts`
- `src/gateway/protocol/schema/exec-approvals.ts`
- `src/gateway/protocol/schema/frames.ts`
- `src/gateway/protocol/schema/logs-chat.ts`
- `src/gateway/protocol/schema/nodes.ts`
- `src/gateway/protocol/schema/plugins.ts`
- `src/gateway/protocol/schema/primitives.ts`
- `src/gateway/protocol/schema/protocol-schemas.ts`
- `src/gateway/protocol/schema/push.ts`
- `src/gateway/protocol/schema/sessions.ts`
- `src/gateway/protocol/schema/types.ts`
- `src/gateway/protocol/schema/wizard.ts`
- `src/gateway/protocol/startup-unavailable.ts`
- `src/gateway/protocol/talk-config.contract.test.ts`
- `src/gateway/protocol/version.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
