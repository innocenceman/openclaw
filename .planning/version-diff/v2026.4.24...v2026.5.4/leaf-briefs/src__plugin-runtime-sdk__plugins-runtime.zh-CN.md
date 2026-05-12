# src/plugin-runtime-sdk/plugins-runtime

## 1. 功能结论

**修改**：plugins honor beta channel for auto installs、plugins include json5 in memory runtime deps、plugins make loader compat contract explicit、plugins trust official diagnostics installs；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：CLI/agent 使用者、Provider/plugin 调用方、agent runtime 集成方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、迁移或重命名、集成、构建或发布变化
- 特殊形态：large、contains-deletions、contains-renames
- 路径状态摘要（降级事实）：新增 34、修改 100、删除 4、重命名 1

## 3. 功能级详细差异

### 修复 device-pair require pairing scope for pair command

修复 device-pair：require pairing scope for pair command

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 plugins honor beta channel for auto installs

修复 plugins：honor beta channel for auto installs

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 plugins ignore invalid managed runtime shadows

修复 plugins：ignore invalid managed runtime shadows

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 plugins include json5 in memory runtime deps

修复 plugins：include json5 in memory runtime deps

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 plugins trust official Codex package commands

修复 plugins：trust official Codex package commands

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 plugins trust official diagnostics installs

修复 plugins：trust official diagnostics installs

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修改 [plugin sdk] Harden finalize retry and run context cleanup

修改 [plugin sdk] Harden finalize retry and run context cleanup

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修改 [plugin sdk] Project session extension slots

修改 [plugin sdk] Project session extension slots

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 harden plugin and UI isolation checks

测试覆盖 harden plugin and UI isolation checks

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 plugins make loader compat contract explicit

测试覆盖 plugins：make loader compat contract explicit

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 bundled extension config api guardrails regression/contract coverage、config boundary guard regression/contract coverage、config footprint guardrails regression/contract coverage、deprecated internal config api regression/contract coverage，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 installed plugin index record builder，需要确认发布/安装链路仍一致。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 bundled plugin naming regression/contract coverage、auth choice regression/contract coverage、boundary invariants regression/contract coverage、bundled extension config api guardrails regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `media provider registry regression/contract coverage`（`src/plugins/contracts/media-provider-registry.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `media provider registry`（`src/plugins/contracts/media-provider-registry.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `loader.jiti filename regression/contract coverage`（`src/plugins/loader.jiti-filename.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `typing lease.test support`（`src/plugins/runtime/typing-lease.test-support.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 迁移/重命名变化

`tts contract suites` 路径（`src/plugins/contracts/tts-contract-suites.ts`）参与迁移/重命名，需要确认导入、文档链接和测试引用同步。

- 验证提示：确认 rename 后的导入路径、文档链接和测试引用同步。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 bundled plugin naming regression/contract coverage、auth choice regression/contract coverage、boundary invariants regression/contract coverage、bundled extension config api guardrails regression/contract coverage、config boundary guard regression/contract coverage、config footprint guardrails regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `plugin-sdk-core`
- Impact-map dir: `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime`
- Changed path count: `139`
- Status counts: `新增 34、修改 100、删除 4、重命名 1`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `139` files, `+21092` / `-5188`

### 归纳依据

- 主要落点：tests/contracts、implementation、configuration/schema、session/state handling、auth/pairing/security behavior、speech/TTS、model/thinking policy。
- 新增或暴露的关键符号包括：`NON_PACKAGED_BUNDLED_PLUGIN_DIRS`, `isBundledExtensionImportHelperCall`, `makeRepoFixture`, `writeFixture`, `MEMORY_HOST_SDK_EXPORTS`, `MEMORY_HOST_SDK_ALLOWED_CORE_BRIDGE_FILES`, `MEMORY_HOST_SDK_RUNTIME_ADAPTER_FILES`, `collectCodeFiles`, `collectCoreReferenceFiles`, `collectOpenClawRuntimeDirectImportFiles`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix(plugins): honor beta channel for auto installs；fix(plugins): include json5 in memory runtime deps；test(plugins): make loader compat contract explicit；fix(plugins): trust official diagnostics installs；fix(device-pair): require pairing scope for pair command；[plugin sdk] Project session extension slots；[plugin sdk] Harden finalize retry and run context cleanup；test: harden plugin and UI isolation checks

### Dimension evidence

