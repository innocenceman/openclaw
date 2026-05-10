# feishu Skill Plugin Code Paths

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Path                       | Trace start                              | Likely downstream impact                                             |
| -------------------------- | ---------------------------------------- | -------------------------------------------------------------------- |
| Manifest to plugin catalog | `extensions/feishu/openclaw.plugin.json` | Plugin discovery, config schema, UI hints, skills/tool availability. |
| Entrypoint to runtime      | `extensions/feishu/index.ts`             | Plugin loader/runtime contracts and package staging.                 |

## Trace rule

Start with repo-native `rg`/LSP/file inspection. Use GitNexus or code-review-graph only when the relevant slice has fresh indexed coverage recorded in `.planning/tools/GRAPH-COVERAGE.md`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `86` changed path(s) to this final leaf. `82` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'A': 40, 'M': 41, 'D': 4, 'R': 1}`.

- `extensions/feishu/src/app-registration.ts`
- `extensions/feishu/src/approval-auth.test.ts`
- `extensions/feishu/src/approval-auth.ts`
- `extensions/feishu/src/bitable.ts`
- `extensions/feishu/src/bot-content.ts`
- `extensions/feishu/src/bot-runtime-api.ts`
- `extensions/feishu/src/bot-sender-name.ts`
- `extensions/feishu/src/channel-runtime-api.ts`
- `extensions/feishu/src/chat.test.ts`
- `extensions/feishu/src/chat.ts`
- `extensions/feishu/src/comment-dispatcher-runtime-api.ts`
- `extensions/feishu/src/comment-dispatcher.test.ts`
- `extensions/feishu/src/comment-dispatcher.ts`
- `extensions/feishu/src/comment-handler-runtime-api.ts`
- `extensions/feishu/src/comment-handler.test.ts`
- `extensions/feishu/src/comment-handler.ts`
- `extensions/feishu/src/comment-reaction.test.ts`
- `extensions/feishu/src/comment-reaction.ts`
- `extensions/feishu/src/comment-shared.test.ts`
- `extensions/feishu/src/comment-shared.ts`
- `extensions/feishu/src/comment-target.ts`
- `extensions/feishu/src/conversation-id.test.ts`
- `extensions/feishu/src/conversation-id.ts`
- `extensions/feishu/src/dedup-runtime-api.ts`
- `extensions/feishu/src/dedup.ts`
- `extensions/feishu/src/directory.ts`
- `extensions/feishu/src/drive.test.ts`
- `extensions/feishu/src/drive.ts`
- `extensions/feishu/src/event-types.ts`
- `extensions/feishu/src/external-keys.ts`
- `... 另有 52 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

<!-- version-diff-refresh:v2026.4.24:end -->
