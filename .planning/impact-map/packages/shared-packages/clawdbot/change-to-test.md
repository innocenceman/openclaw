# Package clawdbot Change-to-Test

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-09 G009 targeted package validation

| Change                     | First checks                                                                        | Broader validation                                                     |
| -------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| Change `bin` metadata      | Confirm declared `packages/clawdbot/bin/clawdbot.js` exists and forwards correctly. | Run npm pack/install smoke in an isolated temp project before release. |
| Change postinstall warning | Run a package install/pack smoke and inspect output.                                | Include release/package verification before publishing.                |

## Minimum evidence for `verified`

Do not promote to `verified` until a fresh package pack/install or release-check output is recorded.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `3` (删除 3).
- Target-existing path refs in active map: `0`; deleted/renamed-away refs kept only in transition artifacts: `3`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
