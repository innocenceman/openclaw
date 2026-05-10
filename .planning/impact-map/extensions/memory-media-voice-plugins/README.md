# Memory, Media, and Voice Plugins

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G006 extension plugin wave evidence recorded

## Purpose

Memory, media, speech, TTS, and voice/call related plugins.

## Canonical status

This is the canonical leaf home for these packages.

## Files

- `leaf-index.md` — package-level leaves in this category.
- Each leaf directory contains `README.md`, `file-roles.md`, `code-paths.md`, and `change-to-test.md`.

## Boundary

Extension production code should depend on `openclaw/plugin-sdk/*`, local extension files, and package-local runtime dependencies only.

## 2026-05-08 P0 refresh-to-verified evidence

Priority leaves `memory-core/` and `memory-lancedb/` are now `verified` for the bounded P0 slice. The family aggregate remains `partial` because residual media/voice leaves remain `partial`.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`.

## 2026-05-09 G006 extension plugin wave

Decision: `exceptioned-deep-partial`.

Memory and selected speech/voice leaves passed focused tests, but deepgram/elevenlabs lack dedicated tests and voice-call timed out in bounded validation.

Evidence: `.planning/impact-map/evidence/extensions-all-verified-wave-2026-05-09/EXTENSIONS-ALL-VERIFIED-WAVE.md`.
