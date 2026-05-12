# Bundled Plugin Metadata Baselines Code Paths

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

## Bundled plugin metadata path

1. Extension manifest/catalog changes land under `extensions/*`.
2. `pnpm check:bundled-plugin-metadata` is the first drift guard.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `1887` changed path(s) to this final leaf. `1849` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 317, 'A': 1520, 'R': 14, 'D': 36}`.

- `extensions/AGENTS.md`
- `extensions/active-memory/config.test.ts`
- `extensions/active-memory/index.test.ts`
- `extensions/active-memory/index.ts`
- `extensions/active-memory/openclaw.plugin.json`
- `extensions/alibaba/index.ts`
- `extensions/alibaba/openclaw.plugin.json`
- `extensions/alibaba/package.json`
- `extensions/alibaba/plugin-registration.contract.test.ts`
- `extensions/alibaba/tsconfig.json`
- `extensions/alibaba/video-generation-provider.test.ts`
- `extensions/alibaba/video-generation-provider.ts`
- `extensions/amazon-bedrock-mantle/api.ts`
- `extensions/amazon-bedrock-mantle/bedrock-token-generator.d.ts`
- `extensions/amazon-bedrock-mantle/discovery.test.ts`
- `extensions/amazon-bedrock-mantle/discovery.ts`
- `extensions/amazon-bedrock-mantle/index.test.ts`
- `extensions/amazon-bedrock-mantle/index.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.test.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts`
- `extensions/amazon-bedrock-mantle/openclaw.plugin.json`
- `extensions/amazon-bedrock-mantle/package.json`
- `extensions/amazon-bedrock-mantle/register.sync.runtime.ts`
- `extensions/amazon-bedrock-mantle/tsconfig.json`
- `extensions/anthropic-vertex/api.test.ts`
- `extensions/anthropic-vertex/api.ts`
- `extensions/anthropic-vertex/index.test.ts`
- `extensions/anthropic-vertex/index.ts`
- `extensions/anthropic-vertex/openclaw.plugin.json`
- `extensions/anthropic-vertex/package.json`
- `... 另有 1819 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff target paths: v2026.5.4

The following changed paths still exist in the target source and are active ownership evidence for this leaf.

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

Deleted or renamed-away paths omitted from this active leaf: `34`. See the transition directory under `.planning/version-diff/` for historical evidence.

<!-- version-diff-refresh:v2026.5.4:end -->
