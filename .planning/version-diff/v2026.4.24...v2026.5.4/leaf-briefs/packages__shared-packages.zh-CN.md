# packages/shared-packages

## 1. 功能结论

**新增**：gateway add SDK-facing tools.invoke RPC；**修改**：memory split vector store readiness、memory reindex archived session transcript updates、memory keep archive transcript visibility safe、memory keep sqlite-vec optional；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 34、修改 51、删除 1、重命名 3

## 3. 功能级详细差异

### 修复 gateway harden artifact RPCs

修复 gateway：harden artifact RPCs

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 harden gateway recovery diagnostics and media delivery

修复 harden gateway recovery diagnostics and media delivery

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 memory keep archive transcript visibility safe

修复 memory：keep archive transcript visibility safe

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 memory keep sqlite-vec optional

修复 memory：keep sqlite-vec optional

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 memory reindex archived session transcript updates

修复 memory：reindex archived session transcript updates

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 memory split vector store readiness

修复 memory：split vector store readiness

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 sdk emit replacement chat projection deltas

修复 sdk：emit replacement chat projection deltas

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 sdk treat terminal wait timeouts as timed out

修复 sdk：treat terminal wait timeouts as timed out

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 gateway add SDK-facing tools.invoke RPC

新增 gateway：add SDK-facing tools.invoke RPC

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 维护调整 delete stale memory host bridges

维护调整 delete stale memory host bridges

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 backend config regression/contract coverage、backend config、config utils、memory schema，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 backend config regression/contract coverage、batch http regression/contract coverage、embeddings remote client regression/contract coverage、embeddings regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `ssrf`（`packages/memory-host-sdk/src/host/test-helpers/ssrf.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`embedding provider adapter utils` 路径（`packages/memory-host-sdk/src/host/embedding-provider-adapter-utils.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`embeddings` 路径（`packages/memory-host-sdk/src/host/embeddings.types.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`read file shared` 路径（`packages/memory-host-sdk/src/host/read-file-shared.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/packages/shared-packages`
- Changed path count: `89`
- Status counts: `新增 34、修改 51、删除 1、重命名 3`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `89` files, `+6397` / `-698`

### 归纳依据

- 主要落点：implementation、tests/contracts、configuration/schema、auth/pairing/security behavior、session/state handling、plugin entry/API surface、manifest/package metadata、model/thinking policy。
- 新增或暴露的关键符号包括：`DEFAULT_QMD_STARTUP`, `DEFAULT_QMD_STARTUP_DELAY_MS`, `resolveStartupMode`, `resolveStartupDelayMs`, `getResponseErrorMessage`, `extractBatchErrorMessage`, `formatUnavailableBatchError`, `CANONICAL_ROOT_MEMORY_FILENAME`, `DEFAULT_AGENT_ID`, `VALID_ID_RE`。
- 建议优先验证：优先运行 `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`；`target exists and forwards to the intended CLI. | Run npm pack/install in a temp project. | | Postinstall warning changed | Inspect install output in package smoke. | Include release verification before publish. | ## Evidence limits G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(memory): split vector store readiness；fix(memory): reindex archived session transcript updates；fix(memory): keep archive transcript visibility safe；fix(memory): keep sqlite-vec optional；chore: delete stale memory host bridges；feat(gateway): add SDK-facing tools.invoke RPC；fix: harden gateway recovery diagnostics and media delivery；fix(gateway): harden artifact RPCs

### Dimension evidence

- `maintenance-修复-gateway-harden-artifact-RPCs` / 修复 gateway harden artifact RPCs:
  - source: `path` [A] `packages/memory-host-sdk/src/host/config-utils.ts`
  - source: `path` [A] `packages/memory-host-sdk/src/host/embedding-defaults.ts`
  - source: `path` [A] `packages/memory-host-sdk/src/host/embeddings-remote-client.test.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts`
- `maintenance-修复-harden-gateway-recovery-diagnostics-and-medi` / 修复 harden gateway recovery diagnostics and media delivery:
  - source: `path` [A] `packages/memory-host-sdk/src/host/config-utils.ts`
  - source: `path` [A] `packages/memory-host-sdk/src/host/embedding-defaults.ts`
  - source: `path` [A] `packages/memory-host-sdk/src/host/embeddings-remote-client.test.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts`
