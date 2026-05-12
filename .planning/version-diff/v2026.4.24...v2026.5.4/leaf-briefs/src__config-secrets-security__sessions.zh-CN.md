# src/config-secrets-security/sessions

## 1. 功能结论

**修改**：Feat/main session durable delivery pr、[plugin sdk] Project session extension slots、reduce WebUI session latency churn thanks @BunsDev、gateway trim session list hot path；**迁移/重构**：sessions route cleanup through controlled writers、skills centralize snapshot hydration；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名
- 特殊形态：contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 7、修改 32、删除 1、重命名 2

## 3. 功能级详细差异

### 优化 gateway avoid extra session-list store work

优化 gateway：avoid extra session-list store work

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 优化 gateway trim session list hot path

优化 gateway：trim session list hot path

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 优化 route session store writes through writer queue

优化 route session store writes through writer queue

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 auth avoid structuredClone for auth profile stores

修复 auth：avoid structuredClone for auth profile stores

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 reduce WebUI session latency churn thanks @BunsDev

修复 reduce WebUI session latency churn thanks @BunsDev

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 thread session write-lock timeout config

修复 thread session write-lock timeout config

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 Feat/main session durable delivery pr

修改 Feat/main session durable delivery pr

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修改 [plugin sdk] Project session extension slots

修改 [plugin sdk] Project session extension slots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 sessions route cleanup through controlled writers

迁移/重构 sessions：route cleanup through controlled writers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 skills centralize snapshot hydration

