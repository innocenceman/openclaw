# Subagent Registry File Roles

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime verified wave

| Representative paths                                               | Responsibility                                                                            | First validation                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/agents/subagent-registry*.ts`, `src/agents/subagent-spawn.ts` | Child-session registry, lifecycle, persistence, spawn bookkeeping, and latest-run lookup. | `pnpm test -- src/agents/subagent-registry.test.ts src/agents/subagent-registry-queries.test.ts src/agents/subagent-registry-cleanup.test.ts src/agents/subagent-registry-completion.test.ts src/agents/subagent-registry.persistence.test.ts src/agents/subagent-registry.context-engine.test.ts src/agents/subagent-spawn.test.ts` |
