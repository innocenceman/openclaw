# src/capability-modules/media

## 一句话结论

media 所属的 Memory, media, web UI and terminal UI surfaces 有 101 个路径变化（新增 68、修改 33），兼容性判断为行为变化。

## Canonical facts

- Feature group: `memory-media-ui`
- Impact-map dir: `.planning/impact-map/src/capability-modules/media`
- Changed path count: `101`
- Status counts: `新增 68、修改 33`
- Risk: `medium`
- Compatibility: `behavior-change` (行为变化)
- Diff stat: `101` files, `+9967` / `-561`

## 功能变化摘要

这个 leaf 属于 `Memory, media, web UI and terminal UI surfaces`。本次版本差异显示它的主要变化是：新增 68、修改 33。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `src/media-generation/live-test-helpers.ts`
- `src/media-generation/model-ref.ts`
- `src/media-generation/normalization.types.ts`
- `src/media-generation/provider-capabilities.contract.test.ts`
- `src/media-generation/runtime-shared.test.ts`
- `src/media-generation/runtime-shared.ts`
- `src/media/channel-inbound-roots.fast-path.test.ts`
- `src/media/channel-inbound-roots.ts`
- `src/media/configured-max-bytes.ts`
- `src/media/document-extractors.runtime.test.ts`
- `src/media/document-extractors.runtime.ts`
- `src/media/image-ops.input-guard.test.ts`
- `src/media/image-ops.tempdir.test.ts`
- `src/media/local-media-access.test.ts`
- `src/media/media-reference.test.ts`
- `src/media/media-reference.ts`
- `src/media/media-source-url.ts`
- `src/media/outbound-attachment.test.ts`
- `src/media/pdf-extract.test.ts`
- `src/media/prompt-image-order.ts`
- `src/media/qr-image.test.ts`
- `src/media/qr-runtime.ts`
- `src/media/qr-terminal.ts`
- `src/media/read-capability.test.ts`
- `src/media/read-capability.ts`
- `src/media/server.runtime.ts`
- `src/media/server.test-support.ts`
- `src/media/store.runtime.ts`
- `src/media/test-helpers.ts`
- `src/music-generation/capabilities.test.ts`
- … 另有 38 个路径，详见 `leaf-impact.json`。

### 修改

- `src/media/audio.test.ts`
- `src/media/audio.ts`
- `src/media/base64.ts`
- `src/media/fetch.test.ts`
- `src/media/fetch.ts`
- `src/media/ffmpeg-exec.ts`
- `src/media/file-context.ts`
- `src/media/image-ops.ts`
- `src/media/inbound-path-policy.test.ts`
- `src/media/inbound-path-policy.ts`
- `src/media/input-files.fetch-guard.test.ts`
- `src/media/input-files.ts`
- `src/media/load-options.test.ts`
- `src/media/load-options.ts`
- `src/media/local-media-access.ts`
- `src/media/local-roots.test.ts`
- `src/media/local-roots.ts`
- `src/media/mime.test.ts`
- `src/media/mime.ts`
- `src/media/outbound-attachment.ts`
- `src/media/parse.test.ts`
- `src/media/parse.ts`
- `src/media/pdf-extract.ts`
- `src/media/qr-image.ts`
- `src/media/server.outside-workspace.test.ts`
- `src/media/server.test.ts`
- `src/media/server.ts`
- `src/media/store.outside-workspace.test.ts`
- `src/media/store.redirect.test.ts`
- `src/media/store.test.ts`
- … 另有 3 个路径，详见 `leaf-impact.json`。

## 兼容性判断

结论：`behavior-change`（行为变化），风险等级 `medium`。

原因：

- 变更触及运行时或用户可感知路径，因此按行为变化处理，即使没有明确 API 删除。

## 可能受影响的人或模块

- 该 leaf 所属功能的维护者和调用方

## 建议验证

- 首选验证：`media/` | pnpm test -- src/media/fetch.test.ts src/media/server.test.ts src/media/store.test.ts src/media/web-media.test.ts | Escalate to security/channel tests when remote fetch, SSRF, or attachment behavior broadens. | Priority completion unit
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `src/capability-modules/media` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/src/capability-modules/media/change-to-test.md` 的验证建议。
