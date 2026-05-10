# Generated Baselines File Roles

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| File or path                                                                       | Role                       | Evidence state             | Impact notes                                                                                                |
| ---------------------------------------------------------------------------------- | -------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `scripts/generate-config-doc-baseline.ts` and `src/config/doc-baseline.ts`         | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Intentional config-surface changes must stay paired with `pnpm config:docs:gen` / `pnpm config:docs:check`. |
| `scripts/generate-plugin-sdk-api-baseline.ts` and `src/plugin-sdk/api-baseline.ts` | `exceptioned-deep-partial` | `exceptioned-deep-partial` | Public SDK changes must stay paired with `pnpm plugin-sdk:api:gen` / `pnpm plugin-sdk:api:check`.           |

## Update rule

Keep drift-check pairs adjacent. If a new generated baseline is introduced, add both the artifact path and its paired generator/check surfaces here before treating it as part of the trusted baseline program.
