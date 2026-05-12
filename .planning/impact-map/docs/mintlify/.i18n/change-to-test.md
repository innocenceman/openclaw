# Docs Support .i18n Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                         | First validation                                                       | Escalation trigger                                                                            |
| ----------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| English title or short-label change | `pnpm docs:check-i18n-glossary`                                        | Add glossary coverage before rerunning `scripts/docs-i18n`.                                   |
| Translation-pipeline code change    | `go test ./scripts/docs-i18n/...` when explicitly working the pipeline | Escalate to targeted locale reruns only when the task includes generated-output regeneration. |
| TM or glossary artifact churn only  | Inspect artifact ownership first                                       | Do not treat cache or generated-locale churn as proof of a behavior change by itself.         |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `364` (重命名/移动 3，修改 10，新增 38，删除 313).
- Target-existing path refs in active map: `48`; deleted/renamed-away refs kept only in transition artifacts: `316`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `docs/.i18n/README.md`
- `docs/.i18n/glossary.fa.json`
- `docs/.i18n/glossary.nl.json`
- `docs/.i18n/glossary.vi.json`
- `docs/.i18n/glossary.zh-TW.json`
- `scripts/docs-i18n/codex_command_unix.go`
- `scripts/docs-i18n/codex_command_windows.go`
- `scripts/docs-i18n/codex_command_windows_test.go`
- `scripts/docs-i18n/doc_chunked_raw.go`
- `scripts/docs-i18n/doc_mode_test.go`
- `scripts/docs-i18n/main.go`
- `scripts/docs-i18n/main_test.go`
- `scripts/docs-i18n/process.go`
- `scripts/docs-i18n/prompt.go`
- `scripts/docs-i18n/prompt_test.go`
- `scripts/docs-i18n/translator.go`
- `scripts/docs-i18n/translator_test.go`
- `scripts/docs-i18n/util.go`
- `scripts/docs-i18n/util_test.go`
<!-- version-diff-refresh:v2026.5.4:end -->
