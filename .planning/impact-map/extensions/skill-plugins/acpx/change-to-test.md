# acpx Skill Plugin Change-to-Test Matrix

Coverage: `partial`
Freshness: 2026-05-07 repo-native structural inspection only

| Change type                    | First validation                                                | Escalation trigger                                         |
| ------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------- |
| Manifest/config changed        | `pnpm test:contracts:plugins` and affected plugin catalog tests | Escalate to docs/UI/config checks for user-facing changes. |
| Runtime implementation changed | `pnpm test -- extensions/acpx` or nearest targeted test         | `pnpm test:extensions` when shared helpers are touched.    |
| Package/build surface changed  | `pnpm build` when published or lazy-loaded surface changes      | Run plugin release checks if package metadata changes.     |

## Validation evidence

No product tests/builds/graph indexes were run while creating this leaf. Add dated command output before promoting beyond `partial`.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `41` (新增 13，重命名/移动 1，修改 13，删除 14).
- Target-existing path refs in active map: `27`; deleted/renamed-away refs kept only in transition artifacts: `14`.
- Risk: `high`; compatibility: `behavior-change`.
- First validation move: Run the closest targeted tests for this leaf before any broad suite, then add integration or contract coverage for the owning boundary.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `high`
- Compatibility: `behavior-change`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `extensions/acpx/AGENTS.md`
- `extensions/acpx/index.test.ts`
- `extensions/acpx/index.ts`
- `extensions/acpx/openclaw.plugin.json`
- `extensions/acpx/package.json`
- `extensions/acpx/register.runtime.ts`
- `extensions/acpx/runtime-api.ts`
- `extensions/acpx/skills/acp-router/SKILL.md`
- `extensions/acpx/src/claude-agent-acp-completion.test.ts`
- `extensions/acpx/src/codex-auth-bridge.test.ts`
- `extensions/acpx/src/codex-auth-bridge.ts`
- `extensions/acpx/src/config-schema.ts`
- `extensions/acpx/src/config.test.ts`
- `extensions/acpx/src/config.ts`
- `extensions/acpx/src/manifest.test.ts`
- `extensions/acpx/src/runtime-internals/mcp-proxy.test.ts`
- `extensions/acpx/src/runtime.test.ts`
- `extensions/acpx/src/runtime.ts`
- `extensions/acpx/src/service.test.ts`
- `extensions/acpx/src/service.ts`
<!-- version-diff-refresh:v2026.5.4:end -->
