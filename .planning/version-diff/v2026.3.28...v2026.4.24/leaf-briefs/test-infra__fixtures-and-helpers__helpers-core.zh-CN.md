# test-infra/fixtures-and-helpers/helpers-core

## 一句话结论

helpers core 所属的 Build, CI, scripts, tests and release automation 有 113 个路径变化（新增 65、修改 6、删除 6、重命名 36），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-core`
- Changed path count: `113`
- Status counts: `新增 65、修改 6、删除 6、重命名 36`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `113` files, `+12307` / `-1318`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 65、修改 6、删除 6、重命名 36。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `test/helpers/AGENTS.md`
- `test/helpers/CLAUDE.md`
- `test/helpers/agents/auth-profile-runtime-contract.ts`
- `test/helpers/agents/delivery-no-reply-runtime-contract.ts`
- `test/helpers/agents/openclaw-owned-tool-runtime-contract.ts`
- `test/helpers/agents/outcome-fallback-runtime-contract.ts`
- `test/helpers/agents/prompt-overlay-runtime-contract.ts`
- `test/helpers/agents/schema-normalization-runtime-contract.ts`
- `test/helpers/agents/transcript-repair-runtime-contract.ts`
- `test/helpers/agents/transport-params-runtime-contract.ts`
- `test/helpers/bundled-channel-entry.ts`
- `test/helpers/bundled-plugin-paths.ts`
- `test/helpers/bundled-runtime-sidecars.ts`
- `test/helpers/channels/AGENTS.md`
- `test/helpers/channels/CLAUDE.md`
- `test/helpers/channels/bundled-channel-plugin-loader.ts`
- `test/helpers/channels/channel-plugin-catalog-contract-suites.ts`
- `test/helpers/channels/config-write-contract-suites.ts`
- `test/helpers/channels/directory-ids.ts`
- `test/helpers/channels/group-policy-contract-suites.ts`
- `test/helpers/channels/imessage-test-plugin.ts`
- `test/helpers/channels/interactive-contract.ts`
- `test/helpers/channels/lazy-object-surface.ts`
- `test/helpers/channels/registry-backed-contract-shards.ts`
- `test/helpers/channels/registry-contract-suites.ts`
- `test/helpers/channels/registry-plugin.ts`
- `test/helpers/channels/registry-session-binding.ts`
- `test/helpers/channels/runtime-artifacts.ts`
- `test/helpers/channels/session-binding-registry-backed-contract.ts`
- `test/helpers/channels/surface-contract-registry.ts`
- … 另有 35 个路径，详见 `leaf-impact.json`。

### 修改

- `test/helpers/browser-bundled-plugin-fixture.ts`
- `test/helpers/channels/channel-catalog-contract.ts`
- `test/helpers/channels/group-policy-contract.ts`
- `test/helpers/gateway-e2e-harness.ts`
- `test/helpers/temp-home.ts`
- `test/helpers/temp-repo.ts`

### 删除

- `test/helpers/channels/dm-policy-contract.ts`
- `test/helpers/channels/inbound-contract.ts`
- `test/helpers/channels/outbound-payload-contract.ts`
- `test/helpers/channels/plugins-core-extension-contract.ts`
- `test/helpers/channels/registry-backed-contract.ts`
- `test/helpers/channels/session-binding-contract.ts`

### 重命名

- `test/helpers/agents/pi-ai-stream-simple-mock.ts`
- `test/helpers/agents/prompt-composition-scenarios.ts`
- `test/helpers/auto-reply/trigger-handling-test-harness.ts`
- `test/helpers/channels/manifest.ts`
- `test/helpers/config/bundled-channel-config-runtime.ts`
- `test/helpers/config/redact-snapshot-test-hints.ts`
- `test/helpers/memory-tool-manager-mock.ts`
- `test/helpers/plugins/fetch-mock.ts`
- `test/helpers/plugins/frozen-time.ts`
- `test/helpers/plugins/jiti-runtime-api.ts`
- `test/helpers/plugins/media-understanding.ts`
- `test/helpers/plugins/mock-http-response.ts`
- `test/helpers/plugins/onboard-config.ts`
- `test/helpers/plugins/package-manifest-contract.ts`
- `test/helpers/plugins/plugin-registration-contract.ts`
- `test/helpers/plugins/plugin-registration.ts`
- `test/helpers/plugins/plugin-runtime-mock.ts`
- `test/helpers/plugins/plugin-sdk-stub.cjs`
- `test/helpers/plugins/provider-auth-contract.ts`
- `test/helpers/plugins/provider-contract-suites.ts`
- `test/helpers/plugins/provider-discovery-contract.ts`
- `test/helpers/plugins/provider-registration.ts`
- `test/helpers/plugins/provider-runtime-contract.ts`
- `test/helpers/plugins/provider-usage-fetch.ts`
- `test/helpers/plugins/provider-wizard-contract-suites.ts`
- `test/helpers/plugins/public-artifacts.ts`
- `test/helpers/plugins/runtime-env.ts`
- `test/helpers/plugins/send-config.ts`
- `test/helpers/plugins/setup-wizard.ts`
- `test/helpers/plugins/start-account-context.ts`
- … 另有 6 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- CI/测试维护者
- 发布/构建维护者

## 建议验证

- 首选验证：Edit files in this leaf | Run the nearest scoped `pnpm test -- <path-or-filter>` that exercises the changed file. | `OPENCLAW_TEST_PROFILE=low OPENCLAW_TEST_SERIAL_GATEWAY=1 pnpm test` on constrained hosts, or full `pnpm test` when feasible.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `test-infra/fixtures-and-helpers/helpers-core` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/test-infra/fixtures-and-helpers/helpers-core/change-to-test.md` 的验证建议。
