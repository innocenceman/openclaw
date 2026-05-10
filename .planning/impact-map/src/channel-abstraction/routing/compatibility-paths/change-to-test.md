# Compatibility Paths Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope           | First validation                                                                                                                                    | Escalation trigger                                                                                                             | Notes                    |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `compatibility-paths/` | No dedicated colocated tests were observed; start with target-resolution tests and the nearest channel/binding consumer tests for the touched file. | Escalate to channels/plugins and outbound-routing tests when compatibility logic changes target fallbacks or warning surfaces. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
