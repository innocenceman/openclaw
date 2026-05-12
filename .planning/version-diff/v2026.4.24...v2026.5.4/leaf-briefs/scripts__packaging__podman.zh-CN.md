# scripts/packaging/podman

## 1. 功能结论

**修改**：reduce root cleanup files、wire OPENCLAW_INSTALL_BROWSER build-arg to setup script；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`build`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：文档语义变化、行为调整
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 3

## 3. 功能级详细差异

### 修改 wire OPENCLAW_INSTALL_BROWSER build-arg to setup script

修改 wire OPENCLAW_INSTALL_BROWSER build-arg to setup script

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 reduce root cleanup files

维护调整 reduce root cleanup files

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

文档、说明或生成基线同步了 podman docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

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
- Impact-map dir: `.planning/impact-map/scripts/packaging/podman`
- Changed path count: `3`
- Status counts: `修改 3`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `3` files, `+4` / `-4`

### 归纳依据

- 主要落点：implementation、docs。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：chore: reduce root cleanup files；podman: wire OPENCLAW_INSTALL_BROWSER build-arg to setup script

### Dimension evidence

- `user-visible-修改-wire-OPENCLAW-INSTALL-BROWSER-build-arg-to-s` / 修改 wire OPENCLAW_INSTALL_BROWSER build-arg to setup script:
  - source: `path` [M] `scripts/podman/setup.sh` — semantic cue
  - source: `path` [M] `scripts/run-openclaw-podman.sh` — semantic cue
- `maintenance-维护调整-reduce-root-cleanup-files` / 维护调整 reduce root cleanup files:
  - source: `path` [M] `docs/install/podman.md`
  - source: `path` [M] `scripts/podman/setup.sh`
  - source: `path` [M] `scripts/run-openclaw-podman.sh`
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/install/podman.md` — docs evidence

### 路径证据

- 修改 `docs/install/podman.md`：调整 podman docs（docs）。
- 修改 `scripts/podman/setup.sh`：调整 setup（implementation）。
- 修改 `scripts/run-openclaw-podman.sh`：调整 run openclaw podman（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `scripts/packaging/podman` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/packaging/podman/change-to-test.md` 的验证建议。
