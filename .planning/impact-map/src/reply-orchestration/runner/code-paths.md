# Runner Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/dispatch.ts`, `src/auto-reply/inbound*.ts`, `src/auto-reply/reply/agent-runner*.ts`, `src/auto-reply/reply/get-reply*.ts`, `src/auto-reply/reply/dispatch-acp*.ts`
- Runtime handoff: Inbound envelopes and config/runtime overrides converge in get-reply and agent-runner before outbound dispatch.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `230` changed path(s) to this final leaf. `216` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'R': 4, 'M': 146, 'A': 69, 'D': 11}`.

- `src/auto-reply/command-control.test.ts`
- `src/auto-reply/command-status-builders.ts`
- `src/auto-reply/dispatch-dispatcher.ts`
- `src/auto-reply/dispatch.test.ts`
- `src/auto-reply/dispatch.ts`
- `src/auto-reply/fallback-state.test.ts`
- `src/auto-reply/fallback-state.ts`
- `src/auto-reply/get-reply-options.types.ts`
- `src/auto-reply/group-activation.ts`
- `src/auto-reply/inbound-debounce.ts`
- `src/auto-reply/inbound.group-require-mention-test-plugins.ts`
- `src/auto-reply/inbound.test.ts`
- `src/auto-reply/media-understanding.test-fixtures.ts`
- `src/auto-reply/model-runtime.ts`
- `src/auto-reply/model.test.ts`
- `src/auto-reply/model.ts`
- `src/auto-reply/reply-payload.ts`
- `src/auto-reply/reply/abort-cutoff.ts`
- `src/auto-reply/reply/abort-primitives.ts`
- `src/auto-reply/reply/abort.runtime-types.ts`
- `src/auto-reply/reply/abort.test.ts`
- `src/auto-reply/reply/abort.ts`
- `src/auto-reply/reply/acp-projector.ts`
- `src/auto-reply/reply/acp-reset-target.ts`
- `src/auto-reply/reply/acp-stream-settings.test.ts`
- `src/auto-reply/reply/acp-stream-settings.ts`
- `src/auto-reply/reply/agent-runner-auth-profile.ts`
- `src/auto-reply/reply/agent-runner-direct-runtime-config.test.ts`
- `src/auto-reply/reply/agent-runner-execution.test.ts`
- `src/auto-reply/reply/agent-runner-execution.ts`
- `... 另有 186 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
