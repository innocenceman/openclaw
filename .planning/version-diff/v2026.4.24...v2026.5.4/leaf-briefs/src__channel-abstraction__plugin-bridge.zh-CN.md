# src/channel-abstraction/plugin-bridge

## 1. 功能结论

**修改**：resolve small triage issues、mcp expose channel payloads in primary content、mcp honor plugin tool policy、speed up exact session lookups；**迁移/重构**：trim mcp media exports；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 10

## 3. 功能级详细差异

### 优化 plugins reuse startup runtime registry

优化 plugins：reuse startup runtime registry

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 gateway wait for event loop before client start

修复 gateway：wait for event loop before client start

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 mcp expose channel payloads in primary content

修复 mcp：expose channel payloads in primary content

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 mcp honor plugin tool policy

修复 mcp：honor plugin tool policy

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 mcp serialize raw plugin tool results

修复 mcp：serialize raw plugin tool results

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 speed up exact session lookups

修复 speed up exact session lookups

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 trace plugin tool factory timings

修复 trace plugin tool factory timings

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 tighten MCP channel smoke route contract

测试覆盖 tighten MCP channel smoke route contract

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 trim mcp media exports

迁移/重构 trim mcp media exports

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试与文档语义变化

测试或契约覆盖集中在 channel server.shutdown unhandled rejection regression/contract coverage、channel server regression/contract coverage、plugin tools serve regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/src/channel-abstraction/plugin-bridge`
- Changed path count: `10`
- Status counts: `修改 10`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `10` files, `+430` / `-40`

### 归纳依据

- 主要落点：implementation、tests/contracts。
- 新增或暴露的关键符号包括：`shouldRetryInitialMcpGatewayConnect`, `gatewayRequestError`, `summarizeStructuredResult`, `resolveConversationChannel`, `createOpenClawToolsMcpServer`, `resolvePluginToolPolicy`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix: resolve small triage issues；fix(mcp): expose channel payloads in primary content；fix(mcp): honor plugin tool policy；fix: speed up exact session lookups；perf(plugins): reuse startup runtime registry；refactor: trim mcp media exports；fix: trace plugin tool factory timings；fix(gateway): wait for event loop before client start

### Dimension evidence

- `runtime-behavior-优化-plugins-reuse-startup-runtime-registry` / 优化 plugins reuse startup runtime registry:
  - source: `path` [M] `src/mcp/channel-bridge.ts`
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts`
  - source: `path` [M] `src/mcp/channel-server.test.ts`
- `maintenance-修复-gateway-wait-for-event-loop-before-client-st` / 修复 gateway wait for event loop before client start:
  - source: `path` [M] `src/mcp/channel-bridge.ts`
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts`
  - source: `path` [M] `src/mcp/channel-server.test.ts`
- `runtime-behavior-修复-mcp-expose-channel-payloads-in-primary-conte` / 修复 mcp expose channel payloads in primary content:
  - source: `path` [M] `src/mcp/channel-bridge.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-shared.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-tools.ts` — semantic cue
- `maintenance-修复-mcp-honor-plugin-tool-policy` / 修复 mcp honor plugin tool policy:
  - source: `path` [M] `src/mcp/channel-bridge.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-shared.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-tools.ts` — semantic cue
- `maintenance-修复-mcp-serialize-raw-plugin-tool-results` / 修复 mcp serialize raw plugin tool results:
  - source: `path` [M] `src/mcp/channel-bridge.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-shared.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-tools.ts` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [M] `src/mcp/channel-bridge.ts`
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts`
  - source: `path` [M] `src/mcp/channel-server.test.ts`
- `maintenance-修复-speed-up-exact-session-lookups` / 修复 speed up exact session lookups:
  - source: `path` [M] `src/mcp/channel-bridge.ts`
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts`
  - source: `path` [M] `src/mcp/channel-server.test.ts`
- `maintenance-修复-trace-plugin-tool-factory-timings` / 修复 trace plugin tool factory timings:
  - source: `path` [M] `src/mcp/channel-tools.ts` — semantic cue
  - source: `path` [M] `src/mcp/openclaw-tools-serve.ts` — semantic cue
  - source: `path` [M] `src/mcp/plugin-tools-handlers.ts` — semantic cue
  - source: `path` [M] `src/mcp/plugin-tools-serve.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/plugin-tools-serve.ts` — semantic cue
- `public-contract-测试覆盖-tighten-MCP-channel-smoke-route-contract` / 测试覆盖 tighten MCP channel smoke route contract:
  - source: `path` [M] `src/mcp/channel-bridge.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-shared.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-tools.ts` — semantic cue
- `migration-迁移-重构-trim-mcp-media-exports` / 迁移/重构 trim mcp media exports:
  - source: `path` [M] `src/mcp/channel-bridge.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.test.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-server.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-shared.ts` — semantic cue
  - source: `path` [M] `src/mcp/channel-tools.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts` — test evidence
  - source: `path` [M] `src/mcp/channel-server.test.ts` — test evidence
  - source: `path` [M] `src/mcp/plugin-tools-serve.test.ts` — test evidence

### 路径证据

- 修改 `src/mcp/channel-bridge.ts`：调整 channel bridge（implementation）。
- 修改 `src/mcp/channel-server.shutdown-unhandled-rejection.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/mcp/channel-server.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/mcp/channel-server.ts`：调整 channel server（implementation）。
- 修改 `src/mcp/channel-shared.ts`：调整 channel shared（implementation）。
- 修改 `src/mcp/channel-tools.ts`：调整 channel tools（implementation）。
- 修改 `src/mcp/openclaw-tools-serve.ts`：调整 openclaw tools serve（implementation）。
- 修改 `src/mcp/plugin-tools-handlers.ts`：调整 plugin tools handlers（implementation）。
- 修改 `src/mcp/plugin-tools-serve.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/mcp/plugin-tools-serve.ts`：调整 plugin tools serve（implementation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/channel-abstraction/plugin-bridge` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/channel-abstraction/plugin-bridge/change-to-test.md` 的验证建议。
