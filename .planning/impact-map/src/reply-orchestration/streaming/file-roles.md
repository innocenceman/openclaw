# Streaming File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Representative paths                                                                                                                                              | Responsibility                                                                    | First validation                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/auto-reply/heartbeat*.ts`, `src/auto-reply/reply/block-streaming.ts`, `src/auto-reply/reply/raw-body.ts`, `src/auto-reply/reply/get-reply-inline-actions.ts` | Block streaming, heartbeat typing, inline action streaming, and raw-body shaping. | pnpm test -- src/auto-reply/heartbeat.test.ts src/auto-reply/reply/block-streaming.test.ts src/auto-reply/reply.heartbeat-typing.test.ts src/auto-reply/reply.raw-body.test.ts |
