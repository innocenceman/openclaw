# src/agent-runtime/sandbox/workspace-browser-ssh

## 1. 功能结论

**新增**：workspace add skipOptionalBootstrapFiles config option、sandbox add Docker GPU passthrough；**修改**：sandbox shard container registry into per-entry files to remove cross-session lock contention、Found one reliability bug: the new Docker-daemon-unavailable bran、sandbox gracefully handle Docker daemon unavailability when sandbox mode is off、sandbox add once option to Docker abort listener；**迁移/重构**：hide agent helper internals、expose agent runtime test contracts；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 7

## 3. 功能级详细差异

### 优化 sandbox shard container registry into per-entry files to remove cros…

优化 sandbox：shard container registry into per-entry files to remove cross-session lock contention

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 修复 Found one reliability bug: the new Docker-daemon-unavailable bran

修复 Found one reliability bug: the new Docker-daemon-unavailable bran

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 修复 sandbox add once option to Docker abort listener

修复 sandbox：add once option to Docker abort listener

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 修复 sandbox gracefully handle Docker daemon unavailability when sandbox…

修复 sandbox：gracefully handle Docker daemon unavailability when sandbox mode is off

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 修改 Fix default sandbox image fallback for python3-dependent mutations

修改 Fix default sandbox image fallback for python3-dependent mutations

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 新增 sandbox add Docker GPU passthrough

新增 sandbox：add Docker GPU passthrough

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 新增 workspace add skipOptionalBootstrapFiles config option

新增 workspace：add skipOptionalBootstrapFiles config option

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 测试覆盖 speed up agent hotspot tests

测试覆盖 speed up agent hotspot tests

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 迁移/重构 expose agent runtime test contracts

迁移/重构 expose agent runtime test contracts

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 迁移/重构 hide agent helper internals

迁移/重构 hide agent helper internals

- 验证提示：优先运行 `pnpm build`。
- 置信度：`high`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 docker backend、docker.config hash recreate regression/contract coverage、docker regression/contract coverage、docker，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm build`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 browser.create regression/contract coverage、docker.config hash recreate regression/contract coverage、docker regression/contract coverage、ssh backend regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm build`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm build`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/workspace-browser-ssh`
- Changed path count: `8`
- Status counts: `新增 1、修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `8` files, `+268` / `-44`

### 归纳依据

- 主要落点：agent runtime。
- 新增或暴露的关键符号包括：`createDockerSandboxBackendHandle`, `createMockDockerChild`, `spawnDockerProcess`, `DOCKER_DAEMON_UNAVAILABLE_MARKERS`, `isDockerDaemonUnavailable`, `formatDockerDaemonUnavailableError`。
- 建议优先验证：优先运行 `pnpm build`。
- 相关 commit 主题：perf(sandbox): shard container registry into per-entry files to remove cross-session lock contention；refactor: hide agent helper internals；feat(workspace): add skipOptionalBootstrapFiles config option；fix: Found one reliability bug: the new Docker-daemon-unavailable bran；fix(sandbox): gracefully handle Docker daemon unavailability when sandbox mode is off；fix(sandbox): add once option to Docker abort listener；feat(sandbox): add Docker GPU passthrough；Fix default sandbox image fallback for python3-dependent mutations

### Dimension evidence

- `maintenance-优化-sandbox-shard-container-registry-into-per-en` / 优化 sandbox shard container registry into per-entry files to remove cros…:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/browser.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.ts` — semantic cue
- `maintenance-修复-Found-one-reliability-bug-the-new-Docker-da` / 修复 Found one reliability bug: the new Docker-daemon-unavailable bran:
  - source: `path` [A] `src/agents/sandbox/docker.test.ts`
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts`
  - source: `path` [M] `src/agents/sandbox/browser.ts`
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts`
- `maintenance-修复-sandbox-add-once-option-to-Docker-abort-list` / 修复 sandbox add once option to Docker abort listener:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/browser.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.ts` — semantic cue
- `maintenance-修复-sandbox-gracefully-handle-Docker-daemon-unav` / 修复 sandbox gracefully handle Docker daemon unavailability when sandbox…:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/browser.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.ts` — semantic cue
- `maintenance-修改-Fix-default-sandbox-image-fallback-for-pytho` / 修改 Fix default sandbox image fallback for python3-dependent mutations:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/browser.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.ts` — semantic cue
- `maintenance-新增-sandbox-add-Docker-GPU-passthrough` / 新增 sandbox add Docker GPU passthrough:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/browser.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.ts` — semantic cue
- `maintenance-新增-workspace-add-skipOptionalBootstrapFiles-con` / 新增 workspace add skipOptionalBootstrapFiles config option:
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/workspace.ts` — semantic cue
- `tests-docs-测试覆盖-speed-up-agent-hotspot-tests` / 测试覆盖 speed up agent hotspot tests:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/browser.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.ts` — semantic cue
- `public-contract-迁移-重构-expose-agent-runtime-test-contracts` / 迁移/重构 expose agent runtime test contracts:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/browser.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.ts` — semantic cue
- `migration-迁移-重构-hide-agent-helper-internals` / 迁移/重构 hide agent helper internals:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/browser.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — semantic cue
  - source: `path` [M] `src/agents/sandbox/docker.ts` — semantic cue
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/agents/sandbox/docker-backend.ts` — build/release evidence
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — build/release evidence
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — build/release evidence
  - source: `path` [M] `src/agents/sandbox/docker.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/sandbox/browser.create.test.ts` — test evidence
  - source: `path` [M] `src/agents/sandbox/docker.config-hash-recreate.test.ts` — test evidence
  - source: `path` [M] `src/agents/sandbox/docker.test.ts` — test evidence
  - source: `path` [M] `src/agents/sandbox/ssh-backend.test.ts` — test evidence

### 路径证据

- 新增 `src/agents/sandbox/docker.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/sandbox/browser.create.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/sandbox/browser.ts`：调整 browser（agent runtime）。
- 修改 `src/agents/sandbox/docker-backend.ts`：调整 docker backend（agent runtime）。
- 修改 `src/agents/sandbox/docker.config-hash-recreate.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/sandbox/docker.ts`：调整 docker（agent runtime）。
- 修改 `src/agents/sandbox/ssh-backend.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/sandbox/workspace.ts`：调整 workspace（agent runtime）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/sandbox/workspace-browser-ssh` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/sandbox/workspace-browser-ssh/change-to-test.md` 的验证建议。
