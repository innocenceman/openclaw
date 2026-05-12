# docs/generated-baselines/bundled-plugin-metadata

## 1. 功能结论

**文档/生成基线同步**：Bundled Plugin Metadata 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约、旧 runtime register 文件 删除 `register.runtime.ts` 这种 runtime helper re-export 面、plugins honor beta channel for auto installs、telegram reuse preview for long text finals；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`generated-baseline`
- 影响范围：Provider/plugin 调用方、插件作者、文档读者和维护者
- 变更形态：文档语义变化、测试/回归边界变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 447、修改 1278、删除 31、重命名 7

## 3. 功能级详细差异

### 优化 plugins reuse compatible metadata snapshots

文档/生成基线同步记录：优化 plugins：reuse compatible metadata snapshots

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 修复 plugins honor beta channel for auto installs

文档/生成基线同步记录：修复 plugins：honor beta channel for auto installs

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 修复 plugins repair missing openclaw peer links on update

文档/生成基线同步记录：修复 plugins：repair missing openclaw peer links on update

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 修复 recover missing Codex bound threads

文档/生成基线同步记录：修复 recover missing Codex bound threads

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 修复 repair stale session route state in doctor

文档/生成基线同步记录：修复 repair stale session route state in doctor

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 修复 start configured generation providers

文档/生成基线同步记录：修复 start configured generation providers

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 修复 telegram reuse preview for long text finals

文档/生成基线同步记录：修复 telegram：reuse preview for long text finals

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 修改 Surface Codex usage-limit reset details in chat replies

文档/生成基线同步记录：修改 Surface Codex usage-limit reset details in chat replies

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 文档同步 doctor clarify configured plugin repair

文档/生成基线同步记录：文档同步 doctor：clarify configured plugin repair

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 新增 Bundled Plugin Metadata 视频生成测试 覆盖 video-generation provider 的默认模型、请求…

文档/生成基线同步记录：新增 Bundled Plugin Metadata 视频生成测试：覆盖 video-generation provider 的默认模型、请求/响应或注册契约。

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 测试覆盖 plugins align metadata snapshot policy fixtures

文档/生成基线同步记录：测试覆盖 plugins：align metadata snapshot policy fixtures

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…

文档/生成基线同步记录：移除旧 runtime register 文件：删除 `register.runtime.ts` 这种 runtime helper re-export 面，避免依赖旧的深层运行时入口。

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`high`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 AGENTS docs、SKILL docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 config regression/contract coverage、active memory plugin entrypoint、plugin registration regression/contract coverage、video generation provider regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 AGENTS docs、config regression/contract coverage、active memory plugin entrypoint、plugin manifest/control-plane metadata、package metadata/version、plugin registration regression/contract coverage；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm check:bundled-plugin-metadata`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 底层路径证据包含删除/重命名，但该 leaf 被归类为 docs-only；这些状态用于确认生成基线/文档已同步，不直接表示该 leaf 自身删除运行时入口。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm check:bundled-plugin-metadata`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/generated-baselines/bundled-plugin-metadata`
- Changed path count: `1763`
- Status counts: `新增 447、修改 1278、删除 31、重命名 7`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `1760` files, `+142460` / `-25623`

### 归纳依据

- 主要落点：implementation、tests/contracts、configuration/schema、manifest/package metadata、CLI/command behavior、session/state handling、gateway runtime、auth/pairing/security behavior。
- 建议优先验证：优先运行 `pnpm check:bundled-plugin-metadata`。
- 相关 commit 主题：fix(plugins): honor beta channel for auto installs；fix(telegram): reuse preview for long text finals；fix: start configured generation providers；fix(plugins): repair missing openclaw peer links on update；fix: recover missing Codex bound threads；docs(doctor): clarify configured plugin repair；test(plugins): align metadata snapshot policy fixtures；fix: repair stale session route state in doctor

### Dimension evidence

- `tests-docs-优化-plugins-reuse-compatible-metadata-snapshots` / 优化 plugins reuse compatible metadata snapshots:
  - source: `path` [M] `extensions/browser/cli-metadata.ts` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/typescript/v2/AppMetadata.ts` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/typescript/v2/ConfigLayerMetadata.ts` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/typescript/v2/FsGetMetadataParams.ts` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/typescript/v2/FsGetMetadataResponse.ts` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/typescript/v2/HookMetadata.ts` — semantic cue
