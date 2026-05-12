# docs/mintlify/.generated

## 1. 功能结论

**文档/生成基线同步**：config refresh merged baseline hash、agents use loop detection switch for post-compaction guard、agents make post-compaction guard config valid + observation trim-resilient、repair stale session route state in doctor；仅文档/测试，风险 medium。

- 变更类型：`docs`
- 兼容性：`docs-only`（仅文档/测试）
- 风险：`medium`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`docs`
- 影响范围：文档读者和维护者
- 变更形态：文档语义变化、测试/回归边界变化、生成基线同步
- 特殊形态：docs-only、generated-baseline
- 路径状态摘要（降级事实）：新增 44、修改 94、删除 39、重命名 51

## 3. 功能级详细差异

### 修复 agents make post-compaction guard config valid + observation trim-re…

文档/生成基线同步记录：修复 agents：make post-compaction guard config valid + observation trim-resilient

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 修复 agents mediate async media completions

文档/生成基线同步记录：修复 agents：mediate async media completions

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 修复 plugins default bundled discovery to allowlist

文档/生成基线同步记录：修复 plugins：default bundled discovery to allowlist

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 修复 plugins preserve bundled allowlist edges

文档/生成基线同步记录：修复 plugins：preserve bundled allowlist edges

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 修复 plugins rename bundled allowlist discovery policy

文档/生成基线同步记录：修复 plugins：rename bundled allowlist discovery policy

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 修复 release refresh plugin sdk api gate

文档/生成基线同步记录：修复 release：refresh plugin sdk api gate

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 修复 repair stale session route state in doctor

文档/生成基线同步记录：修复 repair stale session route state in doctor

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 文档同步 config refresh bundled discovery baseline

文档/生成基线同步记录：文档同步 config：refresh bundled discovery baseline

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 维护调整 config refresh merged baseline hash

文档/生成基线同步记录：维护调整 config：refresh merged baseline hash

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 迁移/重构 agents use loop detection switch for post-compaction guard

文档/生成基线同步记录：迁移/重构 agents：use loop detection switch for post-compaction guard

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`high`

### 测试与文档语义变化

本维度包含 2 个 evidence-backed 功能差异。

- 文档、说明或生成基线同步了 config baseline、plugin sdk api baseline、docs、AGENTS docs，用于更新读者指引、能力说明或事实基线。
- 测试或契约覆盖集中在 acp runtime regression/contract coverage、agent harness runtime regression/contract coverage、approval native helpers regression/contract coverage、browser maintenance regression/contract coverage，用于约束本 leaf 的回归边界。
- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 config baseline、plugin sdk api baseline、docs、copy bundled plugin metadata、AGENTS docs、access groups；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`docs-only`（仅文档/测试），风险等级 `medium`。

原因：

