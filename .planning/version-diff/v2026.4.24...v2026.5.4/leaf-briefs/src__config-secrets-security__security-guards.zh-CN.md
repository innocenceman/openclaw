# src/config-secrets-security/security-guards

## 1. 功能结论

**新增**：Codex happy path prompt snapshots；**修改**：sandbox support Windows drive-letter bind sources、security block workspace env from overriding Windows system root paths、security ignore scanner comment context、avoid plugin install scanner false positives；**迁移/重构**：route inline eval through command analysis；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：contains-deletions
- 路径状态摘要（降级事实）：新增 5、修改 35、删除 2

## 3. 功能级详细差异

### 修复 apply undici family fallback to guarded fetch

修复 apply undici family fallback to guarded fetch

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 avoid plugin install scanner false positives

修复 avoid plugin install scanner false positives

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 network scope fake-ip SSRF policy to provider hosts

修复 network：scope fake-ip SSRF policy to provider hosts

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 sandbox support Windows drive-letter bind sources

修复 sandbox：support Windows drive-letter bind sources

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 scanner ignore benign member exec matches

修复 scanner：ignore benign member exec matches

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 scanner ignore full-line comments for source rules

修复 scanner：ignore full-line comments for source rules

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 security block workspace env from overriding Windows system root pat…

修复 security：block workspace env from overriding Windows system root paths

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 security ignore scanner comment context

修复 security：ignore scanner comment context

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 新增 Codex happy path prompt snapshots

新增 Codex happy path prompt snapshots

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 route inline eval through command analysis

