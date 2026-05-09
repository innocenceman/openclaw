# Tts Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

| Change scope | First validation                                                                                | Escalation trigger                                                               | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------- |
| `tts/`       | pnpm test -- src/tts/tts.test.ts src/tts/provider-registry.test.ts src/tts/prepare-text.test.ts | Escalate to media/plugin tests when speech runtime or provider contracts change. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

## 2026-05-09 validation result

Result: `verified`. TTS tests passed inside the full context/cron/tts command.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.
