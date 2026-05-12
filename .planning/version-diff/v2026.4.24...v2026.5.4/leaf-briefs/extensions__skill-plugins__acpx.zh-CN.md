# extensions/skill-plugins/acpx

## 1. 功能结论

**修改**：acpx resolve plugin manifest from bundled runtime、acpx cover Windows extension test paths、Revert "fix(plugins): align beta external launch metadata"、plugins align beta external launch metadata；**删除**：旧 runtime register 文件 删除 `register.runtime.ts` 这种 runtime helper re-export 面；**迁移/重构**：plugins declare static runtime assets in package metadata、remove plugin dependency cleanup leftovers、simplify plugin dependency handling、trim acpx config exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 19

## 3. 功能级详细差异

### 修复 acpx resolve plugin manifest from bundled runtime

修复 acpx：resolve plugin manifest from bundled runtime

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 plugins align beta external launch metadata

修复 plugins：align beta external launch metadata

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 修改 Revert "fix(plugins): align beta external launch metadata"

修改 Revert "fix(plugins): align beta external launch metadata"

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 构建/发布调整 plugins externalize acpx release packages

构建/发布调整 plugins：externalize acpx release packages

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 acpx cover Windows extension test paths

测试覆盖 acpx：cover Windows extension test paths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 release repair release validation checks

测试覆盖 release：repair release validation checks

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…

移除旧 runtime register 文件：删除 `register.runtime.ts` 这种 runtime helper re-export 面，避免依赖旧的深层运行时入口。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 plugins declare static runtime assets in package metadata

迁移/重构 plugins：declare static runtime assets in package metadata

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 remove plugin dependency cleanup leftovers

迁移/重构 remove plugin dependency cleanup leftovers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim acpx config exports

迁移/重构 trim acpx config exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、runtime api、config schema、config regression/contract coverage，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 AGENTS docs、SKILL docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 acpx plugin entrypoint、claude agent acp completion regression/contract coverage、codex auth bridge regression/contract coverage、config regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `skill-plugins`
- Impact-map dir: `.planning/impact-map/extensions/skill-plugins/acpx`
- Changed path count: `20`
- Status counts: `新增 1、修改 19`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `20` files, `+1931` / `-112`

### 归纳依据

