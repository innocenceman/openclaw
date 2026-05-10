# Boundary Enforcement File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                                                              | Responsibility                                                                        | First validation                                                                                                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/plugins/sdk-alias.ts`, `src/plugins/bundled-plugin-naming.test.ts`, `src/plugins/install-security-scan.ts`, `src/plugins/runtime/runtime-plugin-boundary.ts` | Runtime/plugin boundary guardrails, naming checks, and install security scan helpers. | pnpm test -- src/plugins/sdk-alias.test.ts src/plugins/bundled-plugin-naming.test.ts src/plugins/runtime-plugin-boundary.whatsapp.test.ts src/plugins/install-min-host-version-guardrails.test.ts |
