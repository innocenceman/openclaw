# docs/mintlify/channels

## 1. 功能结论

**文档/生成基线同步**：telegram reuse preview for long text finals、explain missing git during plugin install、channels add Socket vs HTTP comparison and explain shared URL fields、channels inline Slack manifest into Quick Setup with Recommended/Minimal variants；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者、消息渠道使用者、渠道插件维护者
- 变更形态：文档语义变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 2、修改 31、重命名 1

## 3. 功能级详细差异

### 修复 explain missing git during plugin install

文档/生成基线同步记录：修复 explain missing git during plugin install

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 ios harden gateway pairing setup

文档/生成基线同步记录：修复 ios：harden gateway pairing setup

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 resolve small triage issues

文档/生成基线同步记录：修复 resolve small triage issues

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 telegram reuse preview for long text finals

文档/生成基线同步记录：修复 telegram：reuse preview for long text finals

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 telegram stabilize reply dispatch runtime

文档/生成基线同步记录：修复 telegram：stabilize reply dispatch runtime

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修复 telegram stabilize topic dispatch runtime

文档/生成基线同步记录：修复 telegram：stabilize topic dispatch runtime

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 修改 Gate zalouser startup name matching

文档/生成基线同步记录：修改 Gate zalouser startup name matching

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 channels add Socket vs HTTP comparison and explain shared URL fiel…

文档/生成基线同步记录：文档同步 channels：add Socket vs HTTP comparison and explain shared URL fields

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 channels inline Slack manifest into Quick Setup with Recommended/M…

文档/生成基线同步记录：文档同步 channels：inline Slack manifest into Quick Setup with Recommended/Minimal variants

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 文档同步 clarify IRC managed proxy coverage

文档/生成基线同步记录：文档同步 clarify IRC managed proxy coverage

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 access groups docs、bluebubbles docs、broadcast groups docs、channel routing docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 底层路径证据包含删除/重命名，但该 leaf 被归类为 docs-only；这些状态用于确认生成基线/文档已同步，不直接表示该 leaf 自身删除运行时入口。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/channels`
- Changed path count: `34`
- Status counts: `新增 2、修改 31、重命名 1`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `34` files, `+4351` / `-1893`

### 归纳依据

- 主要落点：docs、message delivery、auth/pairing/security behavior。
- 建议优先验证：优先运行 `pnpm check:docs`；`pnpm docs:check-links`；`pnpm docs:list`。
- 相关 commit 主题：fix(telegram): reuse preview for long text finals；fix: explain missing git during plugin install；docs(channels): add Socket vs HTTP comparison and explain shared URL fields；docs(channels): inline Slack manifest into Quick Setup with Recommended/Minimal variants；Gate zalouser startup name matching；fix(telegram): stabilize topic dispatch runtime；fix(ios): harden gateway pairing setup；fix: resolve small triage issues

### Dimension evidence

- `tests-docs-修复-explain-missing-git-during-plugin-install` / 修复 explain missing git during plugin install:
  - source: `path` [A] `docs/channels/access-groups.md`
  - source: `path` [A] `docs/channels/yuanbao.md`
  - source: `path` [M] `docs/channels/bluebubbles.md`
  - source: `path` [M] `docs/channels/broadcast-groups.md`
  - source: `path` [M] `docs/channels/channel-routing.md`
  - source: `path` [R] `docs/channels/matrix-migration.md`
- `tests-docs-修复-ios-harden-gateway-pairing-setup` / 修复 ios harden gateway pairing setup:
  - source: `path` [M] `docs/channels/pairing.md` — semantic cue
- `tests-docs-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `docs/channels/access-groups.md`
  - source: `path` [A] `docs/channels/yuanbao.md`
  - source: `path` [M] `docs/channels/bluebubbles.md`
  - source: `path` [M] `docs/channels/broadcast-groups.md`
  - source: `path` [M] `docs/channels/channel-routing.md`
  - source: `path` [R] `docs/channels/matrix-migration.md`
