# Coding Conventions

**Analysis Date:** 2026-05-09

## Naming Patterns

**Files:**

- Use kebab-case for most TypeScript modules: `src/node-host/invoke-system-run.ts`, `src/gateway/http-endpoint-helpers.ts`, `src/test-utils/temp-home.ts`.
- Use suffixes to identify runtime and generated boundaries: `src/tts/tts.runtime.ts`, `src/config/schema.base.generated.ts`, `src/plugins/bundled-plugin-metadata.generated.ts`.
- Use colocated test names that mirror the source file: `src/commands/backup.ts` pairs with `src/commands/backup.test.ts`; `src/gateway/http-endpoint-helpers.ts` pairs with `src/gateway/http-endpoint-helpers.test.ts`.
- Use dotted test names for specific regression surfaces or generated split suites: `src/gateway/server.auth.default-token.suite.ts`, `src/agents/pi-embedded-subscribe.subscribe-embedded-pi-session.suppresses-message-end-block-replies-message-tool.test.ts`.
- Use app-platform conventions outside TypeScript: Swift tests use `*Tests.swift` in `apps/macos/Tests/OpenClawIPCTests/` and `apps/ios/Tests/`; Android unit tests use `*Test.kt` under `apps/android/app/src/test/java/`.

**Functions:**

- Use `camelCase` for functions and helpers: `backupCreateCommand` in `src/commands/backup.ts`, `resolveDefaultBorder` in `src/terminal/table.ts`, `resolveVitestIsolation` in `vitest.scoped-config.ts`.
- Use action-oriented names with domain nouns first when exported: `createUnitVitestConfig` in `vitest.unit.config.ts`, `handleGatewayPostJsonEndpoint` in `src/gateway/http-endpoint-helpers.ts`.
- Use `create*`, `resolve*`, `load*`, `read*`, `write*`, and `format*` prefixes consistently for factories, normalization, IO, and display helpers: `createTempHomeEnv` in `src/test-utils/temp-home.ts`, `loadIncludePatternsFromEnv` in `vitest.unit.config.ts`, `formatBackupCreateSummary` imported by `src/commands/backup.ts`.

**Variables:**

- Use `camelCase` locals and descriptive booleans: `isCI`, `isWindows`, `localWorkers`, `ciWorkers` in `vitest.config.ts`.
- Use `UPPER_SNAKE_CASE` for module constants that represent stable policy or filenames: `SHELL_ENV_EXPECTED_KEYS`, `OPEN_DM_POLICY_ALLOW_FROM_RE`, `CONFIG_AUDIT_LOG_FILENAME` in `src/config/io.ts`.
- Prefer explicit domain terms over abbreviations for shared code: `gatewayPort`, `archiveRoot`, `configuredShardCount`, `passthroughOptionArgs` in `scripts/test-parallel.mjs`.

**Types:**

- Use PascalCase for exported types and local structural types: `RuntimeEnv` in `src/runtime.ts`, `TableColumn` and `RenderTableOptions` in `src/terminal/table.ts`, `ConfigWriteAuditRecord` in `src/config/io.ts`.
- Prefer `type` aliases for data shapes and unions; interfaces are not the dominant pattern in sampled core files. Examples: `TableColumn` in `src/terminal/table.ts`, `EnvSnapshot` in `src/test-helpers/state-dir-env.test.ts`.
- Name discriminated union members with explicit status or kind literals: `ParseConfigJson5Result` in `src/config/io.ts` uses `{ ok: true } | { ok: false }`; table wrapping tokens in `src/terminal/table.ts` use `{ kind: "ansi" | "char" }`.

## Code Style

**Formatting:**

- Use Oxfmt for TypeScript, JavaScript, Markdown, and related files. Root scripts are `pnpm format`, `pnpm format:check`, and `pnpm format:fix` in `package.json`.
- Use 2-space indentation in TypeScript and JSON. Existing files such as `src/commands/backup.test.ts` and `vitest.config.ts` are formatted with compact object literals and trailing commas for multiline calls.
- Keep imports and multiline parameters wrapped by the formatter. Examples: multiline import groups in `src/config/io.ts` and `src/commands/backup.test.ts`; wrapped function signatures in `src/terminal/table.ts`.
- Swift uses SwiftFormat from `.swiftformat` with Swift 6.2, 4-space indentation, 120-column target width, and grouped imports/testable imports. Android uses ktlint through `apps/android/app/build.gradle.kts`.

**Linting:**

- Use Oxlint with type-aware checks via `pnpm lint` and the combined gate `pnpm check`. Configuration lives in `.oxlintrc.json`.
- Treat `correctness`, `perf`, and `suspicious` as errors. `typescript/no-explicit-any` is an error; only use a narrow inline suppression with a reason when a boundary cannot be typed, as seen in `test/setup.ts`.
- Use curly braces for conditionals; `.oxlintrc.json` sets `curly` to error.
- Respect custom guardrail scripts in `package.json` for plugin boundaries, webhook body reads, auth pairing scope, raw channel fetches, and UI window opening. Examples include `scripts/check-extension-plugin-sdk-boundary.mjs`, `scripts/check-webhook-auth-body-order.mjs`, and `scripts/check-no-raw-window-open.mjs`.
- Swift linting is configured in `.swiftlint.yml` for `apps/macos/Sources`; Android lint and ktlint are configured in `apps/android/app/build.gradle.kts` with warnings as errors.

## Import Organization

**Order:**

