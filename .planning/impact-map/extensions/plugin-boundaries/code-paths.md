# Plugin Boundaries Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native inspection only

## 1. Manifest and bundled metadata path

```text
extensions/*/openclaw.plugin.json
  -> src/plugins/bundled-plugin-metadata.ts
  -> catalog/loader/contract tests
```

Impact: plugin identity, package/install metadata, provider/channel discovery, auth choice catalogs, onboarding/config UI sync.

## 2. Entrypoint and runtime contract path

```text
extensions/*/index.ts
  -> definePluginEntry / defineChannelPluginEntry / defineSingleProviderPluginEntry / defineSetupPluginEntry
  -> runtime registration for providers/channels/tools/services
  -> src/plugins/contracts/** and src/channels/plugins/contracts/**
```

Impact: plugin registration shape, runtime lifecycle, channel/provider contracts, lazy-load boundaries.

## 3. Public SDK import boundary path

```text
extension production code
  -> openclaw/plugin-sdk/* or local api.ts/runtime-api.ts barrels
  -> scripts/check-extension-plugin-sdk-boundary.mjs
  -> scripts/check-plugin-extension-import-boundary.mjs
```

Impact: cross-package safety, allowed public SDK surface, extension package isolation.

## 4. Support-only helper path

```text
extensions/shared/** or extensions/anthropic-vertex/provider-catalog.ts
  -> src/plugin-sdk/* re-export or core provider-catalog assembly
  -> consuming extension/core paths
```

Impact: helper drift can affect multiple plugin leaves even though these directories are not manifest-backed leaf rows.

## Change trace rule

When touching a plugin boundary file, trace in this order: manifest/package/entrypoint or support helper -> generated metadata or registry/loader contract -> extension-specific tests -> build/public SDK checks if published or lazy-loaded surfaces can change.