迁移/重构 skills：centralize snapshot hydration

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 artifacts regression/contract coverage、delivery info regression/contract coverage、disk budget regression/contract coverage、session key regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `store.lock regression/contract coverage`（`src/config/sessions/store.lock.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`store lock state` 路径（`src/config/sessions/store-lock-state.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。；`store writer state` 路径（`src/config/sessions/store-writer-state.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

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

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/sessions`
- Changed path count: `42`
- Status counts: `新增 7、修改 32、删除 1、重命名 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `41` files, `+3023` / `-585`

### 归纳依据

- 主要落点：session/state handling、gateway runtime。
- 新增或暴露的关键符号包括：`COMPACTION_CHECKPOINT_TRANSCRIPT_RE`, `parseCompactionCheckpointTranscriptFileName`, `isCompactionCheckpointTranscriptFileName`, `isTrajectoryRuntimeArtifactName`, `isTrajectoryPointerArtifactName`, `isTrajectorySessionArtifactName`, `resolveSessionCleanupAction`, `serializeSessionCleanupResult`, `pruneMissingTranscriptEntries`, `loadCombinedSessionStoreForGateway`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：Feat/main session durable delivery pr；[plugin sdk] Project session extension slots；fix: reduce WebUI session latency churn thanks @BunsDev；perf(gateway): trim session list hot path；perf(gateway): avoid extra session-list store work；fix: thread session write-lock timeout config；fix(auth): avoid structuredClone for auth profile stores；refactor(sessions): route cleanup through controlled writers

### Dimension evidence

- `maintenance-优化-gateway-avoid-extra-session-list-store-work` / 优化 gateway avoid extra session-list store work:
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/store-cache.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/store-load.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/store-lock-state.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/store-maintenance-runtime.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/store-maintenance.ts` — semantic cue
- `maintenance-优化-gateway-trim-session-list-hot-path` / 优化 gateway trim session list hot path:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/artifacts.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/cleanup-service.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.ts` — semantic cue
- `maintenance-优化-route-session-store-writes-through-writer-qu` / 优化 route session store writes through writer queue:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/artifacts.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/cleanup-service.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.ts` — semantic cue
- `maintenance-修复-auth-avoid-structuredClone-for-auth-profile` / 修复 auth avoid structuredClone for auth profile stores:
  - source: `path` [A] `src/config/sessions/cleanup-service.ts`
  - source: `path` [A] `src/config/sessions/lifecycle.ts`
  - source: `path` [A] `src/config/sessions/store-writer.test.ts`
  - source: `path` [M] `src/config/sessions/artifacts.test.ts`
  - source: `path` [M] `src/config/sessions/artifacts.ts`
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts`
- `user-visible-修复-reduce-WebUI-session-latency-churn-thanks-B` / 修复 reduce WebUI session latency churn thanks @BunsDev:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/artifacts.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/cleanup-service.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.ts` — semantic cue
- `maintenance-修复-thread-session-write-lock-timeout-config` / 修复 thread session write-lock timeout config:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/artifacts.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/cleanup-service.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.ts` — semantic cue
- `maintenance-修改-Feat-main-session-durable-delivery-pr` / 修改 Feat/main session durable delivery pr:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/artifacts.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/cleanup-service.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.ts` — semantic cue
- `maintenance-修改-plugin-sdk-Project-session-extension-slots` / 修改 [plugin sdk] Project session extension slots:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/artifacts.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/cleanup-service.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.ts` — semantic cue
- `migration-迁移-重构-sessions-route-cleanup-through-controlled` / 迁移/重构 sessions route cleanup through controlled writers:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/artifacts.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/cleanup-service.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.ts` — semantic cue
- `migration-迁移-重构-skills-centralize-snapshot-hydration` / 迁移/重构 skills centralize snapshot hydration:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/artifacts.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/cleanup-service.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/combined-store-gateway.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — semantic cue
  - source: `path` [M] `src/config/sessions/delivery-info.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/config/sessions/artifacts.test.ts` — test evidence
  - source: `path` [M] `src/config/sessions/delivery-info.test.ts` — test evidence
  - source: `path` [M] `src/config/sessions/disk-budget.test.ts` — test evidence
  - source: `path` [M] `src/config/sessions/session-key.test.ts` — test evidence
  - source: `path` [M] `src/config/sessions/sessions.test.ts` — test evidence
  - source: `path` [M] `src/config/sessions/store-writer.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/config/sessions/store.lock.test.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `src/config/sessions/store-lock-state.ts`
  - source: `path` [R] `src/config/sessions/store-writer-state.ts`

### 路径证据

- 新增 `src/config/sessions/cleanup-service.ts`：调整 cleanup service（session/state handling）。
- 新增 `src/config/sessions/lifecycle.ts`：调整 lifecycle（session/state handling）。
- 新增 `src/config/sessions/store-writer.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/sessions/store-writer.ts`：调整 store writer（session/state handling）。
- 新增 `src/config/sessions/store.skills-stripping.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/sessions/transcript-append.ts`：调整 transcript append（session/state handling）。
- 新增 `src/sessions/input-provenance.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/sessions/artifacts.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/sessions/artifacts.ts`：调整 artifacts（session/state handling）。
- 修改 `src/config/sessions/combined-store-gateway.ts`：调整 combined store gateway（gateway runtime）。
- 修改 `src/config/sessions/delivery-info.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/sessions/delivery-info.ts`：调整 delivery info（session/state handling）。
- 修改 `src/config/sessions/disk-budget.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/sessions/disk-budget.ts`：调整 disk budget（session/state handling）。
- 修改 `src/config/sessions/main-session.runtime.ts`：调整 main session（session/state handling）。
- 修改 `src/config/sessions/metadata.ts`：调整 metadata（session/state handling）。
- 修改 `src/config/sessions/paths.ts`：调整 paths（session/state handling）。
- 修改 `src/config/sessions/reset-policy.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/config/sessions/runtime-types.ts`：调整 runtime types（session/state handling）。
- 删除 `src/config/sessions/store.lock.test.ts`：移除旧的 session/state handling 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/config/sessions/store-lock-state.ts`：调整 store lock state（session/state handling）。
- 重命名 `src/config/sessions/store-writer-state.ts`：调整 store writer state（session/state handling）。
- 其余 20 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/sessions` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/sessions/change-to-test.md` 的验证建议。
