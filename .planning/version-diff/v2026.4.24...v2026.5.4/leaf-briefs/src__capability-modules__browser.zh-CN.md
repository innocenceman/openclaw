# src/capability-modules/browser

## 1. 功能结论

**新增**：acp add opt-in Coven runtime bridge；**修改**：guard debug proxy CONNECT under managed proxy、remove unused internal dead code、speed up unit hotspot routing、move more runtime specs to fast lane；**迁移/重构**：trim cli helper exports；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`core-runtime`
- 影响范围：该 leaf 所属功能的维护者和调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 1、修改 8、删除 1

## 3. 功能级详细差异

### 修复 guard debug proxy CONNECT under managed proxy

修复 guard debug proxy CONNECT under managed proxy

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修复 sqlite bound WAL sidecar growth

修复 sqlite：bound WAL sidecar growth

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 修改 acp remove Coven bridge

修改 acp：remove Coven bridge

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 新增 acp add opt-in Coven runtime bridge

新增 acp：add opt-in Coven runtime bridge

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 测试覆盖 keep stateful tests out of unit-fast

测试覆盖 keep stateful tests out of unit-fast

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 测试覆盖 move more runtime specs to fast lane

测试覆盖 move more runtime specs to fast lane

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 测试覆盖 reduce repeated test setup overhead

测试覆盖 reduce repeated test setup overhead

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 测试覆盖 speed up unit hotspot routing

测试覆盖 speed up unit hotspot routing

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 维护调整 remove unused internal dead code

维护调整 remove unused internal dead code

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 迁移/重构 trim cli helper exports

迁移/重构 trim cli helper exports

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 browser lifecycle cleanup regression/contract coverage、env regression/contract coverage、proxy server.managed proxy regression/contract coverage、runtime regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `query`（`src/proxy-capture/query.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/browser`
- Changed path count: `10`
- Status counts: `新增 1、修改 8、删除 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `10` files, `+548` / `-182`

### 归纳依据

- 主要落点：tests/contracts、implementation、session/state handling。
- 新增或暴露的关键符号包括：`resolveDebugProxyRootDir`, `TRUTHY_ENV`, `DEBUG_PROXY_DIRECT_CONNECT_OVERRIDE`, `isTruthyEnvValue`, `isManagedProxyActive`, `allowsDirectConnectWithManagedProxy`, `assertDebugProxyDirectUpstreamAllowed`, `resolveRuntimeDeps`, `installDebugProxyGlobalFetchPatch`, `uninstallDebugProxyGlobalFetchPatch`。
- 建议优先验证：优先运行 `| pnpm test -- src/browser/client.test.ts src/browser/pw-session.test.ts src/browser/server-lifecycle.test.ts src/browser/routes/agent.snapshot.test.ts | Escalate to gateway/control UI or build checks when browser server/runtime contracts change. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. ## 2026-05-09 validation result Result:`。
- 相关 commit 主题：fix: guard debug proxy CONNECT under managed proxy；refactor: trim cli helper exports；chore: remove unused internal dead code；test: speed up unit hotspot routing；test: move more runtime specs to fast lane；revert(acp): remove Coven bridge；feat(acp): add opt-in Coven runtime bridge；test: keep stateful tests out of unit-fast

### Dimension evidence

- `maintenance-修复-guard-debug-proxy-CONNECT-under-managed-proxy` / 修复 guard debug proxy CONNECT under managed proxy:
  - source: `path` [M] `src/proxy-capture/env.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/paths.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/proxy-server.managed-proxy.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/proxy-server.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/query.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/runtime.test.ts` — semantic cue
- `maintenance-修复-sqlite-bound-WAL-sidecar-growth` / 修复 sqlite bound WAL sidecar growth:
  - source: `path` [M] `src/proxy-capture/store.sqlite.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/store.sqlite.ts` — semantic cue
