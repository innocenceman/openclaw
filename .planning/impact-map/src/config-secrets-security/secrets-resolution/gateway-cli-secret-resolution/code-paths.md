# Gateway CLI Secret Resolution Code Paths

Coverage: `verified`
Freshness: 2026-05-09 G004 channel/plugin/infra/config verified wave

- Primary paths: `src/cli/command-secret-gateway.ts`, `src/cli/command-secret-targets.ts`, `src/cli/secrets-cli.ts`, `src/cli/message-secret-scope.ts`, `src/secrets/command-config.ts`
- Runtime handoff: CLI commands resolve secret refs through gateway or command target helpers before invoking runtime operations.
