# extensions/provider-plugins/minimax

## 1. 功能结论

**新增**：Minimax 视频生成 provider 增加 video generation runtime/contract 路径、Minimax 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约；**修改**：web-search include MiniMax in setup detection、minimax respect usage base url、web-search allow MiniMax OAuth search credentials、mark provider plugins startup lazy；**迁移/重构**：插件 SDK test runtime/contracts、trim provider helper exports、split plugin sdk test helpers、promote plugin test helpers to sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 23

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 minimax respect usage base url

修复 minimax：respect usage base url

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search allow MiniMax OAuth search credentials

修复 web-search：allow MiniMax OAuth search credentials

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 web-search include MiniMax in setup detection

修复 web-search：include MiniMax in setup detection

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 Minimax 视频生成 provider 增加 video generation runtime/contract 路径

新增 Minimax 视频生成 provider：增加 video generation runtime/contract 路径，扩展该 provider 的媒体生成能力。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 Minimax 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约

新增 Minimax 视频生成测试：覆盖 video-generation provider 的默认模型、请求/响应或注册契约。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 expose provider media test helpers

测试覆盖 expose provider media test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 route extension tests through sdk subpaths

测试覆盖 route extension tests through sdk subpaths

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…

测试迁移到插件 SDK test runtime/contracts：OpenRouter 测试从 repo 内部 helper 改为 `openclaw/plugin-sdk/*` 测试契约，减少 core 深层测试耦合。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 expose plugin test helpers via sdk

迁移/重构 expose plugin test helpers via sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 promote plugin test helpers to sdk

迁移/重构 promote plugin test helpers to sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 split plugin sdk test helpers

迁移/重构 split plugin sdk test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 trim provider helper exports

迁移/重构 trim provider helper exports

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata、web search contract api，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 image generation provider regression/contract coverage、minimax plugin entrypoint、minimax regression/contract coverage、music generation provider regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/minimax`
- Changed path count: `23`
- Status counts: `修改 23`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `23` files, `+798` / `-184`

### 归纳依据

- 主要落点：tests/contracts、implementation、speech/TTS、image generation、manifest/package metadata、video generation、plugin entry/API surface、auth/pairing/security behavior。
- 新增或暴露的关键符号包括：`CN_MINIMAX_IMAGE_BASE_URL`, `isMinimaxCnHost`, `MusicGenerationProvider`, `VideoGenerationProvider`, `MINIMAX_API_KEY`, `MINIMAX_TTS_TOKEN_PLAN_KEY`, `DEFAULT_MINIMAX_MUSIC_MODEL`, `buildMinimaxMusicProvider`, `buildMinimaxMusicGenerationProvider`, `buildMinimaxPortalMusicGenerationProvider`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/minimax`；`pnpm test:extensions`。
- 相关 commit 主题：fix(web-search): include MiniMax in setup detection；fix(minimax): respect usage base url；fix(web-search): allow MiniMax OAuth search credentials；refactor: trim provider helper exports；perf: mark provider plugins startup lazy；test: expose provider media test helpers；refactor: split plugin sdk test helpers；refactor: promote plugin test helpers to sdk

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/provider-discovery.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/provider-registration.ts` — semantic cue
- `maintenance-修复-minimax-respect-usage-base-url` / 修复 minimax respect usage base url:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `maintenance-修复-web-search-allow-MiniMax-OAuth-search-creden` / 修复 web-search allow MiniMax OAuth search credentials:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `maintenance-修复-web-search-include-MiniMax-in-setup-detection` / 修复 web-search include MiniMax in setup detection:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `user-visible-新增-Minimax-视频生成-provider-增加-video-generation-ru` / 新增 Minimax 视频生成 provider 增加 video generation runtime/contract 路径:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `user-visible-新增-Minimax-视频生成测试-覆盖-video-generation-provider` / 新增 Minimax 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `tests-docs-测试覆盖-expose-provider-media-test-helpers` / 测试覆盖 expose provider media test helpers:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.ts` — semantic cue
- `tests-docs-测试覆盖-route-extension-tests-through-sdk-subpaths` / 测试覆盖 route extension tests through sdk subpaths:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `public-contract-测试迁移到插件-SDK-test-runtime-contracts-OpenRouter-测` / 测试迁移到插件 SDK test runtime/contracts OpenRouter 测试从 repo 内部 helper 改为 ope…:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/onboard.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/plugin-registration.contract.test.ts` — semantic cue
- `migration-迁移-重构-expose-plugin-test-helpers-via-sdk` / 迁移/重构 expose plugin test helpers via sdk:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `migration-迁移-重构-promote-plugin-test-helpers-to-sdk` / 迁移/重构 promote plugin test helpers to sdk:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `migration-迁移-重构-split-plugin-sdk-test-helpers` / 迁移/重构 split plugin sdk test helpers:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `migration-迁移-重构-trim-provider-helper-exports` / 迁移/重构 trim provider helper exports:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/index.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — semantic cue
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/minimax/openclaw.plugin.json` — contract evidence
  - source: `path` [M] `extensions/minimax/web-search-contract-api.ts` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/minimax/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/minimax/image-generation-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/minimax/index.test.ts` — test evidence
  - source: `path` [M] `extensions/minimax/minimax.live.test.ts` — test evidence
  - source: `path` [M] `extensions/minimax/music-generation-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/minimax/onboard.test.ts` — test evidence
  - source: `path` [M] `extensions/minimax/plugin-registration.contract.test.ts` — test evidence

### 路径证据

- 修改 `extensions/minimax/image-generation-provider.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/minimax/image-generation-provider.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/minimax/index.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/minimax/index.ts`：调整插件注册入口，影响 provider/media/stream wrapper 的实际注册行为。
- 修改 `extensions/minimax/minimax.live.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/minimax/music-generation-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/minimax/music-generation-provider.ts`：调整 music generation provider（implementation）。
- 修改 `extensions/minimax/oauth.ts`：调整 oauth（auth/pairing/security behavior）。
- 修改 `extensions/minimax/onboard.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/minimax/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略、视频生成 provider contract、图像生成 provider contract、语音 provider contract。
- 修改 `extensions/minimax/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/minimax/plugin-registration.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 其余 11 个路径属于同一 leaf 的相邻实现/测试/文档变更，详见 `pathsByStatus` 与源码 diff。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/minimax` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/minimax/change-to-test.md` 的验证建议。
