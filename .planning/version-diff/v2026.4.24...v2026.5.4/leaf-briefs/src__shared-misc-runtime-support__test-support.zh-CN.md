# src/shared-misc-runtime-support/test-support

## 1. 功能结论

**修改**：clean up root clutter、route session store writes through writer queue、preserve discord announce account routing、gemini reuse google provider config for web search；**迁移/重构**：hide utility helper internals、remove unused test utilities、simplify plugin dependency handling、trim shared test helper exports；行为变化，风险 medium。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、agent runtime 集成方
- 变更形态：删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名
- 特殊形态：contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 5、修改 14、删除 3、重命名 1

## 3. 功能级详细差异

### 优化 route session store writes through writer queue

优化 route session store writes through writer queue

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 gemini reuse google provider config for web search

修复 gemini：reuse google provider config for web search

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 preserve discord announce account routing

修复 preserve discord announce account routing

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 修复 slack print setup manifest as plain JSON

修复 slack：print setup manifest as plain JSON

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 维护调整 clean up root clutter

维护调整 clean up root clutter

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 hide utility helper internals

迁移/重构 hide utility helper internals

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 remove unused test utilities

迁移/重构 remove unused test utilities

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 simplify plugin dependency handling

迁移/重构 simplify plugin dependency handling

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim shared test helper exports

迁移/重构 trim shared test helper exports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 迁移/重构 trim test utility exports

迁移/重构 trim test utility exports

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 network interfaces、resolve target error cases、temp dir regression/contract coverage、temp dir，需要按契约边界审查。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 temp dir regression/contract coverage、openclaw test state regression/contract coverage、session state cleanup regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `model auth mock`（`src/test-utils/model-auth-mock.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `provider registry allowlist.test helpers`（`src/test-utils/provider-registry-allowlist.test-helpers.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `repo scan`（`src/test-utils/repo-scan.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`plugin setup wizard` 路径（`src/test-utils/plugin-setup-wizard.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 5. 建议优先验证

- 首选验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `shared-runtime-support`
- Impact-map dir: `.planning/impact-map/src/shared-misc-runtime-support/test-support`
- Changed path count: `23`
- Status counts: `新增 5、修改 14、删除 3、重命名 1`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `23` files, `+1232` / `-329`

### 归纳依据

- 主要落点：implementation、session/state handling、auth/pairing/security behavior、tests/contracts。
- 新增或暴露的关键符号包括：`makeNetworkInterfaceEntry`, `acquireSyncPrefixRoot`, `releaseSyncPrefixRoot`, `shouldExpectNativeJitiForJavaScriptTestRuntime`, `createSuccessfulSpawnResult`, `mockNpmViewMetadataResult`, `DEFAULT_PREFIX`, `ENV_KEYS`, `normalizeLabel`, `resolveWindowsHomeEnv`。
- 建议优先验证：参考 leaf 的 `change-to-test.md`，先运行最小验证，再按风险扩大验证范围。
- 相关 commit 主题：chore: clean up root clutter；perf: route session store writes through writer queue；fix: preserve discord announce account routing；refactor: hide utility helper internals；fix(gemini): reuse google provider config for web search；refactor: remove unused test utilities；fix(slack): print setup manifest as plain JSON；refactor: simplify plugin dependency handling

### Dimension evidence

- `maintenance-优化-route-session-store-writes-through-writer-qu` / 优化 route session store writes through writer queue:
  - source: `path` [M] `src/test-utils/session-conversation-registry.ts` — semantic cue
  - source: `path` [M] `src/test-utils/session-state-cleanup.test.ts` — semantic cue
  - source: `path` [M] `src/test-utils/session-state-cleanup.ts` — semantic cue
  - source: `path` [M] `src/test-utils/session-write-lock-module-mock.ts` — semantic cue
- `maintenance-修复-gemini-reuse-google-provider-config-for-web` / 修复 gemini reuse google provider config for web search:
  - source: `path` [M] `src/test-utils/provider-registry-allowlist.test-helpers.ts` — semantic cue
  - source: `path` [M] `src/test-utils/web-provider-runtime.test-helpers.ts` — semantic cue
- `runtime-behavior-修复-preserve-discord-announce-account-routing` / 修复 preserve discord announce account routing:
  - source: `path` [A] `src/test-helpers/temp-dir.test.ts`
  - source: `path` [A] `src/test-utils/jiti-runtime.ts`
  - source: `path` [A] `src/test-utils/openclaw-test-state.test.ts`
  - source: `path` [M] `src/test-helpers/network-interfaces.ts`
  - source: `path` [M] `src/test-helpers/resolve-target-error-cases.ts`
  - source: `path` [M] `src/test-helpers/temp-dir.ts`
- `public-contract-修复-slack-print-setup-manifest-as-plain-JSON` / 修复 slack print setup manifest as plain JSON:
  - source: `path` [M] `src/test-helpers/resolve-target-error-cases.ts` — semantic cue
  - source: `path` [M] `src/test-utils/exec-assertions.ts` — semantic cue
  - source: `path` [M] `src/test-utils/plugin-setup-wizard.ts` — semantic cue
- `maintenance-维护调整-clean-up-root-clutter` / 维护调整 clean up root clutter:
  - source: `path` [M] `src/test-utils/plugin-setup-wizard.ts` — semantic cue
  - source: `path` [M] `src/test-utils/session-state-cleanup.test.ts` — semantic cue
  - source: `path` [M] `src/test-utils/session-state-cleanup.ts` — semantic cue
