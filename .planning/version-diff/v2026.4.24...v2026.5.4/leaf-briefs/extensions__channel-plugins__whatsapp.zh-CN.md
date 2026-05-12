# extensions/channel-plugins/whatsapp

## 1. 功能结论

**修改**：sandbox support Windows drive-letter bind sources、whatsapp normalize onboarding allowlist numbers、infra skip POSIX tmp path on Windows、better explicit message on whatsapp；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`channel`
- 影响范围：Provider/plugin 调用方、插件作者、消息渠道使用者、渠道插件维护者
- 变更形态：公共契约或 control-plane metadata 变化、删除或废弃旧入口、新增能力或入口、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：large、contains-deletions
- 路径状态摘要（降级事实）：新增 8、修改 123、删除 7

## 3. 功能级详细差异

### 修复 infra skip POSIX tmp path on Windows

修复 infra：skip POSIX tmp path on Windows

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 sandbox support Windows drive-letter bind sources

修复 sandbox：support Windows drive-letter bind sources

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 whatsapp capture login outcome output

修复 whatsapp：capture login outcome output

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 whatsapp honor group visible reply mode

修复 whatsapp：honor group visible reply mode

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 whatsapp normalize onboarding allowlist numbers

修复 whatsapp：normalize onboarding allowlist numbers

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 修复 whatsapp route login qr through runtime

修复 whatsapp：route login qr through runtime

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 fix whatsapp reply delivery mocks

测试覆盖 fix whatsapp reply delivery mocks

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 whatsapp accept native Windows auth paths

测试覆盖 whatsapp：accept native Windows auth paths

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 测试覆盖 whatsapp sync auto-reply runtime mock

测试覆盖 whatsapp：sync auto-reply runtime mock

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 维护调整 better explicit message on whatsapp

维护调整 better explicit message on whatsapp

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 whatsapp public API barrel、config api、plugin manifest/control-plane metadata、runtime api，需要按契约边界审查。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 whatsapp plugin entrypoint、accounts.whatsapp auth regression/contract coverage、action runtime regression/contract coverage、active listener regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

### 删除/废弃变化

删除或废弃 `heartbeat runner`（`extensions/whatsapp/src/auto-reply/heartbeat-runner.runtime.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `heartbeat runner regression/contract coverage`（`extensions/whatsapp/src/auto-reply/heartbeat-runner.test.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `heartbeat runner`（`extensions/whatsapp/src/auto-reply/heartbeat-runner.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。；删除或废弃 `session snapshot`（`extensions/whatsapp/src/auto-reply/session-snapshot.ts`），需要确认调用方、文档链接和 active impact-map 不再依赖该路径。

- 验证提示：确认 active `.planning/impact-map` 不再引用已删除路径。
- 置信度：`medium`

### 大 leaf 聚合主题

该 leaf 覆盖大量相邻路径，代表主题包括 whatsapp public API barrel、auth presence、config api、whatsapp plugin entrypoint、plugin manifest/control-plane metadata、package metadata/version；完整路径清单保留在证据附录和 JSON 中。

- 验证提示：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 包含删除路径，需要确认 active impact-map 已移除旧引用，并检查调用方是否还依赖这些文件。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `channel-plugins`
- Impact-map dir: `.planning/impact-map/extensions/channel-plugins/whatsapp`
- Changed path count: `138`
- Status counts: `新增 8、修改 123、删除 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `138` files, `+5562` / `-1816`

### 归纳依据

- 主要落点：message delivery、implementation、tests/contracts、session/state handling、configuration/schema、auth/pairing/security behavior、model/thinking policy、manifest/package metadata。
- 新增或暴露的关键符号包括：`withOwnedOAuthAuthDir`, `isBaileysAuthFileName`, `isPathInsideDirectory`, `TEST_NET_IP`, `WEB_AUTO_REPLY_SOCKETS_KEY`, `getSessionSockets`, `getLastWebAutoReplySessionSocket`, `resetWebAutoReplySessionSockets`, `createAcceptedWhatsAppSendResult`, `createWebAutoReplyRuntime`。
- 建议优先验证：按该 leaf 的 changed paths 运行最小相关回归测试；若失败再扩大到父 feature。
- 相关 commit 主题：fix(sandbox): support Windows drive-letter bind sources；fix(whatsapp): normalize onboarding allowlist numbers；fix(infra): skip POSIX tmp path on Windows；chore: better explicit message on whatsapp；test(whatsapp): accept native Windows auth paths；fix(whatsapp): capture login outcome output；fix(whatsapp): route login qr through runtime；test(whatsapp): sync auto-reply runtime mock

### Dimension evidence

- `maintenance-修复-infra-skip-POSIX-tmp-path-on-Windows` / 修复 infra skip POSIX tmp path on Windows:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `maintenance-修复-sandbox-support-Windows-drive-letter-bind-so` / 修复 sandbox support Windows drive-letter bind sources:
  - source: `path` [M] `extensions/whatsapp/src/monitor-inbox.captures-media-path-image-messages.test-support.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/src/monitor-inbox.streams-inbound-messages.test-support.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/src/outbound-test-support.ts` — semantic cue
