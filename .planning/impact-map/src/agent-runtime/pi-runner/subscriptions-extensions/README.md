# Subscriptions Extensions Impact Leaf

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

## Parent module

- Impact module: `agent-runtime/pi-runner/`
- Leaf: `subscriptions-extensions/`

## Purpose

Embedded subscribe lifecycle, Pi extensions, context pruning, and extension hook surfaces.

## 2026-05-08 result

Passed in `pi-runner-core.log`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `agent-acp-runtime`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `67` (修改 41，新增 10，删除 2，重命名/移动 14).
- Target-existing changed paths listed here: `51`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `16`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `src/agents/pi-embedded-helpers.buildbootstrapcontextfiles.test.ts`
- `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts`
- `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts`
- `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts`
- `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts`
- `src/agents/pi-embedded-helpers.ts`
- `src/agents/pi-embedded-helpers.validate-turns.test.ts`
- `src/agents/pi-embedded-helpers/bootstrap.test.ts`
- `src/agents/pi-embedded-helpers/bootstrap.ts`
- `src/agents/pi-embedded-helpers/errors.ts`
- `src/agents/pi-embedded-helpers/failover-matches.test.ts`
- `src/agents/pi-embedded-helpers/failover-matches.ts`
- `... 另有 39 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `agent-acp-runtime`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `40`
- Target-existing changed paths reflected here: `40`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `src/agents/pi-embedded-helpers.formatassistanterrortext.test.ts`
- `src/agents/pi-embedded-helpers.isbillingerrormessage.test.ts`
- `src/agents/pi-embedded-helpers.sanitize-session-messages-images.removes-empty-assistant-text-blocks-but-preserves.test.ts`
- `src/agents/pi-embedded-helpers.sanitizeuserfacingtext.test.ts`
- `src/agents/pi-embedded-helpers.validate-turns.test.ts`
- `src/agents/pi-embedded-helpers/errors.test.ts`
- `src/agents/pi-embedded-helpers/errors.ts`
- `src/agents/pi-embedded-helpers/failover-matches.test.ts`
- `src/agents/pi-embedded-helpers/failover-matches.ts`
- `src/agents/pi-embedded-helpers/google.ts`
- `src/agents/pi-embedded-helpers/images.ts`
- `src/agents/pi-embedded-helpers/messaging-dedupe.ts`
- `src/agents/pi-embedded-helpers/sanitize-user-facing-text.ts`
- `src/agents/pi-embedded-helpers/turns.ts`
- `src/agents/pi-embedded-helpers/types.ts`
- `src/agents/pi-embedded-runner/extensions.ts`
- `src/agents/pi-embedded-subscribe.e2e-harness.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.media.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.tools.ts`
- `src/agents/pi-embedded-subscribe.handlers.types.ts`
- `src/agents/pi-embedded-subscribe.shared-types.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.emits-reasoning-as-separate-message-enabled.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.filters-final-suppresses-output-without-start-tag.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.subscribeembeddedpisession.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts`
- `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.waits-multiple-compaction-retries-before-resolving.test.ts`
- `src/agents/pi-embedded-subscribe.tool-text-diagnostics.ts`
- `src/agents/pi-embedded-subscribe.tools.extract.test.ts`
- `src/agents/pi-embedded-subscribe.tools.media.test.ts`
- `src/agents/pi-embedded-subscribe.tools.test.ts`
- `src/agents/pi-embedded-subscribe.tools.ts`
- `src/agents/pi-embedded-subscribe.ts`
- `src/agents/pi-embedded-subscribe.types.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
