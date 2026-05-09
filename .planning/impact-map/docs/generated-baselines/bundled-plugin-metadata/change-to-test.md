# Bundled Plugin Metadata Baselines Change-to-Test Matrix

Coverage: `verified`
Freshness: 2026-05-08 repo-native inspection only

| Change type                               | First validation                                       | Escalation trigger                                                                                         |
| ----------------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Bundled plugin metadata generator changed | `pnpm check:bundled-plugin-metadata`                   | Escalate to build/runtime/plugin catalog checks when the downstream runtime artifact changes meaningfully. |
| Generated metadata artifact changed       | Trace back to the source manifest/catalog change first | Run adjacent plugin metadata tests when the artifact change is intentional.                                |

## Validation evidence

No commands above were executed during Wave 4. They were selected from the current repo tree, package-script wiring, and adjacent tests without claiming fresh runtime success.
