# src/agent-runtime/providers-auth

## 一句话结论

providers auth 所属的 Agent loop, ACP, spawning, command control 有 144 个路径变化（新增 48、修改 84、删除 12），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/providers-auth`
- Changed path count: `144`
- Status counts: `新增 48、修改 84、删除 12`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `144` files, `+15097` / `-5310`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 48、修改 84、删除 12。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/auth-profiles/effective-oauth.test.ts`
- `src/agents/auth-profiles/effective-oauth.ts`
- `src/agents/auth-profiles/external-auth.ts`
- `src/agents/auth-profiles/external-oauth.test.ts`
- `src/agents/auth-profiles/oauth-common-mocks.test-support.ts`
- `src/agents/auth-profiles/oauth-external-auth-passthrough.test-support.ts`
- `src/agents/auth-profiles/oauth-file-lock-passthrough.test-support.ts`
- `src/agents/auth-profiles/oauth-identity.test.ts`
- `src/agents/auth-profiles/oauth-identity.ts`
- `src/agents/auth-profiles/oauth-lock-path.test.ts`
- `src/agents/auth-profiles/oauth-lock-timeout-classification.test.ts`
- `src/agents/auth-profiles/oauth-manager.test.ts`
- `src/agents/auth-profiles/oauth-manager.ts`
- `src/agents/auth-profiles/oauth-refresh-error.test.ts`
- `src/agents/auth-profiles/oauth-refresh-failure.ts`
- `src/agents/auth-profiles/oauth-refresh-lock-errors.ts`
- `src/agents/auth-profiles/oauth-refresh-queue.test.ts`
- `src/agents/auth-profiles/oauth-refresh-timeout.test.ts`
- `src/agents/auth-profiles/oauth-shared.ts`
- `src/agents/auth-profiles/oauth-test-utils.ts`
- `src/agents/auth-profiles/oauth.adopt-identity.test.ts`
- `src/agents/auth-profiles/oauth.concurrent-agents.test.ts`
- `src/agents/auth-profiles/oauth.mirror-refresh.test.ts`
- `src/agents/auth-profiles/path-constants.ts`
- `src/agents/auth-profiles/path-resolve.ts`
- `src/agents/auth-profiles/paths-direct-import.test.ts`
- `src/agents/auth-profiles/persisted.ts`
- `src/agents/auth-profiles/policy.ts`
- `src/agents/auth-profiles/profile-list.ts`
- `src/agents/auth-profiles/runtime-snapshots.ts`
- … 另有 18 个路径，详见 `leaf-impact.json`。

### 修改

- `src/agents/auth-profiles.chutes.test.ts`
- `src/agents/auth-profiles.doctor.test.ts`
- `src/agents/auth-profiles.ensureauthprofilestore.test.ts`
- `src/agents/auth-profiles.external-cli-sync.test.ts`
- `src/agents/auth-profiles.getsoonestcooldownexpiry.test.ts`
- `src/agents/auth-profiles.markauthprofilefailure.test.ts`
- `src/agents/auth-profiles.readonly-sync.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.does-not-prioritize-lastgood-round-robin-ordering.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.fixtures.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.normalizes-z-ai-aliases-auth-order.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.orders-by-lastused-no-explicit-order-exists.test.ts`
- `src/agents/auth-profiles.resolve-auth-profile-order.uses-stored-profiles-no-config-exists.test.ts`
- `src/agents/auth-profiles.store-cache.test.ts`
- `src/agents/auth-profiles.store.save.test.ts`
- `src/agents/auth-profiles.ts`
- `src/agents/auth-profiles/constants.ts`
- `src/agents/auth-profiles/credential-state.test.ts`
- `src/agents/auth-profiles/credential-state.ts`
- `src/agents/auth-profiles/display.ts`
- `src/agents/auth-profiles/doctor.ts`
- `src/agents/auth-profiles/external-cli-sync.ts`
- `src/agents/auth-profiles/identity.ts`
- `src/agents/auth-profiles/oauth.fallback-to-main-agent.test.ts`
- `src/agents/auth-profiles/oauth.openai-codex-refresh-fallback.test.ts`
- `src/agents/auth-profiles/oauth.test.ts`
- `src/agents/auth-profiles/oauth.ts`
- `src/agents/auth-profiles/order.test.ts`
- `src/agents/auth-profiles/order.ts`
- `src/agents/auth-profiles/paths.ts`
- `src/agents/auth-profiles/profiles.ts`
- … 另有 54 个路径，详见 `leaf-impact.json`。

### 删除

- `src/agents/auth-profiles.runtime-snapshot-save.test.ts`
- `src/agents/models-config.providers.anthropic-vertex.test.ts`
- `src/agents/models-config.providers.chutes.test.ts`
- `src/agents/models-config.providers.kilocode.test.ts`
- `src/agents/models-config.providers.kimi-coding.test.ts`
- `src/agents/models-config.providers.matrix.test.ts`
- `src/agents/models-config.providers.modelstudio.test.ts`
- `src/agents/models-config.providers.ollama-autodiscovery.test.ts`
- `src/agents/models-config.providers.ollama.test.ts`
- `src/agents/models-config.providers.openai-codex.test.ts`
- `src/agents/models-config.providers.qianfan.test.ts`
- `src/agents/models-config.providers.volcengine-byteplus.test.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：`providers-auth/` | pnpm test -- src/agents/auth-health.test.ts src/agents/auth-profiles/oauth.test.ts src/agents/auth-profiles/order.test.ts src/agents/model-auth.test.ts | Escalate to live/provider-specific auth tests only when auth surface behavior or env-driven resolution broadens. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/providers-auth` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/providers-auth/change-to-test.md` 的验证建议。
