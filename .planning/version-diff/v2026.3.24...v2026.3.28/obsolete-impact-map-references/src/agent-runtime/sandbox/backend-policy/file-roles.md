# Backend Policy File Roles

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

| Representative paths                                                                                                                                                              | Responsibility                                                        | First validation                                                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/agents/sandbox.ts`, `src/agents/sandbox/backend.ts`, `src/agents/sandbox/config*.ts`, `src/agents/sandbox/validate-sandbox-security.ts`, `src/agents/tool-policy-sandbox.ts` | Backend registration, sandbox config/policy, and security validation. | `pnpm test -- src/agents/sandbox/backend.test.ts src/agents/sandbox/validate-sandbox-security.test.ts src/agents/tool-policy-sandbox.test.ts` |
