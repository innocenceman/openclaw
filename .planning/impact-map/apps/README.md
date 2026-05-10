# Apps Impact Map

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G007 split and validation evidence

This module maps native app surfaces under `apps/`.

## Submodules

| Submodule | Directory | Coverage | Primary risk | First validation |
| --- | --- | --- | --- | --- |
| macOS app | `macos/` | `exceptioned-deep-partial` | menu bar lifecycle, gateway coordination, packaging/restart, bundle resources | `macos/change-to-test.md` |
| iOS and Android apps | `ios-android/` | `exceptioned-deep-partial` | mobile connection state, onboarding, shared kit drift, real-device checks | `ios-android/change-to-test.md` |
| Native provider/channel settings | `provider-channel-settings/native-settings/` | `exceptioned-deep-partial` | cross-platform settings forms, persisted auth/config state, provider/channel list drift | `provider-channel-settings/native-settings/change-to-test.md` |

## Boundary

Web/control UI coverage lives in `../ui/`. Documentation sync coverage lives in `../docs/provider-channel-settings-docs-sync/`.
