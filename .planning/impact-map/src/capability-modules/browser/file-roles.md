# Browser File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Representative paths | Responsibility                                                                                           | First validation                                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/browser/**`     | Browser bridge server, CDP/Playwright sessions, routes, profiles, screenshots, and browser tool runtime. | pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts |
