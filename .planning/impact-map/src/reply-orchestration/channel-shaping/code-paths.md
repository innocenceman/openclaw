# Channel Shaping Code Paths

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/chunk.ts`, `src/auto-reply/envelope.ts`, `src/auto-reply/media-note.ts`, `src/auto-reply/reply/inbound-*.ts`
- Runtime handoff: Formatting helpers prepare reply payloads before queueing or direct transport send.
