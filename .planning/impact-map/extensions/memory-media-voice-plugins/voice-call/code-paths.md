# voice-call Other Config or Tool Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                                  | Likely downstream impact                                             |
| -------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/voice-call/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/voice-call/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `80` changed path(s) to this final leaf. `74` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'D': 6, 'M': 55, 'A': 19}`.

- `extensions/voice-call/README.md`
- `extensions/voice-call/cli-metadata.ts`
- `extensions/voice-call/config-api.ts`
- `extensions/voice-call/index.test.ts`
- `extensions/voice-call/index.ts`
- `extensions/voice-call/openclaw.plugin.json`
- `extensions/voice-call/package.json`
- `extensions/voice-call/setup-api.ts`
- `extensions/voice-call/src/cli.ts`
- `extensions/voice-call/src/config-compat.test.ts`
- `extensions/voice-call/src/config-compat.ts`
- `extensions/voice-call/src/config.test.ts`
- `extensions/voice-call/src/config.ts`
- `extensions/voice-call/src/http-headers.ts`
- `extensions/voice-call/src/manager.closed-loop.test.ts`
- `extensions/voice-call/src/manager.inbound-allowlist.test.ts`
- `extensions/voice-call/src/manager.notify.test.ts`
- `extensions/voice-call/src/manager.restore.test.ts`
- `extensions/voice-call/src/manager.test-harness.ts`
- `extensions/voice-call/src/manager.ts`
- `extensions/voice-call/src/manager/events.test.ts`
- `extensions/voice-call/src/manager/events.ts`
- `extensions/voice-call/src/manager/outbound.test.ts`
- `extensions/voice-call/src/manager/outbound.ts`
- `extensions/voice-call/src/manager/store.ts`
- `extensions/voice-call/src/manager/timers.ts`
- `extensions/voice-call/src/media-stream.test.ts`
- `extensions/voice-call/src/media-stream.ts`
- `extensions/voice-call/src/providers/base.ts`
- `... 另有 44 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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

Deleted or renamed-away paths omitted from this active leaf: `1`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