- `tests-docs-修复-plugins-honor-beta-channel-for-auto-installs` / 修复 plugins honor beta channel for auto installs:
  - source: `path` [M] `extensions/browser/skills/browser-automation/SKILL.md` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/control-auth.auto-token.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/form-fields.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/server-context.ensure-browser-available.waits-for-cdp-ready.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/server.agent-contract-form-layout-act-commands.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/cli/command-format.ts` — semantic cue
- `tests-docs-修复-plugins-repair-missing-openclaw-peer-links-o` / 修复 plugins repair missing openclaw peer links on update:
  - source: `path` [M] `extensions/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/active-memory/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/index.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/alibaba/openclaw.plugin.json` — semantic cue
- `tests-docs-修复-recover-missing-Codex-bound-threads` / 修复 recover missing Codex bound threads:
  - source: `path` [M] `extensions/codex/doctor-contract-api.ts` — semantic cue
  - source: `path` [M] `extensions/codex/harness.ts` — semantic cue
  - source: `path` [M] `extensions/codex/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/codex/index.ts` — semantic cue
  - source: `path` [M] `extensions/codex/media-understanding-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/codex/media-understanding-provider.ts` — semantic cue
- `tests-docs-修复-repair-stale-session-route-state-in-doctor` / 修复 repair stale session route state in doctor:
  - source: `path` [M] `extensions/active-memory/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/index.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/alibaba/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/alibaba/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock-mantle/index.test.ts` — semantic cue
- `tests-docs-修复-start-configured-generation-providers` / 修复 start configured generation providers:
  - source: `path` [M] `extensions/alibaba/video-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/gateway/startup-auth.ts` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/json/v2/ThreadStartResponse.json` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/json/v2/TurnStartResponse.json` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/typescript/FuzzyFileSearchSessionStartParams.ts` — semantic cue
  - source: `path` [M] `extensions/codex/src/app-server/protocol-generated/typescript/FuzzyFileSearchSessionStartResponse.ts` — semantic cue
- `tests-docs-修复-telegram-reuse-preview-for-long-text-finals` / 修复 telegram reuse preview for long text finals:
  - source: `path` [M] `extensions/browser/src/browser/form-fields.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/server-context.availability.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/server-context.constants.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/server-context.ensure-browser-available.waits-for-cdp-ready.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/server-context.existing-session.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/server-context.hot-reload-profiles.test.ts` — semantic cue
- `tests-docs-修改-Surface-Codex-usage-limit-reset-details-in-c` / 修改 Surface Codex usage-limit reset details in chat replies:
  - source: `path` [M] `extensions/active-memory/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/index.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/alibaba/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/alibaba/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock-mantle/index.test.ts` — semantic cue
- `tests-docs-文档同步-doctor-clarify-configured-plugin-repair` / 文档同步 doctor clarify configured plugin repair:
  - source: `path` [M] `extensions/active-memory/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/alibaba/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/alibaba/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/amazon-bedrock-mantle/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/anthropic-vertex/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/arcee/openclaw.plugin.json` — semantic cue
- `tests-docs-新增-Bundled-Plugin-Metadata-视频生成测试-覆盖-video-gene` / 新增 Bundled Plugin Metadata 视频生成测试 覆盖 video-generation provider 的默认模型、请求…:
  - source: `path` [M] `extensions/AGENTS.md` — semantic cue
  - source: `path` [M] `extensions/active-memory/config.test.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/index.ts` — semantic cue
  - source: `path` [M] `extensions/active-memory/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/alibaba/openclaw.plugin.json` — semantic cue
- `tests-docs-测试覆盖-plugins-align-metadata-snapshot-policy-fix` / 测试覆盖 plugins align metadata snapshot policy fixtures:
  - source: `path` [M] `extensions/browser/cli-metadata.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/pw-role-snapshot.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/pw-tools-core.snapshot.navigate-guard.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/pw-tools-core.snapshot.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/pw-tools-core.snapshot.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/routes/agent.snapshot.plan.ts` — semantic cue
