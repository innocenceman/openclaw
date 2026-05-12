# scripts/packaging/pre-commit

## 1. 功能结论

**修改**：git-hooks skip ignored staged paths；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 1

## 3. 功能级详细差异

### 修复 git-hooks skip ignored staged paths

修复 git-hooks：skip ignored staged paths

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/packaging/pre-commit`
- Changed path count: `1`
- Status counts: `修改 1`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `1` files, `+11` / `-2`

### 归纳依据

- 主要落点：implementation。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(git-hooks): skip ignored staged paths

### Dimension evidence

- `maintenance-修复-git-hooks-skip-ignored-staged-paths` / 修复 git-hooks skip ignored staged paths:
  - source: `path` [M] `git-hooks/pre-commit` — semantic cue

### 路径证据

- 修改 `git-hooks/pre-commit`：调整 pre commit（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/packaging/pre-commit` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/pre-commit/change-to-test.md` 的验证建议。
