# docs/mintlify/.i18n

## 一句话结论

.i18n 所属的 Docs, generated baselines, changelog and public guidance 有 364 个路径变化（新增 38、修改 10、删除 313、重命名 3），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.i18n`
- Changed path count: `364`
- Status counts: `新增 38、修改 10、删除 313、重命名 3`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `364` files, `+4898` / `-60075`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 38、修改 10、删除 313、重命名 3。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/.i18n/glossary.ar.json`
- `docs/.i18n/glossary.de.json`
- `docs/.i18n/glossary.es.json`
- `docs/.i18n/glossary.fr.json`
- `docs/.i18n/glossary.id.json`
- `docs/.i18n/glossary.it.json`
- `docs/.i18n/glossary.ko.json`
- `docs/.i18n/glossary.pl.json`
- `docs/.i18n/glossary.pt-BR.json`
- `docs/.i18n/glossary.th.json`
- `docs/.i18n/glossary.tr.json`
- `docs/.i18n/glossary.uk.json`
- `scripts/docs-i18n/behavior_baseline_test.go`
- `scripts/docs-i18n/doc_chunked_raw.go`
- `scripts/docs-i18n/doc_mode_test.go`
- `scripts/docs-i18n/localized_links.go`
- `scripts/docs-i18n/localized_links_test.go`
- `scripts/docs-i18n/main_test.go`
- `scripts/docs-i18n/pi_rpc_client_test.go`
- `scripts/docs-i18n/relocalize.go`
- `scripts/docs-i18n/relocalize_test.go`
- `scripts/docs-i18n/testdata/behavior/fenced-singleton-retry/case.json`
- `scripts/docs-i18n/testdata/behavior/fenced-singleton-retry/raw-malformed.txt`
- `scripts/docs-i18n/testdata/behavior/fenced-singleton-retry/source.txt`
- `scripts/docs-i18n/testdata/behavior/frontmatter-fallback/case.json`
- `scripts/docs-i18n/testdata/behavior/frontmatter-fallback/expected.txt`
- `scripts/docs-i18n/testdata/behavior/frontmatter-fallback/masked-tagged-wrapper.txt`
- `scripts/docs-i18n/testdata/behavior/frontmatter-fallback/source.txt`
- `scripts/docs-i18n/testdata/behavior/protocol-leak-split/case.json`
- `scripts/docs-i18n/testdata/behavior/protocol-leak-split/expected.txt`
- … 另有 8 个路径，详见 `leaf-impact.json`。

### 修改

- `docs/.i18n/README.md`
- `docs/.i18n/glossary.ja-JP.json`
- `scripts/docs-i18n/main.go`
- `scripts/docs-i18n/pi_command.go`
- `scripts/docs-i18n/pi_rpc_client.go`
- `scripts/docs-i18n/process.go`
- `scripts/docs-i18n/prompt.go`
- `scripts/docs-i18n/translator.go`
- `scripts/docs-i18n/translator_test.go`
- `scripts/docs-i18n/util.go`

### 删除

- `docs/.i18n/zh-CN.tm.jsonl`
- `docs/zh-CN/AGENTS.md`
- `docs/zh-CN/automation/auth-monitoring.md`
- `docs/zh-CN/automation/cron-jobs.md`
- `docs/zh-CN/automation/cron-vs-heartbeat.md`
- `docs/zh-CN/automation/gmail-pubsub.md`
- `docs/zh-CN/automation/hooks.md`
- `docs/zh-CN/automation/poll.md`
- `docs/zh-CN/automation/troubleshooting.md`
- `docs/zh-CN/automation/webhook.md`
- `docs/zh-CN/brave-search.md`
- `docs/zh-CN/channels/bluebubbles.md`
- `docs/zh-CN/channels/broadcast-groups.md`
- `docs/zh-CN/channels/channel-routing.md`
- `docs/zh-CN/channels/discord.md`
- `docs/zh-CN/channels/feishu.md`
- `docs/zh-CN/channels/googlechat.md`
- `docs/zh-CN/channels/grammy.md`
- `docs/zh-CN/channels/group-messages.md`
- `docs/zh-CN/channels/groups.md`
- `docs/zh-CN/channels/imessage.md`
- `docs/zh-CN/channels/index.md`
- `docs/zh-CN/channels/line.md`
- `docs/zh-CN/channels/location.md`
- `docs/zh-CN/channels/matrix.md`
- `docs/zh-CN/channels/mattermost.md`
- `docs/zh-CN/channels/msteams.md`
- `docs/zh-CN/channels/nextcloud-talk.md`
- `docs/zh-CN/channels/nostr.md`
- `docs/zh-CN/channels/pairing.md`
- … 另有 283 个路径，详见 `leaf-impact.json`。

### 重命名

- `docs/.i18n/ja-JP.tm.jsonl`
- `docs/zh-CN/CLAUDE.md`
- `docs/zh-CN/reference/templates/CLAUDE.md`

## 兼容性判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- 文档读者和维护者

## 建议验证

- 首选验证：English title or short-label change | `pnpm docs:check-i18n-glossary` | Add glossary coverage before rerunning `scripts/docs-i18n`.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/.i18n` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/.i18n/change-to-test.md` 的验证建议。
