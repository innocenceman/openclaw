# Maintenance Commands Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/commands/backup*.ts`, `src/commands/cleanup*.ts`, `src/commands/dashboard*.ts`, `src/commands/docs.ts`, `src/commands/health*.ts`, `src/commands/message*.ts`
- Runtime handoff: Maintenance commands provide CLI UX around support/health/message flows and may cross into docs, gateway, or channel modules.
