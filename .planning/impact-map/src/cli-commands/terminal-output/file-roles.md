# Terminal Output File Roles

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

| Representative paths                     | Responsibility                                              | First validation                                                                                                                   |
| ---------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `src/terminal/**`, `src/cli/progress.ts` | ANSI-safe tables, palette, prompts, and progress rendering. | pnpm test -- src/terminal/table.test.ts src/terminal/ansi.test.ts src/terminal/prompt-select-styled.test.ts src/cli/banner.test.ts |
