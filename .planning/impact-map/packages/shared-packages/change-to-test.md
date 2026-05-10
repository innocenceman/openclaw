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
