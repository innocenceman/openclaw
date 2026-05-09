# Reply Command Auth Gates Code Paths

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/command-auth*.ts`, `src/auto-reply/command-detection.ts`, `src/auto-reply/reply/command-gates.ts`
- Runtime handoff: Inbound command text is detected and authorized here before any reply command handler can run.
