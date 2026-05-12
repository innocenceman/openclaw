# Bundled Plugin Metadata Baselines Change-to-Test Matrix

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

| Change type                               | First validation                                       | Escalation trigger                                                                                         |
| ----------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Bundled plugin metadata generator changed | `pnpm check:bundled-plugin-metadata`                   | Escalate to build/runtime/plugin catalog checks when the downstream runtime artifact changes meaningfully. |
| Generated metadata artifact changed       | Trace back to the source manifest/catalog change first | Run adjacent plugin metadata tests when the artifact change is intentional.                                |

## Validation evidence

No commands above were executed during Wave 4. They were selected from the current repo tree, package-script wiring, and adjacent tests without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `1887` (修改 317，新增 1520，重命名/移动 14，删除 36).
- Target-existing path refs in active map: `1849`; deleted/renamed-away refs kept only in transition artifacts: `38`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/AGENTS.md`
- `extensions/active-memory/config.test.ts`
- `extensions/active-memory/index.test.ts`
- `extensions/active-memory/index.ts`
- `extensions/active-memory/openclaw.plugin.json`
- `extensions/alibaba/openclaw.plugin.json`
- `extensions/alibaba/package.json`
- `extensions/alibaba/plugin-registration.contract.test.ts`
- `extensions/alibaba/video-generation-provider.test.ts`
- `extensions/amazon-bedrock-mantle/discovery.ts`
- `extensions/amazon-bedrock-mantle/index.test.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts`
- `extensions/amazon-bedrock-mantle/openclaw.plugin.json`
- `extensions/amazon-bedrock-mantle/package.json`
- `extensions/anthropic-vertex/index.test.ts`
- `extensions/anthropic-vertex/openclaw.plugin.json`
- `extensions/anthropic-vertex/package.json`
- `extensions/anthropic-vertex/region.adc.test.ts`
- `extensions/arcee/index.test.ts`
- `extensions/arcee/onboard.ts`
- `extensions/arcee/openclaw.plugin.json`
- `extensions/arcee/package.json`
- `extensions/arcee/provider-catalog.ts`
- `extensions/azure-speech/azure-speech.live.test.ts`
- `extensions/azure-speech/index.ts`
- `extensions/azure-speech/openclaw.plugin.json`
- `extensions/azure-speech/package.json`
- `extensions/azure-speech/speech-provider.test.ts`
- `extensions/azure-speech/speech-provider.ts`
- `extensions/azure-speech/tsconfig.json`
- `extensions/azure-speech/tts.test.ts`
- `extensions/azure-speech/tts.ts`
- `extensions/bonjour/index.test.ts`
- `extensions/bonjour/index.ts`
- `extensions/bonjour/manifest.test.ts`
- `extensions/bonjour/openclaw.plugin.json`
- `extensions/bonjour/package.json`
- `extensions/bonjour/src/advertiser.test.ts`
- `extensions/bonjour/src/advertiser.ts`
- `extensions/bonjour/src/ciao.test.ts`
- … plus 1689 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
