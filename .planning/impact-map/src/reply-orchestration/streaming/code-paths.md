# Streaming Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/heartbeat*.ts`, `src/auto-reply/reply/block-streaming.ts`, `src/auto-reply/reply/raw-body.ts`, `src/auto-reply/reply/get-reply-inline-actions.ts`
- Runtime handoff: Agent output is chunked/rewrapped before channel transport sees partial or final replies.
