# Runner Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/dispatch.ts`, `src/auto-reply/inbound*.ts`, `src/auto-reply/reply/agent-runner*.ts`, `src/auto-reply/reply/get-reply*.ts`, `src/auto-reply/reply/dispatch-acp*.ts`
- Runtime handoff: Inbound envelopes and config/runtime overrides converge in get-reply and agent-runner before outbound dispatch.
