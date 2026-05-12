# src/agent-runtime/sandbox/workspace-browser-ssh

## 一句话结论

workspace browser ssh 所属的 Agent loop, ACP, spawning, command control 有 16 个路径变化（新增 3、修改 13），兼容性判断为行为变化。

## Canonical facts

- Feature group: `agent-acp-runtime`
- Impact-map dir: `.planning/impact-map/src/agent-runtime/sandbox/workspace-browser-ssh`
- Changed path count: `16`
- Status counts: `新增 3、修改 13`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `16` files, `+1117` / `-144`

## 功能变化摘要

这个 leaf 属于 `Agent loop, ACP, spawning, command control`。本次版本差异显示它的主要变化是：新增 3、修改 13。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/agents/sandbox/docker-backend.test.ts`
- `src/agents/sandbox/remote-fs-bridge.test.ts`
- `src/agents/sandbox/ssh.spawn-env.test.ts`

### 修改

- `src/agents/sandbox/browser-bridges.ts`
- `src/agents/sandbox/browser.create.test.ts`
- `src/agents/sandbox/browser.ts`
- `src/agents/sandbox/docker-backend.ts`
- `src/agents/sandbox/docker.config-hash-recreate.test.ts`
- `src/agents/sandbox/docker.ts`
- `src/agents/sandbox/remote-fs-bridge.ts`
- `src/agents/sandbox/ssh-backend.test.ts`
- `src/agents/sandbox/ssh-backend.ts`
- `src/agents/sandbox/ssh.test.ts`
- `src/agents/sandbox/ssh.ts`
- `src/agents/sandbox/workspace-mounts.test.ts`
- `src/agents/sandbox/workspace-mounts.ts`

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 可能受影响的人或模块

- CLI/agent 使用者
- agent runtime 集成方

## 建议验证

- 首选验证：2. Escalate to `pnpm build` when sandbox runtime boundaries or browser bridges affect packaged output.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/agent-runtime/sandbox/workspace-browser-ssh` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/agent-runtime/sandbox/workspace-browser-ssh/change-to-test.md` 的验证建议。
