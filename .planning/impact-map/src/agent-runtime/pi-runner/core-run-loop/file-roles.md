# Core Run Loop File Roles

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

| Representative paths                                                                                                                                                                                          | Responsibility                                                                   | First validation                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `src/agents/pi-embedded-runner.ts`, `src/agents/pi-embedded-runner/model*.ts`, `src/agents/pi-embedded-runner/run*.ts`, `src/agents/pi-embedded-runner/compact*.ts`, `src/agents/pi-embedded-runner/lanes.ts` | Model resolution, run loop, compaction overflow, lanes, and usage/runtime state. | `pnpm test -- src/agents/pi-embedded-runner/model.test.ts src/agents/pi-embedded-runner/run.overflow-compaction.test.ts` |
