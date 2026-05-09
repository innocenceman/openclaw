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