1. Node built-ins first, using `node:` specifiers: `node:fs/promises`, `node:os`, `node:path` in `src/commands/backup.test.ts`; `node:crypto`, `node:fs`, `node:os` in `src/config/io.ts`.
2. External packages next: `tar` and `vitest` in `src/commands/backup.test.ts`; `json5` in `src/config/io.ts`; `vitest/config` in Vitest configs.
3. Internal relative imports last, generally with `.js` extensions for production TypeScript under NodeNext: `../infra/backup-create.js` in `src/commands/backup.ts`, `../runtime.js` in `src/commands/backup.ts`.
4. Type-only imports are grouped with `type` specifiers instead of runtime imports where possible: `import { type RuntimeEnv, writeRuntimeJson } from "../runtime.js"` in `src/commands/backup.ts`; `import type { IncomingMessage, ServerResponse } from "node:http"` in `src/gateway/http-endpoint-helpers.test.ts`.

**Path Aliases:**

- Public plugin SDK aliases are defined in `tsconfig.json` and `vitest.config.ts`: `openclaw/plugin-sdk`, `openclaw/plugin-sdk/*`, and `openclaw/extension-api`.
- Extension production code should use `openclaw/plugin-sdk/*` plus local barrels such as `api.ts` or `runtime-api.ts`; do not reach into `src/**`, `src/plugin-sdk-internal/**`, or another extension's `src/**`.
- Avoid mixing static and dynamic imports for the same module on production paths. When lazy loading is required, use a dedicated `*.runtime.ts` boundary such as `src/tts/tts.runtime.ts`.

## Error Handling

**Patterns:**

- Throw `Error` with clear user-facing messages for invalid inputs and impossible states: `src/agents/tools/common.ts`, `src/agents/tools/gateway.ts`, and `src/agents/tools/pdf-tool.ts`.
- Preserve causes when wrapping parse or URL errors: `src/agents/tools/gateway.ts` throws with `{ cause: error }` for invalid gateway URLs.
- Use explicit result objects for recoverable command or protocol outcomes. Examples include `BackupCreateResult` in `src/infra/backup-create.ts`, `{ ok: true } | { ok: false }` in `src/config/io.ts`, and JSON tool result helpers in `src/agents/tools/common.ts`.
- Normalize unknown caught values before reporting: code commonly uses `err instanceof Error ? err.message : String(err)` in `src/agents/tools/nodes-tool.ts` and `src/agents/tools/gateway.ts`.
- In CLI command functions, return the domain result and emit human or JSON output through the injected runtime. `backupCreateCommand` in `src/commands/backup.ts` calls `writeRuntimeJson` for JSON and `runtime.log` for text.

## Logging

**Framework:** `tslog` plus subsystem helpers, with console/error use concentrated in scripts, CLI/runtime boundaries, and tests.

**Patterns:**

- Prefer injected runtime logging for commands instead of direct `console.log`: `backupCreateCommand` in `src/commands/backup.ts` accepts `RuntimeEnv` and uses `runtime.log`.
- Use script stderr/stdout for test runners and maintenance scripts: `scripts/test-parallel.mjs` reports scheduling and fatal argument errors via `console.error`.
- Use logging subsystem modules for runtime services; tests mock these where needed, such as `src/memory/qmd-manager.test.ts` mocking `src/logging/subsystem.ts`.
- Status and TTY output should use shared helpers such as `src/terminal/table.ts`, `src/terminal/palette.ts`, and `src/cli/progress.ts` rather than ad hoc ANSI or spinner code.

## Comments

**When to Comment:**

- Add comments for non-obvious policy, platform behavior, or performance tradeoffs. Examples: Windows `.cmd` spawn behavior in `scripts/test-parallel.mjs`, ANSI/OSC-8 wrapping details in `src/terminal/table.ts`, coverage exclusions in `vitest.config.ts`.
- Keep comments concise and attached to the decision they justify. Avoid restating obvious code mechanics.
- For generated or baseline files, document source and update path near the generator rather than editing generated output directly.

**JSDoc/TSDoc:**

- TSDoc appears selectively for exported options or subtle fields, not every function. Example: `ConfigWriteOptions` in `src/config/io.ts` documents read-time env snapshots.
- Prefer self-documenting names for internal helpers; add TSDoc only when a future caller needs contract details.

## Function Design

**Size:** Keep most functions small and extract helper functions for parsing, normalization, and formatting. Larger files may exist for integrated flows, but new code should follow the extracted-helper style visible in `src/terminal/table.ts` and `vitest.scoped-config.ts`.

**Parameters:** Prefer typed object parameters when a function has multiple options or optional values. Examples: `createScopedVitestConfig` in `vitest.scoped-config.ts`, `resolveSlackStubReplyToMode` in `test/setup.ts`, and `imageResult` in `src/agents/tools/common.ts`.

**Return Values:** Return typed domain values instead of mutating global state. Command code may also write to the injected `RuntimeEnv`. Tests often use helper functions like `createRuntime` in `src/commands/backup.test.ts` to assert those side effects.

## Module Design

**Exports:** Export public functions and types explicitly from implementation modules. Use `export type` re-exports for compatibility seams, as in `src/commands/backup.ts` and `src/config/io.ts`.

**Barrel Files:** Use barrels for stable public surfaces, especially `openclaw/plugin-sdk/*` and local extension API barrels. Avoid importing core internals across package boundaries.

**Dependency Injection:** Prefer injected dependencies or small seam modules for testability. Command modules accept `RuntimeEnv`; tests mock adjacent modules via `vi.mock`, as in `src/commands/backup.test.ts` and `src/gateway/http-endpoint-helpers.test.ts`.

---

_Convention analysis: 2026-05-09_
