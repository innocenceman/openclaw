# Security Guards Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope       | First validation                                                                                                                         | Escalation trigger                                                                                                 | Notes                    |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| `security-guards/` | pnpm test -- src/security/audit.test.ts src/security/fix.test.ts src/security/temp-path-guard.test.ts src/security/skill-scanner.test.ts | Escalate to media/channel/network tests when SSRF/path policy changes affect remote fetch or file access behavior. | Priority completion unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.