- `tests-docs-修复-telegram-reuse-preview-for-long-text-finals` / 修复 telegram reuse preview for long text finals:
  - source: `path` [M] `docs/channels/telegram.md` — semantic cue
- `tests-docs-修复-telegram-stabilize-reply-dispatch-runtime` / 修复 telegram stabilize reply dispatch runtime:
  - source: `path` [M] `docs/channels/telegram.md` — semantic cue
- `tests-docs-修复-telegram-stabilize-topic-dispatch-runtime` / 修复 telegram stabilize topic dispatch runtime:
  - source: `path` [M] `docs/channels/telegram.md` — semantic cue
- `tests-docs-修改-Gate-zalouser-startup-name-matching` / 修改 Gate zalouser startup name matching:
  - source: `path` [M] `docs/channels/zalouser.md` — semantic cue
- `tests-docs-文档同步-channels-add-Socket-vs-HTTP-comparison-and` / 文档同步 channels add Socket vs HTTP comparison and explain shared URL fiel…:
  - source: `path` [M] `docs/channels/access-groups.md` — semantic cue
  - source: `path` [M] `docs/channels/bluebubbles.md` — semantic cue
  - source: `path` [M] `docs/channels/broadcast-groups.md` — semantic cue
  - source: `path` [M] `docs/channels/channel-routing.md` — semantic cue
  - source: `path` [M] `docs/channels/discord.md` — semantic cue
  - source: `path` [M] `docs/channels/feishu.md` — semantic cue
- `tests-docs-文档同步-channels-inline-Slack-manifest-into-Quick` / 文档同步 channels inline Slack manifest into Quick Setup with Recommended/M…:
  - source: `path` [M] `docs/channels/access-groups.md` — semantic cue
  - source: `path` [M] `docs/channels/bluebubbles.md` — semantic cue
  - source: `path` [M] `docs/channels/broadcast-groups.md` — semantic cue
  - source: `path` [M] `docs/channels/channel-routing.md` — semantic cue
  - source: `path` [M] `docs/channels/discord.md` — semantic cue
  - source: `path` [M] `docs/channels/feishu.md` — semantic cue
- `tests-docs-文档同步-clarify-IRC-managed-proxy-coverage` / 文档同步 clarify IRC managed proxy coverage:
  - source: `path` [M] `docs/channels/irc.md` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/channels/access-groups.md` — docs evidence
  - source: `path` [M] `docs/channels/bluebubbles.md` — docs evidence
  - source: `path` [M] `docs/channels/broadcast-groups.md` — docs evidence
  - source: `path` [M] `docs/channels/channel-routing.md` — docs evidence
  - source: `path` [M] `docs/channels/discord.md` — docs evidence
  - source: `path` [M] `docs/channels/feishu.md` — docs evidence

### 路径证据

- 新增 `docs/channels/access-groups.md`：调整 access groups docs（docs）。
- 新增 `docs/channels/yuanbao.md`：调整 yuanbao docs（docs）。
- 修改 `docs/channels/bluebubbles.md`：调整 bluebubbles docs（docs）。
- 修改 `docs/channels/broadcast-groups.md`：调整 broadcast groups docs（docs）。
- 修改 `docs/channels/channel-routing.md`：调整 channel routing docs（docs）。
- 修改 `docs/channels/discord.md`：调整 discord docs（docs）。
- 修改 `docs/channels/feishu.md`：调整 feishu docs（docs）。
- 修改 `docs/channels/googlechat.md`：调整 googlechat docs（docs）。
- 修改 `docs/channels/group-messages.md`：调整 group messages docs（message delivery）。
- 修改 `docs/channels/groups.md`：调整 groups docs（docs）。
- 修改 `docs/channels/imessage.md`：调整 imessage docs（message delivery）。
- 修改 `docs/channels/index.md`：调整 index docs（docs）。
- 修改 `docs/channels/irc.md`：调整 irc docs（docs）。
- 修改 `docs/channels/line.md`：调整 line docs（docs）。
- 重命名 `docs/channels/matrix-migration.md`：调整 matrix migration docs（docs）。
- 其余 19 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/channels` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/channels/change-to-test.md` 的验证建议。
