# voice-call Other Config or Tool Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                    | First validation                                                | Escalation trigger                                         |
| ------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------- |
| Manifest/config changed        | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes. |
| Runtime implementation changed | `pnpm test -- extensions/voice-call` or nearest targeted test   | `pnpm test:extensions` when shared helpers are touched.    |
| Package/build surface changed  | `pnpm build` when published or lazy-loaded surface changes      | Run plugin release checks if package metadata changes.     |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `80` (删除 6，修改 55，新增 19).
- Target-existing path refs in active map: `74`; deleted/renamed-away refs kept only in transition artifacts: `6`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/voice-call/README.md`
- `extensions/voice-call/api.ts`
- `extensions/voice-call/index.test.ts`
- `extensions/voice-call/index.ts`
- `extensions/voice-call/openclaw.plugin.json`
- `extensions/voice-call/package.json`
- `extensions/voice-call/runtime-api.ts`
- `extensions/voice-call/src/cli.test.ts`
- `extensions/voice-call/src/cli.ts`
- `extensions/voice-call/src/config-compat.ts`
- `extensions/voice-call/src/config.test.ts`
- `extensions/voice-call/src/config.ts`
- `extensions/voice-call/src/gateway-continue-operation.ts`
- `extensions/voice-call/src/http-headers.ts`
- `extensions/voice-call/src/manager.notify.test.ts`
- `extensions/voice-call/src/manager.restore.test.ts`
- `extensions/voice-call/src/manager.ts`
- `extensions/voice-call/src/manager/context.ts`
- `extensions/voice-call/src/manager/events.test.ts`
- `extensions/voice-call/src/manager/events.ts`
- `extensions/voice-call/src/manager/outbound.test.ts`
- `extensions/voice-call/src/manager/outbound.ts`
- `extensions/voice-call/src/manager/twiml.ts`
- `extensions/voice-call/src/media-stream.test.ts`
- `extensions/voice-call/src/media-stream.ts`
- `extensions/voice-call/src/providers/base.ts`
- `extensions/voice-call/src/providers/twilio.test.ts`
- `extensions/voice-call/src/providers/twilio.ts`
- `extensions/voice-call/src/providers/twilio/api.test.ts`
- `extensions/voice-call/src/providers/twilio/api.ts`
- `extensions/voice-call/src/providers/twilio/twiml-policy.ts`
- `extensions/voice-call/src/realtime-fast-context.test.ts`
- `extensions/voice-call/src/realtime-fast-context.ts`
- `extensions/voice-call/src/response-generator.test.ts`
- `extensions/voice-call/src/response-generator.ts`
- `extensions/voice-call/src/runtime.test.ts`
- `extensions/voice-call/src/runtime.ts`
- `extensions/voice-call/src/telephony-audio.ts`
- `extensions/voice-call/src/telephony-tts.test.ts`
- `extensions/voice-call/src/telephony-tts.ts`
- … plus 14 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
