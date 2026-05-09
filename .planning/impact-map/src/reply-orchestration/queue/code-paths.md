# Queue Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/reply/queue.ts`, `src/auto-reply/reply/queue/**`, `src/auto-reply/reply/queue-policy.ts`
- Runtime handoff: Queued replies normalize directives and state before delivery resumes.
