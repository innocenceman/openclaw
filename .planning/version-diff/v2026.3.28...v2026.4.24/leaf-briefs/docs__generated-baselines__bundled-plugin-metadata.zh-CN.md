# docs/generated-baselines/bundled-plugin-metadata

## 一句话结论

bundled plugin metadata 所属的 Docs, generated baselines, changelog and public guidance 有 1887 个路径变化（新增 1520、修改 317、删除 36、重命名 14），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/generated-baselines/bundled-plugin-metadata`
- Changed path count: `1887`
- Status counts: `新增 1520、修改 317、删除 36、重命名 14`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `1887` files, `+233963` / `-13520`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 1520、修改 317、删除 36、重命名 14。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `extensions/active-memory/config.test.ts`
- `extensions/active-memory/index.test.ts`
- `extensions/active-memory/index.ts`
- `extensions/active-memory/openclaw.plugin.json`
- `extensions/alibaba/index.ts`
- `extensions/alibaba/openclaw.plugin.json`
- `extensions/alibaba/package.json`
- `extensions/alibaba/plugin-registration.contract.test.ts`
- `extensions/alibaba/tsconfig.json`
- `extensions/alibaba/video-generation-provider.test.ts`
- `extensions/alibaba/video-generation-provider.ts`
- `extensions/amazon-bedrock-mantle/api.ts`
- `extensions/amazon-bedrock-mantle/bedrock-token-generator.d.ts`
- `extensions/amazon-bedrock-mantle/discovery.test.ts`
- `extensions/amazon-bedrock-mantle/discovery.ts`
- `extensions/amazon-bedrock-mantle/index.test.ts`
- `extensions/amazon-bedrock-mantle/index.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.test.ts`
- `extensions/amazon-bedrock-mantle/mantle-anthropic.runtime.ts`
- `extensions/amazon-bedrock-mantle/openclaw.plugin.json`
- `extensions/amazon-bedrock-mantle/package.json`
- `extensions/amazon-bedrock-mantle/register.sync.runtime.ts`
- `extensions/amazon-bedrock-mantle/tsconfig.json`
- `extensions/anthropic-vertex/api.test.ts`
- `extensions/anthropic-vertex/index.test.ts`
- `extensions/anthropic-vertex/index.ts`
- `extensions/anthropic-vertex/openclaw.plugin.json`
- `extensions/anthropic-vertex/package.json`
- `extensions/anthropic-vertex/provider-discovery.import-guard.test.ts`
- `extensions/anthropic-vertex/provider-discovery.ts`
- … 另有 1490 个路径，详见 `leaf-impact.json`。

### 修改

- `extensions/AGENTS.md`
- `extensions/anthropic-vertex/api.ts`
- `extensions/anthropic-vertex/provider-catalog.ts`
- `extensions/anthropic-vertex/region.ts`
- `extensions/browser/index.test.ts`
- `extensions/browser/index.ts`
- `extensions/browser/openclaw.plugin.json`
- `extensions/browser/package.json`
- `extensions/browser/src/browser-runtime.ts`
- `extensions/browser/src/browser-tool.actions.ts`
- `extensions/browser/src/browser-tool.schema.ts`
- `extensions/browser/src/browser-tool.test.ts`
- `extensions/browser/src/browser-tool.ts`
- `extensions/browser/src/browser/bridge-auth-registry.ts`
- `extensions/browser/src/browser/bridge-server.auth.test.ts`
- `extensions/browser/src/browser/bridge-server.ts`
- `extensions/browser/src/browser/browser-utils.test.ts`
- `extensions/browser/src/browser/cdp-proxy-bypass.test.ts`
- `extensions/browser/src/browser/cdp-timeouts.ts`
- `extensions/browser/src/browser/cdp.helpers.ts`
- `extensions/browser/src/browser/cdp.test.ts`
- `extensions/browser/src/browser/cdp.ts`
- `extensions/browser/src/browser/chrome-mcp.snapshot.ts`
- `extensions/browser/src/browser/chrome-mcp.test.ts`
- `extensions/browser/src/browser/chrome-mcp.ts`
- `extensions/browser/src/browser/chrome.default-browser.test.ts`
- `extensions/browser/src/browser/chrome.executables.ts`
- `extensions/browser/src/browser/chrome.profile-decoration.ts`
- `extensions/browser/src/browser/chrome.test.ts`
- `extensions/browser/src/browser/chrome.ts`
- … 另有 287 个路径，详见 `leaf-impact.json`。

### 删除

- `extensions/browser/src/browser/cdp-timeouts.test.ts`
- `extensions/browser/src/browser/chrome.launch-args.test.ts`
- `extensions/browser/src/browser/plugin-enabled.test.ts`
- `extensions/browser/src/browser/plugin-enabled.ts`
- `extensions/browser/src/browser/plugin-service.ts`
- `extensions/browser/src/browser/server-context.remote-profile-tab-ops.suite.ts`
- `extensions/browser/src/browser/server-context.remote-profile-tab-ops.test.ts`
- `extensions/browser/src/browser/server-context.remote-tab-ops.test.ts`
- `extensions/browser/src/browser/server-context.tab-selection-state.suite.ts`
- `extensions/browser/src/browser/server.agent-contract-snapshot-endpoints.test.ts`
- `extensions/browser/src/browser/server.post-tabs-open-profile-unknown-returns-404.test.ts`
- `extensions/browser/src/browser/server.ts`
- `extensions/browser/src/browser/url-pattern.test.ts`
- `extensions/browser/src/test-utils/fetch-mock.ts`
- `extensions/litellm/provider.contract.test.ts`
- `extensions/microsoft-foundry/provider.contract.test.ts`
- `extensions/shared/resolve-target-test-helpers.ts`
- `src/generated/bundled-channel-entries.generated.ts`
- `src/generated/bundled-plugin-entries.generated.ts`
- `src/plugins/bundled-capability-metadata.ts`
- `src/plugins/bundled-plugin-entries.ts`
- `src/plugins/bundled-provider-auth-env-vars.generated.ts`
- `src/plugins/bundled-provider-auth-env-vars.test.ts`
- `src/plugins/bundled-provider-auth-env-vars.ts`
- `src/plugins/bundled-web-search-ids.ts`
- `src/plugins/bundled-web-search-provider-ids.ts`
- `src/plugins/bundled-web-search-registry.ts`
- `src/plugins/bundled-web-search.test.ts`
- `src/plugins/bundled-web-search.ts`
- `src/plugins/interactive-dispatch-adapters.ts`
- … 另有 6 个路径，详见 `leaf-impact.json`。

### 重命名

- `extensions/bonjour/src/advertiser.test.ts`
- `extensions/bonjour/src/advertiser.ts`
- `extensions/bonjour/src/ciao.test.ts`
- `extensions/bonjour/src/ciao.ts`
- `extensions/bonjour/src/errors.test.ts`
- `extensions/bonjour/src/errors.ts`
- `extensions/browser/src/doctor-browser.test.ts`
- `extensions/lmstudio/plugin-registration.contract.test.ts`
- `extensions/qwen/model-definitions.ts`
- `extensions/voyage/embedding-batch.ts`
- `extensions/voyage/embedding-provider.ts`
- `src/plugins/provider-auth-input.test.ts`
- `src/plugins/public-artifacts.ts`
- `src/plugins/signal-cli-install.ts`

## 兼容性判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 包含重命名路径，需要确认导入路径、文档链接和测试引用已经同步迁移。

## 可能受影响的人或模块

- Provider/plugin 调用方
- 插件作者
- 文档读者和维护者

## 建议验证

- 首选验证：Bundled plugin metadata generator changed | `pnpm check:bundled-plugin-metadata` | Escalate to build/runtime/plugin catalog checks when the downstream runtime artifact changes meaningfully.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/generated-baselines/bundled-plugin-metadata` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/generated-baselines/bundled-plugin-metadata/change-to-test.md` 的验证建议。
