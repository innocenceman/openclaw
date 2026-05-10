# Channel Shaping File Roles

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Representative paths                                                                                                         | Responsibility                                                                                       | First validation                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/auto-reply/chunk.ts`, `src/auto-reply/envelope.ts`, `src/auto-reply/media-note.ts`, `src/auto-reply/reply/inbound-*.ts` | Chunking, envelope shaping, media-note formatting, and inbound metadata shaping before channel send. | pnpm test -- src/auto-reply/chunk.test.ts src/auto-reply/envelope.test.ts src/auto-reply/media-note.test.ts src/auto-reply/reply/inbound-meta.test.ts |
