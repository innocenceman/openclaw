# Version Diff Artifacts

此目录保存 rolling planning baseline 的版本差异事实。

## Source of truth

| Fact type                            | Canonical artifact                                                                                                  |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 当前 baseline                        | `current-baseline.json`                                                                                             |
| transition 拓扑、路径 diff、校验状态 | `<base>...<target>/manifest.json`                                                                                   |
| 功能、leaf、兼容性映射               | `<base>...<target>/leaf-impact.json`                                                                                |
| 原始路径/commit 证据                 | `name-status.txt`, `added-paths.txt`, `deleted-paths.txt`, `modified-paths.txt`, `renamed-paths.tsv`, `commits.txt` |
| 人类可读说明                         | Markdown reports，作为 JSON/txt 的投影                                                                              |

若 Markdown 与 JSON/txt 冲突，以 JSON/txt 为准。