迁移/重构 route inline eval through command analysis

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 audit config include perms regression/contract coverage、audit gateway config、audit sandbox docker config regression/contract coverage、dangerous config flags core，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 audit sandbox docker config regression/contract coverage，需要确认发布/安装链路仍一致。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 ssrf.dispatcher regression/contract coverage、ssrf regression/contract coverage、audit channel dm policy regression/contract coverage、audit channel readonly setup fallback regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `audit channel security.test helpers`（`src/security/audit-channel-security.test-helpers.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `audit.test helpers`（`src/security/audit.test-helpers.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/security-guards`
- Changed path count: `42`
- Status counts: `新增 5、修改 35、删除 2`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `42` files, `+2089` / `-819`

### 归纳依据

- 主要落点：implementation、tests/contracts、configuration/schema、model/thinking policy、gateway runtime、CLI/command behavior、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`ssrfPolicyFromHttpBaseUrlFakeIpHostnameAllowlist`, `resolveIpv6SpecialUseBlockOptions`, `loadAuditFsModule`, `loadAgentScopeModule`, `loadAgentWorkspaceDirsModule`, `loadSkillSourceModule`, `loadSkillScannerModule`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：fix(sandbox): support Windows drive-letter bind sources；fix(security): block workspace env from overriding Windows system root paths；fix(security): ignore scanner comment context；fix: avoid plugin install scanner false positives；fix: apply undici family fallback to guarded fetch；fix(network): scope fake-ip SSRF policy to provider hosts；refactor: route inline eval through command analysis；fix(scanner): ignore full-line comments for source rules

### Dimension evidence

- `maintenance-修复-apply-undici-family-fallback-to-guarded-fetch` / 修复 apply undici family fallback to guarded fetch:
  - source: `path` [M] `src/security/audit-channel-readonly-setup-fallback.test.ts` — semantic cue
- `maintenance-修复-avoid-plugin-install-scanner-false-positives` / 修复 avoid plugin install scanner false positives:
  - source: `path` [M] `src/security/audit-plugin-readonly-scope.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-plugins-trust.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-plugins-trust.ts` — semantic cue
  - source: `path` [M] `src/security/installed-plugin-dirs.ts` — semantic cue
  - source: `path` [M] `src/security/skill-scanner.test.ts` — semantic cue
  - source: `path` [M] `src/security/skill-scanner.ts` — semantic cue
- `maintenance-修复-network-scope-fake-ip-SSRF-policy-to-provide` / 修复 network scope fake-ip SSRF policy to provider hosts:
  - source: `path` [M] `src/infra/net/ssrf.dispatcher.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/ssrf.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/ssrf.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel-dm-policy.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-plugin-readonly-scope.test.ts` — semantic cue
  - source: `path` [M] `src/security/dm-policy-shared.test.ts` — semantic cue
- `maintenance-修复-sandbox-support-Windows-drive-letter-bind-so` / 修复 sandbox support Windows drive-letter bind sources:
  - source: `path` [M] `src/security/audit-sandbox-docker-config.test.ts` — semantic cue
  - source: `path` [M] `src/security/windows-acl.test.ts` — semantic cue
  - source: `path` [M] `src/security/windows-acl.ts` — semantic cue
- `maintenance-修复-scanner-ignore-benign-member-exec-matches` / 修复 scanner ignore benign member exec matches:
  - source: `path` [M] `src/security/skill-scanner.test.ts` — semantic cue
  - source: `path` [M] `src/security/skill-scanner.ts` — semantic cue
- `maintenance-修复-scanner-ignore-full-line-comments-for-source` / 修复 scanner ignore full-line comments for source rules:
  - source: `path` [M] `src/security/skill-scanner.test.ts` — semantic cue
  - source: `path` [M] `src/security/skill-scanner.ts` — semantic cue
- `maintenance-修复-security-block-workspace-env-from-overriding` / 修复 security block workspace env from overriding Windows system root pat…:
  - source: `path` [M] `src/security/audit-channel-dm-policy.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel-readonly-setup-fallback.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel-security.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel.ts` — semantic cue
  - source: `path` [M] `src/security/audit-config-include-perms.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-extra.async.test.ts` — semantic cue
- `maintenance-修复-security-ignore-scanner-comment-context` / 修复 security ignore scanner comment context:
  - source: `path` [M] `src/security/audit-channel-dm-policy.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel-readonly-setup-fallback.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel-security.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel.ts` — semantic cue
  - source: `path` [M] `src/security/audit-config-include-perms.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-extra.async.test.ts` — semantic cue
- `maintenance-新增-Codex-happy-path-prompt-snapshots` / 新增 Codex happy path prompt snapshots:
  - source: `path` [A] `src/security/audit-channel-readonly-setup-fallback.test.ts`
  - source: `path` [A] `src/security/audit-model-refs.ts`
  - source: `path` [A] `src/security/audit-workspace-skills.ts`
  - source: `path` [M] `src/infra/net/ssrf.dispatcher.test.ts`
  - source: `path` [M] `src/infra/net/ssrf.test.ts`
  - source: `path` [M] `src/infra/net/ssrf.ts`
- `migration-迁移-重构-route-inline-eval-through-command-analysis` / 迁移/重构 route inline eval through command analysis:
  - source: `path` [M] `src/infra/net/ssrf.dispatcher.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/ssrf.test.ts` — semantic cue
  - source: `path` [M] `src/infra/net/ssrf.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel-dm-policy.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel-readonly-setup-fallback.test.ts` — semantic cue
  - source: `path` [M] `src/security/audit-channel-security.test-helpers.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/security/audit-config-include-perms.test.ts` — contract evidence
  - source: `path` [M] `src/security/audit-gateway-config.ts` — contract evidence
  - source: `path` [M] `src/security/audit-sandbox-docker-config.test.ts` — contract evidence
  - source: `path` [M] `src/security/dangerous-config-flags-core.ts` — contract evidence
  - source: `path` [M] `src/security/dangerous-config-flags.test.ts` — contract evidence
  - source: `path` [M] `src/security/dangerous-config-flags.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/security/audit-sandbox-docker-config.test.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/infra/net/ssrf.dispatcher.test.ts` — test evidence
  - source: `path` [M] `src/infra/net/ssrf.test.ts` — test evidence
  - source: `path` [M] `src/security/audit-channel-dm-policy.test.ts` — test evidence
  - source: `path` [M] `src/security/audit-channel-readonly-setup-fallback.test.ts` — test evidence
  - source: `path` [M] `src/security/audit-config-include-perms.test.ts` — test evidence
  - source: `path` [M] `src/security/audit-extra.async.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/security/audit-channel-security.test-helpers.ts`
  - source: `path` [D] `src/security/audit.test-helpers.ts`

### 路径证据

- 新增 `src/security/audit-channel-readonly-setup-fallback.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/security/audit-model-refs.ts`：调整 audit model refs（implementation）。
- 新增 `src/security/audit-workspace-skills.ts`：调整 audit workspace skills（implementation）。
- 新增 `src/security/dangerous-config-flags-core.ts`：调整 dangerous config flags core（configuration/schema）。
- 新增 `src/security/installed-plugin-dirs.ts`：调整 installed plugin dirs（implementation）。
- 修改 `src/infra/net/ssrf.dispatcher.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/net/ssrf.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/infra/net/ssrf.ts`：调整 ssrf（implementation）。
- 修改 `src/security/audit-channel-dm-policy.test.ts`：新增/调整模型识别与 thinking/reasoning policy。
- 修改 `src/security/audit-channel.ts`：调整 audit channel（implementation）。
- 修改 `src/security/audit-config-include-perms.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/security/audit-extra.async.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/security/audit-extra.async.ts`：调整 audit extra.async（implementation）。
- 修改 `src/security/audit-extra.summary.ts`：调整 audit extra.summary（implementation）。
- 修改 `src/security/audit-extra.sync.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/security/audit-extra.sync.ts`：调整 audit extra.sync（implementation）。
- 修改 `src/security/audit-gateway-config.ts`：调整 audit gateway config（gateway runtime）。
- 删除 `src/security/audit-channel-security.test-helpers.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/security/audit.test-helpers.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 23 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/security-guards` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/security-guards/change-to-test.md` 的验证建议。
