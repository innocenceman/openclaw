# Docs plugins Change-to-Test Matrix

Coverage: `exceptioned-deep-partial`
Freshness: 2026-05-08 repo-native inspection only

| Change type                                          | First validation                             | Escalation trigger                                                                        |
| ---------------------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Existing page copy, examples, or frontmatter changed | `pnpm check:docs`                            | Escalate to product-specific tests only when the docs change is coupled to code behavior. |
| Page added, renamed, moved, or redirect/nav changed  | `pnpm docs:check-links` and `pnpm docs:list` | Update `docs/docs.json` in the same change when Mintlify route ownership changes.         |
| New English title or short label introduced          | `pnpm docs:check-i18n-glossary`              | Add glossary coverage before any zh-CN rerun.                                             |

## Validation evidence

No commands above were executed for this leaf during Wave 4 promotion. They were selected from the current repo tree, root `package.json` scripts, and adjacent generator/test files without claiming fresh runtime success.

<!-- version-diff-refresh:v2026.4.24:start -->

## v2026.4.24 refresh validation focus

- Changed paths: `28` (修改 17，新增 11).
- Target-existing path refs in active map: `28`; deleted/renamed-away refs kept only in transition artifacts: `0`.
- Risk: `medium`; compatibility: `docs-only`.
- First validation move: Validate documentation or generated baseline drift first; source runtime tests are secondary unless the changed paths include executable files.
- Version-diff validation must keep active `.planning/impact-map` free of exact target-deleted path references.

<!-- version-diff-refresh:v2026.4.24:end -->

<!-- version-diff-refresh:v2026.5.4:start -->

## Version diff test focus: v2026.5.4

- Risk: `medium`
- Compatibility: `docs-only`
- Prioritize regression checks around the target-existing changed paths below and use the compatibility report for cross-leaf review order.

- `docs/plugins/architecture-internals.md`
- `docs/plugins/architecture.md`
- `docs/plugins/building-plugins.md`
- `docs/plugins/bundles.md`
- `docs/plugins/codex-computer-use.md`
- `docs/plugins/codex-harness.md`
- `docs/plugins/community.md`
- `docs/plugins/compatibility.md`
- `docs/plugins/dependency-resolution.md`
- `docs/plugins/google-meet.md`
- `docs/plugins/hooks.md`
- `docs/plugins/manage-plugins.md`
- `docs/plugins/manifest.md`
- `docs/plugins/memory-lancedb.md`
- `docs/plugins/memory-wiki.md`
- `docs/plugins/message-presentation.md`
- `docs/plugins/plugin-inventory.md`
- `docs/plugins/reference.md`
- `docs/plugins/reference/acpx.md`
- `docs/plugins/reference/alibaba.md`
- `docs/plugins/reference/amazon-bedrock-mantle.md`
- `docs/plugins/reference/amazon-bedrock.md`
- `docs/plugins/reference/anthropic-vertex.md`
- `docs/plugins/reference/anthropic.md`
- `docs/plugins/reference/arcee.md`
- `docs/plugins/reference/azure-speech.md`
- `docs/plugins/reference/bluebubbles.md`
- `docs/plugins/reference/bonjour.md`
- `docs/plugins/reference/brave.md`
- `docs/plugins/reference/browser.md`
- `docs/plugins/reference/byteplus.md`
- `docs/plugins/reference/cerebras.md`
- `docs/plugins/reference/chutes.md`
- `docs/plugins/reference/cloudflare-ai-gateway.md`
- `docs/plugins/reference/codex.md`
- `docs/plugins/reference/comfy.md`
- `docs/plugins/reference/copilot-proxy.md`
- `docs/plugins/reference/deepgram.md`
- `docs/plugins/reference/deepinfra.md`
- `docs/plugins/reference/deepseek.md`
- … plus 107 more target-existing changed paths.
<!-- version-diff-refresh:v2026.5.4:end -->