- `migration-迁移-重构-hide-utility-helper-internals` / 迁移/重构 hide utility helper internals:
  - source: `path` [M] `src/test-helpers/network-interfaces.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/resolve-target-error-cases.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.test.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.ts` — semantic cue
  - source: `path` [M] `src/test-utils/channel-plugins.ts` — semantic cue
  - source: `path` [M] `src/test-utils/exec-assertions.ts` — semantic cue
- `migration-迁移-重构-remove-unused-test-utilities` / 迁移/重构 remove unused test utilities:
  - source: `path` [M] `src/test-helpers/network-interfaces.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/resolve-target-error-cases.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.test.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.ts` — semantic cue
  - source: `path` [M] `src/test-utils/channel-plugins.ts` — semantic cue
  - source: `path` [M] `src/test-utils/exec-assertions.ts` — semantic cue
- `migration-迁移-重构-simplify-plugin-dependency-handling` / 迁移/重构 simplify plugin dependency handling:
  - source: `path` [M] `src/test-helpers/network-interfaces.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/resolve-target-error-cases.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.test.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.ts` — semantic cue
  - source: `path` [M] `src/test-utils/channel-plugins.ts` — semantic cue
  - source: `path` [M] `src/test-utils/exec-assertions.ts` — semantic cue
- `migration-迁移-重构-trim-shared-test-helper-exports` / 迁移/重构 trim shared test helper exports:
  - source: `path` [M] `src/test-helpers/network-interfaces.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/resolve-target-error-cases.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.test.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.ts` — semantic cue
  - source: `path` [M] `src/test-utils/channel-plugins.ts` — semantic cue
  - source: `path` [M] `src/test-utils/exec-assertions.ts` — semantic cue
- `migration-迁移-重构-trim-test-utility-exports` / 迁移/重构 trim test utility exports:
  - source: `path` [M] `src/test-helpers/network-interfaces.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/resolve-target-error-cases.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.test.ts` — semantic cue
  - source: `path` [M] `src/test-helpers/temp-dir.ts` — semantic cue
  - source: `path` [M] `src/test-utils/channel-plugins.ts` — semantic cue
  - source: `path` [M] `src/test-utils/exec-assertions.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/test-helpers/network-interfaces.ts` — contract evidence
  - source: `path` [M] `src/test-helpers/resolve-target-error-cases.ts` — contract evidence
  - source: `path` [M] `src/test-helpers/temp-dir.test.ts` — contract evidence
  - source: `path` [M] `src/test-helpers/temp-dir.ts` — contract evidence
  - source: `path` [M] `src/test-utils/channel-plugins.ts` — contract evidence
  - source: `path` [M] `src/test-utils/exec-assertions.ts` — contract evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/test-helpers/temp-dir.test.ts` — test evidence
  - source: `path` [M] `src/test-utils/openclaw-test-state.test.ts` — test evidence
  - source: `path` [M] `src/test-utils/session-state-cleanup.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/test-utils/model-auth-mock.ts`
  - source: `path` [D] `src/test-utils/provider-registry-allowlist.test-helpers.ts`
  - source: `path` [D] `src/test-utils/repo-scan.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `src/test-utils/plugin-setup-wizard.ts`

### 路径证据

- 新增 `src/test-helpers/temp-dir.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/test-utils/jiti-runtime.ts`：调整 jiti runtime（implementation）。
- 新增 `src/test-utils/openclaw-test-state.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/test-utils/openclaw-test-state.ts`：调整 openclaw test state（session/state handling）。
- 新增 `src/test-utils/plugin-runtime-env.ts`：调整 plugin runtime env（implementation）。
- 修改 `src/test-helpers/network-interfaces.ts`：调整 network interfaces（implementation）。
- 修改 `src/test-helpers/resolve-target-error-cases.ts`：调整 resolve target error cases（implementation）。
- 修改 `src/test-helpers/temp-dir.ts`：调整 temp dir（implementation）。
- 修改 `src/test-utils/channel-plugins.ts`：调整 channel plugins（implementation）。
- 修改 `src/test-utils/exec-assertions.ts`：调整 exec assertions（implementation）。
- 修改 `src/test-utils/npm-spec-install-test-helpers.ts`：调整 npm spec install test helpers（implementation）。
- 修改 `src/test-utils/plugin-registration.ts`：调整 plugin registration（implementation）。
- 修改 `src/test-utils/secret-file-fixture.ts`：调整 secret file fixture（auth/pairing/security behavior）。
- 修改 `src/test-utils/secret-ref-test-vectors.ts`：调整 secret ref test vectors（auth/pairing/security behavior）。
- 修改 `src/test-utils/session-conversation-registry.ts`：调整 session conversation registry（session/state handling）。
- 修改 `src/test-utils/session-state-cleanup.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/test-utils/session-state-cleanup.ts`：调整 session state cleanup（session/state handling）。
- 删除 `src/test-utils/model-auth-mock.ts`：移除旧的 auth/pairing/security behavior 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/test-utils/provider-registry-allowlist.test-helpers.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/test-utils/repo-scan.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/test-utils/plugin-setup-wizard.ts`：调整 plugin setup wizard（implementation）。
- 其余 2 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/shared-misc-runtime-support/test-support` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/shared-misc-runtime-support/test-support/change-to-test.md` 的验证建议。
