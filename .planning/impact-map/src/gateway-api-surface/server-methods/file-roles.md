# Server Methods File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Representative paths                                             | Responsibility                                                                       | First validation                                                                                                                                                                                                      |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/gateway/server-methods.ts`, `src/gateway/server-methods/**` | RPC method handlers for agents, config, channels, devices, logs, send, and sessions. | pnpm test -- src/gateway/server-methods/server-methods.test.ts src/gateway/server-methods/agent.test.ts src/gateway/server-methods/agents-mutate.test.ts src/gateway/server-methods/browser.profile-from-body.test.ts |
