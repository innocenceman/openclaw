# ACP Control Plane Session Manager Code Paths

Coverage: `verified`
Freshness: 2026-05-08 ACP verified wave

- Primary paths: `src/acp/control-plane/**`
- Runtime handoff: ACP requests enter the control-plane manager before runtime sessions, spawn, and control operations are dispatched.
