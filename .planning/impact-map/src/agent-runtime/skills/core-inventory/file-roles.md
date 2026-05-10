# Core Inventory File Roles

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

| Representative paths                                                                                                                                              | Responsibility                                                     | First validation                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------- |
| `src/agents/skills.ts`, `src/agents/skills-status.ts`, `src/agents/skills/bundled-context.ts`, `src/agents/skills/workspace.ts`, `src/agents/skills/serialize.ts` | Skill inventory, workspace snapshots, status, and prompt assembly. | `pnpm test -- src/agents/skills.test.ts src/agents/skills-status.test.ts` |
