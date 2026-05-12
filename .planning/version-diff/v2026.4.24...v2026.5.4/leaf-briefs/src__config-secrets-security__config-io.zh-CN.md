# src/config-secrets-security/config-io

## 1. 功能结论

**新增**：add rich Slack progress drafts；**修改**：sandbox support Windows drive-letter bind sources、plugins emit actionable install hint for externalized channel plugins、doctor preserve active auth profile metadata、config prefer plugin ids for built-in channel claims；**迁移/重构**：source service env install planning；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Gateway 使用者、配置/安全相关调用方
- 变更形态：公共契约或 control-plane metadata 变化、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：large
- 路径状态摘要（降级事实）：新增 13、修改 92

## 3. 功能级详细差异

### 修复 channels align preview tool progress help

修复 channels：align preview tool progress help

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 config prefer plugin ids for built-in channel claims

修复 config：prefer plugin ids for built-in channel claims

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 doctor preserve active auth profile metadata

修复 doctor：preserve active auth profile metadata

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 plugins emit actionable install hint for externalized channel plugins

修复 plugins：emit actionable install hint for externalized channel plugins

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 resolve small triage issues

修复 resolve small triage issues

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 修复 sandbox support Windows drive-letter bind sources

修复 sandbox：support Windows drive-letter bind sources

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 新增 add rich Slack progress drafts

新增 add rich Slack progress drafts

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 restore jiti override seams for loader tests

测试覆盖 restore jiti override seams for loader tests

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 测试覆盖 satisfy jiti mock type contracts

测试覆盖 satisfy jiti mock type contracts

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 迁移/重构 source service env install planning

迁移/重构 source service env install planning

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 agent dirs、allowed values、backup rotation、bindings，需要按契约边界审查。

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 config.sandbox docker regression/contract coverage，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 bundled channel config runtime regression/contract coverage、channel configured regression/contract coverage、commands regression/contract coverage、config misc regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 agent dirs、allowed values、backup rotation、bindings、bundled channel config metadata.generated、bundled channel config runtime regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `gateway-config-security`
- Impact-map dir: `.planning/impact-map/src/config-secrets-security/config-io`
- Changed path count: `105`
- Status counts: `新增 13、修改 92`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `105` files, `+9308` / `-1668`

### 归纳依据

- 主要落点：configuration/schema、session/state handling、CLI/command behavior、gateway runtime。
- 新增或暴露的关键符号包括：`CONFIG_BACKUP_COUNT`, `isAcpBinding`。
- 建议优先验证：优先运行 `| pnpm test -- src/config/io.write-config.test.ts src/config/includes.test.ts src/config/paths.test.ts src/config/runtime-overrides.test.ts | Escalate to build/docs checks when config file shape or generated outputs change. | Residual Wave 1R unit | ## Validation evidence Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output. <!-- version-diff-refresh:v2026.4.24:start --> ## v2026.4.24 refresh validation focus - Changed paths:`。
- 相关 commit 主题：fix(sandbox): support Windows drive-letter bind sources；fix(plugins): emit actionable install hint for externalized channel plugins；fix(doctor): preserve active auth profile metadata；fix(config): prefer plugin ids for built-in channel claims；fix: resolve small triage issues；test: satisfy jiti mock type contracts；test: restore jiti override seams for loader tests；feat: add rich Slack progress drafts

### Dimension evidence

- `maintenance-修复-channels-align-preview-tool-progress-help` / 修复 channels align preview tool progress help:
  - source: `path` [M] `src/config/plugin-auto-enable.channels.test.ts` — semantic cue
  - source: `path` [M] `src/config/plugin-auto-enable.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/config/test-helpers.ts` — semantic cue
- `user-visible-修复-config-prefer-plugin-ids-for-built-in-channe` / 修复 config prefer plugin ids for built-in channel claims:
  - source: `path` [M] `src/config/agent-dirs.ts` — semantic cue
  - source: `path` [M] `src/config/allowed-values.ts` — semantic cue
  - source: `path` [M] `src/config/backup-rotation.ts` — semantic cue
  - source: `path` [M] `src/config/bindings.ts` — semantic cue
  - source: `path` [M] `src/config/bundled-channel-config-metadata.generated.ts` — semantic cue
  - source: `path` [M] `src/config/bundled-channel-config-runtime.test.ts` — semantic cue
- `public-contract-修复-doctor-preserve-active-auth-profile-metadata` / 修复 doctor preserve active auth profile metadata:
  - source: `path` [M] `src/config/bundled-channel-config-metadata.generated.ts` — semantic cue
  - source: `path` [M] `src/config/validation.channel-metadata.test.ts` — semantic cue
- `maintenance-修复-plugins-emit-actionable-install-hint-for-ext` / 修复 plugins emit actionable install hint for externalized channel plugins:
  - source: `path` [M] `src/config/bundled-channel-config-metadata.generated.ts` — semantic cue
  - source: `path` [M] `src/config/bundled-channel-config-runtime.test.ts` — semantic cue
  - source: `path` [M] `src/config/channel-capabilities.ts` — semantic cue
  - source: `path` [M] `src/config/channel-compat-normalization.ts` — semantic cue
  - source: `path` [M] `src/config/channel-configured.test.ts` — semantic cue
  - source: `path` [M] `src/config/channel-configured.ts` — semantic cue
- `maintenance-修复-resolve-small-triage-issues` / 修复 resolve small triage issues:
  - source: `path` [A] `src/config/config.model-ref-validation.test.ts`
  - source: `path` [A] `src/config/control-ui-css.ts`
  - source: `path` [A] `src/config/future-version-guard.test.ts`
  - source: `path` [M] `src/config/agent-dirs.ts`
  - source: `path` [M] `src/config/allowed-values.ts`
  - source: `path` [M] `src/config/backup-rotation.ts`
