# voice-call Memory/Media/Voice Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/voice-call` (manifest/config plugin).

## Leaf status

This is a leaf module in the impact-map taxonomy: split further only when a single file path inside this leaf develops an independently testable ownership boundary.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `memory-media-ui`.
- Risk: `medium`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `80` (删除 6，修改 55，新增 19).
- Target-existing changed paths listed here: `74`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `6`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 62 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `memory-media-ui`
- Risk: `medium`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `55`
- Target-existing changed paths reflected here: `54`
- Deleted or renamed-away paths omitted from active impact-map: `1`

### Target-version changed paths

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

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
