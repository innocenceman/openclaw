# Program Registration Code Paths

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

- Primary paths: `src/cli/program/**`, `src/cli/program.ts`, `src/cli/argv.ts`
- Runtime handoff: CLI startup builds the command tree before handing off into concrete command handlers.
