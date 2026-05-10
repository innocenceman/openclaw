# Export Html File Roles

Coverage: `verified`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

| Representative paths                  | Responsibility                                                                  | First validation                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `src/auto-reply/reply/export-html/**` | Session/export HTML templates and security-sensitive transcript export shaping. | pnpm test -- src/auto-reply/reply/export-html/template.security.test.ts |
