# test-infra/fixtures-and-helpers/helpers-core

## 1. 功能结论

**新增**：Codex happy path prompt snapshots；**修改**：Scope Codex heartbeat guidance to heartbeat turns、Stop heartbeat tool turns from asking for HEARTBEAT_OK、show bootstrap context in prompt snapshots、Rename Codex runtime prompt snapshot directory；**迁移/重构**：trim secondary test helper exports、trim trigger harness exports；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、文档语义变化、新增能力或入口、行为调整、迁移或重命名
- 特殊形态：contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 2、修改 6、删除 22、重命名 66

## 3. 功能级详细差异

### 修复 heartbeat type wake scheduling intent

修复 heartbeat：type wake scheduling intent

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 Improve Codex happy path prompt snapshots

修改 Improve Codex happy path prompt snapshots

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 Rename Codex runtime prompt snapshot directory

修改 Rename Codex runtime prompt snapshot directory

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 Scope Codex heartbeat guidance to heartbeat turns

修改 Scope Codex heartbeat guidance to heartbeat turns

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 新增 Codex happy path prompt snapshots

新增 Codex happy path prompt snapshots

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 release prefer GPT-5.5 smoke models

测试覆盖 release：prefer GPT-5.5 smoke models

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 show bootstrap context in prompt snapshots

测试覆盖 show bootstrap context in prompt snapshots

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 迁移/重构 trim secondary test helper exports

迁移/重构 trim secondary test helper exports

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 迁移/重构 trim trigger harness exports

迁移/重构 trim trigger harness exports

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 schema normalization runtime contract、config write contract suites、manifest、jiti runtime api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 测试与文档语义变化

