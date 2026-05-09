# Subscriptions Extensions File Roles

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

| Representative paths                                                                                                                                      | Responsibility                                                                             | First validation                                                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `src/agents/pi-embedded-subscribe*.ts`, `src/agents/pi-extensions/**`, `src/agents/pi-embedded-helpers/**`, `src/agents/pi-embedded-runner/extensions.ts` | Embedded subscribe lifecycle, Pi extensions, context pruning, and extension hook surfaces. | `pnpm test -- src/agents/pi-embedded-subscribe.handlers.lifecycle.test.ts src/agents/pi-extensions/context-pruning.test.ts` |
