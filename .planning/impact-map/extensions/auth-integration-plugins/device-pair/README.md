# Device Pairing Plugin

Coverage: `verified`
Freshness: 2026-05-08 P0 refresh-to-verified evidence recorded

## Scope

Bundled config/integration plugin `extensions/device-pair/` for pairing setup codes, pairing approvals, QR rendering, and pairing notifications.

## Why this remains one leaf

Device pairing reaches into CLI, gateway, and channel-send surfaces, but the plugin itself is still one manifest-backed integration package with its orchestration concentrated in `index.ts` plus a few local helpers.

## Entry contracts

- Plugin id: `device-pair` from `extensions/device-pair/openclaw.plugin.json`.
- No local `package.json` is present; this is a manifest-backed bundled plugin without its own npm package file.
- Loader boundary: `extensions/device-pair/index.ts` registers the plugin behavior and uses local `api.ts`, `notify.ts`, and `qr-image.ts` helpers.

## Primary behavior surfaces

- `extensions/device-pair/index.ts`: pairing commands, URL resolution, QR payload generation, channel-specific QR sending, and cleanup behavior.
- `extensions/device-pair/api.ts`: public local barrel for device-bootstrap, core URL helpers, sandbox helpers, and QR PNG rendering.
- `extensions/device-pair/notify.ts`: pairing-notification state file, subscriber management, pending-request formatting, and notification delivery logic.
- `extensions/device-pair/qr-image.ts`: QR rendering helper used by pairing flows.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.

## Current validation state

This map was deepened from repo-native source and test-path inspection only. No product code was modified, and no product tests/builds were run during this documentation pass.

## 2026-05-08 P0 original wave evidence

Decision: `validated-deep-partial`.

Reason: GN-STALE + CRG-STALE; device-pair tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-VERIFIED-WAVE.md` and validation logs `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/logs/extensions-device-pair.log`.

No product source was changed during this wave.

## 2026-05-08 P0 refresh-to-verified evidence

Decision: `verified`.

Reason: GitNexus and code-review-graph are fresh; device-pair, QR, and device-pairing tests passed.

Evidence: `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/P0-REFRESH-TO-VERIFIED.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/gitnexus-refresh.md`, `.planning/impact-map/evidence/p0-verified-wave-2026-05-08/code-review-graph-refresh.md`.

No product source was changed during this refresh pass.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `model-provider-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `12` (修改 8，新增 4).
- Target-existing changed paths listed here: `12`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `0`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

- `extensions/device-pair/api.ts`
- `extensions/device-pair/index.test.ts`
- `extensions/device-pair/index.ts`
- `extensions/device-pair/notify.test.ts`
- `extensions/device-pair/notify.ts`
- `extensions/device-pair/openclaw.plugin.json`
- `extensions/device-pair/pair-command-approve.ts`
- `extensions/device-pair/pair-command-auth.test.ts`
- `extensions/device-pair/pair-command-auth.ts`
- `extensions/device-pair/qr-image.ts`
- `src/cli/qr-cli.test.ts`
- `src/infra/device-pairing.test.ts`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `model-provider-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `verified`
- Changed paths in diff: `9`
- Target-existing changed paths reflected here: `9`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/device-pair/index.test.ts`
- `extensions/device-pair/index.ts`
- `extensions/device-pair/notify.test.ts`
- `extensions/device-pair/notify.ts`
- `extensions/device-pair/openclaw.plugin.json`
- `extensions/device-pair/pair-command-auth.test.ts`
- `extensions/device-pair/pair-command-auth.ts`
- `src/cli/qr-cli.test.ts`
- `src/infra/device-pairing.test.ts`

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
