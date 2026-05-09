# Reply Command Registry Families Code Paths

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/commands-registry*.ts`, `src/auto-reply/commands-args*.ts`, `src/auto-reply/commands*.ts`
- Runtime handoff: Authorized command text resolves against registry data and argument parsing before handler dispatch.