文档、说明或生成基线同步了 AGENTS docs、CLAUDE docs，用于更新读者指引、能力说明或事实基线。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `bundled channel plugin loader`（`test/helpers/channels/bundled-channel-plugin-loader.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `lazy object surface`（`test/helpers/channels/lazy-object-surface.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `registry plugin`（`test/helpers/channels/registry-plugin.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `surface contract registry`（`test/helpers/channels/surface-contract-registry.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`auth profile runtime contract` 路径（`test/helpers/agents/auth-profile-runtime-contract.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`delivery no reply runtime contract` 路径（`test/helpers/agents/delivery-no-reply-runtime-contract.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`openclaw owned tool runtime contract` 路径（`test/helpers/agents/openclaw-owned-tool-runtime-contract.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`outcome fallback runtime contract` 路径（`test/helpers/agents/outcome-fallback-runtime-contract.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-core`
- Changed path count: `96`
- Status counts: `新增 2、修改 6、删除 22、重命名 66`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `96` files, `+1304` / `-10756`

### 归纳依据

- 主要落点：implementation、agent runtime、auth/pairing/security behavior、provider catalog、configuration/schema、model/thinking policy、message delivery、docs。
- 新增或暴露的关键符号包括：`CODEX_RUNTIME_HAPPY_PATH_PROMPT_SNAPSHOT_DIR`, `CODEX_MODEL_PROMPT_FIXTURE_DIR`, `WORKSPACE_DIR`, `AGENT_DIR`, `SESSION_FILE`, `MODEL_ID`, `CODEX_PROMPT_PERSONALITY`, `CODEX_MODEL_PROMPT_FIXTURE_PATH`, `CODEX_MODEL_PROMPT_SOURCE_PATH`, `CODEX_YOLO_PERMISSION_INSTRUCTIONS`。
- 建议优先验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 相关 commit 主题：Scope Codex heartbeat guidance to heartbeat turns；Stop heartbeat tool turns from asking for HEARTBEAT_OK；test: show bootstrap context in prompt snapshots；Rename Codex runtime prompt snapshot directory；Improve Codex happy path prompt snapshots；Add Codex happy path prompt snapshots；fix(heartbeat): type wake scheduling intent；refactor: trim secondary test helper exports

### Dimension evidence

- `maintenance-修复-heartbeat-type-wake-scheduling-intent` / 修复 heartbeat type wake scheduling intent:
  - source: `path` [M] `test/helpers/plugins/typed-cases.ts` — semantic cue
- `maintenance-修改-Improve-Codex-happy-path-prompt-snapshots` / 修改 Improve Codex happy path prompt snapshots:
  - source: `path` [M] `test/helpers/agents/happy-path-prompt-snapshots.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-composition-scenarios.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-overlay-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/bundled-plugin-paths.ts` — semantic cue
- `runtime-behavior-修改-Rename-Codex-runtime-prompt-snapshot-directo` / 修改 Rename Codex runtime prompt snapshot directory:
  - source: `path` [M] `test/helpers/agents/auth-profile-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/delivery-no-reply-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/happy-path-prompt-snapshots.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/outcome-fallback-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-composition-scenarios.ts` — semantic cue
- `user-visible-修改-Scope-Codex-heartbeat-guidance-to-heartbeat` / 修改 Scope Codex heartbeat guidance to heartbeat turns:
  - source: `path` [M] `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/auto-reply/trigger-handling-test-harness.ts` — semantic cue
  - source: `path` [M] `test/helpers/channels/directory-ids.ts` — semantic cue
  - source: `path` [M] `test/helpers/channels/threading-directory-contract-suites.ts` — semantic cue
  - source: `path` [M] `test/helpers/media-generation/dashscope-video-provider.ts` — semantic cue
  - source: `path` [M] `test/helpers/plugins/directory.ts` — semantic cue
- `maintenance-修改-Stop-heartbeat-tool-turns-from-asking-for-HE` / 修改 Stop heartbeat tool turns from asking for HEARTBEAT_OK:
  - source: `path` [M] `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts` — semantic cue
- `maintenance-新增-Codex-happy-path-prompt-snapshots` / 新增 Codex happy path prompt snapshots:
  - source: `path` [M] `test/helpers/agents/happy-path-prompt-snapshots.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-composition-scenarios.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-overlay-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/bundled-plugin-paths.ts` — semantic cue
- `tests-docs-测试覆盖-release-prefer-GPT-5-5-smoke-models` / 测试覆盖 release prefer GPT-5.5 smoke models:
  - source: `path` [M] `test/helpers/plugins/direct-smoke.ts` — semantic cue
- `tests-docs-测试覆盖-show-bootstrap-context-in-prompt-snapshots` / 测试覆盖 show bootstrap context in prompt snapshots:
  - source: `path` [M] `test/helpers/agents/happy-path-prompt-snapshots.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-composition-scenarios.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-overlay-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/auto-reply/trigger-handling-test-harness.ts` — semantic cue
  - source: `path` [M] `test/helpers/bundled-plugin-paths.ts` — semantic cue
  - source: `path` [M] `test/helpers/channels/bundled-channel-plugin-loader.ts` — semantic cue
- `migration-迁移-重构-trim-secondary-test-helper-exports` / 迁移/重构 trim secondary test helper exports:
  - source: `path` [M] `test/helpers/agents/auth-profile-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/delivery-no-reply-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/happy-path-prompt-snapshots.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/outcome-fallback-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-composition-scenarios.ts` — semantic cue
- `migration-迁移-重构-trim-trigger-harness-exports` / 迁移/重构 trim trigger harness exports:
  - source: `path` [M] `test/helpers/agents/auth-profile-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/delivery-no-reply-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/happy-path-prompt-snapshots.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/outcome-fallback-runtime-contract.ts` — semantic cue
  - source: `path` [M] `test/helpers/agents/prompt-composition-scenarios.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `test/helpers/agents/schema-normalization-runtime-contract.ts` — contract evidence
  - source: `path` [M] `test/helpers/channels/config-write-contract-suites.ts` — contract evidence
  - source: `path` [M] `test/helpers/channels/manifest.ts` — contract evidence
  - source: `path` [M] `test/helpers/plugins/jiti-runtime-api.ts` — contract evidence
  - source: `path` [M] `test/helpers/plugins/onboard-config.ts` — contract evidence
  - source: `path` [M] `test/helpers/plugins/package-manifest-contract.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `test/helpers/channels/AGENTS.md` — docs evidence
  - source: `path` [M] `test/helpers/channels/CLAUDE.md` — docs evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `test/helpers/channels/bundled-channel-plugin-loader.ts`
  - source: `path` [D] `test/helpers/channels/lazy-object-surface.ts`
  - source: `path` [D] `test/helpers/channels/registry-plugin.ts`
  - source: `path` [D] `test/helpers/channels/surface-contract-registry.ts`
  - source: `path` [D] `test/helpers/plugins/contracts-testkit.ts`
  - source: `path` [D] `test/helpers/plugins/env.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `test/helpers/agents/auth-profile-runtime-contract.ts`
  - source: `path` [R] `test/helpers/agents/delivery-no-reply-runtime-contract.ts`
  - source: `path` [R] `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts`
  - source: `path` [R] `test/helpers/agents/outcome-fallback-runtime-contract.ts`
  - source: `path` [R] `test/helpers/agents/prompt-overlay-runtime-contract.ts`
  - source: `path` [R] `test/helpers/agents/schema-normalization-runtime-contract.ts`

