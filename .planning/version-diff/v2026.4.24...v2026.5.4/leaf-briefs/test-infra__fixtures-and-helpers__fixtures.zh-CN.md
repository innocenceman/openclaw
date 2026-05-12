# test-infra/fixtures-and-helpers/fixtures

## 1. 功能结论

**新增**：qa add Mantis Discord status reaction scenario；**修改**：acpx cover Windows extension test paths、stabilize gateway server shard、docs validate plugin json examples、extensions keep shard balance assertion stable；兼容，风险 medium。

- 变更类型：`mixed`
- 兼容性：`compatible`（兼容）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`plugin`
- 影响范围：CI/测试维护者、发布/构建维护者
- 变更形态：删除或废弃旧入口、文档语义变化、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名
- 特殊形态：contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 23、修改 26、删除 1、重命名 2

## 3. 功能级详细差异

### 修复 docs validate channel config snippets

修复 docs：validate channel config snippets

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修复 docs validate plugin json examples

修复 docs：validate plugin json examples

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 修改 Scope Codex heartbeat guidance to heartbeat turns

修改 Scope Codex heartbeat guidance to heartbeat turns

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 新增 qa add Mantis Discord status reaction scenario

新增 qa：add Mantis Discord status reaction scenario

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 acpx cover Windows extension test paths

测试覆盖 acpx：cover Windows extension test paths

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 extensions keep shard balance assertion stable

测试覆盖 extensions：keep shard balance assertion stable

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 qa add Slack live transport lane

测试覆盖 qa：add Slack live transport lane

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 stabilize gateway server shard

测试覆盖 stabilize gateway server shard

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 测试覆盖 status update reaction lifecycle snapshots

测试覆盖 status：update reaction lifecycle snapshots

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 维护调整 move test tsconfigs

维护调整 move test tsconfigs

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 talk config contract、tsconfig.core.test.agents、tsconfig.core、tsconfig.core.test.non agents，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 gpt 5.5.pragmatic.instructions docs、README docs、discord group codex message tool docs、telegram direct codex message tool docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 test extension regression/contract coverage、test env regression/contract coverage、tsconfig.core.test.agents、tsconfig.core，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `extension relative outside package inventory`（`test/fixtures/extension-relative-outside-package-inventory.json`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`talk config contract` 路径（`test-fixtures/talk-config-contract.json`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`talk config contract` 路径（`test/fixtures/talk-config-contract.json`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

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
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/fixtures`
- Changed path count: `52`
- Status counts: `新增 23、修改 26、删除 1、重命名 2`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `51` files, `+8243` / `-331`

### 归纳依据

- 主要落点：configuration/schema、agent runtime、implementation、tests/contracts、gateway runtime、CLI/command behavior。
- 建议优先验证：优先运行 `pnpm test -- <path-or-filter>`；`OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test`；`pnpm test`。
- 相关 commit 主题：test(acpx): cover Windows extension test paths；test: stabilize gateway server shard；fix(docs): validate plugin json examples；test(extensions): keep shard balance assertion stable；fix(docs): validate channel config snippets；test(qa): add Slack live transport lane；Scope Codex heartbeat guidance to heartbeat turns；test(status): update reaction lifecycle snapshots

### Dimension evidence

- `tests-docs-修复-docs-validate-channel-config-snippets` / 修复 docs validate channel config snippets:
  - source: `path` [M] `test-fixtures/talk-config-contract.json` — semantic cue
  - source: `path` [M] `test/fixtures/talk-config-contract.json` — semantic cue
  - source: `path` [M] `test/tsconfig/tsconfig.core.test.agents.json` — semantic cue
  - source: `path` [M] `test/tsconfig/tsconfig.core.test.json` — semantic cue
  - source: `path` [M] `test/tsconfig/tsconfig.core.test.non-agents.json` — semantic cue
  - source: `path` [M] `test/tsconfig/tsconfig.extensions.test.json` — semantic cue
- `tests-docs-修复-docs-validate-plugin-json-examples` / 修复 docs validate plugin json examples:
  - source: `path` [M] `test-fixtures/talk-config-contract.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.source.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json` — semantic cue
  - source: `path` [M] `test/fixtures/extension-relative-outside-package-inventory.json` — semantic cue
- `user-visible-修改-Scope-Codex-heartbeat-guidance-to-heartbeat` / 修改 Scope Codex heartbeat guidance to heartbeat turns:
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.instructions.md` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.source.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json` — semantic cue
- `maintenance-新增-qa-add-Mantis-Discord-status-reaction-scenar` / 新增 qa add Mantis Discord status reaction scenario:
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/discord-group-codex-message-tool.md` — semantic cue
  - source: `path` [M] `test/fixtures/telegram-qa-summary-rtt.json` — semantic cue
