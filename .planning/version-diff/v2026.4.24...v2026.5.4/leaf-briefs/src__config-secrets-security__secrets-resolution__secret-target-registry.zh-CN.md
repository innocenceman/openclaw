# src/config-secrets-security/secrets-resolution/secret-target-registry

## 1. 功能结论

**新增**：tts add per-agent voice overrides；**修改**：secrets stabilize credential matrix docs、secretrefs resolve external channel contracts、Support SecretRef for voice-call credentials and bundled plugin SecretInputs、scope cold plugin manifests to index；**迁移/重构**：route plugin metadata consumers through snapshots、route bundled catalogs through plugin registry、remove dead private helpers；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`config`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：测试/回归边界变化、行为调整
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 4

## 3. 功能级详细差异

### 修复 scope cold plugin manifests to index

修复 scope cold plugin manifests to index

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 修复 secretrefs resolve external channel contracts

修复 secretrefs：resolve external channel contracts

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 修复 secrets resolve plugin env metadata cold

修复 secrets：resolve plugin env metadata cold

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 修复 secrets stabilize credential matrix docs

修复 secrets：stabilize credential matrix docs

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 修改 Support SecretRef for voice-call credentials and bundled plugin Secr…

修改 Support SecretRef for voice-call credentials and bundled plugin SecretInputs

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 新增 tts add per-agent voice overrides

新增 tts：add per-agent voice overrides

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 迁移/重构 remove dead private helpers

迁移/重构 remove dead private helpers

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 迁移/重构 route bundled catalogs through plugin registry

迁移/重构 route bundled catalogs through plugin registry

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 迁移/重构 route plugin metadata consumers through snapshots

迁移/重构 route plugin metadata consumers through snapshots

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 credential matrix、target registry data、target registry query、target registry regression/contract coverage，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 target registry regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-target-registry`
- Changed path count: `4`
- Status counts: `修改 4`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `4` files, `+114` / `-50`

### 归纳依据

- 主要落点：auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`listBundledWebProviderSecretTargetRegistryEntries`, `listBundledPluginConfigSecretTargetRegistryEntries`, `listChannelSecretTargetRegistryEntries`, `loadSecretTargetRegistryFromPluginMetadata`, `getSourceSecretTargetRegistry`, `getCompiledChannelOpenClawTargets`, `discoverAuthProfileSecretTargets`。
- 建议优先验证：优先运行 `pnpm test -- src/secrets/target-registry.test.ts src/secrets/target-registry-pattern.test.ts`。
- 相关 commit 主题：fix(secrets): stabilize credential matrix docs；fix(secretrefs): resolve external channel contracts；refactor: route plugin metadata consumers through snapshots；refactor: route bundled catalogs through plugin registry；refactor: remove dead private helpers；Support SecretRef for voice-call credentials and bundled plugin SecretInputs；fix: scope cold plugin manifests to index；fix(secrets): resolve plugin env metadata cold

### Dimension evidence

- `public-contract-修复-scope-cold-plugin-manifests-to-index` / 修复 scope cold plugin manifests to index:
  - source: `path` [M] `src/secrets/credential-matrix.ts`
  - source: `path` [M] `src/secrets/target-registry-data.ts`
  - source: `path` [M] `src/secrets/target-registry-query.ts`
- `public-contract-修复-secretrefs-resolve-external-channel-contracts` / 修复 secretrefs resolve external channel contracts:
  - source: `path` [M] `src/secrets/credential-matrix.ts`
  - source: `path` [M] `src/secrets/target-registry-data.ts`
  - source: `path` [M] `src/secrets/target-registry-query.ts`
- `public-contract-修复-secrets-resolve-plugin-env-metadata-cold` / 修复 secrets resolve plugin env metadata cold:
  - source: `path` [M] `src/secrets/credential-matrix.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-data.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-query.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry.test.ts` — semantic cue
- `tests-docs-修复-secrets-stabilize-credential-matrix-docs` / 修复 secrets stabilize credential matrix docs:
  - source: `path` [M] `src/secrets/credential-matrix.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-data.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-query.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry.test.ts` — semantic cue
- `maintenance-修改-Support-SecretRef-for-voice-call-credentials` / 修改 Support SecretRef for voice-call credentials and bundled plugin Secr…:
  - source: `path` [M] `src/secrets/credential-matrix.ts`
  - source: `path` [M] `src/secrets/target-registry-data.ts`
  - source: `path` [M] `src/secrets/target-registry-query.ts`
- `user-visible-新增-tts-add-per-agent-voice-overrides` / 新增 tts add per-agent voice overrides:
  - source: `path` [M] `src/secrets/credential-matrix.ts`
  - source: `path` [M] `src/secrets/target-registry-data.ts`
  - source: `path` [M] `src/secrets/target-registry-query.ts`
- `migration-迁移-重构-remove-dead-private-helpers` / 迁移/重构 remove dead private helpers:
  - source: `path` [M] `src/secrets/credential-matrix.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-data.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-query.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry.test.ts` — semantic cue
- `runtime-behavior-迁移-重构-route-bundled-catalogs-through-plugin-reg` / 迁移/重构 route bundled catalogs through plugin registry:
  - source: `path` [M] `src/secrets/credential-matrix.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-data.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-query.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry.test.ts` — semantic cue
- `public-contract-迁移-重构-route-plugin-metadata-consumers-through-s` / 迁移/重构 route plugin metadata consumers through snapshots:
  - source: `path` [M] `src/secrets/credential-matrix.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-data.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry-query.ts` — semantic cue
  - source: `path` [M] `src/secrets/target-registry.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/secrets/credential-matrix.ts` — contract evidence
  - source: `path` [M] `src/secrets/target-registry-data.ts` — contract evidence
  - source: `path` [M] `src/secrets/target-registry-query.ts` — contract evidence
  - source: `path` [M] `src/secrets/target-registry.test.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/secrets/target-registry.test.ts` — test evidence

### 路径证据

- 修改 `src/secrets/credential-matrix.ts`：调整 credential matrix（auth/pairing/security behavior）。
- 修改 `src/secrets/target-registry-data.ts`：调整 target registry data（auth/pairing/security behavior）。
- 修改 `src/secrets/target-registry-query.ts`：调整 target registry query（auth/pairing/security behavior）。
- 修改 `src/secrets/target-registry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/secrets-resolution/secret-target-registry` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/secrets-resolution/secret-target-registry/change-to-test.md` 的验证建议。
