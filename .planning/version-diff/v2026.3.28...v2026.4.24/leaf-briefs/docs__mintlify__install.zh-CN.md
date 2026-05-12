# docs/mintlify/install

## 一句话结论

install 所属的 Docs, generated baselines, changelog and public guidance 有 24 个路径变化（新增 2、修改 22），兼容性判断为仅文档/测试。

## Canonical facts

- Feature group: `docs-generated-baselines`
- Impact-map dir: `.planning/impact-map/docs/mintlify/install`
- Changed path count: `24`
- Status counts: `新增 2、修改 22`
- Risk: `medium`
- Compatibility: `docs-only` (仅文档/测试)
- Diff stat: `24` files, `+566` / `-140`

## 功能变化摘要

这个 leaf 属于 `Docs, generated baselines, changelog and public guidance`。本次版本差异显示它的主要变化是：新增 2、修改 22。以下判断基于路径状态、leaf 所属模块和 active impact-map 说明生成，仍以 `leaf-impact.json` 与源码 diff 为事实来源。

## 具体修改

### 新增

- `docs/install/clawdock.md`
- `docs/install/hostinger.md`

### 修改

- `docs/install/ansible.md`
- `docs/install/azure.md`
- `docs/install/bun.md`
- `docs/install/development-channels.md`
- `docs/install/digitalocean.md`
- `docs/install/docker-vm-runtime.md`
- `docs/install/exe-dev.md`
- `docs/install/fly.md`
- `docs/install/gcp.md`
- `docs/install/hetzner.md`
- `docs/install/index.md`
- `docs/install/installer.md`
- `docs/install/migrating-matrix.md`
- `docs/install/migrating.md`
- `docs/install/nix.md`
- `docs/install/node.md`
- `docs/install/northflank.mdx`
- `docs/install/oracle.md`
- `docs/install/railway.mdx`
- `docs/install/raspberry-pi.md`
- `docs/install/render.mdx`
- `docs/install/uninstall.md`

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

- `.planning/version-diff/v2026.3.28...v2026.4.24/leaf-impact.json` 中 leaf `docs/mintlify/install` 的 mapping。
- `.planning/version-diff/v2026.3.28...v2026.4.24/name-status.txt` 的路径状态。
- `.planning/impact-map/docs/mintlify/install/change-to-test.md` 的验证建议。
