# feishu Skill Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                    | First validation                                                | Escalation trigger                                         |
| ------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------- |
| Manifest/config changed        | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes. |
| Runtime implementation changed | `pnpm test -- extensions/feishu` or nearest targeted test       | `pnpm test:extensions` when shared helpers are touched.    |
| Package/build surface changed  | `pnpm build` when published or lazy-loaded surface changes      | Run plugin release checks if package metadata changes.     |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `86` (新增 40，修改 41，删除 4，重命名/移动 1).
- Target-existing path refs in active map: `82`; deleted/renamed-away refs kept only in transition artifacts: `4`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

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
<!-- version-diff-refresh:v2026.5.4:end -->