- 主要落点：tests/contracts、implementation、configuration/schema、docs、manifest/package metadata、auth/pairing/security behavior、plugin entry/API surface。
- 新增或暴露的关键符号包括：`ACPX_BACKEND_ID`, `ENABLE_STARTUP_PROBE_ENV`, `loadServiceModule`, `shouldRunStartupProbe`, `createDeferredRuntime`, `createAcpxRuntimeService`, `makeResultMessage`, `makeIdleMessage`, `quoteArg`, `generatedCodexPaths`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/acpx`；`pnpm test:extensions`。
- 相关 commit 主题：fix(acpx): resolve plugin manifest from bundled runtime；test(acpx): cover Windows extension test paths；Revert "fix(plugins): align beta external launch metadata"；fix(plugins): align beta external launch metadata；refactor(plugins): declare static runtime assets in package metadata；build(plugins): externalize acpx release packages；refactor: remove plugin dependency cleanup leftovers；refactor: simplify plugin dependency handling

### Dimension evidence

- `public-contract-修复-acpx-resolve-plugin-manifest-from-bundled-ru` / 修复 acpx resolve plugin manifest from bundled runtime:
  - source: `path` [M] `extensions/acpx/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/acpx/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/index.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/acpx/package.json` — semantic cue
  - source: `path` [M] `extensions/acpx/register.runtime.ts` — semantic cue
- `public-contract-修复-plugins-align-beta-external-launch-metadata` / 修复 plugins align beta external launch metadata:
  - source: `path` [A] `extensions/acpx/src/claude-agent-acp-completion.test.ts`
  - source: `path` [M] `extensions/acpx/AGENTS.md`
  - source: `path` [M] `extensions/acpx/index.test.ts`
  - source: `path` [M] `extensions/acpx/index.ts`
- `public-contract-修改-Revert-fix-plugins-align-beta-external-la` / 修改 Revert "fix(plugins): align beta external launch metadata":
  - source: `path` [A] `extensions/acpx/src/claude-agent-acp-completion.test.ts`
  - source: `path` [M] `extensions/acpx/AGENTS.md`
  - source: `path` [M] `extensions/acpx/index.test.ts`
  - source: `path` [M] `extensions/acpx/index.ts`
- `integration-build-release-构建-发布调整-plugins-externalize-acpx-release-packag` / 构建/发布调整 plugins externalize acpx release packages:
  - source: `path` [M] `extensions/acpx/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/acpx/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/index.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/acpx/package.json` — semantic cue
  - source: `path` [M] `extensions/acpx/register.runtime.ts` — semantic cue
- `tests-docs-测试覆盖-acpx-cover-Windows-extension-test-paths` / 测试覆盖 acpx cover Windows extension test paths:
  - source: `path` [M] `extensions/acpx/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/acpx/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/index.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/acpx/package.json` — semantic cue
  - source: `path` [M] `extensions/acpx/register.runtime.ts` — semantic cue
- `tests-docs-测试覆盖-release-repair-release-validation-checks` / 测试覆盖 release repair release validation checks:
  - source: `path` [A] `extensions/acpx/src/claude-agent-acp-completion.test.ts`
  - source: `path` [M] `extensions/acpx/AGENTS.md`
  - source: `path` [M] `extensions/acpx/index.test.ts`
  - source: `path` [M] `extensions/acpx/index.ts`
- `public-contract-移除旧-runtime-register-文件-删除-register-runtime-ts` / 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…:
  - source: `path` [M] `extensions/acpx/register.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/src/runtime-internals/mcp-proxy.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/src/runtime.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/src/runtime.ts` — semantic cue
- `public-contract-迁移-重构-plugins-declare-static-runtime-assets-in` / 迁移/重构 plugins declare static runtime assets in package metadata:
  - source: `path` [M] `extensions/acpx/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/acpx/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/index.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/acpx/package.json` — semantic cue
  - source: `path` [M] `extensions/acpx/register.runtime.ts` — semantic cue
- `migration-迁移-重构-remove-plugin-dependency-cleanup-leftovers` / 迁移/重构 remove plugin dependency cleanup leftovers:
  - source: `path` [M] `extensions/acpx/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/acpx/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/index.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/acpx/package.json` — semantic cue
  - source: `path` [M] `extensions/acpx/register.runtime.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `extensions/acpx/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/acpx/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/index.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/acpx/package.json` — semantic cue
  - source: `path` [M] `extensions/acpx/register.runtime.ts` — semantic cue
- `migration-迁移-重构-trim-acpx-config-exports` / 迁移/重构 trim acpx config exports:
  - source: `path` [M] `extensions/acpx/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/acpx/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/index.ts` — semantic cue
  - source: `path` [M] `extensions/acpx/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/acpx/package.json` — semantic cue
  - source: `path` [M] `extensions/acpx/register.runtime.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/acpx/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/acpx/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/acpx/src/config-schema.ts` — contract evidence
  - source: `path` [M] `extensions/acpx/src/config.test.ts` — contract evidence
  - source: `path` [M] `extensions/acpx/src/config.ts` — contract evidence
  - source: `path` [M] `extensions/acpx/src/manifest.test.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/acpx/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/acpx/AGENTS.md` — docs evidence
  - source: `path` [M] `extensions/acpx/skills/acp-router/SKILL.md` — docs evidence
  - source: `path` [M] `extensions/acpx/index.test.ts` — test evidence
  - source: `path` [M] `extensions/acpx/src/claude-agent-acp-completion.test.ts` — test evidence
  - source: `path` [M] `extensions/acpx/src/codex-auth-bridge.test.ts` — test evidence
  - source: `path` [M] `extensions/acpx/src/config.test.ts` — test evidence

### 路径证据

- 新增 `extensions/acpx/src/claude-agent-acp-completion.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/acpx/AGENTS.md`：调整 AGENTS docs（docs）。
- 修改 `extensions/acpx/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/acpx/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/acpx/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/acpx/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/acpx/register.runtime.ts`：调整 register（implementation）。
- 修改 `extensions/acpx/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/acpx/skills/acp-router/SKILL.md`：调整 SKILL docs（docs）。
- 修改 `extensions/acpx/src/codex-auth-bridge.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/acpx/src/codex-auth-bridge.ts`：调整 codex auth bridge（auth/pairing/security behavior）。
- 修改 `extensions/acpx/src/config-schema.ts`：调整 config schema（configuration/schema）。
- 修改 `extensions/acpx/src/config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 7 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/skill-plugins/acpx` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/skill-plugins/acpx/change-to-test.md` 的验证建议。
