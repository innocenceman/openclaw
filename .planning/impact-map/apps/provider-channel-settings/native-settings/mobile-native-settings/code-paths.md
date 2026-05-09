# Mobile Native Settings Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Risk |
| --- | --- | --- |
| Native settings flow | `apps/ios/Sources/*Gateway*`, `apps/ios/Tests/*Gateway*`, `apps/android/app/src/main/java/ai/openclaw/app/ui/*Settings*`, `ConnectTabScreen.kt` | Provider/channel list drift, persisted auth/config state drift, platform-specific form behavior. |
| Parity edge | `ui/provider-channel-settings/web-settings/` and docs sync | Web/native/docs provider and channel surfaces can diverge. |
