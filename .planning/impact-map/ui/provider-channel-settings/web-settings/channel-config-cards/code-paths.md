# Web Channel Config Cards Code Paths

Coverage: `exceptioned-deep-partial`

| Path                    | Trace start                                                                            | Likely downstream impact                                                                                       |
| ----------------------- | -------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Owned web settings path | `ui/src/ui/controllers/channels.ts`, `ui/src/ui/views/channels*.ts`, `app-channels.ts` | Form/card rendering, provider/channel list ordering, config persistence, local state, or cross-surface parity. |
| Gateway/API edge        | `controllers/config.ts`, `controllers/channels.ts`, gateway config/channel endpoints   | Save/apply/status behavior and response-shape assumptions.                                                     |

## Trace rule

Start with the controller/view/helper that owns the setting; widen to app shell only when the setting affects route visibility or global state.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `12` changed path(s) to this final leaf. `12` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 12}`.

- `ui/src/ui/views/channels.discord.ts`
- `ui/src/ui/views/channels.googlechat.ts`
- `ui/src/ui/views/channels.imessage.ts`
- `ui/src/ui/views/channels.nostr-profile-form.ts`
- `ui/src/ui/views/channels.nostr.ts`
- `ui/src/ui/views/channels.shared.ts`
- `ui/src/ui/views/channels.signal.ts`
- `ui/src/ui/views/channels.slack.ts`
- `ui/src/ui/views/channels.telegram.ts`
- `ui/src/ui/views/channels.test.ts`
- `ui/src/ui/views/channels.ts`
- `ui/src/ui/views/channels.whatsapp.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
