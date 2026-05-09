# Media File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Representative paths | Responsibility                                                                           | First validation                                                                                                  |
| -------------------- | ---------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `src/media/**`       | Media fetch/store/server helpers, path policy, parsing, and local/remote media handling. | pnpm test -- src/media/fetch.test.ts src/media/server.test.ts src/media/store.test.ts src/media/web-media.test.ts |
