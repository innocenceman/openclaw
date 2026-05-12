# v2026.4.24...v2026.5.4 version diff

This directory is the canonical transition record for the explicitly authorized
sidegrade recovery from `v2026.4.24` to `v2026.5.4`.

## Source of truth

| Fact                                                    | Artifact                                                                                             |
| ------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Transition topology, path diff, validation, tool status | `manifest.json`                                                                                      |
| Feature, final leaf, risk, and compatibility mapping    | `leaf-impact.json`                                                                                   |
| Raw path evidence                                       | `name-status.txt`, `added-paths.txt`, `deleted-paths.txt`, `modified-paths.txt`, `renamed-paths.tsv` |
| Raw commit evidence                                     | `commits.txt`                                                                                        |
| Compact human leaf index                                | `LEAF-CHANGE-BRIEF.zh-CN.md`                                                                         |
| Detailed per-leaf functional diffs                      | `leaf-briefs/*.zh-CN.md`                                                                             |
| Active planning refresh checklist                       | `planning-refresh-checklist.json`, `PLANNING-REFRESH.zh-CN.md`                                       |
| Deleted-path cleanup evidence                           | `obsolete-impact-map-references.json`, `obsolete-impact-map-references/`                             |
| Planning/source anchors                                 | `ref-anchors.md`                                                                                     |

If Markdown conflicts with JSON or text artifacts, trust the JSON/text artifacts.

## Counts

- Changed paths: 10546
- Covered paths: 10546
- Unclassified paths: 0
- Feature groups: 14
- Final leaves: 232
- High-risk leaves: 149
- Compatibility: behavior-change=192, compatible=17, docs-only=22, unknown=1
- Risk: high=149, medium=83

## Review order

1. Start with `SUMMARY.zh-CN.md` for the transition overview.
2. Use `FEATURE-IMPACT.zh-CN.md` to prioritize feature areas.
3. Use `LEAF-CHANGE-BRIEF.zh-CN.md` as the compact leaf index.
4. Open individual `leaf-briefs/*.zh-CN.md` files for code-level functional diffs.
5. Use `COMPATIBILITY.zh-CN.md` for compatibility taxonomy and priority.
6. Use `ref-anchors.md` before changing local or remote planning refs.
