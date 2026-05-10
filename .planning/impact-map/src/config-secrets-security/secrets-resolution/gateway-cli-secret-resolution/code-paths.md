# Gateway CLI Secret Resolution Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/cli/command-secret-gateway.ts`, `src/cli/command-secret-targets.ts`, `src/cli/secrets-cli.ts`, `src/cli/message-secret-scope.ts`, `src/secrets/command-config.ts`
- Runtime handoff: CLI commands resolve secret refs through gateway or command target helpers before invoking runtime operations.
<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 target-existing changed source paths

This target refresh maps `8` changed path(s) to this final leaf. `8` path(s) still exist in the target source and are listed below. Deleted or renamed-away paths remain only in version-diff artifacts, not active impact-map. Status counts: `{'M': 7, 'A': 1}`.

- `src/cli/command-secret-gateway.test.ts`
- `src/cli/command-secret-gateway.ts`
- `src/cli/command-secret-targets.import.test.ts`
- `src/cli/command-secret-targets.test.ts`
- `src/cli/command-secret-targets.ts`
- `src/cli/message-secret-scope.ts`
- `src/secrets/command-config.test.ts`
- `src/secrets/command-config.ts`

<!-- version-diff-refresh:v2026.4.24:end -->
