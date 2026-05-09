# Client Call File Roles

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Representative paths                                                     | Responsibility                                                        | First validation                                                                                            |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `src/gateway/client.ts`, `src/gateway/call.ts`, `src/cli/gateway-rpc.ts` | Gateway client wrappers and RPC call helpers used by CLI/app callers. | pnpm test -- src/gateway/client.test.ts src/gateway/call.test.ts src/gateway/client-callsites.guard.test.ts |