- `tests-docs-测试覆盖-acpx-cover-Windows-extension-test-paths` / 测试覆盖 acpx cover Windows extension test paths:
  - source: `path` [M] `test-fixtures/talk-config-contract.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.instructions.md` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.source.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json` — semantic cue
- `tests-docs-测试覆盖-extensions-keep-shard-balance-assertion-st` / 测试覆盖 extensions keep shard balance assertion stable:
  - source: `path` [M] `test/tsconfig/tsconfig.extensions.test.json` — semantic cue
  - source: `path` [M] `test/vitest/vitest.test-shards.mjs` — semantic cue
- `tests-docs-测试覆盖-qa-add-Slack-live-transport-lane` / 测试覆盖 qa add Slack live transport lane:
  - source: `path` [M] `test/fixtures/telegram-qa-summary-rtt.json` — semantic cue
- `tests-docs-测试覆盖-stabilize-gateway-server-shard` / 测试覆盖 stabilize gateway server shard:
  - source: `path` [M] `test/vitest/vitest.gateway-server.config.ts` — semantic cue
  - source: `path` [M] `test/vitest/vitest.gateway.config.ts` — semantic cue
  - source: `path` [M] `test/vitest/vitest.test-shards.mjs` — semantic cue
- `tests-docs-测试覆盖-status-update-reaction-lifecycle-snapshots` / 测试覆盖 status update reaction lifecycle snapshots:
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.instructions.md` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.source.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json` — semantic cue
- `maintenance-维护调整-move-test-tsconfigs` / 维护调整 move test tsconfigs:
  - source: `path` [M] `test-fixtures/talk-config-contract.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.instructions.md` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.source.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json` — semantic cue
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `test-fixtures/talk-config-contract.json` — contract evidence
  - source: `path` [M] `test/fixtures/talk-config-contract.json` — contract evidence
  - source: `path` [M] `test/tsconfig/tsconfig.core.test.agents.json` — contract evidence
  - source: `path` [M] `test/tsconfig/tsconfig.core.test.json` — contract evidence
  - source: `path` [M] `test/tsconfig/tsconfig.core.test.non-agents.json` — contract evidence
  - source: `path` [M] `test/tsconfig/tsconfig.extensions.test.json` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.instructions.md` — docs evidence
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md` — docs evidence
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/discord-group-codex-message-tool.md` — docs evidence
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-direct-codex-message-tool.md` — docs evidence
  - source: `path` [M] `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-heartbeat-codex-tool.md` — docs evidence
  - source: `path` [M] `test/scripts/test-extension.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `test/fixtures/extension-relative-outside-package-inventory.json`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `test-fixtures/talk-config-contract.json`
  - source: `path` [R] `test/fixtures/talk-config-contract.json`

### 路径证据

- 新增 `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.instructions.md`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 新增 `test/fixtures/agents/prompt-snapshots/codex-model-catalog/gpt-5.5.pragmatic.source.json`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 新增 `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/README.md`：调整 README docs（agent runtime）。
- 新增 `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.discord-group.json`：调整 codex dynamic tools.discord group（agent runtime）。
- 新增 `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.heartbeat-turn.json`：调整 codex dynamic tools.heartbeat turn（agent runtime）。
- 新增 `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/codex-dynamic-tools.telegram-direct.json`：调整 codex dynamic tools.telegram direct（agent runtime）。
- 新增 `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/discord-group-codex-message-tool.md`：调整 discord group codex message tool docs（agent runtime）。
- 新增 `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-direct-codex-message-tool.md`：调整 telegram direct codex message tool docs（agent runtime）。
- 新增 `test/fixtures/agents/prompt-snapshots/codex-runtime-happy-path/telegram-heartbeat-codex-tool.md`：调整 telegram heartbeat codex tool docs（agent runtime）。
- 新增 `test/fixtures/telegram-qa-summary-rtt.json`：调整 telegram qa summary rtt（implementation）。
- 新增 `test/tsconfig/tsconfig.core.test.agents.json`：调整 tsconfig.core.test.agents（configuration/schema）。
- 新增 `test/tsconfig/tsconfig.core.test.json`：调整 tsconfig.core（configuration/schema）。
- 修改 `test/scripts/test-extension.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/setup-openclaw-runtime.ts`：调整 setup openclaw runtime（implementation）。
- 修改 `test/test-env.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `test/test-env.ts`：调整 test env（implementation）。
- 修改 `test/vitest/vitest.agents.config.ts`：调整 vitest.agents.config（configuration/schema）。
- 修改 `test/vitest/vitest.auto-reply-reply.config.ts`：调整 vitest.auto reply reply.config（configuration/schema）。
- 修改 `test/vitest/vitest.commands.config.ts`：调整 vitest.commands.config（CLI/command behavior）。
- 修改 `test/vitest/vitest.config.ts`：调整 vitest.config（configuration/schema）。
- 修改 `test/vitest/vitest.e2e.config.ts`：调整 vitest.e2e.config（configuration/schema）。
- 修改 `test/vitest/vitest.gateway-server.config.ts`：调整 vitest.gateway server.config（gateway runtime）。
- 修改 `test/vitest/vitest.gateway.config.ts`：调整 vitest.gateway.config（gateway runtime）。
- 修改 `test/vitest/vitest.infra.config.ts`：调整 vitest.infra.config（configuration/schema）。
- 删除 `test/fixtures/extension-relative-outside-package-inventory.json`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `test-fixtures/talk-config-contract.json`：调整 talk config contract（configuration/schema）。
- 重命名 `test/fixtures/talk-config-contract.json`：调整 talk config contract（configuration/schema）。
- 其余 25 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `test-infra/fixtures-and-helpers/fixtures` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/fixtures-and-helpers/fixtures/change-to-test.md` 的验证建议。
