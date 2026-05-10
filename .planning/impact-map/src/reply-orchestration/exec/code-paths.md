# Exec Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/reply/exec.ts`, `src/auto-reply/reply/exec/**`, `src/auto-reply/reply/directive*.ts`
- Runtime handoff: Directive parsing and exec staging sit between command parsing and actual tool/sandbox execution.