- 变更主要落在文档、生成基线或说明性文件，对运行时行为的直接影响较低。
- 底层路径证据包含删除/重命名，但该 leaf 被归类为 docs-only；这些状态用于确认生成基线/文档已同步，不直接表示该 leaf 自身删除运行时入口。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/.generated`
- Changed path count: `228`
- Status counts: `新增 44、修改 94、删除 39、重命名 51`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `227` files, `+11774` / `-3809`

### 归纳依据

- 主要落点：implementation、tests/contracts、configuration/schema、agent runtime、message delivery、CLI/command behavior、session/state handling、model/thinking policy。
- 新增或暴露的关键符号包括：`ACCESS_GROUP_ALLOW_FROM_PREFIX`, `parseAccessGroupAllowFromEntry`, `resolveMessageSenderGroupEntries`, `loadDispatchAcpRuntime`, `hasExplicitCommandCandidate`, `inferToolMetaFromArgs`, `classifyAgentHarnessTerminalOutcome`, `hasVisibleAssistantText`。
- 建议优先验证：优先运行 `pnpm config:docs:check`；`pnpm config:docs:gen`；`pnpm plugin-sdk:api:check`。
- 相关 commit 主题：chore(config): refresh merged baseline hash；refactor(agents): use loop detection switch for post-compaction guard；fix(agents): make post-compaction guard config valid + observation trim-resilient；fix: repair stale session route state in doctor；fix(agents): mediate async media completions；fix(release): refresh plugin sdk api gate；fix(plugins): preserve bundled allowlist edges；fix(plugins): default bundled discovery to allowlist

### Dimension evidence

- `tests-docs-修复-agents-make-post-compaction-guard-config-val` / 修复 agents make post-compaction guard config valid + observation trim-re…:
  - source: `path` [M] `docs/.generated/config-baseline.sha256` — semantic cue
  - source: `path` [M] `src/plugin-sdk/AGENTS.md` — semantic cue
  - source: `path` [M] `src/plugin-sdk/allowlist-config-edit.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-config-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-config-support.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-config.ts` — semantic cue
- `tests-docs-修复-agents-mediate-async-media-completions` / 修复 agents mediate async media completions:
  - source: `path` [M] `src/plugin-sdk/AGENTS.md` — semantic cue
  - source: `path` [M] `src/plugin-sdk/async-lock-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/test-helpers/agents/auth-profile-runtime-contract.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/test-helpers/agents/delivery-no-reply-runtime-contract.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/test-helpers/agents/openclaw-owned-tool-runtime-contract.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/test-helpers/agents/outcome-fallback-runtime-contract.ts` — semantic cue
- `tests-docs-修复-plugins-default-bundled-discovery-to-allowli` / 修复 plugins default bundled discovery to allowlist:
  - source: `path` [M] `scripts/copy-bundled-plugin-metadata.mjs` — semantic cue
  - source: `path` [M] `src/plugin-sdk/allowlist-config-edit.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-setup-tools.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/bundled-channel-config-schema.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/cron-store-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/github-copilot-token.ts` — semantic cue
- `tests-docs-修复-plugins-preserve-bundled-allowlist-edges` / 修复 plugins preserve bundled allowlist edges:
  - source: `path` [M] `scripts/copy-bundled-plugin-metadata.mjs` — semantic cue
  - source: `path` [M] `src/plugin-sdk/allowlist-config-edit.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/bundled-channel-config-schema.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/test-helpers/bundled-channel-entry.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/test-helpers/bundled-plugin-paths.ts` — semantic cue
  - source: `path` [M] `src/plugins/bundled-plugin-metadata.test.ts` — semantic cue
- `tests-docs-修复-plugins-rename-bundled-allowlist-discovery-p` / 修复 plugins rename bundled allowlist discovery policy:
  - source: `path` [M] `scripts/copy-bundled-plugin-metadata.mjs` — semantic cue
  - source: `path` [M] `src/plugin-sdk/allowlist-config-edit.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/bundled-channel-config-schema.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/mattermost-policy.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/ssrf-policy.test.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/ssrf-policy.ts` — semantic cue
- `tests-docs-修复-release-refresh-plugin-sdk-api-gate` / 修复 release refresh plugin sdk api gate:
  - source: `path` [M] `docs/.generated/plugin-sdk-api-baseline.sha256` — semantic cue
  - source: `path` [M] `scripts/copy-bundled-plugin-metadata.mjs` — semantic cue
  - source: `path` [M] `src/plugin-sdk/AGENTS.md` — semantic cue
  - source: `path` [M] `src/plugin-sdk/access-groups.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/acp-runtime-backend.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/acp-runtime.test.ts` — semantic cue
- `tests-docs-修复-repair-stale-session-route-state-in-doctor` / 修复 repair stale session route state in doctor:
  - source: `path` [M] `docs/.generated/config-baseline.sha256` — semantic cue
  - source: `path` [M] `docs/.generated/plugin-sdk-api-baseline.sha256` — semantic cue
  - source: `path` [M] `scripts/copy-bundled-plugin-metadata.mjs` — semantic cue
  - source: `path` [M] `src/plugin-sdk/AGENTS.md` — semantic cue
  - source: `path` [M] `src/plugin-sdk/access-groups.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/acp-runtime-backend.ts` — semantic cue
- `tests-docs-文档同步-config-refresh-bundled-discovery-baseline` / 文档同步 config refresh bundled discovery baseline:
  - source: `path` [M] `docs/.generated/config-baseline.sha256` — semantic cue
  - source: `path` [M] `docs/.generated/plugin-sdk-api-baseline.sha256` — semantic cue
  - source: `path` [M] `scripts/copy-bundled-plugin-metadata.mjs` — semantic cue
  - source: `path` [M] `src/plugin-sdk/allowlist-config-edit.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-config-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-config-support.ts` — semantic cue
- `tests-docs-维护调整-config-refresh-merged-baseline-hash` / 维护调整 config refresh merged baseline hash:
  - source: `path` [M] `docs/.generated/config-baseline.sha256` — semantic cue
  - source: `path` [M] `docs/.generated/plugin-sdk-api-baseline.sha256` — semantic cue
  - source: `path` [M] `src/plugin-sdk/allowlist-config-edit.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-config-runtime.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-config-support.ts` — semantic cue
  - source: `path` [M] `src/plugin-sdk/browser-config.ts` — semantic cue
- `tests-docs-迁移-重构-agents-use-loop-detection-switch-for-post` / 迁移/重构 agents use loop detection switch for post-compaction guard:
  - source: `path` [M] `docs/.generated/config-baseline.sha256` — semantic cue
  - source: `path` [M] `docs/.generated/plugin-sdk-api-baseline.sha256` — semantic cue
  - source: `path` [M] `docs/docs.json` — semantic cue
  - source: `path` [M] `scripts/copy-bundled-plugin-metadata.mjs` — semantic cue
  - source: `path` [M] `src/plugin-sdk/AGENTS.md` — semantic cue
  - source: `path` [M] `src/plugin-sdk/access-groups.ts` — semantic cue
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `docs/.generated/config-baseline.sha256` — docs evidence
  - source: `path` [M] `docs/.generated/plugin-sdk-api-baseline.sha256` — docs evidence
  - source: `path` [M] `docs/docs.json` — docs evidence
  - source: `path` [M] `src/plugin-sdk/AGENTS.md` — docs evidence
  - source: `path` [M] `src/plugin-sdk/acp-runtime.test.ts` — test evidence
  - source: `path` [M] `src/plugin-sdk/agent-harness-runtime.test.ts` — test evidence
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `src/plugin-sdk/access-groups.ts`
  - source: `path` [A] `src/plugin-sdk/acp-runtime-backend.ts`
  - source: `path` [A] `src/plugin-sdk/agent-harness-runtime.test.ts`
  - source: `path` [A] `src/plugin-sdk/agent-runtime-test-contracts.ts`
  - source: `path` [A] `src/plugin-sdk/async-lock-runtime.ts`
  - source: `path` [A] `src/plugin-sdk/browser-trash.ts`

### 路径证据

- 新增 `src/plugin-sdk/access-groups.ts`：调整 access groups（implementation）。
- 新增 `src/plugin-sdk/acp-runtime-backend.ts`：调整 acp runtime backend（implementation）。
- 新增 `src/plugin-sdk/agent-harness-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugin-sdk/agent-runtime-test-contracts.ts`：调整 agent runtime test contracts（agent runtime）。
- 新增 `src/plugin-sdk/async-lock-runtime.ts`：调整 async lock runtime（implementation）。
- 新增 `src/plugin-sdk/browser-trash.ts`：调整 browser trash（implementation）。
- 新增 `src/plugin-sdk/bundled-channel-config-schema.ts`：调整 bundled channel config schema（configuration/schema）。
- 新增 `src/plugin-sdk/command-status.runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `src/plugin-sdk/concurrency-runtime.ts`：调整 concurrency runtime（implementation）。
- 新增 `src/plugin-sdk/config-mutation.ts`：调整 config mutation（configuration/schema）。
- 新增 `src/plugin-sdk/config-types.ts`：调整 config types（configuration/schema）。
- 新增 `src/plugin-sdk/cron-store-runtime.ts`：调整 cron store runtime（session/state handling）。
- 修改 `docs/.generated/config-baseline.sha256`：调整 config baseline（configuration/schema）。
- 修改 `docs/.generated/plugin-sdk-api-baseline.sha256`：调整 plugin sdk api baseline（implementation）。
- 修改 `docs/docs.json`：调整 docs（implementation）。
- 修改 `scripts/copy-bundled-plugin-metadata.mjs`：调整 copy bundled plugin metadata（implementation）。
- 修改 `src/plugin-sdk/AGENTS.md`：调整 AGENTS docs（docs）。
- 修改 `src/plugin-sdk/acp-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugin-sdk/acp-runtime.ts`：调整 acp runtime（implementation）。
- 修改 `src/plugin-sdk/agent-harness-runtime.ts`：调整 agent harness runtime（implementation）。
- 修改 `src/plugin-sdk/agent-runtime.ts`：调整 agent runtime（agent runtime）。
- 修改 `src/plugin-sdk/allowlist-config-edit.ts`：调整 allowlist config edit（configuration/schema）。
- 修改 `src/plugin-sdk/approval-native-helpers.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `src/plugin-sdk/approval-native-helpers.ts`：调整 approval native helpers（implementation）。
- 删除 `src/plugin-sdk/browser-config-runtime.ts`：移除旧的 configuration/schema 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/browser-config-support.ts`：移除旧的 configuration/schema 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/browser-node-runtime.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/browser-security-runtime.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/browser-setup-tools.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/browser-support.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/diagnostics-otel.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/diffs.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/feishu-conversation.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/feishu-setup.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/feishu.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `src/plugin-sdk/github-copilot-token.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 重命名 `src/plugin-sdk/delivery-queue-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 重命名 `src/plugin-sdk/infra-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 重命名 `src/plugin-sdk/plugin-test-api.ts`：调整 plugin test api（implementation）。
- 重命名 `src/plugin-sdk/test-helpers/agents/auth-profile-runtime-contract.ts`：调整 auth profile runtime contract（agent runtime）。
- 重命名 `src/plugin-sdk/test-helpers/agents/delivery-no-reply-runtime-contract.ts`：调整 delivery no reply runtime contract（agent runtime）。
- 重命名 `src/plugin-sdk/test-helpers/agents/openclaw-owned-tool-runtime-contract.ts`：调整 openclaw owned tool runtime contract（agent runtime）。
- 重命名 `src/plugin-sdk/test-helpers/agents/outcome-fallback-runtime-contract.ts`：调整 outcome fallback runtime contract（agent runtime）。
- 重命名 `src/plugin-sdk/test-helpers/agents/prompt-overlay-runtime-contract.ts`：调整 prompt overlay runtime contract（agent runtime）。
- 重命名 `src/plugin-sdk/test-helpers/agents/schema-normalization-runtime-contract.ts`：调整 schema normalization runtime contract（agent runtime）。
- 重命名 `src/plugin-sdk/test-helpers/agents/transcript-repair-runtime-contract.ts`：调整 transcript repair runtime contract（agent runtime）。
- 重命名 `src/plugin-sdk/test-helpers/bundled-channel-entry.ts`：调整 bundled channel entry（implementation）。
- 重命名 `src/plugin-sdk/test-helpers/bundled-plugin-paths.ts`：调整 bundled plugin paths（implementation）。
- 其余 180 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `docs/mintlify/.generated` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/.generated/change-to-test.md` 的验证建议。
