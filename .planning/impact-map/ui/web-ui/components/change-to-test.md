# Web UI Components Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                     | First validation | Escalation trigger                                                                             |
| ----------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------------------- |
| Controller or view logic changed                | `pnpm test:ui`   | Escalate to `pnpm ui:build` when the change affects bundled output or route-wide rendering.    |
| Chat, navigation, or app-shell behavior changed | `pnpm test:ui`   | Escalate to broader browser smoke when the change crosses multiple tabs or shared shell state. |
| Local settings persistence changed              | `pnpm test:ui`   | Escalate to manual browser-state verification when token/theme/session hydration changes.      |

## Validation evidence

No UI tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `ui/package.json`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `83` (修改 63，新增 20).
- Target-existing path refs in active map: `83`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->
