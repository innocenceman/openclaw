# Shell Bridge Code Paths

Coverage: `verified`
Freshness: 2026-05-08 remaining runtime split wave

- Primary paths: `src/agents/sandbox/fs-bridge.ts`, `src/agents/sandbox/fs-bridge-shell-command-plans.ts`
- Runtime handoff: filesystem bridge validation protects sandbox-mounted paths before file reads, writes, shell execution, or mutation operations proceed.
