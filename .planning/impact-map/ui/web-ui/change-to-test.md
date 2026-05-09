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
