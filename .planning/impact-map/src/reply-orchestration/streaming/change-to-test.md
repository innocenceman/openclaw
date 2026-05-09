# Streaming Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Change scope | First validation                                                                                                                                                               | Escalation trigger                                                                                              | Notes                    |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `streaming/` | pnpm test -- src/auto-reply/heartbeat.test.ts src/auto-reply/reply/block-streaming.test.ts src/auto-reply/reply.heartbeat-typing.test.ts src/auto-reply/reply.raw-body.test.ts | Escalate to channel tests when streamed chunking, typing, or inline actions affect transport-specific behavior. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
