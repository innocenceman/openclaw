# src/config-secrets-security/secrets-resolution

## 1. 功能结论

**修改**：secretrefs resolve external channel contracts in dist/ sidecars、secretrefs resolve external channel contracts、test stabilize core runtime infra shard、plugins prune inactive bundled runtime deps；**迁移/重构**：route plugin metadata consumers through snapshots、remove bundled public surface runtime shim；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：新增 1、修改 5

## 3. 功能级详细差异

### 修复 plugins prune inactive bundled runtime deps

修复 plugins：prune inactive bundled runtime deps

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 scope cold plugin manifests to index

修复 scope cold plugin manifests to index

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 secretrefs resolve external channel contracts

修复 secretrefs：resolve external channel contracts

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 secretrefs resolve external channel contracts in dist/ sidecars

修复 secretrefs：resolve external channel contracts in dist/ sidecars

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 secrets resolve plugin env metadata cold

修复 secrets：resolve plugin env metadata cold

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 security harden CodeQL secret ref validation

修复 security：harden CodeQL secret ref validation

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 test stabilize core runtime infra shard

修复 test：stabilize core runtime infra shard

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修改 Support SecretRef for voice-call credentials and bundled plugin Secr…

修改 Support SecretRef for voice-call credentials and bundled plugin SecretInputs

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 remove bundled public surface runtime shim

迁移/重构 remove bundled public surface runtime shim

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 迁移/重构 route plugin metadata consumers through snapshots

迁移/重构 route plugin metadata consumers through snapshots

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 channel contract api，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 channel contract api.external regression/contract coverage、channel env vars.dynamic regression/contract coverage、exec secret ref id parity regression/contract coverage、resolve regression/contract coverage，用于约束本 leaf 的回归边界。

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

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution`
- Changed path count: `6`
- Status counts: `新增 1、修改 5`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `6` files, `+427` / `-16`

### 归纳依据

- 主要落点：auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`writeExternalChannelPlugin`, `CONTRACT_API_EXTENSIONS`, `CURRENT_MODULE_PATH`, `RUNNING_FROM_BUILT_ARTIFACT`, `orderedContractApiExtensions`, `resolvePluginContractApiPath`, `loadPluginContractModule`, `loadExternalChannelSecretContractFromRecord`, `recordOwnsChannel`, `listChannelSecretContractRecords`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix(secretrefs): resolve external channel contracts in dist/ sidecars；fix(secretrefs): resolve external channel contracts；refactor: route plugin metadata consumers through snapshots；refactor: remove bundled public surface runtime shim；fix(test): stabilize core runtime infra shard；fix(plugins): prune inactive bundled runtime deps；fix(security): harden CodeQL secret ref validation；Support SecretRef for voice-call credentials and bundled plugin SecretInputs

### Dimension evidence

- `runtime-behavior-修复-plugins-prune-inactive-bundled-runtime-deps` / 修复 plugins prune inactive bundled runtime deps:
  - source: `path` [A] `src/secrets/channel-contract-api.external.test.ts`
  - source: `path` [M] `src/secrets/channel-contract-api.ts`
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts`
  - source: `path` [M] `src/secrets/channel-env-vars.ts`
- `public-contract-修复-scope-cold-plugin-manifests-to-index` / 修复 scope cold plugin manifests to index:
  - source: `path` [A] `src/secrets/channel-contract-api.external.test.ts`
  - source: `path` [M] `src/secrets/channel-contract-api.ts`
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts`
  - source: `path` [M] `src/secrets/channel-env-vars.ts`
- `public-contract-修复-secretrefs-resolve-external-channel-contracts` / 修复 secretrefs resolve external channel contracts:
  - source: `path` [M] `src/secrets/channel-contract-api.external.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-contract-api.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/resolve.test.ts` — semantic cue
- `public-contract-修复-secretrefs-resolve-external-channel-contract` / 修复 secretrefs resolve external channel contracts in dist/ sidecars:
  - source: `path` [M] `src/secrets/channel-contract-api.external.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-contract-api.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/resolve.test.ts` — semantic cue
- `public-contract-修复-secrets-resolve-plugin-env-metadata-cold` / 修复 secrets resolve plugin env metadata cold:
  - source: `path` [M] `src/secrets/channel-contract-api.external.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-contract-api.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/exec-secret-ref-id-parity.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/resolve.test.ts` — semantic cue
- `maintenance-修复-security-harden-CodeQL-secret-ref-validation` / 修复 security harden CodeQL secret ref validation:
  - source: `path` [M] `src/secrets/channel-contract-api.external.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-contract-api.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/exec-secret-ref-id-parity.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/resolve.test.ts` — semantic cue
- `runtime-behavior-修复-test-stabilize-core-runtime-infra-shard` / 修复 test stabilize core runtime infra shard:
  - source: `path` [M] `src/secrets/channel-contract-api.external.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/exec-secret-ref-id-parity.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/resolve.test.ts` — semantic cue
- `maintenance-修改-Support-SecretRef-for-voice-call-credentials` / 修改 Support SecretRef for voice-call credentials and bundled plugin Secr…:
  - source: `path` [A] `src/secrets/channel-contract-api.external.test.ts`
  - source: `path` [M] `src/secrets/channel-contract-api.ts`
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts`
  - source: `path` [M] `src/secrets/channel-env-vars.ts`
- `runtime-behavior-迁移-重构-remove-bundled-public-surface-runtime-shim` / 迁移/重构 remove bundled public surface runtime shim:
  - source: `path` [M] `src/secrets/channel-contract-api.external.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-contract-api.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/exec-secret-ref-id-parity.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/resolve.test.ts` — semantic cue
- `public-contract-迁移-重构-route-plugin-metadata-consumers-through-s` / 迁移/重构 route plugin metadata consumers through snapshots:
  - source: `path` [M] `src/secrets/channel-contract-api.external.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-contract-api.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/channel-env-vars.ts` — semantic cue
  - source: `path` [M] `src/secrets/exec-secret-ref-id-parity.test.ts` — semantic cue
  - source: `path` [M] `src/secrets/resolve.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/secrets/channel-contract-api.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/secrets/channel-contract-api.external.test.ts` — test evidence
  - source: `path` [M] `src/secrets/channel-env-vars.dynamic.test.ts` — test evidence
  - source: `path` [M] `src/secrets/exec-secret-ref-id-parity.test.ts` — test evidence
  - source: `path` [M] `src/secrets/resolve.test.ts` — test evidence

### 路径证据

- 新增 `src/secrets/channel-contract-api.external.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/channel-contract-api.ts`：调整 channel contract api（auth/pairing/security behavior）。
- 修改 `src/secrets/channel-env-vars.dynamic.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/channel-env-vars.ts`：调整 channel env vars（auth/pairing/security behavior）。
- 修改 `src/secrets/exec-secret-ref-id-parity.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/secrets/resolve.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/secrets-resolution` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/secrets-resolution/change-to-test.md` 的验证建议。
