# Runner File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Representative paths                                                                                                                                                               | Responsibility                                                                                | First validation                                                                                                                                                                     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/auto-reply/dispatch.ts`, `src/auto-reply/inbound*.ts`, `src/auto-reply/reply/agent-runner*.ts`, `src/auto-reply/reply/get-reply*.ts`, `src/auto-reply/reply/dispatch-acp*.ts` | Inbound dispatch, reply-agent execution, ACP dispatch, memory hooks, and reply-run selection. | pnpm test -- src/auto-reply/dispatch.test.ts src/auto-reply/inbound.test.ts src/auto-reply/reply/agent-runner-execution.test.ts src/auto-reply/reply/get-reply.message-hooks.test.ts |
