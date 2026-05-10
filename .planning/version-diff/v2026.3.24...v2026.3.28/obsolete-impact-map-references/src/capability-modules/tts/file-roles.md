# Tts File Roles

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Representative paths | Responsibility                                                     | First validation                                                                                |
| -------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| `src/tts/**`         | Text-to-speech registry, text preparation, and provider selection. | pnpm test -- src/tts/tts.test.ts src/tts/provider-registry.test.ts src/tts/prepare-text.test.ts |
