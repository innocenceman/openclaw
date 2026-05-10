# Code Intelligence Recovery Note

本次 `v2026.3.28 -> v2026.4.24` 的 code intelligence 刷新发生在 `refresh-code-intelligence.py` 固化进 skill 之前，因此没有 `gitnexus-analyze.log` 和 `code-review-graph-build.log` 两个脚本化日志文件。

## 已有证据

- GitNexus：操作者在目标源码稳定后手动运行了 `gitnexus analyze --max-file-size 10240 --embeddings`。
- code-review-graph：操作者在目标源码稳定后手动运行了 `code-review-graph build`。
- 记录结果：`Full build: 14109 files, 130354 nodes, 1195738 edges`。
- 后续检查：`gitnexus detect_changes` 可用，并对当前非 version-diff 本地改动返回 low risk。

## 兼容处理

这份 note 是历史补证据，不代表新流程可以跳过脚本。下一个版本开始应使用：

```bash
python3 /home/yanx/.codex/skills/gsd-version-diff/scripts/refresh-code-intelligence.py \
  .planning/version-diff/<base>...<target>
```

该脚本会强制确认 `HEAD == target.sourceSha`，默认执行 `gitnexus analyze --max-file-size 10240 --embeddings` 与 `code-review-graph build`，并把日志与耗时写入 transition manifest。
