# src/channel-abstraction/allowlists

## 1. 功能结论

**迁移/重构**：hide allowlist helper、remove dead private helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 迁移/重构 hide allowlist helper

迁移/重构 hide allowlist helper

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/allowlists`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `2` files, `+2` / `-2`

### 归纳依据

- 主要落点：implementation。
- 新增或暴露的关键符号包括：`resolveAllowlistIdAdditions`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：refactor: hide allowlist helper；refactor: remove dead private helpers

### Dimension evidence

- `migration-迁移-重构-hide-allowlist-helper` / 迁移/重构 hide allowlist helper:
  - source: `path` [M] `src/channels/allowlists/resolve-utils.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/allowlist-match.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/channels/allowlists/resolve-utils.ts` — semantic cue
  - source: `path` [M] `src/channels/plugins/allowlist-match.ts` — semantic cue

### 路径证据

- 修改 `src/channels/allowlists/resolve-utils.ts`：调整 resolve utils（implementation）。
- 修改 `src/channels/plugins/allowlist-match.ts`：调整 allowlist match（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/channel-abstraction/allowlists` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/channel-abstraction/allowlists/change-to-test.md` 的验证建议。
