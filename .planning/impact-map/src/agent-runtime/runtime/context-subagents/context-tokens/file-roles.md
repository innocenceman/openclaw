# Context Tokens File Roles

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

| Representative paths                                | Responsibility                                                              | First validation                                                                                                    |
| --------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| `src/agents/context*.ts`, `src/agents/context-*.ts` | Context-window lookup, configured/discovered model windows, and guardrails. | `pnpm test -- src/agents/context.test.ts src/agents/context.lookup.test.ts src/agents/context-window-guard.test.ts` |