- `maintenance-修复-memory-keep-archive-transcript-visibility-sa` / 修复 memory keep archive transcript visibility safe:
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-storage.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — semantic cue
- `maintenance-修复-memory-keep-sqlite-vec-optional` / 修复 memory keep sqlite-vec optional:
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-storage.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — semantic cue
- `maintenance-修复-memory-reindex-archived-session-transcript-u` / 修复 memory reindex archived session transcript updates:
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-storage.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — semantic cue
- `maintenance-修复-memory-split-vector-store-readiness` / 修复 memory split vector store readiness:
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-storage.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — semantic cue
- `maintenance-修复-sdk-emit-replacement-chat-projection-deltas` / 修复 sdk emit replacement chat projection deltas:
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-storage.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — semantic cue
- `maintenance-修复-sdk-treat-terminal-wait-timeouts-as-timed-out` / 修复 sdk treat terminal wait timeouts as timed out:
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-storage.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — semantic cue
- `maintenance-新增-gateway-add-SDK-facing-tools-invoke-RPC` / 新增 gateway add SDK-facing tools.invoke RPC:
  - source: `path` [A] `packages/memory-host-sdk/src/host/config-utils.ts`
  - source: `path` [A] `packages/memory-host-sdk/src/host/embedding-defaults.ts`
  - source: `path` [A] `packages/memory-host-sdk/src/host/embeddings-remote-client.test.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts`
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts`
- `maintenance-维护调整-delete-stale-memory-host-bridges` / 维护调整 delete stale memory host bridges:
  - source: `path` [M] `packages/memory-host-sdk/src/engine-embeddings.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-foundation.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-qmd.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine-storage.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/engine.ts` — semantic cue
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — contract evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.ts` — contract evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/config-utils.ts` — contract evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/memory-schema.ts` — contract evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/openclaw-runtime-config.ts` — contract evidence
  - source: `path` [M] `packages/plugin-sdk/src/browser-config.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `packages/plugin-sdk/package.json` — build/release evidence
  - source: `path` [M] `packages/sdk/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `packages/memory-host-sdk/src/host/backend-config.test.ts` — test evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/batch-http.test.ts` — test evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/embeddings-remote-client.test.ts` — test evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/embeddings.test.ts` — test evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/internal.test.ts` — test evidence
  - source: `path` [M] `packages/memory-host-sdk/src/host/post-json.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `packages/memory-host-sdk/src/host/test-helpers/ssrf.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `packages/memory-host-sdk/src/host/embedding-provider-adapter-utils.ts`
  - source: `path` [R] `packages/memory-host-sdk/src/host/embeddings.types.ts`
  - source: `path` [R] `packages/memory-host-sdk/src/host/read-file-shared.ts`

### 路径证据

- 新增 `packages/memory-host-sdk/src/host/config-utils.ts`：调整 config utils（configuration/schema）。
- 新增 `packages/memory-host-sdk/src/host/embedding-defaults.ts`：调整 embedding defaults（implementation）。
- 新增 `packages/memory-host-sdk/src/host/embeddings-remote-client.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `packages/memory-host-sdk/src/host/error-utils.ts`：调整 error utils（implementation）。
- 新增 `packages/memory-host-sdk/src/host/hash.ts`：调整 hash（implementation）。
- 新增 `packages/memory-host-sdk/src/host/openclaw-runtime-agent.ts`：调整 openclaw runtime agent（implementation）。
- 新增 `packages/memory-host-sdk/src/host/openclaw-runtime-auth.ts`：调整 openclaw runtime auth（auth/pairing/security behavior）。
- 新增 `packages/memory-host-sdk/src/host/openclaw-runtime-cli.ts`：调整 openclaw runtime cli（implementation）。
- 新增 `packages/memory-host-sdk/src/host/openclaw-runtime-config.ts`：调整 openclaw runtime config（configuration/schema）。
- 新增 `packages/memory-host-sdk/src/host/openclaw-runtime-io.ts`：调整 openclaw runtime io（implementation）。
- 新增 `packages/memory-host-sdk/src/host/openclaw-runtime-memory.ts`：调整 openclaw runtime memory（implementation）。
- 新增 `packages/memory-host-sdk/src/host/openclaw-runtime-network.ts`：调整 openclaw runtime network（implementation）。
- 修改 `packages/memory-host-sdk/src/engine-embeddings.ts`：调整 engine embeddings（implementation）。
- 修改 `packages/memory-host-sdk/src/engine-foundation.ts`：调整 engine foundation（implementation）。
- 修改 `packages/memory-host-sdk/src/engine-qmd.ts`：调整 engine qmd（implementation）。
- 修改 `packages/memory-host-sdk/src/engine-storage.ts`：调整 engine storage（implementation）。
- 修改 `packages/memory-host-sdk/src/engine.ts`：调整 engine（implementation）。
- 修改 `packages/memory-host-sdk/src/host/backend-config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `packages/memory-host-sdk/src/host/backend-config.ts`：调整 backend config（configuration/schema）。
- 修改 `packages/memory-host-sdk/src/host/batch-error-utils.ts`：调整 batch error utils（implementation）。
- 修改 `packages/memory-host-sdk/src/host/batch-http.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `packages/memory-host-sdk/src/host/batch-http.ts`：调整 batch http（implementation）。
- 修改 `packages/memory-host-sdk/src/host/batch-upload.ts`：调整 batch upload（implementation）。
- 修改 `packages/memory-host-sdk/src/host/batch-utils.ts`：调整 batch utils（implementation）。
- 删除 `packages/memory-host-sdk/src/host/test-helpers/ssrf.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `packages/memory-host-sdk/src/host/embedding-provider-adapter-utils.ts`：调整 embedding provider adapter utils（implementation）。
- 重命名 `packages/memory-host-sdk/src/host/embeddings.types.ts`：调整 embeddings（implementation）。
- 重命名 `packages/memory-host-sdk/src/host/read-file-shared.ts`：调整 read file shared（implementation）。
- 其余 61 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `packages/shared-packages` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/packages/shared-packages/change-to-test.md` 的验证建议。
