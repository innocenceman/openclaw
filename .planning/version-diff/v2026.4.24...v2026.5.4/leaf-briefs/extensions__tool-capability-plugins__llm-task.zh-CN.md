# extensions/tool-capability-plugins/llm-task

## 1. 功能结论

**新增**：declare startup plugin imports explicitly；**修改**：plugins narrow optional tool cold loads、enforce plugin tool manifest contracts、llm-task normalize provider-prefixed model overrides；**迁移/重构**：pin remaining extension api surfaces、tighten plugin runtime sdk boundaries；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 5

## 3. 功能级详细差异

### 修复 enforce plugin tool manifest contracts

修复 enforce plugin tool manifest contracts

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 llm-task normalize provider-prefixed model overrides

修复 llm-task：normalize provider-prefixed model overrides

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 修复 plugins narrow optional tool cold loads

修复 plugins：narrow optional tool cold loads

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 新增 declare startup plugin imports explicitly

新增 declare startup plugin imports explicitly

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 pin remaining extension api surfaces

迁移/重构 pin remaining extension api surfaces

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 迁移/重构 tighten plugin runtime sdk boundaries

迁移/重构 tighten plugin runtime sdk boundaries

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 llm task public API barrel、plugin manifest/control-plane metadata、runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 llm task tool regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/tool-capability-plugins/llm-task`
- Changed path count: `6`
- Status counts: `新增 1、修改 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `6` files, `+104` / `-33`

### 归纳依据

- 主要落点：manifest/package metadata、implementation、plugin entry/API surface、tests/contracts。
- 新增或暴露的关键符号包括：`stripDuplicateProviderPrefix`, `formatThinkingPolicy`, `supportsThinkingPolicyLevel`。
- 建议优先验证：优先运行 `pnpm test -- extensions/llm-task/src/llm-task-tool.test.ts`；`pnpm build`。
- 相关 commit 主题：fix(plugins): narrow optional tool cold loads；fix: enforce plugin tool manifest contracts；feat: declare startup plugin imports explicitly；refactor: pin remaining extension api surfaces；refactor: tighten plugin runtime sdk boundaries；fix(llm-task): normalize provider-prefixed model overrides

### Dimension evidence

- `public-contract-修复-enforce-plugin-tool-manifest-contracts` / 修复 enforce plugin tool manifest contracts:
  - source: `path` [M] `extensions/llm-task/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.ts` — semantic cue
- `maintenance-修复-llm-task-normalize-provider-prefixed-model-o` / 修复 llm-task normalize provider-prefixed model overrides:
  - source: `path` [M] `extensions/llm-task/api.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/llm-task/package.json` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/runtime-api.ts` — semantic cue
- `maintenance-修复-plugins-narrow-optional-tool-cold-loads` / 修复 plugins narrow optional tool cold loads:
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.ts` — semantic cue
- `maintenance-新增-declare-startup-plugin-imports-explicitly` / 新增 declare startup plugin imports explicitly:
  - source: `path` [M] `extensions/llm-task/openclaw.plugin.json` — semantic cue
- `public-contract-迁移-重构-pin-remaining-extension-api-surfaces` / 迁移/重构 pin remaining extension api surfaces:
  - source: `path` [M] `extensions/llm-task/api.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/llm-task/package.json` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/runtime-api.ts` — semantic cue
- `runtime-behavior-迁移-重构-tighten-plugin-runtime-sdk-boundaries` / 迁移/重构 tighten plugin runtime sdk boundaries:
  - source: `path` [M] `extensions/llm-task/api.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/llm-task/package.json` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.test.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.ts` — semantic cue
  - source: `path` [M] `extensions/llm-task/src/runtime-api.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/llm-task/api.ts` — contract evidence
  - source: `path` [M] `extensions/llm-task/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/llm-task/src/runtime-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/llm-task/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/llm-task/src/llm-task-tool.test.ts` — test evidence

### 路径证据

- 新增 `extensions/llm-task/src/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/llm-task/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/llm-task/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/llm-task/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/llm-task/src/llm-task-tool.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/llm-task/src/llm-task-tool.ts`：调整 llm task tool（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/tool-capability-plugins/llm-task` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/tool-capability-plugins/llm-task/change-to-test.md` 的验证建议。
