# Docs assets Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type | First validation | Escalation trigger |
| --- | --- | --- |
| Asset path, filename, or extension changed | `pnpm docs:check-links` | Do a manual page render check when screenshots or diagrams changed materially. |
| Only the visual content changed at the same path | Inspect the owning page plus nearby references | Escalate to a manual docs render review when UI/state fidelity matters. |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.
