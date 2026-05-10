# Web Provider and Channel Settings Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Path                             | Trace start                                                                                                  | Likely downstream impact                                                        |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------- |
| Config schema to rendered form   | `ui/src/ui/controllers/config.ts` -> `ui/src/ui/views/config.ts` -> `ui/src/ui/views/config-form.ts`         | Schema-driven form layout, save/apply behavior, config-ui hint drift.           |
| Channel snapshot to config cards | `ui/src/ui/controllers/channels.ts` -> `ui/src/ui/views/channels.ts` -> `ui/src/ui/views/channels.config.ts` | Channel status visibility, config editing, provider/channel list ordering.      |
| Local navigation/settings path   | `ui/src/ui/navigation.ts`, `ui/src/ui/app-settings.ts`                                                       | Which settings slices are reachable and how UI state persists between sessions. |
| Cross-platform settings parity   | This leaf + `apps/provider-channel-settings/native-settings/`                                                | Divergence between web and native config/channel surfaces.                      |

## Trace rule

Start with controller/view pairs before widening into the broader web-ui shell.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `64` changed path(s) to this final leaf. `64` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 20, 'M': 44}`.

- `src/ui-app-settings.agents-files-refresh.test.ts`
- `ui/package.json`
- `ui/src/ui/app-channels.ts`
- `ui/src/ui/app-gateway.ts`
- `ui/src/ui/app-last-active-session.ts`
- `ui/src/ui/app-lifecycle.ts`
- `ui/src/ui/app-polling.ts`
- `ui/src/ui/app-settings.refresh-active-tab.node.test.ts`
- `ui/src/ui/app-settings.ts`
- `ui/src/ui/app-tool-stream.ts`
- `ui/src/ui/app-view-state.ts`
- `ui/src/ui/canvas-url.ts`
- `ui/src/ui/chat-event-reload.ts`
- `ui/src/ui/chat-model-ref.ts`
- `ui/src/ui/chat-model-ref.types.ts`
- `ui/src/ui/chat-model-select-state.ts`
- `ui/src/ui/chat-model.test-helpers.ts`
- `ui/src/ui/connect-error.node.test.ts`
- `ui/src/ui/connect-error.test.ts`
- `ui/src/ui/connect-error.ts`
- `ui/src/ui/control-ui-auth.ts`
- `ui/src/ui/controllers/channels.test.ts`
- `ui/src/ui/controllers/channels.ts`
- `ui/src/ui/controllers/config.test.ts`
- `ui/src/ui/controllers/config.ts`
- `ui/src/ui/custom-theme.test.ts`
- `ui/src/ui/custom-theme.ts`
- `ui/src/ui/embed-sandbox.ts`
- `ui/src/ui/external-link.ts`
- `ui/src/ui/format.test.ts`
- `... 另有 34 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