- `maintenance-修复-sandbox-support-Windows-drive-letter-bind-so` / 修复 sandbox support Windows drive-letter bind sources:
  - source: `path` [M] `src/config/bindings.ts` — semantic cue
  - source: `path` [M] `src/config/config.acp-binding-cutover.test.ts` — semantic cue
  - source: `path` [M] `src/config/config.sandbox-docker.test.ts` — semantic cue
  - source: `path` [M] `src/config/thread-bindings-config-keys.test.ts` — semantic cue
- `maintenance-新增-add-rich-Slack-progress-drafts` / 新增 add rich Slack progress drafts:
  - source: `path` [A] `src/config/config.model-ref-validation.test.ts`
  - source: `path` [A] `src/config/control-ui-css.ts`
  - source: `path` [A] `src/config/future-version-guard.test.ts`
  - source: `path` [M] `src/config/agent-dirs.ts`
  - source: `path` [M] `src/config/allowed-values.ts`
  - source: `path` [M] `src/config/backup-rotation.ts`
- `tests-docs-测试覆盖-restore-jiti-override-seams-for-loader-tes` / 测试覆盖 restore jiti override seams for loader tests:
  - source: `path` [M] `src/config/io.best-effort.test.ts` — semantic cue
  - source: `path` [M] `src/config/issue-format.test.ts` — semantic cue
  - source: `path` [M] `src/config/issue-format.ts` — semantic cue
  - source: `path` [M] `src/config/session-parent-fork-config-keys.test.ts` — semantic cue
- `public-contract-测试覆盖-satisfy-jiti-mock-type-contracts` / 测试覆盖 satisfy jiti mock type contracts:
  - source: `path` [M] `src/config/plugin-auto-enable.types.ts` — semantic cue
- `migration-迁移-重构-source-service-env-install-planning` / 迁移/重构 source service env install planning:
  - source: `path` [M] `src/config/agent-dirs.ts` — semantic cue
  - source: `path` [M] `src/config/allowed-values.ts` — semantic cue
  - source: `path` [M] `src/config/backup-rotation.ts` — semantic cue
  - source: `path` [M] `src/config/bindings.ts` — semantic cue
  - source: `path` [M] `src/config/bundled-channel-config-metadata.generated.ts` — semantic cue
  - source: `path` [M] `src/config/bundled-channel-config-runtime.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/config/agent-dirs.ts` — contract evidence
  - source: `path` [M] `src/config/allowed-values.ts` — contract evidence
  - source: `path` [M] `src/config/backup-rotation.ts` — contract evidence
  - source: `path` [M] `src/config/bindings.ts` — contract evidence
  - source: `path` [M] `src/config/bundled-channel-config-metadata.generated.ts` — contract evidence
  - source: `path` [M] `src/config/bundled-channel-config-runtime.test.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/config/config.sandbox-docker.test.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/config/bundled-channel-config-runtime.test.ts` — test evidence
  - source: `path` [M] `src/config/channel-configured.test.ts` — test evidence
  - source: `path` [M] `src/config/commands.test.ts` — test evidence
  - source: `path` [M] `src/config/config-misc.test.ts` — test evidence
  - source: `path` [M] `src/config/config.acp-binding-cutover.test.ts` — test evidence
  - source: `path` [M] `src/config/config.allowlist-requires-allowfrom.test.ts` — test evidence
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/config/config.model-ref-validation.test.ts`
  - source: `path` [A] `src/config/control-ui-css.ts`
  - source: `path` [A] `src/config/future-version-guard.test.ts`
  - source: `path` [A] `src/config/future-version-guard.ts`
  - source: `path` [A] `src/config/gateway-control-ui-origins.test.ts`
  - source: `path` [A] `src/config/io.clobber-snapshot.test.ts`

### 路径证据

- 新增 `src/config/config.model-ref-validation.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/control-ui-css.ts`：调整 control ui css（configuration/schema）。
- 新增 `src/config/future-version-guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/future-version-guard.ts`：调整 future version guard（configuration/schema）。
- 新增 `src/config/gateway-control-ui-origins.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/io.clobber-snapshot.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/io.clobber-snapshot.ts`：调整 io.clobber snapshot（configuration/schema）。
- 新增 `src/config/mcp-config-normalize.ts`：调整 mcp config normalize（configuration/schema）。
- 新增 `src/config/model-refs.ts`：调整 model refs（configuration/schema）。
- 新增 `src/config/plugin-install-config-migration.ts`：调整 plugin install config migration（configuration/schema）。
- 新增 `src/config/session-parent-fork-config-keys.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/config/validation.cold-imports.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/agent-dirs.ts`：调整 agent dirs（configuration/schema）。
- 修改 `src/config/allowed-values.ts`：调整 allowed values（configuration/schema）。
- 修改 `src/config/backup-rotation.ts`：调整 backup rotation（configuration/schema）。
- 修改 `src/config/bindings.ts`：调整 bindings（configuration/schema）。
- 修改 `src/config/bundled-channel-config-metadata.generated.ts`：调整 bundled channel config metadata.generated（configuration/schema）。
- 修改 `src/config/bundled-channel-config-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/cache-utils.ts`：调整 cache utils（configuration/schema）。
- 修改 `src/config/channel-capabilities.ts`：调整 channel capabilities（configuration/schema）。
- 修改 `src/config/channel-compat-normalization.ts`：调整 channel compat normalization（configuration/schema）。
- 修改 `src/config/channel-configured.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/config/channel-configured.ts`：调整 channel configured（configuration/schema）。
- 修改 `src/config/commands.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 81 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/config-secrets-security/config-io` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/config-secrets-security/config-io/change-to-test.md` 的验证建议。
