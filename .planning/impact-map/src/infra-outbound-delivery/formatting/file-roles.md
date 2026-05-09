# Formatting File Roles

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Representative paths                                                                                                                      | Responsibility                                                                      | First validation                                                                                                                                                |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/infra/outbound/envelope.ts`, `src/infra/outbound/format.ts`, `src/infra/outbound/payloads.ts`, `src/infra/outbound/sanitize-text.ts` | Envelope, payload, text sanitization, and formatting helpers for outbound delivery. | pnpm test -- src/infra/outbound/envelope.test.ts src/infra/outbound/format.test.ts src/infra/outbound/payloads.test.ts src/infra/outbound/sanitize-text.test.ts |
