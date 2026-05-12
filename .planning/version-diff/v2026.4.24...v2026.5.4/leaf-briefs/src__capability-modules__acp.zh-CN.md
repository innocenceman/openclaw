# src/capability-modules/acp

## 1. 功能结论

**迁移/重构**：trim acp local exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 1

## 3. 功能级详细差异

### 迁移/重构 trim acp local exports

迁移/重构 trim acp local exports

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

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

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp`
- Changed path count: `1`
- Status counts: `修改 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `1` files, `+2` / `-2`

### 归纳依据

- 主要落点：implementation。
- 新增或暴露的关键符号包括：`resolveToolNameForPermission`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：refactor: trim acp local exports

### Dimension evidence

- `migration-迁移-重构-trim-acp-local-exports` / 迁移/重构 trim acp local exports:
  - source: `path` [M] `src/acp/approval-classifier.ts` — semantic cue

### 路径证据

- 修改 `src/acp/approval-classifier.ts`：调整 approval classifier（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/acp` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/acp/change-to-test.md` 的验证建议。
