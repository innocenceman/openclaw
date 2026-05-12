# extensions/provider-plugins/fal

## 1. 功能结论

**新增**：Fal 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约、fal support Seedance reference video、expose generic image background option；**修改**：mark provider plugins startup lazy、expose provider media test helpers、media preserve oversized video generation delivery；**迁移/重构**：share media provider asset helpers、promote plugin test helpers to sdk；行为变化，风险 high。

- 变更类型：`mixed`
- 兼容性：`behavior-change`（行为变化）
- 风险：`high`
- 置信度：`high`

## 2. Leaf 范围与变更形态

- Leaf 类型：`provider`
- 影响范围：Provider/plugin 调用方、插件作者
- 变更形态：公共契约或 control-plane metadata 变化、测试/回归边界变化、行为调整、集成、构建或发布变化
- 特殊形态：无
- 路径状态摘要（降级事实）：修改 7

## 3. 功能级详细差异

### 优化 mark provider plugins startup lazy

优化 mark provider plugins startup lazy

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`high`

### 修复 media preserve oversized video generation delivery

修复 media：preserve oversized video generation delivery

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 Fal 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约

新增 Fal 视频生成测试：覆盖 video-generation provider 的默认模型、请求/响应或注册契约。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 expose generic image background option

新增 expose generic image background option

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`high`

### 新增 fal support Seedance reference video

新增 fal：support Seedance reference video

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`high`

### 测试覆盖 expose provider media test helpers

测试覆盖 expose provider media test helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 promote plugin test helpers to sdk

迁移/重构 promote plugin test helpers to sdk

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`high`

### 迁移/重构 share media provider asset helpers

迁移/重构 share media provider asset helpers

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`high`

### 公共契约变化

公开 API、manifest、schema 或 control-plane metadata 涉及 plugin manifest/control-plane metadata，需要按契约边界审查。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`medium`

### 集成、构建、发布变化

集成、构建、发布或包元数据涉及 package metadata/version，需要确认发布/安装链路仍一致。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`medium`

### 测试与文档语义变化

测试或契约覆盖集中在 image generation provider regression/contract coverage、plugin registration regression/contract coverage、video generation provider regression/contract coverage，用于约束本 leaf 的回归边界。

- 验证提示：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 置信度：`medium`

## 4. 兼容性与风险判断

结论：`behavior-change`（行为变化），风险等级 `high`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。
- 风险等级为 high，应优先审查接口、配置、插件或运行时边界是否变化。

## 5. 建议优先验证

- 首选验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 6. 证据附录

### Canonical facts

- Feature group: `model-provider-plugins`
- Impact-map dir: `.planning/impact-map/extensions/provider-plugins/fal`
- Changed path count: `7`
- Status counts: `修改 7`
- Risk: `high`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `7` files, `+422` / `-61`

### 归纳依据

- 主要落点：image generation、manifest/package metadata、video generation、tests/contracts。
- 新增或暴露的关键符号包括：`FAL_OUTPUT_FORMATS`, `SEEDANCE_2_TEXT_IMAGE_VIDEO_MODELS`, `SEEDANCE_2_REFERENCE_VIDEO_MODELS`, `SEEDANCE_2_VIDEO_MODELS`, `SEEDANCE_REFERENCE_MAX_IMAGES`, `SEEDANCE_REFERENCE_MAX_VIDEOS`, `SEEDANCE_REFERENCE_MAX_AUDIOS`, `SEEDANCE_REFERENCE_MAX_FILES`, `SEEDANCE_REFERENCE_MAX_IMAGES_BY_MODEL`, `SEEDANCE_REFERENCE_MAX_VIDEOS_BY_MODEL`。
- 建议优先验证：优先运行 `pnpm test:contracts:plugins`；`pnpm test -- extensions/fal`；`pnpm test:extensions`。
- 相关 commit 主题：perf: mark provider plugins startup lazy；test: expose provider media test helpers；refactor: share media provider asset helpers；refactor: promote plugin test helpers to sdk；feat(fal): support Seedance reference video；feat: expose generic image background option；fix(media): preserve oversized video generation delivery

