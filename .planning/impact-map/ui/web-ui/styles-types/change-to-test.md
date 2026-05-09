# Web UI Styles and Types Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                          | First validation                   | Escalation trigger                                                                                                      |
| ------------------------------------ | ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Global or feature stylesheet changed | `pnpm ui:build`                    | Escalate to `pnpm test:ui` or browser smoke when the style change affects interactive layout or view logic assumptions. |
| UI type declaration changed          | `pnpm test:ui` and `pnpm ui:build` | Escalate to repo-wide `pnpm build` when import typing or bundled UI output changes.                                     |

## Validation evidence

No UI tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `ui/package.json`.
