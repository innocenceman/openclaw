# feishu Skill Plugin

Coverage: `deep-partial`
Freshness: 2026-05-07 repo-native structural inspection only

## Scope

Leaf module for `extensions/feishu` (skills=['./skills']).

## Leaf status

This is a leaf module in the impact-map taxonomy: split further only when a single file path inside this leaf develops an independently testable ownership boundary.

## Detail files

- `file-roles.md`: concrete file/path ownership and likely impact radius.
- `code-paths.md`: behavior paths to trace before changing code.
- `change-to-test.md`: smallest validation ladder for common changes.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 semantic refresh

- Transition: `v2026.3.28 -> v2026.4.24`.
- Feature group: `skill-plugins`.
- Risk: `high`.
- Compatibility: `behavior-change`.
- Changed paths in this leaf: `86` (新增 40，修改 41，删除 4，重命名/移动 1).
- Target-existing changed paths listed here: `82`.
- Deleted or renamed-away paths are intentionally not repeated in active impact-map: `4`; see `.planning/version-diff/v2026.3.28...v2026.4.24/deleted-paths.txt` and `obsolete-impact-map-references.json`.
- Coverage source: active target-version impact-map plus `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`.

Representative target-version paths:

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
- `... 另有 70 个目标版本仍存在路径，完整列表见 `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json`。`

Refresh note: generated from target-version diff facts after GitNexus and code-review-graph target-source refresh. Active impact-map intentionally avoids exact references to target-deleted source paths.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff semantic refresh: v2026.5.4

- Feature: `skill-plugins`
- Risk: `high`
- Compatibility: `behavior-change`
- Coverage: `exceptioned-deep-partial`
- Changed paths in diff: `57`
- Target-existing changed paths reflected here: `57`
- Deleted or renamed-away paths omitted from active impact-map: `0`

### Target-version changed paths

- `extensions/feishu/src/async.test.ts`
- `extensions/feishu/src/async.ts`
- `extensions/feishu/src/audio-preflight.runtime.ts`
- `extensions/feishu/src/bitable.test.ts`
- `extensions/feishu/src/bitable.ts`
- `extensions/feishu/src/bot-content.ts`
- `extensions/feishu/src/bot-group-name.test.ts`
- `extensions/feishu/src/chat.test.ts`
- `extensions/feishu/src/chat.ts`
- `extensions/feishu/src/client-timeout.ts`
- `extensions/feishu/src/comment-dispatcher.ts`
- `extensions/feishu/src/comment-handler-runtime-api.ts`
- `extensions/feishu/src/comment-handler.test.ts`
- `extensions/feishu/src/comment-handler.ts`
- `extensions/feishu/src/comment-shared.ts`
- `extensions/feishu/src/comment-target.ts`
- `extensions/feishu/src/config-schema.test.ts`
- `extensions/feishu/src/dedup-runtime-api.ts`
- `extensions/feishu/src/dedup.ts`
- `extensions/feishu/src/dedupe-key.ts`
- `extensions/feishu/src/directory.test.ts`
- `extensions/feishu/src/directory.ts`
- `extensions/feishu/src/drive.test.ts`
- `extensions/feishu/src/drive.ts`
- `extensions/feishu/src/dynamic-agent.ts`
- `extensions/feishu/src/event-types.ts`
- `extensions/feishu/src/lifecycle.test-support.ts`
- `extensions/feishu/src/media.test.ts`
- `extensions/feishu/src/media.ts`
- `extensions/feishu/src/mention.ts`
- `extensions/feishu/src/monitor-transport-runtime-api.ts`
- `extensions/feishu/src/outbound.test.ts`
- `extensions/feishu/src/outbound.ts`
- `extensions/feishu/src/perm.ts`
- `extensions/feishu/src/pins.ts`
- `extensions/feishu/src/policy.test.ts`
- `extensions/feishu/src/policy.ts`
- `extensions/feishu/src/post.ts`
- `extensions/feishu/src/reactions.ts`
- `extensions/feishu/src/reply-dispatcher.test.ts`
- … plus 17 more target-existing changed paths.

### Refresh note

This generated block is derived from the canonical version-diff leaf mapping. Active impact-map leaves must describe the target source version only; historical deleted-path evidence stays under `.planning/version-diff/`.

<!-- version-diff-refresh:v2026.5.4:end -->
