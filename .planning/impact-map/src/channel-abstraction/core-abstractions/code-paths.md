# Core Abstractions Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/channels/channel-config.ts`, `src/channels/command-gating.ts`, `src/channels/session*.ts`, `src/channels/targets.ts`
- Runtime handoff: Shared helpers normalize channel/session state before plugin or built-in transports consume it.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `59` changed path(s) to this final leaf. `55` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 1, 'M': 42, 'A': 13, 'D': 3}`.

- `src/channels/AGENTS.md`
- `src/channels/account-inspection.ts`
- `src/channels/account-snapshot-fields.test.ts`
- `src/channels/account-snapshot-fields.ts`
- `src/channels/account-summary.ts`
- `src/channels/allow-from.test.ts`
- `src/channels/allow-from.ts`
- `src/channels/bundled-channel-catalog-read.test.ts`
- `src/channels/bundled-channel-catalog-read.ts`
- `src/channels/channel-config.ts`
- `src/channels/channels-misc.test.ts`
- `src/channels/chat-meta-shared.ts`
- `src/channels/chat-meta.ts`
- `src/channels/chat-type.ts`
- `src/channels/config-presence.test.ts`
- `src/channels/config-presence.ts`
- `src/channels/conversation-binding-context.test.ts`
- `src/channels/conversation-binding-context.ts`
- `src/channels/conversation-label.test.ts`
- `src/channels/conversation-label.ts`
- `src/channels/conversation-resolution.test.ts`
- `src/channels/conversation-resolution.ts`
- `src/channels/draft-preview-finalizer.test.ts`
- `src/channels/draft-preview-finalizer.ts`
- `src/channels/draft-stream-controls.test.ts`
- `src/channels/draft-stream-controls.ts`
- `src/channels/ids.test.ts`
- `src/channels/ids.ts`
- `src/channels/inbound-debounce-policy.ts`
- `src/channels/location.test.ts`
- `... 另有 25 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
