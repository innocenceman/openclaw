# Web UI Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                         | First validation                                                       | Escalation trigger                                                                              |
| ----------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| UI controller/view behavior changed | `pnpm test:ui`                                                         | Escalate to `pnpm ui:build` when the change affects shipped control-ui output or bundle wiring. |
| Build/test harness changed          | `pnpm test:ui` and/or `pnpm ui:build` depending on the touched surface | Escalate to repo-wide `pnpm build` when published surfaces or bundle boundaries change.         |
| UI shell/assets/styles changed      | `pnpm ui:build` plus the nearest targeted UI test when available       | Escalate to browser smoke when navigation, config, or chat presentation changes broadly.        |

## Validation evidence

No UI tests or builds were run while promoting this subtree. Commands were verified from root `package.json` and `ui/package.json`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `8` (新增 4，修改 4).
- Target-existing path refs in active map: `8`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
