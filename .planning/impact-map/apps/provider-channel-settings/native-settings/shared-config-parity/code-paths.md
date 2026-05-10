# Shared Native Config Parity Code Paths

Coverage: `exceptioned-deep-partial`

| Path | Trace start | Risk |
| --- | --- | --- |
| Native settings flow | Native settings docs plus `ui/provider-channel-settings/web-settings/` and docs sync leaves | Provider/channel list drift, persisted auth/config state drift, platform-specific form behavior. |
| Parity edge | `ui/provider-channel-settings/web-settings/` and docs sync | Web/native/docs provider and channel surfaces can diverge. |
