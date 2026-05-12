# Network Change-to-Test

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

| Change scope | First validation                                                                                                                                | Escalation trigger                                                                   | Notes                 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------- |
| `network/`   | pnpm test -- src/infra/net/fetch-guard.ssrf.test.ts src/infra/net/proxy-fetch.test.ts src/infra/net/ssrf.test.ts src/infra/net/hostname.test.ts | Escalate to media/security tests when remote fetch policy or proxy behavior changes. | Residual Wave 1R unit |

## Validation evidence

Use recorded evidence from the parent module ledger unless this leaf has fresher local validation output.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `13` (修改 10，新增 3).
- Target-existing path refs in active map: `13`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `behavior-change`.
- First validation move: Run targeted tests for the changed paths and inspect compatibility-sensitive call sites before broad validation.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `src/infra/net/fetch-guard.ssrf.test.ts`
- `src/infra/net/fetch-guard.ts`
- `src/infra/net/http-connect-tunnel.test.ts`
- `src/infra/net/http-connect-tunnel.ts`
- `src/infra/net/proxy-env.test.ts`
- `src/infra/net/proxy-env.ts`
- `src/infra/net/proxy-fetch.test.ts`
- `src/infra/net/proxy-fetch.ts`
- `src/infra/net/proxy/active-proxy-state.ts`
- `src/infra/net/proxy/external-proxy.e2e.test.ts`
- `src/infra/net/proxy/proxy-lifecycle.test.ts`
- `src/infra/net/proxy/proxy-lifecycle.ts`
- `src/infra/net/proxy/proxy-validation.test.ts`
- `src/infra/net/proxy/proxy-validation.ts`
- `src/infra/net/undici-family-policy.ts`
- `src/infra/net/undici-global-dispatcher.test.ts`
- `src/infra/net/undici-global-dispatcher.ts`
- `src/infra/net/undici-runtime.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