- `user-visible-修复-device-pair-require-pairing-scope-for-pair-c` / 修复 device-pair require pairing scope for pair command:
  - source: `path` [A] `src/plugins/contracts/config-boundary-guard.test.ts`
  - source: `path` [A] `src/plugins/contracts/deprecated-internal-config-api.test.ts`
  - source: `path` [A] `src/plugins/contracts/host-hook-fixture.ts`
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts`
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts`
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts`
- `maintenance-修复-plugins-honor-beta-channel-for-auto-installs` / 修复 plugins honor beta channel for auto installs:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `runtime-behavior-修复-plugins-ignore-invalid-managed-runtime-shado` / 修复 plugins ignore invalid managed runtime shadows:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `runtime-behavior-修复-plugins-include-json5-in-memory-runtime-deps` / 修复 plugins include json5 in memory runtime deps:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `integration-build-release-修复-plugins-trust-official-Codex-package-commands` / 修复 plugins trust official Codex package commands:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `maintenance-修复-plugins-trust-official-diagnostics-installs` / 修复 plugins trust official diagnostics installs:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `maintenance-修改-plugin-sdk-Harden-finalize-retry-and-run-c` / 修改 [plugin sdk] Harden finalize retry and run context cleanup:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `maintenance-修改-plugin-sdk-Project-session-extension-slots` / 修改 [plugin sdk] Project session extension slots:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `user-visible-测试覆盖-harden-plugin-and-UI-isolation-checks` / 测试覆盖 harden plugin and UI isolation checks:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `public-contract-测试覆盖-plugins-make-loader-compat-contract-explic` / 测试覆盖 plugins make loader compat contract explicit:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — semantic cue
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — contract evidence
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — contract evidence
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — contract evidence
  - source: `path` [M] `src/plugins/contracts/deprecated-internal-config-api.test.ts` — contract evidence
  - source: `path` [M] `src/plugins/contracts/package-manifest.contract.test.ts` — contract evidence
  - source: `path` [M] `src/plugins/installed-plugin-index-manifest.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `src/plugins/installed-plugin-index-record-builder.ts` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `src/plugins/bundled-plugin-naming.test.ts` — test evidence
  - source: `path` [M] `src/plugins/contracts/auth-choice.contract.test.ts` — test evidence
  - source: `path` [M] `src/plugins/contracts/boundary-invariants.test.ts` — test evidence
  - source: `path` [M] `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts` — test evidence
  - source: `path` [M] `src/plugins/contracts/config-boundary-guard.test.ts` — test evidence
  - source: `path` [M] `src/plugins/contracts/config-footprint-guardrails.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `src/plugins/contracts/media-provider-registry.test.ts`
  - source: `path` [D] `src/plugins/contracts/media-provider-registry.ts`
  - source: `path` [D] `src/plugins/loader.jiti-filename.test.ts`
  - source: `path` [D] `src/plugins/runtime/typing-lease.test-support.ts`
- `migration` / 迁移/重命名变化:
  - source: `path` [R] `src/plugins/contracts/tts-contract-suites.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/plugins/contracts/config-boundary-guard.test.ts`
  - source: `path` [A] `src/plugins/contracts/deprecated-internal-config-api.test.ts`
  - source: `path` [A] `src/plugins/contracts/host-hook-fixture.ts`
  - source: `path` [A] `src/plugins/contracts/host-hooks.contract.test.ts`
  - source: `path` [A] `src/plugins/contracts/plugin-registration.senseaudio.contract.test.ts`
  - source: `path` [A] `src/plugins/contracts/plugin-registration.tts-local-cli.contract.test.ts`

### 路径证据

- 新增 `src/plugins/contracts/config-boundary-guard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugins/contracts/deprecated-internal-config-api.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugins/contracts/host-hook-fixture.ts`：调整 host hook fixture（implementation）。
- 新增 `src/plugins/contracts/host-hooks.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugins/contracts/plugin-registration.senseaudio.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugins/contracts/plugin-registration.tts-local-cli.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugins/contracts/plugin-tool-contracts.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugins/contracts/run-context-lifecycle.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugins/contracts/session-entry-projection.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugins/install-channel-specs.ts`：调整 install channel specs（implementation）。
- 新增 `src/plugins/install-paths.ts`：调整 install paths（implementation）。
- 新增 `src/plugins/install.npm-spec.e2e.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/bundled-plugin-naming.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/auth-choice.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/boundary-invariants.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/bundled-extension-config-api-guardrails.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/config-footprint-guardrails.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/core-extension-facade-boundary.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/extension-package-project-boundaries.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/extension-runtime-dependencies.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/inventory/bundled-capability-metadata.ts`：调整 bundled capability metadata（implementation）。
- 修改 `src/plugins/contracts/loader.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/memory-embedding-provider.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugins/contracts/package-manifest.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `src/plugins/contracts/media-provider-registry.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugins/contracts/media-provider-registry.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugins/loader.jiti-filename.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugins/runtime/typing-lease.test-support.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/plugins/contracts/tts-contract-suites.ts`：调整 tts contract suites（speech/TTS）。
- 其余 110 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `src/plugin-runtime-sdk/plugins-runtime` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/src/plugin-runtime-sdk/plugins-runtime/change-to-test.md` 的验证建议。
