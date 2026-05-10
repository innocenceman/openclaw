# Secret Ref Contracts Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/config/types.secrets.ts`, `src/config/zod-schema.secret-input-validation.ts`, `src/secrets/ref-contract.ts`, `src/secrets/resolve-secret-input-string.ts`, `src/secrets/json-pointer.ts`, `src/secrets/secret-value.ts`, `src/secrets/shared.ts`, `src/secrets/runtime-shared.ts`
- Runtime handoff: Config and CLI inputs normalize into secret refs before target registry, runtime collection, or gateway resolution consumes them.
