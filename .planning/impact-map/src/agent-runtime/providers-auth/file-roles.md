# Providers Auth File Roles

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Representative paths                                                                                                                | Responsibility                                                                                                 | First validation                                                                                                                                        |
| ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/agents/auth-profiles/**`, `src/agents/auth-profiles.ts`, `src/agents/model-auth*.ts`, `src/agents/models-config.providers*.ts` | Provider credential state, OAuth/API-key selection, auth profile ordering, and model/provider auth resolution. | pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts |
