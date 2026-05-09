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
