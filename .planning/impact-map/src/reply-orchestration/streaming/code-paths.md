# Streaming Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/heartbeat*.ts`, `src/auto-reply/reply/block-streaming.ts`, `src/auto-reply/reply/raw-body.ts`, `src/auto-reply/reply/get-reply-inline-actions.ts`
- Runtime handoff: Agent output is chunked/rewrapped before channel transport sees partial or final replies.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `27` changed path(s) to this final leaf. `23` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 2, 'M': 21, 'D': 3, 'R': 1}`.

- `src/auto-reply/heartbeat-filter.test.ts`
- `src/auto-reply/heartbeat-filter.ts`
- `src/auto-reply/heartbeat.test.ts`
- `src/auto-reply/heartbeat.ts`
- `src/auto-reply/reply.block-streaming.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-harness.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-mocks.ts`
- `src/auto-reply/reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.shows-current-verbose-level-verbose-has-no.test.ts`
- `src/auto-reply/reply.directive.parse.test.ts`
- `src/auto-reply/reply.media-note.test.ts`
- `src/auto-reply/reply.raw-body.test.ts`
- `src/auto-reply/reply.runtime.ts`
- `src/auto-reply/reply.stage-sandbox-media.scp-remote-path.test.ts`
- `src/auto-reply/reply.test-harness.ts`
- `src/auto-reply/reply.triggers.group-intro-prompts.cases.ts`
- `src/auto-reply/reply.triggers.trigger-handling.filters-usage-summary-current-model-provider.cases.ts`
- `src/auto-reply/reply.triggers.trigger-handling.stages-inbound-media-into-sandbox-workspace.test.ts`
- `src/auto-reply/reply.triggers.trigger-handling.targets-active-session-native-stop.e2e.test.ts`
- `src/auto-reply/reply.ts`
- `src/auto-reply/reply/block-streaming.ts`
- `src/auto-reply/reply/get-reply-inline-actions.skip-when-config-empty.test.ts`
- `src/auto-reply/reply/get-reply-inline-actions.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/auto-reply/heartbeat-filter.browser-import.test.ts`
- `src/auto-reply/heartbeat-filter.test.ts`
- `src/auto-reply/heartbeat-filter.ts`
- `src/auto-reply/heartbeat-tool-response.ts`
- `src/auto-reply/heartbeat.test.ts`
- `src/auto-reply/heartbeat.ts`
- `src/auto-reply/reply.block-streaming.test.ts`
- `src/auto-reply/reply.directive.directive-behavior.e2e-harness.ts`
- `src/auto-reply/reply.directive.directive-behavior.prefers-alias-matches-fuzzy-selection-is-ambiguous.test.ts`
- `src/auto-reply/reply.directive.parse.test.ts`
- `src/auto-reply/reply.raw-body.test.ts`
- `src/auto-reply/reply.test-harness.ts`
- `src/auto-reply/reply.triggers.group-intro-prompts.cases.ts`
- `src/auto-reply/reply.triggers.trigger-handling.targets-active-session-native-stop.e2e.test.ts`
- `src/auto-reply/reply/block-streaming.ts`
- `src/auto-reply/reply/get-reply-inline-actions.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
