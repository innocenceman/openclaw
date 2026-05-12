# Filesystem Bridge Leaf Index

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 final cross-module audit

| Leaf directory  | Coverage                   | Purpose                                                                              |
| --------------- | -------------------------- | ------------------------------------------------------------------------------------ |
| `shell-bridge/` | `verified`                 | Shell-backed sandbox filesystem bridge command execution.                            |
| `path-safety/`  | `exceptioned-deep-partial` | Host paths, fs paths, anchored operations, mutation helpers, and rename/path safety. |
