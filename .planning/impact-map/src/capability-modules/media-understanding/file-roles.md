# Media Understanding File Roles

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Representative paths         | Responsibility                                                                    | First validation                                                                                                                                                                                     |
| ---------------------------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/media-understanding/**` | Audio/video/image understanding runner, provider registry, and attachment guards. | pnpm test -- src/media-understanding/runtime.test.ts src/media-understanding/provider-registry.test.ts src/media-understanding/runner.video.test.ts src/media-understanding/transcribe-audio.test.ts |
