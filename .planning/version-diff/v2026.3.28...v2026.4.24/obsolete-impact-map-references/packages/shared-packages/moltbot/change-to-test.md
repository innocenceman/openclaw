# Package moltbot Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

| Change                      | First checks                                                                                                    | Broader validation                                                                                  |
| --------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Change exports or root shim | Inspect `packages/moltbot/package.json` + `packages/moltbot/index.js`; run package boundary tests if available. | `pnpm test -- test/openclaw-npm-release-check.test.ts test/openclaw-npm-postpublish-verify.test.ts` |
| Change `bin` metadata       | Confirm declared `packages/moltbot/bin/moltbot.js` exists and forwards correctly.                               | Run npm pack/install smoke in an isolated temp project before release.                              |
| Change postinstall warning  | Run a package install/pack smoke and inspect output.                                                            | Include release/package verification before publishing.                                             |

## Minimum evidence for `verified`

Do not promote to `verified` until a fresh package pack/install or release-check output is recorded.
