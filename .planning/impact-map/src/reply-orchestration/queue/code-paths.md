# Queue Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/reply/queue.ts`, `src/auto-reply/reply/queue/**`, `src/auto-reply/reply/queue-policy.ts`
- Runtime handoff: Queued replies normalize directives and state before delivery resumes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `16` changed path(s) to this final leaf. `16` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 7, 'M': 9}`.

- `src/auto-reply/reply/queue.collect.test.ts`
- `src/auto-reply/reply/queue.dedupe.test.ts`
- `src/auto-reply/reply/queue.drain-restart.test.ts`
- `src/auto-reply/reply/queue.test-helpers.ts`
- `src/auto-reply/reply/queue.ts`
- `src/auto-reply/reply/queue/cleanup.test.ts`
- `src/auto-reply/reply/queue/cleanup.ts`
- `src/auto-reply/reply/queue/directive.ts`
- `src/auto-reply/reply/queue/drain.ts`
- `src/auto-reply/reply/queue/enqueue.ts`
- `src/auto-reply/reply/queue/normalize.ts`
- `src/auto-reply/reply/queue/settings-runtime.ts`
- `src/auto-reply/reply/queue/settings.ts`
- `src/auto-reply/reply/queue/state.test.ts`
- `src/auto-reply/reply/queue/state.ts`
- `src/auto-reply/reply/queue/types.ts`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

- `src/auto-reply/reply/queue-policy.test.ts`
- `src/auto-reply/reply/queue-policy.ts`
- `src/auto-reply/reply/queue.collect.test.ts`
- `src/auto-reply/reply/queue.dedupe.test.ts`
- `src/auto-reply/reply/queue.drain-restart.test.ts`
- `src/auto-reply/reply/queue.ts`
- `src/auto-reply/reply/queue/drain.ts`
- `src/auto-reply/reply/queue/enqueue.ts`
- `src/auto-reply/reply/queue/normalize.ts`
- `src/auto-reply/reply/queue/settings.test.ts`
- `src/auto-reply/reply/queue/settings.ts`
- `src/auto-reply/reply/queue/state.test.ts`
- `src/auto-reply/reply/queue/state.ts`
- `src/auto-reply/reply/queue/steering.ts`
- `src/auto-reply/reply/queue/types.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
