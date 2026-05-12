# Subscriptions Extensions Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

1. Run `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts`.
2. Escalate to reply/runtime suites when embedded run behavior affects shared message flows.
3. Run live/provider checks only with explicit credentials or live-test opt-in.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `67` (修改 41，新增 10，删除 2，重命名/移动 14).
- Target-existing path refs in active map: `51`; deleted/renamed-away refs kept only in transition artifacts: `16`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
