# Device Pairing Plugin Code Paths

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

## 1. Plugin registration and config path

```text
openclaw.plugin.json -> index.ts
  -> publicUrl config / gateway URL resolution
```

Impact: Pairing URL generation, setup-code UX, and config UI hints.

## 2. Pairing setup and QR path

```text
index.ts
  -> issueDeviceBootstrapToken
  -> renderQrPngBase64 / temp PNG file
  -> channel-specific send helpers
```

Impact: Setup-code creation, QR delivery, temp-file handling, and channel send behavior.

## 3. Pairing approval/list/revoke path

```text
index.ts / api.ts
  -> listDevicePairing / approveDevicePairing / revokeDeviceBootstrapToken / clearDeviceBootstrapTokens
```

Impact: Pending-request inspection and state mutation for device approvals.

## 4. Notification service path

```text
notify.ts
  -> subscriber state file
  -> listDevicePairing() polling
  -> formatted notifications
```

Impact: Pairing alert delivery and persistence across runs.

## Trace rule

Start with repo-native file inspection and the nearest local tests named in `change-to-test.md`. Use graph tools only after fresh bounded graph coverage is recorded for the exact slice.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `12` changed path(s) to this final leaf. `12` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 8, 'A': 4}`.

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

<!-- version-diff-refresh:v2026.4.24:end -->
