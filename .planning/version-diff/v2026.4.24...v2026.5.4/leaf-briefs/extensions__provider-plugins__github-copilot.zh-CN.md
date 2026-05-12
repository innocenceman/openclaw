# extensions/provider-plugins/github-copilot

## 1. 功能结论

**修改**：github-copilot support GUI/RPC wizard auth flow、ci repair github copilot setup types、github-copilot publish model catalog、github-copilot reuse existing auth profiles；**迁移/重构**：reuse shared dedupe helpers、plugin-sdk retire reserved helper exports、split plugin sdk test helpers、promote plugin test helpers to sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 20

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 ci repair github copilot setup types

修复 ci：repair github copilot setup types

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 follow up main ci failures

修复 follow up main ci failures

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 github-copilot publish model catalog

修复 github-copilot：publish model catalog

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 github-copilot reuse existing auth profiles

修复 github-copilot：reuse existing auth profiles

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 github-copilot support GUI/RPC wizard auth flow

修复 github-copilot：support GUI/RPC wizard auth flow

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugin-sdk retire reserved helper exports

迁移/重构 plugin-sdk：retire reserved helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 promote plugin test helpers to sdk

迁移/重构 promote plugin test helpers to sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 reuse shared dedupe helpers

迁移/重构 reuse shared dedupe helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 auth regression/contract coverage、connection bound ids regression/contract coverage、embeddings regression/contract coverage、github copilot plugin entrypoint，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/github-copilot`
- Changed path count: `20`
- Status counts: `修改 20`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `20` files, `+1236` / `-123`

### 归纳依据

- 主要落点：tests/contracts、implementation、auth/pairing/security behavior、manifest/package metadata、plugin entry/API surface、model/thinking policy、streaming/reasoning。
- 新增或暴露的关键符号包括：`ENV_GITHUB_TOKEN`, `DEFAULT_COPILOT_MODEL`, `DEFAULT_COPILOT_PROFILE_ID`, `COPILOT_XHIGH_MODEL_IDS`, `applyCopilotDefaultModel`, `resolveExistingCopilotTokenProfileId`, `resolveExistingCopilotAuthResult`, `GITHUB_DEVICE_VERIFICATION_URL`, `GITHUB_DEVICE_ACCESS_DENIED`, `GITHUB_DEVICE_EXPIRED`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/github-copilot`；`pnpm test:extensions`。
- 相关 commit 主题：fix(github-copilot): support GUI/RPC wizard auth flow；fix(ci): repair github copilot setup types；fix(github-copilot): publish model catalog；fix(github-copilot): reuse existing auth profiles；refactor: reuse shared dedupe helpers；fix: follow up main ci failures；refactor(plugin-sdk): retire reserved helper exports；perf: mark provider plugins startup lazy

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/github-copilot/provider-auth.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/provider-discovery.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/provider-runtime.contract.test.ts` — semantic cue
- `maintenance-修复-ci-repair-github-copilot-setup-types` / 修复 ci repair github copilot setup types:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/auth.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — semantic cue
- `maintenance-修复-follow-up-main-ci-failures` / 修复 follow up main ci failures:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts`
  - source: `path` [M] `extensions/github-copilot/auth.ts`
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts`
- `runtime-behavior-修复-github-copilot-publish-model-catalog` / 修复 github-copilot publish model catalog:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/auth.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — semantic cue
- `maintenance-修复-github-copilot-reuse-existing-auth-profiles` / 修复 github-copilot reuse existing auth profiles:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/auth.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — semantic cue
- `user-visible-修复-github-copilot-support-GUI-RPC-wizard-auth-f` / 修复 github-copilot support GUI/RPC wizard auth flow:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/auth.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — semantic cue
- `migration-迁移-重构-plugin-sdk-retire-reserved-helper-exports` / 迁移/重构 plugin-sdk retire reserved helper exports:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/auth.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — semantic cue
- `migration-迁移-重构-promote-plugin-test-helpers-to-sdk` / 迁移/重构 promote plugin test helpers to sdk:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/auth.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — semantic cue
- `migration-迁移-重构-reuse-shared-dedupe-helpers` / 迁移/重构 reuse shared dedupe helpers:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/auth.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/auth.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.ts` — semantic cue
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/github-copilot/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/github-copilot/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/github-copilot/auth.test.ts` — test evidence
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.live.test.ts` — test evidence
  - source: `path` [M] `extensions/github-copilot/connection-bound-ids.test.ts` — test evidence
  - source: `path` [M] `extensions/github-copilot/embeddings.test.ts` — test evidence
  - source: `path` [M] `extensions/github-copilot/index.test.ts` — test evidence
  - source: `path` [M] `extensions/github-copilot/models.test.ts` — test evidence

### 路径证据

- 修改 `extensions/github-copilot/auth.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/github-copilot/auth.ts`：调整 auth（auth/pairing/security behavior）。
- 修改 `extensions/github-copilot/connection-bound-ids.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/github-copilot/connection-bound-ids.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/github-copilot/connection-bound-ids.ts`：调整 connection bound ids（implementation）。
- 修改 `extensions/github-copilot/embeddings.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/github-copilot/embeddings.ts`：调整 embeddings（implementation）。
- 修改 `extensions/github-copilot/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/github-copilot/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/github-copilot/login.ts`：调整 login（implementation）。
- 修改 `extensions/github-copilot/models-defaults.ts`：调整 models defaults（implementation）。
- 修改 `extensions/github-copilot/models.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 8 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/github-copilot` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/github-copilot/change-to-test.md` 的验证建议。
