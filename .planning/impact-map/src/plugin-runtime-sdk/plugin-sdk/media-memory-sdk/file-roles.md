# Media Memory Sdk File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                                                      | Responsibility                                                            | First validation                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `src/plugin-sdk/media-*.ts`, `src/plugin-sdk/memory-*.ts`, `src/plugin-sdk/speech*.ts`, `src/plugin-sdk/web-media.ts`, `src/plugin-sdk/outbound-media.ts` | Media, media-understanding, memory, speech, and related helper contracts. | pnpm test -- src/plugin-sdk/outbound-media.test.ts src/plugin-sdk/webhook-memory-guards.test.ts src/plugin-sdk/text-chunking.test.ts src/plugin-sdk/secret-input.test.ts |
