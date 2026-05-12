# Outbound Delivery Impact Leaf

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

## Parent module

- Impact module: `infra-outbound-delivery/`
- Leaf: `outbound-delivery/`

## Purpose

Delivery queueing, send service, recovery, and direct outbound runtime behavior.

## Operating rule

This is the smallest documented impact unit for this slice. Use `code-paths.md` for source paths, `file-roles.md` for ownership details, and `change-to-test.md` for the first validation ladder.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `infra-outbound-delivery`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `65` (新增 24，删除 9，修改 32).
- Target-existing changed paths listed here: `56`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `9`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/cli/send-runtime/channel-outbound-send.test.ts`
- `src/cli/send-runtime/channel-outbound-send.ts`
- `src/infra/outbound/AGENTS.md`
- `src/infra/outbound/account-scoped-conversation-bindings.ts`
- `src/infra/outbound/agent-delivery.test.ts`
- `src/infra/outbound/agent-delivery.ts`
- `src/infra/outbound/best-effort-delivery.test.ts`
- `src/infra/outbound/best-effort-delivery.ts`
- `src/infra/outbound/bound-delivery-router.test.ts`
- `src/infra/outbound/bound-delivery-router.ts`
- `src/infra/outbound/cfg-threading.guard.test.ts`
- `src/infra/outbound/current-conversation-bindings.test.ts`
- `... 另有 44 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `infra-outbound-delivery`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `17`
- Target-existing changed paths reflected here: `17`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/cli/send-runtime/channel-outbound-send.ts`
- `src/infra/outbound/best-effort-delivery.ts`
- `src/infra/outbound/bound-delivery-router.test.ts`
- `src/infra/outbound/bound-delivery-router.ts`
- `src/infra/outbound/cfg-threading.guard.test.ts`
- `src/infra/outbound/deliver.test.ts`
- `src/infra/outbound/deliver.ts`
- `src/infra/outbound/message.config.runtime.ts`
- `src/infra/outbound/message.test.ts`
- `src/infra/outbound/message.ts`
- `src/infra/outbound/outbound-send-service.test.ts`
- `src/infra/outbound/outbound-send-service.ts`
- `src/infra/outbound/targets-resolve-shared.ts`
- `src/infra/outbound/targets-session.ts`
- `src/infra/outbound/targets.shared-test.ts`
- `src/infra/outbound/targets.test-helpers.ts`
- `src/infra/outbound/targets.test.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
