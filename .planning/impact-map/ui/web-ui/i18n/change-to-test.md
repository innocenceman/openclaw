# Web UI i18n Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                     | First validation                                                                | Escalation trigger                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Locale registry/runtime changed | `pnpm test:ui`                                                                  | Escalate to `pnpm ui:build` when lazy-import boundaries or bundled locale output changes.         |
| Translation resource changed    | `pnpm test:ui` plus spot-check the affected locale in the browser when feasible | Escalate to broader UI smoke when translated navigation/config text changes across multiple tabs. |

## Validation evidence

No UI tests or builds were run while promoting this leaf. Commands were verified from root `package.json` and `ui/package.json`.