### 路径证据

- 新增 `test/helpers/agents/happy-path-prompt-snapshots.ts`：调整 happy path prompt snapshots（agent runtime）。
- 新增 `test/helpers/openclaw-test-instance.ts`：调整 openclaw test instance（implementation）。
- 修改 `test/helpers/agents/prompt-composition-scenarios.ts`：调整 prompt composition scenarios（mobile app runtime）。
- 修改 `test/helpers/auth-wizard.ts`：调整 auth wizard（auth/pairing/security behavior）。
- 修改 `test/helpers/auto-reply/trigger-handling-test-harness.ts`：调整 trigger handling test harness（message delivery）。
- 修改 `test/helpers/cron/service-regression-fixtures.ts`：调整 service regression fixtures（implementation）。
- 修改 `test/helpers/gateway-e2e-harness.ts`：调整 gateway e2e harness（gateway runtime）。
- 修改 `test/helpers/media-generation/runtime-module-mocks.ts`：调整 runtime module mocks（implementation）。
- 删除 `test/helpers/channels/bundled-channel-plugin-loader.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/channels/lazy-object-surface.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/channels/registry-plugin.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/channels/surface-contract-registry.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/plugins/contracts-testkit.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/plugins/env.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/plugins/fetch-mock.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/plugins/frozen-time.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/plugins/jiti-runtime-api.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/plugins/media-understanding.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/plugins/mock-http-response.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `test/helpers/plugins/outbound-delivery.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `test/helpers/agents/auth-profile-runtime-contract.ts`：调整 auth profile runtime contract（agent runtime）。
- 重命名 `test/helpers/agents/delivery-no-reply-runtime-contract.ts`：调整 delivery no reply runtime contract（agent runtime）。
- 重命名 `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts`：调整 openclaw owned tool runtime contract（agent runtime）。
- 重命名 `test/helpers/agents/outcome-fallback-runtime-contract.ts`：调整 outcome fallback runtime contract（agent runtime）。
- 重命名 `test/helpers/agents/prompt-overlay-runtime-contract.ts`：调整 prompt overlay runtime contract（agent runtime）。
- 重命名 `test/helpers/agents/schema-normalization-runtime-contract.ts`：调整 schema normalization runtime contract（agent runtime）。
- 重命名 `test/helpers/agents/transcript-repair-runtime-contract.ts`：调整 transcript repair runtime contract（agent runtime）。
- 重命名 `test/helpers/bundled-channel-entry.ts`：调整 bundled channel entry（implementation）。
- 重命名 `test/helpers/bundled-plugin-paths.ts`：调整 bundled plugin paths（implementation）。
- 重命名 `test/helpers/channels/AGENTS.md`：调整 AGENTS docs（docs）。
- 重命名 `test/helpers/channels/CLAUDE.md`：调整 CLAUDE docs（docs）。
- 重命名 `test/helpers/channels/channel-catalog-contract.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 其余 64 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `test-infra/fixtures-and-helpers/helpers-core` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-core/change-to-test.md` 的验证建议。
