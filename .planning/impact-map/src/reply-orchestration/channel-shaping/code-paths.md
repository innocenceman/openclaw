# Channel Shaping Code Paths

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/auto-reply/chunk.ts`, `src/auto-reply/envelope.ts`, `src/auto-reply/media-note.ts`, `src/auto-reply/reply/inbound-*.ts`
- Runtime handoff: Formatting helpers prepare reply payloads before queueing or direct transport send.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `11` changed path(s) to this final leaf. `11` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 9, 'A': 2}`.

- `src/auto-reply/chunk.ts`
- `src/auto-reply/envelope.ts`
- `src/auto-reply/media-note.test.ts`
- `src/auto-reply/media-note.ts`
- `src/auto-reply/reply/inbound-context.test.ts`
- `src/auto-reply/reply/inbound-context.ts`
- `src/auto-reply/reply/inbound-dedupe.test.ts`
- `src/auto-reply/reply/inbound-dedupe.ts`
- `src/auto-reply/reply/inbound-media.ts`
- `src/auto-reply/reply/inbound-meta.test.ts`
- `src/auto-reply/reply/inbound-meta.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
