# Auth Provider Commands Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/auth-choice*.ts`, `src/commands/auth-token.ts`, `src/commands/*oauth*.ts`, `src/commands/models*.ts`, `src/commands/model-*.ts`
- Runtime handoff: CLI auth/provider commands resolve user auth choices before agent providers or plugin auth helpers consume them.