- `tests-docs-移除旧-runtime-register-文件-删除-register-runtime-ts` / 移除旧 runtime register 文件 删除 register.runtime.ts 这种 runtime helper re-exp…:
  - source: `path` [M] `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/browser/register.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/browser/runtime-api.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser-tool.runtime.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/cdp.helpers.internal.test.ts` — semantic cue
  - source: `path` [M] `extensions/browser/src/browser/cdp.helpers.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/AGENTS.md` — docs evidence
  - source: `path` [M] `extensions/browser/skills/browser-automation/SKILL.md` — docs evidence
  - source: `path` [M] `extensions/qqbot/skills/qqbot-media/SKILL.md` — docs evidence
  - source: `path` [M] `extensions/qqbot/skills/qqbot-remind/SKILL.md` — docs evidence
  - source: `path` [M] `src/plugins/AGENTS.md` — docs evidence
  - source: `path` [M] `extensions/active-memory/config.test.ts` — test evidence
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `extensions/azure-speech/azure-speech.live.test.ts`
  - source: `path` [A] `extensions/azure-speech/index.ts`
  - source: `path` [A] `extensions/azure-speech/openclaw.plugin.json`
  - source: `path` [A] `extensions/azure-speech/package.json`
  - source: `path` [A] `extensions/azure-speech/speech-provider.test.ts`
  - source: `path` [A] `extensions/azure-speech/speech-provider.ts`

### 路径证据

- 新增 `extensions/azure-speech/azure-speech.live.test.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `extensions/azure-speech/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 新增 `extensions/azure-speech/openclaw.plugin.json`：更新插件 manifest/control-plane metadata。
- 新增 `extensions/azure-speech/package.json`：更新插件包元数据/版本或依赖声明。
- 新增 `extensions/azure-speech/speech-provider.test.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `extensions/azure-speech/speech-provider.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `extensions/azure-speech/tsconfig.json`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `extensions/azure-speech/tts.test.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `extensions/azure-speech/tts.ts`：调整 TTS provider 实现，可能影响语音配置解析、请求体和响应格式。
- 新增 `extensions/bonjour/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/bonjour/manifest.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/browser/src/browser-control-state.ts`：调整 browser control state（session/state handling）。
- 修改 `extensions/AGENTS.md`：调整 AGENTS docs（docs）。
- 修改 `extensions/active-memory/config.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/active-memory/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/active-memory/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/active-memory/openclaw.plugin.json`：更新插件 manifest/control-plane metadata。
- 修改 `extensions/alibaba/openclaw.plugin.json`：更新插件 manifest/control-plane metadata。
- 修改 `extensions/alibaba/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/alibaba/plugin-registration.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/alibaba/video-generation-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/amazon-bedrock-mantle/discovery.ts`：调整 discovery（implementation）。
- 修改 `extensions/amazon-bedrock-mantle/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts`：调整 mantle anthropic（implementation）。
- 删除 `extensions/browser/src/browser/client-actions-state.ts`：移除旧的 session/state handling 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/browser/src/infra/secure-random.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/browser/src/process/exec.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/codex/src/app-server/protocol-generated/typescript/GhostCommit.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/qqbot/src/bridge/tools/result.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/qqbot/src/engine/config/allow-from.ts`：移除旧的 configuration/schema 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/qqbot/src/engine/group/deliver-debounce.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/qqbot/src/engine/utils/file-utils-runtime.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/qqbot/src/engine/utils/text-chunk.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/shared/channel-status-summary.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/shared/config-schema-helpers.ts`：移除旧的 configuration/schema 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/shared/deferred.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `extensions/browser/src/browser/test-fetch.ts`：调整 test fetch（implementation）。
- 重命名 `extensions/browser/src/browser/test-support/fetch.ts`：调整 fetch（implementation）。
- 重命名 `extensions/browser/src/test-support/browser-security.mock.ts`：调整 browser security.mock（implementation）。
- 重命名 `extensions/browser/test-support/browser-security-runtime.mock.ts`：调整 browser security runtime.mock（implementation）。
- 重命名 `extensions/codex/src/app-server/protocol-generated/typescript/v2/ActivePermissionProfileModification.ts`：调整 Active Permission Profile Modification（implementation）。
- 重命名 `extensions/codex/src/app-server/protocol-generated/typescript/v2/ReadOnlyAccess.ts`：调整 Read Only Access（implementation）。
- 重命名 `src/plugins/interactive-contract.test-helpers.ts`：调整 interactive contract.test helpers regression/contract coverage（implementation）。
- 其余 1720 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/generated-baselines/bundled-plugin-metadata` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/generated-baselines/bundled-plugin-metadata/change-to-test.md` 的验证建议。
