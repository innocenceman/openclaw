# Secret Target Registry Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/secrets/target-registry*.ts`, `src/secrets/credential-matrix.ts`
- Runtime handoff: Secret refs resolve against known targets before runtime or command surfaces decide where secret values apply.
