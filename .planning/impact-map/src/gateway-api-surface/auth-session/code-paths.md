# Auth Session Code Paths

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 G003 GitNexus/code-review-graph/test wave

- Primary paths: `src/gateway/auth.ts`, `src/gateway/auth-mode-policy.ts`, `src/gateway/connection-auth.ts`, `src/gateway/device-auth.ts`, `src/gateway/origin-check.ts`, `src/gateway/probe-auth.ts`
- Runtime handoff: Auth/session guards run ahead of serving and method dispatch to gate every incoming request.