### Dimension evidence

- `maintenance-优化-mark-provider-plugins-startup-lazy` / 优化 mark provider plugins startup lazy:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.ts` — semantic cue
- `maintenance-修复-media-preserve-oversized-video-generation-de` / 修复 media preserve oversized video generation delivery:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.ts` — semantic cue
- `user-visible-新增-Fal-视频生成测试-覆盖-video-generation-provider-的默认模` / 新增 Fal 视频生成测试 覆盖 video-generation provider 的默认模型、请求/响应或注册契约:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/fal/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/fal/package.json` — semantic cue
  - source: `path` [M] `extensions/fal/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.test.ts` — semantic cue
- `maintenance-新增-expose-generic-image-background-option` / 新增 expose generic image background option:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/image-generation-provider.ts` — semantic cue
- `maintenance-新增-fal-support-Seedance-reference-video` / 新增 fal support Seedance reference video:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/fal/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/fal/package.json` — semantic cue
  - source: `path` [M] `extensions/fal/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.test.ts` — semantic cue
- `tests-docs-测试覆盖-expose-provider-media-test-helpers` / 测试覆盖 expose provider media test helpers:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/fal/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.ts` — semantic cue
- `migration-迁移-重构-promote-plugin-test-helpers-to-sdk` / 迁移/重构 promote plugin test helpers to sdk:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/fal/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/fal/package.json` — semantic cue
  - source: `path` [M] `extensions/fal/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.test.ts` — semantic cue
- `migration-迁移-重构-share-media-provider-asset-helpers` / 迁移/重构 share media provider asset helpers:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/image-generation-provider.ts` — semantic cue
  - source: `path` [M] `extensions/fal/openclaw.plugin.json` — semantic cue
  - source: `path` [M] `extensions/fal/package.json` — semantic cue
  - source: `path` [M] `extensions/fal/plugin-registration.contract.test.ts` — semantic cue
  - source: `path` [M] `extensions/fal/video-generation-provider.test.ts` — semantic cue
- `public-contract` / 公共契约变化:
  - source: `path` [M] `extensions/fal/openclaw.plugin.json` — contract evidence
- `integration-build-release` / 集成、构建、发布变化:
  - source: `path` [M] `extensions/fal/package.json` — build/release evidence
- `tests-docs` / 测试与文档语义变化:
  - source: `path` [M] `extensions/fal/image-generation-provider.test.ts` — test evidence
  - source: `path` [M] `extensions/fal/plugin-registration.contract.test.ts` — test evidence
  - source: `path` [M] `extensions/fal/video-generation-provider.test.ts` — test evidence

### 路径证据

- 修改 `extensions/fal/image-generation-provider.test.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/fal/image-generation-provider.ts`：调整图像生成 provider，影响输入图片编码或输出图片解析。
- 修改 `extensions/fal/openclaw.plugin.json`：更新插件 manifest/control-plane metadata，涉及 插件激活策略。
- 修改 `extensions/fal/package.json`：更新插件包元数据/版本或依赖声明。
- 修改 `extensions/fal/plugin-registration.contract.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/fal/video-generation-provider.test.ts`：更新测试/契约覆盖，说明该行为被作为回归边界维护。
- 修改 `extensions/fal/video-generation-provider.ts`：调整 video generation provider（video generation）。

### 证据来源

- `.planning/version-diff/v2026.4.24...v2026.5.4/leaf-impact.json` 中 leaf `extensions/provider-plugins/fal` 的 mapping。
- `.planning/version-diff/v2026.4.24...v2026.5.4/name-status.txt` 的路径状态。
- `.planning/impact-map/extensions/provider-plugins/fal/change-to-test.md` 的验证建议。
