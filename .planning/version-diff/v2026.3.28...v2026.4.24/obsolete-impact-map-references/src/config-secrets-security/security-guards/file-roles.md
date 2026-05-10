# Security Guards File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                        | Responsibility                                                                                   | First validation                                                                                                                         |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `src/security/**`, `src/infra/net/ssrf*.ts` | Audit/fix helpers, safe-regex/temp-path guards, skill scanning, and security policy enforcement. | pnpm test -- src/security/audit.test.ts src/security/fix.test.ts src/security/temp-path-guard.test.ts src/security/skill-scanner.test.ts |
