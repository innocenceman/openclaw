# elevenlabs Other Config or Tool Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                                  | Likely downstream impact                                             |
| -------------------------- | -------------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/elevenlabs/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/elevenlabs/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `22` changed path(s) to this final leaf. `21` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 13, 'R': 1, 'M': 7, 'D': 1}`.

- `extensions/elevenlabs/config-api.ts`
- `extensions/elevenlabs/config-compat.test.ts`
- `extensions/elevenlabs/config-compat.ts`
- `extensions/elevenlabs/contract-api.ts`
- `extensions/elevenlabs/doctor-contract.ts`
- `extensions/elevenlabs/elevenlabs.live.test.ts`
- `extensions/elevenlabs/index.ts`
- `extensions/elevenlabs/media-understanding-provider.test.ts`
- `extensions/elevenlabs/media-understanding-provider.ts`
- `extensions/elevenlabs/openclaw.plugin.json`
- `extensions/elevenlabs/package.json`
- `extensions/elevenlabs/realtime-transcription-provider.test.ts`
- `extensions/elevenlabs/realtime-transcription-provider.ts`
- `extensions/elevenlabs/setup-api.ts`
- `extensions/elevenlabs/shared.ts`
- `extensions/elevenlabs/speech-provider.test.ts`
- `extensions/elevenlabs/speech-provider.ts`
- `extensions/elevenlabs/test-api.ts`
- `extensions/elevenlabs/tsconfig.json`
- `extensions/elevenlabs/tts.test.ts`
- `extensions/elevenlabs/tts.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
