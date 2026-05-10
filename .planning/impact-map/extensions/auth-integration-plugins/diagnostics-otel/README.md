# Diagnostics OpenTelemetry Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled service plugin `extensions/diagnostics-otel/` exporting OpenClaw diagnostic events to OpenTelemetry traces, metrics, and logs.

## Why this remains one leaf

This plugin is small in file count but operationally important: one service file controls OTLP exporter setup, diagnostics event handling, redaction, metric/log transport registration, and shutdown.

## Entry contracts

- Plugin id: `diagnostics-otel` from `extensions/diagnostics-otel/openclaw.plugin.json`.
- Package/install contract: `@openclaw/diagnostics-otel` from `extensions/diagnostics-otel/package.json`.
- Loader boundary: `extensions/diagnostics-otel/index.ts` registers a single service from `src/service.ts`.

## Primary behavior surfaces

- `extensions/diagnostics-otel/src/service.ts`: OTLP endpoint normalization, SDK/exporter startup, metrics/log transport registration, event-to-span/metric mapping, redaction, and shutdown.
- `extensions/diagnostics-otel/api.ts`: local barrel re-exporting the narrow `openclaw/plugin-sdk/diagnostics-otel` surface used by the plugin.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; diagnostics OTel tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-diagnostics-otel.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; diagnostics OTel tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `4` (修改 3，新增 1).
- Target-existing changed paths listed here: `4`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/diagnostics-otel/package.json`
- `extensions/diagnostics-otel/src/service.test.ts`
- `extensions/diagnostics-otel/src/service.ts`
- `extensions/diagnostics-otel/tsconfig.json`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->
