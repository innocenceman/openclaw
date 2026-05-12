# src/config-secrets-security/secrets-resolution/runtime-secret-collection

## 1. 功能结论

**修改**：secrets audit external channel SecretRefs、secretrefs resolve external channel contracts、tolerate sparse plugin metadata snapshots、restore current main ci checks；**迁移/重构**：unify plugin metadata snapshot callers、hide utility helper internals、reuse plugin metadata snapshots；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、Gateway 使用者、agent runtime 集成方、配置/安全相关调用方
- 变更形态：新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 3、修改 26

## 3. 功能级详细差异

### 修复 gemini reuse google provider config for web search

修复 gemini：reuse google provider config for web search

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 restore current main ci checks

修复 restore current main ci checks

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 secretrefs resolve external channel contracts

修复 secretrefs：resolve external channel contracts

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 tolerate sparse plugin metadata snapshots

修复 tolerate sparse plugin metadata snapshots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 secrets audit external channel SecretRefs

测试覆盖 secrets：audit external channel SecretRefs

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 split secrets coverage migration gate

测试覆盖 split secrets coverage migration gate

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 测试覆盖 stabilize slow extension gates

测试覆盖 stabilize slow extension gates

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 hide utility helper internals

迁移/重构 hide utility helper internals

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 reuse plugin metadata snapshots

迁移/重构 reuse plugin metadata snapshots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 unify plugin metadata snapshot callers

迁移/重构 unify plugin metadata snapshot callers

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 runtime config collectors channels regression/contract coverage、runtime config collectors channels、runtime config collectors core、runtime config collectors plugins.bundled regression/contract coverage，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 provider env vars.dynamic regression/contract coverage、runtime config collectors channels regression/contract coverage、runtime config collectors plugins.bundled regression/contract coverage、runtime config collectors plugins regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/runtime-secret-collection`
- Changed path count: `29`
- Status counts: `新增 3、修改 26`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `29` files, `+1822` / `-179`

### 归纳依据

- 主要落点：auth/pairing/security behavior、gateway runtime、session/state handling。
- 新增或暴露的关键符号包括：`shouldUsePluginProviderAuthEvidence`, `appendUniqueAuthEvidence`, `resolveManifestProviderAuthEvidence`, `resolveProviderAuthEvidence`, `collectAgentTtsAssignments`, `envRef`, `EXTERNALIZED_CHANNEL_IDS`, `ref`, `inactiveExecRef`, `createExternalChannelRecord`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：test(secrets): audit external channel SecretRefs；fix(secretrefs): resolve external channel contracts；fix: tolerate sparse plugin metadata snapshots；refactor: unify plugin metadata snapshot callers；refactor: hide utility helper internals；refactor: reuse plugin metadata snapshots；fix: restore current main ci checks；fix(gemini): reuse google provider config for web search

### Dimension evidence

- `maintenance-修复-gemini-reuse-google-provider-config-for-web` / 修复 gemini reuse google provider config for web search:
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/provider-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-core.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.bundled.test.ts` — semantic cue
- `maintenance-修复-restore-current-main-ci-checks` / 修复 restore current main ci checks:
  - source: `path` [A] `src/secrets/runtime-config-collectors-plugins.bundled.test.ts`
  - source: `path` [A] `src/secrets/runtime-external-channel-audit.test.ts`
  - source: `path` [A] `src/secrets/runtime-external-channel-origin-discovery.test.ts`
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts`
  - source: `path` [M] `src/secrets/provider-env-vars.ts`
  - source: `path` [M] `src/secrets/runtime-auth.integration.test-helpers.ts`
- `public-contract-修复-secretrefs-resolve-external-channel-contracts` / 修复 secretrefs resolve external channel contracts:
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-external-channel-audit.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-external-channel-origin-discovery.test.ts` — semantic cue
- `public-contract-修复-tolerate-sparse-plugin-metadata-snapshots` / 修复 tolerate sparse plugin metadata snapshots:
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.bundled.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-core-snapshots.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime.loadable-plugin-origins.test.ts` — semantic cue
- `tests-docs-测试覆盖-secrets-audit-external-channel-SecretRefs` / 测试覆盖 secrets audit external channel SecretRefs:
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/provider-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-auth.integration.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-core.ts` — semantic cue
- `tests-docs-测试覆盖-split-secrets-coverage-migration-gate` / 测试覆盖 split secrets coverage migration gate:
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/provider-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-auth.integration.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-core.ts` — semantic cue
- `tests-docs-测试覆盖-stabilize-slow-extension-gates` / 测试覆盖 stabilize slow extension gates:
  - source: `path` [A] `src/secrets/runtime-config-collectors-plugins.bundled.test.ts`
  - source: `path` [A] `src/secrets/runtime-external-channel-audit.test.ts`
  - source: `path` [A] `src/secrets/runtime-external-channel-origin-discovery.test.ts`
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts`
  - source: `path` [M] `src/secrets/provider-env-vars.ts`
  - source: `path` [M] `src/secrets/runtime-auth.integration.test-helpers.ts`
