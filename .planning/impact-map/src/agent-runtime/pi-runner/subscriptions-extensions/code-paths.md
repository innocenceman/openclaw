# Subscriptions Extensions Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/pi-embedded-subscribe*.ts`, `src/agents/pi-extensions/**`, `src/agents/pi-embedded-helpers/**`, `src/agents/pi-embedded-runner/extensions.ts`
- Runtime handoff: embedded Pi execution prepares model/provider/runtime state before reply, cron, hooks, or channel/plugin consumers observe output.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `67` changed path(s) to this final leaf. `51` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 41, 'A': 10, 'D': 2, 'R': 14}`.

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
- `src/agents/pi-embedded-helpers/images.ts`
- `src/agents/pi-embedded-helpers/messaging-dedupe.ts`
- `src/agents/pi-embedded-helpers/openai.ts`
- `src/agents/pi-embedded-helpers/provider-error-patterns.test.ts`
- `src/agents/pi-embedded-helpers/provider-error-patterns.ts`
- `src/agents/pi-embedded-helpers/sanitize-user-facing-text.ts`
- `src/agents/pi-embedded-helpers/thinking.test.ts`
- `src/agents/pi-embedded-helpers/thinking.ts`
- `src/agents/pi-embedded-helpers/turns.ts`
- `src/agents/pi-embedded-runner/extensions.test.ts`
- `src/agents/pi-embedded-runner/extensions.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.runtime.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.compaction.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.lifecycle.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.test.ts`
- `src/agents/pi-embedded-subscribe.handlers.messages.ts`
- `... 另有 21 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
