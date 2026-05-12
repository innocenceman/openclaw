# v2026.3.28 to v2026.4.24 Version Diff

本目录保存从 `v2026.3.28` 滚动到 `v2026.4.24` 的 canonical version-diff 事实与中文投影报告。

## Source of truth

- `manifest.json`: 版本、源码 SHA、路径计数、合成结果入口。
- `leaf-impact.json`: feature、final leaf、兼容性、风险和 changed paths 的事实源。
- `name-status.txt`: Git name-status 原始路径差异。
- `added-paths.txt` / `modified-paths.txt` / `deleted-paths.txt` / `renamed-paths.tsv`: 按路径状态拆分的机械事实。
- `commits.txt`: base source 到 target source 的 commit 列表。
- `planning-refresh-checklist.json`: active `.planning` 刷新和 stale deleted-path 检查状态。
- `obsolete-impact-map-references.json`: 从 active impact-map 清理掉的已删除路径引用索引。
- `LEAF-CHANGE-BRIEF.zh-CN.md` / `leaf-briefs/` / `leaf-change-brief.json`: 每个 final leaf 的人类可读功能变化与兼容性解释层。
- `code-intelligence/RECOVERY-NOTE.zh-CN.md`: 本次 GitNexus / code-review-graph 历史手动运行的结构化补证据。

Markdown 报告只解释 JSON/txt 事实；如有冲突，以 JSON/txt 为准。

## Human-readable leaf briefs

- 总索引：`LEAF-CHANGE-BRIEF.zh-CN.md`
- 机器索引：`leaf-change-brief.json`
- 单 leaf 详情：`leaf-briefs/*.zh-CN.md`

这层报告回答“每个 leaf 具体改了什么功能、兼容性是否受损”。完整事实仍以 `leaf-impact.json` 和原始 path diff 文件为准。
