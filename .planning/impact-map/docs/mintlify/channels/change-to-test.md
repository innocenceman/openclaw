# Docs channels Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                          | First validation                             | Escalation trigger                                                                        |
| ---------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Existing page copy, examples, or frontmatter changed | `pnpm check:docs`                            | Escalate to product-specific tests only when the docs change is coupled to code behavior. |
| Page added, renamed, moved, or redirect/nav changed  | `pnpm docs:check-links` and `pnpm docs:list` | Update `docs/docs.json` in the same change when Mintlify route ownership changes.         |
| New English title or short label introduced          | `pnpm docs:check-i18n-glossary`              | Add glossary coverage before any zh-CN rerun.                                             |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `33` (修改 29，新增 4).
- Target-existing path refs in active map: `33`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `docs/channels/access-groups.md`
- `docs/channels/bluebubbles.md`
- `docs/channels/broadcast-groups.md`
- `docs/channels/channel-routing.md`
- `docs/channels/discord.md`
- `docs/channels/feishu.md`
- `docs/channels/googlechat.md`
- `docs/channels/group-messages.md`
- `docs/channels/groups.md`
- `docs/channels/imessage.md`
- `docs/channels/index.md`
- `docs/channels/irc.md`
- `docs/channels/line.md`
- `docs/channels/matrix-migration.md`
- `docs/channels/matrix-push-rules.md`
- `docs/channels/matrix.md`
- `docs/channels/mattermost.md`
- `docs/channels/msteams.md`
- `docs/channels/nextcloud-talk.md`
- `docs/channels/nostr.md`
- `docs/channels/pairing.md`
- `docs/channels/qa-channel.md`
- `docs/channels/qqbot.md`
- `docs/channels/signal.md`
- `docs/channels/slack.md`
- `docs/channels/synology-chat.md`
- `docs/channels/telegram.md`
- `docs/channels/tlon.md`
- `docs/channels/troubleshooting.md`
- `docs/channels/twitch.md`
- `docs/channels/whatsapp.md`
- `docs/channels/yuanbao.md`
- `docs/channels/zalo.md`
- `docs/channels/zalouser.md`
<!-- version-diff-refresh:v2026.5.4:end -->
