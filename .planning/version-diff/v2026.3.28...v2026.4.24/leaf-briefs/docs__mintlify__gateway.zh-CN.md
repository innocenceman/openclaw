# docs/mintlify/gateway

## 一句话结论

gateway 所属的 Docs, generated baselines, changelog and public guidance 有 39 个路径变化（新增 5、修改 34），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/gateway`
- Changed path count: `39`
- Status counts: `新增 5、修改 34`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `39` files, `+6337` / `-3153`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 5、修改 34。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/gateway/config-agents.md`
- `docs/gateway/config-channels.md`
- `docs/gateway/config-tools.md`
- `docs/gateway/diagnostics.md`
- `docs/gateway/security/audit-checks.md`

### 修改

- `docs/gateway/authentication.md`
- `docs/gateway/background-process.md`
- `docs/gateway/bonjour.md`
- `docs/gateway/bridge-protocol.md`
- `docs/gateway/cli-backends.md`
- `docs/gateway/configuration-examples.md`
- `docs/gateway/configuration-reference.md`
- `docs/gateway/configuration.md`
- `docs/gateway/discovery.md`
- `docs/gateway/doctor.md`
- `docs/gateway/gateway-lock.md`
- `docs/gateway/health.md`
- `docs/gateway/heartbeat.md`
- `docs/gateway/index.md`
- `docs/gateway/local-models.md`
- `docs/gateway/logging.md`
- `docs/gateway/multiple-gateways.md`
- `docs/gateway/network-model.md`
- `docs/gateway/openai-http-api.md`
- `docs/gateway/openresponses-http-api.md`
- `docs/gateway/openshell.md`
- `docs/gateway/pairing.md`
- `docs/gateway/protocol.md`
- `docs/gateway/remote-gateway-readme.md`
- `docs/gateway/remote.md`
- `docs/gateway/sandbox-vs-tool-policy-vs-elevated.md`
- `docs/gateway/sandboxing.md`
- `docs/gateway/secrets-plan-contract.md`
- `docs/gateway/secrets.md`
- `docs/gateway/security/index.md`
- … 另有 4 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。

## 可能受影响的人或模块

- 文档读者和维护者

## 建议验证

- 首选验证：Existing page copy, examples, or frontmatter changed | `pnpm check:docs` | Escalate to product-specific tests only when the docs change is coupled to code behavior.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/gateway` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/gateway/change-to-test.md` 的验证建议。
