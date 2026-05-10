# Agent Command CLI Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/agent*.ts`, `src/commands/agent/**`, `src/commands/agents*.ts`
- Runtime handoff: CLI agent commands normalize flags and state before crossing into `agent-runtime/runtime/` leaves.
