# Auth Session File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Representative paths                                                                                                                                                                 | Responsibility                                                                                    | First validation                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/gateway/auth.ts`, `src/gateway/auth-mode-policy.ts`, `src/gateway/connection-auth.ts`, `src/gateway/device-auth.ts`, `src/gateway/origin-check.ts`, `src/gateway/probe-auth.ts` | Gateway auth modes, connection/device auth, origin checks, and session reset/probe auth behavior. | pnpm test -- src/gateway/auth.test.ts src/gateway/auth-mode-policy.test.ts src/gateway/connection-auth.test.ts src/gateway/probe-auth.test.ts |