- `maintenance-修复-whatsapp-capture-login-outcome-output` / 修复 whatsapp capture login outcome output:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `maintenance-修复-whatsapp-honor-group-visible-reply-mode` / 修复 whatsapp honor group visible reply mode:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `maintenance-修复-whatsapp-normalize-onboarding-allowlist-numb` / 修复 whatsapp normalize onboarding allowlist numbers:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `runtime-behavior-修复-whatsapp-route-login-qr-through-runtime` / 修复 whatsapp route login qr through runtime:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `tests-docs-测试覆盖-fix-whatsapp-reply-delivery-mocks` / 测试覆盖 fix whatsapp reply delivery mocks:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `tests-docs-测试覆盖-whatsapp-accept-native-Windows-auth-paths` / 测试覆盖 whatsapp accept native Windows auth paths:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `tests-docs-测试覆盖-whatsapp-sync-auto-reply-runtime-mock` / 测试覆盖 whatsapp sync auto-reply runtime mock:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `maintenance-维护调整-better-explicit-message-on-whatsapp` / 维护调整 better explicit message on whatsapp:
  - source: `path` [M] `extensions/whatsapp/api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/auth-presence.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/whatsapp/package.json` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/whatsapp/api.ts` — contract evidence
  - source: `path` [M] `extensions/whatsapp/config-api.ts` — contract evidence
  - source: `path` [M] `extensions/whatsapp/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/whatsapp/runtime-api.ts` — contract evidence
  - source: `path` [M] `extensions/whatsapp/src/auto-reply/config.runtime.ts` — contract evidence
  - source: `path` [M] `extensions/whatsapp/src/auto-reply/monitor/runtime-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/whatsapp/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/whatsapp/index.test.ts` — test evidence
  - source: `path` [M] `extensions/whatsapp/src/accounts.whatsapp-auth.test.ts` — test evidence
  - source: `path` [M] `extensions/whatsapp/src/action-runtime.test.ts` — test evidence
  - source: `path` [M] `extensions/whatsapp/src/active-listener.test.ts` — test evidence
  - source: `path` [M] `extensions/whatsapp/src/auth-store.test.ts` — test evidence
  - source: `path` [M] `extensions/whatsapp/src/auto-reply.broadcast-groups.combined.test.ts` — test evidence
- `deletion` / 删除/废弃变化:
  - source: `path` [D] `extensions/whatsapp/src/auto-reply/heartbeat-runner.runtime.ts`
  - source: `path` [D] `extensions/whatsapp/src/auto-reply/heartbeat-runner.test.ts`
  - source: `path` [D] `extensions/whatsapp/src/auto-reply/heartbeat-runner.ts`
  - source: `path` [D] `extensions/whatsapp/src/auto-reply/session-snapshot.ts`
  - source: `path` [D] `extensions/whatsapp/src/heartbeat-recipients.runtime.ts`
  - source: `path` [D] `extensions/whatsapp/src/heartbeat-recipients.test.ts`
- `maintenance` / 大 leaf 聚合主题:
  - source: `path` [A] `extensions/whatsapp/src/auto-reply/monitor-state.test.ts`
  - source: `path` [A] `extensions/whatsapp/src/auto-reply/monitor/group-gating.audio-preflight.test.ts`
  - source: `path` [A] `extensions/whatsapp/src/inbound/outbound-mentions.test.ts`
  - source: `path` [A] `extensions/whatsapp/src/inbound/outbound-mentions.ts`
  - source: `path` [A] `extensions/whatsapp/src/inbound/send-result.ts`
  - source: `path` [A] `extensions/whatsapp/src/session-route.test.ts`

### 路径证据

- 新增 `extensions/whatsapp/src/auto-reply/monitor-state.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/whatsapp/src/auto-reply/monitor/group-gating.audio-preflight.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/whatsapp/src/inbound/outbound-mentions.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/whatsapp/src/inbound/outbound-mentions.ts`：调整 outbound mentions（implementation）。
- 新增 `extensions/whatsapp/src/inbound/send-result.ts`：调整 send result（message delivery）。
- 新增 `extensions/whatsapp/src/session-route.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/whatsapp/src/socket-timing.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 新增 `extensions/whatsapp/src/socket-timing.ts`：调整 socket timing（implementation）。
- 修改 `extensions/whatsapp/api.ts`：调整对外轻量 API barrel，影响其他模块可复用的插件侧能力。
- 修改 `extensions/whatsapp/auth-presence.ts`：调整 auth presence（auth/pairing/security behavior）。
- 修改 `extensions/whatsapp/config-api.ts`：调整 config api（configuration/schema）。
- 修改 `extensions/whatsapp/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/whatsapp/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/whatsapp/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/whatsapp/runtime-api.ts`：调整 runtime api（implementation）。
- 修改 `extensions/whatsapp/src/account-types.ts`：调整 account types（implementation）。
- 修改 `extensions/whatsapp/src/accounts.ts`：调整 accounts（implementation）。
- 修改 `extensions/whatsapp/src/accounts.whatsapp-auth.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/whatsapp/src/action-runtime-target-auth.ts`：调整 action runtime target auth（auth/pairing/security behavior）。
- 修改 `extensions/whatsapp/src/action-runtime.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 删除 `extensions/whatsapp/src/auto-reply/heartbeat-runner.runtime.ts`：移除旧的 message delivery 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/whatsapp/src/auto-reply/heartbeat-runner.test.ts`：移除旧的 message delivery 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/whatsapp/src/auto-reply/heartbeat-runner.ts`：移除旧的 message delivery 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/whatsapp/src/auto-reply/session-snapshot.ts`：移除旧的 session/state handling 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/whatsapp/src/heartbeat-recipients.runtime.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/whatsapp/src/heartbeat-recipients.test.ts`：移除旧的 tests/contracts 文件；需要确认没有调用方继续依赖这个路径。
- 删除 `extensions/whatsapp/src/heartbeat-recipients.ts`：移除旧的 implementation 文件；需要确认没有调用方继续依赖这个路径。
- 其余 111 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/channel-plugins/whatsapp` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/channel-plugins/whatsapp/change-to-test.md` 的验证建议。
