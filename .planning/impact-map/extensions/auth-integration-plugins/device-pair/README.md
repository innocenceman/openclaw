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
