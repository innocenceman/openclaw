# src/agent-runtime/providers-auth

## 1. 功能结论

**修改**：plugins normalize compat allowlist aliases、plugins preserve bundled allowlist edges、plugins default bundled discovery to allowlist、plugins rename bundled allowlist discovery policy；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 21、修改 70、删除 6

## 3. 功能级详细差异

### 优化 gateway cache startup metadata probes

优化 gateway：cache startup metadata probes

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 harden gateway install recovery paths

修复 harden gateway install recovery paths

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins add bundledMode to gate runtime provider discovery by allowl…

修复 plugins：add bundledMode to gate runtime provider discovery by allowlist

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins default bundled discovery to allowlist

修复 plugins：default bundled discovery to allowlist

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins normalize compat allowlist aliases

修复 plugins：normalize compat allowlist aliases

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins preserve bundled allowlist edges

修复 plugins：preserve bundled allowlist edges

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins rename bundled allowlist discovery policy

修复 plugins：rename bundled allowlist discovery policy

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 refresh stale codex auth profile routing

修复 refresh stale codex auth profile routing

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 agents update model auth fixture shape

测试覆盖 agents：update model auth fixture shape

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 speed up import-heavy suites

测试覆盖 speed up import-heavy suites

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 auth profiles.resolve auth profile order.uses stored profiles no config exists regression/contract coverage、models config.providers.auth aliases regression/contract coverage、models config.providers.discovery auth regression/contract coverage、models config.providers.google antigravity regression/contract coverage，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 auth profiles.chutes regression/contract coverage、auth profiles.cooldown auto expiry regression/contract coverage、auth profiles.ensureauthprofilestore regression/contract coverage、auth profiles.external cli scope regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `auth profiles.resolve auth profile order.normalizes z ai aliases auth order regression/contract coverage`（`src/agents/auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `auth profiles.resolve auth profile order.orders by lastused no explicit order exists regression/contract coverage`（`src/agents/auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `auth profiles.resolve auth profile order.uses stored profiles no config exists regression/contract coverage`（`src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `models config.providers.discovery auth regression/contract coverage`（`src/agents/models-config.providers.discovery-auth.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/providers-auth`
- Changed path count: `97`
- Status counts: `新增 21、修改 70、删除 6`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `97` files, `+6038` / `-1232`

### 归纳依据

- 主要落点：agent runtime、provider catalog、auth/pairing/security behavior、tests/contracts、implementation、plugin entry/API surface。
- 新增或暴露的关键符号包括：`makeApiKeyStore`, `makeApiKeyProfilesByProviderProvider`。
- 建议优先验证：优先运行 `| pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(plugins): normalize compat allowlist aliases；fix(plugins): preserve bundled allowlist edges；fix(plugins): default bundled discovery to allowlist；fix(plugins): rename bundled allowlist discovery policy；fix(plugins): add bundledMode to gate runtime provider discovery by allowlist；fix: refresh stale codex auth profile routing；test(agents): update model auth fixture shape；test: speed up import-heavy suites

### Dimension evidence

- `public-contract-优化-gateway-cache-startup-metadata-probes` / 优化 gateway cache startup metadata probes:
  - source: `path` [M] `src/agents/auth-profiles.store-cache.test.ts` — semantic cue
- `maintenance-修复-harden-gateway-install-recovery-paths` / 修复 harden gateway install recovery paths:
  - source: `path` [A] `src/agents/auth-profiles.external-cli-scope.test.ts`
  - source: `path` [A] `src/agents/auth-profiles/clone.ts`
  - source: `path` [A] `src/agents/auth-profiles/external-cli-discovery.ts`
  - source: `path` [M] `src/agents/auth-profiles.chutes.test.ts`
  - source: `path` [M] `src/agents/auth-profiles.cooldown-auto-expiry.test.ts`
  - source: `path` [M] `src/agents/auth-profiles.ensureauthprofilestore.test.ts`
- `runtime-behavior-修复-plugins-add-bundledMode-to-gate-runtime-prov` / 修复 plugins add bundledMode to gate runtime provider discovery by allowl…:
  - source: `path` [M] `src/agents/auth-profiles.cooldown-auto-expiry.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.ensureauthprofilestore.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.store-cache.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.store.save.test.ts` — semantic cue
- `maintenance-修复-plugins-default-bundled-discovery-to-allowli` / 修复 plugins default bundled discovery to allowlist:
  - source: `path` [M] `src/agents/auth-profiles.cooldown-auto-expiry.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.ensureauthprofilestore.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.store-cache.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.store.save.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles/external-cli-discovery.ts` — semantic cue
- `maintenance-修复-plugins-normalize-compat-allowlist-aliases` / 修复 plugins normalize compat allowlist aliases:
  - source: `path` [M] `src/agents/auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts` — semantic cue
  - source: `path` [M] `src/agents/models-config.providers.auth-aliases.test.ts` — semantic cue
  - source: `path` [M] `src/agents/models-config.providers.plugin-allowlist-compat.test.ts` — semantic cue
  - source: `path` [M] `src/infra/provider-usage.auth.normalizes-keys.test.ts` — semantic cue
  - source: `path` [M] `src/model-catalog/normalize.test.ts` — semantic cue
  - source: `path` [M] `src/model-catalog/normalize.ts` — semantic cue
