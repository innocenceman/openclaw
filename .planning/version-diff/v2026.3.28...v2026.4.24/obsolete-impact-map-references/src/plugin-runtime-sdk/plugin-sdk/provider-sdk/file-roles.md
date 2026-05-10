# Provider Sdk File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                               | Responsibility                                                            | First validation                                                                                                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/plugin-sdk/provider-*.ts`, `src/plugin-sdk/provider-entry.ts` | Provider entry, auth, model, stream, usage, and onboarding SDK contracts. | pnpm test -- src/plugin-sdk/provider-entry.test.ts src/plugin-sdk/fetch-auth.test.ts src/plugin-sdk/request-url.test.ts src/plugin-sdk/runtime.test.ts |
