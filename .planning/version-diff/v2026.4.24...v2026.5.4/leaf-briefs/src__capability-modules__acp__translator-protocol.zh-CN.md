# src/capability-modules/acp/translator-protocol

## 1. 功能结论

**修改**：gateway wait for event loop before client start、avoid CI lint false positive in ACP config mock、remove unused ACP mock parameter、restore verbose command and ACP cleanup controls；**迁移/重构**：trim core barrel exports、trim acp config helper types、trim acp client exports、trim acp local exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 10

## 3. 功能级详细差异

### 修复 gateway align handshake client timeouts

修复 gateway：align handshake client timeouts

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 修复 gateway wait for event loop before client start

修复 gateway：wait for event loop before client start

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 修复 restore verbose command and ACP cleanup controls

修复 restore verbose command and ACP cleanup controls

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 测试覆盖 avoid CI lint false positive in ACP config mock

测试覆盖 avoid CI lint false positive in ACP config mock

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 测试覆盖 remove unused ACP mock parameter

测试覆盖 remove unused ACP mock parameter

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 迁移/重构 trim acp client exports

迁移/重构 trim acp client exports

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 迁移/重构 trim acp config helper types

迁移/重构 trim acp config helper types

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 迁移/重构 trim acp local exports

迁移/重构 trim acp local exports

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 迁移/重构 trim core barrel exports

迁移/重构 trim core barrel exports

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 迁移/重构 trim test harness internal exports

迁移/重构 trim test harness internal exports

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 server.startup regression/contract coverage、translator.session rate limit regression/contract coverage、translator.set session mode regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/capability-modules/acp/translator-protocol`
- Changed path count: `10`
- Status counts: `修改 10`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `10` files, `+240` / `-61`

### 归纳依据

- 主要落点：implementation、session/state handling、tests/contracts。
- 新增或暴露的关键符号包括：`DEFAULT_SESSION_ID`, `DEFAULT_PROMPT_TEXT`, `createRequestRecorder`, `ACP_TIMEOUT_CONFIG_ID`, `ACP_TIMEOUT_SECONDS_CONFIG_ID`, `ACP_PROVENANCE_MODE_VALUES`。
- 建议优先验证：优先运行 `pnpm test -- src/acp/translator*.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`；`pnpm test -- src/acp/translator.cancel-scoping.test.ts src/acp/translator.prompt-prefix.test.ts src/acp/translator.session-rate-limit.test.ts src/acp/translator.set-session-mode.test.ts src/acp/translator.stop-reason.test.ts src/acp/event-mapper.test.ts src/acp/client.test.ts src/acp/server.startup.test.ts`。
- 相关 commit 主题：refactor: trim core barrel exports；refactor: trim acp config helper types；refactor: trim acp client exports；refactor: trim acp local exports；refactor: trim test harness internal exports；fix(gateway): wait for event loop before client start；test: avoid CI lint false positive in ACP config mock；test: remove unused ACP mock parameter

### Dimension evidence

- `maintenance-修复-gateway-align-handshake-client-timeouts` / 修复 gateway align handshake client timeouts:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
- `maintenance-修复-gateway-wait-for-event-loop-before-client-st` / 修复 gateway wait for event loop before client start:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
- `maintenance-修复-restore-verbose-command-and-ACP-cleanup-cont` / 修复 restore verbose command and ACP cleanup controls:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
  - source: `path` [M] `src/acp/server.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.prompt-harness.test-support.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — semantic cue
- `tests-docs-测试覆盖-avoid-CI-lint-false-positive-in-ACP-config` / 测试覆盖 avoid CI lint false positive in ACP config mock:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
  - source: `path` [M] `src/acp/server.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.prompt-harness.test-support.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — semantic cue
- `tests-docs-测试覆盖-remove-unused-ACP-mock-parameter` / 测试覆盖 remove unused ACP mock parameter:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
  - source: `path` [M] `src/acp/server.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.prompt-harness.test-support.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — semantic cue
- `migration-迁移-重构-trim-acp-client-exports` / 迁移/重构 trim acp client exports:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
  - source: `path` [M] `src/acp/server.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.prompt-harness.test-support.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — semantic cue
- `migration-迁移-重构-trim-acp-config-helper-types` / 迁移/重构 trim acp config helper types:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
  - source: `path` [M] `src/acp/server.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.prompt-harness.test-support.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — semantic cue
- `migration-迁移-重构-trim-acp-local-exports` / 迁移/重构 trim acp local exports:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
  - source: `path` [M] `src/acp/server.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.prompt-harness.test-support.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — semantic cue
- `public-contract-迁移-重构-trim-core-barrel-exports` / 迁移/重构 trim core barrel exports:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
  - source: `path` [M] `src/acp/server.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.prompt-harness.test-support.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — semantic cue
- `migration-迁移-重构-trim-test-harness-internal-exports` / 迁移/重构 trim test harness internal exports:
  - source: `path` [M] `src/acp/client.ts` — semantic cue
  - source: `path` [M] `src/acp/event-mapper.ts` — semantic cue
  - source: `path` [M] `src/acp/server.startup.test.ts` — semantic cue
  - source: `path` [M] `src/acp/server.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.prompt-harness.test-support.ts` — semantic cue
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/acp/server.startup.test.ts` — test evidence
  - source: `path` [M] `src/acp/translator.session-rate-limit.test.ts` — test evidence
  - source: `path` [M] `src/acp/translator.set-session-mode.test.ts` — test evidence

### 路径证据

- 修改 `src/acp/client.ts`：调整 client（implementation）。
- 修改 `src/acp/event-mapper.ts`：调整 event mapper（implementation）。
- 修改 `src/acp/server.startup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/acp/server.ts`：调整 server（implementation）。
- 修改 `src/acp/translator.prompt-harness.test-support.ts`：调整 translator.prompt harness.test support（implementation）。
- 修改 `src/acp/translator.session-rate-limit.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/acp/translator.set-session-mode.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/acp/translator.test-helpers.ts`：调整 translator.test helpers（implementation）。
- 修改 `src/acp/translator.ts`：调整 translator（implementation）。
- 修改 `src/acp/types.ts`：调整 acp types（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/acp/translator-protocol` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/acp/translator-protocol/change-to-test.md` 的验证建议。
