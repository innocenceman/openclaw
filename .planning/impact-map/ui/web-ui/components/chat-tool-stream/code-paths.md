# Web Chat and Tool Streaming Code Paths

Coverage: `exceptioned-deep-partial`

| Path                 | Trace start                                                                                                 | Likely downstream impact                                                                                                |
| -------------------- | ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Owned web path       | `app-chat.ts`, `app-tool-stream.ts`, `chat-*.ts`, `markdown.ts`, `tool-display.ts`, `assistant-identity.ts` | Gateway lifecycle, chat/tool behavior, config/channel settings, route visibility, usage/local state, or browser safety. |
| Controller/view edge | `ui/src/ui/controllers/**` -> `ui/src/ui/views/**`                                                          | RPC-backed state and rendered form/card parity.                                                                         |

## Trace rule

Begin with the smallest handler/controller/view pair, then widen to `app.ts` only when behavior crosses tab, lifecycle, or global app-state boundaries.
