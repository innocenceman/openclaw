# Queue File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Representative paths                                                                                     | Responsibility                                                                | First validation                                                                                         |
| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `src/auto-reply/reply/queue.ts`, `src/auto-reply/reply/queue/**`, `src/auto-reply/reply/queue-policy.ts` | Reply queue state, enqueue/drain flow, queue normalization, and queue policy. | pnpm test -- src/auto-reply/reply/queue-policy.test.ts src/auto-reply/reply/dispatch-from-config.test.ts |