- `maintenance-修复-plugins-preserve-bundled-allowlist-edges` / 修复 plugins preserve bundled allowlist edges:
  - source: `path` [M] `src/agents/models-config.providers.plugin-allowlist-compat.test.ts` — semantic cue
- `migration-修复-plugins-rename-bundled-allowlist-discovery-p` / 修复 plugins rename bundled allowlist discovery policy:
  - source: `path` [M] `src/agents/auth-profiles/external-cli-discovery.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles/policy.ts` — semantic cue
  - source: `path` [M] `src/agents/models-config.providers.discovery-auth.test.ts` — semantic cue
  - source: `path` [M] `src/agents/models-config.providers.implicit.discovery-scope.test.ts` — semantic cue
  - source: `path` [M] `src/agents/models-config.providers.plugin-allowlist-compat.test.ts` — semantic cue
  - source: `path` [M] `src/agents/models-config.providers.policy.lookup.test.ts` — semantic cue
- `runtime-behavior-修复-refresh-stale-codex-auth-profile-routing` / 修复 refresh stale codex auth profile routing:
  - source: `path` [M] `src/agents/auth-profiles.chutes.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.cooldown-auto-expiry.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.ensureauthprofilestore.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.external-cli-scope.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.external-cli-sync.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.markauthprofilefailure.test.ts` — semantic cue
- `tests-docs-测试覆盖-agents-update-model-auth-fixture-shape` / 测试覆盖 agents update model auth fixture shape:
  - source: `path` [M] `src/agents/auth-profiles.chutes.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.cooldown-auto-expiry.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.ensureauthprofilestore.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.external-cli-scope.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.external-cli-sync.test.ts` — semantic cue
  - source: `path` [M] `src/agents/auth-profiles.markauthprofilefailure.test.ts` — semantic cue
- `user-visible-测试覆盖-speed-up-import-heavy-suites` / 测试覆盖 speed up import-heavy suites:
  - source: `path` [M] `src/agents/auth-profiles/oauth-common-mocks.test-support.ts` — semantic cue
  - source: `path` [M] `src/agents/models-config.providers.policy.lookup.test.ts` — semantic cue
  - source: `path` [M] `src/agents/models-config.providers.policy.lookup.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts` — contract evidence
  - source: `path` [M] `src/agents/models-config.providers.auth-aliases.test.ts` — contract evidence
  - source: `path` [M] `src/agents/models-config.providers.discovery-auth.test.ts` — contract evidence
  - source: `path` [M] `src/agents/models-config.providers.google-antigravity.test.ts` — contract evidence
  - source: `path` [M] `src/agents/models-config.providers.implicit.discovery-scope.test.ts` — contract evidence
  - source: `path` [M] `src/agents/models-config.providers.implicit.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/agents/auth-profiles.chutes.test.ts` — test evidence
  - source: `path` [M] `src/agents/auth-profiles.cooldown-auto-expiry.test.ts` — test evidence
  - source: `path` [M] `src/agents/auth-profiles.ensureauthprofilestore.test.ts` — test evidence
  - source: `path` [M] `src/agents/auth-profiles.external-cli-scope.test.ts` — test evidence
  - source: `path` [M] `src/agents/auth-profiles.external-cli-sync.test.ts` — test evidence
  - source: `path` [M] `src/agents/auth-profiles.markauthprofilefailure.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/agents/auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts`
  - source: `path` [D] `src/agents/auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts`
  - source: `path` [D] `src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts`
  - source: `path` [D] `src/agents/models-config.providers.discovery-auth.test.ts`
  - source: `path` [D] `src/agents/models-config.providers.static.test.ts`
  - source: `path` [D] `src/agents/models-config.providers.static.ts`

### 路径证据

- 新增 `src/agents/auth-profiles.external-cli-scope.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/auth-profiles/clone.ts`：调整 clone（agent runtime）。
- 新增 `src/agents/auth-profiles/external-cli-discovery.ts`：调整 external cli discovery（agent runtime）。
- 新增 `src/agents/auth-profiles/external-cli-scope.ts`：调整 external cli scope（agent runtime）。
- 新增 `src/agents/auth-profiles/oauth-shared.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/auth-profiles/portability.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/auth-profiles/portability.ts`：调整 portability（agent runtime）。
- 新增 `src/agents/auth-profiles/profiles.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/auth-profiles/runtime-snapshots.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/model-auth.workspace-plugin.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/agents/models-config.providers.implicit.discovery-scope.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/model-catalog/authority.test.ts`：调整 OpenRouter bundled model catalog、默认模型或模型兼容策略。
- 修改 `src/agents/auth-profiles.chutes.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-profiles.cooldown-auto-expiry.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-profiles.ensureauthprofilestore.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-profiles.external-cli-sync.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-profiles.markauthprofilefailure.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-profiles.store-cache.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-profiles.store.save.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/agents/auth-profiles.ts`：调整 auth profiles（agent runtime）。
- 修改 `src/agents/auth-profiles/external-auth.ts`：调整 external auth（agent runtime）。
- 修改 `src/agents/auth-profiles/external-cli-sync.ts`：调整 external cli sync（agent runtime）。
- 修改 `src/agents/auth-profiles/external-oauth.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `src/agents/auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/models-config.providers.discovery-auth.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/models-config.providers.static.test.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/agents/models-config.providers.static.ts`：移除旧的 agent runtime 文件；需要确认没有调用方继续依赖这个路径。
- 其余 67 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/agent-runtime/providers-auth` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/providers-auth/change-to-test.md` 的验证建议。