- `migration-迁移-重构-hide-utility-helper-internals` / 迁移/重构 hide utility helper internals:
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/provider-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-auth.integration.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-core.ts` — semantic cue
- `public-contract-迁移-重构-reuse-plugin-metadata-snapshots` / 迁移/重构 reuse plugin metadata snapshots:
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/provider-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-auth.integration.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-core.ts` — semantic cue
- `public-contract-迁移-重构-unify-plugin-metadata-snapshot-callers` / 迁移/重构 unify plugin metadata snapshot callers:
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/provider-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-auth.integration.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.ts` — semantic cue
  - source: `path` [M] `src/secrets/runtime-config-collectors-core.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — contract evidence
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.ts` — contract evidence
  - source: `path` [M] `src/secrets/runtime-config-collectors-core.ts` — contract evidence
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.bundled.test.ts` — contract evidence
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.test.ts` — contract evidence
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/secrets/provider-env-vars.dynamic.test.ts` — test evidence
  - source: `path` [M] `src/secrets/runtime-config-collectors-channels.test.ts` — test evidence
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.bundled.test.ts` — test evidence
  - source: `path` [M] `src/secrets/runtime-config-collectors-plugins.test.ts` — test evidence
  - source: `path` [M] `src/secrets/runtime-core-snapshots.test.ts` — test evidence
  - source: `path` [M] `src/secrets/runtime-external-channel-audit.test.ts` — test evidence

### 路径证据

- 新增 `src/secrets/runtime-config-collectors-plugins.bundled.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/secrets/runtime-external-channel-audit.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/secrets/runtime-external-channel-origin-discovery.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/provider-env-vars.dynamic.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/provider-env-vars.ts`：调整 provider env vars（auth/pairing/security behavior）。
- 修改 `src/secrets/runtime-auth.integration.test-helpers.ts`：调整 runtime auth.integration.test helpers（auth/pairing/security behavior）。
- 修改 `src/secrets/runtime-config-collectors-channels.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/runtime-config-collectors-channels.ts`：调整 runtime config collectors channels（auth/pairing/security behavior）。
- 修改 `src/secrets/runtime-config-collectors-core.ts`：调整 runtime config collectors core（auth/pairing/security behavior）。
- 修改 `src/secrets/runtime-config-collectors-plugins.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/runtime-config-collectors-plugins.ts`：调整 runtime config collectors plugins（auth/pairing/security behavior）。
- 修改 `src/secrets/runtime-config-collectors.ts`：调整 runtime config collectors（auth/pairing/security behavior）。
- 修改 `src/secrets/runtime-core-snapshots.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/runtime-gateway-auth-surfaces.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/runtime-gateway-local-surfaces.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 14 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/secrets-resolution/runtime-secret-collection` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/secrets-resolution/runtime-secret-collection/change-to-test.md` 的验证建议。
