# elevenlabs Other Config or Tool Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                    | First validation                                                | Escalation trigger                                         |
| ------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------- |
| Manifest/config changed        | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes. |
| Runtime implementation changed | `pnpm test -- extensions/elevenlabs` or nearest targeted test   | `pnpm test:extensions` when shared helpers are touched.    |
| Package/build surface changed  | `pnpm build` when published or lazy-loaded surface changes      | Run plugin release checks if package metadata changes.     |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `22` (新增 13，重命名/移动 1，修改 7，删除 1).
- Target-existing path refs in active map: `21`; deleted/renamed-away refs kept only in transition artifacts: `1`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/elevenlabs/doctor-contract.ts`
- `extensions/elevenlabs/elevenlabs.live.test.ts`
- `extensions/elevenlabs/openclaw.plugin.json`
- `extensions/elevenlabs/package.json`
- `extensions/elevenlabs/realtime-transcription-provider.test.ts`
- `extensions/elevenlabs/realtime-transcription-provider.ts`
- `extensions/elevenlabs/speech-provider.test.ts`
- `extensions/elevenlabs/speech-provider.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
