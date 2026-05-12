# src/channel-abstraction/routing

## 1. 功能结论

**修改**：allow route bindings to override DM session scope；**迁移/重构**：trim cli helper exports、remove dead private helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 3

## 3. 功能级详细差异

### 修复 allow route bindings to override DM session scope

修复 allow route bindings to override DM session scope

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 trim cli helper exports

迁移/重构 trim cli helper exports

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 resolve route regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/routing`
- Changed path count: `3`
- Status counts: `修改 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `3` files, `+113` / `-5`

### 归纳依据

- 主要落点：implementation、tests/contracts。
- 新增或暴露的关键符号包括：`formatChannelDefaultAccountPath`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：refactor: trim cli helper exports；refactor: remove dead private helpers；fix: allow route bindings to override DM session scope

### Dimension evidence

- `maintenance-修复-allow-route-bindings-to-override-DM-session` / 修复 allow route bindings to override DM session scope:
  - source: `path` [M] `src/routing/resolve-route.test.ts` — semantic cue
  - source: `path` [M] `src/routing/resolve-route.ts` — semantic cue
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/routing/default-account-warnings.ts` — semantic cue
  - source: `path` [M] `src/routing/resolve-route.test.ts` — semantic cue
  - source: `path` [M] `src/routing/resolve-route.ts` — semantic cue
- `migration-迁移-重构-trim-cli-helper-exports` / 迁移/重构 trim cli helper exports:
  - source: `path` [M] `src/routing/default-account-warnings.ts` — semantic cue
  - source: `path` [M] `src/routing/resolve-route.test.ts` — semantic cue
  - source: `path` [M] `src/routing/resolve-route.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/routing/resolve-route.test.ts` — test evidence

### 路径证据

- 修改 `src/routing/default-account-warnings.ts`：调整 default account warnings（implementation）。
- 修改 `src/routing/resolve-route.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/routing/resolve-route.ts`：调整 resolve route（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/channel-abstraction/routing` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/channel-abstraction/routing/change-to-test.md` 的验证建议。
