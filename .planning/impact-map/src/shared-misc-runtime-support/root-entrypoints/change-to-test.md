# Root Entrypoints Change-to-Test Ladder

Coverage: `verified`
Freshness: 2026-05-09 G005 src capabilities/shared verified wave

1. Run targeted colocated tests such as `pnpm test -- src/entry.test.ts src/index.test.ts src/version.test.ts src/polls.test.ts`.
2. Run `pnpm build` when root exports, runtime entrypoints, or package output can change.

## 2026-05-09 validation result

Result: `verified`. Root entrypoint/docker metadata tests passed.

Raw logs live under `../../evidence/src-capabilities-shared-verified-wave-2026-05-09/logs/`.
