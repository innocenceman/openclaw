# extensions/provider-plugins/copilot-proxy

## 1. 功能结论

**修改**：mark provider plugins startup lazy；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`tests`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、行为调整、集成、构建或发布变化
- 特殊形态：small
- 路径状态摘要（降级事实）：修改 2

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/copilot-proxy`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/copilot-proxy`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/copilot-proxy`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/copilot-proxy`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/copilot-proxy`
- Changed path count: `2`
- Status counts: `修改 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `2` files, `+4` / `-1`

### 归纳依据

- 主要落点：manifest/package metadata。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/copilot-proxy`；`pnpm test:extensions`。
- 相关 commit 主题：perf: mark provider plugins startup lazy

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/copilot-proxy/openclaw.plugin.json`
  - source: `path` [M] `extensions/copilot-proxy/package.json`
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/copilot-proxy/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/copilot-proxy/package.json` — build/release evidence

### 路径证据

- 修改 `extensions/copilot-proxy/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/copilot-proxy/package.json`：更新插件包元数据/版本或依赖声明。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/copilot-proxy` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/copilot-proxy/change-to-test.md` 的验证建议。
