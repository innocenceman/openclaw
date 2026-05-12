# Docs I18n Markdown Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope          | First validation                                                                          | Escalation trigger                                                    | Notes                                                                |
| --------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `docs-i18n-markdown/` | Start with the nearest targeted tests named in `file-roles.md` or parent module evidence. | Escalate to consumer modules when behavior crosses the leaf boundary. | Fill with fresher validation evidence during the next verified wave. |

## 2026-05-09 validation result

Result: `verified`. Docs/i18n/markdown tests passed.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `19` (新增 11，修改 6，删除 2).
- Target-existing path refs in active map: `17`; deleted/renamed-away refs kept only in transition artifacts: `2`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/docs/channel-config-examples.test.ts`
- `src/docs/plugin-doc-examples.test.ts`
- `src/i18n/registry.test.ts`
- `src/markdown/code-spans.ts`
- `src/markdown/frontmatter.ts`
- `src/markdown/ir.nested-lists.test.ts`
- `src/markdown/ir.ts`
- `src/scripts/canvas-a2ui-copy.test.ts`
- `src/scripts/ci-changed-scope.test.ts`
- `src/scripts/control-ui-i18n.test.ts`
- `src/scripts/prepare-codex-ci-config.test.ts`
- `src/scripts/sync-plugin-versions.test.ts`
- `src/scripts/test-projects.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
