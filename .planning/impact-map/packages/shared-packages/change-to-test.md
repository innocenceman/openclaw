# Shared Packages Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

| Change type                             | First validation                                                                                                                                                                  | Escalation trigger                           |
| --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- |
| Package metadata or export shim changed | Inspect the package leaf docs and run release/package targeted tests such as `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts`. | Run pack/install smoke before publishing.    |
| Binary metadata changed                 | Confirm the declared `bin` target exists and forwards to the intended CLI.                                                                                                        | Run npm pack/install in a temp project.      |
| Postinstall warning changed             | Inspect install output in package smoke.                                                                                                                                          | Include release verification before publish. |

## Evidence limits

G009 validation found missing declared CLI entry files for both package shims. Rerun the package bin/export audit, package release tests, npm pack dry-runs, and standard release check before promoting.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `85` (重命名/移动 8，修改 44，删除 7，新增 26).
- Target-existing path refs in active map: `70`; deleted/renamed-away refs kept only in transition artifacts: `15`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
