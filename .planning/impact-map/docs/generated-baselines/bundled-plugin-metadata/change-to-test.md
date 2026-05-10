# Bundled Plugin Metadata Baselines Change-to-Test Matrix

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

| Change type                               | First validation                                       | Escalation trigger                                                                                         |
| ----------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Bundled plugin metadata generator changed | `pnpm check:bundled-plugin-metadata`                   | Escalate to build/runtime/plugin catalog checks when the downstream runtime artifact changes meaningfully. |
| Generated metadata artifact changed       | Trace back to the source manifest/catalog change first | Run adjacent plugin metadata tests when the artifact change is intentional.                                |

## Validation evidence

No commands above were executed during Wave 4. They were selected from the current repo tree, package-script wiring, and adjacent tests without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `1887` (修改 317，新增 1520，重命名/移动 14，删除 36).
- Target-existing path refs in active map: `1849`; deleted/renamed-away refs kept only in transition artifacts: `38`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
