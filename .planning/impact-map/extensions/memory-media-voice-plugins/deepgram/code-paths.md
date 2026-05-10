# deepgram Other Config or Tool Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                                | Likely downstream impact                                             |
| -------------------------- | ------------------------------------------ | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/deepgram/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/deepgram/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `12` changed path(s) to this final leaf. `11` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 7, 'D': 1, 'A': 4}`.

- `extensions/deepgram/audio.live.test.ts`
- `extensions/deepgram/audio.test.ts`
- `extensions/deepgram/audio.ts`
- `extensions/deepgram/index.ts`
- `extensions/deepgram/media-understanding-provider.ts`
- `extensions/deepgram/openclaw.plugin.json`
- `extensions/deepgram/package.json`
- `extensions/deepgram/realtime-transcription-provider.test.ts`
- `extensions/deepgram/realtime-transcription-provider.ts`
- `extensions/deepgram/test-api.ts`
- `extensions/deepgram/tsconfig.json`

<!-- version-diff-refresh:v2026.4.24:end -->
