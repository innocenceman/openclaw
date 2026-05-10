# scripts/release-versioning/app-versions

## 一句话结论

app versions 所属的 Build, CI, scripts, tests and release automation 有 18 个路径变化（新增 3、修改 15），兼容性判断为兼容。

## Canonical facts

- Feature group: `build-ci-tests`
- Impact-map dir: `.planning/impact-map/scripts/release-versioning/app-versions`
- Changed path count: `18`
- Status counts: `新增 3、修改 15`
- Risk: `medium`
- Compatibility: `compatible` (兼容)
- Diff stat: `18` files, `+844` / `-223`

## 功能变化摘要

这个 leaf 属于 `Build, CI, scripts, tests and release automation`。本次版本差异显示它的主要变化是：新增 3、修改 15。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `apps/ios/CHANGELOG.md`
- `apps/ios/VERSIONING.md`
- `apps/ios/version.json`

### 修改

- `appcast.xml`
- `apps/android/app/build.gradle.kts`
- `apps/android/gradle/wrapper/gradle-wrapper.jar`
- `apps/android/gradle/wrapper/gradle-wrapper.properties`
- `apps/android/gradlew`
- `apps/android/gradlew.bat`
- `apps/ios/LocalSigning.xcconfig.example`
- `apps/ios/Sources/Info.plist`
- `apps/ios/fastlane/Fastfile`
- `apps/ios/fastlane/SETUP.md`
- `apps/ios/fastlane/metadata/README.md`
- `apps/ios/fastlane/metadata/en-US/release_notes.txt`
- `apps/ios/project.yml`
- `apps/macos/Sources/OpenClaw/Resources/Info.plist`
- `docs/install/updating.md`

## 兼容性判断

结论：`compatible`（兼容），风险等级 `medium`。

原因：

- 当前分类未显示公开接口删除或高风险运行时行为变化，默认视为兼容，但仍需要按 leaf 验证。

## 可能受影响的人或模块

- CI/测试维护者
- 发布/构建维护者

## 建议验证

- 首选验证：Only docs/install/updating.md changed | `pnpm check:docs` | Confirm whether package/app versions also changed or whether the docs edit is premature.
- 如果该 leaf 是高风险或行为变化，继续检查相邻调用方和父 feature 的回归测试。
- 若包含删除/重命名路径，确认 active `.planning/impact-map` 不再引用目标版本已删除路径。

## 人类审查问题

- 这些路径变化是否改变了用户可见行为、配置语义或插件/SDK 合约？
- 是否存在未被 changed paths 直接覆盖、但会被调用链影响的相邻模块？
- 当前建议验证是否足以覆盖兼容性风险？

## 证据来源

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `scripts/release-versioning/app-versions` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/scripts/release-versioning/app-versions/change-to-test.md` 的验证建议。
