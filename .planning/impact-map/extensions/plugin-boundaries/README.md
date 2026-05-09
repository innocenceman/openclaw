# Plugin Boundaries

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Public and internal boundaries for `extensions/*`, `openclaw.plugin.json`, extension `package.json`, `index.ts`, local `api.ts` / `runtime-api.ts` barrels, `openclaw/plugin-sdk/*` usage, and the helper/support paths that still live under `extensions/` without becoming standalone plugin leaves.

## Observed facts

- 80 manifests and 80 `index.ts` entrypoints exist under `extensions/*`.
- 75 extension packages have `package.json`; metadata-only or internally bundled plugins without package files observed: `device-pair`, `phone-control`, `qwen-portal-auth`, `talk-voice`, `thread-ownership`.
- One current naming exception was observed by repo-native scan: `extensions/kimi-coding/openclaw.plugin.json:id` is `kimi` and package name is `@openclaw/kimi-provider`.
- Support-only directories outside the manifest-backed leaf taxonomy are currently `extensions/shared/` and `extensions/anthropic-vertex/`.
- Entry helpers observed include `definePluginEntry`, `defineChannelPluginEntry`, `defineSingleProviderPluginEntry`, and `defineSetupPluginEntry`.
- Boundary scripts/tests exist under `scripts/check-extension-plugin-sdk-boundary.mjs`, `scripts/check-plugin-extension-import-boundary.mjs`, `test/extension-plugin-sdk-boundary.test.ts`, and `test/plugin-extension-import-boundary.test.ts`.

## Why this stays one slice

Wave 2R treats plugin boundaries as one exact completion unit because the smallest trustworthy owner is still the shared manifest/package/entry/import seam across all extension packages. The next split should happen only if a distinct boundary family gets its own child index.

## Incoming dependencies

- Core plugin discovery/loader/registry reads extension manifests, entrypoints, and bundled metadata.
- Plugin SDK public subpaths are the intended production import seam for extensions.
- Contract tests under `src/plugins/contracts/` and `src/channels/plugins/contracts/` protect shared plugin/channel behavior.

## Outgoing dependencies

- Extension packages bring their own runtime deps and public SDK imports.
- Support-only helper paths under `extensions/shared/` and `extensions/anthropic-vertex/` feed plugin SDK exports or core provider catalog assembly without a standalone plugin manifest.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; boundary tests/lints/contracts passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-boundaries-tests.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-boundaries-import-tests.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/lint-extensions-no-src-outside-plugin-sdk.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/lint-extensions-no-plugin-sdk-internal.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/lint-extensions-no-relative-outside-package.log`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/test-contracts-plugins.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; boundary tests, import-boundary tests, lint guardrails, and plugin contracts passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.
