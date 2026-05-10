# Channel Plugins

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G006 extension plugin wave evidence recorded

## Scope

Extension-backed messaging channels, including manifest `channels`, entrypoint registration, setup/status/configuration, inbound routing, outbound sending, media/attachments, command gating, and lifecycle monitors.

## Observed channel plugins

The complete 21-plugin list and source paths live in `leaf-index.md`; keep this README focused on shared patterns rather than repeating the inventory.

Common files observed across channel plugins include `index.ts`, `runtime-api.ts`, `src/channel.ts`, `src/send.ts`, `src/monitor.ts`, and `src/setup-surface.ts`. More complex channels have nested monitor/send implementations, for example `extensions/whatsapp/src/auto-reply/**`, `extensions/slack/src/monitor/**`, and `extensions/matrix/src/matrix/**`.

## Channel families

| Family                                   | Examples                                                                                                    | Typical risk                                                                                         |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Bot/API channels                         | `discord`, `telegram`, `slack`, `msteams`, `mattermost`, `googlechat`, `feishu`, `line`, `zalo`, `zalouser` | webhook/polling event normalization, group policy, command gating, thread/session behavior           |
| Browser/session/device-backed channels   | `whatsapp`, `bluebubbles`, `imessage`                                                                       | session persistence, reconnect, media handling, device-specific auth/setup, mock-first compatibility |
| Federated/self-hosted/community channels | `matrix`, `nostr`, `tlon`, `irc`, `nextcloud-talk`, `synology-chat`                                         | account/room/channel selection, long-running monitors, SSRF/media fetch policy, state stores         |
| Streaming/interactive channels           | `twitch`, `slack`, `telegram`                                                                               | buttons/actions/reactions/streaming updates and provider payload limits                              |

## Risk triggers

- Adding or renaming `channels` in a manifest.
- Changing `defineChannelPluginEntry` entrypoint fields.
- Changing `src/channel.ts`, `src/send.ts`, `src/monitor.ts`, `src/setup-surface.ts`, nested monitor/send code, or `runtime-api.ts`.
- Changing inbound context contracts, outbound payload shape, group policy, command gating, reactions/actions/buttons, media, or thread/session bindings.
- Updating shared SDK channel helpers under `openclaw/plugin-sdk/*`.

## 2026-05-09 G006 extension plugin wave

Decision: `exceptioned-deep-partial`.

All channel rows stayed exceptioned because the bounded channel aggregate command timed out after Discord monitor/model-picker failures; no channel leaf received a complete fresh pass.

Evidence: `.planning/impact-map/evidence/extensions-all-verified-wave-2026-05-09/EXTENSIONS-ALL-VERIFIED-WAVE.md`.
