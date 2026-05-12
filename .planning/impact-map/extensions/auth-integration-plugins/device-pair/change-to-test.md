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

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `12` (修改 8，新增 4).
- Target-existing path refs in active map: `12`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/device-pair/index.test.ts`
- `extensions/device-pair/index.ts`
- `extensions/device-pair/notify.test.ts`
- `extensions/device-pair/notify.ts`
- `extensions/device-pair/openclaw.plugin.json`
- `extensions/device-pair/pair-command-auth.test.ts`
- `extensions/device-pair/pair-command-auth.ts`
- `src/cli/qr-cli.test.ts`
- `src/infra/device-pairing.test.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