- `maintenance-修改-acp-remove-Coven-bridge` / 修改 acp remove Coven bridge:
  - source: `path` [A] `src/proxy-capture/proxy-server.managed-proxy.test.ts`
  - source: `path` [M] `src/browser-lifecycle-cleanup.test.ts`
  - source: `path` [M] `src/proxy-capture/env.test.ts`
  - source: `path` [M] `src/proxy-capture/paths.ts`
  - source: `path` [D] `src/proxy-capture/query.ts`
- `runtime-behavior-新增-acp-add-opt-in-Coven-runtime-bridge` / 新增 acp add opt-in Coven runtime bridge:
  - source: `path` [M] `src/proxy-capture/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/runtime.ts` — semantic cue
- `tests-docs-测试覆盖-keep-stateful-tests-out-of-unit-fast` / 测试覆盖 keep stateful tests out of unit-fast:
  - source: `path` [A] `src/proxy-capture/proxy-server.managed-proxy.test.ts`
  - source: `path` [M] `src/browser-lifecycle-cleanup.test.ts`
  - source: `path` [M] `src/proxy-capture/env.test.ts`
  - source: `path` [M] `src/proxy-capture/paths.ts`
  - source: `path` [D] `src/proxy-capture/query.ts`
- `tests-docs-测试覆盖-move-more-runtime-specs-to-fast-lane` / 测试覆盖 move more runtime specs to fast lane:
  - source: `path` [M] `src/proxy-capture/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/runtime.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/store.sqlite.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/store.sqlite.ts` — semantic cue
- `tests-docs-测试覆盖-reduce-repeated-test-setup-overhead` / 测试覆盖 reduce repeated test setup overhead:
  - source: `path` [M] `src/browser-lifecycle-cleanup.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/env.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/proxy-server.managed-proxy.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/runtime.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/store.sqlite.test.ts` — semantic cue
- `tests-docs-测试覆盖-speed-up-unit-hotspot-routing` / 测试覆盖 speed up unit hotspot routing:
  - source: `path` [M] `src/browser-lifecycle-cleanup.test.ts` — semantic cue
- `maintenance-维护调整-remove-unused-internal-dead-code` / 维护调整 remove unused internal dead code:
  - source: `path` [A] `src/proxy-capture/proxy-server.managed-proxy.test.ts`
  - source: `path` [M] `src/browser-lifecycle-cleanup.test.ts`
  - source: `path` [M] `src/proxy-capture/env.test.ts`
  - source: `path` [M] `src/proxy-capture/paths.ts`
  - source: `path` [D] `src/proxy-capture/query.ts`
- `migration-迁移-重构-trim-cli-helper-exports` / 迁移/重构 trim cli helper exports:
  - source: `path` [M] `src/browser-lifecycle-cleanup.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/env.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/paths.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/proxy-server.managed-proxy.test.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/proxy-server.ts` — semantic cue
  - source: `path` [M] `src/proxy-capture/query.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/browser-lifecycle-cleanup.test.ts` — test evidence
  - source: `path` [M] `src/proxy-capture/env.test.ts` — test evidence
  - source: `path` [M] `src/proxy-capture/proxy-server.managed-proxy.test.ts` — test evidence
  - source: `path` [M] `src/proxy-capture/runtime.test.ts` — test evidence
  - source: `path` [M] `src/proxy-capture/store.sqlite.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/proxy-capture/query.ts`

### 路径证据

- 新增 `src/proxy-capture/proxy-server.managed-proxy.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/browser-lifecycle-cleanup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/proxy-capture/env.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/proxy-capture/paths.ts`：调整 paths（implementation）。
- 修改 `src/proxy-capture/proxy-server.ts`：调整 proxy server（implementation）。
- 修改 `src/proxy-capture/runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/proxy-capture/runtime.ts`：调整 proxy capture runtime（implementation）。
- 修改 `src/proxy-capture/store.sqlite.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/proxy-capture/store.sqlite.ts`：调整 store.sqlite（session/state handling）。
- 删除 `src/proxy-capture/query.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/capability-modules/browser` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/browser/change-to-test.md` 的验证建议。
