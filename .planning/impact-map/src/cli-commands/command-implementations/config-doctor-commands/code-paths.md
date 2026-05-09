# Config Doctor Commands Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/configure*.ts`, `src/commands/doctor*.ts`, `src/commands/doctor/**`, `src/commands/daemon*.ts`, `src/commands/config-validation.ts`
- Runtime handoff: CLI config/doctor commands inspect or repair config/runtime state before crossing into config, daemon, security, or channel modules.
