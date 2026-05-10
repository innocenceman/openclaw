# Device Pairing Plugin Change-to-Test Matrix

Coverage: `deep-partial`
Freshness: 2026-05-08 repo-native structural inspection only

| Change type                                  | First validation                                    | Escalation trigger                                                                       |
| -------------------------------------------- | --------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| Plugin pairing flow changed                  | `pnpm test -- extensions/device-pair/index.test.ts` | Add broader gateway/control-ui tests when pairing authz or browser/gateway flows change. |
| QR/setup-code behavior changed               | `pnpm test -- src/cli/qr-cli.test.ts`               | Escalate to channel send tests if QR delivery semantics change for specific channels.    |
| Core pairing store/approval behavior changed | `pnpm test -- src/infra/device-pairing.test.ts`     | Add gateway authz/control-ui suites when approval semantics or server methods change.    |

## Validation evidence

No product tests/builds were run while deepening this leaf. The commands above were selected from current local test files and root `package.json` scripts.
